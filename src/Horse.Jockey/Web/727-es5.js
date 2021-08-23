!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,n){return(e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var e,i=o(t);if(n){var c=o(this).constructor;e=Reflect.construct(i,arguments,c)}else e=i.apply(this,arguments);return r(this,e)}}function r(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(self.webpackChunkweb=self.webpackChunkweb||[]).push([[727],{37727:function(r,o,c){c.r(o),c.d(o,{ClientsModule:function(){return w}});var u=c(38583),f=c(64762),a=c(52962),s=c(33018),p=c(77334);function l(t,n){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){var e=s.oxw().$implicit;s.xp6(1),s.Oqu(e.name)}}function d(t,n){1&t&&(s.TgZ(0,"em"),s._uU(1,"Not Specified"),s.qZA())}function g(t,n){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){var e=s.oxw().$implicit;s.xp6(1),s.Oqu(e.type)}}function Z(t,n){1&t&&(s.TgZ(0,"em"),s._uU(1,"Not Specified"),s.qZA())}function v(t,n){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){var e=s.oxw().$implicit;s.xp6(1),s.Oqu(e.ip)}}function h(t,n){1&t&&(s.TgZ(0,"em"),s._uU(1,"Unknown"),s.qZA())}function x(t,n){if(1&t&&(s.TgZ(0,"div",10),s.TgZ(1,"div",11),s.YNc(2,l,2,1,"span",12),s.YNc(3,d,2,0,"em",12),s.qZA(),s.TgZ(4,"div",13),s.YNc(5,g,2,1,"span",12),s.YNc(6,Z,2,0,"em",12),s.qZA(),s.TgZ(7,"div",14),s.TgZ(8,"span"),s._uU(9),s.qZA(),s.qZA(),s.TgZ(10,"div",15),s.YNc(11,v,2,1,"span",12),s.YNc(12,h,2,0,"em",12),s.qZA(),s.TgZ(13,"div",15),s.TgZ(14,"span"),s._uU(15),s.qZA(),s.qZA(),s.TgZ(16,"div",13),s.TgZ(17,"span"),s._uU(18),s.ALo(19,"date"),s.qZA(),s.qZA(),s.qZA()),2&t){var e=n.$implicit;s.xp6(2),s.Q6J("ngIf",e.name),s.xp6(1),s.Q6J("ngIf",!e.name),s.xp6(2),s.Q6J("ngIf",e.type),s.xp6(1),s.Q6J("ngIf",!e.type),s.xp6(3),s.Oqu(e.uniqueId),s.xp6(2),s.Q6J("ngIf",e.ip),s.xp6(1),s.Q6J("ngIf",!e.ip),s.xp6(3),s.Oqu(e.isAuthenticated),s.xp6(3),s.Oqu(s.xi3(19,9,1e3*e.connectedDate,"yyyy-MM-dd HH:mm:ss"))}}function y(t,n){if(1&t&&(s.TgZ(0,"div",1),s.TgZ(1,"h1"),s._uU(2,"Active Clients"),s.qZA(),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"div",4),s._uU(6,"Name"),s.qZA(),s.TgZ(7,"div",5),s._uU(8,"Type"),s.qZA(),s.TgZ(9,"div",6),s._uU(10,"Unique Id"),s.qZA(),s.TgZ(11,"div",7),s._uU(12,"Remote IP Address"),s.qZA(),s.TgZ(13,"div",7),s._uU(14,"Is Authenticated"),s.qZA(),s.TgZ(15,"div",5),s._uU(16,"Connected Date"),s.qZA(),s.qZA(),s.TgZ(17,"div",8),s.YNc(18,x,20,12,"div",9),s.qZA(),s.qZA(),s.qZA()),2&t){var e=s.oxw();s.xp6(18),s.Q6J("ngForOf",e.clients)}}var m,q=((m=function(r){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(s,r);var o,c,u,a=i(s);function s(n){var e;return t(this,s),(e=a.call(this)).clientService=n,e.clients=null,e}return o=s,(c=[{key:"ngOnInit",value:function(){return(0,f.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.clientService.list();case 2:this.clients=t.sent;case 3:case"end":return t.stop()}},t,this)}))}}])&&n(o.prototype,c),u&&n(o,u),s}(a.H)).\u0275fac=function(t){return new(t||m)(s.Y36(p.y))},m.\u0275cmp=s.Xpm({type:m,selectors:[["app-clients"]],features:[s.qOj],decls:1,vars:1,consts:[["class","clients",4,"ngIf"],[1,"clients"],[1,"table"],[1,"thead"],[1,"th","fx20"],[1,"th","fx16"],[1,"th","fx24"],[1,"th","fx12"],[1,"tbody"],["class","trow",4,"ngFor","ngForOf"],[1,"trow"],[1,"td","fx20"],[4,"ngIf"],[1,"td","fx16"],[1,"td","fx24"],[1,"td","fx12"]],template:function(t,n){1&t&&s.YNc(0,y,19,1,"div",0),2&t&&s.Q6J("ngIf",n.clients)},directives:[u.O5,u.sg],pipes:[u.uU],styles:[".clients[_ngcontent-%COMP%]{margin:auto;max-width:1500px;text-align:center}.clients[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;text-align:left}.clients[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left;display:flex;font-size:20px;font-weight:600;color:#333;margin:0;padding:0 0 24px 6px}"]}),m),A=c(44139),w=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[u.ez,A.Bz.forChild([{path:"",component:q}])]]}),n}()},64762:function(t,n,e){function i(t,n,e,i){return new(e||(e=Promise))(function(r,o){function c(t){try{f(i.next(t))}catch(n){o(n)}}function u(t){try{f(i.throw(t))}catch(n){o(n)}}function f(t){t.done?r(t.value):function(t){return t instanceof e?t:new e(function(n){n(t)})}(t.value).then(c,u)}f((i=i.apply(t,n||[])).next())})}e.d(n,{mG:function(){return i}})}}])}();