import UploadForm from "./UploadForm";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] bg-[#0A376E]">
      {/* Left Side - Upload Form */}
      <div className="lg:w-1/2 w-full flex justify-center items-center p-8 bg-white shadow-lg">
        <UploadForm />
      </div>

      {/* Right Side - Website Info */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Welcome to CreditSea
          </h2>
          <p className="text-gray-200">
            CreditSea helps you securely analyze your credit reports by
            extracting valuable insights from XML files.
          </p>
          <ul className="mt-4 space-y-2  text-white text-left">
            <li>✅ Extracts Basic Details (Name, PAN, Mobile)</li>
            <li>✅ Parses Credit Score & Report Summary</li>
            <li>✅ Displays Active & Closed Accounts</li>
            <li>✅ Analyzes Secured & Unsecured Credit</li>
            <li>✅ Lists Credit Card Banks & Transactions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
