import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNavMenuComponent } from './client-nav-menu.component';

describe('NavMenuComponent', () => {
  let component: ClientNavMenuComponent;
  let fixture: ComponentFixture<ClientNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientNavMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
