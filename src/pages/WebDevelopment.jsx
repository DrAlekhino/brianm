import { useState, useEffect } from 'react';
import '../App.css';
import "../global.css"
import NavBar from '../components/NavBar';
import ImageCorousel from '../components/ImageCourousel';
import Footer1 from '../components/Footer1';

export default function WebDevelopment() {
  const [activeTabBrianM, setActiveTabBrianM] = useState("Design");
  const [activeTabAnotherProject, setActiveTabAnotherProject] = useState("Design");
  const [showDesignModal, setShowDesignModal] = useState(false);
  
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const tabContent = {
    Design: {
      title: "UX/UI Design",
      description: "Beautiful, intuitive interfaces designed for optimal user experience",
      image: "web-design-icon.png"
    },
    Prototype: {
      title: "Interactive Prototypes",
      description: "Functional prototypes that bring designs to life before development",
      image: "web-prototype-icon.png"
    },
    Website: {
      title: "Full Websites",
      description: "Complete, responsive websites built with modern technologies",
      image: "website-icon.png"
    }
  };

  const openDesignModal = () => {
    setShowDesignModal(true);
  };

  const closeDesignModal = () => {
    setShowDesignModal(false);
  };

  return (
    <>
    <main className="min-h-screen overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      <NavBar />
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-4 sm:px-6 py-8 sm:py-12">
        {/* Content Section */}
        <article className='w-full md:w-1/2 px-4 sm:px-6 lg:px-8 animate-fade-in-right animate-delay-100'>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">
            UX/UI Designing & Web Development
          </h1>
          <p className="text-white text-center text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            I create applications that transform complex computing into seamless human interaction.
          </p>
          <div className="animate-fade-in-up animate-delay-300">
            <ImageCorousel pageType='web-development'/>
          </div>
        </article>

        {/* Image Section */}
        <figure className='w-full md:w-1/2 flex justify-center mb-8 md:mb-0 animate-fade-in-left animate-delay-200'>
          <img 
            src="../images/cyborg.png" 
            alt="Web development illustration" 
            className='w-120 h-150 sm:max-h-[60vh] md:max-h-[70vh]  animate-float' 
          />
        </figure>
      </section>

      {/* Portfolio Showcase Sections */}
      <div className="flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* First Project - Fagito */}
        <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center animate-fade-in-up animate-delay-300">
          <article className='w-full md:w-1/2 px-4 sm:px-6 mb-8 sm:mb-12 md:mb-0'>
            <h4 className="text-xl sm:text-2xl font-semibold text-amber-400 text-center mb-3 sm:mb-4">
              Fagito
            </h4>
            <p className="text-white text-sm sm:text-base text-center max-w-2xl mx-auto">
             A luxury, 5-star dining restaurant in Sandton, South Africa, requiring a premium digital presence.
            </p>
          </article>

          {/* Interactive Tabs */}
          <aside className='w-full md:w-1/2 px-4 sm:px-6'>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {["Design", "Prototype", "Website"].map((tab) => (
                <button
                  key={tab}
                  className={`
                    px-4 sm:px-6 py-2 sm:py-3
                    border border-[#181889] text-xs sm:text-sm
                    ${activeTabBrianM === tab ? 'bg-[#D3A522] text-[#181889] font-bold' : 'bg-[#181889] text-[#D3A522]'}
                    transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    rounded-t-lg ${tab === "Design" ? 'rounded-tr-none' : ''}
                  `}
                  onClick={() => setActiveTabBrianM(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div 
              onClick={activeTabBrianM === "Design" ? openDesignModal : null}
              className={`
                border-4 border-[#181889] 
                bg-[#181889]/80 backdrop-blur-sm
                rounded-lg rounded-tl-none p-4 sm:p-6 md:p-8
                min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center
                transition-all duration-500
                animate-fade-in animate-delay-100
                relative
                cursor-pointer hover:bg-[#181889]/90
                ${activeTabBrianM === "Design" ? 'hover:border-[#D3A522]/50 hover:shadow-lg' : ''}
              `}
            >
              {/* Click me badge */}
              <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full animate-pulse
                ${activeTabBrianM === "Design" ? 'bg-[#D3A522] text-[#181889]' : 'bg-[#181889] text-[#D3A522] border border-[#D3A522]'}`}>
                Click me!
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#D3A522] mb-3 sm:mb-4">
                {tabContent[activeTabBrianM].title}
              </h3>
              <p className="text-white text-xs sm:text-sm text-center mb-4 sm:mb-6">
                {tabContent[activeTabBrianM].description}
                <span className={`block mt-2 text-xs
                  ${activeTabBrianM === "Design" ? 'text-[#D3A522]/80' : 'text-white/60'}`}>
                  {activeTabBrianM === "Design" ? 
                    "(Click to view full design)" : 
                    "(Click to view details)"}
                </span>
              </p>
              <div className='
                w-full h-24 sm:h-30
                bg-contain bg-center bg-no-repeat
                animate-fade-in animate-delay-300
              ' style={{ 
                backgroundImage: `url('../images/${tabContent[activeTabBrianM].image}')`
              }}></div>
            </div>
          </aside>
        </section>

        {/* Second Project - BrianM */}
        <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center animate-fade-in-up animate-delay-400">
          <article className='w-full md:w-1/2 px-4 sm:px-6 mb-8 sm:mb-12 md:mb-0 order-1 md:order-none'>
            <h4 className="text-xl sm:text-2xl font-semibold text-amber-400 text-center mb-3 sm:mb-4">
              BrianM
            </h4>
            <p className="text-white text-sm sm:text-base text-center max-w-2xl mx-auto">
              A professional website showcasing my expertise in web development, UX design, digital marketing, graphic design, and search engine optimization.
            </p>
          </article>

          {/* Interactive Tabs */}
          <aside className='w-full md:w-1/2 px-4 sm:px-6 order-2 md:order-none'>
            <div className="flex flex-wrap justify-cente gap-1 sm:gap-2">
              {["Design", "Prototype", "Website"].map((tab) => (
                <button
                  key={tab}
                  className={`
                    px-4 sm:px-6 py-2 sm:py-3
                    border border-[#181889] text-xs sm:text-sm
                    ${activeTabAnotherProject === tab ? 'bg-[#D3A522] text-[#181889] font-bold' : 'bg-[#181889] text-[#D3A522]'}
                    transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    rounded-t-lg ${tab === "Website" ? 'rounded-tl-none' : ''}
                  `}
                  onClick={() => setActiveTabAnotherProject(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div 
              onClick={activeTabAnotherProject === "Design" ? openDesignModal : null}
              className={`
                border-4 border-[#181889] 
                bg-[#181889]/80 backdrop-blur-sm
                rounded-lg rounded-l-none p-4 sm:p-6 md:p-8
                min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center
                transition-all duration-500
                animate-fade-in animate-delay-100
                relative
                cursor-pointer hover:bg-[#181889]/90
                ${activeTabAnotherProject === "Design" ? 'hover:border-[#D3A522]/50 hover:shadow-lg' : ''}
              `}
            >
              {/* Click me badge */}
              <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full animate-pulse
                ${activeTabAnotherProject === "Design" ? 'bg-[#D3A522] text-[#181889]' : 'bg-[#181889] text-[#D3A522] border border-[#D3A522]'}`}>
                Click me!
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-[#D3A522] mb-3 sm:mb-4">
                {tabContent[activeTabAnotherProject].title}
              </h3>
              <p className="text-white text-xs sm:text-sm text-center mb-4 sm:mb-6">
                {tabContent[activeTabAnotherProject].description}
                <span className={`block mt-2 text-xs
                  ${activeTabAnotherProject === "Design" ? 'text-[#D3A522]/80' : 'text-white/60'}`}>
                  {activeTabAnotherProject === "Design" ? 
                    "(Click to view full design)" : 
                    "(Click to view details)"}
                </span>
              </p>
              <div className='
                w-full h-24 sm:h-30
                bg-contain bg-center bg-no-repeat
                animate-fade-in animate-delay-300
              ' style={{ 
                backgroundImage: `url('../images/${tabContent[activeTabAnotherProject].image}')`
              }}></div>
            </div>
          </aside>
        </section>
      </div>

      {/* Design Modal */}
      {showDesignModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-lg p-4">
          <div className="relative max-w-4xl w-full mx-auto my-8 bg-[#3A4786]/90 rounded-xl border border-amber-400/30 shadow-xl">
            {/* Modal Header - Sticky */}
            <div className="sticky top-0 flex justify-between items-center p-4 bg-[#1E1B4B] border-b border-amber-400/20 z-10">
              <h3 className="text-xl font-semibold text-amber-400">
                Fagito Design
              </h3>
              <button 
                onClick={closeDesignModal}
                className="text-white hover:text-amber-400 transition-colors text-2xl"
              >
                &times;
              </button>
            </div>
            
            {/* Scrollable Content Area */}
            <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
              {/* Canva Container - Full Height */}
              <div className="relative" style={{ minHeight: '1200px' }}>
                <div 
                  style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <iframe 
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    src="https://www.canva.com/design/DAGlP_j-KuY/TqS1Xr6XLv7CLP9wHFfvXw/view?embed" 
                    allowFullScreen
                    title="Fagito Design"
                  />
                </div>
              </div>
              
              <a 
                href="https://www.canva.com/design/DAGlP_j-KuY/TqS1Xr6XLv7CLP9wHFfvXw/view?utm_content=DAGlP_j-KuY&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-4 text-center text-white hover:text-amber-400"
              >
                Design Process Overview by Brian Malele
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
    <Footer1/>
    </>
  );
}