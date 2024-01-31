import { Link } from "react-router-dom";
import { Solution } from "../../hooks/useSolutions"

interface Props {
    solution: Solution;
}

const SingleSolutionBox = ({ solution }: Props) => {
    return (

        <div className="portfolio-item col-md-4 col-sm-6">
            <div className="portfolio-item-content">
                <div className="item-thumbnail-custom">
                    <img src={solution.image_urls[0]} alt="" />

                </div>
                <div className="portfolio-description">
                    <h4><Link to={`/services/solutions/${solution.id}`}>{solution.title}</Link></h4>
                    <ul className="portfolio-category">
                        {solution.tags.map(t => (
                            <li key={t}><a href="#">{t}</a></li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default SingleSolutionBox;