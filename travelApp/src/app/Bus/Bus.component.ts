import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Bus',
  templateUrl: './Bus.component.html',
  styleUrls: ['./Bus.component.css']
})
export class BusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onsubmit(){
    alert("Form submited");
  }

}
