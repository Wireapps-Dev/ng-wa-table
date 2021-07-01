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
    { id: 1, header: "#SKU" },
    { id: 2, header: "Item Name", sort: true, classType: "tableHeader" },
    { id: 3, header: "Category", classType: "tableHeader" },
    { id: 4, header: "Item Type", classType: "tableHeader" },
    { id: 5, type: "Policy", classType: "actions no-sort" },
    // {id: 7, header: "Action", classType: "actions no-sort"},
  ];
  tableAction: Array<object> = [
    { id: "edit", type: "Edit", image: "../../../../../assets/icons/edit.png" },
    { id: "delete", type: "Delete", image: "../../../../../assets/icons/delete.png" },
  ];

  tableInfo: Array<object> = [
    { id: 1, header: "sku", type: "String", classType: "tableDataFirstCol" },
    { id: 2, header: "title", type: "String", classType: "tableData" },
    {
      id: 3, header: "categoryList", type: "Array", classType: "tableData", check: function (test) {
        for (let key of test) {
          return key.title
        }
      }
    },
    { id: 4, header: "is_modifier", type: "Boolean", classType: "tableData", check: function (test) { return test ? 'Modifier' : 'Item'; } },
    { id: 5, header: "action", },
  ];

  isFilterClicked = false;
  isDataLoaded = true;

  items = [
    {
      "id": 300001,
      "source": null,
      "title": "Chicken Korma / Parotta (2)",
      "description": null,
      "image_url": "https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg",
      "status": 1,
      "created_at": "2021-07-01 12:39:36",
      "updated_at": "2021-07-01 12:39:36",
      "allergies": null,
      "tax": "20.00",
      "price": "9.99",
      "sku": null,
      "contains_alcohol": 0,
      "remote_id": "0",
      "is_valid_image": true,
      "masterEntityDeliveryPlatforms": [],
      "categoryList": [
        {
          "id": 200003,
          "title": "Mains",
          "sub_title": null,
          "description": null,
          "status": 1,
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "parent_id": 0,
          "image_path": null,
          "remote_id": null,
          "priority": 10000
        }
      ],
      "availablePlatformIds": [],
      "modifiers": null,
      "platform_urls": [],
      "is_modifier": false,
      "entity_delivery_platform": [
        {
          "id": 1,
          "entity_id": 300001,
          "delivery_platform_id": 8,
          "external_item_id": "101470066",
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "plu": "101470066",
          "price": "9.99",
          "item_name": "Chicken Korma / Parotta (2)",
          "allergies": "a:0:{}",
          "available": 1
        }
      ],
      "prices": [
        {
          "id": 1,
          "main_menu_id": 1,
          "delivery_platform_id": null,
          "entity_item_id": "300001",
          "price": "9.99",
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "discount_amount": 0,
          "tax_percentage": 0,
          "discount_type": "percentage"
        },
        {
          "id": 31,
          "main_menu_id": 1,
          "delivery_platform_id": 8,
          "entity_item_id": "300001",
          "price": "9.99",
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "discount_amount": 0,
          "tax_percentage": 0,
          "discount_type": "percentage"
        }
      ],
      "categories": [
        {
          "id": 200003,
          "title": "Mains",
          "sub_title": null,
          "description": null,
          "status": 1,
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "parent_id": 0,
          "image_path": null,
          "remote_id": null,
          "priority": 10000,
          "pivot": {
            "item_id": 300001,
            "category_id": 200003,
            "created_at": "2021-07-01 12:39:36",
            "updated_at": "2021-07-01 12:39:36"
          }
        }
      ]
    },
    {
      "id": 300002,
      "source": null,
      "title": "Chicken Korma / Parotta (2)",
      "description": null,
      "image_url": "https://rs-menus-api.roocdn.com/images/062f785d-a54e-4789-9350-0e2e1a5ea1a2/image.jpeg",
      "status": 1,
      "created_at": "2021-07-01 12:39:36",
      "updated_at": "2021-07-01 12:39:36",
      "allergies": null,
      "tax": "20.00",
      "price": "9.99",
      "sku": null,
      "contains_alcohol": 0,
      "remote_id": "0",
      "is_valid_image": true,
      "masterEntityDeliveryPlatforms": [],
      "categoryList": [
        {
          "id": 200003,
          "title": "Mains",
          "sub_title": null,
          "description": null,
          "status": 1,
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "parent_id": 0,
          "image_path": null,
          "remote_id": null,
          "priority": 10000
        }
      ],
      "availablePlatformIds": [],
      "modifiers": null,
      "platform_urls": [],
      "is_modifier": false,
      "entity_delivery_platform": [
        {
          "id": 1,
          "entity_id": 300001,
          "delivery_platform_id": 8,
          "external_item_id": "101470066",
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "plu": "101470066",
          "price": "9.99",
          "item_name": "Chicken Korma / Parotta (2)",
          "allergies": "a:0:{}",
          "available": 1
        }
      ],
      "prices": [
        {
          "id": 1,
          "main_menu_id": 1,
          "delivery_platform_id": null,
          "entity_item_id": "300001",
          "price": "9.99",
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "discount_amount": 0,
          "tax_percentage": 0,
          "discount_type": "percentage"
        },
        {
          "id": 31,
          "main_menu_id": 1,
          "delivery_platform_id": 8,
          "entity_item_id": "300001",
          "price": "9.99",
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "discount_amount": 0,
          "tax_percentage": 0,
          "discount_type": "percentage"
        }
      ],
      "categories": [
        {
          "id": 200003,
          "title": "Mains",
          "sub_title": null,
          "description": null,
          "status": 1,
          "created_at": "2021-07-01 12:39:36",
          "updated_at": "2021-07-01 12:39:36",
          "parent_id": 0,
          "image_path": null,
          "remote_id": null,
          "priority": 10000,
          "pivot": {
            "item_id": 300001,
            "category_id": 200003,
            "created_at": "2021-07-01 12:39:36",
            "updated_at": "2021-07-01 12:39:36"
          }
        }
      ]
    }
  ]
}
