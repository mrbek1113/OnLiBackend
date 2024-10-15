"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const prisma_service_1 = require("../../../prisma/prisma.service");
let RegisterService = class RegisterService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(dto) {
        const findUser = await this.prisma.user.findUnique({
            where: {
                username: dto.username,
            },
        });
        if (findUser) {
            throw new common_1.BadRequestException('User already exists');
        }
        const hashedPassword = await (0, bcrypt_1.hash)(dto.password, 10);
        const user = this.prisma.user.create({
            data: {
                name: dto.name,
                surname: dto.surname,
                username: dto.username,
                password: hashedPassword,
            },
        });
        return user;
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegisterService);
//# sourceMappingURL=register.service.js.map