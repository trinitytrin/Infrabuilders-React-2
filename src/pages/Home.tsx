
import BannerHome from "../components/home/BannerHome";
import BrandLogos from "../components/home/BrandLogos";
import ClientTestimonial from "../components/home/testimonial/ClientTestimonial";
import Counter from "../components/home/Counter";
import ShowcaseHome from "../components/home/ShowcaseHome";
import WorkProgressBar from "../components/home/WorkProgressBar";


import '../../public/css/elements.css';
import '../../style.css';
import '../../public/css/responsive.css';
import '../../public/css/custom.css';

const Home = () => {
    return (
        <>
            <BannerHome />
            <div className="content">
                <ShowcaseHome />
                <WorkProgressBar />
                <Counter />
                <ClientTestimonial />
                <BrandLogos />
            </div>


        </>
    )
}

export default Home;