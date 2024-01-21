import BreadCrumb from "../components/layout/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";


const Projects = () => {
    useDocumentTitle('Projects');
    return (
        <div className="content">
            <BreadCrumb />
            <div>
                Projects page content
            </div>


        </div>
    )
}

export default Projects;