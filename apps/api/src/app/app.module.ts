import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsController } from '../reviews/reviews.controller';
import { ReviewsService } from '../reviews/reviews.service';

@Module({
  imports: [],
  controllers: [AppController, ReviewsController],
  providers: [AppService, ReviewsService],
})
export class AppModule {}
