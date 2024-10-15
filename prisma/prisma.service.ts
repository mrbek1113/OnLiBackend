import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
<<<<<<< HEAD
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
=======
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
>>>>>>> c3750e2741cf0af4aeb2ea7a47b5656720eab7d4
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
