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
import { TabOneComponent } from './tab-components/tab-one/tab-one.component';
import { TabTwoComponent } from './tab-components/tab-two/tab-two.component';
import { TabThreeComponent } from './tab-components/tab-three/tab-three.component';
import { TabFourComponent } from './tab-components/tab-four/tab-four.component';

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
    MatCheckboxModule,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent
  ],
  templateUrl: './tabbed-form.component.html',
  styleUrl: './tabbed-form.component.scss'
})
export class TabbedFormComponent implements OnInit {
  mainForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      // Form controls from form1
      tabOne: this.fb.group({
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
      }),
      // Form controls from form2
      tabTwo: this.fb.group({
        zus_kuendigungsvereinbarungen: [false],
        ord_kuendigung_leistung: [false],
        voraussetzungen_fristg_kuendigung: [false],
        ag_kuendigung_am: [''],
        ag_kuendigung_zum: [''],
        kuendigung_vertragswidrig: [false],
        abmahnung_vertragswidrig: [false],
        abmahnungsdatum: [''],
        freistellung_einvernehmlich: [false]
      }),
      // Form controls for form3 (Leitungen bei Austritt)
      tabThree: this.fb.group({
        // Define controls for "Leitungen bei Austritt" tab - Placeholder
        // Example: someFieldInTabThree: ['']
      }),
      // Form controls for form4 (Befristung)
      tabFour: this.fb.group({
        // Define controls for "Befristung" tab - Placeholder
        // Example: anotherFieldInTabFour: ['']
      })
    });
  }

  onSave(): void {
    if (this.mainForm.valid) {
      console.log('Main Form Saved:', this.mainForm.value);
      // Add actual save logic here, using this.mainForm.value
    } else {
      console.log('Main Form is invalid');
      this.markFormGroupTouched(this.mainForm);
    }
  }

  onCancel(): void {
    this.mainForm.reset();
    console.log('Main Form Cancelled and Reset');
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

  // Helper getters for easy access to tab form groups from the template
  get tabOneForm(): FormGroup {
    return this.mainForm.get('tabOne') as FormGroup;
  }

  get tabTwoForm(): FormGroup {
    return this.mainForm.get('tabTwo') as FormGroup;
  }

  get tabThreeForm(): FormGroup {
    return this.mainForm.get('tabThree') as FormGroup;
  }

  get tabFourForm(): FormGroup {
    return this.mainForm.get('tabFour') as FormGroup;
  }
}
