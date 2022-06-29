import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

export interface LoginFields {
    email: string,
    password: string,
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    dirtyLoginFields: LoginFields = {
        email: "",
        password: "",
    };

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    login(): void {
        const loginFields = this.validateLoginFields();

        if (loginFields === null) {
            alert("Por favor revise los campos ingresados.");
            return;
        }

        this.userService.login(loginFields);
    }

    private validateLoginFields(): any | null {
        if (this.dirtyLoginFields.email.length <= 0 || this.dirtyLoginFields.password.length <= 0) {
            return null;
        }
        return this.dirtyLoginFields;
    }
}
