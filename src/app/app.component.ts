import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wa-table';

  filterAvailability: boolean = true;
  filterSearchAvailability: boolean = true;
  noItemsAvailable: string = "No items available.";
  tableConfig: Array<object> = [
    { id: 1, header: "Id", classType: "tableHeader-left" },
    { id: 2, header: "Item Name", sort: true, classType: "tableHeader-center" },
    { id: 3, header: "Category", classType: "tableHeader-center" },
    { id: 4, header: "Item Type", classType: "tableHeader-center" },
    // { id: 5, type: "Policy", classType: "actions no-sort" },
    { id: 7, type: "Action", classType: "actions no-sort" },
  ];

  tableInfo: Array<object> = [
    { id: 1, header: "sku", type: "String", classType: "tableColumnData-left" },
    { id: 2, header: "title", type: "String", classType: "tableColumnData-center" },
    {
      id: 3, header: "categoryList", type: "Array", classType: "tableColumnData-center", check: function (test) {
        for (let key of test) {
          return key.title
        }
      }
    },
    { id: 4, header: "is_modifier", type: "Boolean", classType: "tableColumnData-center", check: function (test) { return test ? 'Modifier' : 'Item'; } },
    { id: 5, header: "action", },
  ];

  isFilterClicked = false;
  isDataLoaded = true;

  sortItemName_asc = false;
  sortItemName_dsc = false;

  tagActive = 0;


  filterTags = [
    { id: 1, title: "Tag One" }, { id: 1, title: "Tag Two" }
  ]

  items = [
    {
      "id": 300001,
      "title": "Chicken Korma / Parotta (2)",
      "image_url": "https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg",
      "status": 1,
      "sku": "00123",
      "categoryList": [
        {
          "id": 200003,
          "title": "Mains",
        }
      ],
      "is_modifier": false,
    },

    {
      "id": 300002,
      "title": "Chicken Korma / Parotta (2)",
      "image_url": "https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg",
      "status": 1,
      "sku": "00124",
      "categoryList": [
        {
          "id": 200003,
          "title": "Mains",
        }
      ],
      "is_modifier": false,
    },

    {
      "id": 300003,
      "title": "Chicken Korma / Parotta (2)",
      "image_url": "https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg",
      "status": 1,
      "sku": "00124",
      "categoryList": [
        {
          "id": 200003,
          "title": "Mains",
        },
        {
          "id": 200004,
          "title": "Dinner",
        }
      ],
      "is_modifier": false,
    },

  ]



  itemNameSort() {
    this.sortItemName_dsc = false
    this.sortItemName_asc = !this.sortItemName_asc

    if (this.sortItemName_asc) {
      this.items.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      this.sortItemName_dsc = true
      this.items.sort((a, b) => b.title.localeCompare(a.title))
    }

  }

  onEditClick(e) {
    console.log(e)
  }

  onDeleteClick(e) {
    console.log(e)
  }

  searchItems(event) {
    console.log(event.target.value)
  }

  tagPressed(event) {
    console.log(event.target.value)
  }
}

