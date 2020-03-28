import { Schema } from 'mongoose';
import { getLsColumnDef } from './columnUtil';

const lsSchema = {};

export function getSchema(schemaName: string) {
  if (!lsSchema[schemaName]) {
    const lsColumnDef = getLsColumnDef(schemaName);

    const lsObj = {};

    lsColumnDef.forEach(columnDef => {
      lsObj[columnDef.name] = columnDef.dataType;
    });

    lsSchema[schemaName] = new Schema(lsObj);
  }

  return lsSchema[schemaName];
}

const schemaObj = {
  tableName: String,
  lsColumn: [{ columnName: String, dataType: String }],
};

export const SchemaSchema = new Schema(schemaObj);

export interface SchemaInterface {
  tableName: string,
  lsColumn: [{ columnName: string, dataType: string }],
}