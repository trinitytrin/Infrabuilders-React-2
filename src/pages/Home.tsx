

import BannerHome from "../components/BannerHome";
import BrandLogos from "../components/BrandLogos";
import ClientTestimonial from "../components/ClientTestimonial";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ShowcaseHome from "../components/ShowcaseHome";
import WorkProgressBar from "../components/WorkProgressBar";

const Home = () => {
    return (
        <>
            <Loader />
            <div className="wrapper">

                <Header />
                <BannerHome />
                <div className="content">
                    <ShowcaseHome />
                    <WorkProgressBar />
                    <Counter />
                    <ClientTestimonial />
                    <BrandLogos />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home;