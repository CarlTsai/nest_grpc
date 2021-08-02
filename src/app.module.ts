import { Module } from '@nestjs/common';
import { OfferModule } from './offer/offer.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OfferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
