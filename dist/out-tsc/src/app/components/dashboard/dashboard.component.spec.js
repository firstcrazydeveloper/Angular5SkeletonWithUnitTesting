"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var dashboard_component_1 = require("./dashboard.component");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var dashboard_service_1 = require("./dashboard.service");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../shared/services/auth.service");
var app_routing_1 = require("../../app.routing");
var pagenotfound_component_1 = require("../../components/pagenotfound/pagenotfound.component");
var MockDashBoardService = (function () {
    function MockDashBoardService() {
        this.templateCollection = [];
    }
    MockDashBoardService.prototype.AddTemplate = function (template) {
        this.templateCollection.push(template);
        return Observable_1.Observable.of(true);
    };
    MockDashBoardService.prototype.RemoveTemplate = function (template) {
        this.templateCollection.splice(this.templateCollection.indexOf(template), 1);
        return Observable_1.Observable.of(true);
    };
    MockDashBoardService.prototype.UpdateTemplate = function (template) {
        this.templateCollection.splice(this.templateCollection.indexOf(template), 1);
        this.templateCollection.push(template);
        return Observable_1.Observable.of(true).delay(10);
    };
    MockDashBoardService.prototype.GetDashBoardItemsCollection = function () {
        this.templateCollection.push({ id: 0, name: 'template 1' });
        return Observable_1.Observable.of(this.templateCollection).delay(10);
    };
    MockDashBoardService.prototype.GetDashBoardItem = function (itemId) {
        return { id: 0, name: 'template' };
    };
    return MockDashBoardService;
}());
var MockTodoService = (function () {
    function MockTodoService() {
    }
    return MockTodoService;
}());
var MockAuthService = (function () {
    function MockAuthService() {
    }
    return MockAuthService;
}());
describe('DashBoard Component', function () {
    var app;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                dashboard_component_1.DashboardComponent, pagenotfound_component_1.PageNotFoundComponent
            ],
            providers: [
                { provide: dashboard_service_1.DashBoardService, useClass: MockDashBoardService },
                { provide: auth_service_1.AuthService, useClass: MockAuthService }
            ],
            imports: [testing_2.RouterTestingModule, forms_1.FormsModule, app_routing_1.appRouting]
        }).compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
            app = fixture.componentInstance;
        });
    }));
    it('should create a dashboard component', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should add template', testing_1.async(function () {
        app.template = { id: 0, name: 'template' };
        expect(app.isSuccess).toBe(false);
        app.addTemplate();
        expect(app.template.id).toBe(0);
        expect(app.template.name).toBe('template');
        expect(app.isSuccess).toBe(true);
    }));
    //it('should remove todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    app.newTodoText = 'Data';
    //    app.addTodo();
    //    expect(app.todoStore.todos.length).toBe(2);
    //    let tempTodo = app.todoStore.todos[0];
    //    app.remove(tempTodo);
    //    expect(app.todoStore.todos.length).toBe(1);
    //    expect(app.todoStore.todos[0].title).toBe('Data');
    //}));
    //it('should toggle Completion of Todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.toggleCompletion(tempTodo);
    //    expect(tempTodo.completed).toBe(true);
    //}));
    //it('should remove completed todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.toggleCompletion(tempTodo);
    //    app.newTodoText = 'Sample 2';
    //    app.addTodo();
    //    app.newTodoText = 'Sample 3';
    //    app.addTodo();
    //    app.removeCompleted();
    //    expect(app.todoStore.todos.length).toBe(2);
    //}));
    //it('should edit todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.editTodo(tempTodo);
    //    expect(tempTodo.editing).toBe(true);
    //}));
    //it('should update todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.updateEditingTodo(tempTodo, 'New Title');
    //    expect(tempTodo.title).toBe('New Title');
    //}));
    //it('should cancel editing todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.cancelEditingTodo(tempTodo);
    //    expect(tempTodo.editing).toBe(false);
    //}));
    //it('should stop editing todo', async(() => {
    //    app.newTodoText = 'Sample';
    //    app.addTodo();
    //    let tempTodo = app.todoStore.todos[0];
    //    app.stopEditing(tempTodo, 'Old Title');
    //    expect(tempTodo.title).toBe('Old Title');
    //    expect(tempTodo.editing).toBe(false);
    //}));
});
//# sourceMappingURL=dashboard.component.spec.js.map