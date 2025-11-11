const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-amber-300 text-2xl font-semibold mb-3">Noor Luxury</h2>
          <p className="text-sm text-gray-300">
            Noor Luxury is a premium clothing brand offering elegant Pakistani
            outfits with modern design, quality fabric, and timeless style.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/home" className="hover:text-amber-300">Home</a></li>
            <li><a href="/about" className="hover:text-amber-300">About Us</a></li>
            <li><a href="/gallery" className="hover:text-amber-300">Gallery</a></li>
            <li><a href="/contact-us" className="hover:text-amber-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-amber-300">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://www.facebook.com/share/1E1e3upGSf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="hover:text-black">
              <i className="ri-tiktok-fill"></i>
            </a>
            <a href="https://wa.me/13315881214" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Noor Luxury | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
