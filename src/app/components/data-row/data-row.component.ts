import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {
@Input() reportItem: object;
@Input() columns: object[];
@Input() main: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
