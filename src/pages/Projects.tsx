import { Outlet } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import '../../public/css/elements.css';

const Projects = () => {
    useDocumentTitle('Projects');
    return (
        <Outlet />
    )
}

export default Projects;