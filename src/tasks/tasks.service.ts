import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  findAll() {
    return { tasks: 'Realize tasks' };
  }
}
