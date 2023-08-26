import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './Schemas/tasks.schema';
import { Model } from 'mongoose';
import { createTaskDto, updateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getAllTasks() {
    const gettedTasks = await this.taskModel.find();
    return gettedTasks;
  }

  async getOneTask(id: string) {
    const gettedTask = await this.taskModel.findById(id);
    return gettedTask;
  }

  async createTask(taskBody: createTaskDto) {
    await this.taskModel.create(taskBody);
    return HttpCode(200);
  }

  async deleteTask(id: string) {
    await this.taskModel.findByIdAndDelete(id);
    return HttpCode(HttpStatus.OK);
  }

  async updateTask(id: string, newTask: updateTaskDto) {
    await this.taskModel.findByIdAndUpdate(id, newTask);
    return HttpCode(HttpStatus.OK);
  }
}
