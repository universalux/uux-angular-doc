import { Injectable, signal } from '@angular/core';
import { componentDocSectionList } from '@app/core/data/component-docs.data';
import { DocSectionItem } from '@app/core/data/data.types';
import { kitDocSectionList } from '@app/core/data/kit-docs.data';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  docSections = signal<DocSectionItem[]>([]);

  setDocSections(page : string){
    if(page === 'components'){
      this.docSections.set(componentDocSectionList);
    }

    if(page === 'kits'){
      this.docSections.set(kitDocSectionList);
    }
  }
}
