"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[804],{8293:(Y,g,l)=>{l.r(g),l.d(g,{ClientsModule:()=>k});var m=l(6814),r=l(5861),x=l(3791),n=l(8124),y=l(5278),u=l(6956);function v(e,o){1&e&&n._UZ(0,"div",17)}function Z(e,o){1&e&&n._UZ(0,"div",18)}function C(e,o){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.TgZ(2,"em"),n._uU(3),n.qZA()()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.hij("",t.type," "),n.xp6(2),n.hij("(",t.typeCount," Clients)")}}function T(e,o){1&e&&(n.TgZ(0,"em"),n._uU(1,"Not Specified"),n.qZA())}function h(e,o){if(1&e&&(n.ynx(0),n.YNc(1,C,4,2,"span",13)(2,T,2,0,"em",13),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",t.type),n.xp6(1),n.Q6J("ngIf",!t.type)}}function A(e,o){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.TgZ(2,"em"),n._uU(3),n.qZA()()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.hij("",t.name," "),n.xp6(2),n.hij("(",t.nameCount," Clients)")}}function U(e,o){1&e&&(n.TgZ(0,"em"),n._uU(1,"Not Specified"),n.qZA())}function q(e,o){if(1&e&&(n.ynx(0),n.YNc(1,A,4,2,"span",13)(2,U,2,0,"em",13),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",t.name),n.xp6(1),n.Q6J("ngIf",!t.name)}}function I(e,o){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.client.ip)}}function N(e,o){1&e&&(n.TgZ(0,"em"),n._uU(1,"Unknown"),n.qZA())}function Q(e,o){if(1&e&&(n.ynx(0),n.YNc(1,v,1,0,"div",9)(2,Z,1,0,"div",10),n.TgZ(3,"div",11)(4,"div",12),n.YNc(5,h,3,2,"ng-container",13),n.qZA(),n.TgZ(6,"div",12),n.YNc(7,q,3,2,"ng-container",13),n.qZA(),n.TgZ(8,"div",14)(9,"span")(10,"a",15),n._uU(11),n.qZA()()(),n.TgZ(12,"div",16),n.YNc(13,I,2,1,"span",13)(14,N,2,0,"em",13),n.qZA(),n.TgZ(15,"div",16)(16,"span"),n._uU(17),n.qZA()(),n.TgZ(18,"div",16)(19,"span"),n._uU(20),n.qZA()(),n.TgZ(21,"div",16)(22,"span"),n._uU(23),n.ALo(24,"date"),n.qZA()()(),n.BQk()),2&e){const t=o.$implicit;n.xp6(1),n.Q6J("ngIf","*"!=t.type),n.xp6(1),n.Q6J("ngIf","*"==t.type&&"*"!=t.name),n.xp6(3),n.Q6J("ngIf","*"!=t.type),n.xp6(2),n.Q6J("ngIf","*"!=t.name),n.xp6(3),n.MGl("routerLink","/client/",t.client.uniqueId,""),n.xp6(1),n.Oqu(t.client.uniqueId),n.xp6(2),n.Q6J("ngIf",t.client.ip),n.xp6(1),n.Q6J("ngIf",!t.client.ip),n.xp6(3),n.Oqu(t.client.isAuthenticated?"Yes":"No"),n.xp6(3),n.Oqu(t.client.protocol),n.xp6(3),n.Oqu(n.xi3(24,11,1e3*t.client.connectedDate,"yyyy-MM-dd HH:mm:ss"))}}function J(e,o){if(1&e&&(n.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),n._uU(4," Type "),n.TgZ(5,"em"),n._uU(6),n.qZA()(),n.TgZ(7,"div",4),n._uU(8,"Name"),n.qZA(),n.TgZ(9,"div",5),n._uU(10,"Unique Id"),n.qZA(),n.TgZ(11,"div",6),n._uU(12,"Remote IP Address"),n.qZA(),n.TgZ(13,"div",6),n._uU(14,"Is Authenticated"),n.qZA(),n.TgZ(15,"div",6),n._uU(16,"Protocol"),n.qZA(),n.TgZ(17,"div",6),n._uU(18,"Connected Date"),n.qZA()(),n.TgZ(19,"div",7),n.YNc(20,Q,25,14,"ng-container",8),n.qZA()()()),2&e){const t=n.oxw();n.xp6(6),n.hij("(",t.model.length," Clients)"),n.xp6(14),n.Q6J("ngForOf",t.model)}}let O=(()=>{class e extends x.H{constructor(t){super(),this.clientService=t,this.model=null}ngOnInit(){var t=this;return(0,r.Z)(function*(){let c=yield t.clientService.list(),a=[],d="",f="",p={};c.forEach(i=>{let _=t.findTypeKey(i.type,i.name),s=t.findNameKey(i.type,i.name);p[_]?p[_]++:p[_]=1,p[s]?p[s]++:p[s]=1;let K={type:i.type==d?"*":i.type,name:i.name==f?"*":i.name,client:i};d=i.type,f=i.name,a.push(K)}),a.forEach(i=>{let _=t.findTypeKey(i.client.type,i.client.name),s=t.findNameKey(i.client.type,i.client.name);i.typeCount=p[_],i.nameCount=p[s]}),t.model=a})()}findTypeKey(t,c){return t?"*t*"+t:"*tn"}findNameKey(t,c){return(t?"*t*"+t:"*tn")+"_"+(c?"*n*"+c:"*nn")}static#n=this.\u0275fac=function(c){return new(c||e)(n.Y36(y.y))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-clients"]],features:[n.qOj],decls:1,vars:1,consts:[["class","clients",4,"ngIf"],[1,"clients"],[1,"table"],[1,"thead"],[1,"th","fx16"],[1,"th","fx20"],[1,"th","fx12"],[1,"tbody"],[4,"ngFor","ngForOf"],["style","height: 1px; background-color: #109040;",4,"ngIf"],["style","height: 1px; background-color: #666;",4,"ngIf"],[1,"trow"],[1,"td","fx16"],[4,"ngIf"],[1,"td","fx20"],[3,"routerLink"],[1,"td","fx12"],[2,"height","1px","background-color","#109040"],[2,"height","1px","background-color","#666"]],template:function(c,a){1&c&&n.YNc(0,J,21,2,"div",0),2&c&&n.Q6J("ngIf",a.model)},dependencies:[m.sg,m.O5,u.rH,m.uU],styles:[".clients[_ngcontent-%COMP%]{margin:auto;padding:0 60px;text-align:center}.clients[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;text-align:left}"]})}return e})(),k=(()=>{class e{static#n=this.\u0275fac=function(c){return new(c||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[m.ez,u.Bz.forChild([{path:"",component:O}])]})}return e})()}}]);