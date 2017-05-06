import { Component, Input} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private accountsZ: AccountsService){}


  onSetTo(status: string) {
    this.accountsZ.updateStatus(this.id, status);
    // this.loggingZ.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
