import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubtaskDto {
  @IsString()
  title: string;
  @IsNumber()
  taskId: number;
}
