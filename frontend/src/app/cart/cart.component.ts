import { Component, OnInit } from '@angular/core';
import{Http} from "@angular/Http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any
  Total=0
  constructor(private ht:Http) { }

  ngOnInit() {
    this.ht.get("http://localhost:3000/go/cart")
    .subscribe(
      result=>{
        for(var i=0;i<result.json().length;i++){
          this.cart=result.json()
          for(i=0;i<result.json().length;i++){
          this.Total+=(result.json()[i].Price*result.json()[i].Quantity)
        }
        }
      }
    )
  }
checkout(){
  this.ht.delete("http://localhost:3000/go/cart")
  .subscribe(
    result=>{
      location.reload()
    }
  )

}
}
