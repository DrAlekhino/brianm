import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import LogoAnimation from '../components/LogoAnimation';
import JobTitleAnimation from '../components/JobTitle';
import TypingAnimation from '../components/TypingAnimation';

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);
  const jobTitles = ["Web Developer", "SEO Specialist","Graphic Designer","Digital Marketing Specialist"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const introText = [
    { text: "Hello...", position: "bottom-53 start-50" }, 
    { text: "Welcome to my portfolio website.", position: "bottom-44 start-50" },
    { text: "My name is Brian...", position: "bottom-36 start-50" }
  ];
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isLogoAnimationDone,setIsLogoAnimationDone]=useState(false);
  const [isTextAnimationDone,setIsTextAnimationDone]=useState(false);
  const [isJobAnimationDone,setIsJobAnimationDone]=useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setIsJobAnimationDone(true), 9800); // ~6 seconds
  }, []);

  return (
   <main className="w-full h-full top-0 left-0 absolute bg-cover bg-center bg-no-repeat bg-[url('/images/landingPage.jpg')]">
       {/* Background Overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#181889]/80 via-transparent to-transparent"></div>
       
       {/* Grid and Blur Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#181889]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCCCD4]/10 rounded-full blur-3xl -z-10"></div> 

        {/* Logo Animation */}
        <LogoAnimation onAnimationComplete={() => setIsLogoAnimationDone(true)} />
        {/* Main Content */}
      <section className=" mt-30

       container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-12 md:py-20 relative z-10">
        {/* Text Content */}
        <article className="md:w-1/2 space-y-6 md:pr-8">
          {isLogoAnimationDone && (
            <>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight gradient-text">
                <TypingAnimation 
                  onAnimationComplete={() => setIsTextAnimationDone(true)} 
                  className="text-4xl sm:text-5xl font-extrabold" 
                  keepTextAfterComplete={true} 
                />
              </h1>
              
           
              {isTextAnimationDone&&(
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-[Merriweather]">
                <JobTitleAnimation 
                  // onAnimationComplete={() => setIsJobAnimationDone(true)} 
                  jobTitles={jobTitles} 
                  className="text-2xl sm:text-3xl"
                />
              </h2>      
              )}
              {isJobAnimationDone&&(
                <>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Whether you need a stunning website, powerful branding, search-optimized content, or complete digital marketing strategies, I can help bring your vision to life.
              </p>
              
              <section className="pt-4 flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-[#D3A522] to-amber-700 hover:from-[#D3A522]/90 hover:to-amber-800 text-white text-lg px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#D3A522]/20"  onClick={() => navigate("/home")}>
                  View My Work
                </button>
                
                {/* <button className="border border-white/30 text-white hover:bg-transparent hover:text-white text-lg px-6 py-6 rounded-lg" onClick={() => navigate("/contact")}>
                  Contact Me
                </button>      */}
                <button 
                  className="border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300"
                  onClick={() => navigate("/contact")}
                >
                  Contact Me
                </button>      
              </section>
              </>
              )}
              
            </>
             )}
            
          
        </article>
      </section>
      
   </main>

  );
}



