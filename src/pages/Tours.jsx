import React from "react";
import tourHero from "../assets/pic8.jpg";

import hero1 from "../assets/mirissa.jpg";
import hero2 from "../assets/pic4.jpg";
import hero3 from "../assets/pic10.jpg";
import hero4 from "../assets/pic11.jpg";
import hero5 from "../assets/pic2.jpg";
import hero6 from "../assets/pic12.jpg";

const tours = [
  {
    id: 1,
    title: "Sri Lanka Beach Tour",
    duration: "5 Days / 4 Nights",
    desc: "Enjoy golden beaches, sunset views and relaxing coastal life.",
    image: hero1,
  },
  {
    id: 2,
    title: "Cultural Triangle Tour",
    duration: "6 Days / 5 Nights",
    desc: "Explore Kandy, Sigiriya and ancient heritage sites.",
    image: hero2,
  },
  {
    id: 3,
    title: "Adventure Tour Sri Lanka",
    duration: "7 Days / 6 Nights",
    desc: "Hiking, waterfalls, wildlife and nature adventures.",
    image: hero3,
  },
  {
    id: 4,
    title: "Wild Safari Tour",
    duration: "4 Days / 3 Nights",
    desc: "Experience Yala safari and wild elephants.",
    image: hero4,
  },
  {
    id: 5,
    title: "Hill Country Escape",
    duration: "3 Days / 2 Nights",
    desc: "Nuwara Eliya, Ella scenic train views and cool climate.",
    image: hero5,
  },
  {
    id: 6,
    title: "Luxury Sri Lanka Tour",
    duration: "8 Days / 7 Nights",
    desc: "Premium hotels, private guide and luxury travel experience.",
    image: hero6,
  },
];

const Tours = () => {

   // ✅ WHATSAPP BOOKING FUNCTION
  const handleBookNow = (tourTitle) => {
    const phoneNumber = "94740381598"; // 👉 ඔයාගේ WhatsApp number

    const message = `Hello! I want to book a tour package.

Tour: ${tourTitle}
Please give me more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${tourHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Tour Packages
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-200">
            Explore the best destinations in Sri Lanka with us
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Popular Tour Packages
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden
                         transition-all duration-500
                         hover:shadow-2xl hover:-translate-y-2"
            >

              {/* IMAGE CONTAINER */}
              <div className="overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-56 w-full object-cover
                             transition-transform duration-700
                             group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl text-gray-700 font-bold">
                  {tour.title}
                </h3>

                <p className="text-sm text-blue-600 font-semibold mt-1">
                  {tour.duration}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  {tour.desc}
                </p>

               <button
                onClick={() => handleBookNow(tour.title)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Book Now
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Tours;