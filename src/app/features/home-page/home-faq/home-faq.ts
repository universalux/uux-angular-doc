import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgExpand, NgExpandGroup } from 'ng-expand-group';

@Component({
  selector: 'app-home-faq',
  imports: [ NgExpand, NgExpandGroup ],
  templateUrl: './home-faq.html',
  styleUrl: './home-faq.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFaq {

}
