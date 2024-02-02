import BlogPageDetails from "../components/blogpages/BlogPageDetails";
import BreadCrumb from "../components/layout/BreadCrumb";
import useBlogPages from "../hooks/useBlogPages";
import useDocumentTitle from "../hooks/useDocumentTitle";
import '../../public/css/elements.css';

const Maintenance = () => {
    useDocumentTitle('Maintenance');

    const { data } = useBlogPages();
    const page = data.find(p => p.slug === 'maintenance');

    return (
        <div className="content">
            <BreadCrumb />
            <BlogPageDetails page={page} />


        </div>
    )
}

export default Maintenance