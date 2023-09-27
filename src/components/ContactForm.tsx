

const ContactForm = () => {
    return (
        <>
            <div className="section-title text-left">
                <h2 className="area-title">Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore ab voluptatem. Ut obcaecati quasi ullam, eaque deserunt, itaque soluta!</p>
            </div>
            <form id="infra-contact-form" action="#" method="POST" name="infra_contact_form">

                <div className="form-head">
                    <div className="single-input">
                        <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="single-input">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                </div>
                <div className="form-head">
                    <div className="single-input">
                        <input type="text" name="phone" placeholder="Phone" />
                    </div>
                </div>
                <div className="form-head">
                    <div className="single-input">

                        <select id="service-type" name="service-type" className="form-control dropdown-show-right" required>
                            <option value="">--- Select Service Type ---</option>
                            <option value="planning">Design</option>
                            <option value="engineering">Implementations and Supply</option>
                            <option value="project_management">Maintenance</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="single-input">
                        <select id="time" name="time" className="form-control dropdown-show-right" required>
                            <option value="">--- Select Time-bound ---</option>
                            <option value="right-away">Right Away</option>
                            <option value="in-3-months">In 3 Months</option>
                            <option value="in-6-months">In 6 Months</option>
                            <option value="just-asking">Just Asking</option>
                        </select>
                    </div>
                </div>


                <div className="form-body">
                    <textarea name="message" className="text-area" cols={30} rows={10} placeholder="Please describe your requirements or queries here..." required></textarea>
                </div>
                <button className="button-boxed" type="submit" value="submit">Send message <i className="ti-arrow-right"></i></button>
                <p className="xboot-send-message"></p>
            </form>
        </ >

    )
}

export default ContactForm;