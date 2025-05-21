import React, { useEffect, useState } from 'react';

export default function UnderConstruction() {
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(false);
    }, 5000); // Auto-hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
      <div 
        className="bg-[#3A4786] rounded-lg p-3 border border-amber-400/30 shadow-lg flex items-start"
        style={{ maxWidth: '280px' }}
      >
        <div className="flex-shrink-0 mr-2 text-amber-400 pt-0.5">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-white/90 leading-tight">
            Site is still under construction. You may encounter unfinished sections.
          </p>
          <button
            onClick={() => setShowNotice(false)}
            className="mt-1 text-xs text-amber-400 hover:text-amber-300 transition-colors float-right"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}