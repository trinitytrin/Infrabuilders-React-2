import { useParams } from "react-router-dom";
import BreadCrumb from "../components/layout/BreadCrumb";
import DummySingleProject from "../components/projects/DummySingleProject";
import useDocumentTitle from "../hooks/useDocumentTitle";



const ProjectDetails = () => {
    const itemId = Number(useParams().id?.toString());
    useDocumentTitle('Project - ' + itemId);
    return (

        <div className="content">
            <BreadCrumb />
            <DummySingleProject />

        </div>
    )
}

export default ProjectDetails;