import { Link } from "react-router-dom";
import { Project } from "../../hooks/useProjects";


interface Props {
    project: Project;
}

const SingleProjectBox = ({ project }: Props) => {
    return (

        <div className="portfolio-item">
            <div className="portfolio-item-content">
                <div className="item-thumbnail-custom">
                    <img src={project.image_url[0]} alt="" />

                </div>
                <div className="portfolio-description">
                    <h4><Link to={`/projects/${project.id}`}>{project.title}</Link></h4>
                    <ul className="portfolio-category">
                        {project.tags.map(t => (
                            <li key={t}><a href="#">{t}</a></li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleProjectBox;