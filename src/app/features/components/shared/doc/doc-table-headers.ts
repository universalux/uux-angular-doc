import { DataTableHeaders } from "@app/shared/ui/data-table/data-table.types";

export const docTableHeaders = {
  inputTableHeader : ["Input", "Description", "Default"],
  outputTableHeader : ["Output", "Description", "Default"],
  varTableHeader: ["Variable", "Description", "Default"],
  objTableHeader: ["Property", "Description", "Type", "Required"]
} as const satisfies DataTableHeaders;

export type DocTableHeaders = typeof docTableHeaders;

