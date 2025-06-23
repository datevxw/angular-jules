import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbedFormComponent } from '../tabbed-form/tabbed-form.component'; // Assuming TabbedFormComponent is standalone or imported via another module
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-with-tabs',
  standalone: true,
  imports: [
    CommonModule,
    TabbedFormComponent,
    MatDialogModule // Import MatDialogModule here for the dialog content
  ],
  templateUrl: './dialog-with-tabs.component.html',
  styleUrls: ['./dialog-with-tabs.component.scss']
})
export class DialogWithTabsComponent {

  constructor() { }

}
