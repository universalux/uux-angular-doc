export interface CatalogItem {
  name: string;
  url: string;
  id: string;
  description: string;
  image?: string;
  featured?: boolean;
  kitId?: string | null;
};


export type DocSectionItem = {
  name: string;
  code: string;
};
