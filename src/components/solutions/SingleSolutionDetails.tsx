import { useParams } from "react-router-dom";
import useSolutions, { Solution } from "../../hooks/useSolutions";
import ItemNavigation from "../layout/ItemNavigation";
import SingleSolutionBox from "./SingleSolutionBox";


const SingleSolutionDetails = () => {
    const { data } = useSolutions();
    const params = useParams();
    const solution_id = Number(params.id?.toString());
    const solution = data.find(s => s.id === solution_id) as Solution;
    const related_solutions = data.filter(s => s.tags.some(tag => solution.tags.includes(tag)))
        .filter(s => s.id !== solution_id);



    const solution_description = solution?.description.split('\n');
    return (
        <div>
            <div className="single-project-area xboot-standard-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-project-slider single-project-thumb-wrapper">
                                <a href={solution?.image_urls[0]} data-lightbox="img-gallery"><img src={solution?.image_urls[0]} alt="" /></a>
                                {solution?.image_urls.filter((_s, i) => i !== 0).map((photo, i) => (
                                    <a key={i} href={photo} data-lightbox="img-gallery"><img src={photo.slice(1)} alt="" /></a>
                                ))}

                                <small style={{ color: "gray" }}>Click on the photo to browse more photos of this solution</small>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="single-project-description">
                                <h2 className="single-project-title">{solution?.title}</h2>
                                {solution_description?.map((para, i) => (
                                    <p key={i} >{para}</p>
                                ))}

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Solution info</h4>
                                <ul className="single-portfolio-meta">
                                    <li><span>Client:</span> <span>{solution?.client}</span></li>
                                    <li><span>Date:</span>{solution?.start_date}</li>
                                    <li><span>Status:</span>{solution?.status}</li>
                                    <li><span>Link: </span><a href={solution?.video_link} target="_blank" rel="noopener noreferrer">Live Demo<i className="ti-arrow-top-right"></i></a></li>
                                    <li><span>Download: </span><a href={solution?.pdf_link} target="_blank" rel="noopener noreferrer" download={solution.title} >PDF link <i className="ti-download"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <aside className="single-widget">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tags">
                                        {solution?.tags.map(t => (
                                            <a key={t} href="#">{t}</a>
                                        ))}


                                    </div>
                                </aside>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Products used in this Service</h4>
                                {solution.used_products !== undefined ? <>
                                    <ul className="single-portfolio-meta">
                                        {solution.used_products?.map(product => (
                                            <li><a href={product.url} target="_blank" rel="noopener noreferrer">{product.name} <i className="ti-arrow-top-right"></i></a></li>
                                        ))}

                                    </ul>

                                </> : <div><p> No used products to show for this project</p></div>}

                            </div>
                        </div>

                    </div>
                    <ItemNavigation data={'solutions'} dataSize={data.length} itemId={Number(solution?.id)} />

                </div>
            </div>
            {(related_solutions.length > 0) &&
                <div className="gray-bg xboot-standard-row related-project-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-title text-center">
                                    <h2 className="area-title">Related Solutions</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="related-project-slider portfolio-style-2">
                                {related_solutions.map(related_solution => (

                                    <SingleSolutionBox solution={related_solution} />

                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleSolutionDetails;