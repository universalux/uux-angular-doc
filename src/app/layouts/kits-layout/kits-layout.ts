import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { kitList } from '@app/core/data/kits.data';
import { AppAside } from '../shared/app-aside/app-aside';
import { RouterOutlet } from '@angular/router';
import { AppFooter } from '@app/core/components/app-footer/app-footer';

@Component({
  selector: 'app-kits-layout',
  imports: [AppAside, RouterOutlet, AppFooter],
  templateUrl: './kits-layout.html',
  styleUrl: './kits-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsLayout {
  components = signal<CatalogItem[]>(kitList);
}
