import { Outlet } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";



const Solutions = () => {
    useDocumentTitle('Solutions');
    return (
        <Outlet />
    )
}

export default Solutions;