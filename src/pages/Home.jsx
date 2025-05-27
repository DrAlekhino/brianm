import React, { useEffect,useState } from 'react';
import '../App.css';
import '../global.css';
import NavBar1 from '../components/NavBar1';
import UnderConstruction from '../components/UnderConstruction';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showConstruction, setShowConstruction] = useState(true);
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
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <>
      <main className="h-screen w-screen overflow-hidden max-sm:overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
        {showConstruction && <UnderConstruction />}
        <NavBar1 />
        <section className="flex flex-col top-2">
          {/* Animated Heading */}
          <h1 className="text-center mt-1.5 animate-fade-in-down animate-delay-100">
            Welcome to my website
          </h1>
          
          {/* Animated Subheading */}
          <p className="text-white font-light text-center animate-fade-in-down animate-delay-300">
            "From design to optimization—I'll bring your vision to life."
          </p>
          
          <section className="flex items-center justify-center max-sm:block mt-4">
            {/* Hero Image */}
            <figure className="w-1/3 h-full flex items-center justify-center max-sm:w-full animate-float">
              <img 
                src="images/Welcome-hero.png" 
                alt="Hero image" 
                className="max-h-full max-w-full object-contain" 
              />
            </figure>
            
            {/* Expertise Section */}
            <aside 
              className="bg-white/10 backdrop-blur-sm w-[70vh] rounded-2xl flex flex-col mb-1.5 h-[60vh] top-51 max-sm:h-[40vh] max-sm:w-[90%] max-sm:mx-auto max-sm:mb-6 animate-fade-in-right"
              style={{ boxShadow: "inset -6px 3px 6px rgba(202, 202, 206, 0.1)" }}
            >
              <h3 className="p-3 text-center animate-fade-in-down">Explore my Expertise</h3>
              <aside className="grid grid-rows-2 grid-cols-2 gap-4 p-4 w-full h-full">
                {/* Digital Marketing */}
                <button className='bg-[#D3A522]! rounded-2xl hover:bg-amber-700! transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center p-2 h-full'>
                  <Link to="/brianm/digital-marketing">
                  <img 
                    src="images/Icon fa-solid-bullhorn.png" 
                    alt="bullhorn" 
                    className="w-10 h-11 mb-2 transition-transform duration-300 hover:rotate-12" 
                  />
                  <span className="text-white text-center text-sm px-1 leading-tight">Digital Marketing</span>
                  </Link>
                </button>
                
                {/* Graphic Design */}
                <button className='bg-[#D3A522]! rounded-2xl hover:bg-amber-700! transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center p-2 h-full'>
                  <Link to="/brianm/graphic-designing">
                  <img 
                    src="images/Icon fa-solid-pen-nib.png" 
                    alt="graphic design pen" 
                    className="w-10 h-10 mb-2 transition-transform duration-300 hover:rotate-12" 
                  />
                  <span className="text-white text-center text-sm px-1 leading-tight">Graphic Design</span>
                  </Link>
                </button>
                
                {/* Web Development */}
                <button className='bg-[#D3A522]! rounded-2xl hover:bg-amber-700! transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center p-2 h-full'>
                  <Link to="/brianm/web-development">
                  <img 
                    src="images/Icon web dev.png" 
                    alt="html tags" 
                    className="w-10 h-10 mb-2 transition-transform duration-300 hover:rotate-12" 
                  />
                  <span className="text-white text-center text-sm px-1 leading-tight">Web Development</span>
                  </Link>
                </button>
                
                {/* SEO Optimization */}
                <button className='bg-[#D3A522]! rounded-2xl hover:bg-amber-700! transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center p-2 h-full'>
                  <Link to="/brianm/seo">
                  <img 
                    src="images/Icon core-magnifying-glass.png" 
                    alt="magnifying glass" 
                    className="w-10 h-10 mb-2 transition-transform duration-300 hover:rotate-12" 
                  />
                  <span className="text-white text-center text-sm px-1 leading-tight">SEO Optimization</span>
                  </Link>
                </button>
              </aside>
            </aside>
          </section>
        </section>
      </main>
      <Footer/>
    </>
  );
}