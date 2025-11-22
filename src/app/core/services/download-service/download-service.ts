import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentService } from '../component-service/component-service';

export interface Downloads {
  "downloads": number;
  "start": string;
  "end": string;
  "package": string;
};

@Injectable({
  providedIn: 'root',
})
export class DownloadService {

  private http = inject(HttpClient);
  componentService = inject(ComponentService);

  urls = signal<string[] | null>(null);
  totalDownloads = signal<number | null>(null);

  getDownloads() : Observable<Downloads> {
    return this.http.post<Downloads>(`/npm-stats`, {urls: this.urls()});
  }

  constructor(){
    this.urls.set(this.componentService.componentList().reduce((acc, curr) => {
      acc.push(`https://api.npmjs.org/downloads/point/last-year/ng-${curr.id}`)
      return acc;
    }, [] as string[]));
  }

  // calculateLastYearDownloads(){
  //   if(this.urls()){
  //     this.urls()?.forEach(url => {
  //       console.log(url);
  //       // this.getDownloads(url).subscribe(res => {
  //       //   console.log(res);
  //       // });
  //     })
  //   }
  // }



}
