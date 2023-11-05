import BreadCrumb from "../components/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";


const Download = () => {
    useDocumentTitle('Download');
    return (
        <div className="content">
            <BreadCrumb />
            <div>
                Download page content
            </div>


        </div>
    )
}

export default Download;