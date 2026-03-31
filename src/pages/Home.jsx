import React, { useEffect, useState, useRef } from "react";


import hero1 from "../assets/pic8.jpg";
import hero2 from "../assets/pic9.jpg";
import hero3 from "../assets/pic2.jpg";
import aboutImg from "../assets/beach_couple.jpeg";




// DESTINATION IMAGES
import sigiriya from "../assets/sigiriya.jpg";
import ella from "../assets/ella.jpg";
import mirissa from "../assets/mirissa.jpg";
import kandy from "../assets/kandy.jpg";

import { FaShieldAlt,
  FaMoneyBillWave,
  FaHeadset,
  FaUserTie,
  FaBus,
  FaMapMarkedAlt,
  FaUsers,FaWhatsapp, FaInstagram,FaPhoneAlt,
  FaFacebookF,FaMapMarkerAlt,
  FaHeart } from "react-icons/fa";
  

const images = [hero1, hero2, hero3];


// DESTINATIONS
const destinations = [
  { name: "Sigiriya", img: sigiriya },
  { name: "Ella", img: ella },
  { name: "Mirissa", img: mirissa },
  { name: "Kandy", img: kandy },
];

// TOUR PACKAGES (NEW SECTION)
const tours = [
  {
    name: "Cultural Triangle Tour",
    img: sigiriya,
    days: "3 Days / 2 Nights",
    desc: "Explore Sigiriya, Dambulla and ancient heritage sites of Sri Lanka.",
  },
  {
    name: "Hill Country Escape",
    img: ella,
    days: "2 Days / 1 Night",
    desc: "Visit Ella, waterfalls, tea plantations and scenic train rides.",
  },
  {
    name: "Beach Paradise",
    img: mirissa,
    days: "4 Days / 3 Nights",
    desc: "Relax in Mirissa beaches, whale watching and sunset views.",
  },
];

