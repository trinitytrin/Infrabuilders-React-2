import { Link } from "react-router-dom";


const AboutUsBox = () => {
    return (
        <div className="about-standard-row">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="adfas">
                            <div className="about-me-text text-left">
                                <div className="section-title-2">
                                    <h2 className="area-title">Infrabuilders</h2>
                                    <p>Somthing about what infrabuilders does</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nobis architecto magni! Quaerat nesciunt, quam magni enim. Consequuntur cupiditate, eaque sapiente maiores, dolorum nulla a velit sequi quae! Sit repudiandae accusamus veritatis maiores facilis beatae soluta quam dolorum, non fugit dolorem illum, cupiditate maxime quo aperiam, </p>
                                <div className="about-block-icons">
                                    <div className="single-block-option">
                                        <i className="ti-vector"></i>
                                        <p>creative</p>
                                    </div>
                                    <div className="single-block-option">
                                        <i className="ti-heart"></i>
                                        <p>passionate</p>
                                    </div>
                                    <div className="single-block-option">
                                        <i className="ti-bolt-alt"></i>
                                        <p>professional</p>
                                    </div>
                                </div>
                                <Link to={'/contact'} className="button-boxed">Contact Us <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-me-img text-right">
                            <img src="img/avatar/1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsBox;