System.register(["@angular/core", "@angular/common", "@angular/router", "./home.routes", "./home.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, common_1, router_1, home_routes_1, home_component_1, HomeModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_routes_1_1) {
                home_routes_1 = home_routes_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }
        ],
        execute: function () {
            HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                HomeModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            router_1.RouterModule.forChild(home_routes_1.HomeRoutes),
                        ],
                        declarations: [
                            home_component_1.HomeComponent,
                        ]
                    })
                ], HomeModule);
                return HomeModule;
            }());
            exports_1("HomeModule", HomeModule);
        }
    };
});
//# sourceMappingURL=home.module.js.map