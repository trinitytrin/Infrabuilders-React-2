
import BannerHome from "../components/home/BannerHome";
import BrandLogos from "../components/home/BrandLogos";
import ClientTestimonial from "../components/home/testimonial/ClientTestimonial";
import Counter from "../components/home/Counter";
import ShowcaseHome from "../components/home/ShowcaseHome";
import WorkProgressBar from "../components/home/WorkProgressBar";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    return (
        <HelmetProvider>
            <BannerHome />
            <div className="content">
                <ShowcaseHome />
                <WorkProgressBar />
                <Counter />
                <ClientTestimonial />
                <BrandLogos />
            </div>


            <Helmet>
                <script src='/js/modernizr-2.8.3.min.js' ></script>
                <script src='/js/plugins.js' type='module' async></script>
                <script src='/js/main.js'  ></script>
                <script src="js/ajax-mail.js" type='module'></script>

                <link rel="stylesheet" href="/css/elements.css" />
                <link rel="stylesheet" href="/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />
                <link rel="stylesheet" href="/css/custom.css" />
                <link rel="stylesheet" href="/src/App.css" />
            </Helmet >

        </HelmetProvider >
    )
}

export default Home;