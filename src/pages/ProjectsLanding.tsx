import BreadCrumb from "../components/layout/BreadCrumb";
import ProjectBox from "../components/projects/ProjectBox";
import useDocumentTitle from "../hooks/useDocumentTitle";


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