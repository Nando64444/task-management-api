import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, createTaskDto: CreateTaskDto) {
    const { tagIds, subtasks, ...taskData } = createTaskDto;

    return this.prisma.task.create({
      data: {
        ...taskData,           // ← dueDate is now a real Date object
        userId,
        ...(tagIds?.length && {
          tags: {
            connect: tagIds.map((id) => ({ id })),
          },
        }),
        ...(subtasks?.length && {
          subtasks: {
            create: subtasks.map((s) => ({
              title: s.title,
              completed: s.completed ?? false,
            })),
          },
        }),
      },
      include: {
        subtasks: true,
        tags: true,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
      include: {
        subtasks: true,
        tags: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, userId: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        subtasks: true,
        tags: true,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }
    if (task.userId !== userId) {
      throw new ForbiddenException('This task does not belong to you');
    }

    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: { tags: true },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }
    if (task.userId !== userId) {
      throw new ForbiddenException('This task does not belong to you');
    }

    const { tagIds, tagsOperation, subtasks, ...basicData } = updateTaskDto;

    let tagsUpdate;
    if (tagIds !== undefined) {
      tagsUpdate = { set: tagIds.map((id) => ({ id })) };
    } else if (tagsOperation) {
      tagsUpdate = {};
      if (tagsOperation.add?.length) {
        tagsUpdate.connect = tagsOperation.add.map((id) => ({ id }));
      }
      if (tagsOperation.remove?.length) {
        tagsUpdate.disconnect = tagsOperation.remove.map((id) => ({ id }));
      }
      if (Object.keys(tagsUpdate).length === 0) tagsUpdate = undefined;
    }

    let subtasksUpdate;
    if (subtasks !== undefined) {
      subtasksUpdate = {
        upsert: subtasks.map((sub) => ({
          where: { id: sub.id ?? -1 },
          update: {
            title: sub.title,
            completed: sub.completed,
          },
          create: {
            title: sub.title ?? '',
            completed: sub.completed ?? false,
          },
        })),
      };
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        ...basicData,          // ← dueDate is now a real Date object
        ...(tagsUpdate && { tags: tagsUpdate }),
        ...(subtasksUpdate && { subtasks: subtasksUpdate }),
      },
      include: {
        subtasks: true,
        tags: true,
      },
    });
  }

  async remove(id: number, userId: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new NotFoundException('Task not found');
    }
    if (task.userId !== userId) {
      throw new ForbiddenException('This task does not belong to you');
    }

    await this.prisma.task.delete({ where: { id } });

    return { message: 'Task deleted successfully' };
  }
}