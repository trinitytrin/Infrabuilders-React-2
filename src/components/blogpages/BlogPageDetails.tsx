import { Link } from 'react-router-dom';
import { BlogPage } from '../../hooks/useBlogPages';

interface Props {
    page: BlogPage | undefined;
}

const BlogPageDetails = ({ page }: Props) => {

    return (
        <div className="xboot-standard-row white-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">

                        <article className="single-post single-blog-post">
                            <div className="post-thumbnail single-post-slider">
                                <a href={page?.image_url} data-lightbox="img-gallery"><img src={page?.image_url} alt="" /></a>

                            </div>
                            <div className="single-post-content">
                                <header className="single-post-header">
                                    <h2 className="blog-post-title">{page?.title}</h2>
                                    <ul className="meta-info">
                                        <li><a href="#">Admin</a></li>
                                        <li><a href="#">Jan 23, 2024</a></li>

                                    </ul>
                                </header>

                                {page?.description.split('\n').map(para => (
                                    <p> {para}</p>
                                ))}



                                <footer className="single-post-footer">
                                    <div className="post-shearing">
                                        <Link className="button small button-black mb-20" to={'/contact'}> CLICK HERE TO GET IN TOUCH <i className="ti-arrow-right"></i> </Link>
                                    </div>
                                    <div className="post-tags">
                                        <ul>
                                            <li>Tags:</li>
                                            {page?.tags.map(tag => (
                                                <li><a href="#">{tag}</a></li>
                                            ))}

                                        </ul>
                                    </div>
                                </footer>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageDetails;