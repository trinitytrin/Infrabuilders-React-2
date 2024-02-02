
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Outlet } from "react-router-dom";
import '../../public/css/elements.css';

const Design = () => {
    useDocumentTitle('Design');
    return (
        <Outlet />
    )
}

export default Design;