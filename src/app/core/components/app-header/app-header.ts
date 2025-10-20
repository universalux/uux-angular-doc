import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { ThemeService } from '@app/core/services/theme-service/theme-service';
import { LinkButton } from '@app/shared/ui/link-button/link-button';
import { NgThemeToggle } from 'ng-theme-toggle';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, NgThemeToggle, LinkButton ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeader {
  menuService = inject(MenuService);
  themeService = inject(ThemeService);
}
