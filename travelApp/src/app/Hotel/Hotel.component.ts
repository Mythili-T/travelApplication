import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Hotel',
  templateUrl: './Hotel.component.html',
  styleUrls: ['./Hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onsubmit(){
    alert("Form submited");
  }
}
