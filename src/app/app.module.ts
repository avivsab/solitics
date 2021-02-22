import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataRowComponent } from './components/data-row/data-row.component';
import { DataCellComponent } from './components/data-cell/data-cell.component';
import { IconComponent } from './components/icon/icon.component';
import { CourseCellComponent } from './components/course-cell/course-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataRowComponent,
    DataCellComponent,
    IconComponent,
    CourseCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
