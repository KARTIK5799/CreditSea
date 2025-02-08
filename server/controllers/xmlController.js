import xml2js from "xml2js";
import CreditReport from "../model/CreditReport.js";

const parser = new xml2js.Parser({ explicitArray: false });

export const uploadXml = async (req, res) => {
    try {
        const xmlData = req.file.buffer.toString();
        const parsedData = await parser.parseStringPromise(xmlData);

        const applicantDetails = parsedData?.INProfileResponse?.Current_Application?.Current_Application_Details?.Current_Applicant_Details || {};
        const creditSummary = parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Credit_Account || {};
        const balanceSummary = parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Total_Outstanding_Balance || {};
        const accountsInfo = parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Account_DETAILS || [];

        let panNumber = "Unknown";
        if (Array.isArray(accountsInfo)) {
            for (const account of accountsInfo) {
                if (account?.CAIS_Holder_ID_Details?.Income_TAX_PAN) {
                    panNumber = account.CAIS_Holder_ID_Details.Income_TAX_PAN;
                    break; 
                }
            }
        }
        if (panNumber === "Unknown") {
            panNumber = applicantDetails.Income_TAX_PAN || "Unknown";
        }

        const creditCards = accountsInfo.map(acc => ({
            creditCardNumber: acc?.Account_Number || "Unknown",
            bankName: acc?.Subscriber_Name?.trim() || "Unknown",
            address: acc?.CAIS_Holder_Address_Details?.First_Line_Of_Address_non_normalized?.trim() || "Unknown",
            accountNumber: acc?.Account_Number || "Unknown",
            amountOverdue: parseInt(acc?.Amount_Past_Due || 0),
            currentBalance: parseInt(acc?.Current_Balance || 0),
        }));

        const extractedData = {
            name: `${applicantDetails.First_Name || ""} ${applicantDetails.Last_Name || ""}`.trim() || "Unknown",
            mobile: applicantDetails.MobilePhoneNumber || "Unknown",
            pan: panNumber,
            creditScore: parseInt(parsedData?.INProfileResponse?.SCORE?.BureauScore || 0),
            totalAccounts: parseInt(creditSummary.CreditAccountTotal || 0),
            activeAccounts: parseInt(creditSummary.CreditAccountActive || 0),
            closedAccounts: parseInt(creditSummary.CreditAccountClosed || 0),
            currentBalance: parseInt(balanceSummary.Outstanding_Balance_All || 0),
            securedAmount: parseInt(balanceSummary.Outstanding_Balance_Secured || 0),
            unsecuredAmount: parseInt(balanceSummary.Outstanding_Balance_UnSecured || 0),
            last7DaysEnquiries: parseInt(parsedData?.INProfileResponse?.TotalCAPS_Summary?.CAPS?.Last7DaysCreditInquiries || 0),
            creditCards: creditCards
        };

        const existingUser = await CreditReport.findOne({ name: extractedData.name, mobile: extractedData.mobile });

        if (existingUser) {
            await CreditReport.updateOne(
                { name: extractedData.name, mobile: extractedData.mobile },
                { $set: extractedData }
            );
            return res.status(200).json({ message: "User record updated successfully", data: extractedData });
        } else {
            const report = new CreditReport(extractedData);
            await report.save();
            return res.status(201).json({ message: "New XML record added successfully", data: report });
        }

    } catch (error) {
        console.error("XML Processing Error:", error);
        res.status(500).json({ message: "Error processing XML file", error: error.message });
    }
};


export const getReport = async (req, res) => {
    try {
        const creditReports = await CreditReport.find();
        res.status(200).json(creditReports);
    } catch (error) {
        console.error("Fetching Data Error:", error);
        res.status(500).json({ message: "Error Fetching data", error: error.message });
    }
};
