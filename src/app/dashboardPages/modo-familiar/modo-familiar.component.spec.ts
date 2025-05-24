import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoFamiliarComponent } from './modo-familiar.component';

describe('ModoFamiliarComponent', () => {
  let component: ModoFamiliarComponent;
  let fixture: ComponentFixture<ModoFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModoFamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
