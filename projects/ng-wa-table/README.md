# NgWaTable

The NGWaTable is an command-line tool and powerful library to create unique and basic table using Angular. The goal is to avoid code duplication while keeping the table flexible enough to handle different types of data.

### Features
---

- Background styling in the headers,search and filters
- Text alignment in headers and columns(top, right, bottom, left)
- Style changes(text color, background color, padding)
- Filter Options
- Table Search bar
- Table data Sorting
- Table data Loader through ``ngx-skeleton-loader``

### Installation
---
```code

npm install ng-wa-table

```

### How To Use
---
Import the NgWaTableModule into your app.module.ts file. Then use the bellow code into your component.html file.

```code
<ng-wa-table  [isDataLoaded]="isDataLoaded" [tableColumns]="tableInfo" [tableData]="items"  [filterClickTableHeight]="48"  [filterClickTableHeight]="65" [tableHeaders]="tableConfig" [noItemsAvailable]="noItemsAvailable" [filterSearchAvailability]="filterSearchAvailability" [filterAvailability]="filterAvailability" [mainContainerPadding]="'0 10% 0 10%'" [headerFontSize]="'30px'" [bodyFontSize]="'14px'" [searchBarColor]="'#ECF3FF'" [tableHeaderColor]="'#ECF3FF'" (onEditClick)="onEditClick($event)" (onDeleteClick)="onDeleteClick($event)" [sortName_asc]="sortItemName_asc" [sortName_dsc]='sortItemName_dsc'(itemSort)="itemNameSort()"></ng-wa-table>

```

#### Props
---
These properties should pass in order to display the rows and columns of the table,

| Name                    | Type          | Description                                                         |
| :---                    |    :---       |       :-------------                                                |
| tableHeaders            | array         | An array of objects that each describe a header column              |
| tableColumns            | array         | An array of objects that each describe a row                        |
| isDataLoaded            | boolean       | Show the loader                                                     |
| filterAvailability      | boolean       | Availability of Filter categories                                   |
| filterSearchAvailability| boolean       | Availability Search option                                          |
| noItemsAvailable        | string        |     Show message when no item is available in the table             |
| isFilterClicked         | boolean       |         Check filter is selected                                    |
| filterClickHeight       | number        |         If filter is selected define table height                   |
| filterNotClickHeight    | number        |    If filter is not selected define table height                    |
| pages                   | array         |    Enable pagination                                                |
| getMoreItems            | function      |    Function used to load items per page that should be visible      |
| currentPage             | number        |    Current page number                                              |
| sortName_dsc            | boolean       |    Sort in descending order                                         |
| sortName_asc            | boolean       |   Sort in ascending order                                           |
| mainContainerPadding    | string        |   Assign the values to container padding                            |
| searchBarColor          | string        |   Assign the color(Hex or name)                                     |
| tableHeaderColor        | string        |   Assign the color(Hex or name)                                     |
| headerFontSize          | string        |   Assign the size value                                             |
| headerFontSize          | string        |   Assign the size value (px)                                        |
| bodyFontSize            | string        |   Assign the size value (px)                                        |
| headerTxtColor          | string        |   Assign the text color (Hex or name)                               |
| bodyTxtColor            | string        |   Assign the text color (Hex or name)                               |
| searchBarTxtColor       | string        |   Assign the text color (Hex or name)                               |
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

[MIT](../../LICENSE)
 
