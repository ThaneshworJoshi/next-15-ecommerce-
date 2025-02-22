import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { FooterProps } from "./Footer.type";

export const Footer: React.FC<FooterProps> = ({
  brand,
  socialLinks,
  contact,
  footerLinks,
  paymentMethods,
  copyrightText,
}) => {
  return (
    <footer className="bg-secondary text-gray-700 py-20 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Image src={brand.logoSrc} alt={`${brand.name} Logo`} width={44} height={44} />
              <h3 className="text-lg font-bold">{brand.name}</h3>
            </div>
            <p className="text-sm mt-3 max-w-[250px] mx-auto md:mx-0">{brand.description}</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-8 mt-3">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-blue-500 hover:text-blue-700 cursor-pointer" size={18} />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm mt-3 max-w-[250px] mx-auto md:mx-0">{contact.address}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {footerLinks.map((category, index) => (
            <div key={index}>
              <h4 className="text-md font-semibold">{category.title}</h4>
              <ul className="text-sm mt-3 space-y-2">
                {category.links.map((item, idx) => (
                  <li key={idx} className="hover:text-blue-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom - Copyright & Payment Methods */}
        <div className="max-w-[1200px] flex flex-col md:flex-row justify-between items-center mt-8">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-left">{copyrightText}</p>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-4 md:mt-0">
            {paymentMethods.map((method, index) => (
              <Image key={index} src={method.src} alt={method.alt} width={50} height={30} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
