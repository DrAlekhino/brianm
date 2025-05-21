// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import '../src/App.css';
// import LogoAnimation from '../src/components/LogoAnimation';
// import JobTitleAnimation from '../src/components/JobTitle';
// import TypingAnimation from '../src/components/TypingAnimation';

// export default function LandingPage() {
//   const [showContent, setShowContent] = useState(false);
//   const jobTitles = ["Web Developer", "SEO Specialist","Graphic Designer","Digital Marketing Specialist"];
//   const [titleIndex, setTitleIndex] = useState(0);
//   const [letterIndex, setLetterIndex] = useState(0);
//   const introText = [
//     { text: "Hello...", position: "bottom-53 start-50" }, 
//     { text: "Welcome to my portfolio website.", position: "bottom-44 start-50" },
//     { text: "My name is Brian...", position: "bottom-30 start-50" }
//   ];
//   const [displayedTitle, setDisplayedTitle] = useState('');
//   const [isLogoAnimationDone,setIsLogoAnimationDone]=useState(false);
//   const [isTextAnimationDone,setIsTextAnimationDone]=useState(false);
//   const navigate = useNavigate();

//   return (
//     <main
//       className="bg-[url(/images/landingPage.jpg)] bg-cover min-w-screen min-h-screen bg-no-repeat bg-center"
//     >
//       <LogoAnimation onAnimationComplete={()=>{setIsLogoAnimationDone(true)}}/>
//       <section className="text-left text-white flex flex-col items-start pl-10">
//         <article className={`absolute bottom-53 max-sm:bottom-38 max-sm:start-25 start-50 ${isLogoAnimationDone===true?"":"hidden"} max-sm:font-extrabold`}>
//           <TypingAnimation 
//             onAnimationComplete={()=>{setIsTextAnimationDone(true)}} 
//             className="text-4xl sm:text-5xl" // Added responsive text size
//           />
//         </article>
//         <article className={`absolute bottom-48 start-50 max-sm:bottom-35 max-sm:start-25 ${isTextAnimationDone===true?"":"hidden"} max-sm:font-extrabold`}>
//           <JobTitleAnimation 
//             jobTitles={jobTitles} 
//             className="text-2xl sm:text-3xl" // Added responsive text size
//           />
//         </article>

//         <article 
//           className={`font-[Monotype_Corsiva] text-teal-100 font-bold absolute bottom-29 start-80 max-sm:start-25 max-sm:bottom-25 ${isTextAnimationDone===true?"opacity-100":"opacity-0"} transition-opacity duration-1000 ease-in`}
//           style={{ transform: "rotate(-7.1deg)" }}
//         >
//           <span className="text-xl sm:text-2xl">At your Service!</span> {/* Added responsive text size */}
//         </article>
        
