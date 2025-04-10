import { Link } from "react-router-dom";
import { Project } from "../../hooks/useProjects";


interface Props {
    project: Project;
}

const SingleProjectBox = ({ project }: Props) => {
    return (

        <div className="portfolio-item col-md-4 col-sm-6">
            <div className="portfolio-item-content">
                <div className="item-thumbnail">
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