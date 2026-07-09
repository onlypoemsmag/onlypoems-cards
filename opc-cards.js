
(function(){
  "use strict";
  if(window.__opcCards) return; window.__opcCards=true;var __opcS=document.createElement("style");__opcS.textContent=".opc-share{margin:40px 0 0;display:flex;align-self:flex-start;width:fit-content;align-items:center;background:none;border:0;cursor:pointer;padding:6px 0;color:#0153db;font-family:\"basic-sans\",system-ui,sans-serif;text-align:left} .opc-share .l{font-size:12.5px;text-transform:uppercase;letter-spacing:.22em;border-bottom:1.5px solid transparent;padding-bottom:2px;transition:border-color .18s} .opc-share:hover .l{border-color:#0153db} #opc-chip{position:absolute;z-index:99998;display:none;font-family:\"basic-sans\",system-ui,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:.18em;background:#0a090c;color:#fefcff;padding:8px 15px;border-radius:11px;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.22);white-space:nowrap;user-select:none} #opc-chip:after{content:\"\";position:absolute;left:50%;bottom:-6px;transform:translateX(-50%);border:6px solid transparent;border-top-color:#0a090c;border-bottom:0} #opc-overlay{position:fixed;inset:0;z-index:99999;display:none;background:rgba(20,18,22,.55);backdrop-filter:blur(3px);align-items:center;justify-content:center;padding:22px} #opc-overlay *{box-sizing:border-box} .opc-modal{background:#fefcff;border-radius:16px;max-width:560px;width:100%;padding:20px;box-shadow:0 24px 70px rgba(0,0,0,.4);max-height:94vh;overflow:auto;font-family:\"basic-sans\",system-ui,sans-serif} .opc-opts{display:flex;gap:20px;flex-wrap:wrap;justify-content:center;align-items:center;margin-bottom:16px} .opc-grp{display:flex;align-items:center;gap:8px} .opc-grp>span{font-size:10.5px;text-transform:uppercase;letter-spacing:.14em;color:#6b6b70} .opc-seg{display:inline-flex;border:1px solid #e7e3ea;border-radius:11px;overflow:hidden} .opc-seg button{font-family:inherit;font-size:12.5px;border:0;background:transparent;padding:7px 14px;cursor:pointer;color:#6b6b70} .opc-seg button.on{background:#0a090c;color:#fefcff} .opc-pvwrap{display:flex;justify-content:center;margin:4px 0 12px} #opc-pv{max-width:100%;max-height:54vh;height:auto;width:auto;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.28)} #opc-nav{display:none;align-items:center;justify-content:center;gap:16px;margin:0 0 14px} #opc-nav .n{font-size:12px;letter-spacing:.1em;color:#6b6b70} .opc-pgbtn{font-family:inherit;width:34px;height:34px;border:1px solid #e7e3ea;background:#fefcff;border-radius:11px;cursor:pointer;font-size:16px;color:#0a090c} .opc-pgbtn:disabled{opacity:.35;cursor:default} .opc-acts{display:flex;gap:10px;justify-content:center;flex-wrap:wrap} .opc-btn{font-family:inherit;font-size:14px;display:inline-flex;align-items:center;gap:8px;padding:11px 18px;border-radius:11px;cursor:pointer;border:1px solid #0a090c;background:#0a090c;color:#fefcff} .opc-btn.ghost{background:transparent;color:#0a090c} .opc-x{float:right;margin:-6px -4px 0 0;border:0;background:transparent;font-size:22px;line-height:1;cursor:pointer;color:#6b6b70}";(document.head||document.documentElement).appendChild(__opcS);
  try{ console.log("%c[ONLY POEMS] share-cards v12 loaded","color:#0153db;font-weight:bold"); }catch(e){}

  var STACK="data:image/png;base64,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";
  var THEMES={light:{bg:"#fefcff",ink:"#0a090c",sub:"#5b5661"},dark:{bg:"#000000",ink:"#fefcff",sub:"#b7b3bd"}};
  var TACC={light:"#0153db",dark:"#ff84f9"};
  var UI="basic-sans"; var SEL_CAP=700;
  function fBody(s){return "400 "+s+'px "calluna",Georgia,serif';}
  function fPoet(s){return "400 "+s+'px "calluna",Georgia,serif';}
  function fItal(s){return "italic 400 "+s+'px "calluna",Georgia,serif';}
  function fTitle(s){return "500 "+s+'px "cofo-raffine",Georgia,serif';}
  function measure(segs){var h=0;segs.forEach(function(s){h+=(s.spacer!=null?s.spacer:s.lh);});return h;}

  var logo=new Image(); logo.src=STACK; var logoReady=new Promise(function(r){logo.onload=r;logo.onerror=r;});
  var fontsReady=(function(){try{return Promise.all([
    document.fonts.load('400 1em "calluna"'),document.fonts.load('italic 400 1em "calluna"'),
    document.fonts.load('700 1em "cofo-raffine"'),document.fonts.load('400 1em "basic-sans"'),document.fonts.load('500 1em "basic-sans"')
  ]).then(function(){return document.fonts.ready;}).catch(function(){});}catch(e){return Promise.resolve();}})();

  function wrap(ctx,text,maxW){ if(!text||!text.trim())return [""]; var ws=text.split(/\s+/),out=[],c=""; for(var i=0;i<ws.length;i++){var t=c?c+" "+ws[i]:ws[i]; if(ctx.measureText(t).width<=maxW||!c)c=t; else{out.push(c);c=ws[i];}} if(c)out.push(c); return out; }
  function tintLogo(ctx,x,y,h,color){ var w=h*(logo.naturalWidth/logo.naturalHeight||0.946),s=2; var off=document.createElement("canvas");off.width=w*s;off.height=h*s; var o=off.getContext("2d");o.scale(s,s); o.drawImage(logo,0,0,w,h);o.globalCompositeOperation="source-in";o.fillStyle=color;o.fillRect(0,0,w,h); ctx.drawImage(off,x,y,w,h); }

  function GEO(f){return f==="9x16"?[1080,1920]:[1080,1350];}
  function LAYOUT(W,H){return {padX:112,areaTop:150,lineY:H-150,maxW:W-224,availH:(H-174)-150,hang:38};}

  function plan(ctx,o,W,H){
    var T=THEMES[o.theme],acc=TACC[o.theme],L=LAYOUT(W,H);
    var hardMax=o.mode==="selection"?80:58, minFS=o.mode==="selection"?24:30;
    ctx.letterSpacing="0px"; ctx.font=fBody(100);
    var THRESH=50, all=o.lines.map(function(l){return l.t.trim();}).join(""), avgW=all.length?ctx.measureText(all).width/all.length:48, widest=1;
    o.lines.forEach(function(l){ var c=l.t.trim(); if(c) widest=Math.max(widest,ctx.measureText(c).width); });
    var effW=Math.min(widest,avgW*THRESH), noWrapFS=Math.floor(100*L.maxW/effW);
    function header(fs){ var s=[]; if(o.mode==="poem"){ var tS=Math.min(Math.round(fs*1.5),84); ctx.font=fTitle(tS); ctx.letterSpacing="0px";
        wrap(ctx,o.title,L.maxW).forEach(function(t){s.push({text:t,font:fTitle(tS),color:acc,lh:tS*1.18,x:0});});
        if(o.poet){ var pS=Math.min(fs*0.8,34); s.push({spacer:fs*0.34}); s.push({text:o.poet,font:fPoet(pS),color:acc,lh:pS*1.5,x:0}); }
        s.push({spacer:fs*0.95}); } return s; }
    function body(fs){ var s=[]; var lh=(o.prose?1.55:1.44)*fs, gap=fs*0.86; ctx.font=fBody(fs); ctx.letterSpacing="0px"; var spaceW=ctx.measureText(" ").width||fs*0.28; var epiFs=Math.min(fs*0.8,34), tab=4*spaceW;
        o.lines.forEach(function(l){
          var txt=l.t;
          if(!txt.trim()){ s.push({spacer:gap}); return; }
          if(o.prose){ ctx.font=fBody(fs); var vp=wrap(ctx,txt.trim(),L.maxW); vp.forEach(function(t,i){ s.push({text:t,words:t.split(" "),justify:i<vp.length-1,font:fBody(fs),color:T.ink,lh:lh,x:0,jw:L.maxW}); }); return; }
          if(l.it){ ctx.font=fItal(epiFs); wrap(ctx,txt.trim(),L.maxW-tab).forEach(function(t,i){ s.push({text:t,font:fItal(epiFs),color:T.sub,lh:epiFs*1.5,x:tab+(i>0?L.hang:0)}); }); return; }   // epigraph: poet-name size, italic, tab-indented
          ctx.font=fBody(fs);
          var lead=txt.match(/^ */)[0].length, indent=lead*spaceW, content=txt.slice(lead);
          var avail=Math.max(L.maxW-indent, L.maxW*0.45);
          wrap(ctx,content,avail).forEach(function(t,i){ s.push({text:t,font:fBody(fs),color:T.ink,lh:lh,x:indent+(i>0?L.hang:0)}); });
        }); return s; }
    function attr(fs){ var s=[],a=Math.min(Math.max(fs*0.42,23),31); s.push({spacer:fs*1.1}); if(o.poet) s.push({text:"— "+o.poet,font:fPoet(a),color:acc,lh:a*1.42,x:0}); if(o.title && !o.interview) s.push({text:'from “'+o.title+'”',font:fItal(a*0.96),color:T.sub,lh:a*1.42,x:0}); return s; }
    var fs;
    for(fs=Math.min(hardMax,Math.max(noWrapFS,minFS)); fs>=minFS; fs-=2){ var A=header(fs).concat(body(fs),o.mode==="selection"?attr(fs):[]); if(measure(A)<=L.availH) return {pages:[A],centered:true,L:L,T:T,acc:acc}; }
    if(o.mode==="selection"){ return {pages:[body(minFS).concat(attr(minFS))],centered:true,L:L,T:T,acc:acc}; }
    fs=minFS; var h=header(fs), flow=body(fs).concat(o.mode==="selection"?attr(fs):[]); var hH=measure(h), pages=[],page=[],used=0,first=true;
    flow.forEach(function(s){ var sh=s.spacer!=null?s.spacer:s.lh, lim=first?L.availH-hH:L.availH; if(used+sh>lim&&page.length){ pages.push(first?h.concat(page):page); first=false; page=[]; used=0; } if(!page.length&&s.spacer!=null) return; page.push(s); used+=sh; });
    if(page.length) pages.push(first?h.concat(page):page);
    return {pages:pages,centered:false,L:L,T:T,acc:acc};
  }

  function draw(canvas,o,pl,idx){
    var sc=2,g=GEO(o.format),W=g[0],H=g[1],L=pl.L,T=pl.T,acc=pl.acc,segs=pl.pages[idx];
    canvas.width=W*sc;canvas.height=H*sc; var ctx=canvas.getContext("2d"); ctx.setTransform(sc,0,0,sc,0,0);
    ctx.fillStyle=T.bg; ctx.fillRect(0,0,W,H);
    var y=L.areaTop+(pl.centered?Math.max(0,(L.availH-measure(segs))/2):0); ctx.textAlign="left"; ctx.textBaseline="alphabetic";
    segs.forEach(function(s){ if(s.spacer!=null){y+=s.spacer;return;} ctx.font=s.font; ctx.fillStyle=s.color; ctx.letterSpacing="0px"; y+=s.lh*0.78;
      if(s.justify&&s.words&&s.words.length>1){ var wsum=0; s.words.forEach(function(w){wsum+=ctx.measureText(w).width;}); var gp=(s.jw-wsum)/(s.words.length-1),cx=L.padX; s.words.forEach(function(w){ctx.fillText(w,cx,y);cx+=ctx.measureText(w).width+gp;}); }
      else ctx.fillText(s.text,L.padX+(s.x||0),y); y+=s.lh*0.22; });
    var lineY=L.lineY, lh2=64, lw=lh2*(logo.naturalWidth/logo.naturalHeight||0.946);
    tintLogo(ctx,W-L.padX-lw,lineY+22,lh2,acc);
    if(pl.pages.length>1){ ctx.textAlign="left"; ctx.font='500 19px "'+UI+'",sans-serif'; ctx.globalAlpha=0.55; ctx.fillStyle=acc; ctx.fillText((idx+1)+" / "+pl.pages.length,L.padX,lineY+22+lh2*0.6); ctx.globalAlpha=1; }
  }

  /* ---------- read the poem off the page ---------- */
  function meta(){
    var out={title:"",poet:"",type:""};
    var s=document.querySelectorAll('script[type="application/ld+json"]');
    for(var i=0;i<s.length;i++){ try{ var j=JSON.parse(s[i].textContent); var a=Array.isArray(j)?j:(j["@graph"]||[j]);
      a.forEach(function(o){ var t=(o&&o["@type"]||"")+""; if(/CreativeWork|Poem|Article|BlogPosting|Book|SocialMediaPosting/i.test(t)){ if(!out.title) out.title=o.name||o.headline||""; if(!out.type) out.type=t; var au=o.author; if(au&&!out.poet) out.poet=((Array.isArray(au)?au[au.length-1]:au)||{}).name||""; } if(/^Person$/i.test(t)&&!out.poet) out.poet=o.name||""; });
    }catch(e){} }
    if(!out.title){ var h=document.querySelector("h1"); if(h) out.title=h.textContent.trim(); }
    return out;
  }
  function bodyEl(){ return [].slice.call(document.querySelectorAll(".w-richtext")).filter(function(el){ return el.getClientRects().length && !el.closest('nav,.w-nav,footer,.footer,[class*="footer"]'); })[0]; }
  function readPoem(rt){
    var BLOCK=/^(P|H1|H2|H3|H4|H5|H6|BLOCKQUOTE|LI|PRE)$/;
    var kids=[].slice.call(rt.children).filter(function(c){return BLOCK.test(c.tagName);});
    var brCount=rt.querySelectorAll("br").length;
    var ne=kids.filter(function(k){return k.textContent.trim();});
    var avg=ne.length?ne.reduce(function(a,k){return a+k.textContent.trim().length;},0)/ne.length:0;
    var prose=brCount===0&&avg>=120, linePerBlock=brCount===0&&avg<70;
    var lines=[]; function clean(s){return s.replace(/ /g," ").replace(/\s+$/,"");}
    function gap(){ if(lines.length&&lines[lines.length-1].t!=="") lines.push({t:"",it:false}); }
    function push(t,it){ lines.push({t:clean(t),it:!!it}); }
    kids.forEach(function(b){
      var txt=b.textContent.trim();
      if(!txt){ gap(); return; }
      if(!linePerBlock) gap();
      var it=false; try{ it=((getComputedStyle(b).fontStyle||"").indexOf("italic")===0)||/^(EM|I)$/.test((b.firstElementChild||{}).tagName||""); }catch(e){}
      var cur=""; [].slice.call(b.childNodes).forEach(function(n){ if(n.nodeType===1&&n.tagName==="BR"){ push(cur,it); cur=""; } else { cur+=(n.textContent||""); } }); push(cur,it);
    });
    while(lines.length&&!lines[0].t) lines.shift();
    while(lines.length&&!lines[lines.length-1].t) lines.pop();
    return {lines:lines,prose:prose};
  }

  /* ---------- modal ---------- */
  var box=document.createElement("div");
  box.innerHTML='<div id="opc-overlay"><div class="opc-modal"><button class="opc-x" id="opc-close" aria-label="Close">×</button>'
    +'<div class="opc-opts"><div class="opc-grp"><span>Theme</span><div class="opc-seg" id="opc-theme"><button data-v="light" class="on">Light</button><button data-v="dark">Dark</button></div></div>'
    +'<div class="opc-grp"><span>Size</span><div class="opc-seg" id="opc-fmt"><button data-v="4x5" class="on">4:5</button><button data-v="9x16">9:16</button></div></div></div>'
    +'<div class="opc-pvwrap"><canvas id="opc-pv"></canvas></div>'
    +'<div id="opc-nav"><button class="opc-pgbtn" id="opc-prev">‹</button><span class="n" id="opc-lbl">1 / 1</span><button class="opc-pgbtn" id="opc-next">›</button></div>'
    +'<div class="opc-acts"><button class="opc-btn" id="opc-do-share">Share ↗</button><button class="opc-btn ghost" id="opc-do-dl">Download</button><button class="opc-btn ghost" id="opc-do-copy">Copy image</button></div></div></div>'
    +'<div id="opc-chip">Share</div>';
  document.body.appendChild(box);
  var overlay=document.getElementById("opc-overlay"), pv=document.getElementById("opc-pv"), chip=document.getElementById("opc-chip");
  var mctx=document.createElement("canvas").getContext("2d");
  var st={theme:"light",fmt:"4x5",page:0}, cur=null;

  function render(){ if(!cur) return; Promise.all([logoReady,fontsReady]).then(function(){ var g=GEO(st.fmt); cur.plan=plan(mctx,mk(),g[0],g[1]); if(st.page>=cur.plan.pages.length)st.page=0; draw(pv,mk(),cur.plan,st.page); var n=cur.plan.pages.length,nav=document.getElementById("opc-nav"); if(n>1){nav.style.display="flex";document.getElementById("opc-lbl").textContent=(st.page+1)+" / "+n;document.getElementById("opc-prev").disabled=st.page===0;document.getElementById("opc-next").disabled=st.page===n-1;} else nav.style.display="none"; }); }
  function mk(){ return {mode:cur.mode,title:cur.title,poet:cur.poet,lines:cur.lines,prose:cur.prose,article:cur.article,interview:cur.interview,theme:st.theme,format:st.fmt}; }
  function open(o){ cur=o; st.page=0; overlay.style.display="flex"; render(); }
  function segBtns(id,key){ [].slice.call(document.querySelectorAll("#"+id+" button")).forEach(function(b){ b.onclick=function(){ st[key]=b.dataset.v; [].slice.call(document.querySelectorAll("#"+id+" button")).forEach(function(x){x.classList.toggle("on",x===b);}); st.page=0; render(); }; }); }
  segBtns("opc-theme","theme"); segBtns("opc-fmt","fmt");
  document.getElementById("opc-prev").onclick=function(){ if(st.page>0){st.page--;render();} };
  document.getElementById("opc-next").onclick=function(){ if(st.page<cur.plan.pages.length-1){st.page++;render();} };
  document.getElementById("opc-close").onclick=function(){ overlay.style.display="none"; };
  overlay.onclick=function(e){ if(e.target===overlay) overlay.style.display="none"; };

  function pageBlob(i){ var c=document.createElement("canvas"); draw(c,mk(),cur.plan,i); return new Promise(function(r){c.toBlob(r,"image/png");}); }
  function fname(i){ var base=(cur.title||"poem").toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,40),n=cur.plan.pages.length; return "onlypoems-"+base+(n>1?"-"+(i+1):"")+".png"; }
  function dlAll(){ var n=cur.plan.pages.length,i=0; (function nx(){ if(i>=n)return; pageBlob(i).then(function(b){ var a=document.createElement("a"); a.href=URL.createObjectURL(b); a.download=fname(i); a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);},3000); i++; setTimeout(nx,450); }); })(); }
  document.getElementById("opc-do-dl").onclick=dlAll;
  document.getElementById("opc-do-share").onclick=function(){ var n=cur.plan.pages.length,files=[],i=0; (function nx(){ if(i>=n){ if(navigator.canShare&&navigator.canShare({files:files})){ navigator.share({files:files,title:cur.title,text:'“'+cur.title+'” — '+cur.poet+' · ONLY POEMS'}).catch(function(){}); } else { dlAll(); alert("Native share isn’t available on this browser — downloaded instead. On a phone this opens the share sheet."); } return; } pageBlob(i).then(function(b){ files.push(new File([b],fname(i),{type:"image/png"})); i++; nx(); }); })(); };
  document.getElementById("opc-do-copy").onclick=function(){ pageBlob(st.page).then(function(b){ if(!navigator.clipboard||!window.ClipboardItem){alert("Copy not supported here; use Download.");return;} navigator.clipboard.write([new ClipboardItem({"image/png":b})]).then(function(){ var el=document.getElementById("opc-do-copy"),t=el.textContent; el.textContent="Copied ✓"; setTimeout(function(){el.textContent=t;},1400); }).catch(function(){alert("Copy not supported here; use Download.");}); }); };

  /* ---------- wire into the page ---------- */
  function init(){
    var info=meta(), path=location.pathname;
    var READING=/\/(poems-catalog|poems|poem-of-the-month|blog|interviews|tags|read-poems-by-tags)\//.test(path)||/random-poem/.test(path);
    if(!READING && !info.type) return;                    // site-wide safe: only activate on reading/content pages
    var isInterview=/\/interviews\//.test(path), isBlog=/\/blog\//.test(path);
    var isPoemPath=/\/(poems-catalog|poems|poem-of-the-month|random-poem|tags|read-poems-by-tags)\//.test(path)||/random-poem/.test(path);
    // Conversations & co-authored blog posts: the page JSON-LD carries only the PRIMARY (first) author,
    // so the interviewed poet is never reached. Credit them by reading the visible "First & Second"
    // byline and taking the second name (anchored on the JSON-LD author so it never grabs stray text).
    if(isBlog){ try{
      var _fa=(info.poet||"").replace(/\s+/g," ").trim();
      if(_fa){ var _lc=_fa.toLowerCase(), _els=document.querySelectorAll("p,div,span,h2,h3,h4,h5,h6,a,li,em,strong,address");
        for(var _i=0;_i<_els.length;_i++){ var _el=_els[_i];
          if(_el.children.length>6||_el.closest('nav,.w-nav,footer,.footer,[class*="footer"]')) continue;
          var _tx=(_el.textContent||"").replace(/\s+/g," ").trim(); if(_tx.length<5||_tx.length>64) continue;
          var _m=_tx.match(/^(.+?)\s*[&+·•,\/]\s*(.+)$/); if(!_m||_m[1].trim().toLowerCase()!==_lc) continue;
          var _co=_m[2].trim().replace(/\s+(?:shares?|discusses?|talks?|reflects?|on|about|in|with)\b[\s\S]*$/i,"").trim();
          if(/^[A-ZÀ-Þ][A-Za-zÀ-ÿ.'\-]+(?:[\s\-][A-ZÀ-Þ][A-Za-zÀ-ÿ.'\-]+){1,3}$/.test(_co)){ info.poet=_co; break; } }
      }
    }catch(_e){} }
    function isContent(el){ return el && !el.closest('nav,.w-nav,footer,.footer,[class*="footer"]'); }
    function host(node){ var el=node&&(node.nodeType===1?node:node.parentElement); el=el&&el.closest?el.closest(".w-richtext"):null; return isContent(el)?el:null; }
    function titleFor(rt){ var el=rt; while(el){ var p=el.previousElementSibling; while(p){ var h=(/^H[1-4]$/.test(p.tagName)?p:(p.querySelector?p.querySelector("h1,h2,h3,h4"):null)); if(h&&h.textContent.trim()) return h.textContent.trim(); p=p.previousElementSibling; } el=el.parentElement; if(!el||el.tagName==="BODY") break; } return ""; }
    var list=[].slice.call(document.querySelectorAll(".w-richtext")).filter(function(el){ return el.getClientRects().length && isContent(el); });
    // POEM pages: a "Share this poem" button after EACH visible poem (so a poet catalog with many poems gets one per poem). BLOG/INTERVIEW: none.
    var POEM_SEL=".op-poem";   // tag the poem-text field with this class in Webflow → the whole feature binds to it exactly (bio / notes / caption ignored). Otherwise fall back to a heuristic.
    var poems=[].slice.call(document.querySelectorAll(POEM_SEL)).filter(function(el){return el.getClientRects().length&&isContent(el);});
    if(!poems.length) poems=list.filter(function(el){return el.textContent.trim().length>=60 && !/\bnote\b/i.test(titleFor(el));});
    var blogVerse=isBlog&&poems.some(function(rt){ var br=rt.querySelectorAll("br").length, blk=rt.querySelectorAll("p,div,h1,h2,h3,li").length||1, ln=br+blk, len=(rt.textContent||"").trim().length; return ln>=3 && (len/ln)<55; });   // blog that's actually VERSE = many SHORT lines (e.g. Bob Hicok); prose essays/conversations have few long lines
    var poemLike=isPoemPath||blogVerse||(/creativework|poem|book|poetry/i.test(info.type)&&!isInterview&&!isBlog);
    var isArticle=!poemLike;
    try{ console.log("[ONLY POEMS] cards state · poems="+poems.length+" isArticle="+isArticle+" blogVerse="+blogVerse+' poet="'+info.poet+'"'+" path="+path); }catch(_e){}
    if(!isArticle){ poems.forEach(function(rt){ try{ var title=(poems.length>1?titleFor(rt):(info.title||titleFor(rt)))||info.title||titleFor(rt); var btn=document.createElement("button"); btn.className="opc-share"; btn.innerHTML='<span class="l">Share this poem</span>'; btn.onclick=function(){ var pp=readPoem(rt); open({mode:"poem",title:title,poet:info.poet,lines:pp.lines,prose:pp.prose}); }; rt.insertAdjacentElement("afterend",btn); }catch(_e){} }); }
    // highlight-to-share on any content rich text (poem body OR article body); attribution uses the containing poem's title
    var selLines=null,selProse=false,selTitle="";
    function refresh(){ var sel=window.getSelection(); if(!sel||sel.isCollapsed||!sel.toString().trim()){chip.style.display="none";return;} var h=host(sel.anchorNode); if(!h||h!==host(sel.focusNode)||poems.indexOf(h)<0){chip.style.display="none";return;} var r=sel.getRangeAt(0).getBoundingClientRect(); var t=sel.toString(); if(t.length>SEL_CAP)t=t.slice(0,SEL_CAP).replace(/\s+\S*$/,"")+"…"; selLines=t.split(/\n/).map(function(x){return {t:x.replace(/\u00A0/g," ").replace(/\s+$/,""),it:false};}); selProse=readPoem(h).prose; selTitle=titleFor(h)||info.title; chip.style.display="block"; chip.style.top=(window.scrollY+r.top-chip.offsetHeight-12)+"px"; chip.style.left=(window.scrollX+r.left+r.width/2-chip.offsetWidth/2)+"px"; }
    document.addEventListener("mouseup",function(){setTimeout(refresh,10);});
    document.addEventListener("touchend",function(){setTimeout(refresh,10);});
    document.addEventListener("selectionchange",function(){ if(window.getSelection().isCollapsed) chip.style.display="none"; });
    chip.addEventListener("mousedown",function(e){e.preventDefault();});
    chip.onclick=function(){ if(!selLines||!selLines.length)return; chip.style.display="none"; open({mode:"selection",title:selTitle,poet:info.poet,lines:selLines,prose:(isArticle?true:selProse),article:isArticle,interview:isInterview}); };
  }
  function __opcRun(){ try{ init(); }catch(_e){ try{ console.warn("[ONLY POEMS] cards init failed:",_e); }catch(e){} } }
  if(document.readyState==="loading") addEventListener("DOMContentLoaded",__opcRun); else __opcRun();
})();
