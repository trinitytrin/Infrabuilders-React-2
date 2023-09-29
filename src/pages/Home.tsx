

import BannerHome from "../components/BannerHome";
import BrandLogos from "../components/BrandLogos";
import ClientTestimonial from "../components/ClientTestimonial";
import Counter from "../components/Counter";
import ShowcaseHome from "../components/ShowcaseHome";
import WorkProgressBar from "../components/WorkProgressBar";

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