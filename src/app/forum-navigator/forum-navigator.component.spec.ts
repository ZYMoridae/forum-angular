import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNavigatorComponent } from './forum-navigator.component';

describe('ForumNavigatorComponent', () => {
  let component: ForumNavigatorComponent;
  let fixture: ComponentFixture<ForumNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
