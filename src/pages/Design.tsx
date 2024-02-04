
import useDocumentTitle from "../hooks/useDocumentTitle";
import { Outlet } from "react-router-dom";


const Design = () => {
    useDocumentTitle('Design');
    return (
        <Outlet />
    )
}

export default Design;