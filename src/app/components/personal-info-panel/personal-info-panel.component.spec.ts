import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoPanelComponent } from './personal-info-panel.component';

describe('PersonalInfoPanelComponent', () => {
  let component: PersonalInfoPanelComponent;
  let fixture: ComponentFixture<PersonalInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
