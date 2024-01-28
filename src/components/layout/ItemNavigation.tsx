import { Link } from "react-router-dom";

interface Props {
    data: string;
    dataSize: number;
    itemId: number;
}

const ItemNavigation = ({ data, dataSize, itemId }: Props) => {

    const prev_url = (itemId === 1) ? '' : '/' + data + '/' + (itemId - 1).toString();
    const next_url = (itemId === dataSize) ? '' : '/' + data + '/' + (itemId + 1).toString();
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="post-navigation-wrapper">
                    <Link to={prev_url} className="post-navigation previous-post"><i className="fa fa-angle-left"></i> Previous </Link>
                    <Link to={'/'} className="button-inner-project"><i className="ti-view-grid"></i></Link>
                    <Link to={next_url} className="post-navigation next-post"> Next <i className="fa fa-angle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemNavigation;