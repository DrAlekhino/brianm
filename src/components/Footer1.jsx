import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../global.css';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const footerLinks = {
    quickLinks: [
      { to: '/home', text: 'Home' },
      { to: '/portfolios', text: 'Portfolios' },
      { to: '/cv-qualifications', text: 'CV & Qualifications' },
      { to: '/contact', text: 'Contact Me' }
    ],
    portfolios: [
      { to: '/brianm/digital-marketing', text: 'Digital Marketing' },
      { to: '/brianm/graphic-designing', text: 'Graphic Designing' },
      { to: '/brianm/web-development', text: 'Web Development' },
      { to: '/brianm/seo', text: 'SEO Optimization' }
    ]
  };

  return (
    <footer className="relative bg-[#D3E3FD] py-6 px-4">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Logo Section */}
        <figure className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
          <img 
            src="../images/mainLogo.png" 
            alt="Company Logo" 
            width={200} 
            height={100}
            className="w-40 md:w-48 h-auto object-contain"
          />
        </figure>

        {/* Links Section */}
        <section className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between">
          {/* Quick Links */}
          <div className="mb-6 sm:mb-0 px-4">
            <h5 className="text-sm font-bold mb-3 text-gray-800">Quick Links</h5>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Links */}
          <div className="px-4">
            <h5 className="text-sm font-bold mb-3 text-gray-800">Portfolios</h5>
            <ul className="space-y-2">
              {footerLinks.portfolios.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         {/* LinkedIn Icon */}
        <figure className="px-4 flex items-center">
            <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label="My LinkedIn Profile"
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6"
                >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
        </figure>
        </section>
     </section>

      {/* Copyright */}
      <section className="text-center mt-6 text-xs text-gray-600">
        Copyright &copy; {year}. All rights reserved.
      </section>
    </footer>
  );
}