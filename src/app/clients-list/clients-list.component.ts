import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
    selector: 'app-clients-list',
    templateUrl: './clients-list.component.html',
    styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

    clients: Client[] = [];

    constructor(
        private clientService: ClientService
    ) { 
    }

    ngOnInit(): void {
        this.clientService.getClients().subscribe((clients: Client[]) => {
            console.log(clients);
            this.clients = clients;
        });
    }

}
