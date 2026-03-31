import React, { useEffect, useState } from "react";
import heroAbout from "../assets/pic6.jpg";
import aboutImg from "../assets/pic6.jpg";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full">

      {/* HERO HEADER */}
     <div className="h-[60vh] relative flex items-center justify-center overflow-hidden">
  
  {/* IMAGE */}
  <img
    src={heroAbout}
    alt="About Hero"
    className="absolute w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* TEXT */}
 <div className="text-center z-10">
  
  <h1 className="text-white text-4xl md:text-6xl font-bold">
    About Us
  </h1>

  {/* BREADCRUMB */}
  <p className="text-gray-300 mt-3 text-sm md:text-base font-bold">
    Home <span className="mx-2">/</span> About Us
  </p>

</div>
</div>

      {/* CONTENT SECTION */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div
            className={`transition-all duration-1000 ${
              show ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={aboutImg}
              alt="About Evon's Tours"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT TEXT */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
              Your Trusted Travel Partner in Sri Lanka
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              We are a professional travel company in Sri Lanka offering
              customized tour packages, comfortable transport, and experienced
              guides. Our mission is to create unforgettable travel experiences
              for families, couples, and groups.
            </p>

            <p className="text-gray-600 mt-3 leading-relaxed">
              From beaches to mountains, cultural sites to wildlife adventures —
              we take you everywhere with safety, comfort, and best price guarantee.
            </p>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-blue-200 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-blue-600">500+</h2>
            <p className="text-gray-600 mt-2">Happy Travelers</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-blue-600">50+</h2>
            <p className="text-gray-600 mt-2">Tour Packages</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-blue-600">5+</h2>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
            <p className="text-gray-600 mt-2">Support</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;