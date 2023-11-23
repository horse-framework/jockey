"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[928],{3928:(R,O,m)=>{m.r(O),m.d(O,{CacheModule:()=>D});var C=m(9808),T=m(655),A=m(2962),e=m(6435),q=m(6252),v=m(6663);function I(d,_){if(1&d&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),e._uU(4,"Expiration"),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.ALo(7,"date"),e.qZA()(),e.TgZ(8,"div",8)(9,"div",9),e._uU(10,"Warning Time"),e.qZA(),e.TgZ(11,"div",10),e._uU(12),e.ALo(13,"date"),e.qZA()(),e.TgZ(14,"div",8)(15,"div",9),e._uU(16,"Warn Count"),e.qZA(),e.TgZ(17,"div",10),e._uU(18),e.qZA()(),e.TgZ(19,"div",8)(20,"div",9),e._uU(21,"Tags"),e.qZA(),e.TgZ(22,"div",10),e._uU(23),e.qZA()()(),e.TgZ(24,"textarea",11),e._uU(25),e.qZA()()),2&d){const c=e.oxw();e.xp6(6),e.Oqu(e.xi3(7,5,1e3*c.model.expiration,"yyyy-MM-dd HH:mm:ss")),e.xp6(6),e.Oqu(e.xi3(13,8,1e3*c.model.warningDate,"yyyy-MM-dd HH:mm:ss")),e.xp6(6),e.Oqu(c.model.warnCount),e.xp6(5),e.Oqu(c.model.tags.join(", ")),e.xp6(2),e.Oqu(c.model.value)}}let j=(()=>{class d{constructor(c,s){this.cacheService=c,this.dialog=s,this.model=null}ngOnInit(){}remove(){this.cacheService.remove(this.model.key).then(()=>{this.dialog.closeAll()})}}return d.\u0275fac=function(c){return new(c||d)(e.Y36(q.Q),e.Y36(v.uw))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-cache-view-modal"]],decls:9,vars:2,consts:[["mat-dialog-title","",1,"title"],[1,"content"],["class","cache-value",4,"ngIf"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-grey"],["mat-button","",1,"modal-btn","btn-red",3,"click"],[1,"cache-value"],[1,"key-value-table"],[1,"kvt-row"],[1,"kvt-key-narrow"],[1,"kvt-value"],["readonly","",2,"cursor","text"]],template:function(c,s){1&c&&(e.TgZ(0,"h2",0),e._uU(1),e.qZA(),e.TgZ(2,"mat-dialog-content",1),e.YNc(3,I,26,11,"div",2),e.qZA(),e.TgZ(4,"mat-dialog-actions",3)(5,"button",4),e._uU(6,"Close"),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return s.remove()}),e._uU(8,"Remove"),e.qZA()()),2&c&&(e.xp6(1),e.Oqu(null==s.model?null:s.model.key),e.xp6(2),e.Q6J("ngIf",s.model))},directives:[v.uh,v.xY,C.O5,v.H8,v.ZT],pipes:[C.uU],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.cache-value[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin:8px 0;border:1px solid #999;background-color:#000;padding:5px;width:540px;height:140px;font-family:Courier New,Courier,monospace;font-size:13px;font-weight:400;color:#eee;resize:none}"]}),d})();var k=m(8929),b=m(4182);let J=(()=>{class d{constructor(){this._onconfirmed=new k.xQ,this._confirmed=!1,this.model={key:"",duration:60,expirationWarning:0,tags:[],tagsAll:"",content:""}}get onconfirmed(){return this._onconfirmed}ngOnInit(){}ngOnDestroy(){this._confirmed||this._onconfirmed.next(null)}create(){this.model.key=this.model.key.trim(),!(this.model.key.length<1)&&(this.model.tagsAll.length>0&&(this.model.tags=this.model.tagsAll.split(",").map(c=>c.trim()).filter(c=>c.length>0)),this._confirmed=!0,this._onconfirmed.next(this.model))}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-cache-create-modal"]],decls:29,vars:5,consts:[["mat-dialog-title","",1,"title"],[1,"content"],[1,"form-item"],["placeholder","Cache Key","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Duration in seconds","type","number",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Zero for disabled. In seconds.","type","number",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Type multiple tags with comma seperator","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],["placeholder","Cache Item Content","type","text",1,"jockey-text",3,"ngModel","ngModelChange"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-green",3,"click"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-grey"]],template:function(c,s){1&c&&(e.TgZ(0,"h2",0),e._uU(1,"Create Cache Item"),e.qZA(),e.TgZ(2,"mat-dialog-content",1)(3,"div")(4,"div",2)(5,"label"),e._uU(6,"Key"),e.qZA(),e.TgZ(7,"input",3),e.NdJ("ngModelChange",function(p){return s.model.key=p}),e.qZA()(),e.TgZ(8,"div",2)(9,"label"),e._uU(10,"Duration"),e.qZA(),e.TgZ(11,"input",4),e.NdJ("ngModelChange",function(p){return s.model.duration=p}),e.qZA()(),e.TgZ(12,"div",2)(13,"label"),e._uU(14,"Warning Duration"),e.qZA(),e.TgZ(15,"input",5),e.NdJ("ngModelChange",function(p){return s.model.expirationWarning=p}),e.qZA()(),e.TgZ(16,"div",2)(17,"label"),e._uU(18,"Tags"),e.qZA(),e.TgZ(19,"input",6),e.NdJ("ngModelChange",function(p){return s.model.tagsAll=p}),e.qZA()(),e.TgZ(20,"div",2)(21,"label"),e._uU(22,"Value"),e.qZA(),e.TgZ(23,"textarea",7),e.NdJ("ngModelChange",function(p){return s.model.content=p}),e.qZA()()()(),e.TgZ(24,"mat-dialog-actions",8)(25,"button",9),e.NdJ("click",function(){return s.create()}),e._uU(26,"Create"),e.qZA(),e.TgZ(27,"button",10),e._uU(28,"Cancel"),e.qZA()()),2&c&&(e.xp6(7),e.Q6J("ngModel",s.model.key),e.xp6(4),e.Q6J("ngModel",s.model.duration),e.xp6(4),e.Q6J("ngModel",s.model.expirationWarning),e.xp6(4),e.Q6J("ngModel",s.model.tagsAll),e.xp6(4),e.Q6J("ngModel",s.model.content))},directives:[v.uh,v.xY,b.Fj,b.JJ,b.On,b.wV,v.H8,v.ZT],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px;display:block}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.target-text[_ngcontent-%COMP%]{border:1px solid #555;background-color:#000;color:#eee;font-size:14px;font-weight:500;padding:8px;width:320px}.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active{border-color:#10a040}.form-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;align-content:stretch;align-items:stretch;justify-content:stretch;justify-items:stretch;padding:8px 0}.form-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1 1 auto;color:#bbb;font-size:13px;font-weight:500}.form-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1 1 auto}.form-item[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-family:Ubuntu,sans-serif;height:80px;line-height:20px;resize:none}"]}),d})();var P=m(2986);function U(d,_){if(1&d){const c=e.EpF();e.TgZ(0,"div",13),e._UZ(1,"div",14),e.TgZ(2,"div",15)(3,"span"),e._uU(4),e.qZA()(),e.TgZ(5,"div",16)(6,"span"),e._uU(7),e.ALo(8,"date"),e.qZA()(),e.TgZ(9,"div",16)(10,"span"),e._uU(11),e.ALo(12,"date"),e.qZA()(),e.TgZ(13,"div",17)(14,"span"),e._uU(15),e.qZA()(),e.TgZ(16,"div",18)(17,"span"),e._uU(18),e.qZA()(),e.TgZ(19,"div",19)(20,"button",20),e.NdJ("click",function(){const p=e.CHM(c).$implicit;return e.oxw(2).remove(p.key)}),e._uU(21,"Remove"),e.qZA(),e.TgZ(22,"button",21),e.NdJ("click",function(){const p=e.CHM(c).$implicit;return e.oxw(2).view(p.key)}),e._uU(23,"View"),e.qZA()()()}if(2&d){const c=_.$implicit;e.xp6(4),e.Oqu(c.key),e.xp6(3),e.hij("",e.xi3(8,5,1e3*c.expiration,"yyyy-MM-dd HH:mm:ss")," UTC"),e.xp6(4),e.hij("",e.xi3(12,8,1e3*c.warningDate,"yyyy-MM-dd HH:mm:ss")," UTC"),e.xp6(4),e.Oqu(c.warnCount),e.xp6(3),e.Oqu(c.tags.join(", "))}}function E(d,_){if(1&d){const c=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"a",5),e.NdJ("click",function(){return e.CHM(c),e.oxw().create()}),e.qZA()(),e.TgZ(5,"div",6),e._uU(6,"Key"),e.qZA(),e.TgZ(7,"div",7),e._uU(8,"Expiration"),e.qZA(),e.TgZ(9,"div",7),e._uU(10,"Warning Date"),e.qZA(),e.TgZ(11,"div",8),e._uU(12,"Warn Count"),e.qZA(),e.TgZ(13,"div",9),e._uU(14,"Tags"),e.qZA(),e.TgZ(15,"div",10),e._uU(16,"Action"),e.qZA()(),e.TgZ(17,"div",11),e.YNc(18,U,24,11,"div",12),e.qZA()()()}if(2&d){const c=e.oxw();e.xp6(18),e.Q6J("ngForOf",c.caches)}}let N=(()=>{class d extends A.H{constructor(c,s){super(),this.cacheService=c,this.dialog=s}ngOnInit(){return(0,T.mG)(this,void 0,void 0,function*(){this.caches=yield this.cacheService.list()})}remove(c){this.cacheService.remove(c).then(()=>(0,T.mG)(this,void 0,void 0,function*(){this.caches=yield this.cacheService.list()}))}view(c){return(0,T.mG)(this,void 0,void 0,function*(){var s=yield this.cacheService.get(c);s&&(this.dialog.open(j,{width:"600px"}).componentInstance.model=s)})}create(){this.dialog.open(J,{width:"600px"}).componentInstance.onconfirmed.pipe((0,P.q)(1)).subscribe(h=>{h&&this.cacheService.create(h.key,h.content,h.duration,h.expirationWarning,h.tags).then(p=>{p&&this.ngOnInit()})})}}return d.\u0275fac=function(c){return new(c||d)(e.Y36(q.Q),e.Y36(v.uw))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-cache"]],features:[e.qOj],decls:1,vars:1,consts:[["class","cache",4,"ngIf"],[1,"cache"],[1,"table"],[1,"thead"],[1,"th","fx40px"],["title","Create New Item",1,"fa","fa-solid","fa-plus","hreverse",3,"click"],[1,"th","fx20"],[1,"th","fx14"],[1,"th","fx12"],[1,"th","fx26"],[1,"th","fx12","tright",2,"display","block"],[1,"tbody"],["class","trow",4,"ngFor","ngForOf"],[1,"trow"],[1,"td","fx40px"],[1,"td","fx20"],[1,"td","fx14"],[1,"td","fx12"],[1,"td","fx26"],[1,"td","fx12","tright"],[1,"cache-button","red",3,"click"],[1,"cache-button","blue",3,"click"]],template:function(c,s){1&c&&e.YNc(0,E,19,1,"div",0),2&c&&e.Q6J("ngIf",s.caches)},directives:[C.O5,C.sg],pipes:[C.uU],styles:[".cache[_ngcontent-%COMP%]{margin:auto;padding:0 60px;text-align:center}.cache[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;text-align:left}.cache-button[_ngcontent-%COMP%]{border:2px solid transparent;border-radius:2px;color:#f0f0f0;padding:6px 10px;min-width:90px;margin:-6px 0 -6px 14px;background-color:transparent}.cache-button.red[_ngcontent-%COMP%]{border-color:#c02020}.cache-button.red[_ngcontent-%COMP%]:hover{border-color:#f02020}.cache-button.blue[_ngcontent-%COMP%]{border-color:#1050a0}.cache-button.blue[_ngcontent-%COMP%]:hover{border-color:#1070c0}"]}),d})();var H=m(823),w=m(1887);let D=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[[C.ez,w.D,v.Is,b.u5,H.Bz.forChild([{path:"",component:N}])]]}),d})()},655:(R,O,m)=>{function j(t,n,o,r){return new(o||(o=Promise))(function(i,l){function f(y){try{u(r.next(y))}catch(M){l(M)}}function x(y){try{u(r.throw(y))}catch(M){l(M)}}function u(y){y.done?i(y.value):function a(i){return i instanceof o?i:new o(function(l){l(i)})}(y.value).then(f,x)}u((r=r.apply(t,n||[])).next())})}m.d(O,{mG:()=>j})}}]);