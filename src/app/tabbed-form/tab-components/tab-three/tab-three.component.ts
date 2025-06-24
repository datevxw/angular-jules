import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Import any other necessary modules for tab three (e.g., Material modules)

@Component({
  selector: 'app-tab-three',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
    // Add any other necessary modules here
  ],
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.scss']
})
export class TabThreeComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
