
import DesignBox from '../components/design/DesignBox';
import BreadCrumb from '../components/layout/BreadCrumb';
import useDocumentTitle from '../hooks/useDocumentTitle';

const DesignLanding = () => {
    useDocumentTitle('Design');
    return (

        <div className="content">
            <BreadCrumb />
            <DesignBox />

        </div>


    )
}

export default DesignLanding;


