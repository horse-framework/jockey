(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{TDBs:function(e,i,t){"use strict";t.r(i),t.d(i,"DashboardModule",(function(){return q}));var a=t("ofXK"),d=t("mrSG"),s=t("MO+k"),b=t.n(s),o=t("HIds"),r=t("l5mm"),n=t("T0KO"),c=t("fXoL"),l=t("s4Wa"),u=t("gReq"),v=t("s1Za"),h=t("b1cu"),O=t("MMFR");function p(e,i){if(1&e&&(c.Ob(0,"div",4),c.Ob(1,"div",10),c.Ob(2,"div",11),c.Ob(3,"div",12),c.jc(4,"Stored Queue Messages"),c.Nb(),c.Ob(5,"div",13),c.jc(6),c.Nb(),c.Nb(),c.Ob(7,"div",11),c.Ob(8,"div",12),c.jc(9,"Published Queue Messages"),c.Nb(),c.Ob(10,"div",13),c.jc(11),c.Nb(),c.Nb(),c.Ob(12,"div",11),c.Ob(13,"div",12),c.jc(14,"Consumed Queue Messages"),c.Nb(),c.Ob(15,"div",13),c.jc(16),c.Nb(),c.Nb(),c.Ob(17,"div",11),c.Ob(18,"div",12),c.jc(19,"Sent Direct Messages"),c.Nb(),c.Ob(20,"div",13),c.jc(21),c.Nb(),c.Nb(),c.Ob(22,"div",11),c.Ob(23,"div",12),c.jc(24,"Delivered Direct Messages"),c.Nb(),c.Ob(25,"div",13),c.jc(26),c.Nb(),c.Nb(),c.Ob(27,"div",11),c.Ob(28,"div",12),c.jc(29,"Direct Responses"),c.Nb(),c.Ob(30,"div",13),c.jc(31),c.Nb(),c.Nb(),c.Ob(32,"div",11),c.Ob(33,"div",12),c.jc(34,"Published Router Messages"),c.Nb(),c.Ob(35,"div",13),c.jc(36),c.Nb(),c.Nb(),c.Ob(37,"div",11),c.Ob(38,"div",12),c.jc(39,"Delivered Router Messages"),c.Nb(),c.Ob(40,"div",13),c.jc(41),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e){const e=c.Yb(2);c.zb(6),c.kc(e.dashboard.queueMessages.stored+e.dashboard.queueMessages.storedPrio),c.zb(5),c.kc(e.dashboard.queueMessages.received),c.zb(5),c.kc(e.dashboard.queueMessages.delivery),c.zb(5),c.kc(e.dashboard.otherMessages.directMessage),c.zb(5),c.kc(e.dashboard.otherMessages.directDelivery),c.zb(5),c.kc(e.dashboard.otherMessages.directResponse),c.zb(5),c.kc(e.dashboard.otherMessages.routerPublish),c.zb(5),c.kc(e.dashboard.otherMessages.routerOk)}}function N(e,i){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Ob(2,"h3",3),c.jc(3,"Message Statistics"),c.Nb(),c.ic(4,p,42,8,"div",9),c.Nb(),c.Nb()),2&e){const e=c.Yb();c.zb(4),c.cc("ngIf",e.dashboard)}}function g(e,i){if(1&e&&(c.Ob(0,"span"),c.jc(1),c.Nb()),2&e){const e=i.$implicit;c.zb(1),c.kc(e)}}function m(e,i){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Ob(2,"h3",3),c.jc(3,"Server Information"),c.Nb(),c.Ob(4,"div",4),c.Ob(5,"div",10),c.Ob(6,"div",11),c.Ob(7,"div",12),c.jc(8,"Service Lifetime"),c.Nb(),c.Ob(9,"div",13),c.jc(10),c.Nb(),c.Nb(),c.Ob(11,"div",11),c.Ob(12,"div",12),c.jc(13,"Hostname"),c.Nb(),c.Ob(14,"div",13),c.ic(15,g,2,1,"span",14),c.Nb(),c.Nb(),c.Ob(16,"div",11),c.Ob(17,"div",12),c.jc(18,"Online Clients"),c.Nb(),c.Ob(19,"div",13),c.jc(20),c.Nb(),c.Nb(),c.Ob(21,"div",11),c.Ob(22,"div",15),c.jc(23,"Connected incoming node count. Incoming nodes send the messages they received to this instance."),c.Nb(),c.Ob(24,"div",12),c.jc(25,"Incoming Nodes"),c.Nb(),c.Ob(26,"div",13),c.jc(27),c.Nb(),c.Nb(),c.Ob(28,"div",11),c.Ob(29,"div",15),c.jc(30,"Connected outgoing node count. When a message is received, it's sent to outgoing nodes."),c.Nb(),c.Ob(31,"div",12),c.jc(32,"Outgoing Nodes"),c.Nb(),c.Ob(33,"div",13),c.jc(34),c.Nb(),c.Nb(),c.Ob(35,"div",11),c.Ob(36,"div",12),c.jc(37,"Max Queue Limit"),c.Nb(),c.Ob(38,"div",13),c.jc(39),c.Zb(40,"unlimited"),c.Nb(),c.Nb(),c.Ob(41,"div",11),c.Ob(42,"div",12),c.jc(43,"Max Router Limit"),c.Nb(),c.Ob(44,"div",13),c.jc(45),c.Zb(46,"unlimited"),c.Nb(),c.Nb(),c.Ob(47,"div",11),c.Ob(48,"div",12),c.jc(49,"Auto Queue Creation"),c.Nb(),c.Ob(50,"div",13),c.jc(51),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e){const e=c.Yb();c.zb(10),c.kc(e.lifetime),c.zb(5),c.cc("ngForOf",e.dashboard.server.hosts),c.zb(5),c.kc(e.dashboard.server.onlineClients),c.zb(7),c.kc(e.dashboard.server.incomingNodes),c.zb(7),c.kc(e.dashboard.server.outgoingNodes),c.zb(5),c.kc(c.ac(40,8,e.dashboard.serverOptions.queueLimit)),c.zb(6),c.kc(c.ac(46,10,e.dashboard.serverOptions.routerLimit)),c.zb(6),c.kc(e.dashboard.serverOptions.autoQueueCreation)}}function f(e,i){if(1&e&&(c.Ob(0,"em"),c.jc(1),c.Nb()),2&e){const e=c.Yb(2);c.zb(1),c.lc("(",e.dashboard.queueOptions.ackTimeout," ms timeout)")}}function j(e,i){1&e&&(c.Ob(0,"div",13),c.jc(1,"No Timeout"),c.Nb())}function y(e,i){if(1&e&&(c.Ob(0,"div",13),c.jc(1),c.Nb()),2&e){const e=c.Yb(2);c.zb(1),c.lc(" ",e.dashboard.queueOptions.msgTimeout," milliseconds ")}}function R(e,i){1&e&&(c.Ob(0,"div",13),c.jc(1,"No Delay"),c.Nb())}function k(e,i){if(1&e&&(c.Ob(0,"div",13),c.jc(1),c.Nb()),2&e){const e=c.Yb(2);c.zb(1),c.lc(" ",e.dashboard.queueOptions.delayBetweenMsgs," milliseconds ")}}function C(e,i){1&e&&(c.Ob(0,"div",13),c.jc(1,"No Delay"),c.Nb())}function M(e,i){if(1&e&&(c.Ob(0,"div",13),c.jc(1),c.Nb()),2&e){const e=c.Yb(2);c.zb(1),c.lc(" ",e.dashboard.queueOptions.putbackDelay," milliseconds ")}}function z(e,i){if(1&e&&(c.Ob(0,"div",1),c.Ob(1,"div",2),c.Ob(2,"h3",3),c.jc(3,"Default Queue Options"),c.Nb(),c.Ob(4,"div",4),c.Ob(5,"div",10),c.Ob(6,"div",11),c.Ob(7,"div",12),c.jc(8,"Status"),c.Nb(),c.Ob(9,"div",13),c.jc(10),c.Nb(),c.Nb(),c.Ob(11,"div",11),c.Ob(12,"div",12),c.jc(13,"Acknowledge"),c.Nb(),c.Ob(14,"div",13),c.jc(15),c.ic(16,f,2,1,"em",16),c.Nb(),c.Nb(),c.Ob(17,"div",11),c.Ob(18,"div",12),c.jc(19,"Message Timeout"),c.Nb(),c.ic(20,j,2,0,"div",17),c.ic(21,y,2,1,"div",17),c.Nb(),c.Ob(22,"div",11),c.Ob(23,"div",12),c.jc(24,"Message Limit"),c.Nb(),c.Ob(25,"div",13),c.jc(26),c.Zb(27,"unlimited"),c.Ob(28,"em"),c.jc(29),c.Zb(30,"filesize"),c.Nb(),c.Nb(),c.Nb(),c.Ob(31,"div",11),c.Ob(32,"div",12),c.jc(33,"Subscribers Limit"),c.Nb(),c.Ob(34,"div",13),c.jc(35),c.Zb(36,"unlimited"),c.Nb(),c.Nb(),c.Ob(37,"div",11),c.Ob(38,"div",12),c.jc(39,"Delay Between Messages"),c.Nb(),c.ic(40,R,2,0,"div",17),c.ic(41,k,2,1,"div",17),c.Nb(),c.Ob(42,"div",11),c.Ob(43,"div",12),c.jc(44,"Put Back Delay"),c.Nb(),c.ic(45,C,2,0,"div",17),c.ic(46,M,2,1,"div",17),c.Nb(),c.Ob(47,"div",11),c.Ob(48,"div",12),c.jc(49,"Auto Destroy"),c.Nb(),c.Ob(50,"div",13),c.jc(51),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&e){const e=c.Yb();c.zb(10),c.kc(e.dashboard.queueOptions.status),c.zb(5),c.lc(" ",e.dashboard.queueOptions.ack," "),c.zb(1),c.cc("ngIf",e.dashboard.queueOptions.ackTimeout>0),c.zb(4),c.cc("ngIf",0==e.dashboard.queueOptions.msgTimeout),c.zb(1),c.cc("ngIf",e.dashboard.queueOptions.msgTimeout>0),c.zb(5),c.lc(" ",c.ac(27,13,e.dashboard.queueOptions.msgLimit)," "),c.zb(3),c.lc("(Size Limit: ",c.ac(30,15,e.dashboard.queueOptions.msgSizeLimit),")"),c.zb(6),c.kc(c.ac(36,17,e.dashboard.queueOptions.clientLimit)),c.zb(5),c.cc("ngIf",0==e.dashboard.queueOptions.delayBetweenMsgs),c.zb(1),c.cc("ngIf",e.dashboard.queueOptions.delayBetweenMsgs>0),c.zb(4),c.cc("ngIf",0==e.dashboard.queueOptions.putbackDelay),c.zb(1),c.cc("ngIf",e.dashboard.queueOptions.putbackDelay>0),c.zb(5),c.kc(e.dashboard.queueOptions.autoDestroy)}}let D=(()=>{class e extends o.a{constructor(e,i,t){super(),this.queueGraphService=e,this.messageGraphService=i,this.dashboardService=t,this.deliveryChart=null,this.msgChart=null,this.storeChart=null}ngOnInit(){return Object(d.a)(this,void 0,void 0,(function*(){yield this.load(),this.on(Object(r.a)(5e3)).subscribe(()=>Object(d.a)(this,void 0,void 0,(function*(){this.dashboardService.load().then(e=>this.dashboard=e),yield this.loadCharts()})))}))}load(){return Object(d.a)(this,void 0,void 0,(function*(){this.dashboardService.load().then(e=>this.dashboard=e),yield this.loadCharts();let e=new n.a;this.on(Object(r.a)(1e3)).subscribe(()=>{if(!this.dashboard)return;let i=(new Date).getTime()/1e3;this.lifetime=e.transform(i,this.dashboard.server.startedDate)})}))}loadCharts(){return Object(d.a)(this,void 0,void 0,(function*(){let e=yield this.queueGraphService.load(),i=yield this.messageGraphService.load();this.deliveryChart=new b.a(document.getElementById("delivery-chart"),{type:"line",hover:{mode:"nearest",intersect:!0},data:this.getDeliveryChartData(e),options:{animation:{duration:0},responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!0,ticks:{precision:0}}]}}}),this.storeChart=new b.a(document.getElementById("store-chart"),{type:"line",hover:{mode:"nearest",intersect:!0},data:this.getStoreChartData(e),options:{animation:{duration:0},responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!0,ticks:{precision:0}}]}}}),this.msgChart=new b.a(document.getElementById("msg-chart"),{type:"line",hover:{mode:"nearest",intersect:!0},data:this.getMessageChartData(i),options:{animation:{duration:0},responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!0,ticks:{precision:0}}]}}})}))}getDeliveryChartData(e){return{labels:e.labels,datasets:[{label:"Received",borderColor:"#444",data:e.data.map(e=>e.received),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Delivered",borderColor:"#1070af",data:e.data.map(e=>e.delivery),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Ack",borderColor:"#10b02a",data:e.data.map(e=>e.ack),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Neg. Ack",borderColor:"#a020c0",data:e.data.map(e=>e.nack),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Unack",borderColor:"#999",data:e.data.map(e=>e.unack),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Error",borderColor:"#ff0000",data:e.data.map(e=>e.error),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2}]}}getStoreChartData(e){return{labels:e.labels,datasets:[{label:"Msgs",borderColor:"#104090",data:e.data.map(e=>e.stored),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"High Prio Msgs",borderColor:"#f07000",data:e.data.map(e=>e.storedPrio),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Pending for Ack",borderColor:"#aa2080",data:e.data.map(e=>e.pending),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Timeout",borderColor:"#cc3333",data:e.data.map(e=>e.timeout),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2}]}}getMessageChartData(e){return{labels:e.labels,datasets:[{label:"Direct Sent",borderColor:"#1070c0",data:e.data.map(e=>e.directMessage),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Direct Response",borderColor:"#907010",data:e.data.map(e=>e.directResponse),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Direct Delivery",borderColor:"#10a050",data:e.data.map(e=>e.directDelivery),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Direct No Receiver",borderColor:"#8010e0",data:e.data.map(e=>e.directNoReceiver),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Router Publish",borderColor:"#606090",data:e.data.map(e=>e.routerPublish),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Router Received",borderColor:"#20caca",data:e.data.map(e=>e.routerOk),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Router No Receiver",borderColor:"#e02255",data:e.data.map(e=>e.routerFailed),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2}]}}}return e.\u0275fac=function(i){return new(i||e)(c.Jb(l.a),c.Jb(u.a),c.Jb(v.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-dashboard"]],features:[c.wb],decls:22,vars:4,consts:[[1,"dashboard",3,"hidden"],[1,"dashboard-portlet"],[1,"portlet"],[1,"portlet-title"],[1,"portlet-body"],["id","store-chart"],["class","dashboard-portlet",4,"ngIf"],["id","delivery-chart"],["id","msg-chart"],["class","portlet-body",4,"ngIf"],[1,"key-value-table"],[1,"kvt-row"],[1,"kvt-key"],[1,"kvt-value"],[4,"ngFor","ngForOf"],[1,"kvt-info"],[4,"ngIf"],["class","kvt-value",4,"ngIf"]],template:function(e,i){1&e&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Ob(3,"h3",3),c.jc(4,"Stored Messages"),c.Nb(),c.Ob(5,"div",4),c.Kb(6,"canvas",5),c.Nb(),c.Nb(),c.Nb(),c.ic(7,N,5,1,"div",6),c.Ob(8,"div",1),c.Ob(9,"div",2),c.Ob(10,"h3",3),c.jc(11,"Queue Messages and Deliveries"),c.Nb(),c.Ob(12,"div",4),c.Kb(13,"canvas",7),c.Nb(),c.Nb(),c.Nb(),c.ic(14,m,52,12,"div",6),c.Ob(15,"div",1),c.Ob(16,"div",2),c.Ob(17,"h3",3),c.jc(18,"Direct and Route Messages and Deliveries"),c.Nb(),c.Ob(19,"div",4),c.Kb(20,"canvas",8),c.Nb(),c.Nb(),c.Nb(),c.ic(21,z,52,19,"div",6),c.Nb()),2&e&&(c.cc("hidden",null==i.dashboard),c.zb(7),c.cc("ngIf",i.dashboard),c.zb(7),c.cc("ngIf",i.dashboard),c.zb(7),c.cc("ngIf",i.dashboard))},directives:[a.j,a.i],pipes:[h.a,O.a],styles:[".dashboard[_ngcontent-%COMP%]{min-width:380px;max-width:1270px;width:70%;margin:auto;display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start;flex-wrap:wrap;padding-bottom:50px}.dashboard-portlet[_ngcontent-%COMP%]{flex:0 1 50%}.dashboard-portlet.wide[_ngcontent-%COMP%]{flex:0 1 100%!important}.dashboard-portlet[_ngcontent-%COMP%]   .portlet-body[_ngcontent-%COMP%]{height:350px}"]}),e})();var T=t("tyNb"),w=t("F4lh");let q=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(i){return new(i||e)},imports:[[a.b,w.a,T.e.forChild([{path:"",component:D}])]]}),e})()}}]);