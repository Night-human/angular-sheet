import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForComponentComponent } from './if-for-component.component';

describe('IfForComponentComponent', () => {
  let component: IfForComponentComponent;
  let fixture: ComponentFixture<IfForComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfForComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfForComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
