import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable() // Add because this can *recieve* something. "Injectable into"

export class AccountsService {
  // Moved from App component
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingZ: LoggingService ) {}

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
  };
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingZ.logStatusChange(status);
  };
}
