import React, { useEffect, useState } from 'react';
import '../App.css';
import "../global.css"
import NavBar from '../components/NavBar';
import ImageCorousel from '../components/ImageCourousel';

export default function GraphicDesigning() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comingSoon, setComingSoon] = useState(false);
  const [landingPagesModal, setLandingPagesModal] = useState(false);
  const [currentLandingPageIndex, setCurrentLandingPageIndex] = useState(0);


  const landingPagesImages = [
    "/images/GraphicDesign/DigitalMarketingGraphics/LandingPages/Mallet.png",
    "/images/GraphicDesign/DigitalMarketingGraphics/LandingPages/404Error.png",
    "/images/GraphicDesign/DigitalMarketingGraphics/LandingPages/Nike.png",
    "/images/GraphicDesign/DigitalMarketingGraphics/LandingPages/SamsungS25.png"
  ];
  
  const brandData = {
    brianM: {
      name: "BrianM",
      images: [
        "/images/GraphicDesign/Branding/BrianM/navLogo.png",
        "/images/GraphicDesign/Branding/BrianM/mainLogo.png"
      ]
    },
    malluable: {
      name: "Malluable",
      images: [
        "/images/GraphicDesign/Branding/Malluable/Malluable Brand.png"
      ]
    },
    splashyFuel: {
      name: "Splashy Fuel and Oil",
      images: [
        "/images/GraphicDesign/Branding/SplashyFuel/Splashy Fuel Logo Design.jpg",
        "/images/GraphicDesign/Branding/SplashyFuel/Splashy fuel Business Card.jpg",
        "/images/GraphicDesign/Branding/SplashyFuel/Splashy fuel Business Card 1.jpg"
      ]
    },
    beat: {
      name: "Beat",
      images: [
        "/images/GraphicDesign/Branding/Beats/Beat App.png",
        "/images/GraphicDesign/Branding/Beats/Beat Logo.png"
      ]
    }
  };

  const digitalMarketingItems = [
    "Google Ads",
    "YouTube Thumbnail",
    "Landing Pages"
  ];

  const postersItems = [
    "Event Posters",
    "Social Media Banners",
    "Print Advertisements"
  ];

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);
  const handleLandingPagesClick = () => {
    setLandingPagesModal(true);
    setCurrentLandingPageIndex(0);
  };
  
  const handleLandingPagesClose = () => {
    setLandingPagesModal(false);
  };
  
  const handleLandingPagesNext = () => {
    setCurrentLandingPageIndex(prev => 
      prev === landingPagesImages.length - 1 ? 0 : prev + 1
    );
  };
  
  const handleLandingPagesPrev = () => {
    setCurrentLandingPageIndex(prev => 
      prev === 0 ? landingPagesImages.length - 1 : prev - 1
    );
  };

  const handleOpenModal = (brand) => {
    setActiveModal(brand);
    setCurrentImageIndex(0);
    setComingSoon(false);
  };

  const handleComingSoon = () => {
    setComingSoon(true);
    setTimeout(() => setComingSoon(false), 2000);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === brandData[activeModal].images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? brandData[activeModal].images.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen w-screen overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      <NavBar />
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 py-8">
        {/* Content Section */}
        <article className='w-full md:w-1/2 px-6 animate-fade-in-right animate-delay-100'>
          <h1 className="text-3xl font-bold text-center mb-6">
            Graphic Designing
          </h1>
          <p className="text-white text-center max-w-2xl mx-auto mb-8">
            Explore my graphic design projects across digital marketing, branding, and visual storytelling. 
            Each piece reflects my commitment to creativity, strategy, and effective communication through design.
          </p>
          <div className="animate-fade-in-up animate-delay-300">
            <ImageCorousel/>
          </div>
        </article>

        {/* Image Section */}
        <figure className='w-full md:w-1/2 flex justify-center animate-fade-in-left animate-delay-200'>
          <img 
            src="../../public/images/graphic-design.png" 
            alt="Graphic design icons" 
            className='max-h-[70vh] object-contain animate-float' 
          />
        </figure>
      </section>

      {/* Portfolio Sections */}
      <div className="space-y-20 pb-20">
        {/* Branding Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-in-up animate-delay-300">
          <h3 className="text-2xl font-semibold text-amber-400 mb-8">Branding</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {Object.keys(brandData).map((brandKey) => (
              <div 
                key={brandKey}
                className="bg-[#3A4786]/80 backdrop-blur-sm rounded-xl p-6 border border-white/20
                transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20
                cursor-pointer"
                onClick={() => handleOpenModal(brandKey)}
              >
                <h4 className="text-[#D3A522] text-center text-xl font-medium">
                  {brandData[brandKey].name}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Marketing Graphics Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-in-up animate-delay-400">
          <h3 className="text-2xl font-semibold text-blue-400 mb-8">Digital Marketing Graphics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {digitalMarketingItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#CACACE]/80 backdrop-blur-sm rounded-xl p-6 border border-white/20
                transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20
                cursor-pointer"
                
                onClick={item === 'Landing Pages' ? handleLandingPagesClick : handleComingSoon}
              >
                <h4 className="text-[#3A4786] text-center text-xl font-medium">{item}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Posters & Banners Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 animate-fade-in-up animate-delay-500">
          <h3 className="text-2xl font-semibold text-amber-400 mb-8">Posters & Banners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {postersItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#CACACE]/80 backdrop-blur-sm rounded-xl p-6 border border-white/20
                transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20
                cursor-pointer"
                onClick={handleComingSoon}
              >
                <h4 className="text-[#3A4786] text-center text-xl font-medium">{item}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Unified Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#3A4786]/90 rounded-xl overflow-hidden border border-amber-400/30 shadow-xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-[#1E1B4B] border-b border-amber-400/20">
              <h3 className="text-xl font-semibold text-amber-400">
                {brandData[activeModal].name}
              </h3>
              <button 
                onClick={handleCloseModal}
                className="text-white hover:text-amber-400 transition-colors text-2xl"
              >
                &times;
              </button>
            </div>
            
            {/* Image Container - Fixed Height */}
            <div className="relative flex items-center justify-center h-[60vh] min-h-[400px] p-8">
              {/* Fixed Position Chevrons */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                {brandData[activeModal].images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handlePrevImage(); 
                      }}
                      className="pointer-events-auto ml-4 bg-[#D3A522]/80 hover:bg-[#D3A522] text-white rounded-full p-3 transition-all shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleNextImage(); 
                      }}
                      className="pointer-events-auto mr-4 bg-[#D3A522]/80 hover:bg-[#D3A522] text-white rounded-full p-3 transition-all shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Consistent Sized Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={brandData[activeModal].images[currentImageIndex]} 
                  alt={`${brandData[activeModal].name} Design ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{ 
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(211, 165, 34, 0.3)'
                  }}
                />
              </div>
            </div>
            
            {/* Footer with Counter */}
            <div className="p-4 bg-[#1E1B4B] border-t border-amber-400/20 text-center">
              <span className="text-white/80">
                {currentImageIndex + 1} / {brandData[activeModal].images.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Notification */}
      {comingSoon && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3A4786] text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce">
          Content is coming soon!
        </div>
      )}   
        {/*Landing Page   */}
       {landingPagesModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
        <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#3A4786]/90 rounded-xl overflow-hidden border border-amber-400/30 shadow-xl">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 bg-[#1E1B4B] border-b border-amber-400/20">
            <h3 className="text-xl font-semibold text-amber-400">
              Landing Pages
            </h3>
            <button 
              onClick={handleLandingPagesClose}
              className="text-white hover:text-amber-400 transition-colors text-2xl"
            >
              &times;
            </button>
          </div>
          
          {/* Image Container - Fixed Height */}
          <div className="relative flex items-center justify-center h-[60vh] min-h-[400px] p-8">
            {/* Fixed Position Chevrons */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  handleLandingPagesPrev(); 
                }}
                className="pointer-events-auto ml-4 bg-[#D3A522]/80 hover:bg-[#D3A522] text-white rounded-full p-3 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  handleLandingPagesNext(); 
                }}
                className="pointer-events-auto mr-4 bg-[#D3A522]/80 hover:bg-[#D3A522] text-white rounded-full p-3 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Consistent Sized Image */}
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={landingPagesImages[currentLandingPageIndex]} 
                alt={`Landing Page Design ${currentLandingPageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                style={{ 
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(211, 165, 34, 0.3)'
                }}
              />
            </div>
          </div>
          
          {/* Footer with Counter */}
          <div className="p-4 bg-[#1E1B4B] border-t border-amber-400/20 text-center">
            <span className="text-white/80">
              {currentLandingPageIndex + 1} / {landingPagesImages.length}
            </span>
          </div>
        </div>
      </div>
)}
    </main>
  );
}