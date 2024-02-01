import useTeamMembers from "../../hooks/useTeamMembers";
import TeamMemberBox from "./TeamMemberBox";


const OurTeamBox = () => {
    const { data } = useTeamMembers();
    return (
        <div className="xboot-standard-row white-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center">
                            <h2 className="area-title">Our Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci.</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {data.map(member => (
                        <TeamMemberBox key={member.id} member={member} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default OurTeamBox;