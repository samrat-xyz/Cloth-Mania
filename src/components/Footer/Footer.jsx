import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* COUNTRY / LANGUAGE */}
        <div>
          <h3 className="font-semibold mb-4">Piazza Italia</h3>

          <p className="text-sm mb-3">Country / Language</p>

          <div className="flex items-center gap-2 cursor-pointer">
            <span>Bangladesh</span>
          </div>

          {/* Payments */}
          <div className="mt-6">
            <p className="text-sm mb-2">PAYMENTS</p>
            <div className="flex items-center gap-4 opacity-70">
              <img
                src="https://i.ibb.co/TDRgGkp4/AIdro-kfg-Klp22w3-z-Zbh-Hh-Yhc279q-r-Vb-YRMy1x-Z8g-JMZRcs-Q-s900-c-k-c0x00ffffff-no-rj.jpg"
                className="h-6"
              />
              <img
                src="https://i.ibb.co/39HWB6H4/di-1745224164.jpg"
                className="h-6"
              />
              <img
                src="https://i.ibb.co/fzn3x8N3/images-q-tbn-ANd9-Gc-Qfi-Vftg5hdy5y-GYp-MFCd-AF3q-H2uj-Mn0-EMVa-A-s.png"
                className="h-6"
              />
            </div>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Our stores</li>
            <li>Company</li>
            <li>News</li>
            <li>Governance</li>
            <li>Development and Franchising</li>
            <li>Sustainability</li>
            <li>Dichiarazione di Accessibilità</li>
            <li>Work with us</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Returns and Refunds</li>
            <li>Shipping methods</li>
            <li>FAQ</li>
            <li>Gift card</li>
            <li>Piazza Italia Club</li>
            <li>Regulations</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4">SOCIAL</h3>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex gap-3 items-center">
              <FaInstagram /> Instagram
            </li>
            <li className="flex gap-3 items-center">
              <FaFacebook /> Facebook
            </li>
            <li className="flex gap-3 items-center">
              <FaTiktok /> Tiktok
            </li>
            <li className="flex gap-3 items-center">
              <FaLinkedin /> Linkedin
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
