import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxaFormComponent } from './taxa-form.component';

describe('TaxaFormComponent', () => {
  let component: TaxaFormComponent;
  let fixture: ComponentFixture<TaxaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
