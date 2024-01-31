import { UsedProducts } from "./useProjects";
import solutions from '../data/solutionsInfo';

export interface Solution {
    id: number;
    title: string;
    client: string;
    start_date: string;
    end_date?:string;
    status: string;
    tags: string[];
    image_urls: string[];
    video_link?:string;
    pdf_link?: string;
    used_products?: UsedProducts[];
    description: string;
    highlight?: boolean;
}

const useSolutions = () => ({data: solutions as Solution[], isLoading: false, error: null});

export default useSolutions;