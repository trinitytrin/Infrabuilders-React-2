import { Link } from "react-router-dom";
import BreadCrumb from "../components/layout/BreadCrumb";
import useDocumentTitle from "../hooks/useDocumentTitle";


const ErrorPage = () => {
    useDocumentTitle('Error Page');


    return (
        <div className="content">
            <BreadCrumb />

            <div className="xboot-standard-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="not-found-content text-center">
                                <h2>Ohh.!</h2>
                                <h1>404</h1>
                                <h3>Desired page dose not exist.</h3>

                                <Link to={'/'} className="button">Back to home<i className="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ErrorPage;