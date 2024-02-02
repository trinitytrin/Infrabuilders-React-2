import AboutUsBox from "../components/about/AboutUsBox";
import OurTeamBox from "../components/about/OurTeamBox";
import BreadCrumb from "../components/layout/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";

import '../../public/css/elements.css';

const About = () => {
    useDocumentTitle('About');
    return (
        <div className="content">
            <BreadCrumb />
            <AboutUsBox />
            <OurTeamBox />


        </div>
    )
}

export default About;