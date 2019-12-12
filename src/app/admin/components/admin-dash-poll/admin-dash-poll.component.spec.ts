import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashPollComponent } from './admin-dash-poll.component';

describe('AdminDashPollComponent', () => {
  let component: AdminDashPollComponent;
  let fixture: ComponentFixture<AdminDashPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
