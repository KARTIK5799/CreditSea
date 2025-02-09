import PropTypes from "prop-types";

const CreditCardComponent = ({ card }) => {
  const {
    creditCardNumber,
    bankName,
    address,
    accountNumber,
    amountOverdue,
    currentBalance,
  } = card;

  return (
    <div className="relative m-auto h-44 w-72 sm:h-52 sm:w-80 rounded-xl bg-gradient-to-r from-[#0A376D] to-[#548BAE] text-white shadow-xl transition-transform sm:hover:scale-105 p-3 sm:p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-1">
        <p
          className={`font-semibold truncate ${
            bankName.length > 20 ? "text-[10px]" : "text-xs sm:text-sm"
          }`}
        >
          {bankName}
        </p>
        <span className="text-[10px] sm:text-xs font-light bg-white/30 px-2 py-0.5 rounded-md">
          Credit Card
        </span>
      </div>

      <div className="mt-2">
        <p className="text-[10px] sm:text-xs font-light">Card Number</p>
        <p className="text-xs sm:text-sm font-medium tracking-wider truncate">
          {creditCardNumber}
        </p>
      </div>

      <div className="mt-2">
        <p className="text-[10px] sm:text-xs font-light">Account Number</p>
        <p className="text-xs sm:text-sm font-medium tracking-wider truncate">
          {accountNumber}
        </p>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div>
          <p className="text-[10px] sm:text-xs font-light">Current Balance</p>
          <p className="text-xs sm:text-sm font-semibold">
            ₹{currentBalance.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-[10px] sm:text-xs font-light">Amount Overdue</p>
          <p className="text-xs sm:text-sm font-semibold text-red-400">
            ₹{amountOverdue.toLocaleString()}
          </p>
        </div>
      </div>

      <p className="absolute bottom-3 right-3 text-[10px] sm:text-xs font-light truncate">
        {address}
      </p>
    </div>
  );
};

CreditCardComponent.propTypes = {
  card: PropTypes.shape({
    creditCardNumber: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    amountOverdue: PropTypes.number.isRequired,
    currentBalance: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreditCardComponent;
