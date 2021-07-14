# NgWaTable

Table component is used to avoid code duplication. While keeping the table component flexible enough to handle different types of data.
To access the table component use  `<ng-wa-table></ng-wa-table>` and pass the properties according to data you want to display. 

```code
<ng-wa-table [isDataLoaded]="isDataLoaded" [tableColumns]="tableInfo" [tableData]="items" [tableHeight]="48"
    [tableHeaders]="tableConfig" [noItemsAvailable]="noItemsAvailable"
    [filterSearchAvailability]="filterSearchAvailability" [filterAvailability]="filterAvailability"
    [mainContainerPadding]="'0 10% 0 10%'" [headerFontSize]="'30px'" [bodyFontSize]="'14px'"
    [searchBarColor]="'#ECF3FF'" [tableHeaderColor]="'#ECF3FF'" (onEditClick)="onEditClick($event)"
    (onDeleteClick)="onDeleteClick($event)" [sortName_asc]="sortItemName_asc" [sortName_dsc]='sortItemName_dsc'
    (itemSort)="itemNameSort()" (search)="searchItems($event)" [filterTags]="filterTags" 
    [tagActive]="tagActive" (tagPressed)="tagPressed($event)"
></ng-wa-table>
```

#### Props
These properties should pass in order to display the rows and columns of the table,


| Name                    | Type          | Description                                                         |
| :---                    |    :---       |       :-------------                                                |
| tableConfig             | array         | An array of objects that each describe a header column              |
| tableInfo               | array         | An array of objects that each describe a row                        |   
| tableAction             | array         | An array of objects that each describe Actions(View, Edit, Delete)  |
| isDataLoaded            | boolean       | Show the loader                                                     |
| filterAvailability      | boolean       | Availability of Filter categories                                   |
| filterSearchAvailability| boolean       | Availability Search option                                          |
| noItemsAvailable        | string        |     Show message when no item is available                          |
| isFilterClicked         | boolean       |         Check filter is selected                                    |
| filterClickHeight       | number        |         If filter is selected define table height                   |
| filterNotClickHeight    | number        |    If filter is not selected define table height                    |
| pages                   | array         |    Enable pagination                                                |
| getMoreItems            | function      |    Function used to load items per page that should be visible      |
| currentPage             | number        |    Current page number                                              |
| policies                | array         |    Define accessibility of actions according to the policies        |
| sortName_dsc            | boolean       |    Sort in descending order                                         |
| sortName_asc            | boolean       |   Sort in ascending order                                           |
| onEditClick             | array         |   Function used to edit data                                        |
| onDeleteClick           | array         |   Function used to delete data                                      |
| onViewClick             | array         |   Function used to view data                                        |


## Install

`npm i ng-wa-table` 

## Usage

How to use