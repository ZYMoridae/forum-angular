import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNavigatorComponent } from './second-navigator.component';

describe('SecondNavigatorComponent', () => {
  let component: SecondNavigatorComponent;
  let fixture: ComponentFixture<SecondNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
