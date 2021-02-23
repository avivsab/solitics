import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IStudies } from "../../interfaces/Studies";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit, OnChanges {
  @Input() studies: IStudies[];
  report = [];
  secodaryRowsArr = [];
  // Make sure we take only this columns from the data object
  columns = [
    { name: 'course', formatter: 'course' },
    { name: 'icon', formatter: 'icon' },
    { name: 'active', formatter: '' },
    { name: 'new', formatter: '' },
    { name: 'removed', formatter: '' },
    { name: 'blocked', formatter: '' },
    { name: 'stopped', formatter: '' },
    { name: 'total', formatter: '' }
  ];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (!this.studies || !Array.isArray(this.studies)) { return; }
    this.getReport()
  }

  getReport() {
    this.report = this.studies.map(s => {
      const data = {
        course: s.course,
        icon: '',
        active: { title: 'active', value: s?.state.active },
        new: { title: 'new', value: s?.state.new },
        removed: { title: 'removed', value: s?.state.removed },
        blocked: { title: 'blocked', value: s?.state.blocked },
        stopped: { title: 'stopped', value: s?.state.stopped },
        total: { title: 'total', value: s?.state.total }
      };


      // I'm assuming there will be no "collision" here, meaning only
      // one "if" will match (or nothing)
      if (s.isAllList) {
        data.icon = 'AllList';
      } else if (s.isDynamic) {
        data.icon = 'Dynamic';
      } else if (s?.state?.total == 0) {
        data.icon = 'Empty';
      } 
      return data;
    });

    // I'm assuming we always have an "AllList" row
    const idx = this.report.findIndex(item => item.icon === 'AllList');
    const main = this.report.splice(idx, 1);
    this.report.unshift(...main);
  }

}