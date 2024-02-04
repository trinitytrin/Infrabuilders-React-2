
import { useState } from "react";
import useProjects from "../../hooks/useProjects";
import SingleProjectBox from "./SingleProjectBox";


const ProjectBox = () => {
    const { data } = useProjects();
    const [projects, setProjects] = useState(data);

    const activeArray = [
        {
            field: 'all',
            value: true
        },
        {
            field: 'completed',
            value: false
        },
        {
            field: 'ongoing',
            value: false
        },
        {
            field: 'upcoming',
            value: false
        },
    ];
    const [isActive, setIsActive] = useState(activeArray);
    const handleClick = (cat: string) => {
        setIsActive(activeArray.map(item => (item.field === cat) ? { ...item, value: true } : { ...item, value: false }));
        if (cat === 'all')
            setProjects(data);
        else
            setProjects(data.filter(p => p.status === cat));

        console.log(isActive);

    }


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
                            <li className={(isActive[0].value) ? "active" : ''}><a href="" onClick={() => handleClick('all')}> All</a></li>
                            <li><a href="" onClick={() => handleClick('completed')} className={(isActive[1].value) ? "active" : ''} >Completed</a></li>
                            <li><a href="" onClick={() => handleClick('ongoing')} className={(isActive[2].value) ? "active" : ''}>Ongoing</a></li>
                            <li><a href="" onClick={() => handleClick('upcoming')} className={(isActive[3].value) ? "active" : ''}>Upcoming</a></li>
                        </ul>
                    </div>

                    <div className="row">

                        <div className="portfolio portfolio-gutter portfolio-style-2 portfolio-masonry portfolio-not-full">

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