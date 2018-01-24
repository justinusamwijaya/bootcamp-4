import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from"@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/Http";

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddnewComponent } from './addnew/addnew.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddnewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
      {path:"",component:ListComponent},
      {path:"new",component:AddnewComponent},
      {path:":id",component:DetailComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
