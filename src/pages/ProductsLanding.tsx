import BreadCrumb from "../components/layout/BreadCrumb";
import ProductsBox from "../components/products/ProductsBox";
import useDocumentTitle from "../hooks/useDocumentTitle";

import '../../public/css/elements.css';
const ProductsLanding = () => {
    useDocumentTitle('Products');
    return (

        <div className="content">
            <BreadCrumb />
            <ProductsBox />

        </div>

    )
}

export default ProductsLanding;