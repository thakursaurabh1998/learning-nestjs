import { Injectable } from '@nestjs/common';

import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(
    limit: number,
    page: number,
  ): { cats: Cat[]; limit: number; page: number } {
    return { cats: this.cats, limit, page };
  }

  findOne(id: string) {
    return this.cats.find((cat) => cat.id === parseInt(id));
  }
}
