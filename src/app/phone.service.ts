import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  call: EventEmitter<string>;
  constructor() { 
    this.call = new EventEmitter();
  }
}
