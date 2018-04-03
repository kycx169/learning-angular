import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisPersonComponent } from './lis-person.component';

describe('LisPersonComponent', () => {
  let component: LisPersonComponent;
  let fixture: ComponentFixture<LisPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
