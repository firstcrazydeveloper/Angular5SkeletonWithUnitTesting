"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var angular2_busy_1 = require("angular2-busy");
var core_1 = require("@angular/core");
var shared_module_1 = require("./shared/shared.module");
var app_component_1 = require("./app.component");
var pagenotfound_component_1 = require("./components/pagenotfound/pagenotfound.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, dashboard_component_1.DashboardComponent, pagenotfound_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, http_1.HttpModule, animations_1.BrowserAnimationsModule, common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routing_1.appRouting, shared_module_1.SharedModule.forRoot(), angular2_busy_1.BusyModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map