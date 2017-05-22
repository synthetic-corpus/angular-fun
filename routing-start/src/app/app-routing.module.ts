// This Typescript file only exists to hold routes.
// Routes are exported out to app.module.ts
import { NgModule } from '@angular/core';
// Compononents that make pages.
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

// Modules that allow routing possible
import { Routes, RouterModule } from '@angular/router';
// More services
import { AuthGuardService } from './auth-guard.service';

// Declares the Http Routes. Just like AJ taught me!
// Must follow specif pattern.
// { path: string, component: componentName }
// example { path: films, component: FilmSection }  connects to myfilmsite:80/films
const appRoutesZ: Routes =[
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children:[
    { path: ':id/:name', component: UserComponent }
    ] },
  { path: 'servers', /*canActivate:*/canActivateChild: [AuthGuardService],component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
  { path: 'nothing', component: NotFoundComponent},
  { path: '**', redirectTo: '/nothing'}
  // '**' is the wild card route. Must be placed last.
  // Expected behavroir is any unknown URL redirects to /nothing
  // redirect has an option 'redirectTo:'/nothing', pathMatch: 'full' option.
  // Will redirect iff entire path match the path: entry, not just part of it.

]
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutesZ)
    // This same code would work in App Module. Now must be exported.
  ],
  // If this module is imported by another...
  // .. what is exports will be imported.
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule{
  // export class imported as its name.

}
