import { designCategories } from '../../data/designInfo';
import SingleDesign from './SingleDesign';



const DesignBox = () => {
    return (
        <div className="xboot-standard-row white-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2 className="area-title">Design Categories </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center">

                    {designCategories.map((design) => (
                        <SingleDesign key={design.id} design={design} />
                    ))}

                </div>


            </div>
        </div>
    )
}

export default DesignBox;