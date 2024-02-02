
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

                <script src='/js/plugins.js' type='module' ></script>
                <script src='/js/main.js'  ></script>

            </Helmet >

        </HelmetProvider >
    )
}

export default Home;