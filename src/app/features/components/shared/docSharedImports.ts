import { RouterLink } from "@angular/router";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { DataTable } from "@app/shared/ui/data-table/data-table";
import { Divider } from "@app/shared/ui/divider/divider";
import { DocSectionTitle } from "@app/shared/ui/doc-section-title/doc-section-title";

export const docSharedImports = [
  DocSectionTitle,
  CodeBlock,
  DataTable,
  Divider,
  RouterLink
];
