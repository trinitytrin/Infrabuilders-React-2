import { useParams } from "react-router-dom";
import useProducts, { Product } from "../../hooks/useProducts";
import ItemNavigation from "../layout/ItemNavigation";
import SingleProductBox from "./SingleProductBox";


const SingleProductDetails = () => {
    const { data } = useProducts();
    const params = useParams();
    const product_id = Number(params.id?.toString());
    const product = data.find(p => p.id === product_id) as Product;
    const related_products = data.filter(p => p.tags.some(tag => product.tags.includes(tag)))
        .filter(p => p.id !== product_id);



    const product_description = product?.description.split('\n');
    return (
        <div>
            <div className="single-project-area xboot-standard-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-project-slider single-project-thumb-wrapper">
                                <a href={product?.image_urls[0]} data-lightbox="img-gallery"><img src={product?.image_urls[0]} alt="" /></a>
                                {product?.image_urls.filter((_p, i) => i !== 0).map((photo, i) => (
                                    <a key={i} href={photo} data-lightbox="img-gallery"><img src={photo.slice(1)} alt="" /></a>
                                ))}

                                <small style={{ color: "gray" }}>Click on the photo to browse more photos of this product</small>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="single-project-description">
                                <h2 className="single-project-title">{product?.title}</h2>
                                {product_description?.map((para, i) => (
                                    <p key={i} >{para}</p>
                                ))}

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">product info</h4>
                                <ul className="single-portfolio-meta">
                                    <li><span>Client:</span> <span>{product?.client}</span></li>
                                    <li><span>Date:</span>{product?.start_date}</li>
                                    <li><span>Status:</span>{product?.status}</li>
                                    <li><span>Link: </span><a href={product?.video_link} target="_blank" rel="noopener noreferrer">Live Demo<i className="ti-arrow-top-right"></i></a></li>
                                    <li><span>Download: </span><a href={product?.pdf_link} target="_blank" rel="noopener noreferrer" download={product.title} >PDF link <i className="ti-download"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <aside className="single-widget">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tags">
                                        {product?.tags.map(t => (
                                            <a key={t} href="#">{t}</a>
                                        ))}


                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="project-meta-wrapper meta-right-sidebar">
                                <h4 className="widget-title">Products used in this Service</h4>
                                {product.used_products !== undefined ? <>
                                    <ul className="single-portfolio-meta">
                                        {product.used_products?.map(used_product => (
                                            <li><a href={used_product.url} target="_blank" rel="noopener noreferrer">{used_product.name} <i className="ti-arrow-top-right"></i></a></li>
                                        ))}

                                    </ul>

                                </> : <div><p> No used products to show for this project</p></div>}

                            </div>
                        </div>

                    </div>
                    <ItemNavigation data={'products'} dataSize={data.length} itemId={Number(product?.id)} />

                </div>
            </div>


            {(related_products.length > 0) &&
                <div className="gray-bg xboot-standard-row related-project-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section-title text-center">
                                    <h2 className="area-title">Related Products</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="related-project-slider portfolio-style-2">
                                {related_products.map(related_product => (

                                    <SingleProductBox product={related_product} />

                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleProductDetails;