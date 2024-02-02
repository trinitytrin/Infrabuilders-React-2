import DownloadBox from "../components/download/DownloadBox";
import BreadCrumb from "../components/layout/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";
import '../../public/css/elements.css';

const Download = () => {
    useDocumentTitle('Download');
    return (
        <div className="content">
            <BreadCrumb />
            <DownloadBox />


        </div>
    )
}

export default Download;