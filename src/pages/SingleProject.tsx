import BreadCrumb from "../components/layout/BreadCrumb";
import DummySingleProject from "../components/projects/DummySingleProject";
import SingleProjectPage from "../components/projects/SingleProjectPage";
import { Project } from "../data/projectsInfo";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface Props {
    project: Project;
}
const SingleProject = () => {
    useDocumentTitle('Project - 1');
    return (

        <div className="content">
            <BreadCrumb />
            <DummySingleProject />

        </div>


    )
}

export default SingleProject;