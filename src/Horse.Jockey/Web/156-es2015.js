"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[156],{30156:function(e,t,n){n.r(t),n.d(t,{QueueModule:function(){return W}});var o=n(38583),i=n(64762),s=n(6823),a=n.n(s),u=n(20945),r=n(52962),c=n(68823),d=n(79765),g=n(33018),l=n(71636);let p=(()=>{class e{constructor(){this._onclosed=new d.xQ,this._confirmed=!1}get onclosed(){return this._onclosed}ngOnDestroy(){this._confirmed||this._onclosed.next(!1)}confirm(e){this._confirmed=!0,this._onclosed.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-confirm-modal"]],decls:11,vars:1,consts:[["mat-dialog-title","",1,"title"],[1,"content"],[3,"innerHTML"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-confirm",3,"click"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-cancel",3,"click"]],template:function(e,t){1&e&&(g.TgZ(0,"h2",0),g._uU(1,"Confirmation"),g.qZA(),g.TgZ(2,"mat-dialog-content",1),g._UZ(3,"p",2),g.TgZ(4,"p"),g._uU(5,"Please confirm your action."),g.qZA(),g.qZA(),g.TgZ(6,"mat-dialog-actions",3),g.TgZ(7,"button",4),g.NdJ("click",function(){return t.confirm(!0)}),g._uU(8,"Confirm"),g.qZA(),g.TgZ(9,"button",5),g.NdJ("click",function(){return t.confirm(!1)}),g._uU(10,"Cancel"),g.qZA(),g.qZA()),2&e&&(g.xp6(3),g.Q6J("innerHTML",t.message,g.oJD))},directives:[l.uh,l.xY,l.H8,l.ZT],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:flex-start;align-content:flex-start;padding:15px 0}.modal-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid;border-radius:2px;background-color:transparent;font-weight:500;font-size:14px;color:#f0f0f0;margin-left:16px}.btn-cancel[_ngcontent-%COMP%]{border-color:#777}.btn-cancel[_ngcontent-%COMP%]:hover{border-color:#999}.btn-confirm[_ngcontent-%COMP%]{border-color:#c01010}.btn-confirm[_ngcontent-%COMP%]:hover{border-color:#f33}"]}),e})();var Z=n(15257),q=n(90665);let m=(()=>{class e{constructor(){this._onconfirmed=new d.xQ,this.target="",this._confirmed=!1}get onconfirmed(){return this._onconfirmed}ngOnInit(){}confirm(){this._confirmed=!0,this._onconfirmed.next(this.target)}ngOnDestroy(){this._confirmed||this._onconfirmed.next(null)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-messsage-move-modal"]],decls:17,vars:2,consts:[["mat-dialog-title","",1,"title"],[1,"content"],[1,"imp"],["placeholder","Queue Name","type","text",1,"target-text",3,"ngModel","ngModelChange"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-confirm",3,"click"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-cancel"]],template:function(e,t){1&e&&(g.TgZ(0,"h2",0),g._uU(1,"Confirmation"),g.qZA(),g.TgZ(2,"mat-dialog-content",1),g.TgZ(3,"p"),g._uU(4," You are about to move "),g.TgZ(5,"b",2),g._uU(6),g.qZA(),g._uU(7," messages. Please type the target queue name."),g._UZ(8,"br"),g._uU(9," If the target queue doesn't exist, it will be created with default queue options. "),g.qZA(),g.TgZ(10,"div"),g.TgZ(11,"input",3),g.NdJ("ngModelChange",function(e){return t.target=e}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(12,"mat-dialog-actions",4),g.TgZ(13,"button",5),g.NdJ("click",function(){return t.confirm()}),g._uU(14,"Confirm"),g.qZA(),g.TgZ(15,"button",6),g._uU(16,"Cancel"),g.qZA(),g.qZA()),2&e&&(g.xp6(6),g.Oqu(t.messageCount),g.xp6(5),g.Q6J("ngModel",t.target))},directives:[l.uh,l.xY,q.Fj,q.JJ,q.On,l.H8,l.ZT],styles:[".title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px;display:block}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:20px 0}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:flex-start;align-content:flex-start;padding:15px 0}.modal-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid;border-radius:2px;background-color:transparent;font-weight:500;font-size:14px;color:#f0f0f0;margin-left:16px}.btn-cancel[_ngcontent-%COMP%]{border-color:#777}.btn-cancel[_ngcontent-%COMP%]:hover{border-color:#999}.btn-confirm[_ngcontent-%COMP%]{border-color:#10a040}.btn-confirm[_ngcontent-%COMP%]:hover{border-color:#10d060}.target-text[_ngcontent-%COMP%]{border:1px solid #555;background-color:#000;color:#eee;font-size:14px;font-weight:500;padding:8px;width:320px}.target-text[_ngcontent-%COMP%]:focus, .target-text[_ngcontent-%COMP%]:active{border-color:#10a040}"]}),e})();var f=n(59281);function v(e,t){if(1&e&&(g.TgZ(0,"div",5),g.TgZ(1,"div",19),g._uU(2),g.qZA(),g.TgZ(3,"div",7),g._uU(4),g.qZA(),g.qZA()),2&e){const e=t.$implicit;g.xp6(2),g.Oqu(e.name),g.xp6(2),g.Oqu(e.value)}}function h(e,t){if(1&e&&(g.TgZ(0,"div",4),g.YNc(1,v,5,2,"div",18),g.qZA()),2&e){const e=g.oxw();g.xp6(1),g.Q6J("ngForOf",e.message.headers)}}function x(e,t){1&e&&(g.TgZ(0,"p"),g._uU(1," The message has no headers "),g.qZA())}function T(e,t){if(1&e&&(g.TgZ(0,"div",20),g._uU(1),g.qZA()),2&e){const e=g.oxw();g.xp6(1),g.Oqu(e.message.message)}}function b(e,t){if(1&e&&(g._UZ(0,"pre",21),g.ALo(1,"prettyprint")),2&e){const e=g.oxw();g.Q6J("innerHTML",g.lcZ(1,1,e.message.messageObj),g.oJD)}}let _=(()=>{class e{constructor(){this.consumed=!1,this.isJson=!1}ngOnInit(){}setJson(e){this.isJson=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-queue-message-modal"]],decls:66,vars:22,consts:[["mat-dialog-title","",1,"title"],[1,"content"],[1,"queue-message"],[1,"message-props"],[1,"key-value-table"],[1,"kvt-row"],[1,"kvt-key-narrow"],[1,"kvt-value"],[1,"message-content"],[1,"message-headers"],["class","key-value-table",4,"ngIf"],[4,"ngIf"],[1,"message-content-title"],[3,"click"],["class","string-content",4,"ngIf"],["class","string-content",3,"innerHTML",4,"ngIf"],[1,"buttons"],["mat-button","","mat-dialog-close","",1,"modal-btn","btn-cancel"],["class","kvt-row",4,"ngFor","ngForOf"],[1,"kvt-key"],[1,"string-content"],[1,"string-content",3,"innerHTML"]],template:function(e,t){1&e&&(g.TgZ(0,"h2",0),g._uU(1,"Queue Message"),g.qZA(),g.TgZ(2,"mat-dialog-content",1),g.TgZ(3,"div",2),g.TgZ(4,"div",3),g.TgZ(5,"div",4),g.TgZ(6,"div",5),g.TgZ(7,"div",6),g._uU(8,"Id"),g.qZA(),g.TgZ(9,"div",7),g._uU(10),g.qZA(),g.qZA(),g.TgZ(11,"div",5),g.TgZ(12,"div",6),g._uU(13,"Source"),g.qZA(),g.TgZ(14,"div",7),g._uU(15),g.qZA(),g.qZA(),g.TgZ(16,"div",5),g.TgZ(17,"div",6),g._uU(18,"High Priority"),g.qZA(),g.TgZ(19,"div",7),g._uU(20),g.qZA(),g.qZA(),g.TgZ(21,"div",5),g.TgZ(22,"div",6),g._uU(23,"Created Date"),g.qZA(),g.TgZ(24,"div",7),g._uU(25),g.ALo(26,"date"),g.qZA(),g.qZA(),g.TgZ(27,"div",5),g.TgZ(28,"div",6),g._uU(29,"Deadline"),g.qZA(),g.TgZ(30,"div",7),g._uU(31),g.ALo(32,"date"),g.qZA(),g.qZA(),g.TgZ(33,"div",5),g.TgZ(34,"div",6),g._uU(35,"Persistently Saved"),g.qZA(),g.TgZ(36,"div",7),g._uU(37),g.qZA(),g.qZA(),g.TgZ(38,"div",5),g.TgZ(39,"div",6),g._uU(40,"Send Count"),g.qZA(),g.TgZ(41,"div",7),g._uU(42),g.qZA(),g.qZA(),g.TgZ(43,"div",5),g.TgZ(44,"div",6),g._uU(45,"Delivery Count"),g.qZA(),g.TgZ(46,"div",7),g._uU(47),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(48,"div",8),g.TgZ(49,"h4"),g._uU(50,"Headers"),g.qZA(),g.TgZ(51,"div",9),g.YNc(52,h,2,1,"div",10),g.YNc(53,x,2,0,"p",11),g.qZA(),g.TgZ(54,"div",12),g.TgZ(55,"h4"),g._uU(56,"Message Content"),g.qZA(),g.TgZ(57,"span",13),g.NdJ("click",function(){return t.setJson(!1)}),g._uU(58,"String"),g.qZA(),g.TgZ(59,"span",13),g.NdJ("click",function(){return t.setJson(!0)}),g._uU(60,"JSON"),g.qZA(),g.qZA(),g.YNc(61,T,2,1,"div",14),g.YNc(62,b,2,3,"pre",15),g.qZA(),g.qZA(),g.qZA(),g.TgZ(63,"mat-dialog-actions",16),g.TgZ(64,"button",17),g._uU(65,"Close"),g.qZA(),g.qZA()),2&e&&(g.xp6(10),g.Oqu(t.message.id),g.xp6(5),g.Oqu(t.message.source),g.xp6(5),g.Oqu(t.message.priority),g.xp6(5),g.hij(" ",g.xi3(26,16,1e3*t.message.createdDate,"yyyy-MM-dd HH:mm:ss")," "),g.xp6(6),g.hij(" ",0==t.message.deadline?"No":g.xi3(32,19,1e3*t.message.deadline,"yyyy-MM-dd HH:mm:ss")," "),g.xp6(6),g.Oqu(t.message.isSaved),g.xp6(5),g.Oqu(t.message.sendCount),g.xp6(5),g.Oqu(t.message.deliveryCount),g.xp6(5),g.Q6J("ngIf",t.message.headers.length>0),g.xp6(1),g.Q6J("ngIf",0==t.message.headers.length),g.xp6(4),g.ekj("active",!t.isJson),g.xp6(2),g.ekj("active",t.isJson),g.xp6(2),g.Q6J("ngIf",!t.isJson),g.xp6(1),g.Q6J("ngIf",t.isJson))},directives:[l.uh,l.xY,o.O5,l.H8,l.ZT,o.sg],pipes:[o.uU,f.F],styles:['.title[_ngcontent-%COMP%]{color:#eee}.content[_ngcontent-%COMP%]{padding:0 25px 10px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d2d2d2;font-size:14px;line-height:30px}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;align-items:flex-start;align-content:flex-start;padding:15px 0}.modal-btn[_ngcontent-%COMP%]{padding:10px 20px;border:2px solid;border-radius:2px;background-color:transparent;font-weight:500;font-size:14px;color:#f0f0f0;margin-left:16px}.btn-cancel[_ngcontent-%COMP%]{border-color:#777}.btn-cancel[_ngcontent-%COMP%]:hover{border-color:#999}.btn-confirm[_ngcontent-%COMP%]{border-color:#c01010}.btn-confirm[_ngcontent-%COMP%]:hover{border-color:#f33}.queue-message[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;align-content:stretch;justify-content:stretch;justify-items:stretch}.message-props[_ngcontent-%COMP%]{flex:1 1 200px}.message-content[_ngcontent-%COMP%]{flex:1 1 auto;border-left:1px solid #333;padding-left:20px}.message-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:block;color:#ccc;font-size:12px;font-weight:500;text-transform:uppercase;margin:0;padding:0}.message-headers[_ngcontent-%COMP%]{padding:5px 0 10px}.message-headers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin:10px 0;padding:0;color:#aaa}.message-content-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:stretch;align-items:stretch;justify-items:stretch;justify-content:stretch;height:28px}.message-content-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{flex:1 0 auto}.message-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:0 1 auto;padding:4px;margin-left:10px;color:#aaa;font-size:12px;cursor:pointer;margin-top:-4px}.message-content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#eee}.message-content-title[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:#fa2}.string-content[_ngcontent-%COMP%]{width:440px;clear:both;border:1px solid #333;border-radius:2px;padding:10px;margin:0;background-color:#000;height:222px;box-sizing:border-box;color:#eee;line-height:22px;font-size:13px;font-family:"Ubuntu Mono",monospace;overflow:auto}']}),e})();var A=n(72667),M=n(59049),C=n(65608),U=n(2625),O=n(68392),y=n(33369);function P(e,t){if(1&e&&(g.TgZ(0,"div",14),g._uU(1),g.ALo(2,"date"),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.Oqu(g.xi3(2,1,1e3*e.queue.stats.lastReceived,"yyyy-MM-dd HH:mm:ss"))}}function w(e,t){1&e&&(g.TgZ(0,"div",14),g._uU(1,"None"),g.qZA())}function k(e,t){if(1&e&&(g.TgZ(0,"div",14),g._uU(1),g.ALo(2,"date"),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.hij(" ",g.xi3(2,1,1e3*e.queue.stats.lastSent,"yyyy-MM-dd HH:mm:ss")," ")}}function N(e,t){1&e&&(g.TgZ(0,"div",14),g._uU(1,"None"),g.qZA())}function J(e,t){if(1&e&&(g.TgZ(0,"div",3),g.TgZ(1,"h3",4),g._uU(2,"Queue Statistics"),g.qZA(),g.TgZ(3,"div",10),g.TgZ(4,"div",11),g.TgZ(5,"div",12),g.TgZ(6,"div",13),g._uU(7,"Published Messages"),g.qZA(),g.TgZ(8,"div",14),g._uU(9),g.qZA(),g.qZA(),g.TgZ(10,"div",12),g.TgZ(11,"div",13),g._uU(12,"Consumed Messages"),g.qZA(),g.TgZ(13,"div",14),g._uU(14),g.qZA(),g.qZA(),g.TgZ(15,"div",12),g.TgZ(16,"div",13),g._uU(17,"Acknowledge Messages"),g.qZA(),g.TgZ(18,"div",14),g._uU(19),g.qZA(),g.qZA(),g.TgZ(20,"div",12),g.TgZ(21,"div",13),g._uU(22,"Total Timed out Messages"),g.qZA(),g.TgZ(23,"div",14),g._uU(24),g.qZA(),g.qZA(),g.TgZ(25,"div",12),g.TgZ(26,"div",13),g._uU(27,"Total Errors"),g.qZA(),g.TgZ(28,"div",14),g._uU(29),g.qZA(),g.qZA(),g.TgZ(30,"div",12),g.TgZ(31,"div",13),g._uU(32,"Last Publish Date"),g.qZA(),g.YNc(33,P,3,4,"div",15),g.YNc(34,w,2,0,"div",15),g.qZA(),g.TgZ(35,"div",12),g.TgZ(36,"div",13),g._uU(37,"Last Consume Date"),g.qZA(),g.YNc(38,k,3,4,"div",15),g.YNc(39,N,2,0,"div",15),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e){const e=g.oxw();g.xp6(9),g.Oqu(e.queue.stats.totalReceived),g.xp6(5),g.AsE("",e.queue.stats.totalDelivered," consumes, ",e.queue.stats.totalSent," unique msgs "),g.xp6(5),g.lnq("",e.queue.stats.totalAck," ack, ",e.queue.stats.totalNack," nack, ",e.queue.stats.totalUnack," unack"),g.xp6(5),g.Oqu(e.queue.stats.totalTimedout),g.xp6(5),g.Oqu(e.queue.stats.totalErrors),g.xp6(4),g.Q6J("ngIf",e.queue.stats.lastReceived>0),g.xp6(1),g.Q6J("ngIf",0==e.queue.stats.lastReceived),g.xp6(4),g.Q6J("ngIf",e.queue.stats.lastSent>0),g.xp6(1),g.Q6J("ngIf",0==e.queue.stats.lastSent)}}function I(e,t){if(1&e&&(g.TgZ(0,"div",14),g._uU(1),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.hij("",e.queue.info.ackTimeout," ms timeout")}}function H(e,t){1&e&&(g.TgZ(0,"div",14),g._uU(1,"No timeout"),g.qZA())}function Q(e,t){1&e&&(g.TgZ(0,"div",14),g._uU(1,"No Timeout"),g.qZA())}function S(e,t){if(1&e&&(g.TgZ(0,"div",14),g._uU(1),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.hij(" ",e.queue.info.msgTimeout," milliseconds ")}}function Y(e,t){1&e&&(g.TgZ(0,"div",14),g._uU(1,"No Delay"),g.qZA())}function D(e,t){if(1&e&&(g.TgZ(0,"div",14),g._uU(1),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.hij(" ",e.queue.info.delayBetweenMessages," milliseconds ")}}function R(e,t){1&e&&(g.TgZ(0,"div",14),g._uU(1,"No Delay"),g.qZA())}function j(e,t){if(1&e&&(g.TgZ(0,"div",14),g._uU(1),g.qZA()),2&e){const e=g.oxw(2);g.xp6(1),g.hij(" ",e.queue.info.putBackDelay," milliseconds ")}}function L(e,t){if(1&e){const e=g.EpF();g.TgZ(0,"div"),g.TgZ(1,"div",3),g.TgZ(2,"h3",4),g._uU(3,"Queue Actions"),g.qZA(),g.TgZ(4,"div",16),g.TgZ(5,"div",17),g.TgZ(6,"div",18),g.TgZ(7,"div"),g.TgZ(8,"button",19),g.NdJ("click",function(){return g.CHM(e),g.oxw().read()}),g._uU(9,"Read First Message"),g.qZA(),g.TgZ(10,"p"),g._uU(11,"Shows the first message information. Message will "),g.TgZ(12,"b"),g._uU(13,"not"),g.qZA(),g._uU(14," be consumed."),g.qZA(),g.qZA(),g.TgZ(15,"div"),g.TgZ(16,"button",20),g.NdJ("click",function(){return g.CHM(e),g.oxw().consume()}),g._uU(17,"Consume First Message"),g.qZA(),g.TgZ(18,"p"),g._uU(19,"Shows the first message information. Message will be "),g.TgZ(20,"b"),g._uU(21,"consumed."),g.qZA(),g.qZA(),g.qZA(),g.TgZ(22,"div"),g.TgZ(23,"button",21),g.NdJ("click",function(){return g.CHM(e),g.oxw().move()}),g._uU(24,"Move Messages"),g.qZA(),g.TgZ(25,"p"),g._uU(26,"Moves all messages to another queue and removes them "),g.TgZ(27,"b"),g._uU(28,"permanently."),g.qZA(),g.qZA(),g.qZA(),g.TgZ(29,"div"),g.TgZ(30,"button",22),g.NdJ("click",function(){return g.CHM(e),g.oxw().clear()}),g._uU(31,"Clear All Messages"),g.qZA(),g.TgZ(32,"p"),g._uU(33,"Clears queue. Deletes all messages "),g.TgZ(34,"b"),g._uU(35,"permanently!"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(36,"div"),g.TgZ(37,"button",23),g.NdJ("click",function(){return g.CHM(e),g.oxw().remove()}),g._uU(38,"Delete Queue and All Messages"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(39,"div",24),g.TgZ(40,"div"),g.TgZ(41,"em"),g._uU(42,"Current Status"),g.qZA(),g.TgZ(43,"strong"),g._uU(44),g.qZA(),g.qZA(),g.TgZ(45,"div"),g.TgZ(46,"em"),g._uU(47,"New Status"),g.qZA(),g.TgZ(48,"div"),g.TgZ(49,"button",25),g.NdJ("click",function(){return g.CHM(e),g.oxw().setStatus("Paused")}),g._uU(50,"Paused"),g.qZA(),g.qZA(),g.TgZ(51,"div"),g.TgZ(52,"button",26),g.NdJ("click",function(){return g.CHM(e),g.oxw().setStatus("Running")}),g._uU(53,"Running"),g.qZA(),g.qZA(),g.TgZ(54,"div"),g.TgZ(55,"button",27),g.NdJ("click",function(){return g.CHM(e),g.oxw().setStatus("OnlyPush")}),g._uU(56,"Only Push"),g.qZA(),g.qZA(),g.TgZ(57,"div"),g.TgZ(58,"button",28),g.NdJ("click",function(){return g.CHM(e),g.oxw().setStatus("OnlyConsume")}),g._uU(59,"Only Consume"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(60,"div",3),g.TgZ(61,"h3",4),g._uU(62,"Queue Information"),g.qZA(),g.TgZ(63,"div",5),g.TgZ(64,"div",11),g.TgZ(65,"div",12),g.TgZ(66,"div",13),g._uU(67,"Name"),g.qZA(),g.TgZ(68,"div",14),g._uU(69),g.qZA(),g.qZA(),g.TgZ(70,"div",12),g.TgZ(71,"div",13),g._uU(72,"Active Consumers"),g.qZA(),g.TgZ(73,"div",14),g._uU(74),g.qZA(),g.qZA(),g.TgZ(75,"div",12),g.TgZ(76,"div",13),g._uU(77,"Stored Messages"),g.qZA(),g.TgZ(78,"div",14),g._uU(79),g.qZA(),g.qZA(),g._UZ(80,"div",29),g.TgZ(81,"div",12),g.TgZ(82,"div",13),g._uU(83,"Topic"),g.qZA(),g.TgZ(84,"div",14),g._uU(85),g.qZA(),g.qZA(),g.TgZ(86,"div",12),g.TgZ(87,"div",13),g._uU(88,"Type"),g.qZA(),g.TgZ(89,"div",14),g._uU(90),g.qZA(),g.qZA(),g.TgZ(91,"div",12),g.TgZ(92,"div",13),g._uU(93,"Manager"),g.qZA(),g.TgZ(94,"div",14),g._uU(95),g.qZA(),g.qZA(),g.TgZ(96,"div",12),g.TgZ(97,"div",13),g._uU(98,"Consumer Limit"),g.qZA(),g.TgZ(99,"div",14),g._uU(100),g.ALo(101,"unlimited"),g.qZA(),g.qZA(),g.TgZ(102,"div",12),g.TgZ(103,"div",13),g._uU(104,"Created Date"),g.qZA(),g.TgZ(105,"div",14),g._uU(106),g.ALo(107,"date"),g.qZA(),g.qZA(),g._UZ(108,"div",29),g.TgZ(109,"div",12),g.TgZ(110,"div",13),g._uU(111,"Acknowledge"),g.qZA(),g.TgZ(112,"div",14),g._uU(113),g.qZA(),g.qZA(),g.TgZ(114,"div",12),g.TgZ(115,"div",13),g._uU(116,"Acknowledge Timeout"),g.qZA(),g.YNc(117,I,2,1,"div",15),g.YNc(118,H,2,0,"div",15),g.qZA(),g.TgZ(119,"div",12),g.TgZ(120,"div",13),g._uU(121,"Commit When"),g.qZA(),g.TgZ(122,"div",14),g._uU(123),g.qZA(),g.qZA(),g._UZ(124,"div",29),g.TgZ(125,"div",12),g.TgZ(126,"div",13),g._uU(127,"Message Timeout"),g.qZA(),g.YNc(128,Q,2,0,"div",15),g.YNc(129,S,2,1,"div",15),g.qZA(),g.TgZ(130,"div",12),g.TgZ(131,"div",13),g._uU(132,"Message Limit"),g.qZA(),g.TgZ(133,"div",14),g._uU(134),g.ALo(135,"unlimited"),g.qZA(),g.qZA(),g.TgZ(136,"div",12),g.TgZ(137,"div",13),g._uU(138,"Message Size Limit"),g.qZA(),g.TgZ(139,"div",14),g._uU(140),g.ALo(141,"filesize"),g.qZA(),g.qZA(),g._UZ(142,"div",29),g.TgZ(143,"div",12),g.TgZ(144,"div",13),g._uU(145,"Delay Between Messages"),g.qZA(),g.YNc(146,Y,2,0,"div",15),g.YNc(147,D,2,1,"div",15),g.qZA(),g.TgZ(148,"div",12),g.TgZ(149,"div",13),g._uU(150,"Put Back Delay"),g.qZA(),g.YNc(151,R,2,0,"div",15),g.YNc(152,j,2,1,"div",15),g.qZA(),g.TgZ(153,"div",12),g.TgZ(154,"div",13),g._uU(155,"Auto Destroy"),g.qZA(),g.TgZ(156,"div",14),g._uU(157),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&e){const e=g.oxw();let t;g.xp6(44),g.Oqu(e.queue.info.status),g.xp6(25),g.Oqu(e.queue.info.name),g.xp6(5),g.Oqu(e.queue.stats.consumers),g.xp6(5),g.Oqu(e.queue.stats.storedMsgs+e.queue.stats.storedPrioMsgs+e.queue.stats.processingMsgs+e.queue.stats.ackPendingMsgs),g.xp6(6),g.Oqu(null!==(t=e.queue.info.topic)&&void 0!==t?t:"-"),g.xp6(5),g.Oqu(e.queue.info.type),g.xp6(5),g.Oqu(e.queue.info.manager),g.xp6(5),g.Oqu(g.lcZ(101,22,e.queue.options.clientLimit)),g.xp6(6),g.Oqu(g.xi3(107,24,1e3*e.queue.info.createdDate,"yyyy-MM-dd HH:mm:ss")),g.xp6(7),g.hij(" ",e.queue.info.acknowledge," "),g.xp6(4),g.Q6J("ngIf",e.queue.info.ackTimeout>0),g.xp6(1),g.Q6J("ngIf",0==e.queue.info.ackTimeout),g.xp6(5),g.hij(" ",e.queue.options.commitWhen," "),g.xp6(5),g.Q6J("ngIf",0==e.queue.info.msgTimeout),g.xp6(1),g.Q6J("ngIf",e.queue.info.msgTimeout>0),g.xp6(5),g.hij(" ",g.lcZ(135,27,e.queue.info.messageLimit)," "),g.xp6(6),g.hij(" ",g.lcZ(141,29,e.queue.info.messageSizeLimit)," "),g.xp6(6),g.Q6J("ngIf",0==e.queue.info.delayBetweenMessages),g.xp6(1),g.Q6J("ngIf",e.queue.info.delayBetweenMessages>0),g.xp6(4),g.Q6J("ngIf",0==e.queue.info.putBackDelay),g.xp6(1),g.Q6J("ngIf",e.queue.info.putBackDelay>0),g.xp6(5),g.Oqu(e.queue.info.autoDestroy)}}let z=(()=>{class e extends r.H{constructor(e,t,n,o,i,s){super(),this.dialog=e,this.activatedRoute=t,this.queueGraphService=n,this.socket=o,this.router=i,this.queueService=s}ngOnInit(){return(0,i.mG)(this,void 0,void 0,function*(){if(this.queueName=this.activatedRoute.snapshot.params.name,null==this.queueName||0===this.queueName.length)return;yield this.load();const e={requestId:(new Date).getTime().toString(),name:this.queue.info.name};this.socket.send(c.S.QueueDetailRequest,e),this.on((0,u.F)(5e3)).subscribe(()=>this.load())})}load(){return(0,i.mG)(this,void 0,void 0,function*(){this.queue=yield this.queueService.get(this.queueName);const e=this.queueGraphService.createLabels(this.queue.graph);this.deliveryChart&&this.deliveryChart.destroy(),this.deliveryChart=new(a())(document.getElementById("queue-delivery-chart"),{type:"line",hover:{mode:"nearest",intersect:!0},data:{labels:e,datasets:[{label:"Produced",borderColor:"#2070e0",data:this.queue.graph.map(e=>e.received),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Ack",borderColor:"#12bf4a",data:this.queue.graph.map(e=>e.ack),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Neg. Ack",borderColor:"#c042ef",data:this.queue.graph.map(e=>e.nack),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Unack",borderColor:"#eec236",data:this.queue.graph.map(e=>e.unack),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Error",borderColor:"#ff3333",data:this.queue.graph.map(e=>e.error),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2}]},options:{animation:{duration:0},responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!0,ticks:{precision:0}}]}}}),this.storeChart&&this.storeChart.destroy(),this.storeChart=new(a())(document.getElementById("queue-store-chart"),{type:"line",hover:{mode:"nearest",intersect:!0},data:{labels:e,datasets:[{label:"Msgs",borderColor:"#2070e0",data:this.queue.graph.map(e=>e.stored),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"High Prio Msgs",borderColor:"#ff9911",data:this.queue.graph.map(e=>e.storedPrio),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Pending for Ack",borderColor:"#10a0a0",data:this.queue.graph.map(e=>e.pending),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2},{label:"Timeout",borderColor:"#f02020",data:this.queue.graph.map(e=>e.timeout),fill:!1,pointRadius:1,pointHitRadius:8,lineTension:.2,borderWidth:2}]},options:{animation:{duration:0},responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!0,ticks:{precision:0}}]}}})})}ngOnDestroy(){super.ngOnDestroy();const e={requestId:(new Date).getTime().toString(),name:null};this.socket.send(c.S.QueueDetailRequest,e)}read(){this.queueService.read(this.queueName).then(e=>this.showQueueMessage(e))}consume(){let e=this.dialog.open(p,{width:"600px"}).componentInstance;e.message='Your message will be <b class="imp">consumed.</b> You will see the message after you confirmed this. But queue consumers will not receive that message and it will be deleted <b class="imp">permanently.</b>',e.onclosed.pipe((0,Z.q)(1)).subscribe(e=>{e&&this.queueService.consume(this.queueName).then(e=>this.showQueueMessage(e))})}showQueueMessage(e){if(null==e)return void alert("There is no message in the queue");let t=this.dialog.open(_,{width:"900px"}).componentInstance;try{e.messageObj=JSON.parse(e.message)}catch(n){}t.message=e}clear(){let e=this.dialog.open(p,{width:"600px"}).componentInstance;e.message='All messages in queue will be deleted <b class="imp">permanently.</b>',e.onclosed.pipe((0,Z.q)(1)).subscribe(e=>{e&&this.queueService.clear(this.queueName).then(e=>this.load())})}move(){let e=this.dialog.open(m,{width:"600px"}).componentInstance;e.messageCount=321,e.onconfirmed.pipe((0,Z.q)(1)).subscribe(e=>{null==e||e.length<1||(e=e.trim(),this.queueService.move(this.queueName,e).then(e=>this.load()))})}remove(){let e=this.dialog.open(p,{width:"600px"}).componentInstance;e.message='You are about to delete your queue. The queue and all messages in it will be deleted <b class="imp">permanently.</b>',e.onclosed.pipe((0,Z.q)(1)).subscribe(e=>{e&&this.queueService.delete(this.queueName).then(e=>{this.router.navigateByUrl("/queues")})})}setStatus(e){let t=this.dialog.open(p,{width:"600px"}).componentInstance;t.message='You are about to change your queue status to <b class="imp">'+e+".</b> That operation might affect your producers and consumers.",t.onclosed.pipe((0,Z.q)(1)).subscribe(t=>{t&&this.queueService.status(this.queueName,e).then(e=>this.load())})}}return e.\u0275fac=function(t){return new(t||e)(g.Y36(l.uw),g.Y36(A.gz),g.Y36(M.J),g.Y36(C.i),g.Y36(A.F0),g.Y36(U.g))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-queue"]],features:[g.qOj],decls:16,vars:3,consts:[[1,"centered-body",3,"hidden"],[1,"vertical-content"],[1,"vertical-col"],[1,"portlet"],[1,"portlet-title"],[1,"portlet-body"],["id","queue-delivery-chart"],["id","queue-store-chart"],["class","portlet",4,"ngIf"],[4,"ngIf"],[1,"portlet-body",2,"min-height","307px"],[1,"key-value-table"],[1,"kvt-row"],[1,"kvt-key"],[1,"kvt-value"],["class","kvt-value",4,"ngIf"],[1,"portlet-body",2,"height","281px"],[1,"queue-panel"],[1,"operation-panel"],[1,"operation-button","btn-green",3,"click"],[1,"operation-button","btn-cyan",3,"click"],[1,"operation-button","btn-purple",3,"click"],[1,"operation-button","btn-orange",3,"click"],[1,"operation-button","btn-red",3,"click"],[1,"status-panel"],[1,"status-button","btn-orange",3,"click"],[1,"status-button","btn-green",3,"click"],[1,"status-button","btn-purple",3,"click"],[1,"status-button","btn-cyan",3,"click"],[1,"kvt-row","kvt-seperator"]],template:function(e,t){1&e&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div",2),g.TgZ(3,"div",3),g.TgZ(4,"h3",4),g._uU(5,"Queue Delivery"),g.qZA(),g.TgZ(6,"div",5),g._UZ(7,"canvas",6),g.qZA(),g.qZA(),g.TgZ(8,"div",3),g.TgZ(9,"h3",4),g._uU(10,"Queue Messages"),g.qZA(),g.TgZ(11,"div",5),g._UZ(12,"canvas",7),g.qZA(),g.qZA(),g.YNc(13,J,40,12,"div",8),g.qZA(),g.TgZ(14,"div",2),g.YNc(15,L,158,31,"div",9),g.qZA(),g.qZA(),g.qZA()),2&e&&(g.Q6J("hidden",null==t.queue),g.xp6(13),g.Q6J("ngIf",t.queue),g.xp6(2),g.Q6J("ngIf",t.queue))},directives:[o.O5],pipes:[o.uU,O.O,y.c],styles:[".vertical-col[_ngcontent-%COMP%]   .portlet[_ngcontent-%COMP%]{margin-bottom:18px}.queue-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:stretch;align-content:stretch;justify-items:stretch;justify-content:stretch}.operation-panel[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;flex-direction:row;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-items:flex-start;justify-content:flex-start}.operation-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1 1 50%}.operation-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 6px 14px 0;padding:0 4px;font-size:13px;line-height:20px;color:#bbb}.operation-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#fff;font-weight:500}.operation-button[_ngcontent-%COMP%]{margin:6px 4px;color:#f0f0f0;border:2px solid;border-radius:2px;padding:10px 14px;font-weight:600;background-color:transparent}.status-panel[_ngcontent-%COMP%]{flex:0 2 150px;flex-basis:150px;min-width:150px;color:#ddd}.status-panel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:5px 0}.status-panel[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:block;font-style:normal;font-size:12px}.status-panel[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-weight:500;color:#efdf20;font-size:16px;line-height:26px}.status-button[_ngcontent-%COMP%]{border:2px solid;border-radius:2px;color:#fff;width:145px;box-sizing:border-box;padding:8px 0;font-weight:600;background-color:transparent}.btn-red[_ngcontent-%COMP%]{border-color:#c01010}.btn-orange[_ngcontent-%COMP%]{border-color:#e06000}.btn-green[_ngcontent-%COMP%]{border-color:#109030}.btn-purple[_ngcontent-%COMP%]{border-color:#7620af}.btn-cyan[_ngcontent-%COMP%]{border-color:#208585}.btn-red[_ngcontent-%COMP%]:hover{border-color:#ff3030}.btn-orange[_ngcontent-%COMP%]:hover{border-color:#fa0}.btn-green[_ngcontent-%COMP%]:hover{border-color:#10f070}.btn-purple[_ngcontent-%COMP%]:hover{border-color:#9010e0}.btn-cyan[_ngcontent-%COMP%]:hover{border-color:#30c0c0}"]}),e})();var B=n(91887);let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[o.ez,B.D,l.Is,q.u5,A.Bz.forChild([{path:":name",component:z}])]]}),e})()}}]);