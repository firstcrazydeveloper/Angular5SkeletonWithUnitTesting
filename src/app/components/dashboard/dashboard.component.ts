import { Component } from '@angular/core';
import { DashBoardService } from './dashboard.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.min.css']
})
export class DashboardComponent {
    title = 'app';
    templateCollection: Array<any>;
    isSuccess: boolean = false;
    template: any;
    constructor(public dashBoardService: DashBoardService, authService: AuthService, public router: Router) {
    }

    getTemplateCollection() {
        this.dashBoardService.getDashBoardItemsCollection()
            .subscribe(templateList => {
                this.templateCollection = templateList;
            },
            err => {
            });
    }

    addTemplate() {
        this.dashBoardService.AddTemplate(this.template)
            .subscribe(() => {
                //this.getTemplateCollection();
                this.isSuccess = true;
            },
            err => {
            });

    }

    removeTemplate() {
        this.dashBoardService.RemoveTemplate(this.template)
            .subscribe(() => {
                this.getTemplateCollection();
            },
            err => {
            });

    }

    updateTemplate() {
        this.dashBoardService.UpdateTemplate(this.template)
            .subscribe(() => {
                this.getTemplateCollection();
            },
            err => {
            });

    }
}
