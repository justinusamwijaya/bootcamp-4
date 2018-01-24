import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/Http";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  units =[]
  cate
  kategori
  constructor(private ht:Http, private roo:Router,private aktiv:ActivatedRoute) { }

  ngOnInit() {
    this.aktiv
   .queryParams
   .subscribe(params => {
     console.log(params.kategori)
    this.cate= params.kategori
   });
   if(this.cate==null){
    this.ht.get("http://localhost:3000/go/list")
    .subscribe(
      result=>{
        this.units=result.json()
        this.kategori=false
      },
      error=>{
        console.log(error)
      }
    )
   }else{
    this.ht.get("http://localhost:3000/go/list/kategoriDanDaniDanu"+this.cate)
    .subscribe(
      result=>{
        this.units=result.json()
        this.kategori=true
      },
      error=>{
        console.log(error)
      }
    )}

  }
  refresh(){
    this.roo.navigate([""])
    location.reload();
  }

}
