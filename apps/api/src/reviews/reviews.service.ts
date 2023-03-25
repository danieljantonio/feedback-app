import { Injectable } from '@nestjs/common';

import { PrismaClient, Review } from '@prisma/client';
import { CreateReviewDto } from './dto/review.dto';

const prisma = new PrismaClient();

@Injectable()
export class ReviewsService {
  create(createReviewDto: CreateReviewDto): Promise<Review> {
    return prisma.review.create({
      data: { ...createReviewDto, productId: 1 },
    });
  }

  getAll(): Promise<Review[]> {
    return prisma.review.findMany({});
  }
}
