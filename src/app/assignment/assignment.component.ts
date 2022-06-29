import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AssigmentService } from "../service/assignment/assigment.service";
import { Assignment } from "./assignment";

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
    assignment: Assignment | undefined;
    rubricElement: Number = 0;

    constructor(
        private assinmentService: AssigmentService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        const routeParams = this.route.snapshot.paramMap;
        const assignmentIdFromRoute = Number(routeParams.get('assignmentId'));

        this.assinmentService.getAssignment(assignmentIdFromRoute).subscribe((assignment: Assignment) => {
            this.assignment = new Assignment(assignment);
        });
    }

    ngOnInit(): void {
    }

    navigateToRubricElement(number: Number) {
        switch (number) {
            case 0:
                this.router.navigate(['title'], { relativeTo: this.route });
                this.rubricElement = 0;
                break;
            case 1:
                this.router.navigate(['problem'], { relativeTo: this.route });
                this.rubricElement = 1;
                break;
            case 2:
                this.router.navigate(['objectives'], { relativeTo: this.route });
                this.rubricElement = 2;
                break;
            case 3:
                this.router.navigate(['approach'], { relativeTo: this.route });
                this.rubricElement = 3;
                break;
            case 4:
                this.router.navigate(['concept'], { relativeTo: this.route });
                this.rubricElement = 4;
                break;
            case 5:
                this.router.navigate(['methodology'], { relativeTo: this.route });
                this.rubricElement = 5;
                break;
            case 6:
                this.router.navigate(['chronogram'], { relativeTo: this.route });
                this.rubricElement = 6;
                break;
            case 7:
                this.router.navigate(['summary'], { relativeTo: this.route });
                this.rubricElement = 7;
                break;
        }
    }
}
