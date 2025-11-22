import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { DocNav } from "../shared/doc-nav/doc-nav";

@Component({
  selector: 'app-kit-layout',
  imports: [RouterOutlet, DocNav],
  templateUrl: './kit-layout.html',
  styleUrl: './kit-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitLayout {

  kitService = inject(KitService);

}
