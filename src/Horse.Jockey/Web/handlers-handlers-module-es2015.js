(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["handlers-handlers-module"],{

/***/ "./src/app/handlers/handlers.component.ts":
/*!************************************************!*\
  !*** ./src/app/handlers/handlers.component.ts ***!
  \************************************************/
/*! exports provided: HandlersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlersComponent", function() { return HandlersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HandlersComponent {
    constructor() { }
    ngOnInit() {
    }
}
HandlersComponent.ɵfac = function HandlersComponent_Factory(t) { return new (t || HandlersComponent)(); };
HandlersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandlersComponent, selectors: [["app-handlers"]], decls: 2, vars: 0, template: function HandlersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "handlers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhbmRsZXJzL2hhbmRsZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandlersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-handlers',
                templateUrl: './handlers.component.html',
                styleUrls: ['./handlers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/handlers/handlers.module.ts":
/*!*********************************************!*\
  !*** ./src/app/handlers/handlers.module.ts ***!
  \*********************************************/
/*! exports provided: HandlersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlersModule", function() { return HandlersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _handlers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers.component */ "./src/app/handlers/handlers.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class HandlersModule {
}
HandlersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HandlersModule });
HandlersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HandlersModule_Factory(t) { return new (t || HandlersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _handlers_component__WEBPACK_IMPORTED_MODULE_2__["HandlersComponent"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HandlersModule, { declarations: [_handlers_component__WEBPACK_IMPORTED_MODULE_2__["HandlersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandlersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_handlers_component__WEBPACK_IMPORTED_MODULE_2__["HandlersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _handlers_component__WEBPACK_IMPORTED_MODULE_2__["HandlersComponent"] }])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=handlers-handlers-module-es2015.js.map