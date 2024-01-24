import { Link } from "react-router-dom";


const ProjectBox = () => {
    return (

        <div className="xboot-standard-row white-bg service-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2 className="area-title">Our Projects</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-content">
                    <div className="portfolio-filter-wrap text-center">
                        <ul className="portfolio-filter">
                            <li className="active"><a href="#" data-filter="*"> All</a></li>
                            <li><a href="#" data-filter=".cat-1">Completed</a></li>
                            <li><a href="#" data-filter=".cat-3">Ongoing</a></li>
                            <li><a href="#" data-filter=".cat-2">Upcoming</a></li>
                        </ul>
                    </div>


                    <div className="portfolio portfolio-gutter portfolio-style-2 portfolio-masonry portfolio-not-full portfolio-4-column">
                        <div className="portfolio-item cat-1 cat-3 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/1.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><Link to={'/projects/projectId'}>single project title</Link></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-1 cat-2 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/8.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-3 cat-4 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/5.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-5 cat-2 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/4.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-5 cat-2 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/5.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-4 cat-2 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/6.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-1 cat-3 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/7.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item cat-1 cat-3 ">
                            <div className="portfolio-item-content">
                                <div className="item-thumbnail">
                                    <img src="img/portfolio/home/9.jpg" alt="" />
                                    <a href="img/portfolio/box/1.jpg" className="button" data-lightbox="roadtrip"><i className="ti-zoom-in"></i></a>
                                </div>
                                <div className="portfolio-description">
                                    <h4><a href="#">single project title</a></h4>
                                    <ul className="portfolio-category">
                                        <li><a href="#">Design</a></li>
                                        <li><a href="#">Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="pagination-area">
                        <div className="load-more text-center">
                            <a className="button lode-more" href="#">view more<i className="ti-reload"></i></a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProjectBox;