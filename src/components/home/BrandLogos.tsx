
import { brandLogos } from "../../data/brandLogosInfo";

const BrandLogos = () => {



    return (

        <div className="white-bg clients-log">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="brand-logo-slider">
                            {brandLogos.map(logo => (
                                <div key={logo.id} className="single-brand-logo">
                                    <img src={logo.logoImage} alt={logo.brandName} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BrandLogos;