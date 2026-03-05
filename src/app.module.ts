import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
=======
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { SubtaskModule } from './subtask/subtask.module';
import { TagModule } from './tag/tag.module';
import { TaskTagModule } from './task_tag/task_tag.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    PrismaModule,
    TaskModule,
    SubtaskModule,
    TagModule,
    TaskTagModule,
  ],
>>>>>>> 234bec5f03c86a21f1d225ec3fac1744cc5031da
})
export class AppModule {}
