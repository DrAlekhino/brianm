import React, { useEffect } from 'react';
import '../App.css';
import "../global.css"
import NavBar from '../components/NavBar';
import PageWithNoContent from "../components/NoContent"

export default function DigitalMarketing() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <main className="min-h-screen w-screen pb-10 overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      <PageWithNoContent/>
      <NavBar />
      <section className="flex-grow flex flex-col items-center justify-start px-4 py-8">
        {/* Animated Header Section */}
        <div className="animate-fade-in-down animate-delay-100 text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Digital Marketing
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Explore my work on Google and Facebook campaigns, including setup, launch, and optimization strategies.
          </p>
        </div>

        {/* Animated Content Sections */}
        <section className='flex flex-col md:flex-row justify-center gap-8 w-full max-w-6xl mb-8'>
          {/* Google Ad Campaign - Animated Card */}
          <article className='
            w-full md:w-1/2 px-6 py-4
            bg-white/10 backdrop-blur-sm
            rounded-xl border border-white/20
            shadow-lg
            animate-fade-in-right animate-delay-300
            hover:shadow-amber-500/20 hover:border-amber-400/30
            transition-all duration-500
            group
            min-h-[400px]
          '>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-amber-400">Google Ad Campaign</h3>
              <div className="relative h-2 w-3/4 bg-gray-700 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full animate-progress-bar"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 font-light">
                <span className="font-medium text-white">Description:</span><br />
                This video showcases my expertise in designing and launching a high-performing Google Ads campaign for an online florist. It details the full process, from in-depth keyword research to crafting optimized ad copy and precise audience targeting.
              </p>
              
              <div className="mt-6 aspect-video bg-black/30 rounded-lg overflow-hidden border border-white/10 animate-pulse-slow">
                {/* Placeholder for video embed */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/50">Watch Video</span>
                </div>
              </div>
            </div>
          </article>

          {/* Facebook Ad Campaign - Animated Card */}
          <article className='
            w-full md:w-1/2 px-6 py-4
            bg-white/10 backdrop-blur-sm
            rounded-xl border border-white/20
            shadow-lg
            animate-fade-in-left animate-delay-500
            hover:shadow-blue-500/20 hover:border-blue-400/30
            transition-all duration-500
            group
            min-h-[400px]
          '>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-400">Facebook Ad Campaign</h3>
              <div className="relative h-2 w-3/4 bg-gray-700 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full animate-progress-bar"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 font-light">
                <span className="font-medium text-white">Description:</span><br />
                This video showcases my expertise in crafting and launching a high-performing Facebook Ads campaign for an online florist. From defining the ideal target audience to designing compelling ad creatives and optimizing placements.
              </p>
              
              <div className="mt-6 aspect-video bg-black/30 rounded-lg overflow-hidden border border-white/10 animate-pulse-slow">
                {/* Placeholder for video embed */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/50">Watch Video</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Additional space at bottom to ensure all content is scrollable */}
        <div className="h-8"></div>
      </section>
    </main>
  );
}