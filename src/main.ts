// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

// ----------------------------------
// for TEST
// ----------------------------------
import * as mongoose from 'mongoose';
import { SchemaSchema, SchemaInterface } from './schemas/schemaUtil';

mongoose.connect('mongodb://localhost/hgcore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");

  const MasterSchema = mongoose.model('schema', SchemaSchema);

  // const newSchema = new MasterSchema({
  //   tableName: 'Person',
  //   lsColumn: [{ columnName: 'Ten', dataType: 'String' }],
  // });

  // newSchema.save(function(err, schema) {
  //   if (err) return console.error(err);
  //   console.log(schema);
  // });

  MasterSchema.find(function(err, schemas) {
    if (err) return console.error(err);
    const schema1: SchemaInterface = schemas[0] as SchemaInterface;
    console.log(schema1.lsColumn);
  });
});
