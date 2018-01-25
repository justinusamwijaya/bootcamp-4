import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from"@angular/router";
import {Http,RequestOptions,Headers} from "@angular/Http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  params
  units 
  constructor(private roo:Router, private ht:Http, private aktiv:ActivatedRoute) { }

  ngOnInit() {
    this.aktiv.params
    .subscribe(
      result=>{
        this.params = result["id"]
      }
    )
    this.ht.get("http://localhost:3000/go/list/idDanDaniDanu"+this.params)
    .subscribe(
      result=>{
        this.units=result.json()
      },
      error=>{
        console.log(error)
      }
    )
  }
  tocart(x){
    let form = new FormData()
    let option = new RequestOptions({headers:new Headers({})})
    form.append("ProductId",this.units._id)
    form.append("ProductName",this.units.Nama)
    form.append("Picture",this.units.Gambar)
    form.append("Price",this.units.Harga)
    
    this.ht.post("http://localhost:3000/go/cart",form)
    .subscribe(
      result=>{
        location.reload()
      },
      error=>{
        console.log(error)
      }
    )
  }

}
