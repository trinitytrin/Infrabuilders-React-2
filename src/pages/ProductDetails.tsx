import { useParams } from "react-router-dom";
import BreadCrumb from "../components/layout/BreadCrumb";
import SingleProductDetails from "../components/products/SingleProductDetails";
import useDocumentTitle from "../hooks/useDocumentTitle";
import '../../public/css/elements.css';
const ProductDetails = () => {
    const itemId = Number(useParams().id?.toString());
    useDocumentTitle('Product - ' + itemId);
    return (

        <div className="content">
            <BreadCrumb />
            <SingleProductDetails />

        </div>
    )
}

export default ProductDetails;