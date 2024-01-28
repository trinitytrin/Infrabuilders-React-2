import { Project } from "../../data/projectsInfo";

interface Props {
    project: Project;
}

const SingleProjectPage = ({ project }: Props) => {
    return (
        <>
            <div className="single-project-area xboot-standard-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-project-slider single-project-thumb-wrapper">
                                <a href="img/infra-demo/engg-1.jpg" data-lightbox="img-gallery"><img src="img/infra-demo/engg-1.jpg" alt="" /></a>
                                <a href="img/infra-demo/engg-2.jpg" data-lightbox="img-gallery"><img src="img/infra-demo/engg-2.jpg" alt="" /></a>
                                <a href="img/infra-demo/engg-3.jpg" data-lightbox="img-gallery"><img src="img/infra-demo/engg-3.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="single-project-description">
                                <h2 className="single-project-title">Single Project title Lorem ipsum.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                                    odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim
                                    assum.
                                </p>
                                <p>Illum molestias cupiditate eveniet dolore obcaecati voluptatibus est quos eos id recusandae officia. Cupiditate, voluptates quibusdam ipsum vel corporis laboriosam id est doloremque?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eum at nulla eaque molestias nostrum, facilis! Tempore voluptatem quisquam aperiam voluptate, repellendus deserunt quod repudiandae soluta, numquam, fugiat
                                    quos atque maiores perferendis ex totam rem laboriosam quaerat. Saepe enim atque explicabo iusto veritatis esse, blanditiis, soluta vitae rem, obcaecati aut.</p>

                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
                                    odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim
                                    assum.
                                </p>
                                <p>Illum molestias cupiditate eveniet dolore obcaecati voluptatibus est quos eos id recusandae officia. Cupiditate, voluptates quibusdam ipsum vel corporis laboriosam id est doloremque?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eum at nulla eaque molestias nostrum, facilis! Tempore voluptatem quisquam aperiam voluptate, repellendus deserunt quod repudiandae soluta, numquam, fugiat
                                    quos atque maiores perferendis ex totam rem laboriosam quaerat. Saepe enim atque explicabo iusto veritatis esse, blanditiis, soluta vitae rem, obcaecati aut.</p>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Project info</h4>
                                <ul className="single-portfolio-meta">
                                    <li><span>Client:</span>Adam Mill</li>
                                    <li><span>Date:</span>18 March 2020</li>
                                    <li><span>Link: </span><a href="https://www.youtube.com/watch?v=vBPgmASQ1A0" target="_blank" rel="noopener noreferrer">Live Demo<i className="ti-arrow-top-right"></i></a></li>
                                    <li><span>Download: </span><a href="#" target="_blank" rel="noopener noreferrer">pdf link <i className="ti-download"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <aside className="single-widget">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tags">
                                        <a href="#">Ongoing</a>
                                        <a href="#">Engineering</a>

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
                                        <img src="img/infra-demo/slider-3.jpg" alt="" />
                                        <a href="img/infra-demo/slider-3.jpg" className="zoom-btn" data-lightbox="related-img-gallery"><i className="fa fa-search"></i></a>
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
                                        <img src="img/infra-demo/slider-4.jpg" alt="" />
                                        <a href="img/infra-demo/slider-4.jpg" className="zoom-btn" data-lightbox="related-img-gallery"><i className="fa fa-search"></i></a>
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
                                        <img src="img/infra-demo/slider-2.jpeg" alt="" />
                                        <a href="img/infra-demo/slider-2.jpeg" className="zoom-btn" data-lightbox="related-img-gallery"><i className="fa fa-search"></i></a>
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
        </>
    )
}

export default SingleProjectPage;