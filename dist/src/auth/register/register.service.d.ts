import { RegisterDto } from 'src/dto/register.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class RegisterService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: RegisterDto): Promise<{
        id: number;
        username: string;
        name: string;
        surname: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
