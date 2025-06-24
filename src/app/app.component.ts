import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogWithTabsComponent} from './dialog-with-tabs/dialog-with-tabs.component';
import {MatButtonModule} from '@angular/material/button'; // Import MatButtonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule], // Add MatButtonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-jules';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogWithTabsComponent, {
      width: '1200px', // You can adjust width and other properties
      // You can pass data to the dialog here if needed
      // data: { ... }
    });
  }
}
