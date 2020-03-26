import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatDto } from './dto/cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<CatDto>) {}

  async create(createCatDto: CatDto): Promise<CatDto> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<CatDto[]> {
    return this.catModel.find().exec();
  }
}
