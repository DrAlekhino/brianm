import { useEffect } from 'react';
import '../App.css';
import "../global.css"
import NavBar from '../components/NavBar';
import PageWithNoContent from "../components/NoContent"

export default function Qualifications() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const certificates = [
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      year: "2023"
    },
    {
      title: "Advanced Digital Marketing",
      issuer: "HubSpot Academy",
      year: "2022"
    },
    {
      title: "UX Design Professional",
      issuer: "Interaction Design Foundation",
      year: "2022"
    },
    {
      title: "SEO Specialist",
      issuer: "SEMrush",
      year: "2021"
    }
  ];

  return (
    <main className="min-h-screen w-screen overflow-y-auto" style={{ background: "linear-gradient(to bottom left, #CCCCD4, #181889)" }}>
     <PageWithNoContent/>
      <NavBar />
      
      {/* Header Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-12 animate-fade-in-down">
        <h1 className="text-3xl font-bold text-center mb-4">
          CV and Certificates
        </h1>
        <p className="text-white text-center max-w-2xl mx-auto mb-8">
          Explore my professional journey, credentials, and achievements. Here, you'll find my CV, industry-recognized certifications, and a link to my LinkedIn profile. Each section highlights my dedication to growing as a digital marketer, designer, and strategist.
        </p>
      </section>

      {/* CV Section */}
      <section className="flex flex-col md:flex-row justify-center gap-8 px-4 mb-16 animate-fade-in-up animate-delay-200">
        <article className='
          bg-[#CACACE] rounded-2xl p-8
          flex flex-col items-center
          transition-all duration-500
          hover:shadow-lg hover:shadow-amber-500/20
          max-w-2xl w-full
        ' style={{ boxShadow: "inset -6px 3px 6px rgba(202, 202, 206, 0.1)" }}>
          <h2 className="text-2xl font-bold text-[#181889] mb-6">My Curriculum Vitae</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className='
              bg-[#D3A522] hover:bg-amber-600
              text-[#181889] hover:text-white
              font-medium py-3 px-6 rounded-lg
              transition-all duration-300
              transform hover:scale-105
              flex-1 text-center
            '>
              View CV
            </button>
            
            <button className='
              bg-[#181889] hover:bg-[#3A4786]
              text-white
              font-medium py-3 px-6 rounded-lg
              transition-all duration-300
              transform hover:scale-105
              flex-1 text-center
            '>
              Download CV
            </button>
          </div>
        </article>
      </section>

      {/* Certificates Section */}
      <section className="px-4 pb-16 animate-fade-in-up animate-delay-300">
        <h2 className="text-2xl font-bold text-center text-amber-400 mb-8">My Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="
                bg-white/10 backdrop-blur-sm rounded-xl p-6
                border border-white/20
                transition-all duration-500 hover:scale-[1.02]
                hover:shadow-lg hover:shadow-amber-500/20
                flex flex-col
              "
            >
              <div className="bg-[#D3A522] text-[#181889] w-12 h-12 rounded-full flex items-center justify-center mb-4 self-center">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-center mb-1">Issued by: {cert.issuer}</p>
              <p className="text-gray-400 text-center">{cert.year}</p>
              <button className='
                mt-4 px-4 py-2
                bg-transparent border border-[#D3A522]
                text-[#D3A522] hover:bg-[#D3A522] hover:text-[#181889]
                rounded-lg
                transition-all duration-300
                text-sm
              '>
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="px-4 pb-16 animate-fade-in-up animate-delay-400">
        <div className="bg-[#181889]/50 rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Connect With Me</h2>
          <p className="text-gray-300 mb-6">View my full professional background and recommendations on LinkedIn</p>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='
              inline-block px-8 py-3
              bg-[#0077B5] hover:bg-[#006097]
              text-white font-medium
              rounded-lg
              transition-all duration-300
              transform hover:scale-105
            '
          >
            Visit My LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
}