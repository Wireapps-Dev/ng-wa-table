[![NPM](https://badge.fury.io/js/ng-wa-table.svg)](https://www.npmjs.com/package/ng-wa-table)
[![GitHub license](https://img.shields.io/github/license/includable/react-native-check-version.svg)](https://github.com/Wireapps-Dev/ng-wa-table/blob/main/LICENSE)

# NgWaTable

The NgWaTable is a powerful library to create unique and basic table using Angular. The goal is to avoid code duplication while keeping the table flexible enough to handle different types of data. Basically, create a custom table as bellow, 

<p align="center">
<img src="https://github.com/Wireapps-Dev/ng-wa-table/blob/main/src/assets/table_view.png" height="50%" width="100%" />
</p>

## Features

- Background styling in the headers,search and filters
- Text alignment in headers and columns(top, right, bottom, left)
- Style changes(text color, background color, padding)
- Filter Options
- Table Search bar
- Table data Sorting
- Table data Loader through ``ngx-skeleton-loader``

## Angular Version
Developed for version 11 .

## Installation

```js

npm install ng-wa-table

```

## How To Use

1. Import  [NGX Skeleton loader](https://www.npmjs.com/package/ngx-skeleton-loader) npm library to your project.
2. Install Bootstrap 5 via CDN and jquery-3.5.1 into your project.
3. Install jquery-3.5.1 via CDN in your index.html file.
```
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></script>
```
4. Import the NgWaTableModule into your app.module.ts file like this,

```
  import { CommonModule } from '@angular/common';
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { NgWaTableModule } from 'projects/ng-wa-table/src/public-api';
  import { AppComponent } from './app.component';
  import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      NgWaTableModule,
      NgxSkeletonLoaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

4. Then use the bellow code into your component.html file.

```
<ng-wa-table [isDataLoaded]="isDataLoaded" [tableHeaders]="tableHeaders" [tableColumns]="tableColumns" [tableData]="items" 
[noItemsAvailable]="noItemsAvailable" [headerFontSize]="'30px'" [bodyFontSize]="'14px'" [tableHeaderColor]="'#ECF3FF'" 
(onEditClick)="onEditClick($event)" (onDeleteClick)="onDeleteClick($event)"></ng-wa-table>

```
Remember:- Properties should be same but assign value names can be change.

## Available Props

These properties should pass in order to display the rows and columns of the table,

| Name                    | Type          | Description                                                         |
| :---                    |    :---       |       :-------------                                                |
| tableHeaders            | array         | An array of objects that each describe a headers                    |
| tableColumns            | array         | An array of objects that each describe a each column                |
| tableData               | array         | An array of objects that each describe a your table items/data      |
| tableAction             | array         | An array of objects that each describe a actions                    |
| isDataLoaded            | boolean       | Show the loader                                                     |
| filterAvailability      | boolean       | Availability of Filter categories                                   |
| filterSearchAvailability| boolean       | Availability Search option                                          |
| noItemsAvailable        | string        | Show message when no item is available in the table                 |
| itemSort                | function      |   Function used to sort the items in the table                      |
| mainContainerPadding    | string        | Assign the values to main container padding                         |
| tableHeaderColor        | string        |   Assign the color(Hex or name)                                     |
| headerFontSize          | string        |   Assign the size value (px)                                        |
| headerTxtColor          | string        |   Assign the text color (Hex or name)                               |
| bodyFontSize            | string        |   Assign the size value (px)                                        |
| bodyTxtColor            | string        |   Assign the text color (Hex or name)                               |
| tableHeight             | string        |   Assign the size value                                             |
| onEditClick             | function      |   Function used to edit data                                        |
| onDeleteClick           | function      |   Function used to delete data                                      |
| onViewClick             | function      |   Function used to view data                                        |
| search                  | function      |   Function used to search the items in the table                    |
| searchBarColor          | string        |   Assign the color(Hex or name)                                     |
| searchBarTxtColor       | string        |   Assign the text color (Hex or name)                               |
| searchPlaceholderColor  | string        |   Assign the text color (Hex or name)                               |
| searchIconColor         | string        |   Assign the icon color (Hex or name)                               |
| filterIconColor         | string        |   Assign the icon color (Hex or name) to filter button              |
| filterTextColor         | string        |   Assign the text color (Hex or name) to filter button              |
| filterBackgroundColor   | string        |   Assign the background color (Hex or name) to filter button        |
| filterTags              | array         |   Array of strings                                                  |
| tagsColor               | string        |   Assign the tag color (Hex or name) to filter tags                 |
| tagActiveTextColor      | string        |   Assign the text color (Hex or name)                               |
| tagInActiveTextColor    | string        |   Assign the text color (Hex or name)                               |
| tagPressed              | function      |   Function to Filter tag                                            |
| tagActive               | String        |   Assign the active tag for Filter box                              |
| checkboxSelector        | function      |   Function used to get all checkboxes selected                      |
| selectedItems           | array         |   Function used to get all checkboxes selected                      |
| selectItem              | function      |   Function used to get a checkbox that selected                     |


## Table Headers 
In here you need to config an object consist with these properties: 
  * id - Used to identify the object unique
  * header - Name of the table column header and if you don't want to mention the a name then leave it as a empty string
  * sort(Boolean) - Boolean value that indicate sort icons should display or not. 
  * type - Only use when you have actions like edit, delete or view. 
  * classType - To align the header name specify the type. There are 3 types as,
    * tableHeader-left - Align the header to left.
    * tableHeader-right - Align the header to right.
    * tableHeader-center - Align the header to center.
    * actions - Align action icons to center.
  * checkbox(Boolean) - This will enable checkbox and it will select all the checkboxes in the table rows. 

```
  tableHeaders: Array<object> = [
    { id: 1, header: '', checkbox: true, classType: '' },
    { id: 2, header: 'SKU', classType: 'tableHeader-left' },
    { id: 3, header: 'Item Name', sort: false, classType: 'tableHeader-center',
    },
    { id: 4, header: 'Category', classType: 'tableHeader-center' },
    { id: 5, header: 'Item Type', classType: 'tableHeader-center' },
    { id: 6, header: 'Status', classType: 'tableHeader-center' },
    { id: 7, type: 'Action', classType: 'actions' },
  ];
```

## Table Data
In the "tableData" property you are sending an array of objects. It's look like this, 

```
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
]
```

## Table Columns

Using the table data values you need to bind them to each column. In order to do that config an object consist with these properties: 
  * id - Used to identify the object unique
  * header - mention a property from your tableData array.
  * type - There are different types of values in your tableData array. They can be numbers, titles, true or false values, arrays or a status bar. In here you need to mention what type of data should bind to each column. Those types are,
    1. String - The values that doesn't change & display as it is in the tableData array. 
    2. Array - If there is an array of objects.  
    3. Boolean - If true or false deciding a value we need to show in the column.
    4. Status - If you need to show a status bar, then use this type.
  * classType - To align the cell name specify the type. There are 3 types as,
    * tableColumnData-left - Align the cell data to left.
    * tableColumnData-right - Align the cell data to right.
    * tableColumnData-center - Align the cell data to center.
  * check(Only needed if type is a Array or a Boolean) - You can define a function that specify what need to be do from the value you get. As in the below example, For the type Boolean, if it is true return the 'Modifier' or else return 'Item'.
  * value - Mention a property from your tableData array, for the value that need to show inside the status bar. 
 
If it's a Status bar,
 * header(boolean) - If the status it true or not.
 * type - Type will be status. 
 * value - Value that need to display in the status bar. 

```
  tableColumns: Array<object> = [
    { id: 1, header: 'id', type: 'Checkbox', classType: '' },
    { id: 2, header: 'sku', type: 'String', classType: 'tableColumnData-left' },
    {
      id: 3,
      header: 'name',
      type: 'String',
      classType: 'tableColumnData-center',
    },
    {
      id: 4,
      header: 'categoryList',
      type: 'Array',
      check: function (test) {
        for (let key of test) {
          return key.title;
        }
      },
      classType: 'tableColumnData-center',
    },
    {
      id: 5,
      header: 'is_modifier',
      type: 'Boolean',
      check: function (test) {
        return test ? 'Modifier' : 'Item';
      },
      classType: 'tableColumnData-center',
    },
    {
      id: 5,
      header: 'status',
      value: 'statusValue',
      type: 'Status',
      classType: 'tableDataStatus',
    },
    { id: 6, header: 'action', fontAwesomeIcon: 'fas fa-pen' },
  ];
```

## Table Actions

You need to pass an array of object and each object need to have these properties: 
  * id - Used to identify the object unique
  * type - There are 3 types available. They are View, Edit and Delete.
  * fontAwesomeIcon - Mention the Font Awesome class for a particular icon.

```
 tableAction: Array<object> = [
    { id: '1', type: 'View', fontAwesomeIcon: 'fas fa-eye' },
    { id: '2', type: 'Edit', fontAwesomeIcon: 'fas fa-pen ' },
    { id: '3', type: 'Delete', fontAwesomeIcon: 'fas fa-trash' },
  ];
```

## Filters

If you want to add filter option to the table then "filterAvailability" should be true. In order to work it properly these are the props that you need to send. They are, 
* filterTags   - you need to send a array of Strings which you need to add as filter options. 
* tagPressed  -  Function to Filter tags                                       
* tagActive - You need to pass 'All' as the Initial value for tagActive. After that, assign the return value of tagPressed function to tagActive. 

In order to style the filter box you can include these properties,
* filterIconColor  -  Assign the icon color (Hex or name) to filter button        
* filterTextColor  -  Assign the text color (Hex or name) to filter button     
* filterBackgroundColor  -  Assign the background color (Hex or name) to filter button                                             
* tagsColor -   Assign the tag color (Hex or name) to filter tags              
* tagActiveTextColor  -  Assign the text color (Hex or name)                            
* tagInActiveTextColor  - Assign the text color (Hex or name)                                                   


## License

[MIT](https://github.com/Wireapps-Dev/ng-wa-table/blob/d6c2d193120dc3387b91dc745d8f1dee94ace4af/LICENSE)
 
