import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatManagementComponent } from './candidat-management.component';

describe('CandidatManagementComponent', () => {
  let component: CandidatManagementComponent;
  let fixture: ComponentFixture<CandidatManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
