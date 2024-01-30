import BlogPageDetails from "../components/blogpages/BlogPageDetails";
import BreadCrumb from "../components/layout/BreadCrumb";
import useBlogPages from "../hooks/useBlogPages";
import useDocumentTitle from "../hooks/useDocumentTitle";


const OperatingProcedureDesign = () => {
    useDocumentTitle('Operating Procedure Design');

    const { data } = useBlogPages();
    const page = data.find(p => p.slug === 'operating-procedure-design');

    return (
        <div className="content">
            <BreadCrumb />
            <BlogPageDetails page={page} />


        </div>
    )
}

export default OperatingProcedureDesign;