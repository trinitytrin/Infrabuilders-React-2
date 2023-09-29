
import BreadCrumb from "../components/BreadCrumb";
import ContactForm from "../components/ContactForm";
import ContactInfoWidget from "../components/ContactInfoWidget";
import ContactMap from "../components/ContactMap";
import useDocumentTitle from "../hooks/useDocumentTitle";



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