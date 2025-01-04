import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurManagementComponent } from './formateur-management.component';

describe('FormateurManagementComponent', () => {
  let component: FormateurManagementComponent;
  let fixture: ComponentFixture<FormateurManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormateurManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
