import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import CreditCardComponent from "./CreditCardComponent"; 
import PropTypes from "prop-types";

const ReportCard = ({ record }) => {
  const {
    _id,
    name,
    mobile,
    pan,
    creditScore,
    totalAccounts,
    activeAccounts,
    closedAccounts,
    currentBalance,
    securedAmount,
    unsecuredAmount,
    last7DaysEnquiries,
    creditCards = [],
  } = record;

  const [showCards, setShowCards] = useState(false); // Ensuring the state is properly defined

  return (
    <div className="relative bg-white/30 backdrop-blur-lg shadow-xl border w-full border-gray-200 rounded-2xl p-6 transition-all duration-300 ">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <FaUserCircle className="text-gray-500 text-6xl drop-shadow-lg" />
          <span className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600">ID: {_id}</p>
          <p className="text-sm text-gray-600">Mobile: {mobile}</p>
          <p className="text-sm text-gray-600">PAN: {pan}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 text-sm">
        <p>
          <span className="font-semibold">Credit Score:</span> 
          <span className={`ml-2 px-2 py-1 rounded-md ${creditScore >= 750 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {creditScore}
          </span>
        </p>
        <p>
          <span className="font-semibold">Total Accounts:</span> {totalAccounts}
        </p>
        <p>
          <span className="font-semibold">Active Accounts:</span> {activeAccounts}
        </p>
        <p>
          <span className="font-semibold">Closed Accounts:</span> {closedAccounts}
        </p>
        <p>
          <span className="font-semibold">Current Balance:</span> ₹{currentBalance.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Secured Amount:</span> ₹{securedAmount.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Unsecured Amount:</span> ₹{unsecuredAmount.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Enquiries (Last 7 Days):</span> {last7DaysEnquiries}
        </p>
      </div>

      {/* Toggle Credit Cards */}
      {creditCards.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setShowCards(!showCards)}
            className="flex items-center justify-center w-full py-2 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium transition-all duration-300 "
          >
            {showCards ? "Hide Credit Cards" : "View Credit Cards"}
            {showCards ? (
              <MdExpandLess className="ml-2 text-xl" />
            ) : (
              <MdExpandMore className="ml-2 text-xl" />
            )}
          </button>

          {showCards && (
            <div className="mt-4 gap-5 flex justify-center flex-wrap transition-opacity duration-300">
              {creditCards.map((card, index) => (
                <CreditCardComponent key={index} card={card} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ReportCard.propTypes = {
  record: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    pan: PropTypes.string.isRequired,
    creditScore: PropTypes.number.isRequired,
    totalAccounts: PropTypes.number.isRequired,
    activeAccounts: PropTypes.number.isRequired,
    closedAccounts: PropTypes.number.isRequired,
    currentBalance: PropTypes.number.isRequired,
    securedAmount: PropTypes.number.isRequired,
    unsecuredAmount: PropTypes.number.isRequired,
    last7DaysEnquiries: PropTypes.number.isRequired,
    creditCards: PropTypes.arrayOf(
      PropTypes.shape({
        creditCardNumber: PropTypes.string.isRequired,
        bankName: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        accountNumber: PropTypes.string.isRequired,
        amountOverdue: PropTypes.number.isRequired,
        currentBalance: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default ReportCard;








// ✅ **PropTypes Validation**
