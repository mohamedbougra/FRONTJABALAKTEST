import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCahierCheckComponent } from './demande-cahier-check.component';

describe('DemandeCahierCheckComponent', () => {
  let component: DemandeCahierCheckComponent;
  let fixture: ComponentFixture<DemandeCahierCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeCahierCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCahierCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
