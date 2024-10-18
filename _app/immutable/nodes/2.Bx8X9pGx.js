var Rg=Object.defineProperty;var Pg=(s,e,t)=>e in s?Rg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ot=(s,e,t)=>Pg(s,typeof e!="symbol"?e+"":e,t);import{x as Yn,y as Xn,t as Ig,z as qn,s as Nn,c as ts,u as ns,g as is,a as ss,b as rn,A as Lg,o as Ro,e as kh,B as Bc,C as Er,D as Ji,E as Ka,i as np,n as zh,F as Dg,k as Ng}from"../chunks/scheduler.D8eNju6M.js";import{S as Un,i as On,t as _e,a as be,u as ut,v as ft,w as dt,x as pt,e as ip,c as sp,d as rp,g as xt,o as op,j as Ct,q as Mn,n as Sn,s as dn,m as kt,h as pn,H as Vh,y as Hh,z as kc,A as Ug}from"../chunks/index.umT5ir2Y.js";import{p as Og}from"../chunks/stores.BoextoCb.js";import{d as Gh,w as on,r as Fg}from"../chunks/entry.JlvodMyi.js";function Qi(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function ap(s,e){const t={},n={},i={$$scope:1};let r=s.length;for(;r--;){const o=s[r],a=e[r];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);s[r]=a}else for(const c in o)i[c]=1}for(const o in n)o in t||(t[o]=void 0);return t}function cp(s){return typeof s=="object"&&s!==null?s:{}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="169",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lp=0,xh=1,hp=2,Bg=3,kg=0,Wh=1,zc=2,di=3,_i=0,Ln=1,oi=2,Ni=0,Ns=1,bh=2,Mh=3,Sh=4,up=5,ji=100,fp=101,dp=102,pp=103,mp=104,gp=200,_p=201,yp=202,vp=203,ja=204,$a=205,xp=206,bp=207,Mp=208,Sp=209,wp=210,Ep=211,Ap=212,Tp=213,Cp=214,Ja=0,Qa=1,ec=2,Bs=3,tc=4,nc=5,ic=6,sc=7,Io=0,Rp=1,Pp=2,Ui=0,Ip=1,Lp=2,Dp=3,Xh=4,Np=5,Up=6,Op=7,wh="attached",Fp="detached",Vc=300,Oi=301,es=302,co=303,lo=304,Pr=306,Li=1e3,Gn=1001,ho=1002,hn=1003,qh=1004,zg=1004,vr=1005,Vg=1005,nn=1006,Qr=1007,Hg=1007,ai=1008,Gg=1008,yi=1009,Yh=1010,Zh=1011,Ar=1012,Hc=1013,Fi=1014,Wn=1015,Ir=1016,Gc=1017,Wc=1018,ks=1020,Kh=35902,jh=1021,$h=1022,In=1023,Jh=1024,Qh=1025,Us=1026,zs=1027,Xc=1028,Lo=1029,eu=1030,qc=1031,Wg=1032,Yc=1033,eo=33776,to=33777,no=33778,io=33779,rc=35840,oc=35841,ac=35842,cc=35843,lc=36196,hc=37492,uc=37496,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,_c=37813,yc=37814,vc=37815,xc=37816,bc=37817,Mc=37818,Sc=37819,wc=37820,Ec=37821,so=36492,Ac=36494,Tc=36495,tu=36283,Cc=36284,Rc=36285,Pc=36286,Bp=2200,kp=2201,zp=2202,uo=2300,Ic=2301,qa=2302,Rs=2400,Ps=2401,fo=2402,Zc=2500,nu=2501,Xg=0,qg=1,Yg=2,Vp=3200,Hp=3201,Zg=3202,Kg=3203,rs=0,Gp=1,Pi="",Jt="srgb",ki="srgb-linear",Kc="display-p3",Do="display-p3-linear",po="linear",Bt="srgb",mo="rec709",go="p3",jg=0,ws=7680,$g=7681,Jg=7682,Qg=7683,e_=34055,t_=34056,n_=5386,i_=512,s_=513,r_=514,o_=515,a_=516,c_=517,l_=518,Eh=519,Wp=512,Xp=513,qp=514,iu=515,Yp=516,Zp=517,Kp=518,jp=519,_o=35044,h_=35048,u_=35040,f_=35045,d_=35049,p_=35041,m_=35046,g_=35050,__=35042,y_="100",Ah="300 es",pi=2e3,yo=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gu=1234567;const Os=Math.PI/180,Tr=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function su(s,e){return(s%e+e)%e}function v_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function x_(s,e,t){return s!==e?(t-s)/(e-s):0}function ro(s,e,t){return(1-t)*s+t*e}function b_(s,e,t,n){return ro(s,e,1-Math.exp(-t*n))}function M_(s,e=1){return e-Math.abs(su(s,e*2)-e)}function S_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function w_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function E_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A_(s,e){return s+Math.random()*(e-s)}function T_(s){return s*(.5-Math.random())}function C_(s){s!==void 0&&(Gu=s);let e=Gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R_(s){return s*Os}function P_(s){return s*Tr}function I_(s){return(s&s-1)===0&&s!==0}function L_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function D_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function N_(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const As={DEG2RAD:Os,RAD2DEG:Tr,generateUUID:jn,clamp:Kt,euclideanModulo:su,mapLinear:v_,inverseLerp:x_,lerp:ro,damp:b_,pingpong:M_,smoothstep:S_,smootherstep:w_,randInt:E_,randFloat:A_,randFloatSpread:T_,seededRandom:C_,degToRad:R_,radToDeg:P_,isPowerOfTwo:I_,ceilPowerOfTwo:L_,floorPowerOfTwo:D_,setQuaternionFromProperEuler:N_,normalize:ht,denormalize:Pn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,i,r,o,a,c,l){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],y=i[4],b=i[7],U=i[2],I=i[5],C=i[8];return r[0]=o*_+a*x+c*U,r[3]=o*m+a*y+c*I,r[6]=o*g+a*b+c*C,r[1]=l*_+h*x+u*U,r[4]=l*m+h*y+u*I,r[7]=l*g+h*b+u*C,r[2]=f*_+d*x+p*U,r[5]=f*m+d*y+p*I,r[8]=f*g+d*b+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new lt;function $p(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const U_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function xr(s,e){return new U_[s](e)}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jp(){const s=vo("canvas");return s.style.display="block",s}const Wu={};function Ya(s){s in Wu||(Wu[s]=!0,console.warn(s))}function O_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function F_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xu=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qu=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[ki]:{transfer:po,primaries:mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Jt]:{transfer:Bt,primaries:mo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Do]:{transfer:po,primaries:go,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(qu),fromReference:s=>s.applyMatrix3(Xu)},[Kc]:{transfer:Bt,primaries:go,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(qu),fromReference:s=>s.applyMatrix3(Xu).convertLinearToSRGB()}},k_=new Set([ki,Do]),gt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!k_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Br[e].toReference,i=Br[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Br[s].primaries},getTransfer:function(s){return s===Pi?po:Br[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Br[e].luminanceCoefficients)}};function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let er;class Qp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=vo("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Is{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Pl(i[o].image)):r.push(Pl(i[o]))}else r=Pl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;class jt extends vi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Gn,i=Gn,r=nn,o=ai,a=In,c=yi,l=jt.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=jn(),this.name="",this.source=new Is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Vc;jt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,b=(d+1)/2,U=(g+1)/2,I=(h+f)/4,C=(u+_)/4,N=(p+m)/4;return y>b&&y>U?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=I/n,r=C/n):b>U?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=I/i,r=N/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=C/r,i=N/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class em extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Is(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends em{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jc extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends $n{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new jc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ru extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G_ extends $n{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ru(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==p){let m=1-a;const g=c*f+l*d+h*p+u*_,x=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const U=Math.sqrt(y),I=Math.atan2(U,g*x);m=Math.sin(m*I)/U,a=Math.sin(a*I)/U}const b=a*x;if(c=c*m+f*b,l=l*m+d*b,h=h*m+p*b,u=u*m+_*b,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Il=new L,Yu=new un;class Dn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Qo.subVectors(this.max,kr),tr.subVectors(e.a,kr),nr.subVectors(e.b,kr),ir.subVectors(e.c,kr),Vi.subVectors(nr,tr),Hi.subVectors(ir,nr),us.subVectors(tr,ir);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-us.z,us.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,us.z,0,-us.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-us.y,us.x,0];return!Ll(t,tr,nr,ir,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,tr,nr,ir,Qo))?!1:(ea.crossVectors(Vi,Hi),t=[ea.x,ea.y,ea.z],Ll(t,tr,nr,ir,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new L,new L,new L,new L,new L,new L,new L,new L],ni=new L,Jo=new Dn,tr=new L,nr=new L,ir=new L,Vi=new L,Hi=new L,us=new L,kr=new L,Qo=new L,ea=new L,fs=new L;function Ll(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fs.fromArray(s,r);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),c=e.dot(fs),l=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const W_=new Dn,zr=new L,Dl=new L;class bn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):W_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Dl)),this.expandByPoint(zr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new L,Nl=new L,ta=new L,Gi=new L,Ul=new L,na=new L,Ol=new L;class qs{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nl.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Nl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=Gi.dot(this.direction),c=-Gi.dot(ta),l=Gi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nl).addScaledVector(ta,f),d}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){Ul.subVectors(t,e),na.subVectors(n,e),Ol.crossVectors(Ul,na);let o=this.direction.dot(Ol),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const c=a*this.direction.dot(na.crossVectors(Gi,na));if(c<0)return null;const l=a*this.direction.dot(Ul.cross(Gi));if(l<0||c+l>o)return null;const h=-a*Gi.dot(Ol);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,p,_,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,p=l*h,_=l*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,p=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,q_)}lookAt(e,t,n){const i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Wi.crossVectors(n,Zn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Wi.crossVectors(n,Zn)),Wi.normalize(),ia.crossVectors(Zn,Wi),i[0]=Wi.x,i[4]=ia.x,i[8]=Zn.x,i[1]=Wi.y,i[5]=ia.y,i[9]=Zn.y,i[2]=Wi.z,i[6]=ia.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],y=n[7],b=n[11],U=n[15],I=i[0],C=i[4],N=i[8],k=i[12],v=i[1],w=i[5],W=i[9],q=i[13],Y=i[2],re=i[6],F=i[10],se=i[14],H=i[3],fe=i[7],me=i[11],ue=i[15];return r[0]=o*I+a*v+c*Y+l*H,r[4]=o*C+a*w+c*re+l*fe,r[8]=o*N+a*W+c*F+l*me,r[12]=o*k+a*q+c*se+l*ue,r[1]=h*I+u*v+f*Y+d*H,r[5]=h*C+u*w+f*re+d*fe,r[9]=h*N+u*W+f*F+d*me,r[13]=h*k+u*q+f*se+d*ue,r[2]=p*I+_*v+m*Y+g*H,r[6]=p*C+_*w+m*re+g*fe,r[10]=p*N+_*W+m*F+g*me,r[14]=p*k+_*q+m*se+g*ue,r[3]=x*I+y*v+b*Y+U*H,r[7]=x*C+y*w+b*re+U*fe,r[11]=x*N+y*W+b*F+U*me,r[15]=x*k+y*q+b*se+U*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+g*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],x=u*m*l-_*f*l+_*c*d-a*m*d-u*c*g+a*f*g,y=p*f*l-h*m*l-p*c*d+o*m*d+h*c*g-o*f*g,b=h*_*l-p*u*l+p*a*d-o*_*d-h*a*g+o*u*g,U=p*u*c-h*_*c-p*a*f+o*_*f+h*a*m-o*u*m,I=t*x+n*y+i*b+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=x*C,e[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*g-n*f*g)*C,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*g+n*c*g)*C,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*C,e[4]=y*C,e[5]=(h*m*r-p*f*r+p*i*d-t*m*d-h*i*g+t*f*g)*C,e[6]=(p*c*r-o*m*r-p*i*l+t*m*l+o*i*g-t*c*g)*C,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*C,e[8]=b*C,e[9]=(p*u*r-h*_*r-p*n*d+t*_*d+h*n*g-t*u*g)*C,e[10]=(o*_*r-p*a*r+p*n*l-t*_*l-o*n*g+t*a*g)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=U*C,e[13]=(h*_*i-p*u*i+p*n*f-t*_*f-h*n*m+t*u*m)*C,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,_=o*h,m=o*u,g=a*u,x=c*l,y=c*h,b=c*u,U=n.x,I=n.y,C=n.z;return i[0]=(1-(_+g))*U,i[1]=(d+b)*U,i[2]=(p-y)*U,i[3]=0,i[4]=(d-b)*I,i[5]=(1-(f+g))*I,i[6]=(m+x)*I,i[7]=0,i[8]=(p+y)*C,i[9]=(m-x)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=sr.set(i[0],i[1],i[2]).length();const o=sr.set(i[4],i[5],i[6]).length(),a=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ii.copy(this);const l=1/r,h=1/o,u=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=pi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===pi)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===yo)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=pi){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h;let p,_;if(a===pi)p=(o+r)*u,_=-2*u;else if(a===yo)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new L,ii=new Xe,X_=new L(0,0,0),q_=new L(1,1,1),Wi=new L,ia=new L,Zn=new L,Zu=new Xe,Ku=new un;class Jn{constructor(e=0,t=0,n=0,i=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const ju=new L,rr=new un,Ei=new Xe,sa=new L,Vr=new L,Z_=new L,K_=new un,$u=new L(1,0,0),Ju=new L(0,1,0),Qu=new L(0,0,1),ef={type:"added"},j_={type:"removed"},or={type:"childadded",child:null},Fl={type:"childremoved",child:null};class wt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new L,t=new Jn,n=new un,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new lt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Ju,e)}rotateZ(e){return this.rotateOnAxis(Qu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Ju,e)}translateZ(e){return this.translateOnAxis(Qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Vr,sa,this.up):Ei.lookAt(sa,Vr,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(Ei),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j_),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new L(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new L,Ai=new L,Bl=new L,Ti=new L,ar=new L,cr=new L,tf=new L,kl=new L,zl=new L,Vl=new L,Hl=new St,Gl=new St,Wl=new St;class Hn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),si.subVectors(e,t),i.cross(si);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){si.subVectors(i,t),Ai.subVectors(n,t),Bl.subVectors(e,t);const o=si.dot(si),a=si.dot(Ai),c=si.dot(Bl),l=Ai.dot(Ai),h=Ai.dot(Bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Hl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Hl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Hl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,n,i){return si.subVectors(n,t),Ai.subVectors(e,t),si.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),si.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ar.subVectors(i,n),cr.subVectors(r,n),kl.subVectors(e,n);const c=ar.dot(kl),l=cr.dot(kl);if(c<=0&&l<=0)return t.copy(n);zl.subVectors(e,i);const h=ar.dot(zl),u=cr.dot(zl);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ar,o);Vl.subVectors(e,r);const d=ar.dot(Vl),p=cr.dot(Vl);if(p>=0&&d<=p)return t.copy(r);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(cr,a);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return tf.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(tf,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(ar,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Xl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=su(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Rl(e.r),this.g=Rl(e.g),this.b=Rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return gt.fromWorkingColorSpace(vn.copy(this),e),Math.round(Kt(vn.r*255,0,255))*65536+Math.round(Kt(vn.g*255,0,255))*256+Math.round(Kt(vn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Jt){gt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ra);const n=ro(Xi.h,ra.h,t),i=ro(Xi.s,ra.s,t),r=ro(Xi.l,ra.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Ae;Ae.NAMES=tm;let $_=0;class wn extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ns,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=$a,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ii=J_();function J_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Vn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Kt(s,-65504,65504),Ii.floatView[0]=s;const e=Ii.uint32View[0],t=e>>23&511;return Ii.baseTable[t]+((e&8388607)>>Ii.shiftTable[t])}function $r(s){const e=s>>10;return Ii.uint32View[0]=Ii.mantissaTable[Ii.offsetTable[e]+(s&1023)]+Ii.exponentTable[e],Ii.floatView[0]}const Q_={toHalfFloat:Vn,fromHalfFloat:$r},en=new L,oa=new ie;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}}class e0 extends Pt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class t0 extends Pt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class n0 extends Pt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class i0 extends Pt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class ou extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class s0 extends Pt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class au extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class r0 extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=$r(this.array[e*this.itemSize]);return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=Vn(t),this}getY(e){let t=$r(this.array[e*this.itemSize+1]);return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=Vn(t),this}getZ(e){let t=$r(this.array[e*this.itemSize+2]);return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=Vn(t),this}getW(e){let t=$r(this.array[e*this.itemSize+3]);return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=Vn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=Vn(t),this.array[e+1]=Vn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=Vn(t),this.array[e+1]=Vn(n),this.array[e+2]=Vn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=Vn(t),this.array[e+1]=Vn(n),this.array[e+2]=Vn(i),this.array[e+3]=Vn(r),this}}class Le extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let o0=0;const ti=new Xe,ql=new wt,lr=new L,Kn=new Dn,Hr=new Dn,ln=new L;class at extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($p(e)?au:ou)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Kn.min,Hr.min),Kn.expandByPoint(ln),ln.addVectors(Kn.max,Hr.max),Kn.expandByPoint(ln)):(Kn.expandByPoint(Hr.min),Kn.expandByPoint(Hr.max))}Kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ln.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),ln.add(lr)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new L,c[N]=new L;const l=new L,h=new L,u=new L,f=new ie,d=new ie,p=new ie,_=new L,m=new L;function g(N,k,v){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,k),p.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(w),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(w),a[N].add(_),a[k].add(_),a[v].add(_),c[N].add(m),c[k].add(m),c[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,k=x.length;N<k;++N){const v=x[N],w=v.start,W=v.count;for(let q=w,Y=w+W;q<Y;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new L,b=new L,U=new L,I=new L;function C(N){U.fromBufferAttribute(i,N),I.copy(U);const k=a[N];y.copy(k),y.sub(U.multiplyScalar(U.dot(k))).normalize(),b.crossVectors(I,k);const w=b.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,w)}for(let N=0,k=x.length;N<k;++N){const v=x[N],w=v.start,W=v.count;for(let q=w,Y=w+W;q<Y;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new Pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new at,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new Xe,ds=new qs,aa=new bn,sf=new L,ca=new L,la=new L,ha=new L,Yl=new L,ua=new L,rf=new L,fa=new L;class qt extends wt{constructor(e=new at,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Yl.fromBufferAttribute(u,e),o?ua.addScaledVector(Yl,h):ua.addScaledVector(Yl.sub(t),h))}t.add(ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(aa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(aa,sf)===null||ds.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(nf.copy(r).invert(),ds.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,U=y;b<U;b+=3){const I=a.getX(b),C=a.getX(b+1),N=a.getX(b+2);i=da(this,g,e,n,l,h,u,I,C,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);i=da(this,o,e,n,l,h,u,x,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=x,U=y;b<U;b+=3){const I=b,C=b+1,N=b+2;i=da(this,g,e,n,l,h,u,I,C,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,y=m+1,b=m+2;i=da(this,o,e,n,l,h,u,x,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function a0(s,e,t,n,i,r,o,a){let c;if(e.side===Ln?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===_i,a),c===null)return null;fa.copy(a),fa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(fa);return l<t.near||l>t.far?null:{distance:l,point:fa.clone(),object:s}}function da(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ca),s.getVertexPosition(c,la),s.getVertexPosition(l,ha);const h=a0(s,e,t,n,ca,la,ha,rf);if(h){const u=new L;Hn.getBarycoord(rf,ca,la,ha,u),i&&(h.uv=Hn.getInterpolatedAttribute(i,a,c,l,u,new ie)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,c,l,u,new ie)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Hn.getNormal(ca,la,ha,f.normal),h.face=f,h.barycoord=u}return h}class Ys extends at{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2));function p(_,m,g,x,y,b,U,I,C,N,k){const v=b/C,w=U/N,W=b/2,q=U/2,Y=I/2,re=C+1,F=N+1;let se=0,H=0;const fe=new L;for(let me=0;me<F;me++){const ue=me*w-q;for(let ke=0;ke<re;ke++){const Ee=ke*v-W;fe[_]=Ee*x,fe[m]=ue*y,fe[g]=Y,l.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[g]=I>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(ke/C),u.push(1-me/N),se+=1}}for(let me=0;me<N;me++)for(let ue=0;ue<C;ue++){const ke=f+ue+re*me,Ee=f+ue+re*(me+1),G=f+(ue+1)+re*(me+1),j=f+(ue+1)+re*me;c.push(ke,Ee,j),c.push(Ee,G,j),H+=6}a.addGroup(d,H,k),d+=H,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const n=Cr(s[t]);for(const i in n)e[i]=n[i]}return e}function c0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const im={clone:Cr,merge:Tn};var l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new L,of=new ie,af=new ie;class tn extends Jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,ur=1;class sm extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(hr,ur,e,t);i.layers=this.layers,this.add(i);const r=new tn(hr,ur,e,t);r.layers=this.layers,this.add(r);const o=new tn(hr,ur,e,t);o.layers=this.layers,this.add(o);const a=new tn(hr,ur,e,t);a.layers=this.layers,this.add(a);const c=new tn(hr,ur,e,t);c.layers=this.layers,this.add(c);const l=new tn(hr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class No extends jt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rm extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ys(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:Ni});r.uniforms.tEquirect.value=t;const o=new qt(i,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=nn),new sm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Zl=new L,u0=new L,f0=new lt;class Ri{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zl.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||f0.getNormalMatrix(e),i=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new bn,pa=new L;class Uo{constructor(e=new Ri,t=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],g=i[12],x=i[13],y=i[14],b=i[15];if(n[0].setComponents(c-r,f-l,m-d,b-g).normalize(),n[1].setComponents(c+r,f+l,m+d,b+g).normalize(),n[2].setComponents(c+o,f+h,m+p,b+x).normalize(),n[3].setComponents(c-o,f-h,m-p,b-x).normalize(),n[4].setComponents(c-a,f-u,m-_,b-y).normalize(),t===pi)n[5].setComponents(c+a,f+u,m+_,b+y).normalize();else if(t===yo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pa.x=i.normal.x>0?e.max.x:e.min.x,pa.y=i.normal.y>0?e.max.y:e.min.y,pa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function om(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function d0(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Zs extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*f-o;for(let y=0;y<l;y++){const b=y*u-r;p.push(b,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){const y=x+l*g,b=x+l*(g+1),U=x+1+l*(g+1),I=x+1+l*g;d.push(y,b,I),d.push(b,U,I)}this.setIndex(d),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`
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
}`,q0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,fy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,dy=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,by=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sy=`#if defined( USE_POINTS_UV )
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
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
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
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ev=`#ifdef USE_SKINNING
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
#endif`,tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xv=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bv=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Mv=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Cv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Rv=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Pv=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Iv=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Lv=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Dv=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Nv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Ov=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fv=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Bv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kv=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,zv=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Vv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Hv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wv=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,et={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:_0,alphatest_fragment:y0,alphatest_pars_fragment:v0,aomap_fragment:x0,aomap_pars_fragment:b0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:w0,beginnormal_vertex:E0,bsdfs:A0,iridescence_fragment:T0,bumpmap_pars_fragment:C0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:N0,color_pars_vertex:U0,color_vertex:O0,common:F0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:k0,displacementmap_pars_vertex:z0,displacementmap_vertex:V0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:W0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:Z0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:oy,envmap_vertex:j0,fog_vertex:$0,fog_pars_vertex:J0,fog_fragment:Q0,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:sy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:cy,lights_phong_fragment:ly,lights_phong_pars_fragment:hy,lights_physical_fragment:uy,lights_physical_pars_fragment:fy,lights_fragment_begin:dy,lights_fragment_maps:py,lights_fragment_end:my,logdepthbuf_fragment:gy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:yy,logdepthbuf_vertex:vy,map_fragment:xy,map_pars_fragment:by,map_particle_fragment:My,map_particle_pars_fragment:Sy,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ey,morphinstance_vertex:Ay,morphcolor_vertex:Ty,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ry,morphtarget_vertex:Py,normal_fragment_begin:Iy,normal_fragment_maps:Ly,normal_pars_fragment:Dy,normal_pars_vertex:Ny,normal_vertex:Uy,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:ky,iridescence_pars_fragment:zy,opaque_fragment:Vy,packing:Hy,premultiplied_alpha_fragment:Gy,project_vertex:Wy,dithering_fragment:Xy,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:jy,shadowmap_vertex:$y,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:ev,skinning_vertex:tv,skinnormal_vertex:nv,specularmap_fragment:iv,specularmap_pars_fragment:sv,tonemapping_fragment:rv,tonemapping_pars_fragment:ov,transmission_fragment:av,transmission_pars_fragment:cv,uv_pars_fragment:lv,uv_pars_vertex:hv,uv_vertex:uv,worldpos_vertex:fv,background_vert:dv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:_v,cube_frag:yv,depth_vert:vv,depth_frag:xv,distanceRGBA_vert:bv,distanceRGBA_frag:Mv,equirect_vert:Sv,equirect_frag:wv,linedashed_vert:Ev,linedashed_frag:Av,meshbasic_vert:Tv,meshbasic_frag:Cv,meshlambert_vert:Rv,meshlambert_frag:Pv,meshmatcap_vert:Iv,meshmatcap_frag:Lv,meshnormal_vert:Dv,meshnormal_frag:Nv,meshphong_vert:Uv,meshphong_frag:Ov,meshphysical_vert:Fv,meshphysical_frag:Bv,meshtoon_vert:kv,meshtoon_frag:zv,points_vert:Vv,points_frag:Hv,shadow_vert:Gv,shadow_frag:Wv,sprite_vert:Xv,sprite_frag:qv},Re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ri={basic:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Tn([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Tn([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Tn([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Tn([Re.common,Re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Tn([Re.lights,Re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ri.physical={uniforms:Tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const ma={r:0,b:0,g:0},ms=new Jn,Yv=new Xe;function Zv(s,e,t,n,i,r,o){const a=new Ae(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const b=p(x);b===null?g(a,c):b&&b.isColor&&(g(b,1),y=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const b=p(y);b&&(b.isCubeTexture||b.mapping===Pr)?(h===void 0&&(h=new qt(new Ys(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Cr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ms.copy(y.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(ms)),h.material.toneMapped=gt.getTransfer(b.colorSpace)!==Bt,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new qt(new Zs(2,2),new Qn({name:"BackgroundMaterial",uniforms:Cr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=gt.getTransfer(b.colorSpace)!==Bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,y){x.getRGB(ma,nm(s)),n.buffers.color.setClear(ma.r,ma.g,ma.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,g(a,c)},render:_,addToRenderList:m}}function Kv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(v,w,W,q,Y){let re=!1;const F=u(q,W,w);r!==F&&(r=F,l(r.object)),re=d(v,q,W,Y),re&&p(v,q,W,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,b(v,w,W,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,w,W){const q=W.wireframe===!0;let Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let re=Y[w.id];re===void 0&&(re={},Y[w.id]=re);let F=re[q];return F===void 0&&(F=f(c()),re[q]=F),F}function f(v){const w=[],W=[],q=[];for(let Y=0;Y<t;Y++)w[Y]=0,W[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:q,object:v,attributes:{},index:null}}function d(v,w,W,q){const Y=r.attributes,re=w.attributes;let F=0;const se=W.getAttributes();for(const H in se)if(se[H].location>=0){const me=Y[H];let ue=re[H];if(ue===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),me===void 0||me.attribute!==ue||ue&&me.data!==ue.data)return!0;F++}return r.attributesNum!==F||r.index!==q}function p(v,w,W,q){const Y={},re=w.attributes;let F=0;const se=W.getAttributes();for(const H in se)if(se[H].location>=0){let me=re[H];me===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));const ue={};ue.attribute=me,me&&me.data&&(ue.data=me.data),Y[H]=ue,F++}r.attributes=Y,r.attributesNum=F,r.index=q}function _(){const v=r.newAttributes;for(let w=0,W=v.length;w<W;w++)v[w]=0}function m(v){g(v,0)}function g(v,w){const W=r.newAttributes,q=r.enabledAttributes,Y=r.attributeDivisors;W[v]=1,q[v]===0&&(s.enableVertexAttribArray(v),q[v]=1),Y[v]!==w&&(s.vertexAttribDivisor(v,w),Y[v]=w)}function x(){const v=r.newAttributes,w=r.enabledAttributes;for(let W=0,q=w.length;W<q;W++)w[W]!==v[W]&&(s.disableVertexAttribArray(W),w[W]=0)}function y(v,w,W,q,Y,re,F){F===!0?s.vertexAttribIPointer(v,w,W,Y,re):s.vertexAttribPointer(v,w,W,q,Y,re)}function b(v,w,W,q){_();const Y=q.attributes,re=W.getAttributes(),F=w.defaultAttributeValues;for(const se in re){const H=re[se];if(H.location>=0){let fe=Y[se];if(fe===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){const me=fe.normalized,ue=fe.itemSize,ke=e.get(fe);if(ke===void 0)continue;const Ee=ke.buffer,G=ke.type,j=ke.bytesPerElement,J=G===s.INT||G===s.UNSIGNED_INT||fe.gpuType===Hc;if(fe.isInterleavedBufferAttribute){const ee=fe.data,Te=ee.stride,te=fe.offset;if(ee.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)g(H.location+Oe,ee.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)m(H.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Oe=0;Oe<H.locationSize;Oe++)y(H.location+Oe,ue/H.locationSize,G,me,Te*j,(te+ue/H.locationSize*Oe)*j,J)}else{if(fe.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)g(H.location+ee,fe.meshPerAttribute);v.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ee=0;ee<H.locationSize;ee++)y(H.location+ee,ue/H.locationSize,G,me,ue*j,ue/H.locationSize*ee*j,J)}}else if(F!==void 0){const me=F[se];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(H.location,me);break;case 3:s.vertexAttrib3fv(H.location,me);break;case 4:s.vertexAttrib4fv(H.location,me);break;default:s.vertexAttrib1fv(H.location,me)}}}}x()}function U(){N();for(const v in n){const w=n[v];for(const W in w){const q=w[W];for(const Y in q)h(q[Y].object),delete q[Y];delete w[W]}delete n[v]}}function I(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const W in w){const q=w[W];for(const Y in q)h(q[Y].object),delete q[Y];delete w[W]}delete n[v.id]}function C(v){for(const w in n){const W=n[w];if(W[v.id]===void 0)continue;const q=W[v.id];for(const Y in q)h(q[Y].object),delete q[Y];delete W[v.id]}}function N(){k(),o=!0,r!==i&&(r=i,l(r.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function jv(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<f.length;_++)t.update(p,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $v(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==In&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!N)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=p>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:U,maxSamples:I}}function Jv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ri,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let b=g.clippingState||null;c.value=b,b=h(p,f,y,d);for(let U=0;U!==y;++U)b[U]=t[U];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,b=d;y!==_;++y,b+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Qv(s){let e=new WeakMap;function t(o,a){return a===co?o.mapping=Oi:a===lo&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===co||a===lo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rm(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lr extends Jc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,cf=[.125,.215,.35,.446,.526,.582],Ts=20,Kl=new Lr,lf=new Ae;let jl=null,$l=0,Jl=0,Ql=!1;const Es=(1+Math.sqrt(5))/2,fr=1/Es,hf=[new L(-Es,fr,0),new L(Es,fr,0),new L(-fr,0,Es),new L(fr,0,Es),new L(0,Es,-fr),new L(0,Es,fr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){jl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,$l,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ir,format:In,colorSpace:ki,depthBuffer:!1},i=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ex(r)),this._blurMaterial=tx(r,e,t)}return i}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,n,i){const a=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(lf),h.toneMapping=Ui,h.autoClear=!1;const d=new ci({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),p=new qt(new Ys,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(lf),_=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):x===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const y=this._cubeSize;ga(i,x*y,g>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ga(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Kl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hf[(i-r-1)%hf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ts-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const g=[];let x=0;for(let C=0;C<Ts;++C){const N=C/_,k=Math.exp(-N*N/2);g.push(k),C===0?x+=k:C<m&&(x+=2*k)}for(let C=0;C<g.length;C++)g[C]=g[C]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const b=this._sizeLods[i],U=3*b*(i>y-br?i-y+br:0),I=4*(this._cubeSize-b);ga(t,U,I,3*b,2*b),c.setRenderTarget(t),c.render(u,Kl)}}function ex(s){const e=[],t=[],n=[];let i=s;const r=s-br+1+cf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-br?c=cf[o-s+br-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),y=new Float32Array(m*p*d),b=new Float32Array(g*p*d);for(let I=0;I<d;I++){const C=I%3*2/3-1,N=I>2?0:-1,k=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];x.set(k,_*p*I),y.set(f,m*p*I);const v=[I,I,I,I,I,I];b.set(v,g*p*I)}const U=new at;U.setAttribute("position",new Pt(x,_)),U.setAttribute("uv",new Pt(y,m)),U.setAttribute("faceIndex",new Pt(b,g)),e.push(U),i>br&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uf(s,e,t){const n=new $n(s,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function tx(s,e,t){const n=new Float32Array(Ts),i=new L(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ff(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function df(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function nx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===co||c===lo,h=c===Oi||c===es;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Th(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Th(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ix(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ya("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sx(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,b=x.length;y<b;y+=3){const U=x[y+0],I=x[y+1],C=x[y+2];f.push(U,I,I,C,C,U)}}else if(p!==void 0){const x=p.array;_=p.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const U=y+0,I=y+1,C=y+2;f.push(U,I,I,C,C,U)}}else return;const m=new($p(f)?au:ou)(f,1);m.version=_;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function rx(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function u(f,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x];for(let x=0;x<_.length;x++)t.update(g,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ox(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ax(s,e,t){const n=new WeakMap,i=new St;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let k=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let b=a.attributes.position.count*y,U=1;b>e.maxTextureSize&&(U=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*U*4*u),C=new jc(I,b,U,u);C.type=Wn,C.needsUpdate=!0;const N=y*4;for(let v=0;v<u;v++){const w=m[v],W=g[v],q=x[v],Y=b*U*4*v;for(let re=0;re<w.count;re++){const F=re*N;d===!0&&(i.fromBufferAttribute(w,re),I[Y+F+0]=i.x,I[Y+F+1]=i.y,I[Y+F+2]=i.z,I[Y+F+3]=0),p===!0&&(i.fromBufferAttribute(W,re),I[Y+F+4]=i.x,I[Y+F+5]=i.y,I[Y+F+6]=i.z,I[Y+F+7]=0),_===!0&&(i.fromBufferAttribute(q,re),I[Y+F+8]=i.x,I[Y+F+9]=i.y,I[Y+F+10]=i.z,I[Y+F+11]=q.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new ie(b,U)},n.set(a,f),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function cx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class lu extends jt{constructor(e,t,n,i,r,o,a,c,l,h=Us){if(h!==Us&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=Fi),n===void 0&&h===zs&&(n=ks),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const am=new jt,pf=new lu(1,1),cm=new jc,lm=new ru,hm=new No,mf=[],gf=[],_f=new Float32Array(16),yf=new Float32Array(9),vf=new Float32Array(4);function Dr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=mf[i];if(r===void 0&&(r=new Float32Array(i),mf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qc(s,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function lx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function dx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;vf.set(n),s.uniformMatrix2fv(this.addr,!1,vf),cn(t,n)}}function px(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;yf.set(n),s.uniformMatrix3fv(this.addr,!1,yf),cn(t,n)}}function mx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;_f.set(n),s.uniformMatrix4fv(this.addr,!1,_f),cn(t,n)}}function gx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function xx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pf.compareFunction=iu,r=pf):r=am,t.setTexture2D(e||r,i)}function Ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lm,i)}function Ax(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hm,i)}function Tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cm,i)}function Cx(s){switch(s){case 5126:return lx;case 35664:return hx;case 35665:return ux;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return yx;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return bx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Tx}}function Rx(s,e){s.uniform1fv(this.addr,e)}function Px(s,e){const t=Dr(e,this.size,2);s.uniform2fv(this.addr,t)}function Ix(s,e){const t=Dr(e,this.size,3);s.uniform3fv(this.addr,t)}function Lx(s,e){const t=Dr(e,this.size,4);s.uniform4fv(this.addr,t)}function Dx(s,e){const t=Dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Nx(s,e){const t=Dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ux(s,e){const t=Dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ox(s,e){s.uniform1iv(this.addr,e)}function Fx(s,e){s.uniform2iv(this.addr,e)}function Bx(s,e){s.uniform3iv(this.addr,e)}function kx(s,e){s.uniform4iv(this.addr,e)}function zx(s,e){s.uniform1uiv(this.addr,e)}function Vx(s,e){s.uniform2uiv(this.addr,e)}function Hx(s,e){s.uniform3uiv(this.addr,e)}function Gx(s,e){s.uniform4uiv(this.addr,e)}function Wx(s,e,t){const n=this.cache,i=e.length,r=Qc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||am,r[o])}function Xx(s,e,t){const n=this.cache,i=e.length,r=Qc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lm,r[o])}function qx(s,e,t){const n=this.cache,i=e.length,r=Qc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||hm,r[o])}function Yx(s,e,t){const n=this.cache,i=e.length,r=Qc(t,i);an(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cm,r[o])}function Zx(s){switch(s){case 5126:return Rx;case 35664:return Px;case 35665:return Ix;case 35666:return Lx;case 35674:return Dx;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Ox;case 35667:case 35671:return Fx;case 35668:case 35672:return Bx;case 35669:case 35673:return kx;case 5125:return zx;case 36294:return Vx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class jx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zx(t.type)}}class $x{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function xf(s,e){s.seq.push(e),s.map[e.id]=e}function Jx(s,e,t){const n=s.name,i=n.length;for(eh.lastIndex=0;;){const r=eh.exec(n),o=eh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xf(t,l===void 0?new Kx(a,s,e):new jx(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new $x(a),xf(t,u)),t=u}}}class Za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Jx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Qx=37297;let eb=0;function tb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function nb(s){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(s);let n;switch(e===t?n="":e===go&&t===mo?n="LinearDisplayP3ToLinearSRGB":e===mo&&t===go&&(n="LinearSRGBToLinearDisplayP3"),s){case ki:case Do:return[n,"LinearTransferOETF"];case Jt:case Kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Mf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+tb(s.getShaderSource(e),o)}else return i}function ib(s,e){const t=nb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sb(s,e){let t;switch(e){case Ip:t="Linear";break;case Lp:t="Reinhard";break;case Dp:t="Cineon";break;case Xh:t="ACESFilmic";break;case Up:t="AgX";break;case Op:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new L;function rb(){gt.getLuminanceCoefficients(_a);const s=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function ab(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Jr(s){return s!==""}function Sf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(s){return s.replace(lb,ub)}const hb=new Map;function ub(s,e){let t=et[e];if(t===void 0){const n=hb.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ch(t)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(s){return s.replace(fb,db)}function db(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Af(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function mb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Oi:case es:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function _b(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Io:e="ENVMAP_BLENDING_MULTIPLY";break;case Rp:e="ENVMAP_BLENDING_MIX";break;case Pp:e="ENVMAP_BLENDING_ADD";break}return e}function yb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=pb(t),l=mb(t),h=gb(t),u=_b(t),f=yb(t),d=ob(t),p=ab(r),_=i.createProgram();let m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Jr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Jr).join(`
`),g.length>0&&(g+=`
`)):(m=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),g=[Af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?et.tonemapping_pars_fragment:"",t.toneMapping!==Ui?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Ch(o),o=Sf(o,t),o=wf(o,t),a=Ch(a),a=Sf(a,t),a=wf(a,t),o=Ef(o),a=Ef(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+m+o,b=x+g+a,U=bf(i,i.VERTEX_SHADER,y),I=bf(i,i.FRAGMENT_SHADER,b);i.attachShader(_,U),i.attachShader(_,I),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(w){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),q=i.getShaderInfoLog(U).trim(),Y=i.getShaderInfoLog(I).trim();let re=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,U,I);else{const se=Mf(i,U,"vertex"),H=Mf(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+se+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||Y==="")&&(F=!1);F&&(w.diagnostics={runnable:re,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:g}})}i.deleteShader(U),i.deleteShader(I),N=new Za(i,_),k=cb(i,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let k;this.getAttributes=function(){return k===void 0&&C(this),k};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Qx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=I,this}let xb=0;class bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mb(e),t.set(e,n)),n}}class Mb{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}}function Sb(s,e,t,n,i,r,o){const a=new $c,c=new bb,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,w,W,q,Y){const re=q.fog,F=Y.geometry,se=v.isMeshStandardMaterial?q.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||se),fe=H&&H.mapping===Pr?H.image.height:null,me=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ke=ue!==void 0?ue.length:0;let Ee=0;F.morphAttributes.position!==void 0&&(Ee=1),F.morphAttributes.normal!==void 0&&(Ee=2),F.morphAttributes.color!==void 0&&(Ee=3);let G,j,J,ee;if(me){const Ft=ri[me];G=Ft.vertexShader,j=Ft.fragmentShader}else G=v.vertexShader,j=v.fragmentShader,c.update(v),J=c.getVertexShaderID(v),ee=c.getFragmentShaderID(v);const Te=s.getRenderTarget(),te=Y.isInstancedMesh===!0,Oe=Y.isBatchedMesh===!0,ct=!!v.map,le=!!v.matcap,O=!!H,Me=!!v.aoMap,ve=!!v.lightMap,ge=!!v.bumpMap,Se=!!v.normalMap,je=!!v.displacementMap,De=!!v.emissiveMap,D=!!v.metalnessMap,E=!!v.roughnessMap,X=v.anisotropy>0,oe=v.clearcoat>0,he=v.dispersion>0,ae=v.iridescence>0,qe=v.sheen>0,we=v.transmission>0,Fe=X&&!!v.anisotropyMap,_t=oe&&!!v.clearcoatMap,ye=oe&&!!v.clearcoatNormalMap,Be=oe&&!!v.clearcoatRoughnessMap,rt=ae&&!!v.iridescenceMap,st=ae&&!!v.iridescenceThicknessMap,Ve=qe&&!!v.sheenColorMap,yt=qe&&!!v.sheenRoughnessMap,ot=!!v.specularMap,Lt=!!v.specularColorMap,B=!!v.specularIntensityMap,Ne=we&&!!v.transmissionMap,Q=we&&!!v.thicknessMap,ce=!!v.gradientMap,Ie=!!v.alphaMap,Ue=v.alphaTest>0,vt=!!v.alphaHash,Yt=!!v.extensions;let fn=Ui;v.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(fn=s.toneMapping);const bt={shaderID:me,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:j,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&Y._colorsTexture!==null,instancing:te,instancingColor:te&&Y.instanceColor!==null,instancingMorph:te&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Te===null?s.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:ki,alphaToCoverage:!!v.alphaToCoverage,map:ct,matcap:le,envMap:O,envMapMode:O&&H.mapping,envMapCubeUVHeight:fe,aoMap:Me,lightMap:ve,bumpMap:ge,normalMap:Se,displacementMap:d&&je,emissiveMap:De,normalMapObjectSpace:Se&&v.normalMapType===Gp,normalMapTangentSpace:Se&&v.normalMapType===rs,metalnessMap:D,roughnessMap:E,anisotropy:X,anisotropyMap:Fe,clearcoat:oe,clearcoatMap:_t,clearcoatNormalMap:ye,clearcoatRoughnessMap:Be,dispersion:he,iridescence:ae,iridescenceMap:rt,iridescenceThicknessMap:st,sheen:qe,sheenColorMap:Ve,sheenRoughnessMap:yt,specularMap:ot,specularColorMap:Lt,specularIntensityMap:B,transmission:we,transmissionMap:Ne,thicknessMap:Q,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ue,alphaHash:vt,combine:v.combine,mapUv:ct&&m(v.map.channel),aoMapUv:Me&&m(v.aoMap.channel),lightMapUv:ve&&m(v.lightMap.channel),bumpMapUv:ge&&m(v.bumpMap.channel),normalMapUv:Se&&m(v.normalMap.channel),displacementMapUv:je&&m(v.displacementMap.channel),emissiveMapUv:De&&m(v.emissiveMap.channel),metalnessMapUv:D&&m(v.metalnessMap.channel),roughnessMapUv:E&&m(v.roughnessMap.channel),anisotropyMapUv:Fe&&m(v.anisotropyMap.channel),clearcoatMapUv:_t&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(v.sheenRoughnessMap.channel),specularMapUv:ot&&m(v.specularMap.channel),specularColorMapUv:Lt&&m(v.specularColorMap.channel),specularIntensityMapUv:B&&m(v.specularIntensityMap.channel),transmissionMapUv:Ne&&m(v.transmissionMap.channel),thicknessMapUv:Q&&m(v.thicknessMap.channel),alphaMapUv:Ie&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!F.attributes.uv&&(ct||Ie),fog:!!re,useFog:v.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:fn,decodeVideoTexture:ct&&v.map.isVideoTexture===!0&&gt.getTransfer(v.map.colorSpace)===Bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===oi,flipSided:v.side===Ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&v.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function x(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)w.push(W),w.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(y(w,v),b(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function U(v){const w=_[v.type];let W;if(w){const q=ri[w];W=im.clone(q.uniforms)}else W=v.uniforms;return W}function I(v,w){let W;for(let q=0,Y=h.length;q<Y;q++){const re=h[q];if(re.cacheKey===w){W=re,++W.usedTimes;break}}return W===void 0&&(W=new vb(s,w,v,r),h.push(W)),W}function C(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function N(v){c.remove(v)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:U,acquireProgram:I,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:k}}function wb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Eb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Tf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function a(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function c(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function l(u,f){t.length>1&&t.sort(u||Eb),n.length>1&&n.sort(f||Tf),i.length>1&&i.sort(f||Tf)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Ab(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Cf,s.set(n,[o])):i>=r.length?(o=new Cf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Tb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ae};break;case"SpotLight":t={position:new L,direction:new L,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Cb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Rb=0;function Pb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ib(s){const e=new Tb,t=Cb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new Xe,o=new Xe;function a(l){let h=0,u=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,y=0,b=0,U=0,I=0,C=0;l.sort(Pb);for(let k=0,v=l.length;k<v;k++){const w=l[k],W=w.color,q=w.intensity,Y=w.distance,re=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=W.r*q,u+=W.g*q,f+=W.b*q;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],q);C++}else if(w.isDirectionalLight){const F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const se=w.shadow,H=t.get(w);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=re,n.directionalShadowMatrix[d]=w.shadow.matrix,x++}n.directional[d]=F,d++}else if(w.isSpotLight){const F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(W).multiplyScalar(q),F.distance=Y,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[_]=F;const se=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,se.updateMatrices(w),w.castShadow&&I++),n.spotLightMatrix[_]=se.matrix,w.castShadow){const H=t.get(w);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=re,b++}_++}else if(w.isRectAreaLight){const F=e.get(w);F.color.copy(W).multiplyScalar(q),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=F,m++}else if(w.isPointLight){const F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){const se=w.shadow,H=t.get(w);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,H.shadowCameraNear=se.camera.near,H.shadowCameraFar=se.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=re,n.pointShadowMatrix[p]=w.shadow.matrix,y++}n.point[p]=F,p++}else if(w.isHemisphereLight){const F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(q),F.groundColor.copy(w.groundColor).multiplyScalar(q),n.hemi[g]=F,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==d||N.pointLength!==p||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==g||N.numDirectionalShadows!==x||N.numPointShadows!==y||N.numSpotShadows!==b||N.numSpotMaps!==U||N.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+U-I,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,N.directionalLength=d,N.pointLength=p,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=g,N.numDirectionalShadows=x,N.numPointShadows=y,N.numSpotShadows=b,N.numSpotMaps=U,N.numLightProbes=C,n.version=Rb++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=l.length;g<x;g++){const y=l[g];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Rf(s){const e=new Ib(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Lb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Rf(s),e.set(i,[a])):r>=o.length?(a=new Rf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class el extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hu extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
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
}`;function Ub(s,e,t){let n=new Uo;const i=new ie,r=new ie,o=new St,a=new el({depthPacking:Hp}),c=new hu,l={},h=t.maxTextureSize,u={[_i]:Ln,[Ln]:_i,[oi]:oi},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Db,fragmentShader:Nb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new at;p.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wh;let g=this.type;this.render=function(I,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const k=s.getRenderTarget(),v=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Ni),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=g!==di&&this.type===di,Y=g===di&&this.type!==di;for(let re=0,F=I.length;re<F;re++){const se=I[re],H=se.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const fe=H.getFrameExtents();if(i.multiply(fe),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/fe.x),i.x=r.x*fe.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/fe.y),i.y=r.y*fe.y,H.mapSize.y=r.y)),H.map===null||q===!0||Y===!0){const ue=this.type!==di?{minFilter:hn,magFilter:hn}:{};H.map!==null&&H.map.dispose(),H.map=new $n(i.x,i.y,ue),H.map.texture.name=se.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const me=H.getViewportCount();for(let ue=0;ue<me;ue++){const ke=H.getViewport(ue);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),W.viewport(o),H.updateMatrices(se,ue),n=H.getFrustum(),b(C,N,H.camera,se,this.type)}H.isPointLightShadow!==!0&&this.type===di&&x(H,N),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(k,v,w)};function x(I,C){const N=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new $n(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(C,null,N,f,_,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(C,null,N,d,_,null)}function y(I,C,N,k){let v=null;const w=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)v=w;else if(v=N.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=v.uuid,q=C.uuid;let Y=l[W];Y===void 0&&(Y={},l[W]=Y);let re=Y[q];re===void 0&&(re=v.clone(),Y[q]=re,C.addEventListener("dispose",U)),v=re}if(v.visible=C.visible,v.wireframe=C.wireframe,k===di?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=s.properties.get(v);W.light=N}return v}function b(I,C,N,k,v){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===di)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);const q=e.update(I),Y=I.material;if(Array.isArray(Y)){const re=q.groups;for(let F=0,se=re.length;F<se;F++){const H=re[F],fe=Y[H.materialIndex];if(fe&&fe.visible){const me=y(I,fe,k,v);I.onBeforeShadow(s,I,C,N,q,me,H),s.renderBufferDirect(N,null,q,me,I,H),I.onAfterShadow(s,I,C,N,q,me,H)}}}else if(Y.visible){const re=y(I,Y,k,v);I.onBeforeShadow(s,I,C,N,q,re,null),s.renderBufferDirect(N,null,q,re,I,null),I.onAfterShadow(s,I,C,N,q,re,null)}}const W=I.children;for(let q=0,Y=W.length;q<Y;q++)b(W[q],C,N,k,v)}function U(I){I.target.removeEventListener("dispose",U);for(const N in l){const k=l[N],v=I.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}const Ob={[Ja]:Qa,[ec]:ic,[tc]:sc,[Bs]:nc,[Qa]:Ja,[ic]:ec,[sc]:tc,[nc]:Bs};function Fb(s){function e(){let B=!1;const Ne=new St;let Q=null;const ce=new St(0,0,0,0);return{setMask:function(Ie){Q!==Ie&&!B&&(s.colorMask(Ie,Ie,Ie,Ie),Q=Ie)},setLocked:function(Ie){B=Ie},setClear:function(Ie,Ue,vt,Yt,fn){fn===!0&&(Ie*=Yt,Ue*=Yt,vt*=Yt),Ne.set(Ie,Ue,vt,Yt),ce.equals(Ne)===!1&&(s.clearColor(Ie,Ue,vt,Yt),ce.copy(Ne))},reset:function(){B=!1,Q=null,ce.set(-1,0,0,0)}}}function t(){let B=!1,Ne=!1,Q=null,ce=null,Ie=null;return{setReversed:function(Ue){Ne=Ue},setTest:function(Ue){Ue?J(s.DEPTH_TEST):ee(s.DEPTH_TEST)},setMask:function(Ue){Q!==Ue&&!B&&(s.depthMask(Ue),Q=Ue)},setFunc:function(Ue){if(Ne&&(Ue=Ob[Ue]),ce!==Ue){switch(Ue){case Ja:s.depthFunc(s.NEVER);break;case Qa:s.depthFunc(s.ALWAYS);break;case ec:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case tc:s.depthFunc(s.EQUAL);break;case nc:s.depthFunc(s.GEQUAL);break;case ic:s.depthFunc(s.GREATER);break;case sc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ue}},setLocked:function(Ue){B=Ue},setClear:function(Ue){Ie!==Ue&&(s.clearDepth(Ue),Ie=Ue)},reset:function(){B=!1,Q=null,ce=null,Ie=null}}}function n(){let B=!1,Ne=null,Q=null,ce=null,Ie=null,Ue=null,vt=null,Yt=null,fn=null;return{setTest:function(bt){B||(bt?J(s.STENCIL_TEST):ee(s.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!B&&(s.stencilMask(bt),Ne=bt)},setFunc:function(bt,Ft,ei){(Q!==bt||ce!==Ft||Ie!==ei)&&(s.stencilFunc(bt,Ft,ei),Q=bt,ce=Ft,Ie=ei)},setOp:function(bt,Ft,ei){(Ue!==bt||vt!==Ft||Yt!==ei)&&(s.stencilOp(bt,Ft,ei),Ue=bt,vt=Ft,Yt=ei)},setLocked:function(bt){B=bt},setClear:function(bt){fn!==bt&&(s.clearStencil(bt),fn=bt)},reset:function(){B=!1,Ne=null,Q=null,ce=null,Ie=null,Ue=null,vt=null,Yt=null,fn=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,x=null,y=null,b=null,U=null,I=new Ae(0,0,0),C=0,N=!1,k=null,v=null,w=null,W=null,q=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,F=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(se)[1]),re=F>=1):se.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),re=F>=2);let H=null,fe={};const me=s.getParameter(s.SCISSOR_BOX),ue=s.getParameter(s.VIEWPORT),ke=new St().fromArray(me),Ee=new St().fromArray(ue);function G(B,Ne,Q,ce){const Ie=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(B,Ue),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let vt=0;vt<Q;vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ne+vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ue}const j={};j[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),J(s.DEPTH_TEST),r.setFunc(Bs),ve(!1),ge(xh),J(s.CULL_FACE),O(Ni);function J(B){l[B]!==!0&&(s.enable(B),l[B]=!0)}function ee(B){l[B]!==!1&&(s.disable(B),l[B]=!1)}function Te(B,Ne){return h[B]!==Ne?(s.bindFramebuffer(B,Ne),h[B]=Ne,B===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ne),B===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function te(B,Ne){let Q=f,ce=!1;if(B){Q=u.get(Ne),Q===void 0&&(Q=[],u.set(Ne,Q));const Ie=B.textures;if(Q.length!==Ie.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,vt=Ie.length;Ue<vt;Ue++)Q[Ue]=s.COLOR_ATTACHMENT0+Ue;Q.length=Ie.length,ce=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ce=!0);ce&&s.drawBuffers(Q)}function Oe(B){return d!==B?(s.useProgram(B),d=B,!0):!1}const ct={[ji]:s.FUNC_ADD,[fp]:s.FUNC_SUBTRACT,[dp]:s.FUNC_REVERSE_SUBTRACT};ct[pp]=s.MIN,ct[mp]=s.MAX;const le={[gp]:s.ZERO,[_p]:s.ONE,[yp]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[wp]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[xp]:s.DST_ALPHA,[vp]:s.ONE_MINUS_SRC_COLOR,[$a]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[bp]:s.ONE_MINUS_DST_ALPHA,[Ep]:s.CONSTANT_COLOR,[Ap]:s.ONE_MINUS_CONSTANT_COLOR,[Tp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,Ne,Q,ce,Ie,Ue,vt,Yt,fn,bt){if(B===Ni){p===!0&&(ee(s.BLEND),p=!1);return}if(p===!1&&(J(s.BLEND),p=!0),B!==up){if(B!==_||bt!==N){if((m!==ji||y!==ji)&&(s.blendEquation(s.FUNC_ADD),m=ji,y=ji),bt)switch(B){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bh:s.blendFunc(s.ONE,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}g=null,x=null,b=null,U=null,I.set(0,0,0),C=0,_=B,N=bt}return}Ie=Ie||Ne,Ue=Ue||Q,vt=vt||ce,(Ne!==m||Ie!==y)&&(s.blendEquationSeparate(ct[Ne],ct[Ie]),m=Ne,y=Ie),(Q!==g||ce!==x||Ue!==b||vt!==U)&&(s.blendFuncSeparate(le[Q],le[ce],le[Ue],le[vt]),g=Q,x=ce,b=Ue,U=vt),(Yt.equals(I)===!1||fn!==C)&&(s.blendColor(Yt.r,Yt.g,Yt.b,fn),I.copy(Yt),C=fn),_=B,N=!1}function Me(B,Ne){B.side===oi?ee(s.CULL_FACE):J(s.CULL_FACE);let Q=B.side===Ln;Ne&&(Q=!Q),ve(Q),B.blending===Ns&&B.transparent===!1?O(Ni):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),i.setMask(B.colorWrite);const ce=B.stencilWrite;o.setTest(ce),ce&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),je(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(B){k!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),k=B)}function ge(B){B!==lp?(J(s.CULL_FACE),B!==v&&(B===xh?s.cullFace(s.BACK):B===hp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ee(s.CULL_FACE),v=B}function Se(B){B!==w&&(re&&s.lineWidth(B),w=B)}function je(B,Ne,Q){B?(J(s.POLYGON_OFFSET_FILL),(W!==Ne||q!==Q)&&(s.polygonOffset(Ne,Q),W=Ne,q=Q)):ee(s.POLYGON_OFFSET_FILL)}function De(B){B?J(s.SCISSOR_TEST):ee(s.SCISSOR_TEST)}function D(B){B===void 0&&(B=s.TEXTURE0+Y-1),H!==B&&(s.activeTexture(B),H=B)}function E(B,Ne,Q){Q===void 0&&(H===null?Q=s.TEXTURE0+Y-1:Q=H);let ce=fe[Q];ce===void 0&&(ce={type:void 0,texture:void 0},fe[Q]=ce),(ce.type!==B||ce.texture!==Ne)&&(H!==Q&&(s.activeTexture(Q),H=Q),s.bindTexture(B,Ne||j[B]),ce.type=B,ce.texture=Ne)}function X(){const B=fe[H];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(B){ke.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ke.copy(B))}function Ve(B){Ee.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Ee.copy(B))}function yt(B,Ne){let Q=c.get(Ne);Q===void 0&&(Q=new WeakMap,c.set(Ne,Q));let ce=Q.get(B);ce===void 0&&(ce=s.getUniformBlockIndex(Ne,B.name),Q.set(B,ce))}function ot(B,Ne){const ce=c.get(Ne).get(B);a.get(Ne)!==ce&&(s.uniformBlockBinding(Ne,ce,B.__bindingPointIndex),a.set(Ne,ce))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},H=null,fe={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,x=null,y=null,b=null,U=null,I=new Ae(0,0,0),C=0,N=!1,k=null,v=null,w=null,W=null,q=null,ke.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:J,disable:ee,bindFramebuffer:Te,drawBuffers:te,useProgram:Oe,setBlending:O,setMaterial:Me,setFlipSided:ve,setCullFace:ge,setLineWidth:Se,setPolygonOffset:je,setScissorTest:De,activeTexture:D,bindTexture:E,unbindTexture:X,compressedTexImage2D:oe,compressedTexImage3D:he,texImage2D:Be,texImage3D:rt,updateUBOMapping:yt,uniformBlockBinding:ot,texStorage2D:_t,texStorage3D:ye,texSubImage2D:ae,texSubImage3D:qe,compressedTexSubImage2D:we,compressedTexSubImage3D:Fe,scissor:st,viewport:Ve,reset:Lt}}function Bb(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function kb(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function zb(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Rh(s,e,t,n){const i=Vb(n);switch(t){case jh:return s*e;case Jh:return s*e;case Qh:return s*e*2;case Xc:return s*e/i.components*i.byteLength;case Lo:return s*e/i.components*i.byteLength;case eu:return s*e*2/i.components*i.byteLength;case qc:return s*e*2/i.components*i.byteLength;case $h:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Yc:return s*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oc:case cc:return Math.max(s,16)*Math.max(e,8)/4;case rc:case ac:return Math.max(s,8)*Math.max(e,8)/2;case lc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case so:case Ac:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tu:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rc:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vb(s){switch(s){case yi:case Yh:return{byteLength:1,components:1};case Ar:case Zh:case Ir:return{byteLength:2,components:1};case Gc:case Wc:return{byteLength:2,components:4};case Fi:case Hc:case Wn:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const Hb={contain:Bb,cover:kb,fill:zb,getByteLength:Rh};function Gb(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,E){return d?new OffscreenCanvas(D,E):vo("canvas")}function _(D,E,X){let oe=1;const he=De(D);if((he.width>X||he.height>X)&&(oe=X/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(oe*he.width),qe=Math.floor(oe*he.height);u===void 0&&(u=p(ae,qe));const we=E?p(ae,qe):u;return we.width=ae,we.height=qe,we.getContext("2d").drawImage(D,0,0,ae,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ae+"x"+qe+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==hn&&D.minFilter!==nn}function g(D){s.generateMipmap(D)}function x(D,E,X,oe,he=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=E;if(E===s.RED&&(X===s.FLOAT&&(ae=s.R32F),X===s.HALF_FLOAT&&(ae=s.R16F),X===s.UNSIGNED_BYTE&&(ae=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ae=s.R8UI),X===s.UNSIGNED_SHORT&&(ae=s.R16UI),X===s.UNSIGNED_INT&&(ae=s.R32UI),X===s.BYTE&&(ae=s.R8I),X===s.SHORT&&(ae=s.R16I),X===s.INT&&(ae=s.R32I)),E===s.RG&&(X===s.FLOAT&&(ae=s.RG32F),X===s.HALF_FLOAT&&(ae=s.RG16F),X===s.UNSIGNED_BYTE&&(ae=s.RG8)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ae=s.RG8UI),X===s.UNSIGNED_SHORT&&(ae=s.RG16UI),X===s.UNSIGNED_INT&&(ae=s.RG32UI),X===s.BYTE&&(ae=s.RG8I),X===s.SHORT&&(ae=s.RG16I),X===s.INT&&(ae=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),X===s.UNSIGNED_INT&&(ae=s.RGB32UI),X===s.BYTE&&(ae=s.RGB8I),X===s.SHORT&&(ae=s.RGB16I),X===s.INT&&(ae=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),X===s.UNSIGNED_INT&&(ae=s.RGBA32UI),X===s.BYTE&&(ae=s.RGBA8I),X===s.SHORT&&(ae=s.RGBA16I),X===s.INT&&(ae=s.RGBA32I)),E===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),E===s.RGBA){const qe=he?po:gt.getTransfer(oe);X===s.FLOAT&&(ae=s.RGBA32F),X===s.HALF_FLOAT&&(ae=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ae=qe===Bt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(D,E){let X;return D?E===null||E===Fi||E===ks?X=s.DEPTH24_STENCIL8:E===Wn?X=s.DEPTH32F_STENCIL8:E===Ar&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Fi||E===ks?X=s.DEPTH_COMPONENT24:E===Wn?X=s.DEPTH_COMPONENT32F:E===Ar&&(X=s.DEPTH_COMPONENT16),X}function b(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function U(D){const E=D.target;E.removeEventListener("dispose",U),C(E),E.isVideoTexture&&h.delete(E)}function I(D){const E=D.target;E.removeEventListener("dispose",I),k(E)}function C(D){const E=n.get(D);if(E.__webglInit===void 0)return;const X=D.source,oe=f.get(X);if(oe){const he=oe[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&N(D),Object.keys(oe).length===0&&f.delete(X)}n.remove(D)}function N(D){const E=n.get(D);s.deleteTexture(E.__webglTexture);const X=D.source,oe=f.get(X);delete oe[E.__cacheKey],o.memory.textures--}function k(D){const E=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let he=0;he<E.__webglFramebuffer[oe].length;he++)s.deleteFramebuffer(E.__webglFramebuffer[oe][he]);else s.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)s.deleteFramebuffer(E.__webglFramebuffer[oe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=D.textures;for(let oe=0,he=X.length;oe<he;oe++){const ae=n.get(X[oe]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(X[oe])}n.remove(D)}let v=0;function w(){v=0}function W(){const D=v;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),v+=1,D}function q(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Y(D,E){const X=n.get(D);if(D.isVideoTexture&&Se(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(X,D,E);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function re(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Ee(X,D,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function F(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){Ee(X,D,E);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function se(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){G(X,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const H={[Li]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[ho]:s.MIRRORED_REPEAT},fe={[hn]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},me={[Wp]:s.NEVER,[jp]:s.ALWAYS,[Xp]:s.LESS,[iu]:s.LEQUAL,[qp]:s.EQUAL,[Kp]:s.GEQUAL,[Yp]:s.GREATER,[Zp]:s.NOTEQUAL};function ue(D,E){if(E.type===Wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===Qr||E.magFilter===vr||E.magFilter===ai||E.minFilter===nn||E.minFilter===Qr||E.minFilter===vr||E.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,H[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,H[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,H[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,fe[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==vr&&E.minFilter!==ai||E.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ke(D,E){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",U));const oe=E.source;let he=f.get(oe);he===void 0&&(he={},f.set(oe,he));const ae=q(E);if(ae!==D.__cacheKey){he[ae]===void 0&&(he[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),he[ae].usedTimes++;const qe=he[D.__cacheKey];qe!==void 0&&(he[D.__cacheKey].usedTimes--,qe.usedTimes===0&&N(E)),D.__cacheKey=ae,D.__webglTexture=he[ae].texture}return X}function Ee(D,E,X){let oe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=s.TEXTURE_3D);const he=ke(D,E),ae=E.source;t.bindTexture(oe,D.__webglTexture,s.TEXTURE0+X);const qe=n.get(ae);if(ae.version!==qe.__version||he===!0){t.activeTexture(s.TEXTURE0+X);const we=gt.getPrimaries(gt.workingColorSpace),Fe=E.colorSpace===Pi?null:gt.getPrimaries(E.colorSpace),_t=E.colorSpace===Pi||we===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ye=_(E.image,!1,i.maxTextureSize);ye=je(E,ye);const Be=r.convert(E.format,E.colorSpace),rt=r.convert(E.type);let st=x(E.internalFormat,Be,rt,E.colorSpace,E.isVideoTexture);ue(oe,E);let Ve;const yt=E.mipmaps,ot=E.isVideoTexture!==!0,Lt=qe.__version===void 0||he===!0,B=ae.dataReady,Ne=b(E,ye);if(E.isDepthTexture)st=y(E.format===zs,E.type),Lt&&(ot?t.texStorage2D(s.TEXTURE_2D,1,st,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,st,ye.width,ye.height,0,Be,rt,null));else if(E.isDataTexture)if(yt.length>0){ot&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ne,st,yt[0].width,yt[0].height);for(let Q=0,ce=yt.length;Q<ce;Q++)Ve=yt[Q],ot?B&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ve.width,Ve.height,Be,rt,Ve.data):t.texImage2D(s.TEXTURE_2D,Q,st,Ve.width,Ve.height,0,Be,rt,Ve.data);E.generateMipmaps=!1}else ot?(Lt&&t.texStorage2D(s.TEXTURE_2D,Ne,st,ye.width,ye.height),B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Be,rt,ye.data)):t.texImage2D(s.TEXTURE_2D,0,st,ye.width,ye.height,0,Be,rt,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,st,yt[0].width,yt[0].height,ye.depth);for(let Q=0,ce=yt.length;Q<ce;Q++)if(Ve=yt[Q],E.format!==In)if(Be!==null)if(ot){if(B)if(E.layerUpdates.size>0){const Ie=Rh(Ve.width,Ve.height,E.format,E.type);for(const Ue of E.layerUpdates){const vt=Ve.data.subarray(Ue*Ie/Ve.data.BYTES_PER_ELEMENT,(Ue+1)*Ie/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Ue,Ve.width,Ve.height,1,Be,vt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Ve.width,Ve.height,ye.depth,Be,Ve.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,st,Ve.width,Ve.height,ye.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Ve.width,Ve.height,ye.depth,Be,rt,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,st,Ve.width,Ve.height,ye.depth,0,Be,rt,Ve.data)}else{ot&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ne,st,yt[0].width,yt[0].height);for(let Q=0,ce=yt.length;Q<ce;Q++)Ve=yt[Q],E.format!==In?Be!==null?ot?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Ve.width,Ve.height,Be,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,st,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?B&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ve.width,Ve.height,Be,rt,Ve.data):t.texImage2D(s.TEXTURE_2D,Q,st,Ve.width,Ve.height,0,Be,rt,Ve.data)}else if(E.isDataArrayTexture)if(ot){if(Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,st,ye.width,ye.height,ye.depth),B)if(E.layerUpdates.size>0){const Q=Rh(ye.width,ye.height,E.format,E.type);for(const ce of E.layerUpdates){const Ie=ye.data.subarray(ce*Q/ye.data.BYTES_PER_ELEMENT,(ce+1)*Q/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,ye.width,ye.height,1,Be,rt,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Be,rt,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,st,ye.width,ye.height,ye.depth,0,Be,rt,ye.data);else if(E.isData3DTexture)ot?(Lt&&t.texStorage3D(s.TEXTURE_3D,Ne,st,ye.width,ye.height,ye.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Be,rt,ye.data)):t.texImage3D(s.TEXTURE_3D,0,st,ye.width,ye.height,ye.depth,0,Be,rt,ye.data);else if(E.isFramebufferTexture){if(Lt)if(ot)t.texStorage2D(s.TEXTURE_2D,Ne,st,ye.width,ye.height);else{let Q=ye.width,ce=ye.height;for(let Ie=0;Ie<Ne;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,st,Q,ce,0,Be,rt,null),Q>>=1,ce>>=1}}else if(yt.length>0){if(ot&&Lt){const Q=De(yt[0]);t.texStorage2D(s.TEXTURE_2D,Ne,st,Q.width,Q.height)}for(let Q=0,ce=yt.length;Q<ce;Q++)Ve=yt[Q],ot?B&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Be,rt,Ve):t.texImage2D(s.TEXTURE_2D,Q,st,Be,rt,Ve);E.generateMipmaps=!1}else if(ot){if(Lt){const Q=De(ye);t.texStorage2D(s.TEXTURE_2D,Ne,st,Q.width,Q.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,rt,ye)}else t.texImage2D(s.TEXTURE_2D,0,st,Be,rt,ye);m(E)&&g(oe),qe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function G(D,E,X){if(E.image.length!==6)return;const oe=ke(D,E),he=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const ae=n.get(he);if(he.version!==ae.__version||oe===!0){t.activeTexture(s.TEXTURE0+X);const qe=gt.getPrimaries(gt.workingColorSpace),we=E.colorSpace===Pi?null:gt.getPrimaries(E.colorSpace),Fe=E.colorSpace===Pi||qe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const _t=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let ce=0;ce<6;ce++)!_t&&!ye?Be[ce]=_(E.image[ce],!0,i.maxCubemapSize):Be[ce]=ye?E.image[ce].image:E.image[ce],Be[ce]=je(E,Be[ce]);const rt=Be[0],st=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type),yt=x(E.internalFormat,st,Ve,E.colorSpace),ot=E.isVideoTexture!==!0,Lt=ae.__version===void 0||oe===!0,B=he.dataReady;let Ne=b(E,rt);ue(s.TEXTURE_CUBE_MAP,E);let Q;if(_t){ot&&Lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,yt,rt.width,rt.height);for(let ce=0;ce<6;ce++){Q=Be[ce].mipmaps;for(let Ie=0;Ie<Q.length;Ie++){const Ue=Q[Ie];E.format!==In?st!==null?ot?B&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,Ue.width,Ue.height,st,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,yt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,Ue.width,Ue.height,st,Ve,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,yt,Ue.width,Ue.height,0,st,Ve,Ue.data)}}}else{if(Q=E.mipmaps,ot&&Lt){Q.length>0&&Ne++;const ce=De(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,yt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ye){ot?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Be[ce].width,Be[ce].height,st,Ve,Be[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,yt,Be[ce].width,Be[ce].height,0,st,Ve,Be[ce].data);for(let Ie=0;Ie<Q.length;Ie++){const vt=Q[Ie].image[ce].image;ot?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,vt.width,vt.height,st,Ve,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,yt,vt.width,vt.height,0,st,Ve,vt.data)}}else{ot?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,st,Ve,Be[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,yt,st,Ve,Be[ce]);for(let Ie=0;Ie<Q.length;Ie++){const Ue=Q[Ie];ot?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,st,Ve,Ue.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,yt,st,Ve,Ue.image[ce])}}}m(E)&&g(s.TEXTURE_CUBE_MAP),ae.__version=he.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function j(D,E,X,oe,he,ae){const qe=r.convert(X.format,X.colorSpace),we=r.convert(X.type),Fe=x(X.internalFormat,qe,we,X.colorSpace);if(!n.get(E).__hasExternalTextures){const ye=Math.max(1,E.width>>ae),Be=Math.max(1,E.height>>ae);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,ae,Fe,ye,Be,E.depth,0,qe,we,null):t.texImage2D(he,ae,Fe,ye,Be,0,qe,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,he,n.get(X).__webglTexture,0,ve(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,he,n.get(X).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(D,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const oe=E.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,ae=y(E.stencilBuffer,he),qe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=ve(E);ge(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ae,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,D)}else{const oe=E.textures;for(let he=0;he<oe.length;he++){const ae=oe[he],qe=r.convert(ae.format,ae.colorSpace),we=r.convert(ae.type),Fe=x(ae.internalFormat,qe,we,ae.colorSpace),_t=ve(E);X&&ge(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Fe,E.width,E.height):ge(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const oe=n.get(E.depthTexture).__webglTexture,he=ve(E);if(E.depthTexture.format===Us)ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(E.depthTexture.format===zs)ge(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Te(D){const E=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const oe=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=oe}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ee(E.__webglFramebuffer,D)}else if(X){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=s.createRenderbuffer(),J(E.__webglDepthbuffer[oe],D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),J(E.__webglDepthbuffer,D,!1);else{const oe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,he)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(D,E,X){const oe=n.get(D);E!==void 0&&j(oe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Te(D)}function Oe(D){const E=D.texture,X=n.get(D),oe=n.get(E);D.addEventListener("dispose",I);const he=D.textures,ae=D.isWebGLCubeRenderTarget===!0,qe=he.length>1;if(qe||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=E.version,o.memory.textures++),ae){X.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[we]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)X.__webglFramebuffer[we][Fe]=s.createFramebuffer()}else X.__webglFramebuffer[we]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)X.__webglFramebuffer[we]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(qe)for(let we=0,Fe=he.length;we<Fe;we++){const _t=n.get(he[we]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&ge(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let we=0;we<he.length;we++){const Fe=he[we];X.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[we]);const _t=r.convert(Fe.format,Fe.colorSpace),ye=r.convert(Fe.type),Be=x(Fe.internalFormat,_t,ye,Fe.colorSpace,D.isXRRenderTarget===!0),rt=ve(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Be,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,X.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),J(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),ue(s.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)j(X.__webglFramebuffer[we][Fe],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Fe);else j(X.__webglFramebuffer[we],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(E)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let we=0,Fe=he.length;we<Fe;we++){const _t=he[we],ye=n.get(_t);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ue(s.TEXTURE_2D,_t),j(X.__webglFramebuffer,D,_t,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),m(_t)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,oe.__webglTexture),ue(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)j(X.__webglFramebuffer[Fe],D,E,s.COLOR_ATTACHMENT0,we,Fe);else j(X.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,we,0);m(E)&&g(we),t.unbindTexture()}D.depthBuffer&&Te(D)}function ct(D){const E=D.textures;for(let X=0,oe=E.length;X<oe;X++){const he=E[X];if(m(he)){const ae=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,qe=n.get(he).__webglTexture;t.bindTexture(ae,qe),g(ae),t.unbindTexture()}}}const le=[],O=[];function Me(D){if(D.samples>0){if(ge(D)===!1){const E=D.textures,X=D.width,oe=D.height;let he=s.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=n.get(D),we=E.length>1;if(we)for(let Fe=0;Fe<E.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Fe]);const _t=n.get(E[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,X,oe,0,0,X,oe,he,s.NEAREST),c===!0&&(le.length=0,O.length=0,le.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(ae),O.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<E.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Fe]);const _t=n.get(E[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,_t,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ve(D){return Math.min(i.maxSamples,D.samples)}function ge(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(D){const E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function je(D,E){const X=D.colorSpace,oe=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==ki&&X!==Pi&&(gt.getTransfer(X)===Bt?(oe!==In||he!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=Y,this.setTexture2DArray=re,this.setTexture3D=F,this.setTextureCube=se,this.rebindTextures=te,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ge}function um(s,e){function t(n,i=Pi){let r;const o=gt.getTransfer(i);if(n===yi)return s.UNSIGNED_BYTE;if(n===Gc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return s.BYTE;if(n===Zh)return s.SHORT;if(n===Ar)return s.UNSIGNED_SHORT;if(n===Hc)return s.INT;if(n===Fi)return s.UNSIGNED_INT;if(n===Wn)return s.FLOAT;if(n===Ir)return s.HALF_FLOAT;if(n===jh)return s.ALPHA;if(n===$h)return s.RGB;if(n===In)return s.RGBA;if(n===Jh)return s.LUMINANCE;if(n===Qh)return s.LUMINANCE_ALPHA;if(n===Us)return s.DEPTH_COMPONENT;if(n===zs)return s.DEPTH_STENCIL;if(n===Xc)return s.RED;if(n===Lo)return s.RED_INTEGER;if(n===eu)return s.RG;if(n===qc)return s.RG_INTEGER;if(n===Yc)return s.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===cc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===hc)return o===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===yc||n===vc||n===xc||n===bc||n===Mc||n===Sc||n===wc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===Ac||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===Cc||n===Rc||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class fm extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wb={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new jt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:Xb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qt(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zb extends vi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const _=new Yb,m=t.getContextAttributes();let g=null,x=null;const y=[],b=[],U=new ie;let I=null;const C=new tn;C.layers.enable(1),C.viewport=new St;const N=new tn;N.layers.enable(2),N.viewport=new St;const k=[C,N],v=new fm;v.layers.enable(1),v.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=y[G];return j===void 0&&(j=new th,y[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=y[G];return j===void 0&&(j=new th,y[G]=j),j.getGripSpace()},this.getHand=function(G){let j=y[G];return j===void 0&&(j=new th,y[G]=j),j.getHandSpace()};function q(G){const j=b.indexOf(G.inputSource);if(j===-1)return;const J=y[j];J!==void 0&&(J.update(G.inputSource,G.frame,l||o),J.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",re);for(let G=0;G<y.length;G++){const j=b[G];j!==null&&(b[G]=null,y[G].disconnect(j))}w=null,W=null,_.reset(),e.setRenderTarget(g),d=null,f=null,u=null,i=null,x=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new $n(d.framebufferWidth,d.framebufferHeight,{format:In,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,J=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?zs:Us,J=m.stencil?ks:Fi);const Te={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Te),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new $n(f.textureWidth,f.textureHeight,{format:In,type:yi,depthTexture:new lu(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(G){for(let j=0;j<G.removed.length;j++){const J=G.removed[j],ee=b.indexOf(J);ee>=0&&(b[ee]=null,y[ee].disconnect(J))}for(let j=0;j<G.added.length;j++){const J=G.added[j];let ee=b.indexOf(J);if(ee===-1){for(let te=0;te<y.length;te++)if(te>=b.length){b.push(J),ee=te;break}else if(b[te]===null){b[te]=J,ee=te;break}if(ee===-1)break}const Te=y[ee];Te&&Te.connect(J)}}const F=new L,se=new L;function H(G,j,J){F.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(J.matrixWorld);const ee=F.distanceTo(se),Te=j.projectionMatrix.elements,te=J.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),ct=Te[14]/(Te[10]+1),le=(Te[9]+1)/Te[5],O=(Te[9]-1)/Te[5],Me=(Te[8]-1)/Te[0],ve=(te[8]+1)/te[0],ge=Oe*Me,Se=Oe*ve,je=ee/(-Me+ve),De=je*-Me;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Te[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const D=Oe+je,E=ct+je,X=ge-De,oe=Se+(ee-De),he=le*ct/E*D,ae=O*ct/E*D;G.projectionMatrix.makePerspective(X,oe,he,ae,D,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function fe(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let j=G.near,J=G.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(J=_.depthFar)),v.near=N.near=C.near=j,v.far=N.far=C.far=J,(w!==v.near||W!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,W=v.far);const ee=G.parent,Te=v.cameras;fe(v,ee);for(let te=0;te<Te.length;te++)fe(Te[te],ee);Te.length===2?H(v,C,N):v.projectionMatrix.copy(C.projectionMatrix),me(G,v,ee)};function me(G,j,J){J===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(J.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Tr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ue=null;function ke(G,j){if(h=j.getViewerPose(l||o),p=j,h!==null){const J=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ee=!1;J.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let te=0;te<J.length;te++){const Oe=J[te];let ct=null;if(d!==null)ct=d.getViewport(Oe);else{const O=u.getViewSubImage(f,Oe);ct=O.viewport,te===0&&(e.setRenderTargetTextures(x,O.colorTexture,f.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(x))}let le=k[te];le===void 0&&(le=new tn,le.layers.enable(te),le.viewport=new St,k[te]=le),le.matrix.fromArray(Oe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Oe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ct.x,ct.y,ct.width,ct.height),te===0&&(v.matrix.copy(le.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ee===!0&&v.cameras.push(le)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const te=u.getDepthInformation(J[0]);te&&te.isValid&&te.texture&&_.init(e,te,i.renderState)}}for(let J=0;J<y.length;J++){const ee=b[J],Te=y[J];ee!==null&&Te!==void 0&&Te.update(ee,j,l||o)}ue&&ue(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}const Ee=new om;Ee.setAnimationLoop(ke),this.setAnimationLoop=function(G){ue=G},this.dispose=function(){}}}const gs=new Jn,Kb=new Xe;function jb(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nm(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,y,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,x,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ln&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ln&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=e.get(g),y=x.envMap,b=x.envMapRotation;y&&(m.envMap.value=y,gs.copy(b),gs.x*=-1,gs.y*=-1,gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(gs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $b(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function l(x,y){let b=i[x.id];b===void 0&&(p(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",m));const U=y.program;n.updateUBOMapping(x,U);const I=e.render.frame;r[x.id]!==I&&(f(x),r[x.id]=I)}function h(x){const y=u();x.__bindingPointIndex=y;const b=s.createBuffer(),U=x.__size,I=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,U,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],b=x.uniforms,U=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let I=0,C=b.length;I<C;I++){const N=Array.isArray(b[I])?b[I]:[b[I]];for(let k=0,v=N.length;k<v;k++){const w=N[k];if(d(w,I,k,U)===!0){const W=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let Y=0;for(let re=0;re<q.length;re++){const F=q[re],se=_(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,W+Y,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,Y),Y+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,y,b,U){const I=x.value,C=y+"_"+b;if(U[C]===void 0)return typeof I=="number"||typeof I=="boolean"?U[C]=I:U[C]=I.clone(),!0;{const N=U[C];if(typeof I=="number"||typeof I=="boolean"){if(N!==I)return U[C]=I,!0}else if(N.equals(I)===!1)return N.copy(I),!0}return!1}function p(x){const y=x.uniforms;let b=0;const U=16;for(let C=0,N=y.length;C<N;C++){const k=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,w=k.length;v<w;v++){const W=k[v],q=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,re=q.length;Y<re;Y++){const F=q[Y],se=_(F),H=b%U,fe=H%se.boundary,me=H+fe;b+=fe,me!==0&&U-me<se.storage&&(b+=U-me),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=se.storage}}}const I=b%U;return I>0&&(b+=U-I),x.__size=b,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:g}}class dm{constructor(e={}){const{canvas:t=Jp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=Ui,this.toneMappingExposure=1;const y=this;let b=!1,U=0,I=0,C=null,N=-1,k=null;const v=new St,w=new St;let W=null;const q=new Ae(0);let Y=0,re=t.width,F=t.height,se=1,H=null,fe=null;const me=new St(0,0,re,F),ue=new St(0,0,re,F);let ke=!1;const Ee=new Uo;let G=!1,j=!1;const J=new Xe,ee=new Xe,Te=new L,te=new St,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function le(){return C===null?se:1}let O=n;function Me(R,z){return t.getContext(R,z)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Po}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),O===null){const z="webgl2";if(O=Me(z,R),O===null)throw Me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,ge,Se,je,De,D,E,X,oe,he,ae,qe,we,Fe,_t,ye,Be,rt,st,Ve,yt,ot,Lt,B;function Ne(){ve=new ix(O),ve.init(),ot=new um(O,ve),ge=new $v(O,ve,e,ot),Se=new Fb(O),ge.reverseDepthBuffer&&Se.buffers.depth.setReversed(!0),je=new ox(O),De=new wb,D=new Gb(O,ve,Se,De,ge,ot,je),E=new Qv(y),X=new nx(y),oe=new d0(O),Lt=new Kv(O,oe),he=new sx(O,oe,je,Lt),ae=new cx(O,he,oe,je),st=new ax(O,ge,D),ye=new Jv(De),qe=new Sb(y,E,X,ve,ge,Lt,ye),we=new jb(y,De),Fe=new Ab,_t=new Lb(ve),rt=new Zv(y,E,X,Se,ae,f,c),Be=new Ub(y,ae,ge),B=new $b(O,je,ge,Se),Ve=new jv(O,ve,je),yt=new rx(O,ve,je),je.programs=qe.programs,y.capabilities=ge,y.extensions=ve,y.properties=De,y.renderLists=Fe,y.shadowMap=Be,y.state=Se,y.info=je}Ne();const Q=new Zb(y,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(re,F,!1))},this.getSize=function(R){return R.set(re,F)},this.setSize=function(R,z,Z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,F=z,t.width=Math.floor(R*se),t.height=Math.floor(z*se),Z===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(re*se,F*se).floor()},this.setDrawingBufferSize=function(R,z,Z){re=R,F=z,se=Z,t.width=Math.floor(R*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(v)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,z,Z,K){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,z,Z,K),Se.viewport(v.copy(me).multiplyScalar(se).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,z,Z,K){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,z,Z,K),Se.scissor(w.copy(ue).multiplyScalar(se).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(R){Se.setScissorTest(ke=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(R=!0,z=!0,Z=!0){let K=0;if(R){let V=!1;if(C!==null){const de=C.texture.format;V=de===Yc||de===qc||de===Lo}if(V){const de=C.texture.type,Ce=de===yi||de===Fi||de===Ar||de===ks||de===Gc||de===Wc,He=rt.getClearColor(),We=rt.getClearAlpha(),tt=He.r,nt=He.g,Ze=He.b;Ce?(d[0]=tt,d[1]=nt,d[2]=Ze,d[3]=We,O.clearBufferuiv(O.COLOR,0,d)):(p[0]=tt,p[1]=nt,p[2]=Ze,p[3]=We,O.clearBufferiv(O.COLOR,0,p))}else K|=O.COLOR_BUFFER_BIT}z&&(K|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Fe.dispose(),_t.dispose(),De.dispose(),E.dispose(),X.dispose(),ae.dispose(),Lt.dispose(),B.dispose(),qe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Vo),Q.removeEventListener("sessionend",Ho),bi.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=je.autoReset,z=Be.enabled,Z=Be.autoUpdate,K=Be.needsUpdate,V=Be.type;Ne(),je.autoReset=R,Be.enabled=z,Be.autoUpdate=Z,Be.needsUpdate=K,Be.type=V}function Ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const z=R.target;z.removeEventListener("dispose",vt),Yt(z)}function Yt(R){fn(R),De.remove(R)}function fn(R){const z=De.get(R).programs;z!==void 0&&(z.forEach(function(Z){qe.releaseProgram(Z)}),R.isShaderMaterial&&qe.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Z,K,V,de){z===null&&(z=Oe);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,He=El(R,z,Z,K,V);Se.setMaterial(K,Ce);let We=Z.index,tt=1;if(K.wireframe===!0){if(We=he.getWireframeAttribute(Z),We===void 0)return;tt=2}const nt=Z.drawRange,Ze=Z.attributes.position;let Rt=nt.start*tt,Ut=(nt.start+nt.count)*tt;de!==null&&(Rt=Math.max(Rt,de.start*tt),Ut=Math.min(Ut,(de.start+de.count)*tt)),We!==null?(Rt=Math.max(Rt,0),Ut=Math.min(Ut,We.count)):Ze!=null&&(Rt=Math.max(Rt,0),Ut=Math.min(Ut,Ze.count));const zt=Ut-Rt;if(zt<0||zt===1/0)return;Lt.setup(V,K,He,Z,We);let _n,mt=Ve;if(We!==null&&(_n=oe.get(We),mt=yt,mt.setIndex(_n)),V.isMesh)K.wireframe===!0?(Se.setLineWidth(K.wireframeLinewidth*le()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(V.isLine){let $e=K.linewidth;$e===void 0&&($e=1),Se.setLineWidth($e*le()),V.isLineSegments?mt.setMode(O.LINES):V.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else V.isPoints?mt.setMode(O.POINTS):V.isSprite&&mt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const $e=V._multiDrawStarts,Qt=V._multiDrawCounts,Et=V._multiDrawCount,Fn=We?oe.get(We).bytesPerElement:1,zi=De.get(K).currentProgram.getUniforms();for(let En=0;En<Et;En++)zi.setValue(O,"_gl_DrawID",En),mt.render($e[En]/Fn,Qt[En])}else if(V.isInstancedMesh)mt.renderInstances(Rt,zt,V.count);else if(Z.isInstancedBufferGeometry){const $e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Qt=Math.min(Z.instanceCount,$e);mt.renderInstances(Rt,zt,Qt)}else mt.render(Rt,zt)};function bt(R,z,Z){R.transparent===!0&&R.side===oi&&R.forceSinglePass===!1?(R.side=Ln,R.needsUpdate=!0,ls(R,z,Z),R.side=_i,R.needsUpdate=!0,ls(R,z,Z),R.side=oi):ls(R,z,Z)}this.compile=function(R,z,Z=null){Z===null&&(Z=R),m=_t.get(Z),m.init(z),x.push(m),Z.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),R!==Z&&R.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const K=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const de=V.material;if(de)if(Array.isArray(de))for(let Ce=0;Ce<de.length;Ce++){const He=de[Ce];bt(He,Z,V),K.add(He)}else bt(de,Z,V),K.add(de)}),x.pop(),m=null,K},this.compileAsync=function(R,z,Z=null){const K=this.compile(R,z,Z);return new Promise(V=>{function de(){if(K.forEach(function(Ce){De.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){V(R);return}setTimeout(de,10)}ve.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ft=null;function ei(R){Ft&&Ft(R)}function Vo(){bi.stop()}function Ho(){bi.start()}const bi=new om;bi.setAnimationLoop(ei),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(R){Ft=R,Q.setAnimationLoop(R),R===null?bi.stop():bi.start()},Q.addEventListener("sessionstart",Vo),Q.addEventListener("sessionend",Ho),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,z,C),m=_t.get(R,x.length),m.init(z),x.push(m),ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ee.setFromProjectionMatrix(ee),j=this.localClippingEnabled,G=ye.init(this.clippingPlanes,j),_=Fe.get(R,g.length),_.init(),g.push(_),Q.enabled===!0&&Q.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&Or(de,z,-1/0,y.sortObjects)}Or(R,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,fe),ct=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ct&&rt.addToRenderList(_,R),this.info.render.frame++,G===!0&&ye.beginShadows();const Z=m.state.shadowsArray;Be.render(Z,R,z),G===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,V=_.transmissive;if(m.setupLights(),z.isArrayCamera){const de=z.cameras;if(V.length>0)for(let Ce=0,He=de.length;Ce<He;Ce++){const We=de[Ce];Wo(K,V,R,We)}ct&&rt.render(R);for(let Ce=0,He=de.length;Ce<He;Ce++){const We=de[Ce];Go(_,R,We,We.viewport)}}else V.length>0&&Wo(K,V,R,z),ct&&rt.render(R),Go(_,R,z);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(y,R,z),Lt.resetDefaultState(),N=-1,k=null,x.pop(),x.length>0?(m=x[x.length-1],G===!0&&ye.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Or(R,z,Z,K){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ee.intersectsSprite(R)){K&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const Ce=ae.update(R),He=R.material;He.visible&&_.push(R,Ce,He,Z,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ee.intersectsObject(R))){const Ce=ae.update(R),He=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),te.copy(Ce.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(ee)),Array.isArray(He)){const We=Ce.groups;for(let tt=0,nt=We.length;tt<nt;tt++){const Ze=We[tt],Rt=He[Ze.materialIndex];Rt&&Rt.visible&&_.push(R,Ce,Rt,Z,te.z,Ze)}}else He.visible&&_.push(R,Ce,He,Z,te.z,null)}}const de=R.children;for(let Ce=0,He=de.length;Ce<He;Ce++)Or(de[Ce],z,Z,K)}function Go(R,z,Z,K){const V=R.opaque,de=R.transmissive,Ce=R.transparent;m.setupLightsView(Z),G===!0&&ye.setGlobalState(y.clippingPlanes,Z),K&&Se.viewport(v.copy(K)),V.length>0&&cs(V,z,Z),de.length>0&&cs(de,z,Z),Ce.length>0&&cs(Ce,z,Z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Wo(R,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new $n(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Ir:yi,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const de=m.state.transmissionRenderTarget[K.id],Ce=K.viewport||v;de.setSize(Ce.z,Ce.w);const He=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(q),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),ct&&rt.render(Z);const We=y.toneMapping;y.toneMapping=Ui;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),G===!0&&ye.setGlobalState(y.clippingPlanes,K),cs(R,Z,K),D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de),ve.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ze=0,Rt=z.length;Ze<Rt;Ze++){const Ut=z[Ze],zt=Ut.object,_n=Ut.geometry,mt=Ut.material,$e=Ut.group;if(mt.side===oi&&zt.layers.test(K.layers)){const Qt=mt.side;mt.side=Ln,mt.needsUpdate=!0,Xo(zt,Z,K,_n,mt,$e),mt.side=Qt,mt.needsUpdate=!0,nt=!0}}nt===!0&&(D.updateMultisampleRenderTarget(de),D.updateRenderTargetMipmap(de))}y.setRenderTarget(He),y.setClearColor(q,Y),tt!==void 0&&(K.viewport=tt),y.toneMapping=We}function cs(R,z,Z){const K=z.isScene===!0?z.overrideMaterial:null;for(let V=0,de=R.length;V<de;V++){const Ce=R[V],He=Ce.object,We=Ce.geometry,tt=K===null?Ce.material:K,nt=Ce.group;He.layers.test(Z.layers)&&Xo(He,z,Z,We,tt,nt)}}function Xo(R,z,Z,K,V,de){R.onBeforeRender(y,z,Z,K,V,de),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(y,z,Z,K,R,de),V.transparent===!0&&V.side===oi&&V.forceSinglePass===!1?(V.side=Ln,V.needsUpdate=!0,y.renderBufferDirect(Z,z,K,V,R,de),V.side=_i,V.needsUpdate=!0,y.renderBufferDirect(Z,z,K,V,R,de),V.side=oi):y.renderBufferDirect(Z,z,K,V,R,de),R.onAfterRender(y,z,Z,K,V,de)}function ls(R,z,Z){z.isScene!==!0&&(z=Oe);const K=De.get(R),V=m.state.lights,de=m.state.shadowsArray,Ce=V.state.version,He=qe.getParameters(R,V.state,de,z,Z),We=qe.getProgramCacheKey(He);let tt=K.programs;K.environment=R.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(R.isMeshStandardMaterial?X:E).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",vt),tt=new Map,K.programs=tt);let nt=tt.get(We);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ce)return Yo(R,He),nt}else He.uniforms=qe.getUniforms(R),R.onBeforeCompile(He,y),nt=qe.acquireProgram(He,We),tt.set(We,nt),K.uniforms=He.uniforms;const Ze=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=ye.uniform),Yo(R,He),K.needsLights=Tl(R),K.lightsStateVersion=Ce,K.needsLights&&(Ze.ambientLightColor.value=V.state.ambient,Ze.lightProbe.value=V.state.probe,Ze.directionalLights.value=V.state.directional,Ze.directionalLightShadows.value=V.state.directionalShadow,Ze.spotLights.value=V.state.spot,Ze.spotLightShadows.value=V.state.spotShadow,Ze.rectAreaLights.value=V.state.rectArea,Ze.ltc_1.value=V.state.rectAreaLTC1,Ze.ltc_2.value=V.state.rectAreaLTC2,Ze.pointLights.value=V.state.point,Ze.pointLightShadows.value=V.state.pointShadow,Ze.hemisphereLights.value=V.state.hemi,Ze.directionalShadowMap.value=V.state.directionalShadowMap,Ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ze.spotShadowMap.value=V.state.spotShadowMap,Ze.spotLightMatrix.value=V.state.spotLightMatrix,Ze.spotLightMap.value=V.state.spotLightMap,Ze.pointShadowMap.value=V.state.pointShadowMap,Ze.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function qo(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Za.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Yo(R,z){const Z=De.get(R);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function El(R,z,Z,K,V){z.isScene!==!0&&(z=Oe),D.resetTextureUnits();const de=z.fog,Ce=K.isMeshStandardMaterial?z.environment:null,He=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ki,We=(K.isMeshStandardMaterial?X:E).get(K.envMap||Ce),tt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ze=!!Z.morphAttributes.position,Rt=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let zt=Ui;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(zt=y.toneMapping);const _n=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=_n!==void 0?_n.length:0,$e=De.get(K),Qt=m.state.lights;if(G===!0&&(j===!0||R!==k)){const Bn=R===k&&K.id===N;ye.setState(K,R,Bn)}let Et=!1;K.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Qt.state.version||$e.outputColorSpace!==He||V.isBatchedMesh&&$e.batching===!1||!V.isBatchedMesh&&$e.batching===!0||V.isBatchedMesh&&$e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&$e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&$e.instancing===!1||!V.isInstancedMesh&&$e.instancing===!0||V.isSkinnedMesh&&$e.skinning===!1||!V.isSkinnedMesh&&$e.skinning===!0||V.isInstancedMesh&&$e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&$e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&$e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&$e.instancingMorph===!1&&V.morphTexture!==null||$e.envMap!==We||K.fog===!0&&$e.fog!==de||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ye.numPlanes||$e.numIntersection!==ye.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==nt||$e.morphTargets!==Ze||$e.morphNormals!==Rt||$e.morphColors!==Ut||$e.toneMapping!==zt||$e.morphTargetsCount!==mt)&&(Et=!0):(Et=!0,$e.__version=K.version);let Fn=$e.currentProgram;Et===!0&&(Fn=ls(K,z,V));let zi=!1,En=!1,Fr=!1;const Ht=Fn.getUniforms(),Dt=$e.uniforms;if(Se.useProgram(Fn.program)&&(zi=!0,En=!0,Fr=!0),K.id!==N&&(N=K.id,En=!0),zi||k!==R){ge.reverseDepthBuffer?(J.copy(R.projectionMatrix),F_(J),B_(J),Ht.setValue(O,"projectionMatrix",J)):Ht.setValue(O,"projectionMatrix",R.projectionMatrix),Ht.setValue(O,"viewMatrix",R.matrixWorldInverse);const Bn=Ht.map.cameraPosition;Bn!==void 0&&Bn.setValue(O,Te.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&Ht.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ht.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),k!==R&&(k=R,En=!0,Fr=!0)}if(V.isSkinnedMesh){Ht.setOptional(O,V,"bindMatrix"),Ht.setOptional(O,V,"bindMatrixInverse");const Bn=V.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ht.setValue(O,"boneTexture",Bn.boneTexture,D))}V.isBatchedMesh&&(Ht.setOptional(O,V,"batchingTexture"),Ht.setValue(O,"batchingTexture",V._matricesTexture,D),Ht.setOptional(O,V,"batchingIdTexture"),Ht.setValue(O,"batchingIdTexture",V._indirectTexture,D),Ht.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Ht.setValue(O,"batchingColorTexture",V._colorsTexture,D));const hs=Z.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&st.update(V,Z,Fn),(En||$e.receiveShadow!==V.receiveShadow)&&($e.receiveShadow=V.receiveShadow,Ht.setValue(O,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Dt.envMap.value=We,Dt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Dt.envMapIntensity.value=z.environmentIntensity),En&&(Ht.setValue(O,"toneMappingExposure",y.toneMappingExposure),$e.needsLights&&Al(Dt,Fr),de&&K.fog===!0&&we.refreshFogUniforms(Dt,de),we.refreshMaterialUniforms(Dt,K,se,F,m.state.transmissionRenderTarget[R.id]),Za.upload(O,qo($e),Dt,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Za.upload(O,qo($e),Dt,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ht.setValue(O,"center",V.center),Ht.setValue(O,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(O,"normalMatrix",V.normalMatrix),Ht.setValue(O,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Bn=K.uniformsGroups;for(let $s=0,Zo=Bn.length;$s<Zo;$s++){const Js=Bn[$s];B.update(Js,Fn),B.bind(Js,Fn)}}return Fn}function Al(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Tl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,z,Z){De.get(R.texture).__webglTexture=z,De.get(R.depthTexture).__webglTexture=Z;const K=De.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const Z=De.get(R);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,Z=0){C=R,U=z,I=Z;let K=!0,V=null,de=!1,Ce=!1;if(R){const We=De.get(R);if(We.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(We.__hasExternalTextures)D.rebindTextures(R,De.get(R.texture).__webglTexture,De.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(We.__boundDepthTexture!==Ze){if(Ze!==null&&De.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const nt=De.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[z])?V=nt[z][Z]:V=nt[z],de=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?V=De.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?V=nt[Z]:V=nt,v.copy(R.viewport),w.copy(R.scissor),W=R.scissorTest}else v.copy(me).multiplyScalar(se).floor(),w.copy(ue).multiplyScalar(se).floor(),W=ke;if(Se.bindFramebuffer(O.FRAMEBUFFER,V)&&K&&Se.drawBuffers(R,V),Se.viewport(v),Se.scissor(w),Se.setScissorTest(W),de){const We=De.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,Z)}else if(Ce){const We=De.get(R.texture),tt=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.__webglTexture,Z||0,tt)}N=-1},this.readRenderTargetPixels=function(R,z,Z,K,V,de,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(He=He[Ce]),He){Se.bindFramebuffer(O.FRAMEBUFFER,He);try{const We=R.texture,tt=We.format,nt=We.type;if(!ge.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-K&&Z>=0&&Z<=R.height-V&&O.readPixels(z,Z,K,V,ot.convert(tt),ot.convert(nt),de)}finally{const We=C!==null?De.get(C).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,z,Z,K,V,de,Ce){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(He=He[Ce]),He){const We=R.texture,tt=We.format,nt=We.type;if(!ge.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-K&&Z>=0&&Z<=R.height-V){Se.bindFramebuffer(O.FRAMEBUFFER,He);const Ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.bufferData(O.PIXEL_PACK_BUFFER,de.byteLength,O.STREAM_READ),O.readPixels(z,Z,K,V,ot.convert(tt),ot.convert(nt),0);const Rt=C!==null?De.get(C).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,Rt);const Ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await O_(O,Ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,de),O.deleteBuffer(Ze),O.deleteSync(Ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,Z=0){R.isTexture!==!0&&(Ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-Z),V=Math.floor(R.image.width*K),de=Math.floor(R.image.height*K),Ce=z!==null?z.x:0,He=z!==null?z.y:0;D.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ce,He,V,de),Se.unbindTexture()},this.copyTextureToTexture=function(R,z,Z=null,K=null,V=0){R.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],z=arguments[2],V=arguments[3]||0,Z=null);let de,Ce,He,We,tt,nt;Z!==null?(de=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,He=Z.min.x,We=Z.min.y):(de=R.image.width,Ce=R.image.height,He=0,We=0),K!==null?(tt=K.x,nt=K.y):(tt=0,nt=0);const Ze=ot.convert(z.format),Rt=ot.convert(z.type);D.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Ut=O.getParameter(O.UNPACK_ROW_LENGTH),zt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_n=O.getParameter(O.UNPACK_SKIP_PIXELS),mt=O.getParameter(O.UNPACK_SKIP_ROWS),$e=O.getParameter(O.UNPACK_SKIP_IMAGES),Qt=R.isCompressedTexture?R.mipmaps[V]:R.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Qt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,He),O.pixelStorei(O.UNPACK_SKIP_ROWS,We),R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,tt,nt,de,Ce,Ze,Rt,Qt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,tt,nt,Qt.width,Qt.height,Ze,Qt.data):O.texSubImage2D(O.TEXTURE_2D,V,tt,nt,de,Ce,Ze,Rt,Qt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_n),O.pixelStorei(O.UNPACK_SKIP_ROWS,mt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e),V===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,z,Z=null,K=null,V=0){R.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,R=arguments[2],z=arguments[3],V=arguments[4]||0);let de,Ce,He,We,tt,nt,Ze,Rt,Ut;const zt=R.isCompressedTexture?R.mipmaps[V]:R.image;Z!==null?(de=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,He=Z.max.z-Z.min.z,We=Z.min.x,tt=Z.min.y,nt=Z.min.z):(de=zt.width,Ce=zt.height,He=zt.depth,We=0,tt=0,nt=0),K!==null?(Ze=K.x,Rt=K.y,Ut=K.z):(Ze=0,Rt=0,Ut=0);const _n=ot.convert(z.format),mt=ot.convert(z.type);let $e;if(z.isData3DTexture)D.setTexture3D(z,0),$e=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)D.setTexture2DArray(z,0),$e=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Qt=O.getParameter(O.UNPACK_ROW_LENGTH),Et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Fn=O.getParameter(O.UNPACK_SKIP_PIXELS),zi=O.getParameter(O.UNPACK_SKIP_ROWS),En=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,We),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nt),R.isDataTexture||R.isData3DTexture?O.texSubImage3D($e,V,Ze,Rt,Ut,de,Ce,He,_n,mt,zt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D($e,V,Ze,Rt,Ut,de,Ce,He,_n,zt.data):O.texSubImage3D($e,V,Ze,Rt,Ut,de,Ce,He,_n,mt,zt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Qt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,zi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,En),V===0&&z.generateMipmaps&&O.generateMipmap($e),Se.unbindTexture()},this.initRenderTarget=function(R){De.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){U=0,I=0,C=null,Se.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Kc?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Do?"display-p3":"srgb"}}class tl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class il extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_o,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new L;class Vs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uu extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dr;const Gr=new L,pr=new L,mr=new L,gr=new ie,Wr=new ie,pm=new Xe,ya=new L,Xr=new L,va=new L,Pf=new ie,nh=new ie,If=new ie;class mm extends wt{constructor(e=new uu){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new at;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sl(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Vs(n,3,0,!1)),dr.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),pm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;xa(ya.set(-.5,-.5,0),mr,o,pr,i,r),xa(Xr.set(.5,-.5,0),mr,o,pr,i,r),xa(va.set(.5,.5,0),mr,o,pr,i,r),Pf.set(0,0),nh.set(1,0),If.set(1,1);let a=e.ray.intersectTriangle(ya,Xr,va,!1,Gr);if(a===null&&(xa(Xr.set(-.5,.5,0),mr,o,pr,i,r),nh.set(0,1),a=e.ray.intersectTriangle(ya,va,Xr,!1,Gr),a===null))return;const c=e.ray.origin.distanceTo(Gr);c<e.near||c>e.far||t.push({distance:c,point:Gr.clone(),uv:Hn.getInterpolation(Gr,ya,Xr,va,Pf,nh,If,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xa(s,e,t,n,i,r){gr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Wr.x=r*gr.x-i*gr.y,Wr.y=i*gr.x+r*gr.y):Wr.copy(gr),s.copy(e),s.x+=Wr.x,s.y+=Wr.y,s.applyMatrix4(pm)}const ba=new L,Lf=new L;class gm extends wt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ba.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(ba);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ba.setFromMatrixPosition(e.matrixWorld),Lf.setFromMatrixPosition(this.matrixWorld);const n=ba.distanceTo(Lf)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Df=new L,Nf=new St,Uf=new St,Jb=new L,Of=new Xe,Ma=new L,ih=new bn,Ff=new Xe,sh=new qs;class fu extends qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(i),e.ray.intersectsSphere(ih)!==!1&&(Ff.copy(i).invert(),sh.copy(e.ray).applyMatrix4(Ff),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Nf.fromBufferAttribute(i.attributes.skinIndex,e),Uf.fromBufferAttribute(i.attributes.skinWeight,e),Df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Uf.getComponent(r);if(o!==0){const a=Nf.getComponent(r);Of.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jb.copy(Df).applyMatrix4(Of),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rl extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mi extends jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=hn,h=hn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bf=new Xe,Qb=new Xe;class Oo{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Qb;Bf.multiplyMatrices(a,t[r]),Bf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mi(t,e,e,In,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new rl),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rr extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new Xe,kf=new Xe,Sa=[],zf=new Dn,eM=new Xe,qr=new qt,Yr=new bn;class _m extends qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),zf.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Yr.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_r),kf.multiplyMatrices(n,_r),qr.matrixWorld=kf,qr.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){const c=Sa[o];c.instanceId=r,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mi(new Float32Array(i*this.count),i,this.count,Xc,Wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function tM(s,e){return s.z-e.z}function nM(s,e){return e.z-s.z}class iM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const o=i[this.index];r.push(o),this.index++,o.start=e.start,o.count=e.count,o.z=t,o.index=n}reset(){this.list.length=0,this.index=0}}const Yi=new Xe,rh=new Xe,sM=new Xe,rM=new Ae(1,1,1),Vf=new Xe,oh=new Uo,wa=new Dn,_s=new bn,Zr=new L,Hf=new L,oM=new L,ah=new iM,xn=new qt,Ea=[];function aM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,s.getComponent(r,o))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class ym extends qt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new at,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new mi(t,e,e,In,Wn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new mi(t,e,e,Lo,Fi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new mi(t,e,e,In,Wn);n.colorSpace=gt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Pt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Pt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Yi),this.getBoundingBoxAt(r,wa).applyMatrix4(Yi),e.union(wa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Yi),this.getBoundingSphereAt(r,_s).applyMatrix4(Yi),e.union(_s)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const r=this._matricesTexture,o=r.image.data;sM.toArray(o,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(rM.toArray(a.image.data,i*4),a.needsUpdate=!0),i}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const l=e.getIndex(),h=l!==null;if(h&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._geometryCount;return this._geometryCount++,o.push(i),a.push({start:h?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Dn,sphereInitialized:!1,sphere:new bn}),this.setGeometryAt(u,e),u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const d in n.attributes){const p=t.getAttribute(d),_=n.getAttribute(d);aM(p,_,c);const m=p.itemSize;for(let g=p.count,x=l;g<x;g++){const y=c+g;for(let b=0;b<m;b++)_.setComponent(y,b,0)}_.needsUpdate=!0,_.addUpdateRange(c*m,l*m)}if(i){const d=a.indexStart;for(let p=0;p<o.count;p++)r.setX(d+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)r.setX(d+p,c);r.needsUpdate=!0,r.addUpdateRange(d,a.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?o.count:f.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const o=r.index,a=r.attributes.position,c=this._drawRanges[e];for(let l=c.start,h=c.start+c.count;l<h;l++){let u=l;o&&(u=o.getX(u)),i.expandByPoint(Zr.fromBufferAttribute(a,u))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,wa),wa.getCenter(i.center);const o=r.index,a=r.attributes.position,c=this._drawRanges[e];let l=0;for(let h=c.start,u=c.start+c.count;h<u;h++){let f=h;o&&(f=o.getX(f)),Zr.fromBufferAttribute(a,f),l=Math.max(l,i.center.distanceToSquared(Zr))}i.radius=Math.sqrt(l),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,o=this.geometry;xn.material=this.material,xn.geometry.index=o.index,xn.geometry.attributes=o.attributes,xn.geometry.boundingBox===null&&(xn.geometry.boundingBox=new Dn),xn.geometry.boundingSphere===null&&(xn.geometry.boundingSphere=new bn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,h=i[l];xn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,xn.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,xn.geometry.boundingBox),this.getBoundingSphereAt(l,xn.geometry.boundingSphere),xn.raycast(e,Ea);for(let u=0,f=Ea.length;u<f;u++){const d=Ea[u];d.object=this,d.batchId=a,t.push(d)}Ea.length=0}xn.material=null,xn.geometry.index=null,xn.geometry.attributes={},xn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;f&&(Vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),oh.setFromProjectionMatrix(Vf,e.coordinateSystem));let _=0;if(this.sortObjects){rh.copy(this.matrixWorld).invert(),Zr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(rh),Hf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(rh);for(let x=0,y=c.length;x<y;x++)if(c[x].visible&&c[x].active){const b=c[x].geometryIndex;this.getMatrixAt(x,Yi),this.getBoundingSphereAt(b,_s).applyMatrix4(Yi);let U=!1;if(f&&(U=!oh.intersectsSphere(_s)),!U){const I=oM.subVectors(_s.center,Zr).dot(Hf);ah.push(u[b],I,x)}}const m=ah.list,g=this.customSort;g===null?m.sort(r.transparent?nM:tM):g.call(this,m,n);for(let x=0,y=m.length;x<y;x++){const b=m[x];l[_]=b.start*a,h[_]=b.count,p[_]=b.index,_++}ah.reset()}else for(let m=0,g=c.length;m<g;m++)if(c[m].visible&&c[m].active){const x=c[m].geometryIndex;let y=!1;if(f&&(this.getMatrixAt(m,Yi),this.getBoundingSphereAt(x,_s).applyMatrix4(Yi),y=!oh.intersectsSphere(_s)),!y){const b=u[x];l[_]=b.start*a,h[_]=b.count,p[_]=m,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,o){this.onBeforeRender(e,null,i,r,o)}}class mn extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new L,Dc=new L,Gf=new Xe,Kr=new qs,Aa=new bn,ch=new L,Wf=new L;class Bi extends wt{constructor(e=new at,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lc.fromBufferAttribute(t,i-1),Dc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lc.distanceTo(Dc);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Gf.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=l){const g=h.getX(_),x=h.getX(_+1),y=Ta(this,e,Kr,c,g,x);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=Ta(this,e,Kr,c,_,m);g&&t.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=l){const g=Ta(this,e,Kr,c,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=Ta(this,e,Kr,c,p-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ta(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Lc.fromBufferAttribute(o,i),Dc.fromBufferAttribute(o,r),t.distanceSqToSegment(Lc,Dc,ch,Wf)>n)return;ch.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ch);if(!(c<e.near||c>e.far))return{distance:c,point:Wf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Xf=new L,qf=new L;class hi extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xf.fromBufferAttribute(t,i),qf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xf.distanceTo(qf);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vm extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class du extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yf=new Xe,Ph=new qs,Ca=new bn,Ra=new L;class xm extends wt{constructor(e=new at,t=new du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Yf.copy(i).invert(),Ph.copy(e.ray).applyMatrix4(Yf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=l.getX(p);Ra.fromBufferAttribute(u,m),Zf(Ra,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)Ra.fromBufferAttribute(u,p),Zf(Ra,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zf(s,e,t,n,i,r,o){const a=Ph.distanceSqToPoint(s);if(a<t){const c=new L;Ph.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cM extends jt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:nn,this.magFilter=r!==void 0?r:nn,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class lM extends jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=hn,this.minFilter=hn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ol extends jt{constructor(e,t,n,i,r,o,a,c,l,h,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class hM extends ol{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Gn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends ol{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Oi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class fM extends jt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ie:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],o=[],a=new L,c=new Xe;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Kt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Kt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class al extends ui{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bm extends al{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pu(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Pa=new L,lh=new pu,hh=new pu,uh=new pu;class Mm extends ui{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Pa.subVectors(i[0],i[1]).add(i[0]),l=Pa);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Pa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),lh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,m),hh.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,m),uh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),hh.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),uh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(lh.calc(c),hh.calc(c),uh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kf(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function dM(s,e){const t=1-s;return t*t*e}function pM(s,e){return 2*(1-s)*s*e}function mM(s,e){return s*s*e}function oo(s,e,t,n){return dM(s,e)+pM(s,t)+mM(s,n)}function gM(s,e){const t=1-s;return t*t*t*e}function _M(s,e){const t=1-s;return 3*t*t*s*e}function yM(s,e){return 3*(1-s)*s*s*e}function vM(s,e){return s*s*s*e}function ao(s,e,t,n,i){return gM(s,e)+_M(s,t)+yM(s,n)+vM(s,i)}class mu extends ui{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,i.x,r.x,o.x,a.x),ao(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sm extends ui{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,i.x,r.x,o.x,a.x),ao(e,i.y,r.y,o.y,a.y),ao(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gu extends ui{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wm extends ui{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends ui{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,i.x,r.x,o.x),oo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yu extends ui{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,i.x,r.x,o.x),oo(e,i.y,r.y,o.y),oo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vu extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Kf(a,c.x,l.x,h.x,u.x),Kf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Nc=Object.freeze({__proto__:null,ArcCurve:bm,CatmullRomCurve3:Mm,CubicBezierCurve:mu,CubicBezierCurve3:Sm,EllipseCurve:al,LineCurve:gu,LineCurve3:wm,QuadraticBezierCurve:_u,QuadraticBezierCurve3:yu,SplineCurve:vu});class Em extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Nc[i.type]().fromJSON(i))}return this}}class xo extends Em{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new gu(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new _u(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new mu(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new al(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fo extends at{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Kt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new L,f=new ie,d=new L,p=new L,_=new L;let m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let x=0;x<=t;x++){const y=n+x*h*i,b=Math.sin(y),U=Math.cos(y);for(let I=0;I<=e.length-1;I++){u.x=e[I].x*b,u.y=e[I].y,u.z=e[I].x*U,o.push(u.x,u.y,u.z),f.x=x/t,f.y=I/(e.length-1),a.push(f.x,f.y);const C=c[3*I+0]*b,N=c[3*I+1],k=c[3*I+0]*U;l.push(C,N,k)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const b=y+x*e.length,U=b,I=b+e.length,C=b+e.length+1,N=b+1;r.push(U,I,N),r.push(C,N,I)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.points,e.segments,e.phiStart,e.phiLength)}}class cl extends Fo{constructor(e=1,t=1,n=4,i=8){const r=new xo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new cl(e.radius,e.length,e.capSegments,e.radialSegments)}}class ll extends at{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nr extends at{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function x(){const b=new L,U=new L;let I=0;const C=(t-e)/n;for(let N=0;N<=r;N++){const k=[],v=N/r,w=v*(t-e)+e;for(let W=0;W<=i;W++){const q=W/i,Y=q*c+a,re=Math.sin(Y),F=Math.cos(Y);U.x=w*re,U.y=-v*n+m,U.z=w*F,u.push(U.x,U.y,U.z),b.set(re,C,F).normalize(),f.push(b.x,b.y,b.z),d.push(q,1-v),k.push(p++)}_.push(k)}for(let N=0;N<i;N++)for(let k=0;k<r;k++){const v=_[k][N],w=_[k+1][N],W=_[k+1][N+1],q=_[k][N+1];e>0&&(h.push(v,w,q),I+=3),t>0&&(h.push(w,W,q),I+=3)}l.addGroup(g,I,0),g+=I}function y(b){const U=p,I=new ie,C=new L;let N=0;const k=b===!0?e:t,v=b===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),p++;const w=p;for(let W=0;W<=i;W++){const Y=W/i*c+a,re=Math.cos(Y),F=Math.sin(Y);C.x=k*F,C.y=m*v,C.z=k*re,u.push(C.x,C.y,C.z),f.push(0,v,0),I.x=re*.5+.5,I.y=F*.5*v+.5,d.push(I.x,I.y),p++}for(let W=0;W<i;W++){const q=U+W,Y=w+W;b===!0?h.push(Y,Y+1,q):h.push(Y+1,Y,q),N+=3}l.addGroup(g,N,b===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hl extends Nr{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class os extends at{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new L,b=new L,U=new L;for(let I=0;I<t.length;I+=3)d(t[I+0],y),d(t[I+1],b),d(t[I+2],U),c(y,b,U,x)}function c(x,y,b,U){const I=U+1,C=[];for(let N=0;N<=I;N++){C[N]=[];const k=x.clone().lerp(b,N/I),v=y.clone().lerp(b,N/I),w=I-N;for(let W=0;W<=w;W++)W===0&&N===I?C[N][W]=k:C[N][W]=k.clone().lerp(v,W/w)}for(let N=0;N<I;N++)for(let k=0;k<2*(I-N)-1;k++){const v=Math.floor(k/2);k%2===0?(f(C[N][v+1]),f(C[N+1][v]),f(C[N][v])):(f(C[N][v+1]),f(C[N+1][v+1]),f(C[N+1][v]))}}function l(x){const y=new L;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){const x=new L;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const b=m(x)/2/Math.PI+.5,U=g(x)/Math.PI+.5;o.push(b,1-U)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],b=o[x+2],U=o[x+4],I=Math.max(y,b,U),C=Math.min(y,b,U);I>.9&&C<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),U<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,y){const b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function p(){const x=new L,y=new L,b=new L,U=new L,I=new ie,C=new ie,N=new ie;for(let k=0,v=0;k<r.length;k+=9,v+=6){x.set(r[k+0],r[k+1],r[k+2]),y.set(r[k+3],r[k+4],r[k+5]),b.set(r[k+6],r[k+7],r[k+8]),I.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),N.set(o[v+4],o[v+5]),U.copy(x).add(y).add(b).divideScalar(3);const w=m(U);_(I,v+0,x,w),_(C,v+2,y,w),_(N,v+4,b,w)}}function _(x,y,b,U){U<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=U/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.vertices,e.indices,e.radius,e.details)}}class ul extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ul(e.radius,e.detail)}}const Ia=new L,La=new L,fh=new L,Da=new Hn;class Am extends at{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Os*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:g}=Da;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Da.getNormal(fh),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const y=(x+1)%3,b=u[x],U=u[y],I=Da[h[x]],C=Da[h[y]],N=`${b}_${U}`,k=`${U}_${b}`;k in f&&f[k]?(fh.dot(f[k].normal)<=r&&(d.push(I.x,I.y,I.z),d.push(C.x,C.y,C.z)),f[k]=null):N in f||(f[N]={index0:l[x],index1:l[y],normal:fh.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];Ia.fromBufferAttribute(a,_),La.fromBufferAttribute(a,m),d.push(Ia.x,Ia.y,Ia.z),d.push(La.x,La.y,La.z)}this.setAttribute("position",new Le(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fs extends xo{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new xo().fromJSON(i))}return this}}const xM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Tm(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=EM(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return bo(r,o,t,a,c,d,0),o}};function Tm(s,e,t,n,i){let r,o;if(i===OM(s,e,t,n)>0)for(r=e;r<t;r+=n)o=jf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=jf(r,s[r],s[r+1],o);return o&&fl(o,o.next)&&(So(o),o=o.next),o}function Hs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(fl(t,t.next)||Wt(t.prev,t,t.next)===0)){if(So(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&PM(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?MM(s,n,i,r):bM(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),So(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=SM(Hs(s),e,t),bo(s,e,t,n,i,r,2)):o===2&&wM(s,e,t,n,i,r):bo(Hs(s),e,t,n,i,r,1);break}}}function bM(s){const e=s.prev,t=s,n=s.next;if(Wt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Mr(i,a,r,c,o,l,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function MM(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Wt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,g=Ih(d,p,e,t,n),x=Ih(_,m,e,t,n);let y=s.prevZ,b=s.nextZ;for(;y&&y.z>=g&&b&&b.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Mr(a,h,c,u,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Mr(a,h,c,u,l,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Mr(a,h,c,u,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Mr(a,h,c,u,l,f,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function SM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!fl(i,r)&&Cm(i,n,n.next,r)&&Mo(i,r)&&Mo(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),So(n),So(n.next),n=s=r),n=n.next}while(n!==s);return Hs(n)}function wM(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DM(o,a)){let c=Rm(o,a);o=Hs(o,o.next),c=Hs(c,c.next),bo(o,e,t,n,i,r,0),bo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function EM(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Tm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(LM(l));for(i.sort(AM),r=0;r<i.length;r++)t=TM(i[r],t);return t}function AM(s,e){return s.x-e.x}function TM(s,e){const t=CM(s,e);if(!t)return e;const n=Rm(t,s);return Hs(n,n.next),Hs(t,t.next)}function CM(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Mr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Mo(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&RM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function RM(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function PM(s,e,t,n){let i=s;do i.z===0&&(i.z=Ih(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,IM(i)}function IM(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ih(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function LM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Mr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function DM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!NM(s,e)&&(Mo(s,e)&&Mo(e,s)&&UM(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||fl(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function fl(s,e){return s.x===e.x&&s.y===e.y}function Cm(s,e,t,n){const i=Ua(Wt(s,e,t)),r=Ua(Wt(s,e,n)),o=Ua(Wt(t,n,s)),a=Ua(Wt(t,n,e));return!!(i!==r&&o!==a||i===0&&Na(s,t,e)||r===0&&Na(s,n,e)||o===0&&Na(t,s,n)||a===0&&Na(t,e,n))}function Na(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ua(s){return s>0?1:s<0?-1:0}function NM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Cm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Mo(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function UM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Rm(s,e){const t=new Lh(s.i,s.x,s.y),n=new Lh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jf(s,e,t,n){const i=new Lh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function So(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OM(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class gi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return gi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$f(e),Jf(n,e);let o=e.length;t.forEach($f);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Jf(n,t[c]);const a=xM.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function $f(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Jf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class dl extends at{constructor(e=new Fs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:FM;let y,b=!1,U,I,C,N;g&&(y=g.getSpacedPoints(h),b=!0,f=!1,U=g.computeFrenetFrames(h,!1),I=new L,C=new L,N=new L),f||(m=0,d=0,p=0,_=0);const k=a.extractPoints(l);let v=k.shape;const w=k.holes;if(!gi.isClockWise(v)){v=v.reverse();for(let le=0,O=w.length;le<O;le++){const Me=w[le];gi.isClockWise(Me)&&(w[le]=Me.reverse())}}const q=gi.triangulateShape(v,w),Y=v;for(let le=0,O=w.length;le<O;le++){const Me=w[le];v=v.concat(Me)}function re(le,O,Me){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(O,Me)}const F=v.length,se=q.length;function H(le,O,Me){let ve,ge,Se;const je=le.x-O.x,De=le.y-O.y,D=Me.x-le.x,E=Me.y-le.y,X=je*je+De*De,oe=je*E-De*D;if(Math.abs(oe)>Number.EPSILON){const he=Math.sqrt(X),ae=Math.sqrt(D*D+E*E),qe=O.x-De/he,we=O.y+je/he,Fe=Me.x-E/ae,_t=Me.y+D/ae,ye=((Fe-qe)*E-(_t-we)*D)/(je*E-De*D);ve=qe+je*ye-le.x,ge=we+De*ye-le.y;const Be=ve*ve+ge*ge;if(Be<=2)return new ie(ve,ge);Se=Math.sqrt(Be/2)}else{let he=!1;je>Number.EPSILON?D>Number.EPSILON&&(he=!0):je<-Number.EPSILON?D<-Number.EPSILON&&(he=!0):Math.sign(De)===Math.sign(E)&&(he=!0),he?(ve=-De,ge=je,Se=Math.sqrt(X)):(ve=je,ge=De,Se=Math.sqrt(X/2))}return new ie(ve/Se,ge/Se)}const fe=[];for(let le=0,O=Y.length,Me=O-1,ve=le+1;le<O;le++,Me++,ve++)Me===O&&(Me=0),ve===O&&(ve=0),fe[le]=H(Y[le],Y[Me],Y[ve]);const me=[];let ue,ke=fe.concat();for(let le=0,O=w.length;le<O;le++){const Me=w[le];ue=[];for(let ve=0,ge=Me.length,Se=ge-1,je=ve+1;ve<ge;ve++,Se++,je++)Se===ge&&(Se=0),je===ge&&(je=0),ue[ve]=H(Me[ve],Me[Se],Me[je]);me.push(ue),ke=ke.concat(ue)}for(let le=0;le<m;le++){const O=le/m,Me=d*Math.cos(O*Math.PI/2),ve=p*Math.sin(O*Math.PI/2)+_;for(let ge=0,Se=Y.length;ge<Se;ge++){const je=re(Y[ge],fe[ge],ve);ee(je.x,je.y,-Me)}for(let ge=0,Se=w.length;ge<Se;ge++){const je=w[ge];ue=me[ge];for(let De=0,D=je.length;De<D;De++){const E=re(je[De],ue[De],ve);ee(E.x,E.y,-Me)}}}const Ee=p+_;for(let le=0;le<F;le++){const O=f?re(v[le],ke[le],Ee):v[le];b?(C.copy(U.normals[0]).multiplyScalar(O.x),I.copy(U.binormals[0]).multiplyScalar(O.y),N.copy(y[0]).add(C).add(I),ee(N.x,N.y,N.z)):ee(O.x,O.y,0)}for(let le=1;le<=h;le++)for(let O=0;O<F;O++){const Me=f?re(v[O],ke[O],Ee):v[O];b?(C.copy(U.normals[le]).multiplyScalar(Me.x),I.copy(U.binormals[le]).multiplyScalar(Me.y),N.copy(y[le]).add(C).add(I),ee(N.x,N.y,N.z)):ee(Me.x,Me.y,u/h*le)}for(let le=m-1;le>=0;le--){const O=le/m,Me=d*Math.cos(O*Math.PI/2),ve=p*Math.sin(O*Math.PI/2)+_;for(let ge=0,Se=Y.length;ge<Se;ge++){const je=re(Y[ge],fe[ge],ve);ee(je.x,je.y,u+Me)}for(let ge=0,Se=w.length;ge<Se;ge++){const je=w[ge];ue=me[ge];for(let De=0,D=je.length;De<D;De++){const E=re(je[De],ue[De],ve);b?ee(E.x,E.y+y[h-1].y,y[h-1].x+Me):ee(E.x,E.y,u+Me)}}}G(),j();function G(){const le=i.length/3;if(f){let O=0,Me=F*O;for(let ve=0;ve<se;ve++){const ge=q[ve];Te(ge[2]+Me,ge[1]+Me,ge[0]+Me)}O=h+m*2,Me=F*O;for(let ve=0;ve<se;ve++){const ge=q[ve];Te(ge[0]+Me,ge[1]+Me,ge[2]+Me)}}else{for(let O=0;O<se;O++){const Me=q[O];Te(Me[2],Me[1],Me[0])}for(let O=0;O<se;O++){const Me=q[O];Te(Me[0]+F*h,Me[1]+F*h,Me[2]+F*h)}}n.addGroup(le,i.length/3-le,0)}function j(){const le=i.length/3;let O=0;J(Y,O),O+=Y.length;for(let Me=0,ve=w.length;Me<ve;Me++){const ge=w[Me];J(ge,O),O+=ge.length}n.addGroup(le,i.length/3-le,1)}function J(le,O){let Me=le.length;for(;--Me>=0;){const ve=Me;let ge=Me-1;ge<0&&(ge=le.length-1);for(let Se=0,je=h+m*2;Se<je;Se++){const De=F*Se,D=F*(Se+1),E=O+ve+De,X=O+ge+De,oe=O+ge+D,he=O+ve+D;te(E,X,oe,he)}}}function ee(le,O,Me){c.push(le),c.push(O),c.push(Me)}function Te(le,O,Me){Oe(le),Oe(O),Oe(Me);const ve=i.length/3,ge=x.generateTopUV(n,i,ve-3,ve-2,ve-1);ct(ge[0]),ct(ge[1]),ct(ge[2])}function te(le,O,Me,ve){Oe(le),Oe(O),Oe(ve),Oe(O),Oe(Me),Oe(ve);const ge=i.length/3,Se=x.generateSideWallUV(n,i,ge-6,ge-3,ge-2,ge-1);ct(Se[0]),ct(Se[1]),ct(Se[3]),ct(Se[1]),ct(Se[2]),ct(Se[3])}function Oe(le){i.push(c[le*3+0]),i.push(c[le*3+1]),i.push(c[le*3+2])}function ct(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return BM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Nc[i.type]().fromJSON(i)),new dl(n,e.options)}}const FM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(f,1-p),new ie(_,1-g)]:[new ie(a,1-c),new ie(h,1-u),new ie(d,1-p),new ie(m,1-g)]}};function BM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pl extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pl(e.radius,e.detail)}}class Bo extends os{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bo(e.radius,e.detail)}}class ml extends at{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/i,d=new L,p=new ie;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,y=x,b=x+n+1,U=x+n+2,I=x+1;a.push(y,b,I),a.push(b,U,I)}}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gl extends at{constructor(e=new Fs([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(o,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;gi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const x=p[m];gi.isClockWise(x)===!0&&(p[m]=x.reverse())}const _=gi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const x=p[m];d=d.concat(x)}for(let m=0,g=d.length;m<g;m++){const x=d[m];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,g=_.length;m<g;m++){const x=_[m],y=x[0]+u,b=x[1]+u,U=x[2]+u;n.push(y,b,U),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return kM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new gl(n,e.curveSegments)}}function kM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class ko extends at{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],y=g/n;let b=0;g===0&&o===0?b=.5/t:g===n&&c===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){const I=U/t;u.x=-e*Math.cos(i+I*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+I*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(I+b,1-y),x.push(l++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const y=h[g][x+1],b=h[g][x],U=h[g+1][x],I=h[g+1][x+1];(g!==0||o>0)&&d.push(y,b,I),(g!==n-1||c<Math.PI)&&d.push(b,U,I)}this.setIndex(d),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _l extends os{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _l(e.radius,e.detail)}}class yl extends at{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,x=(i+1)*d+p;o.push(_,m,x),o.push(m,g,x)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vl extends at{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new L,f=new L,d=new L,p=new L,_=new L,m=new L,g=new L;for(let y=0;y<=n;++y){const b=y/n*r*Math.PI*2;x(b,r,o,e,d),x(b+.01,r,o,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let U=0;U<=i;++U){const I=U/i*Math.PI*2,C=-t*Math.cos(I),N=t*Math.sin(I);u.x=d.x+(C*g.x+N*_.x),u.y=d.y+(C*g.y+N*_.y),u.z=d.z+(C*g.z+N*_.z),c.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),h.push(y/n),h.push(U/i)}}for(let y=1;y<=n;y++)for(let b=1;b<=i;b++){const U=(i+1)*(y-1)+(b-1),I=(i+1)*y+(b-1),C=(i+1)*y+b,N=(i+1)*(y-1)+b;a.push(U,I,N),a.push(I,C,N)}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2));function x(y,b,U,I,C){const N=Math.cos(y),k=Math.sin(y),v=U/b*y,w=Math.cos(v);C.x=I*(2+w)*.5*N,C.y=I*(2+w)*k*.5,C.z=I*Math.sin(v)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class xl extends at{constructor(e=new yu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new ie;let h=new L;const u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),x(),g()}function m(y){h=e.getPointAt(y/t,h);const b=o.normals[y],U=o.binormals[y];for(let I=0;I<=i;I++){const C=I/i*Math.PI*2,N=Math.sin(C),k=-Math.cos(C);c.x=k*b.x+N*U.x,c.y=k*b.y+N*U.y,c.z=k*b.z+N*U.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=t;y++)for(let b=1;b<=i;b++){const U=(i+1)*(y-1)+(b-1),I=(i+1)*y+(b-1),C=(i+1)*y+b,N=(i+1)*(y-1)+b;p.push(U,I,N),p.push(I,C,N)}}function x(){for(let y=0;y<=t;y++)for(let b=0;b<=i;b++)l.x=y/t,l.y=b/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new xl(new Nc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Pm extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new L,r=new L;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),x=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),Qf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Qf(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Qf(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var ed=Object.freeze({__proto__:null,BoxGeometry:Ys,CapsuleGeometry:cl,CircleGeometry:ll,ConeGeometry:hl,CylinderGeometry:Nr,DodecahedronGeometry:ul,EdgesGeometry:Am,ExtrudeGeometry:dl,IcosahedronGeometry:pl,LatheGeometry:Fo,OctahedronGeometry:Bo,PlaneGeometry:Zs,PolyhedronGeometry:os,RingGeometry:ml,ShapeGeometry:gl,SphereGeometry:ko,TetrahedronGeometry:_l,TorusGeometry:yl,TorusKnotGeometry:vl,TubeGeometry:xl,WireframeGeometry:Pm});class Im extends wn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Lm extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xu extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dm extends xu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uc extends wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nm extends wn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Um extends wn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bu extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Om extends wn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rs,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fm extends mn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ls(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function km(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Dh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Mu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}function zM(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*i;if(!(p<t||p>=n)){u.push(l.times[d]);for(let _=0;_<h;++_)f.push(l.values[d*h+_])}}u.length!==0&&(l.times=Ls(u,l.times.constructor),l.values=Ls(f,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function VM(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const g=h,x=u-h;_=a.values.slice(g,x)}else if(r>=a.times[p]){const g=p*u+h,x=g+u-h;_=a.values.slice(g,x)}else{const g=a.createInterpolant(),x=h,y=u-h;g.evaluate(r),_=g.resultBuffer.slice(x,y)}c==="quaternion"&&new un().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let g=0;g<m;++g){const x=g*d+f;if(c==="quaternion")un.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const y=d-f*2;for(let b=0;b<y;++b)l.values[x+b]-=_[b]}}}return s.blendMode=nu,s}const HM={convertArray:Ls,isTypedArray:Bm,getKeyframeOrder:km,sortedArray:Dh,flattenJSON:Mu,subclip:zM,makeClipAdditive:VM};class zo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zm extends zo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ps:r=e,a=2*t-n;break;case fo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ps:o=e,c=2*n-t;break;case fo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,y=(-1-d)*m+(1.5+d)*_+.5*p,b=d*m-d*_;for(let U=0;U!==a;++U)r[U]=g*o[h+U]+x*o[l+U]+y*o[c+U]+b*o[u+U];return r}}class Su extends zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class Vm extends zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case uo:t=this.InterpolantFactoryMethodDiscrete;break;case Ic:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Bm(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Ic;class Ks extends fi{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=uo;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class wu extends fi{}wu.prototype.ValueTypeName="color";class wo extends fi{}wo.prototype.ValueTypeName="number";class Hm extends zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)un.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ur extends fi{InterpolantFactoryMethodLinear(e){return new Hm(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends fi{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=uo;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends fi{}Gs.prototype.ValueTypeName="vector";class Ws{constructor(e="",t=-1,n=[],i=Zc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(WM(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(fi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=km(c);c=Dh(c,1,h),l=Dh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new wo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const m=[],g=[];Mu(d,m,g,p),m.length!==0&&_.push(new u(f,m,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==f[p].morphTargets.length;++x){const y=f[p];m.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new wo(".morphTargetInfluence["+_+"]",m,g))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Gs,d+".position",f,"pos",i),n(Ur,d+".quaternion",f,"rot",i),n(Gs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function GM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return Gs;case"color":return wu;case"quaternion":return Ur;case"bool":case"boolean":return Ks;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function WM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=GM(s.type);if(s.times===void 0){const t=[],n=[];Mu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Eu{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const Gm=new Eu;class gn{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class XM extends Error{constructor(e,t){super(e),this.response=t}}class li extends gn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ci[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:y,value:b})=>{if(y)g.close();else{_+=b.byteLength;const U=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let I=0,C=h.length;I<C;I++){const N=h[I];N.onProgress&&N.onProgress(U)}g.enqueue(b),x()}},y=>{g.error(y)})}}});return new Response(m)}else throw new XM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Di.add(e,l);const h=Ci[e];delete Ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new li(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ws.parse(e[n]);t.push(i)}return t}}class YM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new ol,c=new li(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(f){const d=r.parse(f,!0);o[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=nn),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else c.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=nn),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Eo extends gn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=vo("img");function c(){h(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ZM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=new No;r.colorSpace=Jt;const o=new Eo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class Wm extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new mi,a=new li(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Gn,o.wrapT=l.wrapT!==void 0?l.wrapT:Gn,o.magFilter=l.magFilter!==void 0?l.magFilter:nn,o.minFilter=l.minFilter!==void 0?l.minFilter:nn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=ai),l.mipmapCount===1&&(o.minFilter=nn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Xm extends gn{constructor(e){super(e)}load(e,t,n,i){const r=new jt,o=new Eo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class as extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qm extends as{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dh=new Xe,td=new L,nd=new L;class Au{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),dh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KM extends Au{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tu extends as{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new KM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const id=new Xe,jr=new L,ph=new L;class jM extends Au{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),ph.copy(n.position),ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ph),n.updateMatrixWorld(),i.makeTranslation(-jr.x,-jr.y,-jr.z),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}}class Cu extends as{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $M extends Au{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ru extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new $M}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pu extends as{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ym extends as{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Zm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Km extends as{constructor(e=new Zm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class bl extends gn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new li(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Ae().setHex(o.value);break;case"v2":i.uniforms[r].value=new ie().fromArray(o.value);break;case"v3":i.uniforms[r].value=new L().fromArray(o.value);break;case"v4":i.uniforms[r].value=new St().fromArray(o.value);break;case"m3":i.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Xe().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ie().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return bl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Im,SpriteMaterial:uu,RawShaderMaterial:Lm,ShaderMaterial:Qn,PointsMaterial:du,MeshPhysicalMaterial:Dm,MeshStandardMaterial:xu,MeshPhongMaterial:Uc,MeshToonMaterial:Nm,MeshNormalMaterial:Um,MeshLambertMaterial:bu,MeshDepthMaterial:el,MeshDistanceMaterial:hu,MeshBasicMaterial:ci,MeshMatcapMaterial:Om,LineDashedMaterial:Fm,LineBasicMaterial:mn,Material:wn};return new t[e]}}class Oc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jm extends at{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $m extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new li(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=r(d,m.buffer),x=xr(m.type,g),y=new sl(x,m.stride);return y.uuid=m.uuid,t[p]=y,y}function r(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new jm:new at,a=e.data.index;if(a!==void 0){const d=xr(a.type,a.array);o.setIndex(new Pt(d,1))}const c=e.data.attributes;for(const d in c){const p=c[d];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Vs(m,p.itemSize,p.offset,p.normalized)}else{const m=xr(p.type,p.array),g=p.isInstancedBufferAttribute?Rr:Pt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const p=l[d],_=[];for(let m=0,g=p.length;m<g;m++){const x=p[m];let y;if(x.isInterleavedBufferAttribute){const b=i(e.data,x.data);y=new Vs(b,x.itemSize,x.offset,x.normalized)}else{const b=xr(x.type,x.array);y=new Pt(b,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),_.push(y)}o.morphAttributes[d]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const _=u[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new L;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new bn(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class JM extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?Oc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new li(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Oc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new li(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,a,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),t!==void 0){let u=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Fs().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new Oo().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new $m;for(let r=0,o=e.length;r<o;r++){let a;const c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in ed?a=ed[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new bl;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Ws.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:xr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Eu(t);r=new Eo(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new mi(g.data,g.width,g.height)))}i[u.uuid]=new Is(d)}else{const d=a(u.url);i[u.uuid]=new Is(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:xr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new Eo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new mi(p.data,p.width,p.height)))}n[c.uuid]=new Is(h)}else{const h=await r(c.url);n[c.uuid]=new Is(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let h;Array.isArray(l)?(h=new No,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new mi:h=new jt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,QM)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],sd),h.wrapT=n(a.wrap[1],sd)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,rd)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,rd)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(e,t,n,i,r){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":o=new il,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Ae(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new nl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new tl(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new tn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Lr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Pu(e.color,e.intensity);break;case"DirectionalLight":o=new Ru(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Cu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Ym(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new Tu(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new qm(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Km().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),u=c(e.material),o=new fu(h,u),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),u=c(e.material),o=new qt(h,u);break;case"InstancedMesh":h=a(e.geometry),u=c(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;o=new _m(h,u,f),o.instanceMatrix=new Rr(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new Rr(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=a(e.geometry),u=c(e.material),o=new ym(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const m=new Dn;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const g=new bn;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:g}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=l(e.colorsTexture.uuid));break;case"LOD":o=new gm;break;case"Line":o=new Bi(a(e.geometry),c(e.material));break;case"LineLoop":o=new vm(a(e.geometry),c(e.material));break;case"LineSegments":o=new hi(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new xm(a(e.geometry),c(e.material));break;case"Sprite":o=new mm(c(e.material));break;case"Group":o=new $i;break;case"Bone":o=new rl;break;default:o=new wt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new wt}})}}const QM={UVMapping:Vc,CubeReflectionMapping:Oi,CubeRefractionMapping:es,EquirectangularReflectionMapping:co,EquirectangularRefractionMapping:lo,CubeUVReflectionMapping:Pr},sd={RepeatWrapping:Li,ClampToEdgeWrapping:Gn,MirroredRepeatWrapping:ho},rd={NearestFilter:hn,NearestMipmapNearestFilter:qh,NearestMipmapLinearFilter:vr,LinearFilter:nn,LinearMipmapNearestFilter:Qr,LinearMipmapLinearFilter:ai};class eS extends gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,c),r.manager.itemStart(e)}}let Oa;class Iu{static getContext(){return Oa===void 0&&(Oa=new(window.AudioContext||window.webkitAudioContext)),Oa}static setContext(e){Oa=e}}class tS extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new li(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);Iu.getContext().decodeAudioData(l,function(u){t(u)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(e)}}}const od=new Xe,ad=new Xe,ys=new Xe;class nS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new tn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new tn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ys.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,o=t.near*Math.tan(Os*t.fov*.5)/t.zoom;let a,c;ad.elements[12]=-i,od.elements[12]=i,a=-o*t.aspect+r,c=o*t.aspect+r,ys.elements[0]=2*t.near/(c-a),ys.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(ys),a=-o*t.aspect-r,c=o*t.aspect-r,ys.elements[0]=2*t.near/(c-a),ys.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(ys)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ad),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(od)}}class Jm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cd(){return performance.now()}const vs=new L,ld=new un,iS=new L,xs=new L;class sS extends wt{constructor(){super(),this.type="AudioListener",this.context=Iu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Jm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vs,ld,iS),xs.set(0,0,-1).applyQuaternion(ld),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vs.x,i),t.positionY.linearRampToValueAtTime(vs.y,i),t.positionZ.linearRampToValueAtTime(vs.z,i),t.forwardX.linearRampToValueAtTime(xs.x,i),t.forwardY.linearRampToValueAtTime(xs.y,i),t.forwardZ.linearRampToValueAtTime(xs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(vs.x,vs.y,vs.z),t.setOrientation(xs.x,xs.y,xs.z,n.x,n.y,n.z)}}class Qm extends wt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const bs=new L,hd=new un,rS=new L,Ms=new L;class oS extends Qm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(bs,hd,rS),Ms.set(0,0,1).applyQuaternion(hd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(bs.x,n),t.positionY.linearRampToValueAtTime(bs.y,n),t.positionZ.linearRampToValueAtTime(bs.z,n),t.orientationX.linearRampToValueAtTime(Ms.x,n),t.orientationY.linearRampToValueAtTime(Ms.y,n),t.orientationZ.linearRampToValueAtTime(Ms.z,n)}else t.setPosition(bs.x,bs.y,bs.z),t.setOrientation(Ms.x,Ms.y,Ms.z)}}class aS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class eg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;un.multiplyQuaternionsFlat(e,o,e,t,e,n),un.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Lu="\\[\\]\\.:\\/",cS=new RegExp("["+Lu+"]","g"),Du="[^"+Lu+"]",lS="[^"+Lu.replace("\\.","")+"]",hS=/((?:WC+[\/:])*)/.source.replace("WC",Du),uS=/(WCOD+)?/.source.replace("WCOD",lS),fS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),dS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),pS=new RegExp("^"+hS+uS+fS+dS+"$"),mS=["material","materials","bones","map"];class gS{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cS,"")}static parseTrackName(e){const t=pS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=gS;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _S{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let p=t[d];if(p===void 0){p=c++,t[d]=p,e.push(f);for(let _=0,m=o;_!==m;++_)r[_].push(new Mt(f,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,m=e[_];t[m.uuid]=p,e[p]=m,t[d]=_,e[_]=f;for(let g=0,x=o;g!==x;++g){const y=r[g],b=y[_];let U=y[p];y[p]=b,U===void 0&&(U=new Mt(f,n[g],i[g])),y[_]=U}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[l]=u,e[u]=c;for(let d=0,p=i;d!==p;++d){const _=n[d],m=_[u],g=_[h];_[h]=m,_[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],p=--o,_=e[p];t[d.uuid]=u,e[u]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let m=0,g=i;m!==g;++m){const x=n[m],y=x[f],b=x[p];x[u]=y,x[f]=b,x.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[u]=m[f],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let f=h,d=c.length;f!==d;++f){const p=c[f];u[f]=new Mt(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class tg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Rs,endingEnd:Rs};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=kp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case nu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Zc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===zp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Bp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ps,i.endingEnd=Ps):(e?i.endingStart=this.zeroSlopeAtStart?Ps:Rs:i.endingStart=fo,t?i.endingEnd=this.zeroSlopeAtEnd?Ps:Rs:i.endingEnd=fo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const yS=new Float32Array(1);class vS extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new eg(Mt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Su(new Float32Array(2),new Float32Array(2),1,yS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Ws.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Zc),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new tg(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ws.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Nu{constructor(e){this.value=e}clone(){return new Nu(this.value.clone===void 0?this.value:this.value.clone())}}let xS=0;class bS extends vi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:xS++}),this.name="",this.usage=_o,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class MS extends sl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class SS{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const ud=new Xe;class ng{constructor(e,t,n=0,i=1/0){this.ray=new qs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ud),this}intersectObject(e,t=!0,n=[]){return Nh(e,this,n,t),n.sort(fd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Nh(e[i],this,n,t);return n.sort(fd),n}}function fd(s,e){return s.distance-e.distance}function Nh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Nh(r[o],e,t,!0)}}class Uh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wS{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Uu{constructor(e,t,n,i){Uu.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const dd=new ie;class ES{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pd=new L,Fa=new L;class AS{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){pd.subVectors(e,this.start),Fa.subVectors(this.end,this.start);const n=Fa.dot(Fa);let r=Fa.dot(pd)/n;return t&&(r=Kt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const md=new L;class TS extends wt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new at,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Le(i,3));const r=new mn({fog:!1,toneMapped:!1});this.cone=new hi(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),md.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(md),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Zi=new L,Ba=new Xe,mh=new Xe;class CS extends hi{constructor(e){const t=ig(e),n=new at,i=[],r=[],o=new Ae(0,0,1),a=new Ae(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Le(i,3)),n.setAttribute("color",new Le(r,3));const c=new mn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");mh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Ba.multiplyMatrices(mh,a.matrixWorld),Zi.setFromMatrixPosition(Ba),i.setXYZ(o,Zi.x,Zi.y,Zi.z),Ba.multiplyMatrices(mh,a.parent.matrixWorld),Zi.setFromMatrixPosition(Ba),i.setXYZ(o+1,Zi.x,Zi.y,Zi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function ig(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,ig(s.children[t]));return e}class RS extends qt{constructor(e,t,n){const i=new ko(t,4,2),r=new ci({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const PS=new L,gd=new Ae,_d=new Ae;class IS extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Bo(t);i.rotateY(Math.PI*.5),this.material=new ci({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Pt(o,3)),this.add(new qt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");gd.copy(this.light.color),_d.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?gd:_d;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(PS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class sg extends hi{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ae(n),i=new Ae(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=f===r?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const h=new at;h.setAttribute("position",new Le(c,3)),h.setAttribute("color",new Le(l,3));const u=new mn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class LS extends hi{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new Ae(r),o=new Ae(o);const a=[],c=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const _=u&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const f=u&1?r:o,d=e-e/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d;a.push(m,0,g),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d,a.push(m,0,g),c.push(f.r,f.g,f.b)}}const l=new at;l.setAttribute("position",new Le(a,3)),l.setAttribute("color",new Le(c,3));const h=new mn({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const yd=new L,ka=new L,vd=new L;class DS extends wt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new at;i.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new mn({fog:!1,toneMapped:!1});this.lightPlane=new Bi(i,r),this.add(this.lightPlane),i=new at,i.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new Bi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),yd.setFromMatrixPosition(this.light.matrixWorld),ka.setFromMatrixPosition(this.light.target.matrixWorld),vd.subVectors(ka,yd),this.lightPlane.lookAt(ka),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ka),this.targetLine.scale.z=vd.length()}}const za=new L,Zt=new Jc;class NS extends hi{constructor(e){const t=new at,n=new mn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new Le(i,3)),t.setAttribute("color",new Le(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Ae(16755200),h=new Ae(16711680),u=new Ae(43775),f=new Ae(16777215),d=new Ae(3355443);this.setColors(l,h,u,f,d)}setColors(e,t,n,i,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Zt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$t("c",t,e,Zt,0,0,-1),$t("t",t,e,Zt,0,0,1),$t("n1",t,e,Zt,-n,-i,-1),$t("n2",t,e,Zt,n,-i,-1),$t("n3",t,e,Zt,-n,i,-1),$t("n4",t,e,Zt,n,i,-1),$t("f1",t,e,Zt,-n,-i,1),$t("f2",t,e,Zt,n,-i,1),$t("f3",t,e,Zt,-n,i,1),$t("f4",t,e,Zt,n,i,1),$t("u1",t,e,Zt,n*.7,i*1.1,-1),$t("u2",t,e,Zt,-n*.7,i*1.1,-1),$t("u3",t,e,Zt,0,i*2,-1),$t("cf1",t,e,Zt,-n,0,1),$t("cf2",t,e,Zt,n,0,1),$t("cf3",t,e,Zt,0,-i,1),$t("cf4",t,e,Zt,0,i,1),$t("cn1",t,e,Zt,-n,0,-1),$t("cn2",t,e,Zt,n,0,-1),$t("cn3",t,e,Zt,0,-i,-1),$t("cn4",t,e,Zt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function $t(s,e,t,n,i,r,o){za.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],za.x,za.y,za.z)}}const Va=new Dn;class US extends hi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new at;r.setIndex(new Pt(n,1)),r.setAttribute("position",new Pt(i,3)),super(r,new mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Va.setFromObject(this.object),Va.isEmpty())return;const t=Va.min,n=Va.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class OS extends hi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new at;r.setIndex(new Pt(n,1)),r.setAttribute("position",new Le(i,3)),super(r,new mn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class FS extends Bi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new at;o.setAttribute("position",new Le(r,3)),o.computeBoundingSphere(),super(o,new mn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new at;c.setAttribute("position",new Le(a,3)),c.computeBoundingSphere(),this.add(new qt(c,new ci({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const xd=new L;let Ha,gh;class BS extends wt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ha===void 0&&(Ha=new at,Ha.setAttribute("position",new Le([0,0,0,0,1,0],3)),gh=new Nr(0,.5,1,5,1),gh.translate(0,-.5,0)),this.position.copy(t),this.line=new Bi(Ha,new mn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new qt(gh,new ci({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{xd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(xd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class kS extends hi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new at;i.setAttribute("position",new Le(t,3)),i.setAttribute("color",new Le(n,3));const r=new mn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Ae,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class zS{constructor(){this.type="ShapePath",this.color=new Ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new xo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const x=[];for(let y=0,b=g.length;y<b;y++){const U=g[y],I=new Fs;I.curves=U.curves,x.push(I)}return x}function n(g,x){const y=x.length;let b=!1;for(let U=y-1,I=0;I<y;U=I++){let C=x[U],N=x[I],k=N.x-C.x,v=N.y-C.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(C=x[I],k=-k,N=x[U],v=-v),g.y<C.y||g.y>N.y)continue;if(g.y===C.y){if(g.x===C.x)return!0}else{const w=v*(g.x-C.x)-k*(g.y-C.y);if(w===0)return!0;if(w<0)continue;b=!b}}else{if(g.y!==C.y)continue;if(N.x<=g.x&&g.x<=C.x||C.x<=g.x&&g.x<=N.x)return!0}}return b}const i=gi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new Fs,c.curves=a.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let g=0,x=r.length;g<x;g++)a=r[g],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!h&&f[p]&&p++,f[p]={s:new Fs,p:_},f[p].s.curves=a.curves,h&&p++,d[p]=[]):d[p].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let g=!1,x=0;for(let y=0,b=f.length;y<b;y++)u[y]=[];for(let y=0,b=f.length;y<b;y++){const U=d[y];for(let I=0;I<U.length;I++){const C=U[I];let N=!0;for(let k=0;k<f.length;k++)n(C.p,f[k].p)&&(y!==k&&x++,N?(N=!1,u[k].push(C)):g=!0);N&&u[y].push(C)}}x>0&&g===!1&&(d=u)}let m;for(let g=0,x=f.length;g<x;g++){c=f[g].s,l.push(c),m=d[g];for(let y=0,b=m.length;y<b;y++)c.holes.push(m[y].h)}return l}}class rg extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class VS extends $n{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const HS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Xh,AddEquation:ji,AddOperation:Pp,AdditiveAnimationBlendMode:nu,AdditiveBlending:bh,AgXToneMapping:Up,AlphaFormat:jh,AlwaysCompare:jp,AlwaysDepth:Qa,AlwaysStencilFunc:Eh,AmbientLight:Pu,AnimationAction:tg,AnimationClip:Ws,AnimationLoader:qM,AnimationMixer:vS,AnimationObjectGroup:_S,AnimationUtils:HM,ArcCurve:bm,ArrayCamera:fm,ArrowHelper:BS,AttachedBindMode:wh,Audio:Qm,AudioAnalyser:aS,AudioContext:Iu,AudioListener:sS,AudioLoader:tS,AxesHelper:kS,BackSide:Ln,BasicDepthPacking:Vp,BasicShadowMap:kg,BatchedMesh:ym,Bone:rl,BooleanKeyframeTrack:Ks,Box2:ES,Box3:Dn,Box3Helper:OS,BoxGeometry:Ys,BoxHelper:US,BufferAttribute:Pt,BufferGeometry:at,BufferGeometryLoader:$m,ByteType:Yh,Cache:Di,Camera:Jc,CameraHelper:NS,CanvasTexture:fM,CapsuleGeometry:cl,CatmullRomCurve3:Mm,CineonToneMapping:Dp,CircleGeometry:ll,ClampToEdgeWrapping:Gn,Clock:Jm,Color:Ae,ColorKeyframeTrack:wu,ColorManagement:gt,CompressedArrayTexture:hM,CompressedCubeTexture:uM,CompressedTexture:ol,CompressedTextureLoader:YM,ConeGeometry:hl,ConstantAlphaFactor:Tp,ConstantColorFactor:Ep,Controls:rg,CubeCamera:sm,CubeReflectionMapping:Oi,CubeRefractionMapping:es,CubeTexture:No,CubeTextureLoader:ZM,CubeUVReflectionMapping:Pr,CubicBezierCurve:mu,CubicBezierCurve3:Sm,CubicInterpolant:zm,CullFaceBack:xh,CullFaceFront:hp,CullFaceFrontBack:Bg,CullFaceNone:lp,Curve:ui,CurvePath:Em,CustomBlending:up,CustomToneMapping:Np,CylinderGeometry:Nr,Cylindrical:wS,Data3DTexture:ru,DataArrayTexture:jc,DataTexture:mi,DataTextureLoader:Wm,DataUtils:Q_,DecrementStencilOp:Qg,DecrementWrapStencilOp:t_,DefaultLoadingManager:Gm,DepthFormat:Us,DepthStencilFormat:zs,DepthTexture:lu,DetachedBindMode:Fp,DirectionalLight:Ru,DirectionalLightHelper:DS,DiscreteInterpolant:Vm,DisplayP3ColorSpace:Kc,DodecahedronGeometry:ul,DoubleSide:oi,DstAlphaFactor:xp,DstColorFactor:Mp,DynamicCopyUsage:g_,DynamicDrawUsage:h_,DynamicReadUsage:d_,EdgesGeometry:Am,EllipseCurve:al,EqualCompare:qp,EqualDepth:tc,EqualStencilFunc:r_,EquirectangularReflectionMapping:co,EquirectangularRefractionMapping:lo,Euler:Jn,EventDispatcher:vi,ExtrudeGeometry:dl,FileLoader:li,Float16BufferAttribute:r0,Float32BufferAttribute:Le,FloatType:Wn,Fog:nl,FogExp2:tl,FramebufferTexture:lM,FrontSide:_i,Frustum:Uo,GLBufferAttribute:SS,GLSL1:y_,GLSL3:Ah,GreaterCompare:Yp,GreaterDepth:ic,GreaterEqualCompare:Kp,GreaterEqualDepth:nc,GreaterEqualStencilFunc:l_,GreaterStencilFunc:a_,GridHelper:sg,Group:$i,HalfFloatType:Ir,HemisphereLight:qm,HemisphereLightHelper:IS,IcosahedronGeometry:pl,ImageBitmapLoader:eS,ImageLoader:Eo,ImageUtils:Qp,IncrementStencilOp:Jg,IncrementWrapStencilOp:e_,InstancedBufferAttribute:Rr,InstancedBufferGeometry:jm,InstancedInterleavedBuffer:MS,InstancedMesh:_m,Int16BufferAttribute:i0,Int32BufferAttribute:s0,Int8BufferAttribute:e0,IntType:Hc,InterleavedBuffer:sl,InterleavedBufferAttribute:Vs,Interpolant:zo,InterpolateDiscrete:uo,InterpolateLinear:Ic,InterpolateSmooth:qa,InvertStencilOp:n_,KeepStencilOp:ws,KeyframeTrack:fi,LOD:gm,LatheGeometry:Fo,Layers:$c,LessCompare:Xp,LessDepth:ec,LessEqualCompare:iu,LessEqualDepth:Bs,LessEqualStencilFunc:o_,LessStencilFunc:s_,Light:as,LightProbe:Km,Line:Bi,Line3:AS,LineBasicMaterial:mn,LineCurve:gu,LineCurve3:wm,LineDashedMaterial:Fm,LineLoop:vm,LineSegments:hi,LinearDisplayP3ColorSpace:Do,LinearFilter:nn,LinearInterpolant:Su,LinearMipMapLinearFilter:Gg,LinearMipMapNearestFilter:Hg,LinearMipmapLinearFilter:ai,LinearMipmapNearestFilter:Qr,LinearSRGBColorSpace:ki,LinearToneMapping:Ip,LinearTransfer:po,Loader:gn,LoaderUtils:Oc,LoadingManager:Eu,LoopOnce:Bp,LoopPingPong:zp,LoopRepeat:kp,LuminanceAlphaFormat:Qh,LuminanceFormat:Jh,MOUSE:Ds,Material:wn,MaterialLoader:bl,MathUtils:As,Matrix2:Uu,Matrix3:lt,Matrix4:Xe,MaxEquation:mp,Mesh:qt,MeshBasicMaterial:ci,MeshDepthMaterial:el,MeshDistanceMaterial:hu,MeshLambertMaterial:bu,MeshMatcapMaterial:Om,MeshNormalMaterial:Um,MeshPhongMaterial:Uc,MeshPhysicalMaterial:Dm,MeshStandardMaterial:xu,MeshToonMaterial:Nm,MinEquation:pp,MirroredRepeatWrapping:ho,MixOperation:Rp,MultiplyBlending:Sh,MultiplyOperation:Io,NearestFilter:hn,NearestMipMapLinearFilter:Vg,NearestMipMapNearestFilter:zg,NearestMipmapLinearFilter:vr,NearestMipmapNearestFilter:qh,NeutralToneMapping:Op,NeverCompare:Wp,NeverDepth:Ja,NeverStencilFunc:i_,NoBlending:Ni,NoColorSpace:Pi,NoToneMapping:Ui,NormalAnimationBlendMode:Zc,NormalBlending:Ns,NotEqualCompare:Zp,NotEqualDepth:sc,NotEqualStencilFunc:c_,NumberKeyframeTrack:wo,Object3D:wt,ObjectLoader:JM,ObjectSpaceNormalMap:Gp,OctahedronGeometry:Bo,OneFactor:_p,OneMinusConstantAlphaFactor:Cp,OneMinusConstantColorFactor:Ap,OneMinusDstAlphaFactor:bp,OneMinusDstColorFactor:Sp,OneMinusSrcAlphaFactor:$a,OneMinusSrcColorFactor:vp,OrthographicCamera:Lr,P3Primaries:go,PCFShadowMap:Wh,PCFSoftShadowMap:zc,PMREMGenerator:Th,Path:xo,PerspectiveCamera:tn,Plane:Ri,PlaneGeometry:Zs,PlaneHelper:FS,PointLight:Cu,PointLightHelper:RS,Points:xm,PointsMaterial:du,PolarGridHelper:LS,PolyhedronGeometry:os,PositionalAudio:oS,PropertyBinding:Mt,PropertyMixer:eg,QuadraticBezierCurve:_u,QuadraticBezierCurve3:yu,Quaternion:un,QuaternionKeyframeTrack:Ur,QuaternionLinearInterpolant:Hm,RED_GREEN_RGTC2_Format:Rc,RED_RGTC1_Format:tu,REVISION:Po,RGBADepthPacking:Hp,RGBAFormat:In,RGBAIntegerFormat:Yc,RGBA_ASTC_10x10_Format:Sc,RGBA_ASTC_10x5_Format:xc,RGBA_ASTC_10x6_Format:bc,RGBA_ASTC_10x8_Format:Mc,RGBA_ASTC_12x10_Format:wc,RGBA_ASTC_12x12_Format:Ec,RGBA_ASTC_4x4_Format:fc,RGBA_ASTC_5x4_Format:dc,RGBA_ASTC_5x5_Format:pc,RGBA_ASTC_6x5_Format:mc,RGBA_ASTC_6x6_Format:gc,RGBA_ASTC_8x5_Format:_c,RGBA_ASTC_8x6_Format:yc,RGBA_ASTC_8x8_Format:vc,RGBA_BPTC_Format:so,RGBA_ETC2_EAC_Format:uc,RGBA_PVRTC_2BPPV1_Format:cc,RGBA_PVRTC_4BPPV1_Format:ac,RGBA_S3TC_DXT1_Format:to,RGBA_S3TC_DXT3_Format:no,RGBA_S3TC_DXT5_Format:io,RGBDepthPacking:Zg,RGBFormat:$h,RGBIntegerFormat:Wg,RGB_BPTC_SIGNED_Format:Ac,RGB_BPTC_UNSIGNED_Format:Tc,RGB_ETC1_Format:lc,RGB_ETC2_Format:hc,RGB_PVRTC_2BPPV1_Format:oc,RGB_PVRTC_4BPPV1_Format:rc,RGB_S3TC_DXT1_Format:eo,RGDepthPacking:Kg,RGFormat:eu,RGIntegerFormat:qc,RawShaderMaterial:Lm,Ray:qs,Raycaster:ng,Rec709Primaries:mo,RectAreaLight:Ym,RedFormat:Xc,RedIntegerFormat:Lo,ReinhardToneMapping:Lp,RenderTarget:em,RepeatWrapping:Li,ReplaceStencilOp:$g,ReverseSubtractEquation:dp,RingGeometry:ml,SIGNED_RED_GREEN_RGTC2_Format:Pc,SIGNED_RED_RGTC1_Format:Cc,SRGBColorSpace:Jt,SRGBTransfer:Bt,Scene:il,ShaderChunk:et,ShaderLib:ri,ShaderMaterial:Qn,ShadowMaterial:Im,Shape:Fs,ShapeGeometry:gl,ShapePath:zS,ShapeUtils:gi,ShortType:Zh,Skeleton:Oo,SkeletonHelper:CS,SkinnedMesh:fu,Source:Is,Sphere:bn,SphereGeometry:ko,Spherical:Uh,SphericalHarmonics3:Zm,SplineCurve:vu,SpotLight:Tu,SpotLightHelper:TS,Sprite:mm,SpriteMaterial:uu,SrcAlphaFactor:ja,SrcAlphaSaturateFactor:wp,SrcColorFactor:yp,StaticCopyUsage:m_,StaticDrawUsage:_o,StaticReadUsage:f_,StereoCamera:nS,StreamCopyUsage:__,StreamDrawUsage:u_,StreamReadUsage:p_,StringKeyframeTrack:js,SubtractEquation:fp,SubtractiveBlending:Mh,TOUCH:Cs,TangentSpaceNormalMap:rs,TetrahedronGeometry:_l,Texture:jt,TextureLoader:Xm,TextureUtils:Hb,TorusGeometry:yl,TorusKnotGeometry:vl,Triangle:Hn,TriangleFanDrawMode:Yg,TriangleStripDrawMode:qg,TrianglesDrawMode:Xg,TubeGeometry:xl,UVMapping:Vc,Uint16BufferAttribute:ou,Uint32BufferAttribute:au,Uint8BufferAttribute:t0,Uint8ClampedBufferAttribute:n0,Uniform:Nu,UniformsGroup:bS,UniformsLib:Re,UniformsUtils:im,UnsignedByteType:yi,UnsignedInt248Type:ks,UnsignedInt5999Type:Kh,UnsignedIntType:Fi,UnsignedShort4444Type:Gc,UnsignedShort5551Type:Wc,UnsignedShortType:Ar,VSMShadowMap:di,Vector2:ie,Vector3:L,Vector4:St,VectorKeyframeTrack:Gs,VideoTexture:cM,WebGL3DRenderTarget:G_,WebGLArrayRenderTarget:H_,WebGLCoordinateSystem:pi,WebGLCubeRenderTarget:rm,WebGLMultipleRenderTargets:VS,WebGLRenderTarget:$n,WebGLRenderer:dm,WebGLUtils:um,WebGPUCoordinateSystem:yo,WireframeGeometry:Pm,WrapAroundEnding:fo,ZeroCurvatureEnding:Rs,ZeroFactor:gp,ZeroSlopeEnding:Ps,ZeroStencilOp:jg,createCanvasElement:Jp},Symbol.toStringTag,{value:"Module"}));function GS(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Ki{constructor(){Ot(this,"allVertices",{});Ot(this,"isolatedVertices",{});Ot(this,"connectedVertices",{});Ot(this,"sortedConnectedValues",[]);Ot(this,"needsSort",!1);Ot(this,"emitter",GS());Ot(this,"emit",this.emitter.emit.bind(this.emitter));Ot(this,"on",this.emitter.on.bind(this.emitter));Ot(this,"off",this.emitter.off.bind(this.emitter));Ot(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const o=this.connectedVertices[r];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const o=this.connectedVertices[r];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const h=(e.get(l)||0)-1;e.set(l,h),h===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class WS{constructor(e,t,n){Ot(this,"key");Ot(this,"stage");Ot(this,"callback");Ot(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class XS extends Ki{constructor(t,n,i){super();Ot(this,"key");Ot(this,"scheduler");Ot(this,"callback",(t,n)=>n());Ot(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new WS(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(r=>{const o=performance.now();r.run(i??t);const a=performance.now()-o;n[r.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class qS extends Ki{constructor(t){super();Ot(this,"lastTime",performance.now());Ot(this,"clampDeltaTo",.1);Ot(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new XS(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Rn=(s,e)=>{const t=Gh(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const o=await e(r);o&&(n=o)});Yn(()=>{i(),n&&n()})};function YS(s,e){const t={current:void 0};return Rn(s,n=>{t.current=n}),t}const Cn=s=>{const e=on(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},Ml=new tn(75,0,.1,1e3);Ml.position.z=5;Ml.lookAt(0,0,0);const ZS=()=>Ml,KS=s=>{Rn(s.size,e=>{if(s.camera.current===Ml){const t=s.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),s.invalidate()}})},jS=Symbol("use-legacy-frame-compatibility-context"),$S=()=>{const s={useFrameOrders:[],useRenderOrders:[]};return Xn(jS,s),s},JS=s=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await Ig(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((h,u)=>{var f;(h===0||l)&&((f=u==null?void 0:u.dispose)==null||f.call(u),e.disposableObjects.delete(u))}),e.shouldDispose=!1)},collectDisposableObjects:(l,h)=>{const u=h??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&u.push(l),Object.entries(l).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,u)})),u},addDisposableObjects:l=>{l.forEach(h=>{const u=e.disposableObjects.get(h);u?e.disposableObjects.set(h,u+1):e.disposableObjects.set(h,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(h=>{const u=e.disposableObjects.get(h);u&&u>0&&e.disposableObjects.set(h,u-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=$S(),n=new qS,i=n.createStage(Symbol("threlte-main-stage")),r=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(l,h){a.shouldRender()&&h()}}),o=r.createTask(Symbol("threlte-auto-render-task"),l=>{t.length>0||a.renderer.render(a.scene,a.camera.current)}),a={size:Gh([s.userSize,s.parentSize],([l,h])=>l||h),camera:Cn(ZS()),scene:new il,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:Cn(s.colorSpace),toneMapping:Cn(s.toneMapping),dpr:Cn(s.dpr),useLegacyLights:Cn(s.useLegacyLights),shadows:Cn(s.shadows),colorManagementEnabled:Cn(s.colorManagementEnabled),renderMode:Cn(s.renderMode),autoRender:Cn(s.autoRender),scheduler:n,mainStage:i,renderStage:r,autoRenderTask:o,shouldRender:()=>a.renderMode.current==="always"||a.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||a.renderMode.current==="manual"&&e.advance};KS(a);const c=Cn({});return Xn("threlte",a),Xn("threlte-internal-context",e),Xn("threlte-user-context",c),a},Ou=typeof window<"u",QS=()=>{const s=Cn({width:0,height:0});if(!Ou)return{parentSize:s,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=a=>{i.disconnect(),r.disconnect(),i.observe(a),r.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===s.current.width&&l===s.current.height||s.set({width:c,height:l})}),r=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),o=a=>{t=a;const c=t.parentElement;c&&(s.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Yn(()=>{i.disconnect(),r.disconnect()}),{parentSize:s,parentSizeAction:o}};function og(s,e){const t=on(s);let n=s;const i=t.subscribe(a=>n=a);return Yn(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const xi=()=>{const s=qn("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},Fu=Symbol("threlte-hierarchical-parent-context"),Bu=()=>qn(Fu),ew=s=>Xn(Fu,s),tw=s=>{const e=og(s);return Xn(Fu,e),e};function nw(s){let e;const t=s[7].default,n=ts(t,s,s[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&ns(n,t,i,i[6],e?ss(t,i[6],r,null):is(i[6]),null)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}const iw=()=>({onChildMount:qn("threlte-hierarchical-object-on-mount"),onChildDestroy:qn("threlte-hierarchical-object-on-destroy")});function sw(s,e,t){var m;let n,{$$slots:i={},$$scope:r}=e,{object:o=void 0}=e,{onChildMount:a=void 0}=e;const c=g=>{a==null||a(g)};let{onChildDestroy:l=void 0}=e;const h=g=>{l==null||l(g)},{invalidate:u}=xi(),f=Bu();rn(s,f,g=>t(5,n=g));let{parent:d=n}=e;const p=iw();o&&((m=p.onChildMount)==null||m.call(p,o),u());const _=og(o,(g,x)=>{var y,b;x&&((y=p.onChildDestroy)==null||y.call(p,x),u()),g&&((b=p.onChildMount)==null||b.call(p,g),u())});return Yn(()=>{var g;o&&((g=p.onChildDestroy)==null||g.call(p,o),u())}),Xn("threlte-hierarchical-object-on-mount",c),Xn("threlte-hierarchical-object-on-destroy",h),ew(_),s.$$set=g=>{"object"in g&&t(2,o=g.object),"onChildMount"in g&&t(3,a=g.onChildMount),"onChildDestroy"in g&&t(4,l=g.onChildDestroy),"parent"in g&&t(1,d=g.parent),"$$scope"in g&&t(6,r=g.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,d=n),s.$$.dirty&4&&_.set(o)},[f,d,o,a,l,n,r,i]}class rw extends Un{constructor(e){super(),On(this,e,sw,nw,Nn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function ow(s){let e;const t=s[1].default,n=ts(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&ns(n,t,i,i[4],e?ss(t,i[4],r,null):is(i[4]),null)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function aw(s){let e,t;return e=new rw({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[ow]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function cw(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const o=c=>r.add(c),a=c=>r.remove(c);return s.$$set=c=>{"object"in c&&t(0,r=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[r,n,o,a,i]}class ag extends Un{constructor(e){super(),On(this,e,cw,aw,Nn,{object:0})}}const bd=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},lw=()=>{Xn("threlte-cache",[])},hw=()=>{const s=qn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(n,i)=>{for(const o of s)if(bd(i,o.keys)){if(o.error)throw o.error;if(o.promise)return o.promise}const r={promise:n(),keys:i,value:void 0};return s.push(r),r.promise.catch(o=>{r.error=o}),r.promise},clear:n=>{const i=s.findIndex(r=>bd(n,r.keys));i!==-1&&s.splice(i,1)}}},uw=Po.replace("dev",""),fw=Number.parseInt(uw),dw=s=>{const e=on(void 0),t=(n,i)=>{s.renderer=new dm({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(s.renderer)};return Rn([s.colorManagementEnabled],([n])=>{gt.enabled=n}),Rn([e,s.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),Rn([e,s.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),Rn([e,s.size],([n,i])=>{var r;(r=n==null?void 0:n.xr)!=null&&r.isPresenting||n==null||n.setSize(i.width,i.height)}),Rn([e,s.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=zc))}),Rn([e,s.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),Rn([e,s.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},cg=()=>qn("threlte-internal-context");function Md(s){let e,t;return e=new ag({props:{object:s[0].scene,$$slots:{default:[pw]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&131072&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function pw(s){let e;const t=s[15].default,n=ts(t,s,s[17],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&131072)&&ns(n,t,i,i[17],e?ss(t,i[17],r,null):is(i[17]),null)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function mw(s){let e,t,n,i,r=s[2]&&Md(s);return{c(){e=ip("canvas"),r&&r.c(),this.h()},l(o){e=sp(o,"CANVAS",{class:!0});var a=rp(e);r&&r.l(a),a.forEach(xt),this.h()},h(){op(e,"class","svelte-o3oskp")},m(o,a){Ct(o,e,a),r&&r.m(e,null),s[16](e),t=!0,n||(i=Lg(s[4].call(null,e)),n=!0)},p(o,[a]){o[2]?r?(r.p(o,a),a&4&&_e(r,1)):(r=Md(o),r.c(),_e(r,1),r.m(e,null)):r&&(Mn(),be(r,1,1,()=>{r=null}),Sn())},i(o){t||(_e(r),t=!0)},o(o){be(r),t=!1},d(o){o&&xt(e),r&&r.d(),s[16](null),n=!1,i()}}}function gw(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{colorManagementEnabled:o=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=Ou?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:h=void 0}=e,{shadows:u=zc}=e,{size:f=void 0}=e,{toneMapping:d=Xh}=e,{useLegacyLights:p=!(fw>=155)}=e,{autoRender:_=!0}=e,m,g=on(!1);rn(s,g,v=>t(2,n=v));const x=on(f),{parentSize:y,parentSizeAction:b}=QS(),U=JS({colorManagementEnabled:o,colorSpace:a,dpr:c,renderMode:l,parentSize:y,autoRender:_,shadows:u,toneMapping:d,useLegacyLights:p,userSize:x}),I=cg(),C=U;Rn([g,C.autoRender],([v,w])=>(v&&w?C.autoRenderTask.start():C.autoRenderTask.stop(),()=>{C.autoRenderTask.stop()})),lw();const{createRenderer:N}=dw(C);Ro(()=>{N(m,h),C.renderer.setAnimationLoop(v=>{I.dispose(),C.scheduler.run(v),I.resetFrameInvalidation()}),g.set(!0)}),Yn(()=>{var v;I.dispose(!0),C.scheduler.dispose(),(v=C.renderer)==null||v.dispose()});function k(v){kh[v?"unshift":"push"](()=>{m=v,t(1,m)})}return s.$$set=v=>{"colorManagementEnabled"in v&&t(5,o=v.colorManagementEnabled),"colorSpace"in v&&t(6,a=v.colorSpace),"dpr"in v&&t(7,c=v.dpr),"renderMode"in v&&t(8,l=v.renderMode),"rendererParameters"in v&&t(9,h=v.rendererParameters),"shadows"in v&&t(10,u=v.shadows),"size"in v&&t(11,f=v.size),"toneMapping"in v&&t(12,d=v.toneMapping),"useLegacyLights"in v&&t(13,p=v.useLegacyLights),"autoRender"in v&&t(14,_=v.autoRender),"$$scope"in v&&t(17,r=v.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&x.set(f),s.$$.dirty&64&&C.colorSpace.set(a),s.$$.dirty&128&&C.dpr.set(c),s.$$.dirty&256&&C.renderMode.set(l),s.$$.dirty&16384&&C.autoRender.set(_),s.$$.dirty&1024&&C.shadows.set(u),s.$$.dirty&4096&&C.toneMapping.set(d)},[C,m,n,g,b,o,a,c,l,h,u,f,d,p,_,i,k,r]}class _w extends Un{constructor(e){super(),On(this,e,gw,mw,Nn,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function yw(s){let e;const t=s[9].default,n=ts(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&ns(n,t,i,i[8],e?ss(t,i[8],r,null):is(i[8]),null)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}const Sd="threlte-disposable-object-context";function vw(s,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=cg();let{object:h=void 0}=e,u=h,{dispose:f=void 0}=e;const d=qn(Sd);rn(s,d,m=>t(7,i=m));const p=on(f??i??!0);rn(s,p,m=>t(6,n=m)),Xn(Sd,p);let _=n?a(h):[];return c(_),Yn(()=>{l(_)}),s.$$set=m=>{"object"in m&&t(2,h=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&p.set(f??i??!0),s.$$.dirty&116&&h!==u&&(l(_),t(5,_=n?a(h):[]),c(_),t(4,u=h))},[d,p,h,f,u,_,n,i,o,r]}class xw extends Un{constructor(e){super(),On(this,e,vw,yw,Nn,{object:2,dispose:3})}}const bw=/^\s*class\s+/,Mw=s=>typeof s!="function"?!1:bw.test(s.toString()),Sw=s=>Array.isArray(s),wd=(s,e)=>Mw(s)?Sw(e)?new s(...e):new s:s,ww=s=>"isObject3D"in s,Ed=s=>"dispose"in s,lg=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},_h=Symbol("initialValueBeforeAttach"),Ew=()=>{const{invalidate:s}=xi();let e=!1,t=_h,n,i,r;const o=(c,l,h)=>{if(a(),!h){const u=c;((u==null?void 0:u.isMaterial)||!1)&&(h="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(l,c);else{const{target:u,key:f}=lg(l,h);t=u[f],u[f]=c,i=u,r=f}e=!0,s()}},a=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==_h&&(i[r]=t,t=_h,i=void 0,r=void 0),e=!1,s())};return Yn(()=>{a()}),{update:o}},Aw=s=>s&&s.isCamera,hg=s=>s&&s.isOrthographicCamera,ug=s=>s&&s.isPerspectiveCamera,Tw=s=>ug(s)||hg(s),Cw=()=>{const{invalidate:s,size:e,camera:t}=xi();let n,i;Yn(()=>{i==null||i()});const r=c=>{n&&(hg(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):ug(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(c,l)=>{if(i==null||i(),l||!Tw(c)){n=void 0;return}n=c,i=e.subscribe(r)},makeDefaultCamera:(c,l)=>{!Aw(c)||!l||(t.set(c),s())}}},ku=()=>{const s=Bc(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(o=>{o(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},Rw=()=>{const s=ku(),e=[];let t,n=!1;const i=()=>{e.forEach(a=>a()),e.length=0,s("create",{ref:t,cleanup:a=>{e.push(a)}})},r=o=>{t=o,n&&i()};return Ro(()=>{i(),n=!0}),Yn(()=>{e.forEach(o=>o())}),{updateRef:r}},Ad=s=>!!(s!=null&&s.addEventListener),Pw=()=>{const s=ku(),e=Bc(),t=c=>{c!=null&&c.type&&s(c.type,c)},n=(c,l)=>{Ad(c)&&l.forEach(h=>{c.removeEventListener(h,t)})},i=(c,l)=>{Ad(c)&&l.forEach(h=>{c.addEventListener(h,t)})},r=on(),o=on([]);return Rn([r,o],([c,l])=>(i(c,l),()=>n(c,l))),Ro(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{r.set(c)}}},Iw=s=>{const t=qn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(s)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let r=[];return Yn(()=>{r.forEach(l=>l())}),{updateRef:l=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var f;const u=(f=h.onRefChange)==null?void 0:f.call(h,l);u&&r.push(u)})},updateProps:l=>{n.forEach(h=>{var u;(u=h.onPropsChange)==null||u.call(h,l)})},updateRestProps:l=>{n.forEach(h=>{var u;(u=h.onRestPropsChange)==null||u.call(h,l)})},pluginsProps:i}},Lw=new Set(["$$scope","$$slots","type","args","attach","instance"]),Dw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),Nw=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Td=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},Uw=()=>{const{invalidate:s}=xi(),e=new Map,t=new Map,n=(r,o,a,c)=>{if(Nw(a)){const u=e.get(o);if(u&&u.instance===r&&u.value===a)return;e.set(o,{instance:r,value:a})}const{key:l,target:h}=lg(r,o);if(a!=null){const u=t.get(o);if(u)u(h,l,a);else{const f=Td(h,l,a);t.set(o,f),f(h,l,a)}}else Td(h,l,a)(h,l,a);c.manualCamera||Dw.has(l)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,o,a)=>{var c;for(const l in o)!Lw.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&n(r,l,o[l],a),s()}}},Ow=s=>({ref:s&2}),Cd=s=>({ref:s[1]}),Fw=s=>({ref:s&2}),Rd=s=>({ref:s[1]});function Pd(s){let e,t;return e=new xw({props:{object:s[1],dispose:s[0]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function Bw(s){let e;const t=s[10].default,n=ts(t,s,s[11],Cd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&ns(n,t,i,i[11],e?ss(t,i[11],r,Ow):is(i[11]),Cd)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function kw(s){let e,t;return e=new ag({props:{object:s[1],$$slots:{default:[zw]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function zw(s){let e;const t=s[10].default,n=ts(t,s,s[11],Rd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&ns(n,t,i,i[11],e?ss(t,i[11],r,Fw):is(i[11]),Rd)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function Vw(s){let e=Ed(s[1]),t,n,i,r,o,a,c=e&&Pd(s);const l=[kw,Bw],h=[];function u(f,d){return d&2&&(n=null),n==null&&(n=!!ww(f[1])),n?0:1}return i=u(s,-1),r=h[i]=l[i](s),{c(){c&&c.c(),t=dn(),r.c(),o=kt()},l(f){c&&c.l(f),t=pn(f),r.l(f),o=kt()},m(f,d){c&&c.m(f,d),Ct(f,t,d),h[i].m(f,d),Ct(f,o,d),a=!0},p(f,[d]){d&2&&(e=Ed(f[1])),e?c?(c.p(f,d),d&2&&_e(c,1)):(c=Pd(f),c.c(),_e(c,1),c.m(t.parentNode,t)):c&&(Mn(),be(c,1,1,()=>{c=null}),Sn());let p=i;i=u(f,d),i===p?h[i].p(f,d):(Mn(),be(h[p],1,1,()=>{h[p]=null}),Sn(),r=h[i],r?r.p(f,d):(r=h[i]=l[i](f),r.c()),_e(r,1),r.m(o.parentNode,o))},i(f){a||(_e(c),_e(r),a=!0)},o(f){be(c),be(r),a=!1},d(f){f&&(xt(t),xt(o)),c&&c.d(f),h[i].d(f)}}}function Hw(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Er(e,n),r,{$$slots:o={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:h=void 0}=e,{manual:u=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=Bu();rn(s,p,w=>t(9,r=w));const _=Rw();let m=wd(c,l);_.updateRef(m);let g=!1;const x=()=>{if(!g){g=!0;return}t(1,m=wd(c,l)),_.updateRef(m)};let{ref:y=m}=e;const b=tw(m),U=Iw({ref:m,props:e}),I=(U==null?void 0:U.pluginsProps)??[],C=Uw(),N=Cw(),k=Ew(),v=Pw();return s.$$set=w=>{t(23,e=Ji(Ji({},e),Ka(w))),t(22,i=Er(e,n)),"is"in w&&t(4,c=w.is),"args"in w&&t(5,l=w.args),"attach"in w&&t(6,h=w.attach),"manual"in w&&t(7,u=w.manual),"makeDefault"in w&&t(8,f=w.makeDefault),"dispose"in w&&t(0,d=w.dispose),"ref"in w&&t(3,y=w.ref),"$$scope"in w&&t(11,a=w.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&x(),s.$$.dirty&2&&t(3,y=m),s.$$.dirty&2&&b.set(m),C.updateProps(m,i,{manualCamera:u,pluginsProps:I}),s.$$.dirty&130&&N.update(m,u),s.$$.dirty&258&&N.makeDefaultCamera(m,f),s.$$.dirty&578&&k.update(m,r,h),s.$$.dirty&2&&v.updateRef(m),s.$$.dirty&2&&(U==null||U.updateRef(m)),U==null||U.updateProps(e),U==null||U.updateRestProps(i)},e=Ka(e),[d,m,p,y,c,l,h,u,f,r,o,a]}let fg=class extends Un{constructor(e){super(),On(this,e,Hw,Vw,Nn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const Gw={},Ww=(s,e)=>{const t=Gw[e]||HS[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},Xw=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new fg(Ww(n,s))}}),Vt=new Proxy(class{},{construct(s,[e]){const t=e;return new fg(t)},get(s,e){return Xw(e)}});function qw(s,e){const t="threlte-plugin-context";if(Array.isArray(s)){const[n,i]=s;Xn(t,{...qn(t),[n]:i})}else{const n=s,i=e;if(!i)return;Xn(t,{...qn(t),[n]:i})}}function dg(s,e,t){if(!Ou)return{task:void 0,start:()=>{},stop:()=>{},started:Fg(!1)};let n,i,r;Ki.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const o=xi();let a=o.mainStage;if(r){if(r.stage)if(Ki.isValue(r.stage))a=r.stage;else{const d=o.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);a=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const p=r.after[d];if(Ki.isValue(p)){a=p.stage;break}}else Ki.isValue(r.after)&&(a=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const p=r.before[d];if(Ki.isValue(p)){a=p.stage;break}}else Ki.isValue(r.before)&&(a=r.before.stage)}const{autoInvalidations:c}=qn("threlte-internal-context"),l=on(!1),h=a.createTask(n,i,r),u=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&c.add(i),h.start()},f=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&c.delete(i),h.stop()};return(r==null?void 0:r.autoStart)??!0?u():f(),Yn(()=>{a&&a.removeTask(n)}),{task:h,start:u,stop:f,started:{subscribe:l.subscribe}}}function Yw(s,e,t){const n=qn("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(s in i||(i[s]=e),i)),n.current[s]):Gh(n,i=>i[s])}const yh=s=>{const e=on(void 0),t=on(void 0);return s.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(s,e),{error:t,promise:s})};function pg(s,e){const{remember:t,clear:n}=hw();let i;const r=()=>new s;return{load:(c,l)=>{const h=async u=>{var f;if(i||(i=r()),"loadAsync"in i){const d=await i.loadAsync(u,l==null?void 0:l.onProgress);return((f=l==null?void 0:l.transform)==null?void 0:f.call(l,d))??d}else return new Promise((d,p)=>{i.load(u,_=>{var m;return d(((m=l==null?void 0:l.transform)==null?void 0:m.call(l,_))??_)},_=>{var m;return(m=l==null?void 0:l.onProgress)==null?void 0:m.call(l,_)},p)})};if(Array.isArray(c)){const u=c.map(d=>t(()=>h(d),[s,d]));return yh(Promise.all(u))}else if(typeof c=="string"){const u=t(()=>h(c),[s,c]);return yh(u)}else{const u=Object.values(c).map(d=>t(()=>h(d),[s,d]));return yh(Promise.all(u).then(d=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,d[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([s,l])}):typeof c=="string"?n([s,c]):Object.entries(c).forEach(([l,h])=>{n([s,l,h])})},loader:i}}const mg=()=>{const s=Bc(),e=on(void 0);return Rn(e,t=>{t&&Object.entries(s.$$.callbacks).forEach(n=>{const[i,r]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...r):t.$$.callbacks[i]=r})}),e};new L;new L;new L;const Zw={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},Kw={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`},Ss=s=>{let e=!1;const t=on(s());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(s())}}},jw=s=>({ref:s[1]&1024}),Id=s=>({ref:s[41]});function $w(s){let e,t,n,i,r;e=new Vt.Mesh({props:{"scale.y":-1,"rotation.x":-Math.PI/2,material:s[10],geometry:s[0]}}),n=new Vt({props:{is:s[9],manual:!0}});const o=s[27].default,a=ts(o,s,s[29],Id);return{c(){ut(e.$$.fragment),t=dn(),ut(n.$$.fragment),i=dn(),a&&a.c()},l(c){ft(e.$$.fragment,c),t=pn(c),ft(n.$$.fragment,c),i=pn(c),a&&a.l(c)},m(c,l){dt(e,c,l),Ct(c,t,l),dt(n,c,l),Ct(c,i,l),a&&a.m(c,l),r=!0},p(c,l){const h={};l[0]&1&&(h.geometry=c[0]),e.$set(h),a&&a.p&&(!r||l[0]&536870912|l[1]&1024)&&ns(a,o,c,c[29],r?ss(o,c[29],l,jw):is(c[29]),Id)},i(c){r||(_e(e.$$.fragment,c),_e(n.$$.fragment,c),_e(a,c),r=!0)},o(c){be(e.$$.fragment,c),be(n.$$.fragment,c),be(a,c),r=!1},d(c){c&&(xt(t),xt(i)),pt(e,c),pt(n,c),a&&a.d(c)}}}function Jw(s){let e,t;return e=new Vt.Group({props:{"rotation.x":Math.PI/2,$$slots:{default:[$w]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i[0]&536870913|i[1]&1024&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function Qw(s){let e,t;const n=[s[12]];let i={$$slots:{default:[Jw,({ref:r})=>({41:r}),({ref:r})=>[0,r?1024:0]]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Ji(i,n[r]);return e=new Vt.Group({props:i}),s[28](e),{c(){ut(e.$$.fragment)},l(r){ft(e.$$.fragment,r)},m(r,o){dt(e,r,o),t=!0},p(r,o){const a=o[0]&4096?ap(n,[cp(r[12])]):{};o[0]&536870913|o[1]&1024&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(_e(e.$$.fragment,r),t=!0)},o(r){be(e.$$.fragment,r),t=!1},d(r){s[28](null),pt(e,r)}}}function e1(s,e,t){const n=["opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","refresh"];let i=Er(e,n),r,o,a,c,l,h,u,f,{$$slots:d={},$$scope:p}=e,{opacity:_=1}=e,{width:m=1}=e,{height:g=1}=e,{blur:x=1}=e,{far:y=10}=e,{smooth:b=!0}=e,{resolution:U=512}=e,{frames:I=1/0}=e,{scale:C=10}=e,{color:N="#000000"}=e,{depthWrite:k=!1}=e;const{scene:v,renderer:w}=xi(),W=Ss(()=>m*(Array.isArray(C)?C[0]:C||1));rn(s,W,te=>t(26,u=te));const q=Ss(()=>g*(Array.isArray(C)?C[1]:C||1));rn(s,q,te=>t(25,h=te));const Y=Ss(()=>{const te=new $n(U,U);return te.texture.generateMipmaps=!1,te.texture.colorSpace=w.outputColorSpace,te});rn(s,Y,te=>t(36,c=te));const re=Ss(()=>{const te=new $n(U,U);return te.texture.generateMipmaps=!1,te});rn(s,re,te=>t(35,a=te));const F=Ss(()=>new Zs(u,h).rotateX(Math.PI/2));rn(s,F,te=>t(0,o=te));const se=Ss(()=>new qt(o));rn(s,se,te=>t(37,l=te));const H=Ss(()=>{const te=new el({depthTest:!1,depthWrite:!1});return te.onBeforeCompile=Oe=>{Oe.uniforms={...Oe.uniforms,uColor:{value:new Ae(N).convertSRGBToLinear()}},Oe.fragmentShader=`uniform vec3 uColor;
`+Oe.fragmentShader,Oe.fragmentShader=Oe.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),Oe.fragmentShader=Oe.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},te});rn(s,H,te=>t(34,r=te));const fe=new Qn({...Zw,depthTest:!1}),me=new Qn({...Kw,depthTest:!1}),ue=new Lr(-u/2,u/2,h/2,-h/2,0,y);ue.updateProjectionMatrix();const ke=new ci({map:c.texture,transparent:!0,opacity:_,depthWrite:k}),Ee=te=>{const Oe=l;Oe.visible=!0,Oe.material=fe,fe.uniforms.tDiffuse.value=c.texture,fe.uniforms.h.value=te*1/256,w.setRenderTarget(a),w.render(Oe,ue),Oe.material=me,me.uniforms.tDiffuse.value=a.texture,me.uniforms.v.value=te*1/256,w.setRenderTarget(c),w.render(Oe,ue),Oe.visible=!1},G=()=>{const te=v.background;v.background=null;const Oe=v.overrideMaterial;v.overrideMaterial=r;const ct=w.getClearAlpha();w.setClearAlpha(0),w.setRenderTarget(c),w.render(v,ue),v.overrideMaterial=Oe,Ee(x),b&&Ee(x*.4),w.setRenderTarget(null),v.background=te,w.setClearAlpha(ct)},j=()=>{G()};let J=0;dg(()=>{(I===1/0||J<I)&&(G(),J+=1)}),Yn(()=>{c.dispose(),a.dispose(),o.dispose(),r.dispose(),fe.dispose(),me.dispose(),ke.dispose()});const ee=mg();rn(s,ee,te=>t(1,f=te));function Te(te){kh[te?"unshift":"push"](()=>{f=te,ee.set(f)})}return s.$$set=te=>{e=Ji(Ji({},e),Ka(te)),t(12,i=Er(e,n)),"opacity"in te&&t(13,_=te.opacity),"width"in te&&t(14,m=te.width),"height"in te&&t(15,g=te.height),"blur"in te&&t(16,x=te.blur),"far"in te&&t(17,y=te.far),"smooth"in te&&t(18,b=te.smooth),"resolution"in te&&t(19,U=te.resolution),"frames"in te&&t(20,I=te.frames),"scale"in te&&t(21,C=te.scale),"color"in te&&t(22,N=te.color),"depthWrite"in te&&t(23,k=te.depthWrite),"$$scope"in te&&t(29,p=te.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&2113536&&W.memoize([m,C]),s.$$.dirty[0]&2129920&&q.memoize(g,C),s.$$.dirty[0]&524288&&Y.memoize(U),s.$$.dirty[0]&524288&&re.memoize(U),s.$$.dirty[0]&100663296&&F.memoize(u,h),s.$$.dirty[0]&1&&se.memoize(o),s.$$.dirty[0]&4194304&&H.memoize(N)},[o,f,W,q,Y,re,F,se,H,ue,ke,ee,i,_,m,g,x,y,b,U,I,C,N,k,j,h,u,d,Te,p]}class t1 extends Un{constructor(e){super(),On(this,e,e1,Qw,Nn,{opacity:13,width:14,height:15,blur:16,far:17,smooth:18,resolution:19,frames:20,scale:21,color:22,depthWrite:23,refresh:24},null,[-1,-1])}get refresh(){return this.$$.ctx[24]}}const n1=()=>Yw("threlte-controls",{orbitControls:on(void 0),trackballControls:on(void 0)}),Ld={type:"change"},zu={type:"start"},gg={type:"end"},Ga=new qs,Dd=new Ri,i1=Math.cos(70*As.DEG2RAD),sn=new L,zn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6;let s1=class extends rg{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new un,this._lastTargetPosition=new L,this._quat=new un().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uh,this._sphericalDelta=new Uh,this._scale=1,this._panOffset=new L,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new L,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o1.bind(this),this._onPointerDown=r1.bind(this),this._onPointerUp=a1.bind(this),this._onContextMenu=p1.bind(this),this._onMouseWheel=h1.bind(this),this._onKeyDown=u1.bind(this),this._onTouchStart=f1.bind(this),this._onTouchMove=d1.bind(this),this._onMouseDown=c1.bind(this),this._onMouseMove=l1.bind(this),this._interceptControlDown=m1.bind(this),this._interceptControlUp=g1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ld),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=zn:n>Math.PI&&(n-=zn),i<-Math.PI?i+=zn:i>Math.PI&&(i-=zn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=sn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<i1?this.object.lookAt(this.target):(Dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(Dd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(Ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zn/60*this.autoRotateSpeed*e:zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;sn.copy(i).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-zn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zn*this._rotateDelta.x/t.clientHeight),this._rotateUp(zn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function r1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function o1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function a1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gg),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function c1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case Ds.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case Ds.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(zu)}function l1(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function h1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(zu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(gg))}function u1(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function f1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(zu)}function d1(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function p1(s){this.enabled!==!1&&s.preventDefault()}function m1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _1=s=>({ref:s&1}),Nd=s=>({ref:s[0]});function y1(s){let e;const t=s[6].default,n=ts(t,s,s[8],Nd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&257)&&ns(n,t,i,i[8],e?ss(t,i[8],r,_1):is(i[8]),Nd)},i(i){e||(_e(n,i),e=!0)},o(i){be(n,i),e=!1},d(i){n&&n.d(i)}}}function v1(s){let e,t;const n=[{is:s[0]},s[5]];let i={$$slots:{default:[y1,({ref:r})=>({0:r}),({ref:r})=>r?1:0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Ji(i,n[r]);return e=new Vt({props:i}),s[7](e),e.$on("change",s[3]),{c(){ut(e.$$.fragment)},l(r){ft(e.$$.fragment,r)},m(r,o){dt(e,r,o),t=!0},p(r,[o]){const a=o&33?ap(n,[o&1&&{is:r[0]},o&32&&cp(r[5])]):{};o&257&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(_e(e.$$.fragment,r),t=!0)},o(r){be(e.$$.fragment,r),t=!1},d(r){s[7](null),pt(e,r)}}}function x1(s,e,t){const n=["ref"];let i=Er(e,n),r,o,{$$slots:a={},$$scope:c}=e;const l=Bu();rn(s,l,y=>t(9,r=y));const h=y=>y.isCamera,{renderer:u,invalidate:f}=xi();if(!h(r))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const d=new s1(r,u.domElement),{start:p,stop:_}=dg(()=>d.update(),{autoStart:!1,autoInvalidate:!1}),m=mg();rn(s,m,y=>t(1,o=y));const{orbitControls:g}=n1();g.set(d),Yn(()=>g.set(void 0));function x(y){kh[y?"unshift":"push"](()=>{o=y,m.set(o)})}return s.$$set=y=>{e=Ji(Ji({},e),Ka(y)),t(5,i=Er(e,n)),"$$scope"in y&&t(8,c=y.$$scope)},s.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[d,o,l,f,m,i,a,x,c]}class b1 extends Un{constructor(e){super(),On(this,e,x1,v1,Nn,{ref:0})}get ref(){return this.$$.ctx[0]}}new Xe;new Xe;new qt;`${et.logdepthbuf_pars_vertex}${et.fog_pars_vertex}${et.logdepthbuf_vertex}${et.fog_vertex}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;`${et.tonemapping_fragment}${et.colorspace_fragment}`;const M1=`

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
`,S1=`

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
`,w1=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,E1=w1,A1=`
	${M1}
	${S1}
`;`${E1}${A1}${et.tonemapping_fragment}${et.colorspace_fragment}`;const T1=s=>{const{camera:e}=xi();let t=s.current.clientWidth,n=s.current.clientHeight;const i=new ResizeObserver(([r])=>{t=r.contentRect.width,n=r.contentRect.height});return Rn(s,r=>(r&&i.observe(r),()=>{r&&i.unobserve(r)})),(r,o)=>{o.pointer.update(a=>(a.set(r.offsetX/t*2-1,-(r.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},_g=Symbol("interactivity-context"),C1=()=>qn(_g),R1=s=>{const e=Cn(xi().renderer.domElement),t={enabled:Cn(!0),pointer:Cn(new ie),pointerOverTarget:Cn(!1),lastEvent:void 0,raycaster:new ng,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,compute:T1(e),filter:s==null?void 0:s.filter};return Xn(_g,t),t},yg=Symbol("interactivity-handler-context"),vg=()=>qn(yg),P1=()=>{Xn(yg,{dispatchers:new WeakMap})},I1=()=>{const s=C1(),{dispatchers:e}=vg();if(!s)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");const t=ku();return{...s,addInteractiveObject:r=>{s.interactiveObjects.indexOf(r)>-1||(e.set(r,t),s.interactiveObjects.push(r))},removeInteractiveObject:r=>{const o=s.interactiveObjects.indexOf(r);s.interactiveObjects.splice(o,1),e.delete(r)}}},L1=s=>{const e=Bc(),t=on(!1);return Ro(()=>{t.set(Object.keys(e.$$.callbacks).some(n=>s.includes(n)))}),{hasEventHandlers:t}},D1=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],N1=()=>{qw("interactivity",({ref:s})=>{if(!s.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:t}=I1(),n=on(s),{hasEventHandlers:i}=L1(D1);return Rn([i,n],([r,o])=>{if(r)return e(o),()=>t(o)}),{onRefChange(r){n.set(r)}}})};function Ud(s){return`${(s.eventObject||s.object).uuid}/${s.index}${s.instanceId}`}const Od=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],U1=s=>{const{dispatchers:e}=vg(),t=h=>{const u=h.offsetX-s.initialClick[0],f=h.offsetY-s.initialClick[1];return Math.round(Math.hypot(u,f))},n=h=>{for(const u of s.hovered.values())if(h.length===0||!h.some(f=>f.object===u.object&&f.index===u.index&&f.instanceId===u.instanceId)){const{eventObject:f}=u;s.hovered.delete(Ud(u));const d=e.get(f);if(d){const p={...u,intersections:h};d("pointerout",p),d("pointerleave",p)}}},i=YS(s.enabled),r=()=>{if(!i.current)return[];const h=[],u=s.raycaster.intersectObjects(s.interactiveObjects,!0),f=s.filter===void 0?u:s.filter(u,s);for(const d of f){let p=d.object;for(;p;)e.has(p)&&h.push({...d,eventObject:p}),p=p.parent}return h},o=(h,u)=>{var f;for(const d of u)(f=e.get(d))==null||f("pointermissed",h)},a=h=>h==="pointerleave"||h==="pointercancel"?()=>{s.pointerOverTarget.set(!1),n([])}:h==="pointerenter"?()=>{s.pointerOverTarget.set(!0)}:u=>{const f=h==="pointermove",d=h==="click"||h==="contextmenu"||h==="dblclick";s.compute(u,s);const p=r(),_=d?t(u):0;h==="pointerdown"&&(s.initialClick=[u.offsetX,u.offsetY],s.initialHits=p.map(g=>g.eventObject)),d&&p.length===0&&_<=2&&o(u,s.interactiveObjects),f&&n(p);let m=!1;e:for(const g of p){const x={stopped:m,...g,intersections:p,stopPropagation(){if(m=!0,x.stopped=!0,s.hovered.size>0&&Array.from(s.hovered.values()).some(b=>b.eventObject===g.eventObject)){const b=p.slice(0,p.indexOf(g));n([...b,g])}},camera:s.raycaster.camera,delta:_,nativeEvent:u,pointer:s.pointer.current,ray:s.raycaster.ray},y=e.get(g.eventObject);if(!y)return;if(f){if(y.hasEventListener("pointerover")||y.hasEventListener("pointerenter")||y.hasEventListener("pointerout")||y.hasEventListener("pointerleave")){const b=Ud(x),U=s.hovered.get(b);U?U.stopped&&x.stopPropagation():(s.hovered.set(b,x),y("pointerover",x),y("pointerenter",x))}y("pointermove",x)}else y.hasEventListener(h)?(!d||s.initialHits.includes(g.eventObject))&&(o(u,s.interactiveObjects.filter(U=>!s.initialHits.includes(U))),y(h,x)):d&&s.initialHits.includes(g.eventObject)&&o(u,s.interactiveObjects.filter(U=>!s.initialHits.includes(U)));if(m)break e}},c=h=>{Od.forEach(([u])=>{h.removeEventListener(u,a(u))})},l=h=>{Od.forEach(([u,f])=>{h.addEventListener(u,a(u),{passive:f})})};Rn(s.target,h=>(h&&l(h),()=>{h&&c(h)}))},O1=s=>{P1();const e=R1(s);return N1(),U1(e),e};for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);var xg={exports:{}};xg.exports=Sl;xg.exports.default=Sl;function Sl(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=bg(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;var a,c,l,h,u,f,d;if(n&&(r=V1(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(var p=t;p<i;p+=t)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ao(r,o,t,a,c,d,0),o}function bg(s,e,t,n,i){var r,o;if(i===Bh(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Fd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Fd(r,s[r],s[r+1],o);return o&&wl(o,o.next)&&(Co(o),o=o.next),o}function Xs(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(wl(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ao(s,e,t,n,i,r,o){if(s){!o&&r&&q1(s,n,i,r);for(var a=s,c,l;s.prev!==s.next;){if(c=s.prev,l=s.next,r?B1(s,n,i,r):F1(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Co(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=k1(Xs(s),e,t),Ao(s,e,t,n,i,r,2)):o===2&&z1(s,e,t,n,i,r):Ao(Xs(s),e,t,n,i,r,1);break}}}}function F1(s){var e=s.prev,t=s,n=s.next;if(Xt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Sr(i,a,r,c,o,l,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function B1(s,e,t,n){var i=s.prev,r=s,o=s.next;if(Xt(i,r,o)>=0)return!1;for(var a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,g=Oh(d,p,e,t,n),x=Oh(_,m,e,t,n),y=s.prevZ,b=s.nextZ;y&&y.z>=g&&b&&b.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Sr(a,h,c,u,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Sr(a,h,c,u,l,f,b.x,b.y)&&Xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Sr(a,h,c,u,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Sr(a,h,c,u,l,f,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function k1(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!wl(i,r)&&Mg(i,n,n.next,r)&&To(i,r)&&To(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Co(n),Co(n.next),n=s=r),n=n.next}while(n!==s);return Xs(n)}function z1(s,e,t,n,i,r){var o=s;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&K1(o,a)){var c=Sg(o,a);o=Xs(o,o.next),c=Xs(c,c.next),Ao(o,e,t,n,i,r,0),Ao(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function V1(s,e,t,n){var i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=bg(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Z1(l));for(i.sort(H1),r=0;r<i.length;r++)t=G1(i[r],t);return t}function H1(s,e){return s.x-e.x}function G1(s,e){var t=W1(s,e);if(!t)return e;var n=Sg(t,s);return Xs(n,n.next),Xs(t,t.next)}function W1(s,e){var t=e,n=s.x,i=s.y,r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>r&&(r=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,h=o.y,u=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Sr(i<h?n:r,i,l,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),To(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&X1(o,t)))&&(o=t,u=f)),t=t.next;while(t!==c);return o}function X1(s,e){return Xt(s.prev,s,e.prev)<0&&Xt(e.next,s,s.next)<0}function q1(s,e,t,n){var i=s;do i.z===0&&(i.z=Oh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Y1(i)}function Y1(s){var e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Oh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Z1(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Sr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function K1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!j1(s,e)&&(To(s,e)&&To(e,s)&&$1(s,e)&&(Xt(s.prev,s,e.prev)||Xt(s,e.prev,e))||wl(s,e)&&Xt(s.prev,s,s.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function wl(s,e){return s.x===e.x&&s.y===e.y}function Mg(s,e,t,n){var i=Xa(Xt(s,e,t)),r=Xa(Xt(s,e,n)),o=Xa(Xt(t,n,s)),a=Xa(Xt(t,n,e));return!!(i!==r&&o!==a||i===0&&Wa(s,t,e)||r===0&&Wa(s,n,e)||o===0&&Wa(t,s,n)||a===0&&Wa(t,e,n))}function Wa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Xa(s){return s>0?1:s<0?-1:0}function j1(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Mg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function To(s,e){return Xt(s.prev,s,s.next)<0?Xt(s,e,s.next)>=0&&Xt(s,s.prev,e)>=0:Xt(s,e,s.prev)<0||Xt(s,s.next,e)<0}function $1(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Sg(s,e){var t=new Fh(s.i,s.x,s.y),n=new Fh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fd(s,e,t,n){var i=new Fh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Co(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Sl.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,o=Math.abs(Bh(s,0,r,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,h=a<c-1?e[a+1]*t:s.length;o-=Math.abs(Bh(s,l,h,t))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function Bh(s,e,t,n){for(var i=0,r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}Sl.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var o=0;o<e;o++)t.vertices.push(s[i][r][o]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new ie;new ie;var Bd;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let a=0;a<i.length;a++){const c=i[a];for(;r.length>=2;){const l=r[r.length-1],h=r[r.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))r.pop();else break}r.push(c)}r.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],h=o[o.length-2];if((l.x-h.x)*(c.y-h.y)>=(l.y-h.y)*(c.x-h.x))o.pop();else break}o.push(c)}return o.pop(),r.length==1&&o.length==1&&r[0].x==o[0].x&&r[0].y==o[0].y?r:r.concat(o)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Bd||(Bd={}));const{subscribe:J1,set:wg,update:Q1}=on(void 0),eE=()=>{wg(void 0)},Fc={subscribe:J1,set:wg,update:Q1,reset:eE};function yr(s,e="xyz"){var t;if(s.hasAttribute(e)){const n=(t=s.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const r of n)i.push(parseFloat(r));return i}}}function tE(s){return s?new Ae(s[0],s[1],s[2]):new Ae("white")}class kd extends Wm{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case f:case _:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case p:case m:case g:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function n(F,se,H,fe,me){let ue,ke;const Ee=H.pixel_size>>3,G=H.width*H.height*Ee;if(se&&(ke=me.subarray(fe,fe+=H.colormap_length*(H.colormap_size>>3))),F){ue=new Uint8Array(G);let j,J,ee,Te=0;const te=new Uint8Array(Ee);for(;Te<G;)if(j=me[fe++],J=(j&127)+1,j&128){for(ee=0;ee<Ee;++ee)te[ee]=me[fe++];for(ee=0;ee<J;++ee)ue.set(te,Te+ee*Ee);Te+=Ee*J}else{for(J*=Ee,ee=0;ee<J;++ee)ue[Te+ee]=me[fe++];Te+=J}}else ue=me.subarray(fe,fe+=se?H.width*H.height:G);return{pixel_data:ue,palettes:ke}}function i(F,se,H,fe,me,ue,ke,Ee,G){const j=G;let J,ee=0,Te,te;const Oe=v.width;for(te=se;te!==fe;te+=H)for(Te=me;Te!==ke;Te+=ue,ee++)J=Ee[ee],F[(Te+Oe*te)*4+3]=255,F[(Te+Oe*te)*4+2]=j[J*3+0],F[(Te+Oe*te)*4+1]=j[J*3+1],F[(Te+Oe*te)*4+0]=j[J*3+2];return F}function r(F,se,H,fe,me,ue,ke,Ee){let G,j=0,J,ee;const Te=v.width;for(ee=se;ee!==fe;ee+=H)for(J=me;J!==ke;J+=ue,j+=2)G=Ee[j+0]+(Ee[j+1]<<8),F[(J+Te*ee)*4+0]=(G&31744)>>7,F[(J+Te*ee)*4+1]=(G&992)>>2,F[(J+Te*ee)*4+2]=(G&31)<<3,F[(J+Te*ee)*4+3]=G&32768?0:255;return F}function o(F,se,H,fe,me,ue,ke,Ee){let G=0,j,J;const ee=v.width;for(J=se;J!==fe;J+=H)for(j=me;j!==ke;j+=ue,G+=3)F[(j+ee*J)*4+3]=255,F[(j+ee*J)*4+2]=Ee[G+0],F[(j+ee*J)*4+1]=Ee[G+1],F[(j+ee*J)*4+0]=Ee[G+2];return F}function a(F,se,H,fe,me,ue,ke,Ee){let G=0,j,J;const ee=v.width;for(J=se;J!==fe;J+=H)for(j=me;j!==ke;j+=ue,G+=4)F[(j+ee*J)*4+2]=Ee[G+0],F[(j+ee*J)*4+1]=Ee[G+1],F[(j+ee*J)*4+0]=Ee[G+2],F[(j+ee*J)*4+3]=Ee[G+3];return F}function c(F,se,H,fe,me,ue,ke,Ee){let G,j=0,J,ee;const Te=v.width;for(ee=se;ee!==fe;ee+=H)for(J=me;J!==ke;J+=ue,j++)G=Ee[j],F[(J+Te*ee)*4+0]=G,F[(J+Te*ee)*4+1]=G,F[(J+Te*ee)*4+2]=G,F[(J+Te*ee)*4+3]=255;return F}function l(F,se,H,fe,me,ue,ke,Ee){let G=0,j,J;const ee=v.width;for(J=se;J!==fe;J+=H)for(j=me;j!==ke;j+=ue,G+=2)F[(j+ee*J)*4+0]=Ee[G+0],F[(j+ee*J)*4+1]=Ee[G+0],F[(j+ee*J)*4+2]=Ee[G+0],F[(j+ee*J)*4+3]=Ee[G+1];return F}function h(F,se,H,fe,me){let ue,ke,Ee,G,j,J;switch((v.flags&x)>>y){default:case I:ue=0,Ee=1,j=se,ke=0,G=1,J=H;break;case b:ue=0,Ee=1,j=se,ke=H-1,G=-1,J=-1;break;case C:ue=se-1,Ee=-1,j=-1,ke=0,G=1,J=H;break;case U:ue=se-1,Ee=-1,j=-1,ke=H-1,G=-1,J=-1;break}if(q)switch(v.pixel_size){case 8:c(F,ke,G,J,ue,Ee,j,fe);break;case 16:l(F,ke,G,J,ue,Ee,j,fe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(v.pixel_size){case 8:i(F,ke,G,J,ue,Ee,j,fe,me);break;case 16:r(F,ke,G,J,ue,Ee,j,fe);break;case 24:o(F,ke,G,J,ue,Ee,j,fe);break;case 32:a(F,ke,G,J,ue,Ee,j,fe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}const u=0,f=1,d=2,p=3,_=9,m=10,g=11,x=48,y=4,b=0,U=1,I=2,C=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const k=new Uint8Array(e),v={id_length:k[N++],colormap_type:k[N++],image_type:k[N++],colormap_index:k[N++]|k[N++]<<8,colormap_length:k[N++]|k[N++]<<8,colormap_size:k[N++],origin:[k[N++]|k[N++]<<8,k[N++]|k[N++]<<8],width:k[N++]|k[N++]<<8,height:k[N++]|k[N++]<<8,pixel_size:k[N++],flags:k[N++]};if(t(v),v.id_length+N>e.length)throw new Error("THREE.TGALoader: No data.");N+=v.id_length;let w=!1,W=!1,q=!1;switch(v.image_type){case _:w=!0,W=!0;break;case f:W=!0;break;case m:w=!0;break;case d:break;case g:w=!0,q=!0;break;case p:q=!0;break}const Y=new Uint8Array(v.width*v.height*4),re=n(w,W,v,N,k);return h(Y,v.width,v.height,re.pixel_data,re.palettes),{data:Y,width:v.width,height:v.height,flipY:!0,generateMipmaps:!0,minFilter:ai}}}class nE extends gn{load(e,t,n,i){const r=this,o=r.path===""?Oc.extractUrlBase(e):r.path,a=new li(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(S,M){const T=[],A=S.childNodes;for(let P=0,$=A.length;P<$;P++){const ne=A[P];ne.nodeName===M&&T.push(ne)}return T}function i(S){if(S.length===0)return[];const M=S.trim().split(/\s+/),T=new Array(M.length);for(let A=0,P=M.length;A<P;A++)T[A]=M[A];return T}function r(S){if(S.length===0)return[];const M=S.trim().split(/\s+/),T=new Array(M.length);for(let A=0,P=M.length;A<P;A++)T[A]=parseFloat(M[A]);return T}function o(S){if(S.length===0)return[];const M=S.trim().split(/\s+/),T=new Array(M.length);for(let A=0,P=M.length;A<P;A++)T[A]=parseInt(M[A]);return T}function a(S){return S.substring(1)}function c(){return"three_default_"+Tg++}function l(S){return Object.keys(S).length===0}function h(S){return{unit:u(n(S,"unit")[0]),upAxis:f(n(S,"up_axis")[0])}}function u(S){return S!==void 0&&S.hasAttribute("meter")===!0?parseFloat(S.getAttribute("meter")):1}function f(S){return S!==void 0?S.textContent:"Y_UP"}function d(S,M,T,A){const P=n(S,M)[0];if(P!==void 0){const $=n(P,T);for(let ne=0;ne<$.length;ne++)A($[ne])}}function p(S,M){for(const T in S){const A=S[T];A.build=M(S[T])}}function _(S,M){return S.build!==void 0||(S.build=M(S)),S.build}function m(S){const M={sources:{},samplers:{},channels:{}};let T=!1;for(let A=0,P=S.childNodes.length;A<P;A++){const $=S.childNodes[A];if($.nodeType!==1)continue;let ne;switch($.nodeName){case"source":ne=$.getAttribute("id"),M.sources[ne]=ce($);break;case"sampler":ne=$.getAttribute("id"),M.samplers[ne]=g($);break;case"channel":ne=$.getAttribute("target"),M.channels[ne]=x($);break;case"animation":m($),T=!0;break;default:console.log($)}}T===!1&&(it.animations[S.getAttribute("id")||As.generateUUID()]=M)}function g(S){const M={inputs:{}};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"input":const $=a(P.getAttribute("source")),ne=P.getAttribute("semantic");M.inputs[ne]=$;break}}return M}function x(S){const M={};let A=S.getAttribute("target").split("/");const P=A.shift();let $=A.shift();const ne=$.indexOf("(")!==-1,ze=$.indexOf(".")!==-1;if(ze)A=$.split("."),$=A.shift(),M.member=A.shift();else if(ne){const xe=$.split("(");$=xe.shift();for(let Pe=0;Pe<xe.length;Pe++)xe[Pe]=parseInt(xe[Pe].replace(/\)/,""));M.indices=xe}return M.id=P,M.sid=$,M.arraySyntax=ne,M.memberSyntax=ze,M.sampler=a(S.getAttribute("source")),M}function y(S){const M=[],T=S.channels,A=S.samplers,P=S.sources;for(const $ in T)if(T.hasOwnProperty($)){const ne=T[$],ze=A[ne.sampler],xe=ze.inputs.INPUT,Pe=ze.inputs.OUTPUT,Ke=P[xe],pe=P[Pe],Ye=U(ne,Ke,pe);v(Ye,M)}return M}function b(S){return _(it.animations[S],y)}function U(S,M,T){const A=it.nodes[S.id],P=mt(A.id),$=A.transforms[S.sid],ne=A.matrix.clone().transpose();let ze,xe,Pe,Ke,pe,Ye;const Ge={};switch($){case"matrix":for(Pe=0,Ke=M.array.length;Pe<Ke;Pe++)if(ze=M.array[Pe],xe=Pe*T.stride,Ge[ze]===void 0&&(Ge[ze]={}),S.arraySyntax===!0){const Gt=T.array[xe],It=S.indices[0]+4*S.indices[1];Ge[ze][It]=Gt}else for(pe=0,Ye=T.stride;pe<Ye;pe++)Ge[ze][pe]=T.array[xe+pe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',$);break}const Qe=I(Ge,ne);return{name:P.uuid,keyframes:Qe}}function I(S,M){const T=[];for(const P in S)T.push({time:parseFloat(P),value:S[P]});T.sort(A);for(let P=0;P<16;P++)w(T,P,M.elements[P]);return T;function A(P,$){return P.time-$.time}}const C=new L,N=new L,k=new un;function v(S,M){const T=S.keyframes,A=S.name,P=[],$=[],ne=[],ze=[];for(let xe=0,Pe=T.length;xe<Pe;xe++){const Ke=T[xe],pe=Ke.time,Ye=Ke.value;de.fromArray(Ye).transpose(),de.decompose(C,k,N),P.push(pe),$.push(C.x,C.y,C.z),ne.push(k.x,k.y,k.z,k.w),ze.push(N.x,N.y,N.z)}return $.length>0&&M.push(new Gs(A+".position",P,$)),ne.length>0&&M.push(new Ur(A+".quaternion",P,ne)),ze.length>0&&M.push(new Gs(A+".scale",P,ze)),M}function w(S,M,T){let A,P=!0,$,ne;for($=0,ne=S.length;$<ne;$++)A=S[$],A.value[M]===void 0?A.value[M]=null:P=!1;if(P===!0)for($=0,ne=S.length;$<ne;$++)A=S[$],A.value[M]=T;else W(S,M)}function W(S,M){let T,A;for(let P=0,$=S.length;P<$;P++){const ne=S[P];if(ne.value[M]===null){if(T=q(S,P,M),A=Y(S,P,M),T===null){ne.value[M]=A.value[M];continue}if(A===null){ne.value[M]=T.value[M];continue}re(ne,T,A,M)}}}function q(S,M,T){for(;M>=0;){const A=S[M];if(A.value[T]!==null)return A;M--}return null}function Y(S,M,T){for(;M<S.length;){const A=S[M];if(A.value[T]!==null)return A;M++}return null}function re(S,M,T,A){if(T.time-M.time===0){S.value[A]=M.value[A];return}S.value[A]=(S.time-M.time)*(T.value[A]-M.value[A])/(T.time-M.time)+M.value[A]}function F(S){const M={name:S.getAttribute("id")||"default",start:parseFloat(S.getAttribute("start")||0),end:parseFloat(S.getAttribute("end")||0),animations:[]};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"instance_animation":M.animations.push(a(P.getAttribute("url")));break}}it.clips[S.getAttribute("id")]=M}function se(S){const M=[],T=S.name,A=S.end-S.start||-1,P=S.animations;for(let $=0,ne=P.length;$<ne;$++){const ze=b(P[$]);for(let xe=0,Pe=ze.length;xe<Pe;xe++)M.push(ze[xe])}return new Ws(T,A,M)}function H(S){return _(it.clips[S],se)}function fe(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"skin":M.id=a(P.getAttribute("source")),M.skin=me(P);break;case"morph":M.id=a(P.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}it.controllers[S.getAttribute("id")]=M}function me(S){const M={sources:{}};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"bind_shape_matrix":M.bindShapeMatrix=r(P.textContent);break;case"source":const $=P.getAttribute("id");M.sources[$]=ce(P);break;case"joints":M.joints=ue(P);break;case"vertex_weights":M.vertexWeights=ke(P);break}}return M}function ue(S){const M={inputs:{}};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"input":const $=P.getAttribute("semantic"),ne=a(P.getAttribute("source"));M.inputs[$]=ne;break}}return M}function ke(S){const M={inputs:{}};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"input":const $=P.getAttribute("semantic"),ne=a(P.getAttribute("source")),ze=parseInt(P.getAttribute("offset"));M.inputs[$]={id:ne,offset:ze};break;case"vcount":M.vcount=o(P.textContent);break;case"v":M.v=o(P.textContent);break}}return M}function Ee(S){const M={id:S.id},T=it.geometries[M.id];return S.skin!==void 0&&(M.skin=G(S.skin),T.sources.skinIndices=M.skin.indices,T.sources.skinWeights=M.skin.weights),M}function G(S){const T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=S.sources,P=S.vertexWeights,$=P.vcount,ne=P.v,ze=P.inputs.JOINT.offset,xe=P.inputs.WEIGHT.offset,Pe=S.sources[S.joints.inputs.JOINT],Ke=S.sources[S.joints.inputs.INV_BIND_MATRIX],pe=A[P.inputs.WEIGHT.id].array;let Ye=0,Ge,Qe,Je;for(Ge=0,Je=$.length;Ge<Je;Ge++){const It=$[Ge],At=[];for(Qe=0;Qe<It;Qe++){const Tt=ne[Ye+ze],Mi=ne[Ye+xe],kn=pe[Mi];At.push({index:Tt,weight:kn}),Ye+=2}for(At.sort(Gt),Qe=0;Qe<4;Qe++){const Tt=At[Qe];Tt!==void 0?(T.indices.array.push(Tt.index),T.weights.array.push(Tt.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(S.bindShapeMatrix?T.bindMatrix=new Xe().fromArray(S.bindShapeMatrix).transpose():T.bindMatrix=new Xe().identity(),Ge=0,Je=Pe.array.length;Ge<Je;Ge++){const It=Pe.array[Ge],At=new Xe().fromArray(Ke.array,Ge*Ke.stride).transpose();T.joints.push({name:It,boneInverse:At})}return T;function Gt(It,At){return At.weight-It.weight}}function j(S){return _(it.controllers[S],Ee)}function J(S){const M={init_from:n(S,"init_from")[0].textContent};it.images[S.getAttribute("id")]=M}function ee(S){return S.build!==void 0?S.build:S.init_from}function Te(S){const M=it.images[S];return M!==void 0?_(M,ee):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",S),null)}function te(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"profile_COMMON":M.profile=Oe(P);break}}it.effects[S.getAttribute("id")]=M}function Oe(S){const M={surfaces:{},samplers:{}};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"newparam":ct(P,M);break;case"technique":M.technique=Me(P);break;case"extra":M.extra=D(P);break}}return M}function ct(S,M){const T=S.getAttribute("sid");for(let A=0,P=S.childNodes.length;A<P;A++){const $=S.childNodes[A];if($.nodeType===1)switch($.nodeName){case"surface":M.surfaces[T]=le($);break;case"sampler2D":M.samplers[T]=O($);break}}}function le(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"init_from":M.init_from=P.textContent;break}}return M}function O(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"source":M.source=P.textContent;break}}return M}function Me(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"constant":case"lambert":case"blinn":case"phong":M.type=P.nodeName,M.parameters=ve(P);break;case"extra":M.extra=D(P);break}}return M}function ve(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":M[P.nodeName]=ge(P);break;case"transparent":M[P.nodeName]={opaque:P.hasAttribute("opaque")?P.getAttribute("opaque"):"A_ONE",data:ge(P)};break}}return M}function ge(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"color":M[P.nodeName]=r(P.textContent);break;case"float":M[P.nodeName]=parseFloat(P.textContent);break;case"texture":M[P.nodeName]={id:P.getAttribute("texture"),extra:Se(P)};break}}return M}function Se(S){const M={technique:{}};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"extra":je(P,M);break}}return M}function je(S,M){for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"technique":De(P,M);break}}}function De(S,M){for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":M.technique[P.nodeName]=parseFloat(P.textContent);break;case"wrapU":case"wrapV":P.textContent.toUpperCase()==="TRUE"?M.technique[P.nodeName]=1:P.textContent.toUpperCase()==="FALSE"?M.technique[P.nodeName]=0:M.technique[P.nodeName]=parseInt(P.textContent);break;case"bump":M[P.nodeName]=X(P);break}}}function D(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"technique":M.technique=E(P);break}}return M}function E(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"double_sided":M[P.nodeName]=parseInt(P.textContent);break;case"bump":M[P.nodeName]=X(P);break}}return M}function X(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"texture":M[P.nodeName]={id:P.getAttribute("texture"),texcoord:P.getAttribute("texcoord"),extra:Se(P)};break}}return M}function oe(S){return S}function he(S){return _(it.effects[S],oe)}function ae(S){const M={name:S.getAttribute("name")};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"instance_effect":M.url=a(P.getAttribute("url"));break}}it.materials[S.getAttribute("id")]=M}function qe(S){let M,T=S.slice((S.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":M=Js;break;default:M=Zo}return M}function we(S){const M=he(S.url),T=M.profile.technique;let A;switch(T.type){case"phong":case"blinn":A=new Uc;break;case"lambert":A=new bu;break;default:A=new ci;break}A.name=S.name||"";function P(xe,Pe=null){const Ke=M.profile.samplers[xe.id];let pe=null;if(Ke!==void 0){const Ye=M.profile.surfaces[Ke.source];pe=Te(Ye.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),pe=Te(xe.id);if(pe!==null){const Ye=qe(pe);if(Ye!==void 0){const Ge=Ye.load(pe),Qe=xe.extra;if(Qe!==void 0&&Qe.technique!==void 0&&l(Qe.technique)===!1){const Je=Qe.technique;Ge.wrapS=Je.wrapU?Li:Gn,Ge.wrapT=Je.wrapV?Li:Gn,Ge.offset.set(Je.offsetU||0,Je.offsetV||0),Ge.repeat.set(Je.repeatU||1,Je.repeatV||1)}else Ge.wrapS=Li,Ge.wrapT=Li;return Pe!==null&&(Ge.colorSpace=Pe),Ge}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",pe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}const $=T.parameters;for(const xe in $){const Pe=$[xe];switch(xe){case"diffuse":Pe.color&&A.color.fromArray(Pe.color),Pe.texture&&(A.map=P(Pe.texture,Jt));break;case"specular":Pe.color&&A.specular&&A.specular.fromArray(Pe.color),Pe.texture&&(A.specularMap=P(Pe.texture));break;case"bump":Pe.texture&&(A.normalMap=P(Pe.texture));break;case"ambient":Pe.texture&&(A.lightMap=P(Pe.texture,Jt));break;case"shininess":Pe.float&&A.shininess&&(A.shininess=Pe.float);break;case"emission":Pe.color&&A.emissive&&A.emissive.fromArray(Pe.color),Pe.texture&&(A.emissiveMap=P(Pe.texture,Jt));break}}gt.toWorkingColorSpace(A.color,Jt),A.specular&&gt.toWorkingColorSpace(A.specular,Jt),A.emissive&&gt.toWorkingColorSpace(A.emissive,Jt);let ne=$.transparent,ze=$.transparency;if(ze===void 0&&ne&&(ze={float:1}),ne===void 0&&ze&&(ne={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ne&&ze)if(ne.data.texture)A.transparent=!0;else{const xe=ne.data.color;switch(ne.opaque){case"A_ONE":A.opacity=xe[3]*ze.float;break;case"RGB_ZERO":A.opacity=1-xe[0]*ze.float;break;case"A_ZERO":A.opacity=1-xe[3]*ze.float;break;case"RGB_ONE":A.opacity=xe[0]*ze.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ne.opaque)}A.opacity<1&&(A.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){const xe=T.extra.technique;for(const Pe in xe){const Ke=xe[Pe];switch(Pe){case"double_sided":A.side=Ke===1?oi:_i;break;case"bump":A.normalMap=P(Ke.texture),A.normalScale=new ie(1,1);break}}}return A}function Fe(S){return _(it.materials[S],we)}function _t(S){const M={name:S.getAttribute("name")};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"optics":M.optics=ye(P);break}}it.cameras[S.getAttribute("id")]=M}function ye(S){for(let M=0;M<S.childNodes.length;M++){const T=S.childNodes[M];switch(T.nodeName){case"technique_common":return Be(T)}}return{}}function Be(S){const M={};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];switch(A.nodeName){case"perspective":case"orthographic":M.technique=A.nodeName,M.parameters=rt(A);break}}return M}function rt(S){const M={};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":M[A.nodeName]=parseFloat(A.textContent);break}}return M}function st(S){let M;switch(S.optics.technique){case"perspective":M=new tn(S.optics.parameters.yfov,S.optics.parameters.aspect_ratio,S.optics.parameters.znear,S.optics.parameters.zfar);break;case"orthographic":let T=S.optics.parameters.ymag,A=S.optics.parameters.xmag;const P=S.optics.parameters.aspect_ratio;A=A===void 0?T*P:A,T=T===void 0?A/P:T,A*=.5,T*=.5,M=new Lr(-A,A,T,-T,S.optics.parameters.znear,S.optics.parameters.zfar);break;default:M=new tn;break}return M.name=S.name||"",M}function Ve(S){const M=it.cameras[S];return M!==void 0?_(M,st):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",S),null)}function yt(S){let M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"technique_common":M=ot(P);break}}it.lights[S.getAttribute("id")]=M}function ot(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"directional":case"point":case"spot":case"ambient":M.technique=P.nodeName,M.parameters=Lt(P)}}return M}function Lt(S){const M={};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"color":const $=r(P.textContent);M.color=new Ae().fromArray($),gt.toWorkingColorSpace(M.color,Jt);break;case"falloff_angle":M.falloffAngle=parseFloat(P.textContent);break;case"quadratic_attenuation":const ne=parseFloat(P.textContent);M.distance=ne?Math.sqrt(1/ne):0;break}}return M}function B(S){let M;switch(S.technique){case"directional":M=new Ru;break;case"point":M=new Cu;break;case"spot":M=new Tu;break;case"ambient":M=new Pu;break}return S.parameters.color&&M.color.copy(S.parameters.color),S.parameters.distance&&(M.distance=S.parameters.distance),M}function Ne(S){const M=it.lights[S];return M!==void 0?_(M,B):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",S),null)}function Q(S){const M={name:S.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=n(S,"mesh")[0];if(T!==void 0){for(let A=0;A<T.childNodes.length;A++){const P=T.childNodes[A];if(P.nodeType!==1)continue;const $=P.getAttribute("id");switch(P.nodeName){case"source":M.sources[$]=ce(P);break;case"vertices":M.vertices=Ie(P);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",P.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":M.primitives.push(Ue(P));break;default:console.log(P)}}it.geometries[S.getAttribute("id")]=M}}function ce(S){const M={array:[],stride:3};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"float_array":M.array=r(A.textContent);break;case"Name_array":M.array=i(A.textContent);break;case"technique_common":const P=n(A,"accessor")[0];P!==void 0&&(M.stride=parseInt(P.getAttribute("stride")));break}}return M}function Ie(S){const M={};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];A.nodeType===1&&(M[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return M}function Ue(S){const M={type:S.nodeName,material:S.getAttribute("material"),count:parseInt(S.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,A=S.childNodes.length;T<A;T++){const P=S.childNodes[T];if(P.nodeType===1)switch(P.nodeName){case"input":const $=a(P.getAttribute("source")),ne=P.getAttribute("semantic"),ze=parseInt(P.getAttribute("offset")),xe=parseInt(P.getAttribute("set")),Pe=xe>0?ne+xe:ne;M.inputs[Pe]={id:$,offset:ze},M.stride=Math.max(M.stride,ze+1),ne==="TEXCOORD"&&(M.hasUV=!0);break;case"vcount":M.vcount=o(P.textContent);break;case"p":M.p=o(P.textContent);break}}return M}function vt(S){const M={};for(let T=0;T<S.length;T++){const A=S[T];M[A.type]===void 0&&(M[A.type]=[]),M[A.type].push(A)}return M}function Yt(S){let M=0;for(let T=0,A=S.length;T<A;T++)S[T].hasUV===!0&&M++;M>0&&M<S.length&&(S.uvsNeedsFix=!0)}function fn(S){const M={},T=S.sources,A=S.vertices,P=S.primitives;if(P.length===0)return{};const $=vt(P);for(const ne in $){const ze=$[ne];Yt(ze),M[ne]=bt(ze,T,A)}return M}function bt(S,M,T){const A={},P={array:[],stride:0},$={array:[],stride:0},ne={array:[],stride:0},ze={array:[],stride:0},xe={array:[],stride:0},Pe={array:[],stride:4},Ke={array:[],stride:4},pe=new at,Ye=[];let Ge=0;for(let Qe=0;Qe<S.length;Qe++){const Je=S[Qe],Gt=Je.inputs;let It=0;switch(Je.type){case"lines":case"linestrips":It=Je.count*2;break;case"triangles":It=Je.count*3;break;case"polylist":for(let At=0;At<Je.count;At++){const Tt=Je.vcount[At];switch(Tt){case 3:It+=3;break;case 4:It+=6;break;default:It+=(Tt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Je.type)}pe.addGroup(Ge,It,Qe),Ge+=It,Je.material&&Ye.push(Je.material);for(const At in Gt){const Tt=Gt[At];switch(At){case"VERTEX":for(const Mi in T){const kn=T[Mi];switch(Mi){case"POSITION":const Qs=P.array.length;if(Ft(Je,M[kn],Tt.offset,P.array),P.stride=M[kn].stride,M.skinWeights&&M.skinIndices&&(Ft(Je,M.skinIndices,Tt.offset,Pe.array),Ft(Je,M.skinWeights,Tt.offset,Ke.array)),Je.hasUV===!1&&S.uvsNeedsFix===!0){const Cg=(P.array.length-Qs)/P.stride;for(let Hu=0;Hu<Cg;Hu++)ne.array.push(0,0)}break;case"NORMAL":Ft(Je,M[kn],Tt.offset,$.array),$.stride=M[kn].stride;break;case"COLOR":Ft(Je,M[kn],Tt.offset,xe.array),xe.stride=M[kn].stride;break;case"TEXCOORD":Ft(Je,M[kn],Tt.offset,ne.array),ne.stride=M[kn].stride;break;case"TEXCOORD1":Ft(Je,M[kn],Tt.offset,ze.array),ne.stride=M[kn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Mi)}}break;case"NORMAL":Ft(Je,M[Tt.id],Tt.offset,$.array),$.stride=M[Tt.id].stride;break;case"COLOR":Ft(Je,M[Tt.id],Tt.offset,xe.array,!0),xe.stride=M[Tt.id].stride;break;case"TEXCOORD":Ft(Je,M[Tt.id],Tt.offset,ne.array),ne.stride=M[Tt.id].stride;break;case"TEXCOORD1":Ft(Je,M[Tt.id],Tt.offset,ze.array),ze.stride=M[Tt.id].stride;break}}}return P.array.length>0&&pe.setAttribute("position",new Le(P.array,P.stride)),$.array.length>0&&pe.setAttribute("normal",new Le($.array,$.stride)),xe.array.length>0&&pe.setAttribute("color",new Le(xe.array,xe.stride)),ne.array.length>0&&pe.setAttribute("uv",new Le(ne.array,ne.stride)),ze.array.length>0&&pe.setAttribute("uv1",new Le(ze.array,ze.stride)),Pe.array.length>0&&pe.setAttribute("skinIndex",new Le(Pe.array,Pe.stride)),Ke.array.length>0&&pe.setAttribute("skinWeight",new Le(Ke.array,Ke.stride)),A.data=pe,A.type=S[0].type,A.materialKeys=Ye,A}function Ft(S,M,T,A,P=!1){const $=S.p,ne=S.stride,ze=S.vcount;function xe(pe){let Ye=$[pe+T]*Ke;const Ge=Ye+Ke;for(;Ye<Ge;Ye++)A.push(Pe[Ye]);if(P){const Qe=A.length-Ke-1;Ko.setRGB(A[Qe+0],A[Qe+1],A[Qe+2],Jt),A[Qe+0]=Ko.r,A[Qe+1]=Ko.g,A[Qe+2]=Ko.b}}const Pe=M.array,Ke=M.stride;if(S.vcount!==void 0){let pe=0;for(let Ye=0,Ge=ze.length;Ye<Ge;Ye++){const Qe=ze[Ye];if(Qe===4){const Je=pe+ne*0,Gt=pe+ne*1,It=pe+ne*2,At=pe+ne*3;xe(Je),xe(Gt),xe(At),xe(Gt),xe(It),xe(At)}else if(Qe===3){const Je=pe+ne*0,Gt=pe+ne*1,It=pe+ne*2;xe(Je),xe(Gt),xe(It)}else if(Qe>4)for(let Je=1,Gt=Qe-2;Je<=Gt;Je++){const It=pe+ne*0,At=pe+ne*Je,Tt=pe+ne*(Je+1);xe(It),xe(At),xe(Tt)}pe+=ne*Qe}}else for(let pe=0,Ye=$.length;pe<Ye;pe+=ne)xe(pe)}function ei(S){return _(it.geometries[S],fn)}function Vo(S){const M={name:S.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Or(A,M);break}}it.kinematicsModels[S.getAttribute("id")]=M}function Ho(S){return S.build!==void 0?S.build:S}function bi(S){return _(it.kinematicsModels[S],Ho)}function Or(S,M){for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"joint":M.joints[A.getAttribute("sid")]=Go(A);break;case"link":M.links.push(cs(A));break}}}function Go(S){let M;for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":M=Wo(A);break}}return M}function Wo(S){const M={sid:S.getAttribute("sid"),name:S.getAttribute("name")||"",axis:new L,limits:{min:0,max:0},type:S.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"axis":const P=r(A.textContent);M.axis.fromArray(P);break;case"limits":const $=A.getElementsByTagName("max")[0],ne=A.getElementsByTagName("min")[0];M.limits.max=parseFloat($.textContent),M.limits.min=parseFloat(ne.textContent);break}}return M.limits.min>=M.limits.max&&(M.static=!0),M.middlePosition=(M.limits.min+M.limits.max)/2,M}function cs(S){const M={sid:S.getAttribute("sid"),name:S.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":M.attachments.push(Xo(A));break;case"matrix":case"translate":case"rotate":M.transforms.push(ls(A));break}}return M}function Xo(S){const M={joint:S.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"link":M.links.push(cs(A));break;case"matrix":case"translate":case"rotate":M.transforms.push(ls(A));break}}return M}function ls(S){const M={type:S.nodeName},T=r(S.textContent);switch(M.type){case"matrix":M.obj=new Xe,M.obj.fromArray(T).transpose();break;case"translate":M.obj=new L,M.obj.fromArray(T);break;case"rotate":M.obj=new L,M.obj.fromArray(T),M.angle=As.degToRad(T[3]);break}return M}function qo(S){const M={name:S.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":M.rigidBodies[A.getAttribute("name")]={},Yo(A,M.rigidBodies[A.getAttribute("name")]);break}}it.physicsModels[S.getAttribute("id")]=M}function Yo(S,M){for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"technique_common":El(A,M);break}}}function El(S,M){for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"inertia":M.inertia=r(A.textContent);break;case"mass":M.mass=r(A.textContent)[0];break}}}function Al(S){const M={bindJointAxis:[]};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":M.bindJointAxis.push(Tl(A));break}}it.kinematicsScenes[a(S.getAttribute("url"))]=M}function Tl(S){const M={target:S.getAttribute("target").split("/").pop()};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType===1)switch(A.nodeName){case"axis":const P=A.getElementsByTagName("param")[0];M.axis=P.textContent;const $=M.axis.split("inst_").pop().split("axis")[0];M.jointIndex=$.substring(0,$.length-1);break}}return M}function R(S){return S.build!==void 0?S.build:S}function z(S){return _(it.kinematicsScenes[S],R)}function Z(){const S=Object.keys(it.kinematicsModels)[0],M=Object.keys(it.kinematicsScenes)[0],T=Object.keys(it.visualScenes)[0];if(S===void 0||M===void 0)return;const A=bi(S),P=z(M),$=Fn(T),ne=P.bindJointAxis,ze={};for(let Ke=0,pe=ne.length;Ke<pe;Ke++){const Ye=ne[Ke],Ge=Dt.querySelector('[sid="'+Ye.target+'"]');if(Ge){const Qe=Ge.parentElement;xe(Ye.jointIndex,Qe)}}function xe(Ke,pe){const Ye=pe.getAttribute("name"),Ge=A.joints[Ke];$.traverse(function(Qe){Qe.name===Ye&&(ze[Ke]={object:Qe,transforms:K(pe),joint:Ge,position:Ge.zeroPosition})})}const Pe=new Xe;Vu={joints:A&&A.joints,getJointValue:function(Ke){const pe=ze[Ke];if(pe)return pe.position;console.warn("THREE.ColladaLoader: Joint "+Ke+" doesn't exist.")},setJointValue:function(Ke,pe){const Ye=ze[Ke];if(Ye){const Ge=Ye.joint;if(pe>Ge.limits.max||pe<Ge.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ke+" value "+pe+" outside of limits (min: "+Ge.limits.min+", max: "+Ge.limits.max+").");else if(Ge.static)console.warn("THREE.ColladaLoader: Joint "+Ke+" is static.");else{const Qe=Ye.object,Je=Ge.axis,Gt=Ye.transforms;de.identity();for(let It=0;It<Gt.length;It++){const At=Gt[It];if(At.sid&&At.sid.indexOf(Ke)!==-1)switch(Ge.type){case"revolute":de.multiply(Pe.makeRotationAxis(Je,As.degToRad(pe)));break;case"prismatic":de.multiply(Pe.makeTranslation(Je.x*pe,Je.y*pe,Je.z*pe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ge.type);break}else switch(At.type){case"matrix":de.multiply(At.obj);break;case"translate":de.multiply(Pe.makeTranslation(At.obj.x,At.obj.y,At.obj.z));break;case"scale":de.scale(At.obj);break;case"rotate":de.multiply(Pe.makeRotationAxis(At.obj,At.angle));break}}Qe.matrix.copy(de),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),ze[Ke].position=pe}}else console.log("THREE.ColladaLoader: "+Ke+" does not exist.")}}}function K(S){const M=[],T=Dt.querySelector('[id="'+S.id+'"]');for(let A=0;A<T.childNodes.length;A++){const P=T.childNodes[A];if(P.nodeType!==1)continue;let $,ne;switch(P.nodeName){case"matrix":$=r(P.textContent);const ze=new Xe().fromArray($).transpose();M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ze});break;case"translate":case"scale":$=r(P.textContent),ne=new L().fromArray($),M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ne});break;case"rotate":$=r(P.textContent),ne=new L().fromArray($);const xe=As.degToRad($[3]);M.push({sid:P.getAttribute("sid"),type:P.nodeName,obj:ne,angle:xe});break}}return M}function V(S){const M=S.getElementsByTagName("node");for(let T=0;T<M.length;T++){const A=M[T];A.hasAttribute("id")===!1&&A.setAttribute("id",c())}}const de=new Xe,Ce=new L;function He(S){const M={name:S.getAttribute("name")||"",type:S.getAttribute("type"),id:S.getAttribute("id"),sid:S.getAttribute("sid"),matrix:new Xe,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];if(A.nodeType!==1)continue;let P;switch(A.nodeName){case"node":M.nodes.push(A.getAttribute("id")),He(A);break;case"instance_camera":M.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":M.instanceControllers.push(We(A));break;case"instance_light":M.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":M.instanceGeometries.push(We(A));break;case"instance_node":M.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":P=r(A.textContent),M.matrix.multiply(de.fromArray(P).transpose()),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":P=r(A.textContent),Ce.fromArray(P),M.matrix.multiply(de.makeTranslation(Ce.x,Ce.y,Ce.z)),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":P=r(A.textContent);const $=As.degToRad(P[3]);M.matrix.multiply(de.makeRotationAxis(Ce.fromArray(P),$)),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":P=r(A.textContent),M.matrix.scale(Ce.fromArray(P)),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return _n(M.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",M.id):it.nodes[M.id]=M,M}function We(S){const M={id:a(S.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<S.childNodes.length;T++){const A=S.childNodes[T];switch(A.nodeName){case"bind_material":const P=A.getElementsByTagName("instance_material");for(let $=0;$<P.length;$++){const ne=P[$],ze=ne.getAttribute("symbol"),xe=ne.getAttribute("target");M.materials[ze]=a(xe)}break;case"skeleton":M.skeletons.push(a(A.textContent));break}}return M}function tt(S,M){const T=[],A=[];let P,$,ne;for(P=0;P<S.length;P++){const Pe=S[P];let Ke;if(_n(Pe))Ke=mt(Pe),nt(Ke,M,T);else if(Et(Pe)){const Ye=it.visualScenes[Pe].children;for(let Ge=0;Ge<Ye.length;Ge++){const Qe=Ye[Ge];if(Qe.type==="JOINT"){const Je=mt(Qe.id);nt(Je,M,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Pe)}for(P=0;P<M.length;P++)for($=0;$<T.length;$++)if(ne=T[$],ne.bone.name===M[P].name){A[P]=ne,ne.processed=!0;break}for(P=0;P<T.length;P++)ne=T[P],ne.processed===!1&&(A.push(ne),ne.processed=!0);const ze=[],xe=[];for(P=0;P<A.length;P++)ne=A[P],ze.push(ne.bone),xe.push(ne.boneInverse);return new Oo(ze,xe)}function nt(S,M,T){S.traverse(function(A){if(A.isBone===!0){let P;for(let $=0;$<M.length;$++){const ne=M[$];if(ne.name===A.name){P=ne.boneInverse;break}}P===void 0&&(P=new Xe),T.push({bone:A,boneInverse:P,processed:!1})}})}function Ze(S){const M=[],T=S.matrix,A=S.nodes,P=S.type,$=S.instanceCameras,ne=S.instanceControllers,ze=S.instanceLights,xe=S.instanceGeometries,Pe=S.instanceNodes;for(let pe=0,Ye=A.length;pe<Ye;pe++)M.push(mt(A[pe]));for(let pe=0,Ye=$.length;pe<Ye;pe++){const Ge=Ve($[pe]);Ge!==null&&M.push(Ge.clone())}for(let pe=0,Ye=ne.length;pe<Ye;pe++){const Ge=ne[pe],Qe=j(Ge.id),Je=ei(Qe.id),Gt=zt(Je,Ge.materials),It=Ge.skeletons,At=Qe.skin.joints,Tt=tt(It,At);for(let Mi=0,kn=Gt.length;Mi<kn;Mi++){const Qs=Gt[Mi];Qs.isSkinnedMesh&&(Qs.bind(Tt,Qe.skin.bindMatrix),Qs.normalizeSkinWeights()),M.push(Qs)}}for(let pe=0,Ye=ze.length;pe<Ye;pe++){const Ge=Ne(ze[pe]);Ge!==null&&M.push(Ge.clone())}for(let pe=0,Ye=xe.length;pe<Ye;pe++){const Ge=xe[pe],Qe=ei(Ge.id),Je=zt(Qe,Ge.materials);for(let Gt=0,It=Je.length;Gt<It;Gt++)M.push(Je[Gt])}for(let pe=0,Ye=Pe.length;pe<Ye;pe++)M.push(mt(Pe[pe]).clone());let Ke;if(A.length===0&&M.length===1)Ke=M[0];else{Ke=P==="JOINT"?new rl:new $i;for(let pe=0;pe<M.length;pe++)Ke.add(M[pe])}return Ke.name=P==="JOINT"?S.sid:S.name,Ke.matrix.copy(T),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke}const Rt=new ci({name:gn.DEFAULT_MATERIAL_NAME,color:16711935});function Ut(S,M){const T=[];for(let A=0,P=S.length;A<P;A++){const $=M[S[A]];$===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",S[A]),T.push(Rt)):T.push(Fe($))}return T}function zt(S,M){const T=[];for(const A in S){const P=S[A],$=Ut(P.materialKeys,M);if($.length===0&&(A==="lines"||A==="linestrips"?$.push(new mn):$.push(new Uc)),A==="lines"||A==="linestrips")for(let Pe=0,Ke=$.length;Pe<Ke;Pe++){const pe=$[Pe];if(pe.isMeshPhongMaterial===!0||pe.isMeshLambertMaterial===!0){const Ye=new mn;Ye.color.copy(pe.color),Ye.opacity=pe.opacity,Ye.transparent=pe.transparent,$[Pe]=Ye}}const ne=P.data.attributes.skinIndex!==void 0,ze=$.length===1?$[0]:$;let xe;switch(A){case"lines":xe=new hi(P.data,ze);break;case"linestrips":xe=new Bi(P.data,ze);break;case"triangles":case"polylist":ne?xe=new fu(P.data,ze):xe=new qt(P.data,ze);break}T.push(xe)}return T}function _n(S){return it.nodes[S]!==void 0}function mt(S){return _(it.nodes[S],Ze)}function $e(S){const M={name:S.getAttribute("name"),children:[]};V(S);const T=n(S,"node");for(let A=0;A<T.length;A++)M.children.push(He(T[A]));it.visualScenes[S.getAttribute("id")]=M}function Qt(S){const M=new $i;M.name=S.name;const T=S.children;for(let A=0;A<T.length;A++){const P=T[A];M.add(mt(P.id))}return M}function Et(S){return it.visualScenes[S]!==void 0}function Fn(S){return _(it.visualScenes[S],Qt)}function zi(S){const M=n(S,"instance_visual_scene")[0];return Fn(a(M.getAttribute("url")))}function En(){const S=it.clips;if(l(S)===!0){if(l(it.animations)===!1){const M=[];for(const T in it.animations){const A=b(T);for(let P=0,$=A.length;P<$;P++)M.push(A[P])}jo.push(new Ws("default",-1,M))}}else for(const M in S)jo.push(H(M))}function Fr(S){let M="";const T=[S];for(;T.length;){const A=T.shift();A.nodeType===Node.TEXT_NODE?M+=A.textContent:(M+=`
`,T.push.apply(T,A.childNodes))}return M.trim()}if(e.length===0)return{scene:new il};const Ht=new DOMParser().parseFromString(e,"application/xml"),Dt=n(Ht,"COLLADA")[0],hs=Ht.getElementsByTagName("parsererror")[0];if(hs!==void 0){const S=n(hs,"div")[0];let M;return S?M=S.textContent:M=Fr(hs),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,M),null}const Bn=Dt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Bn);const $s=h(n(Dt,"asset")[0]),Zo=new Xm(this.manager);Zo.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Js;kd&&(Js=new kd(this.manager),Js.setPath(this.resourcePath||t));const Ko=new Ae,jo=[];let Vu={},Tg=0;const it={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(Dt,"library_animations","animation",m),d(Dt,"library_animation_clips","animation_clip",F),d(Dt,"library_controllers","controller",fe),d(Dt,"library_images","image",J),d(Dt,"library_effects","effect",te),d(Dt,"library_materials","material",ae),d(Dt,"library_cameras","camera",_t),d(Dt,"library_lights","light",yt),d(Dt,"library_geometries","geometry",Q),d(Dt,"library_nodes","node",He),d(Dt,"library_visual_scenes","visual_scene",$e),d(Dt,"library_kinematics_models","kinematics_model",Vo),d(Dt,"library_physics_models","physics_model",qo),d(Dt,"scene","instance_kinematics_scene",Al),p(it.animations,y),p(it.clips,se),p(it.controllers,Ee),p(it.images,ee),p(it.effects,oe),p(it.materials,we),p(it.cameras,st),p(it.lights,B),p(it.geometries,fn),p(it.visualScenes,Qt),En(),Z();const $o=zi(n(Dt,"scene")[0]);return $o.animations=jo,$s.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),$o.rotation.set(-Math.PI/2,0,0)),$o.scale.multiplyScalar($s.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),jo},kinematics:Vu,library:it,scene:$o}}}function zd(s,e,t){const n=s.slice();return n[14]=e[t],n}function Vd(s){let e,t=`<!-- include dae: ${s[0]} ${s[1]} -->`,n,i,r;return i=new Vt.Group({props:{scale:s[1],position:s[3],rotation:s[2],$$slots:{default:[rE]},$$scope:{ctx:s}}}),{c(){e=new Vh(!1),n=dn(),ut(i.$$.fragment),this.h()},l(o){e=Hh(o,!1),n=pn(o),ft(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Ct(o,n,a),dt(i,o,a),r=!0},p(o,a){(!r||a&3)&&t!==(t=`<!-- include dae: ${o[0]} ${o[1]} -->`)&&e.p(t);const c={};a&2&&(c.scale=o[1]),a&8&&(c.position=o[3]),a&4&&(c.rotation=o[2]),a&132080&&(c.$$scope={dirty:a,ctx:o}),i.$set(c)},i(o){r||(_e(i.$$.fragment,o),r=!0)},o(o){be(i.$$.fragment,o),r=!1},d(o){o&&(e.d(),xt(n)),pt(i,o)}}}function Hd(s){let e,t;return e=new Vt.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:s[14].geometry,scale:s[14].scale?s[14].scale.toArray():[1,1,1],position:s[14].position?s[14].position.toArray():[0,0,0],material:s[14].material}}),e.$on("click",function(){np(s[4])&&s[4].apply(this,arguments)}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){s=n;const r={};i&512&&(r.geometry=s[14].geometry),i&512&&(r.scale=s[14].scale?s[14].scale.toArray():[1,1,1]),i&512&&(r.position=s[14].position?s[14].position.toArray():[0,0,0]),i&512&&(r.material=s[14].material),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function iE(s){let e,t,n=Qi(s[9]),i=[];for(let o=0;o<n.length;o+=1)i[o]=Hd(zd(s,n,o));const r=o=>be(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=kt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=kt()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ct(o,e,a),t=!0},p(o,a){if(a&528){n=Qi(o[9]);let c;for(c=0;c<n.length;c+=1){const l=zd(o,n,c);i[c]?(i[c].p(l,a),_e(i[c],1)):(i[c]=Hd(l),i[c].c(),_e(i[c],1),i[c].m(e.parentNode,e))}for(Mn(),c=n.length;c<i.length;c+=1)r(c);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)_e(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)be(i[a]);t=!1},d(o){o&&xt(e),kc(i,o)}}}function sE(s){let e,t;return e=new Vt.Group({props:{scale:s[5],position:s[6],rotation:s[7],$$slots:{default:[iE]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&32&&(r.scale=n[5]),i&64&&(r.position=n[6]),i&128&&(r.rotation=n[7]),i&131600&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function rE(s){let e,t;return e=new Vt.Group({props:{rotation:s[8],$$slots:{default:[sE]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&256&&(r.rotation=n[8]),i&131824&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function oE(s){let e,t,n=s[9].length>0&&Vd(s);return{c(){n&&n.c(),e=kt()},l(i){n&&n.l(i),e=kt()},m(i,r){n&&n.m(i,r),Ct(i,e,r),t=!0},p(i,[r]){i[9].length>0?n?(n.p(i,r),r&512&&_e(n,1)):(n=Vd(i),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Mn(),be(n,1,1,()=>{n=null}),Sn())},i(i){t||(_e(n),t=!0)},o(i){be(n),t=!1},d(i){i&&xt(e),n&&n.d(i)}}}function aE(s,e,t){let{filename:n}=e,{color:i=new Ae("pink")}=e,{scale:r=[1,1,1]}=e,{rotation:o=[0,0,0]}=e,{position:a=[0,0,0]}=e,{onclick:c}=e,l=[1,1,1],h=[0,0,0],u=[0,0,0],f=[0,0,0];const d=pg(nE);let p=[];return d.load(n).subscribe(m=>{if(!m)return;let g=m.scene;t(8,f=g.up.toArray()),t(5,l=g.scale.toArray()),t(6,h=g.position.toArray()),t(7,u=g.rotation?g.rotation.toArray():u),t(8,f=g.up.toArray()),t(8,f[0]*=Math.PI/2,f),t(8,f[1]*=Math.PI/2,f),t(8,f[2]*=Math.PI/2,f),console.log(m);let x=[];m.scene.traverse(y=>{y.type==="Mesh"&&x.push(y)}),t(9,p=x)}),s.$$set=m=>{"filename"in m&&t(0,n=m.filename),"color"in m&&t(10,i=m.color),"scale"in m&&t(1,r=m.scale),"rotation"in m&&t(2,o=m.rotation),"position"in m&&t(3,a=m.position),"onclick"in m&&t(4,c=m.onclick)},[n,r,o,a,c,l,h,u,f,p,i]}class cE extends Un{constructor(e){super(),On(this,e,aE,oE,Nn,{filename:0,color:10,scale:1,rotation:2,position:3,onclick:4})}}class lE extends gn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new li(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*u===h.byteLength)return!0;const p=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(p,h,_))return!1;return!0}function n(l,h,u){for(let f=0,d=l.length;f<d;f++)if(l[f]!==h.getUint8(u+f))return!1;return!0}function i(l){const h=new DataView(l),u=h.getUint32(80,!0);let f,d,p,_=!1,m,g,x,y,b;for(let w=0;w<70;w++)h.getUint32(w,!1)==1129270351&&h.getUint8(w+4)==82&&h.getUint8(w+5)==61&&(_=!0,m=new Float32Array(u*3*3),g=h.getUint8(w+6)/255,x=h.getUint8(w+7)/255,y=h.getUint8(w+8)/255,b=h.getUint8(w+9)/255);const U=84,I=12*4+2,C=new at,N=new Float32Array(u*3*3),k=new Float32Array(u*3*3),v=new Ae;for(let w=0;w<u;w++){const W=U+w*I,q=h.getFloat32(W,!0),Y=h.getFloat32(W+4,!0),re=h.getFloat32(W+8,!0);if(_){const F=h.getUint16(W+48,!0);F&32768?(f=g,d=x,p=y):(f=(F&31)/31,d=(F>>5&31)/31,p=(F>>10&31)/31)}for(let F=1;F<=3;F++){const se=W+F*12,H=w*3*3+(F-1)*3;N[H]=h.getFloat32(se,!0),N[H+1]=h.getFloat32(se+4,!0),N[H+2]=h.getFloat32(se+8,!0),k[H]=q,k[H+1]=Y,k[H+2]=re,_&&(v.setRGB(f,d,p,Jt),m[H]=v.r,m[H+1]=v.g,m[H+2]=v.b)}}return C.setAttribute("position",new Pt(N,3)),C.setAttribute("normal",new Pt(k,3)),_&&(C.setAttribute("color",new Pt(m,3)),C.hasColors=!0,C.alpha=b),C}function r(l){const h=new at,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let p=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),g=new RegExp("normal"+_+_+_,"g"),x=[],y=[],b=[],U=new L;let I,C=0,N=0,k=0;for(;(I=u.exec(l))!==null;){N=k;const v=I[0],w=(I=d.exec(v))!==null?I[1]:"";for(b.push(w);(I=f.exec(v))!==null;){let Y=0,re=0;const F=I[0];for(;(I=g.exec(F))!==null;)U.x=parseFloat(I[1]),U.y=parseFloat(I[2]),U.z=parseFloat(I[3]),re++;for(;(I=m.exec(F))!==null;)x.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),y.push(U.x,U.y,U.z),Y++,k++;re!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),Y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const W=N,q=k-N;h.userData.groupNames=b,h.addGroup(W,q,C),C++}return h.setAttribute("position",new Le(x,3)),h.setAttribute("normal",new Le(y,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=a(e);return t(c)?i(c):r(o(e))}}function Gd(s){let e,t=`<!-- include stl: ${s[0]} ${s[2]} -->`,n,i,r;return i=new Vt.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:s[7],scale:s[2],position:s[4],rotation:s[3],$$slots:{default:[hE]},$$scope:{ctx:s}}}),i.$on("click",function(){np(s[5])&&s[5].apply(this,arguments)}),{c(){e=new Vh(!1),n=dn(),ut(i.$$.fragment),this.h()},l(o){e=Hh(o,!1),n=pn(o),ft(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),Ct(o,n,a),dt(i,o,a),r=!0},p(o,a){s=o,(!r||a&5)&&t!==(t=`<!-- include stl: ${s[0]} ${s[2]} -->`)&&e.p(t);const c={};a&128&&(c.geometry=s[7]),a&4&&(c.scale=s[2]),a&16&&(c.position=s[4]),a&8&&(c.rotation=s[3]),a&514&&(c.$$scope={dirty:a,ctx:s}),i.$set(c)},i(o){r||(_e(i.$$.fragment,o),r=!0)},o(o){be(i.$$.fragment,o),r=!1},d(o){o&&(e.d(),xt(n)),pt(i,o)}}}function hE(s){let e,t;return e=new Vt.MeshLambertMaterial({props:{color:s[1]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.color=n[1]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function uE(s){let e,t,n=s[7]&&Gd(s);return{c(){n&&n.c(),e=kt()},l(i){n&&n.l(i),e=kt()},m(i,r){n&&n.m(i,r),Ct(i,e,r),t=!0},p(i,[r]){i[7]?n?(n.p(i,r),r&128&&_e(n,1)):(n=Gd(i),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Mn(),be(n,1,1,()=>{n=null}),Sn())},i(i){t||(_e(n),t=!0)},o(i){be(n),t=!1},d(i){i&&xt(e),n&&n.d(i)}}}function fE(s,e,t){let n,i=zh,r=()=>(i(),i=Dg(d,p=>t(7,n=p)),d);s.$$.on_destroy.push(()=>i());let{filename:o}=e,{color:a=new Ae("pink")}=e,{scale:c=[1,1,1]}=e,{rotation:l=[0,0,0]}=e,{position:h=[0,0,0]}=e,{onclick:u}=e;const f=pg(lE);let d;return s.$$set=p=>{"filename"in p&&t(0,o=p.filename),"color"in p&&t(1,a=p.color),"scale"in p&&t(2,c=p.scale),"rotation"in p&&t(3,l=p.rotation),"position"in p&&t(4,h=p.position),"onclick"in p&&t(5,u=p.onclick)},s.$$.update=()=>{s.$$.dirty&1&&r(t(6,d=f.load(o)))},[o,a,c,l,h,u,d,n]}class dE extends Un{constructor(e){super(),On(this,e,fE,uE,Nn,{filename:0,color:1,scale:2,rotation:3,position:4,onclick:5})}}const{subscribe:pE,set:Eg}=on(void 0),mE=Eg,gE=()=>{Eg(void 0)},_E={subscribe:pE,select:mE,unselect:gE};function yE(s){let e,t;return e=new Vt.Mesh({props:{castShadow:!0,receiveShadow:!0,scale:s[2],position:s[4],rotation:s[5],$$slots:{default:[ME]},$$scope:{ctx:s}}}),e.$on("click",s[7]),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&4&&(r.scale=n[2]),i&1027&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function vE(s){let e,t,n,i;const r=[wE,SE],o=[];function a(c,l){return c[3].type==="stl"?0:c[3].type==="dae"?1:-1}return~(e=a(s))&&(t=o[e]=r[e](s)),{c(){t&&t.c(),n=kt()},l(c){t&&t.l(c),n=kt()},m(c,l){~e&&o[e].m(c,l),Ct(c,n,l),i=!0},p(c,l){let h=e;e=a(c),e===h?~e&&o[e].p(c,l):(t&&(Mn(),be(o[h],1,1,()=>{o[h]=null}),Sn()),~e?(t=o[e],t?t.p(c,l):(t=o[e]=r[e](c),t.c()),_e(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(_e(t),i=!0)},o(c){be(t),i=!1},d(c){c&&xt(n),~e&&o[e].d(c)}}}function xE(s){let e,t;return e=new Vt.BoxGeometry({}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p:zh,i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function bE(s){let e,t;return e=new Vt.CylinderGeometry({props:{args:[s[1].radius,s[1].radius,s[1].length]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.args=[n[1].radius,n[1].radius,n[1].length]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function ME(s){let e,t,n,i,r;const o=[bE,xE],a=[];function c(l,h){return l[0].type==="cylinder"?0:l[0].type==="box"?1:-1}return~(e=c(s))&&(t=a[e]=o[e](s)),i=new Vt.MeshBasicMaterial({props:{color:s[6]}}),{c(){t&&t.c(),n=dn(),ut(i.$$.fragment)},l(l){t&&t.l(l),n=pn(l),ft(i.$$.fragment,l)},m(l,h){~e&&a[e].m(l,h),Ct(l,n,h),dt(i,l,h),r=!0},p(l,h){let u=e;e=c(l),e===u?~e&&a[e].p(l,h):(t&&(Mn(),be(a[u],1,1,()=>{a[u]=null}),Sn()),~e?(t=a[e],t?t.p(l,h):(t=a[e]=o[e](l),t.c()),_e(t,1),t.m(n.parentNode,n)):t=null)},i(l){r||(_e(t),_e(i.$$.fragment,l),r=!0)},o(l){be(t),be(i.$$.fragment,l),r=!1},d(l){l&&xt(n),~e&&a[e].d(l),pt(i,l)}}}function SE(s){let e,t;return e=new cE({props:{onclick:s[7],filename:s[3].filename,position:s[4],rotation:s[5],color:s[6],scale:s[2]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&8&&(r.filename=n[3].filename),i&4&&(r.scale=n[2]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function wE(s){let e,t;return e=new dE({props:{onclick:s[7],filename:s[3].filename,position:s[4],rotation:s[5],color:s[6],scale:s[2]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&8&&(r.filename=n[3].filename),i&4&&(r.scale=n[2]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function EE(s){let e,t,n,i;const r=[vE,yE],o=[];function a(c,l){return c[0].type==="mesh"&&c[3]?0:1}return e=a(s),t=o[e]=r[e](s),{c(){t.c(),n=kt()},l(c){t.l(c),n=kt()},m(c,l){o[e].m(c,l),Ct(c,n,l),i=!0},p(c,[l]){let h=e;e=a(c),e===h?o[e].p(c,l):(Mn(),be(o[h],1,1,()=>{o[h]=null}),Sn(),t=o[e],t?t.p(c,l):(t=o[e]=r[e](c),t.c()),_e(t,1),t.m(n.parentNode,n))},i(c){i||(_e(t),i=!0)},o(c){be(t),i=!1},d(c){c&&xt(n),o[e].d(c)}}}function AE(s,e,t){let{visual:n}=e,{link:i}=e,r;const o=n.origin_xyz||[0,0,0],a=n.origin_rpy||[0,0,0],c=tE(n.color_rgba);let l=[1,1,1],h;switch(n.type){case"mesh":h=n.geometry,l=h.scale;break;case"box":n.geometry;break;case"cylinder":r=n.geometry;break}const u=()=>{_E.select(i)};return O1(),s.$$set=f=>{"visual"in f&&t(0,n=f.visual),"link"in f&&t(8,i=f.link)},[n,r,l,h,o,a,c,u,i]}class TE extends Un{constructor(e){super(),On(this,e,AE,EE,Nn,{visual:0,link:8})}}function Wd(s){const e=s.joints,t=[];for(const n of e){let i=!0;for(const r of e)if(n.parent.name===r.child.name){i=!1;break}i&&t.push(n)}return t}function Xd(s,e){const t=[],n=s.joints;if(!n)return[];for(const i of n)i.parent===e&&t.push(i);return t}class CE{constructor(e,t=""){Ot(this,"filename");Ot(this,"colors",{});Ot(this,"robot",{name:"",links:{},joints:[]});Ot(this,"prefix","");Ot(this,"xmlRobotNode");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text())}reset(){this.robot={name:"",links:{},joints:[]}}fromString(e){this.reset();let t=new window.DOMParser().parseFromString(e,"text/xml");return this.xmlRobotNode=t.documentElement,this.parseRobotXMLNode(t.documentElement)}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.robot.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),this.robot}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],r=this.colorFromMaterial(i);r&&(this.colors[r.name]=r.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:yr(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],r=i.getElementsByTagName("visual"),o={visual:[]};i.hasAttribute("name")&&(o.name=i.getAttribute("name"),this.robot.links[o.name]=o);for(let a=0;a<r.length;a++)o.visual.push(this.parseVisual(r[a]))}}parseVisual(e){let t,n,i,r="pink";const o={};for(let a=0;a<e.childNodes.length;a++){const c=e.childNodes[a];switch(c.nodeName){case"geometry":this.parseGeometry(c,o);break;case"origin":t=yr(c),t&&(o.origin_xyz=t),n=yr(c,"rpy"),n&&(o.origin_rpy=n);break;case"material":i=c.getElementsByTagName("color"),i.length>0&&i[0].hasAttribute("rgba")?o.color_rgba=yr(i[0],"rgba"):c.hasAttribute("name")&&(r=c.getAttribute("name"),o.color_rgba=this.colors[r])}}return o}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let r=[1,1,1],o=i.getAttribute("scale");if(o){const u=o.split(" ");for(const f in u)r[f]=parseFloat(u[f])}let a=i.getAttribute("filename");a=a.replace("package:/",this.prefix);let c="stl";switch(a.substring(a.length-3).toLocaleLowerCase()){case"fbx":c="fbx";break;case"obj":c="obj";break;case"stl":c="stl";break;case"dae":c="dae";break;default:throw new Error("Unknown type "+a)}t.geometry={filename:a,type:c,scale:r},t.type="mesh";return;case"cylinder":const l={};i.hasAttribute("length")&&(l.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(l.radius=parseFloat(i.getAttribute("radius"))),t.geometry=l,t.type="cylinder";return;case"box":const h={size:[1,1,1]};if(i.hasAttribute("size")){const f=i.getAttribute("size").split(" ");for(const d in f)h.size[d]=parseFloat(f[d])}t.geometry=h;return}}}parseJoints(e){const t=this.robot.links,n=this.robot.joints,i=e.getElementsByTagName("joint");for(let r=0;r<i.length;r++){const o=i[r],a=o.getElementsByTagName("origin");let c=[0,0,0],l=[0,0,0];if(a.length===1){let p=yr(a[0]);p&&(l=p);let _=yr(a[0],"rpy");_&&(c=_)}let h;const u=o.getElementsByTagName("parent");if(u.length===1){const p=u[0].getAttribute("link");p&&t[p]?h=t[p]:h={name:p,visual:[]}}let f;const d=o.getElementsByTagName("child");if(d.length===1){const p=d[0].getAttribute("link");p&&t[p]?f=t[p]:f={name:p,visual:[]}}if(f&&h){const p={name:o.getAttribute("name")||void 0,origin_rpy:c,origin_xyz:l,parent:h,child:f};n.push(p)}}}getURDFXML(){return this.xmlRobotNode?`<?xml version="1.0" ?>
`+this.xmlRobotNode.outerHTML:""}}function qd(s,e,t){const n=s.slice();return n[2]=e[t],n}function Yd(s,e,t){const n=s.slice();return n[5]=e[t],n}function Zd(s){let e,t;return e=new Vt.Group({props:{rotation:s[0].origin_rpy,position:s[0].origin_xyz,$$slots:{default:[RE]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.rotation=n[0].origin_rpy),i&1&&(r.position=n[0].origin_xyz),i&259&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function Kd(s){let e,t;return e=new Ag({props:{joint:s[5]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&3&&(r.joint=n[5]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function jd(s){let e,t,n,i;e=new TE({props:{visual:s[2],link:s[0].child}});let r=Qi(Xd(s[1],s[0].child)),o=[];for(let c=0;c<r.length;c+=1)o[c]=Kd(Yd(s,r,c));const a=c=>be(o[c],1,1,()=>{o[c]=null});return{c(){ut(e.$$.fragment),t=dn();for(let c=0;c<o.length;c+=1)o[c].c();n=kt()},l(c){ft(e.$$.fragment,c),t=pn(c);for(let l=0;l<o.length;l+=1)o[l].l(c);n=kt()},m(c,l){dt(e,c,l),Ct(c,t,l);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(c,l);Ct(c,n,l),i=!0},p(c,l){const h={};if(l&1&&(h.visual=c[2]),l&1&&(h.link=c[0].child),e.$set(h),l&3){r=Qi(Xd(c[1],c[0].child));let u;for(u=0;u<r.length;u+=1){const f=Yd(c,r,u);o[u]?(o[u].p(f,l),_e(o[u],1)):(o[u]=Kd(f),o[u].c(),_e(o[u],1),o[u].m(n.parentNode,n))}for(Mn(),u=r.length;u<o.length;u+=1)a(u);Sn()}},i(c){if(!i){_e(e.$$.fragment,c);for(let l=0;l<r.length;l+=1)_e(o[l]);i=!0}},o(c){be(e.$$.fragment,c),o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)be(o[l]);i=!1},d(c){c&&(xt(t),xt(n)),pt(e,c),kc(o,c)}}}function RE(s){let e,t,n=Qi(s[0].child.visual),i=[];for(let o=0;o<n.length;o+=1)i[o]=jd(qd(s,n,o));const r=o=>be(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=kt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=kt()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ct(o,e,a),t=!0},p(o,a){if(a&3){n=Qi(o[0].child.visual);let c;for(c=0;c<n.length;c+=1){const l=qd(o,n,c);i[c]?(i[c].p(l,a),_e(i[c],1)):(i[c]=jd(l),i[c].c(),_e(i[c],1),i[c].m(e.parentNode,e))}for(Mn(),c=n.length;c<i.length;c+=1)r(c);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)_e(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)be(i[a]);t=!1},d(o){o&&xt(e),kc(i,o)}}}function PE(s){let e,t=`<!-- Joint ${s[0].name} -->`,n,i,r,o=s[1]&&Zd(s);return{c(){e=new Vh(!1),n=dn(),o&&o.c(),i=kt(),this.h()},l(a){e=Hh(a,!1),n=pn(a),o&&o.l(a),i=kt(),this.h()},h(){e.a=n},m(a,c){e.m(t,a,c),Ct(a,n,c),o&&o.m(a,c),Ct(a,i,c),r=!0},p(a,[c]){(!r||c&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t),a[1]?o?(o.p(a,c),c&2&&_e(o,1)):(o=Zd(a),o.c(),_e(o,1),o.m(i.parentNode,i)):o&&(Mn(),be(o,1,1,()=>{o=null}),Sn())},i(a){r||(_e(o),r=!0)},o(a){be(o),r=!1},d(a){a&&(e.d(),xt(n),xt(i)),o&&o.d(a)}}}function IE(s,e,t){let n;rn(s,Fc,r=>t(1,n=r));let{joint:i}=e;return s.$$set=r=>{"joint"in r&&t(0,i=r.joint)},[i,n]}class Ag extends Un{constructor(e){super(),On(this,e,IE,PE,Nn,{joint:0})}}function $d(s,e,t){const n=s.slice();return n[3]=e[t],n}function Jd(s){let e,t;return e=new Vt.Group({props:{position:s[1],quaternion:s[0],$$slots:{default:[LE]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.position=n[1]),i&1&&(r.quaternion=n[0]),i&68&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function Qd(s){let e,t;return e=new Ag({props:{joint:s[3]}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&4&&(r.joint=n[3]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function LE(s){let e,t,n=Qi(Wd(s[2])),i=[];for(let o=0;o<n.length;o+=1)i[o]=Qd($d(s,n,o));const r=o=>be(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=kt()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=kt()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);Ct(o,e,a),t=!0},p(o,a){if(a&4){n=Qi(Wd(o[2]));let c;for(c=0;c<n.length;c+=1){const l=$d(o,n,c);i[c]?(i[c].p(l,a),_e(i[c],1)):(i[c]=Qd(l),i[c].c(),_e(i[c],1),i[c].m(e.parentNode,e))}for(Mn(),c=n.length;c<i.length;c+=1)r(c);Sn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)_e(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)be(i[a]);t=!1},d(o){o&&xt(e),kc(i,o)}}}function DE(s){let e,t,n=s[2]&&Jd(s);return{c(){n&&n.c(),e=kt()},l(i){n&&n.l(i),e=kt()},m(i,r){n&&n.m(i,r),Ct(i,e,r),t=!0},p(i,[r]){i[2]?n?(n.p(i,r),r&4&&_e(n,1)):(n=Jd(i),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Mn(),be(n,1,1,()=>{n=null}),Sn())},i(i){t||(_e(n),t=!0)},o(i){be(n),t=!1},d(i){i&&xt(e),n&&n.d(i)}}}function NE(s,e,t){let n;rn(s,Fc,o=>t(2,n=o));let{position:i=[0,0,0]}=e,{quaternion:r=void 0}=e;if(!r){const o=new un;o.setFromAxisAngle(new L(-1,0,0),Math.PI*.5),r=[o.x,o.y,o.z,o.w]}return s.$$set=o=>{"position"in o&&t(1,i=o.position),"quaternion"in o&&t(0,r=o.quaternion)},[r,i,n]}class UE extends Un{constructor(e){super(),On(this,e,NE,DE,Nn,{position:1,quaternion:0})}}function ep(s){let e,t;return e=new t1({props:{scale:s[1]*4,far:s[1],blur:2}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.scale=n[1]*4),i&2&&(r.far=n[1]),e.$set(r)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function OE(s){let e,t,n=s[2]&&ep(s);return{c(){n&&n.c(),e=kt()},l(i){n&&n.l(i),e=kt()},m(i,r){n&&n.m(i,r),Ct(i,e,r),t=!0},p(i,r){i[2]?n?(n.p(i,r),r&4&&_e(n,1)):(n=ep(i),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Mn(),be(n,1,1,()=>{n=null}),Sn())},i(i){t||(_e(n),t=!0)},o(i){be(n),t=!1},d(i){i&&xt(e),n&&n.d(i)}}}function FE(s){let e,t,n,i,r,o,a,c;return e=new Vt.AmbientLight({props:{intensity:s[0]/3}}),n=new Vt.SpotLight({props:{penumbra:1,position:[s[8].main[0]*s[1],s[8].main[1]*s[1],s[8].main[2]*s[1]],intensity:s[0]*2,castShadow:s[2],"shadow-bias":s[3],"shadow-normalBias":s[4],"shadow-mapSize":s[5]}}),r=new Vt.PointLight({props:{position:[s[8].fill[0]*s[1],s[8].fill[1]*s[1],s[8].fill[2]*s[1]],intensity:s[0]}}),a=new Vt.Group({props:{position:[0,-s[6]/2-s[7]/2,0],$$slots:{default:[OE]},$$scope:{ctx:s}}}),{c(){ut(e.$$.fragment),t=dn(),ut(n.$$.fragment),i=dn(),ut(r.$$.fragment),o=dn(),ut(a.$$.fragment)},l(l){ft(e.$$.fragment,l),t=pn(l),ft(n.$$.fragment,l),i=pn(l),ft(r.$$.fragment,l),o=pn(l),ft(a.$$.fragment,l)},m(l,h){dt(e,l,h),Ct(l,t,h),dt(n,l,h),Ct(l,i,h),dt(r,l,h),Ct(l,o,h),dt(a,l,h),c=!0},p(l,[h]){const u={};h&1&&(u.intensity=l[0]/3),e.$set(u);const f={};h&2&&(f.position=[l[8].main[0]*l[1],l[8].main[1]*l[1],l[8].main[2]*l[1]]),h&1&&(f.intensity=l[0]*2),h&4&&(f.castShadow=l[2]),h&8&&(f["shadow-bias"]=l[3]),h&16&&(f["shadow-normalBias"]=l[4]),h&32&&(f["shadow-mapSize"]=l[5]),n.$set(f);const d={};h&2&&(d.position=[l[8].fill[0]*l[1],l[8].fill[1]*l[1],l[8].fill[2]*l[1]]),h&1&&(d.intensity=l[0]),r.$set(d);const p={};h&192&&(p.position=[0,-l[6]/2-l[7]/2,0]),h&2054&&(p.$$scope={dirty:h,ctx:l}),a.$set(p)},i(l){c||(_e(e.$$.fragment,l),_e(n.$$.fragment,l),_e(r.$$.fragment,l),_e(a.$$.fragment,l),c=!0)},o(l){be(e.$$.fragment,l),be(n.$$.fragment,l),be(r.$$.fragment,l),be(a.$$.fragment,l),c=!1},d(l){l&&(xt(t),xt(i),xt(o)),pt(e,l),pt(n,l),pt(r,l),pt(a,l)}}}function BE(s,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:r=!0}=e,{preset_name:o="rembrandt"}=e,{shadowBias:a=-1e-4}=e,{normalBias:c=0}=e,{shadowSize:l=256}=e,{height:h=1}=e,{shadowOffset:u=1}=e;const d={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[o];return s.$$set=p=>{"intensity"in p&&t(0,n=p.intensity),"radius"in p&&t(1,i=p.radius),"shadows"in p&&t(2,r=p.shadows),"preset_name"in p&&t(9,o=p.preset_name),"shadowBias"in p&&t(3,a=p.shadowBias),"normalBias"in p&&t(4,c=p.normalBias),"shadowSize"in p&&t(5,l=p.shadowSize),"height"in p&&t(6,h=p.height),"shadowOffset"in p&&t(7,u=p.shadowOffset)},[n,i,r,a,c,l,h,u,d,o]}class kE extends Un{constructor(e){super(),On(this,e,BE,FE,Nn,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function zE(s,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:r=[0,0,0]}=e;const{scene:o,invalidate:a}=xi(),c=new sg(n,i);return c.position.x=r[0],c.position.y=r[1],c.position.z=r[2],o.add(c),Yn(()=>{o.remove(c)}),s.$$set=l=>{"size"in l&&t(0,n=l.size),"divisions"in l&&t(1,i=l.divisions),"position"in l&&t(2,r=l.position)},[n,i,r]}class VE extends Un{constructor(e){super(),On(this,e,zE,null,Nn,{size:0,divisions:1,position:2})}}function HE(s){let e,t;return e=new b1({props:{enableZoom:!0}}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},p:zh,i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function tp(s){let e,t;return e=new UE({}),{c(){ut(e.$$.fragment)},l(n){ft(e.$$.fragment,n)},m(n,i){dt(e,n,i),t=!0},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){be(e.$$.fragment,n),t=!1},d(n){pt(e,n)}}}function GE(s){let e,t,n,i,r,o,a,c,l,h,u,f,d,p;e=new Vt.PointLight({props:{color:"white",intensity:.2,position:[0,5,0]}}),n=new Vt.PointLight({props:{color:"blue",intensity:.5,position:[5,5,0]}}),r=new Vt.PointLight({props:{color:"yellow",intensity:.5,position:[-5,-5,0]}}),a=new Vt.PerspectiveCamera({props:{makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[HE,({ref:m})=>({8:m}),({ref:m})=>m?256:0]},$$scope:{ctx:s}}}),l=new kE({props:{preset_name:"soft"}}),u=new VE({});let _=s[2]&&tp();return{c(){ut(e.$$.fragment),t=dn(),ut(n.$$.fragment),i=dn(),ut(r.$$.fragment),o=dn(),ut(a.$$.fragment),c=dn(),ut(l.$$.fragment),h=dn(),ut(u.$$.fragment),f=dn(),_&&_.c(),d=kt()},l(m){ft(e.$$.fragment,m),t=pn(m),ft(n.$$.fragment,m),i=pn(m),ft(r.$$.fragment,m),o=pn(m),ft(a.$$.fragment,m),c=pn(m),ft(l.$$.fragment,m),h=pn(m),ft(u.$$.fragment,m),f=pn(m),_&&_.l(m),d=kt()},m(m,g){dt(e,m,g),Ct(m,t,g),dt(n,m,g),Ct(m,i,g),dt(r,m,g),Ct(m,o,g),dt(a,m,g),Ct(m,c,g),dt(l,m,g),Ct(m,h,g),dt(u,m,g),Ct(m,f,g),_&&_.m(m,g),Ct(m,d,g),p=!0},p(m,g){const x={};g&512&&(x.$$scope={dirty:g,ctx:m}),a.$set(x),m[2]?_?g&4&&_e(_,1):(_=tp(),_.c(),_e(_,1),_.m(d.parentNode,d)):_&&(Mn(),be(_,1,1,()=>{_=null}),Sn())},i(m){p||(_e(e.$$.fragment,m),_e(n.$$.fragment,m),_e(r.$$.fragment,m),_e(a.$$.fragment,m),_e(l.$$.fragment,m),_e(u.$$.fragment,m),_e(_),p=!0)},o(m){be(e.$$.fragment,m),be(n.$$.fragment,m),be(r.$$.fragment,m),be(a.$$.fragment,m),be(l.$$.fragment,m),be(u.$$.fragment,m),be(_),p=!1},d(m){m&&(xt(t),xt(i),xt(o),xt(c),xt(h),xt(f),xt(d)),pt(e,m),pt(n,m),pt(r,m),pt(a,m),pt(l,m),pt(u,m),_&&_.d(m)}}}function WE(s){let e,t,n,i,r;return Ng(s[3]),t=new _w({props:{shadows:!0,size:{height:s[0],width:s[1]},rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[GE]},$$scope:{ctx:s}}}),{c(){e=ip("main"),ut(t.$$.fragment),this.h()},l(o){e=sp(o,"MAIN",{class:!0});var a=rp(e);ft(t.$$.fragment,a),a.forEach(xt),this.h()},h(){op(e,"class","main-content")},m(o,a){Ct(o,e,a),dt(t,e,null),n=!0,i||(r=Ug(window,"resize",s[3]),i=!0)},p(o,[a]){const c={};a&3&&(c.size={height:o[0],width:o[1]}),a&516&&(c.$$scope={dirty:a,ctx:o}),t.$set(c)},i(o){n||(_e(t.$$.fragment,o),n=!0)},o(o){be(t.$$.fragment,o),n=!1},d(o){o&&xt(e),pt(t),i=!1,r()}}}const XE="turtlebot3_burger";function qE(s,e,t){let n,i;rn(s,Og,u=>t(5,n=u)),rn(s,Fc,u=>t(2,i=u));let r=0,o=0,a=n.url.href;a=a.endsWith("/")?a.substring(0,a.length-1):a;const c=`turtlebot3_description/${XE}.xml`,l=new CE(`${a}/${c}`,a);Ro(async()=>{let f=await l.load();Fc.set(l.fromString(f))});function h(){t(0,r=window.innerHeight),t(1,o=window.innerWidth)}return[r,o,i,h]}class eA extends Un{constructor(e){super(),On(this,e,qE,WE,Nn,{})}}export{eA as component};
