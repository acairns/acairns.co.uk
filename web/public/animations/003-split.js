import{M as u,o as F,k as i,p as t,j as m,R as g,q as X,r as j,t as q}from"./makeScene2D-cdcf0c21.js";import{H as o,T as b,O as d,B as a,R as s,S as v,C as f}from"./Tetris-46233544.js";import{c as O}from"./createRefArray-4bb6ab32.js";import{w as B,V as T}from"./Vector-f885695d.js";let S;S??(S=new u("003-split",!1));S.loadData({version:0,shared:{background:"rgba(255,255,255,0)",range:[0,null],size:{x:500,y:500},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const z=S;let R;R??(R=new u("split",!1));R.loadData({version:0,timeEvents:[],seed:2354743771});const C=R,c=F(function*(h){const y=m(),r=34,n=O();h.add(i(g,{ref:y,x:r/2,y:r/2,children:[i(o,{ref:n,x:-r*3,y:r*4}),i(b,{ref:n,x:0,y:r*4}),i(d,{ref:n,x:r*4,y:r*4}),i(a,{ref:n,x:-r*4,y:r*3}),i(s,{ref:n,x:-r,y:r*3}),i(v,{ref:n,x:r*2,y:r*3}),i(f,{ref:n,x:r*3,y:r*2,rotation:90}),i(s,{ref:n,x:-r*5,y:r*1,rotation:90}),i(d,{ref:n,x:-r*3,rotation:-90}),i(b,{ref:n,x:-r*2,y:r,rotation:90}),i(f,{ref:n,y:r}),i(a,{ref:n,x:r*3,rotation:-90}),i(d,{ref:n,x:r,rotation:90}),i(o,{ref:n,x:r*4,y:-r,rotation:90}),i(v,{ref:n,x:-r*4,y:-r}),i(o,{ref:n,x:-r,y:-r}),i(f,{ref:n,x:r*2,y:-r*2,rotation:90}),i(f,{ref:n,x:-r*3,y:-r*2}),i(s,{ref:n,x:-r*2,y:-r*3,rotation:90}),i(s,{ref:n,x:r*2,y:-r*3}),i(d,{ref:n,x:-r*5,y:-r*4,rotation:180}),i(a,{ref:n,x:0,y:-r*3,rotation:90}),i(o,{ref:n,y:-r*5,x:-r*3}),i(d,{ref:n,x:-r,y:-r*5,rotation:180}),i(a,{ref:n,x:r*3,y:-r*5,rotation:180})]}));const e=y().clone();yield y().opacity(0),h.add(e);const p=[e.children()[0].children()[1],e.children()[0].children()[2],e.children()[0].children()[3],e.children()[3].children()[0],e.children()[3].children()[1],e.children()[3].children()[2],e.children()[3].children()[3],e.children()[7].children()[0],e.children()[7].children()[1],e.children()[7].children()[2],e.children()[7].children()[3],e.children()[8].children()[0],e.children()[8].children()[1],e.children()[8].children()[2],e.children()[8].children()[3],e.children()[14].children()[0],e.children()[14].children()[1],e.children()[14].children()[2],e.children()[14].children()[3],e.children()[15].children()[3],e.children()[17].children()[0],e.children()[17].children()[1],e.children()[17].children()[2],e.children()[20].children()[0],e.children()[20].children()[1],e.children()[20].children()[2],e.children()[20].children()[3],e.children()[22].children()[1],e.children()[22].children()[2],e.children()[22].children()[3]],x=[e.children()[2].children()[0],e.children()[2].children()[1],e.children()[2].children()[2],e.children()[2].children()[3],e.children()[5].children()[0],e.children()[5].children()[1],e.children()[6].children()[0],e.children()[6].children()[1],e.children()[6].children()[2],e.children()[6].children()[3],e.children()[11].children()[0],e.children()[11].children()[1],e.children()[11].children()[2],e.children()[11].children()[3],e.children()[12].children()[0],e.children()[13].children()[0],e.children()[13].children()[1],e.children()[13].children()[2],e.children()[13].children()[3],e.children()[16].children()[0],e.children()[16].children()[1],e.children()[16].children()[2],e.children()[16].children()[3],e.children()[19].children()[0],e.children()[19].children()[2],e.children()[19].children()[3],e.children()[24].children()[0],e.children()[24].children()[1],e.children()[24].children()[2],e.children()[24].children()[3]],k=m(),w=m();h.add(i(g,{ref:k})),h.add(i(g,{ref:w})),p.map(l=>l.reparent(k())),x.map(l=>l.reparent(w())),yield t(...p.map(function*(l){yield*l.position(l.position().addX(-50),.8)})),yield*t(...x.map(function*(l){yield*l.position(l.position().addX(50),.8)})),yield*B(2),yield t(...p.map(function*(l){yield*l.position(l.position().addX(50),.8)})),yield*t(...x.map(function*(l){yield*l.position(l.position().addX(-50),.8)})),yield*B(1)});c.name="split";C.attach(c.meta);c.onReplaced??(c.onReplaced=new T(c.config));const H=X({scenes:[c]}),D=new u("settings","\0settings");D.loadData({version:1,appearance:{color:"rgb(255,255,255)",font:!1,coordinates:!0},defaults:{background:"rgb(0,0,0)",size:{x:1920,y:1080}}});const $=j("003-split",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[q()],H,z,D);export{$ as default};