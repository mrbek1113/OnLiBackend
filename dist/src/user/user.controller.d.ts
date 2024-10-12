import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: UserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            username: string;
            name: string;
            surname: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            id: number;
            username: string;
            name: string;
            surname: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        }[];
    }>;
}
