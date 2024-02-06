import{u,f as y,t as v,D as S,g as E,b as g}from"./Vector-861d74d7.js";import{R as x,B as I,h as b,E as L,s as m,i as f,k as d,n as R}from"./makeScene2D-122cb034.js";function C(n){if(!w()||n.startsWith("/cors-proxy/"))return n;const e=new URL(window.location.toString());try{const t=new URL(n,e);if(!t.protocol.startsWith("http")||e.host===t.host||!_(t.host))return n}catch{return n}return`/cors-proxy/${encodeURIComponent(n)}`}function _(n){const e=P();if(e.length===0)return!0;for(const t of e)if(t.toLowerCase().trim()===n)return!0;return!1}function w(){return!1}let c;function P(){return{}.VITEST!=="true"&&c?[...c]:(c=function(){if(!w()||!{VITE_MC_PROXY_ENABLED:"false",BASE_URL:"/animations/",MODE:"production",DEV:!1,PROD:!0,SSR:!1})return[];const e={}.VITE_MC_PROXY_ALLOW_LIST??"[]",t=JSON.parse(e);Array.isArray(t)||u().error("Parsed Allow List expected to be an Array, but is "+typeof t);const s=[];for(const a of t){if(typeof a!="string"){u().warn("Unexpected Value in Allow List: "+a+". Expected a String. Skipping.");continue}s.push(a)}return s}(),[...c])}y(A,v());function*A(n,e){for(let t=0;t<n;t++){const s=e(t);s?yield*s:yield}}var l=globalThis&&globalThis.__decorate||function(n,e,t,s){var a=arguments.length,o=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,s);else for(var h=n.length-1;h>=0;h--)(i=n[h])&&(o=(a<3?i(o):a>3?i(e,t,o):i(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o},p;let r=p=class extends x{constructor(e){super(e),"src"in e||u().warn({message:"No source specified for the image",remarks:`<p>The image won&#39;t be visible unless you specify a source:</p>
<pre><code class="language-tsx"><span class="hljs-keyword">import</span> myImage <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./example.png&#x27;</span>;
<span class="hljs-comment">// ...</span>
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{myImage}</span> /&gt;</span></span>;
</code></pre><p>If you did this intentionally, and don&#39;t want to see this warning, set the <code>src</code>
property to <code>null</code>:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Img</span> src={<span class="hljs-literal">null</span>} /&gt;
</code></pre><p><a href='https://motioncanvas.io/docs/media#images' target='_blank'>Learn more</a> about working with
images.</p>
`,inspect:this.key})}desiredSize(){const e=super.desiredSize();if(e.x===null&&e.y===null){const t=this.image();return{x:t.naturalWidth,y:t.naturalHeight}}return e}image(){const e=this.src();let t="",s="";if(e){s=C(e);const o=new URL(s,window.location.origin);if(o.origin===window.location.origin){const i=this.view().assetHash();o.searchParams.set("asset-hash",i)}t=o.toString()}let a=p.pool[s];return a||(a=document.createElement("img"),a.crossOrigin="anonymous",a.src=t,p.pool[s]=a),a.complete||S.collectPromise(new Promise((o,i)=>{a.addEventListener("load",o),a.addEventListener("error",()=>i(new E({message:"Failed to load an image",remarks:`The <code>src</code> property was set to:
<pre><code>${e}</code></pre>
...which resolved to the following url:
<pre><code>${t}</code></pre>
Make sure that source is correct and that the image exists.<br/>
<a target='_blank' href='https://motioncanvas.io/docs/media#images'>Learn more</a>
about working with images.`,inspect:this.key})))})),a}imageCanvas(){const e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("Could not create an image canvas");return e}filledImageCanvas(){const e=this.imageCanvas(),t=this.image();return e.canvas.width=t.naturalWidth,e.canvas.height=t.naturalHeight,e.imageSmoothingEnabled=this.smoothing(),e.drawImage(t,0,0),e}draw(e){this.drawShape(e);const t=this.alpha();if(t>0){const s=I.fromSizeCentered(this.computedSize());e.save(),e.clip(this.getPath()),t<1&&(e.globalAlpha*=t),e.imageSmoothingEnabled=this.smoothing(),b(e,this.image(),s),e.restore()}this.clip()&&e.clip(this.getPath()),this.drawChildren(e)}applyFlex(){super.applyFlex();const e=this.image();this.element.style.aspectRatio=(this.ratio()??e.naturalWidth/e.naturalHeight).toString()}getColorAtPoint(e){const t=this.computedSize(),s=this.naturalSize(),a=new g(e).add(this.computedSize().scale(.5)).mul(s.div(t).safe);return this.getPixelColor(a)}naturalSize(){const e=this.image();return new g(e.naturalWidth,e.naturalHeight)}getPixelColor(e){const t=this.filledImageCanvas(),s=new g(e),a=t.getImageData(s.x,s.y,1,1).data;return new L({r:a[0],g:a[1],b:a[2],a:a[3]/255})}collectAsyncResources(){super.collectAsyncResources(),this.image()}};r.pool={};l([m()],r.prototype,"src",void 0);l([f(1),m()],r.prototype,"alpha",void 0);l([f(!0),m()],r.prototype,"smoothing",void 0);l([d()],r.prototype,"image",null);l([d()],r.prototype,"imageCanvas",null);l([d()],r.prototype,"filledImageCanvas",null);l([d()],r.prototype,"naturalSize",null);r=p=l([R("Img")],r);export{r as I,A as l};
