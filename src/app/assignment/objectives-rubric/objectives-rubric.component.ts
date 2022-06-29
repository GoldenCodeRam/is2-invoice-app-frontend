import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-objectives-rubric',
    templateUrl: './objectives-rubric.component.html',
    styleUrls: ['./objectives-rubric.component.scss']
})
export class ObjectivesRubricComponent implements OnInit {

    constructor(
        private router: Router,
    ) {
        const assignmentIdFromRoute = Number(this.router.url.split("/")[2]);
    }

    ngOnInit(): void {
    }

}
