
import { useState } from "react";
import useProjects from "../../hooks/useProjects";
import SingleProjectBox from "./SingleProjectBox";


const ProjectBox = () => {
    const { data } = useProjects();
    const [projects, setProjects] = useState(data);
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
                            <li className="active"><a href="#" onClick={() => setProjects(data)}> All</a></li>
                            <li><a href="#" onClick={() => setProjects(data.filter(p => p.status === 'completed'))} >Completed</a></li>
                            <li><a href="#" onClick={() => setProjects(data.filter(p => p.status === 'ongoing'))}>Ongoing</a></li>
                            <li><a href="#" onClick={() => setProjects(data.filter(p => p.status === 'upcoming'))}>Upcoming</a></li>
                        </ul>
                    </div>

                    <div className="row">
                        <div className="portfolio portfolio-gutter portfolio-style-2 portfolio-masonry portfolio-not-full portfolio-3-column">
                            {projects.map(p => (
                                <SingleProjectBox key={p.id} project={p} />

                            ))}

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