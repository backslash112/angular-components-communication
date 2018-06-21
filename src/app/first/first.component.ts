import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  msg: string;
  constructor(private phone: PhoneService) {
    this.msg = 'hi';
    this.phone.call.subscribe(newMsg => this.msg = newMsg);
   }

  ngOnInit() {
  }

}
