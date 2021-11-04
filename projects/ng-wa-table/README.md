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
3. Import the NgWaTableModule into your app.module.ts file like this,

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
| tableHeaders            | array         | An array of objects that each describe a header column              |
| tableColumns            | array         | An array of objects that each describe a each column                |
| tableData               | array         | An array of objects that each describe a your items                 |
| isDataLoaded            | boolean       | Show the loader                                                     |
| filterAvailability      | boolean       | Availability of Filter categories                                   |
| filterSearchAvailability| boolean       | Availability Search option                                          |
| noItemsAvailable        | string        | Show message when no item is available in the table                 |
| isFilterClicked         | boolean       | Check filter is selected                                            |
| filterClickHeight       | number        | If filter is selected define table height                           |
| filterNotClickHeight    | number        | If filter is not selected define table height                       |
| sortName_dsc            | boolean       | Sort in descending order                                            |
| sortName_asc            | boolean       | Sort in ascending order                                             |
| mainContainerPadding    | string        | Assign the values to main container padding                         |
| searchBarColor          | string        |   Assign the color(Hex or name)                                     |
| searchBarTxtColor       | string        |   Assign the text color (Hex or name)                               |
| searchPlaceholderColor  | string        |   Assign the text color (Hex or name)                               |
| searchIconColor         | string        |   Assign the text color (Hex or name)                               |
| tableHeaderColor        | string        |   Assign the color(Hex or name)                                     |
| headerFontSize          | string        |   Assign the size value (px)                                        |
| gapBetweenActions       | string        |   Assign the size value (%) for gap between the action buttons      |
| bodyFontSize            | string        |   Assign the size value (px)                                        |
| headerTxtColor          | string        |   Assign the text color (Hex or name)                               |
| bodyTxtColor            | string        |   Assign the text color (Hex or name)                               |
| onEditClick             | function      |   Function used to edit data                                        |
| onDeleteClick           | function      |   Function used to delete data                                      |
| onViewClick             | function      |   Function used to view data                                        |
| onShowFilter            | function      |   Function used to open the filter box                              |
| tagPressed              | function      |   Function used to select tags in the filter                        |
| onSearch                | function      |   Function used to search the items in the table                    |
| itemSort                | function      |   Function used to sort the items in the table                      |
| onChangeAccepting       | function      |   Function used to accept switch changes                            |
| onChangeAutoAccepting   | function      |   Function used to accept auto changes                              |
| checkboxSelector        | function      |   Function used to get all checkboxes selected                      |
| selectItem              | function      |   Function used to get a checkbox that selected                     |

## License

[MIT](https://github.com/Wireapps-Dev/ng-wa-table/blob/d6c2d193120dc3387b91dc745d8f1dee94ace4af/LICENSE)
 
