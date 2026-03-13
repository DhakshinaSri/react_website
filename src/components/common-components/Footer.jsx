import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "@assets/Skillhivelogo.png";

export default function Footer() {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Internship", path: "/internship" },
    { name: "Training & Upskilling", path: "/trainingandupskilling" },
    { name: "HR & Industry Connect", path: "/hrandindustryconnect" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t-6 border-[#ebcda5] px-6 md:px-16 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div className="order-1 md:order-1">
          <img src={Logo} alt="ISHAI Logo" className="w-25 mb-4" />
          <p className="text-lg leading-relaxed mb-4">
            Together, let’s build a future-ready workforce that drives innovation,
            growth, and social impact.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 text-[#E4983A] text-lg mb-6">
            <a href="#" className="hover:text-[#cc7a12] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#cc7a12] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#cc7a12] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#cc7a12] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Quick Links - Mobile */}
          <div className="md:hidden mt-4">
            <h3 className="font-bold mb-3 text-[20px] border-b-3 border-[#E4983A] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 mt-3 text-lg">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-[#E4983A] cursor-pointer transition-colors flex items-center"
                  >
                    › {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Links - Desktop */}
        <div className="hidden md:block order-2">
          <h3 className="font-bold mb-3 text-[20px] border-b-3 border-[#E4983A] inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-3 text-lg">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-[#E4983A] cursor-pointer transition-colors flex items-center"
                >
                  › {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Internship Section */}
        <div className="col-span-2 order-3">
          <h3 className="font-bold mb-3 text-[20px] border-b-3 border-[#E4983A] inline-block">
            Internship
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 mt-3 text-lg space-y-1">
            {[
              "Machine Learning",
              "Deep Learning",
              "Data Science & Analytics",
              "Full Stack Development",
              "Software Development",
              "Web & App Development",
              "Cybersecurity",
              "Data Engineering",
              "UI/UX Design",
              "Database Management",
              "Medical Coding",
              "Medical Billing",
              "Accounts Receivable (AR)",
              "Revenue Cycle Management (RCM)",
              "Medical Scribing",
              "Clinical Research",
              "Healthcare Analytics",
              "AI in Healthcare",
              "Patient Care Coordination",
            ].map((item, i) => (
              <p
                key={i}
                className="hover:text-[#E4983A] cursor-pointer transition-colors"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-[#E4983A40] my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
        {/* Reach Us */}
        <div>
          <h4 className="font-bold mb-2 text-[#E4983A]">Reach Us</h4>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#E4983A]" /> +91-94453 93068
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#E4983A]" /> info@skillhive.co.in
          </p>
        </div>

        {/* Our Presence */}
        <div>
          <h4 className="font-bold mb-2 text-[#E4983A]">Our Presence</h4>
          <p>
            Chennai | Erode | Coimbatore | Madurai | Nagercoil | Trichy |
            Thiruvananthapuram
          </p>
        </div>

        {/* Our Office */}
        <div>
          <h4 className="font-bold mb-2 text-[#E4983A]">Our Office</h4>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-[#E4983A] mt-1" />
            Monday – Friday: 9:00 AM – 6:00 PM <br />
            Saturday: 10:00 AM – 2:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-[#E4983A40] my-8"></div>

      <div className="text-center text-lg text-gray-500 mt-8">
        © 2025 All rights reserved
      </div>
    </footer>
  );
}
