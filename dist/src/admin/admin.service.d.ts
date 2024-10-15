import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: Prisma.UserCreateInput): Promise<{
        username: string;
        name: string;
        surname: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        name: string;
        surname: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
}
