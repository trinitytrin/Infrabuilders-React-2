
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Loader from '../components/layout/Loader';


const Layout = () => {
    return (
        <HelmetProvider>

            <Loader />
            <div className="wrapper">

                <Header />
                {/* now the pages and their routes go here  */}
                <div id='main'>
                    <Outlet />
                </div>

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

export default Layout;