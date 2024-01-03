import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Car',
  templateUrl: './Car.component.html',
  styleUrls: ['./Car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onsubmit(){
    alert("Form submited");
  }
}
