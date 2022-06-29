import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private urlEndpoint: string = 'http://localhost:8080/api/clients';

    constructor(
        private http: HttpClient
    ) { }

    public getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.urlEndpoint).pipe(
            map(response => response as Client[])
        );
    }
}
