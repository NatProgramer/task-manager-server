import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      hello: 'Hello World',
      hola: 'Hola mundo',
    };
  }
}
