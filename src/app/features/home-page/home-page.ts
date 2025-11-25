import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeHero } from './home-hero/home-hero';
import { Divider } from "@app/shared/ui/divider/divider";
import { HomeFeatComponents } from "./home-feat-components/home-feat-components";
import { HomeFeatKits } from "./home-feat-kits/home-feat-kits";
import { HomeFaq } from "./home-faq/home-faq";

@Component({
  selector: 'app-home-page',
  imports: [HomeHero, Divider, HomeFeatComponents, HomeFeatKits, HomeFaq],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

}
