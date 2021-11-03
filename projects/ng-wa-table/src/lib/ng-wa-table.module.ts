import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgWaTableComponent } from './ng-wa-table.component';



@NgModule({
  declarations: [
    NgWaTableComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    NgWaTableComponent
  ]
})
export class NgWaTableModule { }
