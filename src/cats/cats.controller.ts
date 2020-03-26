import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CatDto[]> {
    return this.catsService.findAll();
  }
}