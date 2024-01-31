import { Link } from "react-router-dom";
import { Product } from "../../hooks/useProducts";

interface Props {
    product: Product;
}

const SingleProductBox = ({ product }: Props) => {
    return (

        <div className="portfolio-item col-md-4 col-sm-6">
            <div className="portfolio-item-content">
                <div className="item-thumbnail-custom">
                    <img src={product.image_urls[0]} alt="" />

                </div>
                <div className="portfolio-description">
                    <h4><Link to={`/services/products/${product.id}`}>{product.title}</Link></h4>
                    <ul className="portfolio-category">
                        {product.tags.map(t => (
                            <li key={t}><a href="#">{t}</a></li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleProductBox;