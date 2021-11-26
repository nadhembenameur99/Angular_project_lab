import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MemberListComponent} from './member-list/member-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MemberService} from "../Services/member.service";
import {MemberFormComponent} from './member-form/member-form.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {RemoveDialogComponent} from './remove-dialog/remove-dialog.component';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ToolsComponent} from './tools/tools.component';
import {ArticleComponent} from './article/article.component';
import {EventsComponent} from './events/events.component';
import {FirebaseAppModule} from "@angular/fire/app";
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberFormComponent,
    RemoveDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ToolsComponent,
    ArticleComponent,
    EventsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    FirebaseAppModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent],
  entryComponents: [
    RemoveDialogComponent
  ]
})
export class AppModule {
}
