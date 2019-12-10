import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollGloballogicComponent } from './poll-globallogic.component';

describe('PollGloballogicComponent', () => {
  let component: PollGloballogicComponent;
  let fixture: ComponentFixture<PollGloballogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollGloballogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollGloballogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
