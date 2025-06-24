import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Import any other necessary modules for tab four (e.g., Material modules)

@Component({
  selector: 'app-tab-four',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    // Add any other necessary modules here
  ],
  templateUrl: './tab-four.component.html',
  styleUrls: ['./tab-four.component.scss']
})
export class TabFourComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
