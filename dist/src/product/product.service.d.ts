import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProduct(data: any): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
    updateProduct(id: number, data: any): Promise<Product>;
    deleteProduct(id: number): Promise<Product>;
}
