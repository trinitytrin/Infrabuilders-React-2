import { Link, useLocation } from "react-router-dom"
import { pagesInfo } from '../data/pagesInfo';

const BreadCrumb = () => {

    const location = useLocation();
    const pages = location.pathname.trim().split('/')
        .filter(e => e.length >= 1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)); //capitalizing all pages
    const currentPage = pages[pages.length - 1];



    return (
        <div className="breadcrumb-area gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="breadcrumb-content">
                            <div className="breadcrumb-text-wrapper">
                                <h2 className="page-name">{currentPage}</h2>
                                <p>{pagesInfo.find(p => p.title === currentPage)?.subtitle} </p>
                            </div>
                            <ul className="breadcrumb-list">
                                <li><a href="/">Home</a></li>
                                {pages.map((page) =>

                                    <li key={page}><Link to={'/' + pagesInfo.find(p => p.title === page)?.path}>{page}</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb