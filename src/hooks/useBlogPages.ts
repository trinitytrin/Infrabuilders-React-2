import blogPages from '../data/blogPagesInfo';

export interface BlogPage {
    id: number;
    title: string;
    slug: string;
    tags: string[];
    image_url: string; 
    description: string;
}

const useBlogPages = ()=> ({data: blogPages as BlogPage[], isLoading: false, error: null});

export default useBlogPages;