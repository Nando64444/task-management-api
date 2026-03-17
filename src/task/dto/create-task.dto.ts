import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsDateString,
  IsArray,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSubtaskDto {
  @ApiProperty({ example: 'Review the document' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}

export class CreateTaskDto {
  @ApiProperty({ example: 'Enviar documento' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'esto es un documento', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiProperty({
    example: '2026-04-15T23:59:59.999Z',
    description: 'Full ISO 8601 date with time (Prisma requires this)',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({ example: 'work' })
  @IsOptional()
  @IsString()
  list?: string;

  @ApiProperty({ example: [1, 3] })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tagIds?: number[];

  @ApiProperty({
    type: [CreateSubtaskDto],
    example: [{ title: 'Subtask 1' }],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSubtaskDto)
  subtasks?: CreateSubtaskDto[];
}