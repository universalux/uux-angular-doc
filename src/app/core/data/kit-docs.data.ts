import { DocSectionItem } from "./data.types";
import { DataTableHeaders } from "@app/shared/ui/data-table/data-table.types";

export const kitDocSectionList : DocSectionItem[] = [
  {
    name: "Introduction",
    code: "intro"
  },
  {
    name: "Included components",
    code: "incl"
  },
  {
    name: "Installation",
    code: "inst"
  },
  {
    name: "Import",
    code: "imp"
  }
];

export const kitDocTableHeaders = {
  includedTableHeader : ["Component", "Description", "Documentation"],
} as const satisfies DataTableHeaders;

export type KitDocTableHeaders = typeof kitDocTableHeaders;
