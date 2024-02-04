import { Outlet } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Products = () => {
    useDocumentTitle('Products');
    return (
        <Outlet />
    )
}

export default Products;