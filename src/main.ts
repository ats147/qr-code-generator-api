import { NestFactory } from '@nestjs/core';
import { QrCodeModule } from './qr-code/qr-code.module';

async function bootstrap() {
  const app = await NestFactory.create(QrCodeModule);
  await app.listen(3000);
}
bootstrap();