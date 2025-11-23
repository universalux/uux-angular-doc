import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppAside } from '../shared/app-aside/app-aside';
import { RouterOutlet } from '@angular/router';
import { AppFooter } from '@app/core/components/app-footer/app-footer';
import { KitService } from '@app/core/services/kit-service/kit-service';

@Component({
  selector: 'app-kits-layout',
  imports: [AppAside, RouterOutlet, AppFooter],
  templateUrl: './kits-layout.html',
  styleUrl: './kits-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsLayout {
  kitService = inject(KitService);
}
