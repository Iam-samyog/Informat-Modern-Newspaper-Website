import React from "react";

const Footer = () => {
  const footerLinks = {
    politics: ["DEMOCRATIC", "RIGHTS", "INFORMATION WAR", "ELECTION", "EUROPE"],
    startups: ["VENTURE", "SILICON VALLEY", "INVESTING"],
    human: ["GENES", "IDENTITY"],
    tech: ["PROGRAMMING", "MACHINE LEARNING", "DATA SCIENCE"],
    music: ["VIRAL", "POP CULTURE"],
    health: ["HEALTH EXPLAINERS", "TESTS", "CANCER"],
    home: ["DESIGN", "INTERIOR", "PLANT", "BUILDING", "FENG SHUI"],
    royals: ["QUEEN", "PRINCESS DIANA", "KATE MIDDLETON"],
    aboutUs: ["ABOUT", "CARRIER", "CONTACT"],
  };

  return (
    <footer className="bg-gray-900 text-white py-12 secondary-font px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-medium text-sm mb-4">POLITICS</h3>
              <ul className="space-y-2">
                {footerLinks.politics.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">ROYALS</h3>
              <ul className="space-y-2">
                {footerLinks.royals.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

         
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-medium text-sm mb-4">STARTUPS</h3>
              <ul className="space-y-2">
                {footerLinks.startups.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">HOME</h3>
              <ul className="space-y-2">
                {footerLinks.home.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

         
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-medium text-sm mb-4">HUMAN</h3>
              <ul className="space-y-2">
                {footerLinks.human.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">TECH</h3>
              <ul className="space-y-2">
                {footerLinks.tech.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">MUSIC</h3>
              <ul className="space-y-2">
                {footerLinks.music.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-medium text-sm mb-4">HEALTH</h3>
              <ul className="space-y-2">
                {footerLinks.health.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">ABOUT US</h3>
              <ul className="space-y-2">
                {footerLinks.aboutUs.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer "
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-medium text-sm mb-4">FOLLOW US</h3>
              <div className="flex space-x-4 text-gray-300">
                <i className="bi bi-instagram text-[18px] cursor-pointer hover:text-white" />
                <i className="bi bi-twitter-x text-[18px] cursor-pointer hover:text-white" />
                <i className="bi bi-facebook text-[18px] cursor-pointer hover:text-white" />
                <i className="bi bi-youtube text-[18px] cursor-pointer hover:text-white" />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">INFORMAT</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                © 2025 Informat is a next-generation newspaper committed to delivering thought-provoking journalism that informs, inspires, and empowers. Rooted in truth and driven by curiosity, we bring together stories that matter — from politics and culture to science, society, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
