
import BreadCrumb from '../components/layout/BreadCrumb'
import useDocumentTitle from '../hooks/useDocumentTitle';

const ArchitecturalDesign = () => {
    useDocumentTitle('Architectural Design');
    return (
        <div className="content">
            <BreadCrumb />
            <div>
                Architectural Design Page Content.
            </div>


        </div>
    )
}

export default ArchitecturalDesign;