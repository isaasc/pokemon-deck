import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCardsInformationComponent } from './deck-cards-information.component';

describe('DeckInformationComponent', () => {
  let component: DeckCardsInformationComponent;
  let fixture: ComponentFixture<DeckCardsInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeckCardsInformationComponent],
    });
    fixture = TestBed.createComponent(DeckCardsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
