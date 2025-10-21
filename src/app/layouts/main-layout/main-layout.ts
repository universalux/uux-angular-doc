import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooter } from "@app/core/components/app-footer/app-footer";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, AppFooter],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {

}
