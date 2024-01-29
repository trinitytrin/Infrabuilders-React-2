import { useParams } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import ItemNavigation from "../layout/ItemNavigation";
import { Project } from '../../hooks/useProjects';
import SingleProjectBox from "./SingleProjectBox";



const DummySingleProject = () => {
    const { data } = useProjects();
    const params = useParams();
    const project_id = Number(params.id?.toString());
    const project = data.find(p => p.id === project_id) as Project;
    const related_projects = data.filter(p => p.tags.some(tag => project.tags.includes(tag)))
        .filter(p => p.id !== project_id);



    const project_description = project?.description.split('\n');
    return (
        <div>
            <div className="single-project-area xboot-standard-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-project-slider single-project-thumb-wrapper">
                                <a href={project?.image_url[0]} data-lightbox="img-gallery"><img src={project?.image_url[0]} alt="" /></a>
                                {project?.image_url.filter((_p, i) => i !== 0).map((photo, i) => (
                                    <a key={i} href={photo} data-lightbox="img-gallery"><img src={photo.slice(1)} alt="" /></a>
                                ))}

                                <small style={{ color: "gray" }}>Click on the photo to browse more photos of this project</small>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="single-project-description">
                                <h2 className="single-project-title">{project?.title}</h2>
                                {project_description?.map((para, i) => (
                                    <p key={i} >{para}</p>
                                ))}

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Project info</h4>
                                <ul className="single-portfolio-meta">
                                    <li><span>Client:</span> <span>{project?.client}</span></li>
                                    <li><span>Date:</span>{project?.start_date}</li>
                                    <li><span>Link: </span><a href={project?.video_link} target="_blank" rel="noopener noreferrer">Live Demo<i className="ti-arrow-top-right"></i></a></li>
                                    <li><span>Download: </span><a href="#" target="_blank" rel="noopener noreferrer">pdf link <i className="ti-download"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <aside className="single-widget">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tags">
                                        {project?.tags.map(t => (
                                            <a key={t} href="#">{t}</a>
                                        ))}


                                    </div>
                                </aside>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Products used in this Service</h4>
                                {project.used_products !== undefined ? <>
                                    <ul className="single-portfolio-meta">
                                        {project.used_products?.map(product => (
                                            <li><a href={product.url} target="_blank" rel="noopener noreferrer">{product.name} <i className="ti-arrow-top-right"></i></a></li>
                                        ))}

                                    </ul>

                                </> : <div><p> No used products to show for this project</p></div>}

                            </div>
                        </div>

                    </div>
                    <ItemNavigation data={'projects'} dataSize={data.length} itemId={Number(project?.id)} />

                </div>
            </div>

            <div className="gray-bg xboot-standard-row related-project-list">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-title text-center">
                                <h2 className="area-title">Related Projects</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="related-project-slider portfolio-style-2">
                            {related_projects.map(related_project => (
                                <div className="portfolio-item col-md-4 hidden-sm cat-1 cat-3 ">
                                    <SingleProjectBox project={related_project} />
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummySingleProject;