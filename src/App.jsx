import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import "../src/global.css"
import LandingPage from './pages/LandingPage';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Portfolios from './pages/Portfolios';
import Qualifications from './pages/Qualifications';
import ContactMe from './pages/ContactMe';
import DigitalMarketing from './pages/DigitalMarketing';
import ImageCorousel from './components/ImageCourousel';
import GraphicDesigning from './pages/GraphicDesigning';
import WebDevelopment from './pages/WebDevelopment';
import SeoOptimiztion from './pages/SeoOptimization';
// import ImageCarousel from '../components/ImageCarousel';



function App() {
 function Test() {
    return (
        <main className='bg-[url("/images/landingPage.jpg")] bg-cover bg-center absolute left-0 top-0 h-screen bg-no-repeat w-full font-[Merriweather]'>
          <ImageCarousel/>
        </main>
    );
}

  function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());
      useEffect(() => {
        setYear(new Date().getFullYear());
         }, []);
  
    return(
      <footer className='relative flex bg-[#D3E3FD]'>
        <figure className='w-1/3 ml-3 mb-2 max-md:w-1/4 '>
          <img src="images/mainLogo.png" alt="footer logo" width={200} height={100}  className='max-sm:absolute max-sm:w-[5rem] max-sm:top-7'/>
        </figure>
        <section className='flex w-2/3 max-sm:block max-sm:text-[0.5rem] '>
          <article className='m-8 max-sm:text-xs'>
            <h5 className='text-xs font-bold'>QuickLinks</h5>
            <div>
              <ul  className='text-sm text-blue-700  '>
                <li className="hover:underline"><Link to="/home">Home</Link></li>
                <li className="hover:underline"><Link to="/portfolios">Portfolios</Link></li>
              </ul>
            </div>
            <div>
            <ul className='text-sm text-blue-700 '>
            <li className="hover:underline"><Link to="/cv-qualifications">CV & Qualifications</Link></li>
            <li className="hover:underline"><Link to="/contact">Contact Me</Link></li>
              </ul>
            </div>
          </article>
          <article className='m-8'>
            <h5 className='text-xs font-bold'>Portfolios</h5>
            <div>
              <ul className='text-sm text-blue-700 '>
                <li className="hover:underline"><Link to="/digital-marketing">Digital Merketing</Link></li>
                <li className="hover:underline"><Link to="/graphic-designing">Graphic Designing</Link></li>
              </ul>
            </div>
            <div>
            <ul className='text-sm text-blue-700 '>
            <li className="hover:underline"><Link to="/web-development">Web Development</Link></li>
            <li className="hover:underline"><Link to="/seo">SEO Optimization</Link></li>
              </ul>
            </div>
          </article>
          <figure className='max-sm:absolute bottom-15 max-sm:left-3 absolute right-15'>
           <p>0ddf</p>
          </figure>

        </section>
        <aside className='absolute bottom-0 flex left-1/2  text-xs max-sm:left-15 '>Copyright&copy; {year}. All rights reserved</aside>
      </footer>
    )
    
  }

  return (
    <Router>
      <Routes>
        {/* <NavBar/> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/cv-qualifications" element={<Qualifications />} />
        <Route path="/test" element={<Test />} />
        
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/seo" element={<SeoOptimiztion/>} /> 
      </Routes>
       {/* <Footer/> */}
    </Router>
  );
}

export default App;