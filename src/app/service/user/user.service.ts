import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginFields } from 'src/app/login/login.component';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private urlEndpoint: string = 'http://localhost:8080/api/users';
    private loginEndpoint: string = 'http://localhost:8080/auth/login';
    private validateJwtEndpoint: string = 'http://localhost:8080/auth/validate-jwt';
    private getUserFromTokenEndpoint: string = 'http://localhost:8080/auth/user-from-jwt';

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public async login(loginFields: LoginFields): Promise<void> {
        const response: any = await this.http.post(this.loginEndpoint, loginFields).toPromise();
        if (response) {
            localStorage.setItem("jwtToken", response.value);
            this.router.navigate(['dashboard']);
        } else {
            localStorage.removeItem("jwtToken");
        }
    }

    public async validateJwtToken(): Promise<boolean> {
        return await this.http.post<boolean>(this.validateJwtEndpoint, {
            value: localStorage.getItem("jwtToken"),
        }).toPromise() ? true : false;
    }

    public async getUserFromToken(): Promise<User | undefined> {
        return await this.http.post<User>(this.getUserFromTokenEndpoint, {
            value: localStorage.getItem("jwtToken"),
        }).toPromise();
    }

    public getUsers(): Observable<User[]> {
        return this.http.get(this.urlEndpoint).pipe(
            map((response: any) => response as User[])
        );
    }
}
