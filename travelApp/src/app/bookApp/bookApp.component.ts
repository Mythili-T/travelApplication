import { Component, OnInit } from '@angular/core';
import { BookAppService } from '../BookApp.service';

@Component({
  selector: 'app-bookApp',
  templateUrl: './bookApp.component.html',
  styleUrls: ['./bookApp.component.css']
})
export class BookAppComponent implements OnInit {
  getMaterials: any;
  constructor(private bookservice:BookAppService) {
    this.bookservice.getBook().subscribe(data=>{
      this.getMaterials=data;
    })
  }
  ngOnInit() {
  }

}