//WHY CHOOSE US SECTION
const features = [
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure Tours",
    desc: "100% safety with trusted transport and guided tours."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Best Price Guarantee",
    desc: "Affordable packages with no hidden costs."
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "We are always ready to help you anytime."
  },
  {
    icon: <FaUserTie />,
    title: "Trained Guides",
    desc: "Professional and experienced tour guides."
  },
  {
    icon: <FaBus />,
    title: "Comfortable Transport",
    desc: "Air-conditioned vehicles for smooth travel."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Custom Tour Plans",
    desc: "Plan your own destinations and schedule."
  },
  {
    icon: <FaUsers />,
    title: "Family Friendly Trips",
    desc: "Perfect packages for families and groups."
  },
  {
    icon: <FaHeart />,
    title: "Memorable Experience",
    desc: "We create unforgettable travel memories."
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [showDest, setShowDest] = useState(false);
  const [showTours, setShowTours] = useState(false);

  const destRef = useRef(null);
  const tourRef = useRef(null);


const [open, setOpen] = useState(false);

// ✅ ADD HERE (CORRECT PLACE)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);


    // ✅ WHATSAPP BOOKING FUNCTION
  const handleBookNow = (tourName) => {
    const phoneNumber = "94740381598"; // 👉 ඔයාගේ WhatsApp number

    const message = `Hello! I want to book a tour package.

Tour: ${tourName}
Please give me more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  // HERO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ABOUT ANIMATION
  useEffect(() => {
    const timer = setTimeout(() => setShowAbout(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // DESTINATION SCROLL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowDest(true);
      },
      { threshold: 0.2 }
    );

    if (destRef.current) observer.observe(destRef.current);

    return () => {
      if (destRef.current) observer.unobserve(destRef.current);
    };
  }, []);


    //hero effect
    useEffect(() => {
  setLoaded(true);
  }, []);




  

  // TOUR SCROLL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowTours(true);
      },
      { threshold: 0.2 }
    );

    if (tourRef.current) observer.observe(tourRef.current);

    return () => {
      if (tourRef.current) observer.unobserve(tourRef.current);
    };
  }, []);

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="h-screen relative overflow-hidden">
        {images.map((img, index) => (
  <img
    key={index}
    src={img}
    alt="Sri Lanka Tour"
    className={`absolute w-full h-full object-cover transition-all duration-[8000ms] ease-in-out
  ${
    index === current
      ? "opacity-100 scale-115"
      : "opacity-0 scale-100"
  }
`}
  />
))}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <p className="text-gray-200 font-bold uppercase tracking-widest text-sm mb-4">
            Welcome to Evon's Tours
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Explore Sri Lanka
          </h1>

          <p className="text-gray-200 max-w-2xl mb-8">
            Discover breathtaking beaches, cultural heritage, wildlife adventures.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
            View Tours
          </button>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
<div className="py-20 px-4 bg-white">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">

      {/* LABEL */}
      <p className={`text-blue-600 font-semibold tracking-widest uppercase text-sm transition-all duration-700
        ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        About Us
      </p>

      {/* UNDERLINE */}
      <div className={`w-20 h-1 bg-blue-600 mt-2 rounded-full mx-auto md:mx-0 transition-all duration-700 delay-200
        ${showAbout ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 origin-left"}`}>
      </div>

      {/* HEADING */}
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mt-6 transition-all duration-700 delay-300
        ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Who We Are
      </h2>

      {/* TEXT */}
      <p className={`text-gray-600 text-sm md:text-lg mt-4 transition-all duration-700 delay-500
        ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        We provide unforgettable travel experiences across Sri Lanka with comfortable vehicles,
        experienced drivers, and customized tour packages designed to match your needs and budget.
      </p>

      {/* BUTTON */}
      <button className={`mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-700 delay-700
        ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        Learn More
      </button>

    </div>

    {/* RIGHT IMAGE */}
    <div className={`transition-all duration-1000 delay-300
      ${showAbout ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

      <img
        src={aboutImg}
        alt="About Evon's Tours"
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
      />

    </div>

  </div>
</div>

      {/* DESTINATIONS */}
      <div ref={destRef} className="py-12 px-4 bg-blue-200">
        <div className="text-center mb-6">
          <p className="text-blue-600 uppercase text-sm font-semibold">
            Destinations
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3"></div>
        </div>

        <h2 className="text-center text-gray-800 text-3xl font-bold">
          Popular Places
        </h2>

        <div className="max-w-6xl mx-auto grid mt-10 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-lg group transition-all duration-700
              ${showDest ? "opacity-100" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={item.img}
                className="w-full h-60 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50"></div>

              <h3 className="absolute bottom-3 left-3 text-white font-bold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* TOUR PACKAGES (NEW FIXED SECTION) */}
      <div ref={tourRef} className="py-16 px-4 bg-white">

        <div className="text-center mb-10">
          <p className="text-blue-500 uppercase text-sm font-semibold">
            Tour Packages
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3"></div>

          <h2 className="text-3xl text-gray-800 font-bold mt-6">
            Best Holiday Packages
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {tours.map((tour, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-700
              ${showTours ? "opacity-100" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >

              <img
                src={tour.img}
                className="h-56 w-full object-cover group-hover:scale-110 transition"
              />

              <div className="p-5">
                <h3 className="text-xl text-gray-700 font-bold">{tour.name}</h3>

                <p className="text-sm text-blue-600 font-semibold mt-1">
                  {tour.days}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  {tour.desc}
                </p>

               <button
                onClick={() => handleBookNow(tour.name)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Book Now
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>


     {/* WHY CHOOSE US SECTION) */}
    <div className="py-12 px-4 bg-blue-200">

  {/* TITLE */}
  <div className="text-center mb-12">
    <p className="text-blue-600 uppercase tracking-widest font-semibold text-sm">
      Why Choose Us
    </p>

    <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-800">
      We Make Your Trip Special
    </h2>
  </div>

  {/* GRID */}
  <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">

    {features.map((item, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
      >

        {/* ICON */}
        <div className="text-4xl text-blue-600 flex justify-center mb-4">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600">
          {item.desc}
        </p>

      </div>
    ))}

  </div>
</div>

{/* FLOATING CONTACT BUTTON */}
<div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">

  {/* OPTIONS */}
  {open && (
    <div className="flex flex-col gap-3 mb-2">

      {/* CALL */}
      <a
        href="tel:94740381598"
        className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
      >
        <FaPhoneAlt /> Call
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/94740381598"
        target="_blank"
        className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp /> WhatsApp
      </a>

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/evontours/?hl=en"
        target="_blank"
        className="bg-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition"
      >
        <FaInstagram /> Instagram
      </a>

      <FaHeadset className="text-blue-500" />

    </div>
  )}

  {/* MAIN TOGGLE BUTTON (SUPPORT ICON) */}
  <button
  onClick={() => setOpen(!open)}
  className="bg-white/20 backdrop-blur-md p-4 rounded-full shadow-lg border border-white/30 hover:scale-110 transition"
>
  <FaHeadset className="text-blue-500 text-xl" />
</button>

</div>



    </div>
  );
};

export default Home;