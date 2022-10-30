import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNProfileComponent } from './banner-n-profile.component';

describe('BannerNProfileComponent', () => {
  let component: BannerNProfileComponent;
  let fixture: ComponentFixture<BannerNProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
