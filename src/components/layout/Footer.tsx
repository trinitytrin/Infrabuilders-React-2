

const Footer = () => {
    return (
        <>
            <footer className="footer-area">

                <div className="footer-top dark-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-footer-widget footer-info-widget">
                                    <h2 className="logo">
                                        <a href="#"><img src="img/logo/logo-white.png" alt="" />  </a>
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur.</p>
                                    <a href="#" className="button">About Us <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="address-widget">
                                        <p><span>Address:</span>20 street name here
                                            <br /> Office 82, New City US.</p>
                                        <p><span>Phone:</span>+1 023565859</p>
                                        <p><span>Email:</span>admin@yoursite.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-6">
                                <div className="single-footer-widget">
                                    <ul className="footer-menu">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-footer-widget subscribe-widget-wrapper">
                                    <h4 className="widget-title">subscribe newsletter</h4>
                                    <div className="subscribe-widget">
                                        <form action="#">
                                            <input type="email" placeholder="Email" />
                                            <button type="submit"><i className="ti-arrow-right"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="copy-right">
                                    <p>All &copy; reserved by <a href="#">xBoot</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="social-bookmark-area">
                                    <ul className="social-bookmark">
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-google"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                        <li><a href="#"><i className="ti-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer;