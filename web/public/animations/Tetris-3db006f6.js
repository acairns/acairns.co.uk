import{j as e,R as i,r}from"./makeScene2D-122cb034.js";const o={Teewee:"crimson",Hero:"mediumseagreen",Smashboy:"gold",OrangeRicky:"orange",BlueRicky:"dodgerblue",ClevelandZ:"blueviolet",RhodeIslandZ:"#AFDBF5"},l=a=>e(i,{radius:4,smoothCorners:!0,cornerSharpness:.65,gap:20,fill:"white",width:32,height:32,...a}),n=a=>e(i,{layout:!0,gap:2,direction:"row",wrap:"wrap",spawner:()=>r(9).map(()=>e(l,{fill:"#aaa"})),...a}),c=a=>e(i,{...a,children:[e(l,{y:-34,fill:o.Teewee}),e(l,{fill:o.Teewee}),e(l,{x:-34,fill:o.Teewee}),e(l,{x:34,fill:o.Teewee})]}),d=a=>e(i,{...a,children:[e(l,{y:-34,fill:o.Smashboy}),e(l,{fill:o.Smashboy}),e(l,{x:-34,fill:o.Smashboy}),e(l,{x:-34,y:-34,fill:o.Smashboy})]}),f=a=>e(i,{...a,children:[e(l,{x:34,fill:o.Hero}),e(l,{fill:o.Hero}),e(l,{x:-34,fill:o.Hero}),e(l,{x:-68,fill:o.Hero})]}),t=a=>e(i,{...a,children:[e(l,{y:-34,fill:o.ClevelandZ}),e(l,{x:-34,y:-34,fill:o.ClevelandZ}),e(l,{fill:o.ClevelandZ}),e(l,{x:34,fill:o.ClevelandZ})]});export{t as C,f as H,n as R,d as S,c as T};