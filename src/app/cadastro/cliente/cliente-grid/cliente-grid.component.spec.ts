import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteGridComponent } from './cliente-grid.component';

describe('ClienteComponent', () => {
  let component: ClienteGridComponent;
  let fixture: ComponentFixture<ClienteGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
