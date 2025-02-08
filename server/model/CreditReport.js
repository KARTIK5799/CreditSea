import mongoose from "mongoose";


const creditReportSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    pan: String,
    creditScore: Number,
    totalAccounts: Number,
    activeAccounts: Number,
    closedAccounts: Number,
    currentBalance: Number,
    securedAmount: Number,
    unsecuredAmount: Number,
    last7DaysEnquiries: Number,
    creditCards: [String],
    banks: [String],
    addresses: [String],
    accountNumbers: [String],
    overdueAmount: Number,
});

export default mongoose.model("CreditReport", creditReportSchema)