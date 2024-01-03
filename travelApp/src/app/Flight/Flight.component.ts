import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Flight',
  templateUrl: './Flight.component.html',
  styleUrls: ['./Flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onsubmit(){
    alert("Details submited");
  }
}
