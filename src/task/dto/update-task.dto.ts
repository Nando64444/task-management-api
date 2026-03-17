import { IsOptional, IsDateString, IsString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class SubtaskUpdateDto {
  id?: number;
  title?: string;
  completed?: boolean;
}

export class TagsOperationDto {
  add?: number[];
  remove?: number[];
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  @Type(() => Date)
  dueDate?: Date;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  tagIds?: number[];

  @IsOptional()
  tagsOperation?: TagsOperationDto;

  @IsOptional()
  subtasks?: SubtaskUpdateDto[];
}