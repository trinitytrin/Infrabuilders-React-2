import BreadCrumb from "../components/layout/BreadCrumb";
import ServicesBox from "../components/services/ServicesBox";
import useDocumentTitle from "../hooks/useDocumentTitle";


const ServicesLanding = () => {
    useDocumentTitle('Services');
    return (
        <div className="content">
            <BreadCrumb />
            <ServicesBox />

        </div>

    )
}

export default ServicesLanding;