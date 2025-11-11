import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';
import { Divider } from "@app/shared/ui/divider/divider";
import { HomeFeatComponents } from "./home-feat-components/home-feat-components";
import { HomeFeatKits } from "./home-feat-kits/home-feat-kits";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, Divider, HomeFeatComponents, HomeFeatKits],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

}
