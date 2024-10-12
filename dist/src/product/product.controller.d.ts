import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(body: any, files: {
        img?: Express.Multer.File[];
        file?: Express.Multer.File[];
    }): Promise<{
        id: number;
        name: string | null;
        img: string | null;
        file: string | null;
        desc: string | null;
    }>;
    getAllProducts(): Promise<{
        id: number;
        name: string | null;
        img: string | null;
        file: string | null;
        desc: string | null;
    }[]>;
    getProductById(id: string): Promise<{
        id: number;
        name: string | null;
        img: string | null;
        file: string | null;
        desc: string | null;
    }>;
    updateProduct(id: string, body: any, files: {
        img?: Express.Multer.File[];
        file?: Express.Multer.File[];
    }): Promise<{
        id: number;
        name: string | null;
        img: string | null;
        file: string | null;
        desc: string | null;
    }>;
    deleteProduct(id: string): Promise<{
        id: number;
        name: string | null;
        img: string | null;
        file: string | null;
        desc: string | null;
    }>;
}
