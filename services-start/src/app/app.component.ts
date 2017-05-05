import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit {
  // Intiate variable acounts. Contains objects with two strings. Is empty at first.
  accounts: {name: string, status: string}[] =[];

  // inject accounts service.
  constructor(private accountsZ: AccountsService) {

  }

  OnInit(){
    this.accounts = this.accountsZ.accounts;
  }


  /* This code move to a service along with the array.
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  } */
}
