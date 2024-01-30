import BlogPageDetails from "../components/blogpages/BlogPageDetails";
import BreadCrumb from "../components/layout/BreadCrumb";
import useBlogPages from "../hooks/useBlogPages";
import useDocumentTitle from "../hooks/useDocumentTitle";


const ImplementationSupply = () => {
    useDocumentTitle('Implementation and Supply');

    const { data } = useBlogPages();
    const page = data.find(p => p.slug === 'implementation-and-supply');

    return (
        <div className="content">
            <BreadCrumb />
            <BlogPageDetails page={page} />


        </div>
    )
}

export default ImplementationSupply;