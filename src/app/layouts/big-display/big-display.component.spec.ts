import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDisplayComponent } from './big-display.component';

describe('BigDisplayComponent', () => {
  let component: BigDisplayComponent;
  let fixture: ComponentFixture<BigDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