//         <button
//           onClick={() => navigate('/home')}
//           className={`border-2 rounded-2xl p-2 hover:bg-[#D3A522] hover:text-[#334277] hover:font-bold flex justify-center absolute bottom-10.5 start-100 max-sm:start-27 
//           transition-opacity duration-1000 ease-in ${isTextAnimationDone ? "opacity-100" : "opacity-0"}
//           text-base sm:text-lg`} // Added responsive text size
//         >
//           Go To Website
//         </button>
//       </section>
//     </main>
//   );
// }
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
    // <main className="h-screen overflow-hidden max-sm:overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
    //   <LogoAnimation onAnimationComplete={()=>{setIsLogoAnimationDone(true)}}/>
    //   <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
    //   <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#181889]/10 rounded-full blur-3xl -z-10"></div>
    //   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCCCD4]/10 rounded-full blur-3xl -z-10"></div>
      

      
    // {/* Hero Section */}
    //    <section className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-12 md:py-20 mt-15">
    //      {/* Text Content */}
    //      <article className="md:w-1/2 space-y-6 md:pr-8">
    //        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight gradient-text">
    //        <TypingAnimation 
    //         onAnimationComplete={()=>{setIsTextAnimationDone(true)}} 
    //         className="text-4xl sm:text-5xl font-extrabold" 
    //         keepTextAfterComplete={true} 
    //       />
    //          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3A522] to-white">Hello,</span> I'm Brian */}
    //        </h1>
         
    //        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-[Merriweather]">
    //          <JobTitleAnimation 
    //        jobTitles={jobTitles} 
    //          className="text-2xl sm:text-3xl"
    //       />
    //        </h2>      
    //        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
    //        Whether you need a stunning website, powerful branding, search-optimized content, or complete digital marketing strategies, I can help bring your vision to life.
    //        </p>
          
    //        <div className="pt-4 flex flex-wrap gap-4">
    //          <button className="bg-gradient-to-r from-[#D3A522] to-amber-700 hover:from-[#D3A522]/90 hover:to-amber-800 text-white text-lg px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#D3A522]/20">
    //            View My Work
    //          </button>
            
    //          <button className="border border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-6 py-6 rounded-lg">
    //            Contact Me
    //          </button>          
    //        </div>
    //      </article>
        
    //      {/* Hero Image */}
    //      {/* <figure className="md:w-1/2 mt-12 md:mt-0">
    //        <div className="relative">
    //         <div className="absolute -inset-0 bg-gradient-to-r from-[#181889] to-[#D3A522] rounded-2xl blur opacity-100"></div>
    //          <div className="relative bg-[#CACACE]/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
    //            <img 
    //              src="../../images/landingPage.jpg
    //              " 
    //              alt="Web Development" 
    //              className="w-full h-auto object-cover opacity-85 mix-blend-luminosity"
    //            />
    //            <div className="absolute inset-0 bg-gradient-to-t from-[#181889]/80 via-transparent to-transparent"></div>
    //            <div className="absolute bottom-6 left-6 right-6">
    //              <div className="flex items-center space-x-3">
    //                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
    //                <span className="text-green-400 font-medium glowing-text">Available for new projects</span>
    //              </div>
    //            </div>
    //          </div>
    //        </div>
    //      </figure> */}
    //      {/* Hero Image */}
    //       <figure className="md:w-1/2 mt-12 md:mt-0">
    //         <div className="relative">
    //           <div className="absolute -inset-0 bg-gradient-to-r from-[#181889] to-[#D3A522] rounded-2xl blur opacity-100"></div>
    //           <div className="relative bg-[#CACACE]/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
    //             <img 
    //               src="../../images/landingPage.jpg" 
    //               alt="Web Development" 
    //               className="w-full h-auto object-cover opacity-85 mix-blend-luminosity"
    //             />
    //             <div className="absolute inset-0 bg-gradient-to-t from-[#181889]/80 via-transparent to-transparent"></div>
    //             <div className="absolute bottom-6 left-6 right-6">
    //               <div className="flex items-center space-x-3">
    //                 {/* Pulsating Effect */}
    //                 <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
    //                 <span className="text-green-400 font-medium transition-opacity duration-300 ease-in-out hover:opacity-100">
    //                   Available for new projects
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </figure>

    //    </section>
    // </main>

    // terstststststts
    // <main className="relative h-screen overflow-hidden">
    //   {/* Background Image */}
    //   <div className="absolute inset-0 z-[-1]">
    //     <img 
    //       src="../../images/landingPage.jpg" 
    //       alt="Background" 
    //       className="w-[100vh] h-[100vh] bg-cover"
    //     />
    //     {/* Background Overlay */}
    //     <div className="absolute inset-0 bg-gradient-to-t from-[#181889]/80 via-transparent to-transparent"></div>
    //   </div>

    //   {/* Grid and Blur Effects */}
    //   <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
    //   <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#181889]/10 rounded-full blur-3xl -z-10"></div>
    //   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCCCD4]/10 rounded-full blur-3xl -z-10"></div>

    //   {/* Logo Animation */}
    //   <LogoAnimation onAnimationComplete={() => setIsLogoAnimationDone(true)} />

    //   {/* Main Content */}
    //   <section className=" mt-30

    //    container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-12 md:py-20 relative z-10">
    //     {/* Text Content */}
    //     <article className="md:w-1/2 space-y-6 md:pr-8">
    //       {isLogoAnimationDone && (
    //         <>
    //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight gradient-text">
    //             <TypingAnimation 
    //               onAnimationComplete={() => setIsTextAnimationDone(true)} 
    //               className="text-4xl sm:text-5xl font-extrabold" 
    //               keepTextAfterComplete={true} 
    //             />
    //           </h1>
              
           
    //           {isTextAnimationDone&&(
    //           <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-[Merriweather]">
    //             <JobTitleAnimation 
    //               // onAnimationComplete={() => setIsJobAnimationDone(true)} 
    //               jobTitles={jobTitles} 
    //               className="text-2xl sm:text-3xl"
    //             />
    //           </h2>      
    //           )}
    //           {isJobAnimationDone&&(
    //             <>
    //             <p className="text-lg md:text-xl text-white/80 max-w-2xl">
    //             Whether you need a stunning website, powerful branding, search-optimized content, or complete digital marketing strategies, I can help bring your vision to life.
    //           </p>
              
    //           <section className="pt-4 flex flex-wrap gap-4">
    //             <button className="bg-gradient-to-r from-[#D3A522] to-amber-700 hover:from-[#D3A522]/90 hover:to-amber-800 text-white text-lg px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#D3A522]/20"  onClick={() => navigate("/home")}>
    //               View My Work
    //             </button>
                
    //             <button className="border border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-6 py-6 rounded-lg" onClick={() => navigate("/contact")}>
    //               Contact Me
    //             </button>          
    //           </section>
    //           </>
    //           )}
              
    //         </>
    //          )}
            
          
    //     </article>
    //   </section>
    // </main>

    <main className='absolute top-0 left-0 bg-[url("../../images/landingPage.jpg")] bg-cover'>

    </main>

  );
}



