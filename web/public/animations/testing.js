import{M as s,m as c,j as g,c as f,a as m,b as p,p as u}from"./makeScene2D-6f16dfce.js";import{C as d}from"./Circle-bf59d7d2.js";import{f as b,w as i,V as v}from"./Vector-e5a505da.js";let t;t??(t=new s("testing",!1));t.loadData({version:0,shared:{background:"rgb(0,0,0)",range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const y=t;let o;o??(o=new s("testing",!1));o.loadData({version:0,timeEvents:[],seed:2195646408});const w=o,e=c(function*(l){const r=b().variables.get("circleFill","blue"),a=f();l.add(g(d,{ref:a,size:256,fill:r})),yield*a().scale(2,1),yield*i(1),yield*a().scale(1,1),yield*i(1)});e.name="testing";w.attach(e.meta);e.onReplaced??(e.onReplaced=new v(e.config));const F=m({scenes:[e],variables:{circleFill:"orange"}}),n=new s("settings","\0settings");n.loadData({version:1,appearance:{color:"rgb(255,255,255)",font:!1,coordinates:!0},defaults:{background:"rgb(0,0,0)",size:{x:1920,y:1080}}});const k=p("testing",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[u()],F,y,n);export{k as default};
