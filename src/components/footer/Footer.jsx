import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 md:px-20 relative overflow-hidden">
      
      <img
        src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
        alt="Java Cup"
        className="absolute right-5 top-5 w-20 h-20 opacity-10 hover:opacity-30 transition-all duration-500 rotate-12 hover:rotate-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-4"> Java Buddy</h2>
          <p className="text-sm leading-relaxed">
            Your smart Java learning companion. Learn core concepts like OOP,
            Collections, Multithreading & more — made simple, interactive and fun.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400 transition">🏠 Home</a></li>
            <li><a href="/about" className="hover:text-green-400 transition">📘 About</a></li>
            <li><a href="/roadmap" className="hover:text-green-400 transition">📚 Roadmap</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">✉️ Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-white transition transform hover:scale-110">
              <Github />
            </a>
            <a href="#" className="hover:text-white transition transform hover:scale-110">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white transition transform hover:scale-110">
              <Twitter />
            </a>
            <a href="mailto:javabuddy@email.com" className="hover:text-white transition transform hover:scale-110">
              <Mail />
            </a>
          </div>
          <p className="text-sm">📩 javabuddy@email.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-5 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 animate-pulse rounded-br-2xl">
        © {new Date().getFullYear()} <span className="text-green-400 font-semibold">Java Buddy</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
