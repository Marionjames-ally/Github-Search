
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { UserService } from './service/user-http.service';
import { ReposService } from './service/repos-http.service';
import { RoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RepositoryComponent,
    UserComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
        ReactiveFormsModule
  ],
  providers: [UserService, ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
