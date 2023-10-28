"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/interceptors/session.guard */ 9439);
/* harmony import */ var _layout_guest_layout_guest_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/guest-layout/guest-layout.component */ 3821);
/* harmony import */ var _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/portal-layout/portal-layout.component */ 1151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'queue',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("default-src_lib_socket-models_ts-src_services_chart_service_ts-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_queue_detail_queue-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./queue/detail/queue-detail.module */ 3451)).then(m => m.QueueModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'queues',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_queue_list_queues_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./queue/list/queues.module */ 1775)).then(m => m.QueuesModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'router',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_router_router_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./router/router.module */ 881)).then(m => m.HorseRouterModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'routers',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_routers_routers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routers/routers.module */ 2571)).then(m => m.RoutersModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'cache',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_cache_cache_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cache/cache.module */ 4408)).then(m => m.CacheModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'channels',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_channels_channels_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./channels/channels.module */ 8282)).then(m => m.ChannelsModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'clients',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("src_app_clients_clients_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./clients/clients.module */ 7158)).then(m => m.ClientsModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'nodes',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_nodes_nodes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nodes/nodes.module */ 5882)).then(m => m.NodesModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'handlers',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_handlers_handlers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./handlers/handlers.module */ 3508)).then(m => m.HandlersModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'console',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_console_console_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./console/console.module */ 4998)).then(m => m.ConsoleModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: 'login',
        component: _layout_guest_layout_guest_layout_component__WEBPACK_IMPORTED_MODULE_1__.GuestLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginModule)
    },
    {
        path: 'dashboard',
        component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__.PortalLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("default-src_lib_socket-models_ts-src_services_chart_service_ts-node_modules_chart_js_dist_Chart_js"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule),
        canActivate: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_0__.SessionGuard]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/base-component */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/session.service */ 5920);
/* harmony import */ var src_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/websocket.service */ 5608);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





class AppComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(session, websocketService) {
        super();
        this.session = session;
        this.websocketService = websocketService;
        this.session.onchanged.subscribe(user => {
            if (user) {
                this.websocketService.connect(user.token);
            }
            else {
                this.websocketService.disconnect();
            }
        });
        this.session.run();
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var src_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/websocket.service */ 5608);
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/session.service */ 5920);
/* harmony import */ var src_app_queue_services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/queue/services/queue.service */ 3349);
/* harmony import */ var src_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/login.service */ 4461);
/* harmony import */ var src_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/client.service */ 7334);
/* harmony import */ var _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/guest-layout/guest-layout.module */ 3955);
/* harmony import */ var _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/portal-layout/portal-layout.module */ 7735);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/lib/api-client */ 4586);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/dashboard.service */ 5037);
/* harmony import */ var src_services_horse_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/horse-router.service */ 1632);
/* harmony import */ var _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/pipes/pipes.module */ 1887);
/* harmony import */ var src_app_channels_services_channel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/channels/services/channel.service */ 1208);
/* harmony import */ var src_app_cache_services_cache_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/cache/services/cache.service */ 6252);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        src_lib_api_client__WEBPACK_IMPORTED_MODULE_9__.ApiClient,
        src_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService,
        src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__.DashboardService,
        src_services_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService,
        src_services_horse_router_service__WEBPACK_IMPORTED_MODULE_11__.HorseRouterService,
        src_app_queue_services_queue_service__WEBPACK_IMPORTED_MODULE_4__.QueueService,
        src_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService,
        src_services_client_service__WEBPACK_IMPORTED_MODULE_6__.ClientService,
        src_app_channels_services_channel_service__WEBPACK_IMPORTED_MODULE_13__.ChannelService,
        src_app_cache_services_cache_service__WEBPACK_IMPORTED_MODULE_14__.CacheService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_7__.GuestLayoutModule,
            _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_8__.PortalLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__.PipesModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_7__.GuestLayoutModule,
        _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_8__.PortalLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__.PipesModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule] }); })();


/***/ }),

/***/ 6252:
/*!*************************************************!*\
  !*** ./src/app/cache/services/cache.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheService": () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/api-client */ 4586);



class CacheService {
    constructor(api) {
        this.api = api;
    }
    list() {
        return this.api.get('/cache/list')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    get(key) {
        return this.api.get('/cache/get?key=' + key)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    remove(key) {
        return this.api.delete('/cache/remove?key=' + key)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    create(key, content, duration, expirationWarning, tags) {
        let model = { key, content, duration, expirationWarning, tags };
        return this.api.post('/cache/create', model)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response.ok()) {
                return response.data != null && response.data.ok;
            }
            return null;
        }))
            .toPromise();
    }
}
CacheService.ɵfac = function CacheService_Factory(t) { return new (t || CacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_0__.ApiClient)); };
CacheService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CacheService, factory: CacheService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1208:
/*!******************************************************!*\
  !*** ./src/app/channels/services/channel.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelService": () => (/* binding */ ChannelService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/date-helper */ 5145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/api-client */ 4586);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/websocket.service */ 5608);






class ChannelService {
    constructor(api, socket) {
        this.api = api;
        this.socket = socket;
    }
    list() {
        return this.api.get('/channel/list')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    create(form) {
        return this.api.post('/channel/create', form)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    getInitialMessage(channelName) {
        return this.api.get('/channel/initial-message?name=' + channelName)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    getGraph(name, resolution) {
        let url = '/channel/graph?resolution=' + resolution;
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.api.get(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
            if (!response.success)
                return null;
            let result = response.data;
            result.labels = src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__.DateHelper.createLabels(result.d.map(x => x.u));
            return result;
        }))
            .toPromise();
    }
}
ChannelService.ɵfac = function ChannelService_Factory(t) { return new (t || ChannelService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__.ApiClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService)); };
ChannelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ChannelService, factory: ChannelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3821:
/*!***************************************************************!*\
  !*** ./src/app/layout/guest-layout/guest-layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestLayoutComponent": () => (/* binding */ GuestLayoutComponent)
/* harmony export */ });
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/base-component */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class GuestLayoutComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor() {
        super();
    }
    ngOnInit() {
    }
}
GuestLayoutComponent.ɵfac = function GuestLayoutComponent_Factory(t) { return new (t || GuestLayoutComponent)(); };
GuestLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GuestLayoutComponent, selectors: [["app-guest-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 0, consts: [[1, "gbody"], [1, "gframe", 2, "min-width", "340px"], [1, "glogo"], ["src", "/assets/horse.svg", "alt", "Horse Messaging"], [1, "gcontent"]], template: function GuestLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Jockey");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Horse Messaging Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".gbody[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  align-content: center;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  height: 100vh;\r\n  box-sizing: border-box;\r\n  background-color: #222;\r\n  text-align: center;\r\n}\r\n\r\n.gframe[_ngcontent-%COMP%] {\r\n  padding: 32px;\r\n  box-sizing: border-box;\r\n  flex: 0 1 auto;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: stretch;\r\n  align-items: stretch;\r\n  background-color: #111;\r\n  border-radius: 3px;\r\n  border: 1px solid #040404;\r\n  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.28);\r\n}\r\n\r\n.glogo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 0 0 auto;\r\n  text-align: center;\r\n  align-items: center;\r\n  align-content: center;\r\n  justify-items: center;\r\n  justify-content: center;\r\n  padding: 8px 8px 32px 8px;\r\n}\r\n\r\n.glogo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 48px;\r\n  flex: 0 0 auto;\r\n}\r\n\r\n.glogo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  flex: 0 1 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  align-content: flex-start;\r\n  padding: 0px 18px;\r\n}\r\n\r\n.glogo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  font-weight: 400;\r\n  color: #aaa;\r\n}\r\n\r\n.glogo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n  font-weight: 500;\r\n  color: #ccc;\r\n}\r\n\r\n.gcontent[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n@media screen and (min-height:700px) {\r\n  .gframe[_ngcontent-%COMP%] {\r\n    margin-bottom: 150px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1ZXN0LWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJndWVzdC1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYm9keSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ2ZyYW1lIHtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNDA0MDQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG59XHJcblxyXG4uZ2xvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCA4cHggMzJweCA4cHg7XHJcbn1cclxuXHJcbi5nbG9nbyBpbWcge1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4uZ2xvZ28gZGl2IHtcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAwcHggMThweDtcclxufVxyXG5cclxuLmdsb2dvIGRpdiBoMSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG4uZ2xvZ28gZGl2IGgyIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5nY29udGVudCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OjcwMHB4KSB7XHJcbiAgLmdmcmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 3955:
/*!************************************************************!*\
  !*** ./src/app/layout/guest-layout/guest-layout.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestLayoutModule": () => (/* binding */ GuestLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _guest_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guest-layout.component */ 3821);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class GuestLayoutModule {
}
GuestLayoutModule.ɵfac = function GuestLayoutModule_Factory(t) { return new (t || GuestLayoutModule)(); };
GuestLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GuestLayoutModule });
GuestLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GuestLayoutModule, { declarations: [_guest_layout_component__WEBPACK_IMPORTED_MODULE_0__.GuestLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 1238:
/*!***************************************************!*\
  !*** ./src/app/layout/pipes/binding-type.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingTypePipe": () => (/* binding */ BindingTypePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BindingTypePipe {
    transform(binding) {
        let type = binding.type;
        if (type == 'Direct') {
            if (binding.target.startsWith('@')) {
                let i = binding.target.indexOf(':');
                if (i > 0) {
                    return binding.target.substr(1, i - 1);
                }
            }
            else {
                return 'Id';
            }
        }
        if (type == 'Http') {
            switch (binding.contentType) {
                case 0: return 'GET';
                case 1: return 'POST';
                case 2: return 'PUT';
                case 3: return 'PATCH';
                case 4: return 'DELETE';
            }
        }
        if (type.indexOf('Queue') >= 0)
            return 'Queue';
        return type;
    }
}
BindingTypePipe.ɵfac = function BindingTypePipe_Factory(t) { return new (t || BindingTypePipe)(); };
BindingTypePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bindingType", type: BindingTypePipe, pure: true });


/***/ }),

/***/ 3369:
/*!***********************************************!*\
  !*** ./src/app/layout/pipes/filesize.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesizePipe": () => (/* binding */ FilesizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FilesizePipe {
    transform(value) {
        if (value == 0)
            return 'None';
        if (value < 2014)
            return value + ' bytes';
        if (value < 1048576)
            return (value / 1024).toFixed(2) + ' KB';
        if (value > 1073741824)
            return (value / 1073741824).toFixed(2) + ' GB';
        return (value / 1048576).toFixed(2) + ' MB';
    }
}
FilesizePipe.ɵfac = function FilesizePipe_Factory(t) { return new (t || FilesizePipe)(); };
FilesizePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filesize", type: FilesizePipe, pure: true });


/***/ }),

/***/ 2809:
/*!**************************************************!*\
  !*** ./src/app/layout/pipes/jockey-time.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JockeyTimePipe": () => (/* binding */ JockeyTimePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


class JockeyTimePipe {
    constructor(_datePipe) {
        this._datePipe = _datePipe;
    }
    transform(value) {
        return this._datePipe.transform(value * 1000, 'HH:mm:ss');
    }
}
JockeyTimePipe.ɵfac = function JockeyTimePipe_Factory(t) { return new (t || JockeyTimePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, 16)); };
JockeyTimePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "jockeyTime", type: JockeyTimePipe, pure: true });


/***/ }),

/***/ 1887:
/*!**********************************************!*\
  !*** ./src/app/layout/pipes/pipes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _binding_type_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding-type.pipe */ 1238);
/* harmony import */ var _filesize_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filesize.pipe */ 3369);
/* harmony import */ var _jockey_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jockey-time.pipe */ 2809);
/* harmony import */ var _prett_print_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prett-print.pipe */ 9281);
/* harmony import */ var _timespan_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timespan.pipe */ 7966);
/* harmony import */ var _unlimited_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unlimited.pipe */ 8392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_timespan_pipe__WEBPACK_IMPORTED_MODULE_4__.TimespanPipe,
        _unlimited_pipe__WEBPACK_IMPORTED_MODULE_5__.UnlimitedPipe,
        _filesize_pipe__WEBPACK_IMPORTED_MODULE_1__.FilesizePipe,
        _binding_type_pipe__WEBPACK_IMPORTED_MODULE_0__.BindingTypePipe,
        _jockey_time_pipe__WEBPACK_IMPORTED_MODULE_2__.JockeyTimePipe,
        _prett_print_pipe__WEBPACK_IMPORTED_MODULE_3__.PrettyPrintPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule], exports: [_timespan_pipe__WEBPACK_IMPORTED_MODULE_4__.TimespanPipe,
        _unlimited_pipe__WEBPACK_IMPORTED_MODULE_5__.UnlimitedPipe,
        _filesize_pipe__WEBPACK_IMPORTED_MODULE_1__.FilesizePipe,
        _binding_type_pipe__WEBPACK_IMPORTED_MODULE_0__.BindingTypePipe,
        _jockey_time_pipe__WEBPACK_IMPORTED_MODULE_2__.JockeyTimePipe,
        _prett_print_pipe__WEBPACK_IMPORTED_MODULE_3__.PrettyPrintPipe] }); })();


/***/ }),

/***/ 9281:
/*!**************************************************!*\
  !*** ./src/app/layout/pipes/prett-print.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrettyPrintPipe": () => (/* binding */ PrettyPrintPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const settings = { indent: 3, linkUrls: true, quoteKeys: false };
class PrettyPrintPipe {
    constructor() {
        this.htmlEntities = (text) => {
            // Makes text displayable in browsers
            return text
                .replace(/&/g, '&amp;')
                .replace(/\\"/g, '&bsol;&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        };
        this.replacer = (match, p1, p2, p3, p4) => {
            // Converts the four parenthesized capture groups (indent, key, value, end) into HTML
            const part = { indent: p1, key: p2, value: p3, end: p4 };
            const findName = settings.quoteKeys ? /(.*)(): / : /"([\w$]+)": |(.*): /;
            const indentHtml = part.indent || '';
            const keyName = part.key && part.key.replace(findName, '$1$2');
            const keyHtml = part.key ? this.spanTag('key', keyName) + this.spanTag('mark', ': ') : '';
            const valueHtml = part.value ? this.buildValueHtml(part.value) : '';
            const endHtml = this.spanTag('mark', part.end);
            return indentHtml + keyHtml + valueHtml + endHtml;
        };
        this.buildValueHtml = (value) => {
            // Returns a string like: "<span class=json-number>3.1415</span>"
            const strType = /^"/.test(value) && 'string';
            const boolType = ['true', 'false'].includes(value) && 'boolean';
            const nullType = value === 'null' && 'null';
            const type = boolType || nullType || strType || 'number';
            const urlRegex = /https?:\/\/[^\s"]+/g;
            const makeLink = (link) => '<a class=json-link href="' + link + '">' + link + '</a>';
            const display = strType && settings.linkUrls ? value.replace(urlRegex, makeLink) : value;
            return this.spanTag(type, display);
        };
        this.spanTag = (type, display) => display ? '<span class=json-' + type + '>' + display + '</span>' : '';
    }
    transform(data) {
        const jsonLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/mg;
        // Regex parses each line of the JSON string into four parts:
        //    Capture group       Part        Description                  '   "active": true,'
        //    ------------------  ----------  ---------------------------  --------------------
        //    ( *)                p1: indent  Spaces for indentation       '   '
        //    ("[^"]+": )         p2: key     Key name                     '"active": '
        //    ("[^"]*"|[\w.+-]*)  p3: value   Key value                    'true'
        //    ([{}[\],]*)         p4: end     Line termination characters  ','
        const json = JSON.stringify(data, null, settings.indent) || 'undefined';
        return this.htmlEntities(json).replace(jsonLine, this.replacer);
    }
}
PrettyPrintPipe.ɵfac = function PrettyPrintPipe_Factory(t) { return new (t || PrettyPrintPipe)(); };
PrettyPrintPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "prettyprint", type: PrettyPrintPipe, pure: true });


/***/ }),

/***/ 7966:
/*!***********************************************!*\
  !*** ./src/app/layout/pipes/timespan.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimespanPipe": () => (/* binding */ TimespanPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const MIN = 60;
const HOUR = 60 * 60;
const DAY = 60 * 60 * 24;
class TimespanPipe {
    transform(value, ref = 0) {
        let totalSeconds = Math.round(value - ref);
        let days = 0;
        let hours = 0;
        let mins = 0;
        while (totalSeconds >= DAY) {
            days++;
            totalSeconds -= DAY;
        }
        while (totalSeconds >= HOUR) {
            hours++;
            totalSeconds -= HOUR;
        }
        while (totalSeconds >= MIN) {
            mins++;
            totalSeconds -= MIN;
        }
        let result = '';
        if (days > 0) {
            result += days + ' ' + (days > 1 ? 'days' : 'day') + ' ';
        }
        if (hours > 0) {
            result += hours + ' ' + (hours > 1 ? 'hours' : 'hour') + ' ';
        }
        if (mins > 0) {
            result += mins + ' ' + (mins > 1 ? 'mins' : 'min') + ' ';
        }
        if (totalSeconds > 0) {
            result += totalSeconds + ' ' + (totalSeconds > 1 ? 'secs' : 'sec');
        }
        return result;
    }
}
TimespanPipe.ɵfac = function TimespanPipe_Factory(t) { return new (t || TimespanPipe)(); };
TimespanPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timespan", type: TimespanPipe, pure: true });


/***/ }),

/***/ 8392:
/*!************************************************!*\
  !*** ./src/app/layout/pipes/unlimited.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlimitedPipe": () => (/* binding */ UnlimitedPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UnlimitedPipe {
    transform(value) {
        if (value == 0)
            return 'Unlimited';
        return value.toString();
    }
}
UnlimitedPipe.ɵfac = function UnlimitedPipe_Factory(t) { return new (t || UnlimitedPipe)(); };
UnlimitedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unlimited", type: UnlimitedPipe, pure: true });


/***/ }),

/***/ 8782:
/*!*******************************************************************************!*\
  !*** ./src/app/layout/portal-layout/confirm-modal/confirm-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmModalComponent": () => (/* binding */ ConfirmModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 6991);



class ConfirmModalComponent {
    constructor() {
        this._onclosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._confirmed = false;
    }
    get onclosed() { return this._onclosed; }
    ngOnDestroy() {
        if (!this._confirmed)
            this._onclosed.next(false);
    }
    confirm(value) {
        this._confirmed = true;
        this._onclosed.next(value);
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(); };
ConfirmModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], decls: 11, vars: 1, consts: [["mat-dialog-title", "", 1, "title"], [1, "content"], [3, "innerHTML"], [1, "buttons"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-red", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-grey", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Please confirm your action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-dialog-actions", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_7_listener() { return ctx.confirm(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_9_listener() { return ctx.confirm(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: [".title[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0px 25px 10px 25px;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #d2d2d2;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAwcHggMjVweCAxMHB4IDI1cHg7XHJcbn1cclxuLmNvbnRlbnQgcCB7XHJcbiAgY29sb3I6ICNkMmQyZDI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1151:
/*!*****************************************************************!*\
  !*** ./src/app/layout/portal-layout/portal-layout.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalLayoutComponent": () => (/* binding */ PortalLayoutComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base-component */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/session.service */ 5920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function PortalLayoutComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PortalLayoutComponent_div_32_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.user.name);
} }
class PortalLayoutComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(session, router) {
        super();
        this.session = session;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.session.get();
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
    }
    logout() {
        this.session.clear();
        this.router.navigateByUrl('/login');
    }
}
PortalLayoutComponent.ɵfac = function PortalLayoutComponent_Factory(t) { return new (t || PortalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
PortalLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PortalLayoutComponent, selectors: [["app-portal-layout"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 36, vars: 2, consts: [[1, "headline"], [1, "logo"], ["src", "/assets/horse.svg", "alt", "Horse Messaging"], [1, "menu"], ["routerLinkActive", "active", "routerLink", "/dashboard"], ["routerLinkActive", "active", "routerLink", "/channels"], ["routerLinkActive", "active", "routerLink", "/queues"], ["routerLinkActive", "active", "routerLink", "/routers"], ["routerLinkActive", "active", "routerLink", "/cache"], ["routerLinkActive", "active", "routerLink", "/clients"], ["routerLinkActive", "active", "routerLink", "/console"], ["class", "user", 4, "ngIf"], [1, "after-header"], [1, "portal-content"], [1, "user"], [1, "user-name"], [1, "logout", 3, "click"]], template: function PortalLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Horse Messaging Jockey");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "ul")(11, "li")(12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li")(15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li")(18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Queues");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li")(21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Routers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cache");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li")(27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li")(30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PortalLayoutComponent_div_32_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Version ", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["header[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 60px;\r\n  box-sizing: border-box;\r\n  background-color: #111;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n.after-header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 80px;\r\n}\r\n.headline[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n}\r\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n  flex: 0 1 auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  margin-right: 100px;\r\n}\r\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 30px;\r\n  margin: 15px;\r\n  flex: 0 1 auto;\r\n}\r\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  flex: 1 2 auto;\r\n  margin: 14px 0px 0px 0px;\r\n  padding: 0px;\r\n  font-size: 16px;\r\n  line-height: 16px;\r\n  font-weight: 500;\r\n  color: #e0e0e0;\r\n}\r\n.headline[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\n  padding: 0px 0px 0px 1px;\r\n  font-size: 10px;\r\n  font-weight: 300;\r\n  color: #aaa;\r\n  font-style: normal;\r\n}\r\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n  flex: 1 2 auto;\r\n}\r\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin: 13px 20px 0px 20px;\r\n  padding: 0px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  align-content: flex-start;\r\n}\r\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  margin: 0px 4px;\r\n}\r\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  padding: 10px 14px;\r\n  background-color: transparent;\r\n  color: #999;\r\n  border-radius: 2px;\r\n  font-size: 13px;\r\n  line-height: 13px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #222;\r\n    color: #eee;\r\n  }\r\n.headline[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: #108030;\r\n  color: #fff;\r\n}\r\n.headline[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\r\n  flex: 0 3 auto;\r\n  padding: 12px;\r\n}\r\n.headline[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  color: #ccc;\r\n  margin: 0px;\r\n  padding: 2px 10px 0px 10px;\r\n}\r\n.headline[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%] {\r\n  border: none;\r\n  background-color: #c01010;\r\n  color: #e0e0e0;\r\n  font-style: 13px;\r\n  font-weight: 500;\r\n  border-radius: 2px;\r\n  line-height: 13px;\r\n  padding: 10px 14px;\r\n  margin: 0px 45px 0px 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRhbC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJwb3J0YWwtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hZnRlci1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5oZWFkbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5oZWFkbGluZSAubG9nbyB7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmhlYWRsaW5lIC5sb2dvIGltZyB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG5cclxuLmhlYWRsaW5lIC5sb2dvIGgxIHtcclxuICBmbGV4OiAxIDIgYXV0bztcclxuICBtYXJnaW46IDE0cHggMHB4IDBweCAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uaGVhZGxpbmUgLmxvZ28gZW0ge1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDFweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5oZWFkbGluZSAubWVudSB7XHJcbiAgZmxleDogMSAyIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkbGluZSAubWVudSB1bCB7XHJcbiAgbWFyZ2luOiAxM3B4IDIwcHggMHB4IDIwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uaGVhZGxpbmUgLm1lbnUgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbn1cclxuXHJcbi5oZWFkbGluZSAubWVudSB1bCBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkbGluZSAubWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICB9XHJcblxyXG4uaGVhZGxpbmUgLm1lbnUgdWwgbGkgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDgwMzA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkbGluZSAudXNlciB7XHJcbiAgZmxleDogMCAzIGF1dG87XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLmhlYWRsaW5lIC51c2VyLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGxpbmUgLmxvZ291dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDEwMTA7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgZm9udC1zdHlsZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHggNDVweCAwcHggMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7735:
/*!**************************************************************!*\
  !*** ./src/app/layout/portal-layout/portal-layout.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalLayoutModule": () => (/* binding */ PortalLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _portal_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-layout.component */ 1151);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ 8782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class PortalLayoutModule {
}
PortalLayoutModule.ɵfac = function PortalLayoutModule_Factory(t) { return new (t || PortalLayoutModule)(); };
PortalLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PortalLayoutModule });
PortalLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PortalLayoutModule, { declarations: [_portal_layout_component__WEBPACK_IMPORTED_MODULE_0__.PortalLayoutComponent,
        _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule], exports: [_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmModalComponent] }); })();


/***/ }),

/***/ 3349:
/*!*************************************************!*\
  !*** ./src/app/queue/services/queue.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueService": () => (/* binding */ QueueService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/date-helper */ 5145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/api-client */ 4586);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/websocket.service */ 5608);






class QueueService {
    constructor(api, socket) {
        this.api = api;
        this.socket = socket;
        this._queues = [];
        this._oncreated = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._onremoved = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._onupdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    get queues() { return this._queues; }
    get oncreated() { return this._oncreated; }
    get onremoved() { return this._onremoved; }
    get onupdated() { return this._onupdated; }
    list() {
        return this.api.get('/queue/list')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    listSummary() {
        return this.api.get('/queue/list-names')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    getManagers() {
        return this.api.get('/queue/managers')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    get(name) {
        return this.api.get('/queue/get?name=' + name)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    getGraph(name, resolution) {
        let url = '/queue/graph?resolution=' + resolution;
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => this.api.get(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (!response.success)
                return null;
            let result = {
                store: {
                    n: response.data.name,
                    r: response.data.resolution,
                    d: response.data.store
                },
                stream: {
                    n: response.data.name,
                    r: response.data.resolution,
                    d: response.data.stream
                }
            };
            result.store.labels = src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__.DateHelper.createLabels(result.store.d.map(x => x.u));
            result.stream.labels = src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__.DateHelper.createLabels(result.stream.d.map(x => x.u));
            return result;
        }))
            .toPromise();
    }
    create(model) {
        return this.api.post('/queue/create', model)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    setOption(queueName, optionName, value) {
        let model = {
            queue: queueName,
            name: optionName,
            value: value
        };
        return this.api.put('/queue/option', model)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    push(message) {
        return this.api.post('/queue/push', message)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    read(name) {
        return this.api.get('/queue/read?name=' + name)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    consume(name) {
        return this.api.get('/queue/consume?name=' + name)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    status(name, status) {
        let form = new FormData();
        form.append('name', name);
        form.append('status', status);
        return this.api.putForm('/queue/status', form)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    clear(name) {
        let form = new FormData();
        form.append('name', name);
        return this.api.putForm('/queue/clear', form)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    delete(name) {
        return this.api.delete('/queue/delete?name=' + name)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    move(name, target) {
        let form = new FormData();
        form.append('name', name);
        form.append('target', target);
        return this.api.postForm('/queue/move-messages', form)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    resetStats(name) {
        return this.api.putForm('/queue/reset-stats', null)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
}
QueueService.ɵfac = function QueueService_Factory(t) { return new (t || QueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__.ApiClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService)); };
QueueService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: QueueService, factory: QueueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    version: '6.6.2',
    api: {
        url: 'http://localhost:15400/api',
        websocket: 'ws://localhost:15400/'
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 9439:
/*!*******************************************!*\
  !*** ./src/interceptors/session.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionGuard": () => (/* binding */ SessionGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/session.service */ 5920);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class SessionGuard {
    constructor(session, router) {
        this.session = session;
        this.router = router;
    }
    canActivate(next, state) {
        let user = this.session.get();
        if (user == null) {
            this.router.navigateByUrl('/login');
            return false;
        }
        let now = new Date().getTime();
        if (user.expiration < now) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    }
}
SessionGuard.ɵfac = function SessionGuard_Factory(t) { return new (t || SessionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SessionGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionGuard, factory: SessionGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4586:
/*!*******************************!*\
  !*** ./src/lib/api-client.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiClient": () => (/* binding */ ApiClient)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_models_api_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/api-response */ 6501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/session.service */ 5920);








class ApiClient {
    constructor(http, session) {
        this.http = http;
        this.session = session;
    }
    getOptions(contentType) {
        let user = this.session.get();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
            json: json,
            method: method,
            url: url,
            body: body
        }).pipe(
        //subscribe only once
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), 
        //prepares the request
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(input => {
            let options = this.getOptions(input.json ? 'application/json' : null);
            let fullUrl = input.url;
            if (fullUrl.indexOf('//') < 0) {
                let url_slash = '';
                if (!fullUrl.startsWith('/'))
                    url_slash = '/';
                fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.url + url_slash + fullUrl;
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
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }), 
        //gets the response
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => {
            var response = value;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_1__.ApiResponse();
            result.statusCode = 200;
            result.statusMessage = 'OK';
            result.data = response;
            result.success = true;
            return result;
        }), 
        //gets the failed response
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
            let e = err;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_1__.ApiResponse();
            result.statusCode = e.status;
            result.statusMessage = e.message;
            result.error = e.error;
            result.success = false;
            if (result.statusCode == 401) {
                this.session.clear();
                window.location.href = '/';
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
        }));
    }
    requestProgress(json, method, url, body, progress) {
        let finished = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
            json: json,
            method: method,
            url: url,
            body: body
        }).pipe(
        //subscribe only once
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeWhile)(() => !finished && !progress.canceled), 
        //prepares the request
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(input => {
            let options = this.getOptions(input.json ? 'application/json' : null);
            options.reportProgress = true;
            options.observe = 'events';
            let fullUrl = input.url;
            if (fullUrl.indexOf('//') < 0) {
                let url_slash = '';
                if (!fullUrl.startsWith('/'))
                    url_slash = '/';
                fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.url + url_slash + fullUrl;
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
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => {
            if (progress.canceled)
                throw new Error('file upload canceled');
            if (value.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
                if (progress) {
                    let num = Math.round(100 * value.loaded / value.total);
                    progress.progress(num);
                }
                return null;
            }
            else if (value.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Response) {
                finished = true;
                return value;
            }
            return null;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(value => value != null), 
        //gets the response
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => {
            var response = value;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_1__.ApiResponse();
            result.statusCode = 200;
            result.statusMessage = 'OK';
            result.data = response.body;
            result.success = true;
            return result;
        }), 
        //gets the failed response
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
            let e = err;
            let result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_1__.ApiResponse();
            result.statusCode = e.status;
            result.statusMessage = e.message;
            result.error = e.error;
            result.success = false;
            if (result.statusCode == 401)
                this.session.clear();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
        }));
    }
    toTransaction(response) {
        return response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(response => {
            if (response.data != null)
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response.data);
            else if (response.error != null)
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response.error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        })).toPromise();
    }
    toObject(response) {
        return response.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(response => {
            if (response.ok())
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(response.data);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        })).toPromise();
    }
}
ApiClient.ɵfac = function ApiClient_Factory(t) { return new (t || ApiClient)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService)); };
ApiClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: ApiClient, factory: ApiClient.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2962:
/*!***********************************!*\
  !*** ./src/lib/base-component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


// tslint:disable-next-line:directive-class-suffix
class BaseComponent {
    constructor() {
        this._destroyed = false;
    }
    on(observable) {
        return observable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.takeWhile)(() => !this._destroyed));
    }
    ngOnDestroy() {
        this._destroyed = true;
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseComponent });


/***/ }),

/***/ 8821:
/*!**********************************!*\
  !*** ./src/lib/base64-helper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64Helper": () => (/* binding */ Base64Helper)
/* harmony export */ });
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

/***/ 5145:
/*!********************************!*\
  !*** ./src/lib/date-helper.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateHelper": () => (/* binding */ DateHelper)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);

class DateHelper {
    /** Create Time Labels */
    static createTimeLabels(count, scaleSeconds, reverse) {
        let labels = [];
        let seconds = new Date().getTime() / 1000;
        if (!reverse) {
            seconds -= scaleSeconds * count;
        }
        for (let i = 0; i < count; i++) {
            labels.push(this.findTimeFromUnixSeconds(seconds));
            if (reverse) {
                seconds -= scaleSeconds;
            }
            else {
                seconds += scaleSeconds;
            }
        }
        return labels;
    }
    /** Create Time Labels. Each time must be in unix seconds. */
    static createLabels(times) {
        let labels = [];
        for (let i = 0; i < times.length; i++) {
            labels.push(this.findTimeFromUnixSeconds(times[i]));
        }
        return labels;
    }
    /** Returns HH:mm:ss string from unix time in seconds */
    static findTimeFromUnixSeconds(unix) {
        let date = new Date(unix * 1000);
        return this._pipe.transform(date, 'HH:mm:ss');
    }
}
DateHelper._pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe('en-US');


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6501:
/*!************************************!*\
  !*** ./src/models/api-response.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiResponse": () => (/* binding */ ApiResponse)
/* harmony export */ });
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

/***/ 2163:
/*!************************************!*\
  !*** ./src/models/session-user.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionUser": () => (/* binding */ SessionUser)
/* harmony export */ });
class SessionUser {
}


/***/ }),

/***/ 7334:
/*!****************************************!*\
  !*** ./src/services/client.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/date-helper */ 5145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/api-client */ 4586);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.service */ 5608);






class ClientService {
    constructor(api, socket) {
        this.api = api;
        this.socket = socket;
        this._clients = [];
        this._onconnected = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._ondisconnected = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    get clients() { return this._clients; }
    get onconnected() { return this._onconnected; }
    get ondisconnected() { return this._ondisconnected; }
    list() {
        return this.api.get('/client/list')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (response.ok()) {
                this._clients = response.data;
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    refresh() {
        return null;
    }
    remove(client) {
        return null;
    }
    getGraph(name, resolution) {
        let url = '/client/graph?resolution=' + resolution;
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => this.api.get(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            if (!response.success)
                return null;
            let result = response.data;
            result.labels = src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__.DateHelper.createLabels(result.d.map(x => x.u));
            return result;
        }))
            .toPromise();
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__.ApiClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_2__.WebsocketService)); };
ClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5037:
/*!*******************************************!*\
  !*** ./src/services/dashboard.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/api-client */ 4586);



class DashboardService {
    constructor(api) {
        this.api = api;
    }
    /** Refreshes graph data */
    load() {
        return this.api.get('/dashboard/stats')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_0__.ApiClient)); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1632:
/*!**********************************************!*\
  !*** ./src/services/horse-router.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorseRouterService": () => (/* binding */ HorseRouterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/date-helper */ 5145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/api-client */ 4586);





