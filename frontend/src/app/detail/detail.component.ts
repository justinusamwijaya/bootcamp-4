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
        console.log(result.json())
      },
      error=>{
        console.log(error)
      }
    )
  }

}
