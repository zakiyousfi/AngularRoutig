import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageintrouvableComponent } from './pageintrouvable.component';

describe('PageintrouvableComponent', () => {
  let component: PageintrouvableComponent;
  let fixture: ComponentFixture<PageintrouvableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageintrouvableComponent]
    });
    fixture = TestBed.createComponent(PageintrouvableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
