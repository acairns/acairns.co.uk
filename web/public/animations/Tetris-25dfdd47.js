import{j as l,R as o,v as n}from"./makeScene2D-6f16dfce.js";const i={Teewee:"crimson",Hero:"mediumseagreen",Smashboy:"gold",OrangeRicky:"orange",BlueRicky:"dodgerblue",ClevelandZ:"blueviolet",RhodeIslandZ:"#AFDBF5"},e=a=>l(o,{radius:4,smoothCorners:!0,cornerSharpness:.65,gap:20,fill:"white",width:32,height:32,...a}),r=a=>l(o,{layout:!0,gap:2,direction:"row",wrap:"wrap",spawner:()=>n(9).map(()=>l(e,{fill:"#aaa"})),...a}),c=a=>l(o,{...a,children:[l(e,{y:-34,fill:i.Teewee}),l(e,{fill:i.Teewee}),l(e,{x:-34,fill:i.Teewee}),l(e,{x:34,fill:i.Teewee})]}),d=a=>l(o,{...a,children:[l(e,{y:-34,fill:i.Smashboy}),l(e,{fill:i.Smashboy}),l(e,{x:-34,fill:i.Smashboy}),l(e,{x:-34,y:-34,fill:i.Smashboy})]}),f=a=>l(o,{...a,children:[l(e,{y:-34,fill:i.OrangeRicky}),l(e,{fill:i.OrangeRicky}),l(e,{x:-34,fill:i.OrangeRicky}),l(e,{x:-68,fill:i.OrangeRicky})]}),y=a=>l(o,{...a,children:[l(e,{y:-34,x:-34,fill:i.BlueRicky}),l(e,{fill:i.BlueRicky}),l(e,{x:34,fill:i.BlueRicky}),l(e,{x:-34,fill:i.BlueRicky})]}),h=a=>l(o,{...a,children:[l(e,{x:34,fill:i.Hero}),l(e,{fill:i.Hero}),l(e,{x:-34,fill:i.Hero}),l(e,{x:-68,fill:i.Hero})]}),t=a=>l(o,{...a,children:[l(e,{y:-34,fill:i.ClevelandZ}),l(e,{x:-34,y:-34,fill:i.ClevelandZ}),l(e,{fill:i.ClevelandZ}),l(e,{x:34,fill:i.ClevelandZ})]}),R=a=>l(o,{...a,children:[l(e,{y:-34,fill:i.RhodeIslandZ}),l(e,{x:-34,fill:i.RhodeIslandZ}),l(e,{fill:i.RhodeIslandZ}),l(e,{x:34,y:-34,fill:i.RhodeIslandZ})]});export{y as B,t as C,h as H,f as O,R,d as S,c as T,r as a};
