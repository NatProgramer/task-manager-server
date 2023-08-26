import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/create-task.dto';

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
}
