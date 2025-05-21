import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import '../global.css';
import ImageCorousel from '../components/ImageCourousel';

export default function SeoOptimization() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const seoStrategies = [
    "Keyword Research & Optimization",
    "Technical SEO Audits",
    "Content Strategy Development",
    "Backlink Building",
    "Local SEO Optimization",
    "Performance Analytics"
  ];

  return (
    <main className="min-h-screen w-screen overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      <NavBar />
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 py-8">
        {/* Content Section */}
        <article className='w-full md:w-1/2 px-6 animate-fade-in-right animate-delay-100'>
          <h1 className="text-3xl font-bold text-center mb-6">
            SEO Optimization
          </h1>
          <p className="text-white text-center max-w-2xl mx-auto mb-8">
            In today's digital landscape, SEO is essential for visibility and growth. My SEO optimization expertise focuses on improving search rankings, increasing organic traffic, and creating targeted strategies that drive business results.
          </p>
          <div className="animate-fade-in-up animate-delay-300">
            <ImageCorousel/>
          </div>
        </article>

        {/* Image Section - Now properly sized to match other pages */}
        <figure className='w-full md:w-1/2 flex justify-center items-center animate-fade-in-left animate-delay-200'>
          <img 
            src="../../public/images/SEO Optimization.png" 
            alt="SEO Optimization illustration" 
            className='h-120 w-150 '
            style={{
              boxShadow: "-6px 3px 6px rgba(0, 0, 0, 0.3)",
              animation: "float 6s ease-in-out infinite",
              maxWidth: "100%"
            }} 
            width={250}
            height={300}
          />
        </figure>
      </section>

      {/* SEO Strategies Section */}
      <section className="py-12 px-4 animate-fade-in-up animate-delay-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-amber-400 mb-8">
            My SEO Strategies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoStrategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20
                transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20
                animate-fade-in-up"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{strategy}</h3>
                </div>
                <p className="text-gray-300">
                  {index % 2 === 0 
                    ? "Comprehensive analysis and implementation for maximum visibility"
                    : "Data-driven approach to improve your search rankings"
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 px-4 bg-[#181889]/20 animate-fade-in-up animate-delay-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            SEO Success Stories
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10
              transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">E-commerce Store</h3>
              <p className="text-gray-300 mb-4">
                Increased organic traffic by 240% in 6 months through comprehensive keyword optimization and technical SEO improvements.
              </p>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" 
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            
            <div className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10
              transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Local Business</h3>
              <p className="text-gray-300 mb-4">
                Achieved #1 rankings for 15+ local keywords, resulting in 300% more leads within 4 months.
              </p>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full" 
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}