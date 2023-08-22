import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['http://localhost:5173'],
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  await app.listen(5000);
}
bootstrap();
