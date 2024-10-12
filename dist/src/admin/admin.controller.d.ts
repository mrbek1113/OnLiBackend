import { HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from '@prisma/client';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(dto: Prisma.UserCreateInput): Promise<{
        statusCode: HttpStatus;
        message: string;
        Admin: {
            username: string;
            name: string;
            surname: string;
            role: import(".prisma/client").$Enums.Role;
        };
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
