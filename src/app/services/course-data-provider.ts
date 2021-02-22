import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IStudies } from '../interfaces/Studies';

@Injectable({
  providedIn: 'root'
})

export class CourseDataProvider { 
  constructor(private http: HttpClient) {}

  getCourseReport(): Observable<IStudies[]> {
    return this.http.get<IStudies[]>('../assets/data.json', {observe: 'body', responseType: 'json'});
  }
}