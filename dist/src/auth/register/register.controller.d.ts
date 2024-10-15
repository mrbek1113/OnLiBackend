import { RegisterService } from './register.service';
import { Prisma } from '@prisma/client';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    register(dto: Prisma.UserCreateInput): Promise<{
        id: number;
        username: string;
        name: string;
        surname: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
