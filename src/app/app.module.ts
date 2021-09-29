import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MemberListComponent} from './member-list/member-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MemberService} from "../Services/member.service";

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
