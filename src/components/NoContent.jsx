import React, { useEffect, useState } from 'react';
import '../../src/App.css';
import "../../src/global.css"
// import NavBar from '../src/components/NavBar';

export default function PageWithNoContent() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    // Show the small overlay after component mounts
    const timer = setTimeout(() => {
      setShowComingSoon(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
      
      
      {/* Small coming soon overlay */}
      {showComingSoon && (
        <div className="fixed top-15 right-1/2 z-50 animate-fade-in-up">
          <div className="bg-[#3A4786] rounded-lg p-4 border border-amber-400/30 shadow-xl flex items-start max-w-xs">
            <div className="flex-shrink-0 mr-3 text-amber-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white">Content Coming Soon</h3>
              <p className="text-sm text-white/80 mt-1">
                I am working on this section. Check back later!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-2 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty page content */}
      {/* <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-[#3A4786]/50 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4">
            This Page Is Under Development
          </h2>
          <p className="text-white/80">
            We're creating something amazing for this section. 
            Stay tuned for updates!
          </p>
        </div>
      </div> */}
    </main>
  );
}