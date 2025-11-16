import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NgLinkButton } from "ng-link-button";
import { NgScrollNav } from 'ng-scroll-nav';
import { DocNav } from "@app/layouts/shared/doc-nav/doc-nav";
import { ComponentService } from '@app/core/services/component-service/component-service';

@Component({
  selector: 'app-component-layout',
  imports: [NgLinkButton, RouterOutlet, DocNav, NgScrollNav],
  templateUrl: './component-layout.html',
  styleUrl: './component-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentLayout {

  activatedRoute = inject(ActivatedRoute);
  componentService = inject(ComponentService);

}
