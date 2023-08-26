import { HttpCode, Injectable } from '@nestjs/common';
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
    // TODO: Hacer un toUpperCase de la propiedad "priority"
    const task = taskBody.priority.toUpperCase;

    await this.taskModel.create(task);
    return HttpCode(200);
  }

  async deleteTask(id: string) {
    const taskToDelete = await this.taskModel.findByIdAndDelete(id);
    return taskToDelete;
  }

  async updateTask(id: string, newTask: updateTaskDto) {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, newTask);
    return updatedTask;
  }
}
