import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-cell',
  templateUrl: './course-cell.component.html',
  styleUrls: ['./course-cell.component.scss']
})
export class CourseCellComponent implements OnInit {
  @Input() name: string;
  @Input() date: string;

  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }
  editCourseDetails() {
    this.isEditing = true;
  }
  setName(name) {
    this.name = name
  }
  setDate(date) {
    this.date = date;
  }
}
