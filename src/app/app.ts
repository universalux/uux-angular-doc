import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./core/components/app-header/app-header";
import { MenuService } from './core/services/menu-service/menu-service';
import { ResponsiveMenu } from "./core/components/responsive-menu/responsive-menu";
import { DownloadService } from './core/services/download-service/download-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, ResponsiveMenu],
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  menuService = inject(MenuService);

  downloadService = inject(DownloadService);

  ngOnInit(): void {
    // this.downloadService.getDownloads().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
