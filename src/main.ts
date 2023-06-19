import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config({ path: '../src' });
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('app running ', process.env.PORT || 80);
  await app.listen(process.env.PORT);
}

bootstrap();
