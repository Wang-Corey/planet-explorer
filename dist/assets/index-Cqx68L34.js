(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cr="170",Ef=0,Tl=1,bf=2,yh=1,Tf=2,Gn=3,Dn=0,Ge=1,Mn=2,hi=0,ms=1,Di=2,wl=3,Al=4,wf=5,Ri=100,Af=101,Cf=102,Rf=103,Pf=104,If=200,Lf=201,Df=202,Uf=203,qa=204,Ya=205,Nf=206,Ff=207,Bf=208,Of=209,zf=210,Vf=211,Hf=212,Gf=213,kf=214,$a=0,Za=1,Ka=2,xs=3,Ja=4,ja=5,Qa=6,tc=7,Mh=0,Wf=1,Xf=2,fi=0,qf=1,Yf=2,$f=3,Sh=4,Zf=5,Kf=6,Jf=7,Eh=300,vs=301,ys=302,ec=303,nc=304,Uo=306,ic=1e3,Ii=1001,sc=1002,nn=1003,jf=1004,mr=1005,Pn=1006,Yo=1007,Li=1008,Zn=1009,bh=1010,Th=1011,rr=1012,qc=1013,di=1014,hn=1015,lr=1016,Yc=1017,$c=1018,Ms=1020,wh=35902,Ah=1021,Ch=1022,tn=1023,Rh=1024,Ph=1025,gs=1026,Ss=1027,Zc=1028,No=1029,Ih=1030,Kc=1031,Jc=1033,po=33776,mo=33777,go=33778,_o=33779,rc=35840,oc=35841,ac=35842,cc=35843,lc=36196,uc=37492,hc=37496,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,_c=37813,xc=37814,vc=37815,yc=37816,Mc=37817,Sc=37818,Ec=37819,bc=37820,Tc=37821,xo=36492,wc=36494,Ac=36495,Lh=36283,Cc=36284,Rc=36285,Pc=36286,Qf=3200,td=3201,Dh=0,ed=1,li="",ln="srgb",ws="srgb-linear",Fo="linear",ee="srgb",Oi=7680,Cl=519,nd=512,id=513,sd=514,Uh=515,rd=516,od=517,ad=518,cd=519,Ic=35044,Rl="300 es",qn=2e3,To=2001;class As{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const Qs=Math.PI/180,or=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ud(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function fd(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function md(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gd(i,t){return i+Math.random()*(t-i)}function _d(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vd(i){return i*Qs}function yd(i){return i*or}function Md(i){return(i&i-1)===0&&i!==0}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),l=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*h,c*f,a*u);break;case"YZY":i.set(c*f,a*l,c*h,a*u);break;case"ZXZ":i.set(c*h,c*f,a*l,a*u);break;case"XZX":i.set(a*l,c*g,c*d,a*u);break;case"YXY":i.set(c*d,a*l,c*g,a*u);break;case"ZYZ":i.set(c*g,c*d,a*l,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wo={DEG2RAD:Qs,RAD2DEG:or,generateUUID:Yn,clamp:be,euclideanModulo:jc,mapLinear:ld,inverseLerp:ud,lerp:tr,damp:hd,pingpong:fd,smoothstep:dd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:xd,degToRad:vd,radToDeg:yd,isPowerOfTwo:Md,ceilPowerOfTwo:Sd,floorPowerOfTwo:Ed,setQuaternionFromProperEuler:bd,normalize:te,denormalize:Sn};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,c,u){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],l=n[4],h=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],M=s[4],_=s[7],T=s[2],b=s[5],E=s[8];return r[0]=o*v+a*x+c*T,r[3]=o*m+a*M+c*b,r[6]=o*p+a*_+c*E,r[1]=u*v+l*x+h*T,r[4]=u*m+l*M+h*b,r[7]=u*p+l*_+h*E,r[2]=f*v+d*x+g*T,r[5]=f*m+d*M+g*b,r[8]=f*p+d*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8];return e*o*l-e*a*u-n*r*l+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],h=l*o-a*u,f=a*c-l*r,d=u*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*u-l*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(l*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-u*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Ot;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){const i=Ao("canvas");return i.style.display="block",i}const Il={};function Js(i){i in Il||(Il[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ad(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ll=[.64,.33,.3,.6,.15,.06],Dl=[.2126,.7152,.0722],Ul=[.3127,.329],Nl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[ws]:{primaries:Ll,whitePoint:Ul,transfer:Fo,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:Dl,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:Ll,whitePoint:Ul,transfer:ee,toXYZ:Nl,fromXYZ:Fl,luminanceCoefficients:Dl,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});let zi;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Ao("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class Fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;class ke extends As{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Ii,s=Ii,r=Pn,o=Li,a=tn,c=Zn,u=ke.DEFAULT_ANISOTROPY,l=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Yn(),this.name="",this.source=new Fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ic:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ic:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Eh;ke.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],l=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(l-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,_=(d+1)/2,T=(p+1)/2,b=(l+f)/4,E=(h+v)/4,A=(g+m)/4;return M>_&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=E/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=A/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-l)/x,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends As{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bh extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],l=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||u!==d||l!==g){let m=1-a;const p=c*f+u*d+l*g+h*v,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),b=Math.atan2(T,p*x);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const _=a*x;if(c=c*m+f*_,u=u*m+d*_,l=l*m+g*_,h=h*m+v*_,m===1-a){const T=1/Math.sqrt(c*c+u*u+l*l+h*h);c*=T,u*=T,l*=T,h*=T}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],l=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+l*h+c*d-u*f,t[e+1]=c*g+l*f+u*h-a*d,t[e+2]=u*g+l*d+a*f-c*h,t[e+3]=l*g-a*h-c*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),l=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*l*h+u*d*g,this._y=u*d*h-f*l*g,this._z=u*l*g+f*d*h,this._w=u*l*h-f*d*g;break;case"YXZ":this._x=f*l*h+u*d*g,this._y=u*d*h-f*l*g,this._z=u*l*g-f*d*h,this._w=u*l*h+f*d*g;break;case"ZXY":this._x=f*l*h-u*d*g,this._y=u*d*h+f*l*g,this._z=u*l*g+f*d*h,this._w=u*l*h-f*d*g;break;case"ZYX":this._x=f*l*h-u*d*g,this._y=u*d*h+f*l*g,this._z=u*l*g-f*d*h,this._w=u*l*h+f*d*g;break;case"YZX":this._x=f*l*h+u*d*g,this._y=u*d*h+f*l*g,this._z=u*l*g-f*d*h,this._w=u*l*h-f*d*g;break;case"XZY":this._x=f*l*h-u*d*g,this._y=u*d*h-f*l*g,this._z=u*l*g+f*d*h,this._w=u*l*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],l=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-u)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(l-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+u)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-u)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+l)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+u)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,l=e._w;return this._x=n*l+o*a+s*u-r*c,this._y=s*l+o*c+r*a-n*u,this._z=r*l+o*u+n*c-s*a,this._w=o*l-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,a),h=Math.sin((1-e)*l)/u,f=Math.sin(e*l)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),l=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*u+o*h-a*l,this.y=n+c*l+a*u-r*h,this.z=s+c*h+r*l-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new R,Bl=new fn;class Me{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),_r.subVectors(this.max,Is),Vi.subVectors(t.a,Is),Hi.subVectors(t.b,Is),Gi.subVectors(t.c,Is),ei.subVectors(Hi,Vi),ni.subVectors(Gi,Hi),_i.subVectors(Vi,Gi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-_i.z,_i.y,ei.z,0,-ei.x,ni.z,0,-ni.x,_i.z,0,-_i.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-_i.y,_i.x,0];return!Jo(e,Vi,Hi,Gi,_r)||(e=[1,0,0,0,1,0,0,0,1],!Jo(e,Vi,Hi,Gi,_r))?!1:(xr.crossVectors(ei,ni),e=[xr.x,xr.y,xr.z],Jo(e,Vi,Hi,Gi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,gr=new Me,Vi=new R,Hi=new R,Gi=new R,ei=new R,ni=new R,_i=new R,Is=new R,_r=new R,xr=new R,xi=new R;function Jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=t.dot(xi),u=e.dot(xi),l=n.dot(xi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>a)return!1}return!0}const Ud=new Me,Ls=new R,jo=new R;class pn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(jo)),this.expandByPoint(Ls.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new R,Qo=new R,vr=new R,ii=new R,ta=new R,yr=new R,ea=new R;class ur{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qo.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Qo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=ii.dot(this.direction),c=-ii.dot(vr),u=ii.lengthSq(),l=Math.abs(1-o*o);let h,f,d,g;if(l>0)if(h=o*c-a,f=o*a-c,g=r*l,h>=0)if(f>=-g)if(f<=g){const v=1/l;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+u}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+u;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+u;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+u):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+u):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+u);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qo).addScaledVector(vr,f),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),l>=0?(r=(t.min.y-f.y)*l,o=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,o=(t.min.y-f.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),yr.subVectors(n,t),ea.crossVectors(ta,yr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(yr.crossVectors(ii,yr));if(c<0)return null;const u=a*this.direction.dot(ta.cross(ii));if(u<0||c+u>o)return null;const l=-a*ii.dot(ea);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,s,r,o,a,c,u,l,h,f,d,g,v,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,l,h,f,d,g,v,m)}set(t,e,n,s,r,o,a,c,u,l,h,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=l,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),l=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*l,d=o*h,g=a*l,v=a*h;e[0]=c*l,e[4]=-c*h,e[8]=u,e[1]=d+g*u,e[5]=f-v*u,e[9]=-a*c,e[2]=v-f*u,e[6]=g+d*u,e[10]=o*c}else if(t.order==="YXZ"){const f=c*l,d=c*h,g=u*l,v=u*h;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*u,e[1]=o*h,e[5]=o*l,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*l,d=c*h,g=u*l,v=u*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*l,e[9]=v-f*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*l,d=o*h,g=a*l,v=a*h;e[0]=c*l,e[4]=g*u-d,e[8]=f*u+v,e[1]=c*h,e[5]=v*u+f,e[9]=d*u-g,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*u,g=a*c,v=a*u;e[0]=c*l,e[4]=v-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*l,e[9]=-a*l,e[2]=-u*l,e[6]=d*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*c,d=o*u,g=a*c,v=a*u;e[0]=c*l,e[4]=-h,e[8]=u*l,e[1]=f*h+v,e[5]=o*l,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*l,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),si.crossVectors(n,Je),si.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),si.crossVectors(n,Je)),si.normalize(),Mr.crossVectors(Je,si),s[0]=si.x,s[4]=Mr.x,s[8]=Je.x,s[1]=si.y,s[5]=Mr.y,s[9]=Je.y,s[2]=si.z,s[6]=Mr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],l=n[1],h=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],T=n[15],b=s[0],E=s[4],A=s[8],S=s[12],y=s[1],P=s[5],L=s[9],D=s[13],U=s[2],V=s[6],H=s[10],Y=s[14],W=s[3],it=s[7],rt=s[11],mt=s[15];return r[0]=o*b+a*y+c*U+u*W,r[4]=o*E+a*P+c*V+u*it,r[8]=o*A+a*L+c*H+u*rt,r[12]=o*S+a*D+c*Y+u*mt,r[1]=l*b+h*y+f*U+d*W,r[5]=l*E+h*P+f*V+d*it,r[9]=l*A+h*L+f*H+d*rt,r[13]=l*S+h*D+f*Y+d*mt,r[2]=g*b+v*y+m*U+p*W,r[6]=g*E+v*P+m*V+p*it,r[10]=g*A+v*L+m*H+p*rt,r[14]=g*S+v*D+m*Y+p*mt,r[3]=x*b+M*y+_*U+T*W,r[7]=x*E+M*P+_*V+T*it,r[11]=x*A+M*L+_*H+T*rt,r[15]=x*S+M*D+_*Y+T*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],l=t[2],h=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*u*h-r*a*f+n*u*f+s*a*d-n*c*d)+v*(+e*c*d-e*u*f+r*o*f-s*o*d+s*u*l-r*c*l)+m*(+e*u*h-e*a*d-r*o*h+n*o*d+r*a*l-n*u*l)+p*(-s*a*l-e*c*h+e*a*f+s*o*h-n*o*f+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],h=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=h*m*u-v*f*u+v*c*d-a*m*d-h*c*p+a*f*p,M=g*f*u-l*m*u-g*c*d+o*m*d+l*c*p-o*f*p,_=l*v*u-g*h*u+g*a*d-o*v*d-l*a*p+o*h*p,T=g*h*c-l*v*c-g*a*f+o*v*f+l*a*m-o*h*m,b=e*x+n*M+s*_+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=x*E,t[1]=(v*f*r-h*m*r-v*s*d+n*m*d+h*s*p-n*f*p)*E,t[2]=(a*m*r-v*c*r+v*s*u-n*m*u-a*s*p+n*c*p)*E,t[3]=(h*c*r-a*f*r-h*s*u+n*f*u+a*s*d-n*c*d)*E,t[4]=M*E,t[5]=(l*m*r-g*f*r+g*s*d-e*m*d-l*s*p+e*f*p)*E,t[6]=(g*c*r-o*m*r-g*s*u+e*m*u+o*s*p-e*c*p)*E,t[7]=(o*f*r-l*c*r+l*s*u-e*f*u-o*s*d+e*c*d)*E,t[8]=_*E,t[9]=(g*h*r-l*v*r-g*n*d+e*v*d+l*n*p-e*h*p)*E,t[10]=(o*v*r-g*a*r+g*n*u-e*v*u-o*n*p+e*a*p)*E,t[11]=(l*a*r-o*h*r-l*n*u+e*h*u+o*n*d-e*a*d)*E,t[12]=T*E,t[13]=(l*v*s-g*h*s+g*n*f-e*v*f-l*n*m+e*h*m)*E,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*E,t[15]=(o*h*s-l*a*s+l*n*c-e*h*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,l=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,l*a+n,l*c-s*o,0,u*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,l=o+o,h=a+a,f=r*u,d=r*l,g=r*h,v=o*l,m=o*h,p=a*h,x=c*u,M=c*l,_=c*h,T=n.x,b=n.y,E=n.z;return s[0]=(1-(v+p))*T,s[1]=(d+_)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(f+p))*b,s[6]=(m+x)*b,s[7]=0,s[8]=(g+M)*E,s[9]=(m-x)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const u=1/r,l=1/o,h=1/a;return xn.elements[0]*=u,xn.elements[1]*=u,xn.elements[2]*=u,xn.elements[4]*=l,xn.elements[5]*=l,xn.elements[6]*=l,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const c=this.elements,u=2*r/(e-t),l=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===qn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===To)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const c=this.elements,u=1/(e-t),l=1/(n-s),h=1/(o-r),f=(e+t)*u,d=(n+s)*l;let g,v;if(a===qn)g=(o+r)*h,v=-2*h;else if(a===To)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new R,xn=new Nt,Nd=new R(0,0,0),Fd=new R(1,1,1),si=new R,Mr=new R,Je=new R,Ol=new Nt,zl=new fn;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],l=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-be(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const Vl=new R,Wi=new fn,zn=new Nt,Sr=new R,Ds=new R,Od=new R,zd=new fn,Hl=new R(1,0,0),Gl=new R(0,1,0),kl=new R(0,0,1),Wl={type:"added"},Vd={type:"removed"},Xi={type:"childadded",child:null},na={type:"childremoved",child:null};class Ne extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new R,e=new bn,n=new fn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ot}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ds,Sr,this.up):zn.lookAt(Sr,Ds,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(zn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const h=c[u];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),l=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const u in a){const l=a[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new R(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new R,Vn=new R,ia=new R,Hn=new R,qi=new R,Yi=new R,Xl=new R,sa=new R,ra=new R,oa=new R,aa=new ne,ca=new ne,la=new ne;class Pe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Vn.subVectors(n,e),ia.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Vn),c=vn.dot(ia),u=Vn.dot(Vn),l=Vn.dot(ia),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(u*c-a*l)*f,g=(o*l-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),ca.setScalar(0),la.setScalar(0),aa.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),la.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Vn.subVectors(t,e),vn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;qi.subVectors(s,n),Yi.subVectors(r,n),sa.subVectors(t,n);const c=qi.dot(sa),u=Yi.dot(sa);if(c<=0&&u<=0)return e.copy(n);ra.subVectors(t,s);const l=qi.dot(ra),h=Yi.dot(ra);if(l>=0&&h<=l)return e.copy(s);const f=c*h-l*u;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(qi,o);oa.subVectors(t,r);const d=qi.dot(oa),g=Yi.dot(oa);if(g>=0&&d<=g)return e.copy(r);const v=d*u-c*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(Yi,a);const m=l*g-d*h;if(m<=0&&h-l>=0&&d-g>=0)return Xl.subVectors(r,s),a=(h-l)/(h-l+(d-g)),e.copy(s).addScaledVector(Xl,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=jc(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ua(o,r,t+1/3),this.g=ua(o,r,t),this.b=ua(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return qt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(be(Oe.r*255,0,255))*65536+Math.round(be(Oe.g*255,0,255))*256+Math.round(be(Oe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const l=(a+o)/2;if(a===o)c=0,u=0;else{const h=o-a;switch(u=l<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ln){qt.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Er);const n=tr(ri.h,Er.h,e),s=tr(ri.s,Er.s,e),r=tr(ri.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new It;It.NAMES=zh;let Hd=0;class mi extends As{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Yn(),this.name="",this.blending=ms,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ar extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new R,br=new nt;class ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ic&&(t.usage=this.usage),t}}class Vh extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hh extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gd=0;const an=new Nt,ha=new Ne,$i=new R,je=new Me,Us=new Me,Re=new R;class pe extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Hh:Vh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Me);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(je.min,Us.min),je.expandByPoint(Re),Re.addVectors(je.max,Us.max),je.expandByPoint(Re)):(je.expandByPoint(Us.min),je.expandByPoint(Us.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,l=a.count;u<l;u++)Re.fromBufferAttribute(a,u),c&&($i.fromBufferAttribute(t,u),Re.add($i)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new R,c[A]=new R;const u=new R,l=new R,h=new R,f=new nt,d=new nt,g=new nt,v=new R,m=new R;function p(A,S,y){u.fromBufferAttribute(n,A),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),l.sub(u),h.sub(u),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(P),a[A].add(v),a[S].add(v),a[y].add(v),c[A].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,S=x.length;A<S;++A){const y=x[A],P=y.start,L=y.count;for(let D=P,U=P+L;D<U;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new R,_=new R,T=new R,b=new R;function E(A){T.fromBufferAttribute(s,A),b.copy(T);const S=a[A];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(b,S);const P=_.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,P)}for(let A=0,S=x.length;A<S;++A){const y=x[A],P=y.start,L=y.count;for(let D=P,U=P+L;D<U;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,u=new R,l=new R,h=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,m),a.add(l),c.add(l),u.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),l.subVectors(o,r),h.subVectors(s,r),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){const u=a.array,l=a.itemSize,h=a.normalized,f=new u.constructor(c.length*l);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*l;for(let p=0;p<l;p++)f[g++]=u[d++]}return new ve(f,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let l=0,h=u.length;l<h;l++){const f=u[l],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let h=0,f=u.length;h<f;h++){const d=u[h];l.push(d.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const l=s[u];this.setAttribute(u,l.clone(e))}const r=t.morphAttributes;for(const u in r){const l=[],h=r[u];for(let f=0,d=h.length;f<d;f++)l.push(h[f].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,l=o.length;u<l;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new Nt,vi=new ur,Tr=new pn,Yl=new R,wr=new R,Ar=new R,Cr=new R,fa=new R,Rr=new R,$l=new R,Pr=new R;class Zt extends Ne{constructor(t=new pe,e=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const l=a[c],h=r[c];l!==0&&(fa.fromBufferAttribute(h,t),o?Rr.addScaledVector(fa,l):Rr.addScaledVector(fa.sub(e),l))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Tr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Tr,Yl)===null||vi.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(r).invert(),vi.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,T=M;_<T;_+=3){const b=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);s=Ir(this,p,t,n,u,l,h,b,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=Ir(this,o,t,n,u,l,h,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,T=M;_<T;_+=3){const b=_,E=_+1,A=_+2;s=Ir(this,p,t,n,u,l,h,b,E,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const x=m,M=m+1,_=m+2;s=Ir(this,o,t,n,u,l,h,x,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function kd(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Dn,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Pr);return u<e.near||u>e.far?null:{distance:u,point:Pr.clone(),object:i}}function Ir(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,wr),i.getVertexPosition(c,Ar),i.getVertexPosition(u,Cr);const l=kd(i,t,e,n,wr,Ar,Cr,$l);if(l){const h=new R;Pe.getBarycoord($l,wr,Ar,Cr,h),s&&(l.uv=Pe.getInterpolatedAttribute(s,a,c,u,h,new nt)),r&&(l.uv1=Pe.getInterpolatedAttribute(r,a,c,u,h,new nt)),o&&(l.normal=Pe.getInterpolatedAttribute(o,a,c,u,h,new R),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new R,materialIndex:0};Pe.getNormal(wr,Ar,Cr,f.normal),l.face=f,l.barycoord=h}return l}class Ue extends pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],l=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2));function g(v,m,p,x,M,_,T,b,E,A,S){const y=_/E,P=T/A,L=_/2,D=T/2,U=b/2,V=E+1,H=A+1;let Y=0,W=0;const it=new R;for(let rt=0;rt<H;rt++){const mt=rt*P-D;for(let Lt=0;Lt<V;Lt++){const Gt=Lt*y-L;it[v]=Gt*x,it[m]=mt*M,it[p]=U,u.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[p]=b>0?1:-1,l.push(it.x,it.y,it.z),h.push(Lt/E),h.push(1-rt/A),Y+=1}}for(let rt=0;rt<A;rt++)for(let mt=0;mt<E;mt++){const Lt=f+mt+V*rt,Gt=f+mt+V*(rt+1),q=f+(mt+1)+V*(rt+1),j=f+(mt+1)+V*rt;c.push(Lt,Gt,j),c.push(Gt,q,j),W+=6}a.addGroup(d,W,S),d+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function Wd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Xd={clone:Es,merge:Xe};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new R,Zl=new nt,Kl=new nt;class Qe extends kh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Kl),e.subVectors(Kl,Zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ki=1;class $d extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Zi,Ki,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const c=new Qe(Zi,Ki,t,e);c.layers=this.layers,this.add(c);const u=new Qe(Zi,Ki,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,l]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends ke{constructor(t,e,n,s,r,o,a,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,s,r,o,a,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zd extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:hi});r.uniforms.tEquirect.value=e;const o=new Zt(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Pn),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const da=new R,Kd=new R,Jd=new Ot;class Wn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=da.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jd.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new pn,Lr=new R;class Bo{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],l=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,f-u,m-d,_-p).normalize(),n[1].setComponents(c+r,f+u,m+d,_+p).normalize(),n[2].setComponents(c+o,f+l,m+g,_+x).normalize(),n[3].setComponents(c-o,f-l,m-g,_-x).normalize(),n[4].setComponents(c-a,f-h,m-v,_-M).normalize(),e===qn)n[5].setComponents(c+a,f+h,m+v,_+M).normalize();else if(e===To)n[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jd(i){const t=new WeakMap;function e(a,c){const u=a.array,l=a.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,l),a.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,u){const l=c.array,h=c.updateRanges;if(i.bindBuffer(u,a),h.length===0)i.bufferSubData(u,0,l);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];i.bufferSubData(u,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}class Oo extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,l=c+1,h=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<l;p++){const x=p*f-o;for(let M=0;M<u;M++){const _=M*h-r;g.push(_,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const M=x+u*p,_=x+u*(p+1),T=x+1+u*(p+1),b=x+1+u*p;d.push(M,_,b),d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,dp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bp=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cm=`#if defined( USE_POINTS_UV )
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
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,hg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define MATCAP
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
}`,_g=`#define MATCAP
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
}`,xg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,yg=`#define PHONG
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,bg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Rg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Qd,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:cp,begin_vertex:lp,beginnormal_vertex:up,bsdfs:hp,iridescence_fragment:fp,bumpmap_pars_fragment:dp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:_p,color_fragment:xp,color_pars_fragment:vp,color_pars_vertex:yp,color_vertex:Mp,common:Sp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:bp,displacementmap_pars_vertex:Tp,displacementmap_vertex:wp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Ip,envmap_common_pars_fragment:Lp,envmap_pars_fragment:Dp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Np,fog_vertex:Fp,fog_pars_vertex:Bp,fog_fragment:Op,fog_pars_fragment:zp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:kp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:$p,lights_phong_pars_fragment:Zp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Jp,lights_fragment_begin:jp,lights_fragment_maps:Qp,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:cm,metalnessmap_fragment:lm,metalnessmap_pars_fragment:um,morphinstance_vertex:hm,morphcolor_vertex:fm,morphnormal_vertex:dm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:_m,normal_pars_fragment:xm,normal_pars_vertex:vm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Tm,opaque_fragment:wm,packing:Am,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Lm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Bm,skinbase_vertex:Om,skinning_pars_vertex:zm,skinning_vertex:Vm,skinnormal_vertex:Hm,specularmap_fragment:Gm,specularmap_pars_fragment:km,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:Zm,uv_vertex:Km,worldpos_vertex:Jm,background_vert:jm,background_frag:Qm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:og,distanceRGBA_frag:ag,equirect_vert:cg,equirect_frag:lg,linedashed_vert:ug,linedashed_frag:hg,meshbasic_vert:fg,meshbasic_frag:dg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:_g,meshnormal_vert:xg,meshnormal_frag:vg,meshphong_vert:yg,meshphong_frag:Mg,meshphysical_vert:Sg,meshphysical_frag:Eg,meshtoon_vert:bg,meshtoon_frag:Tg,points_vert:wg,points_frag:Ag,shadow_vert:Cg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Ig},st={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Rn={basic:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Xe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Xe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Xe([st.points,st.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Xe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Xe([st.common,st.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Xe([st.sprite,st.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Xe([st.common,st.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Xe([st.lights,st.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Rn.physical={uniforms:Xe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Dr={r:0,b:0,g:0},Mi=new bn,Lg=new Nt;function Dg(i,t,e,n,s,r,o){const a=new It(0);let c=r===!0?0:1,u,l,h=null,f=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function v(x){let M=!1;const _=g(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===Uo)?(l===void 0&&(l=new Zt(new Ue(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Es(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Mi.copy(M.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(Mi)),l.material.toneMapped=qt.getTransfer(_.colorSpace)!==ee,(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Zt(new Oo(2,2),new Kn({name:"BackgroundMaterial",uniforms:Es(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=qt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,M){x.getRGB(Dr,Gh(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m}}function Ug(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,P,L,D,U){let V=!1;const H=h(D,L,P);r!==H&&(r=H,u(r.object)),V=d(y,D,L,U),V&&g(y,D,L,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(y,P,L,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function u(y){return i.bindVertexArray(y)}function l(y){return i.deleteVertexArray(y)}function h(y,P,L){const D=L.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let V=U[P.id];V===void 0&&(V={},U[P.id]=V);let H=V[D];return H===void 0&&(H=f(c()),V[D]=H),H}function f(y){const P=[],L=[],D=[];for(let U=0;U<e;U++)P[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:D,object:y,attributes:{},index:null}}function d(y,P,L,D){const U=r.attributes,V=P.attributes;let H=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){const rt=U[W];let mt=V[W];if(mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),rt===void 0||rt.attribute!==mt||mt&&rt.data!==mt.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function g(y,P,L,D){const U={},V=P.attributes;let H=0;const Y=L.getAttributes();for(const W in Y)if(Y[W].location>=0){let rt=V[W];rt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));const mt={};mt.attribute=rt,rt&&rt.data&&(mt.data=rt.data),U[W]=mt,H++}r.attributes=U,r.attributesNum=H,r.index=D}function v(){const y=r.newAttributes;for(let P=0,L=y.length;P<L;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const L=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;L[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),U[y]!==P&&(i.vertexAttribDivisor(y,P),U[y]=P)}function x(){const y=r.newAttributes,P=r.enabledAttributes;for(let L=0,D=P.length;L<D;L++)P[L]!==y[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function M(y,P,L,D,U,V,H){H===!0?i.vertexAttribIPointer(y,P,L,U,V):i.vertexAttribPointer(y,P,L,D,U,V)}function _(y,P,L,D){v();const U=D.attributes,V=L.getAttributes(),H=P.defaultAttributeValues;for(const Y in V){const W=V[Y];if(W.location>=0){let it=U[Y];if(it===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const rt=it.normalized,mt=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;const Gt=Lt.buffer,q=Lt.type,j=Lt.bytesPerElement,ht=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===qc;if(it.isInterleavedBufferAttribute){const et=it.data,Mt=et.stride,bt=it.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<W.locationSize;St++)p(W.location+St,et.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<W.locationSize;St++)m(W.location+St);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let St=0;St<W.locationSize;St++)M(W.location+St,mt/W.locationSize,q,rt,Mt*j,(bt+mt/W.locationSize*St)*j,ht)}else{if(it.isInstancedBufferAttribute){for(let et=0;et<W.locationSize;et++)p(W.location+et,it.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let et=0;et<W.locationSize;et++)m(W.location+et);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let et=0;et<W.locationSize;et++)M(W.location+et,mt/W.locationSize,q,rt,mt*j,mt/W.locationSize*et*j,ht)}}else if(H!==void 0){const rt=H[Y];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(W.location,rt);break;case 3:i.vertexAttrib3fv(W.location,rt);break;case 4:i.vertexAttrib4fv(W.location,rt);break;default:i.vertexAttrib1fv(W.location,rt)}}}}x()}function T(){A();for(const y in n){const P=n[y];for(const L in P){const D=P[L];for(const U in D)l(D[U].object),delete D[U];delete P[L]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const L in P){const D=P[L];for(const U in D)l(D[U].object),delete D[U];delete P[L]}delete n[y.id]}function E(y){for(const P in n){const L=n[P];if(L[y.id]===void 0)continue;const D=L[y.id];for(const U in D)l(D[U].object),delete D[U];delete L[y.id]}}function A(){S(),o=!0,r!==s&&(r=s,u(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ng(i,t,e){let n;function s(u){n=u}function r(u,l){i.drawArrays(n,u,l),e.update(l,n,1)}function o(u,l,h){h!==0&&(i.drawArraysInstanced(n,u,l,h),e.update(l,n,h))}function a(u,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,h);let d=0;for(let g=0;g<h;g++)d+=l[g];e.update(d,n,1)}function c(u,l,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],l[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,l,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=l[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hn&&!A)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const l=c(u);l!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",l,"instead."),u=l);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:T,maxSamples:b}}function Bg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Wn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=l(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?l(null):u();else{const x=r?0:n,M=x*4;let _=p.clippingState||null;c.value=_,_=l(g,f,M,d);for(let T=0;T!==M;++T)_[T]=e[T];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==v;++M,_+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Og(i){let t=new WeakMap;function e(o,a){return a===ec?o.mapping=vs:a===nc&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ec||a===nc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Zd(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zg extends kh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,Jl=[.125,.215,.35,.446,.526,.582],Pi=20,pa=new zg,jl=new It;let ma=null,ga=0,_a=0,xa=!1;const Ci=(1+Math.sqrt(5))/2,Ji=1/Ci,Ql=[new R(-Ci,Ji,0),new R(Ci,Ji,0),new R(-Ji,0,Ci),new R(Ji,0,Ci),new R(0,Ci,-Ji),new R(0,Ci,Ji),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class tu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:lr,format:tn,colorSpace:ws,depthBuffer:!1},s=eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Hg(r,t,e)}return s}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(jl),l.toneMapping=fi,l.autoClear=!1;const d=new ar({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Zt(new Ue,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(jl),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const M=this._cubeSize;Ur(s,x*M,p>2?M:0,M,M),l.setRenderTarget(s),v&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ql[(s-r-1)%Ql.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new Zt(this._lodPlanes[s],u),f=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),v=r/g,m=isFinite(r)?1+Math.floor(l*v):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const p=[];let x=0;for(let E=0;E<Pi;++E){const A=E/v,S=Math.exp(-A*A/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const _=this._sizeLods[s],T=3*_*(s>M-ds?s-M+ds:0),b=4*(this._cubeSize-_);Ur(e,T,b,3*_,2*_),c.setRenderTarget(e),c.render(h,pa)}}function Vg(i){const t=[],e=[],n=[];let s=i;const r=i-ds+1+Jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ds?c=Jl[o-i+ds-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),l=-u,h=1+u,f=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*d),M=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,A=b>2?0:-1,S=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];x.set(S,v*g*b),M.set(f,m*g*b);const y=[b,b,b,b,b,b];_.set(y,p*g*b)}const T=new pe;T.setAttribute("position",new ve(x,v)),T.setAttribute("uv",new ve(M,m)),T.setAttribute("faceIndex",new ve(_,p)),t.push(T),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eu(i,t,e){const n=new Ui(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hg(i,t,e){const n=new Float32Array(Pi),s=new R(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function nu(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function iu(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function Gg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===ec||c===nc,l=c===vs||c===ys;if(u||l){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tu(i)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return u&&d&&d.height>0||l&&d&&s(d)?(e===null&&(e=new tu(i)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const u=6;for(let l=0;l<u;l++)a[l]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function u(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let M=0,_=x.length;M<_;M+=3){const T=x[M+0],b=x[M+1],E=x[M+2];f.push(T,b,b,E,E,T)}}else if(g!==void 0){const x=g.array;v=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const T=M+0,b=M+1,E=M+2;f.push(T,b,b,E,E,T)}}else return;const m=new(Nh(f)?Hh:Vh)(f,1);m.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function l(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:l}}function Xg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function u(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function l(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function qg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yg(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,c){const u=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const E=new Float32Array(T*b*4*h),A=new Bh(E,T,b,h);A.type=hn,A.needsUpdate=!0;const S=_*4;for(let P=0;P<h;P++){const L=p[P],D=x[P],U=M[P],V=T*b*4*P;for(let H=0;H<L.count;H++){const Y=H*S;g===!0&&(s.fromBufferAttribute(L,H),E[V+Y+0]=s.x,E[V+Y+1]=s.y,E[V+Y+2]=s.z,E[V+Y+3]=0),v===!0&&(s.fromBufferAttribute(D,H),E[V+Y+4]=s.x,E[V+Y+5]=s.y,E[V+Y+6]=s.z,E[V+Y+7]=0),m===!0&&(s.fromBufferAttribute(U,H),E[V+Y+8]=s.x,E[V+Y+9]=s.y,E[V+Y+10]=s.z,E[V+Y+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new nt(T,b)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $g(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,l=c.geometry,h=t.get(c,l);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}class qh extends ke{constructor(t,e,n,s,r,o,a,c,u,l=gs){if(l!==gs&&l!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===gs&&(n=di),n===void 0&&l===Ss&&(n=Ms),super(null,s,r,o,a,c,l,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yh=new ke,su=new qh(1,1),$h=new Bh,Zh=new Dd,Kh=new Wh,ru=[],ou=[],au=new Float32Array(16),cu=new Float32Array(9),lu=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),Ce(e,n)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),Ce(e,n)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),Ce(e,n)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function o0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=Uh,r=su):r=Yh,e.setTexture2D(t||r,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kh,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function p0(i){switch(i){case 5126:return Zg;case 35664:return Kg;case 35665:return Jg;case 35666:return jg;case 35674:return Qg;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return d0}}function m0(i,t){i.uniform1fv(this.addr,t)}function g0(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function _0(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function v0(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function y0(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function M0(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function S0(i,t){i.uniform1iv(this.addr,t)}function E0(i,t){i.uniform2iv(this.addr,t)}function b0(i,t){i.uniform3iv(this.addr,t)}function T0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function A0(i,t){i.uniform2uiv(this.addr,t)}function C0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function P0(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yh,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zh,r[o])}function L0(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kh,r[o])}function D0(i,t,e){const n=this.cache,s=t.length,r=zo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$h,r[o])}function U0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return b0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return A0;case 36295:return C0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class F0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class B0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function O0(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),o=va.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){uu(e,u===void 0?new N0(a,i,t):new F0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new B0(a),uu(e,h)),e=h}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);O0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function hu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const z0=37297;let V0=0;function H0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const fu=new Ot;function G0(i){qt._getMatrix(fu,qt.workingColorSpace,i);const t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function du(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+H0(i.getShaderSource(t),o)}else return s}function k0(i,t){const e=G0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W0(i,t){let e;switch(t){case qf:e="Linear";break;case Yf:e="Reinhard";break;case $f:e="Cineon";break;case Sh:e="ACESFilmic";break;case Kf:e="AgX";break;case Jf:e="Neutral";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new R;function X0(){qt.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Y0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function pu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(Z0,J0)}const K0=new Map;function J0(i,t){let e=Vt[t];if(e===void 0){const n=K0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(j0,Q0)}function Q0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _u(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function t_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function i_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function s_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=t_(e),u=e_(e),l=n_(e),h=i_(e),f=s_(e),d=q0(e),g=Y0(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==fi?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,k0("linearToOutputTexel",e.outputColorSpace),X0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Lc(o),o=pu(o,e),o=mu(o,e),a=Lc(a),a=pu(a,e),a=mu(a,e),o=gu(o),a=gu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,_=x+p+a,T=hu(s,s.VERTEX_SHADER,M),b=hu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,T),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(b).trim();let V=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,b);else{const Y=du(s,T,"vertex"),W=du(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Y+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(H=!1);H&&(P.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(T),s.deleteShader(b),A=new vo(s,v),S=$0(s,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,z0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let o_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c_(t),e.set(t,n)),n}}class c_{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}}function l_(i,t,e,n,s,r,o){const a=new Oh,c=new a_,u=new Set,l=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,L,D){const U=L.fog,V=D.geometry,H=S.isMeshStandardMaterial?L.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),W=Y&&Y.mapping===Uo?Y.image.height:null,it=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,mt=rt!==void 0?rt.length:0;let Lt=0;V.morphAttributes.position!==void 0&&(Lt=1),V.morphAttributes.normal!==void 0&&(Lt=2),V.morphAttributes.color!==void 0&&(Lt=3);let Gt,q,j,ht;if(it){const Qt=Rn[it];Gt=Qt.vertexShader,q=Qt.fragmentShader}else Gt=S.vertexShader,q=S.fragmentShader,c.update(S),j=c.getVertexShaderID(S),ht=c.getFragmentShaderID(S);const et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),bt=D.isInstancedMesh===!0,St=D.isBatchedMesh===!0,oe=!!S.map,Ht=!!S.matcap,ye=!!Y,O=!!S.aoMap,rn=!!S.lightMap,kt=!!S.bumpMap,Wt=!!S.normalMap,wt=!!S.displacementMap,ae=!!S.emissiveMap,Tt=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,J=S.iridescence>0,$=S.sheen>0,vt=S.transmission>0,at=w&&!!S.anisotropyMap,ft=z&&!!S.clearcoatMap,Yt=z&&!!S.clearcoatNormalMap,Q=z&&!!S.clearcoatRoughnessMap,dt=J&&!!S.iridescenceMap,At=J&&!!S.iridescenceThicknessMap,Dt=$&&!!S.sheenColorMap,pt=$&&!!S.sheenRoughnessMap,Xt=!!S.specularMap,zt=!!S.specularColorMap,se=!!S.specularIntensityMap,N=vt&&!!S.transmissionMap,ot=vt&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,ut=S.alphaTest>0,ct=!!S.alphaHash,Ft=!!S.extensions;let me=fi;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(me=i.toneMapping);const Fe={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Gt,fragmentShader:q,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:St,batchingColor:St&&D._colorsTexture!==null,instancing:bt,instancingColor:bt&&D.instanceColor!==null,instancingMorph:bt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ws,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:Ht,envMap:ye,envMapMode:ye&&Y.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:rn,bumpMap:kt,normalMap:Wt,displacementMap:f&&wt,emissiveMap:ae,normalMapObjectSpace:Wt&&S.normalMapType===ed,normalMapTangentSpace:Wt&&S.normalMapType===Dh,metalnessMap:Tt,roughnessMap:I,anisotropy:w,anisotropyMap:at,clearcoat:z,clearcoatMap:ft,clearcoatNormalMap:Yt,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:At,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:pt,specularMap:Xt,specularColorMap:zt,specularIntensityMap:se,transmission:vt,transmissionMap:N,thicknessMap:ot,gradientMap:X,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ct,combine:S.combine,mapUv:oe&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:rn&&v(S.lightMap.channel),bumpMapUv:kt&&v(S.bumpMap.channel),normalMapUv:Wt&&v(S.normalMap.channel),displacementMapUv:wt&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:Tt&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:at&&v(S.anisotropyMap.channel),clearcoatMapUv:ft&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(S.sheenRoughnessMap.channel),specularMapUv:Xt&&v(S.specularMap.channel),specularColorMapUv:zt&&v(S.specularColorMap.channel),specularIntensityMapUv:se&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:ot&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Wt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(oe||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Mt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===Ge,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=u.has(1),Fe.vertexUv2s=u.has(2),Fe.vertexUv3s=u.has(3),u.clear(),Fe}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let P;if(y){const L=Rn[y];P=Xd.clone(L.uniforms)}else P=S.uniforms;return P}function T(S,y){let P;for(let L=0,D=l.length;L<D;L++){const U=l[L];if(U.cacheKey===y){P=U,++P.usedTimes;break}}return P===void 0&&(P=new r_(i,y,S,r),l.push(P)),P}function b(S){if(--S.usedTimes===0){const y=l.indexOf(S);l[y]=l[l.length-1],l.pop(),S.destroy()}}function E(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:A}}function u_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function h_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),t++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function u(h,f){e.length>1&&e.sort(h||h_),n.length>1&&n.sort(f||xu),s.length>1&&s.sort(f||xu)}function l(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:u}}function f_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new vu,i.set(n,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new It};break;case"SpotLight":e={position:new R,direction:new R,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function p_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function __(i){const t=new d_,e=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new R);const s=new R,r=new Nt,o=new Nt;function a(u){let l=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,x=0,M=0,_=0,T=0,b=0,E=0;u.sort(g_);for(let S=0,y=u.length;S<y;S++){const P=u[S],L=P.color,D=P.intensity,U=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=L.r*D,h+=L.g*D,f+=L.b*D;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],D);E++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=H,d++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(D),H.distance=U,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const Y=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=Y.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=V,_++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(L).multiplyScalar(D),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,W=e.get(P);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(D),H.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==_||A.numSpotMaps!==T||A.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,A.directionalLength=d,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=_,A.numSpotMaps=T,A.numLightProbes=E,n.version=m_++)}function c(u,l){let h=0,f=0,d=0,g=0,v=0;const m=l.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const M=u[p];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function yu(i){const t=new __(i),e=[],n=[];function s(l){u.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function x_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yu(i),t.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class v_ extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y_ extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`;function E_(i,t,e){let n=new Bo;const s=new nt,r=new nt,o=new ne,a=new v_({depthPacking:td}),c=new y_,u={},l=e.maxTextureSize,h={[Dn]:Ge,[Ge]:Dn,[Mn]:Mn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let p=this.type;this.render=function(b,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(hi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==Gn&&this.type===Gn,U=p===Gn&&this.type!==Gn;for(let V=0,H=b.length;V<H;V++){const Y=b[V],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||D===!0||U===!0){const mt=this.type!==Gn?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Ui(s.x,s.y,mt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const rt=W.getViewportCount();for(let mt=0;mt<rt;mt++){const Lt=W.getViewport(mt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),L.viewport(o),W.updateMatrices(Y,mt),n=W.getFrustum(),_(E,A,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Gn&&x(W,A),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function x(b,E){const A=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ui(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,A,f,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,A,d,v,null)}function M(b,E,A,S){let y=null;const P=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)y=P;else if(y=A.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=y.uuid,D=E.uuid;let U=u[L];U===void 0&&(U={},u[L]=U);let V=U[D];V===void 0&&(V=y.clone(),U[D]=V,E.addEventListener("dispose",T)),y=V}if(y.visible=E.visible,y.wireframe=E.wireframe,S===Gn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=i.properties.get(y);L.light=A}return y}function _(b,E,A,S,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const D=t.update(b),U=b.material;if(Array.isArray(U)){const V=D.groups;for(let H=0,Y=V.length;H<Y;H++){const W=V[H],it=U[W.materialIndex];if(it&&it.visible){const rt=M(b,it,S,y);b.onBeforeShadow(i,b,E,A,D,rt,W),i.renderBufferDirect(A,null,D,rt,b,W),b.onAfterShadow(i,b,E,A,D,rt,W)}}}else if(U.visible){const V=M(b,U,S,y);b.onBeforeShadow(i,b,E,A,D,V,null),i.renderBufferDirect(A,null,D,V,b,null),b.onAfterShadow(i,b,E,A,D,V,null)}}const L=b.children;for(let D=0,U=L.length;D<U;D++)_(L[D],E,A,S,y)}function T(b){b.target.removeEventListener("dispose",T);for(const A in u){const S=u[A],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const b_={[$a]:Za,[Ka]:Qa,[Ja]:tc,[xs]:ja,[Za]:$a,[Qa]:Ka,[tc]:Ja,[ja]:xs};function T_(i,t){function e(){let N=!1;const ot=new ne;let X=null;const K=new ne(0,0,0,0);return{setMask:function(ut){X!==ut&&!N&&(i.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){N=ut},setClear:function(ut,ct,Ft,me,Fe){Fe===!0&&(ut*=me,ct*=me,Ft*=me),ot.set(ut,ct,Ft,me),K.equals(ot)===!1&&(i.clearColor(ut,ct,Ft,me),K.copy(ot))},reset:function(){N=!1,X=null,K.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,X=null,K=null,ut=null;return{setReversed:function(ct){if(ot!==ct){const Ft=t.get("EXT_clip_control");ot?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const me=ut;ut=null,this.setClear(me)}ot=ct},getReversed:function(){return ot},setTest:function(ct){ct?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ct){X!==ct&&!N&&(i.depthMask(ct),X=ct)},setFunc:function(ct){if(ot&&(ct=b_[ct]),K!==ct){switch(ct){case $a:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ct}},setLocked:function(ct){N=ct},setClear:function(ct){ut!==ct&&(ot&&(ct=1-ct),i.clearDepth(ct),ut=ct)},reset:function(){N=!1,X=null,K=null,ut=null,ot=!1}}}function s(){let N=!1,ot=null,X=null,K=null,ut=null,ct=null,Ft=null,me=null,Fe=null;return{setTest:function(Qt){N||(Qt?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Qt){ot!==Qt&&!N&&(i.stencilMask(Qt),ot=Qt)},setFunc:function(Qt,mn,Nn){(X!==Qt||K!==mn||ut!==Nn)&&(i.stencilFunc(Qt,mn,Nn),X=Qt,K=mn,ut=Nn)},setOp:function(Qt,mn,Nn){(ct!==Qt||Ft!==mn||me!==Nn)&&(i.stencilOp(Qt,mn,Nn),ct=Qt,Ft=mn,me=Nn)},setLocked:function(Qt){N=Qt},setClear:function(Qt){Fe!==Qt&&(i.clearStencil(Qt),Fe=Qt)},reset:function(){N=!1,ot=null,X=null,K=null,ut=null,ct=null,Ft=null,me=null,Fe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let l={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,M=null,_=null,T=null,b=null,E=new It(0,0,0),A=0,S=!1,y=null,P=null,L=null,D=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=Y>=2);let it=null,rt={};const mt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Gt=new ne().fromArray(mt),q=new ne().fromArray(Lt);function j(N,ot,X,K){const ut=new Uint8Array(4),ct=i.createTexture();i.bindTexture(N,ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<X;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ot+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ct}const ht={};ht[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(xs),kt(!1),Wt(Tl),et(i.CULL_FACE),O(hi);function et(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function Mt(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function bt(N,ot){return h[N]!==ot?(i.bindFramebuffer(N,ot),h[N]=ot,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function St(N,ot){let X=d,K=!1;if(N){X=f.get(ot),X===void 0&&(X=[],f.set(ot,X));const ut=N.textures;if(X.length!==ut.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ft=ut.length;ct<Ft;ct++)X[ct]=i.COLOR_ATTACHMENT0+ct;X.length=ut.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function oe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Ht={[Ri]:i.FUNC_ADD,[Af]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};Ht[Rf]=i.MIN,Ht[Pf]=i.MAX;const ye={[If]:i.ZERO,[Lf]:i.ONE,[Df]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[zf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Nf]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[Of]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[Vf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[kf]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,ot,X,K,ut,ct,Ft,me,Fe,Qt){if(N===hi){v===!0&&(Mt(i.BLEND),v=!1);return}if(v===!1&&(et(i.BLEND),v=!0),N!==wf){if(N!==m||Qt!==S){if((p!==Ri||_!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,_=Ri),Qt)switch(N){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,M=null,T=null,b=null,E.set(0,0,0),A=0,m=N,S=Qt}return}ut=ut||ot,ct=ct||X,Ft=Ft||K,(ot!==p||ut!==_)&&(i.blendEquationSeparate(Ht[ot],Ht[ut]),p=ot,_=ut),(X!==x||K!==M||ct!==T||Ft!==b)&&(i.blendFuncSeparate(ye[X],ye[K],ye[ct],ye[Ft]),x=X,M=K,T=ct,b=Ft),(me.equals(E)===!1||Fe!==A)&&(i.blendColor(me.r,me.g,me.b,Fe),E.copy(me),A=Fe),m=N,S=!1}function rn(N,ot){N.side===Mn?Mt(i.CULL_FACE):et(i.CULL_FACE);let X=N.side===Ge;ot&&(X=!X),kt(X),N.blending===ms&&N.transparent===!1?O(hi):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const K=N.stencilWrite;a.setTest(K),K&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function Wt(N){N!==Ef?(et(i.CULL_FACE),N!==P&&(N===Tl?i.cullFace(i.BACK):N===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=N}function wt(N){N!==L&&(H&&i.lineWidth(N),L=N)}function ae(N,ot,X){N?(et(i.POLYGON_OFFSET_FILL),(D!==ot||U!==X)&&(i.polygonOffset(ot,X),D=ot,U=X)):Mt(i.POLYGON_OFFSET_FILL)}function Tt(N){N?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function I(N){N===void 0&&(N=i.TEXTURE0+V-1),it!==N&&(i.activeTexture(N),it=N)}function w(N,ot,X){X===void 0&&(it===null?X=i.TEXTURE0+V-1:X=it);let K=rt[X];K===void 0&&(K={type:void 0,texture:void 0},rt[X]=K),(K.type!==N||K.texture!==ot)&&(it!==X&&(i.activeTexture(X),it=X),i.bindTexture(N,ot||ht[N]),K.type=N,K.texture=ot)}function z(){const N=rt[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){Gt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function pt(N){q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Xt(N,ot){let X=u.get(ot);X===void 0&&(X=new WeakMap,u.set(ot,X));let K=X.get(N);K===void 0&&(K=i.getUniformBlockIndex(ot,N.name),X.set(N,K))}function zt(N,ot){const K=u.get(ot).get(N);c.get(ot)!==K&&(i.uniformBlockBinding(ot,K,N.__bindingPointIndex),c.set(ot,K))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},it=null,rt={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,x=null,M=null,_=null,T=null,b=null,E=new It(0,0,0),A=0,S=!1,y=null,P=null,L=null,D=null,U=null,Gt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Mt,bindFramebuffer:bt,drawBuffers:St,useProgram:oe,setBlending:O,setMaterial:rn,setFlipSided:kt,setCullFace:Wt,setLineWidth:wt,setPolygonOffset:ae,setScissorTest:Tt,activeTexture:I,bindTexture:w,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:dt,texImage3D:At,updateUBOMapping:Xt,uniformBlockBinding:zt,texStorage2D:Yt,texStorage3D:Q,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Dt,viewport:pt,reset:se}}function Mu(i,t,e,n){const s=w_(n);switch(e){case Ah:return i*t;case Rh:return i*t;case Ph:return i*t*2;case Zc:return i*t/s.components*s.byteLength;case No:return i*t/s.components*s.byteLength;case Ih:return i*t*2/s.components*s.byteLength;case Kc:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case Jc:return i*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:case cc:return Math.max(i,16)*Math.max(t,8)/4;case rc:case ac:return Math.max(i,8)*Math.max(t,8)/2;case lc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xo:case wc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lh:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w_(i){switch(i){case Zn:case bh:return{byteLength:1,components:1};case rr:case Th:case lr:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case di:case qc:case hn:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function A_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,l=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return d?new OffscreenCanvas(I,w):Ao("canvas")}function v(I,w,z){let Z=1;const J=Tt(I);if((J.width>z||J.height>z)&&(Z=z/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(Z*J.width),vt=Math.floor(Z*J.height);h===void 0&&(h=g($,vt));const at=w?g($,vt):h;return at.width=$,at.height=vt,at.getContext("2d").drawImage(I,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+vt+")."),at}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,w,z,Z,J=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=w;if(w===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),w===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),w===i.RGBA){const vt=J?Fo:qt.getTransfer(Z);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=vt===ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(I,w){let z;return I?w===null||w===di||w===Ms?z=i.DEPTH24_STENCIL8:w===hn?z=i.DEPTH32F_STENCIL8:w===rr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===di||w===Ms?z=i.DEPTH_COMPONENT24:w===hn?z=i.DEPTH_COMPONENT32F:w===rr&&(z=i.DEPTH_COMPONENT16),z}function T(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function b(I){const w=I.target;w.removeEventListener("dispose",b),A(w),w.isVideoTexture&&l.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),y(w)}function A(I){const w=n.get(I);if(w.__webglInit===void 0)return;const z=I.source,Z=f.get(z);if(Z){const J=Z[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(I),Object.keys(Z).length===0&&f.delete(z)}n.remove(I)}function S(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const z=I.source,Z=f.get(z);delete Z[w.__cacheKey],o.memory.textures--}function y(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let J=0;J<w.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=I.textures;for(let Z=0,J=z.length;Z<J;Z++){const $=n.get(z[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(I)}let P=0;function L(){P=0}function D(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function V(I,w){const z=n.get(I);if(I.isVideoTexture&&wt(I),I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,I,w);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function H(I,w){const z=n.get(I);if(I.version>0&&z.__version!==I.version){q(z,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function Y(I,w){const z=n.get(I);if(I.version>0&&z.__version!==I.version){q(z,I,w);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function W(I,w){const z=n.get(I);if(I.version>0&&z.__version!==I.version){j(z,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const it={[ic]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},rt={[nn]:i.NEAREST,[jf]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Yo]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},mt={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[Uh]:i.LEQUAL,[sd]:i.EQUAL,[ad]:i.GEQUAL,[rd]:i.GREATER,[od]:i.NOTEQUAL};function Lt(I,w){if(w.type===hn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===Yo||w.magFilter===mr||w.magFilter===Li||w.minFilter===Pn||w.minFilter===Yo||w.minFilter===mr||w.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,it[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,it[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,it[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,rt[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,mt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==mr&&w.minFilter!==Li||w.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Gt(I,w){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",b));const Z=w.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const $=U(w);if($!==I.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[$].usedTimes++;const vt=J[I.__cacheKey];vt!==void 0&&(J[I.__cacheKey].usedTimes--,vt.usedTimes===0&&S(w)),I.__cacheKey=$,I.__webglTexture=J[$].texture}return z}function q(I,w,z){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);const J=Gt(I,w),$=w.source;e.bindTexture(Z,I.__webglTexture,i.TEXTURE0+z);const vt=n.get($);if($.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const at=qt.getPrimaries(qt.workingColorSpace),ft=w.colorSpace===li?null:qt.getPrimaries(w.colorSpace),Yt=w.colorSpace===li||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Q=v(w.image,!1,s.maxTextureSize);Q=ae(w,Q);const dt=r.convert(w.format,w.colorSpace),At=r.convert(w.type);let Dt=M(w.internalFormat,dt,At,w.colorSpace,w.isVideoTexture);Lt(Z,w);let pt;const Xt=w.mipmaps,zt=w.isVideoTexture!==!0,se=vt.__version===void 0||J===!0,N=$.dataReady,ot=T(w,Q);if(w.isDepthTexture)Dt=_(w.format===Ss,w.type),se&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Dt,Q.width,Q.height,0,dt,At,null));else if(w.isDataTexture)if(Xt.length>0){zt&&se&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Xt[0].width,Xt[0].height);for(let X=0,K=Xt.length;X<K;X++)pt=Xt[X],zt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,At,pt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,pt.width,pt.height,0,dt,At,pt.data);w.generateMipmaps=!1}else zt?(se&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Q.width,Q.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,At,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,Q.width,Q.height,0,dt,At,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){zt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,Xt[0].width,Xt[0].height,Q.depth);for(let X=0,K=Xt.length;X<K;X++)if(pt=Xt[X],w.format!==tn)if(dt!==null)if(zt){if(N)if(w.layerUpdates.size>0){const ut=Mu(pt.width,pt.height,w.format,w.type);for(const ct of w.layerUpdates){const Ft=pt.data.subarray(ct*ut/pt.data.BYTES_PER_ELEMENT,(ct+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ct,pt.width,pt.height,1,dt,Ft)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Dt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,At,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Dt,pt.width,pt.height,Q.depth,0,dt,At,pt.data)}else{zt&&se&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Xt[0].width,Xt[0].height);for(let X=0,K=Xt.length;X<K;X++)pt=Xt[X],w.format!==tn?dt!==null?zt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,At,pt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,pt.width,pt.height,0,dt,At,pt.data)}else if(w.isDataArrayTexture)if(zt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,Q.width,Q.height,Q.depth),N)if(w.layerUpdates.size>0){const X=Mu(Q.width,Q.height,w.format,w.type);for(const K of w.layerUpdates){const ut=Q.data.subarray(K*X/Q.data.BYTES_PER_ELEMENT,(K+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,dt,At,ut)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,At,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,Q.width,Q.height,Q.depth,0,dt,At,Q.data);else if(w.isData3DTexture)zt?(se&&e.texStorage3D(i.TEXTURE_3D,ot,Dt,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,At,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,Q.width,Q.height,Q.depth,0,dt,At,Q.data);else if(w.isFramebufferTexture){if(se)if(zt)e.texStorage2D(i.TEXTURE_2D,ot,Dt,Q.width,Q.height);else{let X=Q.width,K=Q.height;for(let ut=0;ut<ot;ut++)e.texImage2D(i.TEXTURE_2D,ut,Dt,X,K,0,dt,At,null),X>>=1,K>>=1}}else if(Xt.length>0){if(zt&&se){const X=Tt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Dt,X.width,X.height)}for(let X=0,K=Xt.length;X<K;X++)pt=Xt[X],zt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,dt,At,pt):e.texImage2D(i.TEXTURE_2D,X,Dt,dt,At,pt);w.generateMipmaps=!1}else if(zt){if(se){const X=Tt(Q);e.texStorage2D(i.TEXTURE_2D,ot,Dt,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,At,Q)}else e.texImage2D(i.TEXTURE_2D,0,Dt,dt,At,Q);m(w)&&p(Z),vt.__version=$.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function j(I,w,z){if(w.image.length!==6)return;const Z=Gt(I,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);const $=n.get(J);if(J.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const vt=qt.getPrimaries(qt.workingColorSpace),at=w.colorSpace===li?null:qt.getPrimaries(w.colorSpace),ft=w.colorSpace===li||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,Q=w.image[0]&&w.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Yt&&!Q?dt[K]=v(w.image[K],!0,s.maxCubemapSize):dt[K]=Q?w.image[K].image:w.image[K],dt[K]=ae(w,dt[K]);const At=dt[0],Dt=r.convert(w.format,w.colorSpace),pt=r.convert(w.type),Xt=M(w.internalFormat,Dt,pt,w.colorSpace),zt=w.isVideoTexture!==!0,se=$.__version===void 0||Z===!0,N=J.dataReady;let ot=T(w,At);Lt(i.TEXTURE_CUBE_MAP,w);let X;if(Yt){zt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Xt,At.width,At.height);for(let K=0;K<6;K++){X=dt[K].mipmaps;for(let ut=0;ut<X.length;ut++){const ct=X[ut];w.format!==tn?Dt!==null?zt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Dt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Xt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ct.width,ct.height,Dt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Xt,ct.width,ct.height,0,Dt,pt,ct.data)}}}else{if(X=w.mipmaps,zt&&se){X.length>0&&ot++;const K=Tt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Dt,pt,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,dt[K].width,dt[K].height,0,Dt,pt,dt[K].data);for(let ut=0;ut<X.length;ut++){const Ft=X[ut].image[K].image;zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ft.width,Ft.height,Dt,pt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Xt,Ft.width,Ft.height,0,Dt,pt,Ft.data)}}else{zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,pt,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,Dt,pt,dt[K]);for(let ut=0;ut<X.length;ut++){const ct=X[ut];zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Dt,pt,ct.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Xt,Dt,pt,ct.image[K])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),$.__version=J.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ht(I,w,z,Z,J,$){const vt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),ft=M(z.internalFormat,vt,at,z.colorSpace),Yt=n.get(w),Q=n.get(z);if(Q.__renderTarget=w,!Yt.__hasExternalTextures){const dt=Math.max(1,w.width>>$),At=Math.max(1,w.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,$,ft,dt,At,w.depth,0,vt,at,null):e.texImage2D(J,$,ft,dt,At,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Wt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,Q.__webglTexture,0,kt(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,Q.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(I,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const Z=w.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=_(w.stencilBuffer,J),vt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=kt(w);Wt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{const Z=w.textures;for(let J=0;J<Z.length;J++){const $=Z[J],vt=r.convert($.format,$.colorSpace),at=r.convert($.type),ft=M($.internalFormat,vt,at,$.colorSpace),Yt=kt(w);z&&Wt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ft,w.width,w.height):Wt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,ft,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ft,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const J=Z.__webglTexture,$=kt(w);if(w.depthTexture.format===gs)Wt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===Ss)Wt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function bt(I){const w=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=Z}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Mt(w.__webglFramebuffer,I)}else if(z){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),et(w.__webglDepthbuffer[Z],I,!1);else{const J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),et(w.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,w,z){const Z=n.get(I);w!==void 0&&ht(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&bt(I)}function oe(I){const w=I.texture,z=n.get(I),Z=n.get(w);I.addEventListener("dispose",E);const J=I.textures,$=I.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ft=0;ft<w.mipmaps.length;ft++)z.__webglFramebuffer[at][ft]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ft=J.length;at<ft;at++){const Yt=n.get(J[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Wt(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ft=J[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Yt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),dt=M(ft.internalFormat,Yt,Q,ft.colorSpace,I.isXRRenderTarget===!0),At=kt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,dt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),et(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)ht(z.__webglFramebuffer[at][ft],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else ht(z.__webglFramebuffer[at],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=J.length;at<ft;at++){const Yt=J[at],Q=n.get(Yt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Lt(i.TEXTURE_2D,Yt),ht(z.__webglFramebuffer,I,Yt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Lt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let ft=0;ft<w.mipmaps.length;ft++)ht(z.__webglFramebuffer[ft],I,w,i.COLOR_ATTACHMENT0,at,ft);else ht(z.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,at,0);m(w)&&p(at),e.unbindTexture()}I.depthBuffer&&bt(I)}function Ht(I){const w=I.textures;for(let z=0,Z=w.length;z<Z;z++){const J=w[z];if(m(J)){const $=x(I),vt=n.get(J).__webglTexture;e.bindTexture($,vt),p($),e.unbindTexture()}}}const ye=[],O=[];function rn(I){if(I.samples>0){if(Wt(I)===!1){const w=I.textures,z=I.width,Z=I.height;let J=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),at=w.length>1;if(at)for(let ft=0;ft<w.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<w.length;ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Yt=n.get(w[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,J,i.NEAREST),c===!0&&(ye.length=0,O.length=0,ye.push(i.COLOR_ATTACHMENT0+ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ye.push($),O.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<w.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Yt=n.get(w[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function kt(I){return Math.min(s.maxSamples,I.samples)}function Wt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(I){const w=o.render.frame;l.get(I)!==w&&(l.set(I,w),I.update())}function ae(I,w){const z=I.colorSpace,Z=I.format,J=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==ws&&z!==li&&(qt.getTransfer(z)===ee?(Z!==tn||J!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=St,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Wt}function C_(i,t){function e(n,s=li){let r;const o=qt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.BYTE;if(n===Th)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Ch)return i.RGB;if(n===tn)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Ph)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===No)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===Kc)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===uc||n===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===uc)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===Ec||n===bc||n===Tc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===wc||n===Ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lh||n===Cc||n===Rc||n===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class R_ extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class In extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=l.position.distanceTo(h.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`;class D_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:I_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends As{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,l=null,h=null,f=null,d=null,g=null;const v=new D_,m=e.getContextAttributes();let p=null,x=null;const M=[],_=[],T=new nt;let b=null;const E=new Qe;E.viewport=new ne;const A=new Qe;A.viewport=new ne;const S=[E,A],y=new R_;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=M[q];return j===void 0&&(j=new ya,M[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=M[q];return j===void 0&&(j=new ya,M[q]=j),j.getGripSpace()},this.getHand=function(q){let j=M[q];return j===void 0&&(j=new ya,M[q]=j),j.getHandSpace()};function D(q){const j=_.indexOf(q.inputSource);if(j===-1)return;const ht=M[j];ht!==void 0&&(ht.update(q.inputSource,q.frame,u||o),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let q=0;q<M.length;q++){const j=_[q];j!==null&&(_[q]=null,M[q].disconnect(j))}P=null,L=null,v.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ui(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ht=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Ss:gs,ht=m.stencil?Ms:di);const Mt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ui(f.textureWidth,f.textureHeight,{format:tn,type:Zn,depthTexture:new qh(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(q){for(let j=0;j<q.removed.length;j++){const ht=q.removed[j],et=_.indexOf(ht);et>=0&&(_[et]=null,M[et].disconnect(ht))}for(let j=0;j<q.added.length;j++){const ht=q.added[j];let et=_.indexOf(ht);if(et===-1){for(let bt=0;bt<M.length;bt++)if(bt>=_.length){_.push(ht),et=bt;break}else if(_[bt]===null){_[bt]=ht,et=bt;break}if(et===-1)break}const Mt=M[et];Mt&&Mt.connect(ht)}}const H=new R,Y=new R;function W(q,j,ht){H.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(ht.matrixWorld);const et=H.distanceTo(Y),Mt=j.projectionMatrix.elements,bt=ht.projectionMatrix.elements,St=Mt[14]/(Mt[10]-1),oe=Mt[14]/(Mt[10]+1),Ht=(Mt[9]+1)/Mt[5],ye=(Mt[9]-1)/Mt[5],O=(Mt[8]-1)/Mt[0],rn=(bt[8]+1)/bt[0],kt=St*O,Wt=St*rn,wt=et/(-O+rn),ae=wt*-O;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Tt=St+wt,I=oe+wt,w=kt-ae,z=Wt+(et-ae),Z=Ht*oe/I*Tt,J=ye*oe/I*Tt;q.projectionMatrix.makePerspective(w,z,Z,J,Tt,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ht=q.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),y.near=A.near=E.near=j,y.far=A.far=E.far=ht,(P!==y.near||L!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,L=y.far),E.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|A.layers.mask;const et=q.parent,Mt=y.cameras;it(y,et);for(let bt=0;bt<Mt.length;bt++)it(Mt[bt],et);Mt.length===2?W(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),rt(q,y,et)};function rt(q,j,ht){ht===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=or*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let mt=null;function Lt(q,j){if(l=j.getViewerPose(u||o),g=j,l!==null){const ht=l.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let et=!1;ht.length!==y.cameras.length&&(y.cameras.length=0,et=!0);for(let bt=0;bt<ht.length;bt++){const St=ht[bt];let oe=null;if(d!==null)oe=d.getViewport(St);else{const ye=h.getViewSubImage(f,St);oe=ye.viewport,bt===0&&(t.setRenderTargetTextures(x,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(x))}let Ht=S[bt];Ht===void 0&&(Ht=new Qe,Ht.layers.enable(bt),Ht.viewport=new ne,S[bt]=Ht),Ht.matrix.fromArray(St.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(St.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(oe.x,oe.y,oe.width,oe.height),bt===0&&(y.matrix.copy(Ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),et===!0&&y.cameras.push(Ht)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const bt=h.getDepthInformation(ht[0]);bt&&bt.isValid&&bt.texture&&v.init(t,bt,s.renderState)}}for(let ht=0;ht<M.length;ht++){const et=_[ht],Mt=M[ht];et!==null&&Mt!==void 0&&Mt.update(et,j,u||o)}mt&&mt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Gt=new Xh;Gt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const Si=new bn,N_=new Nt;function F_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,Si.copy(_),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(Si)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function u(x,M){let _=s[x.id];_===void 0&&(g(x),_=l(x),s[x.id]=_,x.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(x,T);const b=t.render.frame;r[x.id]!==b&&(f(x),r[x.id]=b)}function l(x){const M=h();x.__bindingPointIndex=M;const _=i.createBuffer(),T=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],_=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,E=_.length;b<E;b++){const A=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,y=A.length;S<y;S++){const P=A[S];if(d(P,b,S,T)===!0){const L=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let V=0;V<D.length;V++){const H=D[V],Y=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+U,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,_,T){const b=x.value,E=M+"_"+_;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const A=T[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[E]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(x){const M=x.uniforms;let _=0;const T=16;for(let E=0,A=M.length;E<A;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,P=S.length;y<P;y++){const L=S[y],D=Array.isArray(L.value)?L.value:[L.value];for(let U=0,V=D.length;U<V;U++){const H=D[U],Y=v(H),W=_%T,it=W%Y.boundary,rt=W+it;_+=it,rt!==0&&T-rt<Y.storage&&(_+=T-rt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Y.storage}}}const b=_%T;return b>0&&(_+=T-b),x.__size=_,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:u,dispose:p}}class O_{constructor(t={}){const{canvas:e=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=fi,this.toneMappingExposure=1;const _=this;let T=!1,b=0,E=0,A=null,S=-1,y=null;const P=new ne,L=new ne;let D=null;const U=new It(0);let V=0,H=e.width,Y=e.height,W=1,it=null,rt=null;const mt=new ne(0,0,H,Y),Lt=new ne(0,0,H,Y);let Gt=!1;const q=new Bo;let j=!1,ht=!1;const et=new Nt,Mt=new Nt,bt=new R,St=new ne,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ye(){return A===null?W:1}let O=n;function rn(C,F){return e.getContext(C,F)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cr}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){const F="webgl2";if(O=rn(F,C),O===null)throw rn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let kt,Wt,wt,ae,Tt,I,w,z,Z,J,$,vt,at,ft,Yt,Q,dt,At,Dt,pt,Xt,zt,se,N;function ot(){kt=new kg(O),kt.init(),zt=new C_(O,kt),Wt=new Fg(O,kt,t,zt),wt=new T_(O,kt),Wt.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),ae=new qg(O),Tt=new u_,I=new A_(O,kt,wt,Tt,Wt,zt,ae),w=new Og(_),z=new Gg(_),Z=new jd(O),se=new Ug(O,Z),J=new Wg(O,Z,ae,se),$=new $g(O,J,Z,ae),Dt=new Yg(O,Wt,I),Q=new Bg(Tt),vt=new l_(_,w,z,kt,Wt,se,Q),at=new F_(_,Tt),ft=new f_,Yt=new x_(kt),At=new Dg(_,w,z,wt,$,d,c),dt=new E_(_,$,Wt),N=new B_(O,ae,Wt,wt),pt=new Ng(O,kt,ae),Xt=new Xg(O,kt,ae),ae.programs=vt.programs,_.capabilities=Wt,_.extensions=kt,_.properties=Tt,_.renderLists=ft,_.shadowMap=dt,_.state=wt,_.info=ae}ot();const X=new U_(_,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=kt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=kt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(H,Y,!1))},this.getSize=function(C){return C.set(H,Y)},this.setSize=function(C,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Y=F,e.width=Math.floor(C*W),e.height=Math.floor(F*W),G===!0&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(H*W,Y*W).floor()},this.setDrawingBufferSize=function(C,F,G){H=C,Y=F,W=G,e.width=Math.floor(C*G),e.height=Math.floor(F*G),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(mt)},this.setViewport=function(C,F,G,k){C.isVector4?mt.set(C.x,C.y,C.z,C.w):mt.set(C,F,G,k),wt.viewport(P.copy(mt).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(Lt)},this.setScissor=function(C,F,G,k){C.isVector4?Lt.set(C.x,C.y,C.z,C.w):Lt.set(C,F,G,k),wt.scissor(L.copy(Lt).multiplyScalar(W).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(C){wt.setScissorTest(Gt=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(C=!0,F=!0,G=!0){let k=0;if(C){let B=!1;if(A!==null){const tt=A.texture.format;B=tt===Jc||tt===Kc||tt===No}if(B){const tt=A.texture.type,lt=tt===Zn||tt===di||tt===rr||tt===Ms||tt===Yc||tt===$c,gt=At.getClearColor(),_t=At.getClearAlpha(),Ut=gt.r,Bt=gt.g,xt=gt.b;lt?(g[0]=Ut,g[1]=Bt,g[2]=xt,g[3]=_t,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Ut,v[1]=Bt,v[2]=xt,v[3]=_t,O.clearBufferiv(O.COLOR,0,v))}else k|=O.COLOR_BUFFER_BIT}F&&(k|=O.DEPTH_BUFFER_BIT),G&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ft.dispose(),Yt.dispose(),Tt.dispose(),w.dispose(),z.dispose(),$.dispose(),se.dispose(),N.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",_l),X.removeEventListener("sessionend",xl),gi.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=ae.autoReset,F=dt.enabled,G=dt.autoUpdate,k=dt.needsUpdate,B=dt.type;ot(),ae.autoReset=C,dt.enabled=F,dt.autoUpdate=G,dt.needsUpdate=k,dt.type=B}function ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ft(C){const F=C.target;F.removeEventListener("dispose",Ft),me(F)}function me(C){Fe(C),Tt.remove(C)}function Fe(C){const F=Tt.get(C).programs;F!==void 0&&(F.forEach(function(G){vt.releaseProgram(G)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,G,k,B,tt){F===null&&(F=oe);const lt=B.isMesh&&B.matrixWorld.determinant()<0,gt=yf(C,F,G,k,B);wt.setMaterial(k,lt);let _t=G.index,Ut=1;if(k.wireframe===!0){if(_t=J.getWireframeAttribute(G),_t===void 0)return;Ut=2}const Bt=G.drawRange,xt=G.attributes.position;let $t=Bt.start*Ut,re=(Bt.start+Bt.count)*Ut;tt!==null&&($t=Math.max($t,tt.start*Ut),re=Math.min(re,(tt.start+tt.count)*Ut)),_t!==null?($t=Math.max($t,0),re=Math.min(re,_t.count)):xt!=null&&($t=Math.max($t,0),re=Math.min(re,xt.count));const ce=re-$t;if(ce<0||ce===1/0)return;se.setup(B,k,gt,G,_t);let $e,Kt=pt;if(_t!==null&&($e=Z.get(_t),Kt=Xt,Kt.setIndex($e)),B.isMesh)k.wireframe===!0?(wt.setLineWidth(k.wireframeLinewidth*ye()),Kt.setMode(O.LINES)):Kt.setMode(O.TRIANGLES);else if(B.isLine){let yt=k.linewidth;yt===void 0&&(yt=1),wt.setLineWidth(yt*ye()),B.isLineSegments?Kt.setMode(O.LINES):B.isLineLoop?Kt.setMode(O.LINE_LOOP):Kt.setMode(O.LINE_STRIP)}else B.isPoints?Kt.setMode(O.POINTS):B.isSprite&&Kt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Kt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const yt=B._multiDrawStarts,Fn=B._multiDrawCounts,Jt=B._multiDrawCount,gn=_t?Z.get(_t).bytesPerElement:1,Bi=Tt.get(k).currentProgram.getUniforms();for(let Ke=0;Ke<Jt;Ke++)Bi.setValue(O,"_gl_DrawID",Ke),Kt.render(yt[Ke]/gn,Fn[Ke])}else if(B.isInstancedMesh)Kt.renderInstances($t,ce,B.count);else if(G.isInstancedBufferGeometry){const yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Fn=Math.min(G.instanceCount,yt);Kt.renderInstances($t,ce,Fn)}else Kt.render($t,ce)};function Qt(C,F,G){C.transparent===!0&&C.side===Mn&&C.forceSinglePass===!1?(C.side=Ge,C.needsUpdate=!0,pr(C,F,G),C.side=Dn,C.needsUpdate=!0,pr(C,F,G),C.side=Mn):pr(C,F,G)}this.compile=function(C,F,G=null){G===null&&(G=C),p=Yt.get(G),p.init(F),M.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),C!==G&&C.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const k=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const tt=B.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];Qt(gt,G,B),k.add(gt)}else Qt(tt,G,B),k.add(tt)}),M.pop(),p=null,k},this.compileAsync=function(C,F,G=null){const k=this.compile(C,F,G);return new Promise(B=>{function tt(){if(k.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){B(C);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let mn=null;function Nn(C){mn&&mn(C)}function _l(){gi.stop()}function xl(){gi.start()}const gi=new Xh;gi.setAnimationLoop(Nn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(C){mn=C,X.setAnimationLoop(C),C===null?gi.stop():gi.start()},X.addEventListener("sessionstart",_l),X.addEventListener("sessionend",xl),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,F,A),p=Yt.get(C,M.length),p.init(F),M.push(p),Mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Mt),ht=this.localClippingEnabled,j=Q.init(this.clippingPlanes,ht),m=ft.get(C,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const tt=_.xr.getDepthSensingMesh();tt!==null&&qo(tt,F,-1/0,_.sortObjects)}qo(C,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,rt),Ht=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ht&&At.addToRenderList(m,C),this.info.render.frame++,j===!0&&Q.beginShadows();const G=p.state.shadowsArray;dt.render(G,C,F),j===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const tt=F.cameras;if(B.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];yl(k,B,C,_t)}Ht&&At.render(C);for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];vl(m,C,_t,_t.viewport)}}else B.length>0&&yl(k,B,C,F),Ht&&At.render(C),vl(m,C,F);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,F),se.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&Q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function qo(C,F,G,k){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){k&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const lt=$.update(C),gt=C.material;gt.visible&&m.push(C,lt,gt,G,St.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const lt=$.update(C),gt=C.material;if(k&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),St.copy(lt.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(gt)){const _t=lt.groups;for(let Ut=0,Bt=_t.length;Ut<Bt;Ut++){const xt=_t[Ut],$t=gt[xt.materialIndex];$t&&$t.visible&&m.push(C,lt,$t,G,St.z,xt)}}else gt.visible&&m.push(C,lt,gt,G,St.z,null)}}const tt=C.children;for(let lt=0,gt=tt.length;lt<gt;lt++)qo(tt[lt],F,G,k)}function vl(C,F,G,k){const B=C.opaque,tt=C.transmissive,lt=C.transparent;p.setupLightsView(G),j===!0&&Q.setGlobalState(_.clippingPlanes,G),k&&wt.viewport(P.copy(k)),B.length>0&&dr(B,F,G),tt.length>0&&dr(tt,F,G),lt.length>0&&dr(lt,F,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function yl(C,F,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ui(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?lr:Zn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[k.id],lt=k.viewport||P;tt.setSize(lt.z,lt.w);const gt=_.getRenderTarget();_.setRenderTarget(tt),_.getClearColor(U),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&At.render(G);const _t=_.toneMapping;_.toneMapping=fi;const Ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),j===!0&&Q.setGlobalState(_.clippingPlanes,k),dr(C,G,k),I.updateMultisampleRenderTarget(tt),I.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let xt=0,$t=F.length;xt<$t;xt++){const re=F[xt],ce=re.object,$e=re.geometry,Kt=re.material,yt=re.group;if(Kt.side===Mn&&ce.layers.test(k.layers)){const Fn=Kt.side;Kt.side=Ge,Kt.needsUpdate=!0,Ml(ce,G,k,$e,Kt,yt),Kt.side=Fn,Kt.needsUpdate=!0,Bt=!0}}Bt===!0&&(I.updateMultisampleRenderTarget(tt),I.updateRenderTargetMipmap(tt))}_.setRenderTarget(gt),_.setClearColor(U,V),Ut!==void 0&&(k.viewport=Ut),_.toneMapping=_t}function dr(C,F,G){const k=F.isScene===!0?F.overrideMaterial:null;for(let B=0,tt=C.length;B<tt;B++){const lt=C[B],gt=lt.object,_t=lt.geometry,Ut=k===null?lt.material:k,Bt=lt.group;gt.layers.test(G.layers)&&Ml(gt,F,G,_t,Ut,Bt)}}function Ml(C,F,G,k,B,tt){C.onBeforeRender(_,F,G,k,B,tt),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(_,F,G,k,C,tt),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,_.renderBufferDirect(G,F,k,B,C,tt),B.side=Dn,B.needsUpdate=!0,_.renderBufferDirect(G,F,k,B,C,tt),B.side=Mn):_.renderBufferDirect(G,F,k,B,C,tt),C.onAfterRender(_,F,G,k,B,tt)}function pr(C,F,G){F.isScene!==!0&&(F=oe);const k=Tt.get(C),B=p.state.lights,tt=p.state.shadowsArray,lt=B.state.version,gt=vt.getParameters(C,B.state,tt,F,G),_t=vt.getProgramCacheKey(gt);let Ut=k.programs;k.environment=C.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(C.isMeshStandardMaterial?z:w).get(C.envMap||k.environment),k.envMapRotation=k.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Ut===void 0&&(C.addEventListener("dispose",Ft),Ut=new Map,k.programs=Ut);let Bt=Ut.get(_t);if(Bt!==void 0){if(k.currentProgram===Bt&&k.lightsStateVersion===lt)return El(C,gt),Bt}else gt.uniforms=vt.getUniforms(C),C.onBeforeCompile(gt,_),Bt=vt.acquireProgram(gt,_t),Ut.set(_t,Bt),k.uniforms=gt.uniforms;const xt=k.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(xt.clippingPlanes=Q.uniform),El(C,gt),k.needsLights=Sf(C),k.lightsStateVersion=lt,k.needsLights&&(xt.ambientLightColor.value=B.state.ambient,xt.lightProbe.value=B.state.probe,xt.directionalLights.value=B.state.directional,xt.directionalLightShadows.value=B.state.directionalShadow,xt.spotLights.value=B.state.spot,xt.spotLightShadows.value=B.state.spotShadow,xt.rectAreaLights.value=B.state.rectArea,xt.ltc_1.value=B.state.rectAreaLTC1,xt.ltc_2.value=B.state.rectAreaLTC2,xt.pointLights.value=B.state.point,xt.pointLightShadows.value=B.state.pointShadow,xt.hemisphereLights.value=B.state.hemi,xt.directionalShadowMap.value=B.state.directionalShadowMap,xt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xt.spotShadowMap.value=B.state.spotShadowMap,xt.spotLightMatrix.value=B.state.spotLightMatrix,xt.spotLightMap.value=B.state.spotLightMap,xt.pointShadowMap.value=B.state.pointShadowMap,xt.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Bt,k.uniformsList=null,Bt}function Sl(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=vo.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function El(C,F){const G=Tt.get(C);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function yf(C,F,G,k,B){F.isScene!==!0&&(F=oe),I.resetTextureUnits();const tt=F.fog,lt=k.isMeshStandardMaterial?F.environment:null,gt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ws,_t=(k.isMeshStandardMaterial?z:w).get(k.envMap||lt),Ut=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xt=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let ce=fi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ce=_.toneMapping);const $e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=$e!==void 0?$e.length:0,yt=Tt.get(k),Fn=p.state.lights;if(j===!0&&(ht===!0||C!==y)){const on=C===y&&k.id===S;Q.setState(k,C,on)}let Jt=!1;k.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Fn.state.version||yt.outputColorSpace!==gt||B.isBatchedMesh&&yt.batching===!1||!B.isBatchedMesh&&yt.batching===!0||B.isBatchedMesh&&yt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&yt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&yt.instancing===!1||!B.isInstancedMesh&&yt.instancing===!0||B.isSkinnedMesh&&yt.skinning===!1||!B.isSkinnedMesh&&yt.skinning===!0||B.isInstancedMesh&&yt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&yt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&yt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&yt.instancingMorph===!1&&B.morphTexture!==null||yt.envMap!==_t||k.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Ut||yt.vertexTangents!==Bt||yt.morphTargets!==xt||yt.morphNormals!==$t||yt.morphColors!==re||yt.toneMapping!==ce||yt.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,yt.__version=k.version);let gn=yt.currentProgram;Jt===!0&&(gn=pr(k,F,B));let Bi=!1,Ke=!1,Rs=!1;const le=gn.getUniforms(),An=yt.uniforms;if(wt.useProgram(gn.program)&&(Bi=!0,Ke=!0,Rs=!0),k.id!==S&&(S=k.id,Ke=!0),Bi||y!==C){wt.buffers.depth.getReversed()?(et.copy(C.projectionMatrix),Ad(et),Cd(et),le.setValue(O,"projectionMatrix",et)):le.setValue(O,"projectionMatrix",C.projectionMatrix),le.setValue(O,"viewMatrix",C.matrixWorldInverse);const Qn=le.map.cameraPosition;Qn!==void 0&&Qn.setValue(O,bt.setFromMatrixPosition(C.matrixWorld)),Wt.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Ke=!0,Rs=!0)}if(B.isSkinnedMesh){le.setOptional(O,B,"bindMatrix"),le.setOptional(O,B,"bindMatrixInverse");const on=B.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),le.setValue(O,"boneTexture",on.boneTexture,I))}B.isBatchedMesh&&(le.setOptional(O,B,"batchingTexture"),le.setValue(O,"batchingTexture",B._matricesTexture,I),le.setOptional(O,B,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",B._indirectTexture,I),le.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",B._colorsTexture,I));const Ps=G.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Dt.update(B,G,gn),(Ke||yt.receiveShadow!==B.receiveShadow)&&(yt.receiveShadow=B.receiveShadow,le.setValue(O,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(An.envMap.value=_t,An.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(An.envMapIntensity.value=F.environmentIntensity),Ke&&(le.setValue(O,"toneMappingExposure",_.toneMappingExposure),yt.needsLights&&Mf(An,Rs),tt&&k.fog===!0&&at.refreshFogUniforms(An,tt),at.refreshMaterialUniforms(An,k,W,Y,p.state.transmissionRenderTarget[C.id]),vo.upload(O,Sl(yt),An,I)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vo.upload(O,Sl(yt),An,I),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(O,"center",B.center),le.setValue(O,"modelViewMatrix",B.modelViewMatrix),le.setValue(O,"normalMatrix",B.normalMatrix),le.setValue(O,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const on=k.uniformsGroups;for(let Qn=0,ti=on.length;Qn<ti;Qn++){const bl=on[Qn];N.update(bl,gn),N.bind(bl,gn)}}return gn}function Mf(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function Sf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,F,G){Tt.get(C.texture).__webglTexture=F,Tt.get(C.depthTexture).__webglTexture=G;const k=Tt.get(C);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,F){const G=Tt.get(C);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,G=0){A=C,b=F,E=G;let k=!0,B=null,tt=!1,lt=!1;if(C){const _t=Tt.get(C);if(_t.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(O.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(_t.__hasExternalTextures)I.rebindTextures(C,Tt.get(C.texture).__webglTexture,Tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xt=C.depthTexture;if(_t.__boundDepthTexture!==xt){if(xt!==null&&Tt.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Ut=C.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(lt=!0);const Bt=Tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?B=Bt[F][G]:B=Bt[F],tt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?B=Tt.get(C).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[G]:B=Bt,P.copy(C.viewport),L.copy(C.scissor),D=C.scissorTest}else P.copy(mt).multiplyScalar(W).floor(),L.copy(Lt).multiplyScalar(W).floor(),D=Gt;if(wt.bindFramebuffer(O.FRAMEBUFFER,B)&&k&&wt.drawBuffers(C,B),wt.viewport(P),wt.scissor(L),wt.setScissorTest(D),tt){const _t=Tt.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,G)}else if(lt){const _t=Tt.get(C.texture),Ut=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Ut)}S=-1},this.readRenderTargetPixels=function(C,F,G,k,B,tt,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){wt.bindFramebuffer(O.FRAMEBUFFER,gt);try{const _t=C.texture,Ut=_t.format,Bt=_t.type;if(!Wt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-k&&G>=0&&G<=C.height-B&&O.readPixels(F,G,k,B,zt.convert(Ut),zt.convert(Bt),tt)}finally{const _t=A!==null?Tt.get(A).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(C,F,G,k,B,tt,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=C.texture,Ut=_t.format,Bt=_t.type;if(!Wt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=C.width-k&&G>=0&&G<=C.height-B){wt.bindFramebuffer(O.FRAMEBUFFER,gt);const xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,tt.byteLength,O.STREAM_READ),O.readPixels(F,G,k,B,zt.convert(Ut),zt.convert(Bt),0);const $t=A!==null?Tt.get(A).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,$t);const re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wd(O,re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,tt),O.deleteBuffer(xt),O.deleteSync(re),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,F=null,G=0){C.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,C=arguments[1]);const k=Math.pow(2,-G),B=Math.floor(C.image.width*k),tt=Math.floor(C.image.height*k),lt=F!==null?F.x:0,gt=F!==null?F.y:0;I.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,lt,gt,B,tt),wt.unbindTexture()},this.copyTextureToTexture=function(C,F,G=null,k=null,B=0){C.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1],F=arguments[2],B=arguments[3]||0,G=null);let tt,lt,gt,_t,Ut,Bt,xt,$t,re;const ce=C.isCompressedTexture?C.mipmaps[B]:C.image;G!==null?(tt=G.max.x-G.min.x,lt=G.max.y-G.min.y,gt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Ut=G.min.y,Bt=G.isBox3?G.min.z:0):(tt=ce.width,lt=ce.height,gt=ce.depth||1,_t=0,Ut=0,Bt=0),k!==null?(xt=k.x,$t=k.y,re=k.z):(xt=0,$t=0,re=0);const $e=zt.convert(F.format),Kt=zt.convert(F.type);let yt;F.isData3DTexture?(I.setTexture3D(F,0),yt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),yt=O.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),yt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const Fn=O.getParameter(O.UNPACK_ROW_LENGTH),Jt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=O.getParameter(O.UNPACK_SKIP_PIXELS),Bi=O.getParameter(O.UNPACK_SKIP_ROWS),Ke=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_t),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bt);const Rs=C.isDataArrayTexture||C.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const An=Tt.get(C),Ps=Tt.get(F),on=Tt.get(An.__renderTarget),Qn=Tt.get(Ps.__renderTarget);wt.bindFramebuffer(O.READ_FRAMEBUFFER,on.__webglFramebuffer),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<gt;ti++)Rs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tt.get(C).__webglTexture,B,Bt+ti),C.isDepthTexture?(le&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tt.get(F).__webglTexture,B,re+ti),O.blitFramebuffer(_t,Ut,tt,lt,xt,$t,tt,lt,O.DEPTH_BUFFER_BIT,O.NEAREST)):le?O.copyTexSubImage3D(yt,B,xt,$t,re+ti,_t,Ut,tt,lt):O.copyTexSubImage2D(yt,B,xt,$t,re+ti,_t,Ut,tt,lt);wt.bindFramebuffer(O.READ_FRAMEBUFFER,null),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else le?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(yt,B,xt,$t,re,tt,lt,gt,$e,Kt,ce.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,B,xt,$t,re,tt,lt,gt,$e,ce.data):O.texSubImage3D(yt,B,xt,$t,re,tt,lt,gt,$e,Kt,ce):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,xt,$t,tt,lt,$e,Kt,ce.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,xt,$t,ce.width,ce.height,$e,ce.data):O.texSubImage2D(O.TEXTURE_2D,B,xt,$t,tt,lt,$e,Kt,ce);O.pixelStorei(O.UNPACK_ROW_LENGTH,Fn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke),B===0&&F.generateMipmaps&&O.generateMipmap(yt),wt.unbindTexture()},this.copyTextureToTexture3D=function(C,F,G=null,k=null,B=0){return C.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,C=arguments[2],F=arguments[3],B=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,F,G,k,B)},this.initRenderTarget=function(C){Tt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),wt.unbindTexture()},this.resetState=function(){b=0,E=0,A=null,wt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class z_ extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class V_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new R;class Co{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Co(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vo extends mi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Ns=new R,Qi=new R,ts=new R,es=new nt,Fs=new nt,Jh=new Nt,Fr=new R,Bs=new R,Br=new R,Su=new nt,Ma=new nt,Eu=new nt;class tl extends Ne{constructor(t=new Vo){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new V_(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Co(n,3,0,!1)),ji.setAttribute("uv",new Co(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Or(Fr.set(-.5,-.5,0),ts,o,Qi,s,r),Or(Bs.set(.5,-.5,0),ts,o,Qi,s,r),Or(Br.set(.5,.5,0),ts,o,Qi,s,r),Su.set(0,0),Ma.set(1,0),Eu.set(1,1);let a=t.ray.intersectTriangle(Fr,Bs,Br,!1,Ns);if(a===null&&(Or(Bs.set(-.5,.5,0),ts,o,Qi,s,r),Ma.set(0,1),a=t.ray.intersectTriangle(Fr,Br,Bs,!1,Ns),a===null))return;const c=t.ray.origin.distanceTo(Ns);c<t.near||c>t.far||e.push({distance:c,point:Ns.clone(),uv:Pe.getInterpolation(Ns,Fr,Bs,Br,Su,Ma,Eu,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Or(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*es.x-s*es.y,Fs.y=s*es.x+r*es.y):Fs.copy(es),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Jh)}class yo extends ke{constructor(t=null,e=1,n=1,s,r,o,a,c,u=nn,l=nn,h,f){super(null,o,a,c,u,l,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new Nt,Tu=new Nt,zr=[],wu=new Me,H_=new Nt,Os=new Zt,zs=new pn;class G_ extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Me),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),wu.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),zs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Tu.multiplyMatrices(n,ns),Os.matrixWorld=Tu,Os.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=r,c.object=this,e.push(c)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yo(new Float32Array(s*this.count),s,this.count,Zc,hn));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Sa(i,t){return i-t}function k_(i,t){return i.z-t.z}function W_(i,t){return t.z-i.z}class X_{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const Ze=new Nt,q_=new It(1,1,1),Ea=new Bo,Vr=new Me,Ei=new pn,Vs=new R,Au=new R,Y_=new R,ba=new X_,ze=new Zt,Hr=[];function $_(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function bi(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class Z_ extends Zt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,s){super(new pe,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new yo(e,t,t,tn,hn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new yo(e,t,t,No,di);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new yo(e,t,t,tn,hn);n.colorSpace=qt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:u}=o,l=new a.constructor(n*c),h=new ve(l,c,u);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new ve(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Me);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ze),this.getBoundingBoxAt(r,Vr).applyMatrix4(Ze),t.union(Vr)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Ze),this.getBoundingSphereAt(r,Ei).applyMatrix4(Ze),t.union(Ei)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Sa),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Ze.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(q_.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Sa),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,u=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const l in n.attributes){const h=e.getAttribute(l),f=n.getAttribute(l);$_(h,f,c);const d=h.itemSize;for(let g=h.count,v=u;g<v;g++){const m=c+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,u*d)}if(s){const l=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)r.setX(l+f,c+o.getX(f));for(let f=o.count,d=h;f<d;f++)r.setX(l+f,c);r.needsUpdate=!0,r.addUpdateRange(l,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=s[o],u=n[c];if(u.active!==!1){if(r.index!==null){if(u.indexStart!==e){const{indexStart:l,vertexStart:h,reservedIndexCount:f}=u,d=r.index,g=d.array,v=t-h;for(let m=l;m<l+f;m++)g[m]=g[m]+v;d.array.copyWithin(e,l,l+f),d.addUpdateRange(e,f),u.indexStart=e}e+=u.reservedIndexCount}if(u.vertexStart!==t){const{vertexStart:l,reservedVertexCount:h}=u,f=r.attributes;for(const d in f){const g=f[d],{array:v,itemSize:m}=g;v.copyWithin(t*m,l*m,(l+h)*m),g.addUpdateRange(t*m,h*m)}u.vertexStart=t}t+=u.reservedVertexCount,u.start=r.index?u.indexStart:u.vertexStart,this._nextIndexStart=r.index?u.indexStart+u.reservedIndexCount:0,this._nextVertexStart=u.vertexStart+u.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new Me,o=n.index,a=n.attributes.position;for(let c=s.start,u=s.start+s.count;c<u;c++){let l=c;o&&(l=o.getX(l)),r.expandByPoint(Vs.fromBufferAttribute(a,l))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new pn;this.getBoundingBoxAt(t,Vr),Vr.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let u=s.start,l=s.start+s.count;u<l;u++){let h=u;o&&(h=o.getX(h)),Vs.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(Vs))}r.radius=Math.sqrt(c),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),s.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,s=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(s,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(s,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,s=this._instanceInfo;return t>=s.length||s[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,s=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=s.length||s[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Sa);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);bi(this._multiDrawCounts,s),bi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),bi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),bi(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),bi(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new pe,this._initializeGeometry(r));const o=this.geometry;r.index&&bi(r.index.array,o.index.array);for(const a in r.attributes)bi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;ze.material=this.material,ze.geometry.index=o.index,ze.geometry.attributes=o.attributes,ze.geometry.boundingBox===null&&(ze.geometry.boundingBox=new Me),ze.geometry.boundingSphere===null&&(ze.geometry.boundingSphere=new pn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const u=n[a].geometryIndex,l=s[u];ze.geometry.setDrawRange(l.start,l.count),this.getMatrixAt(a,ze.matrixWorld).premultiply(r),this.getBoundingBoxAt(u,ze.geometry.boundingBox),this.getBoundingSphereAt(u,ze.geometry.boundingSphere),ze.raycast(t,Hr);for(let h=0,f=Hr.length;h<f;h++){const d=Hr[h];d.object=this,d.batchId=a,e.push(d)}Hr.length=0}ze.material=null,ze.geometry.index=null,ze.geometry.attributes={},ze.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,u=this._multiDrawStarts,l=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data;f&&(Ze.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ea.setFromProjectionMatrix(Ze,t.coordinateSystem));let v=0;if(this.sortObjects){Ze.copy(this.matrixWorld).invert(),Vs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ze),Au.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ze);for(let x=0,M=c.length;x<M;x++)if(c[x].visible&&c[x].active){const _=c[x].geometryIndex;this.getMatrixAt(x,Ze),this.getBoundingSphereAt(_,Ei).applyMatrix4(Ze);let T=!1;if(f&&(T=!Ea.intersectsSphere(Ei)),!T){const b=h[_],E=Y_.subVectors(Ei.center,Vs).dot(Au);ba.push(b.start,b.count,E,x)}}const m=ba.list,p=this.customSort;p===null?m.sort(r.transparent?W_:k_):p.call(this,m,n);for(let x=0,M=m.length;x<M;x++){const _=m[x];u[v]=_.start*a,l[v]=_.count,g[v]=_.index,v++}ba.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const x=c[m].geometryIndex;let M=!1;if(f&&(this.getMatrixAt(m,Ze),this.getBoundingSphereAt(x,Ei).applyMatrix4(Ze),M=!Ea.intersectsSphere(Ei)),!M){const _=h[x];u[v]=_.start*a,l[v]=_.count,g[v]=m,v++}}d.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class K_ extends mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ro=new R,Po=new R,Cu=new Nt,Hs=new ur,Gr=new pn,Ta=new R,Ru=new R;class Ho extends Ne{constructor(t=new pe,e=new K_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ro.fromBufferAttribute(e,s-1),Po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Po);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Cu.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=u){const p=l.getX(v),x=l.getX(v+1),M=kr(this,t,Hs,c,p,x);M&&e.push(M)}if(this.isLineLoop){const v=l.getX(g-1),m=l.getX(d),p=kr(this,t,Hs,c,v,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=u){const p=kr(this,t,Hs,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=kr(this,t,Hs,c,g-1,d);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ro.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),e.distanceSqToSegment(Ro,Po,Ta,Ru)>n)return;Ta.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ta);if(!(c<t.near||c>t.far))return{distance:c,point:Ru.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Pu=new R,Iu=new R;class jh extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Pu.fromBufferAttribute(e,s),Iu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pu.distanceTo(Iu);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qh extends Ho{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class el extends mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lu=new Nt,Dc=new ur,Wr=new pn,Xr=new R;class Go extends Ne{constructor(t=new pe,e=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;Lu.copy(s).invert(),Dc.copy(t.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=u.getX(g);Xr.fromBufferAttribute(h,m),Du(Xr,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Xr.fromBufferAttribute(h,g),Du(Xr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Du(i,t,e,n,s,r,o){const a=Dc.distanceSqToPoint(i);if(a<e){const c=new R;Dc.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class nl extends ke{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const l=n[s],f=n[s+1]-l,d=(o-l)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new nt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new Nt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let u=Number.MAX_VALUE;const l=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=u&&(u=l,n.set(1,0,0)),h<=u&&(u=h,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class il extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=u-this.aY;c=f*l-d*h+this.aX,u=f*h+d*l+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class J_ extends il{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,l,h){let f=(o-r)/u-(a-r)/(u+l)+(a-o)/l,d=(a-o)/l-(c-o)/(l+h)+(c-a)/h;f*=l,d*=l,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const qr=new R,wa=new sl,Aa=new sl,Ca=new sl;class j_ extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,l;this.closed||a>0?u=s[(a-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),u=qr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(l),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),wa.initNonuniformCatmullRom(u.x,h.x,f.x,l.x,g,v,m),Aa.initNonuniformCatmullRom(u.y,h.y,f.y,l.y,g,v,m),Ca.initNonuniformCatmullRom(u.z,h.z,f.z,l.z,g,v,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(u.x,h.x,f.x,l.x,this.tension),Aa.initCatmullRom(u.y,h.y,f.y,l.y,this.tension),Ca.initCatmullRom(u.z,h.z,f.z,l.z,this.tension));return n.set(wa.calc(c),Aa.calc(c),Ca.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Q_(i,t){const e=1-i;return e*e*t}function tx(i,t){return 2*(1-i)*i*t}function ex(i,t){return i*i*t}function er(i,t,e,n){return Q_(i,t)+tx(i,e)+ex(i,n)}function nx(i,t){const e=1-i;return e*e*e*t}function ix(i,t){const e=1-i;return 3*e*e*i*t}function sx(i,t){return 3*(1-i)*i*i*t}function rx(i,t){return i*i*i*t}function nr(i,t,e,n,s){return nx(i,t)+ix(i,e)+sx(i,n)+rx(i,s)}class tf extends Un{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ox extends Un{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ef extends Un{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ax extends Un{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends Un{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cx extends Un{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],l=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Uu(a,c.x,u.x,l.x,h.x),Uu(a,c.y,u.y,l.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Nu=Object.freeze({__proto__:null,ArcCurve:J_,CatmullRomCurve3:j_,CubicBezierCurve:tf,CubicBezierCurve3:ox,EllipseCurve:il,LineCurve:ef,LineCurve3:ax,QuadraticBezierCurve:nf,QuadraticBezierCurve3:cx,SplineCurve:sf});class lx extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let u=0;u<c.length;u++){const l=c[u];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Nu[s.type]().fromJSON(s))}return this}}class ux extends lx{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ef(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new nf(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new tf(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new sf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const u=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+u,e+l,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const u=new il(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const l=u.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class rl extends pe{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],l=1/e,h=new R,f=new nt,d=new R,g=new R,v=new R;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let x=0;x<=e;x++){const M=n+x*l*s,_=Math.sin(M),T=Math.cos(M);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*_,h.y=t[b].y,h.z=t[b].x*T,o.push(h.x,h.y,h.z),f.x=x/e,f.y=b/(t.length-1),a.push(f.x,f.y);const E=c[3*b+0]*_,A=c[3*b+1],S=c[3*b+0]*T;u.push(E,A,S)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const _=M+x*t.length,T=_,b=_+t.length,E=_+t.length+1,A=_+1;r.push(T,b,A),r.push(E,A,b)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.points,t.segments,t.phiStart,t.phiLength)}}class Io extends rl{constructor(t=1,e=1,n=4,s=8){const r=new ux;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Io(t.radius,t.length,t.capSegments,t.radialSegments)}}class ol extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new R,l=new nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;u.x=t*Math.cos(d),u.y=t*Math.sin(d),o.push(u.x,u.y,u.z),a.push(0,0,1),l.x=(o[f]/t+1)/2,l.y=(o[f+1]/t+1)/2,c.push(l.x,l.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const l=[],h=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function x(){const _=new R,T=new R;let b=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const S=[],y=A/r,P=y*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,U=D*c+a,V=Math.sin(U),H=Math.cos(U);T.x=P*V,T.y=-y*n+m,T.z=P*H,h.push(T.x,T.y,T.z),_.set(V,E,H).normalize(),f.push(_.x,_.y,_.z),d.push(D,1-y),S.push(g++)}v.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const y=v[S][A],P=v[S+1][A],L=v[S+1][A+1],D=v[S][A+1];(t>0||S!==0)&&(l.push(y,P,D),b+=3),(e>0||S!==r-1)&&(l.push(P,L,D),b+=3)}u.addGroup(p,b,0),p+=b}function M(_){const T=g,b=new nt,E=new R;let A=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let L=0;L<=s;L++){const U=L/s*c+a,V=Math.cos(U),H=Math.sin(U);E.x=S*H,E.y=m*y,E.z=S*V,h.push(E.x,E.y,E.z),f.push(0,y,0),b.x=V*.5+.5,b.y=H*.5*y+.5,d.push(b.x,b.y),g++}for(let L=0;L<s;L++){const D=T+L,U=P+L;_===!0?l.push(U,U+1,D):l.push(U+1,U,D),A+=3}u.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class un extends jt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new un(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),u(n),l(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new R,_=new R,T=new R;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],_),d(e[b+2],T),c(M,_,T,x)}function c(x,M,_,T){const b=T+1,E=[];for(let A=0;A<=b;A++){E[A]=[];const S=x.clone().lerp(_,A/b),y=M.clone().lerp(_,A/b),P=b-A;for(let L=0;L<=P;L++)L===0&&A===b?E[A][L]=S:E[A][L]=S.clone().lerp(y,L/P)}for(let A=0;A<b;A++)for(let S=0;S<2*(b-A)-1;S++){const y=Math.floor(S/2);S%2===0?(f(E[A][y+1]),f(E[A+1][y]),f(E[A][y])):(f(E[A][y+1]),f(E[A+1][y+1]),f(E[A+1][y]))}}function u(x){const M=new R;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(x),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function l(){const x=new R;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const _=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(_,1-T)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const M=o[x+0],_=o[x+2],T=o[x+4],b=Math.max(M,_,T),E=Math.min(M,_,T);b>.9&&E<.1&&(M<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,M){const _=x*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const x=new R,M=new R,_=new R,T=new R,b=new nt,E=new nt,A=new nt;for(let S=0,y=0;S<r.length;S+=9,y+=6){x.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),b.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),T.copy(x).add(M).add(_).divideScalar(3);const P=m(T);v(b,y+0,x,P),v(E,y+2,M,P),v(A,y+4,_,P)}}function v(x,M,_,T){T<0&&x.x===1&&(o[M]=x.x-1),_.x===0&&_.z===0&&(o[M]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.vertices,t.indices,t.radius,t.details)}}class Ln extends hr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ln(t.radius,t.detail)}}class Ni extends hr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ni(t.radius,t.detail)}}class fe extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const l=[],h=new R,f=new R,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const b=T/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(b+_,1-M),x.push(u++)}l.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=l[p][x+1],_=l[p][x],T=l[p+1][x],b=l[p+1][x+1];(p!==0||o>0)&&d.push(M,_,b),(p!==n-1||c<Math.PI)&&d.push(_,T,b)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ko extends hr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class bs extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],u=[],l=new R,h=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(v),h.y=(t+e*Math.cos(m))*Math.sin(v),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),f.subVectors(h,l).normalize(),c.push(f.x,f.y,f.z),u.push(g/s),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,x=(s+1)*d+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class En extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rf extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ra=new Nt,Fu=new R,Bu=new R;class hx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ou=new Nt,Gs=new R,Pa=new R;class fx extends hx{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}class of extends rf{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dx extends rf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class px{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zu(){return performance.now()}const Vu=new R,Yr=new R;class Jn{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vu.subVectors(t,this.start),Yr.subVectors(this.end,this.start);const n=Yr.dot(Yr);let r=Yr.dot(Vu)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cr);function al(i){let t=i>>>0;const e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:e,range:(n,s)=>n+e()*(s-n),int:(n,s)=>Math.floor(n+e()*(s-n+1)),pick:n=>n[Math.floor(e()*n.length)],chance:n=>e()<n}}function af(){return Math.floor(Math.random()*4294967295)}const cl=[{id:"desert",label:"Desert World",shape:"dunes",noiseFrequency:1.6,amplitude:.09,colorStops:[[0,"#e8b06a"],[.35,"#d99a52"],[.6,"#c27e3c"],[.82,"#8f5a2e"]],liquid:null,liquidClass:null,creature:{count:[4,6],prefixes:["Dune","Sand","Mirage","Sirocco"],suffixes:["Strider","Loper","Stilt","Skimmer"]},atmosphere:"#e8a85f",particles:{color:"#e8c890",count:90,size:.5,height:4},props:[{builder:"cactus",count:60,minE:.2,maxE:.75},{builder:"rock",count:45,minE:0,maxE:1,tint:"#a8784a"},{builder:"dryShrub",count:40,minE:.15,maxE:.7}],discovery:{color:"#ffce54",shape:"shard",prefixes:["Sun","Dune","Mirage","Ember","Scorch","Amber"],suffixes:["Shard","Rose","Relic","Fossil","Idol","Geode"]}},{id:"ocean",label:"Ocean World",shape:"smooth",noiseFrequency:1.4,amplitude:.16,colorStops:[[0,"#2b6a8f"],[.45,"#5a93a8"],[.54,"#e8d9a0"],[.62,"#7fc26a"],[.8,"#4a8f4f"],[.92,"#8a9a8f"]],liquid:{level:.54,color:"#1d7fd6",opacity:.78,basin:1.6,emissive:"#0a3a6a",emissiveIntensity:.25},liquidClass:"swim",creature:{count:[4,6],prefixes:["Tide","Reef","Salt","Pearl"],suffixes:["Scuttler","Pincher","Sidler","Snipper"]},atmosphere:"#7fc8ff",particles:null,props:[{builder:"palm",count:36,minE:.57,maxE:.78},{builder:"coral",count:40,minE:.3,maxE:.5},{builder:"rock",count:25,minE:.6,maxE:1,tint:"#9aa8a0"}],discovery:{color:"#aef4ff",shape:"pearl",prefixes:["Tide","Pearl","Abyss","Coral","Brine","Foam"],suffixes:["Heart","Shell","Drop","Bloom","Charm","Echo"]}},{id:"toxic",label:"Toxic World",shape:"smooth",noiseFrequency:1.8,amplitude:.12,colorStops:[[0,"#3a4a1d"],[.46,"#55652a"],[.68,"#6b5a7d"],[.88,"#4a3a5d"]],liquid:{level:.46,color:"#9ef01a",opacity:.85,basin:1.6,emissive:"#6abf0f",emissiveIntensity:.7},liquidClass:"hazard",creature:{count:[3,5],prefixes:["Bog","Sludge","Venom","Murk"],suffixes:["Slug","Crawler","Ooze","Lurker"]},atmosphere:"#a8f01a",particles:{color:"#c6ff4f",count:140,size:.45,height:6},props:[{builder:"vent",count:30,minE:.5,maxE:.9},{builder:"tentacle",count:40,minE:.48,maxE:.85},{builder:"spikeRock",count:35,minE:.5,maxE:1,tint:"#5d4a6b"}],discovery:{color:"#c6ff4f",shape:"orb",prefixes:["Venom","Spore","Blight","Miasma","Sludge","Plague"],suffixes:["Bloom","Sac","Core","Pod","Cyst","Gland"]}},{id:"fairy",label:"Fairy World",shape:"gentle",noiseFrequency:1.5,amplitude:.11,colorStops:[[0,"#7fb88f"],[.5,"#9ad5a0"],[.68,"#c9a0e8"],[.86,"#f3d7f7"]],liquid:{level:.48,color:"#ff9ad5",opacity:.7,basin:3,emissive:"#d65aa0",emissiveIntensity:.4},liquidClass:"swim",creature:{count:[5,7],prefixes:["Glimmer","Dusk","Petal","Moon"],suffixes:["Moth","Flit","Wing","Dancer"]},atmosphere:"#f0a6ff",particles:{color:"#ffd6fa",count:220,size:.55,height:7},props:[{builder:"fairyTree",count:45,minE:.5,maxE:.85},{builder:"glowFlower",count:70,minE:.5,maxE:.9},{builder:"smallMushroom",count:45,minE:.5,maxE:.8,glow:"#ff9ad5"}],discovery:{color:"#ffb8f0",shape:"star",prefixes:["Wisp","Dream","Glimmer","Pixie","Moon","Dawn"],suffixes:["Petal","Lantern","Tear","Bell","Crown","Feather"]}},{id:"ice",label:"Frozen World",shape:"ridged",noiseFrequency:1.7,amplitude:.14,colorStops:[[0,"#7fb6d9"],[.42,"#b8e0f0"],[.6,"#dff3fb"],[.85,"#ffffff"]],liquid:{level:.42,color:"#9fd8ef",opacity:.9,emissive:"#3a6a8f",emissiveIntensity:.15},liquidClass:"solid",creature:{count:[4,6],prefixes:["Frost","Snow","Glacier","Polar"],suffixes:["Waddler","Hopper","Puff","Toddler"]},atmosphere:"#bfe9ff",particles:{color:"#ffffff",count:260,size:.4,height:8},props:[{builder:"iceSpike",count:50,minE:.45,maxE:1},{builder:"snowPine",count:40,minE:.44,maxE:.75},{builder:"crystal",count:25,minE:.5,maxE:.95,tint:"#bfe9ff"}],discovery:{color:"#bfe9ff",shape:"gem",prefixes:["Frost","Glacier","Aurora","Rime","Polar","Hail"],suffixes:["Core","Prism","Sliver","Bloom","Tear","Lens"]}},{id:"lava",label:"Volcanic World",shape:"ridged",noiseFrequency:1.8,amplitude:.13,colorStops:[[0,"#574343"],[.4,"#3a2f2f"],[.7,"#2b2222"],[.9,"#1c1616"]],liquid:{level:.4,color:"#ff5a1f",opacity:1,emissive:"#ff6a00",emissiveIntensity:1.6},liquidClass:"hazard",creature:{count:[3,5],prefixes:["Cinder","Magma","Ash","Coal"],suffixes:["Beetle","Plodder","Shellback","Creeper"]},atmosphere:"#ff7a3f",particles:{color:"#ffae4f",count:160,size:.5,height:7},props:[{builder:"obsidian",count:50,minE:.45,maxE:1},{builder:"vent",count:25,minE:.5,maxE:.9},{builder:"spikeRock",count:30,minE:.45,maxE:.95,tint:"#2b2020"}],discovery:{color:"#ffae4f",shape:"shard",prefixes:["Ember","Magma","Cinder","Ash","Pyre","Forge"],suffixes:["Heart","Tear","Ingot","Coal","Spark","Vein"]}},{id:"forest",label:"Forest World",shape:"smooth",noiseFrequency:1.5,amplitude:.13,colorStops:[[0,"#3a6a5d"],[.45,"#d9c98f"],[.5,"#6aa84f"],[.72,"#4a8a3a"],[.9,"#8a8f80"]],liquid:{level:.45,color:"#2a8fcf",opacity:.8,basin:2.2,emissive:"#0a3a5a",emissiveIntensity:.2},liquidClass:"swim",creature:{count:[4,6],prefixes:["Moss","Fern","Elder","Thicket"],suffixes:["Stag","Grazer","Doe","Wanderer"]},atmosphere:"#9fd8a0",particles:{color:"#ffe97f",count:90,size:.4,height:5},props:[{builder:"leafyTree",count:75,minE:.5,maxE:.85},{builder:"fern",count:55,minE:.48,maxE:.8},{builder:"rock",count:30,minE:.5,maxE:1,tint:"#8a8f80"}],discovery:{color:"#b8ff8f",shape:"seed",prefixes:["Elder","Verdant","Root","Canopy","Moss","Grove"],suffixes:["Seed","Acorn","Bud","Sprout","Amber","Ring"]}},{id:"mushroom",label:"Fungal World",shape:"gentle",noiseFrequency:1.3,amplitude:.12,colorStops:[[0,"#5a4f6b"],[.42,"#7a6f8f"],[.65,"#9a8aa8"],[.85,"#b8a8c2"]],liquid:{level:.46,color:"#7f5ad6",opacity:.75,basin:3,emissive:"#5a3aa8",emissiveIntensity:.5},liquidClass:"swim",creature:{count:[4,7],prefixes:["Spore","Puff","Cap","Gill"],suffixes:["Toad","Hopper","Bouncer","Croaker"]},atmosphere:"#c08fff",particles:{color:"#d6a0ff",count:200,size:.5,height:8},props:[{builder:"giantMushroom",count:35,minE:.46,maxE:.8},{builder:"smallMushroom",count:80,minE:.44,maxE:.85,glow:"#d6a0ff"},{builder:"fern",count:30,minE:.45,maxE:.7}],discovery:{color:"#d6a0ff",shape:"orb",prefixes:["Spore","Myco","Velvet","Gloom","Cap","Fae"],suffixes:["Pod","Truffle","Gill","Puff","Cluster","Lumen"]}},{id:"candy",label:"Candy World",shape:"gentle",noiseFrequency:1.4,amplitude:.12,colorStops:[[0,"#ffb8d8"],[.47,"#ffd6e8"],[.68,"#ffeef7"],[.86,"#d6f7ff"]],liquid:{level:.47,color:"#ff8fc0",opacity:.75,basin:3,emissive:"#d65a90",emissiveIntensity:.35},liquidClass:"swim",creature:{count:[4,6],prefixes:["Gum","Taffy","Jelly","Bonbon"],suffixes:["Bear","Toddle","Chew","Nibbler"]},atmosphere:"#ffb0d8",particles:{color:"#fff0a0",count:130,size:.45,height:6},props:[{builder:"candyCane",count:40,minE:.5,maxE:.85},{builder:"lollipop",count:35,minE:.5,maxE:.85},{builder:"gumdrop",count:60,minE:.48,maxE:.9}],discovery:{color:"#ff8fc0",shape:"gem",prefixes:["Sugar","Taffy","Fizz","Cocoa","Sherbet","Jelly"],suffixes:["Gem","Drop","Swirl","Cube","Button","Truffle"]}},{id:"crystal",label:"Crystal World",shape:"terraced",noiseFrequency:1.6,amplitude:.12,colorStops:[[0,"#2b2044"],[.35,"#3f2d5d"],[.6,"#55407d"],[.85,"#7a5aa8"]],liquid:null,liquidClass:null,creature:{count:[4,6],prefixes:["Prism","Facet","Chime","Shard"],suffixes:["Jelly","Drifter","Halo","Wisp"]},atmosphere:"#7fdfff",particles:{color:"#9fe8ff",count:180,size:.5,height:9},props:[{builder:"crystal",count:70,minE:.1,maxE:1,tint:"#7fdfff"},{builder:"crystal",count:40,minE:.3,maxE:1,tint:"#ff7fd6"},{builder:"spikeRock",count:30,minE:0,maxE:.9,tint:"#443060"}],discovery:{color:"#9fe8ff",shape:"gem",prefixes:["Prism","Facet","Chroma","Lattice","Quartz","Echo"],suffixes:["Cluster","Spire","Node","Lens","Matrix","Chime"]}},{id:"glitch",label:"Corrupted World",shape:"glitch",noiseFrequency:2,amplitude:.12,colorStops:[[0,"#0a0a16"],[.3,"#1a1a2e"],[.5,"#ff2bd6"],[.62,"#1a1a2e"],[.78,"#2bffd6"],[.9,"#16162a"]],liquid:{level:.3,color:"#05050d",opacity:.95,basin:2,emissive:"#1a0a2e",emissiveIntensity:.4},liquidClass:"hazard",creature:{count:[3,5],prefixes:["Null","Stray","Broken","Static"],suffixes:["Bit","Swarm","Packet","Daemon"]},atmosphere:"#ff2bd6",particles:{color:"#2bffd6",count:150,size:.55,height:10},props:[{builder:"glitchCube",count:60,minE:.3,maxE:1},{builder:"spikeRock",count:25,minE:.3,maxE:1,tint:"#1a1a3e"}],discovery:{color:"#2bffd6",shape:"cube",prefixes:["Null","Hex","Static","Phantom","Broken","Cipher"],suffixes:["Fragment","Byte","Anomaly","Artifact","Segment","Key"]}},{id:"mech",label:"Machine World",shape:"terraced",noiseFrequency:1.7,amplitude:.1,colorStops:[[0,"#2e3138"],[.3,"#4a4f58"],[.5,"#16f0c8"],[.56,"#3a3e46"],[.75,"#6a5a48"],[.9,"#23262c"]],liquid:{level:.3,color:"#10c8a8",opacity:.85,basin:2,emissive:"#0a8f78",emissiveIntensity:.8},liquidClass:"hazard",baitKind:"scrap",creature:{count:[3,5],prefixes:["Servo","Cog","Chrome","Relay","Piston","Volt"],suffixes:["Walker","Strider","Hound","Frame","Unit","Engine"]},atmosphere:"#5af0d0",particles:{color:"#ffd24f",count:130,size:.5,height:7},props:[{builder:"antenna",count:35,minE:.35,maxE:1},{builder:"pipes",count:40,minE:.32,maxE:.9},{builder:"machineBlock",count:35,minE:.32,maxE:1}],discovery:{color:"#ffd24f",shape:"gear",prefixes:["Servo","Flux","Gear","Circuit","Dynamo","Cipher"],suffixes:["Core","Coil","Rotor","Capacitor","Module","Spring"]}}],cf={id:"sanctuary",label:"Sanctuary Moon",shape:"gentle",noiseFrequency:1.3,amplitude:.08,colorStops:[[0,"#4a9a6a"],[.45,"#7fc26a"],[.62,"#9ad59a"],[.8,"#f3e7c9"]],liquid:{level:.45,color:"#5ac8ff",opacity:.75,basin:3,emissive:"#1d5a8f",emissiveIntensity:.2},liquidClass:"swim",creature:null,atmosphere:"#aef4c8",particles:{color:"#fff7a0",count:140,size:.45,height:5},props:[{builder:"glowFlower",count:80,minE:.48,maxE:.95},{builder:"leafyTree",count:50,minE:.5,maxE:.85},{builder:"rock",count:20,minE:.5,maxE:1,tint:"#9aa89a"}],discovery:null},mx=["Zar","Veo","Quil","Ash","Bryn","Cor","Del","Eri","Fen","Gal","Hra","Ix","Jun","Kel","Lum","Mor","Nyx","Oph","Pra","Ryn","Sol","Tev","Ul","Vex","Wyn","Xan","Yor","Zen"],gx=["a","e","i","o","u","ae","ia","eo","ou","y"],_x=["ron","dia","lis","mar","nox","pha","rix","tis","vor","wen","xis","zul","gard","heim","thos"],Hu=["I","II","III","IV","V","VI","VII","VIII","IX","X"];function xx(i,t){return`${i.pick(mx)+i.pick(gx)+i.pick(_x)} ${Hu[Math.min(t,Hu.length-1)]}`}function vx(i,t){return`${i.pick(t.prefixes)} ${i.pick(t.suffixes)}`}const yx=1/3,Cn=1/6,Ia=i=>Math.floor(i)|0,La=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Mx(i=Math.random){const t=Sx(i),e=new Float64Array(t).map(r=>La[r%12*3]),n=new Float64Array(t).map(r=>La[r%12*3+1]),s=new Float64Array(t).map(r=>La[r%12*3+2]);return function(o,a,c){let u,l,h,f;const d=(o+a+c)*yx,g=Ia(o+d),v=Ia(a+d),m=Ia(c+d),p=(g+v+m)*Cn,x=g-p,M=v-p,_=m-p,T=o-x,b=a-M,E=c-_;let A,S,y,P,L,D;T>=b?b>=E?(A=1,S=0,y=0,P=1,L=1,D=0):T>=E?(A=1,S=0,y=0,P=1,L=0,D=1):(A=0,S=0,y=1,P=1,L=0,D=1):b<E?(A=0,S=0,y=1,P=0,L=1,D=1):T<E?(A=0,S=1,y=0,P=0,L=1,D=1):(A=0,S=1,y=0,P=1,L=1,D=0);const U=T-A+Cn,V=b-S+Cn,H=E-y+Cn,Y=T-P+2*Cn,W=b-L+2*Cn,it=E-D+2*Cn,rt=T-1+3*Cn,mt=b-1+3*Cn,Lt=E-1+3*Cn,Gt=g&255,q=v&255,j=m&255;let ht=.6-T*T-b*b-E*E;if(ht<0)u=0;else{const St=Gt+t[q+t[j]];ht*=ht,u=ht*ht*(e[St]*T+n[St]*b+s[St]*E)}let et=.6-U*U-V*V-H*H;if(et<0)l=0;else{const St=Gt+A+t[q+S+t[j+y]];et*=et,l=et*et*(e[St]*U+n[St]*V+s[St]*H)}let Mt=.6-Y*Y-W*W-it*it;if(Mt<0)h=0;else{const St=Gt+P+t[q+L+t[j+D]];Mt*=Mt,h=Mt*Mt*(e[St]*Y+n[St]*W+s[St]*it)}let bt=.6-rt*rt-mt*mt-Lt*Lt;if(bt<0)f=0;else{const St=Gt+1+t[q+1+t[j+1]];bt*=bt,f=bt*bt*(e[St]*rt+n[St]*mt+s[St]*Lt)}return 32*(u+l+h+f)}}function Sx(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=e[n];e[n]=e[s],e[s]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const lf=0,Ex=1,bx=2,Gu=2,Da=1.25,ku=1,Ve=32,Te=Ve/4,uf=65535,Mo=Math.pow(2,-24),ll=Symbol("SKIP_GENERATION"),hf={strategy:lf,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[ll]:!1};function ge(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Wu(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Xu(i,t){t.set(i)}function qu(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function $r(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function ks(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function we(i,t){return t[i+15]===uf}function He(i,t){return t[i+6]}function qe(i,t){return t[i+14]}function Ie(i){return i+Te}function Le(i,t){const e=t[i+6];return i+e*Te}function ul(i,t){return t[i+7]}function Ua(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,u=-1/0,l=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,v=-1/0,m=-1/0;const p=i.offset||0;for(let x=(t-p)*6,M=(t+e-p)*6;x<M;x+=6){const _=i[x+0],T=i[x+1],b=_-T,E=_+T;b<r&&(r=b),E>c&&(c=E),_<h&&(h=_),_>g&&(g=_);const A=i[x+2],S=i[x+3],y=A-S,P=A+S;y<o&&(o=y),P>u&&(u=P),A<f&&(f=A),A>v&&(v=A);const L=i[x+4],D=i[x+5],U=L-D,V=L+D;U<a&&(a=U),V>l&&(l=V),L<d&&(d=L),L>m&&(m=L)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=u,n[5]=l,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=v,s[5]=m}const kn=32,Tx=(i,t)=>i.candidate-t.candidate,ai=new Array(kn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Zr=new Float32Array(6);function wx(i,t,e,n,s,r){let o=-1,a=0;if(r===lf)o=Wu(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Ex)o=Wu(i),o!==-1&&(a=Ax(e,n,s,o));else if(r===bx){const c=ks(i);let u=Da*s;const l=e.offset||0,h=(n-l)*6,f=(n+s-l)*6;for(let d=0;d<3;d++){const g=t[d],p=(t[d+3]-g)/kn;if(s<kn/4){const x=[...ai];x.length=s;let M=0;for(let T=h;T<f;T+=6,M++){const b=x[M];b.candidate=e[T+2*d],b.count=0;const{bounds:E,leftCacheBounds:A,rightCacheBounds:S}=b;for(let y=0;y<3;y++)S[y]=1/0,S[y+3]=-1/0,A[y]=1/0,A[y+3]=-1/0,E[y]=1/0,E[y+3]=-1/0;$r(T,e,E)}x.sort(Tx);let _=s;for(let T=0;T<_;T++){const b=x[T];for(;T+1<_&&x[T+1].candidate===b.candidate;)x.splice(T+1,1),_--}for(let T=h;T<f;T+=6){const b=e[T+2*d];for(let E=0;E<_;E++){const A=x[E];b>=A.candidate?$r(T,e,A.rightCacheBounds):($r(T,e,A.leftCacheBounds),A.count++)}}for(let T=0;T<_;T++){const b=x[T],E=b.count,A=s-b.count,S=b.leftCacheBounds,y=b.rightCacheBounds;let P=0;E!==0&&(P=ks(S)/c);let L=0;A!==0&&(L=ks(y)/c);const D=ku+Da*(P*E+L*A);D<u&&(o=d,u=D,a=b.candidate)}}else{for(let _=0;_<kn;_++){const T=ai[_];T.count=0,T.candidate=g+p+_*p;const b=T.bounds;for(let E=0;E<3;E++)b[E]=1/0,b[E+3]=-1/0}for(let _=h;_<f;_+=6){let E=~~((e[_+2*d]-g)/p);E>=kn&&(E=kn-1);const A=ai[E];A.count++,$r(_,e,A.bounds)}const x=ai[kn-1];Xu(x.bounds,x.rightCacheBounds);for(let _=kn-2;_>=0;_--){const T=ai[_],b=ai[_+1];qu(T.bounds,b.rightCacheBounds,T.rightCacheBounds)}let M=0;for(let _=0;_<kn-1;_++){const T=ai[_],b=T.count,E=T.bounds,S=ai[_+1].rightCacheBounds;b!==0&&(M===0?Xu(E,Zr):qu(E,Zr,Zr)),M+=b;let y=0,P=0;M!==0&&(y=ks(Zr)/c);const L=s-M;L!==0&&(P=ks(S)/c);const D=ku+Da*(y*M+P*L);D<u&&(o=d,u=D,a=T.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Ax(i,t,e,n){let s=0;const r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}class Na{constructor(){this.boundingData=new Float32Array(6)}}function Cx(i,t,e,n,s,r){let o=n,a=n+s-1;const c=r.pos,u=r.axis*2,l=e.offset||0;for(;;){for(;o<=a&&e[(o-l)*6+u]<c;)o++;for(;o<=a&&e[(a-l)*6+u]>=c;)a--;if(o<a){for(let h=0;h<t;h++){let f=i[o*t+h];i[o*t+h]=i[a*t+h],i[a*t+h]=f}for(let h=0;h<6;h++){const f=o-l,d=a-l,g=e[f*6+h];e[f*6+h]=e[d*6+h],e[d*6+h]=g}o++,a--}else return o}}let ff,So,Uc,df;const Rx=Math.pow(2,32);function Nc(i){return"count"in i?1:1+Nc(i.left)+Nc(i.right)}function Px(i,t,e){return ff=new Float32Array(e),So=new Uint32Array(e),Uc=new Uint16Array(e),df=new Uint8Array(e),Fc(i,t)}function Fc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)ff[e+o]=r[o];if(s)return t.buffer?(df.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(So[e+6]=t.offset,Uc[n+14]=t.count,Uc[n+15]=uf,i+Ve);{const{left:o,right:a,splitAxis:c}=t,u=i+Ve;let l=Fc(u,o);const h=i/Ve,d=l/Ve-h;if(d>Rx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return So[e+6]=d,So[e+7]=c,Fc(l,a)}}function Ix(i,t,e,n,s,r){const{maxDepth:o,verbose:a,maxLeafSize:c,strategy:u,onProgress:l}=s,h=i.primitiveBuffer,f=i.primitiveBufferStride,d=new Float32Array(6);let g=!1;const v=new Na;return Ua(t,e,n,v.boundingData,d),p(v,e,n,d),v;function m(x){l&&l((x-r.offset)/r.count)}function p(x,M,_,T=null,b=0){if(!g&&b>=o&&(g=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),_<=c||b>=o)return m(M+_),x.offset=M,x.count=_,x;const E=wx(x.boundingData,T,t,M,_,u);if(E.axis===-1)return m(M+_),x.offset=M,x.count=_,x;const A=Cx(h,f,t,M,_,E);if(A===M||A===M+_)m(M+_),x.offset=M,x.count=_;else{x.splitAxis=E.axis;const S=new Na,y=M,P=A-M;x.left=S,Ua(t,y,P,S.boundingData,d),p(S,y,P,d,b+1);const L=new Na,D=A,U=_-P;x.right=L,Ua(t,D,U,L.boundingData,d),p(L,D,U,d,b+1)}return x}}function Lx(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(c=>{const u=Ix(i,a,c.offset,c.count,t,o),l=Nc(u),h=new e(Ve*l);return Px(0,u,h),h})}class hl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Dx{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const he=new Dx;let ui,ps;const is=[],Kr=new hl(()=>new Me);function Ux(i,t,e,n,s,r){ui=Kr.getPrimitive(),ps=Kr.getPrimitive(),is.push(ui,ps),he.setBuffer(i._roots[t]);const o=Bc(0,i.geometry,e,n,s,r);he.clearBuffer(),Kr.releasePrimitive(ui),Kr.releasePrimitive(ps),is.pop(),is.pop();const a=is.length;return a>0&&(ps=is[a-1],ui=is[a-2]),o}function Bc(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:u}=he;let l=i*2;if(we(l,c)){const g=He(i,u),v=qe(l,c);return ge(i,a,ui),n(g,v,!1,o,r+i/Te,ui)}else{let L=function(U){const{uint16Array:V,uint32Array:H}=he;let Y=U*2;for(;!we(Y,V);)U=Ie(U),Y=U*2;return He(U,H)},D=function(U){const{uint16Array:V,uint32Array:H}=he;let Y=U*2;for(;!we(Y,V);)U=Le(U,H),Y=U*2;return He(U,H)+qe(Y,V)};var f=L,d=D;const g=Ie(i),v=Le(i,u);let m=g,p=v,x,M,_,T;if(s&&(_=ui,T=ps,ge(m,a,_),ge(p,a,T),x=s(_),M=s(T),M<x)){m=v,p=g;const U=x;x=M,M=U,_=T}_||(_=ui,ge(m,a,_));const b=we(m*2,c),E=e(_,b,x,o+1,r+m/Te);let A;if(E===Gu){const U=L(m),H=D(m)-U;A=n(U,H,!0,o+1,r+m/Te,_)}else A=E&&Bc(m,t,e,n,s,r,o+1);if(A)return!0;T=ps,ge(p,a,T);const S=we(p*2,c),y=e(T,S,M,o+1,r+p/Te);let P;if(y===Gu){const U=L(p),H=D(p)-U;P=n(U,H,!0,o+1,r+p/Te,T)}else P=y&&Bc(p,t,e,n,s,r,o+1);return!!P}}const ir=new he.constructor,Lo=new he.constructor,ci=new hl(()=>new Me),ss=new Me,rs=new Me,Fa=new Me,Ba=new Me;let Oa=!1;function Nx(i,t,e,n){if(Oa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Oa=!0;const s=i._roots,r=t._roots;let o,a=0,c=0;const u=new Nt().copy(e).invert();for(let l=0,h=s.length;l<h;l++){ir.setBuffer(s[l]),c=0;const f=ci.getPrimitive();ge(0,ir.float32Array,f),f.applyMatrix4(u);for(let d=0,g=r.length;d<g&&(Lo.setBuffer(r[d]),o=yn(0,0,e,u,n,a,c,0,0,f),Lo.clearBuffer(),c+=r[d].byteLength/Ve,!o);d++);if(ci.releasePrimitive(f),ir.clearBuffer(),a+=s[l].byteLength/Ve,o)break}return Oa=!1,o}function yn(i,t,e,n,s,r=0,o=0,a=0,c=0,u=null,l=!1){let h,f;l?(h=Lo,f=ir):(h=ir,f=Lo);const d=h.float32Array,g=h.uint32Array,v=h.uint16Array,m=f.float32Array,p=f.uint32Array,x=f.uint16Array,M=i*2,_=t*2,T=we(M,v),b=we(_,x);let E=!1;if(b&&T)l?E=s(He(t,p),qe(t*2,x),He(i,g),qe(i*2,v),c,o+t/Te,a,r+i/Te):E=s(He(i,g),qe(i*2,v),He(t,p),qe(t*2,x),a,r+i/Te,c,o+t/Te);else if(b){const A=ci.getPrimitive();ge(t,m,A),A.applyMatrix4(e);const S=Ie(i),y=Le(i,g);ge(S,d,ss),ge(y,d,rs);const P=A.intersectsBox(ss),L=A.intersectsBox(rs);E=P&&yn(t,S,n,e,s,o,r,c,a+1,A,!l)||L&&yn(t,y,n,e,s,o,r,c,a+1,A,!l),ci.releasePrimitive(A)}else{const A=Ie(t),S=Le(t,p);ge(A,m,Fa),ge(S,m,Ba);const y=u.intersectsBox(Fa),P=u.intersectsBox(Ba);if(y&&P)E=yn(i,A,e,n,s,r,o,a,c+1,u,l)||yn(i,S,e,n,s,r,o,a,c+1,u,l);else if(y)if(T)E=yn(i,A,e,n,s,r,o,a,c+1,u,l);else{const L=ci.getPrimitive();L.copy(Fa).applyMatrix4(e);const D=Ie(i),U=Le(i,g);ge(D,d,ss),ge(U,d,rs);const V=L.intersectsBox(ss),H=L.intersectsBox(rs);E=V&&yn(A,D,n,e,s,o,r,c,a+1,L,!l)||H&&yn(A,U,n,e,s,o,r,c,a+1,L,!l),ci.releasePrimitive(L)}else if(P)if(T)E=yn(i,S,e,n,s,r,o,a,c+1,u,l);else{const L=ci.getPrimitive();L.copy(Ba).applyMatrix4(e);const D=Ie(i),U=Le(i,g);ge(D,d,ss),ge(U,d,rs);const V=L.intersectsBox(ss),H=L.intersectsBox(rs);E=V&&yn(S,D,n,e,s,o,r,c,a+1,L,!l)||H&&yn(S,U,n,e,s,o,r,c,a+1,L,!l),ci.releasePrimitive(L)}}return E}const Yu=new Me,os=new Float32Array(6);class Fx{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...hf,...t},Lx(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,u=-1/0,l=-1/0;for(let h=t,f=t+e;h<f;h++){this.writePrimitiveBounds(h,os,0);const[d,g,v,m,p,x]=os;d<r&&(r=d),m>c&&(c=m),g<o&&(o=g),p>u&&(u=p),v<a&&(a=v),x>l&&(l=x)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=c,n[s+4]=u,n[s+5]=l,n}computePrimitiveBounds(t,e,n){const s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,os,0);const[a,c,u,l,h,f]=os,d=(a+l)/2,g=(c+h)/2,v=(u+f)/2,m=(l-a)/2,p=(h-c)/2,x=(f-u)/2,M=(r-s)*6;n[M+0]=d,n[M+1]=m+(Math.abs(d)+m)*Mo,n[M+2]=g,n[M+3]=p+(Math.abs(g)+p)*Mo,n[M+4]=v,n[M+5]=x+(Math.abs(v)+x)*Mo}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/Ve;for(let u=0;u<c;u++){const l=Te*u,h=2*l;we(h,a)&&(o[l+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){const u=a*2,l=we(u,r);if(l){const h=s[a+6],f=r[u+14];t(c,l,new Float32Array(n,a*4,6),h,f)}else{const h=Ie(a),f=Le(a,s),d=ul(a,s);t(c,l,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),c=s.byteLength/Ve;for(let u=c-1;u>=0;u--){const l=u*Te,h=l*2;if(we(h,o)){const d=He(l,r),g=qe(h,o);this.writePrimitiveRangeBounds(d,g,os,0),a.set(os,l)}else{const d=Ie(l),g=Le(l,r);for(let v=0;v<3;v++){const m=a[d+v],p=a[d+v+3],x=a[g+v],M=a[g+v+3];a[l+v]=m<x?m:x,a[l+v+3]=p>M?p:M}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ge(0,new Float32Array(n),Yu),t.union(Yu)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const h=s;s=(f,d,g,v,m)=>h(f,d,g,v,m)?!0:a(f,d,this,r,g,v,o)}else s||(r?s=(h,f,d,g)=>a(h,f,this,r,d,g,o):s=(h,f,d)=>d);let c=!1,u=0;const l=this._roots;for(let h=0,f=l.length;h<f;h++){const d=l[h];if(c=Ux(this,h,n,s,e,u),c)break;u+=d.byteLength/Ve}return c}bvhcast(t,e,n){let{intersectsRanges:s}=n;return Nx(this,t,e,s)}}function Bx(){return typeof SharedArrayBuffer<"u"}function fl(i){return i.index?i.index.count:i.attributes.position.count}function Wo(i){return fl(i)/3}function Ox(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function zx(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Ox(e,n);i.setIndex(new ve(s,1));for(let r=0;r<e;r++)s[r]=r}}function Vx(i,t,e){const n=fl(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function Hx(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function $u(i,t,e){const n=Vx(i,t,e),s=Hx(i,e);if(!s.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,c=fl(i)/e,u=[];for(const f of s){const{offset:d,count:g}=f,v=d,m=isFinite(g)?g:c-d,p=d+m;v<a&&p>o&&(u.push({pos:Math.max(o,v),isStart:!0}),u.push({pos:Math.min(a,p),isStart:!1}))}u.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let l=0,h=null;for(const f of u){const d=f.pos;l!==0&&d!==h&&r.push({offset:h,count:d-h}),l+=f.isStart?1:-1,h=d}return r}function Gx(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((u,l)=>u+l.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o);let c=0;for(let u=0;u<i.length;u++){const{offset:l,count:h}=i[u];for(let f=0;f<h;f++)a[c+f]=l+f;c+=h}return a}class kx extends Fx{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Bx())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...hf,...e},e[ll]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const s=$u(e,t.range,n),r=Gx(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else zx(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Me))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:$u(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class jn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}jn.prototype.setFromBox=(function(){const i=new R;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let l=0;l<=1;l++){i.x=s.x*c+r.x*(1-c),i.y=s.y*u+r.y*(1-u),i.z=s.z*l+r.z*(1-l);const h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const Wx=(function(){const i=new R,t=new R,e=new R;return function(s,r,o){const a=s.start,c=i,u=r.start,l=t;e.subVectors(a,u),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(l),f=l.dot(c),d=l.dot(l),g=e.dot(c),m=c.dot(c)*d-f*f;let p,x;m!==0?p=(h*f-g*d)/m:p=0,x=(h+p*f)/d,o.x=p,o.y=x}})(),dl=(function(){const i=new nt,t=new R,e=new R;return function(s,r,o,a){Wx(s,r,i);let c=i.x,u=i.y;if(c>=0&&c<=1&&u>=0&&u<=1){s.at(c,o),r.at(u,a);return}else if(c>=0&&c<=1){u<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let l;c<0?l=s.start:l=s.end;let h;u<0?h=r.start:h=r.end;const f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(l,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(l)){o.copy(f),a.copy(h);return}else{o.copy(l),a.copy(d);return}}}})(),Xx=(function(){const i=new R,t=new R,e=new Wn,n=new Jn;return function(r,o){const{radius:a,center:c}=r,{a:u,b:l,c:h}=o;if(n.start=u,n.end=l,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;const v=o.getPlane(e);if(Math.abs(v.distanceToPoint(c))<=a){const p=v.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}})(),qx=["x","y","z"],Xn=1e-15,Zu=Xn*Xn;function cn(i){return Math.abs(i)<Xn}class Tn extends Pe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new jn),this.points=[this.a,this.b,this.c],this.plane=new Wn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Jn,this.needsUpdate=!0}intersectsSphere(t){return Xx(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);const u=r[1],l=o[1];u.subVectors(t,e),l.setFromPoints(u,s);const h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,s);const d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s);const v=u.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Xn?m<Xn||p<Xn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<Xn?p<Xn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Xn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Tn.prototype.closestPointToSegment=(function(){const i=new R,t=new R,e=new Jn;return function(s,r=null,o=null){const{start:a,end:c}=s,u=this.points;let l,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(u[f]),e.end.copy(u[d]),dl(e,s,i,t),l=i.distanceToSquared(t),l<h&&(h=l,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),l=a.distanceToSquared(i),l<h&&(h=l,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),l=c.distanceToSquared(i),l<h&&(h=l,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(h)}})();Tn.prototype.intersectsTriangle=(function(){const i=new Tn,t=new jn,e=new jn,n=new R,s=new R,r=new R,o=new R,a=new Jn,c=new Jn,u=new R,l=new nt,h=new nt;function f(M,_,T,b){const E=n;!M.isDegenerateIntoPoint&&!M.isDegenerateIntoSegment?E.copy(M.plane.normal):E.copy(_.plane.normal);const A=M.satBounds,S=M.satAxes;for(let L=1;L<4;L++){const D=A[L],U=S[L];if(t.setFromPoints(U,_.points),D.isSeparated(t)||(o.copy(E).cross(U),t.setFromPoints(o,M.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}const y=_.satBounds,P=_.satAxes;for(let L=1;L<4;L++){const D=y[L],U=P[L];if(t.setFromPoints(U,M.points),D.isSeparated(t)||(o.crossVectors(E,U),t.setFromPoints(o,M.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}return T&&(b||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),T.start.set(0,0,0),T.end.set(0,0,0)),!0}function d(M,_,T,b,E,A,S,y,P,L,D){let U=S/(S-y);L.x=b+(E-b)*U,D.start.subVectors(_,M).multiplyScalar(U).add(M),U=S/(S-P),L.y=b+(A-b)*U,D.end.subVectors(T,M).multiplyScalar(U).add(M)}function g(M,_,T,b,E,A,S,y,P,L,D){if(E>0)d(M.c,M.a,M.b,b,_,T,P,S,y,L,D);else if(A>0)d(M.b,M.a,M.c,T,_,b,y,S,P,L,D);else if(y*P>0||S!=0)d(M.a,M.b,M.c,_,T,b,S,y,P,L,D);else if(y!=0)d(M.b,M.a,M.c,T,_,b,y,S,P,L,D);else if(P!=0)d(M.c,M.a,M.b,b,_,T,P,S,y,L,D);else return!0;return!1}function v(M,_,T,b){const E=_.degenerateSegment,A=M.plane.distanceToPoint(E.start),S=M.plane.distanceToPoint(E.end);return cn(A)?cn(S)?f(M,_,T,b):(T&&(T.start.copy(E.start),T.end.copy(E.start)),M.containsPoint(E.start)):cn(S)?(T&&(T.start.copy(E.end),T.end.copy(E.end)),M.containsPoint(E.end)):M.plane.intersectLine(E,n)!=null?(T&&(T.start.copy(n),T.end.copy(n)),M.containsPoint(n)):!1}function m(M,_,T){const b=_.a;return cn(M.plane.distanceToPoint(b))&&M.containsPoint(b)?(T&&(T.start.copy(b),T.end.copy(b)),!0):!1}function p(M,_,T){const b=M.degenerateSegment,E=_.a;return b.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<Zu?(T&&(T.start.copy(E),T.end.copy(E)),!0):!1}function x(M,_,T,b){if(M.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){const E=M.degenerateSegment,A=_.degenerateSegment,S=s,y=r;E.delta(S),A.delta(y);const P=n.subVectors(A.start,E.start),L=S.x*y.y-S.y*y.x;if(cn(L))return!1;const D=(P.x*y.y-P.y*y.x)/L,U=-(S.x*P.y-S.y*P.x)/L;if(D<0||D>1||U<0||U>1)return!1;const V=E.start.z+S.z*D,H=A.start.z+y.z*U;return cn(V-H)?(T&&(T.start.copy(E.start).addScaledVector(S,D),T.end.copy(E.start).addScaledVector(S,D)),!0):!1}else return _.isDegenerateIntoPoint?p(M,_,T):v(_,M,T,b);else{if(M.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(M.a)<Zu?(T&&(T.start.copy(M.a),T.end.copy(M.a)),!0):!1:_.isDegenerateIntoSegment?p(_,M,T):m(_,M,T);if(_.isDegenerateIntoPoint)return m(M,_,T);if(_.isDegenerateIntoSegment)return v(M,_,T,b)}}return function(_,T=null,b=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);const E=x(this,_,T,b);if(E!==void 0)return E;const A=this.plane,S=_.plane;let y=S.distanceToPoint(this.a),P=S.distanceToPoint(this.b),L=S.distanceToPoint(this.c);cn(y)&&(y=0),cn(P)&&(P=0),cn(L)&&(L=0);const D=y*P,U=y*L;if(D>0&&U>0)return!1;let V=A.distanceToPoint(_.a),H=A.distanceToPoint(_.b),Y=A.distanceToPoint(_.c);cn(V)&&(V=0),cn(H)&&(H=0),cn(Y)&&(Y=0);const W=V*H,it=V*Y;if(W>0&&it>0)return!1;s.copy(A.normal),r.copy(S.normal);const rt=s.cross(r);let mt=0,Lt=Math.abs(rt.x);const Gt=Math.abs(rt.y);Gt>Lt&&(Lt=Gt,mt=1),Math.abs(rt.z)>Lt&&(mt=2);const j=qx[mt],ht=this.a[j],et=this.b[j],Mt=this.c[j],bt=_.a[j],St=_.b[j],oe=_.c[j];if(g(this,ht,et,Mt,D,U,y,P,L,l,a))return f(this,_,T,b);if(g(_,bt,St,oe,W,it,V,H,Y,h,c))return f(this,_,T,b);if(l.y<l.x){const Ht=l.y;l.y=l.x,l.x=Ht,u.copy(a.start),a.start.copy(a.end),a.end.copy(u)}if(h.y<h.x){const Ht=h.y;h.y=h.x,h.x=Ht,u.copy(c.start),c.start.copy(c.end),c.end.copy(u)}return l.y<h.x||h.y<l.x?!1:(T&&(h.x>l.x?T.start.copy(c.start):T.start.copy(a.start),h.y<l.y?T.end.copy(c.end):T.end.copy(a.end)),!0)}})();Tn.prototype.distanceToPoint=(function(){const i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Tn.prototype.distanceToTriangle=(function(){const i=new R,t=new R,e=["a","b","c"],n=new Jn,s=new Jn;return function(o,a=null,c=null){const u=a||c?n:null;if(this.intersectsTriangle(o,u,!0))return(a||c)&&(a&&u.getCenter(a),c&&u.getCenter(c)),0;let l=1/0;for(let h=0;h<3;h++){let f;const d=e[h],g=o[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<l&&(l=f,a&&a.copy(i),c&&c.copy(g));const v=this[d];o.closestPointToPoint(v,i),f=v.distanceToSquared(i),f<l&&(l=f,a&&a.copy(v),c&&c.copy(i))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const v=e[g],m=e[(g+1)%3];s.set(o[v],o[m]),dl(n,s,i,t);const p=i.distanceToSquared(t);p<l&&(l=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(l)}})();class Ye{constructor(t,e,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new Nt,this.invMatrix=new Nt,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new jn),this.alignedSatBounds=new Array(3).fill().map(()=>new jn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ye.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){const f=1*u|2*l|4*h,d=s[f];d.x=u?n.x:e.x,d.y=l?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let u=0;u<3;u++){const l=o[u],h=r[u],f=1<<u,d=s[f];l.subVectors(a,d),h.setFromPoints(l,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ye.prototype.intersectsBox=(function(){const i=new jn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const u=o[c],l=r[c];if(i.setFromBox(u,e),l.isSeparated(i))return!1}return!0}})();Ye.prototype.intersectsTriangle=(function(){const i=new Tn,t=new Array(3),e=new jn,n=new jn,s=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){const d=a[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const u=o.satBounds,l=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=u[f],g=l[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=c[f];for(let g=0;g<4;g++){const v=l[g];if(s.crossVectors(d,v),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}})();Ye.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ye.prototype.distanceToPoint=(function(){const i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ye.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Jn),e=new Array(12).fill().map(()=>new Jn),n=new R,s=new R;return function(o,a=0,c=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||u)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),u&&u.copy(s)),0;const l=a*a,h=o.min,f=o.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(h,f);const x=p.distanceToSquared(s);if(x<g&&(g=x,c&&c.copy(p),u&&u.copy(s),x<l))return Math.sqrt(x)}let v=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const M=(m+1)%3,_=(m+2)%3,T=p<<M|x<<_,b=1<<m|p<<M|x<<_,E=d[T],A=d[b];t[v].set(E,A);const y=i[m],P=i[M],L=i[_],D=e[v],U=D.start,V=D.end;U[y]=h[y],U[P]=p?h[P]:f[P],U[L]=x?h[L]:f[P],V[y]=f[y],V[P]=p?h[P]:f[P],V[L]=x?h[L]:f[P],v++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=x?f.z:h.z,this.closestPointToPoint(s,n);const M=s.distanceToSquared(n);if(M<g&&(g=M,c&&c.copy(n),u&&u.copy(s),M<l))return Math.sqrt(M)}for(let m=0;m<12;m++){const p=t[m];for(let x=0;x<12;x++){const M=e[x];dl(p,M,n,s);const _=n.distanceToSquared(s);if(_<g&&(g=_,c&&c.copy(n),u&&u.copy(s),_<l))return Math.sqrt(_)}}return Math.sqrt(g)}})();class Yx extends hl{constructor(){super(()=>new Tn)}}const dn=new Yx,Ws=new R,za=new R;function $x(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:l=>(Ws.copy(t).clamp(l.min,l.max),Ws.distanceToSquared(t)),intersectsBounds:(l,h,f)=>f<a&&f<o,intersectsTriangle:(l,h)=>{l.closestPointToPoint(t,Ws);const f=t.distanceToSquared(Ws);return f<a&&(za.copy(Ws),a=f,c=h),f<r}}),a===1/0)return null;const u=Math.sqrt(a);return e.point?e.point.copy(za):e.point=za.clone(),e.distance=u,e.faceIndex=c,e}const Jr=parseInt(cr)>=169,Zx=parseInt(cr)<=161,Ti=new R,wi=new R,Ai=new R,jr=new nt,Qr=new nt,to=new nt,Ku=new R,Ju=new R,ju=new R,Xs=new R;function Kx(i,t,e,n,s,r,o,a){let c;if(r===Ge?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==Mn,s),c===null)return null;const u=i.origin.distanceTo(s);return u<o||u>a?null:{distance:u,point:s.clone()}}function Qu(i,t,e,n,s,r,o,a,c,u,l){Ti.fromBufferAttribute(t,r),wi.fromBufferAttribute(t,o),Ai.fromBufferAttribute(t,a);const h=Kx(i,Ti,wi,Ai,Xs,c,u,l);if(h){if(n){jr.fromBufferAttribute(n,r),Qr.fromBufferAttribute(n,o),to.fromBufferAttribute(n,a),h.uv=new nt;const d=Pe.getInterpolation(Xs,Ti,wi,Ai,jr,Qr,to,h.uv);Jr||(h.uv=d)}if(s){jr.fromBufferAttribute(s,r),Qr.fromBufferAttribute(s,o),to.fromBufferAttribute(s,a),h.uv1=new nt;const d=Pe.getInterpolation(Xs,Ti,wi,Ai,jr,Qr,to,h.uv1);Jr||(h.uv1=d),Zx&&(h.uv2=h.uv1)}if(e){Ku.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),ju.fromBufferAttribute(e,a),h.normal=new R;const d=Pe.getInterpolation(Xs,Ti,wi,Ai,Ku,Ju,ju,h.normal);h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1),Jr||(h.normal=d)}const f={a:r,b:o,c:a,normal:new R,materialIndex:0};if(Pe.getNormal(Ti,wi,Ai,f.normal),h.face=f,h.faceIndex=r,Jr){const d=new R;Pe.getBarycoord(Xs,Ti,wi,Ai,d),h.barycoord=d}}return h}function th(i){return i&&i.isMaterial?i.side:i}function Xo(i,t,e,n,s,r,o){const a=n*3;let c=a+0,u=a+1,l=a+2;const{index:h,groups:f}=i;i.index&&(c=h.getX(c),u=h.getX(u),l=h.getX(l));const{position:d,normal:g,uv:v,uv1:m}=i.attributes;if(Array.isArray(t)){const p=n*3;for(let x=0,M=f.length;x<M;x++){const{start:_,count:T,materialIndex:b}=f[x];if(p>=_&&p<_+T){const E=th(t[b]),A=Qu(e,d,g,v,m,c,u,l,E,r,o);if(A)if(A.faceIndex=n,A.face.materialIndex=b,s)s.push(A);else return A}}}else{const p=th(t),x=Qu(e,d,g,v,m,c,u,l,p,r,o);if(x)if(x.faceIndex=n,x.face.materialIndex=0,s)s.push(x);else return x}return null}function Ee(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,c=t+1,u=t+2;e&&(a=e.getX(a),c=e.getX(c),u=e.getX(u)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function Jx(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:u}=i;for(let l=n,h=n+s;l<h;l++)Xo(c,t,e,l,r,o,a)}function jx(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let u=1/0,l=null;for(let h=n,f=n+s;h<f;h++){let d;d=Xo(a,t,e,h,null,r,o),d&&d.distance<u&&(l=d,u=d.distance)}return l}function Qx(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,u=a.attributes.position;for(let l=i,h=t+i;l<h;l++){let f;if(f=l,Ee(o,f*3,c,u),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function tv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,u=0;const l=i._roots;for(let f=0,d=l.length;f<d;f++)r=l[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,u),u+=r.byteLength;function h(f,d,g=!1){const v=f*2;if(we(v,a)){const m=He(f,o),p=qe(v,a);let x=1/0,M=1/0,_=1/0,T=-1/0,b=-1/0,E=-1/0;for(let A=3*m,S=3*(m+p);A<S;A++){let y=n[A];const P=s.getX(y),L=s.getY(y),D=s.getZ(y);P<x&&(x=P),P>T&&(T=P),L<M&&(M=L),L>b&&(b=L),D<_&&(_=D),D>E&&(E=D)}return c[f+0]!==x||c[f+1]!==M||c[f+2]!==_||c[f+3]!==T||c[f+4]!==b||c[f+5]!==E?(c[f+0]=x,c[f+1]=M,c[f+2]=_,c[f+3]=T,c[f+4]=b,c[f+5]=E,!0):!1}else{const m=Ie(f),p=Le(f,o);let x=g,M=!1,_=!1;if(t){if(!x){const y=m/Te+d/Ve,P=p/Te+d/Ve;M=t.has(y),_=t.has(P),x=!M&&!_}}else M=!0,_=!0;const T=x||M,b=x||_;let E=!1;T&&(E=h(m,d,x));let A=!1;b&&(A=h(p,d,x));const S=E||A;if(S)for(let y=0;y<3;y++){const P=m+y,L=p+y,D=c[P],U=c[P+3],V=c[L],H=c[L+3];c[f+y]=D<V?D:V,c[f+y+3]=U>H?U:H}return S}}}function pi(i,t,e,n,s){let r,o,a,c,u,l;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,v=e.origin.y,m=e.origin.z;let p=t[i],x=t[i+3],M=t[i+1],_=t[i+3+1],T=t[i+2],b=t[i+3+2];return h>=0?(r=(p-g)*h,o=(x-g)*h):(r=(x-g)*h,o=(p-g)*h),f>=0?(a=(M-v)*f,c=(_-v)*f):(a=(_-v)*f,c=(M-v)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(u=(T-m)*d,l=(b-m)*d):(u=(b-m)*d,l=(T-m)*d),r>l||u>o)?!1:((u>r||r!==r)&&(r=u),(l<o||o!==o)&&(o=l),r<=s&&o>=n)}function ev(i,t,e,n,s,r,o,a){const{geometry:c,_indirectBuffer:u}=i;for(let l=n,h=n+s;l<h;l++){let f=u?u[l]:l;Xo(c,t,e,f,r,o,a)}}function nv(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:c}=i;let u=1/0,l=null;for(let h=n,f=n+s;h<f;h++){let d;d=Xo(a,t,e,c?c[h]:h,null,r,o),d&&d.distance<u&&(l=d,u=d.distance)}return l}function iv(i,t,e,n,s,r,o){const{geometry:a}=e,{index:c}=a,u=a.attributes.position;for(let l=i,h=t+i;l<h;l++){let f;if(f=e.resolveTriangleIndex(l),Ee(o,f*3,c,u),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function sv(i,t,e,n,s,r,o){he.setBuffer(i._roots[t]),Oc(0,i,e,n,s,r,o),he.clearBuffer()}function Oc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:u}=he,l=i*2;if(we(l,c)){const f=He(i,u),d=qe(l,c);Jx(t,e,n,f,d,s,r,o)}else{const f=Ie(i);pi(f,a,n,r,o)&&Oc(f,t,e,n,s,r,o);const d=Le(i,u);pi(d,a,n,r,o)&&Oc(d,t,e,n,s,r,o)}}const rv=["x","y","z"];function ov(i,t,e,n,s,r){he.setBuffer(i._roots[t]);const o=zc(0,i,e,n,s,r);return he.clearBuffer(),o}function zc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=he;let u=i*2;if(we(u,a)){const h=He(i,c),f=qe(u,a);return jx(t,e,n,h,f,s,r)}else{const h=ul(i,c),f=rv[h],g=n.direction[f]>=0;let v,m;g?(v=Ie(i),m=Le(i,c)):(v=Le(i,c),m=Ie(i));const x=pi(v,o,n,s,r)?zc(v,t,e,n,s,r):null;if(x){const T=x.point[f];if(g?T<=o[m+h]:T>=o[m+h+3])return x}const _=pi(m,o,n,s,r)?zc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const eo=new Me,as=new Tn,cs=new Tn,qs=new Nt,eh=new Ye,no=new Ye;function av(i,t,e,n){he.setBuffer(i._roots[t]);const s=Vc(0,i,e,n);return he.clearBuffer(),s}function Vc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=he;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),eh.set(e.boundingBox.min,e.boundingBox.max,n),s=eh),we(c,o)){const l=t.geometry,h=l.index,f=l.attributes.position,d=e.index,g=e.attributes.position,v=He(i,a),m=qe(c,o);if(qs.copy(n).invert(),e.boundsTree)return ge(i,r,no),no.matrix.copy(qs),no.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>no.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let M=v*3,_=(m+v)*3;M<_;M+=3)if(Ee(cs,M,h,f),cs.needsUpdate=!0,x.intersectsTriangle(cs))return!0;return!1}});{const p=Wo(e);for(let x=v*3,M=(m+v)*3;x<M;x+=3){Ee(as,x,h,f),as.a.applyMatrix4(qs),as.b.applyMatrix4(qs),as.c.applyMatrix4(qs),as.needsUpdate=!0;for(let _=0,T=p*3;_<T;_+=3)if(Ee(cs,_,d,g),cs.needsUpdate=!0,as.intersectsTriangle(cs))return!0}}}else{const l=Ie(i),h=Le(i,a);return ge(l,r,eo),!!(s.intersectsBox(eo)&&Vc(l,t,e,n,s)||(ge(h,r,eo),s.intersectsBox(eo)&&Vc(h,t,e,n,s)))}}const io=new Nt,Va=new Ye,Ys=new Ye,cv=new R,lv=new R,uv=new R,hv=new R;function fv(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Va.set(t.boundingBox.min,t.boundingBox.max,e),Va.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,u=a.index,l=t.attributes.position,h=t.index,f=dn.getPrimitive(),d=dn.getPrimitive();let g=cv,v=lv,m=null,p=null;s&&(m=uv,p=hv);let x=1/0,M=null,_=null;return io.copy(e).invert(),Ys.matrix.copy(io),i.shapecast({boundsTraverseOrder:T=>Va.distanceToBox(T),intersectsBounds:(T,b,E)=>E<x&&E<o?(b&&(Ys.min.copy(T.min),Ys.max.copy(T.max),Ys.needsUpdate=!0),!0):!1,intersectsRange:(T,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>Ys.distanceToBox(A),intersectsBounds:(A,S,y)=>y<x&&y<o,intersectsRange:(A,S)=>{for(let y=A,P=A+S;y<P;y++){Ee(d,3*y,h,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=T,D=T+b;L<D;L++){Ee(f,3*L,u,c),f.needsUpdate=!0;const U=f.distanceToTriangle(d,g,m);if(U<x&&(v.copy(g),p&&p.copy(m),x=U,M=L,_=y),U<r)return!0}}}});{const E=Wo(t);for(let A=0,S=E;A<S;A++){Ee(d,3*A,h,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let y=T,P=T+b;y<P;y++){Ee(f,3*y,u,c),f.needsUpdate=!0;const L=f.distanceToTriangle(d,g,m);if(L<x&&(v.copy(g),p&&p.copy(m),x=L,M=y,_=A),L<r)return!0}}}}}),dn.releasePrimitive(f),dn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(io),v.applyMatrix4(io),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function dv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,c,u=0;const l=i._roots;for(let f=0,d=l.length;f<d;f++)r=l[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,u),u+=r.byteLength;function h(f,d,g=!1){const v=f*2;if(we(v,a)){const m=He(f,o),p=qe(v,a);let x=1/0,M=1/0,_=1/0,T=-1/0,b=-1/0,E=-1/0;for(let A=m,S=m+p;A<S;A++){const y=3*i.resolveTriangleIndex(A);for(let P=0;P<3;P++){let L=y+P;L=n?n[L]:L;const D=s.getX(L),U=s.getY(L),V=s.getZ(L);D<x&&(x=D),D>T&&(T=D),U<M&&(M=U),U>b&&(b=U),V<_&&(_=V),V>E&&(E=V)}}return c[f+0]!==x||c[f+1]!==M||c[f+2]!==_||c[f+3]!==T||c[f+4]!==b||c[f+5]!==E?(c[f+0]=x,c[f+1]=M,c[f+2]=_,c[f+3]=T,c[f+4]=b,c[f+5]=E,!0):!1}else{const m=Ie(f),p=Le(f,o);let x=g,M=!1,_=!1;if(t){if(!x){const y=m/Te+d/Ve,P=p/Te+d/Ve;M=t.has(y),_=t.has(P),x=!M&&!_}}else M=!0,_=!0;const T=x||M,b=x||_;let E=!1;T&&(E=h(m,d,x));let A=!1;b&&(A=h(p,d,x));const S=E||A;if(S)for(let y=0;y<3;y++){const P=m+y,L=p+y,D=c[P],U=c[P+3],V=c[L],H=c[L+3];c[f+y]=D<V?D:V,c[f+y+3]=U>H?U:H}return S}}}function pv(i,t,e,n,s,r,o){he.setBuffer(i._roots[t]),Hc(0,i,e,n,s,r,o),he.clearBuffer()}function Hc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:c,uint32Array:u}=he,l=i*2;if(we(l,c)){const f=He(i,u),d=qe(l,c);ev(t,e,n,f,d,s,r,o)}else{const f=Ie(i);pi(f,a,n,r,o)&&Hc(f,t,e,n,s,r,o);const d=Le(i,u);pi(d,a,n,r,o)&&Hc(d,t,e,n,s,r,o)}}const mv=["x","y","z"];function gv(i,t,e,n,s,r){he.setBuffer(i._roots[t]);const o=Gc(0,i,e,n,s,r);return he.clearBuffer(),o}function Gc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:c}=he;let u=i*2;if(we(u,a)){const h=He(i,c),f=qe(u,a);return nv(t,e,n,h,f,s,r)}else{const h=ul(i,c),f=mv[h],g=n.direction[f]>=0;let v,m;g?(v=Ie(i),m=Le(i,c)):(v=Le(i,c),m=Ie(i));const x=pi(v,o,n,s,r)?Gc(v,t,e,n,s,r):null;if(x){const T=x.point[f];if(g?T<=o[m+h]:T>=o[m+h+3])return x}const _=pi(m,o,n,s,r)?Gc(m,t,e,n,s,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const so=new Me,ls=new Tn,us=new Tn,$s=new Nt,nh=new Ye,ro=new Ye;function _v(i,t,e,n){he.setBuffer(i._roots[t]);const s=kc(0,i,e,n);return he.clearBuffer(),s}function kc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=he;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),nh.set(e.boundingBox.min,e.boundingBox.max,n),s=nh),we(c,o)){const l=t.geometry,h=l.index,f=l.attributes.position,d=e.index,g=e.attributes.position,v=He(i,a),m=qe(c,o);if($s.copy(n).invert(),e.boundsTree)return ge(i,r,ro),ro.matrix.copy($s),ro.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>ro.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let M=v,_=m+v;M<_;M++)if(Ee(us,3*t.resolveTriangleIndex(M),h,f),us.needsUpdate=!0,x.intersectsTriangle(us))return!0;return!1}});{const p=Wo(e);for(let x=v,M=m+v;x<M;x++){const _=t.resolveTriangleIndex(x);Ee(ls,3*_,h,f),ls.a.applyMatrix4($s),ls.b.applyMatrix4($s),ls.c.applyMatrix4($s),ls.needsUpdate=!0;for(let T=0,b=p*3;T<b;T+=3)if(Ee(us,T,d,g),us.needsUpdate=!0,ls.intersectsTriangle(us))return!0}}}else{const l=Ie(i),h=Le(i,a);return ge(l,r,so),!!(s.intersectsBox(so)&&kc(l,t,e,n,s)||(ge(h,r,so),s.intersectsBox(so)&&kc(h,t,e,n,s)))}}const oo=new Nt,Ha=new Ye,Zs=new Ye,xv=new R,vv=new R,yv=new R,Mv=new R;function Sv(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ha.set(t.boundingBox.min,t.boundingBox.max,e),Ha.needsUpdate=!0;const a=i.geometry,c=a.attributes.position,u=a.index,l=t.attributes.position,h=t.index,f=dn.getPrimitive(),d=dn.getPrimitive();let g=xv,v=vv,m=null,p=null;s&&(m=yv,p=Mv);let x=1/0,M=null,_=null;return oo.copy(e).invert(),Zs.matrix.copy(oo),i.shapecast({boundsTraverseOrder:T=>Ha.distanceToBox(T),intersectsBounds:(T,b,E)=>E<x&&E<o?(b&&(Zs.min.copy(T.min),Zs.max.copy(T.max),Zs.needsUpdate=!0),!0):!1,intersectsRange:(T,b)=>{if(t.boundsTree){const E=t.boundsTree;return E.shapecast({boundsTraverseOrder:A=>Zs.distanceToBox(A),intersectsBounds:(A,S,y)=>y<x&&y<o,intersectsRange:(A,S)=>{for(let y=A,P=A+S;y<P;y++){const L=E.resolveTriangleIndex(y);Ee(d,3*L,h,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=T,U=T+b;D<U;D++){const V=i.resolveTriangleIndex(D);Ee(f,3*V,u,c),f.needsUpdate=!0;const H=f.distanceToTriangle(d,g,m);if(H<x&&(v.copy(g),p&&p.copy(m),x=H,M=D,_=y),H<r)return!0}}}})}else{const E=Wo(t);for(let A=0,S=E;A<S;A++){Ee(d,3*A,h,l),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let y=T,P=T+b;y<P;y++){const L=i.resolveTriangleIndex(y);Ee(f,3*L,u,c),f.needsUpdate=!0;const D=f.distanceToTriangle(d,g,m);if(D<x&&(v.copy(g),p&&p.copy(m),x=D,M=y,_=A),D<r)return!0}}}}}),dn.releasePrimitive(f),dn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=x,n.faceIndex=M,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(oo),v.applyMatrix4(oo),s.distance=v.sub(s.point).length(),s.faceIndex=_),n)}function ih(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const ao=new Ye,co=new ur,sh=new R,rh=new Nt,oh=new R,Ga=["getX","getY","getZ"];class Do extends kx{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));const a=new Do(e,{...n,[ll]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const u=e.getIndex();if(u===null){const l=new ve(t.index,1,!1);e.setIndex(l)}else u.array!==s&&(u.array.set(s),u.needsUpdate=!0)}return a;function c(u){for(let l=0;l<u.length;l++){const h=u[l],f=new Uint32Array(h),d=new Uint16Array(h);for(let g=0,v=h.byteLength/Ve;g<v;g++){const m=Te*g,p=2*m;we(p,d)||(f[m+6]=f[m+6]/Te-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,u=(r?r[t]:t)*3;let l=u+0,h=u+1,f=u+2;a&&(l=a[l],h=a[h],f=a[f]);for(let d=0;d<3;d++){const g=o[Ga[d]](l),v=o[Ga[d]](h),m=o[Ga[d]](f);let p=g;v<p&&(p=v),m<p&&(p=m);let x=g;v>x&&(x=v),m>x&&(x=m),e[n+d]=p,e[n+d+3]=x}return e}computePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const u=o.array,l=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const f=["getX","getY","getZ"],d=n.offset;for(let g=t,v=t+e;g<v;g++){const p=(r?r[g]:g)*3,x=(g-d)*6;let M=p+0,_=p+1,T=p+2;a&&(M=a[M],_=a[_],T=a[T]),c||(M=M*h+l,_=_*h+l,T=T*h+l);for(let b=0;b<3;b++){let E,A,S;c?(E=o[f[b]](M),A=o[f[b]](_),S=o[f[b]](T)):(E=u[M+b],A=u[_+b],S=u[T+b]);let y=E;A<y&&(y=A),S<y&&(y=S);let P=E;A>P&&(P=A),S>P&&(P=S);const L=(P-y)/2,D=b*2;n[x+D+0]=y+L,n[x+D+1]=L+(Math.abs(y)+L)*Mo}}return n}raycastObject3D(t,e,n=[]){const{material:s}=t;if(s===void 0)return;rh.copy(t.matrixWorld).invert(),co.copy(e.ray).applyMatrix4(rh),oh.setFromMatrixScale(t.matrixWorld),sh.copy(co.direction).multiply(oh);const r=sh.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(co,s,o,a);c=ih(c,t,e),c&&n.push(c)}else{const c=this.raycast(co,s,o,a);for(let u=0,l=c.length;u<l;u++){const h=ih(c[u],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?dv:tv)(this,t)}raycast(t,e=Dn,n=0,s=1/0){const r=this._roots,o=[],a=this.indirect?pv:sv;for(let c=0,u=r.length;c<u;c++)a(this,c,e,t,o,n,s);return o}raycastFirst(t,e=Dn,n=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?gv:ov;for(let c=0,u=r.length;c<u;c++){const l=a(this,c,e,t,n,s);l!=null&&(o==null||l.distance<o.distance)&&(o=l)}return o}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?_v:av;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=dn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?iv:Qx});return dn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=dn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,u=this.indirect?g=>{const v=this.resolveTriangleIndex(g);Ee(o,v*3,a,c)}:g=>{Ee(o,g*3,a,c)},l=dn.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{const v=t.resolveTriangleIndex(g);Ee(l,v*3,h,f)}:g=>{Ee(l,g*3,h,f)};if(r){if(!(t instanceof Do))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(v,m,p,x,M,_,T,b)=>{for(let E=p,A=p+x;E<A;E++){d(E),l.a.applyMatrix4(e),l.b.applyMatrix4(e),l.c.applyMatrix4(e),l.needsUpdate=!0;for(let S=v,y=v+m;S<y;S++)if(u(S),o.needsUpdate=!0,r(o,l,S,E,M,_,T,b))return!0}return!1};if(s){const v=s;s=function(m,p,x,M,_,T,b,E){return v(m,p,x,M,_,T,b,E)?!0:g(m,p,x,M,_,T,b,E)}}else s=g}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return ao.set(t.min,t.max,e),ao.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ao.intersectsBox(n),intersectsTriangle:n=>ao.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?Sv:fv)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return $x(this,t,e,n,s)}}const hs={Mesh:Zt.prototype.raycast,Line:Ho.prototype.raycast,LineSegments:jh.prototype.raycast,LineLoop:Qh.prototype.raycast,Points:Go.prototype.raycast,BatchedMesh:Z_.prototype.raycast},De=new Zt,lo=[];function Ev(i,t){if(this.isBatchedMesh)bv.call(this,i,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof Zt)n=hs.Mesh;else if(this instanceof jh)n=hs.LineSegments;else if(this instanceof Qh)n=hs.LineLoop;else if(this instanceof Ho)n=hs.Line;else if(this instanceof Go)n=hs.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function bv(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;De.material=this.material,De.geometry=this.geometry;const o=De.geometry.boundsTree,a=De.geometry.drawRange;De.geometry.boundingSphere===null&&(De.geometry.boundingSphere=new pn);for(let c=0,u=n.length;c<u;c++){if(!this.getVisibleAt(c))continue;const l=n[c].geometryIndex;if(De.geometry.boundsTree=e[l],this.getMatrixAt(c,De.matrixWorld).premultiply(r),!De.geometry.boundsTree){this.getBoundingBoxAt(l,De.geometry.boundingBox),this.getBoundingSphereAt(l,De.geometry.boundingSphere);const h=s[l];De.geometry.setDrawRange(h.start,h.count)}De.raycast(i,lo);for(let h=0,f=lo.length;h<f;h++){const d=lo[h];d.object=this,d.batchId=c,t.push(d)}lo.length=0}De.geometry.boundsTree=o,De.geometry.drawRange=a,De.material=null,De.geometry=null}else hs.BatchedMesh.call(this,i,t)}function Tv(i={}){const{type:t=Do}=i;return this.boundsTree=new t(this,i),this.boundsTree}function wv(){this.boundsTree=null}function Av(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pe;let u=0;for(let l=0;l<i.length;++l){const h=i[l];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,d,l),u+=d}}if(e){let l=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+l);l+=i[f].attributes.position.count}c.setIndex(h)}for(const l in r){const h=ah(r[l]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,h)}for(const l in o){const h=o[l][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<h;++f){const d=[];for(let v=0;v<o[l].length;++v)d.push(o[l][v][f]);const g=ah(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function ah(i){let t,e,n,s=-1,r=0;for(let u=0;u<i.length;++u){const l=i[u];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}const o=new t(r),a=new ve(o,e,n);let c=0;for(let u=0;u<i.length;++u){const l=i[u];if(l.isInterleavedBufferAttribute){const h=c/e;for(let f=0,d=l.count;f<d;f++)for(let g=0;g<e;g++){const v=l.getComponent(f,g);a.setComponent(f+h,g,v)}}else o.set(l.array,c);c+=l.count*e}return s!==void 0&&(a.gpuType=s),a}function Rt(i,t){const e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)e.toArray(s,r*3);return i.setAttribute("color",new ve(s,3)),i}function Pt(i,t,e,n,s=0,r=0,o=0,a=1){return i.rotateX(s),i.rotateY(r),i.rotateZ(o),a!==1&&i.scale(a,a,a),i.translate(t,e,n),i}function ue(i){const t=Av(i.map(e=>e.toNonIndexed()));return i.forEach(e=>e.dispose()),t}function de(i,t,e=.08){const n=new It(t);return n.offsetHSL(i.range(-.02,.02),i.range(-e,e),i.range(-e,e)),`#${n.getHexString()}`}const Cv={rock(i,t){const e=t.tint||"#8f8a80",n=[],s=i.int(1,3);for(let r=0;r<s;r++){const o=Rt(new Ln(i.range(.5,1.1),0),de(i,e));Pt(o,i.range(-.5,.5),i.range(.1,.4),i.range(-.5,.5),i.range(0,1),i.range(0,3),i.range(0,1)),n.push(o)}return ue(n)},spikeRock(i,t){const e=t.tint||"#5d4a6b",n=[],s=i.int(2,4);for(let r=0;r<s;r++){const o=i.range(1.2,3),a=Rt(new un(i.range(.3,.6),o,5),de(i,e));Pt(a,i.range(-.7,.7),o*.45,i.range(-.7,.7),i.range(-.25,.25),i.range(0,3),i.range(-.25,.25)),n.push(a)}return ue(n)},cactus(i){const t=de(i,"#4a8f4a"),e=i.range(1.6,2.8),n=[Pt(Rt(new jt(.28,.34,e,7),t),0,e/2,0)],s=i.int(1,2);for(let r=0;r<s;r++){const o=r===0?1:-1,a=e*i.range(.4,.65);n.push(Pt(Rt(new jt(.16,.18,.7,6),t),o*.45,a,0,0,0,o*Math.PI/2)),n.push(Pt(Rt(new jt(.16,.18,.8,6),t),o*.72,a+.4,0))}return i.chance(.4)&&n.push(Pt(Rt(new fe(.14,6,5),"#ff7fb0"),0,e+.05,0)),ue(n)},dryShrub(i){const t=[],e=i.int(3,5);for(let n=0;n<e;n++){const s=Rt(new jt(.03,.05,i.range(.5,.9),4),de(i,"#9a7a4a"));Pt(s,0,.3,0,i.range(-.5,.5),i.range(0,6),i.range(-.5,.5)),t.push(s)}return ue(t)},palm(i){const t=[],e=i.range(2.5,3.6),n=i.range(-.12,.12);t.push(Pt(Rt(new jt(.14,.24,e,6),"#9a7a52"),0,e/2,0,0,0,n));const s=-Math.sin(n)*e,r=5;for(let o=0;o<r;o++){const a=o/r*Math.PI*2+i.range(0,.5),c=Rt(new un(.22,1.8,4),de(i,"#4faf5f"));c.scale(1,1,.3),Pt(c,s+Math.cos(a)*.8,e+.1,Math.sin(a)*.8,Math.PI/2.6*Math.cos(a),-a,Math.PI/2.6*Math.sin(a)*.5),t.push(c)}return ue(t)},coral(i){const t=[],e=i.pick(["#ff7fa0","#ffa05a","#cf7fff","#5affd0"]),n=i.int(3,6);for(let s=0;s<n;s++){const r=i.range(.6,1.4),o=Rt(new jt(.06,.12,r,5),de(i,e));Pt(o,i.range(-.3,.3),r/2,i.range(-.3,.3),i.range(-.4,.4),0,i.range(-.4,.4)),t.push(o),t.push(Pt(Rt(new fe(.12,5,4),de(i,e)),i.range(-.3,.3),r,i.range(-.3,.3)))}return ue(t)},vent(i){const t=[Pt(Rt(new jt(.5,.9,1.1,7),"#4a4040"),0,.55,0),Pt(Rt(new jt(.32,.5,.4,7),"#332b2b"),0,1.25,0)];return ue(t)},tentacle(i){const t=[],e=de(i,"#7a4a8f"),n=4;let s=0,r=0,o=i.range(-.3,.3);for(let a=0;a<n;a++){const c=.8-a*.12,u=.22-a*.045,l=Rt(new jt(u,u+.05,c,6),e);Pt(l,s,r+c/2,0,0,0,o*(a+1)*.6),t.push(l),s-=Math.sin(o*(a+1)*.6)*c,r+=Math.cos(o*(a+1)*.6)*c}return t.push(Pt(Rt(new fe(.16,6,5),"#c6ff4f"),s,r,0)),ue(t)},fairyTree(i){const t=i.range(1.8,3),e=i.pick(["#ff9ad5","#b89aff","#9adfff"]),n=[Pt(Rt(new jt(.12,.2,t,6),"#e8d8c8"),0,t/2,0),Pt(Rt(new Ln(i.range(.8,1.2),1),de(i,e)),0,t+.5,0)];return i.chance(.6)&&n.push(Pt(Rt(new Ln(.5,1),de(i,e)),i.range(-.7,.7),t+.1,i.range(-.7,.7))),ue(n)},glowFlower(i){const t=i.pick(["#ffe97f","#ff9ad5","#9adfff","#c6ff8f"]),e=i.range(.5,1.1);return ue([Pt(Rt(new jt(.03,.04,e,4),"#5a8f5a"),0,e/2,0),Pt(Rt(new Ni(.18,0),t),0,e+.12,0)])},smallMushroom(i,t){const e=t.glow||"#d6a0ff",n=i.range(.35,.7);return ue([Pt(Rt(new jt(.08,.11,n,5),"#e8e0d8"),0,n/2,0),Pt(Rt(new fe(.28,7,5,0,Math.PI*2,0,Math.PI/2),de(i,e)),0,n,0)])},giantMushroom(i){const t=i.pick(["#cf5a8f","#8f5acf","#5a8fcf"]),e=i.range(2.2,4),n=i.range(1.2,1.9),s=Rt(new fe(n,9,6,0,Math.PI*2,0,Math.PI/2),de(i,t));return s.scale(1,.65,1),ue([Pt(Rt(new jt(.3,.45,e,7),"#e8e0d8"),0,e/2,0),Pt(s,0,e,0),Pt(Rt(new fe(n*.25,5,4),"#f8f0e8"),n*.5,e+n*.45,0)])},leafyTree(i){const t=i.range(1.6,2.8),e=i.pick(["#4a8f3a","#5aa84a","#3a7a4a"]),n=[Pt(Rt(new jt(.14,.22,t,6),"#6a4a32"),0,t/2,0)],s=i.int(2,3);for(let r=0;r<s;r++)n.push(Pt(Rt(new Ln(i.range(.7,1.1),1),de(i,e)),i.range(-.5,.5),t+i.range(0,.8),i.range(-.5,.5)));return ue(n)},fern(i){const t=[],e=i.int(4,6);for(let n=0;n<e;n++){const s=n/e*Math.PI*2,r=Rt(new un(.12,i.range(.6,1),4),de(i,"#3a8f5a"));r.scale(1,1,.3),Pt(r,Math.cos(s)*.25,.35,Math.sin(s)*.25,Math.cos(s)*.7,-s,Math.sin(s)*.35),t.push(r)}return ue(t)},snowPine(i){const t=i.range(1.8,3),e=[Pt(Rt(new jt(.12,.18,t*.4,6),"#5a4a3a"),0,t*.2,0)],n=3;for(let s=0;s<n;s++){const r=s/n,o=Rt(new un(.9*(1-r*.55),t*.42,7),s===0?"#3a6a52":de(i,"#e8f4f8",.04));Pt(o,0,t*(.35+r*.3),0),e.push(o)}return ue(e)},iceSpike(i){const t=[],e=i.int(2,4);for(let n=0;n<e;n++){const s=i.range(1,3.2),r=Rt(new un(i.range(.2,.45),s,5),de(i,"#cfeffc",.05));Pt(r,i.range(-.6,.6),s*.42,i.range(-.6,.6),i.range(-.3,.3),i.range(0,3),i.range(-.3,.3)),t.push(r)}return ue(t)},crystal(i,t){const e=t.tint||"#7fdfff",n=[],s=i.int(2,4);for(let r=0;r<s;r++){const o=i.range(.8,2.6),a=Rt(new Ni(i.range(.25,.5),0),de(i,e,.05));a.scale(1,o,1),Pt(a,i.range(-.6,.6),o*.35,i.range(-.6,.6),i.range(-.35,.35),i.range(0,3),i.range(-.35,.35)),n.push(a)}return ue(n)},obsidian(i){const t=[],e=i.int(2,4);for(let n=0;n<e;n++){const s=i.range(.9,2.4),r=Rt(new ko(i.range(.4,.8),0),de(i,"#2b2233",.04));r.scale(1,s,1),Pt(r,i.range(-.6,.6),s*.3,i.range(-.6,.6),i.range(0,.6),i.range(0,3),i.range(0,.6)),t.push(r)}return ue(t)},candyCane(i){const t=[],n=i.int(5,7);for(let r=0;r<n;r++){const o=Rt(new jt(.14,.14,.35,7),r%2===0?"#ff4a5a":"#fff8f8");Pt(o,0,.35*(r+.5),0),t.push(o)}const s=Rt(new bs(.4,.13,6,10,Math.PI),"#ff4a5a");return Pt(s,.4,.35*n,0),t.push(s),ue(t)},lollipop(i){const t=i.pick(["#ff5ad6","#5ad6ff","#ffd65a","#8fff5a"]),e=i.range(1.2,2),n=Rt(new fe(.55,9,7),de(i,t));return n.scale(1,1,.35),ue([Pt(Rt(new jt(.07,.07,e,5),"#fff8f0"),0,e/2,0),Pt(n,0,e+.45,0,0,i.range(0,3),0)])},gumdrop(i){const t=i.pick(["#ff5a5a","#5aff8f","#5a8fff","#ffdf5a","#cf5aff"]),e=Rt(new fe(i.range(.4,.8),8,6,0,Math.PI*2,0,Math.PI/2),de(i,t));return e.scale(1,.8,1),ue([Pt(e,0,.05,0)])},antenna(i){const t=de(i,"#6a7280",.04),e=i.range(2.5,4.5),n=[Pt(Rt(new jt(.06,.14,e,5),t),0,e/2,0),Pt(Rt(new fe(.16,6,5),i.pick(["#16f0c8","#ffd24f","#ff5a3a"])),0,e+.1,0)],s=i.int(1,3);for(let r=0;r<s;r++)n.push(Pt(Rt(new Ue(i.range(.6,1.2),.06,.06),t),0,e*i.range(.5,.9),0,0,i.range(0,3),0));return ue(n)},pipes(i){const t=de(i,i.pick(["#5a6068","#7a6a52","#4a5058"]),.04),e=[];let n=i.range(-.4,.4);const s=i.int(2,4);for(let r=0;r<s;r++){const o=i.range(.8,1.6),a=r%2===0;e.push(Pt(Rt(new jt(.14,.14,o,6),t),n,a?o/2:.9,r*.3-.3,a?0:Math.PI/2,0,0)),a||(n+=o*.4)}return e.push(Pt(Rt(new bs(.2,.05,5,8),"#ffd24f"),n*.5,1.1,0,Math.PI/2,0,0)),ue(e)},machineBlock(i){const t=[],e=i.int(1,3);let n=0;for(let s=0;s<e;s++){const r=i.range(.7,1.5)*(1-s*.2),o=i.range(.4,.9);t.push(Pt(Rt(new Ue(r,o,r*i.range(.7,1.2)),de(i,"#3a3e46",.05)),0,n+o/2,0,0,i.range(0,1.5),0)),n+=o}return t.push(Pt(Rt(new jt(.08,.08,.5,5),"#6a7280"),i.range(-.3,.3),n+.2,i.range(-.3,.3))),i.chance(.6)&&t.push(Pt(Rt(new Ue(.2,.2,.05),i.pick(["#16f0c8","#ff5a3a"])),0,n*.5,.55)),ue(t)},glitchCube(i){const t=i.pick(["#ff2bd6","#2bffd6","#2b6aff"]),e=[],n=i.int(1,3);for(let s=0;s<n;s++){const r=i.range(.4,1.1),o=Rt(new Ue(r,r,r),s===0?t:"#10101c");Pt(o,i.range(-.5,.5),i.range(.4,2.2),i.range(-.5,.5),i.range(0,1),i.range(0,1),i.range(0,1)),e.push(o)}return ue(e)}},Rv=new Set(["glowFlower","smallMushroom","crystal","glitchCube","tentacle","coral","antenna"]);function Pv(i,t,e){return Cv[i](t,e)}function Iv(i){return Rv.has(i)}const Lv=new Map([...cl,cf].map(i=>[i.id,i]));let uo=null;function Dv(){if(uo)return uo;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.35,"rgba(255,255,255,0.3)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),uo=new nl(i),uo}function _e(i,t,e,n=0,s=0,r=0){const o=new Zt(t,e);return o.position.set(n,s,r),i.add(o),o}function Wc(i,t,e,n){const s=new In;return s.position.set(t,e,n),i.add(s),s}function ka(i,t,e=.12){const n=new It(t);return n.offsetHSL(i.range(-.05,.05),i.range(0,.2),i.range(.02,e)),n}class Uv{constructor(t,e,n){var s;if(this.rng=t,this.mech=e.id==="mech",n)this.base=new It().setHSL(t.next(),.85,.62),this.accent=new It().setHSL(t.next(),.9,.68);else if(this.mech)this.base=ka(t,t.pick(["#8a929c","#6a7280","#aab4c0","#7a6552"]),.05),this.accent=new It(t.pick(["#16f0c8","#ffd24f","#ff5a3a"]));else{const r=e.colorStops.map(o=>o[1]);this.base=ka(t,t.pick(r)),this.accent=ka(t,((s=e.discovery)==null?void 0:s.color)||"#ffe97f",.05)}this.glowIntensity=n?.85:.45,this.bodyMat=new En({color:this.base,flatShading:!0,roughness:this.mech?.35:.75,metalness:this.mech?.7:0,emissive:n?this.base:0,emissiveIntensity:n?.4:0}),this.glowMat=new En({color:this.accent,emissive:this.accent,emissiveIntensity:this.glowIntensity,roughness:.4,flatShading:!0})}segmentGeometry(t){return this.mech?new Ue(t*1.7,t*1.4,t*1.9):new fe(t,8,6)}}function Nv(i,t,e){const n=t.pick(e.mech?["segmented","slab","segmented"]:["blob","segmented","tall","blob"]),s=t.range(.35,.6),r=[];if(n==="blob"){const o=_e(i,e.segmentGeometry(s*1.3),e.bodyMat);o.scale.set(t.range(.8,1.3),t.range(.6,1.1),t.range(.9,1.5)),r.push(o)}else if(n==="slab"){const o=_e(i,new Ue(s*2.2,s*1.4,s*3),e.bodyMat);r.push(o)}else if(n==="segmented"){const o=t.int(2,4);for(let a=0;a<o;a++){const c=s*(1-a*.18);r.push(_e(i,e.segmentGeometry(c),e.bodyMat,0,a*.06,-a*c*1.5))}}else{const o=t.int(2,3);for(let a=0;a<o;a++)r.push(_e(i,e.segmentGeometry(s*(1-a*.22)),e.bodyMat,0,a*s*1.4,0))}return{plan:n,radius:s,bodyMeshes:r,frontZ:s*1.2,topY:n==="tall"?s*2.6:s*.8}}function Fv(i,t,e,n){const s=e.mech?[2,4,4,4,6]:[0,2,2,3,4,4,6,8],r=t.pick(s);if(r===0)return{legs:[],legLength:0};const o=t.range(.5,e.mech?1.6:1.3),a=t.range(.04,.09),c=[],u=Math.max(1,Math.floor(r/2));for(let l=0;l<r;l++){const h=l%2===0?-1:1,f=Math.floor(l/2),d=u>1?(f/(u-1)-.5)*n.radius*2.2:0,g=Wc(i,h*n.radius*.8,-n.radius*.3,d);_e(g,new jt(a,a*.7,o,5),e.bodyMat,0,-o/2,0),e.mech&&(_e(g,new fe(a*1.8,6,5),e.glowMat,0,-o/2,0),_e(g,new Ue(a*4,a*1.5,a*5),e.bodyMat,0,-o,a)),c.push(g)}return{legs:c,legLength:o}}function Bv(i,t,e,n){const s=t.chance(.75);let r=n.bodyMeshes[0],o=new R(0,n.radius*.2,n.frontZ*.8);if(s){const a=t.range(0,1.1),c=n.radius*t.range(.45,.7),u=n.topY+a*.8,l=n.frontZ*.7;if(a>.15){const f=_e(i,new jt(c*.4,c*.55,a,5),e.bodyMat,0,n.topY*.6+a/2,l*.8);f.rotation.x=.3}r=_e(i,e.mech?new Ue(c*1.8,c*1.4,c*2):new fe(c,8,6),e.bodyMat,0,u,l),o=new R(0,0,c*.8)}if(e.mech){const a=_e(r,new jt(.1,.12,.06,8),e.glowMat,o.x,o.y,o.z);a.rotation.x=Math.PI/2}else{const a=t.int(1,4),c=t.chance(.4);for(let u=0;u<a;u++){const l=a>1?(u/(a-1)-.5)*.4:0;if(c){const h=_e(r,new jt(.025,.035,.35,4),e.bodyMat,l,o.y+.2,o.z*.6);h.rotation.x=-.4,_e(h,new fe(.07,6,5),e.glowMat,0,.2,0)}else _e(r,new fe(.07,6,5),e.glowMat,l,o.y,o.z)}}}function Ov(i,t,e,n,s){const r={wings:null,pulse:null,spin:null,jitterParts:null,legsExtra:[]},o=["tail","horns","antennae","wings","spines","growth"];s==="float"&&o.push("tentacles","tentacles");const a=t.int(1,3);for(let c=0;c<a;c++)switch(t.pick(o)){case"tail":{const u=t.int(2,4);for(let l=0;l<u;l++){const h=n.radius*(.5-l*.1);if(h<=.05)break;_e(i,e.segmentGeometry(h),e.bodyMat,0,n.radius*.1+l*.05,-n.frontZ-(l+1)*h*1.6)}break}case"horns":{const u=t.int(1,2);for(let l=0;l<u;l++)for(const h of[-1,1]){const f=_e(i,new un(.06,t.range(.25,.6),5),e.mech?e.glowMat:e.bodyMat,h*(.15+l*.12),n.topY+.15,n.frontZ*.4);f.rotation.z=-h*.5}break}case"antennae":{for(const u of[-1,1]){const l=_e(i,new jt(.02,.03,.6,4),e.bodyMat,u*.12,n.topY+.25,n.frontZ*.3);l.rotation.z=-u*.35,_e(l,new fe(.06,5,4),e.glowMat,0,.33,0)}break}case"wings":{r.wings=[];for(const u of[-1,1]){const l=Wc(i,u*n.radius*.7,n.topY*.6,0),h=e.mech?e.bodyMat:new En({color:e.accent,emissive:e.accent,emissiveIntensity:.4,transparent:!0,opacity:.8,flatShading:!0,side:Mn});_e(l,new Ue(t.range(.5,.9),.03,t.range(.3,.55)),h,u*.3,0,0),r.wings.push({pivot:l,side:u})}break}case"spines":{const u=t.int(3,5);for(let l=0;l<u;l++)_e(i,new un(.07,t.range(.2,.45),4),e.glowMat,0,n.topY*.9,n.frontZ-l*(n.frontZ*2.2)/u);break}case"tentacles":{const u=t.int(3,5);for(let l=0;l<u;l++){const h=l/u*Math.PI*2,f=Wc(i,Math.cos(h)*n.radius*.5,-n.radius*.4,Math.sin(h)*n.radius*.5);_e(f,new jt(.035,.015,t.range(.5,.9),4),e.bodyMat,0,-.35,0),r.legsExtra.push(f)}break}case"growth":{const u=e.mech?new jt(.07,.09,.45,6):t.pick([new Ni(.14,0),new fe(.12,6,5),new un(.1,.3,5),new Ue(.16,.16,.16)]),l=t.int(2,4);for(let h=0;h<l;h++)_e(i,u.clone(),e.glowMat,t.range(-.3,.3),n.topY*t.range(.6,1.1),t.range(-n.frontZ,n.frontZ));u.dispose();break}}return r}function pf(i,t){const e=Lv.get(i)||cl[0],n=al(t),s=n.chance(.1),r=new Uv(n,e,s),o=new In,a=Nv(o,n,r),{legs:c,legLength:u}=Fv(o,n,r,a);let l,h;if(c.length>0)l="walk",h=n.range(1.5,3.5);else if(n.chance(.45)&&!r.mech){l="hop",h=n.range(2.4,3.6);for(const p of[-1,1])_e(o,new fe(a.radius*.55,7,5),r.bodyMat,p*a.radius*.8,-a.radius*.3,-a.radius*.4)}else l="float",h=n.range(1.4,2.8);Bv(o,n,r,a);const f=Ov(o,n,r,a,l),d=[...c,...f.legsExtra];let g=null;!r.mech&&n.chance(.45)&&(g=a.bodyMeshes[0]);let v=null;if(e.id==="glitch"&&(v=a.bodyMeshes.slice(1),v.length===0&&(v=null)),s){const p=new tl(new Vo({map:Dv(),color:r.accent,transparent:!0,blending:Di,depthWrite:!1}));p.scale.setScalar(2.6),o.add(p)}const m=l==="float"?.5:u+a.radius*.5+.1;return o.userData={mode:l,speed:h,bodyHeight:Math.max(m,.35),legs:d,wings:f.wings,pulse:g,spin:null,jitterParts:v,radiant:s},{root:o,rng:n,radiant:s}}function mf(i,t,e,n,s){if(t.phase+=e*s*2.2,i.legs&&i.legs.forEach((r,o)=>{r.rotation.x=Math.sin(t.phase+o%2*Math.PI)*.55}),i.wings)for(const{pivot:r,side:o}of i.wings)r.rotation.z=o*(.4+Math.sin(n*10+t.phase)*.5);if(i.pulse&&(i.pulse.scale.y=i.pulse.scale.y*.9+(.7+Math.sin(n*3+t.phase)*.08)*.1),i.spin&&(i.spin.rotation.y+=e*1.5),i.jitterParts&&(t.jitterTimer-=e,t.jitterTimer<=0)){t.jitterTimer=.25;for(const r of i.jitterParts)r.position.x+=(Math.random()-.5)*.2,r.position.y+=(Math.random()-.5)*.2,r.position.z+=(Math.random()-.5)*.2,r.position.clampLength(0,.6)}}class pl{constructor(t,e,n={}){this.seed=e,this.speciesIndex=n.speciesIndex??-1,this.tame=!!n.tame;const s=n.typeId||t.type.id,{root:r}=pf(s,e);this.root=r,this.meta=r.userData,this.scale=n.scale||t.rng.range(.75,1.3),r.scale.setScalar(this.scale),this.bodyHeight=this.meta.bodyHeight*this.scale,this.speed=this.meta.speed*t.rng.range(.85,1.2);const o=t.type.liquid&&t.type.liquidClass!=="solid"&&this.meta.mode!=="float"?t.type.liquid.level+.04:0,a=t.randomSurfacePoint(o,1)||{direction:new R(0,1,0)};this.direction=a.direction.clone(),this.heading=new R().randomDirection().cross(this.direction).normalize(),this.heading.lengthSq()<.5&&this.heading.set(1,0,0),this.phase=t.rng.range(0,Math.PI*2),this.turnPhase=t.rng.range(0,Math.PI*2),this.anim={phase:this.phase,jitterTimer:0},t.group.add(this.root)}update(t,e,n,s,r){const o=this.meta;let a=this.speed;if(s){const g=this.root.position.clone().sub(s),v=g.lengthSq();if(((r==null?void 0:r.luring)||this.tame)&&v<196&&v>4){const p=g.negate();p.addScaledVector(this.direction,-p.dot(this.direction)),p.lengthSq()>1e-4&&this.heading.copy(p.normalize())}else!this.tame&&!(r!=null&&r.noFlee)&&!(r!=null&&r.luring)&&o.mode!=="float"&&v<49&&(g.addScaledVector(this.direction,-g.dot(this.direction)),g.lengthSq()>1e-4&&this.heading.copy(g.normalize()),a*=2.2)}this.heading.applyAxisAngle(this.direction,Math.sin(e*.6+this.turnPhase)*.9*t);let c=a;o.mode==="hop"&&(c*=Math.max(.1,Math.sin(e*4+this.phase)));const u=c*t/n.radius,l=this.direction.clone().multiplyScalar(Math.cos(u)).addScaledVector(this.heading,Math.sin(u)).normalize();n.type.liquid&&n.type.liquidClass!=="solid"&&o.mode!=="float"&&n.groundRadiusLocal(l)+.6<n.liquidRadius()?this.heading.negate():(this.direction.copy(l),this.heading.addScaledVector(this.direction,-this.heading.dot(this.direction)).normalize());let f=this.bodyHeight;o.mode==="hop"&&(f+=Math.max(0,Math.sin(e*4+this.phase))*1.2),o.mode==="float"&&(f+=2+Math.sin(e*1.4+this.phase)*.5),this.root.position.copy(this.direction).multiplyScalar(n.groundRadiusLocal(this.direction)+f);const d=new R().crossVectors(this.direction,this.heading);this.root.quaternion.setFromRotationMatrix(new Nt().makeBasis(d,this.direction,this.heading)),mf(this.meta,this.anim,t,e,a)}}pe.prototype.computeBoundsTree=Tv;pe.prototype.disposeBoundsTree=wv;Zt.prototype.raycast=Ev;const Wa=new ur,zv=400,Vv=5,Hv=4,Gv=8;let ho=null;function kv(){if(ho)return ho;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.4,"rgba(255,255,255,0.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),ho=new nl(i),ho}const ch={vertexShader:`
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
  `},lh={shard:()=>new ko(.55,0).scale(1,1.6,1),pearl:()=>new fe(.45,10,8),orb:()=>new Ln(.5,1),star:()=>new Ni(.55,0),gem:()=>new Ni(.45,0).scale(1,1.5,1),seed:()=>new un(.35,.9,6),cube:()=>new Ue(.6,.6,.6),gear:()=>new bs(.42,.16,6,9)};function Wv(i,t,e,n,s){switch(i){case"ridged":{let r=0,o=.6,a=s;for(let c=0;c<4;c++){const u=1-Math.abs(e(n.x*a,n.y*a,n.z*a));r+=u*u*o,o*=.5,a*=2.1}return Math.min(1,r*.9)}case"dunes":return .35+.32*Math.abs(Math.sin(t*4))+t*.18;case"terraced":{const r=.5+t*.5,o=6;return Math.floor(r*o)/o+(r*o-Math.floor(r*o))*.25/o}case"glitch":{const r=.5+t*.5,o=8;return Math.floor(r*o)/o+.06}case"gentle":return .5+t*.32;case"smooth":default:return .5+t*.5}}class uh{constructor(t,e){this.type=t,this.radius=e.radius,this.orbitRadius=e.orbitRadius,this.orbitSpeed=e.orbitSpeed,this.orbitAngle=e.orbitPhase,this.inclination=e.inclination,this.spinAxis=e.spinAxis,this.spinSpeed=e.spinSpeed,this.spinAngle=0,this.visited=!1,this.rng=al(e.seed),this.name=e.name||xx(this.rng,e.orbitIndex),this.noise3D=Mx(this.rng.next),this.noiseOffset=new R(this.rng.range(-50,50),this.rng.range(-50,50),this.rng.range(-50,50)),this.group=new In,this.prevCenter=new R,this.prevQuaternion=new fn,this.deltaQuaternion=new fn,this.collectibles=[],this.collectedCount=0,this.creatures=[],this.species=[],this.baits=[],this.buildTerrain(),this.buildLiquid(),this.buildAtmosphere(),this.buildProps(),this.buildCollectibles(),this.buildCreatures(),this.buildBait(),this.buildParticles(),this.applyOrbitTransform()}rawNoise(t){const e=this.type.noiseFrequency,n=this.noiseOffset;let s=0,r=.55,o=e;for(let a=0;a<4;a++)s+=r*this.noise3D(t.x*o+n.x,t.y*o+n.y,t.z*o+n.z),r*=.5,o*=2;return s}elevationAt(t){const e=this.rawNoise(t);let n=Wv(this.type.shape,e,this.noise3D,t,this.type.noiseFrequency);const s=this.type.liquid;return s&&s.basin&&n<s.level&&(n=s.level-(s.level-n)*s.basin),wo.clamp(n,0,1)}surfaceRadiusFor(t){return this.radius*(1+this.type.amplitude*(t*2-1))}groundRadiusLocal(t){const e=this.radius*(1+this.type.amplitude)+6;Wa.origin.copy(t).multiplyScalar(e),Wa.direction.copy(t).negate();const n=this.terrain.geometry.boundsTree.raycastFirst(Wa);let s=n?n.point.length():this.surfaceRadiusFor(this.elevationAt(t));return this.type.liquidClass==="solid"&&this.type.liquid&&(s=Math.max(s,this.liquidRadius())),s}heightAtWorldDirection(t){const e=t.clone().applyQuaternion(this.group.quaternion.clone().invert()).normalize();return this.groundRadiusLocal(e)}liquidRadius(){return this.type.liquid?this.surfaceRadiusFor(this.type.liquid.level):0}colorForElevation(t){const e=this.type.colorStops;let n=e[0][1];for(const[s,r]of e)t>=s&&(n=r);return new It(n)}buildTerrain(){const t=new Ln(this.radius,Vv),e=t.attributes.position,n=new R,s=new Float32Array(e.count);for(let a=0;a<e.count;a++){n.fromBufferAttribute(e,a).normalize();const c=this.elevationAt(n);s[a]=c,n.multiplyScalar(this.surfaceRadiusFor(c)),e.setXYZ(a,n.x,n.y,n.z)}const r=new Float32Array(e.count*3),o=new It;for(let a=0;a<e.count;a+=3){const c=(s[a]+s[a+1]+s[a+2])/3;o.copy(this.colorForElevation(c));const u=this.rng.range(.94,1.06);o.multiplyScalar(u);for(let l=0;l<3;l++)o.toArray(r,(a+l)*3)}t.setAttribute("color",new ve(r,3)),t.computeVertexNormals(),t.computeBoundsTree(),this.terrain=new Zt(t,new En({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0})),this.group.add(this.terrain)}buildLiquid(){const t=this.type.liquid;if(!t)return;const e=new Ln(this.liquidRadius(),Hv),n=e.attributes.position,s=new R;for(let o=0;o<n.count;o++){s.fromBufferAttribute(n,o);const a=1+this.noise3D(s.x*.3,s.y*.3,s.z*.3)*.004;n.setXYZ(o,s.x*a,s.y*a,s.z*a)}e.computeVertexNormals();const r=new En({color:t.color,transparent:t.opacity<1,opacity:t.opacity,flatShading:!0,roughness:.25,metalness:.1,emissive:t.emissive,emissiveIntensity:t.emissiveIntensity});this.group.add(new Zt(e,r))}buildAtmosphere(){const t=new fe(this.radius*1.25,32,24),e=new Kn({uniforms:{glowColor:{value:new It(this.type.atmosphere)}},vertexShader:ch.vertexShader,fragmentShader:ch.fragmentShader,side:Ge,blending:Di,transparent:!0,depthWrite:!1});this.group.add(new Zt(t,e))}randomSurfacePoint(t,e,n=30){const s=new R;for(let r=0;r<n;r++){if(s.set(this.rng.range(-1,1),this.rng.range(-1,1),this.rng.range(-1,1)),s.lengthSq()<.01)continue;s.normalize();const o=this.elevationAt(s);if(o>=t&&o<=e)return{direction:s.clone(),elevation:o}}return null}buildProps(){const t=new R(0,1,0),e=new Nt,n=new fn,s=new fn,r=new R,o=new R;for(const a of this.type.props){const c=Pv(a.builder,this.rng,a),u=new En({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0});Iv(a.builder)&&(u.emissive=new It(a.glow||a.tint||"#888888"),u.emissiveIntensity=.55);const l=new G_(c,u,a.count);let h=0;for(let f=0;f<a.count;f++){const d=this.randomSurfacePoint(a.minE,a.maxE);if(!d)continue;o.copy(d.direction).multiplyScalar(this.groundRadiusLocal(d.direction)-.08),n.setFromUnitVectors(t,d.direction),s.setFromEuler(new bn(this.rng.range(-.06,.06),this.rng.range(0,Math.PI*2),this.rng.range(-.06,.06))),n.multiply(s);const g=this.rng.range(.7,1.4);r.set(g,g,g),e.compose(o,n,r),l.setMatrixAt(h++,e)}l.count=h,this.group.add(l)}}buildCollectibles(){const t=this.type.discovery;if(!t)return;const e=lh[t.shape]||lh.gem,n=new En({color:t.color,emissive:t.color,emissiveIntensity:1.4,roughness:.3}),s=new Vo({map:kv(),color:t.color,transparent:!0,blending:Di,depthWrite:!1}),r=this.type.liquid?this.type.liquid.level+.02:0;for(let o=0;o<Gv;o++){const a=this.randomSurfacePoint(r,1);if(!a)continue;const c=new Zt(e(),n),u=new tl(s);u.scale.setScalar(3.2),c.add(u);const l=this.groundRadiusLocal(a.direction)+1.1;c.position.copy(a.direction).multiplyScalar(l),this.group.add(c),this.collectibles.push({mesh:c,direction:a.direction,baseRadius:l,phase:this.rng.range(0,Math.PI*2),name:vx(this.rng,t),collected:!1})}}buildCreatures(){const t=this.type.creature;if(!t)return;const e=this.rng.int(2,3),n=new Set;for(let s=0;s<e;s++){const r=this.rng.int(0,268435455);let o=`${this.rng.pick(t.prefixes)} ${this.rng.pick(t.suffixes)}`;for(let u=0;n.has(o)&&u<8;u++)o=`${this.rng.pick(t.prefixes)} ${this.rng.pick(t.suffixes)}`;n.add(o);const a=this.rng.int(2,3);let c=!1;for(let u=0;u<a;u++){const l=new pl(this,r,{speciesIndex:s});c=l.meta.radiant,this.creatures.push(l)}this.species.push({seed:r,name:c?`Radiant ${o}`:o,scanned:!1,radiant:c})}}buildBait(){if(!this.type.discovery)return;const t=this.type.discovery.color,e=new En({color:t,emissive:t,emissiveIntensity:.9,roughness:.4,metalness:this.type.baitKind==="scrap"?.6:0}),n=this.type.liquid&&this.type.liquidClass!=="solid"?this.type.liquid.level+.02:0;for(let s=0;s<10;s++){const r=this.randomSurfacePoint(n,1);if(!r)continue;const o=this.type.baitKind==="scrap"?new bs(.22,.09,5,7):new fe(.28,8,6),a=new Zt(o,e);a.scale.y=.75;const c=this.groundRadiusLocal(r.direction)+.5;a.position.copy(r.direction).multiplyScalar(c),this.group.add(a),this.baits.push({mesh:a,direction:r.direction,baseRadius:c,phase:this.rng.range(0,Math.PI*2),collected:!1})}}buildParticles(){const t=this.type.particles;if(!t)return;const e=new Float32Array(t.count*3),n=new R;for(let o=0;o<t.count;o++)n.set(this.rng.range(-1,1),this.rng.range(-1,1),this.rng.range(-1,1)).normalize(),n.multiplyScalar(this.radius+this.rng.range(1,t.height+this.radius*this.type.amplitude*2)),n.toArray(e,o*3);const s=new pe;s.setAttribute("position",new ve(e,3));const r=new el({color:t.color,size:t.size,transparent:!0,opacity:.8,blending:Di,depthWrite:!1,sizeAttenuation:!0});this.group.add(new Go(s,r))}get center(){return this.group.position}applyOrbitTransform(){const t=this.orbitAngle;this.group.position.set(Math.cos(t)*this.orbitRadius,Math.sin(t)*this.orbitRadius*Math.sin(this.inclination),Math.sin(t)*this.orbitRadius*Math.cos(this.inclination)),this.group.quaternion.setFromAxisAngle(this.spinAxis,this.spinAngle)}update(t,e,n,s){this.prevCenter.copy(this.group.position),this.prevQuaternion.copy(this.group.quaternion),this.orbitAngle+=this.orbitSpeed*t,this.spinAngle+=this.spinSpeed*t,this.applyOrbitTransform(),this.deltaQuaternion.copy(this.group.quaternion).multiply(this.prevQuaternion.clone().invert());for(const r of this.collectibles){if(r.collected)continue;const o=Math.sin(e*1.8+r.phase)*.35;r.mesh.position.copy(r.direction).multiplyScalar(r.baseRadius+o),r.mesh.rotation.y=e*1.2+r.phase}for(const r of this.baits)r.collected||r.mesh.position.copy(r.direction).multiplyScalar(r.baseRadius+Math.sin(e*2.2+r.phase)*.15);if(n&&n.distanceTo(this.group.position)<zv){const r=n.clone().sub(this.group.position).applyQuaternion(this.group.quaternion.clone().invert());for(const o of this.creatures)o.update(t,e,this,r,s)}}tryCollect(t,e=2.4){const n=new R;for(const s of this.collectibles)if(!s.collected&&(s.mesh.getWorldPosition(n),n.distanceToSquared(t)<e*e))return s.collected=!0,this.collectedCount++,this.group.remove(s.mesh),s.mesh.geometry.dispose(),s.name;return null}tryScan(t,e=5){const n=new R;for(const s of this.creatures){const r=this.species[s.speciesIndex];if(!(!r||r.scanned)&&(s.root.getWorldPosition(n),n.distanceToSquared(t)<e*e))return r.scanned=!0,r.name}return null}tryPickupBait(t,e=2.2){const n=new R;for(const s of this.baits)if(!s.collected&&(s.mesh.getWorldPosition(n),n.distanceToSquared(t)<e*e))return s.collected=!0,this.group.remove(s.mesh),s.mesh.geometry.dispose(),!0;return!1}tryTame(t,e=2.8){if(!this.type.creature)return null;const n=new R;for(let s=0;s<this.creatures.length;s++){const r=this.creatures[s],o=this.species[r.speciesIndex];if(o&&(r.root.getWorldPosition(n),n.distanceToSquared(t)<e*e))return this.creatures.splice(s,1),this.group.remove(r.root),r.root.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),{seed:r.seed,typeId:this.type.id,species:o.name,origin:this.name,scale:r.scale,radiant:o.radiant}}return null}pulseNearestArtifact(t,e){const n=new R;let s=null,r=1/0;for(const o of this.collectibles){if(o.collected)continue;o.mesh.getWorldPosition(n);const a=n.distanceToSquared(t);a<r&&(r=a,s=o)}for(const o of this.collectibles){if(o.collected)continue;const a=o.mesh.children[0];a&&a.scale.setScalar(o===s?4+(Math.sin(e*5)+1)*3:3.2)}}totalDiscoveryCount(){return this.collectibles.length+this.species.length}discoveredCount(){return this.collectedCount+this.species.filter(t=>t.scanned).length}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose())})}}const Xa=8,hh=130,Xv=85;class gf{constructor(t,e){this.scene=t,this.seed=e,this.planets=[],this.group=new In,t.add(this.group),this.generate()}generate(){const t=al(this.seed),e=[...cl];for(let s=e.length-1;s>0;s--){const r=t.int(0,s);[e[s],e[r]]=[e[r],e[s]]}const n=e.findIndex(s=>s.id==="mech");if(n>=Xa){const s=t.int(0,Xa-1);[e[s],e[n]]=[e[n],e[s]]}for(let s=0;s<Xa;s++){const r=e[s%e.length],o=new R(t.range(-.25,.25),1,t.range(-.25,.25)).normalize(),a=hh+s*Xv+t.range(-15,15),c=new uh(r,{seed:t.int(0,268435455),radius:t.range(17,28),orbitRadius:a,orbitSpeed:t.range(.008,.02)*(t.chance(.25)?-1:1)*Math.sqrt(hh/a),orbitPhase:t.range(0,Math.PI*2),orbitIndex:s,inclination:t.range(-.18,.18),spinAxis:o,spinSpeed:t.range(.015,.045)});this.planets.push(c),this.group.add(c.group)}this.sanctuaryPlanet=new uh(cf,{seed:t.int(0,268435455),radius:13,orbitRadius:80,orbitSpeed:.025,orbitPhase:t.range(0,Math.PI*2),orbitIndex:0,inclination:.35,spinAxis:new R(.1,1,.1).normalize(),spinSpeed:.03,name:"Haven"}),this.planets.push(this.sanctuaryPlanet),this.group.add(this.sanctuaryPlanet.group)}update(t,e,n,s){for(const r of this.planets)r.update(t,e,n,s)}nearestPlanetTo(t){let e=null,n=1/0;for(const s of this.planets){const r=t.distanceTo(s.center)-s.radius;r<n&&(n=r,e=s)}return e}totalDiscoveries(){return this.planets.reduce((t,e)=>t+e.totalDiscoveryCount(),0)}dispose(){for(const t of this.planets)t.dispose();this.scene.remove(this.group),this.planets=[]}}function qv(i=128){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=i/2,s=e.createRadialGradient(n,n,0,n,n,n);return s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.25,"rgba(255,235,190,0.55)"),s.addColorStop(.6,"rgba(255,200,120,0.12)"),s.addColorStop(1,"rgba(255,180,80,0)"),e.fillStyle=s,e.fillRect(0,0,i,i),new nl(t)}function Yv(i){const e=new Float32Array(7200),n=new Float32Array(2400*3),s=new It;for(let h=0;h<2400;h++){const f=new R().randomDirection();f.multiplyScalar(2600+Math.random()*1400),f.toArray(e,h*3),s.setHSL(Math.random()<.12?.6:Math.random()<.5?.12:0,.4*Math.random(),.7+Math.random()*.3),s.toArray(n,h*3)}const r=new pe;r.setAttribute("position",new ve(e,3)),r.setAttribute("color",new ve(n,3));const o=new Go(r,new el({size:2.4,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));i.add(o);const a=38,c=new Zt(new Ln(a,3),new ar({color:"#ffdd66"}));i.add(c);const u=new tl(new Vo({map:qv(),color:"#ffcf7f",transparent:!0,blending:Di,depthWrite:!1}));u.scale.setScalar(a*7),c.add(u);const l=new of("#fff2dd",2.4,0,0);return i.add(l),i.add(new dx("#5a6a9a",.55)),{sunRadius:a}}let Et=null,sr=null,fs=null;function $v(){if(Et)return Et;Et=new(window.AudioContext||window.webkitAudioContext);const i=Et.createBuffer(1,Et.sampleRate*2,Et.sampleRate),t=i.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;const e=Et.createBufferSource();return e.buffer=i,e.loop=!0,fs=Et.createBiquadFilter(),fs.type="bandpass",fs.frequency.value=400,fs.Q.value=.8,sr=Et.createGain(),sr.gain.value=0,e.connect(fs).connect(sr).connect(Et.destination),e.start(),Et}function Zv(){$v(),Et.state==="suspended"&&Et.resume()}function Kv(){if(!Et)return;const i=Et.currentTime;[880,1174.66,1567.98].forEach((e,n)=>{const s=Et.createOscillator(),r=Et.createGain();s.type="triangle",s.frequency.value=e;const o=i+n*.07;r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(.18,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+.45),s.connect(r).connect(Et.destination),s.start(o),s.stop(o+.5)})}function ml(){if(!Et)return;const i=Et.currentTime,t=Et.createOscillator(),e=Et.createGain();t.type="sawtooth",t.frequency.setValueAtTime(120,i),t.frequency.exponentialRampToValueAtTime(900,i+.5),e.gain.setValueAtTime(1e-4,i),e.gain.exponentialRampToValueAtTime(.1,i+.05),e.gain.exponentialRampToValueAtTime(1e-4,i+.7),t.connect(e).connect(Et.destination),t.start(i),t.stop(i+.8)}function Jv(){if(!Et)return;const i=Et.currentTime,t=Math.floor(Et.sampleRate*.4),e=Et.createBuffer(1,t,Et.sampleRate),n=e.getChannelData(0);for(let a=0;a<t;a++)n[a]=(Math.random()*2-1)*(1-a/t);const s=Et.createBufferSource();s.buffer=e;const r=Et.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1200,i),r.frequency.exponentialRampToValueAtTime(300,i+.35);const o=Et.createGain();o.gain.value=.25,s.connect(r).connect(o).connect(Et.destination),s.start(i)}function jv(){if(!Et)return;const i=Et.currentTime,t=Et.createOscillator(),e=Et.createGain();t.type="square",t.frequency.setValueAtTime(160,i),t.frequency.exponentialRampToValueAtTime(60,i+.25),e.gain.setValueAtTime(.18,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.3),t.connect(e).connect(Et.destination),t.start(i),t.stop(i+.35)}function Qv(){if(!Et)return;const i=Et.currentTime;[523.25,783.99].forEach((t,e)=>{const n=Et.createOscillator(),s=Et.createGain();n.type="sine",n.frequency.value=t;const r=i+e*.09;s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.15,r+.02),s.gain.exponentialRampToValueAtTime(1e-4,r+.4),n.connect(s).connect(Et.destination),n.start(r),n.stop(r+.45)})}function _f(){if(!Et)return;const i=Et.currentTime,t=Et.createOscillator(),e=Et.createGain();t.type="sine",t.frequency.setValueAtTime(620,i),t.frequency.exponentialRampToValueAtTime(980,i+.08),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.18),t.connect(e).connect(Et.destination),t.start(i),t.stop(i+.2)}function ty(){if(!Et)return;const i=Et.currentTime;[392,493.88,587.33,783.99].forEach((t,e)=>{const n=Et.createOscillator(),s=Et.createGain();n.type="triangle",n.frequency.value=t;const r=i+e*.09;s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.16,r+.02),s.gain.exponentialRampToValueAtTime(1e-4,r+.5),n.connect(s).connect(Et.destination),n.start(r),n.stop(r+.55)})}function ey(i,t){if(!Et||!sr)return;const e=Et.currentTime,n=i?t?.12:.06:0,s=t?900:420;sr.gain.setTargetAtTime(n,e,.08),fs.frequency.setTargetAtTime(s,e,.15)}const ny=9,iy=15,fh=15,sy=42,ry=1.35,oy=5,ay=58,cy=30,ly=2.4,uy=40,hy=100,Ks=1,fy=1.6,fo=100,dy=12,py=2.2,my=6,dh=35,gy=6.5,_y=24,ph=16,xy=9,mh=.35,vy=24;class yy{constructor(t){this.scene=t,this.position=new R,this.velocity=new R,this.up=new R(0,1,0),this.facing=new R(0,0,-1),this.grounded=!1,this.planet=null,this.walkCycle=0,this.jetting=!1,this.swimming=!1,this.fuel=fo,this.treats=0,this.scrap=0,this.luring=!1,this.perks={},this.keys={},this.jumpQueued=!1,window.addEventListener("keydown",e=>{e.code==="Space"&&!this.keys.Space&&(this.jumpQueued=!0),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.buildCharacter(),this.buildShadow()}get fuelFraction(){return this.fuel/fo}buildCharacter(){const t=new En({color:"#f0f2f5",roughness:.6}),e=new En({color:"#ff8c3a",roughness:.5}),n=new En({color:"#1a2a4a",roughness:.15,metalness:.4});this.character=new In;const s=new Zt(new Io(.34,.42,4,10),t);s.position.y=.78,this.character.add(s);const r=new Zt(new fe(.3,14,10),t);r.position.y=1.32,this.character.add(r);const o=new Zt(new fe(.24,12,8),n);o.position.set(0,1.34,.14),o.scale.set(1,.8,.75),this.character.add(o);const a=new Zt(new Ue(.44,.54,.26),e);a.position.set(0,.85,-.34),this.character.add(a),this.jetGlow=new Zt(new un(.14,.7,7),new ar({color:"#7fd0ff",transparent:!0,opacity:0})),this.jetGlow.position.set(0,.35,-.34),this.jetGlow.rotation.x=Math.PI,this.character.add(this.jetGlow),this.limbs=[];const c=new Io(.09,.32,3,6),u=[{x:-.15,y:.42,arm:!1},{x:.15,y:.42,arm:!1},{x:-.42,y:1,arm:!0},{x:.42,y:1,arm:!0}];for(const h of u){const f=new In;f.position.set(h.x,h.y,0);const d=new Zt(c,h.arm?t:e);d.position.y=-.24,f.add(d),this.character.add(f),this.limbs.push({pivot:f,arm:h.arm,side:Math.sign(h.x)})}const l=new of("#bfd4ff",18,30,1.6);l.position.y=2.2,this.character.add(l),this.scene.add(this.character)}buildShadow(){this.shadow=new Zt(new ol(.85,20),new ar({color:"#000000",transparent:!0,opacity:.3,depthWrite:!1})),this.shadow.geometry.rotateX(-Math.PI/2),this.shadow.renderOrder=1,this.scene.add(this.shadow)}spawnOn(t){this.planet=t;const e=new R(0,1,0).applyQuaternion(t.group.quaternion),n=t.heightAtWorldDirection(e);this.position.copy(t.center).addScaledVector(e,n+Ks),this.velocity.set(0,0,0),this.up.copy(e),this.grounded=!0}rescueTo(t){const e=new R().subVectors(this.position,t.center).normalize();e.lengthSq()<.5&&e.set(0,1,0);const n=t.heightAtWorldDirection(e);this.position.copy(t.center).addScaledVector(e,n+Ks+4),this.velocity.set(0,0,0),this.grounded=!1}applyPlanetCarry(t){const e=this.position.distanceTo(t.prevCenter),n=t.radius*(1+t.type.amplitude);if(!this.grounded&&e>n*fy)return;const s=this.position.clone().sub(t.prevCenter).applyQuaternion(t.deltaQuaternion);this.position.copy(t.center).add(s),this.velocity.applyQuaternion(t.deltaQuaternion),this.up.applyQuaternion(t.deltaQuaternion),this.facing.applyQuaternion(t.deltaQuaternion)}update(t,e,n,s){this.planet=s.nearestPlanetTo(this.position);const r=this.planet;r&&this.applyPlanetCarry(r);const o=new R().subVectors(r.center,this.position);let a=o.length();this.up.copy(o).multiplyScalar(-1/a);const c=r.type.baitKind==="scrap"?this.scrap:this.treats;this.luring=!!this.keys.KeyF&&c>0;const u=!!(this.keys.ShiftLeft||this.keys.ShiftRight),l=e.clone().addScaledVector(this.up,-e.dot(this.up));l.lengthSq()<1e-6&&l.set(1,0,0),l.normalize();const h=new R().crossVectors(l,this.up);let f=0,d=0;(this.keys.KeyW||this.keys.ArrowUp)&&(d+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(d-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(f+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(f-=1);const g=r.type.liquid,v=r.type.liquidClass,m=g?r.liquidRadius():0,p=g?r.heightAtWorldDirection(this.up):0,x=!!g&&p+1.2<m;if(v==="hazard"&&x&&a<m+.4){this.position.copy(r.center).addScaledVector(this.up,m+.6),a=m+.6;const A=this.velocity.dot(this.up);this.velocity.addScaledVector(this.up,-A+vy),this.grounded=!1,jv()}const M=this.swimming;if(this.swimming=v==="swim"&&x&&a<m+mh,this.swimming&&!M&&Jv(),this.jetting=!1,this.swimming){this.grounded=!1,this.fuel=Math.min(fo,this.fuel+dh*.6*(this.perks.rechargeMult||1)*t);const A=new R().addScaledVector(l,d).addScaledVector(h,f),S=this.perks.swimMult||1,y=A.lengthSq()>0;y&&(A.normalize(),this.velocity.addScaledVector(A,_y*S*t),this.facing.copy(A));const P=a>m-.2;this.keys.Space&&(P&&this.jumpQueued?(this.velocity.addScaledVector(this.up,fh*.85),this.swimming=!1):this.velocity.addScaledVector(this.up,ph*t)),this.keys.KeyC&&this.velocity.addScaledVector(this.up,-ph*t);const L=m+mh-a;L>.5&&!this.keys.KeyC&&this.velocity.addScaledVector(this.up,Math.min(L,1.5)*xy*t),this.velocity.multiplyScalar(Math.exp(-1.6*t));const D=gy*2*S;this.velocity.length()>D&&this.velocity.setLength(D),this.walkCycle+=t*(y?7:2)}else if(this.grounded){this.fuel=Math.min(fo,this.fuel+dh*(this.perks.rechargeMult||1)*t);const A=new R().addScaledVector(l,d).addScaledVector(h,f),S=A.lengthSq()>0;S&&A.normalize();const y=u?iy*(this.perks.runMult||1):ny;this.velocity.copy(A).multiplyScalar(S?y:0),S&&this.facing.copy(A),this.walkCycle+=t*(S?y*1.4:0),this.jumpQueued&&(this.velocity.addScaledVector(this.up,fh*(this.perks.jumpMult||1)),this.grounded=!1)}else{let A=Math.max(sy*Math.min(1.5,(r.radius/a)**ry),oy);this.perks.gravityMult&&this.velocity.dot(this.up)<0&&(A*=this.perks.gravityMult),this.velocity.addScaledVector(this.up,-A*t);const S=u?ly:1;let y=0;if(this.keys.Space&&this.fuel>0&&(this.jetting=!0,this.velocity.addScaledVector(this.up,ay*(this.perks.jetMult||1)*S*t),y+=dy*(u?py:1)),(f!==0||d!==0)&&this.fuel>0){const L=n.getWorldDirection(new R),D=new R().addScaledVector(L,d).addScaledVector(h,f).normalize().multiplyScalar(cy*S*t);this.velocity.add(D),y+=my,this.facing.copy(L).addScaledVector(this.up,-L.dot(this.up)),this.facing.lengthSq()>1e-6&&this.facing.normalize()}this.fuel=Math.max(0,this.fuel-y*(this.perks.burnMult||1)*t),this.velocity.multiplyScalar(Math.exp(-.06*t));const P=u?hy*(this.perks.boostCapMult||1):uy;this.velocity.length()>P&&this.velocity.setLength(P)}this.jumpQueued=!1,this.position.addScaledVector(this.velocity,t);const _=new R().subVectors(this.position,r.center),T=_.length(),b=_.divideScalar(T),E=r.heightAtWorldDirection(b)+Ks;if(this.grounded)if(T<E+.6){this.position.copy(r.center).addScaledVector(b,E);const A=this.velocity.dot(b);this.velocity.addScaledVector(b,-A)}else this.grounded=!1;else if(T<E){this.position.copy(r.center).addScaledVector(b,E);const A=this.velocity.dot(b);A<0&&this.velocity.addScaledVector(b,-A),this.grounded=!this.swimming}ey(this.jetting,u),this.updateVisuals(t,r,E,u)}updateVisuals(t,e,n,s){this.character.position.copy(this.position).addScaledVector(this.up,-Ks);const r=this.facing.clone().addScaledVector(this.up,-this.facing.dot(this.up));r.lengthSq()<1e-6&&r.set(0,0,1),r.normalize();const o=new R().crossVectors(this.up,r),a=new fn().setFromRotationMatrix(new Nt().makeBasis(o,this.up,r));this.character.quaternion.slerp(a,1-Math.exp(-12*t));const c=this.grounded?.55:.2;for(const{pivot:h,arm:f,side:d}of this.limbs){const g=f?this.walkCycle+d*Math.PI:this.walkCycle+(d>0?Math.PI:0);h.rotation.x=Math.sin(g)*c}this.jetGlow.material.opacity=this.jetting?s?.95:.6:Math.max(0,this.jetGlow.material.opacity-t*4),this.jetGlow.scale.y=s?1.8:1;const u=this.position.distanceTo(e.center)-n,l=Math.max(0,.32*(1-u/8));if(this.shadow.visible=l>.01,this.shadow.visible){const h=new R().subVectors(this.position,e.center).normalize(),f=e.center.clone().addScaledVector(h,n-Ks+.1);this.shadow.position.copy(f),this.shadow.quaternion.setFromUnitVectors(new R(0,1,0),h),this.shadow.material.opacity=l}}}const gh=.0024,My=-.6,Sy=1.25,Ey=4,by=20;class Ty{constructor(t,e){this.camera=t,this.forward=new R(0,0,-1),this.pitch=.32,this.distance=9,this.targetDistance=9,this.pendingYaw=0,this.pendingPitch=0,e.addEventListener("mousemove",n=>{document.pointerLockElement===e&&(this.pendingYaw+=n.movementX*gh,this.pendingPitch+=n.movementY*gh)}),e.addEventListener("wheel",n=>{this.targetDistance=wo.clamp(this.targetDistance+n.deltaY*.01,Ey,by)},{passive:!0})}update(t,e,n){const s=e.up;this.forward.addScaledVector(s,-this.forward.dot(s)),this.forward.lengthSq()<1e-6&&this.forward.set(s.y,s.z,s.x).cross(s),this.forward.normalize(),this.pendingYaw!==0&&(this.forward.applyQuaternion(new fn().setFromAxisAngle(s,-this.pendingYaw)),this.pendingYaw=0),this.pitch=wo.clamp(this.pitch+this.pendingPitch,My,Sy),this.pendingPitch=0,this.distance+=(this.targetDistance-this.distance)*(1-Math.exp(-8*t));const r=e.position.clone().addScaledVector(s,.8),o=r.clone().addScaledVector(this.forward,-Math.cos(this.pitch)*this.distance).addScaledVector(s,Math.sin(this.pitch)*this.distance),a=n.nearestPlanetTo(o);if(a){const c=o.clone().sub(a.center),u=c.length(),l=a.heightAtWorldDirection(c.clone().normalize())+.7;u<l&&o.copy(a.center).addScaledVector(c.normalize(),l)}this.camera.position.copy(o),this.camera.up.copy(s),this.camera.lookAt(r)}}class wy{constructor(){this.planetName=document.getElementById("planet-name"),this.planetType=document.getElementById("planet-type"),this.discTotal=document.getElementById("disc-total"),this.discPlanet=document.getElementById("disc-planet"),this.banner=document.getElementById("banner"),this.toasts=document.getElementById("toasts"),this.logPanel=document.getElementById("log-panel"),this.logEntries=document.getElementById("log-entries"),this.hint=document.getElementById("controls-hint"),this.fuelWrap=document.getElementById("fuel-wrap"),this.fuelBar=document.getElementById("fuel-bar"),this.liquidTint=document.getElementById("liquid-tint"),this.petName=document.getElementById("pet-name"),this.petPerk=document.getElementById("pet-perk"),this.treatCount=document.getElementById("treat-count"),this.bannerTimer=null,this.discoveries=new Map,this.pets=[],this.activePetIndex=-1,this.onSummonPet=null,this.onReleasePet=null,setTimeout(()=>this.hint.classList.add("faded"),14e3)}setPlanet(t){this.planetName.textContent=t.name,this.planetType.textContent=t.type.label}showBanner(t){this.banner.querySelector(".b-name").textContent=t.name,this.banner.querySelector(".b-type").textContent=t.type.label,this.banner.classList.add("show"),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>this.banner.classList.remove("show"),3e3)}updateCounts(t,e,n){this.discTotal.textContent=`${t} / ${e}`,this.discPlanet.textContent=`This planet: ${n.discoveredCount()} / ${n.totalDiscoveryCount()}`}setFuel(t){this.fuelBar.style.width=`${Math.round(t*100)}%`,this.fuelBar.classList.toggle("low",t<.25),this.fuelWrap.classList.toggle("full",t>.999)}setTreats(t,e){this.treatCount.innerHTML=`Treats: ${t} · Scrap: ${e} · hold <span>F</span> to feed`}setActivePet(t,e){t?(this.petName.textContent=t.species,this.petPerk.textContent=e||"Loyal companion"):(this.petName.textContent="No pet",this.petPerk.textContent="Feed a creature a treat to tame it")}setPetCollection(t,e){this.pets=t,this.activePetIndex=e,this.renderLog()}setLiquidTint(t){t?(this.liquidTint.style.background=t,this.liquidTint.style.opacity=.35):this.liquidTint.style.opacity=0}addDiscovery(t,e){const n=t.name;this.discoveries.has(n)||this.discoveries.set(n,{typeLabel:t.type.label,items:[]}),this.discoveries.get(n).items.push(e),this.renderLog(),this.showToast("Discovered",e)}showToast(t,e){const n=document.createElement("div");n.className="toast",n.innerHTML=`${t} <b></b>`,n.querySelector("b").textContent=e,this.toasts.appendChild(n),setTimeout(()=>n.remove(),3300)}renderLog(){if(this.logEntries.innerHTML="",this.pets.length>0){const t=document.createElement("div");t.className="log-planet log-pets";const e=document.createElement("h3");e.textContent=`Pets (${this.pets.length})`;const n=document.createElement("small");n.textContent="click to summon · P to cycle",e.appendChild(n);const s=document.createElement("ul");this.pets.forEach((r,o)=>{const a=document.createElement("li");o===this.activePetIndex&&(a.className="active-pet");const c=document.createElement("span");c.className="pet-label",c.textContent=`${r.species} — from ${r.origin}`;const u=document.createElement("button");u.className="pet-btn",u.textContent=o===this.activePetIndex?"Active":"Summon",u.disabled=o===this.activePetIndex,u.addEventListener("click",()=>{var h;return(h=this.onSummonPet)==null?void 0:h.call(this,o)});const l=document.createElement("button");l.className="pet-btn release",l.textContent="Release",l.addEventListener("click",()=>{var h;l.dataset.confirm?(h=this.onReleasePet)==null||h.call(this,o):(l.dataset.confirm="1",l.textContent="Sure?",setTimeout(()=>{l.dataset.confirm="",l.textContent="Release"},2500))}),a.append(c,u,l),s.appendChild(a)}),t.appendChild(e),t.appendChild(s),this.logEntries.appendChild(t)}if(this.discoveries.size===0){const t=document.createElement("div");t.className="log-empty",t.textContent="Nothing discovered yet. Glowing artifacts await on every planet…",this.logEntries.appendChild(t);return}for(const[t,e]of this.discoveries){const n=document.createElement("div");n.className="log-planet";const s=document.createElement("h3");s.textContent=t;const r=document.createElement("small");r.textContent=e.typeLabel,s.appendChild(r);const o=document.createElement("ul");for(const a of e.items){const c=document.createElement("li");c.textContent=a,o.appendChild(c)}n.appendChild(s),n.appendChild(o),this.logEntries.appendChild(n)}}toggleLog(){return this.logPanel.classList.toggle("open"),this.isLogOpen()}isLogOpen(){return this.logPanel.classList.contains("open")}reset(){this.discoveries.clear(),this.renderLog(),this.logPanel.classList.remove("open")}}const _h="planet-explorer-pets-v1",Ay={desert:{label:"+25% run speed",runMult:1.25},ocean:{label:"+60% swim speed",swimMult:1.6},toxic:{label:"Creatures never flee from you",noFlee:!0},fairy:{label:"Beacon marks the nearest artifact",beacon:!0},ice:{label:"+50% fuel recharge",rechargeMult:1.5},lava:{label:"-35% jetpack fuel burn",burnMult:.65},forest:{label:"+30% jump height",jumpMult:1.3},mushroom:{label:"Drift gently while falling",gravityMult:.7},candy:{label:"Treats are only eaten half the time",treatSaver:!0},crystal:{label:"Wider pickup reach",reachMult:1.6},glitch:{label:"+25% boost top speed",boostCapMult:1.25},mech:{label:"+20% jetpack thrust",jetMult:1.2}};class Cy{constructor(t,e){this.scene=t;const{root:n}=pf(e.typeId,e.seed);n.scale.setScalar(e.scale||1),this.root=n,this.meta=n.userData,this.bodyHeight=this.meta.bodyHeight*n.scale.x,this.anim={phase:0,jitterTimer:0},this.previousPosition=new R,t.add(n)}placeAt(t){this.root.position.copy(t.position).addScaledVector(t.up,1),this.previousPosition.copy(this.root.position)}update(t,e,n){const s=n.up,r=new R().crossVectors(s,n.facing);r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize();const o=n.position.clone().addScaledVector(n.facing,-1.7).addScaledVector(r,1.4);this.meta.mode==="float"&&o.addScaledVector(s,1.2),this.root.position.lerp(o,1-Math.exp(-4*t)),this.root.position.distanceToSquared(o)>1600&&this.root.position.copy(o);const a=n.planet;if(a&&this.meta.mode!=="float"&&n.grounded){const h=this.root.position.clone().sub(a.center).normalize(),f=a.heightAtWorldDirection(h)+this.bodyHeight;this.root.position.copy(a.center).addScaledVector(h,f)}const c=this.root.position.clone().sub(this.previousPosition),u=wo.clamp(c.length()/Math.max(t,1e-4),.5,6);this.previousPosition.copy(this.root.position);const l=c.addScaledVector(s,-c.dot(s));if(l.lengthSq()>1e-6){l.normalize();const h=new R().crossVectors(s,l),f=new fn().setFromRotationMatrix(new Nt().makeBasis(h,s,l));this.root.quaternion.slerp(f,1-Math.exp(-8*t))}mf(this.meta,this.anim,t,e,u)}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Ry{constructor(t){this.scene=t,this.companion=null,this.digTimer=this.nextDigDelay(),this.onDig=null;const e=this.load();this.pets=e.pets,this.activeIndex=e.activeIndex,this.sanctuary=e.sanctuary}nextDigDelay(){return 40+Math.random()*35}load(){try{const t=localStorage.getItem(_h);if(t){const e=JSON.parse(t);if(Array.isArray(e.pets))return{pets:e.pets,activeIndex:e.activeIndex??-1,sanctuary:Array.isArray(e.sanctuary)?e.sanctuary:[]}}}catch{}return{pets:[],activeIndex:-1,sanctuary:[]}}save(){localStorage.setItem(_h,JSON.stringify({pets:this.pets,activeIndex:this.activeIndex,sanctuary:this.sanctuary}))}get activePet(){return this.activeIndex>=0?this.pets[this.activeIndex]:null}perksForActive(){const t=this.activePet;if(!t)return{};const e=Ay[t.typeId]||{};if(!t.radiant)return e;const n={...e,label:`${e.label} ×2 (radiant)`};for(const[s,r]of Object.entries(e))s.endsWith("Mult")&&(n[s]=1+(r-1)*2);return n}tame(t,e){this.pets.push(t),this.activeIndex<0&&(this.activeIndex=this.pets.length-1),this.save(),this.summon(e)}setActive(t,e){t<-1||t>=this.pets.length||(this.activeIndex=t,this.save(),this.summon(e))}release(t,e){if(t<0||t>=this.pets.length)return null;const[n]=this.pets.splice(t,1);return this.sanctuary.push(n),this.activeIndex===t?this.activeIndex=-1:this.activeIndex>t&&this.activeIndex--,this.save(),this.summon(e),n}cycle(t){this.pets.length!==0&&(this.activeIndex=this.activeIndex>=this.pets.length-1?-1:this.activeIndex+1,this.save(),this.summon(t))}summon(t){this.companion&&(this.companion.dispose(),this.companion=null);const e=this.activePet;e&&(this.companion=new Cy(this.scene,e),this.companion.placeAt(t)),t.perks=this.perksForActive()}update(t,e,n){this.companion&&(this.companion.update(t,e,n),n.grounded&&(this.digTimer-=t,this.digTimer<=0&&(this.digTimer=this.nextDigDelay(),this.onDig&&this.onDig())))}}const wn=new O_({antialias:!0});wn.setSize(window.innerWidth,window.innerHeight);wn.setPixelRatio(Math.min(window.devicePixelRatio,2));wn.toneMapping=Sh;wn.toneMappingExposure=1.1;document.body.appendChild(wn.domElement);const Fi=new z_;Fi.background=new It("#05060f");const Ts=new Qe(60,window.innerWidth/window.innerHeight,.1,8e3),Py=Yv(Fi),xe=new wy,Ct=new yy(Fi),xh=new Ty(Ts,wn.domElement);let sn=new gf(Fi,af()),Eo=0,Xc=null;Ct.spawnOn(sn.planets[0]);const en=new Ry(Fi);en.summon(Ct);function fr(){xe.setActivePet(en.activePet,en.perksForActive().label),xe.setPetCollection(en.pets,en.activeIndex),xe.setTreats(Ct.treats,Ct.scrap)}function xf(){const i=sn.sanctuaryPlanet;for(const t of en.sanctuary)i.creatures.push(new pl(i,t.seed,{typeId:t.typeId,scale:t.scale,tame:!0}))}xf();fr();xe.onSummonPet=i=>{en.setActive(i,Ct),fr()};xe.onReleasePet=i=>{const t=en.release(i,Ct);if(!t)return;const e=sn.sanctuaryPlanet;e.creatures.push(new pl(e,t.seed,{typeId:t.typeId,scale:t.scale,tame:!0})),xe.showToast("Released to Haven:",t.species),fr()};en.onDig=()=>{const i=Ct.planet;if(!i)return;const t=i.type.baitKind==="scrap",e=Math.random()<.35?2:1;t?Ct.scrap+=e:Ct.treats+=e,_f(),xe.showToast("Your pet dug up",`${e} ${t?"scrap":"treat"}${e>1?"s":""}`),xe.setTreats(Ct.treats,Ct.scrap)};window.addEventListener("resize",()=>{Ts.aspect=window.innerWidth/window.innerHeight,Ts.updateProjectionMatrix(),wn.setSize(window.innerWidth,window.innerHeight)});function gl(){try{const i=wn.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}const vh=document.getElementById("start-overlay");vh.addEventListener("click",()=>{Zv(),vh.classList.add("hidden"),gl()});wn.domElement.addEventListener("click",()=>{xe.isLogOpen()&&xe.toggleLog(),document.pointerLockElement!==wn.domElement&&gl()});function Iy(){sn.dispose(),sn=new gf(Fi,af()),Eo=0,Xc=null,xe.reset(),xf(),Ct.spawnOn(sn.planets[0]),ml()}window.addEventListener("keydown",i=>{if(i.code==="Tab")i.preventDefault(),xe.toggleLog()?document.exitPointerLock():gl();else if(i.code==="KeyN")Iy();else if(i.code==="KeyP")en.cycle(Ct),fr();else if(i.code==="KeyR"){const t=sn.nearestPlanetTo(Ct.position);t&&(Ct.rescueTo(t),ml())}});function Ly(){if(Ct.position.length()<Py.sunRadius+6){const i=sn.nearestPlanetTo(Ct.position);i&&(Ct.position.copy(i.center).addScaledVector(new R(0,1,0),i.radius*1.6),Ct.velocity.set(0,0,0),Ct.grounded=!1,ml())}}function Dy(){const i=Ct.planet;if(!i)return;if(Ct.position.distanceTo(i.center)-i.radius<i.radius*.9){Xc!==i&&(Xc=i,i.visited=!0,xe.setPlanet(i),xe.showBanner(i));const e=i.tryCollect(Ct.position);e&&(Eo++,Kv(),xe.addDiscovery(i,e));const n=i.tryScan(Ct.position,5*(Ct.perks.reachMult||1));if(n&&(Eo++,Qv(),xe.addDiscovery(i,`${n} (creature)`)),i.tryPickupBait(Ct.position,2.2*(Ct.perks.reachMult||1))&&(i.type.baitKind==="scrap"?Ct.scrap++:Ct.treats++,_f(),xe.setTreats(Ct.treats,Ct.scrap)),Ct.luring){const s=i.tryTame(Ct.position);s&&(Ct.perks.treatSaver&&Math.random()<.5||(i.type.baitKind==="scrap"?Ct.scrap--:Ct.treats--),en.tame(s,Ct),ty(),xe.showToast("Tamed",s.species),fr())}Ct.perks.beacon&&i.pulseNearestArtifact(Ct.position,bo),xe.updateCounts(Eo,sn.totalDiscoveries(),i)}}function Uy(){const i=Ct.planet,t=i&&i.type.liquid&&i.type.liquidClass==="swim"&&Ts.position.distanceTo(i.center)<i.liquidRadius();xe.setLiquidTint(t?i.type.liquid.color:null)}window.__game={player:Ct,petManager:en,hud:xe,get system(){return sn}};const Ny=new px;let bo=0;function vf(){const i=Math.min(Ny.getDelta(),.05);bo+=i,sn.update(i,bo,Ct.position,{luring:Ct.luring,noFlee:!!Ct.perks.noFlee}),Ct.update(i,xh.forward,Ts,sn),en.update(i,bo,Ct),xh.update(i,Ct,sn),Ly(),Dy(),Uy(),xe.setFuel(Ct.fuelFraction),wn.render(Fi,Ts),requestAnimationFrame(vf)}vf();
