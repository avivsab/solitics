import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-cell',
  templateUrl: './course-cell.component.html',
  styleUrls: ['./course-cell.component.scss']
})
export class CourseCellComponent implements OnInit {
  @Input() name: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
