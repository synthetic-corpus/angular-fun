import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';

// Code added over course unit goes here.
// Declares the Http Routes. Just like AJ taught me!
// Must follow specif pattern.
// { path: string, component: componentName }
// example { path: films, component: FilmSection }  connects to myfilmsite:80/films
const appRoutesZ: Routes =[
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children:[
    { path: ':id/:name', component: UserComponent }
  ]},
  { path: 'servers', component: ServersComponent, children: [
  { path: ':id', component: ServerComponent },
  { path: ':id/edit', component: EditServerComponent }
  ] }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  // HttpModeule... I remember this from Node.Js
  // Router Module is added here, and imported above.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutesZ)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
