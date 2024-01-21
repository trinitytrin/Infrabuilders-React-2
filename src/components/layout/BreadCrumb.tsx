import { Link, useLocation } from "react-router-dom"
import { pagesInfo } from '../../data/pagesInfo';

const BreadCrumb = () => {

    const location = useLocation();
    console.log(location);

    const pages = location.pathname.trim().split('/')
        .filter(e => e.length >= 1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)); //capitalizing all pages
    const thisPage = pagesInfo.find(p => p.path === location.pathname);
    console.log(thisPage);
    console.log(pages);


    return (
        <div className="breadcrumb-area gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="breadcrumb-content">
                            <div className="breadcrumb-text-wrapper">
                                <h2 className="page-name">{thisPage?.title}</h2>
                                <p>{thisPage?.subtitle} </p>
                            </div>
                            <ul className="breadcrumb-list">
                                <li><Link to={'/'}>Home</Link></li>
                                {pages.map((page) =>
                                    <li key={page}><Link to={'' + pagesInfo.find(p => p.title.split(' ')[0] === page)?.path}>{page}</Link></li>
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