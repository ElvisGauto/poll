import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCocaColaComponent } from './poll-coca-cola.component';

describe('PollCocaColaComponent', () => {
  let component: PollCocaColaComponent;
  let fixture: ComponentFixture<PollCocaColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCocaColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCocaColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