class HorseRouterService {
    constructor(api) {
        this.api = api;
    }
    list() {
        return this.api.get('/router/list')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (response.ok()) {
                this._routers = response.data;
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    create(model) {
        return this.api.post('/router/create', model)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    get(name) {
        return this.api.get('/router/get?name=' + name)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    getGraph(name, resolution) {
        let url = '/router/graph?resolution=' + resolution;
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.api.get(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (!response.success)
                return null;
            let result = response.data;
            result.labels = src_lib_date_helper__WEBPACK_IMPORTED_MODULE_0__.DateHelper.createLabels(result.d.map(x => x.u));
            return result;
        }))
            .toPromise();
    }
    remove(name) {
        return this.api.delete('/router/remove?name=' + name)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    addBinding(model) {
        return this.api.post('/router/binding', model)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
    removeBinding(router, binding) {
        return this.api.delete('/router/binding?routerName=' + router + '&bindingName=' + binding)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
            if (response.ok()) {
                return response.data;
            }
            return null;
        }))
            .toPromise();
    }
}
HorseRouterService.ɵfac = function HorseRouterService_Factory(t) { return new (t || HorseRouterService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_1__.ApiClient)); };
HorseRouterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: HorseRouterService, factory: HorseRouterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4461:
/*!***************************************!*\
  !*** ./src/services/login.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/lib/api-client */ 4586);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.service */ 5920);




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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
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
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_lib_api_client__WEBPACK_IMPORTED_MODULE_0__.ApiClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5920:
/*!*****************************************!*\
  !*** ./src/services/session.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_lib_base64_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base64-helper */ 8821);
/* harmony import */ var src_models_session_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/session-user */ 2163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





class SessionService {
    constructor() {
        this._current = null;
        this._changed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    get onchanged() {
        return this._changed.pipe();
    }
    run() {
        this._current = this.read();
        this._changed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000)
            .subscribe(() => {
            this._current = this.read();
        });
    }
    set(login) {
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage.token, login.token);
        let user = this.deserialize(login.token);
        this._current = user;
        this._changed.next(user);
        return user;
    }
    refresh(token) {
        let current = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage.token);
        if (!current)
            return;
        localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage.token, token);
    }
    clear() {
        let old = this._current;
        localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage.token);
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
            let str = localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage.token);
            if (str == null) {
                if (this._current && this._changed)
                    this._changed.next(null);
                return null;
            }
            let user = this.deserialize(str);
            if (!this._current && this._changed && user)
                this._changed.next(user);
            this._current = user;
            return user;
        }
        catch (_a) {
            localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.storage.token);
            return null;
        }
    }
    deserialize(token) {
        let token_info = JSON.parse(src_lib_base64_helper__WEBPACK_IMPORTED_MODULE_1__.Base64Helper.readBearer(token));
        let user = new src_models_session_user__WEBPACK_IMPORTED_MODULE_2__.SessionUser();
        user.token = token;
        user.id = token_info.sub;
        user.name = token_info.name;
        user.expiration = parseInt(token_info.exp) * 1000;
        return user;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5608:
/*!*******************************************!*\
  !*** ./src/services/websocket.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebClientStatus": () => (/* binding */ WebClientStatus),
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


var WebClientStatus;
(function (WebClientStatus) {
    WebClientStatus[WebClientStatus["Disconnected"] = 0] = "Disconnected";
    WebClientStatus[WebClientStatus["Connecting"] = 1] = "Connecting";
    WebClientStatus[WebClientStatus["Connected"] = 2] = "Connected";
})(WebClientStatus || (WebClientStatus = {}));
class WebsocketService {
    constructor() {
        this._onconnected = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._ondisconnected = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._onmessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get onconnected() { return this._onconnected; }
    get ondisconnected() { return this._ondisconnected; }
    get onmessage() { return this._onmessage; }
    get status() { return this._status; }
    connect(token) {
        //const host = environment.api.websocket + '?token=' + token;
        const host = 'ws://' + location.host + '?token=' + token;
        this._socket = new WebSocket(host);
        this._socket.onopen = (ev) => {
            this._status = WebClientStatus.Connected;
            this._onconnected.next(this);
        };
        this._socket.onclose = (ev) => {
            this._status = WebClientStatus.Disconnected;
            this._ondisconnected.next(this);
        };
        this._socket.onmessage = this.messageReceived.bind(this);
    }
    send(type, model) {
        if (!this._socket || this._status !== WebClientStatus.Connected)
            return false;
        const message = {
            type,
            payload: model
        };
        const str = JSON.stringify(message);
        this._socket.send(str);
        return true;
    }
    disconnect() {
        if (this._socket != null) {
            try {
                this._socket.close();
            }
            catch (_a) { }
            this._status = WebClientStatus.Disconnected;
            this._socket = null;
        }
    }
    messageReceived(event) {
        const message = JSON.parse(event.data);
        if (message == null || message.type == null || message.payload == null)
            return;
        this._onmessage.next(message);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map