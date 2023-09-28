import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
//import { servicesCategory } from './data/services-category';
import Services from './pages/Services';
import Design from './pages/Design';
import Projects from './pages/Projects';
import Download from './pages/Download';




function App() {

  // useEffect(() => {
  //   // Load modernizr-2.8.3.min.js
  //   const modernizrScript = document.createElement('script');
  //   modernizrScript.src = '/js/modernizr-2.8.3.min.js';
  //   document.body.appendChild(modernizrScript);

  //   // Load plugins.js as a module
  //   const pluginsScript = document.createElement('script');
  //   pluginsScript.src = '/js/plugins.js';
  //   pluginsScript.type = 'module';
  //   document.body.appendChild(pluginsScript);

  //   const mainScript = document.createElement('script');
  //   mainScript.src = '/js/main.js';
  //   document.body.appendChild(mainScript);

  //   return () => {
  //     // Clean up by removing the scripts when the component unmounts
  //     document.body.removeChild(modernizrScript);
  //     document.body.removeChild(pluginsScript);
  //     document.body.removeChild(mainScript);
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

          <Route path="services" element={<Services />}>
            <Route path="design" element={<Design />} />


          </Route>

          <Route path="projects" element={<Projects />} />
          <Route path="download" element={<Download />} />
          <Route path="contact" element={<Contact />} />

        </Routes>


        <Footer />
      </div>


      <Helmet>
        <script src='/js/modernizr-2.8.3.min.js' async></script>
        <script src='/js/plugins.js' type="module" defer></script>
        <script src='/js/main.js' type="text/javascript" async></script>

      </Helmet >

    </HelmetProvider >



  )
}

export default App;



