import BreadCrumb from "../components/BreadCrumb";
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

            </div>
            <Outlet />

        </>
    )
}

export default Services;