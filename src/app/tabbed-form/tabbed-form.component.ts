import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-tabbed-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './tabbed-form.component.html',
  styleUrl: './tabbed-form.component.scss'
})
export class TabbedFormComponent implements OnInit {
  form1!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;
  form4!: FormGroup; // Added for the fourth tab

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form1 = this.fb.group({
      terminationDate: ['', Validators.required],
      terminatedBy: ['', Validators.required],
      kuendigungsfristArbeitgeber: this.fb.group({
        wert: ['', Validators.required],
        zeiteinheit: ['', Validators.required],
        bezugszeitpunkt: ['', Validators.required]
      }),
      weitereAngaben: this.fb.group({
        schriftlicheKuendigung: [false],
        betriebsbedingteKuendigung: [false]
      }),
      ausschlussOrdentlicheKuendigung: this.fb.group({
        gesetzlicherTarifvertraglicherAusschluss: [false],
        zeitlichUnbegrenzterAusschluss: [false],
        fristgebundeneKuendigung: [false]
      })
    });

    this.form2 = this.fb.group({
      // Define controls for "Zusatzangaben" tab
    });

    this.form3 = this.fb.group({
      // Define controls for "Leitungen bei Austritt" tab
    });

    this.form4 = this.fb.group({
      // Define controls for "Befristung" tab
    });
  }

  onSave(form: FormGroup): void {
    if (form.valid) {
      console.log('Form Saved:', form.value);
      // Add actual save logic here
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(form);
    }
  }

  onCancel(form: FormGroup): void {
    form.reset();
    console.log('Form Cancelled and Reset');
  }

  // Helper function to mark all controls in a form group as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
