import { projects } from "../../data/projectsInfo";


const DummySingleProject = () => {
    const project = projects.find(p => p.id === 1);
    return (
        <div>
            <div className="single-project-area xboot-standard-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-project-slider single-project-thumb-wrapper">
                                <a href="/img/infra-demo/eidgah-2.png" data-lightbox="img-gallery"><img src="/img/infra-demo/eidgah-2.png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-1.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-1.png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-3.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-3.png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-4.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-4.png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-5.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-5.png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-6.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-6png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-7.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-7.png" alt="" /></a>
                                <a href="/img/infra-demo/eidgah-8.png" data-lightbox="img-gallery"><img src="img/infra-demo/eidgah-8.png" alt="" /></a>
                                <small style={{ color: "gray" }}>Click on the photo to browse more photos of this project</small>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="single-project-description">
                                <h2 className="single-project-title">{project?.title}</h2>
                                {project?.description.map(para => (
                                    <p>{para}</p>
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
                                            <a href="#">{t}</a>
                                        ))}


                                    </div>
                                </aside>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Products used in this Service</h4>
                                <ul className="single-portfolio-meta">
                                    <li><a href="infra-implementationsupply.html" target="_blank" rel="noopener noreferrer">Product 1 Name <i className="ti-arrow-top-right"></i></a></li>

                                    <li><a href="infra-implementationsupply.html" target="_blank" rel="noopener noreferrer">Product 2 Name <i className="ti-arrow-top-right"></i></a></li>

                                    <li><a href="infra-implementationsupply.html" target="_blank" rel="noopener noreferrer">Product 3 Name <i className="ti-arrow-top-right"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="post-navigation-wrapper">
                                <a href="#" className="post-navigation previous-post"><i className="fa fa-angle-left"></i>Previous Project</a>
                                <a href="infra-home.html" className="button-inner-project"><i className="ti-view-grid"></i></a>
                                <a href="#" className="post-navigation next-post">Next Project<i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>

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
                            <div className="portfolio-item col-md-4 col-sm-6 cat-1 cat-3 ">
                                <div className="portfolio-item-content">
                                    <div className="item-thumbnail">
                                        <img src="/img/infra-demo/slider-3.jpg" alt="" />
                                        <a href="/img/infra-demo/slider-3.jpg" className="zoom-btn" data-lightbox="related-img-gallery"><i className="fa fa-search"></i></a>
                                    </div>
                                    <div className="portfolio-description">
                                        <h4><a href="#">single project title</a></h4>
                                        <ul className="portfolio-category">
                                            <li><a href="#">Project</a></li>
                                            <li><a href="#">Category Name</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item col-md-4 col-sm-6 cat-1 cat-3 ">
                                <div className="portfolio-item-content">
                                    <div className="item-thumbnail">
                                        <img src="/img/infra-demo/slider-4.jpg" alt="" />
                                        <a href="/img/infra-demo/slider-4.jpg" className="zoom-btn" data-lightbox="related-img-gallery"><i className="fa fa-search"></i></a>
                                    </div>
                                    <div className="portfolio-description">
                                        <h4><a href="#">single project title</a></h4>
                                        <ul className="portfolio-category">
                                            <li><a href="#">Project</a></li>
                                            <li><a href="#">Category Name</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-item col-md-4 hidden-sm cat-1 cat-3 ">
                                <div className="portfolio-item-content">
                                    <div className="item-thumbnail">
                                        <img src="/img/infra-demo/slider-2.jpeg" alt="" />
                                        <a href="/img/infra-demo/slider-2.jpeg" className="zoom-btn" data-lightbox="related-img-gallery"><i className="fa fa-search"></i></a>
                                    </div>
                                    <div className="portfolio-description">
                                        <h4><a href="#">single project title</a></h4>
                                        <ul className="portfolio-category">
                                            <li><a href="#">Project</a></li>
                                            <li><a href="#">Category Name</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummySingleProject;