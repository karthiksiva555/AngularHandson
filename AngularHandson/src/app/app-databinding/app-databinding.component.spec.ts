import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDatabindingComponent } from './app-databinding.component';

describe('AppDatabindingComponent', () => {
  let component: AppDatabindingComponent;
  let fixture: ComponentFixture<AppDatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
