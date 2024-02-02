import BreadCrumb from "../components/layout/BreadCrumb";
import ProjectBox from "../components/projects/ProjectBox";
import useDocumentTitle from "../hooks/useDocumentTitle";
import '../../public/css/elements.css';

const ProjectsLanding = () => {
    useDocumentTitle('Projects');
    return (

        <div className="content">
            <BreadCrumb />
            <ProjectBox />

        </div>

    )
}

export default ProjectsLanding;