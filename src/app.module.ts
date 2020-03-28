import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { SchemasModule } from './schemas/schemas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CatsModule, SchemasModule],
})
export class AppModule {}
