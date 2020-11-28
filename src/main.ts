import { NestFactory } from '@nestjs/core';
import { WebModule } from './web/WebModule';

async function bootstrap() {
  const app = await NestFactory.create(WebModule);
  await app.listen(3000);
}
bootstrap();
