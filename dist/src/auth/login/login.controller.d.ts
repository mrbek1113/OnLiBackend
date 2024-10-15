import { LoginService } from './login.service';
import { LoginDto } from 'src/dto/login.dto';
import { Response } from 'express';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(dto: LoginDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
