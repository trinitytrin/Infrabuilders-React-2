

const BreadCrumb = () => {
    return (
        <div className="breadcrumb-area gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="breadcrumb-content">
                            <div className="breadcrumb-text-wrapper">
                                <h2 className="page-name">Page Title</h2>
                                <p>Page related subtile </p>
                            </div>
                            <ul className="breadcrumb-list">
                                <li><a href="infra-home.html">Home</a></li>
                                <li>path-to-the-page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb