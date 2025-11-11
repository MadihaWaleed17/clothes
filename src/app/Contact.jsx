import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Connect With <span className="text-amber-600">Noor Luxury</span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10 text-base sm:text-lg">
        We'd love to hear from you! Reach out to us on any of our social media
        platforms and explore our latest fashion collections, offers, and
        updates.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 flex-wrap">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1E1e3upGSf/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg hover:shadow-2xl rounded-full p-4 sm:p-5 transition transform hover:-translate-y-1"
        >
          <FaFacebook className="text-blue-600 text-2xl sm:text-3xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg hover:shadow-2xl rounded-full p-4 sm:p-5 transition transform hover:-translate-y-1"
        >
          <FaInstagram className="text-pink-500 text-2xl sm:text-3xl" />
        </a>

        {/* TikTok */}
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg hover:shadow-2xl rounded-full p-4 sm:p-5 transition transform hover:-translate-y-1"
        >
          <FaTiktok className="text-black text-2xl sm:text-3xl" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/13315881214"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg hover:shadow-2xl rounded-full p-4 sm:p-5 transition transform hover:-translate-y-1"
        >
          <FaWhatsapp className="text-green-500 text-2xl sm:text-3xl" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-14 space-y-3 text-gray-700 text-sm sm:text-base">
        <p>📍 Location: 4130 Bullwhip Creek, Sachse, TX 75048, USA</p>
        <p>
          📞 Phone:{" "}
          <a
            href="tel:+13315881214"
            className="text-amber-600 font-medium hover:underline"
          >
            +1 (331) 588-1214
          </a>
        </p>
        <p>
          ✉️ Email:{" "}
          <a
            href="mailto:qasiya90@gmail.com"
            className="text-amber-600 font-medium hover:underline"
          >
            qasiya90@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
