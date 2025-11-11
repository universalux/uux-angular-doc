import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppFooter } from "@app/core/components/app-footer/app-footer";
import { ScrollService } from '@app/core/services/scroll-service/scroll-service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, AppFooter],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {
  router = inject(Router);
  scrollService = inject(ScrollService);

  ngAfterViewInit() {
    this.scrollService.enableAnchorNavigation('app-main-layout');
  }
}
