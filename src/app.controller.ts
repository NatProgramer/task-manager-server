import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Redirect('http://localhost:5000/tasks', 201)
  getNull() {
    return { redirectTo: 'http://localhost:5000' };
  }
}
