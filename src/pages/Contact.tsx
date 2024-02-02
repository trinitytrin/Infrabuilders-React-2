
import BreadCrumb from "../components/layout/BreadCrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoWidget from "../components/contact/ContactInfoWidget";
import ContactMap from "../components/contact/ContactMap";
import useDocumentTitle from "../hooks/useDocumentTitle";

import '../../public/css/elements.css';

const Contact = () => {
    useDocumentTitle('Contact');
    return (
        <div className="content">
            <BreadCrumb />
            <div className="xboot-standard-row contact-section contact-style-2">
                <div className="container">
                    <div className="row">
                        {/* this one is for contact form */}
                        <div className="col-md-8 col-md-push-4">
                            <div className="section-title text-left">
                                <h2 className="area-title">Contact</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore ab voluptatem. Ut obcaecati quasi ullam, eaque deserunt, itaque soluta!</p>
                            </div>
                            <ContactForm />
                        </div>
                        <br />

                        {/* this one is for contact info */}
                        <div className="col-md-4 col-md-pull-8">
                            <ContactInfoWidget />
                        </div>
                    </div>
                </div>
            </div>
            {/* contact form and infor ends */}

            {/* map starts */}

            <ContactMap />


        </div>




    )
}

export default Contact;