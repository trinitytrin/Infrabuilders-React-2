import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import '../style.css';
import '../public/css/responsive.css';
import '../public/css/elements.css';
import '../public/css/custom.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Design from './pages/Design';
import Projects from './pages/Projects';
import Download from './pages/Download';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import ServicesLanding from './pages/ServicesLanding';
import DesignLanding from './pages/DesignLanding';
import ErrorPage from './pages/ErrorPage';
import ProjectsLanding from './pages/ProjectsLanding';

import ProjectDetails from './pages/ProjectDetails';
import Layout from './routing/Layout';
import EngineeringDesign from './pages/EngineeringDesign';
import ProcessDesign from './pages/ProcessDesign';
import ProductDesign from './pages/ProductDesign';
import OperatingProcedureDesign from './pages/OperatingProcedureDesign';
import ImplementationSupply from './pages/ImplementationSupply';
import Maintenance from './pages/Maintenance';
import Solutions from './pages/Solutions';
import SolutionsLanding from './pages/SolutionsLanding';
import SolutionDetails from './pages/SolutionDetails';
import Products from './pages/Products';
import ProductsLanding from './pages/ProductsLanding';
import ProductDetails from './pages/ProductDetails';
//import { Project, projects } from './data/projectsInfo';

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
  //let selectedProject = projects.filter(p => p.id === 1);


  return (


    <HelmetProvider>




      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
            <Route path="" index={true} element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="about" element={<About />} />

            <Route path="services" element={<Services />} >
              <Route path="" element={<ServicesLanding />} />
              <Route path="design" element={<Design />}>
                <Route path="" element={<DesignLanding />} />
                <Route path="architectural-design" element={<ArchitecturalDesign />} />
                <Route path="engineering-design" element={<EngineeringDesign />} />
                <Route path="process-design" element={<ProcessDesign />} />
                <Route path="product-design" element={<ProductDesign />} />
                <Route path="operating-procedure-design" element={<OperatingProcedureDesign />} />
              </Route>
              <Route path="implementations-and-supply" element={<ImplementationSupply />} />
              <Route path="maintenance" element={<Maintenance />} />
              <Route path="solutions" element={<Solutions />}>
                <Route path="" element={<SolutionsLanding />} />
                <Route path=":id" element={<SolutionDetails />} />
              </Route>
              <Route path="products" element={<Products />}>
                <Route path="" element={<ProductsLanding />} />
                <Route path=":id" element={<ProductDetails />} />
              </Route>
            </Route>

            <Route path="projects" element={<Projects />} >
              <Route path="" element={<ProjectsLanding />} />
              <Route path=":id" element={<ProjectDetails />} />
            </Route>

            <Route path="download" element={<Download />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>






      <Helmet>
        <script src='/js/modernizr-2.8.3.min.js' ></script>
        <script src='/js/plugins.js' type='module' async></script>
        <script src='/js/main.js'  ></script>
        <script src="/js/ajax-mail.js" type='module'></script>

      </Helmet >


    </HelmetProvider >



  )
}

export default App;



