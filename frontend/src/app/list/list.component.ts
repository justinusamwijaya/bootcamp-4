import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/Http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  units =[]
  constructor(private ht:Http, private roo:Router) { }

  ngOnInit() {
    this.ht.get("http://localhost:3000/go/list")
    .subscribe(
      result=>{
        this.units=result.json()
      },
      error=>{
        console.log(error)
      }
    )
  }

}
