import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { AppFooter } from "@app/shared/components/app-footer/app-footer";
import { RouterOutlet } from '@angular/router';
import { LinkButton } from '@app/shared/components/link-button/link-button';

@Component({
  selector: 'app-components-layout',
  imports: [AppFooter, RouterOutlet, LinkButton],
  templateUrl: './components-layout.html',
  styleUrl: './components-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsLayout {
  menuService = inject(MenuService);

  toggleMenu(){
    const currentState = this.menuService.isOpenMenu();
    this.menuService.isOpenMenu.set(currentState ? false : true);
  }
}
