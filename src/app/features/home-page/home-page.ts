import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';
import { Divider } from "@app/shared/ui/divider/divider";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, Divider],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

}
