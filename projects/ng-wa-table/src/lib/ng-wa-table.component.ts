import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-wa-table',
  templateUrl: './ng-wa-table.component.html',
  styleUrls: ['./ng-wa-table.component.scss'],
})
export class NgWaTableComponent implements OnInit {

  @Input() isDataLoaded: boolean;
  @Input() tableData: any;
  @Input() tableHeaders: Array<object>;
  @Input() tableColumns: Array<object>;
  @Input() tableAction: any;
  @Input() currentPage: any;
  @Input() pages: any;
  @Input() visiblePages: any;
  @Input() filterForm: any;
  @Input() loggedUserRole: any;
  @Input() filterAvailability: boolean;
  @Input() sortName_asc: boolean;
  @Input() sortName_dsc: boolean;
  @Input() tagActive: any;
  @Input() filterTags: any;
  @Input() isFilterClicked: any;
  @Input() tableHeight: any;
  @Input() isAllSelected: any;
  @Input() selectedItems: any;
  @Input() noItemsAvailable: any;
  @Input() filterSearchAvailability: any;
  @Input() access: any;
  @Input() toggleAccess: any;
  @Input() searchBarColor: any;
  @Input() tableHeaderColor: any;
  @Input() mainContainerPadding: any;
  @Input() headerFontSize: any;
  @Input() bodyFontSize: any;
  @Input() headerTxtColor: any;
  @Input() bodyTxtColor: any;
  @Input() searchBarTxtColor: any;
  @Input() searchPlaceholderColor: any;
  @Input() searchIconColor: any;
  @Input() gapBetweenActions: any;
  @Input() filterIconColor: any;
  @Input() filterTextColor: any;

  @Output() onEditClick = new EventEmitter<any>();
  @Output() onDeleteClick = new EventEmitter<any>();
  @Output() onViewClick = new EventEmitter<any>();
  @Output() getMoreItems = new EventEmitter<any>();
  @Output() showFilter = new EventEmitter<any>();
  @Output() tagPressed = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();
  @Output() itemSort = new EventEmitter<any>();
  @Output() onChangeAccepting = new EventEmitter<{ int: any; e: any }>();
  @Output() onChangeAutoAccepting = new EventEmitter<{ int: any; e: any }>();
  @Output() checkboxSelector = new EventEmitter<any>();
  @Output() selectItem = new EventEmitter<{ item: any; event: any }>();

  constructor() {}

  ngOnInit(): void {}

  onClickAction(type: any, data) {
    switch (type) {
      case 'View':
        this.onViewClick.emit(data);
        break;
      case 'Edit':
        this.onEditClick.emit(data);
        break;
      case 'Delete':
        this.onDeleteClick.emit(data);
        break;

      default:
        break;
    }
  }

  getPages(pageNumber: any) {
    console.log(pageNumber);
    this.getMoreItems.emit(pageNumber);
  }

  onShowFilter() {
    this.showFilter.emit();
    if (!this.isFilterClicked) {
      this.isFilterClicked = true;
    } else {
      this.isFilterClicked = false;
    }
  }

  onTagPressed(id: number) {
    console.log(id, "toggle")
    this.tagPressed.emit(id);
  }

  onSearch(event) {
    this.search.emit(event);
  }

  onItemSort() {
    this.itemSort.emit();
  }

  onChangeAccept(key: any, data: any, accept: any) {
    if (key === 'isAccepting') {
      this.onChangeAccepting.emit({ int: data, e: accept });
    } else if (key === 'isAutoAccepting') {
      this.onChangeAutoAccepting.emit({ int: data, e: accept });
    }
  }

  getRefreshFilters() {
    if (!this.isFilterClicked) {
      this.isFilterClicked = true;
    } else {
      this.isFilterClicked = false;
    }
  }

  selectAll() {
    this.checkboxSelector.emit();
  }

  onSelectItem(item, event) {
    this.selectItem.emit({ item, event });
  }
}
