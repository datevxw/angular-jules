import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedFormComponent } from './tabbed-form.component';

describe('TabbedFormComponent', () => {
  let component: TabbedFormComponent;
  let fixture: ComponentFixture<TabbedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbedFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
