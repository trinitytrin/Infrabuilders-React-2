import { Link } from "react-router-dom";

interface Service {
    id: number;
    title: string;
    path: string;
    shortDescription: string;
    icon: string;
}

interface Props {
    service: Service;
}

const SingleService = ({ service }: Props) => {
    return (

        <div className="col-md-4 col-sm-6">
            <div className="single-service text-left">
                <div className="service-header">
                    <i className={service.icon}></i>
                    <h3>{service.title}</h3>
                </div>
                <p>{service.shortDescription}</p>
                <Link to={'/services' + service.path} className="button">Details<i className="ti-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default SingleService;