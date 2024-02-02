import { Link } from "react-router-dom";




const WorkProgressBar = () => {
    return (

        <div className="xboot-standard-row gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="no-pad-area">
                            <div className="about-me-text text-left">
                                <div className="section-title-2">
                                    <h2 className="area-title">INFRABUILDERS</h2>
                                    <p>Helping to Build the Infrastructure</p>
                                </div>
                                <p>The description here and the cartegory names have to confirmed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nobis architecto magni! Quaerat nesciunt, quam magni enim. Consequuntur cupiditate, eaque
                                    sapiente maiores, dolorum nulla a velit sequi quae! Sit repudiandae accusamus veritatis maiores facilis beatae soluta quam dolorum, non fugit dolorem illum, cupiditate maxime quo aperiam, </p>
                                <div className="about-block-icons">
                                    <div className="single-block-option">
                                        <i className="ti-vector"></i>
                                        <p>creative</p>
                                    </div>
                                    <div className="single-block-option">
                                        <i className="ti-heart"></i>
                                        <p>minimalist</p>
                                    </div>
                                    <div className="single-block-option">
                                        <i className="ti-bolt-alt"></i>
                                        <p>professional</p>
                                    </div>
                                </div>
                                <Link to={'/contact'} className="button">Contact Us <i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="progress-bar-area">
                            <div className="single-skill-bar">
                                <p>Engineering</p>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration={'0.5s'} data-wow-delay={'.5s'} role={"progressbar"} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }} >
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-skill-bar">
                                <p>Planning</p>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration={"0.8s"} data-wow-delay={".6s"} role={"progressbar"} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        <span>50%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-skill-bar">
                                <p>Architecture</p>
                                <div className="progress">
                                    <div className="progress-bar  wow fadeInLeft" data-wow-duration={"0.8s"} data-wow-delay={".7s"} role={"progressbar"} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-skill-bar">
                                <p>Project Management</p>
                                <div className="progress">
                                    <div className="progress-bar  wow fadeInLeft" data-wow-duration={"0.8s"} data-wow-delay={".8s"} role={"progressbar"} aria-valuenow={64} aria-valuemin={0} aria-valuemax={100} style={{ width: '64%' }}>
                                        <span>64%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="single-skill-bar">
                                <p>Others</p>
                                <div className="progress">
                                    <div className="progress-bar  wow fadeInLeft" data-wow-duration={"0.8s"} data-wow-delay={".9s"} role={"progressbar"} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} style={{ width: '82%' }} >
                                        <span>82%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default WorkProgressBar;