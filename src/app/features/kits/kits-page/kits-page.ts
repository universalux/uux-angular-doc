import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { NgContentCard } from 'ng-content-card';


@Component({
  selector: 'app-kits-page',
  imports: [NgContentCard, RouterLink],
  templateUrl: './kits-page.html',
  styleUrl: './kits-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsPage {
  kitService = inject(KitService);
}
