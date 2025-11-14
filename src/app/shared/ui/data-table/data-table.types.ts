export type DataTableHeader = string[];
export type DataTableHeaders = Record<string, DataTableHeader>;

export type DataTableRow = string[];
export type DataTableRows = DataTableRow[];

export interface DataTableData {
  tableHeader: DataTableHeader;
  tableRows: DataTableRows;
};

export type DataTableDataList = Record<string, DataTableData>;
