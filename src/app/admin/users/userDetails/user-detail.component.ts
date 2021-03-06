import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../model/User';
import {DataService} from '../../../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  dataChangedEvent = new EventEmitter();

  message = '';

  constructor(private dataService: DataService,
              private router: Router ) {
  }

  ngOnInit() {
  }

  editUser(){
    this.router.navigate(['admin', 'users'], {queryParams: {id: this.user.id, action: 'edit'}})
  }

  deleteUser() {
    const result = confirm('Are you sure you wish to delete this user?');

    if(result) {
      this.message = 'deleting...';
      this.dataService.deleteUser(this.user.id).subscribe(
        next => {
          this.dataChangedEvent.emit();
          this.router.navigate(['admin', 'users'])
        },
        (error) => {
          this.message = 'Sorry this user cannot be deleted at this time'
        }
      )
    }
  }

  resetPassword() {
    this.message = 'please wait...';
    this.dataService.resetUserPassword(this.user.id).subscribe(
      next => {
        this.message = 'the password has been reset'
      },
      (error) => {
        this.message = 'Sorry something went wrong;'
      }
    );
  }

}
