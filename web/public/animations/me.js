import{M as t,m as d,j as f,d as c,c as p,a as u,b as g,p as y}from"./makeScene2D-90ff0b02.js";import{l as w}from"./loop-5177d8f0.js";import{I as b}from"./Img-124ed5c8.js";import{w as o,V as h}from"./Vector-861d74d7.js";import{s as l}from"./sequence-a2eaedc6.js";let s;s??(s=new t("me",!1));s.loadData({version:0,shared:{background:"rgba(0,0,0,0)",range:[0,null],size:{x:240,y:240},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const v=s;let i;i??(i=new t("me",!1));i.loadData({version:0,timeEvents:[],seed:2637529839});const x=i,r="/animations/me1.png",k="/animations/me2.png",D="/animations/me3.png",a=d(function*(e){const n=p();e.add(f(b,{ref:n,src:r,width:"100%"})),yield*w(10,function*(j){yield*o(1),Math.random()<.7&&(yield*S(n)),yield*o(2),Math.random()<.5&&(yield*o(1)),Math.random()<.3&&(yield*M(n),yield*o(1))})});function*M(e){yield*l(1,c(e().src(k,0),e().rotation(3,0),e().x(3,0)),c(e().src(r,0),e().rotation(0,0),e().x(0,0)))}function*S(e){yield*l(.1,e().src(D,0),e().src(r,0))}a.name="me";x.attach(a.meta);a.onReplaced??(a.onReplaced=new h(a.config));const F=u({scenes:[a]}),m=new t("settings","\0settings");m.loadData({version:1,appearance:{color:"rgb(255,255,255)",font:!1,coordinates:!0},defaults:{background:"rgb(0,0,0)",size:{x:1920,y:1080}}});const V=g("me",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[y()],F,v,m);export{V as default};
