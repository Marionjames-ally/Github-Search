import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from '../app/display/display.component'
import { RepositoryComponent } from '../app/repository/repository.component'

const routes: Routes = [
  {path:"display",component:DisplayComponent},
  {path:"repo",component:RepositoryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  // declarations: []
})
export class RoutingModule { }