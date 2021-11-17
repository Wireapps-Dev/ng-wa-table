import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wa-table';
  filterAvailability: boolean = true;
  filterSearchAvailability: boolean = true;
  noItemsAvailable: string = 'No items available.';
  selectedItems = [];
  isFilterClicked:boolean = false;
  isDataLoaded:boolean = true;

  sortItemName_asc: boolean = false;
  sortItemName_dsc:boolean = false;

  tableHeaders: Array<object> = [
    { id: 1, header: '', checkbox: true, classType: '' },
    { id: 2, header: 'SKU', classType: 'tableHeader-left' },
    {
      id: 3,
      header: 'Item Name',
      sort: true,
      classType: 'tableHeader-center',
    },
    { id: 4, header: 'Category', classType: 'tableHeader-center' },
    { id: 5, header: 'Item Type', classType: 'tableHeader-center' },
    { id: 6, header: 'Status', classType: 'tableHeader-center' },
    { id: 7, type: 'Action', classType: 'actions' },
  ];

  tableColumns: Array<object> = [
    { id: 1, header: 'id', type: 'Checkbox', classType: '' },
    { id: 1, header: 'sku', type: 'String', classType: 'tableColumnData-left' },
    {
      id: 2,
      header: 'name',
      type: 'String',
      classType: 'tableColumnData-center',
    },
    {
      id: 3,
      header: 'categoryList',
      type: 'Array',
      classType: 'tableColumnData-center',
      check: function (test) {
        for (let key of test) {
          return key.title;
        }
      },
    },
    {
      id: 4,
      header: 'is_modifier',
      type: 'Boolean',
      classType: 'tableColumnData-center',
      check: function (test) {
        return test ? 'Modifier' : 'Item';
      },
    },
    {
      id: 4,
      header: 'status',
      value: 'statusValue',
      type: 'Status',
      classType: 'tableDataStatus',
    },
    { id: 5, header: 'action', },
  ];

  tableAction: Array<object> = [
    { id: 'view', type: 'View', fontAwesomeIcon: 'fas fa-eye' },
    { id: 'edit', type: 'Edit', fontAwesomeIcon: 'fas fa-pen ' },
    { id: 'delete', type: 'Delete', fontAwesomeIcon: 'fas fa-trash' },
  ];

  tagActive = 'All';

  filterTags = ['Fried Rice', 'Dessert'];

  items = [
    {
      id: 300001,
      name: 'Chicken Fried Rice',
      image_url:
        'https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg',
      status: true,
      statusValue: 'Active',
      sku: '00123',
      categoryList: [
        {
          id: 200003,
          title: 'Fried Rice',
        },
      ],
      is_modifier: true,
    },

    {
      id: 300002,
      name: 'Vanilla Ice Cream',
      image_url:
        'https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg',
      status: false,
      statusValue: 'Inactive',
      sku: '00124',
      categoryList: [
        {
          id: 200003,
          title: 'Dessert',
        },
      ],
      is_modifier: false,
    },

    {
      id: 300003,
      name: 'Egg Fried Rice',
      image_url:
        'https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg',
      status: false,
      statusValue: 'Inactive',
      sku: '00125',
      categoryList: [
        {
          id: 200003,
          title: 'Fried Rice',
        },
        {
          id: 200004,
          title: 'Dinner',
        },
      ],
      is_modifier: false,
    },
  ];

  itemsTwo = [];

  itemNameSort() {
    this.sortItemName_dsc = false;
    this.sortItemName_asc = !this.sortItemName_asc;

    if (this.sortItemName_asc) {
      this.items.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.sortItemName_dsc = true;
      this.items.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  onEditClick(e) {
    console.log(e);
  }

  onDeleteClick(e) {
    console.log(e);
  }

  onViewClick(e) {
    console.log(e);
  }

  searchItems(event) {
    console.log(event);
  }

  tagPressed(event) {
    console.log(event);
    this.tagActive = event;
  }

  selectItem(event) {
    console.log(event);
  }

  selectAll() {
    for (let i = 0; i < this.items.length; i++) {
      this.selectedItems.push(this.items[i].id);
    }
  }
}
