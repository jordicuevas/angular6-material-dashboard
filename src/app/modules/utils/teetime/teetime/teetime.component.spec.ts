import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeetimeComponent } from './teetime.component';

describe('TeetimeComponent', () => {
  let component: TeetimeComponent;
  let fixture: ComponentFixture<TeetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
