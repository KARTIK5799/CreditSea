import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <div className="w-full py-3 px-12 flex justify-between items-center bg-white ">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-16 sm:h-20" />
      </Link>
      <Link to="/records">
        <button className="px-4 py-2 text-white bg-[#0A376D] rounded-md shadow-md hover:bg-[#548BAE] transition-all sm:px-6 sm:py-2">
          Records
        </button>
      </Link>
    </div>
  );
}

export default Header;
