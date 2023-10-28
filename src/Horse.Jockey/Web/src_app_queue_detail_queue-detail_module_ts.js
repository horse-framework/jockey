"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["src_app_queue_detail_queue-detail_module_ts"],{

/***/ 5510:
/*!***********************************************************************************!*\
  !*** ./src/app/queue/detail/messsage-move-modal/messsage-move-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesssageMoveModalComponent": () => (/* binding */ MesssageMoveModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class MesssageMoveModalComponent {
    constructor() {
        this._onconfirmed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.target = '';
        this._confirmed = false;
    }
    get onconfirmed() { return this._onconfirmed; }
    ngOnInit() {
    }
    confirm() {
        this._confirmed = true;
        this._onconfirmed.next(this.target);
    }
    ngOnDestroy() {
        if (!this._confirmed)
            this._onconfirmed.next(null);
    }
}
MesssageMoveModalComponent.ɵfac = function MesssageMoveModalComponent_Factory(t) { return new (t || MesssageMoveModalComponent)(); };
MesssageMoveModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MesssageMoveModalComponent, selectors: [["app-messsage-move-modal"]], decls: 17, vars: 2, consts: [["mat-dialog-title", "", 1, "title"], [1, "content"], [1, "imp"], ["placeholder", "Queue Name", "type", "text", 1, "target-text", 3, "ngModel", "ngModelChange"], [1, "buttons"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-green", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-grey"]], template: function MesssageMoveModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " You are about to move ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " messages. Please type the target queue name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " If the target queue doesn't exist, it will be created with default queue options. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div")(11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MesssageMoveModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.target = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-dialog-actions", 4)(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MesssageMoveModalComponent_Template_button_click_13_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.messageCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.target);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: [".title[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0px 25px 10px 25px;\r\n  display: block;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #d2d2d2;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\r\n.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    padding: 20px 0px;\r\n}\r\n.target-text[_ngcontent-%COMP%] {\r\n  border: 1px solid #555;\r\n  background-color: #000;\r\n  color: #eee;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  padding: 8px;\r\n  width: 320px;\r\n}\r\n.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active {\r\n  border-color: #10a040;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NzYWdlLW1vdmUtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJtZXNzc2FnZS1tb3ZlLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAwcHggMjVweCAxMHB4IDI1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnRlbnQgcCB7XHJcbiAgY29sb3I6ICNkMmQyZDI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5jb250ZW50IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4udGFyZ2V0LXRleHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBjb2xvcjogI2VlZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG59XHJcbi50YXJnZXQtdGV4dDpmb2N1cyxcclxuLnRhcmdldC10ZXh0OmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTBhMDQwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5032:
/*!********************************************************!*\
  !*** ./src/app/queue/detail/queue-detail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueDetailComponent": () => (/* binding */ QueueDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 7942);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base-component */ 2962);
/* harmony import */ var src_lib_socket_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/lib/socket-models */ 8823);
/* harmony import */ var _layout_portal_layout_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/portal-layout/confirm-modal/confirm-modal.component */ 8782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _messsage_move_modal_messsage_move_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messsage-move-modal/messsage-move-modal.component */ 5510);
/* harmony import */ var _queue_message_modal_queue_message_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue-message-modal/queue-message-modal.component */ 2105);
/* harmony import */ var _queue_push_modal_queue_push_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queue-push-modal/queue-push-modal.component */ 8264);
/* harmony import */ var _queue_option_modal_queue_option_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queue-option-modal/queue-option-modal.component */ 2790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_services_chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/chart.service */ 379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_services_websocket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/websocket.service */ 5608);
/* harmony import */ var src_app_queue_services_queue_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/queue/services/queue.service */ 3349);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _layout_pipes_unlimited_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layout/pipes/unlimited.pipe */ 8392);
/* harmony import */ var _layout_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layout/pipes/filesize.pipe */ 3369);



















function QueueDetailComponent_div_13_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r3.queue.stats.lastReceived * 1000, "yyyy-MM-dd HH:mm:ss"));
} }
function QueueDetailComponent_div_13_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function QueueDetailComponent_div_13_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, ctx_r5.queue.stats.lastSent * 1000, "yyyy-MM-dd HH:mm:ss"), " ");
} }
function QueueDetailComponent_div_13_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function QueueDetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 3)(1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, " Queue Statistics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_13_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r7.resetStats(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 14)(6, "div", 15)(7, "div", 16)(8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Published Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 16)(13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Consumed Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 16)(18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Acknowledge Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 16)(23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Total Timed out Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 16)(28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Total Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 16)(33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Last Publish Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, QueueDetailComponent_div_13_div_35_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, QueueDetailComponent_div_13_div_36_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 16)(38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Last Consume Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, QueueDetailComponent_div_13_div_40_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, QueueDetailComponent_div_13_div_41_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.queue.stats.totalReceived);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", ctx_r0.queue.stats.totalDelivered, " consumes, ", ctx_r0.queue.stats.totalSent, " unique msgs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"]("", ctx_r0.queue.stats.totalAck, " ack, ", ctx_r0.queue.stats.totalNack, " nack, ", ctx_r0.queue.stats.totalUnack, " unack");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.queue.stats.totalTimedout);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.queue.stats.totalErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.queue.stats.lastReceived > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.queue.stats.lastReceived == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.queue.stats.lastSent > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.queue.stats.lastSent == 0);
} }
function QueueDetailComponent_div_15_div_133_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_133_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r17.changeOption("Acknowledge Timeout", "ackTimeout", ctx_r17.queue.info.ackTimeout); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r9.queue.info.ackTimeout, " ms Timeout ");
} }
function QueueDetailComponent_div_15_div_134_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Timeout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_134_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r19.changeOption("Acknowledge Timeout", "ackTimeout", ctx_r19.queue.info.ackTimeout); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} }
function QueueDetailComponent_div_15_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Timeout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function QueueDetailComponent_div_15_div_145_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_145_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r21.changeOption("Message Timeout", "msgTimeout", ctx_r21.queue.info.msgTimeout); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r12.queue.info.msgTimeout, " Milliseconds ");
} }
function QueueDetailComponent_div_15_div_166_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_166_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r23.changeOption("Delay Between Messages", "delayBetweenMsgs", ctx_r23.queue.info.delayBetweenMsgs); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} }
function QueueDetailComponent_div_15_div_167_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_167_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r25.changeOption("Delay Between Messages", "delayBetweenMsgs", ctx_r25.queue.info.delayBetweenMsgs); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r14.queue.info.delayBetweenMsgs, " Milliseconds ");
} }
function QueueDetailComponent_div_15_div_171_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Delay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_171_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r27.changeOption("Put Back Delay", "putBackDelay", ctx_r27.queue.info.putBackDelay); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} }
function QueueDetailComponent_div_15_div_172_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_div_172_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r29.changeOption("Put Back Delay", "putBackDelay", ctx_r29.queue.info.putBackDelay); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r16.queue.info.putBackDelay, " Milliseconds ");
} }
function QueueDetailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Queue Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 5)(5, "div", 20)(6, "div", 21)(7, "div")(8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r31.push(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Push New Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Creates and pushes a message into the queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div")(13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r33.read(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Read First Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Shows the first message information. Message will ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "not");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, " be consumed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div")(21, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r34.consume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Consume First Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Shows the first message information. Message will be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "consumed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div")(28, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r35.move(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Move Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Moves all messages to another queue and removes them ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "permanently.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div")(35, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r36.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Clear All Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Clears queue. Deletes all messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "permanently!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div")(42, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r37.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Delete Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "Deletes queue and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, "all messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, " in it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50, "permanently!");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "div", 28)(52, "div")(53, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Current Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div")(58, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "New Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div")(61, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r38.setStatus("Paused"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](62, "Paused");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "div")(64, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r39.setStatus("Running"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](65, "Running");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "div")(67, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r40.setStatus("OnlyPush"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "Only Push");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "div")(70, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r41.setStatus("OnlyConsume"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, "Only Consume");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "div", 3)(73, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74, "Queue Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "div", 33)(76, "div", 15)(77, "div", 16)(78, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "div", 16)(83, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "Active Consumers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 16)(88, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, "Stored Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](90, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](92, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "div", 16)(94, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95, "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_a_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r42.changeOption("Topic", "topic", ctx_r42.queue.info.topic); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 16)(101, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 16)(106, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](107, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](110, "div", 16)(111, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](112, "Consumer Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](115, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_a_click_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r43.changeOption("Consumer Limit", "clientLimit", ctx_r43.queue.options.clientLimit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](117, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](118, "div", 16)(119, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](120, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](123, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](124, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "div", 16)(126, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](127, "Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](130, "div", 16)(131, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](132, "Acknowledge Timeout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](133, QueueDetailComponent_div_15_div_133_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](134, QueueDetailComponent_div_15_div_134_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](135, "div", 16)(136, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](137, "Commit When");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](138, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](140, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](141, "div", 16)(142, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](143, "Message Timeout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](144, QueueDetailComponent_div_15_div_144_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](145, QueueDetailComponent_div_15_div_145_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](146, "div", 16)(147, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](148, "Message Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](149, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](150);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](151, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](152, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_a_click_152_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r44.changeOption("Message Timeout", "msgLimit", ctx_r44.queue.info.msgLimit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](153, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](154, "div", 16)(155, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](156, "Message Size Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](157, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](158);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](159, "filesize");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](160, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_a_click_160_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r45.changeOption("Message Size Limit", "msgSizeLimit", ctx_r45.queue.info.msgSizeLimit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](161, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](162, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](163, "div", 16)(164, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](165, "Delay Between Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](166, QueueDetailComponent_div_15_div_166_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](167, QueueDetailComponent_div_15_div_167_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](168, "div", 16)(169, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](170, "Put Back Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](171, QueueDetailComponent_div_15_div_171_Template, 4, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](172, QueueDetailComponent_div_15_div_172_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](173, "div", 16)(174, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](175, "Auto Destroy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](176, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](177);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](178, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function QueueDetailComponent_div_15_Template_a_click_178_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r46.changeOption("Auto Destroy", "autoDestroy", ctx_r46.queue.info.autoDestroy); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](179, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.queue.info.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.queue.info.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.queue.stats.consumers);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.queue.stats.storedMsgs + ctx_r1.queue.stats.storedPrioMsgs + ctx_r1.queue.stats.processingMsgs + ctx_r1.queue.stats.ackPendingMsgs);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", (tmp_4_0 = ctx_r1.queue.info.topic) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.queue.info.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.queue.info.manager);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](115, 22, ctx_r1.queue.options.clientLimit), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](123, 24, ctx_r1.queue.info.createdDate * 1000, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.queue.info.acknowledge, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.ackTimeout > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.ackTimeout == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.queue.options.commitWhen, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.msgTimeout == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.msgTimeout > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](151, 27, ctx_r1.queue.info.msgLimit), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](159, 29, ctx_r1.queue.info.msgSizeLimit), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.delayBetweenMsgs == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.delayBetweenMsgs > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.putBackDelay == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.queue.info.putBackDelay > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.queue.info.autoDestroy, " ");
} }
function QueueDetailComponent_div_16_div_24_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const consumer_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 1, consumer_r48.processingDeadline * 1000, "yyyy-MM-dd HH:mm:ss"));
} }
function QueueDetailComponent_div_16_div_24_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 49)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Idle");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} }
function QueueDetailComponent_div_16_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 46)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 47)(8, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 49)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 49)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 49)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 49)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, QueueDetailComponent_div_16_div_24_div_23_Template, 6, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, QueueDetailComponent_div_16_div_24_div_24_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const consumer_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](consumer_r48.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](consumer_r48.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("routerLink", "/client/", consumer_r48.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](consumer_r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](13, 10, consumer_r48.subscriptionDate * 1000, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](consumer_r48.consumes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](consumer_r48.acks);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](consumer_r48.ackTimeouts);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", consumer_r48.currentlyProcessing);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !consumer_r48.currentlyProcessing);
} }
function QueueDetailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 36)(1, "div", 1)(2, "div", 37)(3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Queue Consumers");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 38)(6, "div", 39)(7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Subscribed Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Consumed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Acknowledged");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Ack Timed out");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, QueueDetailComponent_div_16_div_24_Template, 25, 13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.queue.consumers);
} }
class QueueDetailComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(dialog, chartService, activatedRoute, socket, router, queueService) {
        super();
        this.dialog = dialog;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.socket = socket;
        this.router = router;
        this.queueService = queueService;
        this.resolution = '1m';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.queueName = this.activatedRoute.snapshot.params.name;
            if (this.queueName == null || this.queueName.length === 0)
                return;
            yield this.load();
            this.subscribeWebsocket();
        });
    }
    subscribeWebsocket() {
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_2__.SocketModels.QueueGraph && x.payload.n == this.queueName), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => this.deliveryChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.deliveryChart, model));
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_2__.SocketModels.QueueStoreGraph && x.payload.n == this.queueName), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => this.storeChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.storeChart, model));
        const request = {
            requestId: new Date().getTime().toString(),
            name: this.queue.info.name
        };
        this.socket.send(src_lib_socket_models__WEBPACK_IMPORTED_MODULE_2__.SocketModels.QueueDetailRequest, request);
    }
    load() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.queue = yield this.queueService.get(this.queueName);
            this.graph = yield this.queueService.getGraph(this.queueName, this.resolution);
            if (this.deliveryChart)
                this.deliveryChart.destroy();
            this.deliveryChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('queue-delivery-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {
                    labels: this.graph.stream.labels,
                    datasets: [
                        {
                            label: 'Produced',
                            borderColor: '#2070e0',
                            data: this.graph.stream.d.map(x => x.r),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Ack',
                            borderColor: '#12bf4a',
                            data: this.graph.stream.d.map(x => x.d),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Neg. Ack',
                            borderColor: '#c042ef',
                            data: this.graph.stream.d.map(x => x.rs),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Unack',
                            borderColor: '#eec236',
                            data: this.graph.stream.d.map(x => x.nr),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Error',
                            borderColor: '#ff3333',
                            data: this.graph.stream.d.map(x => x.e),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    animation: {
                        duration: 0
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true, ticks: { precision: 0 } }]
                    }
                }
            });
            if (this.storeChart)
                this.storeChart.destroy();
            this.storeChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('queue-store-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {
                    labels: this.graph.store.labels,
                    datasets: [
                        {
                            label: 'Msgs',
                            borderColor: '#2070e0',
                            data: this.graph.store.d.map(x => x.r),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'High Prio Msgs',
                            borderColor: '#ff9911',
                            data: this.graph.store.d.map(x => x.d),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Pending for Ack',
                            borderColor: '#10a0a0',
                            data: this.graph.store.d.map(x => x.nr),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Processing',
                            borderColor: '#f02020',
                            data: this.graph.store.d.map(x => x.s),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    animation: {
                        duration: 0
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true, ticks: { precision: 0 } }]
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        const request = {
            requestId: new Date().getTime().toString(),
            name: null
        };
        this.socket.send(src_lib_socket_models__WEBPACK_IMPORTED_MODULE_2__.SocketModels.QueueDetailRequest, request);
    }
    push() {
        let dialogRef = this.dialog.open(_queue_push_modal_queue_push_modal_component__WEBPACK_IMPORTED_MODULE_6__.QueuePushModalComponent, { width: '550px' });
        let component = dialogRef.componentInstance;
        component.message.queue = this.queueName;
        component.onconfirmed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(msg => {
            if (msg)
                this.queueService
                    .push(msg)
                    .then(result => {
                });
        });
    }
    read() {
        this.queueService
            .read(this.queueName)
            .then(msg => this.showQueueMessage(msg));
    }
    consume() {
        let dialogRef = this.dialog.open(_layout_portal_layout_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmModalComponent, { width: '600px' });
        let component = dialogRef.componentInstance;
        component.message = 'Your message will be <b class="imp">consumed.</b> You will see the message after you confirmed this. But queue consumers will not receive that message and it will be deleted <b class="imp">permanently.</b>';
        component.onclosed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(value => {
            if (value)
                this.queueService
                    .consume(this.queueName)
                    .then(msg => this.showQueueMessage(msg));
        });
    }
    showQueueMessage(message) {
        if (message == null) {
            alert('There is no message in the queue');
            return;
        }
        let dialogRef = this.dialog.open(_queue_message_modal_queue_message_modal_component__WEBPACK_IMPORTED_MODULE_5__.QueueMessageModalComponent, { width: '920px' });
        let component = dialogRef.componentInstance;
        try {
            message.messageObj = JSON.parse(message.message);
        }
        catch (_a) { }
        component.message = message;
    }
    clear() {
        let dialogRef = this.dialog.open(_layout_portal_layout_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmModalComponent, { width: '600px' });
        let component = dialogRef.componentInstance;
        component.message = 'All messages in queue will be deleted <b class="imp">permanently.</b>';
        component.onclosed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(value => {
            if (value)
                this.queueService.clear(this.queueName)
                    .then(r => this.load());
        });
    }
    move() {
        let dialogRef = this.dialog.open(_messsage_move_modal_messsage_move_modal_component__WEBPACK_IMPORTED_MODULE_4__.MesssageMoveModalComponent, { width: '600px' });
        let component = dialogRef.componentInstance;
        component.messageCount = 321;
        component.onconfirmed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(target => {
            if (target == null || target.length < 1)
                return;
            target = target.trim();
            this.queueService.move(this.queueName, target)
                .then(r => this.load());
        });
    }
    remove() {
        let dialogRef = this.dialog.open(_layout_portal_layout_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmModalComponent, { width: '600px' });
        let component = dialogRef.componentInstance;
        component.message = 'You are about to delete your queue. The queue and all messages in it will be deleted <b class="imp">permanently.</b>';
        component.onclosed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(value => {
            if (value)
                this.queueService.delete(this.queueName)
                    .then(r => {
                    this.router.navigateByUrl('/queues');
                });
        });
    }
    setStatus(status) {
        let dialogRef = this.dialog.open(_layout_portal_layout_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmModalComponent, { width: '600px' });
        let component = dialogRef.componentInstance;
        component.message = 'You are about to change your queue status to <b class="imp">' + status + '.</b> That operation might affect your producers and consumers.';
        component.onclosed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(value => {
            if (value)
                this.queueService.status(this.queueName, status)
                    .then(r => this.load());
        });
    }
    changeOption(title, name, value) {
        let dialogRef = this.dialog.open(_queue_option_modal_queue_option_modal_component__WEBPACK_IMPORTED_MODULE_7__.QueueOptionModalComponent, { width: '500px' });
        let component = dialogRef.componentInstance;
        component.model.title = title;
        component.model.property = name;
        component.model.value = value;
        component.onconfirmed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(value => {
            if (value.confirmed) {
                this.queueService.setOption(this.queueName, value.property, value.value).then(() => this.load());
            }
        });
    }
    resetStats() {
        let dialogRef = this.dialog.open(_layout_portal_layout_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmModalComponent, { width: '450px' });
        let component = dialogRef.componentInstance;
        component.message = 'Queue statistics will be reset. Are you sure?';
        component.onclosed
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.take)(1))
            .subscribe(value => {
            if (value) {
                this.queueService
                    .resetStats(this.queue.info.name)
                    .then(() => {
                    this.load();
                });
            }
        });
    }
}
QueueDetailComponent.ɵfac = function QueueDetailComponent_Factory(t) { return new (t || QueueDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_chart_service__WEBPACK_IMPORTED_MODULE_8__.ChartService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_services_websocket_service__WEBPACK_IMPORTED_MODULE_9__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_queue_services_queue_service__WEBPACK_IMPORTED_MODULE_10__.QueueService)); };
QueueDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: QueueDetailComponent, selectors: [["queue-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 4, consts: [[1, "centered-body", 3, "hidden"], [1, "vertical-content"], [1, "vertical-col"], [1, "portlet"], [1, "portlet-title"], [1, "portlet-body", 2, "height", "330px"], ["id", "queue-delivery-chart"], [1, "portlet-body"], ["id", "queue-store-chart"], ["class", "portlet", 4, "ngIf"], [4, "ngIf"], ["class", "centered-body", 4, "ngIf"], [2, "height", "80px"], [3, "click"], [1, "portlet-body", 2, "min-height", "377px"], [1, "key-value-table"], [1, "kvt-row"], [1, "kvt-key"], [1, "kvt-value"], ["class", "kvt-value", 4, "ngIf"], [1, "queue-panel"], [1, "operation-panel"], [1, "operation-button", "btn-green", 3, "click"], [1, "operation-button", "btn-yellow", 3, "click"], [1, "operation-button", "btn-cyan", 3, "click"], [1, "operation-button", "btn-purple", 3, "click"], [1, "operation-button", "btn-orange", 3, "click"], [1, "operation-button", "btn-red", 3, "click"], [1, "status-panel"], [1, "status-button", "btn-orange", 3, "click"], [1, "status-button", "btn-green", 3, "click"], [1, "status-button", "btn-purple", 3, "click"], [1, "status-button", "btn-cyan", 3, "click"], [1, "portlet-body", 2, "height", "790px"], [1, "kvt-row", "kvt-seperator"], [1, "change-option", 3, "click"], [1, "centered-body"], [1, "portlet", "full"], [1, "portlet-body", "table", "table-small"], [1, "thead"], [1, "th", "fx14"], [1, "th", "fx22"], [1, "th", "fx10"], [1, "tbody"], ["class", "trow", 4, "ngFor", "ngForOf"], [1, "trow"], [1, "td", "fx14"], [1, "td", "fx22"], [3, "routerLink"], [1, "td", "fx10"], ["class", "td fx10", 4, "ngIf"]], template: function QueueDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Queue Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 3)(9, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Queue Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "canvas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, QueueDetailComponent_div_13_Template, 42, 12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, QueueDetailComponent_div_15_Template, 180, 31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, QueueDetailComponent_div_16_Template, 25, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.queue == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.queue);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.queue);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.queue && ctx.queue.consumers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _layout_pipes_unlimited_pipe__WEBPACK_IMPORTED_MODULE_11__.UnlimitedPipe, _layout_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_12__.FilesizePipe], styles: [".vertical-col[_ngcontent-%COMP%]   .portlet[_ngcontent-%COMP%] {\r\n  margin-bottom: 18px;\r\n}\r\n\r\n.queue-panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  justify-items: stretch;\r\n  justify-content: stretch;\r\n}\r\n\r\n.operation-panel[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  align-content: flex-start;\r\n  align-items: flex-start;\r\n  justify-items: flex-start;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.operation-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  flex: 1 1 50%;\r\n}\r\n\r\n.operation-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0px 6px 14px 0px;\r\n  padding: 0px 4px;\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  color: #bbb;\r\n}\r\n\r\n.operation-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n\r\n.operation-button[_ngcontent-%COMP%] {\r\n  margin: 6px 4px 6px 4px;\r\n  color: #f0f0f0;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-radius: 2px;\r\n  padding: 10px 14px;\r\n  font-weight: 600;\r\n  background-color: transparent;\r\n}\r\n\r\n.status-panel[_ngcontent-%COMP%] {\r\n  flex: 0 2 150px;\r\n  flex-basis: 150px;\r\n  min-width: 150px;\r\n  color: #ddd;\r\n}\r\n\r\n.status-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  padding: 5px 0px;\r\n}\r\n\r\n.status-panel[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-style: normal;\r\n  font-size: 12px;\r\n}\r\n\r\n.status-panel[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 500;\r\n  color: #efdf20;\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n}\r\n\r\n.status-button[_ngcontent-%COMP%] {\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-radius: 2px;\r\n  color: #fff;\r\n  width: 145px;\r\n  box-sizing: border-box;\r\n  padding: 8px 0px;\r\n  font-weight: 600;\r\n  background-color: transparent;\r\n}\r\n\r\n.change-option[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  color: #109030;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  padding: 2px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.change-option[_ngcontent-%COMP%]:hover {\r\n  color: #10f070;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJxdWV1ZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbC1jb2wgLnBvcnRsZXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5xdWV1ZS1wYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5vcGVyYXRpb24tcGFuZWwge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm9wZXJhdGlvbi1wYW5lbCBkaXYge1xyXG4gIGZsZXg6IDEgMSA1MCU7XHJcbn1cclxuXHJcbi5vcGVyYXRpb24tcGFuZWwgZGl2IHAge1xyXG4gIG1hcmdpbjogMHB4IDZweCAxNHB4IDBweDtcclxuICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2JiYjtcclxufVxyXG4ub3BlcmF0aW9uLXBhbmVsIGRpdiBwIGIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm9wZXJhdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNnB4IDRweCA2cHggNHB4O1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3RhdHVzLXBhbmVsIHtcclxuICBmbGV4OiAwIDIgMTUwcHg7XHJcbiAgZmxleC1iYXNpczogMTUwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnN0YXR1cy1wYW5lbCBkaXYge1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGFuZWwgZW0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGFuZWwgc3Ryb25nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjZWZkZjIwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuLnN0YXR1cy1idXR0b24ge1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxNDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDhweCAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNoYW5nZS1vcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMTA5MDMwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jaGFuZ2Utb3B0aW9uOmhvdmVyIHtcclxuICBjb2xvcjogIzEwZjA3MDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3451:
/*!*****************************************************!*\
  !*** ./src/app/queue/detail/queue-detail.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueModule": () => (/* binding */ QueueModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout/pipes/pipes.module */ 1887);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _queue_message_modal_queue_message_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queue-message-modal/queue-message-modal.component */ 2105);
