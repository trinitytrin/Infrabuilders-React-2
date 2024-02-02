
import { clientTestimonial } from "../../../data/clientTestimonialInfo";
import SingleTestimonial from "./SingleTestimonial";




const ClientTestimonial = () => {
    return (

        <div className="xboot-standard-row testimonial-section gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2 className="area-title">Our Testimonial</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonial-wrapper text-center testimonial-slider">

                            {clientTestimonial.map(t => (
                                <SingleTestimonial key={t.id} testimonial={t} />

                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientTestimonial;