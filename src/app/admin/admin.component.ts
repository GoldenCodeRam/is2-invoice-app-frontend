import { Component, OnInit } from '@angular/core';
import { TwoValueScale } from '../assignment/scales/twoValueScale';
import { AssigmentService } from '../service/assignment/assigment.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    twoValueScales: TwoValueScale[] = [];
    twoValueTrueOption: Number = 0;
    twoValueFalseOption: Number = 0;

    constructor(
        private assignmentService: AssigmentService,
    ) {
        this.assignmentService.getTwoValueScales().subscribe((twoValueScales) => {
            this.twoValueScales = twoValueScales;
        });
    }

    ngOnInit(): void {
    }

    createTwoValueOption() {
        this.assignmentService.createTwoValueOption(this.twoValueTrueOption, this.twoValueFalseOption).subscribe(response => {
            console.log(response);
        });
    }

    removeTwoValueScale(twoValueScaleId: Number) {
        this.assignmentService.removeTwoValueScale(twoValueScaleId).subscribe(response => {
            console.log(response);
        });
    }
}
