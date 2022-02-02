import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingAddModalComponent } from './binding-add-modal.component';

describe('BindingAddModalComponent', () => {
  let component: BindingAddModalComponent;
  let fixture: ComponentFixture<BindingAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
