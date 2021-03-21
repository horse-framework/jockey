(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queues-queues-module"],{

/***/ "./src/app/queues/queues.component.ts":
/*!********************************************!*\
  !*** ./src/app/queues/queues.component.ts ***!
  \********************************************/
/*! exports provided: QueuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuesComponent", function() { return QueuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base-component */ "./src/lib/base-component.ts");



class QueuesComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
}
QueuesComponent.ɵfac = function QueuesComponent_Factory(t) { return new (t || QueuesComponent)(); };
QueuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QueuesComponent, selectors: [["app-queues"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function QueuesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "queues works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXVlcy9xdWV1ZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-queues',
                templateUrl: './queues.component.html',
                styleUrls: ['./queues.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/queues/queues.module.ts":
/*!*****************************************!*\
  !*** ./src/app/queues/queues.module.ts ***!
  \*****************************************/
/*! exports provided: QueuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuesModule", function() { return QueuesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _queues_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queues.component */ "./src/app/queues/queues.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class QueuesModule {
}
QueuesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QueuesModule });
QueuesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QueuesModule_Factory(t) { return new (t || QueuesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _queues_component__WEBPACK_IMPORTED_MODULE_2__["QueuesComponent"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueuesModule, { declarations: [_queues_component__WEBPACK_IMPORTED_MODULE_2__["QueuesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueuesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_queues_component__WEBPACK_IMPORTED_MODULE_2__["QueuesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _queues_component__WEBPACK_IMPORTED_MODULE_2__["QueuesComponent"] }])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=queues-queues-module-es2015.js.map