import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsDateString,
  IsArray,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSubtaskDto {
  @ApiProperty({ example: 'Review code' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}

export class CreateTaskDto {
  @ApiProperty({ example: 'Build task API' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({ example: '2026-04-15' })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({ example: 'work' })
  @IsOptional()
  @IsString()
  list?: string;

  // ── Now added: support for tags & subtasks ───────────────────────────────
  @ApiPropertyOptional({
    example: [1, 3],
    description: 'Array of existing tag IDs to attach',
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tagIds?: number[];

  @ApiPropertyOptional({
    type: [CreateSubtaskDto],
    description: 'Optional array of subtasks to create together with the task',
  })
  @IsOptional()
  @IsArray()
  @Type(() => CreateSubtaskDto)
  subtasks?: CreateSubtaskDto[];
}