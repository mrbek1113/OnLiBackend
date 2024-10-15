import { LoginDto } from 'src/dto/login.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    login(dto: LoginDto): Promise<{
        id: number;
        username: string;
        name: string;
        surname: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
