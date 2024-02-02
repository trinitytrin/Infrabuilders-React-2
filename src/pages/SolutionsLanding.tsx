import BreadCrumb from "../components/layout/BreadCrumb";
import SolutionsBox from "../components/solutions/SolutionsBox";
import useDocumentTitle from "../hooks/useDocumentTitle";
import '../../public/css/elements.css';

const SolutionsLanding = () => {
    useDocumentTitle('Solutions');
    return (

        <div className="content">
            <BreadCrumb />
            <SolutionsBox />

        </div>

    )
}

export default SolutionsLanding;