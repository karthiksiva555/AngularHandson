import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveHandsonComponent } from './directive-handson.component';

describe('DirectiveHandsonComponent', () => {
  let component: DirectiveHandsonComponent;
  let fixture: ComponentFixture<DirectiveHandsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHandsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHandsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
