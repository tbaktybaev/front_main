"use strict";(self.webpackChunkserviceCustoms=self.webpackChunkserviceCustoms||[]).push([[978],{3978:(w,m,i)=>{i.r(m),i.d(m,{OfficeModule:()=>x});var a=i(6895),r=i(433),l=i(2045),c=i(4065),u=i(8256);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-dashboard"]],decls:48,vars:0,consts:[[1,"office"],[1,"person"],["src","#","alt","photo"],[1,"person-info"],[1,"request"],["for","email"],["id","email","type","text"],["type","submit",1,"btn"]],template:function(e,o){1&e&&(u.TgZ(0,"section",0)(1,"div",1),u._UZ(2,"img",2),u.TgZ(3,"div",3)(4,"h6"),u._uU(5,"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"),u.qZA(),u.TgZ(6,"p"),u._uU(7,"pochta@gmail.com"),u.qZA(),u.TgZ(8,"ul")(9,"li"),u._UZ(10,"img",2),u._uU(11,"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"),u.qZA(),u.TgZ(12,"li"),u._UZ(13,"img",2),u._uU(14,"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435"),u.qZA(),u.TgZ(15,"li"),u._UZ(16,"img",2),u._uU(17,"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435"),u.qZA(),u.TgZ(18,"li"),u._UZ(19,"img",2),u._uU(20,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),u.qZA()()()(),u.TgZ(21,"div",4)(22,"h3"),u._uU(23,"\u041d\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),u.qZA(),u.TgZ(24,"form")(25,"label",5),u._uU(26,"\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c "),u.qZA(),u._UZ(27,"input",6),u.TgZ(28,"label",5),u._uU(29,"\u0420\u0435\u0433\u0438\u043e\u043d "),u.qZA(),u._UZ(30,"input",6),u.TgZ(31,"label",5),u._uU(32,"\u041e\u0442\u0447\u0435\u0442\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 "),u.qZA(),u._UZ(33,"input",6),u.TgZ(34,"label",5),u._uU(35,"\u041b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b "),u.qZA(),u._UZ(36,"input",6),u.TgZ(37,"label",5),u._uU(38,"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 "),u.qZA(),u._UZ(39,"input",6),u.TgZ(40,"label",5),u._uU(41,"\u041a\u043e\u043b-\u0432\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435 "),u.qZA(),u._UZ(42,"input",6),u.TgZ(43,"label",5),u._uU(44,"\u041a\u043e\u043b-\u0432\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u0434\u0440 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u0445 "),u.qZA(),u._UZ(45,"input",6),u.TgZ(46,"button",7),u._uU(47,"\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u0447\u0435\u0442"),u.qZA()()()())},styles:[".office[_ngcontent-%COMP%]{display:flex}.office[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),t})();var p=i(7579),d=i(2843),h=i(8505),Z=i(262),v=i(529);let s=(()=>{class t{constructor(e){this.http=e,this.error$=new p.x}get token(){const e=new Date(localStorage.getItem("fb-token-exp"));return new Date>e?null:localStorage.getItem("fb-token")}login(e){return e.returnSecureToken=!0,this.http.post("",e).pipe((0,h.b)(this.setToken),(0,Z.K)(this.handleError.bind(this)))}logout(){this.setToken(null)}isAuthenticated(){return!!this.token}handleError(e){const{message:o}=e.error.error;switch(o){case"INVALID_EMAIL":this.error$.next("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email");break;case"INVALID_PASSWORD":this.error$.next("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c");break;case"EMAIL_NOT_FOUND":this.error$.next("Email \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")}return(0,d._)(e)}setToken(e){if(e){const o=new Date((new Date).getTime()+1e3*+e.expiresIn);localStorage.setItem("fb-token",e.idToken),localStorage.setItem("fb-token-exp",o.toString())}else localStorage.clear()}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(v.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac}),t})();function C(t,n){if(1&t&&(u.TgZ(0,"div",9),u._uU(1),u.qZA()),2&t){const e=n.ngIf;u.xp6(1),u.hij(" ",e," ")}}function T(t,n){1&t&&(u.TgZ(0,"small"),u._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"),u.qZA())}function A(t,n){1&t&&(u.TgZ(0,"small"),u._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"),u.qZA())}function _(t,n){if(1&t&&(u.TgZ(0,"div",10),u.YNc(1,T,2,0,"small",11),u.YNc(2,A,2,0,"small",11),u.qZA()),2&t){const e=u.oxw();u.xp6(1),u.Q6J("ngIf",null==e.form.get("email").errors?null:e.form.get("email").errors.required),u.xp6(1),u.Q6J("ngIf",null==e.form.get("email").errors?null:e.form.get("email").errors.email)}}function E(t,n){1&t&&(u.TgZ(0,"small"),u._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),u.qZA())}function U(t,n){if(1&t&&(u.TgZ(0,"small"),u._uU(1),u.qZA()),2&t){const e=u.oxw(2);u.xp6(1),u.hij(" \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 ",null==e.form.get("password").errors?null:e.form.get("password").errors.minlength.requiredLength," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 ")}}function b(t,n){if(1&t&&(u.TgZ(0,"div",10),u.YNc(1,E,2,0,"small",11),u.YNc(2,U,2,1,"small",11),u.qZA()),2&t){const e=u.oxw();u.xp6(1),u.Q6J("ngIf",null==e.form.get("password").errors?null:e.form.get("password").errors.required),u.xp6(1),u.Q6J("ngIf",null==e.form.get("password").errors?null:e.form.get("password").errors.minlength)}}const f=function(t){return{invalid:t}};let D=(()=>{class t{constructor(e,o){this.auth=e,this.router=o,this.submitted=!1}ngOnInit(){this.form=new r.cw({email:new r.NI(null,[r.kI.required,r.kI.email]),password:new r.NI(null,[r.kI.required,r.kI.minLength(6)])})}submit(){if(this.form.invalid)return;this.submitted=!0;const e={email:this.form.value.email,password:this.form.value.password};this.router.navigate(["/office","dashboard"]),this.auth.login(e).subscribe(()=>{this.form.reset(),this.router.navigate(["/office","dashboard"]),this.submitted=!1},()=>{this.submitted=!1})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(s),u.Y36(l.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-login"]],decls:17,vars:13,consts:[[1,"card",3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"form-control",3,"ngClass"],["for","email"],["id","email","type","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["id","password","type","password","formControlName","password"],["type","submit",1,"btn",3,"disabled"],[1,"alert","alert-danger"],[1,"validation"],[4,"ngIf"]],template:function(e,o){1&e&&(u.TgZ(0,"form",0),u.NdJ("ngSubmit",function(){return o.submit()}),u.TgZ(1,"h2"),u._uU(2,"\u0412\u043e\u0439\u0442\u0438"),u.qZA(),u.YNc(3,C,2,1,"div",1),u.ALo(4,"async"),u.TgZ(5,"div",2)(6,"label",3),u._uU(7,"Email: "),u.qZA(),u._UZ(8,"input",4),u.YNc(9,_,3,2,"div",5),u.qZA(),u.TgZ(10,"div",2)(11,"label",6),u._uU(12,"\u041f\u0430\u0440\u043e\u043b\u044c: "),u.qZA(),u._UZ(13,"input",7),u.YNc(14,b,3,2,"div",5),u.qZA(),u.TgZ(15,"button",8),u._uU(16," \u0412\u043e\u0439\u0442\u0438 "),u.qZA()()),2&e&&(u.Q6J("formGroup",o.form),u.xp6(3),u.Q6J("ngIf",u.lcZ(4,7,o.auth.error$)),u.xp6(2),u.Q6J("ngClass",u.VKq(9,f,o.form.get("email").touched&&o.form.get("email").invalid)),u.xp6(4),u.Q6J("ngIf",o.form.get("email").touched&&o.form.get("email").invalid),u.xp6(1),u.Q6J("ngClass",u.VKq(11,f,o.form.get("password").touched&&o.form.get("password").invalid)),u.xp6(4),u.Q6J("ngIf",o.form.get("password").touched&&o.form.get("password").invalid),u.xp6(1),u.Q6J("disabled",o.form.invalid||o.submitted))},dependencies:[a.mk,a.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,a.Ov],styles:["form[_ngcontent-%COMP%]   .has-danger[_ngcontent-%COMP%]{border:1px solid red}form[_ngcontent-%COMP%]   .has-success[_ngcontent-%COMP%]{border:1px solid green}.reg[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;margin:0 auto}"]}),t})(),I=(()=>{class t{constructor(e,o){this.router=e,this.auth=o}ngOnInit(){}logout(e){e.preventDefault(),this.auth.logout(),this.router.navigate(["/office","login"])}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(l.F0),u.Y36(s))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-office-layout"]],decls:1,vars:0,template:function(e,o){1&e&&u._UZ(0,"router-outlet")},dependencies:[l.lC]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({providers:[s],imports:[a.ez,r.u5,c.m,r.UX,l.Bz.forChild([{path:"",component:I,children:[{path:"",redirectTo:"/office/login",pathMatch:"full"},{path:"login",component:D},{path:"dashboard",component:g}]}]),l.Bz]}),t})()}}]);