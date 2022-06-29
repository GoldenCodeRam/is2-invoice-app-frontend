import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../assignment/assignment';
import { AssigmentService } from '../service/assignment/assigment.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    assignments: Assignment[] = [];

    constructor(
        private assignmentService: AssigmentService,
        private router: Router,
    ) {
        this.assignmentService.getAssignments().subscribe((assignments) => {
            this.assignments = assignments;
        });
    }

    ngOnInit(): void {
    }
}
