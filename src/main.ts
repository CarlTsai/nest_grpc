import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

/*async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'offer',
      protoPath: join(__dirname, './offer/offer.proto'),
    },
  });
  console.log(`Grpc server is running`);
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
