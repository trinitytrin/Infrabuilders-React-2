import BreadCrumb from "../components/layout/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";


const About = () => {
    useDocumentTitle('About');
    return (
        <div className="content">
            <BreadCrumb />
            <div>
                About page content
            </div>


        </div>
    )
}

export default About;