import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../service/user/user';
import { UserService } from '../service/user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

    currentUserName: string = '';

    private currentUser: User | undefined;

    constructor(
        private userService: UserService,
        private router: Router,
    ) {
        this.userService.getUserFromToken().then((user: User | undefined) => {
            if (user) {
                this.currentUser = new User(user);
                this.currentUserName = this.currentUser.getName();
            } else {
                this.router.navigate(["login"]);
            }
        });
    }

    ngOnInit(): void {
    }
}
