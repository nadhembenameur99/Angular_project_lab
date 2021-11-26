import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberListComponent} from "./member-list/member-list.component";
import {MemberFormComponent} from "./member-form/member-form.component";
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {ArticleComponent} from "./article/article.component";
import {ToolsComponent} from "./tools/tools.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: 'members/:id/edit', pathMatch: 'full', component: MemberFormComponent},
  {path: 'members', pathMatch: 'full', component: MemberListComponent},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path: 'tools', pathMatch: 'full', component: ToolsComponent},
  {path: 'article', pathMatch: 'full', component: ArticleComponent},
  {path: 'events', pathMatch: 'full', component: EventsComponent},
  {path: 'Form', pathMatch: 'full', component: MemberFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {
}
