export type Column = {
  value: ColumnValue;
  metadata: {
    colName: string;
    type: {
      name: string;
    };
  };
};
