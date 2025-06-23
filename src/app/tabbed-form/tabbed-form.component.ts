import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabbed-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './tabbed-form.component.html',
  styleUrl: './tabbed-form.component.scss'
})
export class TabbedFormComponent implements OnInit {
  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form1 = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.form2 = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      address: ['']
    });

    this.form3 = this.fb.group({
      company: [''],
      jobTitle: ['']
    });
  }

  onSave(form: FormGroup): void {
    if (form.valid) {
      console.log('Form Saved:', form.value);
      // Add actual save logic here
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(form: FormGroup): void {
    form.reset();
    console.log('Form Cancelled and Reset');
  }
}
