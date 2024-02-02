import { Outlet } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../../public/css/elements.css';
const Products = () => {
    useDocumentTitle('Products');
    return (
        <Outlet />
    )
}

export default Products;