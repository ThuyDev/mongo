import * as mongoose from 'mongoose';
import { CatDto } from "../dto/cat.dto";

let Cat = {
  name: String,
  age: Number,
  breed: String,
}
const CatSchema = new mongoose.Schema(Cat)

export default CatSchema;