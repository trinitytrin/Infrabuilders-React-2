import BreadCrumb from "../components/layout/BreadCrumb";
import DesignBox from "../components/design/DesignBox";
import useDocumentTitle from "../hooks/useDocumentTitle";


const Design = () => {
    useDocumentTitle('Design');
    return (
        <>
            <div className="content">
                <BreadCrumb />
                <DesignBox />

            </div>

        </>
    )
}

export default Design;