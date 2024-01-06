import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookAppService } from '../BookApp.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private formbulider:FormBuilder,private bookservice:BookAppService) {

   }
   addBookForm=this.formbulider.group({
      ImagesURL:["",Validators.required],
      title:["",Validators.required],
      author:["",Validators.required],
      Cost:["",Validators.required],
      Discount:["",Validators.required]
   })

  ngOnInit() {
  }
  onSubmit(){
    this.bookservice.postBook(this.addBookForm.value).subscribe(data=>{
      alert("Added successfully");
      this.addBookForm.reset();
    })
  }
}
