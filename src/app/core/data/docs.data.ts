import { DocSectionItem } from "./data.types";
import { DataTableHeaders } from "@app/shared/ui/data-table/data-table.types";

export const docSectionList : DocSectionItem[] = [
  {
    name: "Introduction",
    code: "intro"
  },
  {
    name: "Installation",
    code: "inst"
  },
  {
    name: "Overview",
    code: "ovw"
  },
  {
    name: "Functionality",
    code: "func"
  },
  {
    name: "Inputs and Outputs",
    code: "io"
  },
  {
    name: "Styling",
    code: "sty"
  },
  {
    name: "Accessibility",
    code: "acc"
  }
];

export const docTableHeaders = {
  inputTableHeader : ["Input", "Description", "Default"],
  outputTableHeader : ["Output", "Description", "Default"],
  varTableHeader: ["Variable", "Description", "Default"],
  objTableHeader: ["Property", "Description", "Type", "Required"],
  langTableHeader: ["Language", "Code", "Example"]
} as const satisfies DataTableHeaders;

export type DocTableHeaders = typeof docTableHeaders;
