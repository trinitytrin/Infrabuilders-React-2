import members from '../data/teamMemberInfo';

export interface TeamMember{
    id: number;
    name: string;
    position: string;
    image_url: string;
}

const useTeamMembers = ()=> ({data: members as TeamMember[], isLoading: false, error: null});

export default useTeamMembers;