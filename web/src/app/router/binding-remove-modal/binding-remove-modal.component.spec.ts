import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingRemoveModalComponent } from './binding-remove-modal.component';

describe('BindingRemoveModalComponent', () => {
  let component: BindingRemoveModalComponent;
  let fixture: ComponentFixture<BindingRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingRemoveModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
