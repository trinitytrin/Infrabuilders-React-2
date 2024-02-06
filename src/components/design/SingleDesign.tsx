import { Link } from "react-router-dom";

interface Design {
    id: number;
    title: string;
    path: string;
    shortDescription: string;
    imgPath: string;
}

interface Props {
    design: Design;
}

const SingleDesign = ({ design }: Props) => {
    return (
        <div className="col-md-4 col-sm-6 post-grid">
            <article className="grid-blog-post">
                <div className="post-thumbnail">
                    <Link to={design.path}><img src={design.imgPath} alt={design.title + 'Image'} /></Link>
                </div>
                <div className="post-content">
                    <div className="post-content-inner">
                        <h3><Link to={design.path}>{design.title}</Link></h3>

                        <p>{design.shortDescription}</p>
                    </div>
                    <div className="post-footer-meta clearfix">

                        <div className="read-more-wrapper">
                            <Link to={design.path} className="button">Details<i className="ti-arrow-right"></i></Link>

                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SingleDesign;