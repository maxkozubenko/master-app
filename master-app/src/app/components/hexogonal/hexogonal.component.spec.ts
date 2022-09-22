import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexogonalComponent } from './hexogonal.component';

describe('HexogonalComponent', () => {
  let component: HexogonalComponent;
  let fixture: ComponentFixture<HexogonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexogonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexogonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
