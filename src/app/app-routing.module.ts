import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberListComponent} from "./member-list/member-list.component";
import {MemberFormComponent} from "./member-form/member-form.component";
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'members/:id/edit', pathMatch: 'full', component: MemberFormComponent},
  {path: 'members', pathMatch: 'full', component: MemberListComponent},
  {path: 'Form', pathMatch: 'full', component: MemberFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'members'},
  {path: '**', pathMatch: 'full', redirectTo: 'members'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {
}
