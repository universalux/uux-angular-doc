import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { ThemeService } from '@app/core/services/theme-service/theme-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeader {
  menuService = inject(MenuService);
  themeService = inject(ThemeService);
}
