import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]// This line needed to inject the dependecies.
})
export class NewAccountComponent {

  // This constructor instiates a class of the Loggin.service.ts
  // Not sure why 'private is needed'
  // 'loggingService' is an arbitrary name. Other side of colon is not.
  constructor(private loggingService: LoggingService,
              private accountsZ: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsZ.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
