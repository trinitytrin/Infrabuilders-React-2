import { useParams } from "react-router-dom";
import BreadCrumb from "../components/layout/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";
import SingleSolutionDetails from "../components/solutions/SingleSolutionDetails";


const SolutionDetails = () => {
    const itemId = Number(useParams().id?.toString());
    useDocumentTitle('Solution - ' + itemId);
    return (

        <div className="content">
            <BreadCrumb />
            <SingleSolutionDetails />

        </div>
    )
}

export default SolutionDetails;