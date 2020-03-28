import * as mongoose from 'mongoose';

const Cat = {
  name: String,
  age: Number,
  breed: String,
}
const CatSchema = new mongoose.Schema(Cat)

export default CatSchema;