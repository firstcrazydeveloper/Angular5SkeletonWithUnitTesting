"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pagenotfound_component_1 = require("./components/pagenotfound/pagenotfound.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map