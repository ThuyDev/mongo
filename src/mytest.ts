import * as mongoose from 'mongoose';
import { getSchema } from './schemas/schemaUtil';

mongoose.connect('mongodb://localhost/hgcore');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");

  const schemaSchema = getSchema('Schema')

  const MasterSchema = mongoose.model('Schema', schemaSchema);

  MasterSchema.find(function (err, schemas) {
    if (err) return console.error(err);
    console.log(schemas);
  })
});