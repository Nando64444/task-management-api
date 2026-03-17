import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsArray,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSubtaskDto } from './create-task.dto'; // Reuse the subtask DTO

export class UpdateSubtaskDto extends PartialType(CreateSubtaskDto) {
  @ApiPropertyOptional({
    example: 7,
    description: 'ID of existing subtask (omit to create a new one)',
  })
  @IsOptional()
  @IsNumber()
  id?: number;
}

export class UpdateTaskDto {
  @ApiPropertyOptional({ example: 'Updated title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({ example: '2026-05-10' })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiPropertyOptional({ example: 'personal' })
  @IsOptional()
  @IsString()
  list?: string;

  // ── Now added: full tag & subtask support ────────────────────────────────
  @ApiPropertyOptional({
    example: [2, 4, 5],
    description: 'If sent → REPLACE all existing tags with these IDs',
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tagIds?: number[];

  @ApiPropertyOptional({
    example: { add: [6], remove: [1] },
    description: 'Alternative: incrementally add/remove tags',
  })
  @IsOptional()
  tagsOperation?: {
    add?: number[];
    remove?: number[];
  };

  @ApiPropertyOptional({
    type: [UpdateSubtaskDto],
    description:
      'Upsert subtasks: {id: X, ...} = update, {title: ...} = create new',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateSubtaskDto)
  subtasks?: UpdateSubtaskDto[];
}