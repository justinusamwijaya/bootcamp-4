import { Component, OnInit } from '@angular/core';
import{Http} from "@angular/Http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  kategori = []
  constructor(private ht:Http){

  }
  ngOnInit(){
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
    this.ht.get("http://localhost:3000/go/list/kategoriDanDaniDanu"+x)
    .subscribe(
      result=>{
        console.log(result.json())
      },
      error=>{
        console.log(error)
      }
    )
  }
}
