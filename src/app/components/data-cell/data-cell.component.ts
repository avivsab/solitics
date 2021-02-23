import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {
@Input() data: object;
@Input() formatter: string;
@Input() first: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
