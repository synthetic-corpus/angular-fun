import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheblanksComponent } from './theblanks.component';

describe('TheblanksComponent', () => {
  let component: TheblanksComponent;
  let fixture: ComponentFixture<TheblanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheblanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheblanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
