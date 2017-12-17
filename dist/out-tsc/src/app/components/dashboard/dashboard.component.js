"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboard_service_1 = require("./dashboard.service");
var auth_service_1 = require("../../shared/services/auth.service");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(dashBoardService, authService, router) {
        this.dashBoardService = dashBoardService;
        this.router = router;
        this.title = 'app';
        this.isSuccess = false;
    }
    DashboardComponent.prototype.getTemplateCollection = function () {
        var _this = this;
        this.dashBoardService.getDashBoardItemsCollection()
            .subscribe(function (templateList) {
            _this.templateCollection = templateList;
        }, function (err) {
        });
    };
    DashboardComponent.prototype.addTemplate = function () {
        var _this = this;
        this.dashBoardService.AddTemplate(this.template)
            .subscribe(function () {
            //this.getTemplateCollection();
            _this.isSuccess = true;
        }, function (err) {
        });
    };
    DashboardComponent.prototype.removeTemplate = function () {
        var _this = this;
        this.dashBoardService.RemoveTemplate(this.template)
            .subscribe(function () {
            _this.getTemplateCollection();
        }, function (err) {
        });
    };
    DashboardComponent.prototype.updateTemplate = function () {
        var _this = this;
        this.dashBoardService.UpdateTemplate(this.template)
            .subscribe(function () {
            _this.getTemplateCollection();
        }, function (err) {
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.min.css']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashBoardService, auth_service_1.AuthService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map