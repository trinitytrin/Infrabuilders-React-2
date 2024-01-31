import useProjects from "../../hooks/useProjects";


const DownloadBox = () => {
    const { data } = useProjects();
    const projects = data.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA > titleB) return 1;
        if (titleA < titleB) return -1;
        return 0;
    });
    return (
        <div className="xboot-standard-row white-bg service-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2 className="area-title">Download Digital Brochures</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cum dolores quas, mollitia ipsum repellendus ut saepe molestiae perspiciatis rem. </p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="faq-content">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="false">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab">
                                        <h4 className="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Download Project Brochures</a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel">
                                        <div className="panel-body">
                                            <p>Files are given in alphabetical order of their titles. </p>
                                            {projects.map(project => (
                                                <li key={project.id}><a href={project.download_link} target="_blank" rel="noopener noreferrer" download={project.title} >{project.title} <i className="ti-download"></i></a></li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Download Product Brochures</a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil perferendis veritatis, vel consequuntur quod quisquam eius iste error magnam nam illum hic obcaecati modi reprehenderit ducimus id quia, voluptate eos.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab">
                                        <h4 className="panel-title">
                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Download Solution Brochures</a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptates beatae autem labore blanditiis omnis laborum nulla reiciendis in aspernatur, ab suscipit possimus iure magni natus cumque earum expedita facere. Ab velit consectetur dolorem maiores minima explicabo perferendis architecto suscipit.!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadBox;