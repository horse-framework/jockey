(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/interceptors/session.guard */ "./src/interceptors/session.guard.ts");
/* harmony import */ var _layout_guest_layout_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/guest-layout/guest-layout.component */ "./src/app/layout/guest-layout/guest-layout.component.ts");
/* harmony import */ var _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/portal-layout/portal-layout.component */ "./src/app/layout/portal-layout/portal-layout.component.ts");







const routes = [
    {
        path: 'queue',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | queue-queue-module */ "queue-queue-module").then(__webpack_require__.bind(null, /*! ./queue/queue.module */ "./src/app/queue/queue.module.ts")).then(m => m.QueueModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'queues',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | queues-queues-module */ "queues-queues-module").then(__webpack_require__.bind(null, /*! ./queues/queues.module */ "./src/app/queues/queues.module.ts")).then(m => m.QueuesModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'route',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | route-route-module */ "route-route-module").then(__webpack_require__.bind(null, /*! ./route/route.module */ "./src/app/route/route.module.ts")).then(m => m.RouteModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'routes',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | routes-routes-module */ "routes-routes-module").then(__webpack_require__.bind(null, /*! ./routes/routes.module */ "./src/app/routes/routes.module.ts")).then(m => m.RoutesModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'clients',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | clients-clients-module */ "clients-clients-module").then(__webpack_require__.bind(null, /*! ./clients/clients.module */ "./src/app/clients/clients.module.ts")).then(m => m.ClientsModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'nodes',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | nodes-nodes-module */ "nodes-nodes-module").then(__webpack_require__.bind(null, /*! ./nodes/nodes.module */ "./src/app/nodes/nodes.module.ts")).then(m => m.NodesModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'handlers',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | handlers-handlers-module */ "handlers-handlers-module").then(__webpack_require__.bind(null, /*! ./handlers/handlers.module */ "./src/app/handlers/handlers.module.ts")).then(m => m.HandlersModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: 'login',
        component: _layout_guest_layout_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__["GuestLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~dashboard-dashboard-module~login-login-module"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginModule)
    },
    {
        path: 'dashboard',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~dashboard-dashboard-module~login-login-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base-component */ "./src/lib/base-component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return ɵAppComponent_BaseFactory(t || AppComponent); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
const ɵAppComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AppComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/websocket.service */ "./src/services/websocket.service.ts");
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/session.service */ "./src/services/session.service.ts");
/* harmony import */ var src_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/route.service */ "./src/services/route.service.ts");
/* harmony import */ var src_services_queue_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/queue.service */ "./src/services/queue.service.ts");
/* harmony import */ var src_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/login.service */ "./src/services/login.service.ts");
/* harmony import */ var src_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/client.service */ "./src/services/client.service.ts");
/* harmony import */ var _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/guest-layout/guest-layout.module */ "./src/app/layout/guest-layout/guest-layout.module.ts");
/* harmony import */ var _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/portal-layout/portal-layout.module */ "./src/app/layout/portal-layout/portal-layout.module.ts");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");
/* harmony import */ var src_services_graph_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/graph.service */ "./src/services/graph.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/dashboard.service */ "./src/services/dashboard.service.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
        src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DashboardService"],
        src_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        src_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
        src_services_queue_service__WEBPACK_IMPORTED_MODULE_7__["QueueService"],
        src_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
        src_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
        src_services_graph_service__WEBPACK_IMPORTED_MODULE_13__["GraphService"],
        src_lib_api_client__WEBPACK_IMPORTED_MODULE_12__["ApiClient"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_10__["GuestLayoutModule"],
            _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_11__["PortalLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_10__["GuestLayoutModule"],
        _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_11__["PortalLayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_10__["GuestLayoutModule"],
                    _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_11__["PortalLayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
                ],
                providers: [
                    src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
                    src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_15__["DashboardService"],
                    src_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
                    src_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
                    src_services_queue_service__WEBPACK_IMPORTED_MODULE_7__["QueueService"],
                    src_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
                    src_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"],
                    src_services_graph_service__WEBPACK_IMPORTED_MODULE_13__["GraphService"],
                    src_lib_api_client__WEBPACK_IMPORTED_MODULE_12__["ApiClient"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/guest-layout/guest-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/guest-layout/guest-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: GuestLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestLayoutComponent", function() { return GuestLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base-component */ "./src/lib/base-component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class GuestLayoutComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
}
GuestLayoutComponent.ɵfac = function GuestLayoutComponent_Factory(t) { return new (t || GuestLayoutComponent)(); };
GuestLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuestLayoutComponent, selectors: [["app-guest-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 0, consts: [[1, "gbody"], [1, "gframe"], [1, "glogo"], ["src", "/assets/horse.svg", "alt", "Horse MQ"], [1, "gcontent"]], template: function GuestLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jockey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Horse Messaging Queue Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".gbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  height: 100vh;\n  box-sizing: border-box;\n  background-color: #eee;\n  text-align: center;\n}\n\n.gframe[_ngcontent-%COMP%] {\n  padding: 32px;\n  box-sizing: border-box;\n  flex: 0 1 auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  align-items: stretch;\n  background-color: #fff;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.glogo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 0 0 auto;\n  text-align: center;\n  align-items: center;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  padding: 8px 8px 32px 8px;\n}\n\n.glogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  flex: 0 0 auto;\n}\n\n.glogo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n  padding: 0px 18px;\n}\n\n.glogo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 400;\n  color: #555;\n}\n\n.glogo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  font-size: 20px;\n  line-height: 20px;\n  font-weight: 500;\n  color: #333;\n}\n\n.gcontent[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n@media screen and (min-height:700px) {\n  .gframe[_ngcontent-%COMP%] {\n    margin-bottom: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2d1ZXN0LWxheW91dC9ndWVzdC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZ3Vlc3QtbGF5b3V0L2d1ZXN0LWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nZnJhbWUge1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4OiAwIDEgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5nbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDhweCAzMnB4IDhweDtcbn1cblxuLmdsb2dvIGltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLmdsb2dvIGRpdiB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMHB4IDE4cHg7XG59XG5cbi5nbG9nbyBkaXYgaDEge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmdsb2dvIGRpdiBoMiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZ2NvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6NzAwcHgpIHtcbiAgLmdmcmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guest-layout',
                templateUrl: './guest-layout.component.html',
                styleUrls: ['./guest-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/guest-layout/guest-layout.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/guest-layout/guest-layout.module.ts ***!
  \************************************************************/
/*! exports provided: GuestLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestLayoutModule", function() { return GuestLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _guest_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-layout.component */ "./src/app/layout/guest-layout/guest-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class GuestLayoutModule {
}
GuestLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuestLayoutModule });
GuestLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuestLayoutModule_Factory(t) { return new (t || GuestLayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestLayoutModule, { declarations: [_guest_layout_component__WEBPACK_IMPORTED_MODULE_2__["GuestLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_guest_layout_component__WEBPACK_IMPORTED_MODULE_2__["GuestLayoutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/portal-layout/portal-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/portal-layout/portal-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: PortalLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalLayoutComponent", function() { return PortalLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/base-component */ "./src/lib/base-component.ts");
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/session.service */ "./src/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PortalLayoutComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortalLayoutComponent_div_29_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);
} }
class PortalLayoutComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(session, router) {
        super();
        this.session = session;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.session.get();
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
    }
    logout() {
        this.session.clear();
        this.router.navigateByUrl('/login');
    }
}
PortalLayoutComponent.ɵfac = function PortalLayoutComponent_Factory(t) { return new (t || PortalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PortalLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalLayoutComponent, selectors: [["app-portal-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 2, consts: [[1, "headline"], [1, "logo"], ["src", "/assets/horse.svg", "alt", "Horse MQ"], [1, "menu"], ["routerLinkActive", "active", "routerLink", "/dashboard"], ["routerLinkActive", "active", "routerLink", "/queues"], ["routerLinkActive", "active", "routerLink", "/routes"], ["routerLinkActive", "active", "routerLink", "/clients"], ["routerLinkActive", "active", "routerLink", "/nodes"], ["routerLinkActive", "active", "routerLink", "/handlers"], ["class", "user", 4, "ngIf"], [1, "portal-content"], [1, "user"], [1, "user-name"], [1, "logout", 3, "click"]], template: function PortalLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Horse MQ Jockey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Queues");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Routes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Handlers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PortalLayoutComponent_div_29_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version ", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n  display: block;\n  height: 60px;\n  border-bottom: 1px solid #cfcfcf;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n}\n\n.headline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  align-content: stretch;\n}\n\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  align-content: stretch;\n  margin-right: 100px;\n}\n\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: 15px;\n  flex: 0 1 auto;\n}\n\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n  margin: 14px 0px 0px 0px;\n  padding: 0px;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 500;\n  color: #333;\n}\n\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 1px;\n  font-size: 10px;\n  font-weight: 300;\n  color: #555;\n  font-style: normal;\n}\n\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  flex: 1 2 auto;\n}\n\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 13px 20px 0px 20px;\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  align-content: stretch;\n  margin: 0px 4px;\n}\n\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 10px 14px;\n  background-color: #eee;\n  color: #333;\n  border-radius: 8px;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #eee;\n}\n\n.headline[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  flex: 0 3 auto;\n  padding: 12px;\n}\n\n.headline[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #333;\n  margin: 0px;\n  padding: 0px 10px;\n}\n\n.headline[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #eee;\n  color: #333;\n  font-style: 13px;\n  font-weight: 500;\n  border-radius: 8px;\n  line-height: 13px;\n  padding: 10px 10px;\n  margin: 0px 0px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BvcnRhbC1sYXlvdXQvcG9ydGFsLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3J0YWwtbGF5b3V0L3BvcnRhbC1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjZmNmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbn1cblxuLmhlYWRsaW5lIC5sb2dvIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGxpbmUgLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuXG4uaGVhZGxpbmUgLmxvZ28gaDEge1xuICBmbGV4OiAxIDIgYXV0bztcbiAgbWFyZ2luOiAxNHB4IDBweCAwcHggMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uaGVhZGxpbmUgLmxvZ28gZW0ge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmhlYWRsaW5lIC5tZW51IHtcbiAgZmxleDogMSAyIGF1dG87XG59XG5cbi5oZWFkbGluZSAubWVudSB1bCB7XG4gIG1hcmdpbjogMTNweCAyMHB4IDBweCAyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uaGVhZGxpbmUgLm1lbnUgdWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4uaGVhZGxpbmUgLm1lbnUgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkbGluZSAubWVudSB1bCBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4uaGVhZGxpbmUgLnVzZXIge1xuICBmbGV4OiAwIDMgYXV0bztcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLmhlYWRsaW5lIC51c2VyLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5oZWFkbGluZSAubG9nb3V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portal-layout',
                templateUrl: './portal-layout.component.html',
                styleUrls: ['./portal-layout.component.css']
            }]
    }], function () { return [{ type: src_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/portal-layout/portal-layout.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/portal-layout/portal-layout.module.ts ***!
  \**************************************************************/
/*! exports provided: PortalLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalLayoutModule", function() { return PortalLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _portal_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-layout.component */ "./src/app/layout/portal-layout/portal-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class PortalLayoutModule {
}
PortalLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalLayoutModule });
PortalLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalLayoutModule_Factory(t) { return new (t || PortalLayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalLayoutModule, { declarations: [_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__["PortalLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__["PortalLayoutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: '5.0.3',
    api: {
        url: 'http://localhost:9998/api'
    },
    storage: {
        token: 'token'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/interceptors/session.guard.ts":
/*!*******************************************!*\
  !*** ./src/interceptors/session.guard.ts ***!
  \*******************************************/
/*! exports provided: SessionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionGuard", function() { return SessionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/session.service */ "./src/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SessionGuard {
    constructor(session, router) {
        this.session = session;
        this.router = router;
    }
    canActivate(next, state) {
        let user = this.session.get();
        if (user == null) {
            this.router.navigateByUrl('/login');
        }
        return user != null;
    }
}
SessionGuard.ɵfac = function SessionGuard_Factory(t) { return new (t || SessionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SessionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionGuard, factory: SessionGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/lib/api-client.ts":
/*!*******************************!*\
  !*** ./src/lib/api-client.ts ***!
  \*******************************/
/*! exports provided: ApiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiClient", function() { return ApiClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_models_api_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/api-response */ "./src/models/api-response.ts");
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/session.service */ "./src/services/session.service.ts");









class ApiClient {
    constructor(http, session) {
        this.http = http;
        this.session = session;
    }
    getOptions(contentType) {
        let user = this.session.get();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Access-Control-Allow-Origin', '*');
        if (contentType != null)
            headers = headers.set('Content-Type', contentType);
        if (user != null && user.token != null && user.token.length > 0)
            headers = headers.set('Authorization', 'Bearer ' + user.token);
        let httpOptions = {
            headers: headers,
            withCredentials: true
        };
        return httpOptions;
    }
    get(url, progress) {
        if (progress)
            return this.requestProgress(true, 'GET', url, null, progress);
        return this.request(true, 'GET', url, null);
    }
    delete(url, model, progress) {
        if (progress)
            return this.requestProgress(true, 'DELETE', url, JSON.stringify(model), progress);
        return this.request(true, 'DELETE', url, JSON.stringify(model));
    }
    post(url, model, progress) {
        if (progress)
            return this.requestProgress(true, 'POST', url, JSON.stringify(model), progress);
        return this.request(true, 'POST', url, JSON.stringify(model));
    }
    put(url, model, progress) {
        if (progress)
            return this.requestProgress(true, 'PUT', url, JSON.stringify(model), progress);
        return this.request(true, 'PUT', url, JSON.stringify(model));
    }
    patch(url, model, progress) {
        if (progress)
            return this.requestProgress(true, 'PATCH', url, JSON.stringify(model), progress);
        return this.request(true, 'PATCH', url, JSON.stringify(model));
    }
    postForm(url, form, progress) {
        if (progress)
            return this.requestProgress(false, 'POST', url, form, progress);
        return this.request(false, 'POST', url, form);
    }
    putForm(url, form, progress) {
        if (progress)
            return this.requestProgress(false, 'PUT', url, form, progress);
        return this.request(false, 'PUT', url, form);
    }
    patchForm(url, form, progress) {
        if (progress)
            return this.requestProgress(false, 'PATCH', url, form, progress);
        return this.request(false, 'PATCH', url, form);
    }
    request(json, method, url, body) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            json: json,
            method: method,
            url: url,
            body: body
        }).pipe(
        //subscribe only once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), 
        //prepares the request
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(input => {
            let options = this.getOptions(input.json ? 'application/json' : null);
            let fullUrl = input.url;
            if (fullUrl.indexOf('//') < 0) {
                let url_slash = '';
                if (!fullUrl.startsWith('/'))
                    url_slash = '/';
                fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.url + url_slash + fullUrl;
            }
            switch (method) {
                case 'GET':
                    return this.http.get(fullUrl, options);
                case 'DELETE':
                    return this.http.delete(fullUrl, options);
                case 'POST':
                    return this.http.post(fullUrl, body, options);
                case 'PUT':
                    return this.http.put(fullUrl, body, options);
                case 'PATCH':
                    return this.http.patch(fullUrl, body, options);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }), 
        //gets the response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            var response = value;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = 200;
            result.statusMessage = 'OK';
            result.data = response;
            result.success = true;
            return result;
        }), 
        //gets the failed response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            let e = err;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = e.status;
            result.statusMessage = e.message;
            result.error = e.error;
            result.success = false;
            if (result.statusCode == 401)
                this.session.clear();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        }));
    }
    requestProgress(json, method, url, body, progress) {
        let finished = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            json: json,
            method: method,
            url: url,
            body: body
        }).pipe(
        //subscribe only once
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(() => !finished && !progress.canceled), 
        //prepares the request
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(input => {
            let options = this.getOptions(input.json ? 'application/json' : null);
            options.reportProgress = true;
            options.observe = 'events';
            let fullUrl = input.url;
            if (fullUrl.indexOf('//') < 0) {
                let url_slash = '';
                if (!fullUrl.startsWith('/'))
                    url_slash = '/';
                fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.url + url_slash + fullUrl;
            }
            switch (method) {
                case 'GET':
                    return this.http.get(fullUrl, options);
                case 'DELETE':
                    return this.http.delete(fullUrl, options);
                case 'POST':
                    return this.http.post(fullUrl, body, options);
                case 'PUT':
                    return this.http.put(fullUrl, body, options);
                case 'PATCH':
                    return this.http.patch(fullUrl, body, options);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            if (progress.canceled)
                throw new Error('file upload canceled');
            if (value.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                if (progress) {
                    let num = Math.round(100 * value.loaded / value.total);
                    progress.progress(num);
                }
                return null;
            }
            else if (value.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                finished = true;
                return value;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(value => value != null), 
        //gets the response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => {
            var response = value;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = 200;
            result.statusMessage = 'OK';
            result.data = response.body;
            result.success = true;
            return result;
        }), 
        //gets the failed response
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            let e = err;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = e.status;
            result.statusMessage = e.message;
            result.error = e.error;
            result.success = false;
            if (result.statusCode == 401)
                this.session.clear();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        }));
    }
    toTransaction(response) {
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(response => {
            if (response.data != null)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.data);
            else if (response.error != null)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        })).toPromise();
    }
    toObject(response) {
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(response => {
            if (response.ok())
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        })).toPromise();
    }
}
ApiClient.ɵfac = function ApiClient_Factory(t) { return new (t || ApiClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"])); };
ApiClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiClient, factory: ApiClient.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/lib/base-component.ts":
/*!***********************************!*\
  !*** ./src/lib/base-component.ts ***!
  \***********************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BaseComponent {
    constructor() {
        this._destroyed = false;
    }
    on(observable) {
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeWhile"])(() => !this._destroyed));
    }
    ngOnDestroy() {
        this._destroyed = true;
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseComponent });


/***/ }),

/***/ "./src/lib/base64-helper.ts":
/*!**********************************!*\
  !*** ./src/lib/base64-helper.ts ***!
  \**********************************/
/*! exports provided: Base64Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64Helper", function() { return Base64Helper; });
class Base64Helper {
    static encode(plain) {
        return btoa(encodeURIComponent(plain).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        }));
    }
    static decode(encoded) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(encoded).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
    static readBearer(token) {
        let sp = token.split('.');
        if (sp.length != 3)
            return null;
        let decoded = this.decode(sp[1]);
        return decoded;
    }
    static encryptx(plain, full = false) {
        let n1 = this.randomizeInteger(10, 40);
        let n2 = this.randomizeInteger(10, 99);
        let start = this._keyStr.substr(n1, 1);
        let n3 = this.randomizeInteger(10, 40);
        let n4 = this.randomizeInteger(10, 99);
        let end = this._keyStr.substr(n3, 1);
        let str;
        if (full)
            str = plain;
        else
            str = plain.length > 15 ? plain.substr(0, 15) : plain;
        return start + n2 + this.encode(str).replace('=', '') + end + n4;
    }
    static decryptx(cipher) {
        if (cipher.length < 7)
            return null;
        let encoded = cipher.substr(3, cipher.length - 6);
        if (encoded.length % 2 == 1)
            encoded += '=';
        return this.decode(encoded);
    }
    static randomizeInteger(min, max) {
        if (max == null) {
            max = (min == null ? Number.MAX_SAFE_INTEGER : min);
            min = 0;
        }
        min = Math.ceil(min); // inclusive min
        max = Math.floor(max); // exclusive max
        if (min > max - 1) {
            throw new Error("Incorrect arguments.");
        }
        return min + Math.floor((max - min) * Math.random());
    }
}
Base64Helper._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/api-response.ts":
/*!************************************!*\
  !*** ./src/models/api-response.ts ***!
  \************************************/
/*! exports provided: ApiResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponse", function() { return ApiResponse; });
class ApiResponse {
    ok() {
        return this.success && this.data;
    }
    getErrorMessage() {
        if (this.statusMessage)
            return this.statusMessage;
        return null;
    }
}


/***/ }),

/***/ "./src/models/session-user.ts":
/*!************************************!*\
  !*** ./src/models/session-user.ts ***!
  \************************************/
/*! exports provided: SessionUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionUser", function() { return SessionUser; });
class SessionUser {
}


/***/ }),

/***/ "./src/services/client.service.ts":
/*!****************************************!*\
  !*** ./src/services/client.service.ts ***!
  \****************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ "./src/services/websocket.service.ts");





class ClientService {
    constructor(api, socket) {
        this.api = api;
        this.socket = socket;
        this._clients = [];
        this._onconnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._ondisconnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get clients() { return this._clients; }
    get onconnected() { return this._onconnected; }
    get ondisconnected() { return this._ondisconnected; }
    refresh() {
        return null;
    }
    remove(client) {
        return null;
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }, { type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/services/dashboard.service.ts":
/*!*******************************************!*\
  !*** ./src/services/dashboard.service.ts ***!
  \*******************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");




class DashboardService {
    constructor(api) {
        this.api = api;
    }
    /** Refreshes graph data */
    load() {
        return this.api.get('/dashboard/stats')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }]; }, null); })();


/***/ }),

/***/ "./src/services/graph.service.ts":
/*!***************************************!*\
  !*** ./src/services/graph.service.ts ***!
  \***************************************/
/*! exports provided: GraphService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphService", function() { return GraphService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./websocket.service */ "./src/services/websocket.service.ts");







class GraphService {
    constructor(api, socket) {
        this.api = api;
        this.socket = socket;
        this._pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        this._maxLength = 60;
        this._onupdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get onupdated() { return this._onupdated; }
    /** Refreshes graph data */
    load() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.api.get('/dashboard/graph')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            if (!response.success)
                return null;
            this._data = response.data;
            //remove from beginning if data contains more than max elements
            if (this._data.length > this._maxLength) {
                this._data.splice(0, this._data.length - this._maxLength);
            }
            this._labels = this.createLabels(this._data);
            let content = {
                data: this._data,
                labels: this._labels
            };
            return content;
        }))
            .toPromise();
    }
    /** Creates labels of graph data */
    createLabels(data) {
        let labels = [];
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            labels.push(this.findTimeFromUnixSeconds(item.date));
        }
        return labels;
    }
    /** Returns HH:mm:ss string from unix time in seconds */
    findTimeFromUnixSeconds(unix) {
        let date = new Date(unix * 1000);
        return this._pipe.transform(date, 'HH:mm:ss');
    }
}
GraphService.ɵfac = function GraphService_Factory(t) { return new (t || GraphService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_4__["ApiClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"])); };
GraphService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GraphService, factory: GraphService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GraphService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_lib_api_client__WEBPACK_IMPORTED_MODULE_4__["ApiClient"] }, { type: _websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/services/login.service.ts":
/*!***************************************!*\
  !*** ./src/services/login.service.ts ***!
  \***************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.service */ "./src/services/session.service.ts");





class LoginService {
    constructor(api, session) {
        this.api = api;
        this.session = session;
    }
    login(username, password) {
        let model = {
            username: username,
            password: password
        };
        return this.api.post('/user/login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            this.session.clear();
            if (response.ok()) {
                if (response.data.ok) {
                    this.session.set(response.data);
                    return this.session.get();
                }
            }
            return this.session.get();
        }))
            .toPromise();
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }]; }, null); })();


/***/ }),

/***/ "./src/services/queue.service.ts":
/*!***************************************!*\
  !*** ./src/services/queue.service.ts ***!
  \***************************************/
/*! exports provided: QueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueService", function() { return QueueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ "./src/services/websocket.service.ts");





class QueueService {
    constructor(api, socket) {
        this.api = api;
        this.socket = socket;
        this._queues = [];
        this._oncreated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._onremoved = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._onupdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get queues() { return this._queues; }
    get oncreated() { return this._oncreated; }
    get onremoved() { return this._onremoved; }
    get onupdated() { return this._onupdated; }
    create(queue) {
        return null;
    }
    update(queue) {
        return null;
    }
    remove(queue) {
        return null;
    }
}
QueueService.ɵfac = function QueueService_Factory(t) { return new (t || QueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
QueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QueueService, factory: QueueService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_lib_api_client__WEBPACK_IMPORTED_MODULE_2__["ApiClient"] }, { type: _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/services/route.service.ts":
/*!***************************************!*\
  !*** ./src/services/route.service.ts ***!
  \***************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/api-client */ "./src/lib/api-client.ts");



class RouteService {
    constructor(api) {
        this.api = api;
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__["ApiClient"])); };
RouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__["ApiClient"] }]; }, null); })();


/***/ }),

/***/ "./src/services/session.service.ts":
/*!*****************************************!*\
  !*** ./src/services/session.service.ts ***!
  \*****************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_lib_base64_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/lib/base64-helper */ "./src/lib/base64-helper.ts");
/* harmony import */ var src_models_session_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/session-user */ "./src/models/session-user.ts");






class SessionService {
    constructor() {
        this._current = this.read();
        this._changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000)
            .subscribe(() => {
            this._current = this.read();
        });
    }
    get onchanged() {
        return this._changed.pipe();
    }
    set(login) {
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storage.token, login.token);
        let user = this.deserialize(login.token);
        this._current = user;
        this._changed.next(user);
        return user;
    }
    refresh(token) {
        let current = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storage.token);
        if (!current)
            return;
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storage.token, token);
    }
    clear() {
        let old = this._current;
        localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storage.token);
        this._current = null;
        if (this._changed && old != null)
            this._changed.next(null);
    }
    get() {
        if (this._current)
            return this._current;
        this._current = this.read();
        return this._current;
    }
    read() {
        try {
            let str = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storage.token);
            if (str == null) {
                if (this._current && this._changed)
                    this._changed.next(null);
                return null;
            }
            let user = this.deserialize(str);
            if (!this._current && this._changed)
                this._changed.next(user);
            this._current = user;
            return user;
        }
        catch (_a) {
            localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storage.token);
            return null;
        }
    }
    deserialize(token) {
        let token_info = JSON.parse(src_lib_base64_helper__WEBPACK_IMPORTED_MODULE_3__["Base64Helper"].readBearer(token));
        let user = new src_models_session_user__WEBPACK_IMPORTED_MODULE_4__["SessionUser"]();
        user.token = token;
        user.id = token_info.sub;
        user.name = token_info.name;
        user.expiration = parseInt(token_info.exp) * 1000;
        return user;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/services/websocket.service.ts":
/*!*******************************************!*\
  !*** ./src/services/websocket.service.ts ***!
  \*******************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WebsocketService {
    constructor() {
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mehmet/Projects/horse-framework/jockey/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map