
import BlogPageDetails from '../components/blogpages/BlogPageDetails';
import BreadCrumb from '../components/layout/BreadCrumb'
import useBlogPages from '../hooks/useBlogPages';
import useDocumentTitle from '../hooks/useDocumentTitle';

import '../../public/css/elements.css';
import '../../style.css';
import '../../public/css/responsive.css';
import '../../public/css/custom.css';


const ArchitecturalDesign = () => {
    useDocumentTitle('Architectural Design');

    const { data } = useBlogPages();
    const page = data.find(p => p.slug === 'architectural-design');

    return (
        <div className="content">
            <BreadCrumb />
            <BlogPageDetails page={page} />


        </div>
    )
}

export default ArchitecturalDesign;