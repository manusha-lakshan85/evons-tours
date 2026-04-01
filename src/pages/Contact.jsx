import { MapPin, Phone, Mail } from "lucide-react";

import ContactHero from "../assets/pic1.jpg";


export default function ContactPage() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const text =
      `Hello 👋 I want to contact you:%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Subject: ${subject}%0A` +
      `Message: ${message}`;

    const phoneNumber = "94740381598"; // WhatsApp number 

    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      "_blank"
    );
  };
  return (





    <div className="w-full bg-gray-50">

       {/* HERO */}
                  <div
                    className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${ContactHero})` }}
                  >
                    <div className="absolute inset-0 bg-black/60"></div>
            
                    <div className="relative text-center text-white px-4">
                      <h1 className="text-4xl md:text-5xl font-bold">
                        Contact Us
                      </h1>
                      <p className="mt-4 text-sm md:text-lg text-gray-200">
                        We are here to help you
                      </p>
                    </div>
                  </div>
     

      <div className="max-w-6xl mx-auto p-8">

        {/* TOP INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* ADDRESS */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <MapPin className="text-blue-500 w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Address</h3>
            <p className="text-gray-500">Colombo, Sri Lanka</p>
          </div>

          {/* PHONE */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <Phone className="text-blue-500 w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Call Us</h3>
            <p className="text-gray-500">+94 77 123 4567</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <Mail className="text-blue-500 w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-gray-500">info@travel.com</p>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT - FORM */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-5">
              Send Message
            </h2>


        <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition w-full"
        >
          Send Massage
        </button>

      </form>
          </div>

          {/* RIGHT - MAP */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63370.73614156463!2d79.8612432!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593e4c2c5f2b%3A0x5c1b3a1c9c7c9c9c!2sColombo!5e0!3m2!1sen!2slk!4v1710000000000"
              className="w-full h-[350px] md:h-full"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}