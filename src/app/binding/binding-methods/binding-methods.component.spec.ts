import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingMethodsComponent } from './binding-methods.component';

describe('BindingMethodsComponent', () => {
  let component: BindingMethodsComponent;
  let fixture: ComponentFixture<BindingMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
