import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-gray-100 text-center px-4 sm:px-6">
      {/* Icon */}
      <FaSadTear className="text-amber-600 text-5xl sm:text-6xl mb-4 animate-bounce" />

      {/* 404 Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-2">404</h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-600 max-w-sm sm:max-w-md mb-8 text-base sm:text-lg">
        The page you’re looking for doesn’t exist or has been moved.  
        Please check the URL or go back to the home page.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-amber-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:bg-amber-700 transition duration-300 text-sm sm:text-base"
      >
        Go Back Home
      </Link>

      {/* Decorative footer text */}
      <p className="mt-10 text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Noor Luxury | All Rights Reserved
      </p>
    </div>
  );
};

export default NotFound;
