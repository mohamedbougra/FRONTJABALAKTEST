import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeFormValiderComponent } from './recharge-form-valider.component';

describe('RechargeFormValiderComponent', () => {
  let component: RechargeFormValiderComponent;
  let fixture: ComponentFixture<RechargeFormValiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeFormValiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeFormValiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
