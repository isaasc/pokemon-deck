import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckInformationComponent } from './deck-information.component';

describe('DeckInformationComponent', () => {
  let component: DeckInformationComponent;
  let fixture: ComponentFixture<DeckInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeckInformationComponent]
    });
    fixture = TestBed.createComponent(DeckInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
