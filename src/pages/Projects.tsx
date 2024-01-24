import { Outlet } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";


const Projects = () => {
    useDocumentTitle('Projects');
    return (
        <Outlet />
    )
}

export default Projects;