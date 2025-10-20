import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-button',
  imports: [RouterLink],
  templateUrl: './link-button.html',
  styleUrl: './link-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButton {

  linkTo = input<string>('/');
  label = input<string>();

}
