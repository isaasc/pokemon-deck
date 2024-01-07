import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCardsComponent } from './deck-cards-information.component';

describe('DeckInformationComponent', () => {
  let component: DeckCardsComponent;
  let fixture: ComponentFixture<DeckCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeckCardsComponent],
    });
    fixture = TestBed.createComponent(DeckCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
