function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{jicG:function(e,t,n){"use strict";n.r(t),n.d(t,"VideoWatcherModule",(function(){return z}));var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),c=n("Av68");function s(e,t){if(1&e&&(r.Mb(0,"td"),r.Mb(1,"button"),r.jc(2),r.Lb(),r.Lb()),2&e){var n=t.$implicit;r.zb(2),r.kc(n)}}var a,u=((a=function(){function e(t,n){_classCallCheck(this,e),this.route=t,this.mediaItemService=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.subscribe((function(t){var n=t.get("course"),i=e.mediaItemService.get().find((function(e){return e.id==n}));e.questionList=i.questions;try{e.answers=e.questionList[0].options,e.currentQuestion=e.questionList[0].question}catch(o){console.error(console.error())}}))}}]),e}()).\u0275fac=function(e){return new(e||a)(r.Jb(o.a),r.Jb(c.a))},a.\u0275cmp=r.Db({type:a,selectors:[["quizz-component"]],decls:9,vars:2,consts:[[1,"counter"],[2,"width","100%"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r.Mb(0,"h2"),r.jc(1," Take the quizz to master this section "),r.Lb(),r.Mb(2,"p",0),r.jc(3," Answers: 1/10 "),r.Lb(),r.Mb(4,"div"),r.jc(5),r.Lb(),r.Mb(6,"table",1),r.Mb(7,"tr"),r.ic(8,s,3,1,"td",2),r.Lb(),r.Lb()),2&e&&(r.zb(5),r.lc(" ",t.currentQuestion," "),r.zb(3),r.bc("ngForOf",t.answers))},directives:[i.i],styles:[".counter[_ngcontent-%COMP%]{float:right}h2[_ngcontent-%COMP%]{background-color:#00f;border-radius:5px;color:#fff}"]}),a),l=n("zMMF"),b=["quizz"],f=["quizzComponent"];function d(e,t){1&e&&r.Kb(0,"quizz-component",5,6)}var p,h,v=o.d.forChild([{path:"",component:(p=function(){function e(t,n){_classCallCheck(this,e),this.route=t,this.mediaItemService=n,this.isOn=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.subscribe((function(t){var n,i=t.get("course");n=e.mediaItemService.get(),e.videoItem=n.find((function(e){return e.id==i})),e.videoSrc=e.videoItem.source}))}},{key:"ngAfterViewInit",value:function(){console.log(this.quizzDiv.nativeElement)}},{key:"turnQuizzon",value:function(){var e=this;this.isOn=!0,setTimeout((function(){return e.quizzDiv.nativeElement.scrollIntoView({behavior:"smooth",block:"center"})}),500)}}]),e}(),p.\u0275fac=function(e){return new(e||p)(r.Jb(o.a),r.Jb(c.a))},p.\u0275cmp=r.Db({type:p,selectors:[["app-video-watcher"]],viewQuery:function(e,t){var n;1&e&&(r.mc(b,!0),r.mc(f,!0)),2&e&&(r.dc(n=r.Vb())&&(t.quizzDiv=n.first),r.dc(n=r.Vb())&&(t.quizzComponent=n.first))},decls:11,vars:5,consts:[[1,"quizz_start",3,"click"],[1,"videoViewer"],["width","100%","height","100%","frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],["quizz",""],["class","quizz",4,"ngIf"],[1,"quizz"],["quizzComponent",""]],template:function(e,t){1&e&&(r.Mb(0,"section"),r.Mb(1,"h2"),r.jc(2),r.Lb(),r.Mb(3,"button",0),r.Ub("click",(function(){return t.turnQuizzon()})),r.jc(4," Start Quizz "),r.Lb(),r.Mb(5,"div",1),r.Kb(6,"iframe",2),r.Zb(7,"safe"),r.Lb(),r.Mb(8,"div",null,3),r.ic(10,d,2,0,"quizz-component",4),r.Lb(),r.Lb()),2&e&&(r.zb(2),r.lc(" ",t.videoItem.name," "),r.zb(4),r.bc("src",r.ac(7,3,t.videoSrc),r.fc),r.zb(4),r.bc("ngIf",t.isOn))},directives:[i.j,u],pipes:[l.a],styles:[".videoViewer[_ngcontent-%COMP%]{overflow:hidden;padding-top:56.25%;position:relative}.videoViewer[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border:0;height:100%;left:0;position:absolute;top:0;width:100%;max-width:1400px;max-height:788px}h2[_ngcontent-%COMP%]{display:inline-block}.quizz_start[_ngcontent-%COMP%]{float:right;margin:25px}"]}),p)}]),m=n("iTUp"),z=((h=function e(){_classCallCheck(this,e)}).\u0275mod=r.Hb({type:h}),h.\u0275inj=r.Gb({factory:function(e){return new(e||h)},imports:[[i.b,m.a,v]]}),h)}}]);