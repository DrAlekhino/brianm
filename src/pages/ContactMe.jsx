import { useEffect } from 'react';
import '../App.css';
import "../global.css"
import NavBar from '../components/NavBar';

export default function ContactMe() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <main className="min-h-screen w-screen overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      <NavBar />
      
      {/* Header Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-12 animate-fade-in-down">
        <h1 className="text-3xl font-bold text-center mb-4">
          Let's Get In Touch
        </h1>
        <p className="text-white text-center max-w-md mx-auto mb-8">
          I'd love to hear from you! Reach out to discuss projects, collaborations, or just to connect.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="flex justify-center px-4 pb-16 animate-fade-in-up animate-delay-200">
        <article className='w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-lg transition-all duration-500 hover:shadow-amber-500/20'>
          <form 
           action="https://formspree.io/f/mjkwpqek" 
           method="POST"
          className='flex flex-col space-y-6'>
            <div className="relative group">
              <input 
                type="text" 
                name="Name" 
                id="name" 
                placeholder=' '
                className='
                  w-full px-4 py-3 bg-transparent border-b-2 border-[#D3A522]/50
                  text-white placeholder-transparent
                  focus:border-[#D3A522] focus:outline-none
                  peer transition-all duration-300
                '
              />
              <label 
                htmlFor="name" 
                className='
                  absolute left-0 -top-5 text-[#D3A522] text-sm
                  peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:top-3
                  peer-focus:-top-5 peer-focus:text-[#D3A522]
                  peer-focus:text-sm
                  transition-all duration-300
                '
              >
                Name & Surname
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                name="Email" 
                id="email" 
                placeholder=' '
                className='
                  w-full px-4 py-3 bg-transparent border-b-2 border-[#D3A522]/50
                  text-white placeholder-transparent
                  focus:border-[#D3A522] focus:outline-none
                  peer transition-all duration-300
                '
              />
              <label 
                htmlFor="email" 
                className='
                  absolute left-0 -top-5 text-[#D3A522] text-sm
                  peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:top-3
                  peer-focus:-top-5 peer-focus:text-[#D3A522]
                  peer-focus:text-sm
                  transition-all duration-300
                '
              >
                Email Address
              </label>
            </div>

            <div className="relative group">
              <textarea 
                name="message" 
                id="message" 
                rows="4"
                placeholder=' '
                className='
                  w-full px-4 py-3 bg-transparent border-b-2 border-[#D3A522]/50
                  text-white placeholder-transparent
                  focus:border-[#D3A522] focus:outline-none
                  peer transition-all duration-300
                  resize-none
                '
              ></textarea>
              <label 
                htmlFor="message" 
                className='
                  absolute left-0 -top-5 text-[#D3A522] text-sm
                  peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:top-3
                  peer-focus:-top-5 peer-focus:text-[#D3A522]
                  peer-focus:text-sm
                  transition-all duration-300
                '
              >
                Your Message
              </label>
            </div>

            <button 
              type="submit"
              className='
                self-end px-8 py-3
                bg-[#D3A522] hover:bg-amber-600
                text-[#334277] hover:text-white
                font-bold rounded-lg
                transition-all duration-300
                transform hover:scale-105
                shadow hover:shadow-lg hover:shadow-amber-500/30
              '
            >
              Submit
            </button>
          </form>
        </article>
      </section>

      {/* Additional Contact Info */}
      <section className="px-4 pb-16 animate-fade-in-up animate-delay-300">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-semibold text-[#D3A522] mb-4">Or reach me directly</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:malelebk@gmail.com" className="text-white hover:text-[#D3A522] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="tel:+27 83 594 9039" className="text-white hover:text-[#D3A522] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </a>
            <a href="www.linkedin.com/in/kanego-malele-a752ab159" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D3A522] transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}