"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[428],{428:(L,u,a)=>{a.r(u),a.d(u,{ChannelDetailModule:()=>j});var p=a(6814),g=a(5861),x=a(9519),Z=a.n(x),_=a(3791),T=a(211),v=a(7734),y=a(6124),f=a(1418),M=a(8152),t=a(8124),d=a(9817),s=a(285);function b(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"input",8),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.model.value=n)}),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("ngModel",e.model.value)}}function A(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"select",9),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.model.value=n)}),t.TgZ(1,"option",10),t._uU(2,"Yes"),t.qZA(),t.TgZ(3,"option",10),t._uU(4,"No"),t.qZA()()}if(2&i){const e=t.oxw();t.Q6J("ngModel",e.model.value),t.xp6(1),t.Q6J("ngValue",!0),t.xp6(2),t.Q6J("ngValue",!1)}}let O=(()=>{class i{get onconfirmed(){return this._onconfirmed}constructor(){this._onconfirmed=new M.xQ,this.model={confirmed:!1,title:"",property:"",value:null,type:"text"},this._confirmed=!1}ngOnInit(){}confirm(){this._confirmed=!0,this.model.confirmed=!0,this._onconfirmed.next(this.model)}ngOnDestroy(){this._confirmed||(this.model.confirmed=!1,this._onconfirmed.next(this.model))}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-channel-option-modal"]],decls:13,vars:3,consts:[["mat-dialog-title","",1,"title"],[1,"content"],[1,"form-item"],["placeholder","Option Value","class","target-text","type","text",3,"ngModel","ngModelChange",4,"ngIf"],["class","jockey-select",3,"ngModel","ngModelChange",4,"ngIf"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-green",3,"click"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-grey"],["placeholder","Option Value","type","text",1,"target-text",3,"ngModel","ngModelChange"],[1,"jockey-select",3,"ngModel","ngModelChange"],[3,"ngValue"]],template:function(o,n){1&o&&(t.TgZ(0,"h2",0),t._uU(1,"Channel Option Change"),t.qZA(),t.TgZ(2,"mat-dialog-content",1)(3,"div",2)(4,"label"),t._uU(5),t.qZA(),t.YNc(6,b,1,1,"input",3)(7,A,5,3,"select",4),t.qZA()(),t.TgZ(8,"mat-dialog-actions",5)(9,"button",6),t.NdJ("click",function(){return n.confirm()}),t._uU(10,"Confirm"),t.qZA(),t.TgZ(11,"button",7),t._uU(12,"Cancel"),t.qZA()()),2&o&&(t.xp6(5),t.Oqu(n.model.title),t.xp6(1),t.Q6J("ngIf","text"==n.model.type),t.xp6(1),t.Q6J("ngIf","checkbox"==n.model.type))},dependencies:[p.O5,d.ZT,d.uh,d.H8,d.xY,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.On],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px;display:block}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:20px 0}.target-text[_ngcontent-%COMP%]{border:1px solid #555;background-color:#000;color:#eee;font-size:14px;font-weight:500;padding:8px;width:320px}.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active{border-color:#10a040}.form-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;align-content:stretch;align-items:stretch;justify-content:stretch;justify-items:stretch;padding:8px 0}.form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1 1 auto;color:#bbb;font-size:13px;text-transform:uppercase;padding:4px 0;font-weight:500}.form-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1 1 auto;width:432px}.form-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1 1 auto;width:450px}"]})}return i})();var U=a(3107),D=a(1842),h=a(6956),N=a(8287),I=a(8054),q=a(9826),k=a(9157);function J(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.viewInitialMessage())}),t._uU(1,"View"),t.qZA()}}function w(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"div",21),t._uU(7),t.TgZ(8,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.remove())}),t._uU(9,"Delete"),t.qZA()()(),t.TgZ(10,"div",19)(11,"div",20),t._uU(12,"Topic"),t.qZA(),t.TgZ(13,"div",21),t._uU(14),t.TgZ(15,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeOption("Topic","topic",n.channel.topic))}),t._uU(16,"Change"),t.qZA()()(),t.TgZ(17,"div",19)(18,"div",20),t._uU(19,"Status"),t.qZA(),t.TgZ(20,"div",21),t._uU(21),t.qZA()(),t.TgZ(22,"div",19)(23,"div",20),t._uU(24,"Initial Message"),t.qZA(),t.TgZ(25,"div",21),t._uU(26),t.YNc(27,J,2,0,"a",23),t.qZA()(),t.TgZ(28,"div",19)(29,"div",20),t._uU(30,"Client Limit"),t.qZA(),t.TgZ(31,"div",21),t._uU(32),t.ALo(33,"unlimited"),t.TgZ(34,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeOption("Client Limit","clientLimit",n.channel.options.clientLimit))}),t._uU(35,"Change"),t.qZA()()(),t.TgZ(36,"div",19)(37,"div",20),t._uU(38,"Message Size Limit"),t.qZA(),t.TgZ(39,"div",21),t._uU(40),t.ALo(41,"unlimited"),t.TgZ(42,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeOption("Message Size Limit","messageSizeLimit",n.channel.options.messageSizeLimit))}),t._uU(43,"Change"),t.qZA()()(),t.TgZ(44,"div",19)(45,"div",20),t._uU(46,"Auto Destroy"),t.qZA(),t.TgZ(47,"div",21),t._uU(48),t.TgZ(49,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeOption("Auto Destroy","autoDestroy",n.channel.options.autoDestroy,"checkbox"))}),t._uU(50,"Change"),t.qZA()()(),t.TgZ(51,"div",19)(52,"div",20),t._uU(53,"Auto Destroy Idle"),t.qZA(),t.TgZ(54,"div",21),t._uU(55),t.TgZ(56,"a",22),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeOption("Auto Destroy Idle","autoDestroyIdleSeconds",n.channel.options.autoDestroyIdleSeconds))}),t._uU(57,"Change"),t.qZA()()()()()()}if(2&i){const e=t.oxw();t.xp6(7),t.hij(" ",e.channel.name," "),t.xp6(7),t.hij(" ",e.channel.topic," "),t.xp6(7),t.Oqu(e.channel.status),t.xp6(5),t.hij(" ",e.channel.hasInitialMessage?"":"None"," "),t.xp6(1),t.Q6J("ngIf",e.channel.hasInitialMessage),t.xp6(5),t.hij(" ",t.lcZ(33,9,e.channel.options.clientLimit)," "),t.xp6(8),t.hij(" ",t.lcZ(41,11,e.channel.options.messageSizeLimit)," "),t.xp6(8),t.hij(" ",e.channel.options.autoDestroy?"Yes":"No"," "),t.xp6(7),t.hij(" ",e.channel.options.autoDestroyIdleSeconds," Seconds ")}}function P(i,r){if(1&i&&(t.TgZ(0,"div",26)(1,"div",27)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"div",27)(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"div",28)(8,"a",29),t._uU(9),t.qZA()(),t.TgZ(10,"div",30)(11,"span"),t._uU(12),t.ALo(13,"date"),t.qZA()()()),2&i){const e=r.$implicit;t.xp6(3),t.Oqu(e.type),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.MGl("routerLink","/client/",e.id,""),t.xp6(1),t.Oqu(e.id),t.xp6(3),t.Oqu(t.xi3(13,5,1e3*e.subscriptionDate,"yyyy-MM-dd HH:mm:ss"))}}function S(i,r){if(1&i&&(t.TgZ(0,"div",24),t.YNc(1,P,14,8,"div",25),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.channel.subscribers)}}let H=(()=>{class i extends _.H{constructor(e,o,n,l,C,c){super(),this.activatedRoute=e,this.service=o,this.socket=n,this.dialog=l,this.router=C,this.chartService=c}ngOnInit(){var e=this;return(0,g.Z)(function*(){e.channelName=e.activatedRoute.snapshot.params.name,yield e.load(),e.subscribeWebsockets()})()}ngOnDestroy(){super.ngOnDestroy(),this.socket.unsubscribe("channel:"+this.channelName)}load(){var e=this;return(0,g.Z)(function*(){e.channel=yield e.service.get(e.channelName);let o=yield e.service.getGraph(e.channelName,"1m");e.channelChart&&e.channelChart.destroy(),e.channelChart=new(Z())(document.getElementById("messages-chart"),{type:"line",hover:{mode:"nearest",intersect:!0},data:{labels:o.labels,datasets:[{label:"Published",borderColor:"#2070e0",data:o.d.map(n=>n.s),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Received",borderColor:"#10c070",data:o.d.map(n=>n.r),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2}]},options:{animation:{duration:0},responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!0,ticks:{precision:0}}]}}})})()}subscribeWebsockets(){this.on(this.socket.onmessage).pipe((0,v.h)(e=>e.type==T.S.ChannelGraph&&e.payload.n==this.channelName),(0,v.h)(()=>null!=this.channelChart),(0,y.U)(e=>e.payload)).subscribe(e=>this.chartService.updateChart(this.channelChart,e)),this.socket.subscribe("channel:"+this.channelName,"1m")}changeOption(e,o,n,l="text"){let c=this.dialog.open(O,{width:"500px"}).componentInstance;c.model.title=e,c.model.property=o,c.model.value=n,c.model.type=l,c.onconfirmed.pipe((0,f.q)(1)).subscribe(m=>{m.confirmed&&this.service.setOption(this.channelName,m.property,m.value).then(()=>this.load())})}remove(){let o=this.dialog.open(U.z,{width:"600px"}).componentInstance;o.message='You are about to delete <b class="imp">'+this.channelName+"</b> Channel. Are you sure?",o.onclosed.pipe((0,f.q)(1)).subscribe(n=>{n&&this.service.remove(this.channelName).then(l=>{this.router.navigateByUrl("/channels")})})}viewInitialMessage(){this.dialog.open(D.n,{width:"800px"}).componentInstance.load(this.channelName)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(h.gz),t.Y36(N.T),t.Y36(I.i),t.Y36(d.uw),t.Y36(h.F0),t.Y36(q.C))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-channel-detail"]],features:[t.qOj],decls:30,vars:2,consts:[[1,"centered-body"],[1,"vertical-content"],[1,"dashboard-portlet"],[1,"portlet"],[1,"portlet-title"],[1,"portlet-canvas"],["id","messages-chart"],["class","portlet-body",4,"ngIf"],[1,"portlet","full"],[1,"portlet-body","table","table-small","nowrap"],[1,"thead"],[1,"th","fx24"],[1,"th","fx30"],[1,"th","fx22"],["class","tbody",4,"ngIf"],[2,"height","80px"],[1,"portlet-body"],[1,"portlet-table","grow","canvas-info"],[1,"key-value-table"],[1,"kvt-row"],[1,"kvt-key"],[1,"kvt-value"],[1,"change-option",3,"click"],["class","change-option",3,"click",4,"ngIf"],[1,"tbody"],["class","trow",4,"ngFor","ngForOf"],[1,"trow"],[1,"td","fx24"],[1,"td","fx30"],[3,"routerLink"],[1,"td","fx22"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Channel Messages"),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"canvas",6),t.qZA()()(),t.TgZ(8,"div",2)(9,"div",3)(10,"h3",4),t._uU(11,"Options & Actions"),t.qZA(),t.YNc(12,w,58,13,"div",7),t.qZA()()()(),t.TgZ(13,"div",0)(14,"div",1)(15,"div",8)(16,"h3",4),t._uU(17,"Channel Subscribers"),t.qZA(),t.TgZ(18,"div",9)(19,"div",10)(20,"div",11),t._uU(21,"Type"),t.qZA(),t.TgZ(22,"div",11),t._uU(23,"Name"),t.qZA(),t.TgZ(24,"div",12),t._uU(25,"Id"),t.qZA(),t.TgZ(26,"div",13),t._uU(27,"Subscribed Date"),t.qZA()(),t.YNc(28,S,2,1,"div",14),t.qZA()()()(),t._UZ(29,"div",15)),2&o&&(t.xp6(12),t.Q6J("ngIf",n.channel),t.xp6(16),t.Q6J("ngIf",n.channel))},dependencies:[p.sg,p.O5,h.rH,p.uU,k.O]})}return i})();var Y=a(658);let j=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[p.ez,Y.D,d.Is,s.u5,h.Bz.forChild([{path:":name",component:H}])]})}return i})()}}]);