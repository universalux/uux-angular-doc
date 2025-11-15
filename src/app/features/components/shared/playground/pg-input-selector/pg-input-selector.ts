import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Divider } from "@app/shared/ui/divider/divider";

@Component({
  selector: 'app-pg-input-selector',
  imports: [Divider],
  templateUrl: './pg-input-selector.html',
  styleUrl: './pg-input-selector.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PgInputSelector {
  name = input<string | null>(null);
  description = input<string | null>(null);

  options = input<string[] | null>(null);
  changeFn = output<Event>();

  handleChangeFn(event: Event){
    this.changeFn.emit(event)
  }

}
