(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jicG:function(t,e,i){"use strict";i.r(e),i.d(e,"VideoWatcherModule",(function(){return z}));var n=i("ofXK"),o=i("tyNb"),r=i("fXoL"),c=i("Av68");function s(t,e){if(1&t&&(r.Mb(0,"td"),r.Mb(1,"button"),r.jc(2),r.Lb(),r.Lb()),2&t){const t=e.$implicit;r.zb(2),r.kc(t)}}let u=(()=>{class t{constructor(t,e){this.route=t,this.mediaItemService=e}ngOnInit(){this.route.paramMap.subscribe(t=>{let e,i=t.get("course");e=this.mediaItemService.get();let n=e.find(({id:t})=>t==i);this.questionList=n.questions;try{this.answers=this.questionList[0].options,this.currentQuestion=this.questionList[0].question}catch(o){console.error(console.error())}})}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(o.a),r.Jb(c.a))},t.\u0275cmp=r.Db({type:t,selectors:[["quizz-component"]],decls:9,vars:2,consts:[[1,"counter"],[2,"width","100%"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(r.Mb(0,"h2"),r.jc(1," Take the quizz to master this section "),r.Lb(),r.Mb(2,"p",0),r.jc(3," Answers: 1/10 "),r.Lb(),r.Mb(4,"div"),r.jc(5),r.Lb(),r.Mb(6,"table",1),r.Mb(7,"tr"),r.ic(8,s,3,1,"td",2),r.Lb(),r.Lb()),2&t&&(r.zb(5),r.lc(" ",e.currentQuestion," "),r.zb(3),r.bc("ngForOf",e.answers))},directives:[n.i],styles:[".counter[_ngcontent-%COMP%]{float:right}h2[_ngcontent-%COMP%]{background-color:#00f;border-radius:5px;color:#fff}"]}),t})();var a=i("zMMF");const b=["quizz"],l=["quizzComponent"];function d(t,e){1&t&&r.Kb(0,"quizz-component",5,6)}const p=o.d.forChild([{path:"",component:(()=>{class t{constructor(t,e){this.route=t,this.mediaItemService=e,this.isOn=!1}ngOnInit(){this.route.paramMap.subscribe(t=>{let e,i=t.get("course");e=this.mediaItemService.get(),this.videoItem=e.find(({id:t})=>t==i),this.videoSrc=this.videoItem.source})}ngAfterViewInit(){console.log(this.quizzDiv.nativeElement)}turnQuizzon(){this.isOn=!0,setTimeout(()=>this.quizzDiv.nativeElement.scrollIntoView({behavior:"smooth",block:"center"}),500)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(o.a),r.Jb(c.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-video-watcher"]],viewQuery:function(t,e){var i;1&t&&(r.mc(b,!0),r.mc(l,!0)),2&t&&(r.dc(i=r.Vb())&&(e.quizzDiv=i.first),r.dc(i=r.Vb())&&(e.quizzComponent=i.first))},decls:11,vars:5,consts:[[1,"quizz_start",3,"click"],[1,"videoViewer"],["width","100%","height","100%","frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],["quizz",""],["class","quizz",4,"ngIf"],[1,"quizz"],["quizzComponent",""]],template:function(t,e){1&t&&(r.Mb(0,"section"),r.Mb(1,"h2"),r.jc(2),r.Lb(),r.Mb(3,"button",0),r.Ub("click",(function(){return e.turnQuizzon()})),r.jc(4," Start Quizz "),r.Lb(),r.Mb(5,"div",1),r.Kb(6,"iframe",2),r.Zb(7,"safe"),r.Lb(),r.Mb(8,"div",null,3),r.ic(10,d,2,0,"quizz-component",4),r.Lb(),r.Lb()),2&t&&(r.zb(2),r.lc(" ",e.videoItem.name," "),r.zb(4),r.bc("src",r.ac(7,3,e.videoSrc),r.fc),r.zb(4),r.bc("ngIf",e.isOn))},directives:[n.j,u],pipes:[a.a],styles:[".videoViewer[_ngcontent-%COMP%]{overflow:hidden;padding-top:56.25%;position:relative}.videoViewer[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border:0;height:100%;left:0;position:absolute;top:0;width:100%;max-width:1400px;max-height:788px}h2[_ngcontent-%COMP%]{display:inline-block}.quizz_start[_ngcontent-%COMP%]{float:right;margin:25px}"]}),t})()}]);var h=i("iTUp");let z=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[n.b,h.a,p]]}),t})()}}]);