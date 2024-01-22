import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Loader from './components/layout/Loader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Design from './pages/Design';
import Projects from './pages/Projects';
import Download from './pages/Download';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import ServicesLanding from './pages/ServicesLanding';
import DesignLanding from './pages/DesignLanding';

//import { useEffect } from 'react';




function App() {



  // useEffect(() => {
  //   // Load modernizr-2.8.3.min.js

  //   const modernizrScript = document.createElement('script');
  //   modernizrScript.src = '/js/modernizr-2.8.3.min.js';
  //   document.body.appendChild(modernizrScript);

  //   const mainScript = document.createElement('script');
  //   mainScript.src = '/js/main.js';
  //   document.body.appendChild(mainScript);

  //   // Load plugins.js as a module
  //   const pluginsScript = document.createElement('script');
  //   pluginsScript.src = '/js/plugins.js';
  //   pluginsScript.type = 'module';
  //   document.body.appendChild(pluginsScript);



  //   return () => {
  //     // Clean up by removing the scripts when the component unmounts

  //     document.body.removeChild(pluginsScript);
  //     document.body.removeChild(mainScript);
  //     document.body.removeChild(modernizrScript);
  //   };
  // }, []);


  return (


    <HelmetProvider>

      <Loader />
      <div className="wrapper">

        <Header />
        {/* now the pages and their routes go here  */}



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="services" element={<Services />} >
            <Route path="" element={<ServicesLanding />} />
            <Route path="design" element={<Design />}>
              <Route path="" element={<DesignLanding />} />
              <Route path="architectural" element={<ArchitecturalDesign />} />
            </Route>
          </Route>




          <Route path="projects" element={<Projects />} />
          <Route path="download" element={<Download />} />
          <Route path="contact" element={<Contact />} />

        </Routes>


        <Footer />
      </div>


      <Helmet>
        <script src='/js/modernizr-2.8.3.min.js' ></script>
        <script src='/js/plugins.js' type='module' async></script>
        <script src='/js/main.js' defer></script>
        <script src="js/ajax-mail.js"></script>

      </Helmet >

    </HelmetProvider >



  )
}

export default App;



