var Mg=Object.defineProperty;var Sg=(r,e,t)=>e in r?Mg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Lt=(r,e,t)=>(Sg(r,typeof e!="symbol"?e+"":e,t),t);import{x as Bn,y as Fn,t as wg,z as kn,s as Pn,c as er,u as tr,g as nr,a as ir,b as nn,A as Eg,o as Eo,e as gu,B as Ja,C as Es,D as $i,E as Ga,i as Ld,n as $a,F as Nd,k as Ag}from"../chunks/scheduler.D8eNju6M.js";import{S as In,i as Ln,t as ye,a as we,u as lt,v as ut,w as ht,x as ft,e as Dd,c as Ud,d as Od,g as gt,o as Fd,j as vt,q as _n,n as vn,s as Kt,m as Ft,h as Qt,H as Ka,y as Qa,z as ec,A as Tg}from"../chunks/index.BFV-KelN.js";import{p as Cg}from"../chunks/stores.BDvbDDzs.js";import{d as _u,w as rn,r as Rg}from"../chunks/entry.DEmL1ZXK.js";function Ki(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function kd(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=e[s];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);r[s]=a}else for(const c in o)i[c]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Bd(r){return typeof r=="object"&&r!==null?r:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="163",Mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zd=0,Tl=1,Vd=2,Pg=3,Ig=0,vu=1,tc=2,fi=3,mi=0,Cn=1,ti=2,Ii=0,Lr=1,Cl=2,Rl=3,Pl=4,Hd=5,Zi=100,Gd=101,Wd=102,Xd=103,qd=104,Yd=200,Zd=201,jd=202,Jd=203,Wa=204,Xa=205,$d=206,Kd=207,Qd=208,ep=209,tp=210,np=211,ip=212,rp=213,sp=214,op=0,ap=1,cp=2,to=3,lp=4,up=5,hp=6,fp=7,To=0,dp=1,pp=2,Li=0,mp=1,gp=2,_p=3,yu=4,vp=5,yp=6,xp=7,Il="attached",bp="detached",nc=300,Di=301,Qi=302,no=303,io=304,Ps=306,Ri=1e3,On=1001,ro=1002,ln=1003,xu=1004,Lg=1004,ys=1005,Ng=1005,tn=1006,$s=1007,Dg=1007,ni=1008,Ug=1008,Ni=1009,Mp=1010,Sp=1011,bu=1012,Mu=1013,Or=1014,jn=1015,so=1016,Su=1017,wu=1018,Is=1020,wp=35902,Ep=1021,Ap=1022,Gn=1023,Tp=1024,Cp=1025,Nr=1026,As=1027,Eu=1028,Au=1029,Rp=1030,Tu=1031,Cu=1033,Oa=33776,Fa=33777,ka=33778,Ba=33779,Ll=35840,Nl=35841,Dl=35842,Ul=35843,Ru=36196,Ol=37492,Fl=37496,kl=37808,Bl=37809,zl=37810,Vl=37811,Hl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Zl=37818,jl=37819,Jl=37820,$l=37821,za=36492,Kl=36494,Ql=36495,Pp=36283,eu=36284,tu=36285,nu=36286,Ip=2200,Lp=2201,Np=2202,oo=2300,ao=2301,Va=2302,Cr=2400,Rr=2401,co=2402,ic=2500,Pu=2501,Og=0,Fg=1,kg=2,Dp=3200,Up=3201,rr=0,Op=1,Ti="",En="srgb",Oi="srgb-linear",rc="display-p3",Co="display-p3-linear",lo="linear",Ot="srgb",uo="rec709",ho="p3",Bg=0,wr=7680,zg=7681,Vg=7682,Hg=7683,Gg=34055,Wg=34056,Xg=5386,qg=512,Yg=513,Zg=514,jg=515,Jg=516,$g=517,Kg=518,iu=519,Fp=512,kp=513,Bp=514,Iu=515,zp=516,Vp=517,Hp=518,Gp=519,fo=35044,Qg=35048,e_=35040,t_=35045,n_=35049,i_=35041,r_=35046,s_=35050,o_=35042,a_="100",ru="300 es",di=2e3,po=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const Dr=Math.PI/180,Ts=180/Math.PI;function Wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function qt(r,e,t){return Math.max(e,Math.min(t,r))}function Lu(r,e){return(r%e+e)%e}function c_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function l_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function u_(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function h_(r,e=1){return e-Math.abs(Lu(r,e*2)-e)}function f_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function d_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function p_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function m_(r,e){return r+Math.random()*(e-r)}function g_(r){return r*(.5-Math.random())}function __(r){r!==void 0&&(gh=r);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(r){return r*Dr}function y_(r){return r*Ts}function x_(r){return(r&r-1)===0&&r!==0}function b_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function M_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function S_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*f,a*l);break;case"YZY":r.set(c*f,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*f,a*u,a*l);break;case"XZX":r.set(a*u,c*p,c*d,a*l);break;case"YXY":r.set(c*d,a*u,c*p,a*l);break;case"ZYZ":r.set(c*p,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ar={DEG2RAD:Dr,RAD2DEG:Ts,generateUUID:Wn,clamp:qt,euclideanModulo:Lu,mapLinear:c_,inverseLerp:l_,lerp:Ks,damp:u_,pingpong:h_,smoothstep:f_,smootherstep:d_,randInt:p_,randFloat:m_,randFloatSpread:g_,seededRandom:__,degToRad:v_,radToDeg:y_,isPowerOfTwo:x_,ceilPowerOfTwo:b_,floorPowerOfTwo:M_,setQuaternionFromProperEuler:S_,normalize:at,denormalize:Tn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,s,o,a,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],b=i[1],v=i[4],M=i[7],U=i[2],P=i[5],R=i[8];return s[0]=o*_+a*b+c*U,s[3]=o*m+a*v+c*P,s[6]=o*g+a*M+c*R,s[1]=l*_+u*b+h*U,s[4]=l*m+u*v+h*P,s[7]=l*g+u*M+h*R,s[2]=f*_+d*b+p*U,s[5]=f*m+d*v+p*P,s[8]=f*g+d*M+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new ot;function Wp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const w_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function xs(r,e){return new w_[r](e)}function mo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xp(){const r=mo("canvas");return r.style.display="block",r}const _h={};function qp(r){r in _h||(_h[r]=!0,console.warn(r))}const vh=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yh=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Oi]:{transfer:lo,primaries:uo,toReference:r=>r,fromReference:r=>r},[En]:{transfer:Ot,primaries:uo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Co]:{transfer:lo,primaries:ho,toReference:r=>r.applyMatrix3(yh),fromReference:r=>r.applyMatrix3(vh)},[rc]:{transfer:Ot,primaries:ho,toReference:r=>r.convertSRGBToLinear().applyMatrix3(yh),fromReference:r=>r.applyMatrix3(vh).convertLinearToSRGB()}},E_=new Set([Oi,Co]),Rt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!E_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ho[e].toReference,i=Ho[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ho[r].primaries},getTransfer:function(r){return r===Ti?lo:Ho[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class Yp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=mo("canvas")),Jr.width=e.width,Jr.height=e.height;const n=Jr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ws(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ws(t[n]/255)*255):t[n]=ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Pr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vc(i[o].image)):s.push(Vc(i[o]))}else s=Vc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T_=0;class Yt extends gi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=On,i=On,s=tn,o=ni,a=Gn,c=Ni,l=Yt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Wn(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=nc;Yt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,M=(d+1)/2,U=(g+1)/2,P=(u+f)/4,R=(h+_)/4,O=(p+m)/4;return v>M&&v>U?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=P/n,s=R/n):M>U?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=P/i,s=O/i):U<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(U),n=R/s,i=O/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((l+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Zp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sc extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C_ extends Xn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new sc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Nu extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class R_ extends Xn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Nu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==p){let m=1-a;const g=c*f+l*d+u*p+h*_,b=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const U=Math.sqrt(v),P=Math.atan2(U,g*b);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const M=a*b;if(c=c*m+f*M,l=l*m+d*M,u=u*m+p*M,h=h*m+_*M,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-a*d,e[t+2]=l*p+u*d+a*f-c*h,e[t+3]=u*p-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new N,xh=new un;class Rn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Wo.subVectors(this.max,ks),$r.subVectors(e.a,ks),Kr.subVectors(e.b,ks),Qr.subVectors(e.c,ks),Bi.subVectors(Kr,$r),zi.subVectors(Qr,Kr),lr.subVectors($r,Qr);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-lr.z,lr.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,lr.z,0,-lr.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-lr.y,lr.x,0];return!Gc(t,$r,Kr,Qr,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,$r,Kr,Qr,Wo))?!1:(Xo.crossVectors(Bi,zi),t=[Xo.x,Xo.y,Xo.z],Gc(t,$r,Kr,Qr,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,Go=new Rn,$r=new N,Kr=new N,Qr=new N,Bi=new N,zi=new N,lr=new N,ks=new N,Wo=new N,Xo=new N,ur=new N;function Gc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ur.fromArray(r,s);const a=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),c=e.dot(ur),l=t.dot(ur),u=n.dot(ur);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const P_=new Rn,Bs=new N,Wc=new N;class gn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):P_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Wc)),this.expandByPoint(Bs.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new N,Xc=new N,qo=new N,Vi=new N,qc=new N,Yo=new N,Yc=new N;class Hr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Xc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Vi.dot(this.direction),c=-Vi.dot(qo),l=Vi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,p;if(u>0)if(h=o*c-a,f=o*a-c,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xc).addScaledVector(qo,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,s){qc.subVectors(t,e),Yo.subVectors(n,e),Yc.crossVectors(qc,Yo);let o=this.direction.dot(Yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const c=a*this.direction.dot(Yo.crossVectors(Vi,Yo));if(c<0)return null;const l=a*this.direction.dot(qc.cross(Vi));if(l<0||c+l>o)return null;const u=-a*Vi.dot(Yc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,m)}set(e,t,n,i,s,o,a,c,l,u,h,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,L_)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Hi.crossVectors(n,zn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Hi.crossVectors(n,zn)),Hi.normalize(),Zo.crossVectors(zn,Hi),i[0]=Hi.x,i[4]=Zo.x,i[8]=zn.x,i[1]=Hi.y,i[5]=Zo.y,i[9]=zn.y,i[2]=Hi.z,i[6]=Zo.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],b=n[3],v=n[7],M=n[11],U=n[15],P=i[0],R=i[4],O=i[8],A=i[12],y=i[1],F=i[5],X=i[9],k=i[13],q=i[2],ee=i[6],B=i[10],he=i[14],z=i[3],re=i[7],ae=i[11],pe=i[15];return s[0]=o*P+a*y+c*q+l*z,s[4]=o*R+a*F+c*ee+l*re,s[8]=o*O+a*X+c*B+l*ae,s[12]=o*A+a*k+c*he+l*pe,s[1]=u*P+h*y+f*q+d*z,s[5]=u*R+h*F+f*ee+d*re,s[9]=u*O+h*X+f*B+d*ae,s[13]=u*A+h*k+f*he+d*pe,s[2]=p*P+_*y+m*q+g*z,s[6]=p*R+_*F+m*ee+g*re,s[10]=p*O+_*X+m*B+g*ae,s[14]=p*A+_*k+m*he+g*pe,s[3]=b*P+v*y+M*q+U*z,s[7]=b*R+v*F+M*ee+U*re,s[11]=b*O+v*X+M*B+U*ae,s[15]=b*A+v*k+M*he+U*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*c*h-i*l*h-s*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+s*o*f-i*o*d+i*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+g*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],b=h*m*l-_*f*l+_*c*d-a*m*d-h*c*g+a*f*g,v=p*f*l-u*m*l-p*c*d+o*m*d+u*c*g-o*f*g,M=u*_*l-p*h*l+p*a*d-o*_*d-u*a*g+o*h*g,U=p*h*c-u*_*c-p*a*f+o*_*f+u*a*m-o*h*m,P=t*b+n*v+i*M+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=b*R,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*g-n*f*g)*R,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*g+n*c*g)*R,e[3]=(h*c*s-a*f*s-h*i*l+n*f*l+a*i*d-n*c*d)*R,e[4]=v*R,e[5]=(u*m*s-p*f*s+p*i*d-t*m*d-u*i*g+t*f*g)*R,e[6]=(p*c*s-o*m*s-p*i*l+t*m*l+o*i*g-t*c*g)*R,e[7]=(o*f*s-u*c*s+u*i*l-t*f*l-o*i*d+t*c*d)*R,e[8]=M*R,e[9]=(p*h*s-u*_*s-p*n*d+t*_*d+u*n*g-t*h*g)*R,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*g+t*a*g)*R,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*d-t*a*d)*R,e[12]=U*R,e[13]=(u*_*i-p*h*i+p*n*f-t*_*f-u*n*m+t*h*m)*R,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,p=s*h,_=o*u,m=o*h,g=a*h,b=c*l,v=c*u,M=c*h,U=n.x,P=n.y,R=n.z;return i[0]=(1-(_+g))*U,i[1]=(d+M)*U,i[2]=(p-v)*U,i[3]=0,i[4]=(d-M)*P,i[5]=(1-(f+g))*P,i[6]=(m+b)*P,i[7]=0,i[8]=(p+v)*R,i[9]=(m-b)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=es.set(i[0],i[1],i[2]).length();const o=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Kn.copy(this);const l=1/s,u=1/o,h=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=di){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(a===di)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===po)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=di){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*l,d=(n+i)*u;let p,_;if(a===di)p=(o+s)*h,_=-2*h;else if(a===po)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new N,Kn=new Ve,I_=new N(0,0,0),L_=new N(1,1,1),Hi=new N,Zo=new N,zn=new N,bh=new Ve,Mh=new un;class qn{constructor(e=0,t=0,n=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const Sh=new N,ts=new un,Mi=new Ve,jo=new N,zs=new N,D_=new N,U_=new un,wh=new N(1,0,0),Eh=new N(0,1,0),Ah=new N(0,0,1),Th={type:"added"},O_={type:"removed"},ns={type:"childadded",child:null},Zc={type:"childremoved",child:null};class At extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new N,t=new qn,n=new un,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ot}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(zs,jo,this.up):Mi.lookAt(jo,zs,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Mi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Th),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Th),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,D_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new N(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new N,Si=new N,jc=new N,wi=new N,is=new N,rs=new N,Ch=new N,Jc=new N,$c=new N,Kc=new N;class Hn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qn.subVectors(i,t),Si.subVectors(n,t),jc.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Si),c=Qn.dot(jc),l=Si.dot(Si),u=Si.dot(jc),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,p=(o*u-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),Si.subVectors(e,t),Qn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Qn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;is.subVectors(i,n),rs.subVectors(s,n),Jc.subVectors(e,n);const c=is.dot(Jc),l=rs.dot(Jc);if(c<=0&&l<=0)return t.copy(n);$c.subVectors(e,i);const u=is.dot($c),h=rs.dot($c);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(is,o);Kc.subVectors(e,s);const d=is.dot(Kc),p=rs.dot(Kc);if(p>=0&&d<=p)return t.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(rs,a);const m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Ch.subVectors(s,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(Ch,a);const g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Qc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=Lu(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Qc(o,s,e+1/3),this.g=Qc(o,s,e),this.b=Qc(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Rt.fromWorkingColorSpace(pn.copy(this),e),Math.round(qt(pn.r*255,0,255))*65536+Math.round(qt(pn.g*255,0,255))*256+Math.round(qt(pn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,s=pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=En){Rt.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Jo);const n=Ks(Gi.h,Jo.h,t),i=Ks(Gi.s,Jo.s,t),s=Ks(Gi.l,Jo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ce;Ce.NAMES=jp;let F_=0;class yn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Lr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ci=k_();function k_(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Un(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=qt(r,-65504,65504),Ci.floatView[0]=r;const e=Ci.uint32View[0],t=e>>23&511;return Ci.baseTable[t]+((e&8388607)>>Ci.shiftTable[t])}function js(r){const e=r>>10;return Ci.uint32View[0]=Ci.mantissaTable[Ci.offsetTable[e]+(r&1023)]+Ci.exponentTable[e],Ci.floatView[0]}const B_={toHalfFloat:Un,fromHalfFloat:js},$t=new N,$o=new ie;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}}class z_ extends Tt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class V_ extends Tt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class H_ extends Tt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class G_ extends Tt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Du extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class W_ extends Tt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Uu extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class X_ extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=js(this.array[e*this.itemSize]);return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=Un(t),this}getY(e){let t=js(this.array[e*this.itemSize+1]);return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=Un(t),this}getZ(e){let t=js(this.array[e*this.itemSize+2]);return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=Un(t),this}getW(e){let t=js(this.array[e*this.itemSize+3]);return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=Un(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=Un(t),this.array[e+1]=Un(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=Un(t),this.array[e+1]=Un(n),this.array[e+2]=Un(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=Un(t),this.array[e+1]=Un(n),this.array[e+2]=Un(i),this.array[e+3]=Un(s),this}}class De extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let q_=0;const Zn=new Ve,el=new At,ss=new N,Vn=new Rn,Vs=new Rn,cn=new N;class st extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?Uu:Du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new De(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Vn.min,Vs.min),Vn.expandByPoint(cn),cn.addVectors(Vn.max,Vs.max),Vn.expandByPoint(cn)):(Vn.expandByPoint(Vs.min),Vn.expandByPoint(Vs.max))}Vn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)cn.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(e,l),cn.add(ss)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<n.count;O++)a[O]=new N,c[O]=new N;const l=new N,u=new N,h=new N,f=new ie,d=new ie,p=new ie,_=new N,m=new N;function g(O,A,y){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,O),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,y),u.sub(l),h.sub(l),d.sub(f),p.sub(f);const F=1/(d.x*p.y-p.x*d.y);isFinite(F)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(F),a[O].add(_),a[A].add(_),a[y].add(_),c[O].add(m),c[A].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,A=b.length;O<A;++O){const y=b[O],F=y.start,X=y.count;for(let k=F,q=F+X;k<q;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new N,M=new N,U=new N,P=new N;function R(O){U.fromBufferAttribute(i,O),P.copy(U);const A=a[O];v.copy(A),v.sub(U.multiplyScalar(U.dot(A))).normalize(),M.crossVectors(P,A);const F=M.dot(c[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,F)}for(let O=0,A=b.length;O<A;++O){const y=b[O],F=y.start,X=y.count;for(let k=F,q=F+X;k<q;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let g=0;g<u;g++)f[p++]=l[d++]}return new Tt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new st,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new Ve,hr=new Hr,Ko=new gn,Ph=new N,os=new N,as=new N,cs=new N,tl=new N,Qo=new N,ea=new ie,ta=new ie,na=new ie,Ih=new N,Lh=new N,Nh=new N,ia=new N,ra=new N;class Wt extends At{constructor(e=new st,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(tl.fromBufferAttribute(h,e),o?Qo.addScaledVector(tl,u):Qo.addScaledVector(tl.sub(t),u))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Ko.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ko,Ph)===null||hr.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,U=v;M<U;M+=3){const P=a.getX(M),R=a.getX(M+1),O=a.getX(M+2);i=sa(this,g,e,n,l,u,h,P,R,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const b=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=sa(this,o,e,n,l,u,h,b,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],b=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,U=v;M<U;M+=3){const P=M,R=M+1,O=M+2;i=sa(this,g,e,n,l,u,h,P,R,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const b=m,v=m+1,M=m+2;i=sa(this,o,e,n,l,u,h,b,v,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Y_(r,e,t,n,i,s,o,a){let c;if(e.side===Cn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===mi,a),c===null)return null;ra.copy(a),ra.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:r}}function sa(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,os),r.getVertexPosition(c,as),r.getVertexPosition(l,cs);const u=Y_(r,e,t,n,os,as,cs,ia);if(u){i&&(ea.fromBufferAttribute(i,a),ta.fromBufferAttribute(i,c),na.fromBufferAttribute(i,l),u.uv=Hn.getInterpolation(ia,os,as,cs,ea,ta,na,new ie)),s&&(ea.fromBufferAttribute(s,a),ta.fromBufferAttribute(s,c),na.fromBufferAttribute(s,l),u.uv1=Hn.getInterpolation(ia,os,as,cs,ea,ta,na,new ie)),o&&(Ih.fromBufferAttribute(o,a),Lh.fromBufferAttribute(o,c),Nh.fromBufferAttribute(o,l),u.normal=Hn.getInterpolation(ia,os,as,cs,Ih,Lh,Nh,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Hn.getNormal(os,as,cs,h.normal),u.face=h}return u}class Gr extends st{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function p(_,m,g,b,v,M,U,P,R,O,A){const y=M/R,F=U/O,X=M/2,k=U/2,q=P/2,ee=R+1,B=O+1;let he=0,z=0;const re=new N;for(let ae=0;ae<B;ae++){const pe=ae*F-k;for(let Re=0;Re<ee;Re++){const Ee=Re*y-X;re[_]=Ee*b,re[m]=pe*v,re[g]=q,l.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[g]=P>0?1:-1,u.push(re.x,re.y,re.z),h.push(Re/R),h.push(1-ae/O),he+=1}}for(let ae=0;ae<O;ae++)for(let pe=0;pe<R;pe++){const Re=f+pe+ee*ae,Ee=f+pe+ee*(ae+1),V=f+(pe+1)+ee*(ae+1),$=f+(pe+1)+ee*ae;c.push(Re,Ee,$),c.push(Ee,V,$),z+=6}a.addGroup(d,z,A),d+=z,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=Cs(r[t]);for(const i in n)e[i]=n[i]}return e}function Z_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const $p={clone:Cs,merge:Sn};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=J_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ac extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new N,Dh=new ie,Uh=new ie;class en extends ac{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Uh),t.subVectors(Uh,Dh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,us=1;class Kp extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(ls,us,e,t);i.layers=this.layers,this.add(i);const s=new en(ls,us,e,t);s.layers=this.layers,this.add(s);const o=new en(ls,us,e,t);o.layers=this.layers,this.add(o);const a=new en(ls,us,e,t);a.layers=this.layers,this.add(a);const c=new en(ls,us,e,t);c.layers=this.layers,this.add(c);const l=new en(ls,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ro extends Yt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qp extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ro(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gr(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Ii});s.uniforms.tEquirect.value=t;const o=new Wt(i,s),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=tn),new Kp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const nl=new N,$_=new N,K_=new ot;class Ai{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nl.subVectors(n,t).cross($_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K_.getNormalMatrix(e),i=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new gn,oa=new N;class Po{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],g=i[12],b=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-s,f-l,m-d,M-g).normalize(),n[1].setComponents(c+s,f+l,m+d,M+g).normalize(),n[2].setComponents(c+o,f+u,m+p,M+b).normalize(),n[3].setComponents(c-o,f-u,m-p,M-b).normalize(),n[4].setComponents(c-a,f-h,m-_,M-v).normalize(),t===di)n[5].setComponents(c+a,f+h,m+_,M+v).normalize();else if(t===po)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Q_(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(r.bindBuffer(l,a),h.count===-1&&f.length===0&&r.bufferSubData(l,0,u),f.length!==0){for(let d=0,p=f.length;d<p;d++){const _=f[d];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class Wr extends st{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const b=g*f-o;for(let v=0;v<l;v++){const M=v*h-s;p.push(M,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<a;b++){const v=b+l*g,M=b+l*(g+1),U=b+1+l*(g+1),P=b+1+l*g;d.push(v,M,P),d.push(M,U,P)}this.setIndex(d),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,p0=`#ifdef USE_BUMPMAP
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`
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
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
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
}`,H0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,Q0=`struct PhysicalMaterial {
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
}`,ev=`
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uv=`#if defined( USE_POINTS_UV )
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
#endif`,hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mv=`#ifdef USE_MORPHNORMALS
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
#endif`,gv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return shadow;
	}
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
	#endif
}`,cy=`#define DISTANCE
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
}`,ly=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,yy=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,Sy=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Cy=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Ly=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:r0,alphatest_pars_fragment:s0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:c0,batching_vertex:l0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:f0,iridescence_fragment:d0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:y0,color_pars_fragment:x0,color_pars_vertex:b0,color_vertex:M0,common:S0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:E0,displacementmap_pars_vertex:A0,displacementmap_vertex:T0,emissivemap_fragment:C0,emissivemap_pars_fragment:R0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:N0,envmap_pars_fragment:D0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:Y0,envmap_vertex:O0,fog_vertex:F0,fog_pars_vertex:k0,fog_fragment:B0,fog_pars_fragment:z0,gradientmap_pars_fragment:V0,lightmap_fragment:H0,lightmap_pars_fragment:G0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:Z0,lights_toon_pars_fragment:j0,lights_phong_fragment:J0,lights_phong_pars_fragment:$0,lights_physical_fragment:K0,lights_physical_pars_fragment:Q0,lights_fragment_begin:ev,lights_fragment_maps:tv,lights_fragment_end:nv,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:rv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:ov,map_fragment:av,map_pars_fragment:cv,map_particle_fragment:lv,map_particle_pars_fragment:uv,metalnessmap_fragment:hv,metalnessmap_pars_fragment:fv,morphinstance_vertex:dv,morphcolor_vertex:pv,morphnormal_vertex:mv,morphtarget_pars_vertex:gv,morphtarget_vertex:_v,normal_fragment_begin:vv,normal_fragment_maps:yv,normal_pars_fragment:xv,normal_pars_vertex:bv,normal_vertex:Mv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:Av,iridescence_pars_fragment:Tv,opaque_fragment:Cv,packing:Rv,premultiplied_alpha_fragment:Pv,project_vertex:Iv,dithering_fragment:Lv,dithering_pars_fragment:Nv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Ov,shadowmap_pars_vertex:Fv,shadowmap_vertex:kv,shadowmask_pars_fragment:Bv,skinbase_vertex:zv,skinning_pars_vertex:Vv,skinning_vertex:Hv,skinnormal_vertex:Gv,specularmap_fragment:Wv,specularmap_pars_fragment:Xv,tonemapping_fragment:qv,tonemapping_pars_fragment:Yv,transmission_fragment:Zv,transmission_pars_fragment:jv,uv_pars_fragment:Jv,uv_pars_vertex:$v,uv_vertex:Kv,worldpos_vertex:Qv,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:ry,cube_frag:sy,depth_vert:oy,depth_frag:ay,distanceRGBA_vert:cy,distanceRGBA_frag:ly,equirect_vert:uy,equirect_frag:hy,linedashed_vert:fy,linedashed_frag:dy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:yy,meshnormal_vert:xy,meshnormal_frag:by,meshphong_vert:My,meshphong_frag:Sy,meshphysical_vert:wy,meshphysical_frag:Ey,meshtoon_vert:Ay,meshtoon_frag:Ty,points_vert:Cy,points_frag:Ry,shadow_vert:Py,shadow_frag:Iy,sprite_vert:Ly,sprite_frag:Ny},Te={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ei={basic:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Sn([Te.points,Te.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Sn([Te.common,Te.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Sn([Te.sprite,Te.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Sn([Te.common,Te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Sn([Te.lights,Te.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ei.physical={uniforms:Sn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const aa={r:0,b:0,g:0},dr=new qn,Dy=new Ve;function Uy(r,e,t,n,i,s,o){const a=new Ce(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function p(m,g){let b=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),b=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ps)?(u===void 0&&(u=new Wt(new Gr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Cs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),dr.copy(g.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(dr)),u.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ot,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Wt(new Wr(2,2),new Yn({name:"BackgroundMaterial",uniforms:Cs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,g){m.getRGB(aa,Jp(r)),n.buffers.color.setClear(aa.r,aa.g,aa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(m,g=1){a.set(m),c=g,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:p}}function Oy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(y,F,X,k,q){let ee=!1;const B=h(k,X,F);s!==B&&(s=B,l(s.object)),ee=d(y,k,X,q),ee&&p(y,k,X,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,M(y,F,X,k),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function u(y){return r.deleteVertexArray(y)}function h(y,F,X){const k=X.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let ee=q[F.id];ee===void 0&&(ee={},q[F.id]=ee);let B=ee[k];return B===void 0&&(B=f(c()),ee[k]=B),B}function f(y){const F=[],X=[],k=[];for(let q=0;q<t;q++)F[q]=0,X[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,F,X,k){const q=s.attributes,ee=F.attributes;let B=0;const he=X.getAttributes();for(const z in he)if(he[z].location>=0){const ae=q[z];let pe=ee[z];if(pe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function p(y,F,X,k){const q={},ee=F.attributes;let B=0;const he=X.getAttributes();for(const z in he)if(he[z].location>=0){let ae=ee[z];ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),q[z]=pe,B++}s.attributes=q,s.attributesNum=B,s.index=k}function _(){const y=s.newAttributes;for(let F=0,X=y.length;F<X;F++)y[F]=0}function m(y){g(y,0)}function g(y,F){const X=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;X[y]=1,k[y]===0&&(r.enableVertexAttribArray(y),k[y]=1),q[y]!==F&&(r.vertexAttribDivisor(y,F),q[y]=F)}function b(){const y=s.newAttributes,F=s.enabledAttributes;for(let X=0,k=F.length;X<k;X++)F[X]!==y[X]&&(r.disableVertexAttribArray(X),F[X]=0)}function v(y,F,X,k,q,ee,B){B===!0?r.vertexAttribIPointer(y,F,X,q,ee):r.vertexAttribPointer(y,F,X,k,q,ee)}function M(y,F,X,k){_();const q=k.attributes,ee=X.getAttributes(),B=F.defaultAttributeValues;for(const he in ee){const z=ee[he];if(z.location>=0){let re=q[he];if(re===void 0&&(he==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),he==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const ae=re.normalized,pe=re.itemSize,Re=e.get(re);if(Re===void 0)continue;const Ee=Re.buffer,V=Re.type,$=Re.bytesPerElement,te=V===r.INT||V===r.UNSIGNED_INT||re.gpuType===Mu;if(re.isInterleavedBufferAttribute){const Q=re.data,Ae=Q.stride,le=re.offset;if(Q.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)g(z.location+Le,Q.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Le=0;Le<z.locationSize;Le++)m(z.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let Le=0;Le<z.locationSize;Le++)v(z.location+Le,pe/z.locationSize,V,ae,Ae*$,(le+pe/z.locationSize*Le)*$,te)}else{if(re.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)g(z.location+Q,re.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<z.locationSize;Q++)m(z.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let Q=0;Q<z.locationSize;Q++)v(z.location+Q,pe/z.locationSize,V,ae,pe*$,pe/z.locationSize*Q*$,te)}}else if(B!==void 0){const ae=B[he];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(z.location,ae);break;case 3:r.vertexAttrib3fv(z.location,ae);break;case 4:r.vertexAttrib4fv(z.location,ae);break;default:r.vertexAttrib1fv(z.location,ae)}}}}b()}function U(){O();for(const y in n){const F=n[y];for(const X in F){const k=F[X];for(const q in k)u(k[q].object),delete k[q];delete F[X]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const F=n[y.id];for(const X in F){const k=F[X];for(const q in k)u(k[q].object),delete k[q];delete F[X]}delete n[y.id]}function R(y){for(const F in n){const X=n[F];if(X[y.id]===void 0)continue;const k=X[y.id];for(const q in k)u(k[q].object),delete k[q];delete X[y.id]}}function O(){A(),o=!0,s!==i&&(s=i,l(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Fy(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(c[f],l[f]);else{h.multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ky(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=t.logarithmicDepthBuffer===!0,l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),m=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:g,maxSamples:b}}function By(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ai,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!i||p===null||p.length===0||s&&!m)s?u(null):l();else{const b=s?0:n,v=b*4;let M=g.clippingState||null;c.value=M,M=u(p,f,v,d);for(let U=0;U!==v;++U)M[U]=t[U];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zy(r){let e=new WeakMap;function t(o,a){return a===no?o.mapping=Di:a===io&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===no||a===io)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qp(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ls extends ac{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bs=4,Oh=[.125,.215,.35,.446,.526,.582],Tr=20,il=new Ls,Fh=new Ce;let rl=null,sl=0,ol=0,al=!1;const Er=(1+Math.sqrt(5))/2,hs=1/Er,kh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Er,hs),new N(0,Er,-hs),new N(hs,0,Er),new N(-hs,0,Er),new N(Er,hs,0),new N(-Er,hs,0)];class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,sl,ol),this._renderer.xr.enabled=al,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:so,format:Gn,colorSpace:Oi,depthBuffer:!1},i=Bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(s)),this._blurMaterial=Hy(s,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i){const a=new en(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Li,u.autoClear=!1;const d=new ii({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),p=new Wt(new Gr,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Fh),_=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):b===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const v=this._cubeSize;ca(i,b*v,g>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ca(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=kh[(i-1)%kh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Tr;m>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);const g=[];let b=0;for(let R=0;R<Tr;++R){const O=R/_,A=Math.exp(-O*O/2);g.push(A),R===0?b+=A:R<m&&(b+=2*A)}for(let R=0;R<g.length;R++)g[R]=g[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const M=this._sizeLods[i],U=3*M*(i>v-bs?i-v+bs:0),P=4*(this._cubeSize-M);ca(t,U,P,3*M,2*M),c.setRenderTarget(t),c.render(h,il)}}function Vy(r){const e=[],t=[],n=[];let i=r;const s=r-bs+1+Oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-bs?c=Oh[o-r+bs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,m=2,g=1,b=new Float32Array(_*p*d),v=new Float32Array(m*p*d),M=new Float32Array(g*p*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,O=P>2?0:-1,A=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];b.set(A,_*p*P),v.set(f,m*p*P);const y=[P,P,P,P,P,P];M.set(y,g*p*P)}const U=new st;U.setAttribute("position",new Tt(b,_)),U.setAttribute("uv",new Tt(v,m)),U.setAttribute("faceIndex",new Tt(M,g)),e.push(U),i>bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bh(r,e,t){const n=new Xn(r,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hy(r,e,t){const n=new Float32Array(Tr),i=new N(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function zh(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Vh(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function Gy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===no||c===io,u=c===Di||c===Qi;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new su(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new su(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let v=0,M=b.length;v<M;v+=3){const U=b[v+0],P=b[v+1],R=b[v+2];f.push(U,P,P,R,R,U)}}else if(p!==void 0){const b=p.array;_=p.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const U=v+0,P=v+1,R=v+2;f.push(U,P,P,R,R,U)}}else return;const m=new(Wp(f)?Uu:Du)(f,1);m.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function qy(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_]/o,f[_]);else{p.multiDrawElementsWEBGL(n,f,0,s,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Yy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zy(r,e,t){const n=new WeakMap,i=new It;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let A=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*U*4*h),R=new sc(P,M,U,h);R.type=jn,R.needsUpdate=!0;const O=v*4;for(let y=0;y<h;y++){const F=m[y],X=g[y],k=b[y],q=M*U*4*y;for(let ee=0;ee<F.count;ee++){const B=ee*O;d===!0&&(i.fromBufferAttribute(F,ee),P[q+B+0]=i.x,P[q+B+1]=i.y,P[q+B+2]=i.z,P[q+B+3]=0),p===!0&&(i.fromBufferAttribute(X,ee),P[q+B+4]=i.x,P[q+B+5]=i.y,P[q+B+6]=i.z,P[q+B+7]=0),_===!0&&(i.fromBufferAttribute(k,ee),P[q+B+8]=i.x,P[q+B+9]=i.y,P[q+B+10]=i.z,P[q+B+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new ie(M,U)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function jy(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Fu extends Yt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Nr&&(n=Or),n===void 0&&u===As&&(n=Is),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tm=new Yt,nm=new Fu(1,1);nm.compareFunction=Iu;const im=new sc,rm=new Nu,sm=new Ro,Hh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Ns(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Hh[i];if(s===void 0&&(s=new Float32Array(i),Hh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cc(r,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $y(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function Ky(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function Qy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;qh.set(n),r.uniformMatrix2fv(this.addr,!1,qh),on(t,n)}}function tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Xh.set(n),r.uniformMatrix3fv(this.addr,!1,Xh),on(t,n)}}function nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Wh.set(n),r.uniformMatrix4fv(this.addr,!1,Wh),on(t,n)}}function ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function ax(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function hx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?nm:tm;t.setTexture2D(e||s,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rm,i)}function dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sm,i)}function px(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||im,i)}function mx(r){switch(r){case 5126:return Jy;case 35664:return $y;case 35665:return Ky;case 35666:return Qy;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return cx;case 36295:return lx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(r,e){r.uniform1fv(this.addr,e)}function _x(r,e){const t=Ns(e,this.size,2);r.uniform2fv(this.addr,t)}function vx(r,e){const t=Ns(e,this.size,3);r.uniform3fv(this.addr,t)}function yx(r,e){const t=Ns(e,this.size,4);r.uniform4fv(this.addr,t)}function xx(r,e){const t=Ns(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bx(r,e){const t=Ns(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Mx(r,e){const t=Ns(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sx(r,e){r.uniform1iv(this.addr,e)}function wx(r,e){r.uniform2iv(this.addr,e)}function Ex(r,e){r.uniform3iv(this.addr,e)}function Ax(r,e){r.uniform4iv(this.addr,e)}function Tx(r,e){r.uniform1uiv(this.addr,e)}function Cx(r,e){r.uniform2uiv(this.addr,e)}function Rx(r,e){r.uniform3uiv(this.addr,e)}function Px(r,e){r.uniform4uiv(this.addr,e)}function Ix(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||tm,s[o])}function Lx(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rm,s[o])}function Nx(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sm,s[o])}function Dx(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||im,s[o])}function Ux(r){switch(r){case 5126:return gx;case 35664:return _x;case 35665:return vx;case 35666:return yx;case 35674:return xx;case 35675:return bx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Tx;case 36294:return Cx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Dx}}class Ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}}class kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Yh(r,e){r.seq.push(e),r.map[e.id]=e}function Bx(r,e,t){const n=r.name,i=n.length;for(cl.lastIndex=0;;){const s=cl.exec(n),o=cl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yh(t,l===void 0?new Ox(a,r,e):new Fx(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new kx(a),Yh(t,h)),t=h}}}class Ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Bx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const zx=37297;let Vx=0;function Hx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gx(r){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(r);let n;switch(e===t?n="":e===ho&&t===uo?n="LinearDisplayP3ToLinearSRGB":e===uo&&t===ho&&(n="LinearSRGBToLinearDisplayP3"),r){case Oi:case Co:return[n,"LinearTransferOETF"];case En:case rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function jh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Hx(r.getShaderSource(e),o)}else return i}function Wx(r,e){const t=Gx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xx(r,e){let t;switch(e){case mp:t="Linear";break;case gp:t="Reinhard";break;case _p:t="OptimizedCineon";break;case yu:t="ACESFilmic";break;case yp:t="AgX";break;case xp:t="Neutral";break;case vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Yx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Js(r){return r!==""}function Jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(r){return r.replace(jx,$x)}const Jx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $x(r,e){let t=Ke[e];if(t===void 0){const n=Jx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(r){return r.replace(Kx,Qx)}function Qx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Di:case Qi:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case To:e="ENVMAP_BLENDING_MULTIPLY";break;case dp:e="ENVMAP_BLENDING_MIX";break;case pp:e="ENVMAP_BLENDING_ADD";break}return e}function rb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=eb(t),l=tb(t),u=nb(t),h=ib(t),f=rb(t),d=qx(t),p=Yx(s),_=i.createProgram();let m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Js).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Js).join(`
`),g.length>0&&(g+=`
`)):(m=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),g=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Li?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=ou(o),o=Jh(o,t),o=$h(o,t),a=ou(a),a=Jh(a,t),a=$h(a,t),o=Kh(o),a=Kh(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=b+m+o,M=b+g+a,U=Zh(i,i.VERTEX_SHADER,v),P=Zh(i,i.FRAGMENT_SHADER,M);i.attachShader(_,U),i.attachShader(_,P),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(F){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(U).trim(),q=i.getShaderInfoLog(P).trim();let ee=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,U,P);else{const he=jh(i,U,"vertex"),z=jh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+he+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||q==="")&&(B=!1);B&&(F.diagnostics={runnable:ee,programLog:X,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:g}})}i.deleteShader(U),i.deleteShader(P),O=new Ha(i,_),A=Zx(i,_)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,zx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=P,this}let ob=0;class ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cb(e),t.set(e,n)),n}}class cb{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}}function lb(r,e,t,n,i,s,o){const a=new oc,c=new ab,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,y,F,X,k){const q=X.fog,ee=k.geometry,B=A.isMeshStandardMaterial?X.environment:null,he=(A.isMeshStandardMaterial?t:e).get(A.envMap||B),z=he&&he.mapping===Ps?he.image.height:null,re=p[A.type];A.precision!==null&&(d=i.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const ae=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Re=0;ee.morphAttributes.position!==void 0&&(Re=1),ee.morphAttributes.normal!==void 0&&(Re=2),ee.morphAttributes.color!==void 0&&(Re=3);let Ee,V,$,te;if(re){const Zt=ei[re];Ee=Zt.vertexShader,V=Zt.fragmentShader}else Ee=A.vertexShader,V=A.fragmentShader,c.update(A),$=c.getVertexShaderID(A),te=c.getFragmentShaderID(A);const Q=r.getRenderTarget(),Ae=k.isInstancedMesh===!0,le=k.isBatchedMesh===!0,Le=!!A.map,G=!!A.matcap,fe=!!he,ue=!!A.aoMap,xe=!!A.lightMap,_e=!!A.bumpMap,ve=!!A.normalMap,D=!!A.displacementMap,E=!!A.emissiveMap,W=!!A.metalnessMap,ne=!!A.roughnessMap,oe=A.anisotropy>0,de=A.clearcoat>0,Ye=A.iridescence>0,me=A.sheen>0,He=A.transmission>0,je=oe&&!!A.anisotropyMap,be=de&&!!A.clearcoatMap,Ne=de&&!!A.clearcoatNormalMap,Qe=de&&!!A.clearcoatRoughnessMap,Fe=Ye&&!!A.iridescenceMap,ke=Ye&&!!A.iridescenceThicknessMap,dt=me&&!!A.sheenColorMap,pt=me&&!!A.sheenRoughnessMap,yt=!!A.specularMap,_t=!!A.specularColorMap,xt=!!A.specularIntensityMap,Xe=He&&!!A.transmissionMap,x=He&&!!A.thicknessMap,Y=!!A.gradientMap,ce=!!A.alphaMap,Me=A.alphaTest>0,Ue=!!A.alphaHash,mt=!!A.extensions;let ct=Li;A.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ct=r.toneMapping);const Nt={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:Ee,fragmentShader:V,defines:A.defines,customVertexShaderID:$,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:le,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,instancingMorph:Ae&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Oi,alphaToCoverage:!!A.alphaToCoverage,map:Le,matcap:G,envMap:fe,envMapMode:fe&&he.mapping,envMapCubeUVHeight:z,aoMap:ue,lightMap:xe,bumpMap:_e,normalMap:ve,displacementMap:f&&D,emissiveMap:E,normalMapObjectSpace:ve&&A.normalMapType===Op,normalMapTangentSpace:ve&&A.normalMapType===rr,metalnessMap:W,roughnessMap:ne,anisotropy:oe,anisotropyMap:je,clearcoat:de,clearcoatMap:be,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Qe,iridescence:Ye,iridescenceMap:Fe,iridescenceThicknessMap:ke,sheen:me,sheenColorMap:dt,sheenRoughnessMap:pt,specularMap:yt,specularColorMap:_t,specularIntensityMap:xt,transmission:He,transmissionMap:Xe,thicknessMap:x,gradientMap:Y,opaque:A.transparent===!1&&A.blending===Lr&&A.alphaToCoverage===!1,alphaMap:ce,alphaTest:Me,alphaHash:Ue,combine:A.combine,mapUv:Le&&_(A.map.channel),aoMapUv:ue&&_(A.aoMap.channel),lightMapUv:xe&&_(A.lightMap.channel),bumpMapUv:_e&&_(A.bumpMap.channel),normalMapUv:ve&&_(A.normalMap.channel),displacementMapUv:D&&_(A.displacementMap.channel),emissiveMapUv:E&&_(A.emissiveMap.channel),metalnessMapUv:W&&_(A.metalnessMap.channel),roughnessMapUv:ne&&_(A.roughnessMap.channel),anisotropyMapUv:je&&_(A.anisotropyMap.channel),clearcoatMapUv:be&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(A.sheenRoughnessMap.channel),specularMapUv:yt&&_(A.specularMap.channel),specularColorMapUv:_t&&_(A.specularColorMap.channel),specularIntensityMapUv:xt&&_(A.specularIntensityMap.channel),transmissionMapUv:Xe&&_(A.transmissionMap.channel),thicknessMapUv:x&&_(A.thicknessMap.channel),alphaMapUv:ce&&_(A.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ve||oe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Le||ce),fog:!!q,useFog:A.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Le&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ti,flipSided:A.side===Cn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:mt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&A.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)y.push(F),y.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(b(y,A),v(y,A),y.push(r.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function b(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function v(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),A.push(a.mask)}function M(A){const y=p[A.type];let F;if(y){const X=ei[y];F=$p.clone(X.uniforms)}else F=A.uniforms;return F}function U(A,y){let F;for(let X=0,k=u.length;X<k;X++){const q=u[X];if(q.cacheKey===y){F=q,++F.usedTimes;break}}return F===void 0&&(F=new sb(r,y,A,s),u.push(F)),F}function P(A){if(--A.usedTimes===0){const y=u.indexOf(A);u[y]=u[u.length-1],u.pop(),A.destroy()}}function R(A){c.remove(A)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:O}}function ub(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ef(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,p,_,m){let g=r[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:m},r[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=_,g.group=m),e++,g}function a(h,f,d,p,_,m){const g=o(h,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function c(h,f,d,p,_,m){const g=o(h,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function l(h,f){t.length>1&&t.sort(h||hb),n.length>1&&n.sort(f||ef),i.length>1&&i.sort(f||ef)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function fb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new tf,r.set(n,[o])):i>=s.length?(o=new tf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function db(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ce};break;case"SpotLight":t={position:new N,direction:new N,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function pb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let mb=0;function gb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _b(r){const e=new db,t=pb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,s=new Ve,o=new Ve;function a(l,u){let h=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,_=0,m=0,g=0,b=0,v=0,M=0,U=0,P=0,R=0,O=0;l.sort(gb);const A=u===!0?Math.PI:1;for(let F=0,X=l.length;F<X;F++){const k=l[F],q=k.color,ee=k.intensity,B=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=q.r*ee*A,f+=q.g*ee*A,d+=q.b*ee*A;else if(k.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(k.sh.coefficients[z],ee);O++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const re=k.shadow,ae=t.get(k);ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=he,n.directionalShadowMatrix[p]=k.shadow.matrix,v++}n.directional[p]=z,p++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(q).multiplyScalar(ee*A),z.distance=B,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,n.spot[m]=z;const re=k.shadow;if(k.map&&(n.spotLightMap[P]=k.map,P++,re.updateMatrices(k),k.castShadow&&R++),n.spotLightMatrix[m]=re.matrix,k.castShadow){const ae=t.get(k);ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,n.spotShadow[m]=ae,n.spotShadowMap[m]=he,U++}m++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(q).multiplyScalar(ee),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),n.rectArea[g]=z,g++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*A),z.distance=k.distance,z.decay=k.decay,k.castShadow){const re=k.shadow,ae=t.get(k);ae.shadowBias=re.bias,ae.shadowNormalBias=re.normalBias,ae.shadowRadius=re.radius,ae.shadowMapSize=re.mapSize,ae.shadowCameraNear=re.camera.near,ae.shadowCameraFar=re.camera.far,n.pointShadow[_]=ae,n.pointShadowMap[_]=he,n.pointShadowMatrix[_]=k.shadow.matrix,M++}n.point[_]=z,_++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(ee*A),z.groundColor.copy(k.groundColor).multiplyScalar(ee*A),n.hemi[b]=z,b++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==m||y.rectAreaLength!==g||y.hemiLength!==b||y.numDirectionalShadows!==v||y.numPointShadows!==M||y.numSpotShadows!==U||y.numSpotMaps!==P||y.numLightProbes!==O)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=g,n.point.length=_,n.hemi.length=b,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=U+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=O,y.directionalLength=p,y.pointLength=_,y.spotLength=m,y.rectAreaLength=g,y.hemiLength=b,y.numDirectionalShadows=v,y.numPointShadows=M,y.numSpotShadows=U,y.numSpotMaps=P,y.numLightProbes=O,n.version=mb++)}function c(l,u){let h=0,f=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,b=l.length;g<b;g++){const v=l[g];if(v.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function nf(r){const e=new _b(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function vb(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new nf(r),e.set(i,[a])):s>=o.length?(a=new nf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class lc extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ku extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function bb(r,e,t){let n=new Po;const i=new ie,s=new ie,o=new It,a=new lc({depthPacking:Up}),c=new ku,l={},u=t.maxTextureSize,h={[mi]:Cn,[Cn]:mi,[ti]:ti},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:yb,fragmentShader:xb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new st;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let g=this.type;this.render=function(P,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const A=r.getRenderTarget(),y=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Ii),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=g!==fi&&this.type===fi,q=g===fi&&this.type!==fi;for(let ee=0,B=P.length;ee<B;ee++){const he=P[ee],z=he.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const re=z.getFrameExtents();if(i.multiply(re),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,z.mapSize.y=s.y)),z.map===null||k===!0||q===!0){const pe=this.type!==fi?{minFilter:ln,magFilter:ln}:{};z.map!==null&&z.map.dispose(),z.map=new Xn(i.x,i.y,pe),z.map.texture.name=he.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ae=z.getViewportCount();for(let pe=0;pe<ae;pe++){const Re=z.getViewport(pe);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),X.viewport(o),z.updateMatrices(he,pe),n=z.getFrustum(),M(R,O,z.camera,he,this.type)}z.isPointLightShadow!==!0&&this.type===fi&&b(z,O),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,y,F)};function b(P,R){const O=e.update(_);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xn(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(R,null,O,f,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(R,null,O,d,_,null)}function v(P,R,O,A){let y=null;const F=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)y=F;else if(y=O.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=y.uuid,k=R.uuid;let q=l[X];q===void 0&&(q={},l[X]=q);let ee=q[k];ee===void 0&&(ee=y.clone(),q[k]=ee,R.addEventListener("dispose",U)),y=ee}if(y.visible=R.visible,y.wireframe=R.wireframe,A===fi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=r.properties.get(y);X.light=O}return y}function M(P,R,O,A,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===fi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const k=e.update(P),q=P.material;if(Array.isArray(q)){const ee=k.groups;for(let B=0,he=ee.length;B<he;B++){const z=ee[B],re=q[z.materialIndex];if(re&&re.visible){const ae=v(P,re,A,y);P.onBeforeShadow(r,P,R,O,k,ae,z),r.renderBufferDirect(O,null,k,ae,P,z),P.onAfterShadow(r,P,R,O,k,ae,z)}}}else if(q.visible){const ee=v(P,q,A,y);P.onBeforeShadow(r,P,R,O,k,ee,null),r.renderBufferDirect(O,null,k,ee,P,null),P.onAfterShadow(r,P,R,O,k,ee,null)}}const X=P.children;for(let k=0,q=X.length;k<q;k++)M(X[k],R,O,A,y)}function U(P){P.target.removeEventListener("dispose",U);for(const O in l){const A=l[O],y=P.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}function Mb(r){function e(){let x=!1;const Y=new It;let ce=null;const Me=new It(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!x&&(r.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){x=Ue},setClear:function(Ue,mt,ct,Nt,Zt){Zt===!0&&(Ue*=Nt,mt*=Nt,ct*=Nt),Y.set(Ue,mt,ct,Nt),Me.equals(Y)===!1&&(r.clearColor(Ue,mt,ct,Nt),Me.copy(Y))},reset:function(){x=!1,ce=null,Me.set(-1,0,0,0)}}}function t(){let x=!1,Y=null,ce=null,Me=null;return{setTest:function(Ue){Ue?te(r.DEPTH_TEST):Q(r.DEPTH_TEST)},setMask:function(Ue){Y!==Ue&&!x&&(r.depthMask(Ue),Y=Ue)},setFunc:function(Ue){if(ce!==Ue){switch(Ue){case op:r.depthFunc(r.NEVER);break;case ap:r.depthFunc(r.ALWAYS);break;case cp:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case lp:r.depthFunc(r.EQUAL);break;case up:r.depthFunc(r.GEQUAL);break;case hp:r.depthFunc(r.GREATER);break;case fp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Ue}},setLocked:function(Ue){x=Ue},setClear:function(Ue){Me!==Ue&&(r.clearDepth(Ue),Me=Ue)},reset:function(){x=!1,Y=null,ce=null,Me=null}}}function n(){let x=!1,Y=null,ce=null,Me=null,Ue=null,mt=null,ct=null,Nt=null,Zt=null;return{setTest:function(Ct){x||(Ct?te(r.STENCIL_TEST):Q(r.STENCIL_TEST))},setMask:function(Ct){Y!==Ct&&!x&&(r.stencilMask(Ct),Y=Ct)},setFunc:function(Ct,Mt,zt){(ce!==Ct||Me!==Mt||Ue!==zt)&&(r.stencilFunc(Ct,Mt,zt),ce=Ct,Me=Mt,Ue=zt)},setOp:function(Ct,Mt,zt){(mt!==Ct||ct!==Mt||Nt!==zt)&&(r.stencilOp(Ct,Mt,zt),mt=Ct,ct=Mt,Nt=zt)},setLocked:function(Ct){x=Ct},setClear:function(Ct){Zt!==Ct&&(r.clearStencil(Ct),Zt=Ct)},reset:function(){x=!1,Y=null,ce=null,Me=null,Ue=null,mt=null,ct=null,Nt=null,Zt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,b=null,v=null,M=null,U=null,P=new Ce(0,0,0),R=0,O=!1,A=null,y=null,F=null,X=null,k=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,B=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(he)[1]),ee=B>=1):he.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),ee=B>=2);let z=null,re={};const ae=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Re=new It().fromArray(ae),Ee=new It().fromArray(pe);function V(x,Y,ce,Me){const Ue=new Uint8Array(4),mt=r.createTexture();r.bindTexture(x,mt),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<ce;ct++)x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY?r.texImage3D(Y,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Y+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return mt}const $={};$[r.TEXTURE_2D]=V(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=V(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=V(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=V(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(r.DEPTH_TEST),s.setFunc(to),_e(!1),ve(Tl),te(r.CULL_FACE),ue(Ii);function te(x){l[x]!==!0&&(r.enable(x),l[x]=!0)}function Q(x){l[x]!==!1&&(r.disable(x),l[x]=!1)}function Ae(x,Y){return u[x]!==Y?(r.bindFramebuffer(x,Y),u[x]=Y,x===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Y),x===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Y),!0):!1}function le(x,Y){let ce=f,Me=!1;if(x){ce=h.get(Y),ce===void 0&&(ce=[],h.set(Y,ce));const Ue=x.textures;if(ce.length!==Ue.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,ct=Ue.length;mt<ct;mt++)ce[mt]=r.COLOR_ATTACHMENT0+mt;ce.length=Ue.length,Me=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ce)}function Le(x){return d!==x?(r.useProgram(x),d=x,!0):!1}const G={[Zi]:r.FUNC_ADD,[Gd]:r.FUNC_SUBTRACT,[Wd]:r.FUNC_REVERSE_SUBTRACT};G[Xd]=r.MIN,G[qd]=r.MAX;const fe={[Yd]:r.ZERO,[Zd]:r.ONE,[jd]:r.SRC_COLOR,[Wa]:r.SRC_ALPHA,[tp]:r.SRC_ALPHA_SATURATE,[Qd]:r.DST_COLOR,[$d]:r.DST_ALPHA,[Jd]:r.ONE_MINUS_SRC_COLOR,[Xa]:r.ONE_MINUS_SRC_ALPHA,[ep]:r.ONE_MINUS_DST_COLOR,[Kd]:r.ONE_MINUS_DST_ALPHA,[np]:r.CONSTANT_COLOR,[ip]:r.ONE_MINUS_CONSTANT_COLOR,[rp]:r.CONSTANT_ALPHA,[sp]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(x,Y,ce,Me,Ue,mt,ct,Nt,Zt,Ct){if(x===Ii){p===!0&&(Q(r.BLEND),p=!1);return}if(p===!1&&(te(r.BLEND),p=!0),x!==Hd){if(x!==_||Ct!==O){if((m!==Zi||v!==Zi)&&(r.blendEquation(r.FUNC_ADD),m=Zi,v=Zi),Ct)switch(x){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cl:r.blendFunc(r.ONE,r.ONE);break;case Rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}g=null,b=null,M=null,U=null,P.set(0,0,0),R=0,_=x,O=Ct}return}Ue=Ue||Y,mt=mt||ce,ct=ct||Me,(Y!==m||Ue!==v)&&(r.blendEquationSeparate(G[Y],G[Ue]),m=Y,v=Ue),(ce!==g||Me!==b||mt!==M||ct!==U)&&(r.blendFuncSeparate(fe[ce],fe[Me],fe[mt],fe[ct]),g=ce,b=Me,M=mt,U=ct),(Nt.equals(P)===!1||Zt!==R)&&(r.blendColor(Nt.r,Nt.g,Nt.b,Zt),P.copy(Nt),R=Zt),_=x,O=!1}function xe(x,Y){x.side===ti?Q(r.CULL_FACE):te(r.CULL_FACE);let ce=x.side===Cn;Y&&(ce=!ce),_e(ce),x.blending===Lr&&x.transparent===!1?ue(Ii):ue(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),i.setMask(x.colorWrite);const Me=x.stencilWrite;o.setTest(Me),Me&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),E(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):Q(r.SAMPLE_ALPHA_TO_COVERAGE)}function _e(x){A!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),A=x)}function ve(x){x!==zd?(te(r.CULL_FACE),x!==y&&(x===Tl?r.cullFace(r.BACK):x===Vd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Q(r.CULL_FACE),y=x}function D(x){x!==F&&(ee&&r.lineWidth(x),F=x)}function E(x,Y,ce){x?(te(r.POLYGON_OFFSET_FILL),(X!==Y||k!==ce)&&(r.polygonOffset(Y,ce),X=Y,k=ce)):Q(r.POLYGON_OFFSET_FILL)}function W(x){x?te(r.SCISSOR_TEST):Q(r.SCISSOR_TEST)}function ne(x){x===void 0&&(x=r.TEXTURE0+q-1),z!==x&&(r.activeTexture(x),z=x)}function oe(x,Y,ce){ce===void 0&&(z===null?ce=r.TEXTURE0+q-1:ce=z);let Me=re[ce];Me===void 0&&(Me={type:void 0,texture:void 0},re[ce]=Me),(Me.type!==x||Me.texture!==Y)&&(z!==ce&&(r.activeTexture(ce),z=ce),r.bindTexture(x,Y||$[x]),Me.type=x,Me.texture=Y)}function de(){const x=re[z];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function Ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function me(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function He(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function je(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function be(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ne(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Qe(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Fe(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function dt(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function pt(x){Re.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),Re.copy(x))}function yt(x){Ee.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),Ee.copy(x))}function _t(x,Y){let ce=c.get(Y);ce===void 0&&(ce=new WeakMap,c.set(Y,ce));let Me=ce.get(x);Me===void 0&&(Me=r.getUniformBlockIndex(Y,x.name),ce.set(x,Me))}function xt(x,Y){const Me=c.get(Y).get(x);a.get(Y)!==Me&&(r.uniformBlockBinding(Y,Me,x.__bindingPointIndex),a.set(Y,Me))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},z=null,re={},u={},h=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,b=null,v=null,M=null,U=null,P=new Ce(0,0,0),R=0,O=!1,A=null,y=null,F=null,X=null,k=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:te,disable:Q,bindFramebuffer:Ae,drawBuffers:le,useProgram:Le,setBlending:ue,setMaterial:xe,setFlipSided:_e,setCullFace:ve,setLineWidth:D,setPolygonOffset:E,setScissorTest:W,activeTexture:ne,bindTexture:oe,unbindTexture:de,compressedTexImage2D:Ye,compressedTexImage3D:me,texImage2D:ke,texImage3D:dt,updateUBOMapping:_t,uniformBlockBinding:xt,texStorage2D:Qe,texStorage3D:Fe,texSubImage2D:He,texSubImage3D:je,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:pt,viewport:yt,reset:Xe}}function Sb(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,E){return d?new OffscreenCanvas(D,E):mo("canvas")}function _(D,E,W){let ne=1;const oe=ve(D);if((oe.width>W||oe.height>W)&&(ne=W/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(ne*oe.width),Ye=Math.floor(ne*oe.height);h===void 0&&(h=p(de,Ye));const me=E?p(de,Ye):h;return me.width=de,me.height=Ye,me.getContext("2d").drawImage(D,0,0,de,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+de+"x"+Ye+")."),me}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==ln&&D.minFilter!==tn}function g(D){r.generateMipmap(D)}function b(D,E,W,ne,oe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=E;if(E===r.RED&&(W===r.FLOAT&&(de=r.R32F),W===r.HALF_FLOAT&&(de=r.R16F),W===r.UNSIGNED_BYTE&&(de=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.R8UI),W===r.UNSIGNED_SHORT&&(de=r.R16UI),W===r.UNSIGNED_INT&&(de=r.R32UI),W===r.BYTE&&(de=r.R8I),W===r.SHORT&&(de=r.R16I),W===r.INT&&(de=r.R32I)),E===r.RG&&(W===r.FLOAT&&(de=r.RG32F),W===r.HALF_FLOAT&&(de=r.RG16F),W===r.UNSIGNED_BYTE&&(de=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(de=r.RG8UI),W===r.UNSIGNED_SHORT&&(de=r.RG16UI),W===r.UNSIGNED_INT&&(de=r.RG32UI),W===r.BYTE&&(de=r.RG8I),W===r.SHORT&&(de=r.RG16I),W===r.INT&&(de=r.RG32I)),E===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),E===r.RGBA){const Ye=oe?lo:Rt.getTransfer(ne);W===r.FLOAT&&(de=r.RGBA32F),W===r.HALF_FLOAT&&(de=r.RGBA16F),W===r.UNSIGNED_BYTE&&(de=Ye===Ot?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function v(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ln&&D.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function M(D){const E=D.target;E.removeEventListener("dispose",M),P(E),E.isVideoTexture&&u.delete(E)}function U(D){const E=D.target;E.removeEventListener("dispose",U),O(E)}function P(D){const E=n.get(D);if(E.__webglInit===void 0)return;const W=D.source,ne=f.get(W);if(ne){const oe=ne[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(D),Object.keys(ne).length===0&&f.delete(W)}n.remove(D)}function R(D){const E=n.get(D);r.deleteTexture(E.__webglTexture);const W=D.source,ne=f.get(W);delete ne[E.__cacheKey],o.memory.textures--}function O(D){const E=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let oe=0;oe<E.__webglFramebuffer[ne].length;oe++)r.deleteFramebuffer(E.__webglFramebuffer[ne][oe]);else r.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)r.deleteFramebuffer(E.__webglFramebuffer[ne]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=D.textures;for(let ne=0,oe=W.length;ne<oe;ne++){const de=n.get(W[ne]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(W[ne])}n.remove(D)}let A=0;function y(){A=0}function F(){const D=A;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),A+=1,D}function X(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function k(D,E){const W=n.get(D);if(D.isVideoTexture&&xe(D),D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){const ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(W,D,E);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function q(D,E){const W=n.get(D);if(D.version>0&&W.__version!==D.version){Re(W,D,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function ee(D,E){const W=n.get(D);if(D.version>0&&W.__version!==D.version){Re(W,D,E);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function B(D,E){const W=n.get(D);if(D.version>0&&W.__version!==D.version){Ee(W,D,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const he={[Ri]:r.REPEAT,[On]:r.CLAMP_TO_EDGE,[ro]:r.MIRRORED_REPEAT},z={[ln]:r.NEAREST,[xu]:r.NEAREST_MIPMAP_NEAREST,[ys]:r.NEAREST_MIPMAP_LINEAR,[tn]:r.LINEAR,[$s]:r.LINEAR_MIPMAP_NEAREST,[ni]:r.LINEAR_MIPMAP_LINEAR},re={[Fp]:r.NEVER,[Gp]:r.ALWAYS,[kp]:r.LESS,[Iu]:r.LEQUAL,[Bp]:r.EQUAL,[Hp]:r.GEQUAL,[zp]:r.GREATER,[Vp]:r.NOTEQUAL};function ae(D,E){if(E.type===jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===$s||E.magFilter===ys||E.magFilter===ni||E.minFilter===tn||E.minFilter===$s||E.minFilter===ys||E.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,he[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,he[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,he[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,z[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==ys&&E.minFilter!==ni||E.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pe(D,E){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",M));const ne=E.source;let oe=f.get(ne);oe===void 0&&(oe={},f.set(ne,oe));const de=X(E);if(de!==D.__cacheKey){oe[de]===void 0&&(oe[de]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[de].usedTimes++;const Ye=oe[D.__cacheKey];Ye!==void 0&&(oe[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&R(E)),D.__cacheKey=de,D.__webglTexture=oe[de].texture}return W}function Re(D,E,W){let ne=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=r.TEXTURE_3D);const oe=pe(D,E),de=E.source;t.bindTexture(ne,D.__webglTexture,r.TEXTURE0+W);const Ye=n.get(de);if(de.version!==Ye.__version||oe===!0){t.activeTexture(r.TEXTURE0+W);const me=Rt.getPrimaries(Rt.workingColorSpace),He=E.colorSpace===Ti?null:Rt.getPrimaries(E.colorSpace),je=E.colorSpace===Ti||me===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let be=_(E.image,!1,i.maxTextureSize);be=_e(E,be);const Ne=s.convert(E.format,E.colorSpace),Qe=s.convert(E.type);let Fe=b(E.internalFormat,Ne,Qe,E.colorSpace,E.isVideoTexture);ae(ne,E);let ke;const dt=E.mipmaps,pt=E.isVideoTexture!==!0&&Fe!==Ru,yt=Ye.__version===void 0||oe===!0,_t=de.dataReady,xt=v(E,be);if(E.isDepthTexture)Fe=r.DEPTH_COMPONENT16,E.type===jn?Fe=r.DEPTH_COMPONENT32F:E.type===Or?Fe=r.DEPTH_COMPONENT24:E.type===Is&&(Fe=r.DEPTH24_STENCIL8),yt&&(pt?t.texStorage2D(r.TEXTURE_2D,1,Fe,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Ne,Qe,null));else if(E.isDataTexture)if(dt.length>0){pt&&yt&&t.texStorage2D(r.TEXTURE_2D,xt,Fe,dt[0].width,dt[0].height);for(let Xe=0,x=dt.length;Xe<x;Xe++)ke=dt[Xe],pt?_t&&t.texSubImage2D(r.TEXTURE_2D,Xe,0,0,ke.width,ke.height,Ne,Qe,ke.data):t.texImage2D(r.TEXTURE_2D,Xe,Fe,ke.width,ke.height,0,Ne,Qe,ke.data);E.generateMipmaps=!1}else pt?(yt&&t.texStorage2D(r.TEXTURE_2D,xt,Fe,be.width,be.height),_t&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be.width,be.height,Ne,Qe,be.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Ne,Qe,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xt,Fe,dt[0].width,dt[0].height,be.depth);for(let Xe=0,x=dt.length;Xe<x;Xe++)ke=dt[Xe],E.format!==Gn?Ne!==null?pt?_t&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Xe,0,0,0,ke.width,ke.height,be.depth,Ne,ke.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Xe,Fe,ke.width,ke.height,be.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?_t&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Xe,0,0,0,ke.width,ke.height,be.depth,Ne,Qe,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Xe,Fe,ke.width,ke.height,be.depth,0,Ne,Qe,ke.data)}else{pt&&yt&&t.texStorage2D(r.TEXTURE_2D,xt,Fe,dt[0].width,dt[0].height);for(let Xe=0,x=dt.length;Xe<x;Xe++)ke=dt[Xe],E.format!==Gn?Ne!==null?pt?_t&&t.compressedTexSubImage2D(r.TEXTURE_2D,Xe,0,0,ke.width,ke.height,Ne,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,Xe,Fe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?_t&&t.texSubImage2D(r.TEXTURE_2D,Xe,0,0,ke.width,ke.height,Ne,Qe,ke.data):t.texImage2D(r.TEXTURE_2D,Xe,Fe,ke.width,ke.height,0,Ne,Qe,ke.data)}else if(E.isDataArrayTexture)pt?(yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xt,Fe,be.width,be.height,be.depth),_t&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ne,Qe,be.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Ne,Qe,be.data);else if(E.isData3DTexture)pt?(yt&&t.texStorage3D(r.TEXTURE_3D,xt,Fe,be.width,be.height,be.depth),_t&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ne,Qe,be.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Ne,Qe,be.data);else if(E.isFramebufferTexture){if(yt)if(pt)t.texStorage2D(r.TEXTURE_2D,xt,Fe,be.width,be.height);else{let Xe=be.width,x=be.height;for(let Y=0;Y<xt;Y++)t.texImage2D(r.TEXTURE_2D,Y,Fe,Xe,x,0,Ne,Qe,null),Xe>>=1,x>>=1}}else if(dt.length>0){if(pt&&yt){const Xe=ve(dt[0]);t.texStorage2D(r.TEXTURE_2D,xt,Fe,Xe.width,Xe.height)}for(let Xe=0,x=dt.length;Xe<x;Xe++)ke=dt[Xe],pt?_t&&t.texSubImage2D(r.TEXTURE_2D,Xe,0,0,Ne,Qe,ke):t.texImage2D(r.TEXTURE_2D,Xe,Fe,Ne,Qe,ke);E.generateMipmaps=!1}else if(pt){if(yt){const Xe=ve(be);t.texStorage2D(r.TEXTURE_2D,xt,Fe,Xe.width,Xe.height)}_t&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Qe,be)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Ne,Qe,be);m(E)&&g(ne),Ye.__version=de.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ee(D,E,W){if(E.image.length!==6)return;const ne=pe(D,E),oe=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+W);const de=n.get(oe);if(oe.version!==de.__version||ne===!0){t.activeTexture(r.TEXTURE0+W);const Ye=Rt.getPrimaries(Rt.workingColorSpace),me=E.colorSpace===Ti?null:Rt.getPrimaries(E.colorSpace),He=E.colorSpace===Ti||Ye===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let x=0;x<6;x++)!je&&!be?Ne[x]=_(E.image[x],!0,i.maxCubemapSize):Ne[x]=be?E.image[x].image:E.image[x],Ne[x]=_e(E,Ne[x]);const Qe=Ne[0],Fe=s.convert(E.format,E.colorSpace),ke=s.convert(E.type),dt=b(E.internalFormat,Fe,ke,E.colorSpace),pt=E.isVideoTexture!==!0,yt=de.__version===void 0||ne===!0,_t=oe.dataReady;let xt=v(E,Qe);ae(r.TEXTURE_CUBE_MAP,E);let Xe;if(je){pt&&yt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xt,dt,Qe.width,Qe.height);for(let x=0;x<6;x++){Xe=Ne[x].mipmaps;for(let Y=0;Y<Xe.length;Y++){const ce=Xe[Y];E.format!==Gn?Fe!==null?pt?_t&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y,0,0,ce.width,ce.height,Fe,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y,dt,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?_t&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y,0,0,ce.width,ce.height,Fe,ke,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y,dt,ce.width,ce.height,0,Fe,ke,ce.data)}}}else{if(Xe=E.mipmaps,pt&&yt){Xe.length>0&&xt++;const x=ve(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xt,dt,x.width,x.height)}for(let x=0;x<6;x++)if(be){pt?_t&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,Ne[x].width,Ne[x].height,Fe,ke,Ne[x].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,dt,Ne[x].width,Ne[x].height,0,Fe,ke,Ne[x].data);for(let Y=0;Y<Xe.length;Y++){const Me=Xe[Y].image[x].image;pt?_t&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y+1,0,0,Me.width,Me.height,Fe,ke,Me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y+1,dt,Me.width,Me.height,0,Fe,ke,Me.data)}}else{pt?_t&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,0,0,Fe,ke,Ne[x]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,dt,Fe,ke,Ne[x]);for(let Y=0;Y<Xe.length;Y++){const ce=Xe[Y];pt?_t&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y+1,0,0,Fe,ke,ce.image[x]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+x,Y+1,dt,Fe,ke,ce.image[x])}}}m(E)&&g(r.TEXTURE_CUBE_MAP),de.__version=oe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function V(D,E,W,ne,oe,de){const Ye=s.convert(W.format,W.colorSpace),me=s.convert(W.type),He=b(W.internalFormat,Ye,me,W.colorSpace);if(!n.get(E).__hasExternalTextures){const be=Math.max(1,E.width>>de),Ne=Math.max(1,E.height>>de);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,de,He,be,Ne,E.depth,0,Ye,me,null):t.texImage2D(oe,de,He,be,Ne,0,Ye,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ue(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,oe,n.get(W).__webglTexture,0,fe(E)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ne,oe,n.get(W).__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(D,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer&&!E.stencilBuffer){let ne=r.DEPTH_COMPONENT24;if(W||ue(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===jn?ne=r.DEPTH_COMPONENT32F:oe.type===Or&&(ne=r.DEPTH_COMPONENT24));const de=fe(E);ue(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,ne,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,de,ne,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ne,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,D)}else if(E.depthBuffer&&E.stencilBuffer){const ne=fe(E);W&&ue(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,E.width,E.height):ue(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,D)}else{const ne=E.textures;for(let oe=0;oe<ne.length;oe++){const de=ne[oe],Ye=s.convert(de.format,de.colorSpace),me=s.convert(de.type),He=b(de.internalFormat,Ye,me,de.colorSpace),je=fe(E);W&&ue(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,He,E.width,E.height):ue(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,He,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,He,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function te(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,oe=fe(E);if(E.depthTexture.format===Nr)ue(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(E.depthTexture.format===As)ue(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Q(D){const E=n.get(D),W=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");te(E.__webglFramebuffer,D)}else if(W){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=r.createRenderbuffer(),$(E.__webglDepthbuffer[ne],D,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),$(E.__webglDepthbuffer,D,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(D,E,W){const ne=n.get(D);E!==void 0&&V(ne.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Q(D)}function le(D){const E=D.texture,W=n.get(D),ne=n.get(E);D.addEventListener("dispose",U);const oe=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ye=oe.length>1;if(Ye||(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=E.version,o.memory.textures++),de){W.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[me]=[];for(let He=0;He<E.mipmaps.length;He++)W.__webglFramebuffer[me][He]=r.createFramebuffer()}else W.__webglFramebuffer[me]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)W.__webglFramebuffer[me]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let me=0,He=oe.length;me<He;me++){const je=n.get(oe[me]);je.__webglTexture===void 0&&(je.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&ue(D)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){const He=oe[me];W.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[me]);const je=s.convert(He.format,He.colorSpace),be=s.convert(He.type),Ne=b(He.internalFormat,je,be,He.colorSpace,D.isXRRenderTarget===!0),Qe=fe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Ne,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,W.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),$(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),ae(r.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)V(W.__webglFramebuffer[me][He],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,He);else V(W.__webglFramebuffer[me],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let me=0,He=oe.length;me<He;me++){const je=oe[me],be=n.get(je);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),ae(r.TEXTURE_2D,je),V(W.__webglFramebuffer,D,je,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,0),m(je)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,ne.__webglTexture),ae(me,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)V(W.__webglFramebuffer[He],D,E,r.COLOR_ATTACHMENT0,me,He);else V(W.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,me,0);m(E)&&g(me),t.unbindTexture()}D.depthBuffer&&Q(D)}function Le(D){const E=D.textures;for(let W=0,ne=E.length;W<ne;W++){const oe=E[W];if(m(oe)){const de=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ye=n.get(oe).__webglTexture;t.bindTexture(de,Ye),g(de),t.unbindTexture()}}}function G(D){if(D.samples>0&&ue(D)===!1){const E=D.textures,W=D.width,ne=D.height;let oe=r.COLOR_BUFFER_BIT;const de=[],Ye=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(D),He=E.length>1;if(He)for(let je=0;je<E.length;je++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let je=0;je<E.length;je++){de.push(r.COLOR_ATTACHMENT0+je),D.depthBuffer&&de.push(Ye);const be=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(be===!1&&(D.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&me.__isTransmissionRenderTarget!==!0&&(oe|=r.STENCIL_BUFFER_BIT)),He&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[je]),be===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ye]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ye])),He){const Ne=n.get(E[je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,W,ne,0,0,W,ne,oe,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),He)for(let je=0;je<E.length;je++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.RENDERBUFFER,me.__webglColorRenderbuffer[je]);const be=n.get(E[je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+je,r.TEXTURE_2D,be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function fe(D){return Math.min(i.maxSamples,D.samples)}function ue(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(D){const E=o.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function _e(D,E){const W=D.colorSpace,ne=D.format,oe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Oi&&W!==Ti&&(Rt.getTransfer(W)===Ot?(ne!==Gn||oe!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=y,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=B,this.rebindTextures=Ae,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ue}function om(r,e){function t(n,i=Ti){let s;const o=Rt.getTransfer(i);if(n===Ni)return r.UNSIGNED_BYTE;if(n===Su)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return r.BYTE;if(n===Sp)return r.SHORT;if(n===bu)return r.UNSIGNED_SHORT;if(n===Mu)return r.INT;if(n===Or)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===so)return r.HALF_FLOAT;if(n===Ep)return r.ALPHA;if(n===Ap)return r.RGB;if(n===Gn)return r.RGBA;if(n===Tp)return r.LUMINANCE;if(n===Cp)return r.LUMINANCE_ALPHA;if(n===Nr)return r.DEPTH_COMPONENT;if(n===As)return r.DEPTH_STENCIL;if(n===Eu)return r.RED;if(n===Au)return r.RED_INTEGER;if(n===Rp)return r.RG;if(n===Tu)return r.RG_INTEGER;if(n===Cu)return r.RGBA_INTEGER;if(n===Oa||n===Fa||n===ka||n===Ba)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Nl||n===Dl||n===Ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ru)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ol||n===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ol)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Bl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===jl||n===Jl||n===$l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Kl||n===Ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pp||n===eu||n===tu||n===nu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class am extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
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

}`;class Tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Yt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Yn({vertexShader:Eb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Wr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Cb extends gi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const _=new Tb,m=t.getContextAttributes();let g=null,b=null;const v=[],M=[],U=new ie;let P=null;const R=new en;R.layers.enable(1),R.viewport=new It;const O=new en;O.layers.enable(2),O.viewport=new It;const A=[R,O],y=new am;y.layers.enable(1),y.layers.enable(2);let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=v[V];return $===void 0&&($=new ll,v[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=v[V];return $===void 0&&($=new ll,v[V]=$),$.getGripSpace()},this.getHand=function(V){let $=v[V];return $===void 0&&($=new ll,v[V]=$),$.getHandSpace()};function k(V){const $=M.indexOf(V.inputSource);if($===-1)return;const te=v[$];te!==void 0&&(te.update(V.inputSource,V.frame,l||o),te.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",ee);for(let V=0;V<v.length;V++){const $=M[V];$!==null&&(M[V]=null,v[V].disconnect($))}F=null,X=null,_.reset(),e.setRenderTarget(g),d=null,f=null,h=null,i=null,b=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",q),i.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Gn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,te=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?As:Nr,te=m.stencil?Is:Or);const Ae={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Xn(f.textureWidth,f.textureHeight,{format:Gn,type:Ni,depthTexture:new Fu(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const le=e.properties.get(b);le.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ee(V){for(let $=0;$<V.removed.length;$++){const te=V.removed[$],Q=M.indexOf(te);Q>=0&&(M[Q]=null,v[Q].disconnect(te))}for(let $=0;$<V.added.length;$++){const te=V.added[$];let Q=M.indexOf(te);if(Q===-1){for(let le=0;le<v.length;le++)if(le>=M.length){M.push(te),Q=le;break}else if(M[le]===null){M[le]=te,Q=le;break}if(Q===-1)break}const Ae=v[Q];Ae&&Ae.connect(te)}}const B=new N,he=new N;function z(V,$,te){B.setFromMatrixPosition($.matrixWorld),he.setFromMatrixPosition(te.matrixWorld);const Q=B.distanceTo(he),Ae=$.projectionMatrix.elements,le=te.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),G=Ae[14]/(Ae[10]+1),fe=(Ae[9]+1)/Ae[5],ue=(Ae[9]-1)/Ae[5],xe=(Ae[8]-1)/Ae[0],_e=(le[8]+1)/le[0],ve=Le*xe,D=Le*_e,E=Q/(-xe+_e),W=E*-xe;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(W),V.translateZ(E),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ne=Le+E,oe=G+E,de=ve-W,Ye=D+(Q-W),me=fe*G/oe*ne,He=ue*G/oe*ne;V.projectionMatrix.makePerspective(de,Ye,me,He,ne,oe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function re(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),y.near=O.near=R.near=V.near,y.far=O.far=R.far=V.far,(F!==y.near||X!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),F=y.near,X=y.far,R.near=F,R.far=X,O.near=F,O.far=X,R.updateProjectionMatrix(),O.updateProjectionMatrix(),V.updateProjectionMatrix());const $=V.parent,te=y.cameras;re(y,$);for(let Q=0;Q<te.length;Q++)re(te[Q],$);te.length===2?z(y,R,O):y.projectionMatrix.copy(R.projectionMatrix),ae(V,y,$)};function ae(V,$,te){te===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(te.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ts*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let pe=null;function Re(V,$){if(u=$.getViewerPose(l||o),p=$,u!==null){const te=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Q=!1;te.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let le=0;le<te.length;le++){const Le=te[le];let G=null;if(d!==null)G=d.getViewport(Le);else{const ue=h.getViewSubImage(f,Le);G=ue.viewport,le===0&&(e.setRenderTargetTextures(b,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(b))}let fe=A[le];fe===void 0&&(fe=new en,fe.layers.enable(le),fe.viewport=new It,A[le]=fe),fe.matrix.fromArray(Le.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Le.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(G.x,G.y,G.width,G.height),le===0&&(y.matrix.copy(fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(fe)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const le=h.getDepthInformation(te[0]);le&&le.isValid&&le.texture&&_.init(e,le,i.renderState)}}for(let te=0;te<v.length;te++){const Q=M[te],Ae=v[te];Q!==null&&Ae!==void 0&&Ae.update(Q,$,l||o)}_.render(e,y),pe&&pe(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}const Ee=new em;Ee.setAnimationLoop(Re),this.setAnimationLoop=function(V){pe=V},this.dispose=function(){}}}const pr=new qn,Rb=new Ve;function Pb(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Jp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,b,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,b,v):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=e.get(g),v=b.envMap,M=b.envMapRotation;if(v&&(m.envMap.value=v,pr.copy(M),pr.x*=-1,pr.y*=-1,pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(pr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const U=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*U,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,b,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ib(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const M=v.program;n.uniformBlockBinding(b,M)}function l(b,v){let M=i[b.id];M===void 0&&(p(b),M=u(b),i[b.id]=M,b.addEventListener("dispose",m));const U=v.program;n.updateUBOMapping(b,U);const P=e.render.frame;s[b.id]!==P&&(f(b),s[b.id]=P)}function u(b){const v=h();b.__bindingPointIndex=v;const M=r.createBuffer(),U=b.__size,P=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,U,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],M=b.uniforms,U=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let P=0,R=M.length;P<R;P++){const O=Array.isArray(M[P])?M[P]:[M[P]];for(let A=0,y=O.length;A<y;A++){const F=O[A];if(d(F,P,A,U)===!0){const X=F.__offset,k=Array.isArray(F.value)?F.value:[F.value];let q=0;for(let ee=0;ee<k.length;ee++){const B=k[ee],he=_(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,X+q,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,q),q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(b,v,M,U){const P=b.value,R=v+"_"+M;if(U[R]===void 0)return typeof P=="number"||typeof P=="boolean"?U[R]=P:U[R]=P.clone(),!0;{const O=U[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return U[R]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function p(b){const v=b.uniforms;let M=0;const U=16;for(let R=0,O=v.length;R<O;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,F=A.length;y<F;y++){const X=A[y],k=Array.isArray(X.value)?X.value:[X.value];for(let q=0,ee=k.length;q<ee;q++){const B=k[q],he=_(B),z=M%U;z!==0&&U-z<he.boundary&&(M+=U-z),X.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=he.storage}}}const P=M%U;return P>0&&(M+=U-P),b.__size=M,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class cm{constructor(e={}){const{canvas:t=Xp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const v=this;let M=!1,U=0,P=0,R=null,O=-1,A=null;const y=new It,F=new It;let X=null;const k=new Ce(0);let q=0,ee=t.width,B=t.height,he=1,z=null,re=null;const ae=new It(0,0,ee,B),pe=new It(0,0,ee,B);let Re=!1;const Ee=new Po;let V=!1,$=!1;const te=new Ve,Q=new ie,Ae=new N,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return R===null?he:1}let G=n;function fe(L,H){const J=t.getContext(L,H);return J!==null?J:null}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Me,!1),G===null){const H="webgl2";if(G=fe(H,L),G===null)throw fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ue,xe,_e,ve,D,E,W,ne,oe,de,Ye,me,He,je,be,Ne,Qe,Fe,ke,dt,pt,yt,_t,xt;function Xe(){ue=new Wy(G),ue.init(),xe=new ky(G,ue,e),yt=new om(G,ue),_e=new Mb(G),ve=new Yy(G),D=new ub,E=new Sb(G,ue,_e,D,xe,yt,ve),W=new zy(v),ne=new Gy(v),oe=new Q_(G),_t=new Oy(G,oe),de=new Xy(G,oe,ve,_t),Ye=new jy(G,de,oe,ve),ke=new Zy(G,xe,E),Ne=new By(D),me=new lb(v,W,ne,ue,xe,_t,Ne),He=new Pb(v,D),je=new fb,be=new vb(ue),Fe=new Uy(v,W,ne,_e,Ye,f,c),Qe=new bb(v,Ye,xe),xt=new Ib(G,ve,xe,_e),dt=new Fy(G,ue,ve),pt=new qy(G,ue,ve),ve.programs=me.programs,v.capabilities=xe,v.extensions=ue,v.properties=D,v.renderLists=je,v.shadowMap=Qe,v.state=_e,v.info=ve}Xe();const x=new Cb(v,G);this.xr=x,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=ue.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ue.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(ee,B,!1))},this.getSize=function(L){return L.set(ee,B)},this.setSize=function(L,H,J=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=L,B=H,t.width=Math.floor(L*he),t.height=Math.floor(H*he),J===!0&&(t.style.width=L+"px",t.style.height=H+"px"),this.setViewport(0,0,L,H)},this.getDrawingBufferSize=function(L){return L.set(ee*he,B*he).floor()},this.setDrawingBufferSize=function(L,H,J){ee=L,B=H,he=J,t.width=Math.floor(L*J),t.height=Math.floor(H*J),this.setViewport(0,0,L,H)},this.getCurrentViewport=function(L){return L.copy(y)},this.getViewport=function(L){return L.copy(ae)},this.setViewport=function(L,H,J,K){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,H,J,K),_e.viewport(y.copy(ae).multiplyScalar(he).round())},this.getScissor=function(L){return L.copy(pe)},this.setScissor=function(L,H,J,K){L.isVector4?pe.set(L.x,L.y,L.z,L.w):pe.set(L,H,J,K),_e.scissor(F.copy(pe).multiplyScalar(he).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(L){_e.setScissorTest(Re=L)},this.setOpaqueSort=function(L){z=L},this.setTransparentSort=function(L){re=L},this.getClearColor=function(L){return L.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(L=!0,H=!0,J=!0){let K=0;if(L){let Z=!1;if(R!==null){const Pe=R.texture.format;Z=Pe===Cu||Pe===Tu||Pe===Au}if(Z){const Pe=R.texture.type,qe=Pe===Ni||Pe===Or||Pe===bu||Pe===Is||Pe===Su||Pe===wu,ze=Fe.getClearColor(),Je=Fe.getClearAlpha(),tt=ze.r,nt=ze.g,it=ze.b;qe?(d[0]=tt,d[1]=nt,d[2]=it,d[3]=Je,G.clearBufferuiv(G.COLOR,0,d)):(p[0]=tt,p[1]=nt,p[2]=it,p[3]=Je,G.clearBufferiv(G.COLOR,0,p))}else K|=G.COLOR_BUFFER_BIT}H&&(K|=G.DEPTH_BUFFER_BIT),J&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),je.dispose(),be.dispose(),D.dispose(),W.dispose(),ne.dispose(),Ye.dispose(),_t.dispose(),xt.dispose(),me.dispose(),x.dispose(),x.removeEventListener("sessionstart",Mt),x.removeEventListener("sessionend",zt),xn.stop()};function Y(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const L=ve.autoReset,H=Qe.enabled,J=Qe.autoUpdate,K=Qe.needsUpdate,Z=Qe.type;Xe(),ve.autoReset=L,Qe.enabled=H,Qe.autoUpdate=J,Qe.needsUpdate=K,Qe.type=Z}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ue(L){const H=L.target;H.removeEventListener("dispose",Ue),mt(H)}function mt(L){ct(L),D.remove(L)}function ct(L){const H=D.get(L).programs;H!==void 0&&(H.forEach(function(J){me.releaseProgram(J)}),L.isShaderMaterial&&me.releaseShaderCache(L))}this.renderBufferDirect=function(L,H,J,K,Z,Pe){H===null&&(H=le);const qe=Z.isMesh&&Z.matrixWorld.determinant()<0,ze=Dc(L,H,J,K,Z);_e.setMaterial(K,qe);let Je=J.index,tt=1;if(K.wireframe===!0){if(Je=de.getWireframeAttribute(J),Je===void 0)return;tt=2}const nt=J.drawRange,it=J.attributes.position;let kt=nt.start*tt,bn=(nt.start+nt.count)*tt;Pe!==null&&(kt=Math.max(kt,Pe.start*tt),bn=Math.min(bn,(Pe.start+Pe.count)*tt)),Je!==null?(kt=Math.max(kt,0),bn=Math.min(bn,Je.count)):it!=null&&(kt=Math.max(kt,0),bn=Math.min(bn,it.count));const Jt=bn-kt;if(Jt<0||Jt===1/0)return;_t.setup(Z,K,ze,J,Je);let Jn,Dt=dt;if(Je!==null&&(Jn=oe.get(Je),Dt=pt,Dt.setIndex(Jn)),Z.isMesh)K.wireframe===!0?(_e.setLineWidth(K.wireframeLinewidth*Le()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(Z.isLine){let rt=K.linewidth;rt===void 0&&(rt=1),_e.setLineWidth(rt*Le()),Z.isLineSegments?Dt.setMode(G.LINES):Z.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else Z.isPoints?Dt.setMode(G.POINTS):Z.isSprite&&Dt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)Dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Dt.renderInstances(kt,Jt,Z.count);else if(J.isInstancedBufferGeometry){const rt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,li=Math.min(J.instanceCount,rt);Dt.renderInstances(kt,Jt,li)}else Dt.render(kt,Jt)};function Nt(L,H,J){L.transparent===!0&&L.side===ti&&L.forceSinglePass===!1?(L.side=Cn,L.needsUpdate=!0,ar(L,H,J),L.side=mi,L.needsUpdate=!0,ar(L,H,J),L.side=ti):ar(L,H,J)}this.compile=function(L,H,J=null){J===null&&(J=L),m=be.get(J),m.init(),b.push(m),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),L!==J&&L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(v._useLegacyLights);const K=new Set;return L.traverse(function(Z){const Pe=Z.material;if(Pe)if(Array.isArray(Pe))for(let qe=0;qe<Pe.length;qe++){const ze=Pe[qe];Nt(ze,J,Z),K.add(ze)}else Nt(Pe,J,Z),K.add(Pe)}),b.pop(),m=null,K},this.compileAsync=function(L,H,J=null){const K=this.compile(L,H,J);return new Promise(Z=>{function Pe(){if(K.forEach(function(qe){D.get(qe).currentProgram.isReady()&&K.delete(qe)}),K.size===0){Z(L);return}setTimeout(Pe,10)}ue.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Zt=null;function Ct(L){Zt&&Zt(L)}function Mt(){xn.stop()}function zt(){xn.start()}const xn=new em;xn.setAnimationLoop(Ct),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(L){Zt=L,x.setAnimationLoop(L),L===null?xn.stop():xn.start()},x.addEventListener("sessionstart",Mt),x.addEventListener("sessionend",zt),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(H),H=x.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,H,R),m=be.get(L,b.length),m.init(),b.push(m),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ee.setFromProjectionMatrix(te),$=this.localClippingEnabled,V=Ne.init(this.clippingPlanes,$),_=je.get(L,g.length),_.init(),g.push(_),Nn(L,H,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,re),this.info.render.frame++,V===!0&&Ne.beginShadows();const J=m.state.shadowsArray;if(Qe.render(J,L,H),V===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1)&&Fe.render(_,L),m.setupLights(v._useLegacyLights),H.isArrayCamera){const K=H.cameras;for(let Z=0,Pe=K.length;Z<Pe;Z++){const qe=K[Z];ci(_,L,qe,qe.viewport)}}else ci(_,L,H);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(v,L,H),_t.resetDefaultState(),O=-1,A=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Nn(L,H,J,K){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ee.intersectsSprite(L)){K&&Ae.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);const qe=Ye.update(L),ze=L.material;ze.visible&&_.push(L,qe,ze,J,Ae.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ee.intersectsObject(L))){const qe=Ye.update(L),ze=L.material;if(K&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ae.copy(L.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ae.copy(qe.boundingSphere.center)),Ae.applyMatrix4(L.matrixWorld).applyMatrix4(te)),Array.isArray(ze)){const Je=qe.groups;for(let tt=0,nt=Je.length;tt<nt;tt++){const it=Je[tt],kt=ze[it.materialIndex];kt&&kt.visible&&_.push(L,qe,kt,J,Ae.z,it)}}else ze.visible&&_.push(L,qe,ze,J,Ae.z,null)}}const Pe=L.children;for(let qe=0,ze=Pe.length;qe<ze;qe++)Nn(Pe[qe],H,J,K)}function ci(L,H,J,K){const Z=L.opaque,Pe=L.transmissive,qe=L.transparent;m.setupLightsView(J),V===!0&&Ne.setGlobalState(v.clippingPlanes,J),Pe.length>0&&Fi(Z,Pe,H,J),K&&_e.viewport(y.copy(K)),Z.length>0&&vi(Z,H,J),Pe.length>0&&vi(Pe,H,J),qe.length>0&&vi(qe,H,J),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Fi(L,H,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Xn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?so:Ni,minFilter:ni,samples:4,stencilBuffer:s});const tt=D.get(m.state.transmissionRenderTarget);tt.__isTransmissionRenderTarget=!0}const Pe=m.state.transmissionRenderTarget;v.getDrawingBufferSize(Q),Pe.setSize(Q.x,Q.y);const qe=v.getRenderTarget();v.setRenderTarget(Pe),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear();const ze=v.toneMapping;v.toneMapping=Li,vi(L,J,K),E.updateMultisampleRenderTarget(Pe),E.updateRenderTargetMipmap(Pe);let Je=!1;for(let tt=0,nt=H.length;tt<nt;tt++){const it=H[tt],kt=it.object,bn=it.geometry,Jt=it.material,Jn=it.group;if(Jt.side===ti&&kt.layers.test(K.layers)){const Dt=Jt.side;Jt.side=Cn,Jt.needsUpdate=!0,Oo(kt,J,K,bn,Jt,Jn),Jt.side=Dt,Jt.needsUpdate=!0,Je=!0}}Je===!0&&(E.updateMultisampleRenderTarget(Pe),E.updateRenderTargetMipmap(Pe)),v.setRenderTarget(qe),v.setClearColor(k,q),v.toneMapping=ze}function vi(L,H,J){const K=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Pe=L.length;Z<Pe;Z++){const qe=L[Z],ze=qe.object,Je=qe.geometry,tt=K===null?qe.material:K,nt=qe.group;ze.layers.test(J.layers)&&Oo(ze,H,J,Je,tt,nt)}}function Oo(L,H,J,K,Z,Pe){L.onBeforeRender(v,H,J,K,Z,Pe),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Z.onBeforeRender(v,H,J,K,L,Pe),Z.transparent===!0&&Z.side===ti&&Z.forceSinglePass===!1?(Z.side=Cn,Z.needsUpdate=!0,v.renderBufferDirect(J,H,K,Z,L,Pe),Z.side=mi,Z.needsUpdate=!0,v.renderBufferDirect(J,H,K,Z,L,Pe),Z.side=ti):v.renderBufferDirect(J,H,K,Z,L,Pe),L.onAfterRender(v,H,J,K,Z,Pe)}function ar(L,H,J){H.isScene!==!0&&(H=le);const K=D.get(L),Z=m.state.lights,Pe=m.state.shadowsArray,qe=Z.state.version,ze=me.getParameters(L,Z.state,Pe,H,J),Je=me.getProgramCacheKey(ze);let tt=K.programs;K.environment=L.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(L.isMeshStandardMaterial?ne:W).get(L.envMap||K.environment),K.envMapRotation=K.environment!==null&&L.envMap===null?H.environmentRotation:L.envMapRotation,tt===void 0&&(L.addEventListener("dispose",Ue),tt=new Map,K.programs=tt);let nt=tt.get(Je);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===qe)return Us(L,ze),nt}else ze.uniforms=me.getUniforms(L),L.onBuild(J,ze,v),L.onBeforeCompile(ze,v),nt=me.acquireProgram(ze,Je),tt.set(Je,nt),K.uniforms=ze.uniforms;const it=K.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=Ne.uniform),Us(L,ze),K.needsLights=Oc(L),K.lightsStateVersion=qe,K.needsLights&&(it.ambientLightColor.value=Z.state.ambient,it.lightProbe.value=Z.state.probe,it.directionalLights.value=Z.state.directional,it.directionalLightShadows.value=Z.state.directionalShadow,it.spotLights.value=Z.state.spot,it.spotLightShadows.value=Z.state.spotShadow,it.rectAreaLights.value=Z.state.rectArea,it.ltc_1.value=Z.state.rectAreaLTC1,it.ltc_2.value=Z.state.rectAreaLTC2,it.pointLights.value=Z.state.point,it.pointLightShadows.value=Z.state.pointShadow,it.hemisphereLights.value=Z.state.hemi,it.directionalShadowMap.value=Z.state.directionalShadowMap,it.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,it.spotShadowMap.value=Z.state.spotShadowMap,it.spotLightMatrix.value=Z.state.spotLightMatrix,it.spotLightMap.value=Z.state.spotLightMap,it.pointShadowMap.value=Z.state.pointShadowMap,it.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function Fo(L){if(L.uniformsList===null){const H=L.currentProgram.getUniforms();L.uniformsList=Ha.seqWithValue(H.seq,L.uniforms)}return L.uniformsList}function Us(L,H){const J=D.get(L);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Dc(L,H,J,K,Z){H.isScene!==!0&&(H=le),E.resetTextureUnits();const Pe=H.fog,qe=K.isMeshStandardMaterial?H.environment:null,ze=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Oi,Je=(K.isMeshStandardMaterial?ne:W).get(K.envMap||qe),tt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),it=!!J.morphAttributes.position,kt=!!J.morphAttributes.normal,bn=!!J.morphAttributes.color;let Jt=Li;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Jt=v.toneMapping);const Jn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Dt=Jn!==void 0?Jn.length:0,rt=D.get(K),li=m.state.lights;if(V===!0&&($===!0||L!==A)){const St=L===A&&K.id===O;Ne.setState(K,L,St)}let Ut=!1;K.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==li.state.version||rt.outputColorSpace!==ze||Z.isBatchedMesh&&rt.batching===!1||!Z.isBatchedMesh&&rt.batching===!0||Z.isInstancedMesh&&rt.instancing===!1||!Z.isInstancedMesh&&rt.instancing===!0||Z.isSkinnedMesh&&rt.skinning===!1||!Z.isSkinnedMesh&&rt.skinning===!0||Z.isInstancedMesh&&rt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&rt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&rt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&rt.instancingMorph===!1&&Z.morphTexture!==null||rt.envMap!==Je||K.fog===!0&&rt.fog!==Pe||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ne.numPlanes||rt.numIntersection!==Ne.numIntersection)||rt.vertexAlphas!==tt||rt.vertexTangents!==nt||rt.morphTargets!==it||rt.morphNormals!==kt||rt.morphColors!==bn||rt.toneMapping!==Jt||rt.morphTargetsCount!==Dt)&&(Ut=!0):(Ut=!0,rt.__version=K.version);let ui=rt.currentProgram;Ut===!0&&(ui=ar(K,H,Z));let ko=!1,ki=!1,Os=!1;const an=ui.getUniforms(),hi=rt.uniforms;if(_e.useProgram(ui.program)&&(ko=!0,ki=!0,Os=!0),K.id!==O&&(O=K.id,ki=!0),ko||A!==L){an.setValue(G,"projectionMatrix",L.projectionMatrix),an.setValue(G,"viewMatrix",L.matrixWorldInverse);const St=an.map.cameraPosition;St!==void 0&&St.setValue(G,Ae.setFromMatrixPosition(L.matrixWorld)),xe.logarithmicDepthBuffer&&an.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&an.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,ki=!0,Os=!0)}if(Z.isSkinnedMesh){an.setOptional(G,Z,"bindMatrix"),an.setOptional(G,Z,"bindMatrixInverse");const St=Z.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),an.setValue(G,"boneTexture",St.boneTexture,E))}Z.isBatchedMesh&&(an.setOptional(G,Z,"batchingTexture"),an.setValue(G,"batchingTexture",Z._matricesTexture,E));const Zr=J.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&ke.update(Z,J,ui),(ki||rt.receiveShadow!==Z.receiveShadow)&&(rt.receiveShadow=Z.receiveShadow,an.setValue(G,"receiveShadow",Z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hi.envMap.value=Je,hi.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(hi.envMapIntensity.value=H.environmentIntensity),ki&&(an.setValue(G,"toneMappingExposure",v.toneMappingExposure),rt.needsLights&&Uc(hi,Os),Pe&&K.fog===!0&&He.refreshFogUniforms(hi,Pe),He.refreshMaterialUniforms(hi,K,he,B,m.state.transmissionRenderTarget),Ha.upload(G,Fo(rt),hi,E)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ha.upload(G,Fo(rt),hi,E),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&an.setValue(G,"center",Z.center),an.setValue(G,"modelViewMatrix",Z.modelViewMatrix),an.setValue(G,"normalMatrix",Z.normalMatrix),an.setValue(G,"modelMatrix",Z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const St=K.uniformsGroups;for(let cr=0,Fc=St.length;cr<Fc;cr++){const Fs=St[cr];xt.update(Fs,ui),xt.bind(Fs,ui)}}return ui}function Uc(L,H){L.ambientLightColor.needsUpdate=H,L.lightProbe.needsUpdate=H,L.directionalLights.needsUpdate=H,L.directionalLightShadows.needsUpdate=H,L.pointLights.needsUpdate=H,L.pointLightShadows.needsUpdate=H,L.spotLights.needsUpdate=H,L.spotLightShadows.needsUpdate=H,L.rectAreaLights.needsUpdate=H,L.hemisphereLights.needsUpdate=H}function Oc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,H,J){D.get(L.texture).__webglTexture=H,D.get(L.depthTexture).__webglTexture=J;const K=D.get(L);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,H){const J=D.get(L);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,J=0){R=L,U=H,P=J;let K=!0,Z=null,Pe=!1,qe=!1;if(L){const Je=D.get(L);Je.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):Je.__webglFramebuffer===void 0?E.setupRenderTarget(L):Je.__hasExternalTextures&&E.rebindTextures(L,D.get(L.texture).__webglTexture,D.get(L.depthTexture).__webglTexture);const tt=L.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(qe=!0);const nt=D.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(nt[H])?Z=nt[H][J]:Z=nt[H],Pe=!0):L.samples>0&&E.useMultisampledRTT(L)===!1?Z=D.get(L).__webglMultisampledFramebuffer:Array.isArray(nt)?Z=nt[J]:Z=nt,y.copy(L.viewport),F.copy(L.scissor),X=L.scissorTest}else y.copy(ae).multiplyScalar(he).floor(),F.copy(pe).multiplyScalar(he).floor(),X=Re;if(_e.bindFramebuffer(G.FRAMEBUFFER,Z)&&K&&_e.drawBuffers(L,Z),_e.viewport(y),_e.scissor(F),_e.setScissorTest(X),Pe){const Je=D.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Je.__webglTexture,J)}else if(qe){const Je=D.get(L.texture),tt=H||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Je.__webglTexture,J||0,tt)}O=-1},this.readRenderTargetPixels=function(L,H,J,K,Z,Pe,qe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=D.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qe!==void 0&&(ze=ze[qe]),ze){_e.bindFramebuffer(G.FRAMEBUFFER,ze);try{const Je=L.texture,tt=Je.format,nt=Je.type;if(tt!==Gn&&yt.convert(tt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=nt===so&&(ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float"));if(nt!==Ni&&yt.convert(nt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&nt!==jn&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=L.width-K&&J>=0&&J<=L.height-Z&&G.readPixels(H,J,K,Z,yt.convert(tt),yt.convert(nt),Pe)}finally{const Je=R!==null?D.get(R).__webglFramebuffer:null;_e.bindFramebuffer(G.FRAMEBUFFER,Je)}}},this.copyFramebufferToTexture=function(L,H,J=0){const K=Math.pow(2,-J),Z=Math.floor(H.image.width*K),Pe=Math.floor(H.image.height*K);E.setTexture2D(H,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,L.x,L.y,Z,Pe),_e.unbindTexture()},this.copyTextureToTexture=function(L,H,J,K=0){const Z=H.image.width,Pe=H.image.height,qe=yt.convert(J.format),ze=yt.convert(J.type);E.setTexture2D(J,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment),H.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,L.x,L.y,Z,Pe,qe,ze,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,L.x,L.y,H.mipmaps[0].width,H.mipmaps[0].height,qe,H.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,L.x,L.y,qe,ze,H.image),K===0&&J.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(L,H,J,K,Z=0){const Pe=Math.round(L.max.x-L.min.x),qe=Math.round(L.max.y-L.min.y),ze=L.max.z-L.min.z+1,Je=yt.convert(K.format),tt=yt.convert(K.type);let nt;if(K.isData3DTexture)E.setTexture3D(K,0),nt=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)E.setTexture2DArray(K,0),nt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const it=G.getParameter(G.UNPACK_ROW_LENGTH),kt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),bn=G.getParameter(G.UNPACK_SKIP_PIXELS),Jt=G.getParameter(G.UNPACK_SKIP_ROWS),Jn=G.getParameter(G.UNPACK_SKIP_IMAGES),Dt=J.isCompressedTexture?J.mipmaps[Z]:J.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,L.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,L.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,L.min.z),J.isDataTexture||J.isData3DTexture?G.texSubImage3D(nt,Z,H.x,H.y,H.z,Pe,qe,ze,Je,tt,Dt.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(nt,Z,H.x,H.y,H.z,Pe,qe,ze,Je,Dt.data):G.texSubImage3D(nt,Z,H.x,H.y,H.z,Pe,qe,ze,Je,tt,Dt),G.pixelStorei(G.UNPACK_ROW_LENGTH,it),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,kt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,bn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Jn),Z===0&&K.generateMipmaps&&G.generateMipmap(nt),_e.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?E.setTextureCube(L,0):L.isData3DTexture?E.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?E.setTexture2DArray(L,0):E.setTexture2D(L,0),_e.unbindTexture()},this.resetState=function(){U=0,P=0,R=null,_e.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rc?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Co?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fc extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new N;class Fr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bu extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const Hs=new N,ds=new N,ps=new N,ms=new ie,Gs=new ie,lm=new Ve,la=new N,Ws=new N,ua=new N,rf=new ie,ul=new ie,sf=new ie;class um extends At{constructor(e=new Bu){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new st;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dc(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Fr(n,3,0,!1)),fs.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=fs,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),lm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-ps.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ha(la.set(-.5,-.5,0),ps,o,ds,i,s),ha(Ws.set(.5,-.5,0),ps,o,ds,i,s),ha(ua.set(.5,.5,0),ps,o,ds,i,s),rf.set(0,0),ul.set(1,0),sf.set(1,1);let a=e.ray.intersectTriangle(la,Ws,ua,!1,Hs);if(a===null&&(ha(Ws.set(-.5,.5,0),ps,o,ds,i,s),ul.set(0,1),a=e.ray.intersectTriangle(la,ua,Ws,!1,Hs),a===null))return;const c=e.ray.origin.distanceTo(Hs);c<e.near||c>e.far||t.push({distance:c,point:Hs.clone(),uv:Hn.getInterpolation(Hs,la,Ws,ua,rf,ul,sf,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ha(r,e,t,n,i,s){ms.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Gs.x=s*ms.x-i*ms.y,Gs.y=i*ms.x+s*ms.y):Gs.copy(ms),r.copy(e),r.x+=Gs.x,r.y+=Gs.y,r.applyMatrix4(lm)}const fa=new N,of=new N;class hm extends At{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){fa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(fa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){fa.setFromMatrixPosition(e.matrixWorld),of.setFromMatrixPosition(this.matrixWorld);const n=fa.distanceTo(of)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const af=new N,cf=new It,lf=new It,Lb=new N,uf=new Ve,da=new N,hl=new gn,hf=new Ve,fl=new Hr;class zu extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hl.copy(this.boundingSphere),hl.applyMatrix4(i),e.ray.intersectsSphere(hl)!==!1&&(hf.copy(i).invert(),fl.copy(e.ray).applyMatrix4(hf),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;cf.fromBufferAttribute(i.attributes.skinIndex,e),lf.fromBufferAttribute(i.attributes.skinWeight,e),af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=lf.getComponent(s);if(o!==0){const a=cf.getComponent(s);uf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Lb.copy(af).applyMatrix4(uf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pc extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ji extends Yt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=ln,u=ln,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ff=new Ve,Nb=new Ve;class Io{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Nb;ff.multiplyMatrices(a,t[s]),ff.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Io(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ji(t,e,e,Gn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pc),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rs extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new Ve,df=new Ve,pa=[],pf=new Rn,Db=new Ve,Xs=new Wt,qs=new gn;class fm extends Wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Db)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),pf.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(pf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),qs.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),df.multiplyMatrices(n,gs),Xs.matrixWorld=df,Xs.raycast(e,pa);for(let o=0,a=pa.length;o<a;o++){const c=pa[o];c.instanceId=s,c.object=this,t.push(c)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ji(new Float32Array(i*this.count),i,this.count,Eu,jn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Ub(r,e){return r.z-e.z}function Ob(r,e){return e.z-r.z}class Fb{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const _s="batchId",Xi=new Ve,mf=new Ve,kb=new Ve,gf=new Ve,dl=new Po,ma=new Rn,mr=new gn,Ys=new N,pl=new Fb,mn=new Wt,ga=[];function Bb(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class dm extends Wt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new st,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ji(t,e,e,Gn,jn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const c=e.getAttribute(a),{array:l,itemSize:u,normalized:h}=c,f=new l.constructor(n*u),d=new Tt(f,u,h);t.setAttribute(a,d)}if(e.getIndex()!==null){const a=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Tt(a,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(_s,new Tt(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(_s))throw new Error(`BatchedMesh: Geometry cannot use attribute "${_s}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===_s)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Xi),this.getBoundingBoxAt(i,ma).applyMatrix4(Xi),t.union(ma))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Xi),this.getBoundingSphereAt(i,mr).applyMatrix4(Xi),t.union(mr))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,a=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?i.indexCount=l.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,f=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;h.push(!0),f.push(!0);const _=this._geometryCount;this._geometryCount++,kb.toArray(p,_*16),d.needsUpdate=!0,o.push(i),a.push({start:u?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Rn,sphereInitialized:!1,sphere:new gn});const m=this.geometry.getAttribute(_s);for(let g=0;g<i.vertexCount;g++)m.setX(i.vertexStart+g,_);return m.needsUpdate=!0,this.setGeometryAt(_,e),_}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._reservedRanges[e];if(i&&o.count>a.indexCount||t.attributes.position.count>a.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.vertexCount;for(const d in n.attributes){if(d===_s)continue;const p=t.getAttribute(d),_=n.getAttribute(d);Bb(p,_,c);const m=p.itemSize;for(let g=p.count,b=l;g<b;g++){const v=c+g;for(let M=0;M<m;M++)_.setComponent(v,M,0)}_.needsUpdate=!0,_.addUpdateRange(c*m,l*m)}if(i){const d=a.indexStart;for(let p=0;p<o.count;p++)s.setX(d+p,c+o.getX(p));for(let p=o.count,_=a.indexCount;p<_;p++)s.setX(d+p,c);s.needsUpdate=!0,s.addUpdateRange(d,a.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=i?o.count:f.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.box,o=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const a=o.index,c=o.attributes.position,l=this._drawRanges[e];for(let u=l.start,h=l.start+l.count;u<h;u++){let f=u;a&&(f=a.getX(f)),s.expandByPoint(Ys.fromBufferAttribute(c,f))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,ma),ma.getCenter(s.center);const a=o.index,c=o.attributes.position,l=this._drawRanges[e];let u=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let d=h;a&&(d=a.getX(d)),Ys.fromBufferAttribute(c,d),u=Math.max(u,s.center.distanceToSquared(Ys))}s.radius=Math.sqrt(u),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,o=this._geometryCount,a=this.matrixWorld,c=this.geometry;mn.material=this.material,mn.geometry.index=c.index,mn.geometry.attributes=c.attributes,mn.geometry.boundingBox===null&&(mn.geometry.boundingBox=new Rn),mn.geometry.boundingSphere===null&&(mn.geometry.boundingSphere=new gn);for(let l=0;l<o;l++){if(!n[l]||!i[l])continue;const u=s[l];mn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,mn.matrixWorld).premultiply(a),this.getBoundingBoxAt(l,mn.geometry.boundingBox),this.getBoundingSphereAt(l,mn.geometry.boundingSphere),mn.raycast(e,ga);for(let h=0,f=ga.length;h<f;h++){const d=ga[h];d.object=this,d.batchId=l,t.push(d)}ga.length=0}mn.material=null,mn.geometry.index=null,mn.geometry.attributes={},mn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._active,l=this._visibility,u=this._multiDrawStarts,h=this._multiDrawCounts,f=this._drawRanges,d=this.perObjectFrustumCulled;d&&(gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),dl.setFromProjectionMatrix(gf,e.coordinateSystem));let p=0;if(this.sortObjects){mf.copy(this.matrixWorld).invert(),Ys.setFromMatrixPosition(n.matrixWorld).applyMatrix4(mf);for(let g=0,b=l.length;g<b;g++)if(l[g]&&c[g]){this.getMatrixAt(g,Xi),this.getBoundingSphereAt(g,mr).applyMatrix4(Xi);let v=!1;if(d&&(v=!dl.intersectsSphere(mr)),!v){const M=Ys.distanceTo(mr.center);pl.push(f[g],M)}}const _=pl.list,m=this.customSort;m===null?_.sort(s.transparent?Ob:Ub):m.call(this,_,n);for(let g=0,b=_.length;g<b;g++){const v=_[g];u[p]=v.start*a,h[p]=v.count,p++}pl.reset()}else for(let _=0,m=l.length;_<m;_++)if(l[_]&&c[_]){let g=!1;if(d&&(this.getMatrixAt(_,Xi),this.getBoundingSphereAt(_,mr).applyMatrix4(Xi),g=!dl.intersectsSphere(mr)),!g){const b=f[_];u[p]=b.start*a,h[p]=b.count,p++}}this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class hn extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _f=new N,vf=new N,yf=new Ve,ml=new Hr,_a=new gn;class Ui extends At{constructor(e=new st,t=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)_f.fromBufferAttribute(t,i-1),vf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_f.distanceTo(vf);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;yf.copy(i).invert(),ml.copy(e.ray).applyMatrix4(yf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new N,u=new N,h=new N,f=new N,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const g=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let v=g,M=b-1;v<M;v+=d){const U=p.getX(v),P=p.getX(v+1);if(l.fromBufferAttribute(m,U),u.fromBufferAttribute(m,P),ml.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let v=g,M=b-1;v<M;v+=d){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ml.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const xf=new N,bf=new N;class si extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xf.fromBufferAttribute(t,i),bf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xf.distanceTo(bf);e.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pm extends Ui{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vu extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mf=new Ve,au=new Hr,va=new gn,ya=new N;class mm extends At{constructor(e=new st,t=new Vu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;Mf.copy(i).invert(),au.copy(e.ray).applyMatrix4(Mf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=l.getX(p);ya.fromBufferAttribute(h,m),Sf(ya,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)ya.fromBufferAttribute(h,p),Sf(ya,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sf(r,e,t,n,i,s,o){const a=au.distanceSqToPoint(r);if(a<t){const c=new N;au.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class zb extends Yt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:tn,this.magFilter=s!==void 0?s:tn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Vb extends Yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=ln,this.minFilter=ln,this.generateMipmaps=!1,this.needsUpdate=!0}}class mc extends Yt{constructor(e,t,n,i,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,i,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Hb extends mc{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=On}}class Gb extends mc{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Di),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Wb extends Yt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new ie:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],s=[],o=[],a=new N,c=new Ve;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new N)}s[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(qt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(qt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gc extends oi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gm extends gc{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hu(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const xa=new N,gl=new Hu,_l=new Hu,vl=new Hu;class _m extends oi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(xa.subVectors(i[0],i[1]).add(i[0]),l=xa);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(xa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=xa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),gl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,m),_l.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,m),vl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),_l.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),vl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(gl.calc(c),_l.calc(c),vl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wf(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function Xb(r,e){const t=1-r;return t*t*e}function qb(r,e){return 2*(1-r)*r*e}function Yb(r,e){return r*r*e}function Qs(r,e,t,n){return Xb(r,e)+qb(r,t)+Yb(r,n)}function Zb(r,e){const t=1-r;return t*t*t*e}function jb(r,e){const t=1-r;return 3*t*t*r*e}function Jb(r,e){return 3*(1-r)*r*r*e}function $b(r,e){return r*r*r*e}function eo(r,e,t,n,i){return Zb(r,e)+jb(r,t)+Jb(r,n)+$b(r,i)}class Gu extends oi{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(eo(e,i.x,s.x,o.x,a.x),eo(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vm extends oi{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(eo(e,i.x,s.x,o.x,a.x),eo(e,i.y,s.y,o.y,a.y),eo(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wu extends oi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ym extends oi{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xu extends oi{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Qs(e,i.x,s.x,o.x),Qs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qu extends oi{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Qs(e,i.x,s.x,o.x),Qs(e,i.y,s.y,o.y),Qs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yu extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(wf(a,c.x,l.x,u.x,h.x),wf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var qa=Object.freeze({__proto__:null,ArcCurve:gm,CatmullRomCurve3:_m,CubicBezierCurve:Gu,CubicBezierCurve3:vm,EllipseCurve:gc,LineCurve:Wu,LineCurve3:ym,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:qu,SplineCurve:Yu});class xm extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new qa[i.type]().fromJSON(i))}return this}}class go extends xm{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Wu(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Xu(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Gu(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new gc(e,t,n,i,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lo extends st{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=qt(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/t,h=new N,f=new ie,d=new N,p=new N,_=new N;let m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let b=0;b<=t;b++){const v=n+b*u*i,M=Math.sin(v),U=Math.cos(v);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*M,h.y=e[P].y,h.z=e[P].x*U,o.push(h.x,h.y,h.z),f.x=b/t,f.y=P/(e.length-1),a.push(f.x,f.y);const R=c[3*P+0]*M,O=c[3*P+1],A=c[3*P+0]*U;l.push(R,O,A)}}for(let b=0;b<t;b++)for(let v=0;v<e.length-1;v++){const M=v+b*e.length,U=M,P=M+e.length,R=M+e.length+1,O=M+1;s.push(U,P,O),s.push(R,O,P)}this.setIndex(s),this.setAttribute("position",new De(o,3)),this.setAttribute("uv",new De(a,2)),this.setAttribute("normal",new De(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.points,e.segments,e.phiStart,e.phiLength)}}class _c extends Lo{constructor(e=1,t=1,n=4,i=8){const s=new go;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new _c(e.radius,e.length,e.capSegments,e.radialSegments)}}class vc extends st{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new N,u=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ds extends st{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(d,2));function b(){const M=new N,U=new N;let P=0;const R=(t-e)/n;for(let O=0;O<=s;O++){const A=[],y=O/s,F=y*(t-e)+e;for(let X=0;X<=i;X++){const k=X/i,q=k*c+a,ee=Math.sin(q),B=Math.cos(q);U.x=F*ee,U.y=-y*n+m,U.z=F*B,h.push(U.x,U.y,U.z),M.set(ee,R,B).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-y),A.push(p++)}_.push(A)}for(let O=0;O<i;O++)for(let A=0;A<s;A++){const y=_[A][O],F=_[A+1][O],X=_[A+1][O+1],k=_[A][O+1];u.push(y,F,k),u.push(F,X,k),P+=6}l.addGroup(g,P,0),g+=P}function v(M){const U=p,P=new ie,R=new N;let O=0;const A=M===!0?e:t,y=M===!0?1:-1;for(let X=1;X<=i;X++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),p++;const F=p;for(let X=0;X<=i;X++){const q=X/i*c+a,ee=Math.cos(q),B=Math.sin(q);R.x=A*B,R.y=m*y,R.z=A*ee,h.push(R.x,R.y,R.z),f.push(0,y,0),P.x=ee*.5+.5,P.y=B*.5*y+.5,d.push(P.x,P.y),p++}for(let X=0;X<i;X++){const k=U+X,q=F+X;M===!0?u.push(q,q+1,k):u.push(q+1,q,k),O+=3}l.addGroup(g,O,M===!0?1:2),g+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yc extends Ds{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new yc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends st{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new N,M=new N,U=new N;for(let P=0;P<t.length;P+=3)d(t[P+0],v),d(t[P+1],M),d(t[P+2],U),c(v,M,U,b)}function c(b,v,M,U){const P=U+1,R=[];for(let O=0;O<=P;O++){R[O]=[];const A=b.clone().lerp(M,O/P),y=v.clone().lerp(M,O/P),F=P-O;for(let X=0;X<=F;X++)X===0&&O===P?R[O][X]=A:R[O][X]=A.clone().lerp(y,X/F)}for(let O=0;O<P;O++)for(let A=0;A<2*(P-O)-1;A++){const y=Math.floor(A/2);A%2===0?(f(R[O][y+1]),f(R[O+1][y]),f(R[O][y])):(f(R[O][y+1]),f(R[O+1][y+1]),f(R[O+1][y]))}}function l(b){const v=new N;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(b),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const b=new N;for(let v=0;v<s.length;v+=3){b.x=s[v+0],b.y=s[v+1],b.z=s[v+2];const M=m(b)/2/Math.PI+.5,U=g(b)/Math.PI+.5;o.push(M,1-U)}p(),h()}function h(){for(let b=0;b<o.length;b+=6){const v=o[b+0],M=o[b+2],U=o[b+4],P=Math.max(v,M,U),R=Math.min(v,M,U);P>.9&&R<.1&&(v<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function d(b,v){const M=b*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function p(){const b=new N,v=new N,M=new N,U=new N,P=new ie,R=new ie,O=new ie;for(let A=0,y=0;A<s.length;A+=9,y+=6){b.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),M.set(s[A+6],s[A+7],s[A+8]),P.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),O.set(o[y+4],o[y+5]),U.copy(b).add(v).add(M).divideScalar(3);const F=m(U);_(P,y+0,b,F),_(R,y+2,v,F),_(O,y+4,M,F)}}function _(b,v,M,U){U<0&&b.x===1&&(o[v]=b.x-1),M.x===0&&M.z===0&&(o[v]=U/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.vertices,e.indices,e.radius,e.details)}}class xc extends sr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xc(e.radius,e.detail)}}const ba=new N,Ma=new N,yl=new N,Sa=new Hn;class bm extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Dr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:g}=Sa;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Sa.getNormal(yl),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const v=(b+1)%3,M=h[b],U=h[v],P=Sa[u[b]],R=Sa[u[v]],O=`${M}_${U}`,A=`${U}_${M}`;A in f&&f[A]?(yl.dot(f[A].normal)<=s&&(d.push(P.x,P.y,P.z),d.push(R.x,R.y,R.z)),f[A]=null):O in f||(f[O]={index0:l[b],index1:l[v],normal:yl.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];ba.fromBufferAttribute(a,_),Ma.fromBufferAttribute(a,m),d.push(ba.x,ba.y,ba.z),d.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new De(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ur extends go{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new go().fromJSON(i))}return this}}const Kb={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Mm(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(n&&(s=iM(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(let p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return _o(s,o,t,a,c,d,0),o}};function Mm(r,e,t,n,i){let s,o;if(i===pM(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Ef(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Ef(s,r[s],r[s+1],o);return o&&bc(o,o.next)&&(yo(o),o=o.next),o}function kr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(bc(t,t.next)||Ht(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _o(r,e,t,n,i,s,o){if(!r)return;!o&&s&&cM(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?eM(r,n,i,s):Qb(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),yo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=tM(kr(r),e,t),_o(r,e,t,n,i,s,2)):o===2&&nM(r,e,t,n,i,s):_o(kr(r),e,t,n,i,s,1);break}}}function Qb(r){const e=r.prev,t=r,n=r.next;if(Ht(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ms(i,a,s,c,o,l,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function eM(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ht(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,g=cu(d,p,e,t,n),b=cu(_,m,e,t,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=g&&M&&M.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&Ms(a,u,c,h,l,f,v.x,v.y)&&Ht(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Ms(a,u,c,h,l,f,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&Ms(a,u,c,h,l,f,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Ms(a,u,c,h,l,f,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tM(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!bc(i,s)&&Sm(i,n,n.next,s)&&vo(i,s)&&vo(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),yo(n),yo(n.next),n=r=s),n=n.next}while(n!==r);return kr(n)}function nM(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hM(o,a)){let c=wm(o,a);o=kr(o,o.next),c=kr(c,c.next),_o(o,e,t,n,i,s,0),_o(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function iM(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=Mm(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(uM(l));for(i.sort(rM),s=0;s<i.length;s++)t=sM(i[s],t);return t}function rM(r,e){return r.x-e.x}function sM(r,e){const t=oM(r,e);if(!t)return e;const n=wm(t,r);return kr(n,n.next),kr(t,t.next)}function oM(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Ms(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),vo(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&aM(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function aM(r,e){return Ht(r.prev,r,e.prev)<0&&Ht(e.next,r,r.next)<0}function cM(r,e,t,n){let i=r;do i.z===0&&(i.z=cu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,lM(i)}function lM(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function cu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function uM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ms(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function hM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!fM(r,e)&&(vo(r,e)&&vo(e,r)&&dM(r,e)&&(Ht(r.prev,r,e.prev)||Ht(r,e.prev,e))||bc(r,e)&&Ht(r.prev,r,r.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function bc(r,e){return r.x===e.x&&r.y===e.y}function Sm(r,e,t,n){const i=Ea(Ht(r,e,t)),s=Ea(Ht(r,e,n)),o=Ea(Ht(t,n,r)),a=Ea(Ht(t,n,e));return!!(i!==s&&o!==a||i===0&&wa(r,t,e)||s===0&&wa(r,n,e)||o===0&&wa(t,r,n)||a===0&&wa(t,e,n))}function wa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ea(r){return r>0?1:r<0?-1:0}function fM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Sm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function vo(r,e){return Ht(r.prev,r,r.next)<0?Ht(r,e,r.next)>=0&&Ht(r,r.prev,e)>=0:Ht(r,e,r.prev)<0||Ht(r,r.next,e)<0}function dM(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wm(r,e){const t=new lu(r.i,r.x,r.y),n=new lu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ef(r,e,t,n){const i=new lu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function lu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pM(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class pi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Af(e),Tf(n,e);let o=e.length;t.forEach(Af);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Tf(n,t[c]);const a=Kb.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Af(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Tf(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Mc extends st{constructor(e=new Ur([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new De(i,3)),this.setAttribute("uv",new De(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:mM;let v,M=!1,U,P,R,O;g&&(v=g.getSpacedPoints(u),M=!0,f=!1,U=g.computeFrenetFrames(u,!1),P=new N,R=new N,O=new N),f||(m=0,d=0,p=0,_=0);const A=a.extractPoints(l);let y=A.shape;const F=A.holes;if(!pi.isClockWise(y)){y=y.reverse();for(let fe=0,ue=F.length;fe<ue;fe++){const xe=F[fe];pi.isClockWise(xe)&&(F[fe]=xe.reverse())}}const k=pi.triangulateShape(y,F),q=y;for(let fe=0,ue=F.length;fe<ue;fe++){const xe=F[fe];y=y.concat(xe)}function ee(fe,ue,xe){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(ue,xe)}const B=y.length,he=k.length;function z(fe,ue,xe){let _e,ve,D;const E=fe.x-ue.x,W=fe.y-ue.y,ne=xe.x-fe.x,oe=xe.y-fe.y,de=E*E+W*W,Ye=E*oe-W*ne;if(Math.abs(Ye)>Number.EPSILON){const me=Math.sqrt(de),He=Math.sqrt(ne*ne+oe*oe),je=ue.x-W/me,be=ue.y+E/me,Ne=xe.x-oe/He,Qe=xe.y+ne/He,Fe=((Ne-je)*oe-(Qe-be)*ne)/(E*oe-W*ne);_e=je+E*Fe-fe.x,ve=be+W*Fe-fe.y;const ke=_e*_e+ve*ve;if(ke<=2)return new ie(_e,ve);D=Math.sqrt(ke/2)}else{let me=!1;E>Number.EPSILON?ne>Number.EPSILON&&(me=!0):E<-Number.EPSILON?ne<-Number.EPSILON&&(me=!0):Math.sign(W)===Math.sign(oe)&&(me=!0),me?(_e=-W,ve=E,D=Math.sqrt(de)):(_e=E,ve=W,D=Math.sqrt(de/2))}return new ie(_e/D,ve/D)}const re=[];for(let fe=0,ue=q.length,xe=ue-1,_e=fe+1;fe<ue;fe++,xe++,_e++)xe===ue&&(xe=0),_e===ue&&(_e=0),re[fe]=z(q[fe],q[xe],q[_e]);const ae=[];let pe,Re=re.concat();for(let fe=0,ue=F.length;fe<ue;fe++){const xe=F[fe];pe=[];for(let _e=0,ve=xe.length,D=ve-1,E=_e+1;_e<ve;_e++,D++,E++)D===ve&&(D=0),E===ve&&(E=0),pe[_e]=z(xe[_e],xe[D],xe[E]);ae.push(pe),Re=Re.concat(pe)}for(let fe=0;fe<m;fe++){const ue=fe/m,xe=d*Math.cos(ue*Math.PI/2),_e=p*Math.sin(ue*Math.PI/2)+_;for(let ve=0,D=q.length;ve<D;ve++){const E=ee(q[ve],re[ve],_e);Q(E.x,E.y,-xe)}for(let ve=0,D=F.length;ve<D;ve++){const E=F[ve];pe=ae[ve];for(let W=0,ne=E.length;W<ne;W++){const oe=ee(E[W],pe[W],_e);Q(oe.x,oe.y,-xe)}}}const Ee=p+_;for(let fe=0;fe<B;fe++){const ue=f?ee(y[fe],Re[fe],Ee):y[fe];M?(R.copy(U.normals[0]).multiplyScalar(ue.x),P.copy(U.binormals[0]).multiplyScalar(ue.y),O.copy(v[0]).add(R).add(P),Q(O.x,O.y,O.z)):Q(ue.x,ue.y,0)}for(let fe=1;fe<=u;fe++)for(let ue=0;ue<B;ue++){const xe=f?ee(y[ue],Re[ue],Ee):y[ue];M?(R.copy(U.normals[fe]).multiplyScalar(xe.x),P.copy(U.binormals[fe]).multiplyScalar(xe.y),O.copy(v[fe]).add(R).add(P),Q(O.x,O.y,O.z)):Q(xe.x,xe.y,h/u*fe)}for(let fe=m-1;fe>=0;fe--){const ue=fe/m,xe=d*Math.cos(ue*Math.PI/2),_e=p*Math.sin(ue*Math.PI/2)+_;for(let ve=0,D=q.length;ve<D;ve++){const E=ee(q[ve],re[ve],_e);Q(E.x,E.y,h+xe)}for(let ve=0,D=F.length;ve<D;ve++){const E=F[ve];pe=ae[ve];for(let W=0,ne=E.length;W<ne;W++){const oe=ee(E[W],pe[W],_e);M?Q(oe.x,oe.y+v[u-1].y,v[u-1].x+xe):Q(oe.x,oe.y,h+xe)}}}V(),$();function V(){const fe=i.length/3;if(f){let ue=0,xe=B*ue;for(let _e=0;_e<he;_e++){const ve=k[_e];Ae(ve[2]+xe,ve[1]+xe,ve[0]+xe)}ue=u+m*2,xe=B*ue;for(let _e=0;_e<he;_e++){const ve=k[_e];Ae(ve[0]+xe,ve[1]+xe,ve[2]+xe)}}else{for(let ue=0;ue<he;ue++){const xe=k[ue];Ae(xe[2],xe[1],xe[0])}for(let ue=0;ue<he;ue++){const xe=k[ue];Ae(xe[0]+B*u,xe[1]+B*u,xe[2]+B*u)}}n.addGroup(fe,i.length/3-fe,0)}function $(){const fe=i.length/3;let ue=0;te(q,ue),ue+=q.length;for(let xe=0,_e=F.length;xe<_e;xe++){const ve=F[xe];te(ve,ue),ue+=ve.length}n.addGroup(fe,i.length/3-fe,1)}function te(fe,ue){let xe=fe.length;for(;--xe>=0;){const _e=xe;let ve=xe-1;ve<0&&(ve=fe.length-1);for(let D=0,E=u+m*2;D<E;D++){const W=B*D,ne=B*(D+1),oe=ue+_e+W,de=ue+ve+W,Ye=ue+ve+ne,me=ue+_e+ne;le(oe,de,Ye,me)}}}function Q(fe,ue,xe){c.push(fe),c.push(ue),c.push(xe)}function Ae(fe,ue,xe){Le(fe),Le(ue),Le(xe);const _e=i.length/3,ve=b.generateTopUV(n,i,_e-3,_e-2,_e-1);G(ve[0]),G(ve[1]),G(ve[2])}function le(fe,ue,xe,_e){Le(fe),Le(ue),Le(_e),Le(ue),Le(xe),Le(_e);const ve=i.length/3,D=b.generateSideWallUV(n,i,ve-6,ve-3,ve-2,ve-1);G(D[0]),G(D[1]),G(D[3]),G(D[1]),G(D[2]),G(D[3])}function Le(fe){i.push(c[fe*3+0]),i.push(c[fe*3+1]),i.push(c[fe*3+2])}function G(fe){s.push(fe.x),s.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new qa[i.type]().fromJSON(i)),new Mc(n,e.options)}}const mM={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ie(s,o),new ie(a,c),new ie(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-h),new ie(f,1-p),new ie(_,1-g)]:[new ie(a,1-c),new ie(u,1-h),new ie(d,1-p),new ie(m,1-g)]}};function gM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sc extends sr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sc(e.radius,e.detail)}}class No extends sr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new No(e.radius,e.detail)}}class wc extends st{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,d=new N,p=new ie;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=s+m/n*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const b=g+m,v=b,M=b+n+1,U=b+n+2,P=b+1;a.push(v,M,P),a.push(M,U,P)}}this.setIndex(a),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ec extends st{constructor(e=new Ur([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new De(i,3)),this.setAttribute("normal",new De(s,3)),this.setAttribute("uv",new De(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const p=f.holes;pi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const b=p[m];pi.isClockWise(b)===!0&&(p[m]=b.reverse())}const _=pi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const b=p[m];d=d.concat(b)}for(let m=0,g=d.length;m<g;m++){const b=d[m];i.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=_.length;m<g;m++){const b=_[m],v=b[0]+h,M=b[1]+h,U=b[2]+h;n.push(v,M,U),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _M(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Ec(n,e.curveSegments)}}function _M(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Do extends st{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new N,f=new N,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const b=[],v=g/n;let M=0;g===0&&o===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let U=0;U<=t;U++){const P=U/t;h.x=-e*Math.cos(i+P*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+P*s)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(P+M,1-v),b.push(l++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const v=u[g][b+1],M=u[g][b],U=u[g+1][b],P=u[g+1][b+1];(g!==0||o>0)&&d.push(v,M,P),(g!==n-1||c<Math.PI)&&d.push(M,U,P)}this.setIndex(d),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ac extends sr{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class Tc extends st{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new N,h=new N,f=new N;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,b=(i+1)*d+p;o.push(_,m,b),o.push(m,g,b)}this.setIndex(o),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Cc extends st{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],u=[],h=new N,f=new N,d=new N,p=new N,_=new N,m=new N,g=new N;for(let v=0;v<=n;++v){const M=v/n*s*Math.PI*2;b(M,s,o,e,d),b(M+.01,s,o,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let U=0;U<=i;++U){const P=U/i*Math.PI*2,R=-t*Math.cos(P),O=t*Math.sin(P);h.x=d.x+(R*g.x+O*_.x),h.y=d.y+(R*g.y+O*_.y),h.z=d.z+(R*g.z+O*_.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(v/n),u.push(U/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){const U=(i+1)*(v-1)+(M-1),P=(i+1)*v+(M-1),R=(i+1)*v+M,O=(i+1)*(v-1)+M;a.push(U,P,O),a.push(P,R,O)}this.setIndex(a),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(u,2));function b(v,M,U,P,R){const O=Math.cos(v),A=Math.sin(v),y=U/M*v,F=Math.cos(y);R.x=P*(2+F)*.5*O,R.y=P*(2+F)*A*.5,R.z=P*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Rc extends st{constructor(e=new qu(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,c=new N,l=new ie;let u=new N;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(d,2));function _(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),b(),g()}function m(v){u=e.getPointAt(v/t,u);const M=o.normals[v],U=o.binormals[v];for(let P=0;P<=i;P++){const R=P/i*Math.PI*2,O=Math.sin(R),A=-Math.cos(R);c.x=A*M.x+O*U.x,c.y=A*M.y+O*U.y,c.z=A*M.z+O*U.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=t;v++)for(let M=1;M<=i;M++){const U=(i+1)*(v-1)+(M-1),P=(i+1)*v+(M-1),R=(i+1)*v+M,O=(i+1)*(v-1)+M;p.push(U,P,O),p.push(P,R,O)}}function b(){for(let v=0;v<=t;v++)for(let M=0;M<=i;M++)l.x=v/t,l.y=M/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Rc(new qa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Em extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new N,s=new N;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let p=f,_=f+d;p<_;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),b=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,b),Cf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Cf(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Cf(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Rf=Object.freeze({__proto__:null,BoxGeometry:Gr,CapsuleGeometry:_c,CircleGeometry:vc,ConeGeometry:yc,CylinderGeometry:Ds,DodecahedronGeometry:xc,EdgesGeometry:bm,ExtrudeGeometry:Mc,IcosahedronGeometry:Sc,LatheGeometry:Lo,OctahedronGeometry:No,PlaneGeometry:Wr,PolyhedronGeometry:sr,RingGeometry:wc,ShapeGeometry:Ec,SphereGeometry:Do,TetrahedronGeometry:Ac,TorusGeometry:Tc,TorusKnotGeometry:Cc,TubeGeometry:Rc,WireframeGeometry:Em});class Am extends yn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Tm extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zu extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cm extends Zu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ya extends yn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rm extends yn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Pm extends yn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ju extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Im extends yn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lm extends hn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ir(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Nm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Ju(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function vM(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*i;if(!(p<t||p>=n)){h.push(l.times[d]);for(let _=0;_<u;++_)f.push(l.values[d*u+_])}}h.length!==0&&(l.times=Ir(h,l.times.constructor),l.values=Ir(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s}function yM(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=a.times.length-1;let _;if(s<=a.times[0]){const g=u,b=h-u;_=a.values.slice(g,b)}else if(s>=a.times[p]){const g=p*h+u,b=g+h-u;_=a.values.slice(g,b)}else{const g=a.createInterpolant(),b=u,v=h-u;g.evaluate(s),_=g.resultBuffer.slice(b,v)}c==="quaternion"&&new un().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let g=0;g<m;++g){const b=g*d+f;if(c==="quaternion")un.multiplyQuaternionsFlat(l.values,b,_,0,l.values,b);else{const v=d-f*2;for(let M=0;M<v;++M)l.values[b+M]-=_[M]}}}return r.blendMode=Pu,r}const xM={convertArray:Ir,isTypedArray:Nm,getKeyframeOrder:Dm,sortedArray:uu,flattenJSON:Ju,subclip:vM,makeClipAdditive:yM};class Uo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Um extends Uo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cr,endingEnd:Cr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rr:s=e,a=2*t-n;break;case co:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rr:o=e,c=2*n-t;break;case co:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*m+(1.5+d)*_+.5*p,M=d*m-d*_;for(let U=0;U!==a;++U)s[U]=g*o[u+U]+b*o[l+U]+v*o[c+U]+M*o[h+U];return s}}class $u extends Uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class Om extends Uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ai{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ir(t,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ir(e.times,Array),values:Ir(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Om(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Um(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Nm(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Va,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ao;class Xr extends ai{}Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=oo;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ku extends ai{}Ku.prototype.ValueTypeName="color";class xo extends ai{}xo.prototype.ValueTypeName="number";class Fm extends Uo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)un.slerpFlat(s,0,o,l-a,o,l,c);return s}}class qr extends ai{InterpolantFactoryMethodLinear(e){return new Fm(this.times,this.values,this.getValueSize(),e)}}qr.prototype.ValueTypeName="quaternion";qr.prototype.DefaultInterpolation=ao;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends ai{}Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=oo;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends ai{}Br.prototype.ValueTypeName="vector";class zr{constructor(e="",t=-1,n=[],i=ic){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(MM(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ai.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Dm(c);c=uu(c,1,u),l=uu(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new xo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,_){if(d.length!==0){const m=[],g=[];Ju(d,m,g,p),m.length!==0&&_.push(new h(f,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let b=0;b!==f[p].morphTargets.length;++b){const v=f[p];m.push(v.time),g.push(v.morphTarget===_?1:0)}i.push(new xo(".morphTargetInfluence["+_+"]",m,g))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Br,d+".position",f,"pos",i),n(qr,d+".quaternion",f,"rot",i),n(Br,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return Br;case"color":return Ku;case"quaternion":return qr;case"bool":case"boolean":return Xr;case"string":return Yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function MM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bM(r.type);if(r.times===void 0){const t=[],n=[];Ju(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Pi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Qu{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const km=new Qu;class fn{constructor(e){this.manager=e!==void 0?e:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class SM extends Error{constructor(e,t){super(e),this.response=t}}class ri extends fn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:i});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ei[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){b();function b(){h.read().then(({done:v,value:M})=>{if(v)g.close();else{_+=M.byteLength;const U=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let P=0,R=u.length;P<R;P++){const O=u[P];O.onProgress&&O.onProgress(U)}g.enqueue(M),b()}})}}});return new Response(m)}else throw new SM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Pi.add(e,l);const u=Ei[e];delete Ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wM extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ri(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=zr.parse(e[n]);t.push(i)}return t}}class EM extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],a=new mc,c=new ri(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const d=s.parse(f,!0);o[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=tn),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){o[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)o[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),o[p].format=f.format,o[p].width=f.width,o[p].height=f.height}a.image=o}else a.image.width=f.width,a.image.height=f.height,a.mipmaps=f.mipmaps;f.mipmapCount===1&&(a.minFilter=tn),a.format=f.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class bo extends fn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=mo("img");function c(){u(),Pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class AM extends fn{constructor(e){super(e)}load(e,t,n,i){const s=new Ro;s.colorSpace=En;const o=new bo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class Bm extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Ji,a=new ri(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:On,o.wrapT=l.wrapT!==void 0?l.wrapT:On,o.magFilter=l.magFilter!==void 0?l.magFilter:tn,o.minFilter=l.minFilter!==void 0?l.minFilter:tn,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=ni),l.mipmapCount===1&&(o.minFilter=tn),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class zm extends fn{constructor(e){super(e)}load(e,t,n,i){const s=new Yt,o=new bo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class or extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Vm extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xl=new Ve,Pf=new N,If=new N;class eh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TM extends eh{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class th extends or{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new TM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lf=new Ve,Zs=new N,bl=new N;class CM extends eh{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zs),bl.copy(n.position),bl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bl),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}}class nh extends or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class RM extends eh{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ih extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new RM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rh extends or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hm extends or{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Gm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new N)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class Wm extends or{constructor(e=new Gm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Pc extends fn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new ri(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=Pc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Ce().setHex(o.value);break;case"v2":i.uniforms[s].value=new ie().fromArray(o.value);break;case"v3":i.uniforms[s].value=new N().fromArray(o.value);break;case"v4":i.uniforms[s].value=new It().fromArray(o.value);break;case"m3":i.uniforms[s].value=new ot().fromArray(o.value);break;case"m4":i.uniforms[s].value=new Ve().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ie().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Am,SpriteMaterial:Bu,RawShaderMaterial:Tm,ShaderMaterial:Yn,PointsMaterial:Vu,MeshPhysicalMaterial:Cm,MeshStandardMaterial:Zu,MeshPhongMaterial:Ya,MeshToonMaterial:Rm,MeshNormalMaterial:Pm,MeshLambertMaterial:ju,MeshDepthMaterial:lc,MeshDistanceMaterial:ku,MeshBasicMaterial:ii,MeshMatcapMaterial:Im,LineDashedMaterial:Lm,LineBasicMaterial:hn,Material:yn};return new t[e]}}class Za{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xm extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class qm extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ri(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=s(d,m.buffer),b=xs(m.type,g),v=new dc(b,m.stride);return v.uuid=m.uuid,t[p]=v,v}function s(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new Xm:new st,a=e.data.index;if(a!==void 0){const d=xs(a.type,a.array);o.setIndex(new Tt(d,1))}const c=e.data.attributes;for(const d in c){const p=c[d];let _;if(p.isInterleavedBufferAttribute){const m=i(e.data,p.data);_=new Fr(m,p.itemSize,p.offset,p.normalized)}else{const m=xs(p.type,p.array),g=p.isInstancedBufferAttribute?Rs:Tt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const p=l[d],_=[];for(let m=0,g=p.length;m<g;m++){const b=p[m];let v;if(b.isInterleavedBufferAttribute){const M=i(e.data,b.data);v=new Fr(M,b.itemSize,b.offset,b.normalized)}else{const M=xs(b.type,b.array);v=new Tt(M,b.itemSize,b.normalized)}b.name!==void 0&&(v.name=b.name),_.push(v)}o.morphAttributes[d]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,p=h.length;d!==p;++d){const _=h[d];o.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new N;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new gn(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class PM extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?Za.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new ri(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Za.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new ri(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),a=JSON.parse(o),c=a.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,a,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const f in o)if(o[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,i,a,o,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Ur().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Io().fromJSON(e[s],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new qm;for(let s=0,o=e.length;s<o;s++){let a;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(c);break;default:c.type in Rf?a=Rf[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}a.uuid=c.uuid,c.name!==void 0&&(a.name=c.name),c.userData!==void 0&&(a.userData=c.userData),n[c.uuid]=a}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Pc;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=zr.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(u)}else return c.data?{data:xs(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Qu(t);s=new bo(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new Ji(g.data,g.width,g.height)))}i[h.uuid]=new Pr(d)}else{const d=a(h.url);i[h.uuid]=new Pr(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const a=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(c)}else return o.data?{data:xs(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new bo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const c=e[o],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=await s(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Ji(p.data,p.width,p.height)))}n[c.uuid]=new Pr(u)}else{const u=await s(c.url);n[c.uuid]=new Pr(u)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const c=t[a.image],l=c.data;let u;Array.isArray(l)?(u=new Ro,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Ji:u=new Yt,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=a.uuid,a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,IM)),a.channel!==void 0&&(u.channel=a.channel),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&(u.wrapS=n(a.wrap[0],Nf),u.wrapT=n(a.wrap[1],Nf)),a.format!==void 0&&(u.format=a.format),a.internalFormat!==void 0&&(u.internalFormat=a.internalFormat),a.type!==void 0&&(u.type=a.type),a.colorSpace!==void 0&&(u.colorSpace=a.colorSpace),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,Df)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,Df)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.generateMipmaps!==void 0&&(u.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(u.compareFunction=a.compareFunction),a.userData!==void 0&&(u.userData=a.userData),i[a.uuid]=u}return i}parseObject(e,t,n,i,s){let o;function a(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let u,h;switch(e.type){case"Scene":o=new fc,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Ce(e.background):o.background=l(e.background)),e.environment!==void 0&&(o.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new hc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new uc(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new en(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Ls(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new rh(e.color,e.intensity);break;case"DirectionalLight":o=new ih(e.color,e.intensity);break;case"PointLight":o=new nh(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Hm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new th(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new Vm(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new Wm().fromJSON(e);break;case"SkinnedMesh":u=a(e.geometry),h=c(e.material),o=new zu(u,h),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":u=a(e.geometry),h=c(e.material),o=new Wt(u,h);break;case"InstancedMesh":u=a(e.geometry),h=c(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;o=new fm(u,h,f),o.instanceMatrix=new Rs(new Float32Array(d.array),16),p!==void 0&&(o.instanceColor=new Rs(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=a(e.geometry),h=c(e.material),o=new dm(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),o.geometry=u,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(_=>{const m=new Rn;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const g=new gn;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:g}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":o=new hm;break;case"Line":o=new Ui(a(e.geometry),c(e.material));break;case"LineLoop":o=new pm(a(e.geometry),c(e.material));break;case"LineSegments":o=new si(a(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new mm(a(e.geometry),c(e.material));break;case"Sprite":o=new um(c(e.material));break;case"Group":o=new ji;break;case"Bone":o=new pc;break;default:o=new At}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)o.add(this.parseObject(f[d],t,n,i,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];o.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const IM={UVMapping:nc,CubeReflectionMapping:Di,CubeRefractionMapping:Qi,EquirectangularReflectionMapping:no,EquirectangularRefractionMapping:io,CubeUVReflectionMapping:Ps},Nf={RepeatWrapping:Ri,ClampToEdgeWrapping:On,MirroredRepeatWrapping:ro},Df={NearestFilter:ln,NearestMipmapNearestFilter:xu,NearestMipmapLinearFilter:ys,LinearFilter:tn,LinearMipmapNearestFilter:$s,LinearMipmapLinearFilter:ni};class LM extends fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pi.add(e,c),s.manager.itemStart(e)}}let Aa;class sh{static getContext(){return Aa===void 0&&(Aa=new(window.AudioContext||window.webkitAudioContext)),Aa}static setContext(e){Aa=e}}class NM extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ri(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const l=c.slice(0);sh.getContext().decodeAudioData(l,function(h){t(h)}).catch(a)}catch(l){a(l)}},n,i);function a(c){i?i(c):console.error(c),s.manager.itemError(e)}}}const Uf=new Ve,Of=new Ve,gr=new Ve;class DM{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new en,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new en,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,gr.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Dr*t.fov*.5)/t.zoom;let a,c;Of.elements[12]=-i,Uf.elements[12]=i,a=-o*t.aspect+s,c=o*t.aspect+s,gr.elements[0]=2*t.near/(c-a),gr.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(gr),a=-o*t.aspect-s,c=o*t.aspect-s,gr.elements[0]=2*t.near/(c-a),gr.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(gr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Of),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Uf)}}class Ym{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ff(){return(typeof performance>"u"?Date:performance).now()}const _r=new N,kf=new un,UM=new N,vr=new N;class OM extends At{constructor(){super(),this.type="AudioListener",this.context=sh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ym}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_r,kf,UM),vr.set(0,0,-1).applyQuaternion(kf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_r.x,i),t.positionY.linearRampToValueAtTime(_r.y,i),t.positionZ.linearRampToValueAtTime(_r.z,i),t.forwardX.linearRampToValueAtTime(vr.x,i),t.forwardY.linearRampToValueAtTime(vr.y,i),t.forwardZ.linearRampToValueAtTime(vr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_r.x,_r.y,_r.z),t.setOrientation(vr.x,vr.y,vr.z,n.x,n.y,n.z)}}class Zm extends At{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const yr=new N,Bf=new un,FM=new N,xr=new N;class kM extends Zm{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(yr,Bf,FM),xr.set(0,0,1).applyQuaternion(Bf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(yr.x,n),t.positionY.linearRampToValueAtTime(yr.y,n),t.positionZ.linearRampToValueAtTime(yr.z,n),t.orientationX.linearRampToValueAtTime(xr.x,n),t.orientationY.linearRampToValueAtTime(xr.y,n),t.orientationZ.linearRampToValueAtTime(xr.z,n)}else t.setPosition(yr.x,yr.y,yr.z),t.setOrientation(xr.x,xr.y,xr.z)}}class BM{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class jm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){un.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;un.multiplyQuaternionsFlat(e,o,e,t,e,n),un.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const oh="\\[\\]\\.:\\/",zM=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",VM="[^"+oh.replace("\\.","")+"]",HM=/((?:WC+[\/:])*)/.source.replace("WC",ah),GM=/(WCOD+)?/.source.replace("WCOD",VM),WM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),XM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),qM=new RegExp("^"+HM+GM+WM+XM+"$"),YM=["material","materials","bones","map"];class ZM{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zM,"")}static parseTrackName(e){const t=qM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);YM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=ZM;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Wn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let p=t[d];if(p===void 0){p=c++,t[d]=p,e.push(f);for(let _=0,m=o;_!==m;++_)s[_].push(new bt(f,n[_],i[_]))}else if(p<l){a=e[p];const _=--l,m=e[_];t[m.uuid]=p,e[p]=m,t[d]=_,e[_]=f;for(let g=0,b=o;g!==b;++g){const v=s[g],M=v[_];let U=v[p];v[p]=M,U===void 0&&(U=new bt(f,n[g],i[g])),v[_]=U}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let d=0,p=i;d!==p;++d){const _=n[d],m=_[h],g=_[u];_[u]=m,_[h]=g}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],p=--o,_=e[p];t[d.uuid]=h,e[h]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let m=0,g=i;m!==g;++m){const b=n[m],v=b[f],M=b[p];b[h]=v,b[f]=M,b.pop()}}else{const f=--o,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[h]=m[f],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(h);for(let f=u,d=c.length;f!==d;++f){const p=c[f];h[f]=new bt(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}}class Jm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Cr,endingEnd:Cr};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Pu:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case ic:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Np;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Ip){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Rr,i.endingEnd=Rr):(e?i.endingStart=this.zeroSlopeAtStart?Rr:Cr:i.endingStart=co,t?i.endingEnd=this.zeroSlopeAtEnd?Rr:Cr:i.endingEnd=co)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const JM=new Float32Array(1);class $M extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new jm(bt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new $u(new Float32Array(2),new Float32Array(2),1,JM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?zr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ic),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Jm(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?zr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ch{constructor(e){this.value=e}clone(){return new ch(this.value.clone===void 0?this.value:this.value.clone())}}let KM=0;class QM extends gi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:KM++}),this.name="",this.usage=fo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class eS extends dc{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class tS{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const zf=new Ve;class $m{constructor(e,t,n=0,i=1/0){this.ray=new Hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(e,t=!0,n=[]){return hu(e,this,n,t),n.sort(Vf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hu(e[i],this,n,t);return n.sort(Vf),n}}function Vf(r,e){return r.distance-e.distance}function hu(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)hu(i[s],e,t,!0)}}class fu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nS{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Hf=new ie;class iS{constructor(e=new ie(1/0,1/0),t=new ie(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gf=new N,Ta=new N;class rS{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Gf.subVectors(e,this.start),Ta.subVectors(this.end,this.start);const n=Ta.dot(Ta);let s=Ta.dot(Gf)/n;return t&&(s=qt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Wf=new N;class sS extends At{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new st,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new De(i,3));const s=new hn({fog:!1,toneMapped:!1});this.cone=new si(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Wf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Wf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const qi=new N,Ca=new Ve,Ml=new Ve;class oS extends si{constructor(e){const t=Km(e),n=new st,i=[],s=[],o=new Ce(0,0,1),a=new Ce(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new De(i,3)),n.setAttribute("color",new De(s,3));const c=new hn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ml.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Ca.multiplyMatrices(Ml,a.matrixWorld),qi.setFromMatrixPosition(Ca),i.setXYZ(o,qi.x,qi.y,qi.z),Ca.multiplyMatrices(Ml,a.parent.matrixWorld),qi.setFromMatrixPosition(Ca),i.setXYZ(o+1,qi.x,qi.y,qi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Km(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Km(r.children[t]));return e}class aS extends Wt{constructor(e,t,n){const i=new Do(t,4,2),s=new ii({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const cS=new N,Xf=new Ce,qf=new Ce;class lS extends At{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new No(t);i.rotateY(Math.PI*.5),this.material=new ii({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Tt(o,3)),this.add(new Wt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Xf.copy(this.light.color),qf.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Xf:qf;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(cS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Qm extends si{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,p=-a;f<=t;f++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const _=f===s?n:i;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new st;u.setAttribute("position",new De(c,3)),u.setAttribute("color",new De(l,3));const h=new hn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class uS extends si{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Ce(s),o=new Ce(o);const a=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;a.push(0,0,0),a.push(d,0,p);const _=h&1?s:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?s:o,d=e-e/n*h;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d;a.push(m,0,g),c.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d,a.push(m,0,g),c.push(f.r,f.g,f.b)}}const l=new st;l.setAttribute("position",new De(a,3)),l.setAttribute("color",new De(c,3));const u=new hn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Yf=new N,Ra=new N,Zf=new N;class hS extends At{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new st;i.setAttribute("position",new De([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new hn({fog:!1,toneMapped:!1});this.lightPlane=new Ui(i,s),this.add(this.lightPlane),i=new st,i.setAttribute("position",new De([0,0,0,0,0,1],3)),this.targetLine=new Ui(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Yf.setFromMatrixPosition(this.light.matrixWorld),Ra.setFromMatrixPosition(this.light.target.matrixWorld),Zf.subVectors(Ra,Yf),this.lightPlane.lookAt(Ra),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ra),this.targetLine.scale.z=Zf.length()}}const Pa=new N,Xt=new ac;class fS extends si{constructor(e){const t=new st,n=new hn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){c(p),c(_)}function c(p){i.push(0,0,0),s.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new De(i,3)),t.setAttribute("color",new De(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Ce(16755200),u=new Ce(16711680),h=new Ce(43775),f=new Ce(16777215),d=new Ce(3355443);this.setColors(l,u,h,f,d)}setColors(e,t,n,i,s){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Xt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),jt("c",t,e,Xt,0,0,-1),jt("t",t,e,Xt,0,0,1),jt("n1",t,e,Xt,-n,-i,-1),jt("n2",t,e,Xt,n,-i,-1),jt("n3",t,e,Xt,-n,i,-1),jt("n4",t,e,Xt,n,i,-1),jt("f1",t,e,Xt,-n,-i,1),jt("f2",t,e,Xt,n,-i,1),jt("f3",t,e,Xt,-n,i,1),jt("f4",t,e,Xt,n,i,1),jt("u1",t,e,Xt,n*.7,i*1.1,-1),jt("u2",t,e,Xt,-n*.7,i*1.1,-1),jt("u3",t,e,Xt,0,i*2,-1),jt("cf1",t,e,Xt,-n,0,1),jt("cf2",t,e,Xt,n,0,1),jt("cf3",t,e,Xt,0,-i,1),jt("cf4",t,e,Xt,0,i,1),jt("cn1",t,e,Xt,-n,0,-1),jt("cn2",t,e,Xt,n,0,-1),jt("cn3",t,e,Xt,0,-i,-1),jt("cn4",t,e,Xt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function jt(r,e,t,n,i,s,o){Pa.set(i,s,o).unproject(n);const a=e[r];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Pa.x,Pa.y,Pa.z)}}const Ia=new Rn;class dS extends si{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new st;s.setIndex(new Tt(n,1)),s.setAttribute("position",new Tt(i,3)),super(s,new hn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ia.setFromObject(this.object),Ia.isEmpty())return;const t=Ia.min,n=Ia.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class pS extends si{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new st;s.setIndex(new Tt(n,1)),s.setAttribute("position",new De(i,3)),super(s,new hn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class mS extends Ui{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new st;o.setAttribute("position",new De(s,3)),o.computeBoundingSphere(),super(o,new hn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new st;c.setAttribute("position",new De(a,3)),c.computeBoundingSphere(),this.add(new Wt(c,new ii({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const jf=new N;let La,Sl;class gS extends At{constructor(e=new N(0,0,1),t=new N(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",La===void 0&&(La=new st,La.setAttribute("position",new De([0,0,0,0,1,0],3)),Sl=new Ds(0,.5,1,5,1),Sl.translate(0,-.5,0)),this.position.copy(t),this.line=new Ui(La,new hn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Wt(Sl,new ii({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{jf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(jf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class _S extends si{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new st;i.setAttribute("position",new De(t,3)),i.setAttribute("color",new De(n,3));const s=new hn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ce,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class vS{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new go,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const b=[];for(let v=0,M=g.length;v<M;v++){const U=g[v],P=new Ur;P.curves=U.curves,b.push(P)}return b}function n(g,b){const v=b.length;let M=!1;for(let U=v-1,P=0;P<v;U=P++){let R=b[U],O=b[P],A=O.x-R.x,y=O.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=b[P],A=-A,O=b[U],y=-y),g.y<R.y||g.y>O.y)continue;if(g.y===R.y){if(g.x===R.x)return!0}else{const F=y*(g.x-R.x)-A*(g.y-R.y);if(F===0)return!0;if(F<0)continue;M=!M}}else{if(g.y!==R.y)continue;if(O.x<=g.x&&g.x<=R.x||R.x<=g.x&&g.x<=O.x)return!0}}return M}const i=pi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Ur,c.curves=a.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let g=0,b=s.length;g<b;g++)a=s[g],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[p]&&p++,f[p]={s:new Ur,p:_},f[p].s.curves=a.curves,u&&p++,d[p]=[]):d[p].push({h:a,p:_[0]});if(!f[0])return t(s);if(f.length>1){let g=!1,b=0;for(let v=0,M=f.length;v<M;v++)h[v]=[];for(let v=0,M=f.length;v<M;v++){const U=d[v];for(let P=0;P<U.length;P++){const R=U[P];let O=!0;for(let A=0;A<f.length;A++)n(R.p,f[A].p)&&(v!==A&&b++,O?(O=!1,h[A].push(R)):g=!0);O&&h[v].push(R)}}b>0&&g===!1&&(d=h)}let m;for(let g=0,b=f.length;g<b;g++){c=f[g].s,l.push(c),m=d[g];for(let v=0,M=m.length;v<M;v++)c.holes.push(m[v].h)}return l}}class yS extends Xn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);const xS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:yu,AddEquation:Zi,AddOperation:pp,AdditiveAnimationBlendMode:Pu,AdditiveBlending:Cl,AgXToneMapping:yp,AlphaFormat:Ep,AlwaysCompare:Gp,AlwaysDepth:ap,AlwaysStencilFunc:iu,AmbientLight:rh,AnimationAction:Jm,AnimationClip:zr,AnimationLoader:wM,AnimationMixer:$M,AnimationObjectGroup:jM,AnimationUtils:xM,ArcCurve:gm,ArrayCamera:am,ArrowHelper:gS,AttachedBindMode:Il,Audio:Zm,AudioAnalyser:BM,AudioContext:sh,AudioListener:OM,AudioLoader:NM,AxesHelper:_S,BackSide:Cn,BasicDepthPacking:Dp,BasicShadowMap:Ig,BatchedMesh:dm,Bone:pc,BooleanKeyframeTrack:Xr,Box2:iS,Box3:Rn,Box3Helper:pS,BoxGeometry:Gr,BoxHelper:dS,BufferAttribute:Tt,BufferGeometry:st,BufferGeometryLoader:qm,ByteType:Mp,Cache:Pi,Camera:ac,CameraHelper:fS,CanvasTexture:Wb,CapsuleGeometry:_c,CatmullRomCurve3:_m,CineonToneMapping:_p,CircleGeometry:vc,ClampToEdgeWrapping:On,Clock:Ym,Color:Ce,ColorKeyframeTrack:Ku,ColorManagement:Rt,CompressedArrayTexture:Hb,CompressedCubeTexture:Gb,CompressedTexture:mc,CompressedTextureLoader:EM,ConeGeometry:yc,ConstantAlphaFactor:rp,ConstantColorFactor:np,CubeCamera:Kp,CubeReflectionMapping:Di,CubeRefractionMapping:Qi,CubeTexture:Ro,CubeTextureLoader:AM,CubeUVReflectionMapping:Ps,CubicBezierCurve:Gu,CubicBezierCurve3:vm,CubicInterpolant:Um,CullFaceBack:Tl,CullFaceFront:Vd,CullFaceFrontBack:Pg,CullFaceNone:zd,Curve:oi,CurvePath:xm,CustomBlending:Hd,CustomToneMapping:vp,CylinderGeometry:Ds,Cylindrical:nS,Data3DTexture:Nu,DataArrayTexture:sc,DataTexture:Ji,DataTextureLoader:Bm,DataUtils:B_,DecrementStencilOp:Hg,DecrementWrapStencilOp:Wg,DefaultLoadingManager:km,DepthFormat:Nr,DepthStencilFormat:As,DepthTexture:Fu,DetachedBindMode:bp,DirectionalLight:ih,DirectionalLightHelper:hS,DiscreteInterpolant:Om,DisplayP3ColorSpace:rc,DodecahedronGeometry:xc,DoubleSide:ti,DstAlphaFactor:$d,DstColorFactor:Qd,DynamicCopyUsage:s_,DynamicDrawUsage:Qg,DynamicReadUsage:n_,EdgesGeometry:bm,EllipseCurve:gc,EqualCompare:Bp,EqualDepth:lp,EqualStencilFunc:Zg,EquirectangularReflectionMapping:no,EquirectangularRefractionMapping:io,Euler:qn,EventDispatcher:gi,ExtrudeGeometry:Mc,FileLoader:ri,Float16BufferAttribute:X_,Float32BufferAttribute:De,FloatType:jn,Fog:hc,FogExp2:uc,FramebufferTexture:Vb,FrontSide:mi,Frustum:Po,GLBufferAttribute:tS,GLSL1:a_,GLSL3:ru,GreaterCompare:zp,GreaterDepth:hp,GreaterEqualCompare:Hp,GreaterEqualDepth:up,GreaterEqualStencilFunc:Kg,GreaterStencilFunc:Jg,GridHelper:Qm,Group:ji,HalfFloatType:so,HemisphereLight:Vm,HemisphereLightHelper:lS,IcosahedronGeometry:Sc,ImageBitmapLoader:LM,ImageLoader:bo,ImageUtils:Yp,IncrementStencilOp:Vg,IncrementWrapStencilOp:Gg,InstancedBufferAttribute:Rs,InstancedBufferGeometry:Xm,InstancedInterleavedBuffer:eS,InstancedMesh:fm,Int16BufferAttribute:G_,Int32BufferAttribute:W_,Int8BufferAttribute:z_,IntType:Mu,InterleavedBuffer:dc,InterleavedBufferAttribute:Fr,Interpolant:Uo,InterpolateDiscrete:oo,InterpolateLinear:ao,InterpolateSmooth:Va,InvertStencilOp:Xg,KeepStencilOp:wr,KeyframeTrack:ai,LOD:hm,LatheGeometry:Lo,Layers:oc,LessCompare:kp,LessDepth:cp,LessEqualCompare:Iu,LessEqualDepth:to,LessEqualStencilFunc:jg,LessStencilFunc:Yg,Light:or,LightProbe:Wm,Line:Ui,Line3:rS,LineBasicMaterial:hn,LineCurve:Wu,LineCurve3:ym,LineDashedMaterial:Lm,LineLoop:pm,LineSegments:si,LinearDisplayP3ColorSpace:Co,LinearFilter:tn,LinearInterpolant:$u,LinearMipMapLinearFilter:Ug,LinearMipMapNearestFilter:Dg,LinearMipmapLinearFilter:ni,LinearMipmapNearestFilter:$s,LinearSRGBColorSpace:Oi,LinearToneMapping:mp,LinearTransfer:lo,Loader:fn,LoaderUtils:Za,LoadingManager:Qu,LoopOnce:Ip,LoopPingPong:Np,LoopRepeat:Lp,LuminanceAlphaFormat:Cp,LuminanceFormat:Tp,MOUSE:Mr,Material:yn,MaterialLoader:Pc,MathUtils:Ar,Matrix3:ot,Matrix4:Ve,MaxEquation:qd,Mesh:Wt,MeshBasicMaterial:ii,MeshDepthMaterial:lc,MeshDistanceMaterial:ku,MeshLambertMaterial:ju,MeshMatcapMaterial:Im,MeshNormalMaterial:Pm,MeshPhongMaterial:Ya,MeshPhysicalMaterial:Cm,MeshStandardMaterial:Zu,MeshToonMaterial:Rm,MinEquation:Xd,MirroredRepeatWrapping:ro,MixOperation:dp,MultiplyBlending:Pl,MultiplyOperation:To,NearestFilter:ln,NearestMipMapLinearFilter:Ng,NearestMipMapNearestFilter:Lg,NearestMipmapLinearFilter:ys,NearestMipmapNearestFilter:xu,NeutralToneMapping:xp,NeverCompare:Fp,NeverDepth:op,NeverStencilFunc:qg,NoBlending:Ii,NoColorSpace:Ti,NoToneMapping:Li,NormalAnimationBlendMode:ic,NormalBlending:Lr,NotEqualCompare:Vp,NotEqualDepth:fp,NotEqualStencilFunc:$g,NumberKeyframeTrack:xo,Object3D:At,ObjectLoader:PM,ObjectSpaceNormalMap:Op,OctahedronGeometry:No,OneFactor:Zd,OneMinusConstantAlphaFactor:sp,OneMinusConstantColorFactor:ip,OneMinusDstAlphaFactor:Kd,OneMinusDstColorFactor:ep,OneMinusSrcAlphaFactor:Xa,OneMinusSrcColorFactor:Jd,OrthographicCamera:Ls,P3Primaries:ho,PCFShadowMap:vu,PCFSoftShadowMap:tc,PMREMGenerator:su,Path:go,PerspectiveCamera:en,Plane:Ai,PlaneGeometry:Wr,PlaneHelper:mS,PointLight:nh,PointLightHelper:aS,Points:mm,PointsMaterial:Vu,PolarGridHelper:uS,PolyhedronGeometry:sr,PositionalAudio:kM,PropertyBinding:bt,PropertyMixer:jm,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:qu,Quaternion:un,QuaternionKeyframeTrack:qr,QuaternionLinearInterpolant:Fm,RED_GREEN_RGTC2_Format:tu,RED_RGTC1_Format:Pp,REVISION:Ao,RGBADepthPacking:Up,RGBAFormat:Gn,RGBAIntegerFormat:Cu,RGBA_ASTC_10x10_Format:jl,RGBA_ASTC_10x5_Format:ql,RGBA_ASTC_10x6_Format:Yl,RGBA_ASTC_10x8_Format:Zl,RGBA_ASTC_12x10_Format:Jl,RGBA_ASTC_12x12_Format:$l,RGBA_ASTC_4x4_Format:kl,RGBA_ASTC_5x4_Format:Bl,RGBA_ASTC_5x5_Format:zl,RGBA_ASTC_6x5_Format:Vl,RGBA_ASTC_6x6_Format:Hl,RGBA_ASTC_8x5_Format:Gl,RGBA_ASTC_8x6_Format:Wl,RGBA_ASTC_8x8_Format:Xl,RGBA_BPTC_Format:za,RGBA_ETC2_EAC_Format:Fl,RGBA_PVRTC_2BPPV1_Format:Ul,RGBA_PVRTC_4BPPV1_Format:Dl,RGBA_S3TC_DXT1_Format:Fa,RGBA_S3TC_DXT3_Format:ka,RGBA_S3TC_DXT5_Format:Ba,RGBFormat:Ap,RGB_BPTC_SIGNED_Format:Kl,RGB_BPTC_UNSIGNED_Format:Ql,RGB_ETC1_Format:Ru,RGB_ETC2_Format:Ol,RGB_PVRTC_2BPPV1_Format:Nl,RGB_PVRTC_4BPPV1_Format:Ll,RGB_S3TC_DXT1_Format:Oa,RGFormat:Rp,RGIntegerFormat:Tu,RawShaderMaterial:Tm,Ray:Hr,Raycaster:$m,Rec709Primaries:uo,RectAreaLight:Hm,RedFormat:Eu,RedIntegerFormat:Au,ReinhardToneMapping:gp,RenderTarget:Zp,RepeatWrapping:Ri,ReplaceStencilOp:zg,ReverseSubtractEquation:Wd,RingGeometry:wc,SIGNED_RED_GREEN_RGTC2_Format:nu,SIGNED_RED_RGTC1_Format:eu,SRGBColorSpace:En,SRGBTransfer:Ot,Scene:fc,ShaderChunk:Ke,ShaderLib:ei,ShaderMaterial:Yn,ShadowMaterial:Am,Shape:Ur,ShapeGeometry:Ec,ShapePath:vS,ShapeUtils:pi,ShortType:Sp,Skeleton:Io,SkeletonHelper:oS,SkinnedMesh:zu,Source:Pr,Sphere:gn,SphereGeometry:Do,Spherical:fu,SphericalHarmonics3:Gm,SplineCurve:Yu,SpotLight:th,SpotLightHelper:sS,Sprite:um,SpriteMaterial:Bu,SrcAlphaFactor:Wa,SrcAlphaSaturateFactor:tp,SrcColorFactor:jd,StaticCopyUsage:r_,StaticDrawUsage:fo,StaticReadUsage:t_,StereoCamera:DM,StreamCopyUsage:o_,StreamDrawUsage:e_,StreamReadUsage:i_,StringKeyframeTrack:Yr,SubtractEquation:Gd,SubtractiveBlending:Rl,TOUCH:Sr,TangentSpaceNormalMap:rr,TetrahedronGeometry:Ac,Texture:Yt,TextureLoader:zm,TorusGeometry:Tc,TorusKnotGeometry:Cc,Triangle:Hn,TriangleFanDrawMode:kg,TriangleStripDrawMode:Fg,TrianglesDrawMode:Og,TubeGeometry:Rc,UVMapping:nc,Uint16BufferAttribute:Du,Uint32BufferAttribute:Uu,Uint8BufferAttribute:V_,Uint8ClampedBufferAttribute:H_,Uniform:ch,UniformsGroup:QM,UniformsLib:Te,UniformsUtils:$p,UnsignedByteType:Ni,UnsignedInt248Type:Is,UnsignedInt5999Type:wp,UnsignedIntType:Or,UnsignedShort4444Type:Su,UnsignedShort5551Type:wu,UnsignedShortType:bu,VSMShadowMap:fi,Vector2:ie,Vector3:N,Vector4:It,VectorKeyframeTrack:Br,VideoTexture:zb,WebGL3DRenderTarget:R_,WebGLArrayRenderTarget:C_,WebGLCoordinateSystem:di,WebGLCubeRenderTarget:Qp,WebGLMultipleRenderTargets:yS,WebGLRenderTarget:Xn,WebGLRenderer:cm,WebGLUtils:om,WebGPUCoordinateSystem:po,WireframeGeometry:Em,WrapAroundEnding:co,ZeroCurvatureEnding:Cr,ZeroFactor:Yd,ZeroSlopeEnding:Rr,ZeroStencilOp:Bg,createCanvasElement:Xp},Symbol.toStringTag,{value:"Module"}));function bS(r){return{all:r=r||new Map,on:function(e,t){var n=r.get(e);n?n.push(t):r.set(e,[t])},off:function(e,t){var n=r.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var n=r.get(e);n&&n.slice().map(function(i){i(t)}),(n=r.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Yi{constructor(){Lt(this,"allVertices",{});Lt(this,"isolatedVertices",{});Lt(this,"connectedVertices",{});Lt(this,"sortedConnectedValues",[]);Lt(this,"needsSort",!1);Lt(this,"emitter",bS());Lt(this,"emit",this.emitter.emit.bind(this.emitter));Lt(this,"on",this.emitter.on.bind(this.emitter));Lt(this,"off",this.emitter.off.bind(this.emitter));Lt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const s=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const o=Array.isArray(n.after)?n.after:[n.after];o.forEach(a=>{i.previous.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const o=Array.isArray(n.before)?n.before:[n.before];o.forEach(a=>{i.next.add(this.getKey(a))}),o.forEach(a=>{const c=this.getKey(a),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(s=>{const o=this.connectedVertices[s];o&&(o.previous.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),i.previous.forEach(s=>{const o=this.connectedVertices[s];o&&(o.next.delete(t),o.previous.size===0&&o.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var o;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(i.forEach(a=>{e.set(a,0)}),i.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,c)=>{a===0&&t.push(c)});t.length>0;){const a=t.shift();n.push(a);const c=i.find(l=>l===a);c&&((o=this.connectedVertices[c])==null||o.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&t.push(l)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class MS{constructor(e,t,n){Lt(this,"key");Lt(this,"stage");Lt(this,"callback");Lt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class SS extends Yi{constructor(t,n,i){super();Lt(this,"key");Lt(this,"scheduler");Lt(this,"callback",(t,n)=>n());Lt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const s=new MS(this,t,n);return this.add(t,s,i),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(s=>{const o=performance.now();s.run(i??t);const a=performance.now()-o;n[s.key]=a})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class wS extends Yi{constructor(t){super();Lt(this,"lastTime",performance.now());Lt(this,"clampDeltaTo",.1);Lt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new SS(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},s=performance.now();return this.forEachNode(o=>{const a=performance.now(),c=o.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-a;i[o.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-s,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const An=(r,e)=>{const t=_u(r,s=>s);let n;const i=t.subscribe(async s=>{n&&n();const o=await e(s);o&&(n=o)});Bn(()=>{i(),n&&n()})};function ES(r,e){const t={current:void 0};return An(r,n=>{t.current=n}),t}const wn=r=>{const e=rn(r),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:r};return t},Ic=new en(75,0,.1,1e3);Ic.position.z=5;Ic.lookAt(0,0,0);const AS=()=>Ic,TS=r=>{An(r.size,e=>{if(r.camera.current===Ic){const t=r.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),r.invalidate()}})},CS=Symbol("use-legacy-frame-compatibility-context"),RS=()=>{const r={useFrameOrders:[],useRenderOrders:[]};return Fn(CS,r),r},PS=r=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await wg(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((u,h)=>{var f;(u===0||l)&&((f=h==null?void 0:h.dispose)==null||f.call(h),e.disposableObjects.delete(h))}),e.shouldDispose=!1)},collectDisposableObjects:(l,u)=>{const h=u??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&h.push(l),Object.entries(l).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,h)})),h},addDisposableObjects:l=>{l.forEach(u=>{const h=e.disposableObjects.get(u);h?e.disposableObjects.set(u,h+1):e.disposableObjects.set(u,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(u=>{const h=e.disposableObjects.get(u);h&&h>0&&e.disposableObjects.set(u,h-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=RS(),n=new wS,i=n.createStage(Symbol("threlte-main-stage")),s=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(l,u){a.shouldRender()&&u()}}),o=s.createTask(Symbol("threlte-auto-render-task"),l=>{t.length>0||a.renderer.render(a.scene,a.camera.current)}),a={size:_u([r.userSize,r.parentSize],([l,u])=>l||u),camera:wn(AS()),scene:new fc,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:wn(r.colorSpace),toneMapping:wn(r.toneMapping),dpr:wn(r.dpr),useLegacyLights:wn(r.useLegacyLights),shadows:wn(r.shadows),colorManagementEnabled:wn(r.colorManagementEnabled),renderMode:wn(r.renderMode),autoRender:wn(r.autoRender),scheduler:n,mainStage:i,renderStage:s,autoRenderTask:o,shouldRender:()=>a.renderMode.current==="always"||a.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||a.renderMode.current==="manual"&&e.advance};TS(a);const c=wn({});return Fn("threlte",a),Fn("threlte-internal-context",e),Fn("threlte-user-context",c),a},lh=typeof window<"u",IS=()=>{const r=wn({width:0,height:0});if(!lh)return{parentSize:r,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=a=>{i.disconnect(),s.disconnect(),i.observe(a),s.observe(a,e)},i=new ResizeObserver(([a])=>{const{width:c,height:l}=a.contentRect;c===r.current.width&&l===r.current.height||r.set({width:c,height:l})}),s=new MutationObserver(a=>{for(const c of a)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),o=a=>{t=a;const c=t.parentElement;c&&(r.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Bn(()=>{i.disconnect(),s.disconnect()}),{parentSize:r,parentSizeAction:o}};function eg(r,e){const t=rn(r);let n=r;const i=t.subscribe(a=>n=a);return Bn(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const _i=()=>{const r=kn("threlte");if(r===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return r},uh=Symbol("threlte-hierarchical-parent-context"),hh=()=>kn(uh),LS=r=>Fn(uh,r),NS=r=>{const e=eg(r);return Fn(uh,e),e};function DS(r){let e;const t=r[7].default,n=er(t,r,r[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&64)&&tr(n,t,i,i[6],e?ir(t,i[6],s,null):nr(i[6]),null)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}const US=()=>({onChildMount:kn("threlte-hierarchical-object-on-mount"),onChildDestroy:kn("threlte-hierarchical-object-on-destroy")});function OS(r,e,t){var m;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{onChildMount:a=void 0}=e;const c=g=>{a==null||a(g)};let{onChildDestroy:l=void 0}=e;const u=g=>{l==null||l(g)},{invalidate:h}=_i(),f=hh();nn(r,f,g=>t(5,n=g));let{parent:d=n}=e;const p=US();o&&((m=p.onChildMount)==null||m.call(p,o),h());const _=eg(o,(g,b)=>{var v,M;b&&((v=p.onChildDestroy)==null||v.call(p,b),h()),g&&((M=p.onChildMount)==null||M.call(p,g),h())});return Bn(()=>{var g;o&&((g=p.onChildDestroy)==null||g.call(p,o),h())}),Fn("threlte-hierarchical-object-on-mount",c),Fn("threlte-hierarchical-object-on-destroy",u),LS(_),r.$$set=g=>{"object"in g&&t(2,o=g.object),"onChildMount"in g&&t(3,a=g.onChildMount),"onChildDestroy"in g&&t(4,l=g.onChildDestroy),"parent"in g&&t(1,d=g.parent),"$$scope"in g&&t(6,s=g.$$scope)},r.$$.update=()=>{r.$$.dirty&32&&t(1,d=n),r.$$.dirty&4&&_.set(o)},[f,d,o,a,l,n,s,i]}class FS extends In{constructor(e){super(),Ln(this,e,OS,DS,Pn,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function kS(r){let e;const t=r[1].default,n=er(t,r,r[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&tr(n,t,i,i[4],e?ir(t,i[4],s,null):nr(i[4]),null)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function BS(r){let e,t;return e=new FS({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[kS]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function zS(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class tg extends In{constructor(e){super(),Ln(this,e,zS,BS,Pn,{object:0})}}const Jf=(r,e)=>{if(r===e)return!0;if(!r||!e)return!1;const t=r.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0},VS=()=>{Fn("threlte-cache",[])},HS=()=>{const r=kn("threlte-cache");if(!r)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(n,i)=>{for(const o of r)if(Jf(i,o.keys)){if(o.error)throw o.error;if(o.promise)return o.promise}const s={promise:n(),keys:i,value:void 0};return r.push(s),s.promise.catch(o=>{s.error=o}),s.promise},clear:n=>{const i=r.findIndex(s=>Jf(n,s.keys));i!==-1&&r.splice(i,1)}}},GS=Ao.replace("dev",""),WS=Number.parseInt(GS),XS=r=>{const e=rn(void 0),t=(n,i)=>{r.renderer=new cm({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(r.renderer)};return An([r.colorManagementEnabled],([n])=>{Rt.enabled=n}),An([e,r.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),An([e,r.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),An([e,r.size],([n,i])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(i.width,i.height)}),An([e,r.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=tc))}),An([e,r.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),An([e,r.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},ng=()=>kn("threlte-internal-context");function $f(r){let e,t;return e=new tg({props:{object:r[0].scene,$$slots:{default:[qS]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&131072&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function qS(r){let e;const t=r[15].default,n=er(t,r,r[17],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&131072)&&tr(n,t,i,i[17],e?ir(t,i[17],s,null):nr(i[17]),null)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function YS(r){let e,t,n,i,s=r[2]&&$f(r);return{c(){e=Dd("canvas"),s&&s.c(),this.h()},l(o){e=Ud(o,"CANVAS",{class:!0});var a=Od(e);s&&s.l(a),a.forEach(gt),this.h()},h(){Fd(e,"class","svelte-o3oskp")},m(o,a){vt(o,e,a),s&&s.m(e,null),r[16](e),t=!0,n||(i=Eg(r[4].call(null,e)),n=!0)},p(o,[a]){o[2]?s?(s.p(o,a),a&4&&ye(s,1)):(s=$f(o),s.c(),ye(s,1),s.m(e,null)):s&&(_n(),we(s,1,1,()=>{s=null}),vn())},i(o){t||(ye(s),t=!0)},o(o){we(s),t=!1},d(o){o&&gt(e),s&&s.d(),r[16](null),n=!1,i()}}}function ZS(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{colorManagementEnabled:o=!0}=e,{colorSpace:a="srgb"}=e,{dpr:c=lh?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:h=tc}=e,{size:f=void 0}=e,{toneMapping:d=yu}=e,{useLegacyLights:p=!(WS>=155)}=e,{autoRender:_=!0}=e,m,g=rn(!1);nn(r,g,y=>t(2,n=y));const b=rn(f),{parentSize:v,parentSizeAction:M}=IS(),U=PS({colorManagementEnabled:o,colorSpace:a,dpr:c,renderMode:l,parentSize:v,autoRender:_,shadows:h,toneMapping:d,useLegacyLights:p,userSize:b}),P=ng(),R=U;An([g,R.autoRender],([y,F])=>(y&&F?R.autoRenderTask.start():R.autoRenderTask.stop(),()=>{R.autoRenderTask.stop()})),VS();const{createRenderer:O}=XS(R);Eo(()=>{O(m,u),R.renderer.setAnimationLoop(y=>{P.dispose(),R.scheduler.run(y),P.resetFrameInvalidation()}),g.set(!0)}),Bn(()=>{var y;P.dispose(!0),R.scheduler.dispose(),(y=R.renderer)==null||y.dispose()});function A(y){gu[y?"unshift":"push"](()=>{m=y,t(1,m)})}return r.$$set=y=>{"colorManagementEnabled"in y&&t(5,o=y.colorManagementEnabled),"colorSpace"in y&&t(6,a=y.colorSpace),"dpr"in y&&t(7,c=y.dpr),"renderMode"in y&&t(8,l=y.renderMode),"rendererParameters"in y&&t(9,u=y.rendererParameters),"shadows"in y&&t(10,h=y.shadows),"size"in y&&t(11,f=y.size),"toneMapping"in y&&t(12,d=y.toneMapping),"useLegacyLights"in y&&t(13,p=y.useLegacyLights),"autoRender"in y&&t(14,_=y.autoRender),"$$scope"in y&&t(17,s=y.$$scope)},r.$$.update=()=>{r.$$.dirty&2048&&b.set(f),r.$$.dirty&64&&R.colorSpace.set(a),r.$$.dirty&128&&R.dpr.set(c),r.$$.dirty&256&&R.renderMode.set(l),r.$$.dirty&16384&&R.autoRender.set(_),r.$$.dirty&1024&&R.shadows.set(h),r.$$.dirty&4096&&R.toneMapping.set(d)},[R,m,n,g,M,o,a,c,l,u,h,f,d,p,_,i,A,s]}class jS extends In{constructor(e){super(),Ln(this,e,ZS,YS,Pn,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function JS(r){let e;const t=r[9].default,n=er(t,r,r[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&tr(n,t,i,i[8],e?ir(t,i[8],s,null):nr(i[8]),null)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}const Kf="threlte-disposable-object-context";function $S(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=ng();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const d=kn(Kf);nn(r,d,m=>t(7,i=m));const p=rn(f??i??!0);nn(r,p,m=>t(6,n=m)),Fn(Kf,p);let _=n?a(u):[];return c(_),Bn(()=>{l(_)}),r.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&p.set(f??i??!0),r.$$.dirty&116&&u!==h&&(l(_),t(5,_=n?a(u):[]),c(_),t(4,h=u))},[d,p,u,f,h,_,n,i,o,s]}class KS extends In{constructor(e){super(),Ln(this,e,$S,JS,Pn,{object:2,dispose:3})}}const QS=/^\s*class\s+/,ew=r=>typeof r!="function"?!1:QS.test(r.toString()),tw=r=>Array.isArray(r),Qf=(r,e)=>ew(r)?tw(e)?new r(...e):new r:r,nw=r=>"isObject3D"in r,ed=r=>"dispose"in r,ig=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},wl=Symbol("initialValueBeforeAttach"),iw=()=>{const{invalidate:r}=_i();let e=!1,t=wl,n,i,s;const o=(c,l,u)=>{if(a(),!u){const h=c;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:h,key:f}=ig(l,u);t=h[f],h[f]=c,i=h,s=f}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==wl&&(i[s]=t,t=wl,i=void 0,s=void 0),e=!1,r())};return Bn(()=>{a()}),{update:o}},rw=r=>r&&r.isCamera,rg=r=>r&&r.isOrthographicCamera,sg=r=>r&&r.isPerspectiveCamera,sw=r=>sg(r)||rg(r),ow=()=>{const{invalidate:r,size:e,camera:t}=_i();let n,i;Bn(()=>{i==null||i()});const s=c=>{n&&(rg(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):sg(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(c,l)=>{if(i==null||i(),l||!sw(c)){n=void 0;return}n=c,i=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!rw(c)||!l||(t.set(c),r())}}},fh=()=>{const r=Ja(),e=(n,i)=>{const s=r.$$.callbacks[n];s&&s.forEach(o=>{o(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!r.$$.callbacks[n],enumerable:!0}),e},aw=()=>{const r=fh(),e=[];let t,n=!1;const i=()=>{e.forEach(a=>a()),e.length=0,r("create",{ref:t,cleanup:a=>{e.push(a)}})},s=o=>{t=o,n&&i()};return Eo(()=>{i(),n=!0}),Bn(()=>{e.forEach(o=>o())}),{updateRef:s}},td=r=>!!(r!=null&&r.addEventListener),cw=()=>{const r=fh(),e=Ja(),t=c=>{c!=null&&c.type&&r(c.type,c)},n=(c,l)=>{td(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},i=(c,l)=>{td(c)&&l.forEach(u=>{c.addEventListener(u,t)})},s=rn(),o=rn([]);return An([s,o],([c,l])=>(i(c,l),()=>n(c,l))),Eo(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{s.set(c)}}},lw=r=>{const t=kn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(r)).filter(Boolean),i=n.flatMap(l=>l.pluginProps??[]);let s=[];return Bn(()=>{s.forEach(l=>l())}),{updateRef:l=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,l);h&&s.push(h)})},updateProps:l=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,l)})},pluginsProps:i}},uw=new Set(["$$scope","$$slots","type","args","attach","instance"]),hw=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),fw=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,nd=(r,e,t)=>{var n,i,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=r[e])==null?void 0:n.setScalar)=="function"&&!((i=r[e])!=null&&i.isColor)?(o,a,c)=>{o[a].setScalar(c)}:typeof((s=r[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(o,a,c)=>{o[a].set(...c)}:(o,a,c)=>{o[a].set(c)}:(o,a,c)=>{o[a]=c}},dw=()=>{const{invalidate:r}=_i(),e=new Map,t=new Map,n=(s,o,a,c)=>{if(fw(a)){const h=e.get(o);if(h&&h.instance===s&&h.value===a)return;e.set(o,{instance:s,value:a})}const{key:l,target:u}=ig(s,o);if(a!=null){const h=t.get(o);if(h)h(u,l,a);else{const f=nd(u,l,a);t.set(o,f),f(u,l,a)}}else nd(u,l,a)(u,l,a);c.manualCamera||hw.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,o,a)=>{var c;for(const l in o)!uw.has(l)&&!((c=a.pluginsProps)!=null&&c.includes(l))&&n(s,l,o[l],a),r()}}},pw=r=>({ref:r&2}),id=r=>({ref:r[1]}),mw=r=>({ref:r&2}),rd=r=>({ref:r[1]});function sd(r){let e,t;return e=new KS({props:{object:r[1],dispose:r[0]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function gw(r){let e;const t=r[10].default,n=er(t,r,r[11],id);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&tr(n,t,i,i[11],e?ir(t,i[11],s,pw):nr(i[11]),id)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function _w(r){let e,t;return e=new tg({props:{object:r[1],$$slots:{default:[vw]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&2050&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function vw(r){let e;const t=r[10].default,n=er(t,r,r[11],rd);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2050)&&tr(n,t,i,i[11],e?ir(t,i[11],s,mw):nr(i[11]),rd)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function yw(r){let e=ed(r[1]),t,n,i,s,o,a,c=e&&sd(r);const l=[_w,gw],u=[];function h(f,d){return d&2&&(n=null),n==null&&(n=!!nw(f[1])),n?0:1}return i=h(r,-1),s=u[i]=l[i](r),{c(){c&&c.c(),t=Kt(),s.c(),o=Ft()},l(f){c&&c.l(f),t=Qt(f),s.l(f),o=Ft()},m(f,d){c&&c.m(f,d),vt(f,t,d),u[i].m(f,d),vt(f,o,d),a=!0},p(f,[d]){d&2&&(e=ed(f[1])),e?c?(c.p(f,d),d&2&&ye(c,1)):(c=sd(f),c.c(),ye(c,1),c.m(t.parentNode,t)):c&&(_n(),we(c,1,1,()=>{c=null}),vn());let p=i;i=h(f,d),i===p?u[i].p(f,d):(_n(),we(u[p],1,1,()=>{u[p]=null}),vn(),s=u[i],s?s.p(f,d):(s=u[i]=l[i](f),s.c()),ye(s,1),s.m(o.parentNode,o))},i(f){a||(ye(c),ye(s),a=!0)},o(f){we(c),we(s),a=!1},d(f){f&&(gt(t),gt(o)),c&&c.d(f),u[i].d(f)}}}function xw(r,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Es(e,n),s,{$$slots:o={},$$scope:a}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=hh();nn(r,p,F=>t(9,s=F));const _=aw();let m=Qf(c,l);_.updateRef(m);let g=!1;const b=()=>{if(!g){g=!0;return}t(1,m=Qf(c,l)),_.updateRef(m)};let{ref:v=m}=e;const M=NS(m),U=lw({ref:m,props:e}),P=(U==null?void 0:U.pluginsProps)??[],R=dw(),O=ow(),A=iw(),y=cw();return r.$$set=F=>{t(23,e=$i($i({},e),Ga(F))),t(22,i=Es(e,n)),"is"in F&&t(4,c=F.is),"args"in F&&t(5,l=F.args),"attach"in F&&t(6,u=F.attach),"manual"in F&&t(7,h=F.manual),"makeDefault"in F&&t(8,f=F.makeDefault),"dispose"in F&&t(0,d=F.dispose),"ref"in F&&t(3,v=F.ref),"$$scope"in F&&t(11,a=F.$$scope)},r.$$.update=()=>{r.$$.dirty&48&&b(),r.$$.dirty&2&&t(3,v=m),r.$$.dirty&2&&M.set(m),R.updateProps(m,i,{manualCamera:h,pluginsProps:P}),r.$$.dirty&130&&O.update(m,h),r.$$.dirty&258&&O.makeDefaultCamera(m,f),r.$$.dirty&578&&A.update(m,s,u),r.$$.dirty&2&&y.updateRef(m),r.$$.dirty&2&&(U==null||U.updateRef(m)),U==null||U.updateProps(e),U==null||U.updateRestProps(i)},e=Ga(e),[d,m,p,v,c,l,u,h,f,s,o,a]}let og=class extends In{constructor(e){super(),Ln(this,e,xw,yw,Pn,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const bw={},Mw=(r,e)=>{const t=bw[e]||xS[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...r,props:{...r.props,is:t}}},Sw=r=>new Proxy(class{},{construct(e,[t]){const n=t;return new og(Mw(n,r))}}),Bt=new Proxy(class{},{construct(r,[e]){const t=e;return new og(t)},get(r,e){return Sw(e)}});function ww(r,e){const t="threlte-plugin-context";if(Array.isArray(r)){const[n,i]=r;Fn(t,{...kn(t),[n]:i})}else{const n=r,i=e;if(!i)return;Fn(t,{...kn(t),[n]:i})}}function ag(r,e,t){if(!lh)return{task:void 0,start:()=>{},stop:()=>{},started:Rg(!1)};let n,i,s;Yi.isKey(r)?(n=r,i=e,s=t):(n=Symbol("useTask"),i=r,s=e);const o=_i();let a=o.mainStage;if(s){if(s.stage)if(Yi.isValue(s.stage))a=s.stage;else{const d=o.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);a=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const p=s.after[d];if(Yi.isValue(p)){a=p.stage;break}}else Yi.isValue(s.after)&&(a=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const p=s.before[d];if(Yi.isValue(p)){a=p.stage;break}}else Yi.isValue(s.before)&&(a=s.before.stage)}const{autoInvalidations:c}=kn("threlte-internal-context"),l=rn(!1),u=a.createTask(n,i,s),h=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.add(i),u.start()},f=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.delete(i),u.stop()};return(s==null?void 0:s.autoStart)??!0?h():f(),Bn(()=>{a&&a.removeTask(n)}),{task:u,start:h,stop:f,started:{subscribe:l.subscribe}}}function Ew(r,e,t){const n=kn("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(r in i||(i[r]=e),i)),n.current[r]):_u(n,i=>i[r])}const El=r=>{const e=rn(void 0),t=rn(void 0);return r.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(r,e),{error:t,promise:r})};function cg(r,e){const{remember:t,clear:n}=HS();let i;const s=()=>new r;return{load:(c,l)=>{const u=async h=>{var f;if(i||(i=s()),"loadAsync"in i){const d=await i.loadAsync(h,l==null?void 0:l.onProgress);return((f=l==null?void 0:l.transform)==null?void 0:f.call(l,d))??d}else return new Promise((d,p)=>{i.load(h,_=>{var m;return d(((m=l==null?void 0:l.transform)==null?void 0:m.call(l,_))??_)},_=>{var m;return(m=l==null?void 0:l.onProgress)==null?void 0:m.call(l,_)},p)})};if(Array.isArray(c)){const h=c.map(d=>t(()=>u(d),[r,d]));return El(Promise.all(h))}else if(typeof c=="string"){const h=t(()=>u(c),[r,c]);return El(h)}else{const h=Object.values(c).map(d=>t(()=>u(d),[r,d]));return El(Promise.all(h).then(d=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,d[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([r,l])}):typeof c=="string"?n([r,c]):Object.entries(c).forEach(([l,u])=>{n([r,l,u])})},loader:i}}const lg=()=>{const r=Ja(),e=rn(void 0);return An(e,t=>{t&&Object.entries(r.$$.callbacks).forEach(n=>{const[i,s]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...s):t.$$.callbacks[i]=s})}),e};new N;new N;new N;const Aw={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

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

		}`},Tw={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

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

		}`},br=r=>{let e=!1;const t=rn(r());return{...t,memoize:(...i)=>{if(!e){e=!0;return}t.set(r())}}},Cw=r=>({ref:r[1]&1024}),od=r=>({ref:r[41]});function Rw(r){let e,t,n,i,s;e=new Bt.Mesh({props:{"scale.y":-1,"rotation.x":-Math.PI/2,material:r[10],geometry:r[0]}}),n=new Bt({props:{is:r[9],manual:!0}});const o=r[27].default,a=er(o,r,r[29],od);return{c(){lt(e.$$.fragment),t=Kt(),lt(n.$$.fragment),i=Kt(),a&&a.c()},l(c){ut(e.$$.fragment,c),t=Qt(c),ut(n.$$.fragment,c),i=Qt(c),a&&a.l(c)},m(c,l){ht(e,c,l),vt(c,t,l),ht(n,c,l),vt(c,i,l),a&&a.m(c,l),s=!0},p(c,l){const u={};l[0]&1&&(u.geometry=c[0]),e.$set(u),a&&a.p&&(!s||l[0]&536870912|l[1]&1024)&&tr(a,o,c,c[29],s?ir(o,c[29],l,Cw):nr(c[29]),od)},i(c){s||(ye(e.$$.fragment,c),ye(n.$$.fragment,c),ye(a,c),s=!0)},o(c){we(e.$$.fragment,c),we(n.$$.fragment,c),we(a,c),s=!1},d(c){c&&(gt(t),gt(i)),ft(e,c),ft(n,c),a&&a.d(c)}}}function Pw(r){let e,t;return e=new Bt.Group({props:{"rotation.x":Math.PI/2,$$slots:{default:[Rw]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i[0]&536870913|i[1]&1024&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function Iw(r){let e,t;const n=[r[12]];let i={$$slots:{default:[Pw,({ref:s})=>({41:s}),({ref:s})=>[0,s?1024:0]]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=$i(i,n[s]);return e=new Bt.Group({props:i}),r[28](e),{c(){lt(e.$$.fragment)},l(s){ut(e.$$.fragment,s)},m(s,o){ht(e,s,o),t=!0},p(s,o){const a=o[0]&4096?kd(n,[Bd(s[12])]):{};o[0]&536870913|o[1]&1024&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(ye(e.$$.fragment,s),t=!0)},o(s){we(e.$$.fragment,s),t=!1},d(s){r[28](null),ft(e,s)}}}function Lw(r,e,t){const n=["opacity","width","height","blur","far","smooth","resolution","frames","scale","color","depthWrite","refresh"];let i=Es(e,n),s,o,a,c,l,u,h,f,{$$slots:d={},$$scope:p}=e,{opacity:_=1}=e,{width:m=1}=e,{height:g=1}=e,{blur:b=1}=e,{far:v=10}=e,{smooth:M=!0}=e,{resolution:U=512}=e,{frames:P=1/0}=e,{scale:R=10}=e,{color:O="#000000"}=e,{depthWrite:A=!1}=e;const{scene:y,renderer:F}=_i(),X=br(()=>m*(Array.isArray(R)?R[0]:R||1));nn(r,X,le=>t(26,h=le));const k=br(()=>g*(Array.isArray(R)?R[1]:R||1));nn(r,k,le=>t(25,u=le));const q=br(()=>{const le=new Xn(U,U);return le.texture.generateMipmaps=!1,le.texture.colorSpace=F.outputColorSpace,le});nn(r,q,le=>t(36,c=le));const ee=br(()=>{const le=new Xn(U,U);return le.texture.generateMipmaps=!1,le});nn(r,ee,le=>t(35,a=le));const B=br(()=>new Wr(h,u).rotateX(Math.PI/2));nn(r,B,le=>t(0,o=le));const he=br(()=>new Wt(o));nn(r,he,le=>t(37,l=le));const z=br(()=>{const le=new lc({depthTest:!1,depthWrite:!1});return le.onBeforeCompile=Le=>{Le.uniforms={...Le.uniforms,uColor:{value:new Ce(O).convertSRGBToLinear()}},Le.fragmentShader=`uniform vec3 uColor;
`+Le.fragmentShader,Le.fragmentShader=Le.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( uColor, ( 1.0 - fragCoordZ ) * 1.0 );"),Le.fragmentShader=Le.fragmentShader.replace("vec4(vec3(1.0-fragCoordZ),opacity);","vec4(uColor,(1.0-fragCoordZ)*1.0);")},le});nn(r,z,le=>t(34,s=le));const re=new Yn({...Aw,depthTest:!1}),ae=new Yn({...Tw,depthTest:!1}),pe=new Ls(-h/2,h/2,u/2,-u/2,0,v);pe.updateProjectionMatrix();const Re=new ii({map:c.texture,transparent:!0,opacity:_,depthWrite:A}),Ee=le=>{const Le=l;Le.visible=!0,Le.material=re,re.uniforms.tDiffuse.value=c.texture,re.uniforms.h.value=le*1/256,F.setRenderTarget(a),F.render(Le,pe),Le.material=ae,ae.uniforms.tDiffuse.value=a.texture,ae.uniforms.v.value=le*1/256,F.setRenderTarget(c),F.render(Le,pe),Le.visible=!1},V=()=>{const le=y.background;y.background=null;const Le=y.overrideMaterial;y.overrideMaterial=s;const G=F.getClearAlpha();F.setClearAlpha(0),F.setRenderTarget(c),F.render(y,pe),y.overrideMaterial=Le,Ee(b),M&&Ee(b*.4),F.setRenderTarget(null),y.background=le,F.setClearAlpha(G)},$=()=>{V()};let te=0;ag(()=>{(P===1/0||te<P)&&(V(),te+=1)}),Bn(()=>{c.dispose(),a.dispose(),o.dispose(),s.dispose(),re.dispose(),ae.dispose(),Re.dispose()});const Q=lg();nn(r,Q,le=>t(1,f=le));function Ae(le){gu[le?"unshift":"push"](()=>{f=le,Q.set(f)})}return r.$$set=le=>{e=$i($i({},e),Ga(le)),t(12,i=Es(e,n)),"opacity"in le&&t(13,_=le.opacity),"width"in le&&t(14,m=le.width),"height"in le&&t(15,g=le.height),"blur"in le&&t(16,b=le.blur),"far"in le&&t(17,v=le.far),"smooth"in le&&t(18,M=le.smooth),"resolution"in le&&t(19,U=le.resolution),"frames"in le&&t(20,P=le.frames),"scale"in le&&t(21,R=le.scale),"color"in le&&t(22,O=le.color),"depthWrite"in le&&t(23,A=le.depthWrite),"$$scope"in le&&t(29,p=le.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2113536&&X.memoize([m,R]),r.$$.dirty[0]&2129920&&k.memoize(g,R),r.$$.dirty[0]&524288&&q.memoize(U),r.$$.dirty[0]&524288&&ee.memoize(U),r.$$.dirty[0]&100663296&&B.memoize(h,u),r.$$.dirty[0]&1&&he.memoize(o),r.$$.dirty[0]&4194304&&z.memoize(O)},[o,f,X,k,q,ee,B,he,z,pe,Re,Q,i,_,m,g,b,v,M,U,P,R,O,A,$,u,h,d,Ae,p]}class Nw extends In{constructor(e){super(),Ln(this,e,Lw,Iw,Pn,{opacity:13,width:14,height:15,blur:16,far:17,smooth:18,resolution:19,frames:20,scale:21,color:22,depthWrite:23,refresh:24},null,[-1,-1])}get refresh(){return this.$$.ctx[24]}}const Dw=()=>Ew("threlte-controls",{orbitControls:rn(void 0),trackballControls:rn(void 0)}),ad={type:"change"},Al={type:"start"},cd={type:"end"},Na=new Hr,ld=new Ai,Uw=Math.cos(70*Ar.DEG2RAD);let Ow=class extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",Ne),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ad),n.update(),s=i.NONE},this.update=function(){const x=new N,Y=new un().setFromUnitVectors(e.up,new N(0,1,0)),ce=Y.clone().invert(),Me=new N,Ue=new un,mt=new N,ct=2*Math.PI;return function(Zt=null){const Ct=n.object.position;x.copy(Ct).sub(n.target),x.applyQuaternion(Y),a.setFromVector3(x),n.autoRotate&&s===i.NONE&&X(y(Zt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Mt=n.minAzimuthAngle,zt=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(zt)&&(Mt<-Math.PI?Mt+=ct:Mt>Math.PI&&(Mt-=ct),zt<-Math.PI?zt+=ct:zt>Math.PI&&(zt-=ct),Mt<=zt?a.theta=Math.max(Mt,Math.min(zt,a.theta)):a.theta=a.theta>(Mt+zt)/2?Math.max(Mt,a.theta):Math.min(zt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let xn=!1;if(n.zoomToCursor&&P||n.object.isOrthographicCamera)a.radius=ae(a.radius);else{const Nn=a.radius;a.radius=ae(a.radius*l),xn=Nn!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(ce),Ct.copy(n.target).add(x),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&P){let Nn=null;if(n.object.isPerspectiveCamera){const ci=x.length();Nn=ae(ci*l);const Fi=ci-Nn;n.object.position.addScaledVector(M,Fi),n.object.updateMatrixWorld(),xn=!!Fi}else if(n.object.isOrthographicCamera){const ci=new N(U.x,U.y,0);ci.unproject(n.object);const Fi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),xn=Fi!==n.object.zoom;const vi=new N(U.x,U.y,0);vi.unproject(n.object),n.object.position.sub(vi).add(ci),n.object.updateMatrixWorld(),Nn=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Nn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Nn).add(n.object.position):(Na.origin.copy(n.object.position),Na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Na.direction))<Uw?e.lookAt(n.target):(ld.setFromNormalAndCoplanarPoint(n.object.up,n.target),Na.intersectPlane(ld,n.target))))}else if(n.object.isOrthographicCamera){const Nn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Nn!==n.object.zoom&&(n.object.updateProjectionMatrix(),xn=!0)}return l=1,P=!1,xn||Me.distanceToSquared(n.object.position)>o||8*(1-Ue.dot(n.object.quaternion))>o||mt.distanceToSquared(n.target)>o?(n.dispatchEvent(ad),Me.copy(n.object.position),Ue.copy(n.object.quaternion),mt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",W),n.domElement.removeEventListener("pointercancel",oe),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",oe),n.domElement.getRootNode().removeEventListener("keydown",je,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ne),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new fu,c=new fu;let l=1;const u=new N,h=new ie,f=new ie,d=new ie,p=new ie,_=new ie,m=new ie,g=new ie,b=new ie,v=new ie,M=new N,U=new ie;let P=!1;const R=[],O={};let A=!1;function y(x){return x!==null?2*Math.PI/60*n.autoRotateSpeed*x:2*Math.PI/60/60*n.autoRotateSpeed}function F(x){const Y=Math.abs(x*.01);return Math.pow(.95,n.zoomSpeed*Y)}function X(x){c.theta-=x}function k(x){c.phi-=x}const q=function(){const x=new N;return function(ce,Me){x.setFromMatrixColumn(Me,0),x.multiplyScalar(-ce),u.add(x)}}(),ee=function(){const x=new N;return function(ce,Me){n.screenSpacePanning===!0?x.setFromMatrixColumn(Me,1):(x.setFromMatrixColumn(Me,0),x.crossVectors(n.object.up,x)),x.multiplyScalar(ce),u.add(x)}}(),B=function(){const x=new N;return function(ce,Me){const Ue=n.domElement;if(n.object.isPerspectiveCamera){const mt=n.object.position;x.copy(mt).sub(n.target);let ct=x.length();ct*=Math.tan(n.object.fov/2*Math.PI/180),q(2*ce*ct/Ue.clientHeight,n.object.matrix),ee(2*Me*ct/Ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(ce*(n.object.right-n.object.left)/n.object.zoom/Ue.clientWidth,n.object.matrix),ee(Me*(n.object.top-n.object.bottom)/n.object.zoom/Ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function he(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(x){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(x,Y){if(!n.zoomToCursor)return;P=!0;const ce=n.domElement.getBoundingClientRect(),Me=x-ce.left,Ue=Y-ce.top,mt=ce.width,ct=ce.height;U.x=Me/mt*2-1,U.y=-(Ue/ct)*2+1,M.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function ae(x){return Math.max(n.minDistance,Math.min(n.maxDistance,x))}function pe(x){h.set(x.clientX,x.clientY)}function Re(x){re(x.clientX,x.clientX),g.set(x.clientX,x.clientY)}function Ee(x){p.set(x.clientX,x.clientY)}function V(x){f.set(x.clientX,x.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;X(2*Math.PI*d.x/Y.clientHeight),k(2*Math.PI*d.y/Y.clientHeight),h.copy(f),n.update()}function $(x){b.set(x.clientX,x.clientY),v.subVectors(b,g),v.y>0?he(F(v.y)):v.y<0&&z(F(v.y)),g.copy(b),n.update()}function te(x){_.set(x.clientX,x.clientY),m.subVectors(_,p).multiplyScalar(n.panSpeed),B(m.x,m.y),p.copy(_),n.update()}function Q(x){re(x.clientX,x.clientY),x.deltaY<0?z(F(x.deltaY)):x.deltaY>0&&he(F(x.deltaY)),n.update()}function Ae(x){let Y=!1;switch(x.code){case n.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),Y=!0;break}Y&&(x.preventDefault(),n.update())}function le(x){if(R.length===1)h.set(x.pageX,x.pageY);else{const Y=xt(x),ce=.5*(x.pageX+Y.x),Me=.5*(x.pageY+Y.y);h.set(ce,Me)}}function Le(x){if(R.length===1)p.set(x.pageX,x.pageY);else{const Y=xt(x),ce=.5*(x.pageX+Y.x),Me=.5*(x.pageY+Y.y);p.set(ce,Me)}}function G(x){const Y=xt(x),ce=x.pageX-Y.x,Me=x.pageY-Y.y,Ue=Math.sqrt(ce*ce+Me*Me);g.set(0,Ue)}function fe(x){n.enableZoom&&G(x),n.enablePan&&Le(x)}function ue(x){n.enableZoom&&G(x),n.enableRotate&&le(x)}function xe(x){if(R.length==1)f.set(x.pageX,x.pageY);else{const ce=xt(x),Me=.5*(x.pageX+ce.x),Ue=.5*(x.pageY+ce.y);f.set(Me,Ue)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;X(2*Math.PI*d.x/Y.clientHeight),k(2*Math.PI*d.y/Y.clientHeight),h.copy(f)}function _e(x){if(R.length===1)_.set(x.pageX,x.pageY);else{const Y=xt(x),ce=.5*(x.pageX+Y.x),Me=.5*(x.pageY+Y.y);_.set(ce,Me)}m.subVectors(_,p).multiplyScalar(n.panSpeed),B(m.x,m.y),p.copy(_)}function ve(x){const Y=xt(x),ce=x.pageX-Y.x,Me=x.pageY-Y.y,Ue=Math.sqrt(ce*ce+Me*Me);b.set(0,Ue),v.set(0,Math.pow(b.y/g.y,n.zoomSpeed)),he(v.y),g.copy(b);const mt=(x.pageX+Y.x)*.5,ct=(x.pageY+Y.y)*.5;re(mt,ct)}function D(x){n.enableZoom&&ve(x),n.enablePan&&_e(x)}function E(x){n.enableZoom&&ve(x),n.enableRotate&&xe(x)}function W(x){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(x.pointerId),n.domElement.addEventListener("pointermove",ne),n.domElement.addEventListener("pointerup",oe)),!yt(x)&&(dt(x),x.pointerType==="touch"?Qe(x):de(x)))}function ne(x){n.enabled!==!1&&(x.pointerType==="touch"?Fe(x):Ye(x))}function oe(x){switch(pt(x),R.length){case 0:n.domElement.releasePointerCapture(x.pointerId),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",oe),n.dispatchEvent(cd),s=i.NONE;break;case 1:const Y=R[0],ce=O[Y];Qe({pointerId:Y,pageX:ce.x,pageY:ce.y});break}}function de(x){let Y;switch(x.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Mr.DOLLY:if(n.enableZoom===!1)return;Re(x),s=i.DOLLY;break;case Mr.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enablePan===!1)return;Ee(x),s=i.PAN}else{if(n.enableRotate===!1)return;pe(x),s=i.ROTATE}break;case Mr.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(n.enableRotate===!1)return;pe(x),s=i.ROTATE}else{if(n.enablePan===!1)return;Ee(x),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Al)}function Ye(x){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;V(x);break;case i.DOLLY:if(n.enableZoom===!1)return;$(x);break;case i.PAN:if(n.enablePan===!1)return;te(x);break}}function me(x){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(x.preventDefault(),n.dispatchEvent(Al),Q(He(x)),n.dispatchEvent(cd))}function He(x){const Y=x.deltaMode,ce={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(Y){case 1:ce.deltaY*=16;break;case 2:ce.deltaY*=100;break}return x.ctrlKey&&!A&&(ce.deltaY*=10),ce}function je(x){x.key==="Control"&&(A=!0,n.domElement.getRootNode().addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(x){x.key==="Control"&&(A=!1,n.domElement.getRootNode().removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Ne(x){n.enabled===!1||n.enablePan===!1||Ae(x)}function Qe(x){switch(_t(x),R.length){case 1:switch(n.touches.ONE){case Sr.ROTATE:if(n.enableRotate===!1)return;le(x),s=i.TOUCH_ROTATE;break;case Sr.PAN:if(n.enablePan===!1)return;Le(x),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Sr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(x),s=i.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(x),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Al)}function Fe(x){switch(_t(x),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(x),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(x),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(x),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;E(x),n.update();break;default:s=i.NONE}}function ke(x){n.enabled!==!1&&x.preventDefault()}function dt(x){R.push(x.pointerId)}function pt(x){delete O[x.pointerId];for(let Y=0;Y<R.length;Y++)if(R[Y]==x.pointerId){R.splice(Y,1);return}}function yt(x){for(let Y=0;Y<R.length;Y++)if(R[Y]==x.pointerId)return!0;return!1}function _t(x){let Y=O[x.pointerId];Y===void 0&&(Y=new ie,O[x.pointerId]=Y),Y.set(x.pageX,x.pageY)}function xt(x){const Y=x.pointerId===R[0]?R[1]:R[0];return O[Y]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",W),n.domElement.addEventListener("pointercancel",oe),n.domElement.addEventListener("wheel",me,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",je,{passive:!0,capture:!0}),this.update()}};const Fw=r=>({ref:r&1}),ud=r=>({ref:r[0]});function kw(r){let e;const t=r[6].default,n=er(t,r,r[8],ud);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&257)&&tr(n,t,i,i[8],e?ir(t,i[8],s,Fw):nr(i[8]),ud)},i(i){e||(ye(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function Bw(r){let e,t;const n=[{is:r[0]},r[5]];let i={$$slots:{default:[kw,({ref:s})=>({0:s}),({ref:s})=>s?1:0]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=$i(i,n[s]);return e=new Bt({props:i}),r[7](e),e.$on("change",r[3]),{c(){lt(e.$$.fragment)},l(s){ut(e.$$.fragment,s)},m(s,o){ht(e,s,o),t=!0},p(s,[o]){const a=o&33?kd(n,[o&1&&{is:s[0]},o&32&&Bd(s[5])]):{};o&257&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(ye(e.$$.fragment,s),t=!0)},o(s){we(e.$$.fragment,s),t=!1},d(s){r[7](null),ft(e,s)}}}function zw(r,e,t){const n=["ref"];let i=Es(e,n),s,o,{$$slots:a={},$$scope:c}=e;const l=hh();nn(r,l,v=>t(9,s=v));const u=v=>v.isCamera,{renderer:h,invalidate:f}=_i();if(!u(s))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const d=new Ow(s,h.domElement),{start:p,stop:_}=ag(d.update,{autoStart:!1,autoInvalidate:!1}),m=lg();nn(r,m,v=>t(1,o=v));const{orbitControls:g}=Dw();g.set(d),Bn(()=>g.set(void 0));function b(v){gu[v?"unshift":"push"](()=>{o=v,m.set(o)})}return r.$$set=v=>{e=$i($i({},e),Ga(v)),t(5,i=Es(e,n)),"$$scope"in v&&t(8,c=v.$$scope)},r.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[d,o,l,f,m,i,a,b,c]}class Vw extends In{constructor(e){super(),Ln(this,e,zw,Bw,Pn,{ref:0})}get ref(){return this.$$.ctx[0]}}new Ve;new Ve;new Wt;`${Ke.logdepthbuf_pars_vertex}${Ke.fog_pars_vertex}${Ke.logdepthbuf_vertex}${Ke.fog_vertex}`;`${Ke.tonemapping_fragment}${Ke.colorspace_fragment}`;`${Ke.tonemapping_fragment}${Ke.colorspace_fragment}`;const Hw=`

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
`,Gw=`

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
`,Ww=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Xw=Ww,qw=`
	${Hw}
	${Gw}
`;`${Xw}${qw}${Ke.tonemapping_fragment}${Ke.colorspace_fragment}`;const Yw=r=>{const{camera:e}=_i();let t=r.current.clientWidth,n=r.current.clientHeight;const i=new ResizeObserver(([s])=>{t=s.contentRect.width,n=s.contentRect.height});return An(r,s=>(s&&i.observe(s),()=>{s&&i.unobserve(s)})),(s,o)=>{o.pointer.update(a=>(a.set(s.offsetX/t*2-1,-(s.offsetY/n)*2+1),a)),o.raycaster.setFromCamera(o.pointer.current,e.current)}},ug=Symbol("interactivity-context"),Zw=()=>kn(ug),jw=r=>{const e=wn(_i().renderer.domElement),t={enabled:wn(!0),pointer:wn(new ie),pointerOverTarget:wn(!1),lastEvent:void 0,raycaster:new $m,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:e,compute:Yw(e),filter:r==null?void 0:r.filter};return Fn(ug,t),t},hg=Symbol("interactivity-handler-context"),fg=()=>kn(hg),Jw=()=>{Fn(hg,{dispatchers:new WeakMap})},$w=()=>{const r=Zw(),{dispatchers:e}=fg();if(!r)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");const t=fh();return{...r,addInteractiveObject:s=>{r.interactiveObjects.indexOf(s)>-1||(e.set(s,t),r.interactiveObjects.push(s))},removeInteractiveObject:s=>{const o=r.interactiveObjects.indexOf(s);r.interactiveObjects.splice(o,1),e.delete(s)}}},Kw=r=>{const e=Ja(),t=rn(!1);return Eo(()=>{t.set(Object.keys(e.$$.callbacks).some(n=>r.includes(n)))}),{hasEventHandlers:t}},Qw=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],e1=()=>{ww("interactivity",({ref:r})=>{if(!r.isObject3D)return;const{addInteractiveObject:e,removeInteractiveObject:t}=$w(),n=rn(r),{hasEventHandlers:i}=Kw(Qw);return An([i,n],([s,o])=>{if(s)return e(o),()=>t(o)}),{onRefChange(s){n.set(s)}}})};function hd(r){return`${(r.eventObject||r.object).uuid}/${r.index}${r.instanceId}`}const fd=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],t1=r=>{const{dispatchers:e}=fg(),t=u=>{const h=u.offsetX-r.initialClick[0],f=u.offsetY-r.initialClick[1];return Math.round(Math.hypot(h,f))},n=u=>{for(const h of r.hovered.values())if(u.length===0||!u.some(f=>f.object===h.object&&f.index===h.index&&f.instanceId===h.instanceId)){const{eventObject:f}=h;r.hovered.delete(hd(h));const d=e.get(f);if(d){const p={...h,intersections:u};d("pointerout",p),d("pointerleave",p)}}},i=ES(r.enabled),s=()=>{if(!i.current)return[];const u=[],h=r.raycaster.intersectObjects(r.interactiveObjects,!0),f=r.filter===void 0?h:r.filter(h,r);for(const d of f){let p=d.object;for(;p;)e.has(p)&&u.push({...d,eventObject:p}),p=p.parent}return u},o=(u,h)=>{var f;for(const d of h)(f=e.get(d))==null||f("pointermissed",u)},a=u=>u==="pointerleave"||u==="pointercancel"?()=>{r.pointerOverTarget.set(!1),n([])}:u==="pointerenter"?()=>{r.pointerOverTarget.set(!0)}:h=>{const f=u==="pointermove",d=u==="click"||u==="contextmenu"||u==="dblclick";r.compute(h,r);const p=s(),_=d?t(h):0;u==="pointerdown"&&(r.initialClick=[h.offsetX,h.offsetY],r.initialHits=p.map(g=>g.eventObject)),d&&p.length===0&&_<=2&&o(h,r.interactiveObjects),f&&n(p);let m=!1;e:for(const g of p){const b={stopped:m,...g,intersections:p,stopPropagation(){if(m=!0,b.stopped=!0,r.hovered.size>0&&Array.from(r.hovered.values()).some(M=>M.eventObject===g.eventObject)){const M=p.slice(0,p.indexOf(g));n([...M,g])}},camera:r.raycaster.camera,delta:_,nativeEvent:h,pointer:r.pointer.current,ray:r.raycaster.ray},v=e.get(g.eventObject);if(!v)return;if(f){if(v.hasEventListener("pointerover")||v.hasEventListener("pointerenter")||v.hasEventListener("pointerout")||v.hasEventListener("pointerleave")){const M=hd(b),U=r.hovered.get(M);U?U.stopped&&b.stopPropagation():(r.hovered.set(M,b),v("pointerover",b),v("pointerenter",b))}v("pointermove",b)}else v.hasEventListener(u)?(!d||r.initialHits.includes(g.eventObject))&&(o(h,r.interactiveObjects.filter(U=>!r.initialHits.includes(U))),v(u,b)):d&&r.initialHits.includes(g.eventObject)&&o(h,r.interactiveObjects.filter(U=>!r.initialHits.includes(U)));if(m)break e}},c=u=>{fd.forEach(([h])=>{u.removeEventListener(h,a(h))})},l=u=>{fd.forEach(([h,f])=>{u.addEventListener(h,a(h),{passive:f})})};An(r.target,u=>(u&&l(u),()=>{u&&c(u)}))},n1=r=>{Jw();const e=jw(r);return e1(),t1(e),e};for(let r=0;r<256;r++)(r<16?"0":"")+r.toString(16);var dg={exports:{}};dg.exports=Lc;dg.exports.default=Lc;function Lc(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,s=pg(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,c,l,u,h,f,d;if(n&&(s=a1(r,e,s,t)),r.length>80*t){a=l=r[0],c=u=r[1];for(var p=t;p<i;p+=t)h=r[p],f=r[p+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Mo(s,o,t,a,c,d,0),o}function pg(r,e,t,n,i){var s,o;if(i===mu(r,e,t,n)>0)for(s=e;s<t;s+=n)o=dd(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=dd(s,r[s],r[s+1],o);return o&&Nc(o,o.next)&&(wo(o),o=o.next),o}function Vr(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Nc(t,t.next)||Gt(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mo(r,e,t,n,i,s,o){if(r){!o&&s&&f1(r,n,i,s);for(var a=r,c,l;r.prev!==r.next;){if(c=r.prev,l=r.next,s?r1(r,n,i,s):i1(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),wo(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=s1(Vr(r),e,t),Mo(r,e,t,n,i,s,2)):o===2&&o1(r,e,t,n,i,s):Mo(Vr(r),e,t,n,i,s,1);break}}}}function i1(r){var e=r.prev,t=r,n=r.next;if(Gt(e,t,n)>=0)return!1;for(var i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<c?a<l?a:l:c<l?c:l,f=i>s?i>o?i:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ss(i,a,s,c,o,l,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function r1(r,e,t,n){var i=r.prev,s=r,o=r.next;if(Gt(i,s,o)>=0)return!1;for(var a=i.x,c=s.x,l=o.x,u=i.y,h=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,g=du(d,p,e,t,n),b=du(_,m,e,t,n),v=r.prevZ,M=r.nextZ;v&&v.z>=g&&M&&M.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&Ss(a,u,c,h,l,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Ss(a,u,c,h,l,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&Ss(a,u,c,h,l,f,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Ss(a,u,c,h,l,f,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function s1(r,e,t){var n=r;do{var i=n.prev,s=n.next.next;!Nc(i,s)&&mg(i,n,n.next,s)&&So(i,s)&&So(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),wo(n),wo(n.next),n=r=s),n=n.next}while(n!==r);return Vr(n)}function o1(r,e,t,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&m1(o,a)){var c=gg(o,a);o=Vr(o,o.next),c=Vr(c,c.next),Mo(o,e,t,n,i,s,0),Mo(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function a1(r,e,t,n){var i=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=pg(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(p1(l));for(i.sort(c1),s=0;s<i.length;s++)t=l1(i[s],t);return t}function c1(r,e){return r.x-e.x}function l1(r,e){var t=u1(r,e);if(!t)return e;var n=gg(t,r);return Vr(n,n.next),Vr(t,t.next)}function u1(r,e){var t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=n&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===n))return o}t=t.next}while(t!==e);if(!o)return null;var c=o,l=o.x,u=o.y,h=1/0,f;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ss(i<u?n:s,i,l,u,i<u?s:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),So(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&h1(o,t)))&&(o=t,h=f)),t=t.next;while(t!==c);return o}function h1(r,e){return Gt(r.prev,r,e.prev)<0&&Gt(e.next,r,r.next)<0}function f1(r,e,t,n){var i=r;do i.z===0&&(i.z=du(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,d1(i)}function d1(r){var e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function du(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function p1(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ss(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function m1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!g1(r,e)&&(So(r,e)&&So(e,r)&&_1(r,e)&&(Gt(r.prev,r,e.prev)||Gt(r,e.prev,e))||Nc(r,e)&&Gt(r.prev,r,r.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Nc(r,e){return r.x===e.x&&r.y===e.y}function mg(r,e,t,n){var i=Ua(Gt(r,e,t)),s=Ua(Gt(r,e,n)),o=Ua(Gt(t,n,r)),a=Ua(Gt(t,n,e));return!!(i!==s&&o!==a||i===0&&Da(r,t,e)||s===0&&Da(r,n,e)||o===0&&Da(t,r,n)||a===0&&Da(t,e,n))}function Da(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ua(r){return r>0?1:r<0?-1:0}function g1(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&mg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function So(r,e){return Gt(r.prev,r,r.next)<0?Gt(r,e,r.next)>=0&&Gt(r,r.prev,e)>=0:Gt(r,e,r.prev)<0||Gt(r,r.next,e)<0}function _1(r,e){var t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function gg(r,e){var t=new pu(r.i,r.x,r.y),n=new pu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dd(r,e,t,n){var i=new pu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function pu(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Lc.deviation=function(r,e,t,n){var i=e&&e.length,s=i?e[0]*t:r.length,o=Math.abs(mu(r,0,s,t));if(i)for(var a=0,c=e.length;a<c;a++){var l=e[a]*t,u=a<c-1?e[a+1]*t:r.length;o-=Math.abs(mu(r,l,u,t))}var h=0;for(a=0;a<n.length;a+=3){var f=n[a]*t,d=n[a+1]*t,p=n[a+2]*t;h+=Math.abs((r[f]-r[p])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[p+1]-r[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function mu(r,e,t,n){for(var i=0,s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Lc.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};new ie;new ie;var pd;(r=>{function e(i){let s=i.slice();return s.sort(r.POINT_COMPARATOR),r.makeHullPresorted(s)}r.makeHull=e;function t(i){if(i.length<=1)return i.slice();let s=[];for(let a=0;a<i.length;a++){const c=i[a];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let o=[];for(let a=i.length-1;a>=0;a--){const c=i[a];for(;o.length>=2;){const l=o[o.length-1],u=o[o.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))o.pop();else break}o.push(c)}return o.pop(),s.length==1&&o.length==1&&s[0].x==o[0].x&&s[0].y==o[0].y?s:s.concat(o)}r.makeHullPresorted=t;function n(i,s){return i.x<s.x?-1:i.x>s.x?1:i.y<s.y?-1:i.y>s.y?1:0}r.POINT_COMPARATOR=n})(pd||(pd={}));const{subscribe:v1,set:_g,update:y1}=rn(void 0),x1=()=>{_g(void 0)},ja={subscribe:v1,set:_g,update:y1,reset:x1};function vs(r,e="xyz"){var t;if(r.hasAttribute(e)){const n=(t=r.getAttribute(e))==null?void 0:t.split(" ");if(n){const i=[];for(const s of n)i.push(parseFloat(s));return i}}}function b1(r){return r?new Ce(r[0],r[1],r[2]):new Ce("white")}class md extends Bm{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case f:case _:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case p:case m:case g:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function n(B,he,z,re,ae){let pe,Re;const Ee=z.pixel_size>>3,V=z.width*z.height*Ee;if(he&&(Re=ae.subarray(re,re+=z.colormap_length*(z.colormap_size>>3))),B){pe=new Uint8Array(V);let $,te,Q,Ae=0;const le=new Uint8Array(Ee);for(;Ae<V;)if($=ae[re++],te=($&127)+1,$&128){for(Q=0;Q<Ee;++Q)le[Q]=ae[re++];for(Q=0;Q<te;++Q)pe.set(le,Ae+Q*Ee);Ae+=Ee*te}else{for(te*=Ee,Q=0;Q<te;++Q)pe[Ae+Q]=ae[re++];Ae+=te}}else pe=ae.subarray(re,re+=he?z.width*z.height:V);return{pixel_data:pe,palettes:Re}}function i(B,he,z,re,ae,pe,Re,Ee,V){const $=V;let te,Q=0,Ae,le;const Le=y.width;for(le=he;le!==re;le+=z)for(Ae=ae;Ae!==Re;Ae+=pe,Q++)te=Ee[Q],B[(Ae+Le*le)*4+3]=255,B[(Ae+Le*le)*4+2]=$[te*3+0],B[(Ae+Le*le)*4+1]=$[te*3+1],B[(Ae+Le*le)*4+0]=$[te*3+2];return B}function s(B,he,z,re,ae,pe,Re,Ee){let V,$=0,te,Q;const Ae=y.width;for(Q=he;Q!==re;Q+=z)for(te=ae;te!==Re;te+=pe,$+=2)V=Ee[$+0]+(Ee[$+1]<<8),B[(te+Ae*Q)*4+0]=(V&31744)>>7,B[(te+Ae*Q)*4+1]=(V&992)>>2,B[(te+Ae*Q)*4+2]=(V&31)<<3,B[(te+Ae*Q)*4+3]=V&32768?0:255;return B}function o(B,he,z,re,ae,pe,Re,Ee){let V=0,$,te;const Q=y.width;for(te=he;te!==re;te+=z)for($=ae;$!==Re;$+=pe,V+=3)B[($+Q*te)*4+3]=255,B[($+Q*te)*4+2]=Ee[V+0],B[($+Q*te)*4+1]=Ee[V+1],B[($+Q*te)*4+0]=Ee[V+2];return B}function a(B,he,z,re,ae,pe,Re,Ee){let V=0,$,te;const Q=y.width;for(te=he;te!==re;te+=z)for($=ae;$!==Re;$+=pe,V+=4)B[($+Q*te)*4+2]=Ee[V+0],B[($+Q*te)*4+1]=Ee[V+1],B[($+Q*te)*4+0]=Ee[V+2],B[($+Q*te)*4+3]=Ee[V+3];return B}function c(B,he,z,re,ae,pe,Re,Ee){let V,$=0,te,Q;const Ae=y.width;for(Q=he;Q!==re;Q+=z)for(te=ae;te!==Re;te+=pe,$++)V=Ee[$],B[(te+Ae*Q)*4+0]=V,B[(te+Ae*Q)*4+1]=V,B[(te+Ae*Q)*4+2]=V,B[(te+Ae*Q)*4+3]=255;return B}function l(B,he,z,re,ae,pe,Re,Ee){let V=0,$,te;const Q=y.width;for(te=he;te!==re;te+=z)for($=ae;$!==Re;$+=pe,V+=2)B[($+Q*te)*4+0]=Ee[V+0],B[($+Q*te)*4+1]=Ee[V+0],B[($+Q*te)*4+2]=Ee[V+0],B[($+Q*te)*4+3]=Ee[V+1];return B}function u(B,he,z,re,ae){let pe,Re,Ee,V,$,te;switch((y.flags&b)>>v){default:case P:pe=0,Ee=1,$=he,Re=0,V=1,te=z;break;case M:pe=0,Ee=1,$=he,Re=z-1,V=-1,te=-1;break;case R:pe=he-1,Ee=-1,$=-1,Re=0,V=1,te=z;break;case U:pe=he-1,Ee=-1,$=-1,Re=z-1,V=-1,te=-1;break}if(k)switch(y.pixel_size){case 8:c(B,Re,V,te,pe,Ee,$,re);break;case 16:l(B,Re,V,te,pe,Ee,$,re);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(y.pixel_size){case 8:i(B,Re,V,te,pe,Ee,$,re,ae);break;case 16:s(B,Re,V,te,pe,Ee,$,re);break;case 24:o(B,Re,V,te,pe,Ee,$,re);break;case 32:a(B,Re,V,te,pe,Ee,$,re);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}const h=0,f=1,d=2,p=3,_=9,m=10,g=11,b=48,v=4,M=0,U=1,P=2,R=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let O=0;const A=new Uint8Array(e),y={id_length:A[O++],colormap_type:A[O++],image_type:A[O++],colormap_index:A[O++]|A[O++]<<8,colormap_length:A[O++]|A[O++]<<8,colormap_size:A[O++],origin:[A[O++]|A[O++]<<8,A[O++]|A[O++]<<8],width:A[O++]|A[O++]<<8,height:A[O++]|A[O++]<<8,pixel_size:A[O++],flags:A[O++]};if(t(y),y.id_length+O>e.length)throw new Error("THREE.TGALoader: No data.");O+=y.id_length;let F=!1,X=!1,k=!1;switch(y.image_type){case _:F=!0,X=!0;break;case f:X=!0;break;case m:F=!0;break;case d:break;case g:F=!0,k=!0;break;case p:k=!0;break}const q=new Uint8Array(y.width*y.height*4),ee=n(F,X,y,O,A);return u(q,y.width,y.height,ee.pixel_data,ee.palettes),{data:q,width:y.width,height:y.height,flipY:!0,generateMipmaps:!0,minFilter:ni}}}class M1 extends fn{load(e,t,n,i){const s=this,o=s.path===""?Za.extractUrlBase(e):s.path,a=new ri(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(c){try{t(s.parse(c,o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e,t){function n(w,S){const C=[],T=w.childNodes;for(let I=0,j=T.length;I<j;I++){const se=T[I];se.nodeName===S&&C.push(se)}return C}function i(w){if(w.length===0)return[];const S=w.trim().split(/\s+/),C=new Array(S.length);for(let T=0,I=S.length;T<I;T++)C[T]=S[T];return C}function s(w){if(w.length===0)return[];const S=w.trim().split(/\s+/),C=new Array(S.length);for(let T=0,I=S.length;T<I;T++)C[T]=parseFloat(S[T]);return C}function o(w){if(w.length===0)return[];const S=w.trim().split(/\s+/),C=new Array(S.length);for(let T=0,I=S.length;T<I;T++)C[T]=parseInt(S[T]);return C}function a(w){return w.substring(1)}function c(){return"three_default_"+xg++}function l(w){return Object.keys(w).length===0}function u(w){return{unit:h(n(w,"unit")[0]),upAxis:f(n(w,"up_axis")[0])}}function h(w){return w!==void 0&&w.hasAttribute("meter")===!0?parseFloat(w.getAttribute("meter")):1}function f(w){return w!==void 0?w.textContent:"Y_UP"}function d(w,S,C,T){const I=n(w,S)[0];if(I!==void 0){const j=n(I,C);for(let se=0;se<j.length;se++)T(j[se])}}function p(w,S){for(const C in w){const T=w[C];T.build=S(w[C])}}function _(w,S){return w.build!==void 0||(w.build=S(w)),w.build}function m(w){const S={sources:{},samplers:{},channels:{}};let C=!1;for(let T=0,I=w.childNodes.length;T<I;T++){const j=w.childNodes[T];if(j.nodeType!==1)continue;let se;switch(j.nodeName){case"source":se=j.getAttribute("id"),S.sources[se]=Me(j);break;case"sampler":se=j.getAttribute("id"),S.samplers[se]=g(j);break;case"channel":se=j.getAttribute("target"),S.channels[se]=b(j);break;case"animation":m(j),C=!0;break;default:console.log(j)}}C===!1&&(et.animations[w.getAttribute("id")||Ar.generateUUID()]=S)}function g(w){const S={inputs:{}};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"input":const j=a(I.getAttribute("source")),se=I.getAttribute("semantic");S.inputs[se]=j;break}}return S}function b(w){const S={};let T=w.getAttribute("target").split("/");const I=T.shift();let j=T.shift();const se=j.indexOf("(")!==-1,Oe=j.indexOf(".")!==-1;if(Oe)T=j.split("."),j=T.shift(),S.member=T.shift();else if(se){const Se=j.split("(");j=Se.shift();for(let Ie=0;Ie<Se.length;Ie++)Se[Ie]=parseInt(Se[Ie].replace(/\)/,""));S.indices=Se}return S.id=I,S.sid=j,S.arraySyntax=se,S.memberSyntax=Oe,S.sampler=a(w.getAttribute("source")),S}function v(w){const S=[],C=w.channels,T=w.samplers,I=w.sources;for(const j in C)if(C.hasOwnProperty(j)){const se=C[j],Oe=T[se.sampler],Se=Oe.inputs.INPUT,Ie=Oe.inputs.OUTPUT,We=I[Se],ge=I[Ie],Ge=U(se,We,ge);y(Ge,S)}return S}function M(w){return _(et.animations[w],v)}function U(w,S,C){const T=et.nodes[w.id],I=li(T.id),j=T.transforms[w.sid],se=T.matrix.clone().transpose();let Oe,Se,Ie,We,ge,Ge;const Be={};switch(j){case"matrix":for(Ie=0,We=S.array.length;Ie<We;Ie++)if(Oe=S.array[Ie],Se=Ie*C.stride,Be[Oe]===void 0&&(Be[Oe]={}),w.arraySyntax===!0){const Vt=C.array[Se],Pt=w.indices[0]+4*w.indices[1];Be[Oe][Pt]=Vt}else for(ge=0,Ge=C.stride;ge<Ge;ge++)Be[Oe][ge]=C.array[Se+ge];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break}const $e=P(Be,se);return{name:I.uuid,keyframes:$e}}function P(w,S){const C=[];for(const I in w)C.push({time:parseFloat(I),value:w[I]});C.sort(T);for(let I=0;I<16;I++)F(C,I,S.elements[I]);return C;function T(I,j){return I.time-j.time}}const R=new N,O=new N,A=new un;function y(w,S){const C=w.keyframes,T=w.name,I=[],j=[],se=[],Oe=[];for(let Se=0,Ie=C.length;Se<Ie;Se++){const We=C[Se],ge=We.time,Ge=We.value;ze.fromArray(Ge).transpose(),ze.decompose(R,A,O),I.push(ge),j.push(R.x,R.y,R.z),se.push(A.x,A.y,A.z,A.w),Oe.push(O.x,O.y,O.z)}return j.length>0&&S.push(new Br(T+".position",I,j)),se.length>0&&S.push(new qr(T+".quaternion",I,se)),Oe.length>0&&S.push(new Br(T+".scale",I,Oe)),S}function F(w,S,C){let T,I=!0,j,se;for(j=0,se=w.length;j<se;j++)T=w[j],T.value[S]===void 0?T.value[S]=null:I=!1;if(I===!0)for(j=0,se=w.length;j<se;j++)T=w[j],T.value[S]=C;else X(w,S)}function X(w,S){let C,T;for(let I=0,j=w.length;I<j;I++){const se=w[I];if(se.value[S]===null){if(C=k(w,I,S),T=q(w,I,S),C===null){se.value[S]=T.value[S];continue}if(T===null){se.value[S]=C.value[S];continue}ee(se,C,T,S)}}}function k(w,S,C){for(;S>=0;){const T=w[S];if(T.value[C]!==null)return T;S--}return null}function q(w,S,C){for(;S<w.length;){const T=w[S];if(T.value[C]!==null)return T;S++}return null}function ee(w,S,C,T){if(C.time-S.time===0){w.value[T]=S.value[T];return}w.value[T]=(w.time-S.time)*(C.value[T]-S.value[T])/(C.time-S.time)+S.value[T]}function B(w){const S={name:w.getAttribute("id")||"default",start:parseFloat(w.getAttribute("start")||0),end:parseFloat(w.getAttribute("end")||0),animations:[]};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"instance_animation":S.animations.push(a(I.getAttribute("url")));break}}et.clips[w.getAttribute("id")]=S}function he(w){const S=[],C=w.name,T=w.end-w.start||-1,I=w.animations;for(let j=0,se=I.length;j<se;j++){const Oe=M(I[j]);for(let Se=0,Ie=Oe.length;Se<Ie;Se++)S.push(Oe[Se])}return new zr(C,T,S)}function z(w){return _(et.clips[w],he)}function re(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"skin":S.id=a(I.getAttribute("source")),S.skin=ae(I);break;case"morph":S.id=a(I.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}et.controllers[w.getAttribute("id")]=S}function ae(w){const S={sources:{}};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"bind_shape_matrix":S.bindShapeMatrix=s(I.textContent);break;case"source":const j=I.getAttribute("id");S.sources[j]=Me(I);break;case"joints":S.joints=pe(I);break;case"vertex_weights":S.vertexWeights=Re(I);break}}return S}function pe(w){const S={inputs:{}};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"input":const j=I.getAttribute("semantic"),se=a(I.getAttribute("source"));S.inputs[j]=se;break}}return S}function Re(w){const S={inputs:{}};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"input":const j=I.getAttribute("semantic"),se=a(I.getAttribute("source")),Oe=parseInt(I.getAttribute("offset"));S.inputs[j]={id:se,offset:Oe};break;case"vcount":S.vcount=o(I.textContent);break;case"v":S.v=o(I.textContent);break}}return S}function Ee(w){const S={id:w.id},C=et.geometries[S.id];return w.skin!==void 0&&(S.skin=V(w.skin),C.sources.skinIndices=S.skin.indices,C.sources.skinWeights=S.skin.weights),S}function V(w){const C={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},T=w.sources,I=w.vertexWeights,j=I.vcount,se=I.v,Oe=I.inputs.JOINT.offset,Se=I.inputs.WEIGHT.offset,Ie=w.sources[w.joints.inputs.JOINT],We=w.sources[w.joints.inputs.INV_BIND_MATRIX],ge=T[I.inputs.WEIGHT.id].array;let Ge=0,Be,$e,Ze;for(Be=0,Ze=j.length;Be<Ze;Be++){const Pt=j[Be],wt=[];for($e=0;$e<Pt;$e++){const Et=se[Ge+Oe],yi=se[Ge+Se],Dn=ge[yi];wt.push({index:Et,weight:Dn}),Ge+=2}for(wt.sort(Vt),$e=0;$e<4;$e++){const Et=wt[$e];Et!==void 0?(C.indices.array.push(Et.index),C.weights.array.push(Et.weight)):(C.indices.array.push(0),C.weights.array.push(0))}}for(w.bindShapeMatrix?C.bindMatrix=new Ve().fromArray(w.bindShapeMatrix).transpose():C.bindMatrix=new Ve().identity(),Be=0,Ze=Ie.array.length;Be<Ze;Be++){const Pt=Ie.array[Be],wt=new Ve().fromArray(We.array,Be*We.stride).transpose();C.joints.push({name:Pt,boneInverse:wt})}return C;function Vt(Pt,wt){return wt.weight-Pt.weight}}function $(w){return _(et.controllers[w],Ee)}function te(w){const S={init_from:n(w,"init_from")[0].textContent};et.images[w.getAttribute("id")]=S}function Q(w){return w.build!==void 0?w.build:w.init_from}function Ae(w){const S=et.images[w];return S!==void 0?_(S,Q):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",w),null)}function le(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"profile_COMMON":S.profile=Le(I);break}}et.effects[w.getAttribute("id")]=S}function Le(w){const S={surfaces:{},samplers:{}};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"newparam":G(I,S);break;case"technique":S.technique=xe(I);break;case"extra":S.extra=ne(I);break}}return S}function G(w,S){const C=w.getAttribute("sid");for(let T=0,I=w.childNodes.length;T<I;T++){const j=w.childNodes[T];if(j.nodeType===1)switch(j.nodeName){case"surface":S.surfaces[C]=fe(j);break;case"sampler2D":S.samplers[C]=ue(j);break}}}function fe(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"init_from":S.init_from=I.textContent;break}}return S}function ue(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"source":S.source=I.textContent;break}}return S}function xe(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"constant":case"lambert":case"blinn":case"phong":S.type=I.nodeName,S.parameters=_e(I);break;case"extra":S.extra=ne(I);break}}return S}function _e(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":S[I.nodeName]=ve(I);break;case"transparent":S[I.nodeName]={opaque:I.hasAttribute("opaque")?I.getAttribute("opaque"):"A_ONE",data:ve(I)};break}}return S}function ve(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"color":S[I.nodeName]=s(I.textContent);break;case"float":S[I.nodeName]=parseFloat(I.textContent);break;case"texture":S[I.nodeName]={id:I.getAttribute("texture"),extra:D(I)};break}}return S}function D(w){const S={technique:{}};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"extra":E(I,S);break}}return S}function E(w,S){for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"technique":W(I,S);break}}}function W(w,S){for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":S.technique[I.nodeName]=parseFloat(I.textContent);break;case"wrapU":case"wrapV":I.textContent.toUpperCase()==="TRUE"?S.technique[I.nodeName]=1:I.textContent.toUpperCase()==="FALSE"?S.technique[I.nodeName]=0:S.technique[I.nodeName]=parseInt(I.textContent);break;case"bump":S[I.nodeName]=de(I);break}}}function ne(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"technique":S.technique=oe(I);break}}return S}function oe(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"double_sided":S[I.nodeName]=parseInt(I.textContent);break;case"bump":S[I.nodeName]=de(I);break}}return S}function de(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"texture":S[I.nodeName]={id:I.getAttribute("texture"),texcoord:I.getAttribute("texcoord"),extra:D(I)};break}}return S}function Ye(w){return w}function me(w){return _(et.effects[w],Ye)}function He(w){const S={name:w.getAttribute("name")};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"instance_effect":S.url=a(I.getAttribute("url"));break}}et.materials[w.getAttribute("id")]=S}function je(w){let S,C=w.slice((w.lastIndexOf(".")-1>>>0)+2);switch(C=C.toLowerCase(),C){case"tga":S=kc;break;default:S=dh}return S}function be(w){const S=me(w.url),C=S.profile.technique;let T;switch(C.type){case"phong":case"blinn":T=new Ya;break;case"lambert":T=new ju;break;default:T=new ii;break}T.name=w.name||"";function I(Se,Ie=null){const We=S.profile.samplers[Se.id];let ge=null;if(We!==void 0){const Ge=S.profile.surfaces[We.source];ge=Ae(Ge.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ge=Ae(Se.id);if(ge!==null){const Ge=je(ge);if(Ge!==void 0){const Be=Ge.load(ge),$e=Se.extra;if($e!==void 0&&$e.technique!==void 0&&l($e.technique)===!1){const Ze=$e.technique;Be.wrapS=Ze.wrapU?Ri:On,Be.wrapT=Ze.wrapV?Ri:On,Be.offset.set(Ze.offsetU||0,Ze.offsetV||0),Be.repeat.set(Ze.repeatU||1,Ze.repeatV||1)}else Be.wrapS=Ri,Be.wrapT=Ri;return Ie!==null&&(Be.colorSpace=Ie),Be}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ge),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Se.id),null}const j=C.parameters;for(const Se in j){const Ie=j[Se];switch(Se){case"diffuse":Ie.color&&T.color.fromArray(Ie.color),Ie.texture&&(T.map=I(Ie.texture,En));break;case"specular":Ie.color&&T.specular&&T.specular.fromArray(Ie.color),Ie.texture&&(T.specularMap=I(Ie.texture));break;case"bump":Ie.texture&&(T.normalMap=I(Ie.texture));break;case"ambient":Ie.texture&&(T.lightMap=I(Ie.texture,En));break;case"shininess":Ie.float&&T.shininess&&(T.shininess=Ie.float);break;case"emission":Ie.color&&T.emissive&&T.emissive.fromArray(Ie.color),Ie.texture&&(T.emissiveMap=I(Ie.texture,En));break}}T.color.convertSRGBToLinear(),T.specular&&T.specular.convertSRGBToLinear(),T.emissive&&T.emissive.convertSRGBToLinear();let se=j.transparent,Oe=j.transparency;if(Oe===void 0&&se&&(Oe={float:1}),se===void 0&&Oe&&(se={opaque:"A_ONE",data:{color:[1,1,1,1]}}),se&&Oe)if(se.data.texture)T.transparent=!0;else{const Se=se.data.color;switch(se.opaque){case"A_ONE":T.opacity=Se[3]*Oe.float;break;case"RGB_ZERO":T.opacity=1-Se[0]*Oe.float;break;case"A_ZERO":T.opacity=1-Se[3]*Oe.float;break;case"RGB_ONE":T.opacity=Se[0]*Oe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',se.opaque)}T.opacity<1&&(T.transparent=!0)}if(C.extra!==void 0&&C.extra.technique!==void 0){const Se=C.extra.technique;for(const Ie in Se){const We=Se[Ie];switch(Ie){case"double_sided":T.side=We===1?ti:mi;break;case"bump":T.normalMap=I(We.texture),T.normalScale=new ie(1,1);break}}}return T}function Ne(w){return _(et.materials[w],be)}function Qe(w){const S={name:w.getAttribute("name")};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"optics":S.optics=Fe(I);break}}et.cameras[w.getAttribute("id")]=S}function Fe(w){for(let S=0;S<w.childNodes.length;S++){const C=w.childNodes[S];switch(C.nodeName){case"technique_common":return ke(C)}}return{}}function ke(w){const S={};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];switch(T.nodeName){case"perspective":case"orthographic":S.technique=T.nodeName,S.parameters=dt(T);break}}return S}function dt(w){const S={};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];switch(T.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":S[T.nodeName]=parseFloat(T.textContent);break}}return S}function pt(w){let S;switch(w.optics.technique){case"perspective":S=new en(w.optics.parameters.yfov,w.optics.parameters.aspect_ratio,w.optics.parameters.znear,w.optics.parameters.zfar);break;case"orthographic":let C=w.optics.parameters.ymag,T=w.optics.parameters.xmag;const I=w.optics.parameters.aspect_ratio;T=T===void 0?C*I:T,C=C===void 0?T/I:C,T*=.5,C*=.5,S=new Ls(-T,T,C,-C,w.optics.parameters.znear,w.optics.parameters.zfar);break;default:S=new en;break}return S.name=w.name||"",S}function yt(w){const S=et.cameras[w];return S!==void 0?_(S,pt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",w),null)}function _t(w){let S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"technique_common":S=xt(I);break}}et.lights[w.getAttribute("id")]=S}function xt(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"directional":case"point":case"spot":case"ambient":S.technique=I.nodeName,S.parameters=Xe(I)}}return S}function Xe(w){const S={};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"color":const j=s(I.textContent);S.color=new Ce().fromArray(j).convertSRGBToLinear();break;case"falloff_angle":S.falloffAngle=parseFloat(I.textContent);break;case"quadratic_attenuation":const se=parseFloat(I.textContent);S.distance=se?Math.sqrt(1/se):0;break}}return S}function x(w){let S;switch(w.technique){case"directional":S=new ih;break;case"point":S=new nh;break;case"spot":S=new th;break;case"ambient":S=new rh;break}return w.parameters.color&&S.color.copy(w.parameters.color),w.parameters.distance&&(S.distance=w.parameters.distance),S}function Y(w){const S=et.lights[w];return S!==void 0?_(S,x):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",w),null)}function ce(w){const S={name:w.getAttribute("name"),sources:{},vertices:{},primitives:[]},C=n(w,"mesh")[0];if(C!==void 0){for(let T=0;T<C.childNodes.length;T++){const I=C.childNodes[T];if(I.nodeType!==1)continue;const j=I.getAttribute("id");switch(I.nodeName){case"source":S.sources[j]=Me(I);break;case"vertices":S.vertices=Ue(I);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",I.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":S.primitives.push(mt(I));break;default:console.log(I)}}et.geometries[w.getAttribute("id")]=S}}function Me(w){const S={array:[],stride:3};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"float_array":S.array=s(T.textContent);break;case"Name_array":S.array=i(T.textContent);break;case"technique_common":const I=n(T,"accessor")[0];I!==void 0&&(S.stride=parseInt(I.getAttribute("stride")));break}}return S}function Ue(w){const S={};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];T.nodeType===1&&(S[T.getAttribute("semantic")]=a(T.getAttribute("source")))}return S}function mt(w){const S={type:w.nodeName,material:w.getAttribute("material"),count:parseInt(w.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let C=0,T=w.childNodes.length;C<T;C++){const I=w.childNodes[C];if(I.nodeType===1)switch(I.nodeName){case"input":const j=a(I.getAttribute("source")),se=I.getAttribute("semantic"),Oe=parseInt(I.getAttribute("offset")),Se=parseInt(I.getAttribute("set")),Ie=Se>0?se+Se:se;S.inputs[Ie]={id:j,offset:Oe},S.stride=Math.max(S.stride,Oe+1),se==="TEXCOORD"&&(S.hasUV=!0);break;case"vcount":S.vcount=o(I.textContent);break;case"p":S.p=o(I.textContent);break}}return S}function ct(w){const S={};for(let C=0;C<w.length;C++){const T=w[C];S[T.type]===void 0&&(S[T.type]=[]),S[T.type].push(T)}return S}function Nt(w){let S=0;for(let C=0,T=w.length;C<T;C++)w[C].hasUV===!0&&S++;S>0&&S<w.length&&(w.uvsNeedsFix=!0)}function Zt(w){const S={},C=w.sources,T=w.vertices,I=w.primitives;if(I.length===0)return{};const j=ct(I);for(const se in j){const Oe=j[se];Nt(Oe),S[se]=Ct(Oe,C,T)}return S}function Ct(w,S,C){const T={},I={array:[],stride:0},j={array:[],stride:0},se={array:[],stride:0},Oe={array:[],stride:0},Se={array:[],stride:0},Ie={array:[],stride:4},We={array:[],stride:4},ge=new st,Ge=[];let Be=0;for(let $e=0;$e<w.length;$e++){const Ze=w[$e],Vt=Ze.inputs;let Pt=0;switch(Ze.type){case"lines":case"linestrips":Pt=Ze.count*2;break;case"triangles":Pt=Ze.count*3;break;case"polylist":for(let wt=0;wt<Ze.count;wt++){const Et=Ze.vcount[wt];switch(Et){case 3:Pt+=3;break;case 4:Pt+=6;break;default:Pt+=(Et-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ze.type)}ge.addGroup(Be,Pt,$e),Be+=Pt,Ze.material&&Ge.push(Ze.material);for(const wt in Vt){const Et=Vt[wt];switch(wt){case"VERTEX":for(const yi in C){const Dn=C[yi];switch(yi){case"POSITION":const jr=I.array.length;if(Mt(Ze,S[Dn],Et.offset,I.array),I.stride=S[Dn].stride,S.skinWeights&&S.skinIndices&&(Mt(Ze,S.skinIndices,Et.offset,Ie.array),Mt(Ze,S.skinWeights,Et.offset,We.array)),Ze.hasUV===!1&&w.uvsNeedsFix===!0){const bg=(I.array.length-jr)/I.stride;for(let mh=0;mh<bg;mh++)se.array.push(0,0)}break;case"NORMAL":Mt(Ze,S[Dn],Et.offset,j.array),j.stride=S[Dn].stride;break;case"COLOR":Mt(Ze,S[Dn],Et.offset,Se.array),Se.stride=S[Dn].stride;break;case"TEXCOORD":Mt(Ze,S[Dn],Et.offset,se.array),se.stride=S[Dn].stride;break;case"TEXCOORD1":Mt(Ze,S[Dn],Et.offset,Oe.array),se.stride=S[Dn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',yi)}}break;case"NORMAL":Mt(Ze,S[Et.id],Et.offset,j.array),j.stride=S[Et.id].stride;break;case"COLOR":Mt(Ze,S[Et.id],Et.offset,Se.array,!0),Se.stride=S[Et.id].stride;break;case"TEXCOORD":Mt(Ze,S[Et.id],Et.offset,se.array),se.stride=S[Et.id].stride;break;case"TEXCOORD1":Mt(Ze,S[Et.id],Et.offset,Oe.array),Oe.stride=S[Et.id].stride;break}}}return I.array.length>0&&ge.setAttribute("position",new De(I.array,I.stride)),j.array.length>0&&ge.setAttribute("normal",new De(j.array,j.stride)),Se.array.length>0&&ge.setAttribute("color",new De(Se.array,Se.stride)),se.array.length>0&&ge.setAttribute("uv",new De(se.array,se.stride)),Oe.array.length>0&&ge.setAttribute("uv1",new De(Oe.array,Oe.stride)),Ie.array.length>0&&ge.setAttribute("skinIndex",new De(Ie.array,Ie.stride)),We.array.length>0&&ge.setAttribute("skinWeight",new De(We.array,We.stride)),T.data=ge,T.type=w[0].type,T.materialKeys=Ge,T}function Mt(w,S,C,T,I=!1){const j=w.p,se=w.stride,Oe=w.vcount;function Se(ge){let Ge=j[ge+C]*We;const Be=Ge+We;for(;Ge<Be;Ge++)T.push(Ie[Ge]);if(I){const $e=T.length-We-1;Bo.setRGB(T[$e+0],T[$e+1],T[$e+2]).convertSRGBToLinear(),T[$e+0]=Bo.r,T[$e+1]=Bo.g,T[$e+2]=Bo.b}}const Ie=S.array,We=S.stride;if(w.vcount!==void 0){let ge=0;for(let Ge=0,Be=Oe.length;Ge<Be;Ge++){const $e=Oe[Ge];if($e===4){const Ze=ge+se*0,Vt=ge+se*1,Pt=ge+se*2,wt=ge+se*3;Se(Ze),Se(Vt),Se(wt),Se(Vt),Se(Pt),Se(wt)}else if($e===3){const Ze=ge+se*0,Vt=ge+se*1,Pt=ge+se*2;Se(Ze),Se(Vt),Se(Pt)}else if($e>4)for(let Ze=1,Vt=$e-2;Ze<=Vt;Ze++){const Pt=ge+se*0,wt=ge+se*Ze,Et=ge+se*(Ze+1);Se(Pt),Se(wt),Se(Et)}ge+=se*$e}}else for(let ge=0,Ge=j.length;ge<Ge;ge+=se)Se(ge)}function zt(w){return _(et.geometries[w],Zt)}function xn(w){const S={name:w.getAttribute("name")||"",joints:{},links:[]};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"technique_common":Fi(T,S);break}}et.kinematicsModels[w.getAttribute("id")]=S}function Nn(w){return w.build!==void 0?w.build:w}function ci(w){return _(et.kinematicsModels[w],Nn)}function Fi(w,S){for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"joint":S.joints[T.getAttribute("sid")]=vi(T);break;case"link":S.links.push(ar(T));break}}}function vi(w){let S;for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"prismatic":case"revolute":S=Oo(T);break}}return S}function Oo(w){const S={sid:w.getAttribute("sid"),name:w.getAttribute("name")||"",axis:new N,limits:{min:0,max:0},type:w.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"axis":const I=s(T.textContent);S.axis.fromArray(I);break;case"limits":const j=T.getElementsByTagName("max")[0],se=T.getElementsByTagName("min")[0];S.limits.max=parseFloat(j.textContent),S.limits.min=parseFloat(se.textContent);break}}return S.limits.min>=S.limits.max&&(S.static=!0),S.middlePosition=(S.limits.min+S.limits.max)/2,S}function ar(w){const S={sid:w.getAttribute("sid"),name:w.getAttribute("name")||"",attachments:[],transforms:[]};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"attachment_full":S.attachments.push(Fo(T));break;case"matrix":case"translate":case"rotate":S.transforms.push(Us(T));break}}return S}function Fo(w){const S={joint:w.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"link":S.links.push(ar(T));break;case"matrix":case"translate":case"rotate":S.transforms.push(Us(T));break}}return S}function Us(w){const S={type:w.nodeName},C=s(w.textContent);switch(S.type){case"matrix":S.obj=new Ve,S.obj.fromArray(C).transpose();break;case"translate":S.obj=new N,S.obj.fromArray(C);break;case"rotate":S.obj=new N,S.obj.fromArray(C),S.angle=Ar.degToRad(C[3]);break}return S}function Dc(w){const S={name:w.getAttribute("name")||"",rigidBodies:{}};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"rigid_body":S.rigidBodies[T.getAttribute("name")]={},Uc(T,S.rigidBodies[T.getAttribute("name")]);break}}et.physicsModels[w.getAttribute("id")]=S}function Uc(w,S){for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"technique_common":Oc(T,S);break}}}function Oc(w,S){for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"inertia":S.inertia=s(T.textContent);break;case"mass":S.mass=s(T.textContent)[0];break}}}function L(w){const S={bindJointAxis:[]};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"bind_joint_axis":S.bindJointAxis.push(H(T));break}}et.kinematicsScenes[a(w.getAttribute("url"))]=S}function H(w){const S={target:w.getAttribute("target").split("/").pop()};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType===1)switch(T.nodeName){case"axis":const I=T.getElementsByTagName("param")[0];S.axis=I.textContent;const j=S.axis.split("inst_").pop().split("axis")[0];S.jointIndex=j.substring(0,j.length-1);break}}return S}function J(w){return w.build!==void 0?w.build:w}function K(w){return _(et.kinematicsScenes[w],J)}function Z(){const w=Object.keys(et.kinematicsModels)[0],S=Object.keys(et.kinematicsScenes)[0],C=Object.keys(et.visualScenes)[0];if(w===void 0||S===void 0)return;const T=ci(w),I=K(S),j=ki(C),se=I.bindJointAxis,Oe={};for(let We=0,ge=se.length;We<ge;We++){const Ge=se[We],Be=St.querySelector('[sid="'+Ge.target+'"]');if(Be){const $e=Be.parentElement;Se(Ge.jointIndex,$e)}}function Se(We,ge){const Ge=ge.getAttribute("name"),Be=T.joints[We];j.traverse(function($e){$e.name===Ge&&(Oe[We]={object:$e,transforms:Pe(ge),joint:Be,position:Be.zeroPosition})})}const Ie=new Ve;ph={joints:T&&T.joints,getJointValue:function(We){const ge=Oe[We];if(ge)return ge.position;console.warn("THREE.ColladaLoader: Joint "+We+" doesn't exist.")},setJointValue:function(We,ge){const Ge=Oe[We];if(Ge){const Be=Ge.joint;if(ge>Be.limits.max||ge<Be.limits.min)console.warn("THREE.ColladaLoader: Joint "+We+" value "+ge+" outside of limits (min: "+Be.limits.min+", max: "+Be.limits.max+").");else if(Be.static)console.warn("THREE.ColladaLoader: Joint "+We+" is static.");else{const $e=Ge.object,Ze=Be.axis,Vt=Ge.transforms;ze.identity();for(let Pt=0;Pt<Vt.length;Pt++){const wt=Vt[Pt];if(wt.sid&&wt.sid.indexOf(We)!==-1)switch(Be.type){case"revolute":ze.multiply(Ie.makeRotationAxis(Ze,Ar.degToRad(ge)));break;case"prismatic":ze.multiply(Ie.makeTranslation(Ze.x*ge,Ze.y*ge,Ze.z*ge));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Be.type);break}else switch(wt.type){case"matrix":ze.multiply(wt.obj);break;case"translate":ze.multiply(Ie.makeTranslation(wt.obj.x,wt.obj.y,wt.obj.z));break;case"scale":ze.scale(wt.obj);break;case"rotate":ze.multiply(Ie.makeRotationAxis(wt.obj,wt.angle));break}}$e.matrix.copy(ze),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Oe[We].position=ge}}else console.log("THREE.ColladaLoader: "+We+" does not exist.")}}}function Pe(w){const S=[],C=St.querySelector('[id="'+w.id+'"]');for(let T=0;T<C.childNodes.length;T++){const I=C.childNodes[T];if(I.nodeType!==1)continue;let j,se;switch(I.nodeName){case"matrix":j=s(I.textContent);const Oe=new Ve().fromArray(j).transpose();S.push({sid:I.getAttribute("sid"),type:I.nodeName,obj:Oe});break;case"translate":case"scale":j=s(I.textContent),se=new N().fromArray(j),S.push({sid:I.getAttribute("sid"),type:I.nodeName,obj:se});break;case"rotate":j=s(I.textContent),se=new N().fromArray(j);const Se=Ar.degToRad(j[3]);S.push({sid:I.getAttribute("sid"),type:I.nodeName,obj:se,angle:Se});break}}return S}function qe(w){const S=w.getElementsByTagName("node");for(let C=0;C<S.length;C++){const T=S[C];T.hasAttribute("id")===!1&&T.setAttribute("id",c())}}const ze=new Ve,Je=new N;function tt(w){const S={name:w.getAttribute("name")||"",type:w.getAttribute("type"),id:w.getAttribute("id"),sid:w.getAttribute("sid"),matrix:new Ve,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];if(T.nodeType!==1)continue;let I;switch(T.nodeName){case"node":S.nodes.push(T.getAttribute("id")),tt(T);break;case"instance_camera":S.instanceCameras.push(a(T.getAttribute("url")));break;case"instance_controller":S.instanceControllers.push(nt(T));break;case"instance_light":S.instanceLights.push(a(T.getAttribute("url")));break;case"instance_geometry":S.instanceGeometries.push(nt(T));break;case"instance_node":S.instanceNodes.push(a(T.getAttribute("url")));break;case"matrix":I=s(T.textContent),S.matrix.multiply(ze.fromArray(I).transpose()),S.transforms[T.getAttribute("sid")]=T.nodeName;break;case"translate":I=s(T.textContent),Je.fromArray(I),S.matrix.multiply(ze.makeTranslation(Je.x,Je.y,Je.z)),S.transforms[T.getAttribute("sid")]=T.nodeName;break;case"rotate":I=s(T.textContent);const j=Ar.degToRad(I[3]);S.matrix.multiply(ze.makeRotationAxis(Je.fromArray(I),j)),S.transforms[T.getAttribute("sid")]=T.nodeName;break;case"scale":I=s(T.textContent),S.matrix.scale(Je.fromArray(I)),S.transforms[T.getAttribute("sid")]=T.nodeName;break;case"extra":break;default:console.log(T)}}return rt(S.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",S.id):et.nodes[S.id]=S,S}function nt(w){const S={id:a(w.getAttribute("url")),materials:{},skeletons:[]};for(let C=0;C<w.childNodes.length;C++){const T=w.childNodes[C];switch(T.nodeName){case"bind_material":const I=T.getElementsByTagName("instance_material");for(let j=0;j<I.length;j++){const se=I[j],Oe=se.getAttribute("symbol"),Se=se.getAttribute("target");S.materials[Oe]=a(Se)}break;case"skeleton":S.skeletons.push(a(T.textContent));break}}return S}function it(w,S){const C=[],T=[];let I,j,se;for(I=0;I<w.length;I++){const Ie=w[I];let We;if(rt(Ie))We=li(Ie),kt(We,S,C);else if(ko(Ie)){const Ge=et.visualScenes[Ie].children;for(let Be=0;Be<Ge.length;Be++){const $e=Ge[Be];if($e.type==="JOINT"){const Ze=li($e.id);kt(Ze,S,C)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ie)}for(I=0;I<S.length;I++)for(j=0;j<C.length;j++)if(se=C[j],se.bone.name===S[I].name){T[I]=se,se.processed=!0;break}for(I=0;I<C.length;I++)se=C[I],se.processed===!1&&(T.push(se),se.processed=!0);const Oe=[],Se=[];for(I=0;I<T.length;I++)se=T[I],Oe.push(se.bone),Se.push(se.boneInverse);return new Io(Oe,Se)}function kt(w,S,C){w.traverse(function(T){if(T.isBone===!0){let I;for(let j=0;j<S.length;j++){const se=S[j];if(se.name===T.name){I=se.boneInverse;break}}I===void 0&&(I=new Ve),C.push({bone:T,boneInverse:I,processed:!1})}})}function bn(w){const S=[],C=w.matrix,T=w.nodes,I=w.type,j=w.instanceCameras,se=w.instanceControllers,Oe=w.instanceLights,Se=w.instanceGeometries,Ie=w.instanceNodes;for(let ge=0,Ge=T.length;ge<Ge;ge++)S.push(li(T[ge]));for(let ge=0,Ge=j.length;ge<Ge;ge++){const Be=yt(j[ge]);Be!==null&&S.push(Be.clone())}for(let ge=0,Ge=se.length;ge<Ge;ge++){const Be=se[ge],$e=$(Be.id),Ze=zt($e.id),Vt=Dt(Ze,Be.materials),Pt=Be.skeletons,wt=$e.skin.joints,Et=it(Pt,wt);for(let yi=0,Dn=Vt.length;yi<Dn;yi++){const jr=Vt[yi];jr.isSkinnedMesh&&(jr.bind(Et,$e.skin.bindMatrix),jr.normalizeSkinWeights()),S.push(jr)}}for(let ge=0,Ge=Oe.length;ge<Ge;ge++){const Be=Y(Oe[ge]);Be!==null&&S.push(Be.clone())}for(let ge=0,Ge=Se.length;ge<Ge;ge++){const Be=Se[ge],$e=zt(Be.id),Ze=Dt($e,Be.materials);for(let Vt=0,Pt=Ze.length;Vt<Pt;Vt++)S.push(Ze[Vt])}for(let ge=0,Ge=Ie.length;ge<Ge;ge++)S.push(li(Ie[ge]).clone());let We;if(T.length===0&&S.length===1)We=S[0];else{We=I==="JOINT"?new pc:new ji;for(let ge=0;ge<S.length;ge++)We.add(S[ge])}return We.name=I==="JOINT"?w.sid:w.name,We.matrix.copy(C),We.matrix.decompose(We.position,We.quaternion,We.scale),We}const Jt=new ii({name:fn.DEFAULT_MATERIAL_NAME,color:16711935});function Jn(w,S){const C=[];for(let T=0,I=w.length;T<I;T++){const j=S[w[T]];j===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",w[T]),C.push(Jt)):C.push(Ne(j))}return C}function Dt(w,S){const C=[];for(const T in w){const I=w[T],j=Jn(I.materialKeys,S);if(j.length===0&&(T==="lines"||T==="linestrips"?j.push(new hn):j.push(new Ya)),T==="lines"||T==="linestrips")for(let Ie=0,We=j.length;Ie<We;Ie++){const ge=j[Ie];if(ge.isMeshPhongMaterial===!0||ge.isMeshLambertMaterial===!0){const Ge=new hn;Ge.color.copy(ge.color),Ge.opacity=ge.opacity,Ge.transparent=ge.transparent,j[Ie]=Ge}}const se=I.data.attributes.skinIndex!==void 0,Oe=j.length===1?j[0]:j;let Se;switch(T){case"lines":Se=new si(I.data,Oe);break;case"linestrips":Se=new Ui(I.data,Oe);break;case"triangles":case"polylist":se?Se=new zu(I.data,Oe):Se=new Wt(I.data,Oe);break}C.push(Se)}return C}function rt(w){return et.nodes[w]!==void 0}function li(w){return _(et.nodes[w],bn)}function Ut(w){const S={name:w.getAttribute("name"),children:[]};qe(w);const C=n(w,"node");for(let T=0;T<C.length;T++)S.children.push(tt(C[T]));et.visualScenes[w.getAttribute("id")]=S}function ui(w){const S=new ji;S.name=w.name;const C=w.children;for(let T=0;T<C.length;T++){const I=C[T];S.add(li(I.id))}return S}function ko(w){return et.visualScenes[w]!==void 0}function ki(w){return _(et.visualScenes[w],ui)}function Os(w){const S=n(w,"instance_visual_scene")[0];return ki(a(S.getAttribute("url")))}function an(){const w=et.clips;if(l(w)===!0){if(l(et.animations)===!1){const S=[];for(const C in et.animations){const T=M(C);for(let I=0,j=T.length;I<j;I++)S.push(T[I])}zo.push(new zr("default",-1,S))}}else for(const S in w)zo.push(z(S))}function hi(w){let S="";const C=[w];for(;C.length;){const T=C.shift();T.nodeType===Node.TEXT_NODE?S+=T.textContent:(S+=`
`,C.push.apply(C,T.childNodes))}return S.trim()}if(e.length===0)return{scene:new fc};const Zr=new DOMParser().parseFromString(e,"application/xml"),St=n(Zr,"COLLADA")[0],cr=Zr.getElementsByTagName("parsererror")[0];if(cr!==void 0){const w=n(cr,"div")[0];let S;return w?S=w.textContent:S=hi(cr),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,S),null}const Fc=St.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Fc);const Fs=u(n(St,"asset")[0]),dh=new zm(this.manager);dh.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let kc;md&&(kc=new md(this.manager),kc.setPath(this.resourcePath||t));const Bo=new Ce,zo=[];let ph={},xg=0;const et={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(St,"library_animations","animation",m),d(St,"library_animation_clips","animation_clip",B),d(St,"library_controllers","controller",re),d(St,"library_images","image",te),d(St,"library_effects","effect",le),d(St,"library_materials","material",He),d(St,"library_cameras","camera",Qe),d(St,"library_lights","light",_t),d(St,"library_geometries","geometry",ce),d(St,"library_nodes","node",tt),d(St,"library_visual_scenes","visual_scene",Ut),d(St,"library_kinematics_models","kinematics_model",xn),d(St,"library_physics_models","physics_model",Dc),d(St,"scene","instance_kinematics_scene",L),p(et.animations,v),p(et.clips,he),p(et.controllers,Ee),p(et.images,Q),p(et.effects,Ye),p(et.materials,be),p(et.cameras,pt),p(et.lights,x),p(et.geometries,Zt),p(et.visualScenes,ui),an(),Z();const Vo=Os(n(St,"scene")[0]);return Vo.animations=zo,Fs.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Vo.rotation.set(-Math.PI/2,0,0)),Vo.scale.multiplyScalar(Fs.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),zo},kinematics:ph,library:et,scene:Vo}}}function gd(r,e,t){const n=r.slice();return n[9]=e[t],n}function _d(r){let e,t=`<!-- include dae: ${r[0]} ${r[2]} -->`,n,i,s,o=Ki(Object.values(r[7].scene.children)),a=[];for(let l=0;l<o.length;l+=1)a[l]=vd(gd(r,o,l));const c=l=>we(a[l],1,1,()=>{a[l]=null});return{c(){e=new Ka(!1),n=Kt();for(let l=0;l<a.length;l+=1)a[l].c();i=Ft(),this.h()},l(l){e=Qa(l,!1),n=Qt(l);for(let u=0;u<a.length;u+=1)a[u].l(l);i=Ft(),this.h()},h(){e.a=n},m(l,u){e.m(t,l,u),vt(l,n,u);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(l,u);vt(l,i,u),s=!0},p(l,u){if((!s||u&5)&&t!==(t=`<!-- include dae: ${l[0]} ${l[2]} -->`)&&e.p(t),u&190){o=Ki(Object.values(l[7].scene.children));let h;for(h=0;h<o.length;h+=1){const f=gd(l,o,h);a[h]?(a[h].p(f,u),ye(a[h],1)):(a[h]=vd(f),a[h].c(),ye(a[h],1),a[h].m(i.parentNode,i))}for(_n(),h=o.length;h<a.length;h+=1)c(h);vn()}},i(l){if(!s){for(let u=0;u<o.length;u+=1)ye(a[u]);s=!0}},o(l){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)we(a[u]);s=!1},d(l){l&&(e.d(),gt(n),gt(i)),ec(a,l)}}}function S1(r){let e,t,n,i,s;return e=new Bt.MeshLambertMaterial({props:{color:r[1]}}),n=new Bt.BoxGeometry({}),{c(){lt(e.$$.fragment),t=Kt(),lt(n.$$.fragment),i=Kt()},l(o){ut(e.$$.fragment,o),t=Qt(o),ut(n.$$.fragment,o),i=Qt(o)},m(o,a){ht(e,o,a),vt(o,t,a),ht(n,o,a),vt(o,i,a),s=!0},p(o,a){const c={};a&2&&(c.color=o[1]),e.$set(c)},i(o){s||(ye(e.$$.fragment,o),ye(n.$$.fragment,o),s=!0)},o(o){we(e.$$.fragment,o),we(n.$$.fragment,o),s=!1},d(o){o&&(gt(t),gt(i)),ft(e,o),ft(n,o)}}}function vd(r){let e,t=`<!-- include dae_geom: ${Object.keys(r[9])} -->`,n,i,s;return i=new Bt.Mesh({props:{castShadow:!0,receiveShadow:!0,scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[S1]},$$scope:{ctx:r}}}),i.$on("click",function(){Ld(r[5])&&r[5].apply(this,arguments)}),{c(){e=new Ka(!1),n=Kt(),lt(i.$$.fragment),this.h()},l(o){e=Qa(o,!1),n=Qt(o),ut(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),vt(o,n,a),ht(i,o,a),s=!0},p(o,a){r=o,(!s||a&128)&&t!==(t=`<!-- include dae_geom: ${Object.keys(r[9])} -->`)&&e.p(t);const c={};a&4&&(c.scale=r[2]),a&16&&(c.position=r[4]),a&8&&(c.rotation=r[3]),a&4098&&(c.$$scope={dirty:a,ctx:r}),i.$set(c)},i(o){s||(ye(i.$$.fragment,o),s=!0)},o(o){we(i.$$.fragment,o),s=!1},d(o){o&&(e.d(),gt(n)),ft(i,o)}}}function w1(r){let e,t,n=r[7]&&r[7].scene.children&&_d(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),vt(i,e,s),t=!0},p(i,[s]){i[7]&&i[7].scene.children?n?(n.p(i,s),s&128&&ye(n,1)):(n=_d(i),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(_n(),we(n,1,1,()=>{n=null}),vn())},i(i){t||(ye(n),t=!0)},o(i){we(n),t=!1},d(i){i&&gt(e),n&&n.d(i)}}}function E1(r,e,t){let n,i=$a,s=()=>(i(),i=Nd(d,p=>t(7,n=p)),d);r.$$.on_destroy.push(()=>i());let{filename:o}=e,{color:a=new Ce("pink")}=e,{scale:c=[1,1,1]}=e,{rotation:l=[0,0,0]}=e,{position:u=[0,0,0]}=e,{onclick:h}=e;const f=cg(M1);let d;return r.$$set=p=>{"filename"in p&&t(0,o=p.filename),"color"in p&&t(1,a=p.color),"scale"in p&&t(2,c=p.scale),"rotation"in p&&t(3,l=p.rotation),"position"in p&&t(4,u=p.position),"onclick"in p&&t(5,h=p.onclick)},r.$$.update=()=>{r.$$.dirty&1&&s(t(6,d=f.load(o)))},[o,a,c,l,u,h,d,n]}class A1 extends In{constructor(e){super(),Ln(this,e,E1,w1,Pn,{filename:0,color:1,scale:2,rotation:3,position:4,onclick:5})}}class T1 extends fn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new ri(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const p=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(p,u,_))return!1;return!0}function n(l,u,h){for(let f=0,d=l.length;f<d;f++)if(l[f]!==u.getUint8(h+f))return!1;return!0}function i(l){const u=new DataView(l),h=u.getUint32(80,!0);let f,d,p,_=!1,m,g,b,v,M;for(let F=0;F<70;F++)u.getUint32(F,!1)==1129270351&&u.getUint8(F+4)==82&&u.getUint8(F+5)==61&&(_=!0,m=new Float32Array(h*3*3),g=u.getUint8(F+6)/255,b=u.getUint8(F+7)/255,v=u.getUint8(F+8)/255,M=u.getUint8(F+9)/255);const U=84,P=12*4+2,R=new st,O=new Float32Array(h*3*3),A=new Float32Array(h*3*3),y=new Ce;for(let F=0;F<h;F++){const X=U+F*P,k=u.getFloat32(X,!0),q=u.getFloat32(X+4,!0),ee=u.getFloat32(X+8,!0);if(_){const B=u.getUint16(X+48,!0);B&32768?(f=g,d=b,p=v):(f=(B&31)/31,d=(B>>5&31)/31,p=(B>>10&31)/31)}for(let B=1;B<=3;B++){const he=X+B*12,z=F*3*3+(B-1)*3;O[z]=u.getFloat32(he,!0),O[z+1]=u.getFloat32(he+4,!0),O[z+2]=u.getFloat32(he+8,!0),A[z]=k,A[z+1]=q,A[z+2]=ee,_&&(y.set(f,d,p).convertSRGBToLinear(),m[z]=y.r,m[z+1]=y.g,m[z+2]=y.b)}}return R.setAttribute("position",new Tt(O,3)),R.setAttribute("normal",new Tt(A,3)),_&&(R.setAttribute("color",new Tt(m,3)),R.hasColors=!0,R.alpha=M),R}function s(l){const u=new st,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let p=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),g=new RegExp("normal"+_+_+_,"g"),b=[],v=[],M=[],U=new N;let P,R=0,O=0,A=0;for(;(P=h.exec(l))!==null;){O=A;const y=P[0],F=(P=d.exec(y))!==null?P[1]:"";for(M.push(F);(P=f.exec(y))!==null;){let q=0,ee=0;const B=P[0];for(;(P=g.exec(B))!==null;)U.x=parseFloat(P[1]),U.y=parseFloat(P[2]),U.z=parseFloat(P[3]),ee++;for(;(P=m.exec(B))!==null;)b.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),v.push(U.x,U.y,U.z),q++,A++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),q!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const X=O,k=A-O;u.userData.groupNames=M,u.addGroup(X,k,R),R++}return u.setAttribute("position",new De(b,3)),u.setAttribute("normal",new De(v,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?i(c):s(o(e))}}function yd(r){let e,t=`<!-- include stl: ${r[0]} ${r[2]} -->`,n,i,s;return i=new Bt.Mesh({props:{castShadow:!0,receiveShadow:!0,geometry:r[7],scale:r[2],position:r[4],rotation:r[3],$$slots:{default:[C1]},$$scope:{ctx:r}}}),i.$on("click",function(){Ld(r[5])&&r[5].apply(this,arguments)}),{c(){e=new Ka(!1),n=Kt(),lt(i.$$.fragment),this.h()},l(o){e=Qa(o,!1),n=Qt(o),ut(i.$$.fragment,o),this.h()},h(){e.a=n},m(o,a){e.m(t,o,a),vt(o,n,a),ht(i,o,a),s=!0},p(o,a){r=o,(!s||a&5)&&t!==(t=`<!-- include stl: ${r[0]} ${r[2]} -->`)&&e.p(t);const c={};a&128&&(c.geometry=r[7]),a&4&&(c.scale=r[2]),a&16&&(c.position=r[4]),a&8&&(c.rotation=r[3]),a&514&&(c.$$scope={dirty:a,ctx:r}),i.$set(c)},i(o){s||(ye(i.$$.fragment,o),s=!0)},o(o){we(i.$$.fragment,o),s=!1},d(o){o&&(e.d(),gt(n)),ft(i,o)}}}function C1(r){let e,t;return e=new Bt.MeshLambertMaterial({props:{color:r[1]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.color=n[1]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function R1(r){let e,t,n=r[7]&&yd(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),vt(i,e,s),t=!0},p(i,[s]){i[7]?n?(n.p(i,s),s&128&&ye(n,1)):(n=yd(i),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(_n(),we(n,1,1,()=>{n=null}),vn())},i(i){t||(ye(n),t=!0)},o(i){we(n),t=!1},d(i){i&&gt(e),n&&n.d(i)}}}function P1(r,e,t){let n,i=$a,s=()=>(i(),i=Nd(d,p=>t(7,n=p)),d);r.$$.on_destroy.push(()=>i());let{filename:o}=e,{color:a=new Ce("pink")}=e,{scale:c=[1,1,1]}=e,{rotation:l=[0,0,0]}=e,{position:u=[0,0,0]}=e,{onclick:h}=e;const f=cg(T1);let d;return r.$$set=p=>{"filename"in p&&t(0,o=p.filename),"color"in p&&t(1,a=p.color),"scale"in p&&t(2,c=p.scale),"rotation"in p&&t(3,l=p.rotation),"position"in p&&t(4,u=p.position),"onclick"in p&&t(5,h=p.onclick)},r.$$.update=()=>{r.$$.dirty&1&&s(t(6,d=f.load(o)))},[o,a,c,l,u,h,d,n]}class I1 extends In{constructor(e){super(),Ln(this,e,P1,R1,Pn,{filename:0,color:1,scale:2,rotation:3,position:4,onclick:5})}}const{subscribe:L1,set:vg}=rn(void 0),N1=vg,D1=()=>{vg(void 0)},U1={subscribe:L1,select:N1,unselect:D1};function O1(r){let e,t;return e=new Bt.Mesh({props:{castShadow:!0,receiveShadow:!0,scale:r[2],position:r[4],rotation:r[5],$$slots:{default:[z1]},$$scope:{ctx:r}}}),e.$on("click",r[7]),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.scale=n[2]),i&1027&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function F1(r){let e,t,n,i;const s=[H1,V1],o=[];function a(c,l){return c[3].type==="stl"?0:c[3].type==="dae"?1:-1}return~(e=a(r))&&(t=o[e]=s[e](r)),{c(){t&&t.c(),n=Ft()},l(c){t&&t.l(c),n=Ft()},m(c,l){~e&&o[e].m(c,l),vt(c,n,l),i=!0},p(c,l){let u=e;e=a(c),e===u?~e&&o[e].p(c,l):(t&&(_n(),we(o[u],1,1,()=>{o[u]=null}),vn()),~e?(t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),ye(t,1),t.m(n.parentNode,n)):t=null)},i(c){i||(ye(t),i=!0)},o(c){we(t),i=!1},d(c){c&&gt(n),~e&&o[e].d(c)}}}function k1(r){let e,t;return e=new Bt.BoxGeometry({}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p:$a,i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function B1(r){let e,t;return e=new Bt.CylinderGeometry({props:{args:[r[1].radius,r[1].radius,r[1].length]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.args=[n[1].radius,n[1].radius,n[1].length]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function z1(r){let e,t,n,i,s;const o=[B1,k1],a=[];function c(l,u){return l[0].type==="cylinder"?0:l[0].type==="box"?1:-1}return~(e=c(r))&&(t=a[e]=o[e](r)),i=new Bt.MeshBasicMaterial({props:{color:r[6]}}),{c(){t&&t.c(),n=Kt(),lt(i.$$.fragment)},l(l){t&&t.l(l),n=Qt(l),ut(i.$$.fragment,l)},m(l,u){~e&&a[e].m(l,u),vt(l,n,u),ht(i,l,u),s=!0},p(l,u){let h=e;e=c(l),e===h?~e&&a[e].p(l,u):(t&&(_n(),we(a[h],1,1,()=>{a[h]=null}),vn()),~e?(t=a[e],t?t.p(l,u):(t=a[e]=o[e](l),t.c()),ye(t,1),t.m(n.parentNode,n)):t=null)},i(l){s||(ye(t),ye(i.$$.fragment,l),s=!0)},o(l){we(t),we(i.$$.fragment,l),s=!1},d(l){l&&gt(n),~e&&a[e].d(l),ft(i,l)}}}function V1(r){let e,t;return e=new A1({props:{onclick:r[7],filename:r[3].filename,position:r[4],rotation:r[5],color:r[6],scale:r[2]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.filename=n[3].filename),i&4&&(s.scale=n[2]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function H1(r){let e,t;return e=new I1({props:{onclick:r[7],filename:r[3].filename,position:r[4],rotation:r[5],color:r[6],scale:r[2]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.filename=n[3].filename),i&4&&(s.scale=n[2]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function G1(r){let e,t,n,i;const s=[F1,O1],o=[];function a(c,l){return c[0].type==="mesh"&&c[3]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=Ft()},l(c){t.l(c),n=Ft()},m(c,l){o[e].m(c,l),vt(c,n,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(_n(),we(o[u],1,1,()=>{o[u]=null}),vn(),t=o[e],t?t.p(c,l):(t=o[e]=s[e](c),t.c()),ye(t,1),t.m(n.parentNode,n))},i(c){i||(ye(t),i=!0)},o(c){we(t),i=!1},d(c){c&&gt(n),o[e].d(c)}}}function W1(r,e,t){let{visual:n}=e,{link:i}=e,s;const o=n.origin_xyz||[0,0,0],a=n.origin_rpy||[0,0,0],c=b1(n.color_rgba);let l=[1,1,1],u;switch(n.type){case"mesh":u=n.geometry,l=u.scale;break;case"box":n.geometry;break;case"cylinder":s=n.geometry;break}const h=()=>{U1.select(i)};return n1(),r.$$set=f=>{"visual"in f&&t(0,n=f.visual),"link"in f&&t(8,i=f.link)},[n,s,l,u,o,a,c,h,i]}class X1 extends In{constructor(e){super(),Ln(this,e,W1,G1,Pn,{visual:0,link:8})}}function xd(r){const e=r.joints,t=[];for(const n of e){let i=!0;for(const s of e)if(n.parent.name===s.child.name){i=!1;break}i&&t.push(n)}return t}function bd(r,e){const t=[],n=r.joints;if(!n)return[];for(const i of n)i.parent===e&&t.push(i);return t}class q1{constructor(e,t=""){Lt(this,"filename");Lt(this,"colors",{});Lt(this,"robot",{name:"",links:{},joints:[]});Lt(this,"prefix","");Lt(this,"xmlRobotNode");this.filename=e,this.prefix=t}async load(){return fetch(this.filename).then(e=>e.text())}reset(){this.robot={name:"",links:{},joints:[]}}fromString(e){this.reset();let t=new window.DOMParser().parseFromString(e,"text/xml");return this.xmlRobotNode=t.documentElement,this.parseRobotXMLNode(t.documentElement)}parseRobotXMLNode(e){const t=e.nodeName;if(t!=="robot")throw new Error(`Invalid URDF: no root node ${t}`);return this.robot.name=e.getAttribute("name"),this.parseColorsFromRobot(e),this.parseLinks(e),this.parseJoints(e),this.robot}parseColorsFromRobot(e){const t=e.getElementsByTagName("material");for(let n=0;n<t.length;n++){const i=t[n],s=this.colorFromMaterial(i);s&&(this.colors[s.name]=s.rgba)}}colorFromMaterial(e){if(!e.hasAttribute("name")){console.warn("Found material-tag with name without name inside robot tag!");return}const t=e.getAttribute("name"),n=e.getElementsByTagName("color");if(n.length===0)return;const i=n[0];if(!i.hasAttribute("rgba")){console.warn(`Color tag ${t} does not have expected "rgba" attribute!`);return}return{name:t,rgba:vs(i,"rgba")}}parseLinks(e){const t=e.getElementsByTagName("link");for(let n=0;n<t.length;n++){const i=t[n],s=i.getElementsByTagName("visual"),o={visual:[]};i.hasAttribute("name")&&(o.name=i.getAttribute("name"),this.robot.links[o.name]=o);for(let a=0;a<s.length;a++)o.visual.push(this.parseVisual(s[a]))}}parseVisual(e){let t,n,i,s="pink";const o={};for(let a=0;a<e.childNodes.length;a++){const c=e.childNodes[a];switch(c.nodeName){case"geometry":this.parseGeometry(c,o);break;case"origin":t=vs(c),t&&(o.origin_xyz=t),n=vs(c,"rpy"),n&&(o.origin_rpy=n);break;case"material":i=c.getElementsByTagName("color"),i.length>0&&i[0].hasAttribute("rgba")?o.color_rgba=vs(i[0],"rgba"):c.hasAttribute("name")&&(s=c.getAttribute("name"),o.color_rgba=this.colors[s])}}return o}parseGeometry(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];switch(i.nodeName){case"mesh":let s=[1,1,1],o=i.getAttribute("scale");if(o){const h=o.split(" ");for(const f in h)s[f]=parseFloat(h[f])}let a=i.getAttribute("filename");a=a.replace("package:/",this.prefix);let c="stl";switch(a.substring(a.length-3).toLocaleLowerCase()){case"fbx":c="fbx";break;case"obj":c="obj";break;case"stl":c="stl";break;case"dae":c="dae";break;default:throw new Error("Unknown type "+a)}t.geometry={filename:a,type:c,scale:s},t.type="mesh";return;case"cylinder":const l={};i.hasAttribute("length")&&(l.length=parseFloat(i.getAttribute("length"))),i.hasAttribute("radius")&&(l.radius=parseFloat(i.getAttribute("radius"))),t.geometry=l,t.type="cylinder";return;case"box":const u={size:[1,1,1]};if(i.hasAttribute("size")){const f=i.getAttribute("size").split(" ");for(const d in f)u.size[d]=parseFloat(f[d])}t.geometry=u;return}}}parseJoints(e){const t=this.robot.links,n=this.robot.joints,i=e.getElementsByTagName("joint");for(let s=0;s<i.length;s++){const o=i[s],a=o.getElementsByTagName("origin");let c=[0,0,0],l=[0,0,0];if(a.length===1){let p=vs(a[0]);p&&(l=p);let _=vs(a[0],"rpy");_&&(c=_)}let u;const h=o.getElementsByTagName("parent");if(h.length===1){const p=h[0].getAttribute("link");p&&t[p]?u=t[p]:u={name:p,visual:[]}}let f;const d=o.getElementsByTagName("child");if(d.length===1){const p=d[0].getAttribute("link");p&&t[p]?f=t[p]:f={name:p,visual:[]}}if(f&&u){const p={name:o.getAttribute("name")||void 0,origin_rpy:c,origin_xyz:l,parent:u,child:f};n.push(p)}}}getURDFXML(){return this.xmlRobotNode?`<?xml version="1.0" ?>
`+this.xmlRobotNode.outerHTML:""}}function Md(r,e,t){const n=r.slice();return n[2]=e[t],n}function Sd(r,e,t){const n=r.slice();return n[5]=e[t],n}function wd(r){let e,t;return e=new Bt.Group({props:{rotation:r[0].origin_rpy,position:r[0].origin_xyz,$$slots:{default:[Y1]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.rotation=n[0].origin_rpy),i&1&&(s.position=n[0].origin_xyz),i&259&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function Ed(r){let e,t;return e=new yg({props:{joint:r[5]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.joint=n[5]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function Ad(r){let e,t,n,i;e=new X1({props:{visual:r[2],link:r[0].child}});let s=Ki(bd(r[1],r[0].child)),o=[];for(let c=0;c<s.length;c+=1)o[c]=Ed(Sd(r,s,c));const a=c=>we(o[c],1,1,()=>{o[c]=null});return{c(){lt(e.$$.fragment),t=Kt();for(let c=0;c<o.length;c+=1)o[c].c();n=Ft()},l(c){ut(e.$$.fragment,c),t=Qt(c);for(let l=0;l<o.length;l+=1)o[l].l(c);n=Ft()},m(c,l){ht(e,c,l),vt(c,t,l);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(c,l);vt(c,n,l),i=!0},p(c,l){const u={};if(l&1&&(u.visual=c[2]),l&1&&(u.link=c[0].child),e.$set(u),l&3){s=Ki(bd(c[1],c[0].child));let h;for(h=0;h<s.length;h+=1){const f=Sd(c,s,h);o[h]?(o[h].p(f,l),ye(o[h],1)):(o[h]=Ed(f),o[h].c(),ye(o[h],1),o[h].m(n.parentNode,n))}for(_n(),h=s.length;h<o.length;h+=1)a(h);vn()}},i(c){if(!i){ye(e.$$.fragment,c);for(let l=0;l<s.length;l+=1)ye(o[l]);i=!0}},o(c){we(e.$$.fragment,c),o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)we(o[l]);i=!1},d(c){c&&(gt(t),gt(n)),ft(e,c),ec(o,c)}}}function Y1(r){let e,t,n=Ki(r[0].child.visual),i=[];for(let o=0;o<n.length;o+=1)i[o]=Ad(Md(r,n,o));const s=o=>we(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ft()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ft()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);vt(o,e,a),t=!0},p(o,a){if(a&3){n=Ki(o[0].child.visual);let c;for(c=0;c<n.length;c+=1){const l=Md(o,n,c);i[c]?(i[c].p(l,a),ye(i[c],1)):(i[c]=Ad(l),i[c].c(),ye(i[c],1),i[c].m(e.parentNode,e))}for(_n(),c=n.length;c<i.length;c+=1)s(c);vn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ye(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)we(i[a]);t=!1},d(o){o&&gt(e),ec(i,o)}}}function Z1(r){let e,t=`<!-- Joint ${r[0].name} -->`,n,i,s,o=r[1]&&wd(r);return{c(){e=new Ka(!1),n=Kt(),o&&o.c(),i=Ft(),this.h()},l(a){e=Qa(a,!1),n=Qt(a),o&&o.l(a),i=Ft(),this.h()},h(){e.a=n},m(a,c){e.m(t,a,c),vt(a,n,c),o&&o.m(a,c),vt(a,i,c),s=!0},p(a,[c]){(!s||c&1)&&t!==(t=`<!-- Joint ${a[0].name} -->`)&&e.p(t),a[1]?o?(o.p(a,c),c&2&&ye(o,1)):(o=wd(a),o.c(),ye(o,1),o.m(i.parentNode,i)):o&&(_n(),we(o,1,1,()=>{o=null}),vn())},i(a){s||(ye(o),s=!0)},o(a){we(o),s=!1},d(a){a&&(e.d(),gt(n),gt(i)),o&&o.d(a)}}}function j1(r,e,t){let n;nn(r,ja,s=>t(1,n=s));let{joint:i}=e;return r.$$set=s=>{"joint"in s&&t(0,i=s.joint)},[i,n]}class yg extends In{constructor(e){super(),Ln(this,e,j1,Z1,Pn,{joint:0})}}function Td(r,e,t){const n=r.slice();return n[3]=e[t],n}function Cd(r){let e,t;return e=new Bt.Group({props:{position:r[1],quaternion:r[0],$$slots:{default:[J1]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.position=n[1]),i&1&&(s.quaternion=n[0]),i&68&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function Rd(r){let e,t;return e=new yg({props:{joint:r[3]}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.joint=n[3]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function J1(r){let e,t,n=Ki(xd(r[2])),i=[];for(let o=0;o<n.length;o+=1)i[o]=Rd(Td(r,n,o));const s=o=>we(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ft()},l(o){for(let a=0;a<i.length;a+=1)i[a].l(o);e=Ft()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);vt(o,e,a),t=!0},p(o,a){if(a&4){n=Ki(xd(o[2]));let c;for(c=0;c<n.length;c+=1){const l=Td(o,n,c);i[c]?(i[c].p(l,a),ye(i[c],1)):(i[c]=Rd(l),i[c].c(),ye(i[c],1),i[c].m(e.parentNode,e))}for(_n(),c=n.length;c<i.length;c+=1)s(c);vn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ye(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)we(i[a]);t=!1},d(o){o&&gt(e),ec(i,o)}}}function $1(r){let e,t,n=r[2]&&Cd(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),vt(i,e,s),t=!0},p(i,[s]){i[2]?n?(n.p(i,s),s&4&&ye(n,1)):(n=Cd(i),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(_n(),we(n,1,1,()=>{n=null}),vn())},i(i){t||(ye(n),t=!0)},o(i){we(n),t=!1},d(i){i&&gt(e),n&&n.d(i)}}}function K1(r,e,t){let n;nn(r,ja,o=>t(2,n=o));let{position:i=[0,0,0]}=e,{quaternion:s=void 0}=e;if(!s){const o=new un;o.setFromAxisAngle(new N(-1,0,0),Math.PI*.5),s=[o.x,o.y,o.z,o.w]}return r.$$set=o=>{"position"in o&&t(1,i=o.position),"quaternion"in o&&t(0,s=o.quaternion)},[s,i,n]}class Q1 extends In{constructor(e){super(),Ln(this,e,K1,$1,Pn,{position:1,quaternion:0})}}function Pd(r){let e,t;return e=new Nw({props:{scale:r[1]*4,far:r[1],blur:2}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.scale=n[1]*4),i&2&&(s.far=n[1]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function eE(r){let e,t,n=r[2]&&Pd(r);return{c(){n&&n.c(),e=Ft()},l(i){n&&n.l(i),e=Ft()},m(i,s){n&&n.m(i,s),vt(i,e,s),t=!0},p(i,s){i[2]?n?(n.p(i,s),s&4&&ye(n,1)):(n=Pd(i),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(_n(),we(n,1,1,()=>{n=null}),vn())},i(i){t||(ye(n),t=!0)},o(i){we(n),t=!1},d(i){i&&gt(e),n&&n.d(i)}}}function tE(r){let e,t,n,i,s,o,a,c;return e=new Bt.AmbientLight({props:{intensity:r[0]/3}}),n=new Bt.SpotLight({props:{penumbra:1,position:[r[8].main[0]*r[1],r[8].main[1]*r[1],r[8].main[2]*r[1]],intensity:r[0]*2,castShadow:r[2],"shadow-bias":r[3],"shadow-normalBias":r[4],"shadow-mapSize":r[5]}}),s=new Bt.PointLight({props:{position:[r[8].fill[0]*r[1],r[8].fill[1]*r[1],r[8].fill[2]*r[1]],intensity:r[0]}}),a=new Bt.Group({props:{position:[0,-r[6]/2-r[7]/2,0],$$slots:{default:[eE]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment),t=Kt(),lt(n.$$.fragment),i=Kt(),lt(s.$$.fragment),o=Kt(),lt(a.$$.fragment)},l(l){ut(e.$$.fragment,l),t=Qt(l),ut(n.$$.fragment,l),i=Qt(l),ut(s.$$.fragment,l),o=Qt(l),ut(a.$$.fragment,l)},m(l,u){ht(e,l,u),vt(l,t,u),ht(n,l,u),vt(l,i,u),ht(s,l,u),vt(l,o,u),ht(a,l,u),c=!0},p(l,[u]){const h={};u&1&&(h.intensity=l[0]/3),e.$set(h);const f={};u&2&&(f.position=[l[8].main[0]*l[1],l[8].main[1]*l[1],l[8].main[2]*l[1]]),u&1&&(f.intensity=l[0]*2),u&4&&(f.castShadow=l[2]),u&8&&(f["shadow-bias"]=l[3]),u&16&&(f["shadow-normalBias"]=l[4]),u&32&&(f["shadow-mapSize"]=l[5]),n.$set(f);const d={};u&2&&(d.position=[l[8].fill[0]*l[1],l[8].fill[1]*l[1],l[8].fill[2]*l[1]]),u&1&&(d.intensity=l[0]),s.$set(d);const p={};u&192&&(p.position=[0,-l[6]/2-l[7]/2,0]),u&2054&&(p.$$scope={dirty:u,ctx:l}),a.$set(p)},i(l){c||(ye(e.$$.fragment,l),ye(n.$$.fragment,l),ye(s.$$.fragment,l),ye(a.$$.fragment,l),c=!0)},o(l){we(e.$$.fragment,l),we(n.$$.fragment,l),we(s.$$.fragment,l),we(a.$$.fragment,l),c=!1},d(l){l&&(gt(t),gt(i),gt(o)),ft(e,l),ft(n,l),ft(s,l),ft(a,l)}}}function nE(r,e,t){let{intensity:n=.5}=e,{radius:i=1}=e,{shadows:s=!0}=e,{preset_name:o="rembrandt"}=e,{shadowBias:a=-1e-4}=e,{normalBias:c=0}=e,{shadowSize:l=256}=e,{height:u=1}=e,{shadowOffset:h=1}=e;const d={rembrandt:{main:[1,2,1],fill:[-2,-.5,-2]},portrait:{main:[-1,2,.5],fill:[-1,.5,-1.5]},upfront:{main:[0,2,1],fill:[-1,.5,-1.5]},soft:{main:[-2,4,4],fill:[-1,.5,-1.5]}}[o];return r.$$set=p=>{"intensity"in p&&t(0,n=p.intensity),"radius"in p&&t(1,i=p.radius),"shadows"in p&&t(2,s=p.shadows),"preset_name"in p&&t(9,o=p.preset_name),"shadowBias"in p&&t(3,a=p.shadowBias),"normalBias"in p&&t(4,c=p.normalBias),"shadowSize"in p&&t(5,l=p.shadowSize),"height"in p&&t(6,u=p.height),"shadowOffset"in p&&t(7,h=p.shadowOffset)},[n,i,s,a,c,l,u,h,d,o]}class iE extends In{constructor(e){super(),Ln(this,e,nE,tE,Pn,{intensity:0,radius:1,shadows:2,preset_name:9,shadowBias:3,normalBias:4,shadowSize:5,height:6,shadowOffset:7})}}function rE(r,e,t){let{size:n=10}=e,{divisions:i=10}=e,{position:s=[0,0,0]}=e;const{scene:o,invalidate:a}=_i(),c=new Qm(n,i);return c.position.x=s[0],c.position.y=s[1],c.position.z=s[2],o.add(c),Bn(()=>{o.remove(c)}),r.$$set=l=>{"size"in l&&t(0,n=l.size),"divisions"in l&&t(1,i=l.divisions),"position"in l&&t(2,s=l.position)},[n,i,s]}class sE extends In{constructor(e){super(),Ln(this,e,rE,null,Pn,{size:0,divisions:1,position:2})}}function oE(r){let e,t;return e=new Vw({props:{enableZoom:!0}}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},p:$a,i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function Id(r){let e,t;return e=new Q1({}),{c(){lt(e.$$.fragment)},l(n){ut(e.$$.fragment,n)},m(n,i){ht(e,n,i),t=!0},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){ft(e,n)}}}function aE(r){let e,t,n,i,s,o,a,c,l,u,h,f,d,p;e=new Bt.PointLight({props:{color:"white",intensity:.2,position:[0,5,0]}}),n=new Bt.PointLight({props:{color:"blue",intensity:.5,position:[5,5,0]}}),s=new Bt.PointLight({props:{color:"yellow",intensity:.5,position:[-5,-5,0]}}),a=new Bt.PerspectiveCamera({props:{makeDefault:!0,position:[.6,.6,.6],fov:25,$$slots:{default:[oE,({ref:m})=>({8:m}),({ref:m})=>m?256:0]},$$scope:{ctx:r}}}),l=new iE({props:{preset_name:"soft"}}),h=new sE({});let _=r[2]&&Id();return{c(){lt(e.$$.fragment),t=Kt(),lt(n.$$.fragment),i=Kt(),lt(s.$$.fragment),o=Kt(),lt(a.$$.fragment),c=Kt(),lt(l.$$.fragment),u=Kt(),lt(h.$$.fragment),f=Kt(),_&&_.c(),d=Ft()},l(m){ut(e.$$.fragment,m),t=Qt(m),ut(n.$$.fragment,m),i=Qt(m),ut(s.$$.fragment,m),o=Qt(m),ut(a.$$.fragment,m),c=Qt(m),ut(l.$$.fragment,m),u=Qt(m),ut(h.$$.fragment,m),f=Qt(m),_&&_.l(m),d=Ft()},m(m,g){ht(e,m,g),vt(m,t,g),ht(n,m,g),vt(m,i,g),ht(s,m,g),vt(m,o,g),ht(a,m,g),vt(m,c,g),ht(l,m,g),vt(m,u,g),ht(h,m,g),vt(m,f,g),_&&_.m(m,g),vt(m,d,g),p=!0},p(m,g){const b={};g&512&&(b.$$scope={dirty:g,ctx:m}),a.$set(b),m[2]?_?g&4&&ye(_,1):(_=Id(),_.c(),ye(_,1),_.m(d.parentNode,d)):_&&(_n(),we(_,1,1,()=>{_=null}),vn())},i(m){p||(ye(e.$$.fragment,m),ye(n.$$.fragment,m),ye(s.$$.fragment,m),ye(a.$$.fragment,m),ye(l.$$.fragment,m),ye(h.$$.fragment,m),ye(_),p=!0)},o(m){we(e.$$.fragment,m),we(n.$$.fragment,m),we(s.$$.fragment,m),we(a.$$.fragment,m),we(l.$$.fragment,m),we(h.$$.fragment,m),we(_),p=!1},d(m){m&&(gt(t),gt(i),gt(o),gt(c),gt(u),gt(f),gt(d)),ft(e,m),ft(n,m),ft(s,m),ft(a,m),ft(l,m),ft(h,m),_&&_.d(m)}}}function cE(r){let e,t,n,i,s;return Ag(r[3]),t=new jS({props:{shadows:!0,size:{height:r[0],width:r[1]},rendererParameters:{logarithmicDepthBuffer:!0},$$slots:{default:[aE]},$$scope:{ctx:r}}}),{c(){e=Dd("main"),lt(t.$$.fragment),this.h()},l(o){e=Ud(o,"MAIN",{class:!0});var a=Od(e);ut(t.$$.fragment,a),a.forEach(gt),this.h()},h(){Fd(e,"class","main-content")},m(o,a){vt(o,e,a),ht(t,e,null),n=!0,i||(s=Tg(window,"resize",r[3]),i=!0)},p(o,[a]){const c={};a&3&&(c.size={height:o[0],width:o[1]}),a&516&&(c.$$scope={dirty:a,ctx:o}),t.$set(c)},i(o){n||(ye(t.$$.fragment,o),n=!0)},o(o){we(t.$$.fragment,o),n=!1},d(o){o&&gt(e),ft(t),i=!1,s()}}}const lE="turtlebot3_burger";function uE(r,e,t){let n,i;nn(r,Cg,h=>t(5,n=h)),nn(r,ja,h=>t(2,i=h));let s=0,o=0,a=n.url.href;a=a.endsWith("/")?a.substring(0,a.length-1):a;const c=`turtlebot3_description/${lE}.xml`,l=new q1(`${a}/${c}`,a);Eo(async()=>{let f=await l.load();ja.set(l.fromString(f))});function u(){t(0,s=window.innerHeight),t(1,o=window.innerWidth)}return[s,o,i,u]}class vE extends In{constructor(e){super(),Ln(this,e,uE,cE,Pn,{})}}export{vE as component};
