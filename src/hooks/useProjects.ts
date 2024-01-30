import projects from '../data/projectsInfo';

interface UsedProducts{
    name: string;
    url: string;
}
export interface Project {
    id: number; 
    title: string;
    client: string;
    start_date: string;
    end_date?: string;
    status: string;
    tags: string[];
    image_url: string[];
    video_link?: string;
    download_link?: string;
    used_products?: UsedProducts[];
    description: string;
    highlight?: boolean;

}

const useProjects = () => ({data: projects as Project[], isLoading: false, error: null});

export default useProjects;