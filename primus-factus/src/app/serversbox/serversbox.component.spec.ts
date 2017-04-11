import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersboxComponent } from './serversbox.component';

describe('ServersboxComponent', () => {
  let component: ServersboxComponent;
  let fixture: ComponentFixture<ServersboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
