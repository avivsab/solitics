import { Component } from '@angular/core';

import { IStudies } from "./interfaces/Studies";
import { Observable } from 'rxjs';

import { CourseDataProvider } from './services/course-data-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'solitics';
  studies$: Observable<IStudies[]>;

  constructor(private courseDataProvider: CourseDataProvider , ){}
 
  ngOnInit() {
    this.studies$ = this.courseDataProvider.getCourseReport()
  }
}
