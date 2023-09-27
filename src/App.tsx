import { Helmet, HelmetProvider } from 'react-helmet-async';
import Contact from './pages/Contact';
import './App.css';



function App() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.setAttribute('src', '/js/modernizr-2.8.3.min.js');
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.setAttribute('src', '/js/plugins.js');
  //   script.setAttribute('type', 'module');
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.setAttribute('src', '/js/main.js');
  //   script.setAttribute('type', 'text/javascript');
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // }, []);



  return (

    <HelmetProvider>

      <Contact />

      <Helmet>
        <script src='/js/modernizr-2.8.3.min.js'></script>
        <script src='/js/main.js' type="text/javascript"></script>
        <script src='/js/plugins.js' type="module" async></script>

      </Helmet>

    </HelmetProvider>

  )
}

export default App;



