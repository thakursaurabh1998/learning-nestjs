import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This returns a cat with id: ${id}`;
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This returns all cats ${JSON.stringify(query)}`;
  }

  @Post()
  @HttpCode(201)
  create(@Body() createCatDto: CreateCatDto) {
    return `This action adds a new cat ${JSON.stringify(createCatDto)}`;
  }
}
