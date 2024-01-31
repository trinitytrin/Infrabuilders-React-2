import { Link, useLocation } from "react-router-dom"
import { pagesInfo } from '../../data/pagesInfo';

const BreadCrumb = () => {

    const location = useLocation();



    const pages = location.pathname.trim().split('/')
        .filter(e => e.length >= 1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)); //capitalizing all pages
    let thisPage = pagesInfo.find(p => p.path === location.pathname);
    if (thisPage == undefined) {
        thisPage = pagesInfo.find(p => p.title === 'Error Page 404');
    }

    const projectRegex = new RegExp(/\/projects\/\d/);
    if (projectRegex.test(location.pathname)) {
        console.log('true');
        thisPage = pagesInfo.find(p => p.title === 'Project Details')
    }
    const productRegex = new RegExp(/\/services\/products\/\d/);
    if (productRegex.test(location.pathname)) {
        console.log('true');
        thisPage = pagesInfo.find(p => p.title === 'Product Details')
    }
    const solutionRegex = new RegExp(/\/services\/solutions\/\d/);
    if (solutionRegex.test(location.pathname)) {
        console.log('true');
        thisPage = pagesInfo.find(p => p.title === 'Solution Details')
    }


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
                                {pages.filter((_p, i) => i !== pages.length - 1).map((page) =>
                                    <li key={page}><Link to={'' + pagesInfo.find(p => p.title === page)?.path}>{page}</Link></li>
                                )}
                                <li>{pages[pages.length - 1]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb