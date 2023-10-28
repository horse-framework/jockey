"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 7942);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/base-component */ 2962);
/* harmony import */ var src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/dashboard.service */ 5037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _layout_pipes_timespan_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/pipes/timespan.pipe */ 7966);
/* harmony import */ var src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/websocket.service */ 5608);
/* harmony import */ var src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/lib/socket-models */ 8823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_services_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/chart.service */ 379);
/* harmony import */ var _queue_services_queue_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queue/services/queue.service */ 3349);
/* harmony import */ var src_services_horse_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/horse-router.service */ 1632);
/* harmony import */ var _channels_services_channel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../channels/services/channel.service */ 1208);
/* harmony import */ var src_services_client_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/client.service */ 7334);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _layout_pipes_unlimited_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/pipes/unlimited.pipe */ 8392);
/* harmony import */ var _layout_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/pipes/filesize.pipe */ 3369);



















function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 19)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "That node is a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " Node. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " to open main node jockey panel.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.dashboard.nodeState);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("href", ctx_r0.dashboard.mainNodeHost, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Queue Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Stored Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 23)(13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Stored Priority Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 23)(18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Timed out Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 23)(23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Currently Processing Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 23)(28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Putting Back Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.dashboard.queueCount);
} }
function DashboardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Produced");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Acknowledged");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 23)(13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Negative Acknowledged");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 23)(18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Pending for Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 23)(23, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Acknowledge Timed out");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "div", 23)(28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Delivery Errors");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} }
function DashboardComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 26)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Channel Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Published Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 23)(13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Received Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r3.dashboard.channelCount);
} }
function DashboardComponent_div_32_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const host_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](host_r13);
} }
function DashboardComponent_div_32_em_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r8.dashboard.queueOptions.ackTimeout, " ms timeout ");
} }
function DashboardComponent_div_32_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Timeout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_32_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r10.dashboard.queueOptions.msgTimeout, " milliseconds ");
} }
function DashboardComponent_div_32_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "No Delay");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_32_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r12.dashboard.queueOptions.delayBetweenMsgs, " milliseconds ");
} }
function DashboardComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 27)(1, "div", 26)(2, "div", 22)(3, "div", 23)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Service Lifetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 23)(9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Hostname");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, DashboardComponent_div_32_span_12_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 23)(14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Online Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 23)(19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "All defined remote nodes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Total Nodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 23)(26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Connected nodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Online Nodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 23)(33, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Channel Subscribers Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](37, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div", 26)(39, "div", 22)(40, "div", 23)(41, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "Max Queue Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](45, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 23)(47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "Max Router Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](51, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "div", 23)(53, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "Auto Channel Creation");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 23)(58, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, "Auto Queue Creation");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "div", 23)(63, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64, "Auto Queue Destroy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "div", 23)(68, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](69, "Queue Subscribers Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](72, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "div", 26)(74, "div", 22)(75, "div", 23)(76, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "Default Queue Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "div", 23)(81, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Queue Acknowledge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](85, DashboardComponent_div_32_em_85_Template, 2, 1, "em", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 23)(87, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](88, "Queue Message Timeout");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](89, DashboardComponent_div_32_div_89_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](90, DashboardComponent_div_32_div_90_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "div", 23)(92, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93, "Message Limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](96, "unlimited");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](99, "filesize");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](100, "div", 23)(101, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](102, "Delay Between Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](103, DashboardComponent_div_32_div_103_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](104, DashboardComponent_div_32_div_104_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.lifetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r4.dashboard.server.hosts);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.server.onlineClients);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.server.totalNodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.server.connectedNodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](37, 21, ctx_r4.dashboard.serverOptions.channelSubscriberLimit));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](45, 23, ctx_r4.dashboard.serverOptions.queueLimit));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](51, 25, ctx_r4.dashboard.serverOptions.routerLimit));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.serverOptions.autoChannelCreation);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.queueOptions.autoQueueCreation);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.queueOptions.autoDestroy);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](72, 27, ctx_r4.dashboard.queueOptions.clientLimit));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.dashboard.queueOptions.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.dashboard.queueOptions.ack, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.dashboard.queueOptions.ackTimeout > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.dashboard.queueOptions.msgTimeout == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.dashboard.queueOptions.msgTimeout > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](96, 29, ctx_r4.dashboard.queueOptions.msgLimit), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("Size Limit: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](99, 31, ctx_r4.dashboard.queueOptions.msgSizeLimit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.dashboard.queueOptions.delayBetweenMsgs == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r4.dashboard.queueOptions.delayBetweenMsgs > 0);
} }
function DashboardComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Published Router Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Delivered Router Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 23)(13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Not Received Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} }
function DashboardComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Sent Direct Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Delivered Direct Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 23)(13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Direct Responses");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "***");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} }
class DashboardComponent extends src_lib_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor() {
        super(...arguments);
        this.deliveryChart = null;
        this.msgChart = null;
        this.storeChart = null;
        this.routerChart = null;
        this.channelChart = null;
        this.dashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(src_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService);
        this.socket = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(src_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__.WebsocketService);
        this.chartService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(src_services_chart_service__WEBPACK_IMPORTED_MODULE_6__.ChartService);
        this.queueService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(_queue_services_queue_service__WEBPACK_IMPORTED_MODULE_7__.QueueService);
        this.routerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(src_services_horse_router_service__WEBPACK_IMPORTED_MODULE_8__.HorseRouterService);
        this.channelService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(_channels_services_channel_service__WEBPACK_IMPORTED_MODULE_9__.ChannelService);
        this.clientService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.inject)(src_services_client_service__WEBPACK_IMPORTED_MODULE_10__.ClientService);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            yield this.load();
            this.on((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.interval)(5000)).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                this.dashboardService.load().then(d => {
                    this.dashboard = d;
                });
            }));
            this.subscribeWebsockets();
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.socket.send(src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.Dashboard, { join: false });
    }
    subscribeWebsockets() {
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.QueueGraph && x.payload.n == '*'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this.deliveryChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.deliveryChart, model));
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.QueueStoreGraph && x.payload.n == '*'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this.storeChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.storeChart, model));
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.DirectGraph && x.payload.n == '*'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this.msgChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.msgChart, model));
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.RouterGraph && x.payload.n == '*'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this.routerChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.routerChart, model));
        this.on(this.socket.onmessage)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(x => x.type == src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.ChannelGraph && x.payload.n == '*'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this.channelChart != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(x => x.payload))
            .subscribe((model) => this.chartService.updateChart(this.channelChart, model));
        this.socket.send(src_lib_socket_models__WEBPACK_IMPORTED_MODULE_5__.SocketModels.Dashboard, { join: true });
    }
    load() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.dashboard = yield this.dashboardService.load();
            yield this.loadCharts();
            let pipe = new _layout_pipes_timespan_pipe__WEBPACK_IMPORTED_MODULE_3__.TimespanPipe();
            this.on((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.interval)(1000)).subscribe(() => {
                if (!this.dashboard)
                    return;
                let now = new Date().getTime() / 1000;
                this.lifetime = pipe.transform(now, this.dashboard.server.startedDate);
            });
        });
    }
    loadCharts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let queue = yield this.queueService.getGraph(null, '1m');
            let channel = yield this.channelService.getGraph(null, '1m');
            let router = yield this.routerService.getGraph(null, '1m');
            let client = yield this.clientService.getGraph(null, '1m');
            if (this.deliveryChart)
                this.deliveryChart.destroy();
            this.deliveryChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('delivery-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getDeliveryChartData(queue.stream),
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
            this.storeChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('store-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getStoreChartData(queue.store),
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
            if (this.msgChart)
                this.msgChart.destroy();
            this.msgChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('msg-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getMessageChartData(client),
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
            if (this.routerChart)
                this.routerChart.destroy();
            this.routerChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('router-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getRouterChartData(router),
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
            if (this.channelChart)
                this.channelChart.destroy();
            this.channelChart = new (chart_js__WEBPACK_IMPORTED_MODULE_0___default())(document.getElementById('channel-chart'), {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getChannelChartData(channel),
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
    getDeliveryChartData(content) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Produced',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Ack',
                    borderColor: '#12bf4a',
                    data: content.d.map(x => x.d),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Neg. Ack',
                    borderColor: '#c042ef',
                    data: content.d.map(x => x.rs),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Unack',
                    borderColor: '#eec236',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Error',
                    borderColor: '#ff3333',
                    data: content.d.map(x => x.e),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }
            ]
        };
    }
    getStoreChartData(content) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Msgs',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'High Prio Msgs',
                    borderColor: '#ff9911',
                    data: content.d.map(x => x.d),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Pending for Ack',
                    borderColor: '#10a0a0',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Processing',
                    borderColor: '#f02020',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }
            ]
        };
    }
    getMessageChartData(content) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Direct Sent',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Received',
                    borderColor: '#f0f010',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Respond',
                    borderColor: '#10cf70',
                    data: content.d.map(x => x.rs),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct No Receiver',
                    borderColor: '#9a2ef0',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }
            ]
        };
    }
    getRouterChartData(content) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Router Publish',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router Received',
                    borderColor: '#10c070',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router No Receiver',
                    borderColor: '#f06010',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }
            ]
        };
    }
    getChannelChartData(content) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Published',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Received',
                    borderColor: '#10c070',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }
            ]
        };
    }
}
DashboardComponent.ɵfac = /*@__PURE__*/ function () { let ɵDashboardComponent_BaseFactory; return function DashboardComponent_Factory(t) { return (ɵDashboardComponent_BaseFactory || (ɵDashboardComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetInheritedFactory"](DashboardComponent)))(t || DashboardComponent); }; }();
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 50, vars: 8, consts: [["class", "warning-bar", 4, "ngIf"], [1, "dashboard", 3, "hidden"], [1, "dashboard-row"], [1, "dashboard-portlet"], [1, "portlet"], [1, "portlet-title"], [1, "portlet-body"], [1, "portlet-canvas"], ["id", "store-chart"], ["class", "portlet-table canvas-info", 4, "ngIf"], ["id", "delivery-chart"], [1, "dashboard-portlet", "dp-40"], [1, "portlet-canvas", 2, "min-height", "255px"], ["id", "channel-chart"], ["class", "portlet-table", 4, "ngIf"], [1, "dashboard-portlet", "dp-60"], ["class", "portlet-body", "style", "min-height: 275px;", 4, "ngIf"], ["id", "router-chart"], ["id", "msg-chart"], [1, "warning-bar"], [3, "href"], [1, "portlet-table", "canvas-info"], [1, "key-value-table"], [1, "kvt-row"], [1, "kvt-key"], [1, "kvt-value"], [1, "portlet-table"], [1, "portlet-body", 2, "min-height", "275px"], [4, "ngFor", "ngForOf"], [1, "kvt-info"], [4, "ngIf"], ["class", "kvt-value", 4, "ngIf"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 9, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Stored Queue Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "canvas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 32, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Queue Messages and Deliveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 6)(16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "canvas", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, DashboardComponent_div_18_Template, 32, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 2)(20, "div", 11)(21, "div", 4)(22, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Channel Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 6)(25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "canvas", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, DashboardComponent_div_27_Template, 17, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 15)(29, "div", 4)(30, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Server Information and Default Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, DashboardComponent_div_32_Template, 105, 33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 2)(34, "div", 3)(35, "div", 4)(36, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Router Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div", 6)(39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "canvas", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, DashboardComponent_div_41_Template, 17, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 3)(43, "div", 4)(44, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "Direct Messages and Responses");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 6)(47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](48, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](49, DashboardComponent_div_49_Template, 17, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard && (ctx.dashboard.nodeState == "Replica" || ctx.dashboard.nodeState == "Successor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", ctx.dashboard == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dashboard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf], pipes: [_layout_pipes_unlimited_pipe__WEBPACK_IMPORTED_MODULE_11__.UnlimitedPipe, _layout_pipes_filesize_pipe__WEBPACK_IMPORTED_MODULE_12__.FilesizePipe], styles: [".warning-bar[_ngcontent-%COMP%] {\r\n  margin: -18px 0px 10px 0px;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0px;\r\n  background-color: #ffb850;\r\n}\r\n.warning-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 12px 12px 11px 12px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n.warning-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #0040c0;\r\n  cursor: pointer;\r\n}\r\n.warning-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #1080e0;\r\n}\r\n.dashboard[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  flex-wrap: wrap;\r\n  margin: 0px 52px 50px 52px;\r\n  box-sizing: border-box;\r\n  padding-bottom: 60px;\r\n}\r\n.dashboard-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n  flex-wrap: wrap;\r\n  box-sizing: border-box;\r\n}\r\n.dashboard-portlet[_ngcontent-%COMP%] {\r\n  flex: 1 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  align-items: stretch;\r\n  align-content: stretch;\r\n  justify-content: stretch;\r\n  justify-items: stretch;\r\n}\r\n.dashboard-portlet[_ngcontent-%COMP%]   .portlet[_ngcontent-%COMP%] {\r\n  flex: 1 1;\r\n}\r\n.dp-40[_ngcontent-%COMP%] {\r\n  flex: 45 1;\r\n}\r\n.dp-50[_ngcontent-%COMP%] {\r\n  flex: 50 1;\r\n}\r\n.dp-60[_ngcontent-%COMP%] {\r\n  flex: 55 1;\r\n}\r\n.dashboard-portlet.wide[_ngcontent-%COMP%] {\r\n  flex: 0 1 100% !important;\r\n}\r\n.dashboard-portlet[_ngcontent-%COMP%]   .portlet-body[_ngcontent-%COMP%] {\r\n  min-height: 240px;\r\n  max-height: 500px;\r\n}\r\n.dashboard-portlet[_ngcontent-%COMP%]   .portlet-body[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\r\n  max-width: calc(50vw - 400px);\r\n}\r\n.portlet-table.canvas-info[_ngcontent-%COMP%] {\r\n  width: 280px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nLWJhciB7XHJcbiAgbWFyZ2luOiAtMThweCAwcHggMTBweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjg1MDtcclxufVxyXG4ud2FybmluZy1iYXIgcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMTJweCAxMnB4IDExcHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLndhcm5pbmctYmFyIHAgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDA0MGMwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ud2FybmluZy1iYXIgcCBhOmhvdmVyIHtcclxuICBjb2xvcjogIzEwODBlMDtcclxufVxyXG5cclxuLmRhc2hib2FyZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDBweCA1MnB4IDUwcHggNTJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtcG9ydGxldCB7XHJcbiAgZmxleDogMSAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtcG9ydGxldCAucG9ydGxldCB7XHJcbiAgZmxleDogMSAxO1xyXG59XHJcblxyXG4uZHAtNDAge1xyXG4gIGZsZXg6IDQ1IDE7XHJcbn1cclxuLmRwLTUwIHtcclxuICBmbGV4OiA1MCAxO1xyXG59XHJcbi5kcC02MCB7XHJcbiAgZmxleDogNTUgMTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1wb3J0bGV0LndpZGUge1xyXG4gIGZsZXg6IDAgMSAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtcG9ydGxldCAucG9ydGxldC1ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAyNDBweDtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1wb3J0bGV0IC5wb3J0bGV0LWJvZHkgY2FudmFzIHtcclxuICBtYXgtd2lkdGg6IGNhbGMoNTB2dyAtIDQwMHB4KTtcclxufVxyXG5cclxuLnBvcnRsZXQtdGFibGUuY2FudmFzLWluZm8ge1xyXG4gIHdpZHRoOiAyODBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 7528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/pipes/pipes.module */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _layout_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map