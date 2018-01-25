import { Component, OnInit } from '@angular/core';
import{Http} from "@angular/Http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  kategori = []
  cart=0;
  constructor(private ht:Http, private roo:Router){

  }
  ngOnInit(){
    this.ht.get("http://localhost:3000/go/cart")
    .subscribe(
      result=>{
        for(var i=0;i<result.json().length;i++){
          this.cart+=result.json()[i].Quantity
        }
      }
    )
    this.ht.get("http://localhost:3000/go/cate")
    .subscribe(
      result=>{
        console.log(result.json())
        this.kategori=result.json()
      },
      error=>{
        console.log(error)
      }
    )
  }
  katego(x){

    this.roo.navigate([""],{queryParams:{kategori:x}})
    location.reload()
  }
}
