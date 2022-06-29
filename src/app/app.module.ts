import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { RootComponent } from './root-component/root.component';
import { UserService } from './service/user/user.service';
import { AssigmentService } from './service/assignment/assigment.service';
import { TitleRubricComponent } from './assignment/title-rubric/title-rubric.component';
import { ProblemRubricComponent } from './assignment/problem-rubric/problem-rubric.component';
import { ObjectivesRubricComponent } from './assignment/objectives-rubric/objectives-rubric.component';
import { ApproachRubricComponent } from './assignment/approach-rubric/approach-rubric.component';
import { ConceptRubricComponent } from './assignment/concept-rubric/concept-rubric.component';
import { MethodologyRubricComponent } from './assignment/methodology-rubric/methodology-rubric.component';
import { ChronogramRubricComponent } from './assignment/chronogram-rubric/chronogram-rubric.component';
import { SummaryRubricComponent } from './assignment/summary-rubric/summary-rubric.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        ClientsListComponent,
        LoginComponent,
        PageNotFoundComponent,
        DashboardComponent,
        AssignmentComponent,
        RootComponent,
        TitleRubricComponent,
        ProblemRubricComponent,
        ObjectivesRubricComponent,
        ApproachRubricComponent,
        ConceptRubricComponent,
        MethodologyRubricComponent,
        ChronogramRubricComponent,
        SummaryRubricComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [UserService, AssigmentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
