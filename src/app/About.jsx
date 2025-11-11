const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-12 px-4 min-h-screen">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        About <span className="text-amber-600">Noor Luxury</span>
      </h2>

      <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
        <p>
          <strong>Noor Luxury</strong> is a premium clothing destination in the
          USA, bringing elegance of <span className="text-amber-600">Pakistani fashion</span> internationally.
        </p>
        <p>
          Collection includes <strong>Ethnic</strong>, <strong>Sana Safinaz</strong>, and <strong>Charizma</strong> — handpicked to represent rich culture and craftsmanship.
        </p>
        <p>
          We make it easier for USA customers to access authentic Pakistani designer wear for casual, festive, or special occasions.
        </p>
        <p>
          Every outfit reflects tradition, style, and sophistication.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-4 max-w-full md:max-w-md text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Our Promise</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Original, elegant, and high-quality Pakistani fashion delivered to your doorstep in the USA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
