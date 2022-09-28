"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[890],{22890:function(n,e,t){t.r(e),t.d(e,{HorseRouterModule:function(){return C}});var o=t(38583),i=t(64762),r=t(15257),d=t(52962),g=t(78782),c=t(79765);class l{constructor(){this.priority=0,this.contentType=null}}var a=t(33018),u=t(71636),s=t(90665);function p(n,e){if(1&n&&(a.TgZ(0,"option",14),a._uU(1),a.qZA()),2&n){const n=e.$implicit;a.Q6J("ngValue",n.value),a.xp6(1),a.Oqu(n.text)}}function f(n,e){if(1&n){const n=a.EpF();a.TgZ(0,"div",3),a.TgZ(1,"label"),a._uU(2,"Full Binding Type Name (Namespace.TypeName, AssemblyName)"),a.qZA(),a.TgZ(3,"input",15),a.NdJ("ngModelChange",function(e){return a.CHM(n),a.oxw().model.customBindingType=e}),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.xp6(3),a.Q6J("ngModel",n.model.customBindingType)}}function m(n,e){if(1&n&&(a.TgZ(0,"option",14),a._uU(1),a.qZA()),2&n){const n=e.$implicit;a.Q6J("ngValue",n.value),a.xp6(1),a.Oqu(n.text)}}function x(n,e){if(1&n){const n=a.EpF();a.TgZ(0,"div",3),a.TgZ(1,"label"),a._uU(2,"Binding Method"),a.qZA(),a.TgZ(3,"select",16),a.NdJ("ngModelChange",function(e){return a.CHM(n),a.oxw().model.method=e}),a.YNc(4,m,2,2,"option",6),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.xp6(3),a.Q6J("ngModel",n.model.method),a.xp6(1),a.Q6J("ngForOf",n.httpMethods)}}function h(n,e){if(1&n&&(a.TgZ(0,"option",14),a._uU(1),a.qZA()),2&n){const n=e.$implicit;a.Q6J("ngValue",n.value),a.xp6(1),a.Oqu(n.text)}}function Z(n,e){if(1&n){const n=a.EpF();a.TgZ(0,"div",3),a.TgZ(1,"label"),a._uU(2,"Binding Method"),a.qZA(),a.TgZ(3,"select",17),a.NdJ("ngModelChange",function(e){return a.CHM(n),a.oxw().model.method=e}),a.YNc(4,h,2,2,"option",6),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.xp6(3),a.Q6J("ngModel",n.model.method),a.xp6(1),a.Q6J("ngForOf",n.routerMethods)}}function b(n,e){if(1&n&&(a.TgZ(0,"option",14),a._uU(1),a.qZA()),2&n){const n=e.$implicit;a.Q6J("ngValue",n.value),a.xp6(1),a.Oqu(n.text)}}let v=(()=>{class n{constructor(){this.model=new l,this.bindingTypes=[{value:"QueueBinding",text:"Queue Binding"},{value:"AutoQueueBinding",text:"Auto Queue Binding"},{value:"DynamicQueueBinding",text:"Dynamic Queue Binding"},{value:"TopicBinding",text:"Topic Binding"},{value:"DirectBinding",text:"Direct Binding"},{value:"HttpBinding",text:"Http Binding"},{value:"custom",text:"(Custom Binding)"}],this.routerMethods=[{value:"RoundRobin",text:"Round Robin: Each message is redirected different targets"},{value:"Distribute",text:"Distribute: Each message is sent to all targets"},{value:"OnlyFirst",text:"Only First: Each message is redirected to only first active targets"}],this.httpMethods=[{value:"Get",text:"GET"},{value:"Post",text:"POST"},{value:"Put",text:"PUT"},{value:"Patch",text:"PATCH"},{value:"Delete",text:"DELETE"}],this.interactions=[{value:"None",text:"No response interaction"},{value:"Response",text:"Router waits response from that binding"}],this._onconfirmed=new c.xQ,this._confirmed=!1}get onconfirmed(){return this._onconfirmed}ngOnInit(){}ngOnDestroy(){this._confirmed||this._onconfirmed.next(null)}add(){this._confirmed=!0,this._onconfirmed.next(this.model)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-binding-add-modal"]],decls:39,vars:11,consts:[["mat-dialog-title","",1,"title"],[1,"content"],["queueForm",""],[1,"form-item"],["placeholder","Binding Name","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],[1,"jockey-select",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["class","form-item",4,"ngIf"],["placeholder","Binding Target","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Higher values for higher priority","type","number",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Left blank for router default","type","number",1,"jockey-text",3,"ngModel","ngModelChange"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-confirm",3,"click"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-cancel"],[3,"ngValue"],["placeholder","Binding Full Type Name","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Select an HTTP Method",1,"jockey-select",3,"ngModel","ngModelChange"],["placeholder","Default value is Distribute",1,"jockey-select",3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(a.TgZ(0,"h2",0),a._uU(1,"Add Binding"),a.qZA(),a.TgZ(2,"mat-dialog-content",1),a.TgZ(3,"div",null,2),a.TgZ(5,"div",3),a.TgZ(6,"label"),a._uU(7,"Binding Name"),a.qZA(),a.TgZ(8,"input",4),a.NdJ("ngModelChange",function(n){return e.model.name=n}),a.qZA(),a.qZA(),a.TgZ(9,"div",3),a.TgZ(10,"label"),a._uU(11,"Binding Type"),a.qZA(),a.TgZ(12,"select",5),a.NdJ("ngModelChange",function(n){return e.model.type=n}),a.YNc(13,p,2,2,"option",6),a.qZA(),a.qZA(),a.YNc(14,f,4,1,"div",7),a.YNc(15,x,5,2,"div",7),a.YNc(16,Z,5,2,"div",7),a.TgZ(17,"div",3),a.TgZ(18,"label"),a._uU(19,"Binding Target"),a.qZA(),a.TgZ(20,"input",8),a.NdJ("ngModelChange",function(n){return e.model.target=n}),a.qZA(),a.qZA(),a.TgZ(21,"div",3),a.TgZ(22,"label"),a._uU(23,"Binding Interaction"),a.qZA(),a.TgZ(24,"select",5),a.NdJ("ngModelChange",function(n){return e.model.interaction=n}),a.YNc(25,b,2,2,"option",6),a.qZA(),a.qZA(),a.TgZ(26,"div",3),a.TgZ(27,"label"),a._uU(28,"Binding Priority"),a.qZA(),a.TgZ(29,"input",9),a.NdJ("ngModelChange",function(n){return e.model.priority=n}),a.qZA(),a.qZA(),a.TgZ(30,"div",3),a.TgZ(31,"label"),a._uU(32,"Content Type"),a.qZA(),a.TgZ(33,"input",10),a.NdJ("ngModelChange",function(n){return e.model.contentType=n}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(34,"mat-dialog-actions",11),a.TgZ(35,"button",12),a.NdJ("click",function(){return e.add()}),a._uU(36,"Add Binding"),a.qZA(),a.TgZ(37,"button",13),a._uU(38,"Cancel"),a.qZA(),a.qZA()),2&n&&(a.xp6(8),a.Q6J("ngModel",e.model.name),a.xp6(4),a.Q6J("ngModel",e.model.type),a.xp6(1),a.Q6J("ngForOf",e.bindingTypes),a.xp6(1),a.Q6J("ngIf","custom"==e.model.type),a.xp6(1),a.Q6J("ngIf","HttpBinding"==e.model.type),a.xp6(1),a.Q6J("ngIf","HttpBinding"!=e.model.type),a.xp6(4),a.Q6J("ngModel",e.model.target),a.xp6(4),a.Q6J("ngModel",e.model.interaction),a.xp6(1),a.Q6J("ngForOf",e.interactions),a.xp6(4),a.Q6J("ngModel",e.model.priority),a.xp6(4),a.Q6J("ngModel",e.model.contentType))},directives:[u.uh,u.xY,s.Fj,s.JJ,s.On,s.EJ,o.sg,o.O5,s.wV,u.H8,u.ZT,s.YN,s.Kr],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px;display:block}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:flex-start;align-content:flex-start;padding:15px 0}.modal-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid;border-radius:2px;background-color:transparent;font-weight:500;font-size:14px;color:#f0f0f0;margin-left:16px}.btn-cancel[_ngcontent-%COMP%]{border-color:#777}.btn-cancel[_ngcontent-%COMP%]:hover{border-color:#999}.btn-confirm[_ngcontent-%COMP%]{border-color:#10a040}.btn-confirm[_ngcontent-%COMP%]:hover{border-color:#10d060}.target-text[_ngcontent-%COMP%]{border:1px solid #555;background-color:#000;color:#eee;font-size:14px;font-weight:500;padding:8px;width:320px}.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active{border-color:#10a040}.queue-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-content:stretch;align-items:stretch;justify-content:stretch;justify-items:stretch;max-height:500px;overflow-y:auto;padding:0}.form-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;align-content:stretch;align-items:stretch;justify-content:stretch;justify-items:stretch;padding:8px 0}.form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1 1 auto;color:#bbb;font-size:13px;font-weight:500}.form-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1 1 auto}"]}),n})();var M=t(71632),T=t(72667);function _(n,e){if(1&n){const n=a.EpF();a.TgZ(0,"div",12),a.TgZ(1,"div",13),a._uU(2),a.qZA(),a.TgZ(3,"div",13),a._uU(4),a.qZA(),a.TgZ(5,"div",14),a._uU(6),a.qZA(),a.TgZ(7,"div",15),a._uU(8),a.qZA(),a.TgZ(9,"div",15),a._uU(10),a.qZA(),a.TgZ(11,"div",15),a._uU(12),a.qZA(),a.TgZ(13,"div",15),a.TgZ(14,"button",16),a.NdJ("click",function(){const e=a.CHM(n).$implicit;return a.oxw(2).removeBinding(e)}),a._uU(15,"Remove"),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=e.$implicit;a.xp6(2),a.Oqu(n.name),a.xp6(2),a.Oqu(n.type),a.xp6(2),a.Oqu(n.target),a.xp6(2),a.Oqu(n.contentType),a.xp6(2),a.Oqu(n.interaction),a.xp6(2),a.Oqu(n.priority)}}function q(n,e){if(1&n){const n=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"div",1),a.TgZ(2,"h2"),a._uU(3),a.qZA(),a.TgZ(4,"div"),a.TgZ(5,"small"),a._uU(6),a.qZA(),a.TgZ(7,"span",2),a.NdJ("click",function(){return a.CHM(n),a.oxw().remove()}),a._uU(8,"Delete Router"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"div",3),a.TgZ(10,"div",4),a.TgZ(11,"div",5),a.TgZ(12,"div",6),a._uU(13,"Binding Name"),a.qZA(),a.TgZ(14,"div",6),a._uU(15,"Binding Type"),a.qZA(),a.TgZ(16,"div",7),a._uU(17,"Binding Target"),a.qZA(),a.TgZ(18,"div",8),a._uU(19,"Content Type"),a.qZA(),a.TgZ(20,"div",8),a._uU(21,"Interaction"),a.qZA(),a.TgZ(22,"div",8),a._uU(23,"Priority"),a.qZA(),a.TgZ(24,"div",8),a._uU(25,"Action"),a.qZA(),a.qZA(),a.TgZ(26,"div",9),a.YNc(27,_,16,6,"div",10),a.qZA(),a.qZA(),a.qZA(),a.TgZ(28,"div",11),a.TgZ(29,"button",2),a.NdJ("click",function(){return a.CHM(n),a.oxw().addBinding()}),a._uU(30,"Add Binding"),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.xp6(3),a.Oqu(n.model.name),a.xp6(3),a.Oqu(n.model.method),a.xp6(21),a.Q6J("ngForOf",n.model.bindings)}}let A=(()=>{class n extends d.H{constructor(n,e,t,o){super(),this.routerService=n,this.router=e,this.dialog=t,this.activatedRoute=o}ngOnInit(){return(0,i.mG)(this,void 0,void 0,function*(){this.routerName=this.activatedRoute.snapshot.params.name,this.model=yield this.routerService.get(this.routerName)})}remove(){let n=this.dialog.open(g.z,{width:"600px"}).componentInstance;n.message='Router and binding options will be removed belong it but binding targets will not be removed (bonded queues etc). Are you sure to <b class="imp">delete</b> this router and all bindings?',n.onclosed.pipe((0,r.q)(1)).subscribe(n=>{n&&this.routerService.remove(this.routerName).then(n=>{this.router.navigateByUrl("/routers")})})}addBinding(){let n=this.dialog.open(v,{width:"600px"}).componentInstance;n.model.router=this.routerName,n.onconfirmed.pipe((0,r.q)(1)).subscribe(n=>{n&&this.routerService.addBinding(n).then(n=>{this.ngOnInit()})})}removeBinding(n){let e=this.dialog.open(g.z,{width:"600px"}).componentInstance;e.message='Are you sure to <b class="imp">remove</b> this binding from the router?',e.onclosed.pipe((0,r.q)(1)).subscribe(e=>{e&&this.routerService.removeBinding(this.routerName,n.name).then(n=>this.ngOnInit())})}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(M.n),a.Y36(T.F0),a.Y36(u.uw),a.Y36(T.gz))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-router"]],features:[a.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[1,"router-info"],[3,"click"],[1,"bindings"],[1,"table"],[1,"thead"],[1,"th","fx16"],[1,"th","fx28"],[1,"th","fx10"],[1,"tbody"],["class","trow",4,"ngFor","ngForOf"],[1,"add-binding"],[1,"trow"],[1,"td","fx16"],[1,"td","fx28"],[1,"td","fx10"],[1,"remove-binding",3,"click"]],template:function(n,e){1&n&&a.YNc(0,q,31,3,"div",0),2&n&&a.Q6J("ngIf",e.model)},directives:[o.O5,o.sg],styles:[".router-info[_ngcontent-%COMP%]{margin:auto;padding:0 60px 50px;text-align:left;color:#eee}.router-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:500;color:#fff}.router-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start}.router-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-right:12px;background-color:#106030;padding:6px 10px;border-radius:2px;font-weight:500;font-size:13px;line-height:20px}.router-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin-right:6px;background-color:#c00000;padding:6px 10px;border-radius:2px;font-weight:500;font-size:13px;line-height:20px}.router-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background-color:#ff1010}.bindings[_ngcontent-%COMP%]{margin:auto;padding:0 60px;text-align:center;color:#eee}.bindings[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;text-align:left}.add-binding[_ngcontent-%COMP%]{text-align:center;padding:40px}.add-binding[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:13px;border:2px solid;border-radius:2px;color:#fff;box-sizing:border-box;padding:12px 20px;font-weight:500;background-color:transparent;border-color:#109030}.add-binding[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{border-color:#10f070}.remove-binding[_ngcontent-%COMP%]{border:none;border-radius:2px;background-color:#c00000;color:#fafafa;font-size:13px;font-weight:500;padding:8px 12px;cursor:pointer;width:90px}.remove-binding[_ngcontent-%COMP%]:hover{background-color:#ff2020}"]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.ez,s.u5,u.Is,T.Bz.forChild([{path:":name",component:A}])]]}),n})()},64762:function(n,e,t){function o(n,e,t,o){return new(t||(t=Promise))(function(i,r){function d(n){try{c(o.next(n))}catch(e){r(e)}}function g(n){try{c(o.throw(n))}catch(e){r(e)}}function c(n){n.done?i(n.value):function(n){return n instanceof t?n:new t(function(e){e(n)})}(n.value).then(d,g)}c((o=o.apply(n,e||[])).next())})}t.d(e,{mG:function(){return o}})}}]);