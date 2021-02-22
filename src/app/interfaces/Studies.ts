export interface IStudies {
  course:     ICourse;
  state:      IRegistersState;
  isDynamic?: boolean;
  isAllList?: boolean;
}

export interface ICourse {
  name: string;
  date: string;
}

export interface IRegistersState {
  total:    number;
  active?:  number;
  new?:     number;
  removed?: number;
  blocked?: number;
  stopped?: number;
}

