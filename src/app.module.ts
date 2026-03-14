import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { SubtaskModule } from './subtask/subtask.module';
import { TagModule } from './tag/tag.module';
import { TaskTagModule } from './task_tag/task_tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UserModule,
    TaskModule,
    SubtaskModule,
    TagModule,
    TaskTagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
