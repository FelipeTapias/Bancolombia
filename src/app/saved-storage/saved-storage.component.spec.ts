import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedStorageComponent } from './saved-storage.component';

describe('SavedStorageComponent', () => {
  let component: SavedStorageComponent;
  let fixture: ComponentFixture<SavedStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
