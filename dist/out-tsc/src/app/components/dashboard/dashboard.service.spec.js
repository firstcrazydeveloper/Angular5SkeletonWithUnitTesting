"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var testing_2 = require("@angular/core/testing");
var dashboard_service_1 = require("./dashboard.service");
var appSettings_setting_1 = require("../../../app/appSettings.setting");
var webApiManager_service_1 = require("../../shared/services/webApiManager.service");
var auth_service_1 = require("../../shared/services/auth.service");
describe('DashBoardService', function () {
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: appSettings_setting_1.AppSettings.BaseAPIUrl, useValue: 'http://example.com' },
                webApiManager_service_1.WebApiManager, auth_service_1.AuthService, dashboard_service_1.DashBoardService,
                { provide: http_1.XHRBackend, useClass: testing_1.MockBackend },
            ]
        });
    });
    describe('getDashBoardItemsCollection()', function () {
        it('should return an Observable<Array<Templates>>', testing_2.inject([dashboard_service_1.DashBoardService, http_1.XHRBackend], function (dashBoardService, mockBackend) {
            var mockResponse = {
                data: [
                    { id: 0, title: 'Template 4' },
                    { id: 1, title: 'Template 1' },
                    { id: 2, title: 'Template 2' },
                    { id: 3, title: 'Template 3' },
                ]
            };
            mockBackend.connections.subscribe(function (connection) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });
            dashBoardService.getDashBoardItemsCollection().subscribe(function (items) {
                var myitems = items.data;
                expect(myitems.length).toBe(4);
                expect(myitems[0].title).toEqual('Template 4');
                expect(myitems[1].title).toEqual('Template 1');
                expect(myitems[2].title).toEqual('Template 2');
                expect(myitems[3].title).toEqual('Template 3');
            });
        }));
    });
});
//# sourceMappingURL=dashboard.service.spec.js.map