import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router){}


  ngOnInit() {
  }
  onLoadServers(id:number){
    // This is an example of loading a route via programs.
    // "I did a complex thing. Now navigate somewhere!"
    // Navigator methods takes arguements as array.
    this.router.navigate(['/servers', id,'edit'], {queryParams:{allowEdit:'1'},
    fragment:'loading'});
    // console.log("did a thing");
    // Router Link is localhost:4200/servers/:id/edit/?allowEdit=1#loading 
  }

}
