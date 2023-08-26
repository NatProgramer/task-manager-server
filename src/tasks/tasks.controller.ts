import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get('/')
  findAll() {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  findOne(@Param('id') taskId: string) {
    return this.taskService.getOneTask(taskId);
  }

  @Post('/')
  create(@Body() task: createTaskDto) {
    this.taskService.createTask(task);
  }

  @Delete('/:id')
  delete(@Param('id') taskId: string) {
    return this.taskService.deleteTask(taskId);
  }

  @Put('/:id')
  updateTask(@Body() newTask: updateTaskDto, @Param('id') taskId: string) {
    return this.taskService.updateTask(taskId, newTask);
  }
}
