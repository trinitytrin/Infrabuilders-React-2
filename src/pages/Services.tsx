import BreadCrumb from "../components/BreadCrumb";
import ClientTestimonial from "../components/ClientTestimonial";
import Counter from "../components/Counter";
import ServicesBox from "../components/ServicesBox";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Outlet } from "react-router-dom";



const Services = () => {
    useDocumentTitle('Services');
    return (
        <>
            <div className="content">
                <BreadCrumb />
                <ServicesBox />
                <Counter />
                <ClientTestimonial />
            </div>
            <Outlet />

        </>
    )
}

export default Services;