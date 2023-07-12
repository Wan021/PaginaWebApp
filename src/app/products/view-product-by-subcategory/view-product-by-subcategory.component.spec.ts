import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductBySubcategoryComponent } from './view-product-by-subcategory.component';

describe('ViewProductBySubcategoryComponent', () => {
  let component: ViewProductBySubcategoryComponent;
  let fixture: ComponentFixture<ViewProductBySubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductBySubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductBySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
