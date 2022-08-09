import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemolatesComponent } from './temolates.component';

describe('TemolatesComponent', () => {
  let component: TemolatesComponent;
  let fixture: ComponentFixture<TemolatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemolatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
