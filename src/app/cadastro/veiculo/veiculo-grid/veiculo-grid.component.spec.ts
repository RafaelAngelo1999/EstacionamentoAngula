import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoGridComponent } from './veiculo-grid.component';

describe('VeiculoGridComponent', () => {
  let component: VeiculoGridComponent;
  let fixture: ComponentFixture<VeiculoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
