import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NgSimpleButton } from 'ng-simple-button';

@Component({
  selector: 'app-expandable-options',
  imports: [NgSimpleButton],
  templateUrl: './expandable-options.html',
  styleUrl: './expandable-options.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandableOptions {
  title = input<string | null>(null);

  expanded = signal<boolean>(false);
}
