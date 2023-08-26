import { priorityValues, statusValues } from './task.enum';
import { IsString, IsEnum, IsOptional, MaxLength } from 'class-validator';

export class createTaskDto {
  @IsString()
  @MaxLength(50)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  description?: string;

  @IsEnum(statusValues)
  @IsOptional()
  status?: statusValues;

  @IsEnum(priorityValues)
  @IsOptional()
  priority?: priorityValues;
}

export class updateTaskDto {
  @IsString()
  @IsOptional()
  @MaxLength(50)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  description?: string;

  @IsEnum(statusValues)
  @IsOptional()
  status?: statusValues;

  @IsEnum(priorityValues)
  @IsOptional()
  priority?: priorityValues;
}
