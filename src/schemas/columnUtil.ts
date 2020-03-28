interface ColumnDef {
  name: string; // column name
  dataType: 'String' | 'Number' | 'Date'; // column data type
}

const lsColumn = {};

lsColumn['Person'] = [
  { name: 'Ten', dataType: 'String' },
  { name: 'Tuoi', dataType: 'Number' },
];

export function getLsColumnDef(schemaName: string): ColumnDef[] {
  return lsColumn[schemaName] ? lsColumn[schemaName] : [];
}
