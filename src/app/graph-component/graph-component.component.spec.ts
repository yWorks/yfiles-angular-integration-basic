import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphComponentComponent } from './graph-component.component';

describe('GraphComponentComponent', () => {
  let component: GraphComponentComponent;
  let fixture: ComponentFixture<GraphComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GraphComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
