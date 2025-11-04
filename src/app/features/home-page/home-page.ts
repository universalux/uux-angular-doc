import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';
import { Divider } from "@app/shared/ui/divider/divider";
import { HomeFeatComponents } from "./home-feat-components/home-feat-components";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, Divider, HomeFeatComponents],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  router = inject(Router);

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const el = document.getElementById(fragment);
          const container = document.querySelector('app-main-layout');
          if (el && container) {
            container.scrollTo({
              top: el.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
  }
}
