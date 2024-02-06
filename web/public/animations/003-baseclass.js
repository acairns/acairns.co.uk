import{i as ie,M as O,L as $,C as le,a as re,c as Y,b as oe,B as ce,m as he,l as de,d as pe,e as fe,f as ue,g as T,s as q,h as R,n as ge,R as y,j as Z,k as o,o as me,p as _,F as ye,q as be,r as we,t as Pe}from"./makeScene2D-cdcf0c21.js";import{I as je}from"./Img-27c16810.js";import{f as ee,w as x,t as A,g as Fe,h as Le,d as ve,b as j,e as C,i as ke,u as xe,V as Se}from"./Vector-f885695d.js";import{l as ze}from"./loop-c49bf2f6.js";import{c as I}from"./createRefArray-4bb6ab32.js";import{s as d}from"./sequence-1366929b.js";import{C as v}from"./Circle-96a9f63c.js";ee(f,A());function*f(l,e){yield*x(l),ie(e)?yield*e:e()}ee(se,A());function*se(l,e){const s=Fe(),t=Le().framesToSeconds(1),a=s.time()+l;let i=0;for(;a-t>s.fixed;){const n=e(i);n?yield*n:yield,i+=1}s.time(a)}let N;N??(N=new O("003-baseclass",!1));N.loadData({version:0,shared:{background:"rgba(255,255,255,0)",range:[0,null],size:{x:592,y:280},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const De=N;let V;V??(V=new O("baseclass",!1));V.loadData({version:0,timeEvents:[],seed:3773074260});const Be=V;function We(l,e,s){const t={arcLength:0,segments:[],minSin:1};if(l.length===0)return t;if(s){const n=l[0].add(l[l.length-1]).scale(.5);l=[n,...l,n]}let a=l[0];for(let n=2;n<l.length;n++){const r=l[n-2],c=l[n-1],m=l[n],F=r.sub(c),w=m.sub(c),p=F.normalized.safe,P=w.normalized.safe,E=Math.acos(ve(-1,1,p.dot(P))),L=Math.tan(E/2),S=Math.sin(E/2),z=Math.min(e,L*F.magnitude*(n===2?1:.5),L*w.magnitude*(n===l.length-1?1:.5)),ne=S===0?0:z/S,G=L===0?0:z/L,ae=p.add(P).scale(1/2).normalized.safe.scale(ne).add(c),D=p.perpendicular.dot(P)<0,B=new $(a,c.add(p.scale(G))),W=new le(ae,z,p.perpendicular.scale(D?1:-1),P.perpendicular.scale(D?-1:1),D);B.arcLength>0&&(t.segments.push(B),t.arcLength+=B.arcLength),W.arcLength>0&&(t.segments.push(W),t.arcLength+=W.arcLength),t.minSin=Math.min(t.minSin,Math.abs(S)),a=c.add(P.scale(G))}const i=new $(a,l[l.length-1]);return i.arcLength>0&&(t.segments.push(i),t.arcLength+=i.arcLength),t}function _e(l){return l.reduce((e,s,t)=>t?e+l[t-1].sub(s).magnitude:0,0)}function M(l,e,s){const t=l.length;let a=0;for(let i=0;i<e.length;i+=1){const n=l[(s+i)%t],r=e[i];a+=n.sub(r).squaredMagnitude}return a}function Ce(l,e,s){const t=[];if(s===0)return[...l];if(s===1)return[...e];for(let a=0;a<l.length;a++){const i=l[a],n=e[a];t.push(j.lerp(i,n,s))}return t}var g=globalThis&&globalThis.__decorate||function(l,e,s,t){var a=arguments.length,i=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(l,e,s,t);else for(var r=l.length-1;r>=0;r--)(n=l[r])&&(i=(a<3?n(i):a>3?n(e,s,i):n(e,s))||i);return a>3&&i&&Object.defineProperty(e,s,i),i},k;let h=k=class extends re{static rotatePoints(e,s,t){if(t){let a=1/0,i=0;for(let n=0;n<e.length;n+=1){const r=M(e,s,n);r<a&&(a=r,i=n)}if(i){const n=e.splice(0,i);e.splice(e.length,0,...n)}}else{const a=M(e,s,0),i=[...e].reverse();M(i,s,0)<a&&e.reverse()}}static distributePoints(e,s){if(e.length===0){for(let r=0;r<s;r++)e.push(j.zero);return}if(e.length===1){const r=e[0];for(let c=0;c<s;c++)e.push(r);return}const t=e.length+s,a=_e(e);let i=s/a,n=0;for(;e.length<t;){const r=t-e.length;if(n+1>=e.length){i=r/a,n=0;continue}const c=e[n],m=e[n+1],F=c.sub(m).magnitude,w=Math.min(Math.round(F*i),r)+1;for(let p=1;p<w;p++)e.splice(++n,0,j.lerp(c,m,p/w));n++}}*tweenPoints(e,s,t){const a=[...this.parsedPoints()],i=this.parsePoints(C(e)),n=this.closed(),r=a.length-i.length;k.distributePoints(r<0?a:i,Math.abs(r)),k.rotatePoints(i,a,n),this.tweenedPoints(a),yield*ke(s,c=>{const m=t(c);this.tweenedPoints(Ce(a,i,m))},()=>{this.tweenedPoints(null),this.points(e)})}constructor(e){super(e),this.tweenedPoints=Y(null),e.children===void 0&&e.points===void 0&&xe().warn({message:"No points specified for the line",remarks:`<p>The line won&#39;t be visible unless you specify at least two points:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span>
  stroke=<span class="hljs-string">&quot;#fff&quot;</span>
  lineWidth={<span class="hljs-number">8</span>}
  points={[
    [<span class="hljs-number">100</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">100</span>],
  ]}
/&gt;
</code></pre><p>Alternatively, you can define the points using the children:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">x</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">y</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_">Line</span>&gt;
</code></pre><p>If you did this intentionally, and want to disable this message, set the
<code>points</code> property to <code>null</code>:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>} points={<span class="hljs-literal">null</span>} /&gt;
</code></pre>`,inspect:this.key})}childrenBBox(){let e=this.tweenedPoints();if(!e){const s=this.points();e=s?s.map(t=>new j(C(t))):this.children().filter(t=>!(t instanceof oe)||t.isLayoutRoot()).map(t=>t.position())}return ce.fromPoints(...e)}parsedPoints(){return this.parsePoints(this.points())}profile(){return We(this.tweenedPoints()??this.parsedPoints(),this.radius(),this.closed())}lineWidthCoefficient(){const e=this.radius(),s=this.lineJoin();let t=super.lineWidthCoefficient();if(e===0&&s==="miter"){const{minSin:a}=this.profile();a>0&&(t=Math.max(t,.5/a))}return t}drawOverlay(e,s){const t=this.childrenBBox().transformCorners(s),i=this.computedSize().mul(this.offset()).scale(.5).transformAsPoint(s);e.fillStyle="white",e.strokeStyle="black",e.lineWidth=1;const n=new Path2D,r=(this.tweenedPoints()??this.parsedPoints()).map(c=>c.transformAsPoint(s));if(r.length>0){he(n,r[0]);for(const c of r)de(n,c),e.beginPath(),pe(e,c,4),e.closePath(),e.fill(),e.stroke()}e.strokeStyle="white",e.stroke(n),e.beginPath(),fe(e,i),e.stroke(),e.beginPath(),ue(e,t),e.closePath(),e.stroke()}parsePoints(e){return e?e.map(s=>new j(C(s))):this.children().map(s=>s.position())}};g([T(0),q()],h.prototype,"radius",void 0);g([T(null),q()],h.prototype,"points",void 0);g([A()],h.prototype,"tweenPoints",null);g([R()],h.prototype,"childrenBBox",null);g([R()],h.prototype,"parsedPoints",null);g([R()],h.prototype,"profile",null);h=k=g([ge("Line")],h);class Ie extends y{constructor(e){super({clip:!0,...e}),this.image=Z(),this.frames=[],this.current=Y(0),this.frames=e.frames,this.add(o(je,{ref:this.image,src:e.src,offset:[-1,-1],x:-e.width/2,y:-e.height/2})),this.frame(this.current())}frame(e){const s=this.frames[e];this.image().x(-this.width()/2+s[0]),this.image().y(-this.height()/2+s[1])}*loopFor(e,s){return yield*se(e,()=>ze(this.frames.length,(function*(t){this.frame(t),yield*x(s)}).bind(this)))}setFrames(e){this.frames=e}}const Me="/animations/pacman-ghost-sprite.png";var Oe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,qe=(l,e,s,t)=>{for(var a=t>1?void 0:t?Te(e,s):e,i=l.length-1,n;i>=0;i--)(n=l[i])&&(a=(t?n(e,s,a):n(a))||a);return t&&a&&Oe(e,s,a),a};const J=[[0,0],[-150,0]],H=[[0,-150],[-150,-150]],K=[[0,-300],[-150,-300]],Q=[[0,-450],[-150,-450]],U=[[0,-600],[-150,-600]],X=[[0,-750],[-150,-750]];class b extends Ie{constructor(e){let s=[];switch(e.color){case"pink":s=K;break;case"blue":s=Q;break;case"yellow":s=H;break;case"red":s=J;break;case"white":s=X;break;default:s=U;break}super({y:120,scale:.5,size:140,src:Me,frames:s,...e})}scare(){this.setFrames(U)}red(){this.setFrames(J)}pink(){this.setFrames(K)}blue(){this.setFrames(Q)}yellow(){this.setFrames(H)}white(){this.setFrames(X)}}qe([T("red"),q()],b.prototype,"initialState",2);const u=me(function*(l){const e=I(),s=I(),t=I(),a=Z();l.add(o(ye,{children:[o(y,{width:592,height:280,stroke:"#2113B0",radius:15,fill:"black",smoothCorners:!0}),o(y,{lineWidth:2,width:550,height:230,stroke:"#2113B0",radius:10,smoothCorners:!0}),o(y,{lineWidth:2,width:535,height:215,stroke:"#2113B0",radius:5,smoothCorners:!0}),o(y,{scale:.5,y:-25,children:o(y,{ref:a,children:[o(h,{ref:t,lineWidth:4,stroke:"white",points:[[0,0],[0,50],[-300,50],[-300,100]]}),o(h,{ref:t,lineWidth:4,stroke:"white",points:[[0,0],[0,50],[-100,50],[-100,100]]}),o(h,{ref:t,lineWidth:4,stroke:"white",points:[[0,0],[0,50],[100,50],[100,100]]}),o(h,{ref:t,lineWidth:4,stroke:"white",points:[[0,0],[0,50],[300,50],[300,100]]}),o(v,{ref:s,opacity:0,size:24,y:-50,fill:"blue",lineWidth:3}),o(v,{ref:s,opacity:0,size:24,y:-50,fill:"blue",lineWidth:3}),o(v,{ref:s,opacity:0,size:24,y:-50,fill:"blue",lineWidth:3}),o(v,{ref:s,opacity:0,size:24,y:-50,fill:"blue",lineWidth:3}),o(b,{ref:e,zIndex:999,color:"blue",x:-300,y:160}),o(b,{ref:e,zIndex:999,color:"pink",x:-100,y:160}),o(b,{ref:e,zIndex:999,color:"yellow",x:100,y:160}),o(b,{ref:e,zIndex:999,color:"red",x:300,y:160}),o(b,{ref:e,zIndex:999,color:"white",y:-50})]})})]}));const i=e[4],n=[];n.push(yield e[0].loopFor(1/0,.2)),n.push(yield e[1].loopFor(1/0,.2)),n.push(yield e[2].loopFor(1/0,.2)),n.push(yield e[3].loopFor(1/0,.2)),n.push(yield e[4].loopFor(1/0,.2)),i.scare(),yield _(...s.map(r=>r.opacity(1,0))),yield*d(.6,d(.5,s[0].y(50,.7),s[0].x(-300,.7),s[0].y(136,.7),f(0,()=>e[0].scare())),d(.5,s[1].y(50,.7),s[1].x(-100,.7),s[1].y(136,.7),f(0,()=>e[1].scare())),d(.5,s[2].y(50,.7),s[2].x(100,.7),s[2].y(136,.7),f(0,()=>e[2].scare())),d(.5,s[3].y(50,.7),s[3].x(300,.7),s[3].y(136,.7),f(0,()=>e[3].scare()))),yield _(...s.map(r=>r.x(0,0))),yield _(...s.map(r=>r.y(-50,0))),yield s[0].fill("#64FAFE",0),yield s[1].fill("#F6B3FC",0),yield s[2].fill("#F3B352",0),yield s[3].fill("#DD3016",0),yield*x(1),yield i.white(),yield*d(.6,d(.5,s[0].y(50,.7),s[0].x(-300,.7),s[0].y(136,.7),f(0,()=>e[0].blue())),d(.5,s[1].y(50,.7),s[1].x(-100,.7),s[1].y(136,.7),f(0,()=>e[1].pink())),d(.5,s[2].y(50,.7),s[2].x(100,.7),s[2].y(136,.7),f(0,()=>e[2].yellow())),d(.5,s[3].y(50,.7),s[3].x(300,.7),s[3].y(136,.7),f(0,()=>e[3].red()))),yield*x(1)});u.name="baseclass";Be.attach(u.meta);u.onReplaced??(u.onReplaced=new Se(u.config));const Re=be({scenes:[u]}),te=new O("settings","\0settings");te.loadData({version:1,appearance:{color:"rgb(255,255,255)",font:!1,coordinates:!0},defaults:{background:"rgb(0,0,0)",size:{x:1920,y:1080}}});const Ke=we("003-baseclass",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[Pe()],Re,De,te);export{Ke as default};