// import React from "react";

// const Index = () => {
//   return (
//     <main className="bg-gradient-to-br from-[#CCCCD4] to-[#181889] min-h-screen font-merriweather overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#181889]/10 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CCCCD4]/10 rounded-full blur-3xl -z-10"></div>
      
//       {/* Header */}
//       <header className="container mx-auto px-4 py-8">
//         <div className="w-48 md:w-56">
//           <img 
//             src="../../images/navLogo.png" 
//             alt="Portfolio Logo" 
//             className="max-w-full h-auto"
//           />
//         </div>
//       </header>
      
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
//         {/* Text Content */}
//         <div className="md:w-1/2 space-y-6 md:pr-8">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3A522] to-white">Hello,</span> I'm Brian
//           </h1>
          
//           <h2 className="text-2xl md:text-3xl lg:text-4xl text-white">
//             Web Developer & Designer
//           </h2>
          
//           <p className="text-lg md:text-xl text-white/80 max-w-2xl">
//             I create beautiful, responsive websites that deliver exceptional user experiences. Let's work together to bring your vision to life.
//           </p>
          
//           <div className="pt-4 flex flex-wrap gap-4">
//             <button className="bg-gradient-to-r from-[#D3A522] to-amber-700 hover:from-[#D3A522]/90 hover:to-amber-800 text-white text-lg px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#D3A522]/20">
//               View My Work
//             </button>
            
//             <button className="border border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-6 py-6 rounded-lg">
//               Contact Me
//             </button>
//           </div>
//         </div>
        
//         {/* Hero Image */}
//         <div className="md:w-1/2 mt-12 md:mt-0">
//           <div className="relative">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#181889] to-[#D3A522] rounded-2xl blur opacity-50"></div>
//             <div className="relative bg-[#CACACE]/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
//               <img 
//                 src="../../images/landingPage.jpg
//                 " 
//                 alt="Web Development" 
//                 className="w-full h-auto object-cover opacity-85 mix-blend-luminosity"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#181889]/80 via-transparent to-transparent"></div>
//               <div className="absolute bottom-6 left-6 right-6">
//                 <div className="flex items-center space-x-3">
//                   <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
//                   <span className="text-green-400 font-medium">Available for new projects</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Stats Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-wrap justify-center gap-8 md:gap-12">
//           <div className="text-center">
//             <p className="text-4xl md:text-5xl font-bold text-white mb-2">5+</p>
//             <p className="text-white/70">Years Experience</p>
//           </div>
//           <div className="text-center">
//             <p className="text-4xl md:text-5xl font-bold text-white mb-2">100+</p>
//             <p className="text-white/70">Projects Completed</p>
//           </div>
//           <div className="text-center">
//             <p className="text-4xl md:text-5xl font-bold text-white mb-2">50+</p>
//             <p className="text-white/70">Happy Clients</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Index;