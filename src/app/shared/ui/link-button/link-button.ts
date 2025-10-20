import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  imports: [RouterLink, RouterModule],
  templateUrl: './link-button.html',
  styleUrl: './link-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButton {

  linkTo = input<string>('/');
  label = input<string>();

}
