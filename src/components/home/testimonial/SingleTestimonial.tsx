interface Testimonial {
    id: number;
    clientName: string;
    position: string;
    clientPhoto: string;
    testimonial: string;
}

interface Props {
    testimonial: Testimonial;
}


const SingleTestimonial = ({ testimonial }: Props) => {
    return (
        <div className="single-testimonial">
            <blockquote>
                <img src={testimonial.clientPhoto} alt={testimonial.clientName} className="client-image" />
                <p className="client-name">{testimonial.clientName}
                    <span className="position">{testimonial.position}</span>
                </p>
                <p>{testimonial.testimonial}</p>
            </blockquote>
        </div>
    )
}

export default SingleTestimonial;