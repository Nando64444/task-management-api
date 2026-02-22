import { PartialType } from '@nestjs/mapped-types';
import { CreateSubtaskDto } from './create-subtask.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubtaskDto extends PartialType(CreateSubtaskDto) {
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
