import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NgLinkButton } from "ng-link-button";

@Component({
  selector: 'app-component-layout',
  imports: [NgLinkButton, RouterOutlet],
  templateUrl: './component-layout.html',
  styleUrl: './component-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentLayout {

  activatedRoute = inject(ActivatedRoute);

}
