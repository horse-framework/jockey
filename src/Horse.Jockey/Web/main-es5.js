function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/interceptors/session.guard */
    "./src/interceptors/session.guard.ts");
    /* harmony import */


    var _layout_guest_layout_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/guest-layout/guest-layout.component */
    "./src/app/layout/guest-layout/guest-layout.component.ts");
    /* harmony import */


    var _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/portal-layout/portal-layout.component */
    "./src/app/layout/portal-layout/portal-layout.component.ts");

    var routes = [{
      path: 'queue',
      component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | queue-queue-module */
        "queue-queue-module").then(__webpack_require__.bind(null,
        /*! ./queue/queue.module */
        "./src/app/queue/queue.module.ts")).then(function (m) {
          return m.QueueModule;
        });
      },
      canLoad: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    }, {
      path: 'queues',
      component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | queues-queues-module */
        "queues-queues-module").then(__webpack_require__.bind(null,
        /*! ./queues/queues.module */
        "./src/app/queues/queues.module.ts")).then(function (m) {
          return m.QueuesModule;
        });
      },
      canLoad: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    }, {
      path: 'route',
      component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | route-route-module */
        "route-route-module").then(__webpack_require__.bind(null,
        /*! ./route/route.module */
        "./src/app/route/route.module.ts")).then(function (m) {
          return m.RouteModule;
        });
      },
      canLoad: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    }, {
      path: 'routes',
      component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | routes-routes-module */
        "routes-routes-module").then(__webpack_require__.bind(null,
        /*! ./routes/routes.module */
        "./src/app/routes/routes.module.ts")).then(function (m) {
          return m.RoutesModule;
        });
      },
      canLoad: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    }, {
      path: 'client',
      component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | client-client-module */
        "client-client-module").then(__webpack_require__.bind(null,
        /*! ./client/client.module */
        "./src/app/client/client.module.ts")).then(function (m) {
          return m.ClientModule;
        });
      },
      canLoad: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    }, {
      path: 'login',
      component: _layout_guest_layout_guest_layout_component__WEBPACK_IMPORTED_MODULE_3__["GuestLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: '',
      component: _layout_portal_layout_portal_layout_component__WEBPACK_IMPORTED_MODULE_4__["PortalLayoutComponent"],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dashboard-dashboard-module */
        "dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      },
      canLoad: [src_interceptors_session_guard__WEBPACK_IMPORTED_MODULE_2__["SessionGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/lib/base-component */
    "./src/lib/base-component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function (_src_lib_base_compone) {
      _inherits(AppComponent, _src_lib_base_compone);

      var _super = _createSuper(AppComponent);

      function AppComponent() {
        _classCallCheck(this, AppComponent);

        return _super.apply(this, arguments);
      }

      return AppComponent;
    }(src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return ɵAppComponent_BaseFactory(t || AppComponent);
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });

    var ɵAppComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AppComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/services/websocket.service */
    "./src/services/websocket.service.ts");
    /* harmony import */


    var src_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/services/session.service */
    "./src/services/session.service.ts");
    /* harmony import */


    var src_services_route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/route.service */
    "./src/services/route.service.ts");
    /* harmony import */


    var src_services_queue_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/queue.service */
    "./src/services/queue.service.ts");
    /* harmony import */


    var src_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/services/login.service */
    "./src/services/login.service.ts");
    /* harmony import */


    var src_services_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/services/client.service */
    "./src/services/client.service.ts");
    /* harmony import */


    var src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/services/dashboard.service */
    "./src/services/dashboard.service.ts");
    /* harmony import */


    var _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/guest-layout/guest-layout.module */
    "./src/app/layout/guest-layout/guest-layout.module.ts");
    /* harmony import */


    var _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layout/portal-layout/portal-layout.module */
    "./src/app/layout/portal-layout/portal-layout.module.ts");
    /* harmony import */


    var src_lib_api_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/lib/api-client */
    "./src/lib/api-client.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"], src_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], src_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"], src_services_queue_service__WEBPACK_IMPORTED_MODULE_7__["QueueService"], src_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], src_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"], src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"], src_lib_api_client__WEBPACK_IMPORTED_MODULE_13__["ApiClient"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_11__["GuestLayoutModule"], _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_12__["PortalLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_11__["GuestLayoutModule"], _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_12__["PortalLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _layout_guest_layout_guest_layout_module__WEBPACK_IMPORTED_MODULE_11__["GuestLayoutModule"], _layout_portal_layout_portal_layout_module__WEBPACK_IMPORTED_MODULE_12__["PortalLayoutModule"]],
          providers: [src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"], src_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], src_services_route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"], src_services_queue_service__WEBPACK_IMPORTED_MODULE_7__["QueueService"], src_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], src_services_client_service__WEBPACK_IMPORTED_MODULE_9__["ClientService"], src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_10__["DashboardService"], src_lib_api_client__WEBPACK_IMPORTED_MODULE_13__["ApiClient"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/guest-layout/guest-layout.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/guest-layout/guest-layout.component.ts ***!
    \***************************************************************/

  /*! exports provided: GuestLayoutComponent */

  /***/
  function srcAppLayoutGuestLayoutGuestLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuestLayoutComponent", function () {
      return GuestLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/lib/base-component */
    "./src/lib/base-component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GuestLayoutComponent = /*#__PURE__*/function (_src_lib_base_compone2) {
      _inherits(GuestLayoutComponent, _src_lib_base_compone2);

      var _super2 = _createSuper(GuestLayoutComponent);

      function GuestLayoutComponent() {
        _classCallCheck(this, GuestLayoutComponent);

        return _super2.call(this);
      }

      _createClass(GuestLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GuestLayoutComponent;
    }(src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    GuestLayoutComponent.ɵfac = function GuestLayoutComponent_Factory(t) {
      return new (t || GuestLayoutComponent)();
    };

    GuestLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuestLayoutComponent,
      selectors: [["app-guest-layout"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "guest-content"]],
      template: function GuestLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ndWVzdC1sYXlvdXQvZ3Vlc3QtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guest-layout',
          templateUrl: './guest-layout.component.html',
          styleUrls: ['./guest-layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/guest-layout/guest-layout.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/guest-layout/guest-layout.module.ts ***!
    \************************************************************/

  /*! exports provided: GuestLayoutModule */

  /***/
  function srcAppLayoutGuestLayoutGuestLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuestLayoutModule", function () {
      return GuestLayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _guest_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guest-layout.component */
    "./src/app/layout/guest-layout/guest-layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GuestLayoutModule = function GuestLayoutModule() {
      _classCallCheck(this, GuestLayoutModule);
    };

    GuestLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GuestLayoutModule
    });
    GuestLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GuestLayoutModule_Factory(t) {
        return new (t || GuestLayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestLayoutModule, {
        declarations: [_guest_layout_component__WEBPACK_IMPORTED_MODULE_2__["GuestLayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_guest_layout_component__WEBPACK_IMPORTED_MODULE_2__["GuestLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/portal-layout/portal-layout.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/portal-layout/portal-layout.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PortalLayoutComponent */

  /***/
  function srcAppLayoutPortalLayoutPortalLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalLayoutComponent", function () {
      return PortalLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/lib/base-component */
    "./src/lib/base-component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PortalLayoutComponent = /*#__PURE__*/function (_src_lib_base_compone3) {
      _inherits(PortalLayoutComponent, _src_lib_base_compone3);

      var _super3 = _createSuper(PortalLayoutComponent);

      function PortalLayoutComponent() {
        _classCallCheck(this, PortalLayoutComponent);

        return _super3.call(this);
      }

      _createClass(PortalLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortalLayoutComponent;
    }(src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    PortalLayoutComponent.ɵfac = function PortalLayoutComponent_Factory(t) {
      return new (t || PortalLayoutComponent)();
    };

    PortalLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortalLayoutComponent,
      selectors: [["app-portal-layout"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 0,
      consts: [[1, "portal-content"]],
      template: function PortalLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " header\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " footer\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3J0YWwtbGF5b3V0L3BvcnRhbC1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portal-layout',
          templateUrl: './portal-layout.component.html',
          styleUrls: ['./portal-layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/portal-layout/portal-layout.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/portal-layout/portal-layout.module.ts ***!
    \**************************************************************/

  /*! exports provided: PortalLayoutModule */

  /***/
  function srcAppLayoutPortalLayoutPortalLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalLayoutModule", function () {
      return PortalLayoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _portal_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./portal-layout.component */
    "./src/app/layout/portal-layout/portal-layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PortalLayoutModule = function PortalLayoutModule() {
      _classCallCheck(this, PortalLayoutModule);
    };

    PortalLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalLayoutModule
    });
    PortalLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalLayoutModule_Factory(t) {
        return new (t || PortalLayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalLayoutModule, {
        declarations: [_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__["PortalLayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_portal_layout_component__WEBPACK_IMPORTED_MODULE_2__["PortalLayoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api: {
        url: ''
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

    /***/
  },

  /***/
  "./src/interceptors/session.guard.ts":
  /*!*******************************************!*\
    !*** ./src/interceptors/session.guard.ts ***!
    \*******************************************/

  /*! exports provided: SessionGuard */

  /***/
  function srcInterceptorsSessionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionGuard", function () {
      return SessionGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SessionGuard = /*#__PURE__*/function () {
      function SessionGuard() {
        _classCallCheck(this, SessionGuard);
      }

      _createClass(SessionGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return true;
        }
      }]);

      return SessionGuard;
    }();

    SessionGuard.ɵfac = function SessionGuard_Factory(t) {
      return new (t || SessionGuard)();
    };

    SessionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SessionGuard,
      factory: SessionGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/lib/api-client.ts":
  /*!*******************************!*\
    !*** ./src/lib/api-client.ts ***!
    \*******************************/

  /*! exports provided: ApiClient */

  /***/
  function srcLibApiClientTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiClient", function () {
      return ApiClient;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_models_api_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/models/api-response */
    "./src/models/api-response.ts");
    /* harmony import */


    var src_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/session.service */
    "./src/services/session.service.ts");

    var ApiClient = /*#__PURE__*/function () {
      function ApiClient(http, session) {
        _classCallCheck(this, ApiClient);

        this.http = http;
        this.session = session;
      }

      _createClass(ApiClient, [{
        key: "getOptions",
        value: function getOptions(contentType) {
          var user = this.session.get();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('Access-Control-Allow-Origin', '*');
          if (contentType != null) headers = headers.set('Content-Type', contentType);
          if (user != null && user.token != null && user.token.length > 0) headers = headers.set('Authorization', 'Bearer ' + user.token);
          var httpOptions = {
            headers: headers,
            withCredentials: true
          };
          return httpOptions;
        }
      }, {
        key: "get",
        value: function get(url, progress) {
          if (progress) return this.requestProgress(true, 'GET', url, null, progress);
          return this.request(true, 'GET', url, null);
        }
      }, {
        key: "delete",
        value: function _delete(url, model, progress) {
          if (progress) return this.requestProgress(true, 'DELETE', url, JSON.stringify(model), progress);
          return this.request(true, 'DELETE', url, JSON.stringify(model));
        }
      }, {
        key: "post",
        value: function post(url, model, progress) {
          if (progress) return this.requestProgress(true, 'POST', url, JSON.stringify(model), progress);
          return this.request(true, 'POST', url, JSON.stringify(model));
        }
      }, {
        key: "put",
        value: function put(url, model, progress) {
          if (progress) return this.requestProgress(true, 'PUT', url, JSON.stringify(model), progress);
          return this.request(true, 'PUT', url, JSON.stringify(model));
        }
      }, {
        key: "patch",
        value: function patch(url, model, progress) {
          if (progress) return this.requestProgress(true, 'PATCH', url, JSON.stringify(model), progress);
          return this.request(true, 'PATCH', url, JSON.stringify(model));
        }
      }, {
        key: "postForm",
        value: function postForm(url, form, progress) {
          if (progress) return this.requestProgress(false, 'POST', url, form, progress);
          return this.request(false, 'POST', url, form);
        }
      }, {
        key: "putForm",
        value: function putForm(url, form, progress) {
          if (progress) return this.requestProgress(false, 'PUT', url, form, progress);
          return this.request(false, 'PUT', url, form);
        }
      }, {
        key: "patchForm",
        value: function patchForm(url, form, progress) {
          if (progress) return this.requestProgress(false, 'PATCH', url, form, progress);
          return this.request(false, 'PATCH', url, form);
        }
      }, {
        key: "request",
        value: function request(json, method, url, body) {
          var _this = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            json: json,
            method: method,
            url: url,
            body: body
          }).pipe( //subscribe only once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), //prepares the request
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (input) {
            var options = _this.getOptions(input.json ? 'application/json' : null);

            var fullUrl = input.url;

            if (fullUrl.indexOf('//') < 0) {
              var url_slash = '';
              if (!fullUrl.startsWith('/')) url_slash = '/';
              fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.url + url_slash + fullUrl;
            }

            switch (method) {
              case 'GET':
                return _this.http.get(fullUrl, options);

              case 'DELETE':
                return _this.http["delete"](fullUrl, options);

              case 'POST':
                return _this.http.post(fullUrl, body, options);

              case 'PUT':
                return _this.http.put(fullUrl, body, options);

              case 'PATCH':
                return _this.http.patch(fullUrl, body, options);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }), //gets the response
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            var response = value;
            var result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = 200;
            result.statusMessage = 'OK';
            result.data = response;
            result.success = true;
            return result;
          }), //gets the failed response
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            var e = err;
            var result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = e.status;
            result.statusMessage = e.message;
            result.error = e.error;
            result.success = false;
            if (result.statusCode == 401) _this.session.clear();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          }));
        }
      }, {
        key: "requestProgress",
        value: function requestProgress(json, method, url, body, progress) {
          var _this2 = this;

          var finished = false;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            json: json,
            method: method,
            url: url,
            body: body
          }).pipe( //subscribe only once
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () {
            return !finished && !progress.canceled;
          }), //prepares the request
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (input) {
            var options = _this2.getOptions(input.json ? 'application/json' : null);

            options.reportProgress = true;
            options.observe = 'events';
            var fullUrl = input.url;

            if (fullUrl.indexOf('//') < 0) {
              var url_slash = '';
              if (!fullUrl.startsWith('/')) url_slash = '/';
              fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.url + url_slash + fullUrl;
            }

            switch (method) {
              case 'GET':
                return _this2.http.get(fullUrl, options);

              case 'DELETE':
                return _this2.http["delete"](fullUrl, options);

              case 'POST':
                return _this2.http.post(fullUrl, body, options);

              case 'PUT':
                return _this2.http.put(fullUrl, body, options);

              case 'PATCH':
                return _this2.http.patch(fullUrl, body, options);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            if (progress.canceled) throw new Error('file upload canceled');

            if (value.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              if (progress) {
                var num = Math.round(100 * value.loaded / value.total);
                progress.progress(num);
              }

              return null;
            } else if (value.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
              finished = true;
              return value;
            }

            return null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (value) {
            return value != null;
          }), //gets the response
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            var response = value;
            var result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = 200;
            result.statusMessage = 'OK';
            result.data = response.body;
            result.success = true;
            return result;
          }), //gets the failed response
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            var e = err;
            var result = new src_models_api_response__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            result.statusCode = e.status;
            result.statusMessage = e.message;
            result.error = e.error;
            result.success = false;
            if (result.statusCode == 401) _this2.session.clear();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          }));
        }
      }, {
        key: "toTransaction",
        value: function toTransaction(response) {
          return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (response) {
            if (response.data != null) return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.data);else if (response.error != null) return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          })).toPromise();
        }
      }, {
        key: "toObject",
        value: function toObject(response) {
          return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (response) {
            if (response.ok()) return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.data);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          })).toPromise();
        }
      }]);

      return ApiClient;
    }();

    ApiClient.ɵfac = function ApiClient_Factory(t) {
      return new (t || ApiClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]));
    };

    ApiClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiClient,
      factory: ApiClient.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/lib/base-component.ts":
  /*!***********************************!*\
    !*** ./src/lib/base-component.ts ***!
    \***********************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcLibBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BaseComponent = /*#__PURE__*/function () {
      function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        this._destroyed = false;
      }

      _createClass(BaseComponent, [{
        key: "on",
        value: function on(observable) {
          var _this3 = this;

          return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeWhile"])(function () {
            return !_this3._destroyed;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed = true;
        }
      }]);

      return BaseComponent;
    }();

    BaseComponent.ɵfac = function BaseComponent_Factory(t) {
      return new (t || BaseComponent)();
    };

    BaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: BaseComponent
    });
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/models/api-response.ts":
  /*!************************************!*\
    !*** ./src/models/api-response.ts ***!
    \************************************/

  /*! exports provided: ApiResponse */

  /***/
  function srcModelsApiResponseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiResponse", function () {
      return ApiResponse;
    });

    var ApiResponse = /*#__PURE__*/function () {
      function ApiResponse() {
        _classCallCheck(this, ApiResponse);
      }

      _createClass(ApiResponse, [{
        key: "ok",
        value: function ok() {
          return this.success && this.data;
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage() {
          if (this.statusMessage) return this.statusMessage;
          return null;
        }
      }]);

      return ApiResponse;
    }();
    /***/

  },

  /***/
  "./src/services/client.service.ts":
  /*!****************************************!*\
    !*** ./src/services/client.service.ts ***!
    \****************************************/

  /*! exports provided: ClientService */

  /***/
  function srcServicesClientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientService", function () {
      return ClientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/services/websocket.service.ts");

    var ClientService = /*#__PURE__*/function () {
      function ClientService(socket) {
        _classCallCheck(this, ClientService);

        this.socket = socket;
        this._clients = [];
        this._onconnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._ondisconnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ClientService, [{
        key: "clients",
        get: function get() {
          return this._clients;
        }
      }, {
        key: "onconnected",
        get: function get() {
          return this._onconnected;
        }
      }, {
        key: "ondisconnected",
        get: function get() {
          return this._ondisconnected;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          return null;
        }
      }, {
        key: "remove",
        value: function remove(client) {
          return null;
        }
      }]);

      return ClientService;
    }();

    ClientService.ɵfac = function ClientService_Factory(t) {
      return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]));
    };

    ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClientService,
      factory: ClientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/dashboard.service.ts":
  /*!*******************************************!*\
    !*** ./src/services/dashboard.service.ts ***!
    \*******************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardService = function DashboardService() {
      _classCallCheck(this, DashboardService);
    };

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)();
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/login.service.ts":
  /*!***************************************!*\
    !*** ./src/services/login.service.ts ***!
    \***************************************/

  /*! exports provided: LoginService */

  /***/
  function srcServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginService = function LoginService() {
      _classCallCheck(this, LoginService);
    };

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)();
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/queue.service.ts":
  /*!***************************************!*\
    !*** ./src/services/queue.service.ts ***!
    \***************************************/

  /*! exports provided: QueueService */

  /***/
  function srcServicesQueueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueService", function () {
      return QueueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/services/websocket.service.ts");

    var QueueService = /*#__PURE__*/function () {
      function QueueService(socket) {
        _classCallCheck(this, QueueService);

        this.socket = socket;
        this._queues = [];
        this._oncreated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._onremoved = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._onupdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(QueueService, [{
        key: "queues",
        get: function get() {
          return this._queues;
        }
      }, {
        key: "oncreated",
        get: function get() {
          return this._oncreated;
        }
      }, {
        key: "onremoved",
        get: function get() {
          return this._onremoved;
        }
      }, {
        key: "onupdated",
        get: function get() {
          return this._onupdated;
        }
      }, {
        key: "create",
        value: function create(queue) {
          return null;
        }
      }, {
        key: "update",
        value: function update(queue) {
          return null;
        }
      }, {
        key: "remove",
        value: function remove(queue) {
          return null;
        }
      }]);

      return QueueService;
    }();

    QueueService.ɵfac = function QueueService_Factory(t) {
      return new (t || QueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]));
    };

    QueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QueueService,
      factory: QueueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/route.service.ts":
  /*!***************************************!*\
    !*** ./src/services/route.service.ts ***!
    \***************************************/

  /*! exports provided: RouteService */

  /***/
  function srcServicesRouteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteService", function () {
      return RouteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RouteService = function RouteService() {
      _classCallCheck(this, RouteService);
    };

    RouteService.ɵfac = function RouteService_Factory(t) {
      return new (t || RouteService)();
    };

    RouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RouteService,
      factory: RouteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/session.service.ts":
  /*!*****************************************!*\
    !*** ./src/services/session.service.ts ***!
    \*****************************************/

  /*! exports provided: SessionService */

  /***/
  function srcServicesSessionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SessionService = /*#__PURE__*/function () {
      function SessionService() {
        _classCallCheck(this, SessionService);
      }

      _createClass(SessionService, [{
        key: "get",
        value: function get() {
          return null;
        }
      }, {
        key: "clear",
        value: function clear() {}
      }]);

      return SessionService;
    }();

    SessionService.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)();
    };

    SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/websocket.service.ts":
  /*!*******************************************!*\
    !*** ./src/services/websocket.service.ts ***!
    \*******************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcServicesWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WebsocketService = function WebsocketService() {
      _classCallCheck(this, WebsocketService);
    };

    WebsocketService.ɵfac = function WebsocketService_Factory(t) {
      return new (t || WebsocketService)();
    };

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebsocketService,
      factory: WebsocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mehmet/Projects/horse-framework/jockey/web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map