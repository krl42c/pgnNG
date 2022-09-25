import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloaderComponent } from './dataloader.component';

describe('DataloaderComponent', () => {
  let component: DataloaderComponent;
  let fixture: ComponentFixture<DataloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
