import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private phone: PhoneService) {
    
   }

  ngOnInit() {
  }

  sendMsg() {
    this.phone.call.emit('hello, i am carl')
  }
}
