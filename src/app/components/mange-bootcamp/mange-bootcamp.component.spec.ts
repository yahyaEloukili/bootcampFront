import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeBootcampComponent } from './mange-bootcamp.component';

describe('MangeBootcampComponent', () => {
  let component: MangeBootcampComponent;
  let fixture: ComponentFixture<MangeBootcampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeBootcampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
