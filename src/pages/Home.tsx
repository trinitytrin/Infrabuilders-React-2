

import BannerHome from "../components/home/BannerHome";
import BrandLogos from "../components/home/BrandLogos";
import ClientTestimonial from "../components/home/ClientTestimonial";
import Counter from "../components/home/Counter";
import ShowcaseHome from "../components/home/ShowcaseHome";
import WorkProgressBar from "../components/home/WorkProgressBar";

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