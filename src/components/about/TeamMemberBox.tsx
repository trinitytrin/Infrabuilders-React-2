import { TeamMember } from "../../hooks/useTeamMembers";

interface Props {
    member: TeamMember;
}

const TeamMemberBox = ({ member }: Props) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="single-member-wrapper">
                <div className="member-image">
                    <img className="img-responsive" src={member.image_url} alt="" />
                </div>
                <div className="member-details">
                    <div className="members-details">
                        <h3><a href="#">{member.name}</a></h3>
                        <p>{member.position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberBox;