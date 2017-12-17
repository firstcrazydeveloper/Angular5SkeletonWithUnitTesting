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
var webApiManager_service_1 = require("../../shared/services/webApiManager.service");
var Rx_1 = require("rxjs/Rx");
var auth_service_1 = require("../../shared/services/auth.service");
var DashBoardService = (function () {
    function DashBoardService(webApiService, authService) {
        this.webApiService = webApiService;
        this.authService = authService;
        this.dashBoardDataCollection = null;
        this.dummyToken = 'dummytoken';
    }
    DashBoardService_1 = DashBoardService;
    DashBoardService.prototype.getDashBoardItemsCollection = function () {
        this.dashBoardDataCollection = this.webApiService.get(DashBoardService_1.dashboardUrl, this.dummyToken);
        return this.dashBoardDataCollection;
    };
    DashBoardService.prototype.getDashBoardItem = function (itemId) {
        var modifiedUrl = DashBoardService_1.dashboardUrl + '/' + itemId;
        this.dashBoardItem = this.webApiService.get(modifiedUrl, this.dummyToken);
        return modifiedUrl;
    };
    DashBoardService.prototype.AddTemplate = function (template) {
        return this.webApiService.post(DashBoardService_1.dashboardUrl, template, this.dummyToken);
    };
    DashBoardService.prototype.RemoveTemplate = function (template) {
        return Rx_1.Observable.of(true).delay(10);
    };
    DashBoardService.prototype.UpdateTemplate = function (template) {
        return Rx_1.Observable.of(true).delay(10);
    };
    DashBoardService.prototype.clearCache = function () {
        this.dashBoardDataCollection = null;
    };
    DashBoardService.dashboardUrl = 'dashboard';
    DashBoardService = DashBoardService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [webApiManager_service_1.WebApiManager, auth_service_1.AuthService])
    ], DashBoardService);
    return DashBoardService;
    var DashBoardService_1;
}());
exports.DashBoardService = DashBoardService;
//# sourceMappingURL=dashboard.service.js.map