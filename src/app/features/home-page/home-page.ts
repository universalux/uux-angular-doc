import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';

@Component({
  selector: 'app-home-page',
  imports: [HomeHero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

}
