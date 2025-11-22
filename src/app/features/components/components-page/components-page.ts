import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { NgContentCard } from 'ng-content-card';

@Component({
  selector: 'app-components-page',
  imports: [NgContentCard, RouterLink],
  templateUrl: './components-page.html',
  styleUrl: './components-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPage {
  componentService = inject(ComponentService);
}
