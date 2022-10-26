import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSelectedComponent } from './one-selected.component';

describe('OneSelectedComponent', () => {
  let component: OneSelectedComponent;
  let fixture: ComponentFixture<OneSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
