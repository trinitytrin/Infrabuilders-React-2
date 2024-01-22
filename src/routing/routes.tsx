import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Download from "../pages/Download";
import Layout from "./Layout";
import Design from "../pages/Design";
import ServicesLanding from "../pages/ServicesLanding";
import ArchitecturalDesign from "../pages/ArchitecturalDesign";
import DesignLanding from "../pages/DesignLanding";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            {
                path: 'services', element: <Services />,
                children: [
                    { path: '', element: <ServicesLanding /> },
                    {
                        path: 'design', element: <Design />,
                        children: [
                            { path: '', element: <DesignLanding /> },
                            { path: 'architectural', element: <ArchitecturalDesign /> },
                        ]
                    },
                ]
            },
            { path: 'projects', element: <Projects /> },
            { path: 'download', element: <Download /> },

        ]
    },


]);

export default router;