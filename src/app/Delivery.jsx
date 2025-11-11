import { useState } from "react";
import { FaHome, FaStore, FaTruck, FaSadTear } from "react-icons/fa";

const Delivery = () => {
  const [mapOpen, setMapOpen] = useState(false);

  const openMap = () => setMapOpen(true);
  const closeMap = () => setMapOpen(false);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 min-h-screen">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        <span className="text-amber-600">Noor Luxury</span> Delivery Process
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        At <strong>Noor Luxury</strong>, we believe in providing comfort and
        convenience to our valued customers. You can now receive your favorite
        Pakistani designer dresses through two easy options.
      </p>

      {/* Delivery Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Home Delivery */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="flex items-center gap-4 mb-4">
            <FaTruck className="text-amber-600 text-3xl" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Home Delivery
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            If you prefer to shop from the comfort of your home, our{" "}
            <strong>Home Delivery Service</strong> is available across the
            United States. Once you place your order, your selected dress will
            be delivered to your doorstep within a few days.
          </p>
          <p className="text-gray-700 font-medium mt-4">
            💵 Delivery charges apply depending on your location.
          </p>
        </div>

        {/* Boutique Pickup */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="flex flex-col items-center gap-1 mb-4">
            <FaStore className="text-amber-600 text-3xl" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Boutique Pickup
            </h3>
            <h3 className="text-xl font-semibold text-gray-800 mt-2">
              Address:
            </h3>
            <h4
              className="text-medium font-semibold text-gray-800 cursor-pointer hover:text-amber-600"
              onClick={openMap}
            >
              4130 Bullwhip Creek, Sachse, TX 75048
            </h4>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Visit our local boutique to personally view and collect your dress.
            This option is perfect for customers who love to check the design
            and fabric in person before purchase.
          </p>
          <p className="text-gray-700 font-medium mt-4">
            ✅ No delivery charges are applied for boutique pickup orders.
          </p>
        </div>
      </div>

      {/* Google Maps Modal */}
      {mapOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeMap}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-gray-900"
              onClick={closeMap}
            >
              &times;
            </button>
            <iframe
              title="Boutique Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.129580237965!2d-96.5562374848386!3d32.96362118095106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21d2f2c917a7%3A0x786fa5c0e8b799c7!2s4130%20Bullwhip%20Creek%2C%20Sachse%2C%20TX%2075048!5e0!3m2!1sen!2sus!4v1709720000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      {/* No Exchange / Refund Policy */}
      <div className="max-w-3xl mx-auto bg-white mt-20 rounded-2xl shadow-lg p-8 text-center border border-amber-200">
        <FaSadTear className="text-amber-600 text-5xl mx-auto mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          No Exchange & No Refund Policy
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Dear customers, please note that all items purchased from{" "}
          <strong>Noor Luxury</strong> are final sale. We do not offer any
          exchange, refund, or return once the order has been confirmed and
          delivered. Kindly review your order carefully before placing it.
        </p>
        <p className="mt-4 text-sm text-gray-500 italic">
          “Your satisfaction means everything to us — thank you for
          understanding.”
        </p>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16">
        <div className="inline-block bg-amber-600 text-white px-8 py-4 rounded-2xl shadow-lg">
          <FaHome className="inline-block text-2xl mr-2" />
          <span className="font-medium text-lg">
            Noor Luxury – Delivering Elegance to Your Doorstep
          </span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
