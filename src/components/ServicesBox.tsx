import { services } from '../data/servicesInfo';
import SingleService from './SingleService';

const ServicesBox = () => {
    return (
        <div className="xboot-standard-row white-bg service-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2 className="area-title">Our services</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service) => (
                        <SingleService key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ServicesBox;