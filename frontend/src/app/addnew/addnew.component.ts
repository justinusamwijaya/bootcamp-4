import { Component, OnInit } from '@angular/core';
import {Http,RequestOptions,Headers} from "@angular/Http";
import {Router} from "@angular/router";
import{NgForm}from"@angular/forms";

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(private roo:Router, private ht:Http) { }
  gambar:File;
  ngOnInit() {
  }
  fileChange($event){
  
    this.gambar=$event.target.files[0];
     console.log(this.gambar);
     
 
   }
  AddProduct(wei:NgForm){

    let product = new FormData();
    let head = new RequestOptions({headers:new Headers({})})
    product.append("Nama",wei.value.Nama)
    product.append("Harga",wei.value.Harga)
    product.append("Kategori",wei.value.Kategori)
    product.append("Gambar",this.gambar)
    this.ht.post("http://localhost:3000/go/add",product,head)
    .subscribe(
      result=>{
        console.log(result.json())
        this.roo.navigate([""])
      },
      error=>{
        console.log(error)
      }
    )
  }
}
