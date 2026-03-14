import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      adapter: new PrismaPg({
        connectionString: config.getOrThrow<string>('DATABASE_URL'),
      }),
    });
  }

  cleanDb() {
    return this.$transaction([
      this.user.deleteMany(),
      this.task.deleteMany(),
      this.tag.deleteMany(),
      this.subtask.deleteMany(),
    ]);
  }
}
