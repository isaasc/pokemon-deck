import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { ResponseSupertypes } from 'src/app/models/supertypes.interface';
import { ResponseTypes } from 'src/app/models/types.interface';
import { SupertypesService } from 'src/app/services/supertypes.service';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-deck-search-and-filters',
  templateUrl: './deck-search-and-filters.component.html',
  styleUrls: ['./deck-search-and-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeckSearchAndFiltersComponent implements OnInit {
  constructor(
    private typesService: TypesService,
    private supertypesService: SupertypesService
  ) {}

  @Output() filterTypeEvent = new EventEmitter<string>();
  @Output() filterSupertypeEvent = new EventEmitter<string>();

  cardType$!: Observable<ResponseTypes>;
  cardSupertype$!: Observable<ResponseSupertypes>;

  ngOnInit(): void {
    this.cardType$ = this.typesService.getAllTypes();
    this.cardSupertype$ = this.supertypesService.getAllSupertypes();
  }

  sendFilterSupertype(changeValue: ISelectionEventArgs): void {
    this.filterSupertypeEvent.emit(changeValue.newSelection.value);
  }

  sendFilterType(changeValue: ISelectionEventArgs): void {
    this.filterTypeEvent.emit(changeValue.newSelection.value);
  }
}
