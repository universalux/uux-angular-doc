import { Injectable, signal } from '@angular/core';
import { componentDocSectionList } from '@app/core/data/component-docs.data';
import { DocSectionItem } from '@app/core/data/data.types';
import { kitDocSectionList } from '@app/core/data/kit-docs.data';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  componentDocSections = signal<DocSectionItem[]>(componentDocSectionList);
  kitDocSections = signal<DocSectionItem[]>(kitDocSectionList);
}
