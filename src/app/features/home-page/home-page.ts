import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';
import { Divider } from "@app/shared/ui/divider/divider";
import { HomeFeatComponents } from "./home-feat-components/home-feat-components";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, Divider, HomeFeatComponents],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
}
