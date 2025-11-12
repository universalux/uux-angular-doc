import { Injectable, signal } from '@angular/core';
import { docSectionList } from '@app/core/data/components.data';
import { DocSectionItem } from '@app/core/data/data.types';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  docSections = signal<DocSectionItem[]>(docSectionList);
}
