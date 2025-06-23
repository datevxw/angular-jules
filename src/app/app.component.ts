import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabbedFormComponent } from './tabbed-form/tabbed-form.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogWithTabsComponent } from './dialog-with-tabs/dialog-with-tabs.component';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabbedFormComponent, MatButtonModule], // Add MatButtonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-jules';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogWithTabsComponent, {
      width: '600px', // You can adjust width and other properties
      // You can pass data to the dialog here if needed
      // data: { ... }
    });
  }
}
