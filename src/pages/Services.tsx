import BreadCrumb from "../components/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";



const Services = () => {
    useDocumentTitle('Services');
    return (

        <div className="content">
            <BreadCrumb />
            <h3>Services page element goes here</h3>
        </div>

    )
}

export default Services;