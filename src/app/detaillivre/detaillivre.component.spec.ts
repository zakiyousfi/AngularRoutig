import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillivreComponent } from './detaillivre.component';

describe('DetaillivreComponent', () => {
  let component: DetaillivreComponent;
  let fixture: ComponentFixture<DetaillivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaillivreComponent]
    });
    fixture = TestBed.createComponent(DetaillivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
