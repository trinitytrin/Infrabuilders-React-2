import products from '../data/productsInfo';

export interface Product {
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
    description: string;
    highlight?: boolean;
}

const useProducts = () => ({data: products as Product[], isLoading: false, error: null});

export default useProducts;