"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[909],{909:(U,p,a)=>{a.r(p),a.d(p,{ChannelsModule:()=>O});var r=a(6814),u=a(6956),d=a(9817),c=a(285),m=a(658),h=a(5861),C=a(3791),f=a(8152),e=a(8124);let _=(()=>{class t{get onconfirmed(){return this._onconfirmed}constructor(){this._onconfirmed=new f.xQ,this._confirmed=!1,this.model={name:"",topic:"",autoDestroy:!0,autoDestroyIdleSeconds:15,clientLimit:0,messageSizeLimit:0,sendLastMessageAsInitial:!1}}ngOnInit(){}ngOnDestroy(){this._confirmed||this._onconfirmed.next(null)}create(){this._confirmed=!0,this._onconfirmed.next(this.model)}static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-channel-create-modal"]],decls:39,vars:7,consts:[["mat-dialog-title","",1,"title"],[1,"content"],[1,"form-item"],["placeholder","Channel Name","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Left blank if you don't need","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Zero for unlimited","type","number",1,"jockey-text",3,"ngModel","ngModelChange"],[1,"kvt-row"],[1,"kvt-key-narrow"],[1,"kvt-value"],["type","checkbox",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Left blank for server default","type","number",1,"jockey-text",3,"ngModel","ngModelChange"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-green",3,"click"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-grey"]],template:function(i,o){1&i&&(e.TgZ(0,"h2",0),e._uU(1,"Create New Channel"),e.qZA(),e.TgZ(2,"mat-dialog-content",1)(3,"div")(4,"div",2)(5,"label"),e._uU(6,"Channel Name"),e.qZA(),e.TgZ(7,"input",3),e.NdJ("ngModelChange",function(l){return o.model.name=l}),e.qZA()(),e.TgZ(8,"div",2)(9,"label"),e._uU(10,"Topic"),e.qZA(),e.TgZ(11,"input",4),e.NdJ("ngModelChange",function(l){return o.model.topic=l}),e.qZA()(),e.TgZ(12,"div",2)(13,"label"),e._uU(14,"Client Limit"),e.qZA(),e.TgZ(15,"input",5),e.NdJ("ngModelChange",function(l){return o.model.clientLimit=l}),e.qZA()(),e.TgZ(16,"div",2)(17,"label"),e._uU(18,"Message Size Limit (in bytes)"),e.qZA(),e.TgZ(19,"input",5),e.NdJ("ngModelChange",function(l){return o.model.messageSizeLimit=l}),e.qZA()(),e.TgZ(20,"div",6)(21,"div",7),e._uU(22,"Use Initial Message"),e.qZA(),e.TgZ(23,"div",8)(24,"input",9),e.NdJ("ngModelChange",function(l){return o.model.sendLastMessageAsInitial=l}),e.qZA()()(),e.TgZ(25,"div",6)(26,"div",7),e._uU(27,"Auto Destroy"),e.qZA(),e.TgZ(28,"div",8)(29,"input",9),e.NdJ("ngModelChange",function(l){return o.model.autoDestroy=l}),e.qZA()()(),e.TgZ(30,"div",2)(31,"label"),e._uU(32,"Auto Destroy Idle (in seconds)"),e.qZA(),e.TgZ(33,"input",10),e.NdJ("ngModelChange",function(l){return o.model.autoDestroyIdleSeconds=l}),e.qZA()()()(),e.TgZ(34,"mat-dialog-actions",11)(35,"button",12),e.NdJ("click",function(){return o.create()}),e._uU(36,"Create Channel"),e.qZA(),e.TgZ(37,"button",13),e._uU(38,"Cancel"),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngModel",o.model.name),e.xp6(4),e.Q6J("ngModel",o.model.topic),e.xp6(4),e.Q6J("ngModel",o.model.clientLimit),e.xp6(4),e.Q6J("ngModel",o.model.messageSizeLimit),e.xp6(5),e.Q6J("ngModel",o.model.sendLastMessageAsInitial),e.xp6(5),e.Q6J("ngModel",o.model.autoDestroy),e.xp6(4),e.Q6J("ngModel",o.model.autoDestroyIdleSeconds))},dependencies:[d.ZT,d.uh,d.H8,d.xY,c.Fj,c.wV,c.Wl,c.JJ,c.On],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px;display:block}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.target-text[_ngcontent-%COMP%]{border:1px solid #555;background-color:#000;color:#eee;font-size:14px;font-weight:500;padding:8px;width:320px}.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active{border-color:#10a040}.form-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;align-content:stretch;align-items:stretch;justify-content:stretch;justify-items:stretch;padding:8px 0}.form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1 1 auto;color:#bbb;font-size:13px;font-weight:500}.form-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1 1 auto}"]})}return t})();var Z=a(1418),M=a(1842),v=a(8287);function x(t,g){1&t&&(e.TgZ(0,"em"),e._uU(1,"No Initial Message"),e.qZA())}function T(t,g){if(1&t){const n=e.EpF();e.TgZ(0,"span")(1,"a",13),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.viewInitialMessage(o))}),e._uU(2,"View"),e.qZA()()}}function A(t,g){if(1&t&&(e.TgZ(0,"div",14),e._UZ(1,"div",15),e.TgZ(2,"div",16)(3,"span")(4,"a",17),e._uU(5),e.qZA()()(),e.TgZ(6,"div",18)(7,"span"),e._uU(8),e.qZA()(),e.TgZ(9,"div",19)(10,"span"),e._uU(11),e.qZA()(),e.TgZ(12,"div",19)(13,"span"),e._uU(14),e.qZA()(),e.TgZ(15,"div",19)(16,"span"),e._uU(17),e.qZA()(),e.TgZ(18,"div",19)(19,"span"),e._uU(20),e.qZA()(),e.TgZ(21,"div",20)(22,"span"),e._uU(23),e.ALo(24,"date"),e.qZA()(),e.TgZ(25,"div",19),e.YNc(26,x,2,0,"em",21)(27,T,3,0,"span",21),e.qZA()()),2&t){const n=g.$implicit;e.xp6(4),e.MGl("routerLink","/channel/",n.name,""),e.xp6(1),e.Oqu(n.name),e.xp6(3),e.Oqu(n.topic),e.xp6(3),e.Oqu(n.status),e.xp6(3),e.Oqu(n.publish),e.xp6(3),e.Oqu(n.receive),e.xp6(3),e.hij("",n.subscriberCount," Online"),e.xp6(3),e.Oqu(e.xi3(24,10,1e3*n.lastPublishDate,"yyyy-MM-dd HH:mm:ss")),e.xp6(3),e.Q6J("ngIf",!n.hasInitialMessage),e.xp6(1),e.Q6J("ngIf",n.hasInitialMessage)}}function y(t,g){if(1&t){const n=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"a",5),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.create())}),e.qZA()(),e.TgZ(5,"div",6),e._uU(6," Name "),e.TgZ(7,"em"),e._uU(8),e.qZA()(),e.TgZ(9,"div",7),e._uU(10,"Topic"),e.qZA(),e.TgZ(11,"div",8),e._uU(12,"Status"),e.qZA(),e.TgZ(13,"div",8),e._uU(14,"Published"),e.qZA(),e.TgZ(15,"div",8),e._uU(16,"Received"),e.qZA(),e.TgZ(17,"div",8),e._uU(18,"Subscribers"),e.qZA(),e.TgZ(19,"div",9),e._uU(20,"Last Publish Date"),e.qZA(),e.TgZ(21,"div",8),e._uU(22,"Initial Message"),e.qZA()(),e.TgZ(23,"div",10),e.YNc(24,A,28,13,"div",11),e.qZA()(),e.TgZ(25,"div",12)(26,"button",13),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.create())}),e._uU(27,"Create New Channel"),e.qZA()()()}if(2&t){const n=e.oxw();e.xp6(8),e.hij("(",n.channels.length," Channels)"),e.xp6(16),e.Q6J("ngForOf",n.channels)}}let b=(()=>{class t extends C.H{constructor(n,i){super(),this.dialog=n,this.channelService=i}ngOnInit(){var n=this;return(0,h.Z)(function*(){n.channels=yield n.channelService.list()})()}create(){this.dialog.open(_,{width:"400px"}).componentInstance.onconfirmed.pipe((0,Z.q)(1)).subscribe(o=>{o&&this.channelService.create(o).then(s=>{this.ngOnInit()})})}viewInitialMessage(n){this.dialog.open(M.n,{width:"800px"}).componentInstance.load(n.name)}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.uw),e.Y36(v.T))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-channels"]],features:[e.qOj],decls:1,vars:1,consts:[["class","channels",4,"ngIf"],[1,"channels"],[1,"table"],[1,"thead"],[1,"th","fx40px"],["title","Create New Channel",1,"fa","fa-solid","fa-plus","hreverse",3,"click"],[1,"th","fx20"],[1,"th","fx14"],[1,"th","fx10"],[1,"th","fx12"],[1,"tbody"],["class","trow",4,"ngFor","ngForOf"],[1,"create-end"],[3,"click"],[1,"trow"],[1,"td","fx40px"],[1,"td","fx20"],[3,"routerLink"],[1,"td","fx14"],[1,"td","fx10"],[1,"td","fx12"],[4,"ngIf"]],template:function(i,o){1&i&&e.YNc(0,y,28,2,"div",0),2&i&&e.Q6J("ngIf",o.channels)},dependencies:[r.sg,r.O5,u.rH,r.uU],styles:[".channels[_ngcontent-%COMP%]{margin:auto;padding:0 60px;text-align:center}.channels[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;text-align:left}"]})}return t})(),q=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[r.ez,d.Is,m.D]})}return t})(),O=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[r.ez,m.D,d.Is,c.u5,q,u.Bz.forChild([{path:"",component:b}])]})}return t})()}}]);