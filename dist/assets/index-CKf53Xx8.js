(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lr="170",hf=0,pl=1,ff=2,lh=1,df=2,Hn=3,In=0,Ge=1,Cn=2,di=0,ms=1,gs=2,ml=3,gl=4,pf=5,Ii=100,mf=101,gf=102,_f=103,xf=104,vf=200,yf=201,Mf=202,Sf=203,za=204,Va=205,Ef=206,bf=207,Tf=208,wf=209,Af=210,Cf=211,Rf=212,Pf=213,If=214,Ha=0,Ga=1,ka=2,vs=3,Wa=4,Xa=5,qa=6,Ya=7,uh=0,Lf=1,Df=2,pi=0,Uf=1,Nf=2,Ff=3,hh=4,Bf=5,Of=6,zf=7,fh=300,ys=301,Ms=302,$a=303,Za=304,Po=306,Ja=1e3,Di=1001,Ka=1002,en=1003,Vf=1004,mr=1005,Rn=1006,Go=1007,Ui=1008,Zn=1009,dh=1010,ph=1011,or=1012,zc=1013,mi=1014,cn=1015,ur=1016,Vc=1017,Hc=1018,Ss=1020,mh=35902,gh=1021,_h=1022,tn=1023,xh=1024,vh=1025,_s=1026,Es=1027,Gc=1028,Io=1029,yh=1030,kc=1031,Wc=1033,fo=33776,po=33777,mo=33778,go=33779,ja=35840,Qa=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,cc=37811,lc=37812,uc=37813,hc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,_o=36492,vc=36494,yc=36495,Mh=36283,Mc=36284,Sc=36285,Ec=36286,Hf=3200,Gf=3201,Sh=0,kf=1,li="",an="srgb",ws="srgb-linear",Lo="linear",ee="srgb",Oi=7680,_l=519,Wf=512,Xf=513,qf=514,Eh=515,Yf=516,$f=517,Zf=518,Jf=519,bc=35044,xl="300 es",qn=2e3,Eo=2001;class As{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const tr=Math.PI/180,ar=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function Kf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jf(i,t,e){return i!==t?(e-i)/(t-i):0}function er(i,t,e){return(1-e)*i+e*t}function Qf(i,t,e,n){return er(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(vl=i);let t=vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*tr}function cd(i){return i*ar}function ld(i){return(i&i-1)===0&&i!==0}function ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tc={DEG2RAD:tr,RAD2DEG:ar,generateUUID:Yn,clamp:be,euclideanModulo:Xc,mapLinear:Kf,inverseLerp:jf,lerp:er,damp:Qf,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:cd,isPowerOfTwo:ld,ceilPowerOfTwo:ud,floorPowerOfTwo:hd,setQuaternionFromProperEuler:fd,normalize:te,denormalize:_n};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],M=s[4],_=s[7],b=s[2],T=s[5],E=s[8];return r[0]=o*v+a*x+c*b,r[3]=o*m+a*M+c*T,r[6]=o*p+a*_+c*E,r[1]=l*v+u*x+h*b,r[4]=l*m+u*M+h*T,r[7]=l*p+u*_+h*E,r[2]=f*v+d*x+g*b,r[5]=f*m+d*M+g*T,r[8]=f*p+d*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ko.makeScale(t,e)),this}rotate(t){return this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Nt;function bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){const i=bo("canvas");return i.style.display="block",i}const yl={};function js(i){i in yl||(yl[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ml=[.64,.33,.3,.6,.15,.06],Sl=[.2126,.7152,.0722],El=[.3127,.329],bl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ws]:{primaries:Ml,whitePoint:El,transfer:Lo,toXYZ:bl,fromXYZ:Tl,luminanceCoefficients:Sl,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:Ml,whitePoint:El,transfer:ee,toXYZ:bl,fromXYZ:Tl,luminanceCoefficients:Sl,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});let zi;class _d{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=bo("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xd=0;class Th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class ke extends As{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Di,s=Di,r=Rn,o=Ui,a=tn,c=Zn,l=ke.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Yn(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ja:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ja:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=fh;ke.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(d+1)/2,b=(p+1)/2,T=(u+f)/4,E=(h+v)/4,A=(g+m)/4;return M>_&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=E/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=A/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=E/r,s=A/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends As{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Th(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wh extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*v,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),T=Math.atan2(b,p*x);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const _=a*x;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+v*_,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new R,wl=new vn;class ye{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),_r.subVectors(this.max,Ls),Vi.subVectors(t.a,Ls),Hi.subVectors(t.b,Ls),Gi.subVectors(t.c,Ls),ei.subVectors(Hi,Vi),ni.subVectors(Gi,Hi),vi.subVectors(Vi,Gi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!qo(e,Vi,Hi,Gi,_r)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Vi,Hi,Gi,_r))?!1:(xr.crossVectors(ei,ni),e=[xr.x,xr.y,xr.z],qo(e,Vi,Hi,Gi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],dn=new R,gr=new ye,Vi=new R,Hi=new R,Gi=new R,ei=new R,ni=new R,vi=new R,Ls=new R,_r=new R,xr=new R,yi=new R;function qo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);const a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Sd=new ye,Ds=new R,Yo=new R;class un{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Yo)),this.expandByPoint(Ds.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new R,$o=new R,vr=new R,ii=new R,Zo=new R,yr=new R,Jo=new R;class hr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub($o);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=ii.dot(this.direction),c=-ii.dot(vr),l=ii.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($o).addScaledVector(vr,f),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){Zo.subVectors(e,t),yr.subVectors(n,t),Jo.crossVectors(Zo,yr);let o=this.direction.dot(Jo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(yr.crossVectors(ii,yr));if(c<0)return null;const l=a*this.direction.dot(Zo.cross(ii));if(l<0||c+l>o)return null;const u=-a*ii.dot(Jo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+v,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,bd)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),si.crossVectors(n,Ke),si.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),si.crossVectors(n,Ke)),si.normalize(),Mr.crossVectors(Ke,si),s[0]=si.x,s[4]=Mr.x,s[8]=Ke.x,s[1]=si.y,s[5]=Mr.y,s[9]=Ke.y,s[2]=si.z,s[6]=Mr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],b=n[15],T=s[0],E=s[4],A=s[8],S=s[12],y=s[1],P=s[5],L=s[9],D=s[13],U=s[2],V=s[6],H=s[10],Y=s[14],W=s[3],it=s[7],rt=s[11],mt=s[15];return r[0]=o*T+a*y+c*U+l*W,r[4]=o*E+a*P+c*V+l*it,r[8]=o*A+a*L+c*H+l*rt,r[12]=o*S+a*D+c*Y+l*mt,r[1]=u*T+h*y+f*U+d*W,r[5]=u*E+h*P+f*V+d*it,r[9]=u*A+h*L+f*H+d*rt,r[13]=u*S+h*D+f*Y+d*mt,r[2]=g*T+v*y+m*U+p*W,r[6]=g*E+v*P+m*V+p*it,r[10]=g*A+v*L+m*H+p*rt,r[14]=g*S+v*D+m*Y+p*mt,r[3]=x*T+M*y+_*U+b*W,r[7]=x*E+M*P+_*V+b*it,r[11]=x*A+M*L+_*H+b*rt,r[15]=x*S+M*D+_*Y+b*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=h*m*l-v*f*l+v*c*d-a*m*d-h*c*p+a*f*p,M=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*v*l-g*h*l+g*a*d-o*v*d-u*a*p+o*h*p,b=g*h*c-u*v*c-g*a*f+o*v*f+u*a*m-o*h*m,T=e*x+n*M+s*_+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=x*E,t[1]=(v*f*r-h*m*r-v*s*d+n*m*d+h*s*p-n*f*p)*E,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*E,t[4]=M*E,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=_*E,t[9]=(g*h*r-u*v*r-g*n*d+e*v*d+u*n*p-e*h*p)*E,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*E,t[12]=b*E,t[13]=(u*v*s-g*h*s+g*n*f-e*v*f-u*n*m+e*h*m)*E,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,v=o*u,m=o*h,p=a*h,x=c*l,M=c*u,_=c*h,b=n.x,T=n.y,E=n.z;return s[0]=(1-(v+p))*b,s[1]=(d+_)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+M)*E,s[9]=(m-x)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const l=1/r,u=1/o,h=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===qn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Eo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u;let g,v;if(a===qn)g=(o+r)*h,v=-2*h;else if(a===Eo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new R,pn=new Lt,Ed=new R(0,0,0),bd=new R(1,1,1),si=new R,Mr=new R,Ke=new R,Al=new Lt,Cl=new vn;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Td=0;const Rl=new R,Wi=new vn,Bn=new Lt,Sr=new R,Us=new R,wd=new R,Ad=new vn,Pl=new R(1,0,0),Il=new R(0,1,0),Ll=new R(0,0,1),Dl={type:"added"},Cd={type:"removed"},Xi={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Ne extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new R,e=new Sn,n=new vn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Nt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Us,Sr,this.up):Bn.lookAt(Sr,Us,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new R,On=new R,jo=new R,zn=new R,qi=new R,Yi=new R,Ul=new R,Qo=new R,ta=new R,ea=new R,na=new ne,ia=new ne,sa=new ne;class Ie{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),On.subVectors(n,e),jo.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(On),c=mn.dot(jo),l=On.dot(On),u=On.dot(jo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,n),sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(na,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(sa,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),On.subVectors(t,e),mn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,n),Yi.subVectors(r,n),Qo.subVectors(t,n);const c=qi.dot(Qo),l=Yi.dot(Qo);if(c<=0&&l<=0)return e.copy(n);ta.subVectors(t,s);const u=qi.dot(ta),h=Yi.dot(ta);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(qi,o);ea.subVectors(t,r);const d=qi.dot(ea),g=Yi.dot(ea);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ul.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Ul,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Xc(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ra(o,r,t+1/3),this.g=ra(o,r,t),this.b=ra(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=Ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Yt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(be(Oe.r*255,0,255))*65536+Math.round(be(Oe.g*255,0,255))*256+Math.round(be(Oe.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=an){Yt.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Er);const n=er(ri.h,Er.h,e),s=er(ri.s,Er.s,e),r=er(ri.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new It;It.NAMES=Ch;let Rd=0;class _i extends As{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Yn(),this.name="",this.blending=ms,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Va,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cr extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new R,br=new nt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}}class Rh extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ph extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pd=0;const rn=new Lt,oa=new Ne,$i=new R,je=new ye,Ns=new ye,Pe=new R;class de extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?Ph:Rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(je.min,Ns.min),je.expandByPoint(Pe),Pe.addVectors(je.max,Ns.max),je.expandByPoint(Pe)):(je.expandByPoint(Ns.min),je.expandByPoint(Ns.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pe.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Pe.add($i)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new R,c[A]=new R;const l=new R,u=new R,h=new R,f=new nt,d=new nt,g=new nt,v=new R,m=new R;function p(A,S,y){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[A].add(v),a[S].add(v),a[y].add(v),c[A].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,S=x.length;A<S;++A){const y=x[A],P=y.start,L=y.count;for(let D=P,U=P+L;D<U;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new R,_=new R,b=new R,T=new R;function E(A){b.fromBufferAttribute(s,A),T.copy(b);const S=a[A];M.copy(S),M.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(T,S);const P=_.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,P)}for(let A=0,S=x.length;A<S;++A){const y=x[A],P=y.start,L=y.count;for(let D=P,U=P+L;D<U;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new xe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Lt,Mi=new hr,Tr=new un,Fl=new R,wr=new R,Ar=new R,Cr=new R,aa=new R,Rr=new R,Bl=new R,Pr=new R;class jt extends Ne{constructor(t=new de,e=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(aa.fromBufferAttribute(h,t),o?Rr.addScaledVector(aa,u):Rr.addScaledVector(aa.sub(e),u))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Tr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Tr,Fl)===null||Mi.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=M;_<b;_+=3){const T=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);s=Ir(this,p,t,n,l,u,h,T,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Ir(this,o,t,n,l,u,h,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=M;_<b;_+=3){const T=_,E=_+1,A=_+2;s=Ir(this,p,t,n,l,u,h,T,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,M=m+1,_=m+2;s=Ir(this,o,t,n,l,u,h,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Id(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===In,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:i}}function Ir(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,wr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Cr);const u=Id(i,t,e,n,wr,Ar,Cr,Bl);if(u){const h=new R;Ie.getBarycoord(Bl,wr,Ar,Cr,h),s&&(u.uv=Ie.getInterpolatedAttribute(s,a,c,l,h,new nt)),r&&(u.uv1=Ie.getInterpolatedAttribute(r,a,c,l,h,new nt)),o&&(u.normal=Ie.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};Ie.getNormal(wr,Ar,Cr,f.normal),u.face=f,u.barycoord=h}return u}class yn extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function g(v,m,p,x,M,_,b,T,E,A,S){const y=_/E,P=b/A,L=_/2,D=b/2,U=T/2,V=E+1,H=A+1;let Y=0,W=0;const it=new R;for(let rt=0;rt<H;rt++){const mt=rt*P-D;for(let At=0;At<V;At++){const kt=At*y-L;it[v]=kt*x,it[m]=mt*M,it[p]=U,l.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[p]=T>0?1:-1,u.push(it.x,it.y,it.z),h.push(At/E),h.push(1-rt/A),Y+=1}}for(let rt=0;rt<A;rt++)for(let mt=0;mt<E;mt++){const At=f+mt+V*rt,kt=f+mt+V*(rt+1),q=f+(mt+1)+V*(rt+1),j=f+(mt+1)+V*rt;c.push(At,kt,j),c.push(kt,q,j),W+=6}a.addGroup(d,W,S),d+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=bs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Dd={clone:bs,merge:Xe};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new R,Ol=new nt,zl=new nt;class Qe extends Lh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Ol,zl),e.subVectors(zl,Ol)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class Fd extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const c=new Qe(Zi,Ji,t,e);c.layers=this.layers,this.add(c);const l=new Qe(Zi,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dh extends ke{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bd extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:di});r.uniforms.tEquirect.value=e;const o=new jt(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Rn),new Fd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ca=new R,Od=new R,zd=new Nt;class kn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(Od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new un,Lr=new R;class Do{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+u,m+g,_+x).normalize(),n[3].setComponents(c-o,f-u,m-g,_-x).normalize(),n[4].setComponents(c-a,f-h,m-v,_-M).normalize(),e===qn)n[5].setComponents(c+a,f+h,m+v,_+M).normalize();else if(e===Eo)n[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vd(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Uo extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*f-o;for(let M=0;M<l;M++){const _=M*h-r;g.push(_,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const M=x+l*p,_=x+l*(p+1),b=x+1+l*(p+1),T=x+1+l*p;d.push(M,_,T),d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
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
#endif`,zp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,cg=`#define PHONG
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
}`,lg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,hg=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,dg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Hd,alphahash_pars_fragment:Gd,alphamap_fragment:kd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:$d,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:Kd,beginnormal_vertex:jd,bsdfs:Qd,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:op,color_pars_fragment:ap,color_pars_vertex:cp,color_vertex:lp,common:up,cube_uv_reflection_fragment:hp,defaultnormal_vertex:fp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:xp,envmap_fragment:vp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Mp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Dp,envmap_vertex:Ep,fog_vertex:bp,fog_pars_vertex:Tp,fog_fragment:wp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Rp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Lp,lights_toon_fragment:Up,lights_toon_pars_fragment:Np,lights_phong_fragment:Fp,lights_phong_pars_fragment:Bp,lights_physical_fragment:Op,lights_physical_pars_fragment:zp,lights_fragment_begin:Vp,lights_fragment_maps:Hp,lights_fragment_end:Gp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:jp,morphinstance_vertex:Qp,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:cm,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:dm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:_m,dithering_fragment:xm,dithering_pars_fragment:vm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:bm,shadowmask_pars_fragment:Tm,skinbase_vertex:wm,skinning_pars_vertex:Am,skinning_vertex:Cm,skinnormal_vertex:Rm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:Um,transmission_pars_fragment:Nm,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:Om,worldpos_vertex:zm,background_vert:Vm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:km,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:Jm,equirect_frag:Km,linedashed_vert:jm,linedashed_frag:Qm,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:cg,meshphong_frag:lg,meshphysical_vert:ug,meshphysical_frag:hg,meshtoon_vert:fg,meshtoon_frag:dg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:xg,sprite_frag:vg},st={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},An={basic:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new It(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Xe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Xe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new It(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Xe([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Xe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Xe([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Xe([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Xe([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Xe([st.lights,st.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};An.physical={uniforms:Xe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Dr={r:0,b:0,g:0},Ei=new Sn,yg=new Lt;function Mg(i,t,e,n,s,r,o){const a=new It(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function v(x){let M=!1;const _=g(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===Po)?(u===void 0&&(u=new jt(new yn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:bs(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ei.copy(M.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(Ei)),u.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ee,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new jt(new Uo(2,2),new Jn({name:"BackgroundMaterial",uniforms:bs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Dr,Ih(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m}}function Sg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,P,L,D,U){let V=!1;const H=h(D,L,P);r!==H&&(r=H,l(r.object)),V=d(y,D,L,U),V&&g(y,D,L,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(y,P,L,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,P,L){const D=L.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let V=U[P.id];V===void 0&&(V={},U[P.id]=V);let H=V[D];return H===void 0&&(H=f(c()),V[D]=H),H}function f(y){const P=[],L=[],D=[];for(let U=0;U<e;U++)P[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:D,object:y,attributes:{},index:null}}function d(y,P,L,D){const U=r.attributes,V=P.attributes;let H=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){const rt=U[W];let mt=V[W];if(mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),rt===void 0||rt.attribute!==mt||mt&&rt.data!==mt.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function g(y,P,L,D){const U={},V=P.attributes;let H=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){let rt=V[W];rt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));const mt={};mt.attribute=rt,rt&&rt.data&&(mt.data=rt.data),U[W]=mt,H++}r.attributes=U,r.attributesNum=H,r.index=D}function v(){const y=r.newAttributes;for(let P=0,L=y.length;P<L;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const L=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;L[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),U[y]!==P&&(i.vertexAttribDivisor(y,P),U[y]=P)}function x(){const y=r.newAttributes,P=r.enabledAttributes;for(let L=0,D=P.length;L<D;L++)P[L]!==y[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function M(y,P,L,D,U,V,H){H===!0?i.vertexAttribIPointer(y,P,L,U,V):i.vertexAttribPointer(y,P,L,D,U,V)}function _(y,P,L,D){v();const U=D.attributes,V=L.getAttributes(),H=P.defaultAttributeValues;for(const Y in V){const W=V[Y];if(W.location>=0){let it=U[Y];if(it===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const rt=it.normalized,mt=it.itemSize,At=t.get(it);if(At===void 0)continue;const kt=At.buffer,q=At.type,j=At.bytesPerElement,ht=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===zc;if(it.isInterleavedBufferAttribute){const et=it.data,Mt=et.stride,Et=it.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<W.locationSize;St++)p(W.location+St,et.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<W.locationSize;St++)m(W.location+St);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let St=0;St<W.locationSize;St++)M(W.location+St,mt/W.locationSize,q,rt,Mt*j,(Et+mt/W.locationSize*St)*j,ht)}else{if(it.isInstancedBufferAttribute){for(let et=0;et<W.locationSize;et++)p(W.location+et,it.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let et=0;et<W.locationSize;et++)m(W.location+et);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let et=0;et<W.locationSize;et++)M(W.location+et,mt/W.locationSize,q,rt,mt*j,mt/W.locationSize*et*j,ht)}}else if(H!==void 0){const rt=H[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(W.location,rt);break;case 3:i.vertexAttrib3fv(W.location,rt);break;case 4:i.vertexAttrib4fv(W.location,rt);break;default:i.vertexAttrib1fv(W.location,rt)}}}}x()}function b(){A();for(const y in n){const P=n[y];for(const L in P){const D=P[L];for(const U in D)u(D[U].object),delete D[U];delete P[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const L in P){const D=P[L];for(const U in D)u(D[U].object),delete D[U];delete P[L]}delete n[y.id]}function E(y){for(const P in n){const L=n[P];if(L[y.id]===void 0)continue;const D=L[y.id];for(const U in D)u(D[U].object),delete D[U];delete L[y.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function bg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==cn&&!A)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:b,maxSamples:T}}function Tg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new kn,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,M=x*4;let _=p.clippingState||null;c.value=_,_=u(g,f,M,d);for(let b=0;b!==M;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function wg(i){let t=new WeakMap;function e(o,a){return a===$a?o.mapping=ys:a===Za&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===Za)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ag extends Lh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,Vl=[.125,.215,.35,.446,.526,.582],Li=20,la=new Ag,Hl=new It;let ua=null,ha=0,fa=0,da=!1;const Pi=(1+Math.sqrt(5))/2,Ki=1/Pi,Gl=[new R(-Pi,Ki,0),new R(Pi,Ki,0),new R(-Ki,0,Pi),new R(Ki,0,Pi),new R(0,Pi,-Ki),new R(0,Pi,Ki),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,ha,fa),this._renderer.xr.enabled=da,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ur,format:tn,colorSpace:ws,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Rg(r,t,e)}return s}_compileMaterial(t){const e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Hl),u.toneMapping=pi,u.autoClear=!1;const d=new cr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new jt(new yn,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Hl),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Ur(s,x*M,p>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ys||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gl[(s-r-1)%Gl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new jt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Li-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let x=0;for(let E=0;E<Li;++E){const A=E/v,S=Math.exp(-A*A/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const _=this._sizeLods[s],b=3*_*(s>M-ds?s-M+ds:0),T=4*(this._cubeSize-_);Ur(e,b,T,3*_,2*_),c.setRenderTarget(e),c.render(h,la)}}function Cg(i){const t=[],e=[],n=[];let s=i;const r=i-ds+1+Vl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ds?c=Vl[o-i+ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,A=T>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];x.set(S,v*g*T),M.set(f,m*g*T);const y=[T,T,T,T,T,T];_.set(y,p*g*T)}const b=new de;b.setAttribute("position",new xe(x,v)),b.setAttribute("uv",new xe(M,m)),b.setAttribute("faceIndex",new xe(_,p)),t.push(b),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rg(i,t,e){const n=new Float32Array(Li),s=new R(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Xl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ql(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function Pg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$a||c===Za,u=c===ys||c===Ms;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new kl(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new kl(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ig(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let M=0,_=x.length;M<_;M+=3){const b=x[M+0],T=x[M+1],E=x[M+2];f.push(b,T,T,E,E,b)}}else if(g!==void 0){const x=g.array;v=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const b=M+0,T=M+1,E=M+2;f.push(b,T,T,E,E,b)}}else return;const m=new(bh(f)?Ph:Rh)(f,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Dg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ug(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const E=new Float32Array(b*T*4*h),A=new wh(E,b,T,h);A.type=cn,A.needsUpdate=!0;const S=_*4;for(let P=0;P<h;P++){const L=p[P],D=x[P],U=M[P],V=b*T*4*P;for(let H=0;H<L.count;H++){const Y=H*S;g===!0&&(s.fromBufferAttribute(L,H),E[V+Y+0]=s.x,E[V+Y+1]=s.y,E[V+Y+2]=s.z,E[V+Y+3]=0),v===!0&&(s.fromBufferAttribute(D,H),E[V+Y+4]=s.x,E[V+Y+5]=s.y,E[V+Y+6]=s.z,E[V+Y+7]=0),m===!0&&(s.fromBufferAttribute(U,H),E[V+Y+8]=s.x,E[V+Y+9]=s.y,E[V+Y+10]=s.z,E[V+Y+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new nt(b,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Nh extends ke{constructor(t,e,n,s,r,o,a,c,l,u=_s){if(u!==_s&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=mi),n===void 0&&u===Es&&(n=Ss),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fh=new ke,Yl=new Nh(1,1),Bh=new wh,Oh=new Md,zh=new Dh,$l=[],Zl=[],Jl=new Float32Array(16),Kl=new Float32Array(9),jl=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function No(i,t){let e=Zl[t];e===void 0&&(e=new Int32Array(t),Zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),Re(e,n)}}function Gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),Re(e,n)}}function kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),Re(e,n)}}function Wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function $g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=Eh,r=Yl):r=Fh,e.setTexture2D(t||r,s)}function Qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oh,s)}function t0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bh,s)}function n0(i){switch(i){case 5126:return Bg;case 35664:return Og;case 35665:return zg;case 35666:return Vg;case 35674:return Hg;case 35675:return Gg;case 35676:return kg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return Zg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}function i0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function r0(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function a0(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c0(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function l0(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u0(i,t){i.uniform1iv(this.addr,t)}function h0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function d0(i,t){i.uniform4iv(this.addr,t)}function p0(i,t){i.uniform1uiv(this.addr,t)}function m0(i,t){i.uniform2uiv(this.addr,t)}function g0(i,t){i.uniform3uiv(this.addr,t)}function _0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function v0(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Oh,r[o])}function y0(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zh,r[o])}function M0(i,t,e){const n=this.cache,s=t.length,r=No(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bh,r[o])}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return c0;case 35676:return l0;case 5124:case 35670:return u0;case 35667:case 35671:return h0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}class E0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n0(e.type)}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}}class T0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function w0(i,t,e){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const r=pa.exec(n),o=pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ql(e,l===void 0?new E0(a,i,t):new b0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new T0(a),Ql(e,h)),e=h}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);w0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function tu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const A0=37297;let C0=0;function R0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const eu=new Nt;function P0(i){Yt._getMatrix(eu,Yt.workingColorSpace,i);const t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Lo:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+R0(i.getShaderSource(t),o)}else return s}function I0(i,t){const e=P0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function L0(i,t){let e;switch(t){case Uf:e="Linear";break;case Nf:e="Reinhard";break;case Ff:e="Cineon";break;case hh:e="ACESFilmic";break;case Of:e="AgX";break;case zf:e="Neutral";break;case Bf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new R;function D0(){Yt.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function N0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qs(i){return i!==""}function iu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function su(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(B0,z0)}const O0=new Map;function z0(i,t){let e=Ot[t];if(e===void 0){const n=O0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(i){return i.replace(V0,H0)}function H0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===df?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function k0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Ms:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function X0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case Df:t="ENVMAP_BLENDING_ADD";break}return t}function q0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Y0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=G0(e),l=k0(e),u=W0(e),h=X0(e),f=q0(e),d=U0(e),g=N0(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==pi?L0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),D0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=wc(o),o=iu(o,e),o=su(o,e),a=wc(a),a=iu(a,e),a=su(a,e),o=ru(o),a=ru(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,_=x+p+a,b=tu(s,s.VERTEX_SHADER,M),T=tu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,b),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(b).trim(),U=s.getShaderInfoLog(T).trim();let V=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,b,T);else{const Y=nu(s,b,"vertex"),W=nu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Y+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(H=!1);H&&(P.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(b),s.deleteShader(T),A=new xo(s,v),S=F0(s,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,A0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}let $0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new J0(t),e.set(t,n)),n}}class J0{constructor(t){this.id=$0++,this.code=t,this.usedTimes=0}}function K0(i,t,e,n,s,r,o){const a=new Ah,c=new Z0,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,L,D){const U=L.fog,V=D.geometry,H=S.isMeshStandardMaterial?L.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),W=Y&&Y.mapping===Po?Y.image.height:null,it=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=rt!==void 0?rt.length:0;let At=0;V.morphAttributes.position!==void 0&&(At=1),V.morphAttributes.normal!==void 0&&(At=2),V.morphAttributes.color!==void 0&&(At=3);let kt,q,j,ht;if(it){const Qt=An[it];kt=Qt.vertexShader,q=Qt.fragmentShader}else kt=S.vertexShader,q=S.fragmentShader,c.update(S),j=c.getVertexShaderID(S),ht=c.getFragmentShaderID(S);const et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Et=D.isInstancedMesh===!0,St=D.isBatchedMesh===!0,ae=!!S.map,Ht=!!S.matcap,ve=!!Y,O=!!S.aoMap,nn=!!S.lightMap,Wt=!!S.bumpMap,Xt=!!S.normalMap,Tt=!!S.displacementMap,ce=!!S.emissiveMap,bt=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,K=S.iridescence>0,$=S.sheen>0,vt=S.transmission>0,at=w&&!!S.anisotropyMap,ft=z&&!!S.clearcoatMap,$t=z&&!!S.clearcoatNormalMap,Q=z&&!!S.clearcoatRoughnessMap,dt=K&&!!S.iridescenceMap,wt=K&&!!S.iridescenceThicknessMap,Ct=$&&!!S.sheenColorMap,pt=$&&!!S.sheenRoughnessMap,qt=!!S.specularMap,Ft=!!S.specularColorMap,re=!!S.specularIntensityMap,N=vt&&!!S.transmissionMap,ot=vt&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,ut=S.alphaTest>0,ct=!!S.alphaHash,Dt=!!S.extensions;let pe=pi;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Fe={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:q,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:St,batchingColor:St&&D._colorsTexture!==null,instancing:Et,instancingColor:Et&&D.instanceColor!==null,instancingMorph:Et&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ws,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:Ht,envMap:ve,envMapMode:ve&&Y.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:nn,bumpMap:Wt,normalMap:Xt,displacementMap:f&&Tt,emissiveMap:ce,normalMapObjectSpace:Xt&&S.normalMapType===kf,normalMapTangentSpace:Xt&&S.normalMapType===Sh,metalnessMap:bt,roughnessMap:I,anisotropy:w,anisotropyMap:at,clearcoat:z,clearcoatMap:ft,clearcoatNormalMap:$t,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:K,iridescenceMap:dt,iridescenceThicknessMap:wt,sheen:$,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:qt,specularColorMap:Ft,specularIntensityMap:re,transmission:vt,transmissionMap:N,thicknessMap:ot,gradientMap:X,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:ct,combine:S.combine,mapUv:ae&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:nn&&v(S.lightMap.channel),bumpMapUv:Wt&&v(S.bumpMap.channel),normalMapUv:Xt&&v(S.normalMap.channel),displacementMapUv:Tt&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:bt&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:at&&v(S.anisotropyMap.channel),clearcoatMapUv:ft&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(S.sheenRoughnessMap.channel),specularMapUv:qt&&v(S.specularMap.channel),specularColorMapUv:Ft&&v(S.specularColorMap.channel),specularIntensityMapUv:re&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:ot&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Xt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ae||J),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Mt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===Ge,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let P;if(y){const L=An[y];P=Dd.clone(L.uniforms)}else P=S.uniforms;return P}function b(S,y){let P;for(let L=0,D=u.length;L<D;L++){const U=u[L];if(U.cacheKey===y){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Y0(i,y,S,r),u.push(P)),P}function T(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function j0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function au(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Q0),n.length>1&&n.sort(f||au),s.length>1&&s.sort(f||au)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function t_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new cu,i.set(n,[o])):s>=r.length?(o=new cu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new It};break;case"SpotLight":e={position:new R,direction:new R,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function n_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){const t=new e_,e=n_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Lt,o=new Lt;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,M=0,_=0,b=0,T=0,E=0;l.sort(s_);for(let S=0,y=l.length;S<y;S++){const P=l[S],L=P.color,D=P.intensity,U=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*D,h+=L.g*D,f+=L.b*D;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],D);E++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=H,d++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(D),H.distance=U,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const Y=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Y.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=Y.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=V,_++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(L).multiplyScalar(D),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(D),H.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==_||A.numSpotMaps!==b||A.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=d,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=_,A.numSpotMaps=b,A.numLightProbes=E,n.version=i_++)}function c(l,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function lu(i){const t=new r_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function o_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new lu(i),t.set(s,[a])):r>=o.length?(a=new lu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class a_ extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c_ extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function h_(i,t,e){let n=new Do;const s=new nt,r=new nt,o=new ne,a=new a_({depthPacking:Gf}),c=new c_,l={},u=e.maxTextureSize,h={[In]:Ge,[Ge]:In,[Cn]:Cn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:l_,fragmentShader:u_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(T,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(di),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==Hn&&this.type===Hn,U=p===Hn&&this.type!==Hn;for(let V=0,H=T.length;V<H;V++){const Y=T[V],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||D===!0||U===!0){const mt=this.type!==Hn?{minFilter:en,magFilter:en}:{};W.map!==null&&W.map.dispose(),W.map=new Ni(s.x,s.y,mt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const rt=W.getViewportCount();for(let mt=0;mt<rt;mt++){const At=W.getViewport(mt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),L.viewport(o),W.updateMatrices(Y,mt),n=W.getFrustum(),_(E,A,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&x(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function x(T,E){const A=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,A,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,A,d,v,null)}function M(T,E,A,S){let y=null;const P=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=A.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=y.uuid,D=E.uuid;let U=l[L];U===void 0&&(U={},l[L]=U);let V=U[D];V===void 0&&(V=y.clone(),U[D]=V,E.addEventListener("dispose",b)),y=V}if(y.visible=E.visible,y.wireframe=E.wireframe,S===Hn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=i.properties.get(y);L.light=A}return y}function _(T,E,A,S,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const D=t.update(T),U=T.material;if(Array.isArray(U)){const V=D.groups;for(let H=0,Y=V.length;H<Y;H++){const W=V[H],it=U[W.materialIndex];if(it&&it.visible){const rt=M(T,it,S,y);T.onBeforeShadow(i,T,E,A,D,rt,W),i.renderBufferDirect(A,null,D,rt,T,W),T.onAfterShadow(i,T,E,A,D,rt,W)}}}else if(U.visible){const V=M(T,U,S,y);T.onBeforeShadow(i,T,E,A,D,V,null),i.renderBufferDirect(A,null,D,V,T,null),T.onAfterShadow(i,T,E,A,D,V,null)}}const L=T.children;for(let D=0,U=L.length;D<U;D++)_(L[D],E,A,S,y)}function b(T){T.target.removeEventListener("dispose",b);for(const A in l){const S=l[A],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const f_={[Ha]:Ga,[ka]:qa,[Wa]:Ya,[vs]:Xa,[Ga]:Ha,[qa]:ka,[Ya]:Wa,[Xa]:vs};function d_(i,t){function e(){let N=!1;const ot=new ne;let X=null;const J=new ne(0,0,0,0);return{setMask:function(ut){X!==ut&&!N&&(i.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){N=ut},setClear:function(ut,ct,Dt,pe,Fe){Fe===!0&&(ut*=pe,ct*=pe,Dt*=pe),ot.set(ut,ct,Dt,pe),J.equals(ot)===!1&&(i.clearColor(ut,ct,Dt,pe),J.copy(ot))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,X=null,J=null,ut=null;return{setReversed:function(ct){if(ot!==ct){const Dt=t.get("EXT_clip_control");ot?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const pe=ut;ut=null,this.setClear(pe)}ot=ct},getReversed:function(){return ot},setTest:function(ct){ct?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ct){X!==ct&&!N&&(i.depthMask(ct),X=ct)},setFunc:function(ct){if(ot&&(ct=f_[ct]),J!==ct){switch(ct){case Ha:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ct}},setLocked:function(ct){N=ct},setClear:function(ct){ut!==ct&&(ot&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){N=!1,X=null,J=null,ut=null,ot=!1}}}function s(){let N=!1,ot=null,X=null,J=null,ut=null,ct=null,Dt=null,pe=null,Fe=null;return{setTest:function(Qt){N||(Qt?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Qt){ot!==Qt&&!N&&(i.stencilMask(Qt),ot=Qt)},setFunc:function(Qt,hn,Dn){(X!==Qt||J!==hn||ut!==Dn)&&(i.stencilFunc(Qt,hn,Dn),X=Qt,J=hn,ut=Dn)},setOp:function(Qt,hn,Dn){(ct!==Qt||Dt!==hn||pe!==Dn)&&(i.stencilOp(Qt,hn,Dn),ct=Qt,Dt=hn,pe=Dn)},setLocked:function(Qt){N=Qt},setClear:function(Qt){Fe!==Qt&&(i.clearStencil(Qt),Fe=Qt)},reset:function(){N=!1,ot=null,X=null,J=null,ut=null,ct=null,Dt=null,pe=null,Fe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,M=null,_=null,b=null,T=null,E=new It(0,0,0),A=0,S=!1,y=null,P=null,L=null,D=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=Y>=2);let it=null,rt={};const mt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),kt=new ne().fromArray(mt),q=new ne().fromArray(At);function j(N,ot,X,J){const ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(N,ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<X;Dt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ot+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}const ht={};ht[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(vs),Wt(!1),Xt(pl),et(i.CULL_FACE),O(di);function et(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Mt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Et(N,ot){return h[N]!==ot?(i.bindFramebuffer(N,ot),h[N]=ot,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function St(N,ot){let X=d,J=!1;if(N){X=f.get(ot),X===void 0&&(X=[],f.set(ot,X));const ut=N.textures;if(X.length!==ut.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Dt=ut.length;ct<Dt;ct++)X[ct]=i.COLOR_ATTACHMENT0+ct;X.length=ut.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function ae(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Ht={[Ii]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};Ht[_f]=i.MIN,Ht[xf]=i.MAX;const ve={[vf]:i.ZERO,[yf]:i.ONE,[Mf]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[Tf]:i.DST_COLOR,[Ef]:i.DST_ALPHA,[Sf]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[bf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[Pf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,ot,X,J,ut,ct,Dt,pe,Fe,Qt){if(N===di){v===!0&&(Mt(i.BLEND),v=!1);return}if(v===!1&&(et(i.BLEND),v=!0),N!==pf){if(N!==m||Qt!==S){if((p!==Ii||_!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,_=Ii),Qt)switch(N){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,M=null,b=null,T=null,E.set(0,0,0),A=0,m=N,S=Qt}return}ut=ut||ot,ct=ct||X,Dt=Dt||J,(ot!==p||ut!==_)&&(i.blendEquationSeparate(Ht[ot],Ht[ut]),p=ot,_=ut),(X!==x||J!==M||ct!==b||Dt!==T)&&(i.blendFuncSeparate(ve[X],ve[J],ve[ct],ve[Dt]),x=X,M=J,b=ct,T=Dt),(pe.equals(E)===!1||Fe!==A)&&(i.blendColor(pe.r,pe.g,pe.b,Fe),E.copy(pe),A=Fe),m=N,S=!1}function nn(N,ot){N.side===Cn?Mt(i.CULL_FACE):et(i.CULL_FACE);let X=N.side===Ge;ot&&(X=!X),Wt(X),N.blending===ms&&N.transparent===!1?O(di):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function Xt(N){N!==hf?(et(i.CULL_FACE),N!==P&&(N===pl?i.cullFace(i.BACK):N===ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=N}function Tt(N){N!==L&&(H&&i.lineWidth(N),L=N)}function ce(N,ot,X){N?(et(i.POLYGON_OFFSET_FILL),(D!==ot||U!==X)&&(i.polygonOffset(ot,X),D=ot,U=X)):Mt(i.POLYGON_OFFSET_FILL)}function bt(N){N?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function I(N){N===void 0&&(N=i.TEXTURE0+V-1),it!==N&&(i.activeTexture(N),it=N)}function w(N,ot,X){X===void 0&&(it===null?X=i.TEXTURE0+V-1:X=it);let J=rt[X];J===void 0&&(J={type:void 0,texture:void 0},rt[X]=J),(J.type!==N||J.texture!==ot)&&(it!==X&&(i.activeTexture(X),it=X),i.bindTexture(N,ot||ht[N]),J.type=N,J.texture=ot)}function z(){const N=rt[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(N){kt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function pt(N){q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function qt(N,ot){let X=l.get(ot);X===void 0&&(X=new WeakMap,l.set(ot,X));let J=X.get(N);J===void 0&&(J=i.getUniformBlockIndex(ot,N.name),X.set(N,J))}function Ft(N,ot){const J=l.get(ot).get(N);c.get(ot)!==J&&(i.uniformBlockBinding(ot,J,N.__bindingPointIndex),c.set(ot,J))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,rt={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,M=null,_=null,b=null,T=null,E=new It(0,0,0),A=0,S=!1,y=null,P=null,L=null,D=null,U=null,kt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Mt,bindFramebuffer:Et,drawBuffers:St,useProgram:ae,setBlending:O,setMaterial:nn,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Tt,setPolygonOffset:ce,setScissorTest:bt,activeTexture:I,bindTexture:w,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:dt,texImage3D:wt,updateUBOMapping:qt,uniformBlockBinding:Ft,texStorage2D:$t,texStorage3D:Q,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Ct,viewport:pt,reset:re}}function uu(i,t,e,n){const s=p_(n);switch(e){case gh:return i*t;case xh:return i*t;case vh:return i*t*2;case Gc:return i*t/s.components*s.byteLength;case Io:return i*t/s.components*s.byteLength;case yh:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case Wc:return i*t*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case ec:return Math.max(i,16)*Math.max(t,8)/4;case ja:case tc:return Math.max(i,8)*Math.max(t,8)/2;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mh:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p_(i){switch(i){case Zn:case dh:return{byteLength:1,components:1};case or:case ph:case ur:return{byteLength:2,components:1};case Vc:case Hc:return{byteLength:2,components:4};case mi:case zc:case cn:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function m_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return d?new OffscreenCanvas(I,w):bo("canvas")}function v(I,w,z){let Z=1;const K=bt(I);if((K.width>z||K.height>z)&&(Z=z/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(Z*K.width),vt=Math.floor(Z*K.height);h===void 0&&(h=g($,vt));const at=w?g($,vt):h;return at.width=$,at.height=vt,at.getContext("2d").drawImage(I,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+vt+")."),at}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,w,z,Z,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=w;if(w===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),w===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),w===i.RGBA){const vt=K?Lo:Yt.getTransfer(Z);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=vt===ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(I,w){let z;return I?w===null||w===mi||w===Ss?z=i.DEPTH24_STENCIL8:w===cn?z=i.DEPTH32F_STENCIL8:w===or&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===mi||w===Ss?z=i.DEPTH_COMPONENT24:w===cn?z=i.DEPTH_COMPONENT32F:w===or&&(z=i.DEPTH_COMPONENT16),z}function b(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&u.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),y(w)}function A(I){const w=n.get(I);if(w.__webglInit===void 0)return;const z=I.source,Z=f.get(z);if(Z){const K=Z[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(I),Object.keys(Z).length===0&&f.delete(z)}n.remove(I)}function S(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const z=I.source,Z=f.get(z);delete Z[w.__cacheKey],o.memory.textures--}function y(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let K=0;K<w.__webglFramebuffer[Z].length;K++)i.deleteFramebuffer(w.__webglFramebuffer[Z][K]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=I.textures;for(let Z=0,K=z.length;Z<K;Z++){const $=n.get(z[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(I)}let P=0;function L(){P=0}function D(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function V(I,w){const z=n.get(I);if(I.isVideoTexture&&Tt(I),I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,I,w);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function H(I,w){const z=n.get(I);if(I.version>0&&z.__version!==I.version){q(z,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function Y(I,w){const z=n.get(I);if(I.version>0&&z.__version!==I.version){q(z,I,w);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function W(I,w){const z=n.get(I);if(I.version>0&&z.__version!==I.version){j(z,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const it={[Ja]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},rt={[en]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},mt={[Wf]:i.NEVER,[Jf]:i.ALWAYS,[Xf]:i.LESS,[Eh]:i.LEQUAL,[qf]:i.EQUAL,[Zf]:i.GEQUAL,[Yf]:i.GREATER,[$f]:i.NOTEQUAL};function At(I,w){if(w.type===cn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===Go||w.magFilter===mr||w.magFilter===Ui||w.minFilter===Rn||w.minFilter===Go||w.minFilter===mr||w.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,it[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,it[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,it[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,rt[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==mr&&w.minFilter!==Ui||w.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function kt(I,w){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const Z=w.source;let K=f.get(Z);K===void 0&&(K={},f.set(Z,K));const $=U(w);if($!==I.__cacheKey){K[$]===void 0&&(K[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[$].usedTimes++;const vt=K[I.__cacheKey];vt!==void 0&&(K[I.__cacheKey].usedTimes--,vt.usedTimes===0&&S(w)),I.__cacheKey=$,I.__webglTexture=K[$].texture}return z}function q(I,w,z){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);const K=kt(I,w),$=w.source;e.bindTexture(Z,I.__webglTexture,i.TEXTURE0+z);const vt=n.get($);if($.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const at=Yt.getPrimaries(Yt.workingColorSpace),ft=w.colorSpace===li?null:Yt.getPrimaries(w.colorSpace),$t=w.colorSpace===li||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Q=v(w.image,!1,s.maxTextureSize);Q=ce(w,Q);const dt=r.convert(w.format,w.colorSpace),wt=r.convert(w.type);let Ct=M(w.internalFormat,dt,wt,w.colorSpace,w.isVideoTexture);At(Z,w);let pt;const qt=w.mipmaps,Ft=w.isVideoTexture!==!0,re=vt.__version===void 0||K===!0,N=$.dataReady,ot=b(w,Q);if(w.isDepthTexture)Ct=_(w.format===Es,w.type),re&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Ct,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Ct,Q.width,Q.height,0,dt,wt,null));else if(w.isDataTexture)if(qt.length>0){Ft&&re&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,qt[0].width,qt[0].height);for(let X=0,J=qt.length;X<J;X++)pt=qt[X],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,wt,pt.data):e.texImage2D(i.TEXTURE_2D,X,Ct,pt.width,pt.height,0,dt,wt,pt.data);w.generateMipmaps=!1}else Ft?(re&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,Q.width,Q.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,wt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,Q.width,Q.height,0,dt,wt,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ft&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ct,qt[0].width,qt[0].height,Q.depth);for(let X=0,J=qt.length;X<J;X++)if(pt=qt[X],w.format!==tn)if(dt!==null)if(Ft){if(N)if(w.layerUpdates.size>0){const ut=uu(pt.width,pt.height,w.format,w.type);for(const ct of w.layerUpdates){const Dt=pt.data.subarray(ct*ut/pt.data.BYTES_PER_ELEMENT,(ct+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ct,pt.width,pt.height,1,dt,Dt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ct,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,wt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ct,pt.width,pt.height,Q.depth,0,dt,wt,pt.data)}else{Ft&&re&&e.texStorage2D(i.TEXTURE_2D,ot,Ct,qt[0].width,qt[0].height);for(let X=0,J=qt.length;X<J;X++)pt=qt[X],w.format!==tn?dt!==null?Ft?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,wt,pt.data):e.texImage2D(i.TEXTURE_2D,X,Ct,pt.width,pt.height,0,dt,wt,pt.data)}else if(w.isDataArrayTexture)if(Ft){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Ct,Q.width,Q.height,Q.depth),N)if(w.layerUpdates.size>0){const X=uu(Q.width,Q.height,w.format,w.type);for(const J of w.layerUpdates){const ut=Q.data.subarray(J*X/Q.data.BYTES_PER_ELEMENT,(J+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,dt,wt,ut)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,Q.width,Q.height,Q.depth,0,dt,wt,Q.data);else if(w.isData3DTexture)Ft?(re&&e.texStorage3D(i.TEXTURE_3D,ot,Ct,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,Q.width,Q.height,Q.depth,0,dt,wt,Q.data);else if(w.isFramebufferTexture){if(re)if(Ft)e.texStorage2D(i.TEXTURE_2D,ot,Ct,Q.width,Q.height);else{let X=Q.width,J=Q.height;for(let ut=0;ut<ot;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ct,X,J,0,dt,wt,null),X>>=1,J>>=1}}else if(qt.length>0){if(Ft&&re){const X=bt(qt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Ct,X.width,X.height)}for(let X=0,J=qt.length;X<J;X++)pt=qt[X],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,dt,wt,pt):e.texImage2D(i.TEXTURE_2D,X,Ct,dt,wt,pt);w.generateMipmaps=!1}else if(Ft){if(re){const X=bt(Q);e.texStorage2D(i.TEXTURE_2D,ot,Ct,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Ct,dt,wt,Q);m(w)&&p(Z),vt.__version=$.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function j(I,w,z){if(w.image.length!==6)return;const Z=kt(I,w),K=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);const $=n.get(K);if(K.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const vt=Yt.getPrimaries(Yt.workingColorSpace),at=w.colorSpace===li?null:Yt.getPrimaries(w.colorSpace),ft=w.colorSpace===li||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const $t=w.isCompressedTexture||w.image[0].isCompressedTexture,Q=w.image[0]&&w.image[0].isDataTexture,dt=[];for(let J=0;J<6;J++)!$t&&!Q?dt[J]=v(w.image[J],!0,s.maxCubemapSize):dt[J]=Q?w.image[J].image:w.image[J],dt[J]=ce(w,dt[J]);const wt=dt[0],Ct=r.convert(w.format,w.colorSpace),pt=r.convert(w.type),qt=M(w.internalFormat,Ct,pt,w.colorSpace),Ft=w.isVideoTexture!==!0,re=$.__version===void 0||Z===!0,N=K.dataReady;let ot=b(w,wt);At(i.TEXTURE_CUBE_MAP,w);let X;if($t){Ft&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,qt,wt.width,wt.height);for(let J=0;J<6;J++){X=dt[J].mipmaps;for(let ut=0;ut<X.length;ut++){const ct=X[ut];w.format!==tn?Ct!==null?Ft?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,qt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,ct.width,ct.height,Ct,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,qt,ct.width,ct.height,0,Ct,pt,ct.data)}}}else{if(X=w.mipmaps,Ft&&re){X.length>0&&ot++;const J=bt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,qt,J.width,J.height)}for(let J=0;J<6;J++)if(Q){Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,dt[J].width,dt[J].height,Ct,pt,dt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,dt[J].width,dt[J].height,0,Ct,pt,dt[J].data);for(let ut=0;ut<X.length;ut++){const Dt=X[ut].image[J].image;Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Dt.width,Dt.height,Ct,pt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,qt,Dt.width,Dt.height,0,Ct,pt,Dt.data)}}else{Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,pt,dt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qt,Ct,pt,dt[J]);for(let ut=0;ut<X.length;ut++){const ct=X[ut];Ft?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Ct,pt,ct.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,qt,Ct,pt,ct.image[J])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),$.__version=K.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ht(I,w,z,Z,K,$){const vt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),ft=M(z.internalFormat,vt,at,z.colorSpace),$t=n.get(w),Q=n.get(z);if(Q.__renderTarget=w,!$t.__hasExternalTextures){const dt=Math.max(1,w.width>>$),wt=Math.max(1,w.height>>$);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,$,ft,dt,wt,w.depth,0,vt,at,null):e.texImage2D(K,$,ft,dt,wt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Xt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,Q.__webglTexture,0,Wt(w)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,Q.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(I,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const Z=w.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,$=_(w.stencilBuffer,K),vt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Wt(w);Xt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{const Z=w.textures;for(let K=0;K<Z.length;K++){const $=Z[K],vt=r.convert($.format,$.colorSpace),at=r.convert($.type),ft=M($.internalFormat,vt,at,$.colorSpace),$t=Wt(w);z&&Xt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,ft,w.width,w.height):Xt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,ft,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ft,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const K=Z.__webglTexture,$=Wt(w);if(w.depthTexture.format===_s)Xt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(w.depthTexture.format===Es)Xt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Et(I){const w=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const K=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),w.__depthDisposeCallback=K}w.__boundDepthTexture=Z}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(w.__webglFramebuffer,I)}else if(z){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),et(w.__webglDepthbuffer[Z],I,!1);else{const K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),et(w.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,w,z){const Z=n.get(I);w!==void 0&&ht(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Et(I)}function ae(I){const w=I.texture,z=n.get(I),Z=n.get(w);I.addEventListener("dispose",E);const K=I.textures,$=I.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ft=0;ft<w.mipmaps.length;ft++)z.__webglFramebuffer[at][ft]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ft=K.length;at<ft;at++){const $t=n.get(K[at]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Xt(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<K.length;at++){const ft=K[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const $t=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),dt=M(ft.internalFormat,$t,Q,ft.colorSpace,I.isXRRenderTarget===!0),wt=Wt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,dt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),et(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),At(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)ht(z.__webglFramebuffer[at][ft],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else ht(z.__webglFramebuffer[at],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=K.length;at<ft;at++){const $t=K[at],Q=n.get($t);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),At(i.TEXTURE_2D,$t),ht(z.__webglFramebuffer,I,$t,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),At(at,w),w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)ht(z.__webglFramebuffer[ft],I,w,i.COLOR_ATTACHMENT0,at,ft);else ht(z.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,at,0);m(w)&&p(at),e.unbindTexture()}I.depthBuffer&&Et(I)}function Ht(I){const w=I.textures;for(let z=0,Z=w.length;z<Z;z++){const K=w[z];if(m(K)){const $=x(I),vt=n.get(K).__webglTexture;e.bindTexture($,vt),p($),e.unbindTexture()}}}const ve=[],O=[];function nn(I){if(I.samples>0){if(Xt(I)===!1){const w=I.textures,z=I.width,Z=I.height;let K=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),at=w.length>1;if(at)for(let ft=0;ft<w.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<w.length;ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const $t=n.get(w[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,K,i.NEAREST),c===!0&&(ve.length=0,O.length=0,ve.push(i.COLOR_ATTACHMENT0+ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ve.push($),O.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<w.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const $t=n.get(w[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Wt(I){return Math.min(s.maxSamples,I.samples)}function Xt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function ce(I,w){const z=I.colorSpace,Z=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==ws&&z!==li&&(Yt.getTransfer(z)===ee?(Z!==tn||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=St,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Xt}function g_(i,t){function e(n,s=li){let r;const o=Yt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===ph)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===zc)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===tn)return i.RGBA;if(n===xh)return i.LUMINANCE;if(n===vh)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===yh)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Wc)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Qa||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===oc||n===ac||n===cc||n===lc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===vc||n===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===Mc||n===Sc||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class __ extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class he extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`;class M_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:v_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Uo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S_ extends As{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=new M_,m=e.getContextAttributes();let p=null,x=null;const M=[],_=[],b=new nt;let T=null;const E=new Qe;E.viewport=new ne;const A=new Qe;A.viewport=new ne;const S=[E,A],y=new __;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=M[q];return j===void 0&&(j=new ma,M[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=M[q];return j===void 0&&(j=new ma,M[q]=j),j.getGripSpace()},this.getHand=function(q){let j=M[q];return j===void 0&&(j=new ma,M[q]=j),j.getHandSpace()};function D(q){const j=_.indexOf(q.inputSource);if(j===-1)return;const ht=M[j];ht!==void 0&&(ht.update(q.inputSource,q.frame,l||o),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let q=0;q<M.length;q++){const j=_[q];j!==null&&(_[q]=null,M[q].disconnect(j))}P=null,L=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,x=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ni(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ht=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Es:_s,ht=m.stencil?Ss:mi);const Mt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ni(f.textureWidth,f.textureHeight,{format:tn,type:Zn,depthTexture:new Nh(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(q){for(let j=0;j<q.removed.length;j++){const ht=q.removed[j],et=_.indexOf(ht);et>=0&&(_[et]=null,M[et].disconnect(ht))}for(let j=0;j<q.added.length;j++){const ht=q.added[j];let et=_.indexOf(ht);if(et===-1){for(let Et=0;Et<M.length;Et++)if(Et>=_.length){_.push(ht),et=Et;break}else if(_[Et]===null){_[Et]=ht,et=Et;break}if(et===-1)break}const Mt=M[et];Mt&&Mt.connect(ht)}}const H=new R,Y=new R;function W(q,j,ht){H.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(ht.matrixWorld);const et=H.distanceTo(Y),Mt=j.projectionMatrix.elements,Et=ht.projectionMatrix.elements,St=Mt[14]/(Mt[10]-1),ae=Mt[14]/(Mt[10]+1),Ht=(Mt[9]+1)/Mt[5],ve=(Mt[9]-1)/Mt[5],O=(Mt[8]-1)/Mt[0],nn=(Et[8]+1)/Et[0],Wt=St*O,Xt=St*nn,Tt=et/(-O+nn),ce=Tt*-O;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ce),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const bt=St+Tt,I=ae+Tt,w=Wt-ce,z=Xt+(et-ce),Z=Ht*ae/I*bt,K=ve*ae/I*bt;q.projectionMatrix.makePerspective(w,z,Z,K,bt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ht=q.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),y.near=A.near=E.near=j,y.far=A.far=E.far=ht,(P!==y.near||L!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,L=y.far),E.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|A.layers.mask;const et=q.parent,Mt=y.cameras;it(y,et);for(let Et=0;Et<Mt.length;Et++)it(Mt[Et],et);Mt.length===2?W(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),rt(q,y,et)};function rt(q,j,ht){ht===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ar*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let mt=null;function At(q,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ht=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let et=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,et=!0);for(let Et=0;Et<ht.length;Et++){const St=ht[Et];let ae=null;if(d!==null)ae=d.getViewport(St);else{const ve=h.getViewSubImage(f,St);ae=ve.viewport,Et===0&&(t.setRenderTargetTextures(x,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(x))}let Ht=S[Et];Ht===void 0&&(Ht=new Qe,Ht.layers.enable(Et),Ht.viewport=new ne,S[Et]=Ht),Ht.matrix.fromArray(St.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(St.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ae.x,ae.y,ae.width,ae.height),Et===0&&(y.matrix.copy(Ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),et===!0&&y.cameras.push(Ht)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Et=h.getDepthInformation(ht[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,s.renderState)}}for(let ht=0;ht<M.length;ht++){const et=_[ht],Mt=M[ht];et!==null&&Mt!==void 0&&Mt.update(et,j,l||o)}mt&&mt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const kt=new Uh;kt.setAnimationLoop(At),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const bi=new Sn,E_=new Lt;function b_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,bi.copy(_),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function l(x,M){let _=s[x.id];_===void 0&&(g(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(x,b);const T=t.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function u(x){const M=h();x.__bindingPointIndex=M;const _=i.createBuffer(),b=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],_=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,E=_.length;T<E;T++){const A=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,y=A.length;S<y;S++){const P=A[S];if(d(P,T,S,b)===!0){const L=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let V=0;V<D.length;V++){const H=D[V],Y=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+U,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,_,b){const T=x.value,E=M+"_"+_;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const A=b[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return b[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(x){const M=x.uniforms;let _=0;const b=16;for(let E=0,A=M.length;E<A;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,P=S.length;y<P;y++){const L=S[y],D=Array.isArray(L.value)?L.value:[L.value];for(let U=0,V=D.length;U<V;U++){const H=D[U],Y=v(H),W=_%b,it=W%Y.boundary,rt=W+it;_+=it,rt!==0&&b-rt<Y.storage&&(_+=b-rt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Y.storage}}}const T=_%b;return T>0&&(_+=b-T),x.__size=_,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class w_{constructor(t={}){const{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=pi,this.toneMappingExposure=1;const _=this;let b=!1,T=0,E=0,A=null,S=-1,y=null;const P=new ne,L=new ne;let D=null;const U=new It(0);let V=0,H=e.width,Y=e.height,W=1,it=null,rt=null;const mt=new ne(0,0,H,Y),At=new ne(0,0,H,Y);let kt=!1;const q=new Do;let j=!1,ht=!1;const et=new Lt,Mt=new Lt,Et=new R,St=new ne,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ve(){return A===null?W:1}let O=n;function nn(C,F){return e.getContext(C,F)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lr}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const F="webgl2";if(O=nn(F,C),O===null)throw nn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Wt,Xt,Tt,ce,bt,I,w,z,Z,K,$,vt,at,ft,$t,Q,dt,wt,Ct,pt,qt,Ft,re,N;function ot(){Wt=new Ig(O),Wt.init(),Ft=new g_(O,Wt),Xt=new bg(O,Wt,t,Ft),Tt=new d_(O,Wt),Xt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ce=new Ug(O),bt=new j0,I=new m_(O,Wt,Tt,bt,Xt,Ft,ce),w=new wg(_),z=new Pg(_),Z=new Vd(O),re=new Sg(O,Z),K=new Lg(O,Z,ce,re),$=new Fg(O,K,Z,ce),Ct=new Ng(O,Xt,I),Q=new Tg(bt),vt=new K0(_,w,z,Wt,Xt,re,Q),at=new b_(_,bt),ft=new t_,$t=new o_(Wt),wt=new Mg(_,w,z,Tt,$,d,c),dt=new h_(_,$,Xt),N=new T_(O,ce,Xt,Tt),pt=new Eg(O,Wt,ce),qt=new Dg(O,Wt,ce),ce.programs=vt.programs,_.capabilities=Xt,_.extensions=Wt,_.properties=bt,_.renderLists=ft,_.shadowMap=dt,_.state=Tt,_.info=ce}ot();const X=new S_(_,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(H,Y,!1))},this.getSize=function(C){return C.set(H,Y)},this.setSize=function(C,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Y=F,e.width=Math.floor(C*W),e.height=Math.floor(F*W),G===!0&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(H*W,Y*W).floor()},this.setDrawingBufferSize=function(C,F,G){H=C,Y=F,W=G,e.width=Math.floor(C*G),e.height=Math.floor(F*G),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(mt)},this.setViewport=function(C,F,G,k){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,F,G,k),Tt.viewport(P.copy(mt).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(At)},this.setScissor=function(C,F,G,k){C.isVector4?At.set(C.x,C.y,C.z,C.w):At.set(C,F,G,k),Tt.scissor(L.copy(At).multiplyScalar(W).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(C){Tt.setScissorTest(kt=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(C=!0,F=!0,G=!0){let k=0;if(C){let B=!1;if(A!==null){const tt=A.texture.format;B=tt===Wc||tt===kc||tt===Io}if(B){const tt=A.texture.type,lt=tt===Zn||tt===mi||tt===or||tt===Ss||tt===Vc||tt===Hc,gt=wt.getClearColor(),_t=wt.getClearAlpha(),Rt=gt.r,Ut=gt.g,xt=gt.b;lt?(g[0]=Rt,g[1]=Ut,g[2]=xt,g[3]=_t,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Rt,v[1]=Ut,v[2]=xt,v[3]=_t,O.clearBufferiv(O.COLOR,0,v))}else k|=O.COLOR_BUFFER_BIT}F&&(k|=O.DEPTH_BUFFER_BIT),G&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),$t.dispose(),bt.dispose(),w.dispose(),z.dispose(),$.dispose(),re.dispose(),N.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",ol),X.removeEventListener("sessionend",al),xi.stop()};function J(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ce.autoReset,F=dt.enabled,G=dt.autoUpdate,k=dt.needsUpdate,B=dt.type;ot(),ce.autoReset=C,dt.enabled=F,dt.autoUpdate=G,dt.needsUpdate=k,dt.type=B}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Dt(C){const F=C.target;F.removeEventListener("dispose",Dt),pe(F)}function pe(C){Fe(C),bt.remove(C)}function Fe(C){const F=bt.get(C).programs;F!==void 0&&(F.forEach(function(G){vt.releaseProgram(G)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,G,k,B,tt){F===null&&(F=ae);const lt=B.isMesh&&B.matrixWorld.determinant()<0,gt=cf(C,F,G,k,B);Tt.setMaterial(k,lt);let _t=G.index,Rt=1;if(k.wireframe===!0){if(_t=K.getWireframeAttribute(G),_t===void 0)return;Rt=2}const Ut=G.drawRange,xt=G.attributes.position;let Zt=Ut.start*Rt,oe=(Ut.start+Ut.count)*Rt;tt!==null&&(Zt=Math.max(Zt,tt.start*Rt),oe=Math.min(oe,(tt.start+tt.count)*Rt)),_t!==null?(Zt=Math.max(Zt,0),oe=Math.min(oe,_t.count)):xt!=null&&(Zt=Math.max(Zt,0),oe=Math.min(oe,xt.count));const le=oe-Zt;if(le<0||le===1/0)return;re.setup(B,k,gt,G,_t);let $e,Jt=pt;if(_t!==null&&($e=Z.get(_t),Jt=qt,Jt.setIndex($e)),B.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*ve()),Jt.setMode(O.LINES)):Jt.setMode(O.TRIANGLES);else if(B.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),Tt.setLineWidth(yt*ve()),B.isLineSegments?Jt.setMode(O.LINES):B.isLineLoop?Jt.setMode(O.LINE_LOOP):Jt.setMode(O.LINE_STRIP)}else B.isPoints?Jt.setMode(O.POINTS):B.isSprite&&Jt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Jt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const yt=B._multiDrawStarts,Un=B._multiDrawCounts,Kt=B._multiDrawCount,fn=_t?Z.get(_t).bytesPerElement:1,Bi=bt.get(k).currentProgram.getUniforms();for(let Je=0;Je<Kt;Je++)Bi.setValue(O,"_gl_DrawID",Je),Jt.render(yt[Je]/fn,Un[Je])}else if(B.isInstancedMesh)Jt.renderInstances(Zt,le,B.count);else if(G.isInstancedBufferGeometry){const yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Un=Math.min(G.instanceCount,yt);Jt.renderInstances(Zt,le,Un)}else Jt.render(Zt,le)};function Qt(C,F,G){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=Ge,C.needsUpdate=!0,pr(C,F,G),C.side=In,C.needsUpdate=!0,pr(C,F,G),C.side=Cn):pr(C,F,G)}this.compile=function(C,F,G=null){G===null&&(G=C),p=$t.get(G),p.init(F),M.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==G&&C.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const k=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const tt=B.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];Qt(gt,G,B),k.add(gt)}else Qt(tt,G,B),k.add(tt)}),M.pop(),p=null,k},this.compileAsync=function(C,F,G=null){const k=this.compile(C,F,G);return new Promise(B=>{function tt(){if(k.forEach(function(lt){bt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){B(C);return}setTimeout(tt,10)}Wt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let hn=null;function Dn(C){hn&&hn(C)}function ol(){xi.stop()}function al(){xi.start()}const xi=new Uh;xi.setAnimationLoop(Dn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(C){hn=C,X.setAnimationLoop(C),C===null?xi.stop():xi.start()},X.addEventListener("sessionstart",ol),X.addEventListener("sessionend",al),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,F,A),p=$t.get(C,M.length),p.init(F),M.push(p),Mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Mt),ht=this.localClippingEnabled,j=Q.init(this.clippingPlanes,ht),m=ft.get(C,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const tt=_.xr.getDepthSensingMesh();tt!==null&&Ho(tt,F,-1/0,_.sortObjects)}Ho(C,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,rt),Ht=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ht&&wt.addToRenderList(m,C),this.info.render.frame++,j===!0&&Q.beginShadows();const G=p.state.shadowsArray;dt.render(G,C,F),j===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const tt=F.cameras;if(B.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];ll(k,B,C,_t)}Ht&&wt.render(C);for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];cl(m,C,_t,_t.viewport)}}else B.length>0&&ll(k,B,C,F),Ht&&wt.render(C),cl(m,C,F);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,F),re.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&Q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ho(C,F,G,k){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){k&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const lt=$.update(C),gt=C.material;gt.visible&&m.push(C,lt,gt,G,St.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const lt=$.update(C),gt=C.material;if(k&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),St.copy(lt.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(gt)){const _t=lt.groups;for(let Rt=0,Ut=_t.length;Rt<Ut;Rt++){const xt=_t[Rt],Zt=gt[xt.materialIndex];Zt&&Zt.visible&&m.push(C,lt,Zt,G,St.z,xt)}}else gt.visible&&m.push(C,lt,gt,G,St.z,null)}}const tt=C.children;for(let lt=0,gt=tt.length;lt<gt;lt++)Ho(tt[lt],F,G,k)}function cl(C,F,G,k){const B=C.opaque,tt=C.transmissive,lt=C.transparent;p.setupLightsView(G),j===!0&&Q.setGlobalState(_.clippingPlanes,G),k&&Tt.viewport(P.copy(k)),B.length>0&&dr(B,F,G),tt.length>0&&dr(tt,F,G),lt.length>0&&dr(lt,F,G),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ll(C,F,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ni(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?ur:Zn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],lt=k.viewport||P;tt.setSize(lt.z,lt.w);const gt=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor(U),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&wt.render(G);const _t=_.toneMapping;_.toneMapping=pi;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),j===!0&&Q.setGlobalState(_.clippingPlanes,k),dr(C,G,k),I.updateMultisampleRenderTarget(tt),I.updateRenderTargetMipmap(tt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,Zt=F.length;xt<Zt;xt++){const oe=F[xt],le=oe.object,$e=oe.geometry,Jt=oe.material,yt=oe.group;if(Jt.side===Cn&&le.layers.test(k.layers)){const Un=Jt.side;Jt.side=Ge,Jt.needsUpdate=!0,ul(le,G,k,$e,Jt,yt),Jt.side=Un,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(I.updateMultisampleRenderTarget(tt),I.updateRenderTargetMipmap(tt))}_.setRenderTarget(gt),_.setClearColor(U,V),Rt!==void 0&&(k.viewport=Rt),_.toneMapping=_t}function dr(C,F,G){const k=F.isScene===!0?F.overrideMaterial:null;for(let B=0,tt=C.length;B<tt;B++){const lt=C[B],gt=lt.object,_t=lt.geometry,Rt=k===null?lt.material:k,Ut=lt.group;gt.layers.test(G.layers)&&ul(gt,F,G,_t,Rt,Ut)}}function ul(C,F,G,k,B,tt){C.onBeforeRender(_,F,G,k,B,tt),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(_,F,G,k,C,tt),B.transparent===!0&&B.side===Cn&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,_.renderBufferDirect(G,F,k,B,C,tt),B.side=In,B.needsUpdate=!0,_.renderBufferDirect(G,F,k,B,C,tt),B.side=Cn):_.renderBufferDirect(G,F,k,B,C,tt),C.onAfterRender(_,F,G,k,B,tt)}function pr(C,F,G){F.isScene!==!0&&(F=ae);const k=bt.get(C),B=p.state.lights,tt=p.state.shadowsArray,lt=B.state.version,gt=vt.getParameters(C,B.state,tt,F,G),_t=vt.getProgramCacheKey(gt);let Rt=k.programs;k.environment=C.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(C.isMeshStandardMaterial?z:w).get(C.envMap||k.environment),k.envMapRotation=k.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Rt===void 0&&(C.addEventListener("dispose",Dt),Rt=new Map,k.programs=Rt);let Ut=Rt.get(_t);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===lt)return fl(C,gt),Ut}else gt.uniforms=vt.getUniforms(C),C.onBeforeCompile(gt,_),Ut=vt.acquireProgram(gt,_t),Rt.set(_t,Ut),k.uniforms=gt.uniforms;const xt=k.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(xt.clippingPlanes=Q.uniform),fl(C,gt),k.needsLights=uf(C),k.lightsStateVersion=lt,k.needsLights&&(xt.ambientLightColor.value=B.state.ambient,xt.lightProbe.value=B.state.probe,xt.directionalLights.value=B.state.directional,xt.directionalLightShadows.value=B.state.directionalShadow,xt.spotLights.value=B.state.spot,xt.spotLightShadows.value=B.state.spotShadow,xt.rectAreaLights.value=B.state.rectArea,xt.ltc_1.value=B.state.rectAreaLTC1,xt.ltc_2.value=B.state.rectAreaLTC2,xt.pointLights.value=B.state.point,xt.pointLightShadows.value=B.state.pointShadow,xt.hemisphereLights.value=B.state.hemi,xt.directionalShadowMap.value=B.state.directionalShadowMap,xt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xt.spotShadowMap.value=B.state.spotShadowMap,xt.spotLightMatrix.value=B.state.spotLightMatrix,xt.spotLightMap.value=B.state.spotLightMap,xt.pointShadowMap.value=B.state.pointShadowMap,xt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function hl(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=xo.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function fl(C,F){const G=bt.get(C);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function cf(C,F,G,k,B){F.isScene!==!0&&(F=ae),I.resetTextureUnits();const tt=F.fog,lt=k.isMeshStandardMaterial?F.environment:null,gt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ws,_t=(k.isMeshStandardMaterial?z:w).get(k.envMap||lt),Rt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ut=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xt=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let le=pi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(le=_.toneMapping);const $e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=$e!==void 0?$e.length:0,yt=bt.get(k),Un=p.state.lights;if(j===!0&&(ht===!0||C!==y)){const sn=C===y&&k.id===S;Q.setState(k,C,sn)}let Kt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Un.state.version||yt.outputColorSpace!==gt||B.isBatchedMesh&&yt.batching===!1||!B.isBatchedMesh&&yt.batching===!0||B.isBatchedMesh&&yt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&yt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&yt.instancing===!1||!B.isInstancedMesh&&yt.instancing===!0||B.isSkinnedMesh&&yt.skinning===!1||!B.isSkinnedMesh&&yt.skinning===!0||B.isInstancedMesh&&yt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&yt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&yt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&yt.instancingMorph===!1&&B.morphTexture!==null||yt.envMap!==_t||k.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Rt||yt.vertexTangents!==Ut||yt.morphTargets!==xt||yt.morphNormals!==Zt||yt.morphColors!==oe||yt.toneMapping!==le||yt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,yt.__version=k.version);let fn=yt.currentProgram;Kt===!0&&(fn=pr(k,F,B));let Bi=!1,Je=!1,Ps=!1;const ue=fn.getUniforms(),Tn=yt.uniforms;if(Tt.useProgram(fn.program)&&(Bi=!0,Je=!0,Ps=!0),k.id!==S&&(S=k.id,Je=!0),Bi||y!==C){Tt.buffers.depth.getReversed()?(et.copy(C.projectionMatrix),md(et),gd(et),ue.setValue(O,"projectionMatrix",et)):ue.setValue(O,"projectionMatrix",C.projectionMatrix),ue.setValue(O,"viewMatrix",C.matrixWorldInverse);const Qn=ue.map.cameraPosition;Qn!==void 0&&Qn.setValue(O,Et.setFromMatrixPosition(C.matrixWorld)),Xt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ue.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Je=!0,Ps=!0)}if(B.isSkinnedMesh){ue.setOptional(O,B,"bindMatrix"),ue.setOptional(O,B,"bindMatrixInverse");const sn=B.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),ue.setValue(O,"boneTexture",sn.boneTexture,I))}B.isBatchedMesh&&(ue.setOptional(O,B,"batchingTexture"),ue.setValue(O,"batchingTexture",B._matricesTexture,I),ue.setOptional(O,B,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",B._indirectTexture,I),ue.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",B._colorsTexture,I));const Is=G.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Ct.update(B,G,fn),(Je||yt.receiveShadow!==B.receiveShadow)&&(yt.receiveShadow=B.receiveShadow,ue.setValue(O,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Tn.envMap.value=_t,Tn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(Tn.envMapIntensity.value=F.environmentIntensity),Je&&(ue.setValue(O,"toneMappingExposure",_.toneMappingExposure),yt.needsLights&&lf(Tn,Ps),tt&&k.fog===!0&&at.refreshFogUniforms(Tn,tt),at.refreshMaterialUniforms(Tn,k,W,Y,p.state.transmissionRenderTarget[C.id]),xo.upload(O,hl(yt),Tn,I)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xo.upload(O,hl(yt),Tn,I),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ue.setValue(O,"center",B.center),ue.setValue(O,"modelViewMatrix",B.modelViewMatrix),ue.setValue(O,"normalMatrix",B.normalMatrix),ue.setValue(O,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const sn=k.uniformsGroups;for(let Qn=0,ti=sn.length;Qn<ti;Qn++){const dl=sn[Qn];N.update(dl,fn),N.bind(dl,fn)}}return fn}function lf(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function uf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,F,G){bt.get(C.texture).__webglTexture=F,bt.get(C.depthTexture).__webglTexture=G;const k=bt.get(C);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const G=bt.get(C);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,G=0){A=C,T=F,E=G;let k=!0,B=null,tt=!1,lt=!1;if(C){const _t=bt.get(C);if(_t.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(_t.__hasExternalTextures)I.rebindTextures(C,bt.get(C.texture).__webglTexture,bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xt=C.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&bt.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Rt=C.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Ut=bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?B=Ut[F][G]:B=Ut[F],tt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?B=bt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[G]:B=Ut,P.copy(C.viewport),L.copy(C.scissor),D=C.scissorTest}else P.copy(mt).multiplyScalar(W).floor(),L.copy(At).multiplyScalar(W).floor(),D=kt;if(Tt.bindFramebuffer(O.FRAMEBUFFER,B)&&k&&Tt.drawBuffers(C,B),Tt.viewport(P),Tt.scissor(L),Tt.setScissorTest(D),tt){const _t=bt.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,G)}else if(lt){const _t=bt.get(C.texture),Rt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Rt)}S=-1},this.readRenderTargetPixels=function(C,F,G,k,B,tt,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Tt.bindFramebuffer(O.FRAMEBUFFER,gt);try{const _t=C.texture,Rt=_t.format,Ut=_t.type;if(!Xt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-k&&G>=0&&G<=C.height-B&&O.readPixels(F,G,k,B,Ft.convert(Rt),Ft.convert(Ut),tt)}finally{const _t=A!==null?bt.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(C,F,G,k,B,tt,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=C.texture,Rt=_t.format,Ut=_t.type;if(!Xt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-k&&G>=0&&G<=C.height-B){Tt.bindFramebuffer(O.FRAMEBUFFER,gt);const xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,tt.byteLength,O.STREAM_READ),O.readPixels(F,G,k,B,Ft.convert(Rt),Ft.convert(Ut),0);const Zt=A!==null?bt.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,Zt);const oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pd(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,tt),O.deleteBuffer(xt),O.deleteSync(oe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,F=null,G=0){C.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const k=Math.pow(2,-G),B=Math.floor(C.image.width*k),tt=Math.floor(C.image.height*k),lt=F!==null?F.x:0,gt=F!==null?F.y:0;I.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,lt,gt,B,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(C,F,G=null,k=null,B=0){C.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1],F=arguments[2],B=arguments[3]||0,G=null);let tt,lt,gt,_t,Rt,Ut,xt,Zt,oe;const le=C.isCompressedTexture?C.mipmaps[B]:C.image;G!==null?(tt=G.max.x-G.min.x,lt=G.max.y-G.min.y,gt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Rt=G.min.y,Ut=G.isBox3?G.min.z:0):(tt=le.width,lt=le.height,gt=le.depth||1,_t=0,Rt=0,Ut=0),k!==null?(xt=k.x,Zt=k.y,oe=k.z):(xt=0,Zt=0,oe=0);const $e=Ft.convert(F.format),Jt=Ft.convert(F.type);let yt;F.isData3DTexture?(I.setTexture3D(F,0),yt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),yt=O.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),yt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Un=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Bi=O.getParameter(O.UNPACK_SKIP_ROWS),Je=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_t),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ut);const Ps=C.isDataArrayTexture||C.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Tn=bt.get(C),Is=bt.get(F),sn=bt.get(Tn.__renderTarget),Qn=bt.get(Is.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,sn.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<gt;ti++)Ps&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(C).__webglTexture,B,Ut+ti),C.isDepthTexture?(ue&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.get(F).__webglTexture,B,oe+ti),O.blitFramebuffer(_t,Rt,tt,lt,xt,Zt,tt,lt,O.DEPTH_BUFFER_BIT,O.NEAREST)):ue?O.copyTexSubImage3D(yt,B,xt,Zt,oe+ti,_t,Rt,tt,lt):O.copyTexSubImage2D(yt,B,xt,Zt,oe+ti,_t,Rt,tt,lt);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(yt,B,xt,Zt,oe,tt,lt,gt,$e,Jt,le.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,B,xt,Zt,oe,tt,lt,gt,$e,le.data):O.texSubImage3D(yt,B,xt,Zt,oe,tt,lt,gt,$e,Jt,le):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,xt,Zt,tt,lt,$e,Jt,le.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,xt,Zt,le.width,le.height,$e,le.data):O.texSubImage2D(O.TEXTURE_2D,B,xt,Zt,tt,lt,$e,Jt,le);O.pixelStorei(O.UNPACK_ROW_LENGTH,Un),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),B===0&&F.generateMipmaps&&O.generateMipmap(yt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(C,F,G=null,k=null,B=0){return C.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,C=arguments[2],F=arguments[3],B=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,F,G,k,B)},this.initRenderTarget=function(C){bt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Tt.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,Tt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class A_ extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class C_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new R;class To{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yc extends _i{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Fs=new R,Qi=new R,ts=new R,es=new nt,Bs=new nt,Vh=new Lt,Fr=new R,Os=new R,Br=new R,hu=new nt,ga=new nt,fu=new nt;class Hh extends Ne{constructor(t=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new de;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new C_(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new To(n,3,0,!1)),ji.setAttribute("uv",new To(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Vh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Or(Fr.set(-.5,-.5,0),ts,o,Qi,s,r),Or(Os.set(.5,-.5,0),ts,o,Qi,s,r),Or(Br.set(.5,.5,0),ts,o,Qi,s,r),hu.set(0,0),ga.set(1,0),fu.set(1,1);let a=t.ray.intersectTriangle(Fr,Os,Br,!1,Fs);if(a===null&&(Or(Os.set(-.5,.5,0),ts,o,Qi,s,r),ga.set(0,1),a=t.ray.intersectTriangle(Fr,Br,Os,!1,Fs),a===null))return;const c=t.ray.origin.distanceTo(Fs);c<t.near||c>t.far||e.push({distance:c,point:Fs.clone(),uv:Ie.getInterpolation(Fs,Fr,Os,Br,hu,ga,fu,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Or(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Bs.x=r*es.x-s*es.y,Bs.y=s*es.x+r*es.y):Bs.copy(es),i.copy(t),i.x+=Bs.x,i.y+=Bs.y,i.applyMatrix4(Vh)}class vo extends ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=en,u=en,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class du extends xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new Lt,pu=new Lt,zr=[],mu=new ye,R_=new Lt,zs=new jt,Vs=new un;class P_ extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new du(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,R_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),mu.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(mu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Vs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),t.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),pu.multiplyMatrices(n,ns),zs.matrixWorld=pu,zs.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=r,c.object=this,e.push(c)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new du(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vo(new Float32Array(s*this.count),s,this.count,Gc,cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function _a(i,t){return i-t}function I_(i,t){return i.z-t.z}function L_(i,t){return t.z-i.z}class D_{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const Ze=new Lt,U_=new It(1,1,1),xa=new Do,Vr=new ye,Ti=new un,Hs=new R,gu=new R,N_=new R,va=new D_,ze=new jt,Hr=[];function F_(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function wi(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class B_ extends jt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,s){super(new de,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new vo(e,t,t,tn,cn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new vo(e,t,t,Io,mi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new vo(e,t,t,tn,cn);n.colorSpace=Yt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),h=new xe(u,c,l);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new xe(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ye);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ze),this.getBoundingBoxAt(r,Vr).applyMatrix4(Ze),t.union(Vr)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ze),this.getBoundingSphereAt(r,Ti).applyMatrix4(Ze),t.union(Ti)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(_a),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Ze.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(U_.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(_a),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const h=e.getAttribute(u),f=n.getAttribute(u);F_(h,f,c);const d=h.itemSize;for(let g=h.count,v=l;g<v;g++){const m=c+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(s){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)r.setX(u+f,c+o.getX(f));for(let f=o.count,d=h;f<d;f++)r.setX(u+f,c);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=l,d=r.index,g=d.array,v=t-h;for(let m=u;m<u+f;m++)g[m]=g[m]+v;d.array.copyWithin(e,u,u+f),d.addUpdateRange(e,f),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:u,reservedVertexCount:h}=l,f=r.attributes;for(const d in f){const g=f[d],{array:v,itemSize:m}=g;v.copyWithin(t*m,u*m,(u+h)*m),g.addUpdateRange(t*m,h*m)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new ye,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let u=c;o&&(u=o.getX(u)),r.expandByPoint(Hs.fromBufferAttribute(a,u))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new un;this.getBoundingBoxAt(t,Vr),Vr.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=s.start,u=s.start+s.count;l<u;l++){let h=l;o&&(h=o.getX(h)),Hs.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(Hs))}r.radius=Math.sqrt(c),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._instanceInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,s=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=s.length||s[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(_a);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);wi(this._multiDrawCounts,s),wi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),wi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),wi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),wi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new de,this._initializeGeometry(r));const o=this.geometry;r.index&&wi(r.index.array,o.index.array);for(const a in r.attributes)wi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;ze.material=this.material,ze.geometry.index=o.index,ze.geometry.attributes=o.attributes,ze.geometry.boundingBox===null&&(ze.geometry.boundingBox=new ye),ze.geometry.boundingSphere===null&&(ze.geometry.boundingSphere=new un);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=s[l];ze.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,ze.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,ze.geometry.boundingBox),this.getBoundingSphereAt(l,ze.geometry.boundingSphere),ze.raycast(t,Hr);for(let h=0,f=Hr.length;h<f;h++){const d=Hr[h];d.object=this,d.batchId=a,e.push(d)}Hr.length=0}ze.material=null,ze.geometry.index=null,ze.geometry.attributes={},ze.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data;f&&(Ze.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),xa.setFromProjectionMatrix(Ze,t.coordinateSystem));let v=0;if(this.sortObjects){Ze.copy(this.matrixWorld).invert(),Hs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ze),gu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ze);for(let x=0,M=c.length;x<M;x++)if(c[x].visible&&c[x].active){const _=c[x].geometryIndex;this.getMatrixAt(x,Ze),this.getBoundingSphereAt(_,Ti).applyMatrix4(Ze);let b=!1;if(f&&(b=!xa.intersectsSphere(Ti)),!b){const T=h[_],E=N_.subVectors(Ti.center,Hs).dot(gu);va.push(T.start,T.count,E,x)}}const m=va.list,p=this.customSort;p===null?m.sort(r.transparent?L_:I_):p.call(this,m,n);for(let x=0,M=m.length;x<M;x++){const _=m[x];l[v]=_.start*a,u[v]=_.count,g[v]=_.index,v++}va.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const x=c[m].geometryIndex;let M=!1;if(f&&(this.getMatrixAt(m,Ze),this.getBoundingSphereAt(x,Ti).applyMatrix4(Ze),M=!xa.intersectsSphere(Ti)),!M){const _=h[x];l[v]=_.start*a,u[v]=_.count,g[v]=m,v++}}d.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class O_ extends _i{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new R,Ao=new R,_u=new Lt,Gs=new hr,Gr=new un,ya=new R,xu=new R;class Fo extends Ne{constructor(t=new de,e=new O_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wo.fromBufferAttribute(e,s-1),Ao.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wo.distanceTo(Ao);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;_u.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(_u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=u.getX(v),x=u.getX(v+1),M=kr(this,t,Gs,c,p,x);M&&e.push(M)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=kr(this,t,Gs,c,v,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=kr(this,t,Gs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=kr(this,t,Gs,c,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),Ao.fromBufferAttribute(o,r),e.distanceSqToSegment(wo,Ao,ya,xu)>n)return;ya.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ya);if(!(c<t.near||c>t.far))return{distance:c,point:xu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const vu=new R,yu=new R;class Gh extends Fo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vu.fromBufferAttribute(e,s),yu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vu.distanceTo(yu);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kh extends Fo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class $c extends _i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mu=new Lt,Ac=new hr,Wr=new un,Xr=new R;class Bo extends Ne{constructor(t=new de,e=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;Mu.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(Mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Xr.fromBufferAttribute(h,m),Su(Xr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Xr.fromBufferAttribute(h,g),Su(Xr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Su(i,t,e,n,s,r,o){const a=Ac.distanceSqToPoint(i);if(a<e){const c=new R;Ac.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wh extends ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new Lt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zc extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class z_ extends Zc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const qr=new R,Ma=new Jc,Sa=new Jc,Ea=new Jc;class V_ extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),l=qr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ma.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),Sa.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),Ea.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Sa.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ea.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Ma.calc(c),Sa.calc(c),Ea.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Eu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function H_(i,t){const e=1-i;return e*e*t}function G_(i,t){return 2*(1-i)*i*t}function k_(i,t){return i*i*t}function nr(i,t,e,n){return H_(i,t)+G_(i,e)+k_(i,n)}function W_(i,t){const e=1-i;return e*e*e*t}function X_(i,t){const e=1-i;return 3*e*e*i*t}function q_(i,t){return 3*(1-i)*i*i*t}function Y_(i,t){return i*i*i*t}function ir(i,t,e,n,s){return W_(i,t)+X_(i,e)+q_(i,n)+Y_(i,s)}class Xh extends Ln{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,s.x,r.x,o.x,a.x),ir(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $_ extends Ln{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(t,s.x,r.x,o.x,a.x),ir(t,s.y,r.y,o.y,a.y),ir(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Ln{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z_ extends Ln{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends Ln{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,s.x,r.x,o.x),nr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends Ln{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(t,s.x,r.x,o.x),nr(t,s.y,r.y,o.y),nr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,c.x,l.x,u.x,h.x),Eu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var bu=Object.freeze({__proto__:null,ArcCurve:z_,CatmullRomCurve3:V_,CubicBezierCurve:Xh,CubicBezierCurve3:$_,EllipseCurve:Zc,LineCurve:qh,LineCurve3:Z_,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:J_,SplineCurve:$h});class K_ extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bu[s.type]().fromJSON(s))}return this}}class j_ extends K_{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Xh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $h(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Zc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kc extends de{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new R,f=new nt,d=new R,g=new R,v=new R;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){const M=n+x*u*s,_=Math.sin(M),b=Math.cos(M);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*_,h.y=t[T].y,h.z=t[T].x*b,o.push(h.x,h.y,h.z),f.x=x/e,f.y=T/(t.length-1),a.push(f.x,f.y);const E=c[3*T+0]*_,A=c[3*T+1],S=c[3*T+0]*b;l.push(E,A,S)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const _=M+x*t.length,b=_,T=_+t.length,E=_+t.length+1,A=_+1;r.push(b,T,A),r.push(E,A,T)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.points,t.segments,t.phiStart,t.phiLength)}}class ui extends Kc{constructor(t=1,e=1,n=4,s=8){const r=new j_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ui(t.radius,t.length,t.capSegments,t.radialSegments)}}class jc extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,u=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ie extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function x(){const _=new R,b=new R;let T=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const S=[],y=A/r,P=y*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,U=D*c+a,V=Math.sin(U),H=Math.cos(U);b.x=P*V,b.y=-y*n+m,b.z=P*H,h.push(b.x,b.y,b.z),_.set(V,E,H).normalize(),f.push(_.x,_.y,_.z),d.push(D,1-y),S.push(g++)}v.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const y=v[S][A],P=v[S+1][A],L=v[S+1][A+1],D=v[S][A+1];(t>0||S!==0)&&(u.push(y,P,D),T+=3),(e>0||S!==r-1)&&(u.push(P,L,D),T+=3)}l.addGroup(p,T,0),p+=T}function M(_){const b=g,T=new nt,E=new R;let A=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let L=0;L<=s;L++){const U=L/s*c+a,V=Math.cos(U),H=Math.sin(U);E.x=S*H,E.y=m*y,E.z=S*V,h.push(E.x,E.y,E.z),f.push(0,y,0),T.x=V*.5+.5,T.y=H*.5*y+.5,d.push(T.x,T.y),g++}for(let L=0;L<s;L++){const D=b+L,U=P+L;_===!0?u.push(U,U+1,D):u.push(U+1,U,D),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xn extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new xn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fr extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new R,_=new R,b=new R;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],_),d(e[T+2],b),c(M,_,b,x)}function c(x,M,_,b){const T=b+1,E=[];for(let A=0;A<=T;A++){E[A]=[];const S=x.clone().lerp(_,A/T),y=M.clone().lerp(_,A/T),P=T-A;for(let L=0;L<=P;L++)L===0&&A===T?E[A][L]=S:E[A][L]=S.clone().lerp(y,L/P)}for(let A=0;A<T;A++)for(let S=0;S<2*(T-A)-1;S++){const y=Math.floor(S/2);S%2===0?(f(E[A][y+1]),f(E[A+1][y]),f(E[A][y])):(f(E[A][y+1]),f(E[A+1][y+1]),f(E[A+1][y]))}}function l(x){const M=new R;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(x),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function u(){const x=new R;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const _=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(_,1-b)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const M=o[x+0],_=o[x+2],b=o[x+4],T=Math.max(M,_,b),E=Math.min(M,_,b);T>.9&&E<.1&&(M<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,M){const _=x*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const x=new R,M=new R,_=new R,b=new R,T=new nt,E=new nt,A=new nt;for(let S=0,y=0;S<r.length;S+=9,y+=6){x.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),b.copy(x).add(M).add(_).divideScalar(3);const P=m(b);v(T,y+0,x,P),v(E,y+2,M,P),v(A,y+4,_,P)}}function v(x,M,_,b){b<0&&x.x===1&&(o[M]=x.x-1),_.x===0&&_.z===0&&(o[M]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.vertices,t.indices,t.radius,t.details)}}class Pn extends fr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pn(t.radius,t.detail)}}class Fi extends fr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fi(t.radius,t.detail)}}class Gt extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new R,f=new R,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const T=b/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(T+_,1-M),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=u[p][x+1],_=u[p][x],b=u[p+1][x],T=u[p+1][x+1];(p!==0||o>0)&&d.push(M,_,T),(p!==n-1||c<Math.PI)&&d.push(_,b,T)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oo extends fr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class Qc extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new R,h=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hi extends _i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zh extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ba=new Lt,Tu=new R,wu=new R;class Q_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Au=new Lt,ks=new R,Ta=new R;class tx extends Q_{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(ks),Ta.copy(n.position),Ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ta),n.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}class Jh extends Zh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ex extends Zh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cu(){return performance.now()}const Ru=new R,Yr=new R;class Kn{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ru.subVectors(t,this.start),Yr.subVectors(this.end,this.start);const n=Yr.dot(Yr);let r=Yr.dot(Ru)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lr);function Kh(i){let t=i>>>0;const e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:e,range:(n,s)=>n+e()*(s-n),int:(n,s)=>Math.floor(n+e()*(s-n+1)),pick:n=>n[Math.floor(e()*n.length)],chance:n=>e()<n}}function jh(){return Math.floor(Math.random()*4294967295)}const ix=[{id:"desert",label:"Desert World",shape:"dunes",noiseFrequency:1.6,amplitude:.09,colorStops:[[0,"#e8b06a"],[.35,"#d99a52"],[.6,"#c27e3c"],[.82,"#8f5a2e"]],liquid:null,liquidClass:null,creature:{count:[4,6],prefixes:["Dune","Sand","Mirage","Sirocco"],suffixes:["Strider","Loper","Stilt","Skimmer"]},atmosphere:"#e8a85f",particles:{color:"#e8c890",count:90,size:.5,height:4},props:[{builder:"cactus",count:60,minE:.2,maxE:.75},{builder:"rock",count:45,minE:0,maxE:1,tint:"#a8784a"},{builder:"dryShrub",count:40,minE:.15,maxE:.7}],discovery:{color:"#ffce54",shape:"shard",prefixes:["Sun","Dune","Mirage","Ember","Scorch","Amber"],suffixes:["Shard","Rose","Relic","Fossil","Idol","Geode"]}},{id:"ocean",label:"Ocean World",shape:"smooth",noiseFrequency:1.4,amplitude:.12,colorStops:[[0,"#2b6a8f"],[.45,"#5a93a8"],[.54,"#e8d9a0"],[.62,"#7fc26a"],[.8,"#4a8f4f"],[.92,"#8a9a8f"]],liquid:{level:.54,color:"#1d7fd6",opacity:.78,basin:1.6,emissive:"#0a3a6a",emissiveIntensity:.25},liquidClass:"swim",creature:{count:[4,6],prefixes:["Tide","Reef","Salt","Pearl"],suffixes:["Scuttler","Pincher","Sidler","Snipper"]},atmosphere:"#7fc8ff",particles:null,props:[{builder:"palm",count:36,minE:.57,maxE:.78},{builder:"coral",count:40,minE:.3,maxE:.5},{builder:"rock",count:25,minE:.6,maxE:1,tint:"#9aa8a0"}],discovery:{color:"#aef4ff",shape:"pearl",prefixes:["Tide","Pearl","Abyss","Coral","Brine","Foam"],suffixes:["Heart","Shell","Drop","Bloom","Charm","Echo"]}},{id:"toxic",label:"Toxic World",shape:"smooth",noiseFrequency:1.8,amplitude:.1,colorStops:[[0,"#3a4a1d"],[.46,"#55652a"],[.68,"#6b5a7d"],[.88,"#4a3a5d"]],liquid:{level:.46,color:"#9ef01a",opacity:.85,basin:1.6,emissive:"#6abf0f",emissiveIntensity:.7},liquidClass:"hazard",creature:{count:[3,5],prefixes:["Bog","Sludge","Venom","Murk"],suffixes:["Slug","Crawler","Ooze","Lurker"]},atmosphere:"#a8f01a",particles:{color:"#c6ff4f",count:140,size:.45,height:6},props:[{builder:"vent",count:30,minE:.5,maxE:.9},{builder:"tentacle",count:40,minE:.48,maxE:.85},{builder:"spikeRock",count:35,minE:.5,maxE:1,tint:"#5d4a6b"}],discovery:{color:"#c6ff4f",shape:"orb",prefixes:["Venom","Spore","Blight","Miasma","Sludge","Plague"],suffixes:["Bloom","Sac","Core","Pod","Cyst","Gland"]}},{id:"fairy",label:"Fairy World",shape:"gentle",noiseFrequency:1.5,amplitude:.07,colorStops:[[0,"#7fb88f"],[.5,"#9ad5a0"],[.68,"#c9a0e8"],[.86,"#f3d7f7"]],liquid:{level:.48,color:"#ff9ad5",opacity:.7,basin:3,emissive:"#d65aa0",emissiveIntensity:.4},liquidClass:"swim",creature:{count:[5,7],prefixes:["Glimmer","Dusk","Petal","Moon"],suffixes:["Moth","Flit","Wing","Dancer"]},atmosphere:"#f0a6ff",particles:{color:"#ffd6fa",count:220,size:.55,height:7},props:[{builder:"fairyTree",count:45,minE:.5,maxE:.85},{builder:"glowFlower",count:70,minE:.5,maxE:.9},{builder:"smallMushroom",count:45,minE:.5,maxE:.8,glow:"#ff9ad5"}],discovery:{color:"#ffb8f0",shape:"star",prefixes:["Wisp","Dream","Glimmer","Pixie","Moon","Dawn"],suffixes:["Petal","Lantern","Tear","Bell","Crown","Feather"]}},{id:"ice",label:"Frozen World",shape:"ridged",noiseFrequency:1.7,amplitude:.14,colorStops:[[0,"#7fb6d9"],[.42,"#b8e0f0"],[.6,"#dff3fb"],[.85,"#ffffff"]],liquid:{level:.42,color:"#9fd8ef",opacity:.9,emissive:"#3a6a8f",emissiveIntensity:.15},liquidClass:"solid",creature:{count:[4,6],prefixes:["Frost","Snow","Glacier","Polar"],suffixes:["Waddler","Hopper","Puff","Toddler"]},atmosphere:"#bfe9ff",particles:{color:"#ffffff",count:260,size:.4,height:8},props:[{builder:"iceSpike",count:50,minE:.45,maxE:1},{builder:"snowPine",count:40,minE:.44,maxE:.75},{builder:"crystal",count:25,minE:.5,maxE:.95,tint:"#bfe9ff"}],discovery:{color:"#bfe9ff",shape:"gem",prefixes:["Frost","Glacier","Aurora","Rime","Polar","Hail"],suffixes:["Core","Prism","Sliver","Bloom","Tear","Lens"]}},{id:"lava",label:"Volcanic World",shape:"ridged",noiseFrequency:1.8,amplitude:.13,colorStops:[[0,"#574343"],[.4,"#3a2f2f"],[.7,"#2b2222"],[.9,"#1c1616"]],liquid:{level:.4,color:"#ff5a1f",opacity:1,emissive:"#ff6a00",emissiveIntensity:1.6},liquidClass:"hazard",creature:{count:[3,5],prefixes:["Cinder","Magma","Ash","Coal"],suffixes:["Beetle","Plodder","Shellback","Creeper"]},atmosphere:"#ff7a3f",particles:{color:"#ffae4f",count:160,size:.5,height:7},props:[{builder:"obsidian",count:50,minE:.45,maxE:1},{builder:"vent",count:25,minE:.5,maxE:.9},{builder:"spikeRock",count:30,minE:.45,maxE:.95,tint:"#2b2020"}],discovery:{color:"#ffae4f",shape:"shard",prefixes:["Ember","Magma","Cinder","Ash","Pyre","Forge"],suffixes:["Heart","Tear","Ingot","Coal","Spark","Vein"]}},{id:"forest",label:"Forest World",shape:"smooth",noiseFrequency:1.5,amplitude:.1,colorStops:[[0,"#3a6a5d"],[.45,"#d9c98f"],[.5,"#6aa84f"],[.72,"#4a8a3a"],[.9,"#8a8f80"]],liquid:{level:.45,color:"#2a8fcf",opacity:.8,basin:2.2,emissive:"#0a3a5a",emissiveIntensity:.2},liquidClass:"swim",creature:{count:[4,6],prefixes:["Moss","Fern","Elder","Thicket"],suffixes:["Stag","Grazer","Doe","Wanderer"]},atmosphere:"#9fd8a0",particles:{color:"#ffe97f",count:90,size:.4,height:5},props:[{builder:"leafyTree",count:75,minE:.5,maxE:.85},{builder:"fern",count:55,minE:.48,maxE:.8},{builder:"rock",count:30,minE:.5,maxE:1,tint:"#8a8f80"}],discovery:{color:"#b8ff8f",shape:"seed",prefixes:["Elder","Verdant","Root","Canopy","Moss","Grove"],suffixes:["Seed","Acorn","Bud","Sprout","Amber","Ring"]}},{id:"mushroom",label:"Fungal World",shape:"gentle",noiseFrequency:1.3,amplitude:.09,colorStops:[[0,"#5a4f6b"],[.42,"#7a6f8f"],[.65,"#9a8aa8"],[.85,"#b8a8c2"]],liquid:{level:.46,color:"#7f5ad6",opacity:.75,basin:3,emissive:"#5a3aa8",emissiveIntensity:.5},liquidClass:"swim",creature:{count:[4,7],prefixes:["Spore","Puff","Cap","Gill"],suffixes:["Toad","Hopper","Bouncer","Croaker"]},atmosphere:"#c08fff",particles:{color:"#d6a0ff",count:200,size:.5,height:8},props:[{builder:"giantMushroom",count:35,minE:.46,maxE:.8},{builder:"smallMushroom",count:80,minE:.44,maxE:.85,glow:"#d6a0ff"},{builder:"fern",count:30,minE:.45,maxE:.7}],discovery:{color:"#d6a0ff",shape:"orb",prefixes:["Spore","Myco","Velvet","Gloom","Cap","Fae"],suffixes:["Pod","Truffle","Gill","Puff","Cluster","Lumen"]}},{id:"candy",label:"Candy World",shape:"gentle",noiseFrequency:1.4,amplitude:.08,colorStops:[[0,"#ffb8d8"],[.47,"#ffd6e8"],[.68,"#ffeef7"],[.86,"#d6f7ff"]],liquid:{level:.47,color:"#ff8fc0",opacity:.75,basin:3,emissive:"#d65a90",emissiveIntensity:.35},liquidClass:"swim",creature:{count:[4,6],prefixes:["Gum","Taffy","Jelly","Bonbon"],suffixes:["Bear","Toddle","Chew","Nibbler"]},atmosphere:"#ffb0d8",particles:{color:"#fff0a0",count:130,size:.45,height:6},props:[{builder:"candyCane",count:40,minE:.5,maxE:.85},{builder:"lollipop",count:35,minE:.5,maxE:.85},{builder:"gumdrop",count:60,minE:.48,maxE:.9}],discovery:{color:"#ff8fc0",shape:"gem",prefixes:["Sugar","Taffy","Fizz","Cocoa","Sherbet","Jelly"],suffixes:["Gem","Drop","Swirl","Cube","Button","Truffle"]}},{id:"crystal",label:"Crystal World",shape:"terraced",noiseFrequency:1.6,amplitude:.12,colorStops:[[0,"#2b2044"],[.35,"#3f2d5d"],[.6,"#55407d"],[.85,"#7a5aa8"]],liquid:null,liquidClass:null,creature:{count:[4,6],prefixes:["Prism","Facet","Chime","Shard"],suffixes:["Jelly","Drifter","Halo","Wisp"]},atmosphere:"#7fdfff",particles:{color:"#9fe8ff",count:180,size:.5,height:9},props:[{builder:"crystal",count:70,minE:.1,maxE:1,tint:"#7fdfff"},{builder:"crystal",count:40,minE:.3,maxE:1,tint:"#ff7fd6"},{builder:"spikeRock",count:30,minE:0,maxE:.9,tint:"#443060"}],discovery:{color:"#9fe8ff",shape:"gem",prefixes:["Prism","Facet","Chroma","Lattice","Quartz","Echo"],suffixes:["Cluster","Spire","Node","Lens","Matrix","Chime"]}},{id:"glitch",label:"Corrupted World",shape:"glitch",noiseFrequency:2,amplitude:.11,colorStops:[[0,"#0a0a16"],[.3,"#1a1a2e"],[.5,"#ff2bd6"],[.62,"#1a1a2e"],[.78,"#2bffd6"],[.9,"#16162a"]],liquid:{level:.3,color:"#05050d",opacity:.95,basin:2,emissive:"#1a0a2e",emissiveIntensity:.4},liquidClass:"hazard",creature:{count:[3,5],prefixes:["Null","Stray","Broken","Static"],suffixes:["Bit","Swarm","Packet","Daemon"]},atmosphere:"#ff2bd6",particles:{color:"#2bffd6",count:150,size:.55,height:10},props:[{builder:"glitchCube",count:60,minE:.3,maxE:1},{builder:"spikeRock",count:25,minE:.3,maxE:1,tint:"#1a1a3e"}],discovery:{color:"#2bffd6",shape:"cube",prefixes:["Null","Hex","Static","Phantom","Broken","Cipher"],suffixes:["Fragment","Byte","Anomaly","Artifact","Segment","Key"]}}],sx=["Zar","Veo","Quil","Ash","Bryn","Cor","Del","Eri","Fen","Gal","Hra","Ix","Jun","Kel","Lum","Mor","Nyx","Oph","Pra","Ryn","Sol","Tev","Ul","Vex","Wyn","Xan","Yor","Zen"],rx=["a","e","i","o","u","ae","ia","eo","ou","y"],ox=["ron","dia","lis","mar","nox","pha","rix","tis","vor","wen","xis","zul","gard","heim","thos"],Pu=["I","II","III","IV","V","VI","VII","VIII","IX","X"];function ax(i,t){return`${i.pick(sx)+i.pick(rx)+i.pick(ox)} ${Pu[Math.min(t,Pu.length-1)]}`}function cx(i,t){return`${i.pick(t.prefixes)} ${i.pick(t.suffixes)}`}const lx=1/3,wn=1/6,wa=i=>Math.floor(i)|0,Aa=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function ux(i=Math.random){const t=hx(i),e=new Float64Array(t).map(r=>Aa[r%12*3]),n=new Float64Array(t).map(r=>Aa[r%12*3+1]),s=new Float64Array(t).map(r=>Aa[r%12*3+2]);return function(o,a,c){let l,u,h,f;const d=(o+a+c)*lx,g=wa(o+d),v=wa(a+d),m=wa(c+d),p=(g+v+m)*wn,x=g-p,M=v-p,_=m-p,b=o-x,T=a-M,E=c-_;let A,S,y,P,L,D;b>=T?T>=E?(A=1,S=0,y=0,P=1,L=1,D=0):b>=E?(A=1,S=0,y=0,P=1,L=0,D=1):(A=0,S=0,y=1,P=1,L=0,D=1):T<E?(A=0,S=0,y=1,P=0,L=1,D=1):b<E?(A=0,S=1,y=0,P=0,L=1,D=1):(A=0,S=1,y=0,P=1,L=1,D=0);const U=b-A+wn,V=T-S+wn,H=E-y+wn,Y=b-P+2*wn,W=T-L+2*wn,it=E-D+2*wn,rt=b-1+3*wn,mt=T-1+3*wn,At=E-1+3*wn,kt=g&255,q=v&255,j=m&255;let ht=.6-b*b-T*T-E*E;if(ht<0)l=0;else{const St=kt+t[q+t[j]];ht*=ht,l=ht*ht*(e[St]*b+n[St]*T+s[St]*E)}let et=.6-U*U-V*V-H*H;if(et<0)u=0;else{const St=kt+A+t[q+S+t[j+y]];et*=et,u=et*et*(e[St]*U+n[St]*V+s[St]*H)}let Mt=.6-Y*Y-W*W-it*it;if(Mt<0)h=0;else{const St=kt+P+t[q+L+t[j+D]];Mt*=Mt,h=Mt*Mt*(e[St]*Y+n[St]*W+s[St]*it)}let Et=.6-rt*rt-mt*mt-At*At;if(Et<0)f=0;else{const St=kt+1+t[q+1+t[j+1]];Et*=Et,f=Et*Et*(e[St]*rt+n[St]*mt+s[St]*At)}return 32*(l+u+h+f)}}function hx(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=e[n];e[n]=e[s],e[s]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const Qh=0,fx=1,dx=2,Iu=2,Ca=1.25,Lu=1,Ve=32,Te=Ve/4,tf=65535,yo=Math.pow(2,-24),tl=Symbol("SKIP_GENERATION"),ef={strategy:Qh,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[tl]:!1};function _e(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Du(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Uu(i,t){t.set(i)}function Nu(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function $r(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Ws(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function we(i,t){return t[i+15]===tf}function He(i,t){return t[i+6]}function qe(i,t){return t[i+14]}function Le(i){return i+Te}function De(i,t){const e=t[i+6];return i+e*Te}function el(i,t){return t[i+7]}function Ra(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,v=-1/0,m=-1/0;const p=i.offset||0;for(let x=(t-p)*6,M=(t+e-p)*6;x<M;x+=6){const _=i[x+0],b=i[x+1],T=_-b,E=_+b;T<r&&(r=T),E>c&&(c=E),_<h&&(h=_),_>g&&(g=_);const A=i[x+2],S=i[x+3],y=A-S,P=A+S;y<o&&(o=y),P>l&&(l=P),A<f&&(f=A),A>v&&(v=A);const L=i[x+4],D=i[x+5],U=L-D,V=L+D;U<a&&(a=U),V>u&&(u=V),L<d&&(d=L),L>m&&(m=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=v,s[5]=m}const Gn=32,px=(i,t)=>i.candidate-t.candidate,ai=new Array(Gn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Zr=new Float32Array(6);function mx(i,t,e,n,s,r){let o=-1,a=0;if(r===Qh)o=Du(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===fx)o=Du(i),o!==-1&&(a=gx(e,n,s,o));else if(r===dx){const c=Ws(i);let l=Ca*s;const u=e.offset||0,h=(n-u)*6,f=(n+s-u)*6;for(let d=0;d<3;d++){const g=t[d],p=(t[d+3]-g)/Gn;if(s<Gn/4){const x=[...ai];x.length=s;let M=0;for(let b=h;b<f;b+=6,M++){const T=x[M];T.candidate=e[b+2*d],T.count=0;const{bounds:E,leftCacheBounds:A,rightCacheBounds:S}=T;for(let y=0;y<3;y++)S[y]=1/0,S[y+3]=-1/0,A[y]=1/0,A[y+3]=-1/0,E[y]=1/0,E[y+3]=-1/0;$r(b,e,E)}x.sort(px);let _=s;for(let b=0;b<_;b++){const T=x[b];for(;b+1<_&&x[b+1].candidate===T.candidate;)x.splice(b+1,1),_--}for(let b=h;b<f;b+=6){const T=e[b+2*d];for(let E=0;E<_;E++){const A=x[E];T>=A.candidate?$r(b,e,A.rightCacheBounds):($r(b,e,A.leftCacheBounds),A.count++)}}for(let b=0;b<_;b++){const T=x[b],E=T.count,A=s-T.count,S=T.leftCacheBounds,y=T.rightCacheBounds;let P=0;E!==0&&(P=Ws(S)/c);let L=0;A!==0&&(L=Ws(y)/c);const D=Lu+Ca*(P*E+L*A);D<l&&(o=d,l=D,a=T.candidate)}}else{for(let _=0;_<Gn;_++){const b=ai[_];b.count=0,b.candidate=g+p+_*p;const T=b.bounds;for(let E=0;E<3;E++)T[E]=1/0,T[E+3]=-1/0}for(let _=h;_<f;_+=6){let E=~~((e[_+2*d]-g)/p);E>=Gn&&(E=Gn-1);const A=ai[E];A.count++,$r(_,e,A.bounds)}const x=ai[Gn-1];Uu(x.bounds,x.rightCacheBounds);for(let _=Gn-2;_>=0;_--){const b=ai[_],T=ai[_+1];Nu(b.bounds,T.rightCacheBounds,b.rightCacheBounds)}let M=0;for(let _=0;_<Gn-1;_++){const b=ai[_],T=b.count,E=b.bounds,S=ai[_+1].rightCacheBounds;T!==0&&(M===0?Uu(E,Zr):Nu(E,Zr,Zr)),M+=T;let y=0,P=0;M!==0&&(y=Ws(Zr)/c);const L=s-M;L!==0&&(P=Ws(S)/c);const D=Lu+Ca*(y*M+P*L);D<l&&(o=d,l=D,a=b.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function gx(i,t,e,n){let s=0;const r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}class Pa{constructor(){this.boundingData=new Float32Array(6)}}function _x(i,t,e,n,s,r){let o=n,a=n+s-1;const c=r.pos,l=r.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+l]<c;)o++;for(;o<=a&&e[(a-u)*6+l]>=c;)a--;if(o<a){for(let h=0;h<t;h++){let f=i[o*t+h];i[o*t+h]=i[a*t+h],i[a*t+h]=f}for(let h=0;h<6;h++){const f=o-u,d=a-u,g=e[f*6+h];e[f*6+h]=e[d*6+h],e[d*6+h]=g}o++,a--}else return o}}let nf,Mo,Cc,sf;const xx=Math.pow(2,32);function Rc(i){return"count"in i?1:1+Rc(i.left)+Rc(i.right)}function vx(i,t,e){return nf=new Float32Array(e),Mo=new Uint32Array(e),Cc=new Uint16Array(e),sf=new Uint8Array(e),Pc(i,t)}function Pc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)nf[e+o]=r[o];if(s)return t.buffer?(sf.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Mo[e+6]=t.offset,Cc[n+14]=t.count,Cc[n+15]=tf,i+Ve);{const{left:o,right:a,splitAxis:c}=t,l=i+Ve;let u=Pc(l,o);const h=i/Ve,d=u/Ve-h;if(d>xx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Mo[e+6]=d,Mo[e+7]=c,Pc(u,a)}}function yx(i,t,e,n,s,r){const{maxDepth:o,verbose:a,maxLeafSize:c,strategy:l,onProgress:u}=s,h=i.primitiveBuffer,f=i.primitiveBufferStride,d=new Float32Array(6);let g=!1;const v=new Pa;return Ra(t,e,n,v.boundingData,d),p(v,e,n,d),v;function m(x){u&&u((x-r.offset)/r.count)}function p(x,M,_,b=null,T=0){if(!g&&T>=o&&(g=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),_<=c||T>=o)return m(M+_),x.offset=M,x.count=_,x;const E=mx(x.boundingData,b,t,M,_,l);if(E.axis===-1)return m(M+_),x.offset=M,x.count=_,x;const A=_x(h,f,t,M,_,E);if(A===M||A===M+_)m(M+_),x.offset=M,x.count=_;else{x.splitAxis=E.axis;const S=new Pa,y=M,P=A-M;x.left=S,Ra(t,y,P,S.boundingData,d),p(S,y,P,d,T+1);const L=new Pa,D=A,U=_-P;x.right=L,Ra(t,D,U,L.boundingData,d),p(L,D,U,d,T+1)}return x}}function Mx(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(c=>{const l=yx(i,a,c.offset,c.count,t,o),u=Rc(l),h=new e(Ve*u);return vx(0,l,h),h})}class nl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Sx{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const fe=new Sx;let fi,ps;const is=[],Jr=new nl(()=>new ye);function Ex(i,t,e,n,s,r){fi=Jr.getPrimitive(),ps=Jr.getPrimitive(),is.push(fi,ps),fe.setBuffer(i._roots[t]);const o=Ic(0,i.geometry,e,n,s,r);fe.clearBuffer(),Jr.releasePrimitive(fi),Jr.releasePrimitive(ps),is.pop(),is.pop();const a=is.length;return a>0&&(ps=is[a-1],fi=is[a-2]),o}function Ic(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=fe;let u=i*2;if(we(u,c)){const g=He(i,l),v=qe(u,c);return _e(i,a,fi),n(g,v,!1,o,r+i/Te,fi)}else{let L=function(U){const{uint16Array:V,uint32Array:H}=fe;let Y=U*2;for(;!we(Y,V);)U=Le(U),Y=U*2;return He(U,H)},D=function(U){const{uint16Array:V,uint32Array:H}=fe;let Y=U*2;for(;!we(Y,V);)U=De(U,H),Y=U*2;return He(U,H)+qe(Y,V)};var f=L,d=D;const g=Le(i),v=De(i,l);let m=g,p=v,x,M,_,b;if(s&&(_=fi,b=ps,_e(m,a,_),_e(p,a,b),x=s(_),M=s(b),M<x)){m=v,p=g;const U=x;x=M,M=U,_=b}_||(_=fi,_e(m,a,_));const T=we(m*2,c),E=e(_,T,x,o+1,r+m/Te);let A;if(E===Iu){const U=L(m),H=D(m)-U;A=n(U,H,!0,o+1,r+m/Te,_)}else A=E&&Ic(m,t,e,n,s,r,o+1);if(A)return!0;b=ps,_e(p,a,b);const S=we(p*2,c),y=e(b,S,M,o+1,r+p/Te);let P;if(y===Iu){const U=L(p),H=D(p)-U;P=n(U,H,!0,o+1,r+p/Te,b)}else P=y&&Ic(p,t,e,n,s,r,o+1);return!!P}}const sr=new fe.constructor,Co=new fe.constructor,ci=new nl(()=>new ye),ss=new ye,rs=new ye,Ia=new ye,La=new ye;let Da=!1;function bx(i,t,e,n){if(Da)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Da=!0;const s=i._roots,r=t._roots;let o,a=0,c=0;const l=new Lt().copy(e).invert();for(let u=0,h=s.length;u<h;u++){sr.setBuffer(s[u]),c=0;const f=ci.getPrimitive();_e(0,sr.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(Co.setBuffer(r[d]),o=gn(0,0,e,l,n,a,c,0,0,f),Co.clearBuffer(),c+=r[d].byteLength/Ve,!o);d++);if(ci.releasePrimitive(f),sr.clearBuffer(),a+=s[u].byteLength/Ve,o)break}return Da=!1,o}function gn(i,t,e,n,s,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=Co,f=sr):(h=sr,f=Co);const d=h.float32Array,g=h.uint32Array,v=h.uint16Array,m=f.float32Array,p=f.uint32Array,x=f.uint16Array,M=i*2,_=t*2,b=we(M,v),T=we(_,x);let E=!1;if(T&&b)u?E=s(He(t,p),qe(t*2,x),He(i,g),qe(i*2,v),c,o+t/Te,a,r+i/Te):E=s(He(i,g),qe(i*2,v),He(t,p),qe(t*2,x),a,r+i/Te,c,o+t/Te);else if(T){const A=ci.getPrimitive();_e(t,m,A),A.applyMatrix4(e);const S=Le(i),y=De(i,g);_e(S,d,ss),_e(y,d,rs);const P=A.intersectsBox(ss),L=A.intersectsBox(rs);E=P&&gn(t,S,n,e,s,o,r,c,a+1,A,!u)||L&&gn(t,y,n,e,s,o,r,c,a+1,A,!u),ci.releasePrimitive(A)}else{const A=Le(t),S=De(t,p);_e(A,m,Ia),_e(S,m,La);const y=l.intersectsBox(Ia),P=l.intersectsBox(La);if(y&&P)E=gn(i,A,e,n,s,r,o,a,c+1,l,u)||gn(i,S,e,n,s,r,o,a,c+1,l,u);else if(y)if(b)E=gn(i,A,e,n,s,r,o,a,c+1,l,u);else{const L=ci.getPrimitive();L.copy(Ia).applyMatrix4(e);const D=Le(i),U=De(i,g);_e(D,d,ss),_e(U,d,rs);const V=L.intersectsBox(ss),H=L.intersectsBox(rs);E=V&&gn(A,D,n,e,s,o,r,c,a+1,L,!u)||H&&gn(A,U,n,e,s,o,r,c,a+1,L,!u),ci.releasePrimitive(L)}else if(P)if(b)E=gn(i,S,e,n,s,r,o,a,c+1,l,u);else{const L=ci.getPrimitive();L.copy(La).applyMatrix4(e);const D=Le(i),U=De(i,g);_e(D,d,ss),_e(U,d,rs);const V=L.intersectsBox(ss),H=L.intersectsBox(rs);E=V&&gn(S,D,n,e,s,o,r,c,a+1,L,!u)||H&&gn(S,U,n,e,s,o,r,c,a+1,L,!u),ci.releasePrimitive(L)}}return E}const Fu=new ye,os=new Float32Array(6);class Tx{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...ef,...t},Mx(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=t,f=t+e;h<f;h++){this.writePrimitiveBounds(h,os,0);const[d,g,v,m,p,x]=os;d<r&&(r=d),m>c&&(c=m),g<o&&(o=g),p>l&&(l=p),v<a&&(a=v),x>u&&(u=x)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=c,n[s+4]=l,n[s+5]=u,n}computePrimitiveBounds(t,e,n){const s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,os,0);const[a,c,l,u,h,f]=os,d=(a+u)/2,g=(c+h)/2,v=(l+f)/2,m=(u-a)/2,p=(h-c)/2,x=(f-l)/2,M=(r-s)*6;n[M+0]=d,n[M+1]=m+(Math.abs(d)+m)*yo,n[M+2]=g,n[M+3]=p+(Math.abs(g)+p)*yo,n[M+4]=v,n[M+5]=x+(Math.abs(v)+x)*yo}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/Ve;for(let l=0;l<c;l++){const u=Te*l,h=2*u;we(h,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){const l=a*2,u=we(l,r);if(u){const h=s[a+6],f=r[l+14];t(c,u,new Float32Array(n,a*4,6),h,f)}else{const h=Le(a),f=De(a,s),d=el(a,s);t(c,u,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),c=s.byteLength/Ve;for(let l=c-1;l>=0;l--){const u=l*Te,h=u*2;if(we(h,o)){const d=He(u,r),g=qe(h,o);this.writePrimitiveRangeBounds(d,g,os,0),a.set(os,u)}else{const d=Le(u),g=De(u,r);for(let v=0;v<3;v++){const m=a[d+v],p=a[d+v+3],x=a[g+v],M=a[g+v+3];a[u+v]=m<x?m:x,a[u+v+3]=p>M?p:M}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{_e(0,new Float32Array(n),Fu),t.union(Fu)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const h=s;s=(f,d,g,v,m)=>h(f,d,g,v,m)?!0:a(f,d,this,r,g,v,o)}else s||(r?s=(h,f,d,g)=>a(h,f,this,r,d,g,o):s=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=Ex(this,h,n,s,e,l),c)break;l+=d.byteLength/Ve}return c}bvhcast(t,e,n){let{intersectsRanges:s}=n;return bx(this,t,e,s)}}function wx(){return typeof SharedArrayBuffer<"u"}function il(i){return i.index?i.index.count:i.attributes.position.count}function zo(i){return il(i)/3}function Ax(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Cx(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Ax(e,n);i.setIndex(new xe(s,1));for(let r=0;r<e;r++)s[r]=r}}function Rx(i,t,e){const n=il(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function Px(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Bu(i,t,e){const n=Rx(i,t,e),s=Px(i,e);if(!s.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=il(i)/e,l=[];for(const f of s){const{offset:d,count:g}=f,v=d,m=isFinite(g)?g:c-d,p=d+m;v<a&&p>o&&(l.push({pos:Math.max(o,v),isStart:!0}),l.push({pos:Math.min(a,p),isStart:!1}))}l.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let u=0,h=null;for(const f of l){const d=f.pos;u!==0&&d!==h&&r.push({offset:h,count:d-h}),u+=f.isStart?1:-1,h=d}return r}function Ix(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((l,u)=>l+u.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let l=0;l<i.length;l++){const{offset:u,count:h}=i[l];for(let f=0;f<h;f++)a[c+f]=u+f;c+=h}return a}class Lx extends Tx{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!wx())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...ef,...e},e[tl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const s=Bu(e,t.range,n),r=Ix(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else Cx(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ye))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Bu(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class jn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}jn.prototype.setFromBox=(function(){const i=new R;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const Dx=(function(){const i=new R,t=new R,e=new R;return function(s,r,o){const a=s.start,c=i,l=r.start,u=t;e.subVectors(a,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-f*f;let p,x;m!==0?p=(h*f-g*d)/m:p=0,x=(h+p*f)/d,o.x=p,o.y=x}})(),sl=(function(){const i=new nt,t=new R,e=new R;return function(s,r,o,a){Dx(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;const f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}})(),Ux=(function(){const i=new R,t=new R,e=new kn,n=new Kn;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(c))<=a){const p=v.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),Nx=["x","y","z"],Wn=1e-15,Ou=Wn*Wn;function on(i){return Math.abs(i)<Wn}class En extends Ie{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new jn),this.points=[this.a,this.b,this.c],this.plane=new kn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Kn,this.needsUpdate=!0}intersectsSphere(t){return Ux(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);const h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,s);const d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s);const v=l.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Wn?m<Wn||p<Wn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<Wn?p<Wn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Wn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}En.prototype.closestPointToSegment=(function(){const i=new R,t=new R,e=new Kn;return function(s,r=null,o=null){const{start:a,end:c}=s,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),sl(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(h)}})();En.prototype.intersectsTriangle=(function(){const i=new En,t=new jn,e=new jn,n=new R,s=new R,r=new R,o=new R,a=new Kn,c=new Kn,l=new R,u=new nt,h=new nt;function f(M,_,b,T){const E=n;!M.isDegenerateIntoPoint&&!M.isDegenerateIntoSegment?E.copy(M.plane.normal):E.copy(_.plane.normal);const A=M.satBounds,S=M.satAxes;for(let L=1;L<4;L++){const D=A[L],U=S[L];if(t.setFromPoints(U,_.points),D.isSeparated(t)||(o.copy(E).cross(U),t.setFromPoints(o,M.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}const y=_.satBounds,P=_.satAxes;for(let L=1;L<4;L++){const D=y[L],U=P[L];if(t.setFromPoints(U,M.points),D.isSeparated(t)||(o.crossVectors(E,U),t.setFromPoints(o,M.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}return b&&(T||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function d(M,_,b,T,E,A,S,y,P,L,D){let U=S/(S-y);L.x=T+(E-T)*U,D.start.subVectors(_,M).multiplyScalar(U).add(M),U=S/(S-P),L.y=T+(A-T)*U,D.end.subVectors(b,M).multiplyScalar(U).add(M)}function g(M,_,b,T,E,A,S,y,P,L,D){if(E>0)d(M.c,M.a,M.b,T,_,b,P,S,y,L,D);else if(A>0)d(M.b,M.a,M.c,b,_,T,y,S,P,L,D);else if(y*P>0||S!=0)d(M.a,M.b,M.c,_,b,T,S,y,P,L,D);else if(y!=0)d(M.b,M.a,M.c,b,_,T,y,S,P,L,D);else if(P!=0)d(M.c,M.a,M.b,T,_,b,P,S,y,L,D);else return!0;return!1}function v(M,_,b,T){const E=_.degenerateSegment,A=M.plane.distanceToPoint(E.start),S=M.plane.distanceToPoint(E.end);return on(A)?on(S)?f(M,_,b,T):(b&&(b.start.copy(E.start),b.end.copy(E.start)),M.containsPoint(E.start)):on(S)?(b&&(b.start.copy(E.end),b.end.copy(E.end)),M.containsPoint(E.end)):M.plane.intersectLine(E,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),M.containsPoint(n)):!1}function m(M,_,b){const T=_.a;return on(M.plane.distanceToPoint(T))&&M.containsPoint(T)?(b&&(b.start.copy(T),b.end.copy(T)),!0):!1}function p(M,_,b){const T=M.degenerateSegment,E=_.a;return T.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<Ou?(b&&(b.start.copy(E),b.end.copy(E)),!0):!1}function x(M,_,b,T){if(M.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const E=M.degenerateSegment,A=_.degenerateSegment,S=s,y=r;E.delta(S),A.delta(y);const P=n.subVectors(A.start,E.start),L=S.x*y.y-S.y*y.x;if(on(L))return!1;const D=(P.x*y.y-P.y*y.x)/L,U=-(S.x*P.y-S.y*P.x)/L;if(D<0||D>1||U<0||U>1)return!1;const V=E.start.z+S.z*D,H=A.start.z+y.z*U;return on(V-H)?(b&&(b.start.copy(E.start).addScaledVector(S,D),b.end.copy(E.start).addScaledVector(S,D)),!0):!1}else return _.isDegenerateIntoPoint?p(M,_,b):v(_,M,b,T);else{if(M.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(M.a)<Ou?(b&&(b.start.copy(M.a),b.end.copy(M.a)),!0):!1:_.isDegenerateIntoSegment?p(_,M,b):m(_,M,b);if(_.isDegenerateIntoPoint)return m(M,_,b);if(_.isDegenerateIntoSegment)return v(M,_,b,T)}}return function(_,b=null,T=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);const E=x(this,_,b,T);if(E!==void 0)return E;const A=this.plane,S=_.plane;let y=S.distanceToPoint(this.a),P=S.distanceToPoint(this.b),L=S.distanceToPoint(this.c);on(y)&&(y=0),on(P)&&(P=0),on(L)&&(L=0);const D=y*P,U=y*L;if(D>0&&U>0)return!1;let V=A.distanceToPoint(_.a),H=A.distanceToPoint(_.b),Y=A.distanceToPoint(_.c);on(V)&&(V=0),on(H)&&(H=0),on(Y)&&(Y=0);const W=V*H,it=V*Y;if(W>0&&it>0)return!1;s.copy(A.normal),r.copy(S.normal);const rt=s.cross(r);let mt=0,At=Math.abs(rt.x);const kt=Math.abs(rt.y);kt>At&&(At=kt,mt=1),Math.abs(rt.z)>At&&(mt=2);const j=Nx[mt],ht=this.a[j],et=this.b[j],Mt=this.c[j],Et=_.a[j],St=_.b[j],ae=_.c[j];if(g(this,ht,et,Mt,D,U,y,P,L,u,a))return f(this,_,b,T);if(g(_,Et,St,ae,W,it,V,H,Y,h,c))return f(this,_,b,T);if(u.y<u.x){const Ht=u.y;u.y=u.x,u.x=Ht,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){const Ht=h.y;h.y=h.x,h.x=Ht,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(b&&(h.x>u.x?b.start.copy(c.start):b.start.copy(a.start),h.y<u.y?b.end.copy(c.end):b.end.copy(a.end)),!0)}})();En.prototype.distanceToPoint=(function(){const i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();En.prototype.distanceToTriangle=(function(){const i=new R,t=new R,e=["a","b","c"],n=new Kn,s=new Kn;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=e[h],g=o[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,a&&a.copy(i),c&&c.copy(g));const v=this[d];o.closestPointToPoint(v,i),f=v.distanceToSquared(i),f<u&&(u=f,a&&a.copy(v),c&&c.copy(i))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const v=e[g],m=e[(g+1)%3];s.set(o[v],o[m]),sl(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}})();class Ye{constructor(t,e,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new Lt,this.invMatrix=new Lt,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new jn),this.alignedSatBounds=new Array(3).fill().map(()=>new jn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ye.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=s[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){const u=o[l],h=r[l],f=1<<l,d=s[f];u.subVectors(a,d),h.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ye.prototype.intersectsBox=(function(){const i=new jn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}})();Ye.prototype.intersectsTriangle=(function(){const i=new En,t=new Array(3),e=new jn,n=new jn,s=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){const d=a[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=c[f];for(let g=0;g<4;g++){const v=u[g];if(s.crossVectors(d,v),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}})();Ye.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ye.prototype.distanceToPoint=(function(){const i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ye.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Kn),e=new Array(12).fill().map(()=>new Kn),n=new R,s=new R;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=a*a,h=o.min,f=o.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(h,f);const x=p.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(p),l&&l.copy(s),x<u))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const M=(m+1)%3,_=(m+2)%3,b=p<<M|x<<_,T=1<<m|p<<M|x<<_,E=d[b],A=d[T];t[v].set(E,A);const y=i[m],P=i[M],L=i[_],D=e[v],U=D.start,V=D.end;U[y]=h[y],U[P]=p?h[P]:f[P],U[L]=x?h[L]:f[P],V[y]=f[y],V[P]=p?h[P]:f[P],V[L]=x?h[L]:f[P],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=x?f.z:h.z,this.closestPointToPoint(s,n);const M=s.distanceToSquared(n);if(M<g&&(g=M,c&&c.copy(n),l&&l.copy(s),M<u))return Math.sqrt(M)}for(let m=0;m<12;m++){const p=t[m];for(let x=0;x<12;x++){const M=e[x];sl(p,M,n,s);const _=n.distanceToSquared(s);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();class Fx extends nl{constructor(){super(()=>new En)}}const ln=new Fx,Xs=new R,Ua=new R;function Bx(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Xs.copy(t).clamp(u.min,u.max),Xs.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Xs);const f=t.distanceToSquared(Xs);return f<a&&(Ua.copy(Xs),a=f,c=h),f<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(Ua):e.point=Ua.clone(),e.distance=l,e.faceIndex=c,e}const Kr=parseInt(lr)>=169,Ox=parseInt(lr)<=161,Ai=new R,Ci=new R,Ri=new R,jr=new nt,Qr=new nt,to=new nt,zu=new R,Vu=new R,Hu=new R,qs=new R;function zx(i,t,e,n,s,r,o,a){let c;if(r===Ge?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==Cn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<o||l>a?null:{distance:l,point:s.clone()}}function Gu(i,t,e,n,s,r,o,a,c,l,u){Ai.fromBufferAttribute(t,r),Ci.fromBufferAttribute(t,o),Ri.fromBufferAttribute(t,a);const h=zx(i,Ai,Ci,Ri,qs,c,l,u);if(h){if(n){jr.fromBufferAttribute(n,r),Qr.fromBufferAttribute(n,o),to.fromBufferAttribute(n,a),h.uv=new nt;const d=Ie.getInterpolation(qs,Ai,Ci,Ri,jr,Qr,to,h.uv);Kr||(h.uv=d)}if(s){jr.fromBufferAttribute(s,r),Qr.fromBufferAttribute(s,o),to.fromBufferAttribute(s,a),h.uv1=new nt;const d=Ie.getInterpolation(qs,Ai,Ci,Ri,jr,Qr,to,h.uv1);Kr||(h.uv1=d),Ox&&(h.uv2=h.uv1)}if(e){zu.fromBufferAttribute(e,r),Vu.fromBufferAttribute(e,o),Hu.fromBufferAttribute(e,a),h.normal=new R;const d=Ie.getInterpolation(qs,Ai,Ci,Ri,zu,Vu,Hu,h.normal);h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1),Kr||(h.normal=d)}const f={a:r,b:o,c:a,normal:new R,materialIndex:0};if(Ie.getNormal(Ai,Ci,Ri,f.normal),h.face=f,h.faceIndex=r,Kr){const d=new R;Ie.getBarycoord(qs,Ai,Ci,Ri,d),h.barycoord=d}}return h}function ku(i){return i&&i.isMaterial?i.side:i}function Vo(i,t,e,n,s,r,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const{index:h,groups:f}=i;i.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:d,normal:g,uv:v,uv1:m}=i.attributes;if(Array.isArray(t)){const p=n*3;for(let x=0,M=f.length;x<M;x++){const{start:_,count:b,materialIndex:T}=f[x];if(p>=_&&p<_+b){const E=ku(t[T]),A=Gu(e,d,g,v,m,c,l,u,E,r,o);if(A)if(A.faceIndex=n,A.face.materialIndex=T,s)s.push(A);else return A}}}else{const p=ku(t),x=Gu(e,d,g,v,m,c,l,u,p,r,o);if(x)if(x.faceIndex=n,x.face.materialIndex=0,s)s.push(x);else return x}return null}function Ee(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Vx(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,h=n+s;u<h;u++)Vo(c,t,e,u,r,o,a)}function Hx(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=Vo(a,t,e,h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Gx(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,Ee(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function kx(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const v=f*2;if(we(v,a)){const m=He(f,o),p=qe(v,a);let x=1/0,M=1/0,_=1/0,b=-1/0,T=-1/0,E=-1/0;for(let A=3*m,S=3*(m+p);A<S;A++){let y=n[A];const P=s.getX(y),L=s.getY(y),D=s.getZ(y);P<x&&(x=P),P>b&&(b=P),L<M&&(M=L),L>T&&(T=L),D<_&&(_=D),D>E&&(E=D)}return c[f+0]!==x||c[f+1]!==M||c[f+2]!==_||c[f+3]!==b||c[f+4]!==T||c[f+5]!==E?(c[f+0]=x,c[f+1]=M,c[f+2]=_,c[f+3]=b,c[f+4]=T,c[f+5]=E,!0):!1}else{const m=Le(f),p=De(f,o);let x=g,M=!1,_=!1;if(t){if(!x){const y=m/Te+d/Ve,P=p/Te+d/Ve;M=t.has(y),_=t.has(P),x=!M&&!_}}else M=!0,_=!0;const b=x||M,T=x||_;let E=!1;b&&(E=h(m,d,x));let A=!1;T&&(A=h(p,d,x));const S=E||A;if(S)for(let y=0;y<3;y++){const P=m+y,L=p+y,D=c[P],U=c[P+3],V=c[L],H=c[L+3];c[f+y]=D<V?D:V,c[f+y+3]=U>H?U:H}return S}}}function gi(i,t,e,n,s){let r,o,a,c,l,u;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,v=e.origin.y,m=e.origin.z;let p=t[i],x=t[i+3],M=t[i+1],_=t[i+3+1],b=t[i+2],T=t[i+3+2];return h>=0?(r=(p-g)*h,o=(x-g)*h):(r=(x-g)*h,o=(p-g)*h),f>=0?(a=(M-v)*f,c=(_-v)*f):(a=(_-v)*f,c=(M-v)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(b-m)*d,u=(T-m)*d):(l=(T-m)*d,u=(b-m)*d),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function Wx(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,h=n+s;u<h;u++){let f=l?l[u]:u;Vo(c,t,e,f,r,o,a)}}function Xx(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let l=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=Vo(a,t,e,c?c[h]:h,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function qx(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Ee(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function Yx(i,t,e,n,s,r,o){fe.setBuffer(i._roots[t]),Lc(0,i,e,n,s,r,o),fe.clearBuffer()}function Lc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=fe,u=i*2;if(we(u,c)){const f=He(i,l),d=qe(u,c);Vx(t,e,n,f,d,s,r,o)}else{const f=Le(i);gi(f,a,n,r,o)&&Lc(f,t,e,n,s,r,o);const d=De(i,l);gi(d,a,n,r,o)&&Lc(d,t,e,n,s,r,o)}}const $x=["x","y","z"];function Zx(i,t,e,n,s,r){fe.setBuffer(i._roots[t]);const o=Dc(0,i,e,n,s,r);return fe.clearBuffer(),o}function Dc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=fe;let l=i*2;if(we(l,a)){const h=He(i,c),f=qe(l,a);return Hx(t,e,n,h,f,s,r)}else{const h=el(i,c),f=$x[h],g=n.direction[f]>=0;let v,m;g?(v=Le(i),m=De(i,c)):(v=De(i,c),m=Le(i));const x=gi(v,o,n,s,r)?Dc(v,t,e,n,s,r):null;if(x){const b=x.point[f];if(g?b<=o[m+h]:b>=o[m+h+3])return x}const _=gi(m,o,n,s,r)?Dc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const eo=new ye,as=new En,cs=new En,Ys=new Lt,Wu=new Ye,no=new Ye;function Jx(i,t,e,n){fe.setBuffer(i._roots[t]);const s=Uc(0,i,e,n);return fe.clearBuffer(),s}function Uc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=fe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Wu.set(e.boundingBox.min,e.boundingBox.max,n),s=Wu),we(c,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,v=He(i,a),m=qe(c,o);if(Ys.copy(n).invert(),e.boundsTree)return _e(i,r,no),no.matrix.copy(Ys),no.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>no.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let M=v*3,_=(m+v)*3;M<_;M+=3)if(Ee(cs,M,h,f),cs.needsUpdate=!0,x.intersectsTriangle(cs))return!0;return!1}});{const p=zo(e);for(let x=v*3,M=(m+v)*3;x<M;x+=3){Ee(as,x,h,f),as.a.applyMatrix4(Ys),as.b.applyMatrix4(Ys),as.c.applyMatrix4(Ys),as.needsUpdate=!0;for(let _=0,b=p*3;_<b;_+=3)if(Ee(cs,_,d,g),cs.needsUpdate=!0,as.intersectsTriangle(cs))return!0}}}else{const u=Le(i),h=De(i,a);return _e(u,r,eo),!!(s.intersectsBox(eo)&&Uc(u,t,e,n,s)||(_e(h,r,eo),s.intersectsBox(eo)&&Uc(h,t,e,n,s)))}}const io=new Lt,Na=new Ye,$s=new Ye,Kx=new R,jx=new R,Qx=new R,tv=new R;function ev(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Na.set(t.boundingBox.min,t.boundingBox.max,e),Na.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=ln.getPrimitive(),d=ln.getPrimitive();let g=Kx,v=jx,m=null,p=null;s&&(m=Qx,p=tv);let x=1/0,M=null,_=null;return io.copy(e).invert(),$s.matrix.copy(io),i.shapecast({boundsTraverseOrder:b=>Na.distanceToBox(b),intersectsBounds:(b,T,E)=>E<x&&E<o?(T&&($s.min.copy(b.min),$s.max.copy(b.max),$s.needsUpdate=!0),!0):!1,intersectsRange:(b,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>$s.distanceToBox(A),intersectsBounds:(A,S,y)=>y<x&&y<o,intersectsRange:(A,S)=>{for(let y=A,P=A+S;y<P;y++){Ee(d,3*y,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=b,D=b+T;L<D;L++){Ee(f,3*L,l,c),f.needsUpdate=!0;const U=f.distanceToTriangle(d,g,m);if(U<x&&(v.copy(g),p&&p.copy(m),x=U,M=L,_=y),U<r)return!0}}}});{const E=zo(t);for(let A=0,S=E;A<S;A++){Ee(d,3*A,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let y=b,P=b+T;y<P;y++){Ee(f,3*y,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(d,g,m);if(L<x&&(v.copy(g),p&&p.copy(m),x=L,M=y,_=A),L<r)return!0}}}}}),ln.releasePrimitive(f),ln.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(io),v.applyMatrix4(io),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function nv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,l=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const v=f*2;if(we(v,a)){const m=He(f,o),p=qe(v,a);let x=1/0,M=1/0,_=1/0,b=-1/0,T=-1/0,E=-1/0;for(let A=m,S=m+p;A<S;A++){const y=3*i.resolveTriangleIndex(A);for(let P=0;P<3;P++){let L=y+P;L=n?n[L]:L;const D=s.getX(L),U=s.getY(L),V=s.getZ(L);D<x&&(x=D),D>b&&(b=D),U<M&&(M=U),U>T&&(T=U),V<_&&(_=V),V>E&&(E=V)}}return c[f+0]!==x||c[f+1]!==M||c[f+2]!==_||c[f+3]!==b||c[f+4]!==T||c[f+5]!==E?(c[f+0]=x,c[f+1]=M,c[f+2]=_,c[f+3]=b,c[f+4]=T,c[f+5]=E,!0):!1}else{const m=Le(f),p=De(f,o);let x=g,M=!1,_=!1;if(t){if(!x){const y=m/Te+d/Ve,P=p/Te+d/Ve;M=t.has(y),_=t.has(P),x=!M&&!_}}else M=!0,_=!0;const b=x||M,T=x||_;let E=!1;b&&(E=h(m,d,x));let A=!1;T&&(A=h(p,d,x));const S=E||A;if(S)for(let y=0;y<3;y++){const P=m+y,L=p+y,D=c[P],U=c[P+3],V=c[L],H=c[L+3];c[f+y]=D<V?D:V,c[f+y+3]=U>H?U:H}return S}}}function iv(i,t,e,n,s,r,o){fe.setBuffer(i._roots[t]),Nc(0,i,e,n,s,r,o),fe.clearBuffer()}function Nc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=fe,u=i*2;if(we(u,c)){const f=He(i,l),d=qe(u,c);Wx(t,e,n,f,d,s,r,o)}else{const f=Le(i);gi(f,a,n,r,o)&&Nc(f,t,e,n,s,r,o);const d=De(i,l);gi(d,a,n,r,o)&&Nc(d,t,e,n,s,r,o)}}const sv=["x","y","z"];function rv(i,t,e,n,s,r){fe.setBuffer(i._roots[t]);const o=Fc(0,i,e,n,s,r);return fe.clearBuffer(),o}function Fc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=fe;let l=i*2;if(we(l,a)){const h=He(i,c),f=qe(l,a);return Xx(t,e,n,h,f,s,r)}else{const h=el(i,c),f=sv[h],g=n.direction[f]>=0;let v,m;g?(v=Le(i),m=De(i,c)):(v=De(i,c),m=Le(i));const x=gi(v,o,n,s,r)?Fc(v,t,e,n,s,r):null;if(x){const b=x.point[f];if(g?b<=o[m+h]:b>=o[m+h+3])return x}const _=gi(m,o,n,s,r)?Fc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const so=new ye,ls=new En,us=new En,Zs=new Lt,Xu=new Ye,ro=new Ye;function ov(i,t,e,n){fe.setBuffer(i._roots[t]);const s=Bc(0,i,e,n);return fe.clearBuffer(),s}function Bc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=fe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Xu.set(e.boundingBox.min,e.boundingBox.max,n),s=Xu),we(c,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,v=He(i,a),m=qe(c,o);if(Zs.copy(n).invert(),e.boundsTree)return _e(i,r,ro),ro.matrix.copy(Zs),ro.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>ro.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let M=v,_=m+v;M<_;M++)if(Ee(us,3*t.resolveTriangleIndex(M),h,f),us.needsUpdate=!0,x.intersectsTriangle(us))return!0;return!1}});{const p=zo(e);for(let x=v,M=m+v;x<M;x++){const _=t.resolveTriangleIndex(x);Ee(ls,3*_,h,f),ls.a.applyMatrix4(Zs),ls.b.applyMatrix4(Zs),ls.c.applyMatrix4(Zs),ls.needsUpdate=!0;for(let b=0,T=p*3;b<T;b+=3)if(Ee(us,b,d,g),us.needsUpdate=!0,ls.intersectsTriangle(us))return!0}}}else{const u=Le(i),h=De(i,a);return _e(u,r,so),!!(s.intersectsBox(so)&&Bc(u,t,e,n,s)||(_e(h,r,so),s.intersectsBox(so)&&Bc(h,t,e,n,s)))}}const oo=new Lt,Fa=new Ye,Js=new Ye,av=new R,cv=new R,lv=new R,uv=new R;function hv(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Fa.set(t.boundingBox.min,t.boundingBox.max,e),Fa.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=ln.getPrimitive(),d=ln.getPrimitive();let g=av,v=cv,m=null,p=null;s&&(m=lv,p=uv);let x=1/0,M=null,_=null;return oo.copy(e).invert(),Js.matrix.copy(oo),i.shapecast({boundsTraverseOrder:b=>Fa.distanceToBox(b),intersectsBounds:(b,T,E)=>E<x&&E<o?(T&&(Js.min.copy(b.min),Js.max.copy(b.max),Js.needsUpdate=!0),!0):!1,intersectsRange:(b,T)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:A=>Js.distanceToBox(A),intersectsBounds:(A,S,y)=>y<x&&y<o,intersectsRange:(A,S)=>{for(let y=A,P=A+S;y<P;y++){const L=E.resolveTriangleIndex(y);Ee(d,3*L,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=b,U=b+T;D<U;D++){const V=i.resolveTriangleIndex(D);Ee(f,3*V,l,c),f.needsUpdate=!0;const H=f.distanceToTriangle(d,g,m);if(H<x&&(v.copy(g),p&&p.copy(m),x=H,M=D,_=y),H<r)return!0}}}})}else{const E=zo(t);for(let A=0,S=E;A<S;A++){Ee(d,3*A,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let y=b,P=b+T;y<P;y++){const L=i.resolveTriangleIndex(y);Ee(f,3*L,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(d,g,m);if(D<x&&(v.copy(g),p&&p.copy(m),x=D,M=y,_=A),D<r)return!0}}}}}),ln.releasePrimitive(f),ln.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(oo),v.applyMatrix4(oo),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function qu(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const ao=new Ye,co=new hr,Yu=new R,$u=new Lt,Zu=new R,Ba=["getX","getY","getZ"];class Ro extends Lx{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new Ro(e,{...n,[tl]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new xe(t.index,1,!1);e.setIndex(u)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a;function c(l){for(let u=0;u<l.length;u++){const h=l[u],f=new Uint32Array(h),d=new Uint16Array(h);for(let g=0,v=h.byteLength/Ve;g<v;g++){const m=Te*g,p=2*m;we(p,d)||(f[m+6]=f[m+6]/Te-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=(r?r[t]:t)*3;let u=l+0,h=l+1,f=l+2;a&&(u=a[u],h=a[h],f=a[f]);for(let d=0;d<3;d++){const g=o[Ba[d]](u),v=o[Ba[d]](h),m=o[Ba[d]](f);let p=g;v<p&&(p=v),m<p&&(p=m);let x=g;v>x&&(x=v),m>x&&(x=m),e[n+d]=p,e[n+d+3]=x}return e}computePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const l=o.array,u=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const f=["getX","getY","getZ"],d=n.offset;for(let g=t,v=t+e;g<v;g++){const p=(r?r[g]:g)*3,x=(g-d)*6;let M=p+0,_=p+1,b=p+2;a&&(M=a[M],_=a[_],b=a[b]),c||(M=M*h+u,_=_*h+u,b=b*h+u);for(let T=0;T<3;T++){let E,A,S;c?(E=o[f[T]](M),A=o[f[T]](_),S=o[f[T]](b)):(E=l[M+T],A=l[_+T],S=l[b+T]);let y=E;A<y&&(y=A),S<y&&(y=S);let P=E;A>P&&(P=A),S>P&&(P=S);const L=(P-y)/2,D=T*2;n[x+D+0]=y+L,n[x+D+1]=L+(Math.abs(y)+L)*yo}}return n}raycastObject3D(t,e,n=[]){const{material:s}=t;if(s===void 0)return;$u.copy(t.matrixWorld).invert(),co.copy(e.ray).applyMatrix4($u),Zu.setFromMatrixScale(t.matrixWorld),Yu.copy(co.direction).multiply(Zu);const r=Yu.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(co,s,o,a);c=qu(c,t,e),c&&n.push(c)}else{const c=this.raycast(co,s,o,a);for(let l=0,u=c.length;l<u;l++){const h=qu(c[l],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?nv:kx)(this,t)}raycast(t,e=In,n=0,s=1/0){const r=this._roots,o=[],a=this.indirect?iv:Yx;for(let c=0,l=r.length;c<l;c++)a(this,c,e,t,o,n,s);return o}raycastFirst(t,e=In,n=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?rv:Zx;for(let c=0,l=r.length;c<l;c++){const u=a(this,c,e,t,n,s);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?ov:Jx;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=ln.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?qx:Gx});return ln.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=ln.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const v=this.resolveTriangleIndex(g);Ee(o,v*3,a,c)}:g=>{Ee(o,g*3,a,c)},u=ln.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{const v=t.resolveTriangleIndex(g);Ee(u,v*3,h,f)}:g=>{Ee(u,g*3,h,f)};if(r){if(!(t instanceof Ro))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(v,m,p,x,M,_,b,T)=>{for(let E=p,A=p+x;E<A;E++){d(E),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=v,y=v+m;S<y;S++)if(l(S),o.needsUpdate=!0,r(o,u,S,E,M,_,b,T))return!0}return!1};if(s){const v=s;s=function(m,p,x,M,_,b,T,E){return v(m,p,x,M,_,b,T,E)?!0:g(m,p,x,M,_,b,T,E)}}else s=g}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return ao.set(t.min,t.max,e),ao.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ao.intersectsBox(n),intersectsTriangle:n=>ao.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?hv:ev)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return Bx(this,t,e,n,s)}}const hs={Mesh:jt.prototype.raycast,Line:Fo.prototype.raycast,LineSegments:Gh.prototype.raycast,LineLoop:kh.prototype.raycast,Points:Bo.prototype.raycast,BatchedMesh:B_.prototype.raycast},Ue=new jt,lo=[];function fv(i,t){if(this.isBatchedMesh)dv.call(this,i,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof jt)n=hs.Mesh;else if(this instanceof Gh)n=hs.LineSegments;else if(this instanceof kh)n=hs.LineLoop;else if(this instanceof Fo)n=hs.Line;else if(this instanceof Bo)n=hs.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function dv(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Ue.material=this.material,Ue.geometry=this.geometry;const o=Ue.geometry.boundsTree,a=Ue.geometry.drawRange;Ue.geometry.boundingSphere===null&&(Ue.geometry.boundingSphere=new un);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const u=n[c].geometryIndex;if(Ue.geometry.boundsTree=e[u],this.getMatrixAt(c,Ue.matrixWorld).premultiply(r),!Ue.geometry.boundsTree){this.getBoundingBoxAt(u,Ue.geometry.boundingBox),this.getBoundingSphereAt(u,Ue.geometry.boundingSphere);const h=s[u];Ue.geometry.setDrawRange(h.start,h.count)}Ue.raycast(i,lo);for(let h=0,f=lo.length;h<f;h++){const d=lo[h];d.object=this,d.batchId=c,t.push(d)}lo.length=0}Ue.geometry.boundsTree=o,Ue.geometry.drawRange=a,Ue.material=null,Ue.geometry=null}else hs.BatchedMesh.call(this,i,t)}function pv(i={}){const{type:t=Ro}=i;return this.boundsTree=new t(this,i),this.boundsTree}function mv(){this.boundsTree=null}function gv(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new de;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Ju(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][f]);const g=Ju(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Ju(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new xe(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const v=u.getComponent(f,g);a.setComponent(f+h,g,v)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function zt(i,t){const e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)e.toArray(s,r*3);return i.setAttribute("color",new xe(s,3)),i}function Vt(i,t,e,n,s=0,r=0,o=0,a=1){return i.rotateX(s),i.rotateY(r),i.rotateZ(o),a!==1&&i.scale(a,a,a),i.translate(t,e,n),i}function me(i){const t=gv(i.map(e=>e.toNonIndexed()));return i.forEach(e=>e.dispose()),t}function Se(i,t,e=.08){const n=new It(t);return n.offsetHSL(i.range(-.02,.02),i.range(-e,e),i.range(-e,e)),`#${n.getHexString()}`}const _v={rock(i,t){const e=t.tint||"#8f8a80",n=[],s=i.int(1,3);for(let r=0;r<s;r++){const o=zt(new Pn(i.range(.5,1.1),0),Se(i,e));Vt(o,i.range(-.5,.5),i.range(.1,.4),i.range(-.5,.5),i.range(0,1),i.range(0,3),i.range(0,1)),n.push(o)}return me(n)},spikeRock(i,t){const e=t.tint||"#5d4a6b",n=[],s=i.int(2,4);for(let r=0;r<s;r++){const o=i.range(1.2,3),a=zt(new xn(i.range(.3,.6),o,5),Se(i,e));Vt(a,i.range(-.7,.7),o*.45,i.range(-.7,.7),i.range(-.25,.25),i.range(0,3),i.range(-.25,.25)),n.push(a)}return me(n)},cactus(i){const t=Se(i,"#4a8f4a"),e=i.range(1.6,2.8),n=[Vt(zt(new ie(.28,.34,e,7),t),0,e/2,0)],s=i.int(1,2);for(let r=0;r<s;r++){const o=r===0?1:-1,a=e*i.range(.4,.65);n.push(Vt(zt(new ie(.16,.18,.7,6),t),o*.45,a,0,0,0,o*Math.PI/2)),n.push(Vt(zt(new ie(.16,.18,.8,6),t),o*.72,a+.4,0))}return i.chance(.4)&&n.push(Vt(zt(new Gt(.14,6,5),"#ff7fb0"),0,e+.05,0)),me(n)},dryShrub(i){const t=[],e=i.int(3,5);for(let n=0;n<e;n++){const s=zt(new ie(.03,.05,i.range(.5,.9),4),Se(i,"#9a7a4a"));Vt(s,0,.3,0,i.range(-.5,.5),i.range(0,6),i.range(-.5,.5)),t.push(s)}return me(t)},palm(i){const t=[],e=i.range(2.5,3.6),n=i.range(-.12,.12);t.push(Vt(zt(new ie(.14,.24,e,6),"#9a7a52"),0,e/2,0,0,0,n));const s=-Math.sin(n)*e,r=5;for(let o=0;o<r;o++){const a=o/r*Math.PI*2+i.range(0,.5),c=zt(new xn(.22,1.8,4),Se(i,"#4faf5f"));c.scale(1,1,.3),Vt(c,s+Math.cos(a)*.8,e+.1,Math.sin(a)*.8,Math.PI/2.6*Math.cos(a),-a,Math.PI/2.6*Math.sin(a)*.5),t.push(c)}return me(t)},coral(i){const t=[],e=i.pick(["#ff7fa0","#ffa05a","#cf7fff","#5affd0"]),n=i.int(3,6);for(let s=0;s<n;s++){const r=i.range(.6,1.4),o=zt(new ie(.06,.12,r,5),Se(i,e));Vt(o,i.range(-.3,.3),r/2,i.range(-.3,.3),i.range(-.4,.4),0,i.range(-.4,.4)),t.push(o),t.push(Vt(zt(new Gt(.12,5,4),Se(i,e)),i.range(-.3,.3),r,i.range(-.3,.3)))}return me(t)},vent(i){const t=[Vt(zt(new ie(.5,.9,1.1,7),"#4a4040"),0,.55,0),Vt(zt(new ie(.32,.5,.4,7),"#332b2b"),0,1.25,0)];return me(t)},tentacle(i){const t=[],e=Se(i,"#7a4a8f"),n=4;let s=0,r=0,o=i.range(-.3,.3);for(let a=0;a<n;a++){const c=.8-a*.12,l=.22-a*.045,u=zt(new ie(l,l+.05,c,6),e);Vt(u,s,r+c/2,0,0,0,o*(a+1)*.6),t.push(u),s-=Math.sin(o*(a+1)*.6)*c,r+=Math.cos(o*(a+1)*.6)*c}return t.push(Vt(zt(new Gt(.16,6,5),"#c6ff4f"),s,r,0)),me(t)},fairyTree(i){const t=i.range(1.8,3),e=i.pick(["#ff9ad5","#b89aff","#9adfff"]),n=[Vt(zt(new ie(.12,.2,t,6),"#e8d8c8"),0,t/2,0),Vt(zt(new Pn(i.range(.8,1.2),1),Se(i,e)),0,t+.5,0)];return i.chance(.6)&&n.push(Vt(zt(new Pn(.5,1),Se(i,e)),i.range(-.7,.7),t+.1,i.range(-.7,.7))),me(n)},glowFlower(i){const t=i.pick(["#ffe97f","#ff9ad5","#9adfff","#c6ff8f"]),e=i.range(.5,1.1);return me([Vt(zt(new ie(.03,.04,e,4),"#5a8f5a"),0,e/2,0),Vt(zt(new Fi(.18,0),t),0,e+.12,0)])},smallMushroom(i,t){const e=t.glow||"#d6a0ff",n=i.range(.35,.7);return me([Vt(zt(new ie(.08,.11,n,5),"#e8e0d8"),0,n/2,0),Vt(zt(new Gt(.28,7,5,0,Math.PI*2,0,Math.PI/2),Se(i,e)),0,n,0)])},giantMushroom(i){const t=i.pick(["#cf5a8f","#8f5acf","#5a8fcf"]),e=i.range(2.2,4),n=i.range(1.2,1.9),s=zt(new Gt(n,9,6,0,Math.PI*2,0,Math.PI/2),Se(i,t));return s.scale(1,.65,1),me([Vt(zt(new ie(.3,.45,e,7),"#e8e0d8"),0,e/2,0),Vt(s,0,e,0),Vt(zt(new Gt(n*.25,5,4),"#f8f0e8"),n*.5,e+n*.45,0)])},leafyTree(i){const t=i.range(1.6,2.8),e=i.pick(["#4a8f3a","#5aa84a","#3a7a4a"]),n=[Vt(zt(new ie(.14,.22,t,6),"#6a4a32"),0,t/2,0)],s=i.int(2,3);for(let r=0;r<s;r++)n.push(Vt(zt(new Pn(i.range(.7,1.1),1),Se(i,e)),i.range(-.5,.5),t+i.range(0,.8),i.range(-.5,.5)));return me(n)},fern(i){const t=[],e=i.int(4,6);for(let n=0;n<e;n++){const s=n/e*Math.PI*2,r=zt(new xn(.12,i.range(.6,1),4),Se(i,"#3a8f5a"));r.scale(1,1,.3),Vt(r,Math.cos(s)*.25,.35,Math.sin(s)*.25,Math.cos(s)*.7,-s,Math.sin(s)*.35),t.push(r)}return me(t)},snowPine(i){const t=i.range(1.8,3),e=[Vt(zt(new ie(.12,.18,t*.4,6),"#5a4a3a"),0,t*.2,0)],n=3;for(let s=0;s<n;s++){const r=s/n,o=zt(new xn(.9*(1-r*.55),t*.42,7),s===0?"#3a6a52":Se(i,"#e8f4f8",.04));Vt(o,0,t*(.35+r*.3),0),e.push(o)}return me(e)},iceSpike(i){const t=[],e=i.int(2,4);for(let n=0;n<e;n++){const s=i.range(1,3.2),r=zt(new xn(i.range(.2,.45),s,5),Se(i,"#cfeffc",.05));Vt(r,i.range(-.6,.6),s*.42,i.range(-.6,.6),i.range(-.3,.3),i.range(0,3),i.range(-.3,.3)),t.push(r)}return me(t)},crystal(i,t){const e=t.tint||"#7fdfff",n=[],s=i.int(2,4);for(let r=0;r<s;r++){const o=i.range(.8,2.6),a=zt(new Fi(i.range(.25,.5),0),Se(i,e,.05));a.scale(1,o,1),Vt(a,i.range(-.6,.6),o*.35,i.range(-.6,.6),i.range(-.35,.35),i.range(0,3),i.range(-.35,.35)),n.push(a)}return me(n)},obsidian(i){const t=[],e=i.int(2,4);for(let n=0;n<e;n++){const s=i.range(.9,2.4),r=zt(new Oo(i.range(.4,.8),0),Se(i,"#2b2233",.04));r.scale(1,s,1),Vt(r,i.range(-.6,.6),s*.3,i.range(-.6,.6),i.range(0,.6),i.range(0,3),i.range(0,.6)),t.push(r)}return me(t)},candyCane(i){const t=[],n=i.int(5,7);for(let r=0;r<n;r++){const o=zt(new ie(.14,.14,.35,7),r%2===0?"#ff4a5a":"#fff8f8");Vt(o,0,.35*(r+.5),0),t.push(o)}const s=zt(new Qc(.4,.13,6,10,Math.PI),"#ff4a5a");return Vt(s,.4,.35*n,0),t.push(s),me(t)},lollipop(i){const t=i.pick(["#ff5ad6","#5ad6ff","#ffd65a","#8fff5a"]),e=i.range(1.2,2),n=zt(new Gt(.55,9,7),Se(i,t));return n.scale(1,1,.35),me([Vt(zt(new ie(.07,.07,e,5),"#fff8f0"),0,e/2,0),Vt(n,0,e+.45,0,0,i.range(0,3),0)])},gumdrop(i){const t=i.pick(["#ff5a5a","#5aff8f","#5a8fff","#ffdf5a","#cf5aff"]),e=zt(new Gt(i.range(.4,.8),8,6,0,Math.PI*2,0,Math.PI/2),Se(i,t));return e.scale(1,.8,1),me([Vt(e,0,.05,0)])},glitchCube(i){const t=i.pick(["#ff2bd6","#2bffd6","#2b6aff"]),e=[],n=i.int(1,3);for(let s=0;s<n;s++){const r=i.range(.4,1.1),o=zt(new yn(r,r,r),s===0?t:"#10101c");Vt(o,i.range(-.5,.5),i.range(.4,2.2),i.range(-.5,.5),i.range(0,1),i.range(0,1),i.range(0,1)),e.push(o)}return me(e)}},xv=new Set(["glowFlower","smallMushroom","crystal","glitchCube","tentacle","coral"]);function vv(i,t,e){return _v[i](t,e)}function yv(i){return xv.has(i)}function ge(i,t={}){return new hi({color:i,flatShading:!0,roughness:.8,...t})}function Bt(i,t,e,n=0,s=0,r=0){const o=new jt(t,e);return o.position.set(n,s,r),i.add(o),o}function Vn(i,t,e,n,s,r,o){const a=new he;return a.position.set(t,e,n),Bt(a,new ie(r,r*.8,s,5),o,0,-s/2,0),i.add(a),a}const Mv={desert(i){const t=new he,e=ge(i.pick(["#d9a05b","#c2823f","#e8c890"]));Bt(t,new Gt(.5,8,6),e).scale.set(.9,.8,1.2),Bt(t,new ie(.09,.13,1,5),e,0,.5,.45).rotation.x=.5,Bt(t,new Gt(.2,7,5),e,0,.95,.75),Bt(t,new xn(.07,.35,5),ge("#6b4a2a"),0,.92,1).rotation.x=Math.PI/2;const s=[Vn(t,-.22,-.25,0,1.3,.07,e),Vn(t,.22,-.25,0,1.3,.07,e)];return t.userData={mode:"walk",speed:3.2,bodyHeight:1.6,legs:s},t},ocean(i){const t=new he,e=ge(i.pick(["#e85a4f","#ff8c5a","#cf5a8f"]));Bt(t,new Gt(.55,8,6),e).scale.set(1.3,.55,1),Bt(t,new Gt(.22,6,5),e,-.6,.05,.45),Bt(t,new Gt(.22,6,5),e,.6,.05,.45);for(const r of[-1,1]){const o=Bt(t,new ie(.04,.04,.35,4),e,r*.18,.4,.3);Bt(o,new Gt(.09,6,5),ge("#1a1a2e"),0,.22,0)}const s=[];for(let r=0;r<3;r++)for(const o of[-1,1])s.push(Vn(t,o*.6,-.05,-.3+r*.3,.5,.05,e));return t.userData={mode:"walk",speed:2.2,bodyHeight:.55,legs:s},t},toxic(i){const t=new he,e=ge(i.pick(["#8fbf3f","#6b8f2a","#9a6bbf"]),{roughness:.4}),n=Bt(t,new Gt(.55,8,6),e);n.scale.set(1,.6,1.4),Bt(t,new Gt(.3,7,5),e,0,.1,-.8).scale.set(1,.6,1);for(const s of[-1,1]){const r=Bt(t,new ie(.05,.06,.5,4),e,s*.2,.45,.4);r.rotation.z=-s*.3,Bt(r,new Gt(.11,6,5),ge("#c6ff4f",{emissive:"#c6ff4f",emissiveIntensity:.6}),0,.3,0)}return t.userData={mode:"walk",speed:1.2,bodyHeight:.4,legs:[],pulse:n},t},fairy(i){const t=new he,e=i.pick(["#ffd6fa","#b8a0ff","#a0e8ff"]);Bt(t,new ui(.14,.3,3,6),ge("#5a4a6b")).rotation.x=Math.PI/2;const n=[];for(const s of[-1,1]){const r=new he;r.position.set(s*.1,.05,0);const o=Bt(r,new yn(.7,.02,.45),ge(e,{emissive:e,emissiveIntensity:.5,transparent:!0,opacity:.85}),s*.38,0,0);o.rotation.y=s*.2,t.add(r),n.push({pivot:r,side:s})}return t.userData={mode:"float",speed:2.6,bodyHeight:.3,wings:n},t},ice(i){const t=new he,e=new he;t.add(e);const n=ge(i.pick(["#2a3a4a","#3a4a5d","#1d2b3a"]));Bt(e,new ui(.35,.4,4,8),n,0,.15,0).scale.set(1,1,.9),Bt(e,new Gt(.28,8,6),ge("#f0f4f8"),0,.1,.18).scale.set(.85,1.1,.7),Bt(e,new xn(.07,.25,5),ge("#ff9a3f"),0,.55,.35).rotation.x=Math.PI/2;const r=[];for(const o of[-1,1]){const a=new he;a.position.set(o*.36,.25,0),Bt(a,new yn(.1,.45,.2),n,0,-.2,0),e.add(a),r.push({pivot:a,side:o})}return t.userData={mode:"walk",speed:1.8,bodyHeight:.5,legs:[],wings:r,waddlePart:e},t},lava(i){const t=new he,e=ge("#2b2222");Bt(t,new Gt(.6,8,6,0,Math.PI*2,0,Math.PI/2),e).scale.set(1.1,.8,1.3);const s=Bt(t,new Gt(.42,8,6),ge("#ff6a00",{emissive:"#ff6a00",emissiveIntensity:1.2}),0,-.05,0);s.scale.set(1,.5,1.15),Bt(t,new Gt(.18,6,5),e,0,.05,.75);const r=[];for(const o of[-1,1])r.push(Vn(t,o*.5,-.1,.35,.4,.06,e)),r.push(Vn(t,o*.5,-.1,-.35,.4,.06,e));return t.userData={mode:"walk",speed:1.3,bodyHeight:.5,legs:r,pulse:s},t},forest(i){const t=new he,e=ge(i.pick(["#8f6b4a","#6b5a3a","#a8825d"])),n=Bt(t,new ui(.3,.7,4,8),e,0,.1,0);n.rotation.x=Math.PI/2,Bt(t,new ie(.1,.12,.6,5),e,0,.5,.45).rotation.x=.45;const s=Bt(t,new Gt(.18,7,5),e,0,.78,.62);for(const o of[-1,1])Bt(s,new ie(.025,.04,.45,4),ge("#d9c9a0"),o*.12,.28,-.05).rotation.z=-o*.45;const r=[];for(const o of[-1,1])r.push(Vn(t,o*.18,-.05,.35,.85,.05,e)),r.push(Vn(t,o*.18,-.05,-.35,.85,.05,e));return t.userData={mode:"walk",speed:3.4,bodyHeight:.95,legs:r},t},mushroom(i){const t=new he,e=ge(i.pick(["#9a7ab8","#7a9ab8","#b87a9a"]),{roughness:.5}),n=Bt(t,new Gt(.45,8,6),e);n.scale.set(1,.85,1),Bt(t,new Gt(.22,6,5),e,-.38,-.15,-.1),Bt(t,new Gt(.22,6,5),e,.38,-.15,-.1);for(const r of[-1,1])Bt(t,new Gt(.09,6,5),ge("#fff0d6",{emissive:"#ffe97f",emissiveIntensity:.4}),r*.18,.3,.35);return Bt(t,new Gt(.22,7,5,0,Math.PI*2,0,Math.PI/2),ge("#d6a0ff",{emissive:"#d6a0ff",emissiveIntensity:.4}),0,.38,-.12).scale.set(1,.7,1),t.userData={mode:"hop",speed:3,bodyHeight:.5,legs:[],pulse:n},t},candy(i){const t=new he,e=ge(i.pick(["#ff5a8f","#5ad6ff","#8fff5a","#ffdf5a"]),{roughness:.3,transparent:!0,opacity:.92});Bt(t,new Gt(.4,8,6),e,0,.1,0).scale.set(1,1.1,.8);const n=Bt(t,new Gt(.28,8,6),e,0,.7,0);Bt(n,new Gt(.1,6,5),e,-.18,.22,0),Bt(n,new Gt(.1,6,5),e,.18,.22,0);const s=[Vn(t,-.18,-.25,0,.35,.09,e),Vn(t,.18,-.25,0,.35,.09,e)],r=[];for(const o of[-1,1]){const a=new he;a.position.set(o*.4,.3,0),Bt(a,new ui(.08,.25,3,5),e,0,-.15,0),t.add(a),r.push({pivot:a,side:o})}return t.userData={mode:"walk",speed:2,bodyHeight:.65,legs:s,wings:r},t},crystal(i){const t=new he,e=i.pick(["#7fdfff","#ff7fd6","#b8a0ff"]),n=Bt(t,new Fi(.4,0),ge(e,{emissive:e,emissiveIntensity:.9,roughness:.2}));n.scale.set(1,1.4,1);const s=[];for(let r=0;r<3;r++){const o=r/3*Math.PI*2,a=new he;a.position.set(Math.cos(o)*.2,-.3,Math.sin(o)*.2),Bt(a,new ie(.02,.015,.7,4),ge(e,{emissive:e,emissiveIntensity:.4}),0,-.35,0),t.add(a),s.push(a)}return t.userData={mode:"float",speed:1.6,bodyHeight:.6,legs:s,spin:n},t},glitch(i){const t=new he,e=[],n=["#ff2bd6","#2bffd6","#ffffff"];for(let s=0;s<3;s++){const r=.32-s*.07,o=Bt(t,new yn(r,r,r),ge(n[s],{emissive:n[s],emissiveIntensity:.9}),i.range(-.25,.25),i.range(-.2,.3),i.range(-.25,.25));e.push(o)}return t.userData={mode:"float",speed:2.4,bodyHeight:.4,jitterParts:e},t}};class Sv{constructor(t,e){const n=Mv[t.type.id];this.root=n(e),this.meta=this.root.userData;const s=e.range(.8,1.35);this.root.scale.setScalar(s),this.bodyHeight=this.meta.bodyHeight*s,this.speed=this.meta.speed*e.range(.85,1.2);const r=t.type.liquid&&t.type.liquidClass!=="solid"&&this.meta.mode!=="float"?t.type.liquid.level+.04:0,o=t.randomSurfacePoint(r,1)||{direction:new R(0,1,0)};this.direction=o.direction.clone(),this.heading=new R().randomDirection().cross(this.direction).normalize(),this.heading.lengthSq()<.5&&this.heading.set(1,0,0),this.phase=e.range(0,Math.PI*2),this.turnPhase=e.range(0,Math.PI*2),this.jitterTimer=0,t.group.add(this.root)}update(t,e,n,s){const r=this.meta;let o=this.speed;if(s&&r.mode!=="float"){const d=this.root.position.clone().sub(s);d.lengthSq()<49&&(d.addScaledVector(this.direction,-d.dot(this.direction)),d.lengthSq()>1e-4&&this.heading.copy(d.normalize()),o*=2.2)}this.heading.applyAxisAngle(this.direction,Math.sin(e*.6+this.turnPhase)*.9*t);let a=o;r.mode==="hop"&&(a*=Math.max(.1,Math.sin(e*4+this.phase)));const c=a*t/n.radius,l=this.direction.clone().multiplyScalar(Math.cos(c)).addScaledVector(this.heading,Math.sin(c)).normalize();n.type.liquid&&n.type.liquidClass!=="solid"&&r.mode!=="float"&&n.groundRadiusLocal(l)+.6<n.liquidRadius()?this.heading.negate():(this.direction.copy(l),this.heading.addScaledVector(this.direction,-this.heading.dot(this.direction)).normalize());let h=this.bodyHeight;r.mode==="hop"&&(h+=Math.max(0,Math.sin(e*4+this.phase))*1.2),r.mode==="float"&&(h+=2+Math.sin(e*1.4+this.phase)*.5),this.root.position.copy(this.direction).multiplyScalar(n.groundRadiusLocal(this.direction)+h);const f=new R().crossVectors(this.direction,this.heading);this.root.quaternion.setFromRotationMatrix(new Lt().makeBasis(f,this.direction,this.heading)),this.animate(t,e,o)}animate(t,e,n){const s=this.meta;if(this.phase+=t*n*2.2,s.legs&&s.legs.forEach((r,o)=>{r.rotation.x=Math.sin(this.phase+o%2*Math.PI)*.55}),s.wings)for(const{pivot:r,side:o}of s.wings)r.rotation.z=o*(.4+Math.sin(e*10+this.phase)*.5);if(s.pulse&&(s.pulse.scale.y=s.pulse.scale.y*.9+(.7+Math.sin(e*3+this.phase)*.08)*.1),s.spin&&(s.spin.rotation.y+=t*1.5),s.waddlePart&&(s.waddlePart.rotation.z=Math.sin(this.phase)*.16),s.jitterParts&&(this.jitterTimer-=t,this.jitterTimer<=0)){this.jitterTimer=.25;for(const r of s.jitterParts)r.position.x+=(Math.random()-.5)*.2,r.position.y+=(Math.random()-.5)*.2,r.position.z+=(Math.random()-.5)*.2,r.position.clampLength(0,.5)}}}de.prototype.computeBoundsTree=pv;de.prototype.disposeBoundsTree=mv;jt.prototype.raycast=fv;const Oa=new hr,Ev=400,bv=5,Tv=4,wv=8;let uo=null;function Av(){if(uo)return uo;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.4,"rgba(255,255,255,0.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),uo=new Wh(i),uo}const Ku={vertexShader:`
    varying float vIntensity;
    void main() {
      vec3 viewNormal = normalize(normalMatrix * normal);
      vIntensity = pow(0.72 - dot(viewNormal, vec3(0.0, 0.0, 1.0)), 2.5);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 glowColor;
    varying float vIntensity;
    void main() {
      gl_FragColor = vec4(glowColor, 1.0) * vIntensity;
    }
  `},ju={shard:()=>new Oo(.55,0).scale(1,1.6,1),pearl:()=>new Gt(.45,10,8),orb:()=>new Pn(.5,1),star:()=>new Fi(.55,0),gem:()=>new Fi(.45,0).scale(1,1.5,1),seed:()=>new xn(.35,.9,6),cube:()=>new yn(.6,.6,.6)};function Cv(i,t,e,n,s){switch(i){case"ridged":{let r=0,o=.6,a=s;for(let c=0;c<4;c++){const l=1-Math.abs(e(n.x*a,n.y*a,n.z*a));r+=l*l*o,o*=.5,a*=2.1}return Math.min(1,r*.9)}case"dunes":return .35+.32*Math.abs(Math.sin(t*4))+t*.18;case"terraced":{const r=.5+t*.5,o=6;return Math.floor(r*o)/o+(r*o-Math.floor(r*o))*.25/o}case"glitch":{const r=.5+t*.5,o=8;return Math.floor(r*o)/o+.06}case"gentle":return .5+t*.32;case"smooth":default:return .5+t*.5}}class Rv{constructor(t,e){this.type=t,this.radius=e.radius,this.orbitRadius=e.orbitRadius,this.orbitSpeed=e.orbitSpeed,this.orbitAngle=e.orbitPhase,this.inclination=e.inclination,this.spinAxis=e.spinAxis,this.spinSpeed=e.spinSpeed,this.spinAngle=0,this.visited=!1,this.rng=Kh(e.seed),this.name=ax(this.rng,e.orbitIndex),this.noise3D=ux(this.rng.next),this.noiseOffset=new R(this.rng.range(-50,50),this.rng.range(-50,50),this.rng.range(-50,50)),this.group=new he,this.prevCenter=new R,this.prevQuaternion=new vn,this.deltaQuaternion=new vn,this.collectibles=[],this.collectedCount=0,this.creatures=[],this.speciesName=null,this.speciesScanned=!1,this.buildTerrain(),this.buildLiquid(),this.buildAtmosphere(),this.buildProps(),this.buildCollectibles(),this.buildCreatures(),this.buildParticles(),this.applyOrbitTransform()}rawNoise(t){const e=this.type.noiseFrequency,n=this.noiseOffset;let s=0,r=.55,o=e;for(let a=0;a<4;a++)s+=r*this.noise3D(t.x*o+n.x,t.y*o+n.y,t.z*o+n.z),r*=.5,o*=2;return s}elevationAt(t){const e=this.rawNoise(t);let n=Cv(this.type.shape,e,this.noise3D,t,this.type.noiseFrequency);const s=this.type.liquid;return s&&s.basin&&n<s.level&&(n=s.level-(s.level-n)*s.basin),Tc.clamp(n,0,1)}surfaceRadiusFor(t){return this.radius*(1+this.type.amplitude*(t*2-1))}groundRadiusLocal(t){const e=this.radius*(1+this.type.amplitude)+6;Oa.origin.copy(t).multiplyScalar(e),Oa.direction.copy(t).negate();const n=this.terrain.geometry.boundsTree.raycastFirst(Oa);let s=n?n.point.length():this.surfaceRadiusFor(this.elevationAt(t));return this.type.liquidClass==="solid"&&this.type.liquid&&(s=Math.max(s,this.liquidRadius())),s}heightAtWorldDirection(t){const e=t.clone().applyQuaternion(this.group.quaternion.clone().invert()).normalize();return this.groundRadiusLocal(e)}liquidRadius(){return this.type.liquid?this.surfaceRadiusFor(this.type.liquid.level):0}colorForElevation(t){const e=this.type.colorStops;let n=e[0][1];for(const[s,r]of e)t>=s&&(n=r);return new It(n)}buildTerrain(){const t=new Pn(this.radius,bv),e=t.attributes.position,n=new R,s=new Float32Array(e.count);for(let a=0;a<e.count;a++){n.fromBufferAttribute(e,a).normalize();const c=this.elevationAt(n);s[a]=c,n.multiplyScalar(this.surfaceRadiusFor(c)),e.setXYZ(a,n.x,n.y,n.z)}const r=new Float32Array(e.count*3),o=new It;for(let a=0;a<e.count;a+=3){const c=(s[a]+s[a+1]+s[a+2])/3;o.copy(this.colorForElevation(c));const l=this.rng.range(.94,1.06);o.multiplyScalar(l);for(let u=0;u<3;u++)o.toArray(r,(a+u)*3)}t.setAttribute("color",new xe(r,3)),t.computeVertexNormals(),t.computeBoundsTree(),this.terrain=new jt(t,new hi({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0})),this.group.add(this.terrain)}buildLiquid(){const t=this.type.liquid;if(!t)return;const e=new Pn(this.liquidRadius(),Tv),n=e.attributes.position,s=new R;for(let o=0;o<n.count;o++){s.fromBufferAttribute(n,o);const a=1+this.noise3D(s.x*.3,s.y*.3,s.z*.3)*.004;n.setXYZ(o,s.x*a,s.y*a,s.z*a)}e.computeVertexNormals();const r=new hi({color:t.color,transparent:t.opacity<1,opacity:t.opacity,flatShading:!0,roughness:.25,metalness:.1,emissive:t.emissive,emissiveIntensity:t.emissiveIntensity});this.group.add(new jt(e,r))}buildAtmosphere(){const t=new Gt(this.radius*1.25,32,24),e=new Jn({uniforms:{glowColor:{value:new It(this.type.atmosphere)}},vertexShader:Ku.vertexShader,fragmentShader:Ku.fragmentShader,side:Ge,blending:gs,transparent:!0,depthWrite:!1});this.group.add(new jt(t,e))}randomSurfacePoint(t,e,n=30){const s=new R;for(let r=0;r<n;r++){if(s.set(this.rng.range(-1,1),this.rng.range(-1,1),this.rng.range(-1,1)),s.lengthSq()<.01)continue;s.normalize();const o=this.elevationAt(s);if(o>=t&&o<=e)return{direction:s.clone(),elevation:o}}return null}buildProps(){const t=new R(0,1,0),e=new Lt,n=new vn,s=new vn,r=new R,o=new R;for(const a of this.type.props){const c=vv(a.builder,this.rng,a),l=new hi({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0});yv(a.builder)&&(l.emissive=new It(a.glow||a.tint||"#888888"),l.emissiveIntensity=.55);const u=new P_(c,l,a.count);let h=0;for(let f=0;f<a.count;f++){const d=this.randomSurfacePoint(a.minE,a.maxE);if(!d)continue;o.copy(d.direction).multiplyScalar(this.groundRadiusLocal(d.direction)-.08),n.setFromUnitVectors(t,d.direction),s.setFromEuler(new Sn(this.rng.range(-.06,.06),this.rng.range(0,Math.PI*2),this.rng.range(-.06,.06))),n.multiply(s);const g=this.rng.range(.7,1.4);r.set(g,g,g),e.compose(o,n,r),u.setMatrixAt(h++,e)}u.count=h,this.group.add(u)}}buildCollectibles(){const t=this.type.discovery,e=ju[t.shape]||ju.gem,n=new hi({color:t.color,emissive:t.color,emissiveIntensity:1.4,roughness:.3}),s=new Yc({map:Av(),color:t.color,transparent:!0,blending:gs,depthWrite:!1}),r=this.type.liquid?this.type.liquid.level+.02:0;for(let o=0;o<wv;o++){const a=this.randomSurfacePoint(r,1);if(!a)continue;const c=new jt(e(),n),l=new Hh(s);l.scale.setScalar(3.2),c.add(l);const u=this.groundRadiusLocal(a.direction)+1.1;c.position.copy(a.direction).multiplyScalar(u),this.group.add(c),this.collectibles.push({mesh:c,direction:a.direction,baseRadius:u,phase:this.rng.range(0,Math.PI*2),name:cx(this.rng,t),collected:!1})}}buildCreatures(){const t=this.type.creature;if(!t)return;this.speciesName=`${this.rng.pick(t.prefixes)} ${this.rng.pick(t.suffixes)}`;const e=this.rng.int(t.count[0],t.count[1]);for(let n=0;n<e;n++)this.creatures.push(new Sv(this,this.rng))}buildParticles(){const t=this.type.particles;if(!t)return;const e=new Float32Array(t.count*3),n=new R;for(let o=0;o<t.count;o++)n.set(this.rng.range(-1,1),this.rng.range(-1,1),this.rng.range(-1,1)).normalize(),n.multiplyScalar(this.radius+this.rng.range(1,t.height+this.radius*this.type.amplitude*2)),n.toArray(e,o*3);const s=new de;s.setAttribute("position",new xe(e,3));const r=new $c({color:t.color,size:t.size,transparent:!0,opacity:.8,blending:gs,depthWrite:!1,sizeAttenuation:!0});this.group.add(new Bo(s,r))}get center(){return this.group.position}applyOrbitTransform(){const t=this.orbitAngle;this.group.position.set(Math.cos(t)*this.orbitRadius,Math.sin(t)*this.orbitRadius*Math.sin(this.inclination),Math.sin(t)*this.orbitRadius*Math.cos(this.inclination)),this.group.quaternion.setFromAxisAngle(this.spinAxis,this.spinAngle)}update(t,e,n){this.prevCenter.copy(this.group.position),this.prevQuaternion.copy(this.group.quaternion),this.orbitAngle+=this.orbitSpeed*t,this.spinAngle+=this.spinSpeed*t,this.applyOrbitTransform(),this.deltaQuaternion.copy(this.group.quaternion).multiply(this.prevQuaternion.clone().invert());for(const s of this.collectibles){if(s.collected)continue;const r=Math.sin(e*1.8+s.phase)*.35;s.mesh.position.copy(s.direction).multiplyScalar(s.baseRadius+r),s.mesh.rotation.y=e*1.2+s.phase}if(n&&n.distanceTo(this.group.position)<Ev){const s=n.clone().sub(this.group.position).applyQuaternion(this.group.quaternion.clone().invert());for(const r of this.creatures)r.update(t,e,this,s)}}tryCollect(t,e=2.4){const n=new R;for(const s of this.collectibles)if(!s.collected&&(s.mesh.getWorldPosition(n),n.distanceToSquared(t)<e*e))return s.collected=!0,this.collectedCount++,this.group.remove(s.mesh),s.mesh.geometry.dispose(),s.name;return null}tryScan(t,e=5){if(this.speciesScanned||this.creatures.length===0)return null;const n=new R;for(const s of this.creatures)if(s.root.getWorldPosition(n),n.distanceToSquared(t)<e*e)return this.speciesScanned=!0,this.speciesName;return null}totalDiscoveryCount(){return this.collectibles.length+(this.creatures.length>0?1:0)}discoveredCount(){return this.collectedCount+(this.speciesScanned?1:0)}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose())})}}const Pv=8,Qu=130,Iv=85;class rf{constructor(t,e){this.scene=t,this.seed=e,this.planets=[],this.group=new he,t.add(this.group),this.generate()}generate(){const t=Kh(this.seed),e=[...ix];for(let n=e.length-1;n>0;n--){const s=t.int(0,n);[e[n],e[s]]=[e[s],e[n]]}for(let n=0;n<Pv;n++){const s=e[n%e.length],r=new R(t.range(-.25,.25),1,t.range(-.25,.25)).normalize(),o=Qu+n*Iv+t.range(-15,15),a=new Rv(s,{seed:t.int(0,268435455),radius:t.range(17,28),orbitRadius:o,orbitSpeed:t.range(.008,.02)*(t.chance(.25)?-1:1)*Math.sqrt(Qu/o),orbitPhase:t.range(0,Math.PI*2),orbitIndex:n,inclination:t.range(-.18,.18),spinAxis:r,spinSpeed:t.range(.015,.045)});this.planets.push(a),this.group.add(a.group)}}update(t,e,n){for(const s of this.planets)s.update(t,e,n)}nearestPlanetTo(t){let e=null,n=1/0;for(const s of this.planets){const r=t.distanceTo(s.center)-s.radius;r<n&&(n=r,e=s)}return e}totalDiscoveries(){return this.planets.reduce((t,e)=>t+e.totalDiscoveryCount(),0)}dispose(){for(const t of this.planets)t.dispose();this.scene.remove(this.group),this.planets=[]}}function Lv(i=128){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=i/2,s=e.createRadialGradient(n,n,0,n,n,n);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,235,190,0.55)"),s.addColorStop(.6,"rgba(255,200,120,0.12)"),s.addColorStop(1,"rgba(255,180,80,0)"),e.fillStyle=s,e.fillRect(0,0,i,i),new Wh(t)}function Dv(i){const e=new Float32Array(7200),n=new Float32Array(2400*3),s=new It;for(let h=0;h<2400;h++){const f=new R().randomDirection();f.multiplyScalar(2600+Math.random()*1400),f.toArray(e,h*3),s.setHSL(Math.random()<.12?.6:Math.random()<.5?.12:0,.4*Math.random(),.7+Math.random()*.3),s.toArray(n,h*3)}const r=new de;r.setAttribute("position",new xe(e,3)),r.setAttribute("color",new xe(n,3));const o=new Bo(r,new $c({size:2.4,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));i.add(o);const a=38,c=new jt(new Pn(a,3),new cr({color:"#ffdd66"}));i.add(c);const l=new Hh(new Yc({map:Lv(),color:"#ffcf7f",transparent:!0,blending:gs,depthWrite:!1}));l.scale.setScalar(a*7),c.add(l);const u=new Jh("#fff2dd",2.4,0,0);return i.add(u),i.add(new ex("#5a6a9a",.55)),{sunRadius:a}}let Pt=null,rr=null,fs=null;function Uv(){if(Pt)return Pt;Pt=new(window.AudioContext||window.webkitAudioContext);const i=Pt.createBuffer(1,Pt.sampleRate*2,Pt.sampleRate),t=i.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;const e=Pt.createBufferSource();return e.buffer=i,e.loop=!0,fs=Pt.createBiquadFilter(),fs.type="bandpass",fs.frequency.value=400,fs.Q.value=.8,rr=Pt.createGain(),rr.gain.value=0,e.connect(fs).connect(rr).connect(Pt.destination),e.start(),Pt}function Nv(){Uv(),Pt.state==="suspended"&&Pt.resume()}function Fv(){if(!Pt)return;const i=Pt.currentTime;[880,1174.66,1567.98].forEach((e,n)=>{const s=Pt.createOscillator(),r=Pt.createGain();s.type="triangle",s.frequency.value=e;const o=i+n*.07;r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(.18,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+.45),s.connect(r).connect(Pt.destination),s.start(o),s.stop(o+.5)})}function rl(){if(!Pt)return;const i=Pt.currentTime,t=Pt.createOscillator(),e=Pt.createGain();t.type="sawtooth",t.frequency.setValueAtTime(120,i),t.frequency.exponentialRampToValueAtTime(900,i+.5),e.gain.setValueAtTime(1e-4,i),e.gain.exponentialRampToValueAtTime(.1,i+.05),e.gain.exponentialRampToValueAtTime(1e-4,i+.7),t.connect(e).connect(Pt.destination),t.start(i),t.stop(i+.8)}function Bv(){if(!Pt)return;const i=Pt.currentTime,t=Math.floor(Pt.sampleRate*.4),e=Pt.createBuffer(1,t,Pt.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=(Math.random()*2-1)*(1-a/t);const s=Pt.createBufferSource();s.buffer=e;const r=Pt.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,i),r.frequency.exponentialRampToValueAtTime(300,i+.35);const o=Pt.createGain();o.gain.value=.25,s.connect(r).connect(o).connect(Pt.destination),s.start(i)}function Ov(){if(!Pt)return;const i=Pt.currentTime,t=Pt.createOscillator(),e=Pt.createGain();t.type="square",t.frequency.setValueAtTime(160,i),t.frequency.exponentialRampToValueAtTime(60,i+.25),e.gain.setValueAtTime(.18,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.3),t.connect(e).connect(Pt.destination),t.start(i),t.stop(i+.35)}function zv(){if(!Pt)return;const i=Pt.currentTime;[523.25,783.99].forEach((t,e)=>{const n=Pt.createOscillator(),s=Pt.createGain();n.type="sine",n.frequency.value=t;const r=i+e*.09;s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.15,r+.02),s.gain.exponentialRampToValueAtTime(1e-4,r+.4),n.connect(s).connect(Pt.destination),n.start(r),n.stop(r+.45)})}function Vv(i,t){if(!Pt||!rr)return;const e=Pt.currentTime,n=i?t?.12:.06:0,s=t?900:420;rr.gain.setTargetAtTime(n,e,.08),fs.frequency.setTargetAtTime(s,e,.15)}const Hv=9,Gv=15,th=13,kv=32,Wv=1.35,Xv=3,qv=46,Yv=30,$v=2.4,Zv=40,Jv=100,Ks=1,Kv=1.6,ho=100,jv=12,Qv=2.2,ty=6,eh=35,nh=6.5,ey=24,ih=16,ny=9,sh=.35,iy=20;class sy{constructor(t){this.scene=t,this.position=new R,this.velocity=new R,this.up=new R(0,1,0),this.facing=new R(0,0,-1),this.grounded=!1,this.planet=null,this.walkCycle=0,this.jetting=!1,this.swimming=!1,this.fuel=ho,this.keys={},this.jumpQueued=!1,window.addEventListener("keydown",e=>{e.code==="Space"&&!this.keys.Space&&(this.jumpQueued=!0),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.buildCharacter(),this.buildShadow()}get fuelFraction(){return this.fuel/ho}buildCharacter(){const t=new hi({color:"#f0f2f5",roughness:.6}),e=new hi({color:"#ff8c3a",roughness:.5}),n=new hi({color:"#1a2a4a",roughness:.15,metalness:.4});this.character=new he;const s=new jt(new ui(.34,.42,4,10),t);s.position.y=.78,this.character.add(s);const r=new jt(new Gt(.3,14,10),t);r.position.y=1.32,this.character.add(r);const o=new jt(new Gt(.24,12,8),n);o.position.set(0,1.34,.14),o.scale.set(1,.8,.75),this.character.add(o);const a=new jt(new yn(.44,.54,.26),e);a.position.set(0,.85,-.34),this.character.add(a),this.jetGlow=new jt(new xn(.14,.7,7),new cr({color:"#7fd0ff",transparent:!0,opacity:0})),this.jetGlow.position.set(0,.35,-.34),this.jetGlow.rotation.x=Math.PI,this.character.add(this.jetGlow),this.limbs=[];const c=new ui(.09,.32,3,6),l=[{x:-.15,y:.42,arm:!1},{x:.15,y:.42,arm:!1},{x:-.42,y:1,arm:!0},{x:.42,y:1,arm:!0}];for(const h of l){const f=new he;f.position.set(h.x,h.y,0);const d=new jt(c,h.arm?t:e);d.position.y=-.24,f.add(d),this.character.add(f),this.limbs.push({pivot:f,arm:h.arm,side:Math.sign(h.x)})}const u=new Jh("#bfd4ff",18,30,1.6);u.position.y=2.2,this.character.add(u),this.scene.add(this.character)}buildShadow(){this.shadow=new jt(new jc(.85,20),new cr({color:"#000000",transparent:!0,opacity:.3,depthWrite:!1})),this.shadow.geometry.rotateX(-Math.PI/2),this.shadow.renderOrder=1,this.scene.add(this.shadow)}spawnOn(t){this.planet=t;const e=new R(0,1,0).applyQuaternion(t.group.quaternion),n=t.heightAtWorldDirection(e);this.position.copy(t.center).addScaledVector(e,n+Ks),this.velocity.set(0,0,0),this.up.copy(e),this.grounded=!0}rescueTo(t){const e=new R().subVectors(this.position,t.center).normalize();e.lengthSq()<.5&&e.set(0,1,0);const n=t.heightAtWorldDirection(e);this.position.copy(t.center).addScaledVector(e,n+Ks+4),this.velocity.set(0,0,0),this.grounded=!1}applyPlanetCarry(t){const e=this.position.distanceTo(t.prevCenter),n=t.radius*(1+t.type.amplitude);if(!this.grounded&&e>n*Kv)return;const s=this.position.clone().sub(t.prevCenter).applyQuaternion(t.deltaQuaternion);this.position.copy(t.center).add(s),this.velocity.applyQuaternion(t.deltaQuaternion),this.up.applyQuaternion(t.deltaQuaternion),this.facing.applyQuaternion(t.deltaQuaternion)}update(t,e,n,s){this.planet=s.nearestPlanetTo(this.position);const r=this.planet;r&&this.applyPlanetCarry(r);const o=new R().subVectors(r.center,this.position);let a=o.length();this.up.copy(o).multiplyScalar(-1/a);const c=!!(this.keys.ShiftLeft||this.keys.ShiftRight),l=e.clone().addScaledVector(this.up,-e.dot(this.up));l.lengthSq()<1e-6&&l.set(1,0,0),l.normalize();const u=new R().crossVectors(l,this.up);let h=0,f=0;(this.keys.KeyW||this.keys.ArrowUp)&&(f+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(f-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(h+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(h-=1);const d=r.type.liquid,g=r.type.liquidClass,v=d?r.liquidRadius():0,m=d?r.heightAtWorldDirection(this.up):0,p=!!d&&m+1.2<v;if(g==="hazard"&&p&&a<v+.4){this.position.copy(r.center).addScaledVector(this.up,v+.6),a=v+.6;const E=this.velocity.dot(this.up);this.velocity.addScaledVector(this.up,-E+iy),this.grounded=!1,Ov()}const x=this.swimming;if(this.swimming=g==="swim"&&p&&a<v+sh,this.swimming&&!x&&Bv(),this.jetting=!1,this.swimming){this.grounded=!1,this.fuel=Math.min(ho,this.fuel+eh*.6*t);const E=new R().addScaledVector(l,f).addScaledVector(u,h),A=E.lengthSq()>0;A&&(E.normalize(),this.velocity.addScaledVector(E,ey*t),this.facing.copy(E));const S=a>v-.2;this.keys.Space&&(S&&this.jumpQueued?(this.velocity.addScaledVector(this.up,th*.85),this.swimming=!1):this.velocity.addScaledVector(this.up,ih*t)),this.keys.KeyC&&this.velocity.addScaledVector(this.up,-ih*t);const y=v+sh-a;y>.5&&!this.keys.KeyC&&this.velocity.addScaledVector(this.up,Math.min(y,1.5)*ny*t),this.velocity.multiplyScalar(Math.exp(-1.6*t)),this.velocity.length()>nh*2&&this.velocity.setLength(nh*2),this.walkCycle+=t*(A?7:2)}else if(this.grounded){this.fuel=Math.min(ho,this.fuel+eh*t);const E=new R().addScaledVector(l,f).addScaledVector(u,h),A=E.lengthSq()>0;A&&E.normalize();const S=c?Gv:Hv;this.velocity.copy(E).multiplyScalar(A?S:0),A&&this.facing.copy(E),this.walkCycle+=t*(A?S*1.4:0),this.jumpQueued&&(this.velocity.addScaledVector(this.up,th),this.grounded=!1)}else{const E=Math.max(kv*Math.min(1.5,(r.radius/a)**Wv),Xv);this.velocity.addScaledVector(this.up,-E*t);const A=c?$v:1;let S=0;if(this.keys.Space&&this.fuel>0&&(this.jetting=!0,this.velocity.addScaledVector(this.up,qv*A*t),S+=jv*(c?Qv:1)),(h!==0||f!==0)&&this.fuel>0){const P=n.getWorldDirection(new R),L=new R().addScaledVector(P,f).addScaledVector(u,h).normalize().multiplyScalar(Yv*A*t);this.velocity.add(L),S+=ty,this.facing.copy(P).addScaledVector(this.up,-P.dot(this.up)),this.facing.lengthSq()>1e-6&&this.facing.normalize()}this.fuel=Math.max(0,this.fuel-S*t),this.velocity.multiplyScalar(Math.exp(-.06*t));const y=c?Jv:Zv;this.velocity.length()>y&&this.velocity.setLength(y)}this.jumpQueued=!1,this.position.addScaledVector(this.velocity,t);const M=new R().subVectors(this.position,r.center),_=M.length(),b=M.divideScalar(_),T=r.heightAtWorldDirection(b)+Ks;if(this.grounded)if(_<T+.6){this.position.copy(r.center).addScaledVector(b,T);const E=this.velocity.dot(b);this.velocity.addScaledVector(b,-E)}else this.grounded=!1;else if(_<T){this.position.copy(r.center).addScaledVector(b,T);const E=this.velocity.dot(b);E<0&&this.velocity.addScaledVector(b,-E),this.grounded=!this.swimming}Vv(this.jetting,c),this.updateVisuals(t,r,T,c)}updateVisuals(t,e,n,s){this.character.position.copy(this.position).addScaledVector(this.up,-Ks);const r=this.facing.clone().addScaledVector(this.up,-this.facing.dot(this.up));r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize();const o=new R().crossVectors(this.up,r),a=new vn().setFromRotationMatrix(new Lt().makeBasis(o,this.up,r));this.character.quaternion.slerp(a,1-Math.exp(-12*t));const c=this.grounded?.55:.2;for(const{pivot:h,arm:f,side:d}of this.limbs){const g=f?this.walkCycle+d*Math.PI:this.walkCycle+(d>0?Math.PI:0);h.rotation.x=Math.sin(g)*c}this.jetGlow.material.opacity=this.jetting?s?.95:.6:Math.max(0,this.jetGlow.material.opacity-t*4),this.jetGlow.scale.y=s?1.8:1;const l=this.position.distanceTo(e.center)-n,u=Math.max(0,.32*(1-l/8));if(this.shadow.visible=u>.01,this.shadow.visible){const h=new R().subVectors(this.position,e.center).normalize(),f=e.center.clone().addScaledVector(h,n-Ks+.1);this.shadow.position.copy(f),this.shadow.quaternion.setFromUnitVectors(new R(0,1,0),h),this.shadow.material.opacity=u}}}const rh=.0024,ry=-.6,oy=1.25,ay=4,cy=20;class ly{constructor(t,e){this.camera=t,this.forward=new R(0,0,-1),this.pitch=.32,this.distance=9,this.targetDistance=9,this.pendingYaw=0,this.pendingPitch=0,e.addEventListener("mousemove",n=>{document.pointerLockElement===e&&(this.pendingYaw+=n.movementX*rh,this.pendingPitch+=n.movementY*rh)}),e.addEventListener("wheel",n=>{this.targetDistance=Tc.clamp(this.targetDistance+n.deltaY*.01,ay,cy)},{passive:!0})}update(t,e,n){const s=e.up;this.forward.addScaledVector(s,-this.forward.dot(s)),this.forward.lengthSq()<1e-6&&this.forward.set(s.y,s.z,s.x).cross(s),this.forward.normalize(),this.pendingYaw!==0&&(this.forward.applyQuaternion(new vn().setFromAxisAngle(s,-this.pendingYaw)),this.pendingYaw=0),this.pitch=Tc.clamp(this.pitch+this.pendingPitch,ry,oy),this.pendingPitch=0,this.distance+=(this.targetDistance-this.distance)*(1-Math.exp(-8*t));const r=e.position.clone().addScaledVector(s,.8),o=r.clone().addScaledVector(this.forward,-Math.cos(this.pitch)*this.distance).addScaledVector(s,Math.sin(this.pitch)*this.distance),a=n.nearestPlanetTo(o);if(a){const c=o.clone().sub(a.center),l=c.length(),u=a.heightAtWorldDirection(c.clone().normalize())+.7;l<u&&o.copy(a.center).addScaledVector(c.normalize(),u)}this.camera.position.copy(o),this.camera.up.copy(s),this.camera.lookAt(r)}}class uy{constructor(){this.planetName=document.getElementById("planet-name"),this.planetType=document.getElementById("planet-type"),this.discTotal=document.getElementById("disc-total"),this.discPlanet=document.getElementById("disc-planet"),this.banner=document.getElementById("banner"),this.toasts=document.getElementById("toasts"),this.logPanel=document.getElementById("log-panel"),this.logEntries=document.getElementById("log-entries"),this.hint=document.getElementById("controls-hint"),this.fuelWrap=document.getElementById("fuel-wrap"),this.fuelBar=document.getElementById("fuel-bar"),this.liquidTint=document.getElementById("liquid-tint"),this.bannerTimer=null,this.discoveries=new Map,setTimeout(()=>this.hint.classList.add("faded"),14e3)}setPlanet(t){this.planetName.textContent=t.name,this.planetType.textContent=t.type.label}showBanner(t){this.banner.querySelector(".b-name").textContent=t.name,this.banner.querySelector(".b-type").textContent=t.type.label,this.banner.classList.add("show"),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>this.banner.classList.remove("show"),3e3)}updateCounts(t,e,n){this.discTotal.textContent=`${t} / ${e}`,this.discPlanet.textContent=`This planet: ${n.discoveredCount()} / ${n.totalDiscoveryCount()}`}setFuel(t){this.fuelBar.style.width=`${Math.round(t*100)}%`,this.fuelBar.classList.toggle("low",t<.25),this.fuelWrap.classList.toggle("full",t>.999)}setLiquidTint(t){t?(this.liquidTint.style.background=t,this.liquidTint.style.opacity=.35):this.liquidTint.style.opacity=0}addDiscovery(t,e){const n=t.name;this.discoveries.has(n)||this.discoveries.set(n,{typeLabel:t.type.label,items:[]}),this.discoveries.get(n).items.push(e),this.renderLog();const s=document.createElement("div");s.className="toast",s.innerHTML="Discovered <b></b>",s.querySelector("b").textContent=e,this.toasts.appendChild(s),setTimeout(()=>s.remove(),3300)}renderLog(){if(this.discoveries.size===0){this.logEntries.innerHTML='<div class="log-empty">Nothing discovered yet. Glowing artifacts await on every planet…</div>';return}this.logEntries.innerHTML="";for(const[t,e]of this.discoveries){const n=document.createElement("div");n.className="log-planet";const s=document.createElement("h3");s.textContent=t;const r=document.createElement("small");r.textContent=e.typeLabel,s.appendChild(r);const o=document.createElement("ul");for(const a of e.items){const c=document.createElement("li");c.textContent=a,o.appendChild(c)}n.appendChild(s),n.appendChild(o),this.logEntries.appendChild(n)}}toggleLog(){this.logPanel.classList.toggle("open")}reset(){this.discoveries.clear(),this.renderLog(),this.logPanel.classList.remove("open")}}const bn=new w_({antialias:!0});bn.setSize(window.innerWidth,window.innerHeight);bn.setPixelRatio(Math.min(window.devicePixelRatio,2));bn.toneMapping=hh;bn.toneMappingExposure=1.1;document.body.appendChild(bn.domElement);const Rs=new A_;Rs.background=new It("#05060f");const Ts=new Qe(60,window.innerWidth/window.innerHeight,.1,8e3),hy=Dv(Rs),Xn=new uy,Ae=new sy(Rs),oh=new ly(Ts,bn.domElement);let Mn=new rf(Rs,jh()),So=0,Oc=null;Ae.spawnOn(Mn.planets[0]);window.addEventListener("resize",()=>{Ts.aspect=window.innerWidth/window.innerHeight,Ts.updateProjectionMatrix(),bn.setSize(window.innerWidth,window.innerHeight)});function of(){try{const i=bn.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}const ah=document.getElementById("start-overlay");ah.addEventListener("click",()=>{Nv(),ah.classList.add("hidden"),of()});bn.domElement.addEventListener("click",()=>{document.pointerLockElement!==bn.domElement&&of()});function fy(){Mn.dispose(),Mn=new rf(Rs,jh()),So=0,Oc=null,Xn.reset(),Ae.spawnOn(Mn.planets[0]),rl()}window.addEventListener("keydown",i=>{if(i.code==="Tab")i.preventDefault(),Xn.toggleLog();else if(i.code==="KeyN")fy();else if(i.code==="KeyR"){const t=Mn.nearestPlanetTo(Ae.position);t&&(Ae.rescueTo(t),rl())}});function dy(){if(Ae.position.length()<hy.sunRadius+6){const i=Mn.nearestPlanetTo(Ae.position);i&&(Ae.position.copy(i.center).addScaledVector(new R(0,1,0),i.radius*1.6),Ae.velocity.set(0,0,0),Ae.grounded=!1,rl())}}function py(){const i=Ae.planet;if(!i)return;if(Ae.position.distanceTo(i.center)-i.radius<i.radius*.9){Oc!==i&&(Oc=i,i.visited=!0,Xn.setPlanet(i),Xn.showBanner(i));const e=i.tryCollect(Ae.position);e&&(So++,Fv(),Xn.addDiscovery(i,e));const n=i.tryScan(Ae.position);n&&(So++,zv(),Xn.addDiscovery(i,`${n} (creature)`)),Xn.updateCounts(So,Mn.totalDiscoveries(),i)}}function my(){const i=Ae.planet,t=i&&i.type.liquid&&i.type.liquidClass==="swim"&&Ts.position.distanceTo(i.center)<i.liquidRadius();Xn.setLiquidTint(t?i.type.liquid.color:null)}window.__game={player:Ae,get system(){return Mn}};const gy=new nx;let ch=0;function af(){const i=Math.min(gy.getDelta(),.05);ch+=i,Mn.update(i,ch,Ae.position),Ae.update(i,oh.forward,Ts,Mn),oh.update(i,Ae,Mn),dy(),py(),my(),Xn.setFuel(Ae.fuelFraction),bn.render(Rs,Ts),requestAnimationFrame(af)}af();
