import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanwizardComponent } from './planwizard.component';

describe('PlanwizardComponent', () => {
  let component: PlanwizardComponent;
  let fixture: ComponentFixture<PlanwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
