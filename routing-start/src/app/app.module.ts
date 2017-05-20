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
import { NotFoundComponent } from './not-found/not-found.component';

// Code added over course unit goes here.
// Declares the Http Routes. Just like AJ taught me!
// Must follow specif pattern.
// { path: string, component: componentName }
// example { path: films, component: FilmSection }  connects to myfilmsite:80/films
const appRoutesZ: Routes =[
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children:[
    { path: ':id/:name', component: UserComponent }
    ] },
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
    ] },
  { path: 'nothing', component: NotFoundComponent},
  { path: '**', redirectTo: '/nothing'}
  // '**' is the wild card route. Must be placed last.
  // Expected behavroir is any unknown URL redirects to /nothing
  // redirect has an option 'redirectTo:'/nothing', pathMatch: 'full' option.
  // Will redirect iff entire path match the path: entry, not just part of it.
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent
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
