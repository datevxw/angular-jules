import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabbedFormComponent } from './tabbed-form/tabbed-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabbedFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-jules';
}
