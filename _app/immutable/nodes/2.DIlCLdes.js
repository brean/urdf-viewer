var mg=Object.defineProperty;var gg=(r,e,t)=>e in r?mg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Nt=(r,e,t)=>gg(r,typeof e!="symbol"?e+"":e,t);import{x as Hn,y as zn,t as _g,z as Vn,s as In,c as $i,u as Qi,g as er,a as tr,b as sn,A as yg,o as Mo,e as _u,B as $a,C as vs,D as ji,E as Ha,i as Id,n as yu,F as vg,k as xg}from"../chunks/scheduler.D8eNju6M.js";import{S as Dn,i as Nn,t as xe,a as Te,u as mt,v as gt,w as _t,x as yt,e as Dd,c as Nd,d as Ud,g as wt,o as Od,j as Ct,q as Mn,n as Sn,s as dn,m as Ft,h as pn,H as vu,y as xu,z as Qa,A as bg}from"../chunks/index.umT5ir2Y.js";import{p as Mg}from"../chunks/stores.DjEmGGXu.js";import{d as bu,w as on,r as Sg}from"../chunks/entry.D7t3KyEG.js";function Ji(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Fd(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=e[s];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);r[s]=a}else for(const c in o)i[c]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Bd(r){return typeof r=="object"&&r!==null?r:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="160",_r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kd=0,El=1,zd=2,wg=3,Eg=0,Mu=1,ec=2,hi=3,di=0,Pn=1,ni=2,Ag=2,Pi=0,Tr=1,Al=2,Tl=3,Cl=4,Vd=5,Wi=100,Hd=101,Gd=102,Rl=103,Pl=104,Wd=200,Xd=201,qd=202,Yd=203,Ga=204,Wa=205,Zd=206,jd=207,Jd=208,Kd=209,$d=210,Qd=211,ep=212,tp=213,np=214,ip=0,rp=1,sp=2,eo=3,op=4,ap=5,cp=6,lp=7,wo=0,up=1,hp=2,Li=0,fp=1,dp=2,pp=3,Su=4,mp=5,gp=6,Ll="attached",_p="detached",tc=300,Di=301,Ki=302,to=303,no=304,Es=306,Ti=1e3,hn=1001,io=1002,$t=1003,Xa=1004,Tg=1004,js=1005,Cg=1005,Qt=1006,wu=1007,Rg=1007,Ni=1008,Pg=1008,Ii=1009,yp=1010,vp=1011,nc=1012,Eu=1013,Ci=1014,ii=1015,xs=1016,Au=1017,Tu=1018,qi=1020,xp=1021,Bn=1023,bp=1024,Mp=1025,Yi=1026,Lr=1027,Sp=1028,Cu=1029,wp=1030,Ru=1031,Pu=1033,Ua=33776,Oa=33777,Fa=33778,Ba=33779,Il=35840,Dl=35841,Nl=35842,Ul=35843,Lu=36196,Ol=37492,Fl=37496,Bl=37808,kl=37809,zl=37810,Vl=37811,Hl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,jl=37819,Jl=37820,Kl=37821,ka=36492,$l=36494,Ql=36495,Ep=36283,eu=36284,tu=36285,nu=36286,Ap=2200,Tp=2201,Cp=2202,ro=2300,so=2301,za=2302,Sr=2400,wr=2401,oo=2402,ic=2500,Iu=2501,Lg=0,Ig=1,Dg=2,Du=3e3,Zi=3001,Rp=3200,Pp=3201,nr=0,Lp=1,Xn="",Zt="srgb",pi="srgb-linear",rc="display-p3",Eo="display-p3-linear",ao="linear",Ot="srgb",co="rec709",lo="p3",Ng=0,vr=7680,Ug=7681,Og=7682,Fg=7683,Bg=34055,kg=34056,zg=5386,Vg=512,Hg=513,Gg=514,Wg=515,Xg=516,qg=517,Yg=518,iu=519,Ip=512,Dp=513,Np=514,Nu=515,Up=516,Op=517,Fp=518,Bp=519,uo=35044,Zg=35048,jg=35040,Jg=35045,Kg=35049,$g=35041,Qg=35046,e_=35050,t_=35042,n_="100",ru="300 es",qa=1035,ri=2e3,bs=2001;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const Cr=Math.PI/180,Ms=180/Math.PI;function qn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function jt(r,e,t){return Math.max(e,Math.min(t,r))}function Uu(r,e){return(r%e+e)%e}function i_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function r_(r,e,t){return r!==e?(t-r)/(e-r):0}function Js(r,e,t){return(1-t)*r+t*e}function s_(r,e,t,n){return Js(r,e,1-Math.exp(-t*n))}function o_(r,e=1){return e-Math.abs(Uu(r,e*2)-e)}function a_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function c_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function l_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function u_(r,e){return r+Math.random()*(e-r)}function h_(r){return r*(.5-Math.random())}function f_(r){r!==void 0&&(xh=r);let e=xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d_(r){return r*Cr}function p_(r){return r*Ms}function su(r){return(r&r-1)===0&&r!==0}function m_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ya(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function g_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*p,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*p,a*l);break;case"ZYZ":r.set(c*p,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const br={DEG2RAD:Cr,RAD2DEG:Ms,generateUUID:qn,clamp:jt,euclideanModulo:Uu,mapLinear:i_,inverseLerp:r_,lerp:Js,damp:s_,pingpong:o_,smoothstep:a_,smootherstep:c_,randInt:l_,randFloat:u_,randFloatSpread:h_,seededRandom:f_,degToRad:d_,radToDeg:p_,isPowerOfTwo:su,ceilPowerOfTwo:m_,floorPowerOfTwo:Ya,setQuaternionFromProperEuler:g_,normalize:dt,denormalize:kn};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,i,s,o,a,c,l){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],y=i[4],b=i[7],I=i[2],R=i[5],T=i[8];return s[0]=o*_+a*v+c*I,s[3]=o*m+a*y+c*R,s[6]=o*g+a*b+c*T,s[1]=l*_+u*v+h*I,s[4]=l*m+u*y+h*R,s[7]=l*g+u*b+h*T,s[2]=f*_+d*v+p*I,s[5]=f*m+d*y+p*R,s[8]=f*g+d*b+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new pt;function kp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const __={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ds(r,e){return new __[r](e)}function ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zp(){const r=ho("canvas");return r.style.display="block",r}const bh={};function Ks(r){r in bh||(bh[r]=!0,console.warn(r))}const Mh=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sh=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[pi]:{transfer:ao,primaries:co,toReference:r=>r,fromReference:r=>r},[Zt]:{transfer:Ot,primaries:co,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Eo]:{transfer:ao,primaries:lo,toReference:r=>r.applyMatrix3(Sh),fromReference:r=>r.applyMatrix3(Mh)},[rc]:{transfer:Ot,primaries:lo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Sh),fromReference:r=>r.applyMatrix3(Mh).convertLinearToSRGB()}},y_=new Set([pi,Eo]),Lt={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!y_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=zo[e].toReference,i=zo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return zo[r].primaries},getTransfer:function(r){return r===Xn?ao:zo[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xr;class Ou{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xr===void 0&&(Xr=ho("canvas")),Xr.width=e.width,Xr.height=e.height;const n=Xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ho("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v_=0;class Er{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vc(i[o].image)):s.push(Vc(i[o]))}else s=Vc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ou.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x_=0;class en extends mi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=hn,i=hn,s=Qt,o=Ni,a=Bn,c=Ii,l=en.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=qn(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zi?Zt:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?Zi:Du}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zi?Zt:Xn}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tc;en.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(d+1)/2,I=(g+1)/2,R=(u+f)/4,T=(h+_)/4,O=(p+m)/4;return y>b&&y>I?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=R/n,s=T/n):b>I?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=R/i,s=O/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=T/s,i=O/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vp extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zi?Zt:Xn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Er(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Vp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sc extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b_ extends Yn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new sc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Fu extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=$t,this.minFilter=$t,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M_ extends Yn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Fu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class S_ extends Yn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==p){let m=1-a;const g=c*f+l*d+u*p+h*_,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,g*v);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const b=a*v;if(c=c*m+f*b,l=l*m+d*b,u=u*m+p*b,h=h*m+_*b,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-a*d,e[t+2]=l*p+u*d+a*f-c*h,e[t+3]=u*p-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new N,wh=new fn;class Ln{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Ho.subVectors(this.max,Fs),qr.subVectors(e.a,Fs),Yr.subVectors(e.b,Fs),Zr.subVectors(e.c,Fs),Oi.subVectors(Yr,qr),Fi.subVectors(Zr,Yr),or.subVectors(qr,Zr);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-or.z,or.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,or.z,0,-or.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-or.y,or.x,0];return!Gc(t,qr,Yr,Zr,Ho)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,qr,Yr,Zr,Ho))?!1:(Go.crossVectors(Oi,Fi),t=[Go.x,Go.y,Go.z],Gc(t,qr,Yr,Zr,Ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,Vo=new Ln,qr=new N,Yr=new N,Zr=new N,Oi=new N,Fi=new N,or=new N,Fs=new N,Ho=new N,Go=new N,ar=new N;function Gc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ar.fromArray(r,s);const a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),c=e.dot(ar),l=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const w_=new Ln,Bs=new N,Wc=new N;class bn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Wc)),this.expandByPoint(Bs.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new N,Xc=new N,Wo=new N,Bi=new N,qc=new N,Xo=new N,Yc=new N;class Fr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xc.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Xc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wo),a=Bi.dot(this.direction),c=-Bi.dot(Wo),l=Bi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*c-a,f=o*a-c,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xc).addScaledVector(Wo,f),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,s){qc.subVectors(t,e),Xo.subVectors(n,e),Yc.crossVectors(qc,Xo);let o=this.direction.dot(Yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const c=a*this.direction.dot(Xo.crossVectors(Bi,Xo));if(c<0)return null;const l=a*this.direction.dot(qc.cross(Bi));if(l<0||c+l>o)return null;const u=-a*Bi.dot(Yc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,m)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E_,e,A_)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ki.crossVectors(n,Gn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ki.crossVectors(n,Gn)),ki.normalize(),qo.crossVectors(Gn,ki),i[0]=ki.x,i[4]=qo.x,i[8]=Gn.x,i[1]=ki.y,i[5]=qo.y,i[9]=Gn.y,i[2]=ki.z,i[6]=qo.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],y=n[7],b=n[11],I=n[15],R=i[0],T=i[4],O=i[8],S=i[12],w=i[1],F=i[5],j=i[9],he=i[13],z=i[2],W=i[6],k=i[10],Q=i[14],Y=i[3],q=i[7],ne=i[11],ee=i[15];return s[0]=o*R+a*w+c*z+l*Y,s[4]=o*T+a*F+c*W+l*q,s[8]=o*O+a*j+c*k+l*ne,s[12]=o*S+a*he+c*Q+l*ee,s[1]=u*R+h*w+f*z+d*Y,s[5]=u*T+h*F+f*W+d*q,s[9]=u*O+h*j+f*k+d*ne,s[13]=u*S+h*he+f*Q+d*ee,s[2]=p*R+_*w+m*z+g*Y,s[6]=p*T+_*F+m*W+g*q,s[10]=p*O+_*j+m*k+g*ne,s[14]=p*S+_*he+m*Q+g*ee,s[3]=v*R+y*w+b*z+I*Y,s[7]=v*T+y*F+b*W+I*q,s[11]=v*O+y*j+b*k+I*ne,s[15]=v*S+y*he+b*Q+I*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+g*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=h*m*l-_*f*l+_*c*d-a*m*d-h*c*g+a*f*g,y=p*f*l-u*m*l-p*c*d+o*m*d+u*c*g-o*f*g,b=u*_*l-p*h*l+p*a*d-o*_*d-u*a*g+o*h*g,I=p*h*c-u*_*c-p*a*f+o*_*f+u*a*m-o*h*m,R=t*v+n*y+i*b+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*g-n*f*g)*T,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*g+n*c*g)*T,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*T,e[4]=y*T,e[5]=(u*m*s-p*f*s+p*i*d-t*m*d-u*i*g+t*f*g)*T,e[6]=(p*c*s-o*m*s-p*i*l+t*m*l+o*i*g-t*c*g)*T,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*T,e[8]=b*T,e[9]=(p*h*s-u*_*s-p*n*d+t*_*d+u*n*g-t*h*g)*T,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*g+t*a*g)*T,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*T,e[12]=I*T,e[13]=(u*_*i-p*h*i+p*n*f-t*_*f-u*n*m+t*h*m)*T,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,p=s*h,_=o*u,m=o*h,g=a*h,v=c*l,y=c*u,b=c*h,I=n.x,R=n.y,T=n.z;return i[0]=(1-(_+g))*I,i[1]=(d+b)*I,i[2]=(p-y)*I,i[3]=0,i[4]=(d-b)*R,i[5]=(1-(f+g))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(p+y)*T,i[9]=(m-v)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=jr.set(i[0],i[1],i[2]).length();const o=jr.set(i[4],i[5],i[6]).length(),a=jr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const l=1/s,u=1/o,h=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ri){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===ri)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===bs)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ri){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u;let p,_;if(a===ri)p=(o+s)*h,_=-2*h;else if(a===bs)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jr=new N,Qn=new Ye,E_=new N(0,0,0),A_=new N(1,1,1),ki=new N,qo=new N,Gn=new N,Eh=new Ye,Ah=new fn;class Ao{constructor(e=0,t=0,n=0,i=Ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ao.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const Th=new N,Jr=new fn,bi=new Ye,Yo=new N,ks=new N,C_=new N,R_=new fn,Ch=new N(1,0,0),Rh=new N(0,1,0),Ph=new N(0,0,1),P_={type:"added"},L_={type:"removed"};class Rt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new N,t=new Ao,n=new fn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new pt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yo.copy(e):Yo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ks,Yo,this.up):bi.lookAt(Yo,ks,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Jr.setFromRotationMatrix(bi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(P_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,R_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new N(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new N,Mi=new N,Zc=new N,Si=new N,Kr=new N,$r=new N,Lh=new N,jc=new N,Jc=new N,Kc=new N;let Zo=!1;class Fn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),Mi.subVectors(n,t),Zc.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(Mi),c=ei.dot(Zc),l=Mi.dot(Mi),u=Mi.dot(Zc),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,p=(o*u-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,n,i,s,o,a,c){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Mi.subVectors(e,t),ei.cross(Mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ei.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Kr.subVectors(i,n),$r.subVectors(s,n),jc.subVectors(e,n);const c=Kr.dot(jc),l=$r.dot(jc);if(c<=0&&l<=0)return t.copy(n);Jc.subVectors(e,i);const u=Kr.dot(Jc),h=$r.dot(Jc);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Kr,o);Kc.subVectors(e,s);const d=Kr.dot(Kc),p=$r.dot(Kc);if(p>=0&&d<=p)return t.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector($r,a);const m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Lh.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(Lh,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Kr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},jo={h:0,s:0,l:0};function $c(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=Uu(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$c(o,s,e+1/3),this.g=$c(o,s,e),this.b=$c(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=Hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Lt.fromWorkingColorSpace(vn.copy(this),e),Math.round(jt(vn.r*255,0,255))*65536+Math.round(jt(vn.g*255,0,255))*256+Math.round(jt(vn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Zt){Lt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(jo);const n=Js(zi.h,jo.h,t),i=Js(zi.s,jo.s,t),s=Js(zi.l,jo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Le;Le.NAMES=Hp;let I_=0;class wn extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Tr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ai=D_();function D_(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function On(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=jt(r,-65504,65504),Ai.floatView[0]=r;const e=Ai.uint32View[0],t=e>>23&511;return Ai.baseTable[t]+((e&8388607)>>Ai.shiftTable[t])}function Zs(r){const e=r>>10;return Ai.uint32View[0]=Ai.mantissaTable[Ai.offsetTable[e]+(r&1023)]+Ai.exponentTable[e],Ai.floatView[0]}const N_={toHalfFloat:On,fromHalfFloat:Zs},nn=new N,Jo=new se;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uo&&(e.usage=this.usage),e}}class U_ extends Pt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class O_ extends Pt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class F_ extends Pt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class B_ extends Pt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Bu extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class k_ extends Pt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class ku extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class z_ extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Zs(this.array[e*this.itemSize]);return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=On(t),this}getY(e){let t=Zs(this.array[e*this.itemSize+1]);return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=On(t),this}getZ(e){let t=Zs(this.array[e*this.itemSize+2]);return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=On(t),this}getW(e){let t=Zs(this.array[e*this.itemSize+3]);return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=On(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=On(t),this.array[e+1]=On(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=On(t),this.array[e+1]=On(n),this.array[e+2]=On(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=On(t),this.array[e+1]=On(n),this.array[e+2]=On(i),this.array[e+3]=On(s),this}}class Oe extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}class V_ extends Pt{constructor(e,t,n){super(new Float64Array(e),t,n)}}let H_=0;const Jn=new Ye,Qc=new Rt,Qr=new N,Wn=new Ln,zs=new Ln,un=new N;class ut extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?ku:Bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Qc.lookAt(e),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Wn.min,zs.min),Wn.expandByPoint(un),un.addVectors(Wn.max,zs.max),Wn.expandByPoint(un)):(Wn.expandByPoint(zs.min),Wn.expandByPoint(zs.max))}Wn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)un.fromBufferAttribute(a,l),c&&(Qr.fromBufferAttribute(e,l),un.add(Qr)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new N,u[w]=new N;const h=new N,f=new N,d=new N,p=new se,_=new se,m=new se,g=new N,v=new N;function y(w,F,j){h.fromArray(i,w*3),f.fromArray(i,F*3),d.fromArray(i,j*3),p.fromArray(o,w*2),_.fromArray(o,F*2),m.fromArray(o,j*2),f.sub(h),d.sub(h),_.sub(p),m.sub(p);const he=1/(_.x*m.y-m.x*_.y);isFinite(he)&&(g.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(he),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(he),l[w].add(g),l[F].add(g),l[j].add(g),u[w].add(v),u[F].add(v),u[j].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,F=b.length;w<F;++w){const j=b[w],he=j.start,z=j.count;for(let W=he,k=he+z;W<k;W+=3)y(n[W+0],n[W+1],n[W+2])}const I=new N,R=new N,T=new N,O=new N;function S(w){T.fromArray(s,w*3),O.copy(T);const F=l[w];I.copy(F),I.sub(T.multiplyScalar(T.dot(F))).normalize(),R.crossVectors(O,F);const he=R.dot(u[w])<0?-1:1;c[w*4]=I.x,c[w*4+1]=I.y,c[w*4+2]=I.z,c[w*4+3]=he}for(let w=0,F=b.length;w<F;++w){const j=b[w],he=j.start,z=j.count;for(let W=he,k=he+z;W<k;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let g=0;g<u;g++)f[p++]=l[d++]}return new Pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new Ye,cr=new Fr,Ko=new bn,Dh=new N,es=new N,ts=new N,ns=new N,el=new N,$o=new N,Qo=new se,ea=new se,ta=new se,Nh=new N,Uh=new N,Oh=new N,na=new N,ia=new N;class Jt extends Rt{constructor(e=new ut,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$o.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(el.fromBufferAttribute(h,e),o?$o.addScaledVector(el,u):$o.addScaledVector(el.sub(t),u))}t.add($o)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Ko.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Ko,Dh)===null||cr.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Ih.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,I=y;b<I;b+=3){const R=a.getX(b),T=a.getX(b+1),O=a.getX(b+2);i=ra(this,g,e,n,l,u,h,R,T,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);i=ra(this,o,e,n,l,u,h,v,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,I=y;b<I;b+=3){const R=b,T=b+1,O=b+2;i=ra(this,g,e,n,l,u,h,R,T,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=m,y=m+1,b=m+2;i=ra(this,o,e,n,l,u,h,v,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function G_(r,e,t,n,i,s,o,a){let c;if(e.side===Pn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===di,a),c===null)return null;ia.copy(a),ia.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ia);return l<t.near||l>t.far?null:{distance:l,point:ia.clone(),object:r}}function ra(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,es),r.getVertexPosition(c,ts),r.getVertexPosition(l,ns);const u=G_(r,e,t,n,es,ts,ns,na);if(u){i&&(Qo.fromBufferAttribute(i,a),ea.fromBufferAttribute(i,c),ta.fromBufferAttribute(i,l),u.uv=Fn.getInterpolation(na,es,ts,ns,Qo,ea,ta,new se)),s&&(Qo.fromBufferAttribute(s,a),ea.fromBufferAttribute(s,c),ta.fromBufferAttribute(s,l),u.uv1=Fn.getInterpolation(na,es,ts,ns,Qo,ea,ta,new se),u.uv2=u.uv1),o&&(Nh.fromBufferAttribute(o,a),Uh.fromBufferAttribute(o,c),Oh.fromBufferAttribute(o,l),u.normal=Fn.getInterpolation(na,es,ts,ns,Nh,Uh,Oh,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Fn.getNormal(es,ts,ns,h.normal),u.face=h}return u}class Br extends ut{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(h,2));function p(_,m,g,v,y,b,I,R,T,O,S){const w=b/T,F=I/O,j=b/2,he=I/2,z=R/2,W=T+1,k=O+1;let Q=0,Y=0;const q=new N;for(let ne=0;ne<k;ne++){const ee=ne*F-he;for(let fe=0;fe<W;fe++){const H=fe*w-j;q[_]=H*v,q[m]=ee*y,q[g]=z,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[g]=R>0?1:-1,u.push(q.x,q.y,q.z),h.push(fe/T),h.push(1-ne/O),Q+=1}}for(let ne=0;ne<O;ne++)for(let ee=0;ee<T;ee++){const fe=f+ee+W*ne,H=f+ee+W*(ne+1),Z=f+(ee+1)+W*(ne+1),ie=f+(ee+1)+W*ne;c.push(fe,H,ie),c.push(H,Z,ie),Y+=6}a.addGroup(d,Y,S),d+=Y,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(r){const e={};for(let t=0;t<r.length;t++){const n=Ss(r[t]);for(const i in n)e[i]=n[i]}return e}function W_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Gp(r){return r.getRenderTarget()===null?r.outputColorSpace:Lt.workingColorSpace}const Wp={clone:Ss,merge:Tn};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=q_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ac extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends ac{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,rs=1;class Xp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(is,rs,e,t);i.layers=this.layers,this.add(i);const s=new rn(is,rs,e,t);s.layers=this.layers,this.add(s);const o=new rn(is,rs,e,t);o.layers=this.layers,this.add(o);const a=new rn(is,rs,e,t);a.layers=this.layers,this.add(a);const c=new rn(is,rs,e,t);c.layers=this.layers,this.add(c);const l=new rn(is,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class To extends en{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zi?Zt:Xn),this.texture=new To(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Br(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Pi});s.uniforms.tEquirect.value=t;const o=new Jt(i,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Qt),new Xp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const tl=new N,Y_=new N,Z_=new pt;class Ei{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=tl.subVectors(n,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Z_.getNormalMatrix(e),i=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new bn,sa=new N;class Co{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],g=i[12],v=i[13],y=i[14],b=i[15];if(n[0].setComponents(c-s,f-l,m-d,b-g).normalize(),n[1].setComponents(c+s,f+l,m+d,b+g).normalize(),n[2].setComponents(c+o,f+u,m+p,b+v).normalize(),n[3].setComponents(c-o,f-u,m-p,b-v).normalize(),n[4].setComponents(c-a,f-h,m-_,b-y).normalize(),t===ri)n[5].setComponents(c+a,f+h,m+_,b+y).normalize();else if(t===bs)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(sa.x=i.normal.x>0?e.max.x:e.min.x,sa.y=i.normal.y>0?e.max.y:e.min.y,sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function j_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,d=h.byteLength,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,u,h){const f=u.array,d=u._updateRange,p=u.updateRanges;if(r.bindBuffer(h,l),d.count===-1&&p.length===0&&r.bufferSubData(h,0,f),p.length!==0){for(let _=0,m=p.length;_<m;_++){const g=p[_];t?r.bufferSubData(h,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count):r.bufferSubData(h,g.start*f.BYTES_PER_ELEMENT,f.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class As extends ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*f-o;for(let y=0;y<l;y++){const b=y*h-s;p.push(b,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){const y=v+l*g,b=v+l*(g+1),I=v+1+l*(g+1),R=v+1+l*g;d.push(y,b,R),d.push(b,I,R)}this.setIndex(d),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}var J_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,o0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,v0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,b0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,C0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ny=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ly=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,My=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:J_,alphahash_pars_fragment:K_,alphamap_fragment:$_,alphamap_pars_fragment:Q_,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:r0,batching_vertex:s0,begin_vertex:o0,beginnormal_vertex:a0,bsdfs:c0,iridescence_fragment:l0,bumpmap_pars_fragment:u0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:_0,color_vertex:y0,common:v0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:b0,displacementmap_pars_vertex:M0,displacementmap_vertex:S0,emissivemap_fragment:w0,emissivemap_pars_fragment:E0,colorspace_fragment:A0,colorspace_pars_fragment:T0,envmap_fragment:C0,envmap_common_pars_fragment:R0,envmap_pars_fragment:P0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:G0,envmap_vertex:I0,fog_vertex:D0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:O0,gradientmap_pars_fragment:F0,lightmap_fragment:B0,lightmap_pars_fragment:k0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:V0,lights_pars_begin:H0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:Z0,lights_physical_pars_fragment:j0,lights_fragment_begin:J0,lights_fragment_maps:K0,lights_fragment_end:$0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:oy,metalnessmap_fragment:ay,metalnessmap_pars_fragment:cy,morphcolor_vertex:ly,morphnormal_vertex:uy,morphtarget_pars_vertex:hy,morphtarget_vertex:fy,normal_fragment_begin:dy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:_y,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:xy,clearcoat_pars_fragment:by,iridescence_pars_fragment:My,opaque_fragment:Sy,packing:wy,premultiplied_alpha_fragment:Ey,project_vertex:Ay,dithering_fragment:Ty,dithering_pars_fragment:Cy,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Iy,shadowmap_vertex:Dy,shadowmask_pars_fragment:Ny,skinbase_vertex:Uy,skinning_pars_vertex:Oy,skinning_vertex:Fy,skinnormal_vertex:By,specularmap_fragment:ky,specularmap_pars_fragment:zy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Hy,transmission_fragment:Gy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:qy,uv_vertex:Yy,worldpos_vertex:Zy,background_vert:jy,background_frag:Jy,backgroundCube_vert:Ky,backgroundCube_frag:$y,cube_vert:Qy,cube_frag:ev,depth_vert:tv,depth_frag:nv,distanceRGBA_vert:iv,distanceRGBA_frag:rv,equirect_vert:sv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:cv,meshbasic_vert:lv,meshbasic_frag:uv,meshlambert_vert:hv,meshlambert_frag:fv,meshmatcap_vert:dv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:_v,meshphong_frag:yv,meshphysical_vert:vv,meshphysical_frag:xv,meshtoon_vert:bv,meshtoon_frag:Mv,points_vert:Sv,points_frag:wv,shadow_vert:Ev,shadow_frag:Av,sprite_vert:Tv,sprite_frag:Cv},Ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ti={basic:{uniforms:Tn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Tn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Tn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Tn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Tn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Tn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Tn([Ae.points,Ae.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Tn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Tn([Ae.common,Ae.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Tn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Tn([Ae.sprite,Ae.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Tn([Ae.common,Ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Tn([Ae.lights,Ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ti.physical={uniforms:Tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const oa={r:0,b:0,g:0};function Rv(r,e,t,n,i,s,o){const a=new Le(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function p(m,g){let v=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Es)?(u===void 0&&(u=new Jt(new Br(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ss(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Ot,(h!==y||f!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jt(new As(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ss(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,g){m.getRGB(oa,Gp(r)),n.buffers.color.setClear(oa.r,oa.g,oa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),c=g,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:p}}function Pv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(z,W,k,Q,Y){let q=!1;if(o){const ne=_(Q,k,W);l!==ne&&(l=ne,d(l.object)),q=g(z,Q,k,Y),q&&v(z,Q,k,Y)}else{const ne=W.wireframe===!0;(l.geometry!==Q.id||l.program!==k.id||l.wireframe!==ne)&&(l.geometry=Q.id,l.program=k.id,l.wireframe=ne,q=!0)}Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,O(z,W,k,Q),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function p(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,W,k){const Q=k.wireframe===!0;let Y=a[z.id];Y===void 0&&(Y={},a[z.id]=Y);let q=Y[W.id];q===void 0&&(q={},Y[W.id]=q);let ne=q[Q];return ne===void 0&&(ne=m(f()),q[Q]=ne),ne}function m(z){const W=[],k=[],Q=[];for(let Y=0;Y<i;Y++)W[Y]=0,k[Y]=0,Q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:k,attributeDivisors:Q,object:z,attributes:{},index:null}}function g(z,W,k,Q){const Y=l.attributes,q=W.attributes;let ne=0;const ee=k.getAttributes();for(const fe in ee)if(ee[fe].location>=0){const Z=Y[fe];let ie=q[fe];if(ie===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(ie=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(ie=z.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;ne++}return l.attributesNum!==ne||l.index!==Q}function v(z,W,k,Q){const Y={},q=W.attributes;let ne=0;const ee=k.getAttributes();for(const fe in ee)if(ee[fe].location>=0){let Z=q[fe];Z===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),Y[fe]=ie,ne++}l.attributes=Y,l.attributesNum=ne,l.index=Q}function y(){const z=l.newAttributes;for(let W=0,k=z.length;W<k;W++)z[W]=0}function b(z){I(z,0)}function I(z,W){const k=l.newAttributes,Q=l.enabledAttributes,Y=l.attributeDivisors;k[z]=1,Q[z]===0&&(r.enableVertexAttribArray(z),Q[z]=1),Y[z]!==W&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),Y[z]=W)}function R(){const z=l.newAttributes,W=l.enabledAttributes;for(let k=0,Q=W.length;k<Q;k++)W[k]!==z[k]&&(r.disableVertexAttribArray(k),W[k]=0)}function T(z,W,k,Q,Y,q,ne){ne===!0?r.vertexAttribIPointer(z,W,k,Y,q):r.vertexAttribPointer(z,W,k,Q,Y,q)}function O(z,W,k,Q){if(n.isWebGL2===!1&&(z.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Y=Q.attributes,q=k.getAttributes(),ne=W.defaultAttributeValues;for(const ee in q){const fe=q[ee];if(fe.location>=0){let H=Y[ee];if(H===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(H=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(H=z.instanceColor)),H!==void 0){const Z=H.normalized,ie=H.itemSize,re=t.get(H);if(re===void 0)continue;const ae=re.buffer,Re=re.type,le=re.bytesPerElement,Se=n.isWebGL2===!0&&(Re===r.INT||Re===r.UNSIGNED_INT||H.gpuType===Eu);if(H.isInterleavedBufferAttribute){const tt=H.data,B=tt.stride,we=H.offset;if(tt.isInstancedInterleavedBuffer){for(let ue=0;ue<fe.locationSize;ue++)I(fe.location+ue,tt.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ue=0;ue<fe.locationSize;ue++)b(fe.location+ue);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let ue=0;ue<fe.locationSize;ue++)T(fe.location+ue,ie/fe.locationSize,Re,Z,B*le,(we+ie/fe.locationSize*ue)*le,Se)}else{if(H.isInstancedBufferAttribute){for(let tt=0;tt<fe.locationSize;tt++)I(fe.location+tt,H.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let tt=0;tt<fe.locationSize;tt++)b(fe.location+tt);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let tt=0;tt<fe.locationSize;tt++)T(fe.location+tt,ie/fe.locationSize,Re,Z,ie*le,ie/fe.locationSize*tt*le,Se)}}else if(ne!==void 0){const Z=ne[ee];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(fe.location,Z);break;case 3:r.vertexAttrib3fv(fe.location,Z);break;case 4:r.vertexAttrib4fv(fe.location,Z);break;default:r.vertexAttrib1fv(fe.location,Z)}}}}R()}function S(){j();for(const z in a){const W=a[z];for(const k in W){const Q=W[k];for(const Y in Q)p(Q[Y].object),delete Q[Y];delete W[k]}delete a[z]}}function w(z){if(a[z.id]===void 0)return;const W=a[z.id];for(const k in W){const Q=W[k];for(const Y in Q)p(Q[Y].object),delete Q[Y];delete W[k]}delete a[z.id]}function F(z){for(const W in a){const k=a[W];if(k[z.id]===void 0)continue;const Q=k[z.id];for(const Y in Q)p(Q[Y].object),delete Q[Y];delete k[z.id]}}function j(){he(),u=!0,l!==c&&(l=c,d(l.object))}function he(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:j,resetDefaultState:he,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:b,disableUnusedAttributes:R}}function Lv(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,f){if(f===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,h,f),t.update(h,s,f)}function l(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(u[p],h[p]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];t.update(p,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Iv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||e.has("OES_texture_float"),I=y&&b,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:I,maxSamples:R}}function Dv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ei,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,y=v*4;let b=g.clippingState||null;c.value=b,b=u(p,f,y,d);for(let I=0;I!==y;++I)b[I]=t[I];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nv(r){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Di:a===no&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qp(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ts extends ac{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,Fh=[.125,.215,.35,.446,.526,.582],Mr=20,nl=new Ts,Bh=new Le;let il=null,rl=0,sl=0;const xr=(1+Math.sqrt(5))/2,ss=1/xr,kh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,xr,ss),new N(0,xr,-ss),new N(ss,0,xr),new N(-ss,0,xr),new N(xr,ss,0),new N(-xr,ss,0)];class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,rl,sl),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:xs,format:Bn,colorSpace:pi,depthBuffer:!1},i=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uv(s)),this._blurMaterial=Ov(s,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,n,i){const a=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bh),u.toneMapping=Li,u.autoClear=!1;const d=new si({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),p=new Jt(new Br,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Bh),_=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):v===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const y=this._cubeSize;aa(i,v*y,g>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,nl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=kh[(i-1)%kh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mr-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const g=[];let v=0;for(let T=0;T<Mr;++T){const O=T/_,S=Math.exp(-O*O/2);g.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<g.length;T++)g[T]=g[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const b=this._sizeLods[i],I=3*b*(i>y-ps?i-y+ps:0),R=4*(this._cubeSize-b);aa(t,I,R,3*b,2*b),c.setRenderTarget(t),c.render(h,nl)}}function Uv(r){const e=[],t=[],n=[];let i=r;const s=r-ps+1+Fh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ps?c=Fh[o-r+ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*d),y=new Float32Array(m*p*d),b=new Float32Array(g*p*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,O=R>2?0:-1,S=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];v.set(S,_*p*R),y.set(f,m*p*R);const w=[R,R,R,R,R,R];b.set(w,g*p*R)}const I=new ut;I.setAttribute("position",new Pt(v,_)),I.setAttribute("uv",new Pt(y,m)),I.setAttribute("faceIndex",new Pt(b,g)),e.push(I),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(r,e,t){const n=new Yn(r,e,t);return n.texture.mapping=Es,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ov(r,e,t){const n=new Float32Array(Mr),i=new N(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Vh(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Hh(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===to||c===no,u=c===Di||c===Ki;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ou(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ou(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kv(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,b=v.length;y<b;y+=3){const I=v[y+0],R=v[y+1],T=v[y+2];f.push(I,R,R,T,T,I)}}else if(p!==void 0){const v=p.array;_=p.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const I=y+0,R=y+1,T=y+2;f.push(I,R,R,T,T,I)}}else return;const m=new(kp(f)?ku:Bu)(f,1);m.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function zv(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){r.drawElements(s,p,a,d*c),t.update(p,s,1)}function h(d,p,_){if(_===0)return;let m,g;if(i)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,p,a,d*c,_),t.update(p,s,_)}function f(d,p,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<_;g++)this.render(d[g]/c,p[g]);else{m.multiDrawElementsWEBGL(s,p,0,a,d,0,_);let g=0;for(let v=0;v<_;v++)g+=p[v];t.update(g,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Vv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hv(r,e){return r[0]-e[0]}function Gv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Wv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let z=function(){j.dispose(),s.delete(u),u.removeEventListener("dispose",z)};_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let O=0;v===!0&&(O=1),y===!0&&(O=2),b===!0&&(O=3);let S=u.attributes.position.count*O,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const F=new Float32Array(S*w*4*p),j=new sc(F,S,w,p);j.type=ii,j.needsUpdate=!0;const he=O*4;for(let W=0;W<p;W++){const k=I[W],Q=R[W],Y=T[W],q=S*w*4*W;for(let ne=0;ne<k.count;ne++){const ee=ne*he;v===!0&&(o.fromBufferAttribute(k,ne),F[q+ee+0]=o.x,F[q+ee+1]=o.y,F[q+ee+2]=o.z,F[q+ee+3]=0),y===!0&&(o.fromBufferAttribute(Q,ne),F[q+ee+4]=o.x,F[q+ee+5]=o.y,F[q+ee+6]=o.z,F[q+ee+7]=0),b===!0&&(o.fromBufferAttribute(Y,ne),F[q+ee+8]=o.x,F[q+ee+9]=o.y,F[q+ee+10]=o.z,F[q+ee+11]=Y.itemSize===4?o.w:1)}}_={count:p,texture:j,size:new se(S,w)},s.set(u,_),u.addEventListener("dispose",z)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const g=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",g),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const b=p[y];b[0]=y,b[1]=f[y]}p.sort(Gv);for(let y=0;y<8;y++)y<d&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Hv);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const b=a[y],I=b[0],R=b[1];I!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+y)!==_[I]&&u.setAttribute("morphTarget"+y,_[I]),m&&u.getAttribute("morphNormal"+y)!==m[I]&&u.setAttribute("morphNormal"+y,m[I]),i[y]=R,g+=R):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Xv(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Vu extends en{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Yi,u!==Yi&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yi&&(n=Ci),n===void 0&&u===Lr&&(n=qi),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zp=new en,jp=new Vu(1,1);jp.compareFunction=Nu;const Jp=new sc,Kp=new Fu,$p=new To,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Gh[i];if(s===void 0&&(s=new Float32Array(i),Gh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cc(r,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function Jv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;Yh.set(n),r.uniformMatrix2fv(this.addr,!1,Yh),cn(t,n)}}function Kv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;qh.set(n),r.uniformMatrix3fv(this.addr,!1,qh),cn(t,n)}}function $v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;Xh.set(n),r.uniformMatrix4fv(this.addr,!1,Xh),cn(t,n)}}function Qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function ax(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?jp:Zp;t.setTexture2D(e||s,i)}function cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kp,i)}function lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$p,i)}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jp,i)}function hx(r){switch(r){case 5126:return qv;case 35664:return Yv;case 35665:return Zv;case 35666:return jv;case 35674:return Jv;case 35675:return Kv;case 35676:return $v;case 5124:case 35670:return Qv;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(r,e){r.uniform1fv(this.addr,e)}function dx(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function px(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function mx(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function gx(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _x(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yx(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vx(r,e){r.uniform1iv(this.addr,e)}function xx(r,e){r.uniform2iv(this.addr,e)}function bx(r,e){r.uniform3iv(this.addr,e)}function Mx(r,e){r.uniform4iv(this.addr,e)}function Sx(r,e){r.uniform1uiv(this.addr,e)}function wx(r,e){r.uniform2uiv(this.addr,e)}function Ex(r,e){r.uniform3uiv(this.addr,e)}function Ax(r,e){r.uniform4uiv(this.addr,e)}function Tx(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zp,s[o])}function Cx(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kp,s[o])}function Rx(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$p,s[o])}function Px(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jp,s[o])}function Lx(r){switch(r){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return bx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return wx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Px}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hx(t.type)}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function Zh(r,e){r.seq.push(e),r.map[e.id]=e}function Ux(r,e,t){const n=r.name,i=n.length;for(ol.lastIndex=0;;){const s=ol.exec(n),o=ol.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Zh(t,l===void 0?new Ix(a,r,e):new Dx(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Nx(a),Zh(t,h)),t=h}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ux(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function jh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ox=37297;let Fx=0;function Bx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kx(r){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(r);let n;switch(e===t?n="":e===lo&&t===co?n="LinearDisplayP3ToLinearSRGB":e===co&&t===lo&&(n="LinearSRGBToLinearDisplayP3"),r){case pi:case Eo:return[n,"LinearTransferOETF"];case Zt:case rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Jh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bx(r.getShaderSource(e),o)}else return i}function zx(r,e){const t=kx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vx(r,e){let t;switch(e){case fp:t="Linear";break;case dp:t="Reinhard";break;case pp:t="OptimizedCineon";break;case Su:t="ACESFilmic";break;case gp:t="AgX";break;case mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function Gx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function Wx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ms(r){return r!==""}function Kh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(r){return r.replace(qx,Zx)}const Yx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zx(r,e){let t=et[e];if(t===void 0){const n=Yx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(r){return r.replace(jx,Jx)}function Jx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ef(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Di:case Ki:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case up:e="ENVMAP_BLENDING_MIX";break;case hp:e="ENVMAP_BLENDING_ADD";break}return e}function tb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Kx(t),l=$x(t),u=Qx(t),h=eb(t),f=tb(t),d=t.isWebGL2?"":Hx(t),p=Gx(t),_=Wx(s),m=i.createProgram();let g,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),g.length>0&&(g+=`
`),v=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ms).join(`
`),v.length>0&&(v+=`
`)):(g=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),v=[d,ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?et.tonemapping_pars_fragment:"",t.toneMapping!==Li?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=au(o),o=Kh(o,t),o=$h(o,t),a=au(a),a=Kh(a,t),a=$h(a,t),o=Qh(o),a=Qh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=y+g+o,I=y+v+a,R=jh(i,i.VERTEX_SHADER,b),T=jh(i,i.FRAGMENT_SHADER,I);i.attachShader(m,R),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(j){if(r.debug.checkShaderErrors){const he=i.getProgramInfoLog(m).trim(),z=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(T).trim();let k=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,R,T);else{const Y=Jh(i,R,"vertex"),q=Jh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+Y+`
`+q)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(z===""||W==="")&&(Q=!1);Q&&(j.diagnostics={runnable:k,programLog:he,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:v}})}i.deleteShader(R),i.deleteShader(T),S=new Va(i,m),w=Xx(i,m)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,Ox)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}let ib=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sb(e),t.set(e,n)),n}}class sb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ob(r,e,t,n,i,s,o){const a=new oc,c=new rb,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,w,F,j,he){const z=j.fog,W=he.geometry,k=S.isMeshStandardMaterial?j.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),Y=Q&&Q.mapping===Es?Q.image.height:null,q=p[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=ne!==void 0?ne.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let H,Z,ie,re;if(q){const zt=ti[q];H=zt.vertexShader,Z=zt.fragmentShader}else H=S.vertexShader,Z=S.fragmentShader,c.update(S),ie=c.getVertexShaderID(S),re=c.getFragmentShaderID(S);const ae=r.getRenderTarget(),Re=he.isInstancedMesh===!0,le=he.isBatchedMesh===!0,Se=!!S.map,tt=!!S.matcap,B=!!Q,we=!!S.aoMap,ue=!!S.lightMap,ve=!!S.bumpMap,ce=!!S.normalMap,Ge=!!S.displacementMap,Ie=!!S.emissiveMap,L=!!S.metalnessMap,A=!!S.roughnessMap,G=S.anisotropy>0,me=S.clearcoat>0,pe=S.iridescence>0,de=S.sheen>0,He=S.transmission>0,Ce=G&&!!S.anisotropyMap,Ne=me&&!!S.clearcoatMap,je=me&&!!S.clearcoatNormalMap,ot=me&&!!S.clearcoatRoughnessMap,ge=pe&&!!S.iridescenceMap,bt=pe&&!!S.iridescenceThicknessMap,ft=de&&!!S.sheenColorMap,st=de&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,Ue=!!S.specularColorMap,U=!!S.specularIntensityMap,be=He&&!!S.transmissionMap,We=He&&!!S.thicknessMap,ke=!!S.gradientMap,ye=!!S.alphaMap,V=S.alphaTest>0,Me=!!S.alphaHash,Pe=!!S.extensions,nt=!!W.attributes.uv1,$e=!!W.attributes.uv2,vt=!!W.attributes.uv3;let xt=Li;return S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(xt=r.toneMapping),{isWebGL2:u,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:Z,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:le,instancing:Re,instancingColor:Re&&he.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:pi,map:Se,matcap:tt,envMap:B,envMapMode:B&&Q.mapping,envMapCubeUVHeight:Y,aoMap:we,lightMap:ue,bumpMap:ve,normalMap:ce,displacementMap:f&&Ge,emissiveMap:Ie,normalMapObjectSpace:ce&&S.normalMapType===Lp,normalMapTangentSpace:ce&&S.normalMapType===nr,metalnessMap:L,roughnessMap:A,anisotropy:G,anisotropyMap:Ce,clearcoat:me,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:ot,iridescence:pe,iridescenceMap:ge,iridescenceThicknessMap:bt,sheen:de,sheenColorMap:ft,sheenRoughnessMap:st,specularMap:Ze,specularColorMap:Ue,specularIntensityMap:U,transmission:He,transmissionMap:be,thicknessMap:We,gradientMap:ke,opaque:S.transparent===!1&&S.blending===Tr,alphaMap:ye,alphaTest:V,alphaHash:Me,combine:S.combine,mapUv:Se&&_(S.map.channel),aoMapUv:we&&_(S.aoMap.channel),lightMapUv:ue&&_(S.lightMap.channel),bumpMapUv:ve&&_(S.bumpMap.channel),normalMapUv:ce&&_(S.normalMap.channel),displacementMapUv:Ge&&_(S.displacementMap.channel),emissiveMapUv:Ie&&_(S.emissiveMap.channel),metalnessMapUv:L&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:Ce&&_(S.anisotropyMap.channel),clearcoatMapUv:Ne&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:st&&_(S.sheenRoughnessMap.channel),specularMapUv:Ze&&_(S.specularMap.channel),specularColorMapUv:Ue&&_(S.specularColorMap.channel),specularIntensityMapUv:U&&_(S.specularIntensityMap.channel),transmissionMapUv:be&&_(S.transmissionMap.channel),thicknessMapUv:We&&_(S.thicknessMap.channel),alphaMapUv:ye&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ce||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:$e,vertexUv3s:vt,pointsUvs:he.isPoints===!0&&!!W.attributes.uv&&(Se||ye),fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:he.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&Lt.getTransfer(S.map.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Pe&&S.extensions.derivatives===!0,extensionFragDepth:Pe&&S.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function g(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)w.push(F),w.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(v(w,S),y(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function b(S){const w=p[S.type];let F;if(w){const j=ti[w];F=Wp.clone(j.uniforms)}else F=S.uniforms;return F}function I(S,w){let F;for(let j=0,he=l.length;j<he;j++){const z=l[j];if(z.cacheKey===w){F=z,++F.usedTimes;break}}return F===void 0&&(F=new nb(r,w,S,s),l.push(F)),F}function R(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function T(S){c.remove(S)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:b,acquireProgram:I,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:O}}function ab(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function tf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,p,_,m){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:m},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=_,g.group=m),e++,g}function a(h,f,d,p,_,m){const g=o(h,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function c(h,f,d,p,_,m){const g=o(h,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function l(h,f){t.length>1&&t.sort(h||cb),n.length>1&&n.sort(f||tf),i.length>1&&i.sort(f||tf)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function lb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new nf,r.set(n,[o])):i>=s.length?(o=new nf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Le};break;case"SpotLight":t={position:new N,direction:new N,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function hb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fb=0;function db(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pb(r,e){const t=new ub,n=hb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new Ye,a=new Ye;function c(u,h){let f=0,d=0,p=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let _=0,m=0,g=0,v=0,y=0,b=0,I=0,R=0,T=0,O=0,S=0;u.sort(db);const w=h===!0?Math.PI:1;for(let j=0,he=u.length;j<he;j++){const z=u[j],W=z.color,k=z.intensity,Q=z.distance,Y=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=W.r*k*w,d+=W.g*k*w,p+=W.b*k*w;else if(z.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(z.sh.coefficients[q],k);S++}else if(z.isDirectionalLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const ne=z.shadow,ee=n.get(z);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=z.shadow.matrix,b++}i.directional[_]=q,_++}else if(z.isSpotLight){const q=t.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(W).multiplyScalar(k*w),q.distance=Q,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,i.spot[g]=q;const ne=z.shadow;if(z.map&&(i.spotLightMap[T]=z.map,T++,ne.updateMatrices(z),z.castShadow&&O++),i.spotLightMatrix[g]=ne.matrix,z.castShadow){const ee=n.get(z);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,i.spotShadow[g]=ee,i.spotShadowMap[g]=Y,R++}g++}else if(z.isRectAreaLight){const q=t.get(z);q.color.copy(W).multiplyScalar(k),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=q,v++}else if(z.isPointLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*w),q.distance=z.distance,q.decay=z.decay,z.castShadow){const ne=z.shadow,ee=n.get(z);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,ee.shadowCameraNear=ne.camera.near,ee.shadowCameraFar=ne.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=z.shadow.matrix,I++}i.point[m]=q,m++}else if(z.isHemisphereLight){const q=t.get(z);q.skyColor.copy(z.color).multiplyScalar(k*w),q.groundColor.copy(z.groundColor).multiplyScalar(k*w),i.hemi[y]=q,y++}}v>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==g||F.rectAreaLength!==v||F.hemiLength!==y||F.numDirectionalShadows!==b||F.numPointShadows!==I||F.numSpotShadows!==R||F.numSpotMaps!==T||F.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=R+T-O,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=S,F.directionalLength=_,F.pointLength=m,F.spotLength=g,F.rectAreaLength=v,F.hemiLength=y,F.numDirectionalShadows=b,F.numPointShadows=I,F.numSpotShadows=R,F.numSpotMaps=T,F.numLightProbes=S,i.version=fb++)}function l(u,h){let f=0,d=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const b=u[v];if(b.isDirectionalLight){const I=i.directional[f];I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),f++}else if(b.isSpotLight){const I=i.spot[p];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),p++}else if(b.isRectAreaLight){const I=i.rectArea[_];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const I=i.point[d];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(g),m++}}}return{setup:c,setupView:l,state:i}}function rf(r,e){const t=new pb(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function mb(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new rf(r,e),t.set(s,[c])):o>=a.length?(c=new rf(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class lc extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hu extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yb(r,e,t){let n=new Co;const i=new se,s=new se,o=new Dt,a=new lc({depthPacking:Pp}),c=new Hu,l={},u=t.maxTextureSize,h={[di]:Pn,[Pn]:di,[ni]:ni},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:gb,fragmentShader:_b}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new ut;p.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let g=this.type;this.render=function(R,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Pi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const he=g!==hi&&this.type===hi,z=g===hi&&this.type!==hi;for(let W=0,k=R.length;W<k;W++){const Q=R[W],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const q=Y.getFrameExtents();if(i.multiply(q),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,Y.mapSize.y=s.y)),Y.map===null||he===!0||z===!0){const ee=this.type!==hi?{minFilter:$t,magFilter:$t}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yn(i.x,i.y,ee),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ne=Y.getViewportCount();for(let ee=0;ee<ne;ee++){const fe=Y.getViewport(ee);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),j.viewport(o),Y.updateMatrices(Q,ee),n=Y.getFrustum(),b(T,O,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===hi&&v(Y,O),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(S,w,F)};function v(R,T){const O=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(T,null,O,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(T,null,O,d,_,null)}function y(R,T,O,S){let w=null;const F=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)w=F;else if(w=O.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const j=w.uuid,he=T.uuid;let z=l[j];z===void 0&&(z={},l[j]=z);let W=z[he];W===void 0&&(W=w.clone(),z[he]=W,T.addEventListener("dispose",I)),w=W}if(w.visible=T.visible,w.wireframe=T.wireframe,S===hi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=r.properties.get(w);j.light=O}return w}function b(R,T,O,S,w){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===hi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const he=e.update(R),z=R.material;if(Array.isArray(z)){const W=he.groups;for(let k=0,Q=W.length;k<Q;k++){const Y=W[k],q=z[Y.materialIndex];if(q&&q.visible){const ne=y(R,q,S,w);R.onBeforeShadow(r,R,T,O,he,ne,Y),r.renderBufferDirect(O,null,he,ne,R,Y),R.onAfterShadow(r,R,T,O,he,ne,Y)}}}else if(z.visible){const W=y(R,z,S,w);R.onBeforeShadow(r,R,T,O,he,W,null),r.renderBufferDirect(O,null,he,W,R,null),R.onAfterShadow(r,R,T,O,he,W,null)}}const j=R.children;for(let he=0,z=j.length;he<z;he++)b(j[he],T,O,S,w)}function I(R){R.target.removeEventListener("dispose",I);for(const O in l){const S=l[O],w=R.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function vb(r,e,t){const n=t.isWebGL2;function i(){let V=!1;const Me=new Dt;let Pe=null;const nt=new Dt(0,0,0,0);return{setMask:function($e){Pe!==$e&&!V&&(r.colorMask($e,$e,$e,$e),Pe=$e)},setLocked:function($e){V=$e},setClear:function($e,vt,xt,Mt,zt){zt===!0&&($e*=Mt,vt*=Mt,xt*=Mt),Me.set($e,vt,xt,Mt),nt.equals(Me)===!1&&(r.clearColor($e,vt,xt,Mt),nt.copy(Me))},reset:function(){V=!1,Pe=null,nt.set(-1,0,0,0)}}}function s(){let V=!1,Me=null,Pe=null,nt=null;return{setTest:function($e){$e?le(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function($e){Me!==$e&&!V&&(r.depthMask($e),Me=$e)},setFunc:function($e){if(Pe!==$e){switch($e){case ip:r.depthFunc(r.NEVER);break;case rp:r.depthFunc(r.ALWAYS);break;case sp:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case op:r.depthFunc(r.EQUAL);break;case ap:r.depthFunc(r.GEQUAL);break;case cp:r.depthFunc(r.GREATER);break;case lp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=$e}},setLocked:function($e){V=$e},setClear:function($e){nt!==$e&&(r.clearDepth($e),nt=$e)},reset:function(){V=!1,Me=null,Pe=null,nt=null}}}function o(){let V=!1,Me=null,Pe=null,nt=null,$e=null,vt=null,xt=null,Mt=null,zt=null;return{setTest:function(St){V||(St?le(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(St){Me!==St&&!V&&(r.stencilMask(St),Me=St)},setFunc:function(St,qt,Zn){(Pe!==St||nt!==qt||$e!==Zn)&&(r.stencilFunc(St,qt,Zn),Pe=St,nt=qt,$e=Zn)},setOp:function(St,qt,Zn){(vt!==St||xt!==qt||Mt!==Zn)&&(r.stencilOp(St,qt,Zn),vt=St,xt=qt,Mt=Zn)},setLocked:function(St){V=St},setClear:function(St){zt!==St&&(r.clearStencil(St),zt=St)},reset:function(){V=!1,Me=null,Pe=null,nt=null,$e=null,vt=null,xt=null,Mt=null,zt=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},d={},p=new WeakMap,_=[],m=null,g=!1,v=null,y=null,b=null,I=null,R=null,T=null,O=null,S=new Le(0,0,0),w=0,F=!1,j=null,he=null,z=null,W=null,k=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Y=q>=1):ne.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Y=q>=2);let ee=null,fe={};const H=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ie=new Dt().fromArray(H),re=new Dt().fromArray(Z);function ae(V,Me,Pe,nt){const $e=new Uint8Array(4),vt=r.createTexture();r.bindTexture(V,vt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xt=0;xt<Pe;xt++)n&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(Me,0,r.RGBA,1,1,nt,0,r.RGBA,r.UNSIGNED_BYTE,$e):r.texImage2D(Me+xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$e);return vt}const Re={};Re[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),le(r.DEPTH_TEST),c.setFunc(eo),Ie(!1),L(El),le(r.CULL_FACE),ce(Pi);function le(V){f[V]!==!0&&(r.enable(V),f[V]=!0)}function Se(V){f[V]!==!1&&(r.disable(V),f[V]=!1)}function tt(V,Me){return d[V]!==Me?(r.bindFramebuffer(V,Me),d[V]=Me,n&&(V===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Me),V===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Me)),!0):!1}function B(V,Me){let Pe=_,nt=!1;if(V)if(Pe=p.get(Me),Pe===void 0&&(Pe=[],p.set(Me,Pe)),V.isWebGLMultipleRenderTargets){const $e=V.texture;if(Pe.length!==$e.length||Pe[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,xt=$e.length;vt<xt;vt++)Pe[vt]=r.COLOR_ATTACHMENT0+vt;Pe.length=$e.length,nt=!0}}else Pe[0]!==r.COLOR_ATTACHMENT0&&(Pe[0]=r.COLOR_ATTACHMENT0,nt=!0);else Pe[0]!==r.BACK&&(Pe[0]=r.BACK,nt=!0);nt&&(t.isWebGL2?r.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function we(V){return m!==V?(r.useProgram(V),m=V,!0):!1}const ue={[Wi]:r.FUNC_ADD,[Hd]:r.FUNC_SUBTRACT,[Gd]:r.FUNC_REVERSE_SUBTRACT};if(n)ue[Rl]=r.MIN,ue[Pl]=r.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(ue[Rl]=V.MIN_EXT,ue[Pl]=V.MAX_EXT)}const ve={[Wd]:r.ZERO,[Xd]:r.ONE,[qd]:r.SRC_COLOR,[Ga]:r.SRC_ALPHA,[$d]:r.SRC_ALPHA_SATURATE,[Jd]:r.DST_COLOR,[Zd]:r.DST_ALPHA,[Yd]:r.ONE_MINUS_SRC_COLOR,[Wa]:r.ONE_MINUS_SRC_ALPHA,[Kd]:r.ONE_MINUS_DST_COLOR,[jd]:r.ONE_MINUS_DST_ALPHA,[Qd]:r.CONSTANT_COLOR,[ep]:r.ONE_MINUS_CONSTANT_COLOR,[tp]:r.CONSTANT_ALPHA,[np]:r.ONE_MINUS_CONSTANT_ALPHA};function ce(V,Me,Pe,nt,$e,vt,xt,Mt,zt,St){if(V===Pi){g===!0&&(Se(r.BLEND),g=!1);return}if(g===!1&&(le(r.BLEND),g=!0),V!==Vd){if(V!==v||St!==F){if((y!==Wi||R!==Wi)&&(r.blendEquation(r.FUNC_ADD),y=Wi,R=Wi),St)switch(V){case Tr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Al:r.blendFunc(r.ONE,r.ONE);break;case Tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Tr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Al:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,I=null,T=null,O=null,S.set(0,0,0),w=0,v=V,F=St}return}$e=$e||Me,vt=vt||Pe,xt=xt||nt,(Me!==y||$e!==R)&&(r.blendEquationSeparate(ue[Me],ue[$e]),y=Me,R=$e),(Pe!==b||nt!==I||vt!==T||xt!==O)&&(r.blendFuncSeparate(ve[Pe],ve[nt],ve[vt],ve[xt]),b=Pe,I=nt,T=vt,O=xt),(Mt.equals(S)===!1||zt!==w)&&(r.blendColor(Mt.r,Mt.g,Mt.b,zt),S.copy(Mt),w=zt),v=V,F=!1}function Ge(V,Me){V.side===ni?Se(r.CULL_FACE):le(r.CULL_FACE);let Pe=V.side===Pn;Me&&(Pe=!Pe),Ie(Pe),V.blending===Tr&&V.transparent===!1?ce(Pi):ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const nt=V.stencilWrite;l.setTest(nt),nt&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),G(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(V){j!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),j=V)}function L(V){V!==kd?(le(r.CULL_FACE),V!==he&&(V===El?r.cullFace(r.BACK):V===zd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),he=V}function A(V){V!==z&&(Y&&r.lineWidth(V),z=V)}function G(V,Me,Pe){V?(le(r.POLYGON_OFFSET_FILL),(W!==Me||k!==Pe)&&(r.polygonOffset(Me,Pe),W=Me,k=Pe)):Se(r.POLYGON_OFFSET_FILL)}function me(V){V?le(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function pe(V){V===void 0&&(V=r.TEXTURE0+Q-1),ee!==V&&(r.activeTexture(V),ee=V)}function de(V,Me,Pe){Pe===void 0&&(ee===null?Pe=r.TEXTURE0+Q-1:Pe=ee);let nt=fe[Pe];nt===void 0&&(nt={type:void 0,texture:void 0},fe[Pe]=nt),(nt.type!==V||nt.texture!==Me)&&(ee!==Pe&&(r.activeTexture(Pe),ee=Pe),r.bindTexture(V,Me||Re[V]),nt.type=V,nt.texture=Me)}function He(){const V=fe[ee];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function U(V){ie.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function be(V){re.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),re.copy(V))}function We(V,Me){let Pe=h.get(Me);Pe===void 0&&(Pe=new WeakMap,h.set(Me,Pe));let nt=Pe.get(V);nt===void 0&&(nt=r.getUniformBlockIndex(Me,V.name),Pe.set(V,nt))}function ke(V,Me){const nt=h.get(Me).get(V);u.get(Me)!==nt&&(r.uniformBlockBinding(Me,nt,V.__bindingPointIndex),u.set(Me,nt))}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},ee=null,fe={},d={},p=new WeakMap,_=[],m=null,g=!1,v=null,y=null,b=null,I=null,R=null,T=null,O=null,S=new Le(0,0,0),w=0,F=!1,j=null,he=null,z=null,W=null,k=null,ie.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:le,disable:Se,bindFramebuffer:tt,drawBuffers:B,useProgram:we,setBlending:ce,setMaterial:Ge,setFlipSided:Ie,setCullFace:L,setLineWidth:A,setPolygonOffset:G,setScissorTest:me,activeTexture:pe,bindTexture:de,unbindTexture:He,compressedTexImage2D:Ce,compressedTexImage3D:Ne,texImage2D:Ze,texImage3D:Ue,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:ft,texStorage3D:st,texSubImage2D:je,texSubImage3D:ot,compressedTexSubImage2D:ge,compressedTexSubImage3D:bt,scissor:U,viewport:be,reset:ye}}function xb(r,e,t,n,i,s,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,A){return d?new OffscreenCanvas(L,A):ho("canvas")}function _(L,A,G,me){let pe=1;if((L.width>me||L.height>me)&&(pe=me/Math.max(L.width,L.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const de=A?Ya:Math.floor,He=de(pe*L.width),Ce=de(pe*L.height);h===void 0&&(h=p(He,Ce));const Ne=G?p(He,Ce):h;return Ne.width=He,Ne.height=Ce,Ne.getContext("2d").drawImage(L,0,0,He,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+He+"x"+Ce+")."),Ne}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return su(L.width)&&su(L.height)}function g(L){return a?!1:L.wrapS!==hn||L.wrapT!==hn||L.minFilter!==$t&&L.minFilter!==Qt}function v(L,A){return L.generateMipmaps&&A&&L.minFilter!==$t&&L.minFilter!==Qt}function y(L){r.generateMipmap(L)}function b(L,A,G,me,pe=!1){if(a===!1)return A;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=A;if(A===r.RED&&(G===r.FLOAT&&(de=r.R32F),G===r.HALF_FLOAT&&(de=r.R16F),G===r.UNSIGNED_BYTE&&(de=r.R8)),A===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(de=r.R8UI),G===r.UNSIGNED_SHORT&&(de=r.R16UI),G===r.UNSIGNED_INT&&(de=r.R32UI),G===r.BYTE&&(de=r.R8I),G===r.SHORT&&(de=r.R16I),G===r.INT&&(de=r.R32I)),A===r.RG&&(G===r.FLOAT&&(de=r.RG32F),G===r.HALF_FLOAT&&(de=r.RG16F),G===r.UNSIGNED_BYTE&&(de=r.RG8)),A===r.RGBA){const He=pe?ao:Lt.getTransfer(me);G===r.FLOAT&&(de=r.RGBA32F),G===r.HALF_FLOAT&&(de=r.RGBA16F),G===r.UNSIGNED_BYTE&&(de=He===Ot?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(L,A,G){return v(L,G)===!0||L.isFramebufferTexture&&L.minFilter!==$t&&L.minFilter!==Qt?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function R(L){return L===$t||L===Xa||L===js?r.NEAREST:r.LINEAR}function T(L){const A=L.target;A.removeEventListener("dispose",T),S(A),A.isVideoTexture&&u.delete(A)}function O(L){const A=L.target;A.removeEventListener("dispose",O),F(A)}function S(L){const A=n.get(L);if(A.__webglInit===void 0)return;const G=L.source,me=f.get(G);if(me){const pe=me[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(L),Object.keys(me).length===0&&f.delete(G)}n.remove(L)}function w(L){const A=n.get(L);r.deleteTexture(A.__webglTexture);const G=L.source,me=f.get(G);delete me[A.__cacheKey],o.memory.textures--}function F(L){const A=L.texture,G=n.get(L),me=n.get(A);if(me.__webglTexture!==void 0&&(r.deleteTexture(me.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(G.__webglFramebuffer[pe]))for(let de=0;de<G.__webglFramebuffer[pe].length;de++)r.deleteFramebuffer(G.__webglFramebuffer[pe][de]);else r.deleteFramebuffer(G.__webglFramebuffer[pe]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[pe])}else{if(Array.isArray(G.__webglFramebuffer))for(let pe=0;pe<G.__webglFramebuffer.length;pe++)r.deleteFramebuffer(G.__webglFramebuffer[pe]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let pe=0;pe<G.__webglColorRenderbuffer.length;pe++)G.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[pe]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let pe=0,de=A.length;pe<de;pe++){const He=n.get(A[pe]);He.__webglTexture&&(r.deleteTexture(He.__webglTexture),o.memory.textures--),n.remove(A[pe])}n.remove(A),n.remove(L)}let j=0;function he(){j=0}function z(){const L=j;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),j+=1,L}function W(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function k(L,A){const G=n.get(L);if(L.isVideoTexture&&Ge(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,L,A);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+A)}function Q(L,A){const G=n.get(L);if(L.version>0&&G.__version!==L.version){ie(G,L,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+A)}function Y(L,A){const G=n.get(L);if(L.version>0&&G.__version!==L.version){ie(G,L,A);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+A)}function q(L,A){const G=n.get(L);if(L.version>0&&G.__version!==L.version){re(G,L,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+A)}const ne={[Ti]:r.REPEAT,[hn]:r.CLAMP_TO_EDGE,[io]:r.MIRRORED_REPEAT},ee={[$t]:r.NEAREST,[Xa]:r.NEAREST_MIPMAP_NEAREST,[js]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[wu]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},fe={[Ip]:r.NEVER,[Bp]:r.ALWAYS,[Dp]:r.LESS,[Nu]:r.LEQUAL,[Np]:r.EQUAL,[Fp]:r.GEQUAL,[Up]:r.GREATER,[Op]:r.NOTEQUAL};function H(L,A,G){if(G?(r.texParameteri(L,r.TEXTURE_WRAP_S,ne[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ne[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ne[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ee[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ee[A.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==hn||A.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,R(A.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,R(A.minFilter)),A.minFilter!==$t&&A.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,fe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===$t||A.minFilter!==js&&A.minFilter!==Ni||A.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===xs&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(L,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Z(L,A){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",T));const me=A.source;let pe=f.get(me);pe===void 0&&(pe={},f.set(me,pe));const de=W(A);if(de!==L.__cacheKey){pe[de]===void 0&&(pe[de]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),pe[de].usedTimes++;const He=pe[L.__cacheKey];He!==void 0&&(pe[L.__cacheKey].usedTimes--,He.usedTimes===0&&w(A)),L.__cacheKey=de,L.__webglTexture=pe[de].texture}return G}function ie(L,A,G){let me=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=r.TEXTURE_3D);const pe=Z(L,A),de=A.source;t.bindTexture(me,L.__webglTexture,r.TEXTURE0+G);const He=n.get(de);if(de.version!==He.__version||pe===!0){t.activeTexture(r.TEXTURE0+G);const Ce=Lt.getPrimaries(Lt.workingColorSpace),Ne=A.colorSpace===Xn?null:Lt.getPrimaries(A.colorSpace),je=A.colorSpace===Xn||Ce===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const ot=g(A)&&m(A.image)===!1;let ge=_(A.image,ot,!1,i.maxTextureSize);ge=Ie(A,ge);const bt=m(ge)||a,ft=s.convert(A.format,A.colorSpace);let st=s.convert(A.type),Ze=b(A.internalFormat,ft,st,A.colorSpace,A.isVideoTexture);H(me,A,bt);let Ue;const U=A.mipmaps,be=a&&A.isVideoTexture!==!0&&Ze!==Lu,We=He.__version===void 0||pe===!0,ke=I(A,ge,bt);if(A.isDepthTexture)Ze=r.DEPTH_COMPONENT,a?A.type===ii?Ze=r.DEPTH_COMPONENT32F:A.type===Ci?Ze=r.DEPTH_COMPONENT24:A.type===qi?Ze=r.DEPTH24_STENCIL8:Ze=r.DEPTH_COMPONENT16:A.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Yi&&Ze===r.DEPTH_COMPONENT&&A.type!==nc&&A.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ci,st=s.convert(A.type)),A.format===Lr&&Ze===r.DEPTH_COMPONENT&&(Ze=r.DEPTH_STENCIL,A.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=qi,st=s.convert(A.type))),We&&(be?t.texStorage2D(r.TEXTURE_2D,1,Ze,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,Ze,ge.width,ge.height,0,ft,st,null));else if(A.isDataTexture)if(U.length>0&&bt){be&&We&&t.texStorage2D(r.TEXTURE_2D,ke,Ze,U[0].width,U[0].height);for(let ye=0,V=U.length;ye<V;ye++)Ue=U[ye],be?t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,ft,st,Ue.data):t.texImage2D(r.TEXTURE_2D,ye,Ze,Ue.width,Ue.height,0,ft,st,Ue.data);A.generateMipmaps=!1}else be?(We&&t.texStorage2D(r.TEXTURE_2D,ke,Ze,ge.width,ge.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge.width,ge.height,ft,st,ge.data)):t.texImage2D(r.TEXTURE_2D,0,Ze,ge.width,ge.height,0,ft,st,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){be&&We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ze,U[0].width,U[0].height,ge.depth);for(let ye=0,V=U.length;ye<V;ye++)Ue=U[ye],A.format!==Bn?ft!==null?be?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,ge.depth,ft,Ue.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Ze,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ue.width,Ue.height,ge.depth,ft,st,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,Ze,Ue.width,Ue.height,ge.depth,0,ft,st,Ue.data)}else{be&&We&&t.texStorage2D(r.TEXTURE_2D,ke,Ze,U[0].width,U[0].height);for(let ye=0,V=U.length;ye<V;ye++)Ue=U[ye],A.format!==Bn?ft!==null?be?t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,ft,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,Ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue.width,Ue.height,ft,st,Ue.data):t.texImage2D(r.TEXTURE_2D,ye,Ze,Ue.width,Ue.height,0,ft,st,Ue.data)}else if(A.isDataArrayTexture)be?(We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ze,ge.width,ge.height,ge.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ft,st,ge.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,ge.width,ge.height,ge.depth,0,ft,st,ge.data);else if(A.isData3DTexture)be?(We&&t.texStorage3D(r.TEXTURE_3D,ke,Ze,ge.width,ge.height,ge.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ft,st,ge.data)):t.texImage3D(r.TEXTURE_3D,0,Ze,ge.width,ge.height,ge.depth,0,ft,st,ge.data);else if(A.isFramebufferTexture){if(We)if(be)t.texStorage2D(r.TEXTURE_2D,ke,Ze,ge.width,ge.height);else{let ye=ge.width,V=ge.height;for(let Me=0;Me<ke;Me++)t.texImage2D(r.TEXTURE_2D,Me,Ze,ye,V,0,ft,st,null),ye>>=1,V>>=1}}else if(U.length>0&&bt){be&&We&&t.texStorage2D(r.TEXTURE_2D,ke,Ze,U[0].width,U[0].height);for(let ye=0,V=U.length;ye<V;ye++)Ue=U[ye],be?t.texSubImage2D(r.TEXTURE_2D,ye,0,0,ft,st,Ue):t.texImage2D(r.TEXTURE_2D,ye,Ze,ft,st,Ue);A.generateMipmaps=!1}else be?(We&&t.texStorage2D(r.TEXTURE_2D,ke,Ze,ge.width,ge.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,st,ge)):t.texImage2D(r.TEXTURE_2D,0,Ze,ft,st,ge);v(A,bt)&&y(me),He.__version=de.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function re(L,A,G){if(A.image.length!==6)return;const me=Z(L,A),pe=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+G);const de=n.get(pe);if(pe.version!==de.__version||me===!0){t.activeTexture(r.TEXTURE0+G);const He=Lt.getPrimaries(Lt.workingColorSpace),Ce=A.colorSpace===Xn?null:Lt.getPrimaries(A.colorSpace),Ne=A.colorSpace===Xn||He===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let ye=0;ye<6;ye++)!je&&!ot?ge[ye]=_(A.image[ye],!1,!0,i.maxCubemapSize):ge[ye]=ot?A.image[ye].image:A.image[ye],ge[ye]=Ie(A,ge[ye]);const bt=ge[0],ft=m(bt)||a,st=s.convert(A.format,A.colorSpace),Ze=s.convert(A.type),Ue=b(A.internalFormat,st,Ze,A.colorSpace),U=a&&A.isVideoTexture!==!0,be=de.__version===void 0||me===!0;let We=I(A,bt,ft);H(r.TEXTURE_CUBE_MAP,A,ft);let ke;if(je){U&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,We,Ue,bt.width,bt.height);for(let ye=0;ye<6;ye++){ke=ge[ye].mipmaps;for(let V=0;V<ke.length;V++){const Me=ke[V];A.format!==Bn?st!==null?U?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,0,0,Me.width,Me.height,st,Me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,0,0,Me.width,Me.height,st,Ze,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V,Ue,Me.width,Me.height,0,st,Ze,Me.data)}}}else{ke=A.mipmaps,U&&be&&(ke.length>0&&We++,t.texStorage2D(r.TEXTURE_CUBE_MAP,We,Ue,ge[0].width,ge[0].height));for(let ye=0;ye<6;ye++)if(ot){U?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge[ye].width,ge[ye].height,st,Ze,ge[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ue,ge[ye].width,ge[ye].height,0,st,Ze,ge[ye].data);for(let V=0;V<ke.length;V++){const Pe=ke[V].image[ye].image;U?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,0,0,Pe.width,Pe.height,st,Ze,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,Ue,Pe.width,Pe.height,0,st,Ze,Pe.data)}}else{U?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,st,Ze,ge[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ue,st,Ze,ge[ye]);for(let V=0;V<ke.length;V++){const Me=ke[V];U?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,0,0,st,Ze,Me.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,V+1,Ue,st,Ze,Me.image[ye])}}}v(A,ft)&&y(r.TEXTURE_CUBE_MAP),de.__version=pe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ae(L,A,G,me,pe,de){const He=s.convert(G.format,G.colorSpace),Ce=s.convert(G.type),Ne=b(G.internalFormat,He,Ce,G.colorSpace);if(!n.get(A).__hasExternalTextures){const ot=Math.max(1,A.width>>de),ge=Math.max(1,A.height>>de);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,de,Ne,ot,ge,A.depth,0,He,Ce,null):t.texImage2D(pe,de,Ne,ot,ge,0,He,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ce(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,n.get(G).__webglTexture,0,ve(A)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,n.get(G).__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(L,A,G){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let me=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(G||ce(A)){const pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===ii?me=r.DEPTH_COMPONENT32F:pe.type===Ci&&(me=r.DEPTH_COMPONENT24));const de=ve(A);ce(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,me,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,de,me,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,me,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const me=ve(A);G&&ce(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,A.width,A.height):ce(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const me=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<me.length;pe++){const de=me[pe],He=s.convert(de.format,de.colorSpace),Ce=s.convert(de.type),Ne=b(de.internalFormat,He,Ce,de.colorSpace),je=ve(A);G&&ce(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Ne,A.width,A.height):ce(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,Ne,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const me=n.get(A.depthTexture).__webglTexture,pe=ve(A);if(A.depthTexture.format===Yi)ce(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(A.depthTexture.format===Lr)ce(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Se(L){const A=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(A.__webglFramebuffer,L)}else if(G){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=r.createRenderbuffer(),Re(A.__webglDepthbuffer[me],L,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Re(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function tt(L,A,G){const me=n.get(L);A!==void 0&&ae(me.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Se(L)}function B(L){const A=L.texture,G=n.get(L),me=n.get(A);L.addEventListener("dispose",O),L.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=A.version,o.memory.textures++);const pe=L.isWebGLCubeRenderTarget===!0,de=L.isWebGLMultipleRenderTargets===!0,He=m(L)||a;if(pe){G.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)G.__webglFramebuffer[Ce][Ne]=r.createFramebuffer()}else G.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)G.__webglFramebuffer[Ce]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(de)if(i.drawBuffers){const Ce=L.texture;for(let Ne=0,je=Ce.length;Ne<je;Ne++){const ot=n.get(Ce[Ne]);ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&ce(L)===!1){const Ce=de?A:[A];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ce.length;Ne++){const je=Ce[Ne];G.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Ne]);const ot=s.convert(je.format,je.colorSpace),ge=s.convert(je.type),bt=b(je.internalFormat,ot,ge,je.colorSpace,L.isXRRenderTarget===!0),ft=ve(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,bt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),H(r.TEXTURE_CUBE_MAP,A,He);for(let Ce=0;Ce<6;Ce++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ae(G.__webglFramebuffer[Ce][Ne],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else ae(G.__webglFramebuffer[Ce],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(A,He)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const Ce=L.texture;for(let Ne=0,je=Ce.length;Ne<je;Ne++){const ot=Ce[Ne],ge=n.get(ot);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),H(r.TEXTURE_2D,ot,He),ae(G.__webglFramebuffer,L,ot,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,0),v(ot,He)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?Ce=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ce,me.__webglTexture),H(Ce,A,He),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ae(G.__webglFramebuffer[Ne],L,A,r.COLOR_ATTACHMENT0,Ce,Ne);else ae(G.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,Ce,0);v(A,He)&&y(Ce),t.unbindTexture()}L.depthBuffer&&Se(L)}function we(L){const A=m(L)||a,G=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let me=0,pe=G.length;me<pe;me++){const de=G[me];if(v(de,A)){const He=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ce=n.get(de).__webglTexture;t.bindTexture(He,Ce),y(He),t.unbindTexture()}}}function ue(L){if(a&&L.samples>0&&ce(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],G=L.width,me=L.height;let pe=r.COLOR_BUFFER_BIT;const de=[],He=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(L),Ne=L.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<A.length;je++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let je=0;je<A.length;je++){de.push(r.COLOR_ATTACHMENT0+je),L.depthBuffer&&de.push(He);const ot=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(ot===!1&&(L.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),Ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[je]),ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[He]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[He])),Ne){const ge=n.get(A[je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,G,me,0,0,G,me,pe,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<A.length;je++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[je]);const ot=n.get(A[je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,ot,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function ve(L){return Math.min(i.maxSamples,L.samples)}function ce(L){const A=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ge(L){const A=o.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function Ie(L,A){const G=L.colorSpace,me=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===qa||G!==pi&&G!==Xn&&(Lt.getTransfer(G)===Ot?a===!1?e.has("EXT_sRGB")===!0&&me===Bn?(L.format=qa,L.minFilter=Qt,L.generateMipmaps=!1):A=Ou.sRGBToLinear(A):(me!==Bn||pe!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}this.allocateTextureUnit=z,this.resetTextureUnits=he,this.setTexture2D=k,this.setTexture2DArray=Q,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=tt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ce}function Qp(r,e,t){const n=t.isWebGL2;function i(s,o=Xn){let a;const c=Lt.getTransfer(o);if(s===Ii)return r.UNSIGNED_BYTE;if(s===Au)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Tu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===yp)return r.BYTE;if(s===vp)return r.SHORT;if(s===nc)return r.UNSIGNED_SHORT;if(s===Eu)return r.INT;if(s===Ci)return r.UNSIGNED_INT;if(s===ii)return r.FLOAT;if(s===xs)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xp)return r.ALPHA;if(s===Bn)return r.RGBA;if(s===bp)return r.LUMINANCE;if(s===Mp)return r.LUMINANCE_ALPHA;if(s===Yi)return r.DEPTH_COMPONENT;if(s===Lr)return r.DEPTH_STENCIL;if(s===qa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sp)return r.RED;if(s===Cu)return r.RED_INTEGER;if(s===wp)return r.RG;if(s===Ru)return r.RG_INTEGER;if(s===Pu)return r.RGBA_INTEGER;if(s===Ua||s===Oa||s===Fa||s===Ba)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ua)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ua)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Il||s===Dl||s===Nl||s===Ul)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ul)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ol||s===Fl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ol)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Fl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bl||s===kl||s===zl||s===Vl||s===Hl||s===Gl||s===Wl||s===Xl||s===ql||s===Yl||s===Zl||s===jl||s===Jl||s===Kl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Bl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ql)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kl)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ka||s===$l||s===Ql)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ka)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$l)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ql)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ep||s===eu||s===tu||s===nu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(s===eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class em extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bb={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mb extends mi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const _=t.getContextAttributes();let m=null,g=null;const v=[],y=[],b=new se;let I=null;const R=new rn;R.layers.enable(1),R.viewport=new Dt;const T=new rn;T.layers.enable(2),T.viewport=new Dt;const O=[R,T],S=new em;S.layers.enable(1),S.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=v[H];return Z===void 0&&(Z=new al,v[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=v[H];return Z===void 0&&(Z=new al,v[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=v[H];return Z===void 0&&(Z=new al,v[H]=Z),Z.getHandSpace()};function j(H){const Z=y.indexOf(H.inputSource);if(Z===-1)return;const ie=v[Z];ie!==void 0&&(ie.update(H.inputSource,H.frame,l||o),ie.dispatchEvent({type:H.type,data:H.inputSource}))}function he(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",he),i.removeEventListener("inputsourceschange",z);for(let H=0;H<v.length;H++){const Z=y[H];Z!==null&&(y[H]=null,v[H].disconnect(Z))}w=null,F=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,g=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",he),i.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new Yn(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ie=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Lr:Yi,ie=_.stencil?qi:Ci);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Yn(f.textureWidth,f.textureHeight,{format:Bn,type:Ii,depthTexture:new Vu(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Re=e.properties.get(g);Re.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(H){for(let Z=0;Z<H.removed.length;Z++){const ie=H.removed[Z],re=y.indexOf(ie);re>=0&&(y[re]=null,v[re].disconnect(ie))}for(let Z=0;Z<H.added.length;Z++){const ie=H.added[Z];let re=y.indexOf(ie);if(re===-1){for(let Re=0;Re<v.length;Re++)if(Re>=y.length){y.push(ie),re=Re;break}else if(y[Re]===null){y[Re]=ie,re=Re;break}if(re===-1)break}const ae=v[re];ae&&ae.connect(ie)}}const W=new N,k=new N;function Q(H,Z,ie){W.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const re=W.distanceTo(k),ae=Z.projectionMatrix.elements,Re=ie.projectionMatrix.elements,le=ae[14]/(ae[10]-1),Se=ae[14]/(ae[10]+1),tt=(ae[9]+1)/ae[5],B=(ae[9]-1)/ae[5],we=(ae[8]-1)/ae[0],ue=(Re[8]+1)/Re[0],ve=le*we,ce=le*ue,Ge=re/(-we+ue),Ie=Ge*-we;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(Ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const L=le+Ge,A=Se+Ge,G=ve-Ie,me=ce+(re-Ie),pe=tt*Se/A*L,de=B*Se/A*L;H.projectionMatrix.makePerspective(G,me,pe,de,L,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function Y(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;S.near=T.near=R.near=H.near,S.far=T.far=R.far=H.far,(w!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,F=S.far);const Z=H.parent,ie=S.cameras;Y(S,Z);for(let re=0;re<ie.length;re++)Y(ie[re],Z);ie.length===2?Q(S,R,T):S.projectionMatrix.copy(R.projectionMatrix),q(H,S,Z)};function q(H,Z,ie){ie===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ie.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ms*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)};let ne=null;function ee(H,Z){if(u=Z.getViewerPose(l||o),p=Z,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let re=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let ae=0;ae<ie.length;ae++){const Re=ie[ae];let le=null;if(d!==null)le=d.getViewport(Re);else{const tt=h.getViewSubImage(f,Re);le=tt.viewport,ae===0&&(e.setRenderTargetTextures(g,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(g))}let Se=O[ae];Se===void 0&&(Se=new rn,Se.layers.enable(ae),Se.viewport=new Dt,O[ae]=Se),Se.matrix.fromArray(Re.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Re.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(le.x,le.y,le.width,le.height),ae===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Se)}}for(let ie=0;ie<v.length;ie++){const re=y[ie],ae=v[ie];re!==null&&ae!==void 0&&ae.update(re,Z,l||o)}ne&&ne(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}const fe=new Yp;fe.setAnimationLoop(ee),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}function Sb(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Gp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,y,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,v,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*y,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wb(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function l(v,y){let b=i[v.id];b===void 0&&(p(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(v,I);const R=e.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function u(v){const y=h();v.__bindingPointIndex=y;const b=r.createBuffer(),I=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,I,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],b=v.uniforms,I=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let R=0,T=b.length;R<T;R++){const O=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,w=O.length;S<w;S++){const F=O[S];if(d(F,R,S,I)===!0){const j=F.__offset,he=Array.isArray(F.value)?F.value:[F.value];let z=0;for(let W=0;W<he.length;W++){const k=he[W],Q=_(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,j+z,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,z),z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,y,b,I){const R=v.value,T=y+"_"+b;if(I[T]===void 0)return typeof R=="number"||typeof R=="boolean"?I[T]=R:I[T]=R.clone(),!0;{const O=I[T];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return I[T]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function p(v){const y=v.uniforms;let b=0;const I=16;for(let T=0,O=y.length;T<O;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,F=S.length;w<F;w++){const j=S[w],he=Array.isArray(j.value)?j.value:[j.value];for(let z=0,W=he.length;z<W;z++){const k=he[z],Q=_(k),Y=b%I;Y!==0&&I-Y<Q.boundary&&(b+=I-Y),j.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=Q.storage}}}const R=b%I;return R>0&&(b+=I-R),v.__size=b,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class Gu{constructor(e={}){const{canvas:t=zp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const y=this;let b=!1,I=0,R=0,T=null,O=-1,S=null;const w=new Dt,F=new Dt;let j=null;const he=new Le(0);let z=0,W=t.width,k=t.height,Q=1,Y=null,q=null;const ne=new Dt(0,0,W,k),ee=new Dt(0,0,W,k);let fe=!1;const H=new Co;let Z=!1,ie=!1,re=null;const ae=new Ye,Re=new se,le=new N,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return T===null?Q:1}let B=n;function we(D,X){for(let K=0;K<D.length;K++){const te=D[K],J=t.getContext(te,X);if(J!==null)return J}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${So}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){const X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),B=we(X,D),B===null)throw we(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ue,ve,ce,Ge,Ie,L,A,G,me,pe,de,He,Ce,Ne,je,ot,ge,bt,ft,st,Ze,Ue,U,be;function We(){ue=new Bv(B),ve=new Iv(B,ue,e),ue.init(ve),Ue=new Qp(B,ue,ve),ce=new vb(B,ue,ve),Ge=new Vv(B),Ie=new ab,L=new xb(B,ue,ce,Ie,ve,Ue,Ge),A=new Nv(y),G=new Fv(y),me=new j_(B,ve),U=new Pv(B,ue,me,ve),pe=new kv(B,me,Ge,U),de=new Xv(B,pe,me,Ge),ft=new Wv(B,ve,L),ot=new Dv(Ie),He=new ob(y,A,G,ue,ve,U,ot),Ce=new Sb(y,Ie),Ne=new lb,je=new mb(ue,ve),bt=new Rv(y,A,G,ce,de,f,c),ge=new yb(y,de,ve),be=new wb(B,Ge,ve,ce),st=new Lv(B,ue,Ge,ve),Ze=new zv(B,ue,Ge,ve),Ge.programs=He.programs,y.capabilities=ve,y.extensions=ue,y.properties=Ie,y.renderLists=Ne,y.shadowMap=ge,y.state=ce,y.info=Ge}We();const ke=new Mb(y,B);this.xr=ke,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=ue.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ue.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(D){D!==void 0&&(Q=D,this.setSize(W,k,!1))},this.getSize=function(D){return D.set(W,k)},this.setSize=function(D,X,K=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=D,k=X,t.width=Math.floor(D*Q),t.height=Math.floor(X*Q),K===!0&&(t.style.width=D+"px",t.style.height=X+"px"),this.setViewport(0,0,D,X)},this.getDrawingBufferSize=function(D){return D.set(W*Q,k*Q).floor()},this.setDrawingBufferSize=function(D,X,K){W=D,k=X,Q=K,t.width=Math.floor(D*K),t.height=Math.floor(X*K),this.setViewport(0,0,D,X)},this.getCurrentViewport=function(D){return D.copy(w)},this.getViewport=function(D){return D.copy(ne)},this.setViewport=function(D,X,K,te){D.isVector4?ne.set(D.x,D.y,D.z,D.w):ne.set(D,X,K,te),ce.viewport(w.copy(ne).multiplyScalar(Q).floor())},this.getScissor=function(D){return D.copy(ee)},this.setScissor=function(D,X,K,te){D.isVector4?ee.set(D.x,D.y,D.z,D.w):ee.set(D,X,K,te),ce.scissor(F.copy(ee).multiplyScalar(Q).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(D){ce.setScissorTest(fe=D)},this.setOpaqueSort=function(D){Y=D},this.setTransparentSort=function(D){q=D},this.getClearColor=function(D){return D.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(D=!0,X=!0,K=!0){let te=0;if(D){let J=!1;if(T!==null){const Fe=T.texture.format;J=Fe===Pu||Fe===Ru||Fe===Cu}if(J){const Fe=T.texture.type,Be=Fe===Ii||Fe===Ci||Fe===nc||Fe===qi||Fe===Au||Fe===Tu,Je=bt.getClearColor(),it=bt.getClearAlpha(),ht=Je.r,ct=Je.g,lt=Je.b;Be?(d[0]=ht,d[1]=ct,d[2]=lt,d[3]=it,B.clearBufferuiv(B.COLOR,0,d)):(p[0]=ht,p[1]=ct,p[2]=lt,p[3]=it,B.clearBufferiv(B.COLOR,0,p))}else te|=B.COLOR_BUFFER_BIT}X&&(te|=B.DEPTH_BUFFER_BIT),K&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ne.dispose(),je.dispose(),Ie.dispose(),A.dispose(),G.dispose(),de.dispose(),U.dispose(),be.dispose(),He.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",zt),ke.removeEventListener("sessionend",St),re&&(re.dispose(),re=null),qt.stop()};function ye(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const D=Ge.autoReset,X=ge.enabled,K=ge.autoUpdate,te=ge.needsUpdate,J=ge.type;We(),Ge.autoReset=D,ge.enabled=X,ge.autoUpdate=K,ge.needsUpdate=te,ge.type=J}function Me(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Pe(D){const X=D.target;X.removeEventListener("dispose",Pe),nt(X)}function nt(D){$e(D),Ie.remove(D)}function $e(D){const X=Ie.get(D).programs;X!==void 0&&(X.forEach(function(K){He.releaseProgram(K)}),D.isShaderMaterial&&He.releaseShaderCache(D))}this.renderBufferDirect=function(D,X,K,te,J,Fe){X===null&&(X=Se);const Be=J.isMesh&&J.matrixWorld.determinant()<0,Je=Uc(D,X,K,te,J);ce.setMaterial(te,Be);let it=K.index,ht=1;if(te.wireframe===!0){if(it=pe.getWireframeAttribute(K),it===void 0)return;ht=2}const ct=K.drawRange,lt=K.attributes.position;let Vt=ct.start*ht,En=(ct.start+ct.count)*ht;Fe!==null&&(Vt=Math.max(Vt,Fe.start*ht),En=Math.min(En,(Fe.start+Fe.count)*ht)),it!==null?(Vt=Math.max(Vt,0),En=Math.min(En,it.count)):lt!=null&&(Vt=Math.max(Vt,0),En=Math.min(En,lt.count));const tn=En-Vt;if(tn<0||tn===1/0)return;U.setup(J,te,Je,K,it);let jn,Ut=st;if(it!==null&&(jn=me.get(it),Ut=Ze,Ut.setIndex(jn)),J.isMesh)te.wireframe===!0?(ce.setLineWidth(te.wireframeLinewidth*tt()),Ut.setMode(B.LINES)):Ut.setMode(B.TRIANGLES);else if(J.isLine){let at=te.linewidth;at===void 0&&(at=1),ce.setLineWidth(at*tt()),J.isLineSegments?Ut.setMode(B.LINES):J.isLineLoop?Ut.setMode(B.LINE_LOOP):Ut.setMode(B.LINE_STRIP)}else J.isPoints?Ut.setMode(B.POINTS):J.isSprite&&Ut.setMode(B.TRIANGLES);if(J.isBatchedMesh)Ut.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ut.renderInstances(Vt,tn,J.count);else if(K.isInstancedBufferGeometry){const at=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Is=Math.min(K.instanceCount,at);Ut.renderInstances(Vt,tn,Is)}else Ut.render(Vt,tn)};function vt(D,X,K){D.transparent===!0&&D.side===ni&&D.forceSinglePass===!1?(D.side=Pn,D.needsUpdate=!0,Gr(D,X,K),D.side=di,D.needsUpdate=!0,Gr(D,X,K),D.side=ni):Gr(D,X,K)}this.compile=function(D,X,K=null){K===null&&(K=D),m=je.get(K),m.init(),v.push(m),K.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),D!==K&&D.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(y._useLegacyLights);const te=new Set;return D.traverse(function(J){const Fe=J.material;if(Fe)if(Array.isArray(Fe))for(let Be=0;Be<Fe.length;Be++){const Je=Fe[Be];vt(Je,K,J),te.add(Je)}else vt(Fe,K,J),te.add(Fe)}),v.pop(),m=null,te},this.compileAsync=function(D,X,K=null){const te=this.compile(D,X,K);return new Promise(J=>{function Fe(){if(te.forEach(function(Be){Ie.get(Be).currentProgram.isReady()&&te.delete(Be)}),te.size===0){J(D);return}setTimeout(Fe,10)}ue.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let xt=null;function Mt(D){xt&&xt(D)}function zt(){qt.stop()}function St(){qt.start()}const qt=new Yp;qt.setAnimationLoop(Mt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(D){xt=D,ke.setAnimationLoop(D),D===null?qt.stop():qt.start()},ke.addEventListener("sessionstart",zt),ke.addEventListener("sessionend",St),this.render=function(D,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(X),X=ke.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,X,T),m=je.get(D,v.length),m.init(),v.push(m),ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H.setFromProjectionMatrix(ae),ie=this.localClippingEnabled,Z=ot.init(this.clippingPlanes,ie),_=Ne.get(D,g.length),_.init(),g.push(_),Zn(D,X,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Y,q),this.info.render.frame++,Z===!0&&ot.beginShadows();const K=m.state.shadowsArray;if(ge.render(K,D,X),Z===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(_,D),m.setupLights(y._useLegacyLights),X.isArrayCamera){const te=X.cameras;for(let J=0,Fe=te.length;J<Fe;J++){const Be=te[J];No(_,D,Be,Be.viewport)}}else No(_,D,X);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(y,D,X),U.resetDefaultState(),O=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Zn(D,X,K,te){if(D.visible===!1)return;if(D.layers.test(X.layers)){if(D.isGroup)K=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(X);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||H.intersectsSprite(D)){te&&le.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ae);const Be=de.update(D),Je=D.material;Je.visible&&_.push(D,Be,Je,K,le.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||H.intersectsObject(D))){const Be=de.update(D),Je=D.material;if(te&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),le.copy(D.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),le.copy(Be.boundingSphere.center)),le.applyMatrix4(D.matrixWorld).applyMatrix4(ae)),Array.isArray(Je)){const it=Be.groups;for(let ht=0,ct=it.length;ht<ct;ht++){const lt=it[ht],Vt=Je[lt.materialIndex];Vt&&Vt.visible&&_.push(D,Be,Vt,K,le.z,lt)}}else Je.visible&&_.push(D,Be,Je,K,le.z,null)}}const Fe=D.children;for(let Be=0,Je=Fe.length;Be<Je;Be++)Zn(Fe[Be],X,K,te)}function No(D,X,K,te){const J=D.opaque,Fe=D.transmissive,Be=D.transparent;m.setupLightsView(K),Z===!0&&ot.setGlobalState(y.clippingPlanes,K),Fe.length>0&&Nc(J,Fe,X,K),te&&ce.viewport(w.copy(te)),J.length>0&&Hr(J,X,K),Fe.length>0&&Hr(Fe,X,K),Be.length>0&&Hr(Be,X,K),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Nc(D,X,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Fe=ve.isWebGL2;re===null&&(re=new Yn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?xs:Ii,minFilter:Ni,samples:Fe?4:0})),y.getDrawingBufferSize(Re),Fe?re.setSize(Re.x,Re.y):re.setSize(Ya(Re.x),Ya(Re.y));const Be=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(he),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear();const Je=y.toneMapping;y.toneMapping=Li,Hr(D,K,te),L.updateMultisampleRenderTarget(re),L.updateRenderTargetMipmap(re);let it=!1;for(let ht=0,ct=X.length;ht<ct;ht++){const lt=X[ht],Vt=lt.object,En=lt.geometry,tn=lt.material,jn=lt.group;if(tn.side===ni&&Vt.layers.test(te.layers)){const Ut=tn.side;tn.side=Pn,tn.needsUpdate=!0,Ps(Vt,K,te,En,tn,jn),tn.side=Ut,tn.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(re),L.updateRenderTargetMipmap(re)),y.setRenderTarget(Be),y.setClearColor(he,z),y.toneMapping=Je}function Hr(D,X,K){const te=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Fe=D.length;J<Fe;J++){const Be=D[J],Je=Be.object,it=Be.geometry,ht=te===null?Be.material:te,ct=Be.group;Je.layers.test(K.layers)&&Ps(Je,X,K,it,ht,ct)}}function Ps(D,X,K,te,J,Fe){D.onBeforeRender(y,X,K,te,J,Fe),D.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),J.onBeforeRender(y,X,K,te,D,Fe),J.transparent===!0&&J.side===ni&&J.forceSinglePass===!1?(J.side=Pn,J.needsUpdate=!0,y.renderBufferDirect(K,X,te,J,D,Fe),J.side=di,J.needsUpdate=!0,y.renderBufferDirect(K,X,te,J,D,Fe),J.side=ni):y.renderBufferDirect(K,X,te,J,D,Fe),D.onAfterRender(y,X,K,te,J,Fe)}function Gr(D,X,K){X.isScene!==!0&&(X=Se);const te=Ie.get(D),J=m.state.lights,Fe=m.state.shadowsArray,Be=J.state.version,Je=He.getParameters(D,J.state,Fe,X,K),it=He.getProgramCacheKey(Je);let ht=te.programs;te.environment=D.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(D.isMeshStandardMaterial?G:A).get(D.envMap||te.environment),ht===void 0&&(D.addEventListener("dispose",Pe),ht=new Map,te.programs=ht);let ct=ht.get(it);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===Be)return Uo(D,Je),ct}else Je.uniforms=He.getUniforms(D),D.onBuild(K,Je,y),D.onBeforeCompile(Je,y),ct=He.acquireProgram(Je,it),ht.set(it,ct),te.uniforms=Je.uniforms;const lt=te.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(lt.clippingPlanes=ot.uniform),Uo(D,Je),te.needsLights=Fc(D),te.lightsStateVersion=Be,te.needsLights&&(lt.ambientLightColor.value=J.state.ambient,lt.lightProbe.value=J.state.probe,lt.directionalLights.value=J.state.directional,lt.directionalLightShadows.value=J.state.directionalShadow,lt.spotLights.value=J.state.spot,lt.spotLightShadows.value=J.state.spotShadow,lt.rectAreaLights.value=J.state.rectArea,lt.ltc_1.value=J.state.rectAreaLTC1,lt.ltc_2.value=J.state.rectAreaLTC2,lt.pointLights.value=J.state.point,lt.pointLightShadows.value=J.state.pointShadow,lt.hemisphereLights.value=J.state.hemi,lt.directionalShadowMap.value=J.state.directionalShadowMap,lt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,lt.spotShadowMap.value=J.state.spotShadowMap,lt.spotLightMatrix.value=J.state.spotLightMatrix,lt.spotLightMap.value=J.state.spotLightMap,lt.pointShadowMap.value=J.state.pointShadowMap,lt.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=ct,te.uniformsList=null,ct}function Ls(D){if(D.uniformsList===null){const X=D.currentProgram.getUniforms();D.uniformsList=Va.seqWithValue(X.seq,D.uniforms)}return D.uniformsList}function Uo(D,X){const K=Ie.get(D);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function Uc(D,X,K,te,J){X.isScene!==!0&&(X=Se),L.resetTextureUnits();const Fe=X.fog,Be=te.isMeshStandardMaterial?X.environment:null,Je=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:pi,it=(te.isMeshStandardMaterial?G:A).get(te.envMap||Be),ht=te.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ct=!!K.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),lt=!!K.morphAttributes.position,Vt=!!K.morphAttributes.normal,En=!!K.morphAttributes.color;let tn=Li;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(tn=y.toneMapping);const jn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ut=jn!==void 0?jn.length:0,at=Ie.get(te),Is=m.state.lights;if(Z===!0&&(ie===!0||D!==S)){const _n=D===S&&te.id===O;ot.setState(te,D,_n)}let Bt=!1;te.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Is.state.version||at.outputColorSpace!==Je||J.isBatchedMesh&&at.batching===!1||!J.isBatchedMesh&&at.batching===!0||J.isInstancedMesh&&at.instancing===!1||!J.isInstancedMesh&&at.instancing===!0||J.isSkinnedMesh&&at.skinning===!1||!J.isSkinnedMesh&&at.skinning===!0||J.isInstancedMesh&&at.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&at.instancingColor===!1&&J.instanceColor!==null||at.envMap!==it||te.fog===!0&&at.fog!==Fe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==ot.numPlanes||at.numIntersection!==ot.numIntersection)||at.vertexAlphas!==ht||at.vertexTangents!==ct||at.morphTargets!==lt||at.morphNormals!==Vt||at.morphColors!==En||at.toneMapping!==tn||ve.isWebGL2===!0&&at.morphTargetsCount!==Ut)&&(Bt=!0):(Bt=!0,at.__version=te.version);let _i=at.currentProgram;Bt===!0&&(_i=Gr(te,X,J));let Ds=!1,sr=!1,Ns=!1;const ln=_i.getUniforms(),ui=at.uniforms;if(ce.useProgram(_i.program)&&(Ds=!0,sr=!0,Ns=!0),te.id!==O&&(O=te.id,sr=!0),Ds||S!==D){ln.setValue(B,"projectionMatrix",D.projectionMatrix),ln.setValue(B,"viewMatrix",D.matrixWorldInverse);const _n=ln.map.cameraPosition;_n!==void 0&&_n.setValue(B,le.setFromMatrixPosition(D.matrixWorld)),ve.logarithmicDepthBuffer&&ln.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ln.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,sr=!0,Ns=!0)}if(J.isSkinnedMesh){ln.setOptional(B,J,"bindMatrix"),ln.setOptional(B,J,"bindMatrixInverse");const _n=J.skeleton;_n&&(ve.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),ln.setValue(B,"boneTexture",_n.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(ln.setOptional(B,J,"batchingTexture"),ln.setValue(B,"batchingTexture",J._matricesTexture,L));const Ht=K.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0&&ve.isWebGL2===!0)&&ft.update(J,K,_i),(sr||at.receiveShadow!==J.receiveShadow)&&(at.receiveShadow=J.receiveShadow,ln.setValue(B,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ui.envMap.value=it,ui.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),sr&&(ln.setValue(B,"toneMappingExposure",y.toneMappingExposure),at.needsLights&&Oc(ui,Ns),Fe&&te.fog===!0&&Ce.refreshFogUniforms(ui,Fe),Ce.refreshMaterialUniforms(ui,te,Q,k,re),Va.upload(B,Ls(at),ui,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Va.upload(B,Ls(at),ui,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ln.setValue(B,"center",J.center),ln.setValue(B,"modelViewMatrix",J.modelViewMatrix),ln.setValue(B,"normalMatrix",J.normalMatrix),ln.setValue(B,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const _n=te.uniformsGroups;for(let Us=0,Oo=_n.length;Us<Oo;Us++)if(ve.isWebGL2){const Os=_n[Us];be.update(Os,_i),be.bind(Os,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Oc(D,X){D.ambientLightColor.needsUpdate=X,D.lightProbe.needsUpdate=X,D.directionalLights.needsUpdate=X,D.directionalLightShadows.needsUpdate=X,D.pointLights.needsUpdate=X,D.pointLightShadows.needsUpdate=X,D.spotLights.needsUpdate=X,D.spotLightShadows.needsUpdate=X,D.rectAreaLights.needsUpdate=X,D.hemisphereLights.needsUpdate=X}function Fc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,X,K){Ie.get(D.texture).__webglTexture=X,Ie.get(D.depthTexture).__webglTexture=K;const te=Ie.get(D);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=K===void 0,te.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,X){const K=Ie.get(D);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(D,X=0,K=0){T=D,I=X,R=K;let te=!0,J=null,Fe=!1,Be=!1;if(D){const it=Ie.get(D);it.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(B.FRAMEBUFFER,null),te=!1):it.__webglFramebuffer===void 0?L.setupRenderTarget(D):it.__hasExternalTextures&&L.rebindTextures(D,Ie.get(D.texture).__webglTexture,Ie.get(D.depthTexture).__webglTexture);const ht=D.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Be=!0);const ct=Ie.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ct[X])?J=ct[X][K]:J=ct[X],Fe=!0):ve.isWebGL2&&D.samples>0&&L.useMultisampledRTT(D)===!1?J=Ie.get(D).__webglMultisampledFramebuffer:Array.isArray(ct)?J=ct[K]:J=ct,w.copy(D.viewport),F.copy(D.scissor),j=D.scissorTest}else w.copy(ne).multiplyScalar(Q).floor(),F.copy(ee).multiplyScalar(Q).floor(),j=fe;if(ce.bindFramebuffer(B.FRAMEBUFFER,J)&&ve.drawBuffers&&te&&ce.drawBuffers(D,J),ce.viewport(w),ce.scissor(F),ce.setScissorTest(j),Fe){const it=Ie.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,it.__webglTexture,K)}else if(Be){const it=Ie.get(D.texture),ht=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,it.__webglTexture,K||0,ht)}O=-1},this.readRenderTargetPixels=function(D,X,K,te,J,Fe,Be){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(Je=Je[Be]),Je){ce.bindFramebuffer(B.FRAMEBUFFER,Je);try{const it=D.texture,ht=it.format,ct=it.type;if(ht!==Bn&&Ue.convert(ht)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=ct===xs&&(ue.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ue.has("EXT_color_buffer_float"));if(ct!==Ii&&Ue.convert(ct)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ct===ii&&(ve.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=D.width-te&&K>=0&&K<=D.height-J&&B.readPixels(X,K,te,J,Ue.convert(ht),Ue.convert(ct),Fe)}finally{const it=T!==null?Ie.get(T).__webglFramebuffer:null;ce.bindFramebuffer(B.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(D,X,K=0){const te=Math.pow(2,-K),J=Math.floor(X.image.width*te),Fe=Math.floor(X.image.height*te);L.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,D.x,D.y,J,Fe),ce.unbindTexture()},this.copyTextureToTexture=function(D,X,K,te=0){const J=X.image.width,Fe=X.image.height,Be=Ue.convert(K.format),Je=Ue.convert(K.type);L.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,te,D.x,D.y,J,Fe,Be,Je,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,te,D.x,D.y,X.mipmaps[0].width,X.mipmaps[0].height,Be,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,te,D.x,D.y,Be,Je,X.image),te===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(D,X,K,te,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=D.max.x-D.min.x+1,Be=D.max.y-D.min.y+1,Je=D.max.z-D.min.z+1,it=Ue.convert(te.format),ht=Ue.convert(te.type);let ct;if(te.isData3DTexture)L.setTexture3D(te,0),ct=B.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)L.setTexture2DArray(te,0),ct=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,te.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,te.unpackAlignment);const lt=B.getParameter(B.UNPACK_ROW_LENGTH),Vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),En=B.getParameter(B.UNPACK_SKIP_PIXELS),tn=B.getParameter(B.UNPACK_SKIP_ROWS),jn=B.getParameter(B.UNPACK_SKIP_IMAGES),Ut=K.isCompressedTexture?K.mipmaps[J]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,D.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,D.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,D.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(ct,J,X.x,X.y,X.z,Fe,Be,Je,it,ht,Ut.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(ct,J,X.x,X.y,X.z,Fe,Be,Je,it,Ut.data)):B.texSubImage3D(ct,J,X.x,X.y,X.z,Fe,Be,Je,it,ht,Ut),B.pixelStorei(B.UNPACK_ROW_LENGTH,lt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,En),B.pixelStorei(B.UNPACK_SKIP_ROWS,tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jn),J===0&&te.generateMipmaps&&B.generateMipmap(ct),ce.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?L.setTextureCube(D,0):D.isData3DTexture?L.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?L.setTexture2DArray(D,0):L.setTexture2D(D,0),ce.unbindTexture()},this.resetState=function(){I=0,R=0,T=null,ce.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rc?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?Zi:Du}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zi?Zt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tm extends Gu{}tm.prototype.isWebGL1Renderer=!0;class uc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class dc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new N;class Ir{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wu extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const Vs=new N,as=new N,cs=new N,ls=new se,Hs=new se,nm=new Ye,ca=new N,Gs=new N,la=new N,sf=new se,cl=new se,of=new se;class im extends Rt{constructor(e=new Wu){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dc(t,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Ir(n,3,0,!1)),os.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=os,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ua(ca.set(-.5,-.5,0),cs,o,as,i,s),ua(Gs.set(.5,-.5,0),cs,o,as,i,s),ua(la.set(.5,.5,0),cs,o,as,i,s),sf.set(0,0),cl.set(1,0),of.set(1,1);let a=e.ray.intersectTriangle(ca,Gs,la,!1,Vs);if(a===null&&(ua(Gs.set(-.5,.5,0),cs,o,as,i,s),cl.set(0,1),a=e.ray.intersectTriangle(ca,la,Gs,!1,Vs),a===null))return;const c=e.ray.origin.distanceTo(Vs);c<e.near||c>e.far||t.push({distance:c,point:Vs.clone(),uv:Fn.getInterpolation(Vs,ca,Gs,la,sf,cl,of,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ua(r,e,t,n,i,s){ls.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Hs.x=s*ls.x-i*ls.y,Hs.y=i*ls.x+s*ls.y):Hs.copy(ls),r.copy(e),r.x+=Hs.x,r.y+=Hs.y,r.applyMatrix4(nm)}const ha=new N,af=new N;class rm extends Rt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ha.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(ha);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ha.setFromMatrixPosition(e.matrixWorld),af.setFromMatrixPosition(this.matrixWorld);const n=ha.distanceTo(af)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const cf=new N,lf=new Dt,uf=new Dt,Eb=new N,hf=new Ye,fa=new N,ll=new bn,ff=new Ye,ul=new Fr;class Xu extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ll,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(i),e.ray.intersectsSphere(ll)!==!1&&(ff.copy(i).invert(),ul.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_p?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;lf.fromBufferAttribute(i.attributes.skinIndex,e),uf.fromBufferAttribute(i.attributes.skinWeight,e),cf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=uf.getComponent(s);if(o!==0){const a=lf.getComponent(s);hf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Eb.copy(cf).applyMatrix4(hf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class pc extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rr extends en{constructor(e=null,t=1,n=1,i,s,o,a,c,l=$t,u=$t,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new Ye,Ab=new Ye;class Ro{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ab;df.multiplyMatrices(a,t[s]),df.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ro(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rr(t,e,e,Bn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pc),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ws extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new Ye,pf=new Ye,da=[],mf=new Ln,Tb=new Ye,Ws=new Jt,Xs=new bn;class sm extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),mf.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Xs.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),e.ray.intersectsSphere(Xs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,us),pf.multiplyMatrices(n,us),Ws.matrixWorld=pf,Ws.raycast(e,da);for(let o=0,a=da.length;o<a;o++){const c=da[o];c.instanceId=s,c.object=this,t.push(c)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function Cb(r,e){return r.z-e.z}function Rb(r,e){return e.z-r.z}class Pb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const hs="batchId",Vi=new Ye,gf=new Ye,Lb=new Ye,_f=new Ye,hl=new Co,pa=new Ln,ur=new bn,qs=new N,fl=new Pb,xn=new Jt,ma=[];function Ib(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class om extends Jt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new ut,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Rr(t,e,e,Bn,ii);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const c=e.getAttribute(a),{array:l,itemSize:u,normalized:h}=c,f=new l.constructor(n*u),d=new c.constructor(f,u,h);d.setUsage(c.usage),t.setAttribute(a,d)}if(e.getIndex()!==null){const a=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Pt(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(hs,new Pt(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(hs))throw new Error(`BatchedMesh: Geometry cannot use attribute "${hs}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===hs)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Vi),this.getBoundingBoxAt(i,pa).applyMatrix4(Vi),t.union(pa))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Vi),this.getBoundingSphereAt(i,ur).applyMatrix4(Vi),t.union(ur))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,f=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;h.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,Lb.toArray(p,_*16),d.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Ln,sphereInitialized:!1,sphere:new bn});const m=this.geometry.getAttribute(hs);for(let g=0;g<i.vertexCount;g++)m.setX(i.vertexStart+g,_);return m.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const d in n.attributes){if(d===hs)continue;const p=t.getAttribute(d),_=n.getAttribute(d);Ib(p,_,c);const m=p.itemSize;for(let g=p.count,v=l;g<v;g++){const y=c+g;for(let b=0;b<m;b++)_.setComponent(y,b,0)}_.needsUpdate=!0}if(i){const d=a.indexStart;for(let p=0;p<o.count;p++)s.setX(d+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)s.setX(d+p,c);s.needsUpdate=!0}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=i?o.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.box,o=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const a=o.index,c=o.attributes.position,l=this._drawRanges[e];for(let u=l.start,h=l.start+l.count;u<h;u++){let f=u;a&&(f=a.getX(f)),s.expandByPoint(qs.fromBufferAttribute(c,f))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return this;const i=this._bounds[e],s=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,pa),pa.getCenter(s.center);const a=o.index,c=o.attributes.position,l=this._drawRanges[e];let u=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let d=h;a&&(d=a.getX(d)),qs.fromBufferAttribute(c,d),u=Math.max(u,s.center.distanceToSquared(qs))}s.radius=Math.sqrt(u),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;xn.material=this.material,xn.geometry.index=c.index,xn.geometry.attributes=c.attributes,xn.geometry.boundingBox===null&&(xn.geometry.boundingBox=new Ln),xn.geometry.boundingSphere===null&&(xn.geometry.boundingSphere=new bn);for(let l=0;l<o;l++){if(!n[l]||!i[l])continue;const u=s[l];xn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,xn.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,xn.geometry.boundingBox),this.getBoundingSphereAt(l,xn.geometry.boundingSphere),xn.raycast(e,ma);for(let h=0,f=ma.length;h<f;h++){const d=ma[h];d.object=this,d.batchId=l,t.push(d)}ma.length=0}xn.material=null,xn.geometry.index=null,xn.geometry.attributes={},xn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._visibility,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled;f&&(_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),hl.setFromProjectionMatrix(_f,e.isWebGPURenderer?bs:ri));let d=0;if(this.sortObjects){gf.copy(this.matrixWorld).invert(),qs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gf);for(let m=0,g=c.length;m<g;m++)if(c[m]){this.getMatrixAt(m,Vi),this.getBoundingSphereAt(m,ur).applyMatrix4(Vi);let v=!1;if(f&&(v=!hl.intersectsSphere(ur)),!v){const y=qs.distanceTo(ur.center);fl.push(h[m],y)}}const p=fl.list,_=this.customSort;_===null?p.sort(s.transparent?Rb:Cb):_.call(this,p,n);for(let m=0,g=p.length;m<g;m++){const v=p[m];l[d]=v.start*a,u[d]=v.count,d++}fl.reset()}else for(let p=0,_=c.length;p<_;p++)if(c[p]){let m=!1;if(f&&(this.getMatrixAt(p,Vi),this.getBoundingSphereAt(p,ur).applyMatrix4(Vi),m=!hl.intersectsSphere(ur)),!m){const g=h[p];l[d]=g.start*a,u[d]=g.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class mn extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yf=new N,vf=new N,xf=new Ye,dl=new Fr,ga=new bn;class Ui extends Rt{constructor(e=new ut,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)yf.fromBufferAttribute(t,i-1),vf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yf.distanceTo(vf);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;xf.copy(i).invert(),dl.copy(e.ray).applyMatrix4(xf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new N,u=new N,h=new N,f=new N,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const g=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let y=g,b=v-1;y<b;y+=d){const I=p.getX(y),R=p.getX(y+1);if(l.fromBufferAttribute(m,I),u.fromBufferAttribute(m,R),dl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=g,b=v-1;y<b;y+=d){if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),dl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const bf=new N,Mf=new N;class ai extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)bf.fromBufferAttribute(t,i),Mf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bf.distanceTo(Mf);e.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class am extends Ui{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qu extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sf=new Ye,cu=new Fr,_a=new bn,ya=new N;class cm extends Rt{constructor(e=new ut,t=new qu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;Sf.copy(i).invert(),cu.copy(e.ray).applyMatrix4(Sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=l.getX(p);ya.fromBufferAttribute(h,m),wf(ya,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)ya.fromBufferAttribute(h,p),wf(ya,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wf(r,e,t,n,i,s,o){const a=cu.distanceSqToPoint(r);if(a<t){const c=new N;cu.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Db extends en{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Qt,this.magFilter=s!==void 0?s:Qt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Nb extends en{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=$t,this.minFilter=$t,this.generateMipmaps=!1,this.needsUpdate=!0}}class mc extends en{constructor(e,t,n,i,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Ub extends mc{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=hn}}class Ob extends mc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Di),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Fb extends en{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new se:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],s=[],o=[],a=new N,c=new Ye;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new N)}s[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(jt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(jt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gc extends ci{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new se,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lm extends gc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yu(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const va=new N,pl=new Yu,ml=new Yu,gl=new Yu;class um extends ci{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(va.subVectors(i[0],i[1]).add(i[0]),l=va);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(va.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=va),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),pl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,m),ml.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,m),gl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),ml.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),gl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(pl.calc(c),ml.calc(c),gl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ef(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function Bb(r,e){const t=1-r;return t*t*e}function kb(r,e){return 2*(1-r)*r*e}function zb(r,e){return r*r*e}function $s(r,e,t,n){return Bb(r,e)+kb(r,t)+zb(r,n)}function Vb(r,e){const t=1-r;return t*t*t*e}function Hb(r,e){const t=1-r;return 3*t*t*r*e}function Gb(r,e){return 3*(1-r)*r*r*e}function Wb(r,e){return r*r*r*e}function Qs(r,e,t,n,i){return Vb(r,e)+Hb(r,t)+Gb(r,n)+Wb(r,i)}class Zu extends ci{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,s.x,o.x,a.x),Qs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends ci{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,i.x,s.x,o.x,a.x),Qs(e,i.y,s.y,o.y,a.y),Qs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ju extends ci{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends ci{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends ci{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set($s(e,i.x,s.x,o.x),$s(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends ci{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set($s(e,i.x,s.x,o.x),$s(e,i.y,s.y,o.y),$s(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Ef(a,c.x,l.x,u.x,h.x),Ef(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:lm,CatmullRomCurve3:um,CubicBezierCurve:Zu,CubicBezierCurve3:hm,EllipseCurve:gc,LineCurve:ju,LineCurve3:fm,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:Ku,SplineCurve:$u});class dm extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Za[i.type]().fromJSON(i))}return this}}class fo extends dm{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ju(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ju(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Zu(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $u(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new gc(e,t,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Po extends ut{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=jt(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/t,h=new N,f=new se,d=new N,p=new N,_=new N;let m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){const y=n+v*u*i,b=Math.sin(y),I=Math.cos(y);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*b,h.y=e[R].y,h.z=e[R].x*I,o.push(h.x,h.y,h.z),f.x=v/t,f.y=R/(e.length-1),a.push(f.x,f.y);const T=c[3*R+0]*b,O=c[3*R+1],S=c[3*R+0]*I;l.push(T,O,S)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const b=y+v*e.length,I=b,R=b+e.length,T=b+e.length+1,O=b+1;s.push(I,R,O),s.push(T,O,R)}this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.points,e.segments,e.phiStart,e.phiLength)}}class _c extends Po{constructor(e=1,t=1,n=4,i=8){const s=new fo;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new _c(e.radius,e.length,e.capSegments,e.radialSegments)}}class yc extends ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new N,u=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rs extends ut{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(d,2));function v(){const b=new N,I=new N;let R=0;const T=(t-e)/n;for(let O=0;O<=s;O++){const S=[],w=O/s,F=w*(t-e)+e;for(let j=0;j<=i;j++){const he=j/i,z=he*c+a,W=Math.sin(z),k=Math.cos(z);I.x=F*W,I.y=-w*n+m,I.z=F*k,h.push(I.x,I.y,I.z),b.set(W,T,k).normalize(),f.push(b.x,b.y,b.z),d.push(he,1-w),S.push(p++)}_.push(S)}for(let O=0;O<i;O++)for(let S=0;S<s;S++){const w=_[S][O],F=_[S+1][O],j=_[S+1][O+1],he=_[S][O+1];u.push(w,F,he),u.push(F,j,he),R+=6}l.addGroup(g,R,0),g+=R}function y(b){const I=p,R=new se,T=new N;let O=0;const S=b===!0?e:t,w=b===!0?1:-1;for(let j=1;j<=i;j++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),p++;const F=p;for(let j=0;j<=i;j++){const z=j/i*c+a,W=Math.cos(z),k=Math.sin(z);T.x=S*k,T.y=m*w,T.z=S*W,h.push(T.x,T.y,T.z),f.push(0,w,0),R.x=W*.5+.5,R.y=k*.5*w+.5,d.push(R.x,R.y),p++}for(let j=0;j<i;j++){const he=I+j,z=F+j;b===!0?u.push(z,z+1,he):u.push(z+1,z,he),O+=3}l.addGroup(g,O,b===!0?1:2),g+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vc extends Rs{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new N,b=new N,I=new N;for(let R=0;R<t.length;R+=3)d(t[R+0],y),d(t[R+1],b),d(t[R+2],I),c(y,b,I,v)}function c(v,y,b,I){const R=I+1,T=[];for(let O=0;O<=R;O++){T[O]=[];const S=v.clone().lerp(b,O/R),w=y.clone().lerp(b,O/R),F=R-O;for(let j=0;j<=F;j++)j===0&&O===R?T[O][j]=S:T[O][j]=S.clone().lerp(w,j/F)}for(let O=0;O<R;O++)for(let S=0;S<2*(R-O)-1;S++){const w=Math.floor(S/2);S%2===0?(f(T[O][w+1]),f(T[O+1][w]),f(T[O][w])):(f(T[O][w+1]),f(T[O+1][w+1]),f(T[O+1][w]))}}function l(v){const y=new N;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(v),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function u(){const v=new N;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];const b=m(v)/2/Math.PI+.5,I=g(v)/Math.PI+.5;o.push(b,1-I)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],b=o[v+2],I=o[v+4],R=Math.max(y,b,I),T=Math.min(y,b,I);R>.9&&T<.1&&(y<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,y){const b=v*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){const v=new N,y=new N,b=new N,I=new N,R=new se,T=new se,O=new se;for(let S=0,w=0;S<s.length;S+=9,w+=6){v.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),b.set(s[S+6],s[S+7],s[S+8]),R.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),O.set(o[w+4],o[w+5]),I.copy(v).add(y).add(b).divideScalar(3);const F=m(I);_(R,w+0,v,F),_(T,w+2,y,F),_(O,w+4,b,F)}}function _(v,y,b,I){I<0&&v.x===1&&(o[y]=v.x-1),b.x===0&&b.z===0&&(o[y]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.vertices,e.indices,e.radius,e.details)}}class xc extends ir{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xc(e.radius,e.detail)}}const xa=new N,ba=new N,_l=new N,Ma=new Fn;class pm extends ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Cr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:g}=Ma;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Ma.getNormal(_l),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const y=(v+1)%3,b=h[v],I=h[y],R=Ma[u[v]],T=Ma[u[y]],O=`${b}_${I}`,S=`${I}_${b}`;S in f&&f[S]?(_l.dot(f[S].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(T.x,T.y,T.z)),f[S]=null):O in f||(f[O]={index0:l[v],index1:l[y],normal:_l.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];xa.fromBufferAttribute(a,_),ba.fromBufferAttribute(a,m),d.push(xa.x,xa.y,xa.z),d.push(ba.x,ba.y,ba.z)}this.setAttribute("position",new Oe(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Pr extends fo{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new fo().fromJSON(i))}return this}}const Xb={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=mm(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(n&&(s=Jb(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(let p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return po(s,o,t,a,c,d,0),o}};function mm(r,e,t,n,i){let s,o;if(i===aM(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Af(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Af(s,r[s],r[s+1],o);return o&&bc(o,o.next)&&(go(o),o=o.next),o}function Dr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(bc(t,t.next)||Wt(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function po(r,e,t,n,i,s,o){if(!r)return;!o&&s&&tM(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Yb(r,n,i,s):qb(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),go(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Zb(Dr(r),e,t),po(r,e,t,n,i,s,2)):o===2&&jb(r,e,t,n,i,s):po(Dr(r),e,t,n,i,s,1);break}}}function qb(r){const e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&gs(i,a,s,c,o,l,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Yb(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Wt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,g=lu(d,p,e,t,n),v=lu(_,m,e,t,n);let y=r.prevZ,b=r.nextZ;for(;y&&y.z>=g&&b&&b.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&gs(a,u,c,h,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&gs(a,u,c,h,l,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&gs(a,u,c,h,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&gs(a,u,c,h,l,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Zb(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!bc(i,s)&&gm(i,n,n.next,s)&&mo(i,s)&&mo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),go(n),go(n.next),n=r=s),n=n.next}while(n!==r);return Dr(n)}function jb(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rM(o,a)){let c=_m(o,a);o=Dr(o,o.next),c=Dr(c,c.next),po(o,e,t,n,i,s,0),po(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Jb(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=mm(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(iM(l));for(i.sort(Kb),s=0;s<i.length;s++)t=$b(i[s],t);return t}function Kb(r,e){return r.x-e.x}function $b(r,e){const t=Qb(r,e);if(!t)return e;const n=_m(t,r);return Dr(n,n.next),Dr(t,t.next)}function Qb(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&gs(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),mo(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&eM(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function eM(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function tM(r,e,t,n){let i=r;do i.z===0&&(i.z=lu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,nM(i)}function nM(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function lu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function iM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function gs(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function rM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!sM(r,e)&&(mo(r,e)&&mo(e,r)&&oM(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||bc(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function bc(r,e){return r.x===e.x&&r.y===e.y}function gm(r,e,t,n){const i=wa(Wt(r,e,t)),s=wa(Wt(r,e,n)),o=wa(Wt(t,n,r)),a=wa(Wt(t,n,e));return!!(i!==s&&o!==a||i===0&&Sa(r,t,e)||s===0&&Sa(r,n,e)||o===0&&Sa(t,r,n)||a===0&&Sa(t,e,n))}function Sa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function wa(r){return r>0?1:r<0?-1:0}function sM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&gm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function mo(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function oM(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function _m(r,e){const t=new uu(r.i,r.x,r.y),n=new uu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Af(r,e,t,n){const i=new uu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function go(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function uu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aM(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class fi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Tf(e),Cf(n,e);let o=e.length;t.forEach(Tf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Cf(n,t[c]);const a=Xb.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Tf(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Cf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Mc extends ut{constructor(e=new Pr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:cM;let y,b=!1,I,R,T,O;g&&(y=g.getSpacedPoints(u),b=!0,f=!1,I=g.computeFrenetFrames(u,!1),R=new N,T=new N,O=new N),f||(m=0,d=0,p=0,_=0);const S=a.extractPoints(l);let w=S.shape;const F=S.holes;if(!fi.isClockWise(w)){w=w.reverse();for(let B=0,we=F.length;B<we;B++){const ue=F[B];fi.isClockWise(ue)&&(F[B]=ue.reverse())}}const he=fi.triangulateShape(w,F),z=w;for(let B=0,we=F.length;B<we;B++){const ue=F[B];w=w.concat(ue)}function W(B,we,ue){return we||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(we,ue)}const k=w.length,Q=he.length;function Y(B,we,ue){let ve,ce,Ge;const Ie=B.x-we.x,L=B.y-we.y,A=ue.x-B.x,G=ue.y-B.y,me=Ie*Ie+L*L,pe=Ie*G-L*A;if(Math.abs(pe)>Number.EPSILON){const de=Math.sqrt(me),He=Math.sqrt(A*A+G*G),Ce=we.x-L/de,Ne=we.y+Ie/de,je=ue.x-G/He,ot=ue.y+A/He,ge=((je-Ce)*G-(ot-Ne)*A)/(Ie*G-L*A);ve=Ce+Ie*ge-B.x,ce=Ne+L*ge-B.y;const bt=ve*ve+ce*ce;if(bt<=2)return new se(ve,ce);Ge=Math.sqrt(bt/2)}else{let de=!1;Ie>Number.EPSILON?A>Number.EPSILON&&(de=!0):Ie<-Number.EPSILON?A<-Number.EPSILON&&(de=!0):Math.sign(L)===Math.sign(G)&&(de=!0),de?(ve=-L,ce=Ie,Ge=Math.sqrt(me)):(ve=Ie,ce=L,Ge=Math.sqrt(me/2))}return new se(ve/Ge,ce/Ge)}const q=[];for(let B=0,we=z.length,ue=we-1,ve=B+1;B<we;B++,ue++,ve++)ue===we&&(ue=0),ve===we&&(ve=0),q[B]=Y(z[B],z[ue],z[ve]);const ne=[];let ee,fe=q.concat();for(let B=0,we=F.length;B<we;B++){const ue=F[B];ee=[];for(let ve=0,ce=ue.length,Ge=ce-1,Ie=ve+1;ve<ce;ve++,Ge++,Ie++)Ge===ce&&(Ge=0),Ie===ce&&(Ie=0),ee[ve]=Y(ue[ve],ue[Ge],ue[Ie]);ne.push(ee),fe=fe.concat(ee)}for(let B=0;B<m;B++){const we=B/m,ue=d*Math.cos(we*Math.PI/2),ve=p*Math.sin(we*Math.PI/2)+_;for(let ce=0,Ge=z.length;ce<Ge;ce++){const Ie=W(z[ce],q[ce],ve);ae(Ie.x,Ie.y,-ue)}for(let ce=0,Ge=F.length;ce<Ge;ce++){const Ie=F[ce];ee=ne[ce];for(let L=0,A=Ie.length;L<A;L++){const G=W(Ie[L],ee[L],ve);ae(G.x,G.y,-ue)}}}const H=p+_;for(let B=0;B<k;B++){const we=f?W(w[B],fe[B],H):w[B];b?(T.copy(I.normals[0]).multiplyScalar(we.x),R.copy(I.binormals[0]).multiplyScalar(we.y),O.copy(y[0]).add(T).add(R),ae(O.x,O.y,O.z)):ae(we.x,we.y,0)}for(let B=1;B<=u;B++)for(let we=0;we<k;we++){const ue=f?W(w[we],fe[we],H):w[we];b?(T.copy(I.normals[B]).multiplyScalar(ue.x),R.copy(I.binormals[B]).multiplyScalar(ue.y),O.copy(y[B]).add(T).add(R),ae(O.x,O.y,O.z)):ae(ue.x,ue.y,h/u*B)}for(let B=m-1;B>=0;B--){const we=B/m,ue=d*Math.cos(we*Math.PI/2),ve=p*Math.sin(we*Math.PI/2)+_;for(let ce=0,Ge=z.length;ce<Ge;ce++){const Ie=W(z[ce],q[ce],ve);ae(Ie.x,Ie.y,h+ue)}for(let ce=0,Ge=F.length;ce<Ge;ce++){const Ie=F[ce];ee=ne[ce];for(let L=0,A=Ie.length;L<A;L++){const G=W(Ie[L],ee[L],ve);b?ae(G.x,G.y+y[u-1].y,y[u-1].x+ue):ae(G.x,G.y,h+ue)}}}Z(),ie();function Z(){const B=i.length/3;if(f){let we=0,ue=k*we;for(let ve=0;ve<Q;ve++){const ce=he[ve];Re(ce[2]+ue,ce[1]+ue,ce[0]+ue)}we=u+m*2,ue=k*we;for(let ve=0;ve<Q;ve++){const ce=he[ve];Re(ce[0]+ue,ce[1]+ue,ce[2]+ue)}}else{for(let we=0;we<Q;we++){const ue=he[we];Re(ue[2],ue[1],ue[0])}for(let we=0;we<Q;we++){const ue=he[we];Re(ue[0]+k*u,ue[1]+k*u,ue[2]+k*u)}}n.addGroup(B,i.length/3-B,0)}function ie(){const B=i.length/3;let we=0;re(z,we),we+=z.length;for(let ue=0,ve=F.length;ue<ve;ue++){const ce=F[ue];re(ce,we),we+=ce.length}n.addGroup(B,i.length/3-B,1)}function re(B,we){let ue=B.length;for(;--ue>=0;){const ve=ue;let ce=ue-1;ce<0&&(ce=B.length-1);for(let Ge=0,Ie=u+m*2;Ge<Ie;Ge++){const L=k*Ge,A=k*(Ge+1),G=we+ve+L,me=we+ce+L,pe=we+ce+A,de=we+ve+A;le(G,me,pe,de)}}}function ae(B,we,ue){c.push(B),c.push(we),c.push(ue)}function Re(B,we,ue){Se(B),Se(we),Se(ue);const ve=i.length/3,ce=v.generateTopUV(n,i,ve-3,ve-2,ve-1);tt(ce[0]),tt(ce[1]),tt(ce[2])}function le(B,we,ue,ve){Se(B),Se(we),Se(ve),Se(we),Se(ue),Se(ve);const ce=i.length/3,Ge=v.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);tt(Ge[0]),tt(Ge[1]),tt(Ge[3]),tt(Ge[1]),tt(Ge[2]),tt(Ge[3])}function Se(B){i.push(c[B*3+0]),i.push(c[B*3+1]),i.push(c[B*3+2])}function tt(B){s.push(B.x),s.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Za[i.type]().fromJSON(i)),new Mc(n,e.options)}}const cM={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new se(s,o),new se(a,c),new se(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-h),new se(f,1-p),new se(_,1-g)]:[new se(a,1-c),new se(u,1-h),new se(d,1-p),new se(m,1-g)]}};function lM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sc extends ir{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sc(e.radius,e.detail)}}class Lo extends ir{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lo(e.radius,e.detail)}}class wc extends ut{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,d=new N,p=new se;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=s+m/n*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const v=g+m,y=v,b=v+n+1,I=v+n+2,R=v+1;a.push(y,b,R),a.push(b,I,R)}}this.setIndex(a),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ec extends ut{constructor(e=new Pr([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Oe(i,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const p=f.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];fi.isClockWise(v)===!0&&(p[m]=v.reverse())}const _=fi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){const v=d[m];i.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){const v=_[m],y=v[0]+h,b=v[1]+h,I=v[2]+h;n.push(y,b,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return uM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Ec(n,e.curveSegments)}}function uM(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Io extends ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new N,f=new N,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],y=g/n;let b=0;g===0&&o===0?b=.5/t:g===n&&c===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const R=I/t;h.x=-e*Math.cos(i+R*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+R*s)*Math.sin(o+y*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+b,1-y),v.push(l++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const y=u[g][v+1],b=u[g][v],I=u[g+1][v],R=u[g+1][v+1];(g!==0||o>0)&&d.push(y,b,R),(g!==n-1||c<Math.PI)&&d.push(b,I,R)}this.setIndex(d),this.setAttribute("position",new Oe(p,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ac extends ir{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class Tc extends ut{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new N,h=new N,f=new N;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,v=(i+1)*d+p;o.push(_,m,v),o.push(m,g,v)}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cc extends ut{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new N,f=new N,d=new N,p=new N,_=new N,m=new N,g=new N;for(let y=0;y<=n;++y){const b=y/n*s*Math.PI*2;v(b,s,o,e,d),v(b+.01,s,o,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let I=0;I<=i;++I){const R=I/i*Math.PI*2,T=-t*Math.cos(R),O=t*Math.sin(R);h.x=d.x+(T*g.x+O*_.x),h.y=d.y+(T*g.y+O*_.y),h.z=d.z+(T*g.z+O*_.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(y/n),u.push(I/i)}}for(let y=1;y<=n;y++)for(let b=1;b<=i;b++){const I=(i+1)*(y-1)+(b-1),R=(i+1)*y+(b-1),T=(i+1)*y+b,O=(i+1)*(y-1)+b;a.push(I,R,O),a.push(R,T,O)}this.setIndex(a),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(u,2));function v(y,b,I,R,T){const O=Math.cos(y),S=Math.sin(y),w=I/b*y,F=Math.cos(w);T.x=R*(2+F)*.5*O,T.y=R*(2+F)*S*.5,T.z=R*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Rc extends ut{constructor(e=new Ku(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,c=new N,l=new se;let u=new N;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Oe(h,3)),this.setAttribute("normal",new Oe(f,3)),this.setAttribute("uv",new Oe(d,2));function _(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),v(),g()}function m(y){u=e.getPointAt(y/t,u);const b=o.normals[y],I=o.binormals[y];for(let R=0;R<=i;R++){const T=R/i*Math.PI*2,O=Math.sin(T),S=-Math.cos(T);c.x=S*b.x+O*I.x,c.y=S*b.y+O*I.y,c.z=S*b.z+O*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let b=1;b<=i;b++){const I=(i+1)*(y-1)+(b-1),R=(i+1)*y+(b-1),T=(i+1)*y+b,O=(i+1)*(y-1)+b;p.push(I,R,O),p.push(R,T,O)}}function v(){for(let y=0;y<=t;y++)for(let b=0;b<=i;b++)l.x=y/t,l.y=b/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Rc(new Za[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ym extends ut{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new N,s=new N;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let p=f,_=f+d;p<_;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),v=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,v),Rf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Rf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Rf(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Pf=Object.freeze({__proto__:null,BoxGeometry:Br,CapsuleGeometry:_c,CircleGeometry:yc,ConeGeometry:vc,CylinderGeometry:Rs,DodecahedronGeometry:xc,EdgesGeometry:pm,ExtrudeGeometry:Mc,IcosahedronGeometry:Sc,LatheGeometry:Po,OctahedronGeometry:Lo,PlaneGeometry:As,PolyhedronGeometry:ir,RingGeometry:wc,ShapeGeometry:Ec,SphereGeometry:Io,TetrahedronGeometry:Ac,TorusGeometry:Tc,TorusKnotGeometry:Cc,TubeGeometry:Rc,WireframeGeometry:ym});class vm extends wn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class xm extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qu extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bm extends Qu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ja extends wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mm extends wn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Sm extends wn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class eh extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wm extends wn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Le(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nr,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Em extends mn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ar(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Am(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Tm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function th(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function hM(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*i;if(!(p<t||p>=n)){h.push(l.times[d]);for(let _=0;_<u;++_)f.push(l.values[d*u+_])}}h.length!==0&&(l.times=Ar(h,l.times.constructor),l.values=Ar(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function fM(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let _;if(s<=a.times[0]){const g=u,v=h-u;_=a.values.slice(g,v)}else if(s>=a.times[p]){const g=p*h+u,v=g+h-u;_=a.values.slice(g,v)}else{const g=a.createInterpolant(),v=u,y=h-u;g.evaluate(s),_=g.resultBuffer.slice(v,y)}c==="quaternion"&&new fn().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let g=0;g<m;++g){const v=g*d+f;if(c==="quaternion")fn.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const y=d-f*2;for(let b=0;b<y;++b)l.values[v+b]-=_[b]}}}return r.blendMode=Iu,r}const dM={convertArray:Ar,isTypedArray:Am,getKeyframeOrder:Tm,sortedArray:hu,flattenJSON:th,subclip:hM,makeClipAdditive:fM};class Do{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cm extends Do{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sr,endingEnd:Sr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wr:s=e,a=2*t-n;break;case oo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wr:o=e,c=2*n-t;break;case oo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,y=(-1-d)*m+(1.5+d)*_+.5*p,b=d*m-d*_;for(let I=0;I!==a;++I)s[I]=g*o[u+I]+v*o[l+I]+y*o[c+I]+b*o[h+I];return s}}class nh extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class Rm extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class li{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case so:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Am(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===za,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=so;class kr extends li{}kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=ro;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class ih extends li{}ih.prototype.ValueTypeName="color";class _o extends li{}_o.prototype.ValueTypeName="number";class Pm extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)fn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class zr extends li{InterpolantFactoryMethodLinear(e){return new Pm(this.times,this.values,this.getValueSize(),e)}}zr.prototype.ValueTypeName="quaternion";zr.prototype.DefaultInterpolation=so;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends li{}Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=ro;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends li{}Nr.prototype.ValueTypeName="vector";class Ur{constructor(e,t=-1,n,i=ic){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(mM(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(li.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Tm(c);c=hu(c,1,u),l=hu(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new _o(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,_){if(d.length!==0){const m=[],g=[];th(d,m,g,p),m.length!==0&&_.push(new h(f,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let v=0;v!==f[p].morphTargets.length;++v){const y=f[p];m.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new _o(".morphTargetInfluence["+_+"]",m,g))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Nr,d+".position",f,"pos",i),n(zr,d+".quaternion",f,"rot",i),n(Nr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _o;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return ih;case"quaternion":return zr;case"bool":case"boolean":return kr;case"string":return Vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function mM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pM(r.type);if(r.times===void 0){const t=[],n=[];th(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ri={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class rh{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const Lm=new rh;class gn{constructor(e){this.manager=e!==void 0?e:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class gM extends Error{constructor(e,t){super(e),this.response=t}}class oi extends gn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ri.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=wi[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){v();function v(){h.read().then(({done:y,value:b})=>{if(y)g.close();else{_+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let R=0,T=u.length;R<T;R++){const O=u[R];O.onProgress&&O.onProgress(I)}g.enqueue(b),v()}})}}});return new Response(m)}else throw new gM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Ri.add(e,l);const u=wi[e];delete wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=wi[e];if(u===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _M extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new oi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ur.parse(e[n]);t.push(i)}return t}}class yM extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new mc,c=new oi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const d=s.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=Qt),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=Qt),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class yo extends gn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ri.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ho("img");function c(){u(),Ri.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vM extends gn{constructor(e){super(e)}load(e,t,n,i){const s=new To;s.colorSpace=Zt;const o=new yo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class Im extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Rr,a=new oi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:hn,o.wrapT=l.wrapT!==void 0?l.wrapT:hn,o.magFilter=l.magFilter!==void 0?l.magFilter:Qt,o.minFilter=l.minFilter!==void 0?l.minFilter:Qt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?o.colorSpace=l.colorSpace:l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Ni),l.mipmapCount===1&&(o.minFilter=Qt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Dm extends gn{constructor(e){super(e)}load(e,t,n,i){const s=new en,o=new yo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class rr extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Nm extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yl=new Ye,Lf=new N,If=new N;class sh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lf),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xM extends sh{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oh extends rr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new xM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Df=new Ye,Ys=new N,vl=new N;class bM extends sh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df)}}class ah extends rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MM extends sh{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ch extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new MM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lh extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Um extends rr{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Om{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new N)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Fm extends rr{constructor(e=new Om,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Pc extends gn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new oi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Pc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Le().setHex(o.value);break;case"v2":i.uniforms[s].value=new se().fromArray(o.value);break;case"v3":i.uniforms[s].value=new N().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Dt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new pt().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Ye().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new se().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:vm,SpriteMaterial:Wu,RawShaderMaterial:xm,ShaderMaterial:Kn,PointsMaterial:qu,MeshPhysicalMaterial:bm,MeshStandardMaterial:Qu,MeshPhongMaterial:ja,MeshToonMaterial:Mm,MeshNormalMaterial:Sm,MeshLambertMaterial:eh,MeshDepthMaterial:lc,MeshDistanceMaterial:Hu,MeshBasicMaterial:si,MeshMatcapMaterial:wm,LineDashedMaterial:Em,LineBasicMaterial:mn,Material:wn};return new t[e]}}class Ja{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bm extends ut{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class km extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new oi(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=s(d,m.buffer),v=ds(m.type,g),y=new dc(v,m.stride);return y.uuid=m.uuid,t[p]=y,y}function s(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new Bm:new ut,a=e.data.index;if(a!==void 0){const d=ds(a.type,a.array);o.setIndex(new Pt(d,1))}const c=e.data.attributes;for(const d in c){const p=c[d];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Ir(m,p.itemSize,p.offset,p.normalized)}else{const m=ds(p.type,p.array),g=p.isInstancedBufferAttribute?ws:Pt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const p=l[d],_=[];for(let m=0,g=p.length;m<g;m++){const v=p[m];let y;if(v.isInterleavedBufferAttribute){const b=i(e.data,v.data);y=new Ir(b,v.itemSize,v.offset,v.normalized)}else{const b=ds(v.type,v.array);y=new Pt(b,v.itemSize,v.normalized)}v.name!==void 0&&(y.name=v.name),_.push(y)}o.morphAttributes[d]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,p=h.length;d!==p;++d){const _=h[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new N;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new bn(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class SM extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Ja.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new oi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ja.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new oi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Pr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Ro().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new km;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Pf?a=Pf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Pc;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ur.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:ds(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new rh(t);s=new yo(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new Rr(g.data,g.width,g.height)))}i[h.uuid]=new Er(d)}else{const d=a(h.url);i[h.uuid]=new Er(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:ds(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new yo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=await s(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Rr(p.data,p.width,p.height)))}n[c.uuid]=new Er(u)}else{const u=await s(c.url);n[c.uuid]=new Er(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new To,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Rr:u=new en,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,wM)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Nf),u.wrapT=n(a.wrap[1],Nf)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Uf)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Uf)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":o=new fc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Le(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new hc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new uc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new rn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Ts(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new lh(e.color,e.intensity);break;case"DirectionalLight":o=new ch(e.color,e.intensity);break;case"PointLight":o=new ah(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Um(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new oh(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new Nm(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Fm().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new Xu(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new Jt(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;o=new sm(u,h,f),o.instanceMatrix=new ws(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new ws(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=c(e.material),o=new om(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const m=new Ln;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const g=new bn;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:g}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":o=new rm;break;case"Line":o=new Ui(a(e.geometry),c(e.material));break;case"LineLoop":o=new am(a(e.geometry),c(e.material));break;case"LineSegments":o=new ai(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new cm(a(e.geometry),c(e.material));break;case"Sprite":o=new im(c(e.material));break;case"Group":o=new Xi;break;case"Bone":o=new pc;break;default:o=new Rt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const wM={UVMapping:tc,CubeReflectionMapping:Di,CubeRefractionMapping:Ki,EquirectangularReflectionMapping:to,EquirectangularRefractionMapping:no,CubeUVReflectionMapping:Es},Nf={RepeatWrapping:Ti,ClampToEdgeWrapping:hn,MirroredRepeatWrapping:io},Uf={NearestFilter:$t,NearestMipmapNearestFilter:Xa,NearestMipmapLinearFilter:js,LinearFilter:Qt,LinearMipmapNearestFilter:wu,LinearMipmapLinearFilter:Ni};class EM extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ri.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ri.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ri.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ri.add(e,c),s.manager.itemStart(e)}}let Ea;class uh{static getContext(){return Ea===void 0&&(Ea=new(window.AudioContext||window.webkitAudioContext)),Ea}static setContext(e){Ea=e}}class AM extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new oi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);uh.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const Of=new Ye,Ff=new Ye,hr=new Ye;class TM{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new rn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new rn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,hr.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Cr*t.fov*.5)/t.zoom;let a,c;Ff.elements[12]=-i,Of.elements[12]=i,a=-o*t.aspect+s,c=o*t.aspect+s,hr.elements[0]=2*t.near/(c-a),hr.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(hr),a=-o*t.aspect-s,c=o*t.aspect-s,hr.elements[0]=2*t.near/(c-a),hr.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(hr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Ff),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Of)}}class zm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bf(){return(typeof performance>"u"?Date:performance).now()}const fr=new N,kf=new fn,CM=new N,dr=new N;class RM extends Rt{constructor(){super(),this.type="AudioListener",this.context=uh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new zm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(fr,kf,CM),dr.set(0,0,-1).applyQuaternion(kf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(fr.x,i),t.positionY.linearRampToValueAtTime(fr.y,i),t.positionZ.linearRampToValueAtTime(fr.z,i),t.forwardX.linearRampToValueAtTime(dr.x,i),t.forwardY.linearRampToValueAtTime(dr.y,i),t.forwardZ.linearRampToValueAtTime(dr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(fr.x,fr.y,fr.z),t.setOrientation(dr.x,dr.y,dr.z,n.x,n.y,n.z)}}class Vm extends Rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const pr=new N,zf=new fn,PM=new N,mr=new N;class LM extends Vm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(pr,zf,PM),mr.set(0,0,1).applyQuaternion(zf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(pr.x,n),t.positionY.linearRampToValueAtTime(pr.y,n),t.positionZ.linearRampToValueAtTime(pr.z,n),t.orientationX.linearRampToValueAtTime(mr.x,n),t.orientationY.linearRampToValueAtTime(mr.y,n),t.orientationZ.linearRampToValueAtTime(mr.z,n)}else t.setPosition(pr.x,pr.y,pr.z),t.setOrientation(mr.x,mr.y,mr.z)}}class IM{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Hm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const hh="\\[\\]\\.:\\/",DM=new RegExp("["+hh+"]","g"),fh="[^"+hh+"]",NM="[^"+hh.replace("\\.","")+"]",UM=/((?:WC+[\/:])*)/.source.replace("WC",fh),OM=/(WCOD+)?/.source.replace("WCOD",NM),FM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),BM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),kM=new RegExp("^"+UM+OM+FM+BM+"$"),zM=["material","materials","bones","map"];class VM{constructor(e,t,n){const i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DM,"")}static parseTrackName(e){const t=kM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);zM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=VM;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class HM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=qn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let p=t[d];if(p===void 0){p=c++,t[d]=p,e.push(f);for(let _=0,m=o;_!==m;++_)s[_].push(new Et(f,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,m=e[_];t[m.uuid]=p,e[p]=m,t[d]=_,e[_]=f;for(let g=0,v=o;g!==v;++g){const y=s[g],b=y[_];let I=y[p];y[p]=b,I===void 0&&(I=new Et(f,n[g],i[g])),y[_]=I}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let d=0,p=i;d!==p;++d){const _=n[d],m=_[h],g=_[u];_[u]=m,_[h]=g}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],p=--o,_=e[p];t[d.uuid]=h,e[h]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let m=0,g=i;m!==g;++m){const v=n[m],y=v[f],b=v[p];v[h]=y,v[f]=b,v.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[h]=m[f],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let f=u,d=c.length;f!==d;++f){const p=c[f];h[f]=new Et(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Gm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Sr,endingEnd:Sr};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Iu:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ic:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Cp;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ap){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=wr,i.endingEnd=wr):(e?i.endingStart=this.zeroSlopeAtStart?wr:Sr:i.endingStart=oo,t?i.endingEnd=this.zeroSlopeAtEnd?wr:Sr:i.endingEnd=oo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const GM=new Float32Array(1);class WM extends mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new Hm(Et.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new nh(new Float32Array(2),new Float32Array(2),1,GM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Ur.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ic),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Gm(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ur.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class dh{constructor(e){this.value=e}clone(){return new dh(this.value.clone===void 0?this.value:this.value.clone())}}let XM=0;class qM extends mi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.usage=uo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class YM extends dc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class ZM{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Wm{constructor(e,t,n=0,i=1/0){this.ray=new Fr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fu(e,this,n,t),n.sort(Vf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)fu(e[i],this,n,t);return n.sort(Vf),n}}function Vf(r,e){return r.distance-e.distance}function fu(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)fu(i[s],e,t,!0)}}class du{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jM{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Hf=new se;class JM{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gf=new N,Aa=new N;class KM{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Gf.subVectors(e,this.start),Aa.subVectors(this.end,this.start);const n=Aa.dot(Aa);let s=Aa.dot(Gf)/n;return t&&(s=jt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Wf=new N;class $M extends Rt{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new ut,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Oe(i,3));const s=new mn({fog:!1,toneMapped:!1});this.cone=new ai(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Wf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Wf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Hi=new N,Ta=new Ye,xl=new Ye;class QM extends ai{constructor(e){const t=Xm(e),n=new ut,i=[],s=[],o=new Le(0,0,1),a=new Le(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Oe(i,3)),n.setAttribute("color",new Oe(s,3));const c=new mn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");xl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ta.multiplyMatrices(xl,a.matrixWorld),Hi.setFromMatrixPosition(Ta),i.setXYZ(o,Hi.x,Hi.y,Hi.z),Ta.multiplyMatrices(xl,a.parent.matrixWorld),Hi.setFromMatrixPosition(Ta),i.setXYZ(o+1,Hi.x,Hi.y,Hi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Xm(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Xm(r.children[t]));return e}class eS extends Jt{constructor(e,t,n){const i=new Io(t,4,2),s=new si({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const tS=new N,Xf=new Le,qf=new Le;class nS extends Rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Lo(t);i.rotateY(Math.PI*.5),this.material=new si({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Pt(o,3)),this.add(new Jt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Xf.copy(this.light.color),qf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Xf:qf;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(tS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class qm extends ai{constructor(e=10,t=10,n=4473924,i=8947848){n=new Le(n),i=new Le(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=f===s?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new ut;u.setAttribute("position",new Oe(c,3)),u.setAttribute("color",new Oe(l,3));const h=new mn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iS extends ai{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Le(s),o=new Le(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const _=h&1?s:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?s:o,d=e-e/n*h;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d;a.push(m,0,g),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d,a.push(m,0,g),c.push(f.r,f.g,f.b)}}const l=new ut;l.setAttribute("position",new Oe(a,3)),l.setAttribute("color",new Oe(c,3));const u=new mn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Yf=new N,Ca=new N,Zf=new N;class rS extends Rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ut;i.setAttribute("position",new Oe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new mn({fog:!1,toneMapped:!1});this.lightPlane=new Ui(i,s),this.add(this.lightPlane),i=new ut,i.setAttribute("position",new Oe([0,0,0,0,0,1],3)),this.targetLine=new Ui(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Yf.setFromMatrixPosition(this.light.matrixWorld),Ca.setFromMatrixPosition(this.light.target.matrixWorld),Zf.subVectors(Ca,Yf),this.lightPlane.lookAt(Ca),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ca),this.targetLine.scale.z=Zf.length()}}const Ra=new N,Yt=new ac;class sS extends ai{constructor(e){const t=new ut,n=new mn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Oe(i,3)),t.setAttribute("color",new Oe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Le(16755200),u=new Le(16711680),h=new Le(43775),f=new Le(16777215),d=new Le(3355443);this.setColors(l,u,h,f,d)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Yt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Kt("c",t,e,Yt,0,0,-1),Kt("t",t,e,Yt,0,0,1),Kt("n1",t,e,Yt,-n,-i,-1),Kt("n2",t,e,Yt,n,-i,-1),Kt("n3",t,e,Yt,-n,i,-1),Kt("n4",t,e,Yt,n,i,-1),Kt("f1",t,e,Yt,-n,-i,1),Kt("f2",t,e,Yt,n,-i,1),Kt("f3",t,e,Yt,-n,i,1),Kt("f4",t,e,Yt,n,i,1),Kt("u1",t,e,Yt,n*.7,i*1.1,-1),Kt("u2",t,e,Yt,-n*.7,i*1.1,-1),Kt("u3",t,e,Yt,0,i*2,-1),Kt("cf1",t,e,Yt,-n,0,1),Kt("cf2",t,e,Yt,n,0,1),Kt("cf3",t,e,Yt,0,-i,1),Kt("cf4",t,e,Yt,0,i,1),Kt("cn1",t,e,Yt,-n,0,-1),Kt("cn2",t,e,Yt,n,0,-1),Kt("cn3",t,e,Yt,0,-i,-1),Kt("cn4",t,e,Yt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kt(r,e,t,n,i,s,o){Ra.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Ra.x,Ra.y,Ra.z)}}const Pa=new Ln;class oS extends ai{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new ut;s.setIndex(new Pt(n,1)),s.setAttribute("position",new Pt(i,3)),super(s,new mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Pa.setFromObject(this.object),Pa.isEmpty())return;const t=Pa.min,n=Pa.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aS extends ai{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ut;s.setIndex(new Pt(n,1)),s.setAttribute("position",new Oe(i,3)),super(s,new mn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class cS extends Ui{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new ut;o.setAttribute("position",new Oe(s,3)),o.computeBoundingSphere(),super(o,new mn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new ut;c.setAttribute("position",new Oe(a,3)),c.computeBoundingSphere(),this.add(new Jt(c,new si({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const jf=new N;let La,bl;class lS extends Rt{constructor(e=new N(0,0,1),t=new N(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",La===void 0&&(La=new ut,La.setAttribute("position",new Oe([0,0,0,0,1,0],3)),bl=new Rs(0,.5,1,5,1),bl.translate(0,-.5,0)),this.position.copy(t),this.line=new Ui(La,new mn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Jt(bl,new si({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{jf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(jf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class uS extends ai{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ut;i.setAttribute("position",new Oe(t,3)),i.setAttribute("color",new Oe(n,3));const s=new mn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Le,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class hS{constructor(){this.type="ShapePath",this.color=new Le,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new fo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const v=[];for(let y=0,b=g.length;y<b;y++){const I=g[y],R=new Pr;R.curves=I.curves,v.push(R)}return v}function n(g,v){const y=v.length;let b=!1;for(let I=y-1,R=0;R<y;I=R++){let T=v[I],O=v[R],S=O.x-T.x,w=O.y-T.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(T=v[R],S=-S,O=v[I],w=-w),g.y<T.y||g.y>O.y)continue;if(g.y===T.y){if(g.x===T.x)return!0}else{const F=w*(g.x-T.x)-S*(g.y-T.y);if(F===0)return!0;if(F<0)continue;b=!b}}else{if(g.y!==T.y)continue;if(O.x<=g.x&&g.x<=T.x||T.x<=g.x&&g.x<=O.x)return!0}}return b}const i=fi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Pr,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let g=0,v=s.length;g<v;g++)a=s[g],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[p]&&p++,f[p]={s:new Pr,p:_},f[p].s.curves=a.curves,u&&p++,d[p]=[]):d[p].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let g=!1,v=0;for(let y=0,b=f.length;y<b;y++)h[y]=[];for(let y=0,b=f.length;y<b;y++){const I=d[y];for(let R=0;R<I.length;R++){const T=I[R];let O=!0;for(let S=0;S<f.length;S++)n(T.p,f[S].p)&&(y!==S&&v++,O?(O=!1,h[S].push(T)):g=!0);O&&h[y].push(T)}}v>0&&g===!1&&(d=h)}let m;for(let g=0,v=f.length;g<v;g++){c=f[g].s,l.push(c),m=d[g];for(let y=0,b=m.length;y<b;y++)c.holes.push(m[y].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const fS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Su,AddEquation:Wi,AddOperation:hp,AdditiveAnimationBlendMode:Iu,AdditiveBlending:Al,AgXToneMapping:gp,AlphaFormat:xp,AlwaysCompare:Bp,AlwaysDepth:rp,AlwaysStencilFunc:iu,AmbientLight:lh,AnimationAction:Gm,AnimationClip:Ur,AnimationLoader:_M,AnimationMixer:WM,AnimationObjectGroup:HM,AnimationUtils:dM,ArcCurve:lm,ArrayCamera:em,ArrowHelper:lS,AttachedBindMode:Ll,Audio:Vm,AudioAnalyser:IM,AudioContext:uh,AudioListener:RM,AudioLoader:AM,AxesHelper:uS,BackSide:Pn,BasicDepthPacking:Rp,BasicShadowMap:Eg,BatchedMesh:om,Bone:pc,BooleanKeyframeTrack:kr,Box2:JM,Box3:Ln,Box3Helper:aS,BoxGeometry:Br,BoxHelper:oS,BufferAttribute:Pt,BufferGeometry:ut,BufferGeometryLoader:km,ByteType:yp,Cache:Ri,Camera:ac,CameraHelper:sS,CanvasTexture:Fb,CapsuleGeometry:_c,CatmullRomCurve3:um,CineonToneMapping:pp,CircleGeometry:yc,ClampToEdgeWrapping:hn,Clock:zm,Color:Le,ColorKeyframeTrack:ih,ColorManagement:Lt,CompressedArrayTexture:Ub,CompressedCubeTexture:Ob,CompressedTexture:mc,CompressedTextureLoader:yM,ConeGeometry:vc,ConstantAlphaFactor:tp,ConstantColorFactor:Qd,CubeCamera:Xp,CubeReflectionMapping:Di,CubeRefractionMapping:Ki,CubeTexture:To,CubeTextureLoader:vM,CubeUVReflectionMapping:Es,CubicBezierCurve:Zu,CubicBezierCurve3:hm,CubicInterpolant:Cm,CullFaceBack:El,CullFaceFront:zd,CullFaceFrontBack:wg,CullFaceNone:kd,Curve:ci,CurvePath:dm,CustomBlending:Vd,CustomToneMapping:mp,CylinderGeometry:Rs,Cylindrical:jM,Data3DTexture:Fu,DataArrayTexture:sc,DataTexture:Rr,DataTextureLoader:Im,DataUtils:N_,DecrementStencilOp:Fg,DecrementWrapStencilOp:kg,DefaultLoadingManager:Lm,DepthFormat:Yi,DepthStencilFormat:Lr,DepthTexture:Vu,DetachedBindMode:_p,DirectionalLight:ch,DirectionalLightHelper:rS,DiscreteInterpolant:Rm,DisplayP3ColorSpace:rc,DodecahedronGeometry:xc,DoubleSide:ni,DstAlphaFactor:Zd,DstColorFactor:Jd,DynamicCopyUsage:e_,DynamicDrawUsage:Zg,DynamicReadUsage:Kg,EdgesGeometry:pm,EllipseCurve:gc,EqualCompare:Np,EqualDepth:op,EqualStencilFunc:Gg,EquirectangularReflectionMapping:to,EquirectangularRefractionMapping:no,Euler:Ao,EventDispatcher:mi,ExtrudeGeometry:Mc,FileLoader:oi,Float16BufferAttribute:z_,Float32BufferAttribute:Oe,Float64BufferAttribute:V_,FloatType:ii,Fog:hc,FogExp2:uc,FramebufferTexture:Nb,FrontSide:di,Frustum:Co,GLBufferAttribute:ZM,GLSL1:n_,GLSL3:ru,GreaterCompare:Up,GreaterDepth:cp,GreaterEqualCompare:Fp,GreaterEqualDepth:ap,GreaterEqualStencilFunc:Yg,GreaterStencilFunc:Xg,GridHelper:qm,Group:Xi,HalfFloatType:xs,HemisphereLight:Nm,HemisphereLightHelper:nS,IcosahedronGeometry:Sc,ImageBitmapLoader:EM,ImageLoader:yo,ImageUtils:Ou,IncrementStencilOp:Og,IncrementWrapStencilOp:Bg,InstancedBufferAttribute:ws,InstancedBufferGeometry:Bm,InstancedInterleavedBuffer:YM,InstancedMesh:sm,Int16BufferAttribute:B_,Int32BufferAttribute:k_,Int8BufferAttribute:U_,IntType:Eu,InterleavedBuffer:dc,InterleavedBufferAttribute:Ir,Interpolant:Do,InterpolateDiscrete:ro,InterpolateLinear:so,InterpolateSmooth:za,InvertStencilOp:zg,KeepStencilOp:vr,KeyframeTrack:li,LOD:rm,LatheGeometry:Po,Layers:oc,LessCompare:Dp,LessDepth:sp,LessEqualCompare:Nu,LessEqualDepth:eo,LessEqualStencilFunc:Wg,LessStencilFunc:Hg,Light:rr,LightProbe:Fm,Line:Ui,Line3:KM,LineBasicMaterial:mn,LineCurve:ju,LineCurve3:fm,LineDashedMaterial:Em,LineLoop:am,LineSegments:ai,LinearDisplayP3ColorSpace:Eo,LinearEncoding:Du,LinearFilter:Qt,LinearInterpolant:nh,LinearMipMapLinearFilter:Pg,LinearMipMapNearestFilter:Rg,LinearMipmapLinearFilter:Ni,LinearMipmapNearestFilter:wu,LinearSRGBColorSpace:pi,LinearToneMapping:fp,LinearTransfer:ao,Loader:gn,LoaderUtils:Ja,LoadingManager:rh,LoopOnce:Ap,LoopPingPong:Cp,LoopRepeat:Tp,LuminanceAlphaFormat:Mp,LuminanceFormat:bp,MOUSE:_r,Material:wn,MaterialLoader:Pc,MathUtils:br,Matrix3:pt,Matrix4:Ye,MaxEquation:Pl,Mesh:Jt,MeshBasicMaterial:si,MeshDepthMaterial:lc,MeshDistanceMaterial:Hu,MeshLambertMaterial:eh,MeshMatcapMaterial:wm,MeshNormalMaterial:Sm,MeshPhongMaterial:ja,MeshPhysicalMaterial:bm,MeshStandardMaterial:Qu,MeshToonMaterial:Mm,MinEquation:Rl,MirroredRepeatWrapping:io,MixOperation:up,MultiplyBlending:Cl,MultiplyOperation:wo,NearestFilter:$t,NearestMipMapLinearFilter:Cg,NearestMipMapNearestFilter:Tg,NearestMipmapLinearFilter:js,NearestMipmapNearestFilter:Xa,NeverCompare:Ip,NeverDepth:ip,NeverStencilFunc:Vg,NoBlending:Pi,NoColorSpace:Xn,NoToneMapping:Li,NormalAnimationBlendMode:ic,NormalBlending:Tr,NotEqualCompare:Op,NotEqualDepth:lp,NotEqualStencilFunc:qg,NumberKeyframeTrack:_o,Object3D:Rt,ObjectLoader:SM,ObjectSpaceNormalMap:Lp,OctahedronGeometry:Lo,OneFactor:Xd,OneMinusConstantAlphaFactor:np,OneMinusConstantColorFactor:ep,OneMinusDstAlphaFactor:jd,OneMinusDstColorFactor:Kd,OneMinusSrcAlphaFactor:Wa,OneMinusSrcColorFactor:Yd,OrthographicCamera:Ts,P3Primaries:lo,PCFShadowMap:Mu,PCFSoftShadowMap:ec,PMREMGenerator:ou,Path:fo,PerspectiveCamera:rn,Plane:Ei,PlaneGeometry:As,PlaneHelper:cS,PointLight:ah,PointLightHelper:eS,Points:cm,PointsMaterial:qu,PolarGridHelper:iS,PolyhedronGeometry:ir,PositionalAudio:LM,PropertyBinding:Et,PropertyMixer:Hm,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:Ku,Quaternion:fn,QuaternionKeyframeTrack:zr,QuaternionLinearInterpolant:Pm,RED_GREEN_RGTC2_Format:tu,RED_RGTC1_Format:Ep,REVISION:So,RGBADepthPacking:Pp,RGBAFormat:Bn,RGBAIntegerFormat:Pu,RGBA_ASTC_10x10_Format:jl,RGBA_ASTC_10x5_Format:ql,RGBA_ASTC_10x6_Format:Yl,RGBA_ASTC_10x8_Format:Zl,RGBA_ASTC_12x10_Format:Jl,RGBA_ASTC_12x12_Format:Kl,RGBA_ASTC_4x4_Format:Bl,RGBA_ASTC_5x4_Format:kl,RGBA_ASTC_5x5_Format:zl,RGBA_ASTC_6x5_Format:Vl,RGBA_ASTC_6x6_Format:Hl,RGBA_ASTC_8x5_Format:Gl,RGBA_ASTC_8x6_Format:Wl,RGBA_ASTC_8x8_Format:Xl,RGBA_BPTC_Format:ka,RGBA_ETC2_EAC_Format:Fl,RGBA_PVRTC_2BPPV1_Format:Ul,RGBA_PVRTC_4BPPV1_Format:Nl,RGBA_S3TC_DXT1_Format:Oa,RGBA_S3TC_DXT3_Format:Fa,RGBA_S3TC_DXT5_Format:Ba,RGB_BPTC_SIGNED_Format:$l,RGB_BPTC_UNSIGNED_Format:Ql,RGB_ETC1_Format:Lu,RGB_ETC2_Format:Ol,RGB_PVRTC_2BPPV1_Format:Dl,RGB_PVRTC_4BPPV1_Format:Il,RGB_S3TC_DXT1_Format:Ua,RGFormat:wp,RGIntegerFormat:Ru,RawShaderMaterial:xm,Ray:Fr,Raycaster:Wm,Rec709Primaries:co,RectAreaLight:Um,RedFormat:Sp,RedIntegerFormat:Cu,ReinhardToneMapping:dp,RenderTarget:Vp,RepeatWrapping:Ti,ReplaceStencilOp:Ug,ReverseSubtractEquation:Gd,RingGeometry:wc,SIGNED_RED_GREEN_RGTC2_Format:nu,SIGNED_RED_RGTC1_Format:eu,SRGBColorSpace:Zt,SRGBTransfer:Ot,Scene:fc,ShaderChunk:et,ShaderLib:ti,ShaderMaterial:Kn,ShadowMaterial:vm,Shape:Pr,ShapeGeometry:Ec,ShapePath:hS,ShapeUtils:fi,ShortType:vp,Skeleton:Ro,SkeletonHelper:QM,SkinnedMesh:Xu,Source:Er,Sphere:bn,SphereGeometry:Io,Spherical:du,SphericalHarmonics3:Om,SplineCurve:$u,SpotLight:oh,SpotLightHelper:$M,Sprite:im,SpriteMaterial:Wu,SrcAlphaFactor:Ga,SrcAlphaSaturateFactor:$d,SrcColorFactor:qd,StaticCopyUsage:Qg,StaticDrawUsage:uo,StaticReadUsage:Jg,StereoCamera:TM,StreamCopyUsage:t_,StreamDrawUsage:jg,StreamReadUsage:$g,StringKeyframeTrack:Vr,SubtractEquation:Hd,SubtractiveBlending:Tl,TOUCH:yr,TangentSpaceNormalMap:nr,TetrahedronGeometry:Ac,Texture:en,TextureLoader:Dm,TorusGeometry:Tc,TorusKnotGeometry:Cc,Triangle:Fn,TriangleFanDrawMode:Dg,TriangleStripDrawMode:Ig,TrianglesDrawMode:Lg,TubeGeometry:Rc,TwoPassDoubleSide:Ag,UVMapping:tc,Uint16BufferAttribute:Bu,Uint32BufferAttribute:ku,Uint8BufferAttribute:O_,Uint8ClampedBufferAttribute:F_,Uniform:dh,UniformsGroup:qM,UniformsLib:Ae,UniformsUtils:Wp,UnsignedByteType:Ii,UnsignedInt248Type:qi,UnsignedIntType:Ci,UnsignedShort4444Type:Au,UnsignedShort5551Type:Tu,UnsignedShortType:nc,VSMShadowMap:hi,Vector2:se,Vector3:N,Vector4:Dt,VectorKeyframeTrack:Nr,VideoTexture:Db,WebGL1Renderer:tm,WebGL3DRenderTarget:M_,WebGLArrayRenderTarget:b_,WebGLCoordinateSystem:ri,WebGLCubeRenderTarget:qp,WebGLMultipleRenderTargets:S_,WebGLRenderTarget:Yn,WebGLRenderer:Gu,WebGLUtils:Qp,WebGPUCoordinateSystem:bs,WireframeGeometry:ym,WrapAroundEnding:oo,ZeroCurvatureEnding:Sr,ZeroFactor:Wd,ZeroSlopeEnding:wr,ZeroStencilOp:Ng,_SRGBAFormat:qa,createCanvasElement:zp,sRGBEncoding:Zi},Symbol.toStringTag,{value:"Module"}));function dS(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Gi{constructor(){Nt(this,"allVertices",{});Nt(this,"isolatedVertices",{});Nt(this,"connectedVertices",{});Nt(this,"sortedConnectedValues",[]);Nt(this,"needsSort",!1);Nt(this,"emitter",dS());Nt(this,"emit",this.emitter.emit.bind(this.emitter));Nt(this,"on",this.emitter.on.bind(this.emitter));Nt(this,"off",this.emitter.off.bind(this.emitter));Nt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class pS{constructor(e,t,n){Nt(this,"key");Nt(this,"stage");Nt(this,"callback");Nt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class mS extends Gi{constructor(t,n,i){super();Nt(this,"key");Nt(this,"scheduler");Nt(this,"callback",(t,n)=>n());Nt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const s=new pS(this,t,n);return this.add(t,s,i),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(s=>{const o=performance.now();s.run(i??t);const a=performance.now()-o;n[s.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class gS extends Gi{constructor(t){super();Nt(this,"lastTime",performance.now());Nt(this,"clampDeltaTo",.1);Nt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new mS(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},s=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-s,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Rn=(r,e)=>{const t=bu(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});Hn(()=>{i(),n&&n()})};function _S(r,e){const t={current:void 0};return Rn(r,n=>{t.current=n}),t}const Cn=r=>{const e=on(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},Lc=new rn(75,0,.1,1e3);Lc.position.z=5;Lc.lookAt(0,0,0);const yS=()=>Lc,vS=r=>{Rn(r.size,e=>{if(r.camera.current===Lc){const t=r.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),r.invalidate()}})},xS=Symbol("use-legacy-frame-compatibility-context"),bS=()=>{const r={useFrameOrders:[],useRenderOrders:[]};return zn(xS,r),r},MS=r=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await _g(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((u,h)=>{var f;(u===0||l)&&((f=h==null?void 0:h.dispose)==null||f.call(h),e.disposableObjects.delete(h))}),e.shouldDispose=!1)},collectDisposableObjects:(l,u)=>{const h=u??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&h.push(l),Object.entries(l).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,h)})),h},addDisposableObjects:l=>{l.forEach(u=>{const h=e.disposableObjects.get(u);h?e.disposableObjects.set(u,h+1):e.disposableObjects.set(u,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(u=>{const h=e.disposableObjects.get(u);h&&h>0&&e.disposableObjects.set(u,h-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=bS(),n=new gS,i=n.createStage(Symbol("threlte-main-stage")),s=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(l,u){a.shouldRender()&&u()}}),o=s.createTask(Symbol("threlte-auto-render-task"),l=>{t.length>0||a.renderer.render(a.scene,a.camera.current)}),a={size:bu([r.userSize,r.parentSize],([l,u])=>l||u),camera:Cn(yS()),scene:new fc,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:Cn(r.colorSpace),toneMapping:Cn(r.toneMapping),dpr:Cn(r.dpr),useLegacyLights:Cn(r.useLegacyLights),shadows:Cn(r.shadows),colorManagementEnabled:Cn(r.colorManagementEnabled),renderMode:Cn(r.renderMode),autoRender:Cn(r.autoRender),scheduler:n,mainStage:i,renderStage:s,autoRenderTask:o,shouldRender:()=>a.renderMode.current==="always"||a.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||a.renderMode.current==="manual"&&e.advance};vS(a);const c=Cn({});return zn("threlte",a),zn("threlte-internal-context",e),zn("threlte-user-context",c),a},ph=typeof window<"u",SS=()=>{const r=Cn({width:0,height:0});if(!ph)return{parentSize:r,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=a=>{i.disconnect(),s.disconnect(),i.observe(a),s.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===r.current.width&&l===r.current.height||r.set({width:c,height:l})}),s=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),o=a=>{t=a;const c=t.parentElement;c&&(r.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Hn(()=>{i.disconnect(),s.disconnect()}),{parentSize:r,parentSizeAction:o}};function Ym(r,e){const t=on(r);let n=r;const i=t.subscribe(a=>n=a);return Hn(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const gi=()=>{const r=Vn("threlte");if(r===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return r},mh=Symbol("threlte-hierarchical-parent-context"),gh=()=>Vn(mh),wS=r=>zn(mh,r),ES=r=>{const e=Ym(r);return zn(mh,e),e};function AS(r){let e;const t=r[7].default,n=$i(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&64)&&Qi(n,t,i,i[6],e?tr(t,i[6],s,null):er(i[6]),null)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}const TS=()=>({onChildMount:Vn("threlte-hierarchical-object-on-mount"),onChildDestroy:Vn("threlte-hierarchical-object-on-destroy")});function CS(r,e,t){var m;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{onChildMount:a=void 0}=e;const c=g=>{a==null||a(g)};let{onChildDestroy:l=void 0}=e;const u=g=>{l==null||l(g)},{invalidate:h}=gi(),f=gh();sn(r,f,g=>t(5,n=g));let{parent:d=n}=e;const p=TS();o&&((m=p.onChildMount)==null||m.call(p,o),h());const _=Ym(o,(g,v)=>{var y,b;v&&((y=p.onChildDestroy)==null||y.call(p,v),h()),g&&((b=p.onChildMount)==null||b.call(p,g),h())});return Hn(()=>{var g;o&&((g=p.onChildDestroy)==null||g.call(p,o),h())}),zn("threlte-hierarchical-object-on-mount",c),zn("threlte-hierarchical-object-on-destroy",u),wS(_),r.$$set=g=>{"object"in g&&t(2,o=g.object),"onChildMount"in g&&t(3,a=g.onChildMount),"onChildDestroy"in g&&t(4,l=g.onChildDestroy),"parent"in g&&t(1,d=g.parent),"$$scope"in g&&t(6,s=g.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(1,d=n),r.$$.dirty&4&&_.set(o)},[f,d,o,a,l,n,s,i]}class RS extends Dn{constructor(e){super(),Nn(this,e,CS,AS,In,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function PS(r){let e;const t=r[1].default,n=$i(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Qi(n,t,i,i[4],e?tr(t,i[4],s,null):er(i[4]),null)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function LS(r){let e,t;return e=new RS({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[PS]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function IS(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class Zm extends Dn{constructor(e){super(),Nn(this,e,IS,LS,In,{object:0})}}const Jf=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},DS=()=>{zn("threlte-cache",[])},NS=()=>{const r=Vn("threlte-cache");if(!r)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(n,i)=>{for(const o of r)if(Jf(i,o.keys)){if(o.error)throw o.error;if(o.promise)return o.promise}const s={promise:n(),keys:i,value:void 0};return r.push(s),s.promise.catch(o=>{s.error=o}),s.promise},clear:n=>{const i=r.findIndex(s=>Jf(n,s.keys));i!==-1&&r.splice(i,1)}}},US=So.replace("dev",""),OS=Number.parseInt(US),FS=r=>{const e=on(void 0),t=(n,i)=>{r.renderer=new Gu({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(r.renderer)};return Rn([r.colorManagementEnabled],([n])=>{Lt.enabled=n}),Rn([e,r.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),Rn([e,r.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),Rn([e,r.size],([n,i])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(i.width,i.height)}),Rn([e,r.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=ec))}),Rn([e,r.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),Rn([e,r.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},jm=()=>Vn("threlte-internal-context");function Kf(r){let e,t;return e=new Zm({props:{object:r[0].scene,$$slots:{default:[BS]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function BS(r){let e;const t=r[15].default,n=$i(t,r,r[17],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&Qi(n,t,i,i[17],e?tr(t,i[17],s,null):er(i[17]),null)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function kS(r){let e,t,n,i,s=r[2]&&Kf(r);return{c(){e=Dd("canvas"),s&&s.c(),this.h()},l(o){e=Nd(o,"CANVAS",{class:!0});var a=Ud(e);s&&s.l(a),a.forEach(wt),this.h()},h(){Od(e,"class","svelte-o3oskp")},m(o,a){Ct(o,e,a),s&&s.m(e,null),r[16](e),t=!0,n||(i=yg(r[4].call(null,e)),n=!0)},p(o,[a]){o[2]?s?(s.p(o,a),a&4&&xe(s,1)):(s=Kf(o),s.c(),xe(s,1),s.m(e,null)):s&&(Mn(),Te(s,1,1,()=>{s=null}),Sn())},i(o){t||(xe(s),t=!0)},o(o){Te(s),t=!1},d(o){o&&wt(e),s&&s.d(),r[16](null),n=!1,i()}}}function zS(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{colorManagementEnabled:o=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=ph?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:h=ec}=e,{size:f=void 0}=e,{toneMapping:d=Su}=e,{useLegacyLights:p=!(OS>=155)}=e,{autoRender:_=!0}=e,m,g=on(!1);sn(r,g,w=>t(2,n=w));const v=on(f),{parentSize:y,parentSizeAction:b}=SS(),I=MS({colorManagementEnabled:o,colorSpace:a,dpr:c,renderMode:l,parentSize:y,autoRender:_,shadows:h,toneMapping:d,useLegacyLights:p,userSize:v}),R=jm(),T=I;Rn([g,T.autoRender],([w,F])=>(w&&F?T.autoRenderTask.start():T.autoRenderTask.stop(),()=>{T.autoRenderTask.stop()})),DS();const{createRenderer:O}=FS(T);Mo(()=>{O(m,u),T.renderer.setAnimationLoop(w=>{R.dispose(),T.scheduler.run(w),R.resetFrameInvalidation()}),g.set(!0)}),Hn(()=>{var w;R.dispose(!0),T.scheduler.dispose(),(w=T.renderer)==null||w.dispose()});function S(w){_u[w?"unshift":"push"](()=>{m=w,t(1,m)})}return r.$$set=w=>{"colorManagementEnabled"in w&&t(5,o=w.colorManagementEnabled),"colorSpace"in w&&t(6,a=w.colorSpace),"dpr"in w&&t(7,c=w.dpr),"renderMode"in w&&t(8,l=w.renderMode),"rendererParameters"in w&&t(9,u=w.rendererParameters),"shadows"in w&&t(10,h=w.shadows),"size"in w&&t(11,f=w.size),"toneMapping"in w&&t(12,d=w.toneMapping),"useLegacyLights"in w&&t(13,p=w.useLegacyLights),"autoRender"in w&&t(14,_=w.autoRender),"$$scope"in w&&t(17,s=w.$$scope)},r.$$.update=()=>{r.$$.dirty&2048&&v.set(f),r.$$.dirty&64&&T.colorSpace.set(a),r.$$.dirty&128&&T.dpr.set(c),r.$$.dirty&256&&T.renderMode.set(l),r.$$.dirty&16384&&T.autoRender.set(_),r.$$.dirty&1024&&T.shadows.set(h),r.$$.dirty&4096&&T.toneMapping.set(d)},[T,m,n,g,b,o,a,c,l,u,h,f,d,p,_,i,S,s]}class VS extends Dn{constructor(e){super(),Nn(this,e,zS,kS,In,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function HS(r){let e;const t=r[9].default,n=$i(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Qi(n,t,i,i[8],e?tr(t,i[8],s,null):er(i[8]),null)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}const $f="threlte-disposable-object-context";function GS(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=jm();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const d=Vn($f);sn(r,d,m=>t(7,i=m));const p=on(f??i??!0);sn(r,p,m=>t(6,n=m)),zn($f,p);let _=n?a(u):[];return c(_),Hn(()=>{l(_)}),r.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&p.set(f??i??!0),r.$$.dirty&116&&u!==h&&(l(_),t(5,_=n?a(u):[]),c(_),t(4,h=u))},[d,p,u,f,h,_,n,i,o,s]}class WS extends Dn{constructor(e){super(),Nn(this,e,GS,HS,In,{object:2,dispose:3})}}const XS=/^\s*class\s+/,qS=r=>typeof r!="function"?!1:XS.test(r.toString()),YS=r=>Array.isArray(r),Qf=(r,e)=>qS(r)?YS(e)?new r(...e):new r:r,ZS=r=>"isObject3D"in r,ed=r=>"dispose"in r,Jm=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Ml=Symbol("initialValueBeforeAttach"),jS=()=>{const{invalidate:r}=gi();let e=!1,t=Ml,n,i,s;const o=(c,l,u)=>{if(a(),!u){const h=c;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:h,key:f}=Jm(l,u);t=h[f],h[f]=c,i=h,s=f}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Ml&&(i[s]=t,t=Ml,i=void 0,s=void 0),e=!1,r())};return Hn(()=>{a()}),{update:o}},JS=r=>r&&r.isCamera,Km=r=>r&&r.isOrthographicCamera,$m=r=>r&&r.isPerspectiveCamera,KS=r=>$m(r)||Km(r),$S=()=>{const{invalidate:r,size:e,camera:t}=gi();let n,i;Hn(()=>{i==null||i()});const s=c=>{n&&(Km(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):$m(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(c,l)=>{if(i==null||i(),l||!KS(c)){n=void 0;return}n=c,i=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!JS(c)||!l||(t.set(c),r())}}},_h=()=>{const r=$a(),e=(n,i)=>{const s=r.$$.callbacks[n];s&&s.forEach(o=>{o(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!r.$$.callbacks[n],enumerable:!0}),e},QS=()=>{const r=_h(),e=[];let t,n=!1;const i=()=>{e.forEach(a=>a()),e.length=0,r("create",{ref:t,cleanup:a=>{e.push(a)}})},s=o=>{t=o,n&&i()};return Mo(()=>{i(),n=!0}),Hn(()=>{e.forEach(o=>o())}),{updateRef:s}},td=r=>!!(r!=null&&r.addEventListener),ew=()=>{const r=_h(),e=$a(),t=c=>{c!=null&&c.type&&r(c.type,c)},n=(c,l)=>{td(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},i=(c,l)=>{td(c)&&l.forEach(u=>{c.addEventListener(u,t)})},s=on(),o=on([]);return Rn([s,o],([c,l])=>(i(c,l),()=>n(c,l))),Mo(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{s.set(c)}}},tw=r=>{const t=Vn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(r)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let s=[];return Hn(()=>{s.forEach(l=>l())}),{updateRef:l=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,l);h&&s.push(h)})},updateProps:l=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,l)})},pluginsProps:i}},nw=new Set(["$$scope","$$slots","type","args","attach","instance"]),iw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),rw=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,nd=(r,e,t)=>{var n,i,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=r[e])==null?void 0:n.setScalar)=="function"&&!((i=r[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((s=r[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},sw=()=>{const{invalidate:r}=gi(),e=new Map,t=new Map,n=(s,o,a,c)=>{if(rw(a)){const h=e.get(o);if(h&&h.instance===s&&h.value===a)return;e.set(o,{instance:s,value:a})}const{key:l,target:u}=Jm(s,o);if(a!=null){const h=t.get(o);if(h)h(u,l,a);else{const f=nd(u,l,a);t.set(o,f),f(u,l,a)}}else nd(u,l,a)(u,l,a);c.manualCamera||iw.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,o,a)=>{var c;for(const l in o)!nw.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&n(s,l,o[l],a),r()}}},ow=r=>({ref:r&2}),id=r=>({ref:r[1]}),aw=r=>({ref:r&2}),rd=r=>({ref:r[1]});function sd(r){let e,t;return e=new WS({props:{object:r[1],dispose:r[0]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function cw(r){let e;const t=r[10].default,n=$i(t,r,r[11],id);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&Qi(n,t,i,i[11],e?tr(t,i[11],s,ow):er(i[11]),id)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function lw(r){let e,t;return e=new Zm({props:{object:r[1],$$slots:{default:[uw]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&2050&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function uw(r){let e;const t=r[10].default,n=$i(t,r,r[11],rd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&Qi(n,t,i,i[11],e?tr(t,i[11],s,aw):er(i[11]),rd)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function hw(r){let e=ed(r[1]),t,n,i,s,o,a,c=e&&sd(r);const l=[lw,cw],u=[];function h(f,d){return d&2&&(n=null),n==null&&(n=!!ZS(f[1])),n?0:1}return i=h(r,-1),s=u[i]=l[i](r),{c(){c&&c.c(),t=dn(),s.c(),o=Ft()},l(f){c&&c.l(f),t=pn(f),s.l(f),o=Ft()},m(f,d){c&&c.m(f,d),Ct(f,t,d),u[i].m(f,d),Ct(f,o,d),a=!0},p(f,[d]){d&2&&(e=ed(f[1])),e?c?(c.p(f,d),d&2&&xe(c,1)):(c=sd(f),c.c(),xe(c,1),c.m(t.parentNode,t)):c&&(Mn(),Te(c,1,1,()=>{c=null}),Sn());let p=i;i=h(f,d),i===p?u[i].p(f,d):(Mn(),Te(u[p],1,1,()=>{u[p]=null}),Sn(),s=u[i],s?s.p(f,d):(s=u[i]=l[i](f),s.c()),xe(s,1),s.m(o.parentNode,o))},i(f){a||(xe(c),xe(s),a=!0)},o(f){Te(c),Te(s),a=!1},d(f){f&&(wt(t),wt(o)),c&&c.d(f),u[i].d(f)}}}function fw(r,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=vs(e,n),s,{$$slots:o={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=gh();sn(r,p,F=>t(9,s=F));const _=QS();let m=Qf(c,l);_.updateRef(m);let g=!1;const v=()=>{if(!g){g=!0;return}t(1,m=Qf(c,l)),_.updateRef(m)};let{ref:y=m}=e;const b=ES(m),I=tw({ref:m,props:e}),R=(I==null?void 0:I.pluginsProps)??[],T=sw(),O=$S(),S=jS(),w=ew();return r.$$set=F=>{t(23,e=ji(ji({},e),Ha(F))),t(22,i=vs(e,n)),"is"in F&&t(4,c=F.is),"args"in F&&t(5,l=F.args),"attach"in F&&t(6,u=F.attach),"manual"in F&&t(7,h=F.manual),"makeDefault"in F&&t(8,f=F.makeDefault),"dispose"in F&&t(0,d=F.dispose),"ref"in F&&t(3,y=F.ref),"$$scope"in F&&t(11,a=F.$$scope)},r.$$.update=()=>{r.$$.dirty&48&&v(),r.$$.dirty&2&&t(3,y=m),r.$$.dirty&2&&b.set(m),T.updateProps(m,i,{manualCamera:h,pluginsProps:R}),r.$$.dirty&130&&O.update(m,h),r.$$.dirty&258&&O.makeDefaultCamera(m,f),r.$$.dirty&578&&S.update(m,s,u),r.$$.dirty&2&&w.updateRef(m),r.$$.dirty&2&&(I==null||I.updateRef(m)),I==null||I.updateProps(e),I==null||I.updateRestProps(i)},e=Ha(e),[d,m,p,y,c,l,u,h,f,s,o,a]}let Qm=class extends Dn{constructor(e){super(),Nn(this,e,fw,hw,In,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const dw={},pw=(r,e)=>{const t=dw[e]||fS[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...r,props:{...r.props,is:t}}},mw=r=>new Proxy(class{},{construct(e,[t]){const n=t;return new Qm(pw(n,r))}}),kt=new Proxy(class{},{construct(r,[e]){const t=e;return new Qm(t)},get(r,e){return mw(e)}});function gw(r,e){const t="threlte-plugin-context";if(Array.isArray(r)){const[n,i]=r;zn(t,{...Vn(t),[n]:i})}else{const n=r,i=e;if(!i)return;zn(t,{...Vn(t),[n]:i})}}function eg(r,e,t){if(!ph)return{task:void 0,start:()=>{},stop:()=>{},started:Sg(!1)};let n,i,s;Gi.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=gi();let a=o.mainStage;if(s){if(s.stage)if(Gi.isValue(s.stage))a=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);a=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const p=s.after[d];if(Gi.isValue(p)){a=p.stage;break}}else Gi.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const p=s.before[d];if(Gi.isValue(p)){a=p.stage;break}}else Gi.isValue(s.before)&&(a=s.before.stage)}const{autoInvalidations:c}=Vn("threlte-internal-context"),l=on(!1),u=a.createTask(n,i,s),h=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.add(i),u.start()},f=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.delete(i),u.stop()};return(s==null?void 0:s.autoStart)??!0?h():f(),Hn(()=>{a&&a.removeTask(n)}),{task:u,start:h,stop:f,started:{subscribe:l.subscribe}}}function _w(r,e,t){const n=Vn("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(r in i||(i[r]=e),i)),n.current[r]):bu(n,i=>i[r])}const Sl=r=>{const e=on(void 0),t=on(void 0);return r.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(r,e),{error:t,promise:r})};function tg(r,e){const{remember:t,clear:n}=NS();let i;const s=()=>new r;return{load:(c,l)=>{const u=async h=>{var f;if(i||(i=s()),"loadAsync"in i){const d=await i.loadAsync(h,l==null?void 0:l.onProgress);return((f=l==null?void 0:l.transform)==null?void 0:f.call(l,d))??d}else return new Promise((d,p)=>{i.load(h,_=>{var m;return d(((m=l==null?void 0:l.transform)==null?void 0:m.call(l,_))??_)},_=>{var m;return(m=l==null?void 0:l.onProgress)==null?void 0:m.call(l,_)},p)})};if(Array.isArray(c)){const h=c.map(d=>t(()=>u(d),[r,d]));return Sl(Promise.all(h))}else if(typeof c=="string"){const h=t(()=>u(c),[r,c]);return Sl(h)}else{const h=Object.values(c).map(d=>t(()=>u(d),[r,d]));return Sl(Promise.all(h).then(d=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,d[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([r,l])}):typeof c=="string"?n([r,c]):Object.entries(c).forEach(([l,u])=>{n([r,l,u])})},loader:i}}const ng=()=>{const r=$a(),e=on(void 0);return Rn(e,t=>{t&&Object.entries(r.$$.callbacks).forEach(n=>{const[i,s]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...s):t.$$.callbacks[i]=s})}),e};new N;new N;new N;const yw={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},vw={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`},gr=r=>{let e=!1;const t=on(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}},xw=r=>({ref:r[1]&1024}),od=r=>({ref:r[41]});function bw(r){let e,t,n,i,s;e=new kt.Mesh({props:{"scale.y":-1,"rotation.x":-Math.PI/2,material:r[10],geometry:r[0]}}),n=new kt({props:{is:r[9],manual:!0}});const o=r[27].default,a=$i(o,r,r[29],od);return{c(){mt(e.$$.fragment),t=dn(),mt(n.$$.fragment),i=dn(),a&&a.c()},l(c){gt(e.$$.fragment,c),t=pn(c),gt(n.$$.fragment,c),i=pn(c),a&&a.l(c)},m(c,l){_t(e,c,l),Ct(c,t,l),_t(n,c,l),Ct(c,i,l),a&&a.m(c,l),s=!0},p(c,l){const u={};l[0]&1&&(u.geometry=c[0]),e.$set(u),a&&a.p&&(!s||l[0]&536870912|l[1]&1024)&&Qi(a,o,c,c[29],s?tr(o,c[29],l,xw):er(c[29]),od)},i(c){s||(xe(e.$$.fragment,c),xe(n.$$.fragment,c),xe(a,c),s=!0)},o(c){Te(e.$$.fragment,c),Te(n.$$.fragment,c),Te(a,c),s=!1},d(c){c&&(wt(t),wt(i)),yt(e,c),yt(n,c),a&&a.d(c)}}}function Mw(r){let e,t;return e=new kt.Group({props:{"rotation.x":Math.PI/2,$$slots:{default:[bw]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i[0]&536870913|i[1]&1024&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Sw(r){let e,t;const n=[r[12]];let i={$$slots:{default:[Mw,({ref:s})=>({41:s}),({ref:s})=>[0,s?1024:0]]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=ji(i,n[s]);return e=new kt.Group({props:i}),r[28](e),{c(){mt(e.$$.fragment)},l(s){gt(e.$$.fragment,s)},m(s,o){_t(e,s,o),t=!0},p(s,o){const a=o[0]&4096?Fd(n,[Bd(s[12])]):{};o[0]&536870913|o[1]&1024&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(xe(e.$$.fragment,s),t=!0)},o(s){Te(e.$$.fragment,s),t=!1},d(s){r[28](null),yt(e,s)}}}function ww(r,e,t){const n=["opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","refresh"];let i=vs(e,n),s,o,a,c,l,u,h,f,{$$slots:d={},$$scope:p}=e,{opacity:_=1}=e,{width:m=1}=e,{height:g=1}=e,{blur:v=1}=e,{far:y=10}=e,{smooth:b=!0}=e,{resolution:I=512}=e,{frames:R=1/0}=e,{scale:T=10}=e,{color:O="#000000"}=e,{depthWrite:S=!1}=e;const{scene:w,renderer:F}=gi(),j=gr(()=>m*(Array.isArray(T)?T[0]:T||1));sn(r,j,le=>t(26,h=le));const he=gr(()=>g*(Array.isArray(T)?T[1]:T||1));sn(r,he,le=>t(25,u=le));const z=gr(()=>{const le=new Yn(I,I);return le.texture.generateMipmaps=!1,le.texture.colorSpace=F.outputColorSpace,le});sn(r,z,le=>t(36,c=le));const W=gr(()=>{const le=new Yn(I,I);return le.texture.generateMipmaps=!1,le});sn(r,W,le=>t(35,a=le));const k=gr(()=>new As(h,u).rotateX(Math.PI/2));sn(r,k,le=>t(0,o=le));const Q=gr(()=>new Jt(o));sn(r,Q,le=>t(37,l=le));const Y=gr(()=>{const le=new lc({depthTest:!1,depthWrite:!1});return le.onBeforeCompile=Se=>{Se.uniforms={...Se.uniforms,uColor:{value:new Le(O).convertSRGBToLinear()}},Se.fragmentShader=`uniform vec3 uColor;
`+Se.fragmentShader,Se.fragmentShader=Se.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),Se.fragmentShader=Se.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},le});sn(r,Y,le=>t(34,s=le));const q=new Kn({...yw,depthTest:!1}),ne=new Kn({...vw,depthTest:!1}),ee=new Ts(-h/2,h/2,u/2,-u/2,0,y);ee.updateProjectionMatrix();const fe=new si({map:c.texture,transparent:!0,opacity:_,depthWrite:S}),H=le=>{const Se=l;Se.visible=!0,Se.material=q,q.uniforms.tDiffuse.value=c.texture,q.uniforms.h.value=le*1/256,F.setRenderTarget(a),F.render(Se,ee),Se.material=ne,ne.uniforms.tDiffuse.value=a.texture,ne.uniforms.v.value=le*1/256,F.setRenderTarget(c),F.render(Se,ee),Se.visible=!1},Z=()=>{const le=w.background;w.background=null;const Se=w.overrideMaterial;w.overrideMaterial=s;const tt=F.getClearAlpha();F.setClearAlpha(0),F.setRenderTarget(c),F.render(w,ee),w.overrideMaterial=Se,H(v),b&&H(v*.4),F.setRenderTarget(null),w.background=le,F.setClearAlpha(tt)},ie=()=>{Z()};let re=0;eg(()=>{(R===1/0||re<R)&&(Z(),re+=1)}),Hn(()=>{c.dispose(),a.dispose(),o.dispose(),s.dispose(),q.dispose(),ne.dispose(),fe.dispose()});const ae=ng();sn(r,ae,le=>t(1,f=le));function Re(le){_u[le?"unshift":"push"](()=>{f=le,ae.set(f)})}return r.$$set=le=>{e=ji(ji({},e),Ha(le)),t(12,i=vs(e,n)),"opacity"in le&&t(13,_=le.opacity),"width"in le&&t(14,m=le.width),"height"in le&&t(15,g=le.height),"blur"in le&&t(16,v=le.blur),"far"in le&&t(17,y=le.far),"smooth"in le&&t(18,b=le.smooth),"resolution"in le&&t(19,I=le.resolution),"frames"in le&&t(20,R=le.frames),"scale"in le&&t(21,T=le.scale),"color"in le&&t(22,O=le.color),"depthWrite"in le&&t(23,S=le.depthWrite),"$$scope"in le&&t(29,p=le.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2113536&&j.memoize([m,T]),r.$$.dirty[0]&2129920&&he.memoize(g,T),r.$$.dirty[0]&524288&&z.memoize(I),r.$$.dirty[0]&524288&&W.memoize(I),r.$$.dirty[0]&100663296&&k.memoize(h,u),r.$$.dirty[0]&1&&Q.memoize(o),r.$$.dirty[0]&4194304&&Y.memoize(O)},[o,f,j,he,z,W,k,Q,Y,ee,fe,ae,i,_,m,g,v,y,b,I,R,T,O,S,ie,u,h,d,Re,p]}class Ew extends Dn{constructor(e){super(),Nn(this,e,ww,Sw,In,{opacity:13,width:14,height:15,blur:16,far:17,smooth:18,resolution:19,frames:20,scale:21,color:22,depthWrite:23,refresh:24},null,[-1,-1])}get refresh(){return this.$$.ctx[24]}}const Aw=()=>_w("threlte-controls",{orbitControls:on(void 0),trackballControls:on(void 0)}),ad={type:"change"},wl={type:"start"},cd={type:"end"},Ia=new Fr,ld=new Ei,Tw=Math.cos(70*br.DEG2RAD);let Cw=class extends mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",je),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ad),n.update(),s=i.NONE},this.update=function(){const U=new N,be=new fn().setFromUnitVectors(e.up,new N(0,1,0)),We=be.clone().invert(),ke=new N,ye=new fn,V=new N,Me=2*Math.PI;return function(nt=null){const $e=n.object.position;U.copy($e).sub(n.target),U.applyQuaternion(be),a.setFromVector3(U),n.autoRotate&&s===i.NONE&&j(w(nt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let vt=n.minAzimuthAngle,xt=n.maxAzimuthAngle;isFinite(vt)&&isFinite(xt)&&(vt<-Math.PI?vt+=Me:vt>Math.PI&&(vt-=Me),xt<-Math.PI?xt+=Me:xt>Math.PI&&(xt-=Me),vt<=xt?a.theta=Math.max(vt,Math.min(xt,a.theta)):a.theta=a.theta>(vt+xt)/2?Math.max(vt,a.theta):Math.min(xt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=ne(a.radius):a.radius=ne(a.radius*l),U.setFromSpherical(a),U.applyQuaternion(We),$e.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Mt=!1;if(n.zoomToCursor&&R){let zt=null;if(n.object.isPerspectiveCamera){const St=U.length();zt=ne(St*l);const qt=St-zt;n.object.position.addScaledVector(b,qt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const St=new N(I.x,I.y,0);St.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Mt=!0;const qt=new N(I.x,I.y,0);qt.unproject(n.object),n.object.position.sub(qt).add(St),n.object.updateMatrixWorld(),zt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(zt).add(n.object.position):(Ia.origin.copy(n.object.position),Ia.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ia.direction))<Tw?e.lookAt(n.target):(ld.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ia.intersectPlane(ld,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Mt=!0);return l=1,R=!1,Mt||ke.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||V.distanceToSquared(n.target)>0?(n.dispatchEvent(ad),ke.copy(n.object.position),ye.copy(n.object.quaternion),V.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",bt),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",je),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new du,c=new du;let l=1;const u=new N,h=new se,f=new se,d=new se,p=new se,_=new se,m=new se,g=new se,v=new se,y=new se,b=new N,I=new se;let R=!1;const T=[],O={};let S=!1;function w(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function F(U){const be=Math.abs(U*.01);return Math.pow(.95,n.zoomSpeed*be)}function j(U){c.theta-=U}function he(U){c.phi-=U}const z=function(){const U=new N;return function(We,ke){U.setFromMatrixColumn(ke,0),U.multiplyScalar(-We),u.add(U)}}(),W=function(){const U=new N;return function(We,ke){n.screenSpacePanning===!0?U.setFromMatrixColumn(ke,1):(U.setFromMatrixColumn(ke,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(We),u.add(U)}}(),k=function(){const U=new N;return function(We,ke){const ye=n.domElement;if(n.object.isPerspectiveCamera){const V=n.object.position;U.copy(V).sub(n.target);let Me=U.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),z(2*We*Me/ye.clientHeight,n.object.matrix),W(2*ke*Me/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(We*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),W(ke*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(U,be){if(!n.zoomToCursor)return;R=!0;const We=n.domElement.getBoundingClientRect(),ke=U-We.left,ye=be-We.top,V=We.width,Me=We.height;I.x=ke/V*2-1,I.y=-(ye/Me)*2+1,b.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function ee(U){h.set(U.clientX,U.clientY)}function fe(U){q(U.clientX,U.clientX),g.set(U.clientX,U.clientY)}function H(U){p.set(U.clientX,U.clientY)}function Z(U){f.set(U.clientX,U.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const be=n.domElement;j(2*Math.PI*d.x/be.clientHeight),he(2*Math.PI*d.y/be.clientHeight),h.copy(f),n.update()}function ie(U){v.set(U.clientX,U.clientY),y.subVectors(v,g),y.y>0?Q(F(y.y)):y.y<0&&Y(F(y.y)),g.copy(v),n.update()}function re(U){_.set(U.clientX,U.clientY),m.subVectors(_,p).multiplyScalar(n.panSpeed),k(m.x,m.y),p.copy(_),n.update()}function ae(U){q(U.clientX,U.clientY),U.deltaY<0?Y(F(U.deltaY)):U.deltaY>0&&Q(F(U.deltaY)),n.update()}function Re(U){let be=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?he(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),be=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?he(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),be=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),be=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),be=!0;break}be&&(U.preventDefault(),n.update())}function le(U){if(T.length===1)h.set(U.pageX,U.pageY);else{const be=Ue(U),We=.5*(U.pageX+be.x),ke=.5*(U.pageY+be.y);h.set(We,ke)}}function Se(U){if(T.length===1)p.set(U.pageX,U.pageY);else{const be=Ue(U),We=.5*(U.pageX+be.x),ke=.5*(U.pageY+be.y);p.set(We,ke)}}function tt(U){const be=Ue(U),We=U.pageX-be.x,ke=U.pageY-be.y,ye=Math.sqrt(We*We+ke*ke);g.set(0,ye)}function B(U){n.enableZoom&&tt(U),n.enablePan&&Se(U)}function we(U){n.enableZoom&&tt(U),n.enableRotate&&le(U)}function ue(U){if(T.length==1)f.set(U.pageX,U.pageY);else{const We=Ue(U),ke=.5*(U.pageX+We.x),ye=.5*(U.pageY+We.y);f.set(ke,ye)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const be=n.domElement;j(2*Math.PI*d.x/be.clientHeight),he(2*Math.PI*d.y/be.clientHeight),h.copy(f)}function ve(U){if(T.length===1)_.set(U.pageX,U.pageY);else{const be=Ue(U),We=.5*(U.pageX+be.x),ke=.5*(U.pageY+be.y);_.set(We,ke)}m.subVectors(_,p).multiplyScalar(n.panSpeed),k(m.x,m.y),p.copy(_)}function ce(U){const be=Ue(U),We=U.pageX-be.x,ke=U.pageY-be.y,ye=Math.sqrt(We*We+ke*ke);v.set(0,ye),y.set(0,Math.pow(v.y/g.y,n.zoomSpeed)),Q(y.y),g.copy(v);const V=(U.pageX+be.x)*.5,Me=(U.pageY+be.y)*.5;q(V,Me)}function Ge(U){n.enableZoom&&ce(U),n.enablePan&&ve(U)}function Ie(U){n.enableZoom&&ce(U),n.enableRotate&&ue(U)}function L(U){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",G)),ft(U),U.pointerType==="touch"?ot(U):me(U))}function A(U){n.enabled!==!1&&(U.pointerType==="touch"?ge(U):pe(U))}function G(U){st(U),T.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(cd),s=i.NONE}function me(U){let be;switch(U.button){case 0:be=n.mouseButtons.LEFT;break;case 1:be=n.mouseButtons.MIDDLE;break;case 2:be=n.mouseButtons.RIGHT;break;default:be=-1}switch(be){case _r.DOLLY:if(n.enableZoom===!1)return;fe(U),s=i.DOLLY;break;case _r.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;H(U),s=i.PAN}else{if(n.enableRotate===!1)return;ee(U),s=i.ROTATE}break;case _r.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ee(U),s=i.ROTATE}else{if(n.enablePan===!1)return;H(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wl)}function pe(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(U);break;case i.DOLLY:if(n.enableZoom===!1)return;ie(U);break;case i.PAN:if(n.enablePan===!1)return;re(U);break}}function de(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(wl),ae(He(U)),n.dispatchEvent(cd))}function He(U){const be=U.deltaMode,We={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(be){case 1:We.deltaY*=16;break;case 2:We.deltaY*=100;break}return U.ctrlKey&&!S&&(We.deltaY*=10),We}function Ce(U){U.key==="Control"&&(S=!0,document.addEventListener("keyup",Ne,{passive:!0,capture:!0}))}function Ne(U){U.key==="Control"&&(S=!1,document.removeEventListener("keyup",Ne,{passive:!0,capture:!0}))}function je(U){n.enabled===!1||n.enablePan===!1||Re(U)}function ot(U){switch(Ze(U),T.length){case 1:switch(n.touches.ONE){case yr.ROTATE:if(n.enableRotate===!1)return;le(U),s=i.TOUCH_ROTATE;break;case yr.PAN:if(n.enablePan===!1)return;Se(U),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case yr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(U),s=i.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(U),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wl)}function ge(U){switch(Ze(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ve(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(U),n.update();break;default:s=i.NONE}}function bt(U){n.enabled!==!1&&U.preventDefault()}function ft(U){T.push(U.pointerId)}function st(U){delete O[U.pointerId];for(let be=0;be<T.length;be++)if(T[be]==U.pointerId){T.splice(be,1);return}}function Ze(U){let be=O[U.pointerId];be===void 0&&(be=new se,O[U.pointerId]=be),be.set(U.pageX,U.pageY)}function Ue(U){const be=U.pointerId===T[0]?T[1]:T[0];return O[be]}n.domElement.addEventListener("contextmenu",bt),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",de,{passive:!1}),document.addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}};const Rw=r=>({ref:r&1}),ud=r=>({ref:r[0]});function Pw(r){let e;const t=r[6].default,n=$i(t,r,r[8],ud);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&257)&&Qi(n,t,i,i[8],e?tr(t,i[8],s,Rw):er(i[8]),ud)},i(i){e||(xe(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function Lw(r){let e,t;const n=[{is:r[0]},r[5]];let i={$$slots:{default:[Pw,({ref:s})=>({0:s}),({ref:s})=>s?1:0]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=ji(i,n[s]);return e=new kt({props:i}),r[7](e),e.$on("change",r[3]),{c(){mt(e.$$.fragment)},l(s){gt(e.$$.fragment,s)},m(s,o){_t(e,s,o),t=!0},p(s,[o]){const a=o&33?Fd(n,[o&1&&{is:s[0]},o&32&&Bd(s[5])]):{};o&257&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(xe(e.$$.fragment,s),t=!0)},o(s){Te(e.$$.fragment,s),t=!1},d(s){r[7](null),yt(e,s)}}}function Iw(r,e,t){const n=["ref"];let i=vs(e,n),s,o,{$$slots:a={},$$scope:c}=e;const l=gh();sn(r,l,y=>t(9,s=y));const u=y=>y.isCamera,{renderer:h,invalidate:f}=gi();if(!u(s))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const d=new Cw(s,h.domElement),{start:p,stop:_}=eg(()=>d.update(),{autoStart:!1,autoInvalidate:!1}),m=ng();sn(r,m,y=>t(1,o=y));const{orbitControls:g}=Aw();g.set(d),Hn(()=>g.set(void 0));function v(y){_u[y?"unshift":"push"](()=>{o=y,m.set(o)})}return r.$$set=y=>{e=ji(ji({},e),Ha(y)),t(5,i=vs(e,n)),"$$scope"in y&&t(8,c=y.$$scope)},r.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[d,o,l,f,m,i,a,v,c]}class Dw extends Dn{constructor(e){super(),Nn(this,e,Iw,Lw,In,{ref:0})}get ref(){return this.$$.ctx[0]}}new Ye;new Ye;new Jt;`${et.logdepthbuf_pars_vertex}${et.fog_pars_vertex}${et.logdepthbuf_vertex}${et.fog_vertex}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;const Nw=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Uw=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Ow=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Fw=Ow,Bw=`
	${Nw}
	${Uw}
`;`${Fw}${Bw}${et.tonemapping_fragment}${et.colorspace_fragment}`;const kw=r=>{const{camera:e}=gi();let t=r.current.clientWidth,n=r.current.clientHeight;const i=new ResizeObserver(([s])=>{t=s.contentRect.width,n=s.contentRect.height});return Rn(r,s=>(s&&i.observe(s),()=>{s&&i.unobserve(s)})),(s,o)=>{o.pointer.update(a=>(a.set(s.offsetX/t*2-1,-(s.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},ig=Symbol("interactivity-context"),zw=()=>Vn(ig),Vw=r=>{const e=Cn(gi().renderer.domElement),t={enabled:Cn(!0),pointer:Cn(new se),pointerOverTarget:Cn(!1),lastEvent:void 0,raycaster:new Wm,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,compute:kw(e),filter:r==null?void 0:r.filter};return zn(ig,t),t},rg=Symbol("interactivity-handler-context"),sg=()=>Vn(rg),Hw=()=>{zn(rg,{dispatchers:new WeakMap})},Gw=()=>{const r=zw(),{dispatchers:e}=sg();if(!r)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");const t=_h();return{...r,addInteractiveObject:s=>{r.interactiveObjects.indexOf(s)>-1||(e.set(s,t),r.interactiveObjects.push(s))},removeInteractiveObject:s=>{const o=r.interactiveObjects.indexOf(s);r.interactiveObjects.splice(o,1),e.delete(s)}}},Ww=r=>{const e=$a(),t=on(!1);return Mo(()=>{t.set(Object.keys(e.$$.callbacks).some(n=>r.includes(n)))}),{hasEventHandlers:t}},Xw=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],qw=()=>{gw("interactivity",({ref:r})=>{if(!r.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:t}=Gw(),n=on(r),{hasEventHandlers:i}=Ww(Xw);return Rn([i,n],([s,o])=>{if(s)return e(o),()=>t(o)}),{onRefChange(s){n.set(s)}}})};function hd(r){return`${(r.eventObject||r.object).uuid}/${r.index}${r.instanceId}`}const fd=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],Yw=r=>{const{dispatchers:e}=sg(),t=u=>{const h=u.offsetX-r.initialClick[0],f=u.offsetY-r.initialClick[1];return Math.round(Math.hypot(h,f))},n=u=>{for(const h of r.hovered.values())if(u.length===0||!u.some(f=>f.object===h.object&&f.index===h.index&&f.instanceId===h.instanceId)){const{eventObject:f}=h;r.hovered.delete(hd(h));const d=e.get(f);if(d){const p={...h,intersections:u};d("pointerout",p),d("pointerleave",p)}}},i=_S(r.enabled),s=()=>{if(!i.current)return[];const u=[],h=r.raycaster.intersectObjects(r.interactiveObjects,!0),f=r.filter===void 0?h:r.filter(h,r);for(const d of f){let p=d.object;for(;p;)e.has(p)&&u.push({...d,eventObject:p}),p=p.parent}return u},o=(u,h)=>{var f;for(const d of h)(f=e.get(d))==null||f("pointermissed",u)},a=u=>u==="pointerleave"||u==="pointercancel"?()=>{r.pointerOverTarget.set(!1),n([])}:u==="pointerenter"?()=>{r.pointerOverTarget.set(!0)}:h=>{const f=u==="pointermove",d=u==="click"||u==="contextmenu"||u==="dblclick";r.compute(h,r);const p=s(),_=d?t(h):0;u==="pointerdown"&&(r.initialClick=[h.offsetX,h.offsetY],r.initialHits=p.map(g=>g.eventObject)),d&&p.length===0&&_<=2&&o(h,r.interactiveObjects),f&&n(p);let m=!1;e:for(const g of p){const v={stopped:m,...g,intersections:p,stopPropagation(){if(m=!0,v.stopped=!0,r.hovered.size>0&&Array.from(r.hovered.values()).some(b=>b.eventObject===g.eventObject)){const b=p.slice(0,p.indexOf(g));n([...b,g])}},camera:r.raycaster.camera,delta:_,nativeEvent:h,pointer:r.pointer.current,ray:r.raycaster.ray},y=e.get(g.eventObject);if(!y)return;if(f){if(y.hasEventListener("pointerover")||y.hasEventListener("pointerenter")||y.hasEventListener("pointerout")||y.hasEventListener("pointerleave")){const b=hd(v),I=r.hovered.get(b);I?I.stopped&&v.stopPropagation():(r.hovered.set(b,v),y("pointerover",v),y("pointerenter",v))}y("pointermove",v)}else y.hasEventListener(u)?(!d||r.initialHits.includes(g.eventObject))&&(o(h,r.interactiveObjects.filter(I=>!r.initialHits.includes(I))),y(u,v)):d&&r.initialHits.includes(g.eventObject)&&o(h,r.interactiveObjects.filter(I=>!r.initialHits.includes(I)));if(m)break e}},c=u=>{fd.forEach(([h])=>{u.removeEventListener(h,a(h))})},l=u=>{fd.forEach(([h,f])=>{u.addEventListener(h,a(h),{passive:f})})};Rn(r.target,u=>(u&&l(u),()=>{u&&c(u)}))},Zw=r=>{Hw();const e=Vw(r);return qw(),Yw(e),e};for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);var og={exports:{}};og.exports=Ic;og.exports.default=Ic;function Ic(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=ag(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,u,h,f,d;if(n&&(s=Qw(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(var p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return vo(s,o,t,a,c,d,0),o}function ag(r,e,t,n,i){var s,o;if(i===gu(r,e,t,n)>0)for(s=e;s<t;s+=n)o=dd(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=dd(s,r[s],r[s+1],o);return o&&Dc(o,o.next)&&(bo(o),o=o.next),o}function Or(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Dc(t,t.next)||Xt(t.prev,t,t.next)===0)){if(bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vo(r,e,t,n,i,s,o){if(r){!o&&s&&rE(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Jw(r,n,i,s):jw(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),bo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Kw(Or(r),e,t),vo(r,e,t,n,i,s,2)):o===2&&$w(r,e,t,n,i,s):vo(Or(r),e,t,n,i,s,1);break}}}}function jw(r){var e=r.prev,t=r,n=r.next;if(Xt(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&_s(i,a,s,c,o,l,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jw(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Xt(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,g=pu(d,p,e,t,n),v=pu(_,m,e,t,n),y=r.prevZ,b=r.nextZ;y&&y.z>=g&&b&&b.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&_s(a,u,c,h,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&_s(a,u,c,h,l,f,b.x,b.y)&&Xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&_s(a,u,c,h,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&_s(a,u,c,h,l,f,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Kw(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Dc(i,s)&&cg(i,n,n.next,s)&&xo(i,s)&&xo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),bo(n),bo(n.next),n=r=s),n=n.next}while(n!==r);return Or(n)}function $w(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&aE(o,a)){var c=lg(o,a);o=Or(o,o.next),c=Or(c,c.next),vo(o,e,t,n,i,s,0),vo(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Qw(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=ag(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(oE(l));for(i.sort(eE),s=0;s<i.length;s++)t=tE(i[s],t);return t}function eE(r,e){return r.x-e.x}function tE(r,e){var t=nE(r,e);if(!t)return e;var n=lg(t,r);return Or(n,n.next),Or(t,t.next)}function nE(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&_s(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),xo(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&iE(o,t)))&&(o=t,h=f)),t=t.next;while(t!==c);return o}function iE(r,e){return Xt(r.prev,r,e.prev)<0&&Xt(e.next,r,r.next)<0}function rE(r,e,t,n){var i=r;do i.z===0&&(i.z=pu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,sE(i)}function sE(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function pu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function oE(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function _s(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function aE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!cE(r,e)&&(xo(r,e)&&xo(e,r)&&lE(r,e)&&(Xt(r.prev,r,e.prev)||Xt(r,e.prev,e))||Dc(r,e)&&Xt(r.prev,r,r.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Dc(r,e){return r.x===e.x&&r.y===e.y}function cg(r,e,t,n){var i=Na(Xt(r,e,t)),s=Na(Xt(r,e,n)),o=Na(Xt(t,n,r)),a=Na(Xt(t,n,e));return!!(i!==s&&o!==a||i===0&&Da(r,t,e)||s===0&&Da(r,n,e)||o===0&&Da(t,r,n)||a===0&&Da(t,e,n))}function Da(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Na(r){return r>0?1:r<0?-1:0}function cE(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&cg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function xo(r,e){return Xt(r.prev,r,r.next)<0?Xt(r,e,r.next)>=0&&Xt(r,r.prev,e)>=0:Xt(r,e,r.prev)<0||Xt(r,r.next,e)<0}function lE(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function lg(r,e){var t=new mu(r.i,r.x,r.y),n=new mu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dd(r,e,t,n){var i=new mu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ic.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(gu(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:r.length;o-=Math.abs(gu(r,l,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;h+=Math.abs((r[f]-r[p])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[p+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function gu(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Ic.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new se;new se;var pd;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(pd||(pd={}));const{subscribe:uE,set:ug,update:hE}=on(void 0),fE=()=>{ug(void 0)},Ka={subscribe:uE,set:ug,update:hE,reset:fE};function fs(r,e="xyz"){var t;if(r.hasAttribute(e)){const n=(t=r.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const s of n)i.push(parseFloat(s));return i}}}function dE(r){return r?new Le(r[0],r[1],r[2]):new Le("white")}class md extends Im{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case f:case _:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case p:case m:case g:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function n(k,Q,Y,q,ne){let ee,fe;const H=Y.pixel_size>>3,Z=Y.width*Y.height*H;if(Q&&(fe=ne.subarray(q,q+=Y.colormap_length*(Y.colormap_size>>3))),k){ee=new Uint8Array(Z);let ie,re,ae,Re=0;const le=new Uint8Array(H);for(;Re<Z;)if(ie=ne[q++],re=(ie&127)+1,ie&128){for(ae=0;ae<H;++ae)le[ae]=ne[q++];for(ae=0;ae<re;++ae)ee.set(le,Re+ae*H);Re+=H*re}else{for(re*=H,ae=0;ae<re;++ae)ee[Re+ae]=ne[q++];Re+=re}}else ee=ne.subarray(q,q+=Q?Y.width*Y.height:Z);return{pixel_data:ee,palettes:fe}}function i(k,Q,Y,q,ne,ee,fe,H,Z){const ie=Z;let re,ae=0,Re,le;const Se=w.width;for(le=Q;le!==q;le+=Y)for(Re=ne;Re!==fe;Re+=ee,ae++)re=H[ae],k[(Re+Se*le)*4+3]=255,k[(Re+Se*le)*4+2]=ie[re*3+0],k[(Re+Se*le)*4+1]=ie[re*3+1],k[(Re+Se*le)*4+0]=ie[re*3+2];return k}function s(k,Q,Y,q,ne,ee,fe,H){let Z,ie=0,re,ae;const Re=w.width;for(ae=Q;ae!==q;ae+=Y)for(re=ne;re!==fe;re+=ee,ie+=2)Z=H[ie+0]+(H[ie+1]<<8),k[(re+Re*ae)*4+0]=(Z&31744)>>7,k[(re+Re*ae)*4+1]=(Z&992)>>2,k[(re+Re*ae)*4+2]=(Z&31)<<3,k[(re+Re*ae)*4+3]=Z&32768?0:255;return k}function o(k,Q,Y,q,ne,ee,fe,H){let Z=0,ie,re;const ae=w.width;for(re=Q;re!==q;re+=Y)for(ie=ne;ie!==fe;ie+=ee,Z+=3)k[(ie+ae*re)*4+3]=255,k[(ie+ae*re)*4+2]=H[Z+0],k[(ie+ae*re)*4+1]=H[Z+1],k[(ie+ae*re)*4+0]=H[Z+2];return k}function a(k,Q,Y,q,ne,ee,fe,H){let Z=0,ie,re;const ae=w.width;for(re=Q;re!==q;re+=Y)for(ie=ne;ie!==fe;ie+=ee,Z+=4)k[(ie+ae*re)*4+2]=H[Z+0],k[(ie+ae*re)*4+1]=H[Z+1],k[(ie+ae*re)*4+0]=H[Z+2],k[(ie+ae*re)*4+3]=H[Z+3];return k}function c(k,Q,Y,q,ne,ee,fe,H){let Z,ie=0,re,ae;const Re=w.width;for(ae=Q;ae!==q;ae+=Y)for(re=ne;re!==fe;re+=ee,ie++)Z=H[ie],k[(re+Re*ae)*4+0]=Z,k[(re+Re*ae)*4+1]=Z,k[(re+Re*ae)*4+2]=Z,k[(re+Re*ae)*4+3]=255;return k}function l(k,Q,Y,q,ne,ee,fe,H){let Z=0,ie,re;const ae=w.width;for(re=Q;re!==q;re+=Y)for(ie=ne;ie!==fe;ie+=ee,Z+=2)k[(ie+ae*re)*4+0]=H[Z+0],k[(ie+ae*re)*4+1]=H[Z+0],k[(ie+ae*re)*4+2]=H[Z+0],k[(ie+ae*re)*4+3]=H[Z+1];return k}function u(k,Q,Y,q,ne){let ee,fe,H,Z,ie,re;switch((w.flags&v)>>y){default:case R:ee=0,H=1,ie=Q,fe=0,Z=1,re=Y;break;case b:ee=0,H=1,ie=Q,fe=Y-1,Z=-1,re=-1;break;case T:ee=Q-1,H=-1,ie=-1,fe=0,Z=1,re=Y;break;case I:ee=Q-1,H=-1,ie=-1,fe=Y-1,Z=-1,re=-1;break}if(he)switch(w.pixel_size){case 8:c(k,fe,Z,re,ee,H,ie,q);break;case 16:l(k,fe,Z,re,ee,H,ie,q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:i(k,fe,Z,re,ee,H,ie,q,ne);break;case 16:s(k,fe,Z,re,ee,H,ie,q);break;case 24:o(k,fe,Z,re,ee,H,ie,q);break;case 32:a(k,fe,Z,re,ee,H,ie,q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}const h=0,f=1,d=2,p=3,_=9,m=10,g=11,v=48,y=4,b=0,I=1,R=2,T=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let O=0;const S=new Uint8Array(e),w={id_length:S[O++],colormap_type:S[O++],image_type:S[O++],colormap_index:S[O++]|S[O++]<<8,colormap_length:S[O++]|S[O++]<<8,colormap_size:S[O++],origin:[S[O++]|S[O++]<<8,S[O++]|S[O++]<<8],width:S[O++]|S[O++]<<8,height:S[O++]|S[O++]<<8,pixel_size:S[O++],flags:S[O++]};if(t(w),w.id_length+O>e.length)throw new Error("THREE.TGALoader: No data.");O+=w.id_length;let F=!1,j=!1,he=!1;switch(w.image_type){case _:F=!0,j=!0;break;case f:j=!0;break;case m:F=!0;break;case d:break;case g:F=!0,he=!0;break;case p:he=!0;break}const z=new Uint8Array(w.width*w.height*4),W=n(F,j,w,O,S);return u(z,w.width,w.height,W.pixel_data,W.palettes),{data:z,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Ni}}}class pE extends gn{load(e,t,n,i){const s=this,o=s.path===""?Ja.extractUrlBase(e):s.path,a=new oi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e,t){function n(M,x){const C=[],E=M.childNodes;for(let P=0,$=E.length;P<$;P++){const oe=E[P];oe.nodeName===x&&C.push(oe)}return C}function i(M){if(M.length===0)return[];const x=M.trim().split(/\s+/),C=new Array(x.length);for(let E=0,P=x.length;E<P;E++)C[E]=x[E];return C}function s(M){if(M.length===0)return[];const x=M.trim().split(/\s+/),C=new Array(x.length);for(let E=0,P=x.length;E<P;E++)C[E]=parseFloat(x[E]);return C}function o(M){if(M.length===0)return[];const x=M.trim().split(/\s+/),C=new Array(x.length);for(let E=0,P=x.length;E<P;E++)C[E]=parseInt(x[E]);return C}function a(M){return M.substring(1)}function c(){return"three_default_"+dg++}function l(M){return Object.keys(M).length===0}function u(M){return{unit:h(n(M,"unit")[0]),upAxis:f(n(M,"up_axis")[0])}}function h(M){return M!==void 0&&M.hasAttribute("meter")===!0?parseFloat(M.getAttribute("meter")):1}function f(M){return M!==void 0?M.textContent:"Y_UP"}function d(M,x,C,E){const P=n(M,x)[0];if(P!==void 0){const $=n(P,C);for(let oe=0;oe<$.length;oe++)E($[oe])}}function p(M,x){for(const C in M){const E=M[C];E.build=x(M[C])}}function _(M,x){return M.build!==void 0||(M.build=x(M)),M.build}function m(M){const x={sources:{},samplers:{},channels:{}};let C=!1;for(let E=0,P=M.childNodes.length;E<P;E++){const $=M.childNodes[E];if($.nodeType!==1)continue;let oe;switch($.nodeName){case"source":oe=$.getAttribute("id"),x.sources[oe]=V($);break;case"sampler":oe=$.getAttribute("id"),x.samplers[oe]=g($);break;case"channel":oe=$.getAttribute("target"),x.channels[oe]=v($);break;case"animation":m($),C=!0;break;default:console.log($)}}C===!1&&(rt.animations[M.getAttribute("id")||br.generateUUID()]=x)}function g(M){const x={inputs:{}};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const $=a(P.getAttribute("source")),oe=P.getAttribute("semantic");x.inputs[oe]=$;break}}return x}function v(M){const x={};let E=M.getAttribute("target").split("/");const P=E.shift();let $=E.shift();const oe=$.indexOf("(")!==-1,ze=$.indexOf(".")!==-1;if(ze)E=$.split("."),$=E.shift(),x.member=E.shift();else if(oe){const Ee=$.split("(");$=Ee.shift();for(let De=0;De<Ee.length;De++)Ee[De]=parseInt(Ee[De].replace(/\)/,""));x.indices=Ee}return x.id=P,x.sid=$,x.arraySyntax=oe,x.memberSyntax=ze,x.sampler=a(M.getAttribute("source")),x}function y(M){const x=[],C=M.channels,E=M.samplers,P=M.sources;for(const $ in C)if(C.hasOwnProperty($)){const oe=C[$],ze=E[oe.sampler],Ee=ze.inputs.INPUT,De=ze.inputs.OUTPUT,qe=P[Ee],_e=P[De],Xe=I(oe,qe,_e);w(Xe,x)}return x}function b(M){return _(rt.animations[M],y)}function I(M,x,C){const E=rt.nodes[M.id],P=at(E.id),$=E.transforms[M.sid],oe=E.matrix.clone().transpose();let ze,Ee,De,qe,_e,Xe;const Ve={};switch($){case"matrix":for(De=0,qe=x.array.length;De<qe;De++)if(ze=x.array[De],Ee=De*C.stride,Ve[ze]===void 0&&(Ve[ze]={}),M.arraySyntax===!0){const Gt=C.array[Ee],It=M.indices[0]+4*M.indices[1];Ve[ze][It]=Gt}else for(_e=0,Xe=C.stride;_e<Xe;_e++)Ve[ze][_e]=C.array[Ee+_e];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}const Qe=R(Ve,oe);return{name:P.uuid,keyframes:Qe}}function R(M,x){const C=[];for(const P in M)C.push({time:parseFloat(P),value:M[P]});C.sort(E);for(let P=0;P<16;P++)F(C,P,x.elements[P]);return C;function E(P,$){return P.time-$.time}}const T=new N,O=new N,S=new fn;function w(M,x){const C=M.keyframes,E=M.name,P=[],$=[],oe=[],ze=[];for(let Ee=0,De=C.length;Ee<De;Ee++){const qe=C[Ee],_e=qe.time,Xe=qe.value;Be.fromArray(Xe).transpose(),Be.decompose(T,S,O),P.push(_e),$.push(T.x,T.y,T.z),oe.push(S.x,S.y,S.z,S.w),ze.push(O.x,O.y,O.z)}return $.length>0&&x.push(new Nr(E+".position",P,$)),oe.length>0&&x.push(new zr(E+".quaternion",P,oe)),ze.length>0&&x.push(new Nr(E+".scale",P,ze)),x}function F(M,x,C){let E,P=!0,$,oe;for($=0,oe=M.length;$<oe;$++)E=M[$],E.value[x]===void 0?E.value[x]=null:P=!1;if(P===!0)for($=0,oe=M.length;$<oe;$++)E=M[$],E.value[x]=C;else j(M,x)}function j(M,x){let C,E;for(let P=0,$=M.length;P<$;P++){const oe=M[P];if(oe.value[x]===null){if(C=he(M,P,x),E=z(M,P,x),C===null){oe.value[x]=E.value[x];continue}if(E===null){oe.value[x]=C.value[x];continue}W(oe,C,E,x)}}}function he(M,x,C){for(;x>=0;){const E=M[x];if(E.value[C]!==null)return E;x--}return null}function z(M,x,C){for(;x<M.length;){const E=M[x];if(E.value[C]!==null)return E;x++}return null}function W(M,x,C,E){if(C.time-x.time===0){M.value[E]=x.value[E];return}M.value[E]=(M.time-x.time)*(C.value[E]-x.value[E])/(C.time-x.time)+x.value[E]}function k(M){const x={name:M.getAttribute("id")||"default",start:parseFloat(M.getAttribute("start")||0),end:parseFloat(M.getAttribute("end")||0),animations:[]};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"instance_animation":x.animations.push(a(P.getAttribute("url")));break}}rt.clips[M.getAttribute("id")]=x}function Q(M){const x=[],C=M.name,E=M.end-M.start||-1,P=M.animations;for(let $=0,oe=P.length;$<oe;$++){const ze=b(P[$]);for(let Ee=0,De=ze.length;Ee<De;Ee++)x.push(ze[Ee])}return new Ur(C,E,x)}function Y(M){return _(rt.clips[M],Q)}function q(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"skin":x.id=a(P.getAttribute("source")),x.skin=ne(P);break;case"morph":x.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}rt.controllers[M.getAttribute("id")]=x}function ne(M){const x={sources:{}};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":x.bindShapeMatrix=s(P.textContent);break;case"source":const $=P.getAttribute("id");x.sources[$]=V(P);break;case"joints":x.joints=ee(P);break;case"vertex_weights":x.vertexWeights=fe(P);break}}return x}function ee(M){const x={inputs:{}};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const $=P.getAttribute("semantic"),oe=a(P.getAttribute("source"));x.inputs[$]=oe;break}}return x}function fe(M){const x={inputs:{}};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const $=P.getAttribute("semantic"),oe=a(P.getAttribute("source")),ze=parseInt(P.getAttribute("offset"));x.inputs[$]={id:oe,offset:ze};break;case"vcount":x.vcount=o(P.textContent);break;case"v":x.v=o(P.textContent);break}}return x}function H(M){const x={id:M.id},C=rt.geometries[x.id];return M.skin!==void 0&&(x.skin=Z(M.skin),C.sources.skinIndices=x.skin.indices,C.sources.skinWeights=x.skin.weights),x}function Z(M){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=M.sources,P=M.vertexWeights,$=P.vcount,oe=P.v,ze=P.inputs.JOINT.offset,Ee=P.inputs.WEIGHT.offset,De=M.sources[M.joints.inputs.JOINT],qe=M.sources[M.joints.inputs.INV_BIND_MATRIX],_e=E[P.inputs.WEIGHT.id].array;let Xe=0,Ve,Qe,Ke;for(Ve=0,Ke=$.length;Ve<Ke;Ve++){const It=$[Ve],At=[];for(Qe=0;Qe<It;Qe++){const Tt=oe[Xe+ze],yi=oe[Xe+Ee],Un=_e[yi];At.push({index:Tt,weight:Un}),Xe+=2}for(At.sort(Gt),Qe=0;Qe<4;Qe++){const Tt=At[Qe];Tt!==void 0?(C.indices.array.push(Tt.index),C.weights.array.push(Tt.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(M.bindShapeMatrix?C.bindMatrix=new Ye().fromArray(M.bindShapeMatrix).transpose():C.bindMatrix=new Ye().identity(),Ve=0,Ke=De.array.length;Ve<Ke;Ve++){const It=De.array[Ve],At=new Ye().fromArray(qe.array,Ve*qe.stride).transpose();C.joints.push({name:It,boneInverse:At})}return C;function Gt(It,At){return At.weight-It.weight}}function ie(M){return _(rt.controllers[M],H)}function re(M){const x={init_from:n(M,"init_from")[0].textContent};rt.images[M.getAttribute("id")]=x}function ae(M){return M.build!==void 0?M.build:M.init_from}function Re(M){const x=rt.images[M];return x!==void 0?_(x,ae):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",M),null)}function le(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"profile_COMMON":x.profile=Se(P);break}}rt.effects[M.getAttribute("id")]=x}function Se(M){const x={surfaces:{},samplers:{}};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"newparam":tt(P,x);break;case"technique":x.technique=ue(P);break;case"extra":x.extra=A(P);break}}return x}function tt(M,x){const C=M.getAttribute("sid");for(let E=0,P=M.childNodes.length;E<P;E++){const $=M.childNodes[E];if($.nodeType===1)switch($.nodeName){case"surface":x.surfaces[C]=B($);break;case"sampler2D":x.samplers[C]=we($);break}}}function B(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"init_from":x.init_from=P.textContent;break}}return x}function we(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"source":x.source=P.textContent;break}}return x}function ue(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":x.type=P.nodeName,x.parameters=ve(P);break;case"extra":x.extra=A(P);break}}return x}function ve(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":x[P.nodeName]=ce(P);break;case"transparent":x[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:ce(P)};break}}return x}function ce(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":x[P.nodeName]=s(P.textContent);break;case"float":x[P.nodeName]=parseFloat(P.textContent);break;case"texture":x[P.nodeName]={id:P.getAttribute("texture"),extra:Ge(P)};break}}return x}function Ge(M){const x={technique:{}};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"extra":Ie(P,x);break}}return x}function Ie(M,x){for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"technique":L(P,x);break}}}function L(M,x){for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":x.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?x.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?x.technique[P.nodeName]=0:x.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":x[P.nodeName]=me(P);break}}}function A(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"technique":x.technique=G(P);break}}return x}function G(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"double_sided":x[P.nodeName]=parseInt(P.textContent);break;case"bump":x[P.nodeName]=me(P);break}}return x}function me(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"texture":x[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:Ge(P)};break}}return x}function pe(M){return M}function de(M){return _(rt.effects[M],pe)}function He(M){const x={name:M.getAttribute("name")};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"instance_effect":x.url=a(P.getAttribute("url"));break}}rt.materials[M.getAttribute("id")]=x}function Ce(M){let x,C=M.slice((M.lastIndexOf(".")-1>>>0)+2);switch(C=C.toLowerCase(),C){case"tga":x=Bc;break;default:x=Os}return x}function Ne(M){const x=de(M.url),C=x.profile.technique;let E;switch(C.type){case"phong":case"blinn":E=new ja;break;case"lambert":E=new eh;break;default:E=new si;break}E.name=M.name||"";function P(Ee,De=null){const qe=x.profile.samplers[Ee.id];let _e=null;if(qe!==void 0){const Xe=x.profile.surfaces[qe.source];_e=Re(Xe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),_e=Re(Ee.id);if(_e!==null){const Xe=Ce(_e);if(Xe!==void 0){const Ve=Xe.load(_e),Qe=Ee.extra;if(Qe!==void 0&&Qe.technique!==void 0&&l(Qe.technique)===!1){const Ke=Qe.technique;Ve.wrapS=Ke.wrapU?Ti:hn,Ve.wrapT=Ke.wrapV?Ti:hn,Ve.offset.set(Ke.offsetU||0,Ke.offsetV||0),Ve.repeat.set(Ke.repeatU||1,Ke.repeatV||1)}else Ve.wrapS=Ti,Ve.wrapT=Ti;return De!==null&&(Ve.colorSpace=De),Ve}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",_e),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Ee.id),null}const $=C.parameters;for(const Ee in $){const De=$[Ee];switch(Ee){case"diffuse":De.color&&E.color.fromArray(De.color),De.texture&&(E.map=P(De.texture,Zt));break;case"specular":De.color&&E.specular&&E.specular.fromArray(De.color),De.texture&&(E.specularMap=P(De.texture));break;case"bump":De.texture&&(E.normalMap=P(De.texture));break;case"ambient":De.texture&&(E.lightMap=P(De.texture,Zt));break;case"shininess":De.float&&E.shininess&&(E.shininess=De.float);break;case"emission":De.color&&E.emissive&&E.emissive.fromArray(De.color),De.texture&&(E.emissiveMap=P(De.texture,Zt));break}}E.color.convertSRGBToLinear(),E.specular&&E.specular.convertSRGBToLinear(),E.emissive&&E.emissive.convertSRGBToLinear();let oe=$.transparent,ze=$.transparency;if(ze===void 0&&oe&&(ze={float:1}),oe===void 0&&ze&&(oe={opaque:"A_ONE",data:{color:[1,1,1,1]}}),oe&&ze)if(oe.data.texture)E.transparent=!0;else{const Ee=oe.data.color;switch(oe.opaque){case"A_ONE":E.opacity=Ee[3]*ze.float;break;case"RGB_ZERO":E.opacity=1-Ee[0]*ze.float;break;case"A_ZERO":E.opacity=1-Ee[3]*ze.float;break;case"RGB_ONE":E.opacity=Ee[0]*ze.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',oe.opaque)}E.opacity<1&&(E.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const Ee=C.extra.technique;for(const De in Ee){const qe=Ee[De];switch(De){case"double_sided":E.side=qe===1?ni:di;break;case"bump":E.normalMap=P(qe.texture),E.normalScale=new se(1,1);break}}}return E}function je(M){return _(rt.materials[M],Ne)}function ot(M){const x={name:M.getAttribute("name")};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"optics":x.optics=ge(P);break}}rt.cameras[M.getAttribute("id")]=x}function ge(M){for(let x=0;x<M.childNodes.length;x++){const C=M.childNodes[x];switch(C.nodeName){case"technique_common":return bt(C)}}return{}}function bt(M){const x={};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];switch(E.nodeName){case"perspective":case"orthographic":x.technique=E.nodeName,x.parameters=ft(E);break}}return x}function ft(M){const x={};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":x[E.nodeName]=parseFloat(E.textContent);break}}return x}function st(M){let x;switch(M.optics.technique){case"perspective":x=new rn(M.optics.parameters.yfov,M.optics.parameters.aspect_ratio,M.optics.parameters.znear,M.optics.parameters.zfar);break;case"orthographic":let C=M.optics.parameters.ymag,E=M.optics.parameters.xmag;const P=M.optics.parameters.aspect_ratio;E=E===void 0?C*P:E,C=C===void 0?E/P:C,E*=.5,C*=.5,x=new Ts(-E,E,C,-C,M.optics.parameters.znear,M.optics.parameters.zfar);break;default:x=new rn;break}return x.name=M.name||"",x}function Ze(M){const x=rt.cameras[M];return x!==void 0?_(x,st):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",M),null)}function Ue(M){let x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"technique_common":x=U(P);break}}rt.lights[M.getAttribute("id")]=x}function U(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":x.technique=P.nodeName,x.parameters=be(P)}}return x}function be(M){const x={};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"color":const $=s(P.textContent);x.color=new Le().fromArray($).convertSRGBToLinear();break;case"falloff_angle":x.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const oe=parseFloat(P.textContent);x.distance=oe?Math.sqrt(1/oe):0;break}}return x}function We(M){let x;switch(M.technique){case"directional":x=new ch;break;case"point":x=new ah;break;case"spot":x=new oh;break;case"ambient":x=new lh;break}return M.parameters.color&&x.color.copy(M.parameters.color),M.parameters.distance&&(x.distance=M.parameters.distance),x}function ke(M){const x=rt.lights[M];return x!==void 0?_(x,We):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",M),null)}function ye(M){const x={name:M.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=n(M,"mesh")[0];if(C!==void 0){for(let E=0;E<C.childNodes.length;E++){const P=C.childNodes[E];if(P.nodeType!==1)continue;const $=P.getAttribute("id");switch(P.nodeName){case"source":x.sources[$]=V(P);break;case"vertices":x.vertices=Me(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":x.primitives.push(Pe(P));break;default:console.log(P)}}rt.geometries[M.getAttribute("id")]=x}}function V(M){const x={array:[],stride:3};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"float_array":x.array=s(E.textContent);break;case"Name_array":x.array=i(E.textContent);break;case"technique_common":const P=n(E,"accessor")[0];P!==void 0&&(x.stride=parseInt(P.getAttribute("stride")));break}}return x}function Me(M){const x={};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];E.nodeType===1&&(x[E.getAttribute("semantic")]=a(E.getAttribute("source")))}return x}function Pe(M){const x={type:M.nodeName,material:M.getAttribute("material"),count:parseInt(M.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,E=M.childNodes.length;C<E;C++){const P=M.childNodes[C];if(P.nodeType===1)switch(P.nodeName){case"input":const $=a(P.getAttribute("source")),oe=P.getAttribute("semantic"),ze=parseInt(P.getAttribute("offset")),Ee=parseInt(P.getAttribute("set")),De=Ee>0?oe+Ee:oe;x.inputs[De]={id:$,offset:ze},x.stride=Math.max(x.stride,ze+1),oe==="TEXCOORD"&&(x.hasUV=!0);break;case"vcount":x.vcount=o(P.textContent);break;case"p":x.p=o(P.textContent);break}}return x}function nt(M){const x={};for(let C=0;C<M.length;C++){const E=M[C];x[E.type]===void 0&&(x[E.type]=[]),x[E.type].push(E)}return x}function $e(M){let x=0;for(let C=0,E=M.length;C<E;C++)M[C].hasUV===!0&&x++;x>0&&x<M.length&&(M.uvsNeedsFix=!0)}function vt(M){const x={},C=M.sources,E=M.vertices,P=M.primitives;if(P.length===0)return{};const $=nt(P);for(const oe in $){const ze=$[oe];$e(ze),x[oe]=xt(ze,C,E)}return x}function xt(M,x,C){const E={},P={array:[],stride:0},$={array:[],stride:0},oe={array:[],stride:0},ze={array:[],stride:0},Ee={array:[],stride:0},De={array:[],stride:4},qe={array:[],stride:4},_e=new ut,Xe=[];let Ve=0;for(let Qe=0;Qe<M.length;Qe++){const Ke=M[Qe],Gt=Ke.inputs;let It=0;switch(Ke.type){case"lines":case"linestrips":It=Ke.count*2;break;case"triangles":It=Ke.count*3;break;case"polylist":for(let At=0;At<Ke.count;At++){const Tt=Ke.vcount[At];switch(Tt){case 3:It+=3;break;case 4:It+=6;break;default:It+=(Tt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ke.type)}_e.addGroup(Ve,It,Qe),Ve+=It,Ke.material&&Xe.push(Ke.material);for(const At in Gt){const Tt=Gt[At];switch(At){case"VERTEX":for(const yi in C){const Un=C[yi];switch(yi){case"POSITION":const Wr=P.array.length;if(Mt(Ke,x[Un],Tt.offset,P.array),P.stride=x[Un].stride,x.skinWeights&&x.skinIndices&&(Mt(Ke,x.skinIndices,Tt.offset,De.array),Mt(Ke,x.skinWeights,Tt.offset,qe.array)),Ke.hasUV===!1&&M.uvsNeedsFix===!0){const pg=(P.array.length-Wr)/P.stride;for(let vh=0;vh<pg;vh++)oe.array.push(0,0)}break;case"NORMAL":Mt(Ke,x[Un],Tt.offset,$.array),$.stride=x[Un].stride;break;case"COLOR":Mt(Ke,x[Un],Tt.offset,Ee.array),Ee.stride=x[Un].stride;break;case"TEXCOORD":Mt(Ke,x[Un],Tt.offset,oe.array),oe.stride=x[Un].stride;break;case"TEXCOORD1":Mt(Ke,x[Un],Tt.offset,ze.array),oe.stride=x[Un].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',yi)}}break;case"NORMAL":Mt(Ke,x[Tt.id],Tt.offset,$.array),$.stride=x[Tt.id].stride;break;case"COLOR":Mt(Ke,x[Tt.id],Tt.offset,Ee.array,!0),Ee.stride=x[Tt.id].stride;break;case"TEXCOORD":Mt(Ke,x[Tt.id],Tt.offset,oe.array),oe.stride=x[Tt.id].stride;break;case"TEXCOORD1":Mt(Ke,x[Tt.id],Tt.offset,ze.array),ze.stride=x[Tt.id].stride;break}}}return P.array.length>0&&_e.setAttribute("position",new Oe(P.array,P.stride)),$.array.length>0&&_e.setAttribute("normal",new Oe($.array,$.stride)),Ee.array.length>0&&_e.setAttribute("color",new Oe(Ee.array,Ee.stride)),oe.array.length>0&&_e.setAttribute("uv",new Oe(oe.array,oe.stride)),ze.array.length>0&&_e.setAttribute("uv1",new Oe(ze.array,ze.stride)),De.array.length>0&&_e.setAttribute("skinIndex",new Oe(De.array,De.stride)),qe.array.length>0&&_e.setAttribute("skinWeight",new Oe(qe.array,qe.stride)),E.data=_e,E.type=M[0].type,E.materialKeys=Xe,E}function Mt(M,x,C,E,P=!1){const $=M.p,oe=M.stride,ze=M.vcount;function Ee(_e){let Xe=$[_e+C]*qe;const Ve=Xe+qe;for(;Xe<Ve;Xe++)E.push(De[Xe]);if(P){const Qe=E.length-qe-1;Fo.setRGB(E[Qe+0],E[Qe+1],E[Qe+2]).convertSRGBToLinear(),E[Qe+0]=Fo.r,E[Qe+1]=Fo.g,E[Qe+2]=Fo.b}}const De=x.array,qe=x.stride;if(M.vcount!==void 0){let _e=0;for(let Xe=0,Ve=ze.length;Xe<Ve;Xe++){const Qe=ze[Xe];if(Qe===4){const Ke=_e+oe*0,Gt=_e+oe*1,It=_e+oe*2,At=_e+oe*3;Ee(Ke),Ee(Gt),Ee(At),Ee(Gt),Ee(It),Ee(At)}else if(Qe===3){const Ke=_e+oe*0,Gt=_e+oe*1,It=_e+oe*2;Ee(Ke),Ee(Gt),Ee(It)}else if(Qe>4)for(let Ke=1,Gt=Qe-2;Ke<=Gt;Ke++){const It=_e+oe*0,At=_e+oe*Ke,Tt=_e+oe*(Ke+1);Ee(It),Ee(At),Ee(Tt)}_e+=oe*Qe}}else for(let _e=0,Xe=$.length;_e<Xe;_e+=oe)Ee(_e)}function zt(M){return _(rt.geometries[M],vt)}function St(M){const x={name:M.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"technique_common":No(E,x);break}}rt.kinematicsModels[M.getAttribute("id")]=x}function qt(M){return M.build!==void 0?M.build:M}function Zn(M){return _(rt.kinematicsModels[M],qt)}function No(M,x){for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"joint":x.joints[E.getAttribute("sid")]=Nc(E);break;case"link":x.links.push(Ps(E));break}}}function Nc(M){let x;for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":x=Hr(E);break}}return x}function Hr(M){const x={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",axis:new N,limits:{min:0,max:0},type:M.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"axis":const P=s(E.textContent);x.axis.fromArray(P);break;case"limits":const $=E.getElementsByTagName("max")[0],oe=E.getElementsByTagName("min")[0];x.limits.max=parseFloat($.textContent),x.limits.min=parseFloat(oe.textContent);break}}return x.limits.min>=x.limits.max&&(x.static=!0),x.middlePosition=(x.limits.min+x.limits.max)/2,x}function Ps(M){const x={sid:M.getAttribute("sid"),name:M.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":x.attachments.push(Gr(E));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ls(E));break}}return x}function Gr(M){const x={joint:M.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"link":x.links.push(Ps(E));break;case"matrix":case"translate":case"rotate":x.transforms.push(Ls(E));break}}return x}function Ls(M){const x={type:M.nodeName},C=s(M.textContent);switch(x.type){case"matrix":x.obj=new Ye,x.obj.fromArray(C).transpose();break;case"translate":x.obj=new N,x.obj.fromArray(C);break;case"rotate":x.obj=new N,x.obj.fromArray(C),x.angle=br.degToRad(C[3]);break}return x}function Uo(M){const x={name:M.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":x.rigidBodies[E.getAttribute("name")]={},Uc(E,x.rigidBodies[E.getAttribute("name")]);break}}rt.physicsModels[M.getAttribute("id")]=x}function Uc(M,x){for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Oc(E,x);break}}}function Oc(M,x){for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"inertia":x.inertia=s(E.textContent);break;case"mass":x.mass=s(E.textContent)[0];break}}}function Fc(M){const x={bindJointAxis:[]};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":x.bindJointAxis.push(D(E));break}}rt.kinematicsScenes[a(M.getAttribute("url"))]=x}function D(M){const x={target:M.getAttribute("target").split("/").pop()};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType===1)switch(E.nodeName){case"axis":const P=E.getElementsByTagName("param")[0];x.axis=P.textContent;const $=x.axis.split("inst_").pop().split("axis")[0];x.jointIndex=$.substring(0,$.length-1);break}}return x}function X(M){return M.build!==void 0?M.build:M}function K(M){return _(rt.kinematicsScenes[M],X)}function te(){const M=Object.keys(rt.kinematicsModels)[0],x=Object.keys(rt.kinematicsScenes)[0],C=Object.keys(rt.visualScenes)[0];if(M===void 0||x===void 0)return;const E=Zn(M),P=K(x),$=Ds(C),oe=P.bindJointAxis,ze={};for(let qe=0,_e=oe.length;qe<_e;qe++){const Xe=oe[qe],Ve=Ht.querySelector('[sid="'+Xe.target+'"]');if(Ve){const Qe=Ve.parentElement;Ee(Xe.jointIndex,Qe)}}function Ee(qe,_e){const Xe=_e.getAttribute("name"),Ve=E.joints[qe];$.traverse(function(Qe){Qe.name===Xe&&(ze[qe]={object:Qe,transforms:J(_e),joint:Ve,position:Ve.zeroPosition})})}const De=new Ye;yh={joints:E&&E.joints,getJointValue:function(qe){const _e=ze[qe];if(_e)return _e.position;console.warn("THREE.ColladaLoader: Joint "+qe+" doesn't exist.")},setJointValue:function(qe,_e){const Xe=ze[qe];if(Xe){const Ve=Xe.joint;if(_e>Ve.limits.max||_e<Ve.limits.min)console.warn("THREE.ColladaLoader: Joint "+qe+" value "+_e+" outside of limits (min: "+Ve.limits.min+", max: "+Ve.limits.max+").");else if(Ve.static)console.warn("THREE.ColladaLoader: Joint "+qe+" is static.");else{const Qe=Xe.object,Ke=Ve.axis,Gt=Xe.transforms;Be.identity();for(let It=0;It<Gt.length;It++){const At=Gt[It];if(At.sid&&At.sid.indexOf(qe)!==-1)switch(Ve.type){case"revolute":Be.multiply(De.makeRotationAxis(Ke,br.degToRad(_e)));break;case"prismatic":Be.multiply(De.makeTranslation(Ke.x*_e,Ke.y*_e,Ke.z*_e));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ve.type);break}else switch(At.type){case"matrix":Be.multiply(At.obj);break;case"translate":Be.multiply(De.makeTranslation(At.obj.x,At.obj.y,At.obj.z));break;case"scale":Be.scale(At.obj);break;case"rotate":Be.multiply(De.makeRotationAxis(At.obj,At.angle));break}}Qe.matrix.copy(Be),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),ze[qe].position=_e}}else console.log("THREE.ColladaLoader: "+qe+" does not exist.")}}}function J(M){const x=[],C=Ht.querySelector('[id="'+M.id+'"]');for(let E=0;E<C.childNodes.length;E++){const P=C.childNodes[E];if(P.nodeType!==1)continue;let $,oe;switch(P.nodeName){case"matrix":$=s(P.textContent);const ze=new Ye().fromArray($).transpose();x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ze});break;case"translate":case"scale":$=s(P.textContent),oe=new N().fromArray($),x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:oe});break;case"rotate":$=s(P.textContent),oe=new N().fromArray($);const Ee=br.degToRad($[3]);x.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:oe,angle:Ee});break}}return x}function Fe(M){const x=M.getElementsByTagName("node");for(let C=0;C<x.length;C++){const E=x[C];E.hasAttribute("id")===!1&&E.setAttribute("id",c())}}const Be=new Ye,Je=new N;function it(M){const x={name:M.getAttribute("name")||"",type:M.getAttribute("type"),id:M.getAttribute("id"),sid:M.getAttribute("sid"),matrix:new Ye,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];if(E.nodeType!==1)continue;let P;switch(E.nodeName){case"node":x.nodes.push(E.getAttribute("id")),it(E);break;case"instance_camera":x.instanceCameras.push(a(E.getAttribute("url")));break;case"instance_controller":x.instanceControllers.push(ht(E));break;case"instance_light":x.instanceLights.push(a(E.getAttribute("url")));break;case"instance_geometry":x.instanceGeometries.push(ht(E));break;case"instance_node":x.instanceNodes.push(a(E.getAttribute("url")));break;case"matrix":P=s(E.textContent),x.matrix.multiply(Be.fromArray(P).transpose()),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":P=s(E.textContent),Je.fromArray(P),x.matrix.multiply(Be.makeTranslation(Je.x,Je.y,Je.z)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":P=s(E.textContent);const $=br.degToRad(P[3]);x.matrix.multiply(Be.makeRotationAxis(Je.fromArray(P),$)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":P=s(E.textContent),x.matrix.scale(Je.fromArray(P)),x.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return Ut(x.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",x.id):rt.nodes[x.id]=x,x}function ht(M){const x={id:a(M.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<M.childNodes.length;C++){const E=M.childNodes[C];switch(E.nodeName){case"bind_material":const P=E.getElementsByTagName("instance_material");for(let $=0;$<P.length;$++){const oe=P[$],ze=oe.getAttribute("symbol"),Ee=oe.getAttribute("target");x.materials[ze]=a(Ee)}break;case"skeleton":x.skeletons.push(a(E.textContent));break}}return x}function ct(M,x){const C=[],E=[];let P,$,oe;for(P=0;P<M.length;P++){const De=M[P];let qe;if(Ut(De))qe=at(De),lt(qe,x,C);else if(_i(De)){const Xe=rt.visualScenes[De].children;for(let Ve=0;Ve<Xe.length;Ve++){const Qe=Xe[Ve];if(Qe.type==="JOINT"){const Ke=at(Qe.id);lt(Ke,x,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",De)}for(P=0;P<x.length;P++)for($=0;$<C.length;$++)if(oe=C[$],oe.bone.name===x[P].name){E[P]=oe,oe.processed=!0;break}for(P=0;P<C.length;P++)oe=C[P],oe.processed===!1&&(E.push(oe),oe.processed=!0);const ze=[],Ee=[];for(P=0;P<E.length;P++)oe=E[P],ze.push(oe.bone),Ee.push(oe.boneInverse);return new Ro(ze,Ee)}function lt(M,x,C){M.traverse(function(E){if(E.isBone===!0){let P;for(let $=0;$<x.length;$++){const oe=x[$];if(oe.name===E.name){P=oe.boneInverse;break}}P===void 0&&(P=new Ye),C.push({bone:E,boneInverse:P,processed:!1})}})}function Vt(M){const x=[],C=M.matrix,E=M.nodes,P=M.type,$=M.instanceCameras,oe=M.instanceControllers,ze=M.instanceLights,Ee=M.instanceGeometries,De=M.instanceNodes;for(let _e=0,Xe=E.length;_e<Xe;_e++)x.push(at(E[_e]));for(let _e=0,Xe=$.length;_e<Xe;_e++){const Ve=Ze($[_e]);Ve!==null&&x.push(Ve.clone())}for(let _e=0,Xe=oe.length;_e<Xe;_e++){const Ve=oe[_e],Qe=ie(Ve.id),Ke=zt(Qe.id),Gt=jn(Ke,Ve.materials),It=Ve.skeletons,At=Qe.skin.joints,Tt=ct(It,At);for(let yi=0,Un=Gt.length;yi<Un;yi++){const Wr=Gt[yi];Wr.isSkinnedMesh&&(Wr.bind(Tt,Qe.skin.bindMatrix),Wr.normalizeSkinWeights()),x.push(Wr)}}for(let _e=0,Xe=ze.length;_e<Xe;_e++){const Ve=ke(ze[_e]);Ve!==null&&x.push(Ve.clone())}for(let _e=0,Xe=Ee.length;_e<Xe;_e++){const Ve=Ee[_e],Qe=zt(Ve.id),Ke=jn(Qe,Ve.materials);for(let Gt=0,It=Ke.length;Gt<It;Gt++)x.push(Ke[Gt])}for(let _e=0,Xe=De.length;_e<Xe;_e++)x.push(at(De[_e]).clone());let qe;if(E.length===0&&x.length===1)qe=x[0];else{qe=P==="JOINT"?new pc:new Xi;for(let _e=0;_e<x.length;_e++)qe.add(x[_e])}return qe.name=P==="JOINT"?M.sid:M.name,qe.matrix.copy(C),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe}const En=new si({name:gn.DEFAULT_MATERIAL_NAME,color:16711935});function tn(M,x){const C=[];for(let E=0,P=M.length;E<P;E++){const $=x[M[E]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",M[E]),C.push(En)):C.push(je($))}return C}function jn(M,x){const C=[];for(const E in M){const P=M[E],$=tn(P.materialKeys,x);if($.length===0&&(E==="lines"||E==="linestrips"?$.push(new mn):$.push(new ja)),E==="lines"||E==="linestrips")for(let De=0,qe=$.length;De<qe;De++){const _e=$[De];if(_e.isMeshPhongMaterial===!0||_e.isMeshLambertMaterial===!0){const Xe=new mn;Xe.color.copy(_e.color),Xe.opacity=_e.opacity,Xe.transparent=_e.transparent,$[De]=Xe}}const oe=P.data.attributes.skinIndex!==void 0,ze=$.length===1?$[0]:$;let Ee;switch(E){case"lines":Ee=new ai(P.data,ze);break;case"linestrips":Ee=new Ui(P.data,ze);break;case"triangles":case"polylist":oe?Ee=new Xu(P.data,ze):Ee=new Jt(P.data,ze);break}C.push(Ee)}return C}function Ut(M){return rt.nodes[M]!==void 0}function at(M){return _(rt.nodes[M],Vt)}function Is(M){const x={name:M.getAttribute("name"),children:[]};Fe(M);const C=n(M,"node");for(let E=0;E<C.length;E++)x.children.push(it(C[E]));rt.visualScenes[M.getAttribute("id")]=x}function Bt(M){const x=new Xi;x.name=M.name;const C=M.children;for(let E=0;E<C.length;E++){const P=C[E];x.add(at(P.id))}return x}function _i(M){return rt.visualScenes[M]!==void 0}function Ds(M){return _(rt.visualScenes[M],Bt)}function sr(M){const x=n(M,"instance_visual_scene")[0];return Ds(a(x.getAttribute("url")))}function Ns(){const M=rt.clips;if(l(M)===!0){if(l(rt.animations)===!1){const x=[];for(const C in rt.animations){const E=b(C);for(let P=0,$=E.length;P<$;P++)x.push(E[P])}Bo.push(new Ur("default",-1,x))}}else for(const x in M)Bo.push(Y(x))}function ln(M){let x="";const C=[M];for(;C.length;){const E=C.shift();E.nodeType===Node.TEXT_NODE?x+=E.textContent:(x+=`
`,C.push.apply(C,E.childNodes))}return x.trim()}if(e.length===0)return{scene:new fc};const ui=new DOMParser().parseFromString(e,"application/xml"),Ht=n(ui,"COLLADA")[0],_n=ui.getElementsByTagName("parsererror")[0];if(_n!==void 0){const M=n(_n,"div")[0];let x;return M?x=M.textContent:x=ln(_n),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,x),null}const Us=Ht.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Us);const Oo=u(n(Ht,"asset")[0]),Os=new Dm(this.manager);Os.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Bc;md&&(Bc=new md(this.manager),Bc.setPath(this.resourcePath||t));const Fo=new Le,Bo=[];let yh={},dg=0;const rt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(Ht,"library_animations","animation",m),d(Ht,"library_animation_clips","animation_clip",k),d(Ht,"library_controllers","controller",q),d(Ht,"library_images","image",re),d(Ht,"library_effects","effect",le),d(Ht,"library_materials","material",He),d(Ht,"library_cameras","camera",ot),d(Ht,"library_lights","light",Ue),d(Ht,"library_geometries","geometry",ye),d(Ht,"library_nodes","node",it),d(Ht,"library_visual_scenes","visual_scene",Is),d(Ht,"library_kinematics_models","kinematics_model",St),d(Ht,"library_physics_models","physics_model",Uo),d(Ht,"scene","instance_kinematics_scene",Fc),p(rt.animations,y),p(rt.clips,Q),p(rt.controllers,H),p(rt.images,ae),p(rt.effects,pe),p(rt.materials,Ne),p(rt.cameras,st),p(rt.lights,We),p(rt.geometries,vt),p(rt.visualScenes,Bt),Ns(),te();const ko=sr(n(Ht,"scene")[0]);return ko.animations=Bo,Oo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ko.rotation.set(-Math.PI/2,0,0)),ko.scale.multiplyScalar(Oo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Bo},kinematics:yh,library:rt,scene:ko}}}function gd(r,e,t){const n=r.slice();return n[14]=e[t],n}function _d(r){let e,t=`<!-- include dae: ${r[0]} ${r[1]} -->`,n,i,s;return i=new kt.Group({props:{scale:r[1],position:r[3],rotation:r[2],$$slots:{default:[_E]},$$scope:{ctx:r}}}),{c(){e=new vu(!1),n=dn(),mt(i.$$.fragment),this.h()},l(o){e=xu(o,!1),n=pn(o),gt(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Ct(o,n,a),_t(i,o,a),s=!0},p(o,a){(!s||a&3)&&t!==(t=`<!-- include dae: ${o[0]} ${o[1]} -->`)&&e.p(t);const c={};a&2&&(c.scale=o[1]),a&8&&(c.position=o[3]),a&4&&(c.rotation=o[2]),a&132080&&(c.$$scope={dirty:a,ctx:o}),i.$set(c)},i(o){s||(xe(i.$$.fragment,o),s=!0)},o(o){Te(i.$$.fragment,o),s=!1},d(o){o&&(e.d(),wt(n)),yt(i,o)}}}function yd(r){let e,t;return e=new kt.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:r[14].geometry,scale:r[14].scale?r[14].scale.toArray():[1,1,1],position:r[14].position?r[14].position.toArray():[0,0,0],material:r[14].material}}),e.$on("click",function(){Id(r[4])&&r[4].apply(this,arguments)}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){r=n;const s={};i&512&&(s.geometry=r[14].geometry),i&512&&(s.scale=r[14].scale?r[14].scale.toArray():[1,1,1]),i&512&&(s.position=r[14].position?r[14].position.toArray():[0,0,0]),i&512&&(s.material=r[14].material),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function mE(r){let e,t,n=Ji(r[9]),i=[];for(let o=0;o<n.length;o+=1)i[o]=yd(gd(r,n,o));const s=o=>Te(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ft()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ft()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ct(o,e,a),t=!0},p(o,a){if(a&528){n=Ji(o[9]);let c;for(c=0;c<n.length;c+=1){const l=gd(o,n,c);i[c]?(i[c].p(l,a),xe(i[c],1)):(i[c]=yd(l),i[c].c(),xe(i[c],1),i[c].m(e.parentNode,e))}for(Mn(),c=n.length;c<i.length;c+=1)s(c);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)xe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Te(i[a]);t=!1},d(o){o&&wt(e),Qa(i,o)}}}function gE(r){let e,t;return e=new kt.Group({props:{scale:r[5],position:r[6],rotation:r[7],$$slots:{default:[mE]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&32&&(s.scale=n[5]),i&64&&(s.position=n[6]),i&128&&(s.rotation=n[7]),i&131600&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function _E(r){let e,t;return e=new kt.Group({props:{rotation:r[8],$$slots:{default:[gE]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&256&&(s.rotation=n[8]),i&131824&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function yE(r){let e,t,n=r[9].length>0&&_d(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),Ct(i,e,s),t=!0},p(i,[s]){i[9].length>0?n?(n.p(i,s),s&512&&xe(n,1)):(n=_d(i),n.c(),xe(n,1),n.m(e.parentNode,e)):n&&(Mn(),Te(n,1,1,()=>{n=null}),Sn())},i(i){t||(xe(n),t=!0)},o(i){Te(n),t=!1},d(i){i&&wt(e),n&&n.d(i)}}}function vE(r,e,t){let{filename:n}=e,{color:i=new Le("pink")}=e,{scale:s=[1,1,1]}=e,{rotation:o=[0,0,0]}=e,{position:a=[0,0,0]}=e,{onclick:c}=e,l=[1,1,1],u=[0,0,0],h=[0,0,0],f=[0,0,0];const d=tg(pE);let p=[];return d.load(n).subscribe(m=>{if(!m)return;let g=m.scene;t(8,f=g.up.toArray()),t(5,l=g.scale.toArray()),t(6,u=g.position.toArray()),t(7,h=g.rotation?g.rotation.toArray():h),t(8,f=g.up.toArray()),t(8,f[0]*=Math.PI/2,f),t(8,f[1]*=Math.PI/2,f),t(8,f[2]*=Math.PI/2,f),console.log(m);let v=[];m.scene.traverse(y=>{y.type==="Mesh"&&v.push(y)}),t(9,p=v)}),r.$$set=m=>{"filename"in m&&t(0,n=m.filename),"color"in m&&t(10,i=m.color),"scale"in m&&t(1,s=m.scale),"rotation"in m&&t(2,o=m.rotation),"position"in m&&t(3,a=m.position),"onclick"in m&&t(4,c=m.onclick)},[n,s,o,a,c,l,u,h,f,p,i]}class xE extends Dn{constructor(e){super(),Nn(this,e,vE,yE,In,{filename:0,color:10,scale:1,rotation:2,position:3,onclick:4})}}class bE extends gn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new oi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const p=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(p,u,_))return!1;return!0}function n(l,u,h){for(let f=0,d=l.length;f<d;f++)if(l[f]!==u.getUint8(h+f))return!1;return!0}function i(l){const u=new DataView(l),h=u.getUint32(80,!0);let f,d,p,_=!1,m,g,v,y,b;for(let F=0;F<70;F++)u.getUint32(F,!1)==1129270351&&u.getUint8(F+4)==82&&u.getUint8(F+5)==61&&(_=!0,m=new Float32Array(h*3*3),g=u.getUint8(F+6)/255,v=u.getUint8(F+7)/255,y=u.getUint8(F+8)/255,b=u.getUint8(F+9)/255);const I=84,R=12*4+2,T=new ut,O=new Float32Array(h*3*3),S=new Float32Array(h*3*3),w=new Le;for(let F=0;F<h;F++){const j=I+F*R,he=u.getFloat32(j,!0),z=u.getFloat32(j+4,!0),W=u.getFloat32(j+8,!0);if(_){const k=u.getUint16(j+48,!0);k&32768?(f=g,d=v,p=y):(f=(k&31)/31,d=(k>>5&31)/31,p=(k>>10&31)/31)}for(let k=1;k<=3;k++){const Q=j+k*12,Y=F*3*3+(k-1)*3;O[Y]=u.getFloat32(Q,!0),O[Y+1]=u.getFloat32(Q+4,!0),O[Y+2]=u.getFloat32(Q+8,!0),S[Y]=he,S[Y+1]=z,S[Y+2]=W,_&&(w.set(f,d,p).convertSRGBToLinear(),m[Y]=w.r,m[Y+1]=w.g,m[Y+2]=w.b)}}return T.setAttribute("position",new Pt(O,3)),T.setAttribute("normal",new Pt(S,3)),_&&(T.setAttribute("color",new Pt(m,3)),T.hasColors=!0,T.alpha=b),T}function s(l){const u=new ut,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let p=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),g=new RegExp("normal"+_+_+_,"g"),v=[],y=[],b=[],I=new N;let R,T=0,O=0,S=0;for(;(R=h.exec(l))!==null;){O=S;const w=R[0],F=(R=d.exec(w))!==null?R[1]:"";for(b.push(F);(R=f.exec(w))!==null;){let z=0,W=0;const k=R[0];for(;(R=g.exec(k))!==null;)I.x=parseFloat(R[1]),I.y=parseFloat(R[2]),I.z=parseFloat(R[3]),W++;for(;(R=m.exec(k))!==null;)v.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),y.push(I.x,I.y,I.z),z++,S++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const j=O,he=S-O;u.userData.groupNames=b,u.addGroup(j,he,T),T++}return u.setAttribute("position",new Oe(v,3)),u.setAttribute("normal",new Oe(y,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?i(c):s(o(e))}}function vd(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new kt.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:r[7],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[ME]},$$scope:{ctx:r}}}),i.$on("click",function(){Id(r[5])&&r[5].apply(this,arguments)}),{c(){e=new vu(!1),n=dn(),mt(i.$$.fragment),this.h()},l(o){e=xu(o,!1),n=pn(o),gt(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Ct(o,n,a),_t(i,o,a),s=!0},p(o,a){r=o,(!s||a&5)&&t!==(t=`<!-- include stl: ${r[0]} ${r[2]} -->`)&&e.p(t);const c={};a&128&&(c.geometry=r[7]),a&4&&(c.scale=r[2]),a&16&&(c.position=r[4]),a&8&&(c.rotation=r[3]),a&514&&(c.$$scope={dirty:a,ctx:r}),i.$set(c)},i(o){s||(xe(i.$$.fragment,o),s=!0)},o(o){Te(i.$$.fragment,o),s=!1},d(o){o&&(e.d(),wt(n)),yt(i,o)}}}function ME(r){let e,t;return e=new kt.MeshLambertMaterial({props:{color:r[1]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function SE(r){let e,t,n=r[7]&&vd(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),Ct(i,e,s),t=!0},p(i,[s]){i[7]?n?(n.p(i,s),s&128&&xe(n,1)):(n=vd(i),n.c(),xe(n,1),n.m(e.parentNode,e)):n&&(Mn(),Te(n,1,1,()=>{n=null}),Sn())},i(i){t||(xe(n),t=!0)},o(i){Te(n),t=!1},d(i){i&&wt(e),n&&n.d(i)}}}function wE(r,e,t){let n,i=yu,s=()=>(i(),i=vg(d,p=>t(7,n=p)),d);r.$$.on_destroy.push(()=>i());let{filename:o}=e,{color:a=new Le("pink")}=e,{scale:c=[1,1,1]}=e,{rotation:l=[0,0,0]}=e,{position:u=[0,0,0]}=e,{onclick:h}=e;const f=tg(bE);let d;return r.$$set=p=>{"filename"in p&&t(0,o=p.filename),"color"in p&&t(1,a=p.color),"scale"in p&&t(2,c=p.scale),"rotation"in p&&t(3,l=p.rotation),"position"in p&&t(4,u=p.position),"onclick"in p&&t(5,h=p.onclick)},r.$$.update=()=>{r.$$.dirty&1&&s(t(6,d=f.load(o)))},[o,a,c,l,u,h,d,n]}class EE extends Dn{constructor(e){super(),Nn(this,e,wE,SE,In,{filename:0,color:1,scale:2,rotation:3,position:4,onclick:5})}}const{subscribe:AE,set:hg}=on(void 0),TE=hg,CE=()=>{hg(void 0)},RE={subscribe:AE,select:TE,unselect:CE};function PE(r){let e,t;return e=new kt.Mesh({props:{castShadow:!0,receiveShadow:!0,scale:r[2],position:r[4],rotation:r[5],$$slots:{default:[NE]},$$scope:{ctx:r}}}),e.$on("click",r[7]),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.scale=n[2]),i&1027&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function LE(r){let e,t,n,i;const s=[OE,UE],o=[];function a(c,l){return c[3].type==="stl"?0:c[3].type==="dae"?1:-1}return~(e=a(r))&&(t=o[e]=s[e](r)),{c(){t&&t.c(),n=Ft()},l(c){t&&t.l(c),n=Ft()},m(c,l){~e&&o[e].m(c,l),Ct(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(t&&(Mn(),Te(o[u],1,1,()=>{o[u]=null}),Sn()),~e?(t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),xe(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(xe(t),i=!0)},o(c){Te(t),i=!1},d(c){c&&wt(n),~e&&o[e].d(c)}}}function IE(r){let e,t;return e=new kt.BoxGeometry({}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:yu,i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function DE(r){let e,t;return e=new kt.CylinderGeometry({props:{args:[r[1].radius,r[1].radius,r[1].length]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.args=[n[1].radius,n[1].radius,n[1].length]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function NE(r){let e,t,n,i,s;const o=[DE,IE],a=[];function c(l,u){return l[0].type==="cylinder"?0:l[0].type==="box"?1:-1}return~(e=c(r))&&(t=a[e]=o[e](r)),i=new kt.MeshBasicMaterial({props:{color:r[6]}}),{c(){t&&t.c(),n=dn(),mt(i.$$.fragment)},l(l){t&&t.l(l),n=pn(l),gt(i.$$.fragment,l)},m(l,u){~e&&a[e].m(l,u),Ct(l,n,u),_t(i,l,u),s=!0},p(l,u){let h=e;e=c(l),e===h?~e&&a[e].p(l,u):(t&&(Mn(),Te(a[h],1,1,()=>{a[h]=null}),Sn()),~e?(t=a[e],t?t.p(l,u):(t=a[e]=o[e](l),t.c()),xe(t,1),t.m(n.parentNode,n)):t=null)},i(l){s||(xe(t),xe(i.$$.fragment,l),s=!0)},o(l){Te(t),Te(i.$$.fragment,l),s=!1},d(l){l&&wt(n),~e&&a[e].d(l),yt(i,l)}}}function UE(r){let e,t;return e=new xE({props:{onclick:r[7],filename:r[3].filename,position:r[4],rotation:r[5],color:r[6],scale:r[2]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.filename=n[3].filename),i&4&&(s.scale=n[2]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function OE(r){let e,t;return e=new EE({props:{onclick:r[7],filename:r[3].filename,position:r[4],rotation:r[5],color:r[6],scale:r[2]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.filename=n[3].filename),i&4&&(s.scale=n[2]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function FE(r){let e,t,n,i;const s=[LE,PE],o=[];function a(c,l){return c[0].type==="mesh"&&c[3]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=Ft()},l(c){t.l(c),n=Ft()},m(c,l){o[e].m(c,l),Ct(c,n,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Mn(),Te(o[u],1,1,()=>{o[u]=null}),Sn(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),xe(t,1),t.m(n.parentNode,n))},i(c){i||(xe(t),i=!0)},o(c){Te(t),i=!1},d(c){c&&wt(n),o[e].d(c)}}}function BE(r,e,t){let{visual:n}=e,{link:i}=e,s;const o=n.origin_xyz||[0,0,0],a=n.origin_rpy||[0,0,0],c=dE(n.color_rgba);let l=[1,1,1],u;switch(n.type){case"mesh":u=n.geometry,l=u.scale;break;case"box":n.geometry;break;case"cylinder":s=n.geometry;break}const h=()=>{RE.select(i)};return Zw(),r.$$set=f=>{"visual"in f&&t(0,n=f.visual),"link"in f&&t(8,i=f.link)},[n,s,l,u,o,a,c,h,i]}class kE extends Dn{constructor(e){super(),Nn(this,e,BE,FE,In,{visual:0,link:8})}}function xd(r){const e=r.joints,t=[];for(const n of e){let i=!0;for(const s of e)if(n.parent.name===s.child.name){i=!1;break}i&&t.push(n)}return t}function bd(r,e){const t=[],n=r.joints;if(!n)return[];for(const i of n)i.parent===e&&t.push(i);return t}class zE{constructor(e,t=""){Nt(this,"filename");Nt(this,"colors",{});Nt(this,"robot",{name:"",links:{},joints:[]});Nt(this,"prefix","");Nt(this,"xmlRobotNode");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text())}reset(){this.robot={name:"",links:{},joints:[]}}fromString(e){this.reset();let t=new window.DOMParser().parseFromString(e,"text/xml");return this.xmlRobotNode=t.documentElement,this.parseRobotXMLNode(t.documentElement)}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.robot.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),this.robot}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],s=this.colorFromMaterial(i);s&&(this.colors[s.name]=s.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:fs(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("visual"),o={visual:[]};i.hasAttribute("name")&&(o.name=i.getAttribute("name"),this.robot.links[o.name]=o);for(let a=0;a<s.length;a++)o.visual.push(this.parseVisual(s[a]))}}parseVisual(e){let t,n,i,s="pink";const o={};for(let a=0;a<e.childNodes.length;a++){const c=e.childNodes[a];switch(c.nodeName){case"geometry":this.parseGeometry(c,o);break;case"origin":t=fs(c),t&&(o.origin_xyz=t),n=fs(c,"rpy"),n&&(o.origin_rpy=n);break;case"material":i=c.getElementsByTagName("color"),i.length>0&&i[0].hasAttribute("rgba")?o.color_rgba=fs(i[0],"rgba"):c.hasAttribute("name")&&(s=c.getAttribute("name"),o.color_rgba=this.colors[s])}}return o}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let s=[1,1,1],o=i.getAttribute("scale");if(o){const h=o.split(" ");for(const f in h)s[f]=parseFloat(h[f])}let a=i.getAttribute("filename");a=a.replace("package:/",this.prefix);let c="stl";switch(a.substring(a.length-3).toLocaleLowerCase()){case"fbx":c="fbx";break;case"obj":c="obj";break;case"stl":c="stl";break;case"dae":c="dae";break;default:throw new Error("Unknown type "+a)}t.geometry={filename:a,type:c,scale:s},t.type="mesh";return;case"cylinder":const l={};i.hasAttribute("length")&&(l.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(l.radius=parseFloat(i.getAttribute("radius"))),t.geometry=l,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const f=i.getAttribute("size").split(" ");for(const d in f)u.size[d]=parseFloat(f[d])}t.geometry=u;return}}}parseJoints(e){const t=this.robot.links,n=this.robot.joints,i=e.getElementsByTagName("joint");for(let s=0;s<i.length;s++){const o=i[s],a=o.getElementsByTagName("origin");let c=[0,0,0],l=[0,0,0];if(a.length===1){let p=fs(a[0]);p&&(l=p);let _=fs(a[0],"rpy");_&&(c=_)}let u;const h=o.getElementsByTagName("parent");if(h.length===1){const p=h[0].getAttribute("link");p&&t[p]?u=t[p]:u={name:p,visual:[]}}let f;const d=o.getElementsByTagName("child");if(d.length===1){const p=d[0].getAttribute("link");p&&t[p]?f=t[p]:f={name:p,visual:[]}}if(f&&u){const p={name:o.getAttribute("name")||void 0,origin_rpy:c,origin_xyz:l,parent:u,child:f};n.push(p)}}}getURDFXML(){return this.xmlRobotNode?`<?xml version="1.0" ?>
`+this.xmlRobotNode.outerHTML:""}}function Md(r,e,t){const n=r.slice();return n[2]=e[t],n}function Sd(r,e,t){const n=r.slice();return n[5]=e[t],n}function wd(r){let e,t;return e=new kt.Group({props:{rotation:r[0].origin_rpy,position:r[0].origin_xyz,$$slots:{default:[VE]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.rotation=n[0].origin_rpy),i&1&&(s.position=n[0].origin_xyz),i&259&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Ed(r){let e,t;return e=new fg({props:{joint:r[5]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.joint=n[5]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Ad(r){let e,t,n,i;e=new kE({props:{visual:r[2],link:r[0].child}});let s=Ji(bd(r[1],r[0].child)),o=[];for(let c=0;c<s.length;c+=1)o[c]=Ed(Sd(r,s,c));const a=c=>Te(o[c],1,1,()=>{o[c]=null});return{c(){mt(e.$$.fragment),t=dn();for(let c=0;c<o.length;c+=1)o[c].c();n=Ft()},l(c){gt(e.$$.fragment,c),t=pn(c);for(let l=0;l<o.length;l+=1)o[l].l(c);n=Ft()},m(c,l){_t(e,c,l),Ct(c,t,l);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(c,l);Ct(c,n,l),i=!0},p(c,l){const u={};if(l&1&&(u.visual=c[2]),l&1&&(u.link=c[0].child),e.$set(u),l&3){s=Ji(bd(c[1],c[0].child));let h;for(h=0;h<s.length;h+=1){const f=Sd(c,s,h);o[h]?(o[h].p(f,l),xe(o[h],1)):(o[h]=Ed(f),o[h].c(),xe(o[h],1),o[h].m(n.parentNode,n))}for(Mn(),h=s.length;h<o.length;h+=1)a(h);Sn()}},i(c){if(!i){xe(e.$$.fragment,c);for(let l=0;l<s.length;l+=1)xe(o[l]);i=!0}},o(c){Te(e.$$.fragment,c),o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)Te(o[l]);i=!1},d(c){c&&(wt(t),wt(n)),yt(e,c),Qa(o,c)}}}function VE(r){let e,t,n=Ji(r[0].child.visual),i=[];for(let o=0;o<n.length;o+=1)i[o]=Ad(Md(r,n,o));const s=o=>Te(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ft()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ft()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ct(o,e,a),t=!0},p(o,a){if(a&3){n=Ji(o[0].child.visual);let c;for(c=0;c<n.length;c+=1){const l=Md(o,n,c);i[c]?(i[c].p(l,a),xe(i[c],1)):(i[c]=Ad(l),i[c].c(),xe(i[c],1),i[c].m(e.parentNode,e))}for(Mn(),c=n.length;c<i.length;c+=1)s(c);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)xe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Te(i[a]);t=!1},d(o){o&&wt(e),Qa(i,o)}}}function HE(r){let e,t=`<!-- Joint ${r[0].name} -->`,n,i,s,o=r[1]&&wd(r);return{c(){e=new vu(!1),n=dn(),o&&o.c(),i=Ft(),this.h()},l(a){e=xu(a,!1),n=pn(a),o&&o.l(a),i=Ft(),this.h()},h(){e.a=n},m(a,c){e.m(t,a,c),Ct(a,n,c),o&&o.m(a,c),Ct(a,i,c),s=!0},p(a,[c]){(!s||c&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t),a[1]?o?(o.p(a,c),c&2&&xe(o,1)):(o=wd(a),o.c(),xe(o,1),o.m(i.parentNode,i)):o&&(Mn(),Te(o,1,1,()=>{o=null}),Sn())},i(a){s||(xe(o),s=!0)},o(a){Te(o),s=!1},d(a){a&&(e.d(),wt(n),wt(i)),o&&o.d(a)}}}function GE(r,e,t){let n;sn(r,Ka,s=>t(1,n=s));let{joint:i}=e;return r.$$set=s=>{"joint"in s&&t(0,i=s.joint)},[i,n]}class fg extends Dn{constructor(e){super(),Nn(this,e,GE,HE,In,{joint:0})}}function Td(r,e,t){const n=r.slice();return n[3]=e[t],n}function Cd(r){let e,t;return e=new kt.Group({props:{position:r[1],quaternion:r[0],$$slots:{default:[WE]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.position=n[1]),i&1&&(s.quaternion=n[0]),i&68&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Rd(r){let e,t;return e=new fg({props:{joint:r[3]}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.joint=n[3]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function WE(r){let e,t,n=Ji(xd(r[2])),i=[];for(let o=0;o<n.length;o+=1)i[o]=Rd(Td(r,n,o));const s=o=>Te(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ft()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ft()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ct(o,e,a),t=!0},p(o,a){if(a&4){n=Ji(xd(o[2]));let c;for(c=0;c<n.length;c+=1){const l=Td(o,n,c);i[c]?(i[c].p(l,a),xe(i[c],1)):(i[c]=Rd(l),i[c].c(),xe(i[c],1),i[c].m(e.parentNode,e))}for(Mn(),c=n.length;c<i.length;c+=1)s(c);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)xe(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Te(i[a]);t=!1},d(o){o&&wt(e),Qa(i,o)}}}function XE(r){let e,t,n=r[2]&&Cd(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),Ct(i,e,s),t=!0},p(i,[s]){i[2]?n?(n.p(i,s),s&4&&xe(n,1)):(n=Cd(i),n.c(),xe(n,1),n.m(e.parentNode,e)):n&&(Mn(),Te(n,1,1,()=>{n=null}),Sn())},i(i){t||(xe(n),t=!0)},o(i){Te(n),t=!1},d(i){i&&wt(e),n&&n.d(i)}}}function qE(r,e,t){let n;sn(r,Ka,o=>t(2,n=o));let{position:i=[0,0,0]}=e,{quaternion:s=void 0}=e;if(!s){const o=new fn;o.setFromAxisAngle(new N(-1,0,0),Math.PI*.5),s=[o.x,o.y,o.z,o.w]}return r.$$set=o=>{"position"in o&&t(1,i=o.position),"quaternion"in o&&t(0,s=o.quaternion)},[s,i,n]}class YE extends Dn{constructor(e){super(),Nn(this,e,qE,XE,In,{position:1,quaternion:0})}}function Pd(r){let e,t;return e=new Ew({props:{scale:r[1]*4,far:r[1],blur:2}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]*4),i&2&&(s.far=n[1]),e.$set(s)},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function ZE(r){let e,t,n=r[2]&&Pd(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),Ct(i,e,s),t=!0},p(i,s){i[2]?n?(n.p(i,s),s&4&&xe(n,1)):(n=Pd(i),n.c(),xe(n,1),n.m(e.parentNode,e)):n&&(Mn(),Te(n,1,1,()=>{n=null}),Sn())},i(i){t||(xe(n),t=!0)},o(i){Te(n),t=!1},d(i){i&&wt(e),n&&n.d(i)}}}function jE(r){let e,t,n,i,s,o,a,c;return e=new kt.AmbientLight({props:{intensity:r[0]/3}}),n=new kt.SpotLight({props:{penumbra:1,position:[r[8].main[0]*r[1],r[8].main[1]*r[1],r[8].main[2]*r[1]],intensity:r[0]*2,castShadow:r[2],"shadow-bias":r[3],"shadow-normalBias":r[4],"shadow-mapSize":r[5]}}),s=new kt.PointLight({props:{position:[r[8].fill[0]*r[1],r[8].fill[1]*r[1],r[8].fill[2]*r[1]],intensity:r[0]}}),a=new kt.Group({props:{position:[0,-r[6]/2-r[7]/2,0],$$slots:{default:[ZE]},$$scope:{ctx:r}}}),{c(){mt(e.$$.fragment),t=dn(),mt(n.$$.fragment),i=dn(),mt(s.$$.fragment),o=dn(),mt(a.$$.fragment)},l(l){gt(e.$$.fragment,l),t=pn(l),gt(n.$$.fragment,l),i=pn(l),gt(s.$$.fragment,l),o=pn(l),gt(a.$$.fragment,l)},m(l,u){_t(e,l,u),Ct(l,t,u),_t(n,l,u),Ct(l,i,u),_t(s,l,u),Ct(l,o,u),_t(a,l,u),c=!0},p(l,[u]){const h={};u&1&&(h.intensity=l[0]/3),e.$set(h);const f={};u&2&&(f.position=[l[8].main[0]*l[1],l[8].main[1]*l[1],l[8].main[2]*l[1]]),u&1&&(f.intensity=l[0]*2),u&4&&(f.castShadow=l[2]),u&8&&(f["shadow-bias"]=l[3]),u&16&&(f["shadow-normalBias"]=l[4]),u&32&&(f["shadow-mapSize"]=l[5]),n.$set(f);const d={};u&2&&(d.position=[l[8].fill[0]*l[1],l[8].fill[1]*l[1],l[8].fill[2]*l[1]]),u&1&&(d.intensity=l[0]),s.$set(d);const p={};u&192&&(p.position=[0,-l[6]/2-l[7]/2,0]),u&2054&&(p.$$scope={dirty:u,ctx:l}),a.$set(p)},i(l){c||(xe(e.$$.fragment,l),xe(n.$$.fragment,l),xe(s.$$.fragment,l),xe(a.$$.fragment,l),c=!0)},o(l){Te(e.$$.fragment,l),Te(n.$$.fragment,l),Te(s.$$.fragment,l),Te(a.$$.fragment,l),c=!1},d(l){l&&(wt(t),wt(i),wt(o)),yt(e,l),yt(n,l),yt(s,l),yt(a,l)}}}function JE(r,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:s=!0}=e,{preset_name:o="rembrandt"}=e,{shadowBias:a=-1e-4}=e,{normalBias:c=0}=e,{shadowSize:l=256}=e,{height:u=1}=e,{shadowOffset:h=1}=e;const d={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[o];return r.$$set=p=>{"intensity"in p&&t(0,n=p.intensity),"radius"in p&&t(1,i=p.radius),"shadows"in p&&t(2,s=p.shadows),"preset_name"in p&&t(9,o=p.preset_name),"shadowBias"in p&&t(3,a=p.shadowBias),"normalBias"in p&&t(4,c=p.normalBias),"shadowSize"in p&&t(5,l=p.shadowSize),"height"in p&&t(6,u=p.height),"shadowOffset"in p&&t(7,h=p.shadowOffset)},[n,i,s,a,c,l,u,h,d,o]}class KE extends Dn{constructor(e){super(),Nn(this,e,JE,jE,In,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function $E(r,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:s=[0,0,0]}=e;const{scene:o,invalidate:a}=gi(),c=new qm(n,i);return c.position.x=s[0],c.position.y=s[1],c.position.z=s[2],o.add(c),Hn(()=>{o.remove(c)}),r.$$set=l=>{"size"in l&&t(0,n=l.size),"divisions"in l&&t(1,i=l.divisions),"position"in l&&t(2,s=l.position)},[n,i,s]}class QE extends Dn{constructor(e){super(),Nn(this,e,$E,null,In,{size:0,divisions:1,position:2})}}function e1(r){let e,t;return e=new Dw({props:{enableZoom:!0}}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},p:yu,i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function Ld(r){let e,t;return e=new YE({}),{c(){mt(e.$$.fragment)},l(n){gt(e.$$.fragment,n)},m(n,i){_t(e,n,i),t=!0},i(n){t||(xe(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){yt(e,n)}}}function t1(r){let e,t,n,i,s,o,a,c,l,u,h,f,d,p;e=new kt.PointLight({props:{color:"white",intensity:.2,position:[0,5,0]}}),n=new kt.PointLight({props:{color:"blue",intensity:.5,position:[5,5,0]}}),s=new kt.PointLight({props:{color:"yellow",intensity:.5,position:[-5,-5,0]}}),a=new kt.PerspectiveCamera({props:{makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[e1,({ref:m})=>({8:m}),({ref:m})=>m?256:0]},$$scope:{ctx:r}}}),l=new KE({props:{preset_name:"soft"}}),h=new QE({});let _=r[2]&&Ld();return{c(){mt(e.$$.fragment),t=dn(),mt(n.$$.fragment),i=dn(),mt(s.$$.fragment),o=dn(),mt(a.$$.fragment),c=dn(),mt(l.$$.fragment),u=dn(),mt(h.$$.fragment),f=dn(),_&&_.c(),d=Ft()},l(m){gt(e.$$.fragment,m),t=pn(m),gt(n.$$.fragment,m),i=pn(m),gt(s.$$.fragment,m),o=pn(m),gt(a.$$.fragment,m),c=pn(m),gt(l.$$.fragment,m),u=pn(m),gt(h.$$.fragment,m),f=pn(m),_&&_.l(m),d=Ft()},m(m,g){_t(e,m,g),Ct(m,t,g),_t(n,m,g),Ct(m,i,g),_t(s,m,g),Ct(m,o,g),_t(a,m,g),Ct(m,c,g),_t(l,m,g),Ct(m,u,g),_t(h,m,g),Ct(m,f,g),_&&_.m(m,g),Ct(m,d,g),p=!0},p(m,g){const v={};g&512&&(v.$$scope={dirty:g,ctx:m}),a.$set(v),m[2]?_?g&4&&xe(_,1):(_=Ld(),_.c(),xe(_,1),_.m(d.parentNode,d)):_&&(Mn(),Te(_,1,1,()=>{_=null}),Sn())},i(m){p||(xe(e.$$.fragment,m),xe(n.$$.fragment,m),xe(s.$$.fragment,m),xe(a.$$.fragment,m),xe(l.$$.fragment,m),xe(h.$$.fragment,m),xe(_),p=!0)},o(m){Te(e.$$.fragment,m),Te(n.$$.fragment,m),Te(s.$$.fragment,m),Te(a.$$.fragment,m),Te(l.$$.fragment,m),Te(h.$$.fragment,m),Te(_),p=!1},d(m){m&&(wt(t),wt(i),wt(o),wt(c),wt(u),wt(f),wt(d)),yt(e,m),yt(n,m),yt(s,m),yt(a,m),yt(l,m),yt(h,m),_&&_.d(m)}}}function n1(r){let e,t,n,i,s;return xg(r[3]),t=new VS({props:{shadows:!0,size:{height:r[0],width:r[1]},rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[t1]},$$scope:{ctx:r}}}),{c(){e=Dd("main"),mt(t.$$.fragment),this.h()},l(o){e=Nd(o,"MAIN",{class:!0});var a=Ud(e);gt(t.$$.fragment,a),a.forEach(wt),this.h()},h(){Od(e,"class","main-content")},m(o,a){Ct(o,e,a),_t(t,e,null),n=!0,i||(s=bg(window,"resize",r[3]),i=!0)},p(o,[a]){const c={};a&3&&(c.size={height:o[0],width:o[1]}),a&516&&(c.$$scope={dirty:a,ctx:o}),t.$set(c)},i(o){n||(xe(t.$$.fragment,o),n=!0)},o(o){Te(t.$$.fragment,o),n=!1},d(o){o&&wt(e),yt(t),i=!1,s()}}}const i1="turtlebot3_burger";function r1(r,e,t){let n,i;sn(r,Mg,h=>t(5,n=h)),sn(r,Ka,h=>t(2,i=h));let s=0,o=0,a=n.url.href;a=a.endsWith("/")?a.substring(0,a.length-1):a;const c=`turtlebot3_description/${i1}.xml`,l=new zE(`${a}/${c}`,a);Mo(async()=>{let f=await l.load();Ka.set(l.fromString(f))});function u(){t(0,s=window.innerHeight),t(1,o=window.innerWidth)}return[s,o,i,u]}class f1 extends Dn{constructor(e){super(),Nn(this,e,r1,n1,In,{})}}export{f1 as component};
