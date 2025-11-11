import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AppFooter } from "@app/core/components/app-footer/app-footer";
import { Router, RouterOutlet } from '@angular/router';
import { componentList } from '@app/core/data/components.data';
import { CatalogItem } from '@app/core/data/data.types';
import { AppAside } from "../shared/app-aside/app-aside";
import { ScrollService } from '@app/core/services/scroll-service/scroll-service';

@Component({
  selector: 'app-components-layout',
  imports: [AppFooter, RouterOutlet, AppAside],
  templateUrl: './components-layout.html',
  styleUrl: './components-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsLayout {
  components = signal<CatalogItem[]>(componentList);

  router = inject(Router);
  scrollService = inject(ScrollService);

  ngAfterViewInit() {
    this.scrollService.enableAnchorNavigation('app-components-layout');
  }
}
