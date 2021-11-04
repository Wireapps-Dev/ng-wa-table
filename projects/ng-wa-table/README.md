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

```js
<ng-wa-table [isDataLoaded]="isDataLoaded" [tableHeaders]="tableHeaders" [tableColumns]="tableColumns" [tableData]="items" 
[noItemsAvailable]="noItemsAvailable" [headerFontSize]="'30px'" [bodyFontSize]="'14px'" [tableHeaderColor]="'#ECF3FF'" 
(onEditClick)="onEditClick($event)" (onDeleteClick)="onDeleteClick($event)"></ng-wa-table>

```

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
| sortName_dsc            | boolean       | Sort in descending order                                            |
| sortName_asc            | boolean       | Sort in ascending order                                             |
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
| searchIconColor         | string        |   Assign the text color (Hex or name)                               |
| filterIconColor         | string        |   Assign the text color (Hex or name)                               |
| filterTextColor         | string        |   Assign the text color (Hex or name)                               |
| filterBackgroundColor   | string        |   Assign the text color (Hex or name)                               |
| filterTags              | array         |   Array of strings                                                  |
| tagsColor               | string        |   Assign the text color (Hex or name)                               |
| tagActiveTextColor      | string        |   Assign the text color (Hex or name)                               |
| tagInActiveTextColor    | string        |   Assign the text color (Hex or name)                               |
| tagPressed              | function      |   Function used to select tags in the filter                        |
| tagActive               | String        |   Assign the Active tag for Filter box                              |
| checkboxSelector        | function      |   Function used to get all checkboxes selected                      |
| selectedItems           | array         |   Function used to get all checkboxes selected                      |
| selectItem              | function      |   Function used to get a checkbox that selected                     |

## Table Headers Array
In this array you need to mention these 4 things: 
  * id - Used to identify the object unique
  * header - Name of the column and if you don't want to mention the a name then leave it as a empty string
  * header - Name of the column and if you don't want to mention the a name then leave it as a empty string
  * classType - To align the header name specify the type. There are 3 types as,
    * tableHeader-left - Align the header to left.
    * tableHeader-right - Align the header to right.
    * tableHeader-center - Align the header to center.
  * checkbox - This will enable checkbox and it will select all the checkboxes in the table rows. 

```
  tableHeaders: Array<object> = [
    { id: 1, header: '', checkbox: true, classType: '' },
    { id: 2, header: 'SKU', classType: 'tableHeader-left' },
    {
      id: 3,
      header: 'Item Name',
      sort: false,
      classType: 'tableHeader-center',
    },
    { id: 4, header: 'Category', classType: 'tableHeader-center' },
    { id: 5, header: 'Item Type', classType: 'tableHeader-center' },
    { id: 6, header: 'Status', classType: 'tableHeader-center' },
    { id: 7, type: 'Action', classType: 'actions no-sort' },
  ];
```

## Table Columns



## License

[MIT](https://github.com/Wireapps-Dev/ng-wa-table/blob/d6c2d193120dc3387b91dc745d8f1dee94ace4af/LICENSE)
 
