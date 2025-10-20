import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { AppFooter } from "@app/core/components/app-footer/app-footer";
import { RouterOutlet } from '@angular/router';
import { LinkButton } from '@app/shared/ui/link-button/link-button';
import { ComponentData, componentList } from '@app/core/data/components.data';
import { NgMenuButton } from 'ng-menu-button';

@Component({
  selector: 'app-components-layout',
  imports: [AppFooter, RouterOutlet, LinkButton, NgMenuButton],
  templateUrl: './components-layout.html',
  styleUrl: './components-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsLayout {
  menuService = inject(MenuService);
  components = signal<ComponentData[]>(componentList);

  toggleMenu(){
    const currentState = this.menuService.isOpenMenu();
    this.menuService.isOpenMenu.set(currentState ? false : true);
  }
}
