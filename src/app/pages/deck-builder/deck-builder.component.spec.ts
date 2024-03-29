import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderComponent } from './deck-builder.component';

describe('DeckCreateComponent', () => {
  let component: DeckBuilderComponent;
  let fixture: ComponentFixture<DeckBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeckBuilderComponent],
    });
    fixture = TestBed.createComponent(DeckBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
