import React, { useEffect } from 'react';
import '../App.css';
import "../global.css"
import NavBar from '../components/NavBar';

export default function Portfolios() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <main className="h-screen w-screen max-sm:overflow-y-scroll overflow-hidden" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      <NavBar />
      <section className='flex flex-grow flex-col items-center justify-center'>
        {/* Animated Heading with fade-in */}
        <h1 className="text-center animate-fade-in-down animate-delay-100">
          Explore my portfolios
        </h1>
        
        {/* Animated Paragraph with staggered delay */}
        <p className="text-white text-center m-2 max-w-2xl px-4 animate-fade-in-down animate-delay-300">
          Welcome to my Portfolios page, where ideas are brought to life via design and creativity. 
          A sampling of my work in web development, SEO, graphic design, and digital marketing may be seen here. 
          Every project demonstrates a distinct strategy designed to engage, inspire, and communicate.
        </p>
          
        {/* Portfolio buttons with interactive animations */}  
        <article className="flex flex-col animate-fade-in-up animate-delay-500">
          <aside className="flex flex-wrap justify-center gap-4 p-6">
            <div className="group relative">
              <button className='
                bg-[#D3A522]!
                rounded-2xl 
                p-4 
                w-40 
                h-40
                max-sm:w-full 
                max-sm:h-auto 
                max-sm:py-3
                transition-all 
                duration-300 
                ease-out
                transform
                hover:scale-105
                hover:bg-amber-700!
                hover:shadow-lg
                active:scale-95
              '>
                <a href="/digital-marketing" className="flex flex-col items-center justify-center h-full">
                  <img 
                    src="images/Icon fa-solid-bullhorn.png" 
                    alt="bullhorn" 
                    className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" 
                  />
                  <h5 className="mt-3 text-center group-hover:text-white transition-colors duration-300">
                    Digital Marketing
                  </h5>
                </a>
              </button>
              {/* Subtle pulse effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow pointer-events-none transition-opacity duration-300"></div>
            </div>

            {/* Repeat same structure for other buttons */}
            <div className="group relative">
              <button className='bg-[#D3A522]! rounded-2xl p-4 w-40 h-40 max-sm:w-full max-sm:h-auto max-sm:py-3 transition-all duration-300 ease-out transform hover:scale-105 hover:bg-amber-700! hover:shadow-lg active:scale-95'>
                <a href="/graphic-designing" className="flex flex-col items-center justify-center h-full">
                  <img 
                    src="images/Icon fa-solid-pen-nib.png" 
                    alt="graphic design pen" 
                    className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" 
                  />
                  <h5 className="mt-3 text-center group-hover:text-white transition-colors duration-300">
                    Graphic Designing
                  </h5>
                </a>
              </button>
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow pointer-events-none transition-opacity duration-300"></div>
            </div>

            <div className="group relative">
              <button className='bg-[#D3A522]! rounded-2xl p-4 w-40 h-40 max-sm:w-full max-sm:h-auto max-sm:py-3 transition-all duration-300 ease-out transform hover:scale-105 hover:bg-amber-700! hover:shadow-lg active:scale-95'>
                <a href="/web-development" className="flex flex-col items-center justify-center h-full">
                  <img 
                    src="images/Icon web dev.png" 
                    alt="html tags" 
                    className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" 
                  />
                  <h5 className="mt-3 text-center group-hover:text-white transition-colors duration-300">
                    Web Development
                  </h5>
                </a>
              </button>
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow pointer-events-none transition-opacity duration-300"></div>
            </div>

            <div className="group relative">
              <button className='bg-[#D3A522]! rounded-2xl p-4 w-40 h-40 max-sm:w-full max-sm:h-auto max-sm:py-3 transition-all duration-300 ease-out transform hover:scale-105 hover:bg-amber-700! hover:shadow-lg active:scale-95'>
                <a href="/seo" className="flex flex-col items-center justify-center h-full">
                  <img 
                    src="images/Icon core-magnifying-glass.png" 
                    alt="magnifying glass" 
                    className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" 
                  />
                  <h5 className="mt-3 text-center group-hover:text-white transition-colors duration-300">
                    SEO Optimization
                  </h5>
                </a>
              </button>
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow pointer-events-none transition-opacity duration-300"></div>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}