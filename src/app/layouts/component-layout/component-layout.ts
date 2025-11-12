import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgLinkButton } from "ng-link-button";
import { NgScrollNav } from 'ng-scroll-nav';
import { DocNav } from "@app/layouts/shared/doc-nav/doc-nav";
import { filter } from 'rxjs';
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
