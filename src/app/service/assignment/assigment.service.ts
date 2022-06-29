import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Assignment } from 'src/app/assignment/assignment';
import { TwoValueScale } from 'src/app/assignment/scales/twoValueScale';

@Injectable({
    providedIn: 'root'
})
export class AssigmentService {

    private readonly GET_ALL_ENDPOINT: string = 'http://localhost:8080/data/assignment/all';
    private readonly GET_ASSIGNMENT_ENDPOINT: string = 'http://localhost:8080/data/assignment/find';
    private readonly GET_TWO_VALUE_SCALES_ENDPOINT: string = 'http://localhost:8080/data/assignment/two-value-scale/all';
    private readonly CREATE_TWO_VALUE_OPTION_ENDPOINT: string = 'http://localhost:8080/data/assignment/two-value-scale';

    constructor(
        private http: HttpClient,
    ) { }

    public getAssignments(): Observable<Assignment[]> {
        return this.http.get<Assignment[]>(this.GET_ALL_ENDPOINT).pipe(
            map(response => response as Assignment[])
        );
    }

    public getAssignment(assignmentId: number) {
        return this.http.post<Assignment>(this.GET_ASSIGNMENT_ENDPOINT, assignmentId).pipe(
            map(response => response as Assignment)
        );
    }

    public getTwoValueScales() {
        return this.http.get<TwoValueScale[]>(this.GET_TWO_VALUE_SCALES_ENDPOINT).pipe(
            map(response => response as TwoValueScale[])
        );
    }

    public createTwoValueOption(twoValueTrueOption: Number, twoValueFalseOption: Number) {
        return this.http.post(this.CREATE_TWO_VALUE_OPTION_ENDPOINT, {
            trueOptionValue: twoValueTrueOption,
            falseOptionValue: twoValueFalseOption
        }).pipe(
            map(response => response)
        );
    }

    public removeTwoValueScale(id: Number) {
        return this.http.delete(this.CREATE_TWO_VALUE_OPTION_ENDPOINT, {
            body: id
        }).pipe(
            map(response => response)
        );
    }
}