/* harmony import */ var _messsage_move_modal_messsage_move_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messsage-move-modal/messsage-move-modal.component */ 5510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _queue_push_modal_queue_push_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue-push-modal/queue-push-modal.component */ 8264);
/* harmony import */ var _queue_option_modal_queue_option_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queue-option-modal/queue-option-modal.component */ 2790);
/* harmony import */ var _queue_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue-detail.component */ 5032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












class QueueModule {
}
QueueModule.ɵfac = function QueueModule_Factory(t) { return new (t || QueueModule)(); };
QueueModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: QueueModule });
QueueModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{ path: ':name', component: _queue_detail_component__WEBPACK_IMPORTED_MODULE_5__.QueueDetailComponent }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](QueueModule, { declarations: [_queue_detail_component__WEBPACK_IMPORTED_MODULE_5__.QueueDetailComponent,
        _queue_message_modal_queue_message_modal_component__WEBPACK_IMPORTED_MODULE_1__.QueueMessageModalComponent,
        _messsage_move_modal_messsage_move_modal_component__WEBPACK_IMPORTED_MODULE_2__.MesssageMoveModalComponent,
        _queue_push_modal_queue_push_modal_component__WEBPACK_IMPORTED_MODULE_3__.QueuePushModalComponent,
        _queue_option_modal_queue_option_modal_component__WEBPACK_IMPORTED_MODULE_4__.QueueOptionModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 2105:
/*!***********************************************************************************!*\
  !*** ./src/app/queue/detail/queue-message-modal/queue-message-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueMessageModalComponent": () => (/* binding */ QueueMessageModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _layout_pipes_prett_print_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layout/pipes/prett-print.pipe */ 9281);




function QueueMessageModalComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const h_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r5.value);
} }
function QueueMessageModalComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QueueMessageModalComponent_div_52_div_1_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.message.headers);
} }
function QueueMessageModalComponent_p_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The message has no headers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QueueMessageModalComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.message.message);
} }
function QueueMessageModalComponent_pre_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pre", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "prettyprint");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r3.message.messageObj), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class QueueMessageModalComponent {
    constructor() {
        this.consumed = false;
        this.isJson = false;
    }
    ngOnInit() {
    }
    setJson(value) {
        this.isJson = value;
    }
}
QueueMessageModalComponent.ɵfac = function QueueMessageModalComponent_Factory(t) { return new (t || QueueMessageModalComponent)(); };
QueueMessageModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QueueMessageModalComponent, selectors: [["app-queue-message-modal"]], decls: 66, vars: 22, consts: [["mat-dialog-title", "", 1, "title"], [1, "content"], [1, "queue-message"], [1, "message-props"], [1, "key-value-table"], [1, "kvt-row"], [1, "kvt-key-narrow"], [1, "kvt-value"], [1, "message-content"], [1, "message-headers"], ["class", "key-value-table", 4, "ngIf"], [4, "ngIf"], [1, "message-content-title"], [3, "click"], ["class", "string-content", 4, "ngIf"], ["class", "string-content", 3, "innerHTML", 4, "ngIf"], [1, "buttons"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-grey"], ["class", "kvt-row", 4, "ngFor", "ngForOf"], [1, "kvt-key"], [1, "string-content"], [1, "string-content", 3, "innerHTML"]], template: function QueueMessageModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Queue Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5)(17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "High Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5)(22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5)(28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5)(34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Persistently Saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5)(39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Send Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5)(44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Delivery Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8)(49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, QueueMessageModalComponent_div_52_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, QueueMessageModalComponent_p_53_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 12)(55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Message Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMessageModalComponent_Template_span_click_57_listener() { return ctx.setJson(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "String");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueMessageModalComponent_Template_span_click_59_listener() { return ctx.setJson(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, QueueMessageModalComponent_div_61_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, QueueMessageModalComponent_pre_62_Template, 2, 3, "pre", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-dialog-actions", 16)(64, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message.source);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](26, 16, ctx.message.createdDate * 1000, "yyyy-MM-dd HH:mm:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message.deadline == 0 ? "No" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 19, ctx.message.deadline * 1000, "yyyy-MM-dd HH:mm:ss"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message.isSaved);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message.sendCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message.deliveryCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.headers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.headers.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", !ctx.isJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.isJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isJson);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _layout_pipes_prett_print_pipe__WEBPACK_IMPORTED_MODULE_0__.PrettyPrintPipe], styles: [".title[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0px 25px 10px 25px;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #d2d2d2;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\r\n.queue-message[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n}\r\n.message-props[_ngcontent-%COMP%] {\r\n  flex: 1 1 440px;\r\n}\r\n.message-content[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  border-left: 1px solid #333;\r\n  padding-left: 20px;\r\n}\r\n.message-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #ccc;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n.message-headers[_ngcontent-%COMP%] {\r\n  padding: 5px 0px 10px 0px;\r\n}\r\n.message-headers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  margin: 10px 0px;\r\n  padding: 0px;\r\n  color: #aaa;\r\n}\r\n.message-content-title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-content: stretch;\r\n  align-items: stretch;\r\n  justify-items: stretch;\r\n  justify-content: stretch;\r\n  height: 28px;\r\n  width: 440px;\r\n}\r\n.message-content-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  flex: 1 0 auto;\r\n}\r\n.message-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  flex: 0 1 auto;\r\n  padding: 4px;\r\n  margin-left: 10px;\r\n  color: #aaa;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  margin-top: -4px;\r\n}\r\n.message-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: #eee;\r\n}\r\n.message-content-title[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\r\n  color: #ffaa22;\r\n}\r\n.string-content[_ngcontent-%COMP%] {\r\n  width: 440px;\r\n  clear: both;\r\n  border: 1px solid #333;\r\n  border-radius: 2px;\r\n  padding: 10px;\r\n  margin: 0px;\r\n  background-color: #000;\r\n  height: 222px;\r\n  box-sizing: border-box;\r\n  color: #eee;\r\n  line-height: 22px;\r\n  font-size: 13px;\r\n  font-family: \"Ubuntu Mono\", monospace;\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLW1lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGNBQWM7QUFDaEIiLCJmaWxlIjoicXVldWUtbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4IDI1cHggMTBweCAyNXB4O1xyXG59XHJcbi5jb250ZW50IHAge1xyXG4gIGNvbG9yOiAjZDJkMmQyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnF1ZXVlLW1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4ubWVzc2FnZS1wcm9wcyB7XHJcbiAgZmxleDogMSAxIDQ0MHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IGg0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2NjYztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubWVzc2FnZS1oZWFkZXJzIHtcclxuICBwYWRkaW5nOiA1cHggMHB4IDEwcHggMHB4O1xyXG59XHJcbi5tZXNzYWdlLWhlYWRlcnMgcCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcbi5tZXNzYWdlLWNvbnRlbnQtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogNDQwcHg7XHJcbn1cclxuLm1lc3NhZ2UtY29udGVudC10aXRsZSBoNCB7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuLm1lc3NhZ2UtY29udGVudC10aXRsZSBzcGFuIHtcclxuICBmbGV4OiAwIDEgYXV0bztcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcbi5tZXNzYWdlLWNvbnRlbnQtdGl0bGUgc3Bhbjpob3ZlciB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuLm1lc3NhZ2UtY29udGVudC10aXRsZSBzcGFuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmFhMjI7XHJcbn1cclxuLnN0cmluZy1jb250ZW50IHtcclxuICB3aWR0aDogNDQwcHg7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGhlaWdodDogMjIycHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogI2VlZTtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2790:
/*!*********************************************************************************!*\
  !*** ./src/app/queue/detail/queue-option-modal/queue-option-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueOptionModalComponent": () => (/* binding */ QueueOptionModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





function QueueOptionModalComponent_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QueueOptionModalComponent_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.model.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.model.value);
} }
function QueueOptionModalComponent_select_7_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", i_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5.text);
} }
function QueueOptionModalComponent_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QueueOptionModalComponent_select_7_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.model.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QueueOptionModalComponent_select_7_option_1_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.model.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.autoDestroyItems);
} }
class QueueOptionModalComponent {
    constructor() {
        this._onconfirmed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.model = { confirmed: false, title: '', property: '', value: null };
        this._confirmed = false;
        this.autoDestroyItems = [
            { value: 'Disabled', text: 'Queue stays forever. It\'s removed only manually.' },
            { value: 'NoMessages', text: 'Queue is destroyed if empty' },
            { value: 'NoConsumers', text: 'Queue is destroyed if there are no consumers (even not empty)' },
            { value: 'Empty', text: 'Queue is destroyed when it\'s empty and there are no consumers' }
        ];
    }
    get onconfirmed() { return this._onconfirmed; }
    ngOnInit() {
    }
    confirm() {
        this._confirmed = true;
        this.model.confirmed = true;
        this._onconfirmed.next(this.model);
    }
    ngOnDestroy() {
        if (!this._confirmed) {
            this.model.confirmed = false;
            this._onconfirmed.next(this.model);
        }
    }
}
QueueOptionModalComponent.ɵfac = function QueueOptionModalComponent_Factory(t) { return new (t || QueueOptionModalComponent)(); };
QueueOptionModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QueueOptionModalComponent, selectors: [["app-queue-option-modal"]], decls: 13, vars: 3, consts: [["mat-dialog-title", "", 1, "title"], [1, "content"], [1, "form-item"], ["placeholder", "Option Value", "class", "target-text", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "jockey-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "buttons"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-green", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-grey"], ["placeholder", "Option Value", "type", "text", 1, "target-text", 3, "ngModel", "ngModelChange"], [1, "jockey-select", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function QueueOptionModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Queue Option Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QueueOptionModalComponent_input_6_Template, 1, 1, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QueueOptionModalComponent_select_7_Template, 2, 2, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QueueOptionModalComponent_Template_button_click_9_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.property != "autoDestroy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.property == "autoDestroy");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: [".title[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0px 25px 10px 25px;\r\n  display: block;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #d2d2d2;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\r\n.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  padding: 20px 0px;\r\n}\r\n.target-text[_ngcontent-%COMP%] {\r\n  border: 1px solid #555;\r\n  background-color: #000;\r\n  color: #eee;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  padding: 8px;\r\n  width: 320px;\r\n}\r\n.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active {\r\n  border-color: #10a040;\r\n}\r\n.form-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 auto;\r\n  align-content: stretch;\r\n  align-items: stretch;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n  padding: 8px 0px;\r\n}\r\n.form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  color: #bbb;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  padding: 4px 0px;\r\n  font-weight: 500;\r\n}\r\n.form-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  width: 432px;\r\n}\r\n.form-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n  width: 450px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLW9wdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJxdWV1ZS1vcHRpb24tbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4IDEwcHggMjVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29udGVudCBwIHtcclxuICBjb2xvcjogI2QyZDJkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmNvbnRlbnQgZGl2IHtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG5cclxuLnRhcmdldC10ZXh0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHdpZHRoOiAzMjBweDtcclxufVxyXG4udGFyZ2V0LXRleHQ6Zm9jdXMsXHJcbi50YXJnZXQtdGV4dDphY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzEwYTA0MDtcclxufVxyXG5cclxuLmZvcm0taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgcGFkZGluZzogOHB4IDBweDtcclxufVxyXG5cclxuLmZvcm0taXRlbSBsYWJlbCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgY29sb3I6ICNiYmI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZzogNHB4IDBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5mb3JtLWl0ZW0gaW5wdXQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHdpZHRoOiA0MzJweDtcclxufVxyXG4uZm9ybS1pdGVtIHNlbGVjdCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8264:
/*!*****************************************************************************!*\
  !*** ./src/app/queue/detail/queue-push-modal/queue-push-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueuePushModalComponent": () => (/* binding */ QueuePushModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_app_queue_models_queue_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/queue/models/queue-message */ 756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






const _c0 = ["headerKeyInput"];
const _c1 = ["headerValueInput"];
function QueuePushModalComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 27)(6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueuePushModalComponent_tr_28_Template_span_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const h_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.removeHeader(h_r3.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const h_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r3.value);
} }
class QueuePushModalComponent {
    constructor() {
        this._onconfirmed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._confirmed = false;
        this.message = new src_app_queue_models_queue_message__WEBPACK_IMPORTED_MODULE_0__.QueuePushMessage();
        this.message.id = this.generateUUID();
        this.message.headers = [];
        this.message.contentType = 0;
        this.message.priority = false;
        this.message.message = "";
    }
    get onconfirmed() { return this._onconfirmed; }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (!this._confirmed)
            this._onconfirmed.next(null);
    }
    headerKeyUp(key, event) {
        if (event.key == 'Enter') {
            if (key)
                this.headerValueInput.nativeElement.focus();
            else
                this.addHeader();
        }
    }
    removeHeader(key) {
        let index = this.message.headers.findIndex(x => x.name == key);
        if (index < 0)
            return;
        this.message.headers.splice(index, 1);
    }
    addHeader() {
        let key = this.addingHeaderKey.trim();
        let value = this.addingHeaderValue.trim();
        if (key.length < 1 || value.length < 1)
            return;
        this.message.headers.push({ name: key, value: value });
        this.addingHeaderKey = '';
        this.addingHeaderValue = '';
        this.headerKeyInput.nativeElement.focus();
    }
    push() {
        this._confirmed = true;
        this._onconfirmed.next(this.message);
    }
    generateUUID() {
        var d = new Date().getTime(); //Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16; //random number between 0 and 16
            if (d > 0) { //Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            }
            else { //Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}
QueuePushModalComponent.ɵfac = function QueuePushModalComponent_Factory(t) { return new (t || QueuePushModalComponent)(); };
QueuePushModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QueuePushModalComponent, selectors: [["app-queue-push-modal"]], viewQuery: function QueuePushModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerKeyInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerValueInput = _t.first);
    } }, decls: 47, vars: 7, consts: [["mat-dialog-title", "", 1, "title"], [1, "content"], [1, "queue-message"], [1, "key-value-table"], [1, "kvt-row"], [1, "kvt-key-narrow"], [1, "kvt-value"], ["type", "text", 1, "jockey-text", 2, "width", "280px", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "max", "65535", 1, "jockey-text", 2, "width", "120px", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 1, "jockey-text", 3, "ngModel", "ngModelChange"], [1, "message-headers"], [1, "header-scroll", "scroll"], [1, "message-header-table"], [4, "ngFor", "ngForOf"], [1, "header-row"], [1, "header-input"], ["placeholder", "Key", "type", "text", 1, "jockey-text", 3, "ngModel", "keyup", "ngModelChange"], ["headerKeyInput", ""], [1, "header-seperator"], ["placeholder", "Value", "type", "text", 1, "jockey-text", 3, "ngModel", "keyup", "ngModelChange"], ["headerValueInput", ""], [1, "jockey-text", "scroll", 3, "ngModel", "ngModelChange"], [1, "buttons"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-green", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "modal-btn", "btn-grey"], [1, "header-key"], [1, "header-value"], [1, "header-action"], [3, "click"]], template: function QueuePushModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Push New Queue Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Message Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueuePushModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.message.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Content Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueuePushModalComponent_Template_input_ngModelChange_16_listener($event) { return ctx.message.contentType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4)(18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "High Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueuePushModalComponent_Template_input_ngModelChange_21_listener($event) { return ctx.message.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10)(26, "div", 11)(27, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, QueuePushModalComponent_tr_28_Template, 8, 2, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function QueuePushModalComponent_Template_input_keyup_31_listener($event) { return ctx.headerKeyUp(true, $event); })("ngModelChange", function QueuePushModalComponent_Template_input_ngModelChange_31_listener($event) { return ctx.addingHeaderKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15)(36, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function QueuePushModalComponent_Template_input_keyup_36_listener($event) { return ctx.headerKeyUp(false, $event); })("ngModelChange", function QueuePushModalComponent_Template_input_ngModelChange_36_listener($event) { return ctx.addingHeaderValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Message Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueuePushModalComponent_Template_textarea_ngModelChange_41_listener($event) { return ctx.message.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-dialog-actions", 22)(43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueuePushModalComponent_Template_button_click_43_listener() { return ctx.push(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Push Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message.contentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.message.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addingHeaderKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.addingHeaderValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message.message);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose], styles: [".title[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 0px 25px 10px 25px;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #d2d2d2;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n}\r\n.queue-message[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n}\r\n.queue-message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #ccc;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  margin: 10px 0px;\r\n  padding: 0px;\r\n}\r\n.message-headers[_ngcontent-%COMP%] {\r\n  padding: 0px 0px 10px 0px;\r\n}\r\n.header-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n.message-header-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.header-key[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  text-align: right;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n.header-value[_ngcontent-%COMP%] {\r\n  color: #eee;\r\n  text-align: left;\r\n  padding: 10px;\r\n  font-size: 14px;\r\n}\r\n.header-action[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  padding: 4px 0px 4px 4px;\r\n  flex: 0 2 50px;\r\n}\r\n.header-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 500;\r\n  padding: 6px;\r\n  color: #ff2020;\r\n  cursor: pointer;\r\n}\r\n.header-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: #ff9900;\r\n}\r\n.header-scroll[_ngcontent-%COMP%] {\r\n  max-height: 125px;\r\n  overflow-y: auto;\r\n  margin-right: 8px;\r\n  margin-bottom: 12px;\r\n}\r\n.header-seperator[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  font-size: 12px;\r\n  flex: 0 1 15px;\r\n  box-sizing: border-box;\r\n  padding: 5px 0px;\r\n  line-height: 32px;\r\n  text-align: center;\r\n}\r\n.header-input[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  flex: 1 1 auto;\r\n  box-sizing: border-box;\r\n  padding: 5px;\r\n}\r\n.header-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n}\r\n.queue-message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 484px;\r\n  height: 90px;\r\n  resize: none;\r\n  line-height: 22px;\r\n  font-size: 13px;\r\n  font-family: \"Ubuntu Mono\", monospace;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXVlLXB1c2gtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6InF1ZXVlLXB1c2gtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDBweCAyNXB4IDEwcHggMjVweDtcclxufVxyXG4uY29udGVudCBwIHtcclxuICBjb2xvcjogI2QyZDJkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5xdWV1ZS1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLnF1ZXVlLW1lc3NhZ2UgaDQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLm1lc3NhZ2UtaGVhZGVycyB7XHJcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcclxufVxyXG4uaGVhZGVyLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm1lc3NhZ2UtaGVhZGVyLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGVhZGVyLWtleSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmhlYWRlci12YWx1ZSB7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaGVhZGVyLWFjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogNHB4IDBweCA0cHggNHB4O1xyXG4gIGZsZXg6IDAgMiA1MHB4O1xyXG59XHJcbi5oZWFkZXItYWN0aW9uIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBjb2xvcjogI2ZmMjAyMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmhlYWRlci1hY3Rpb24gc3Bhbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZjk5MDA7XHJcbn1cclxuLmhlYWRlci1zY3JvbGwge1xyXG4gIG1heC1oZWlnaHQ6IDEyNXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmhlYWRlci1zZXBlcmF0b3Ige1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmbGV4OiAwIDEgMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkZXItaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uaGVhZGVyLWlucHV0IGlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucXVldWUtbWVzc2FnZSB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDQ4NHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dSBNb25vXCIsIG1vbm9zcGFjZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 756:
/*!***********************************************!*\
  !*** ./src/app/queue/models/queue-message.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueuePushMessage": () => (/* binding */ QueuePushMessage)
/* harmony export */ });
class QueuePushMessage {
}


/***/ })

}]);
//# sourceMappingURL=src_app_queue_detail_queue-detail_module_ts.js.map