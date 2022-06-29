import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApproachRubricComponent } from './assignment/approach-rubric/approach-rubric.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ChronogramRubricComponent } from './assignment/chronogram-rubric/chronogram-rubric.component';
import { ConceptRubricComponent } from './assignment/concept-rubric/concept-rubric.component';
import { MethodologyRubricComponent } from './assignment/methodology-rubric/methodology-rubric.component';
import { ObjectivesRubricComponent } from './assignment/objectives-rubric/objectives-rubric.component';
import { ProblemRubricComponent } from './assignment/problem-rubric/problem-rubric.component';
import { SummaryRubricComponent } from './assignment/summary-rubric/summary-rubric.component';
import { TitleRubricComponent } from './assignment/title-rubric/title-rubric.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from "./login/login.component";
import { LoginGuard } from './login/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootComponent } from './root-component/root.component';

const routes: Routes = [
    { path: "login", component: LoginComponent },
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        component: RootComponent,
        children: [
            {
                path: "admin",
                component: AdminComponent,
                canActivate: [LoginGuard]
            },
            {
                path: "dashboard",
                component: DashboardComponent,
                canActivate: [LoginGuard]
            },
            {
                path: "assignment/:assignmentId",
                redirectTo: "assignment/:assignmentId/title"
            },
            {
                path: "assignment/:assignmentId",
                component: AssignmentComponent,
                canActivate: [LoginGuard],
                children: [
                    {
                        path: "title",
                        component: TitleRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "problem",
                        component: ProblemRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "objectives",
                        component: ObjectivesRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "approach",
                        component: ApproachRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "concept",
                        component: ConceptRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "methodology",
                        component: MethodologyRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "chronogram",
                        component: ChronogramRubricComponent,
                        canActivate: [LoginGuard],
                    },
                    {
                        path: "summary",
                        component: SummaryRubricComponent,
                        canActivate: [LoginGuard],
                    },
                ]
            },
        ],
    },
    { path: "**", component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
