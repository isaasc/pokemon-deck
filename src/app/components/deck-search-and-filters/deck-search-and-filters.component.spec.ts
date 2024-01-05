import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSearchAndFiltersComponent } from './deck-search-and-filters.component';

describe('DeckSearchAndFiltersComponent', () => {
  let component: DeckSearchAndFiltersComponent;
  let fixture: ComponentFixture<DeckSearchAndFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DeckSearchAndFiltersComponent],
});
    fixture = TestBed.createComponent(DeckSearchAndFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
