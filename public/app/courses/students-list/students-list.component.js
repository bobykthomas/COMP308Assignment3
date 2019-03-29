System.register(["@angular/core", "../courses.service"], function (exports_1, context_1) {
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
    var core_1, courses_service_1, StudentsListComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }
        ],
        execute: function () {
            StudentsListComponent = /** @class */ (function () {
                function StudentsListComponent(_coursesService) {
                    this._coursesService = _coursesService;
                }
                StudentsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._coursesService.studentsList().subscribe(function (courses) { return _this.courses
                        = courses; });
                };
                StudentsListComponent = __decorate([
                    core_1.Component({
                        selector: 'students-list',
                        templateUrl: 'app/courses/students-list/students-list.template.html',
                        styleUrls: ['./assets/css/style.css']
                    }),
                    __metadata("design:paramtypes", [courses_service_1.CoursesService])
                ], StudentsListComponent);
                return StudentsListComponent;
            }());
            exports_1("StudentsListComponent", StudentsListComponent);
        }
    };
});
//# sourceMappingURL=students-list.component.js.map