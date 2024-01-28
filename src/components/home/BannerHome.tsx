import { Link } from "react-router-dom";





const BannerHome = () => {


    return (




        <div className="slider-area slider-style-1 banner-infra">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-static-content">
                            <h1 className="cd-headline clip is-full-width">
                                <span>Animated text about </span>
                                <br />
                                <span className="cd-words-wrapper">
                                    <b className="is-visible"> Infrabuilders</b>
                                    <b> Infra's services</b>
                                    <b> something else</b>
                                </span>
                            </h1>
                            <p>Some static text about infrabuilders...Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque</p>
                            <Link to={'/contact'} className="button">Contact Us <i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default BannerHome;