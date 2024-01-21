

const ContactInfoWidget = () => {
    return (
        <div className="contact-widget-wrap">
            <div className="contact-sub-heading">
                <h5>Get in Touch</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
            <div className="widget-content">
                <div className="single-address-box">
                    <div className="address-icon">
                        <i className="ti-location-pin"></i>
                    </div>
                    <div className="address-text">
                        <p>Address : 20 street name here <br /> Office 82, New City US.</p>
                    </div>
                </div>
                <div className="single-address-box">
                    <div className="address-icon">
                        <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="address-text">
                        <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                    </div>
                </div>
                <div className="single-address-box">
                    <div className="address-icon">
                        <i className="ti-mobile"></i>
                    </div>
                    <div className="address-text">
                        <p>+1 023565859</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactInfoWidget;