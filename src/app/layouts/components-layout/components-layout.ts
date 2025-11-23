import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppFooter } from "@app/core/components/app-footer/app-footer";
import { Router, RouterOutlet } from '@angular/router';
import { AppAside } from "../shared/app-aside/app-aside";
import { ComponentService } from '@app/core/services/component-service/component-service';

@Component({
  selector: 'app-components-layout',
  imports: [AppFooter, RouterOutlet, AppAside],
  templateUrl: './components-layout.html',
  styleUrl: './components-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsLayout {
  componentService = inject(ComponentService);
  router = inject(Router);
}
