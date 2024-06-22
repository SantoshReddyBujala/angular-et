import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetGetService {
  firstValue!: string;
  constructor() { }
  getFirstValue() {
    return this.firstValue;
  }
  setFirstValue(value: string) {
    this.firstValue = value;
  }
}
