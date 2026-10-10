(()=>{var _p=0,bu=1,Mp=2;var Ua=1,Na=2,ai=3,qn=0,Yt=1,zt=2,kt=0,Bs=1,Li=2,wu=3,Su=4,xh=5,An=100,bp=101,wp=102,Sp=103,Ep=104,sr=200,Tp=201,Ap=202,Rp=203,ql=204,Zl=205,za=206,Cp=207,Oa=208,Pp=209,Ip=210,Dp=211,Lp=212,Up=213,Np=214,$l=0,jl=1,Jl=2,Ws=3,Kl=4,Ql=5,ec=6,tc=7,kf=0,zp=1,Op=2,Di=0,vh=1,yh=2,_h=3,Mh=4,Fp=5,bh=6,jr=7;var Bf=300,Xs=301,Ys=302,nc=303,ic=304,Fa=306,ui=1e3,Qi=1001,sc=1002,nn=1003,kp=1004;var _o=1005;var Xn=1006,dl=1007;var es=1008;var Fn=1009,Hf=1010,Vf=1011,Fr=1012,wh=1013,ts=1014,Yn=1015,dn=1016,Sh=1017,Eh=1018,Ui=1020,Gf=35902,Wf=1021,Xf=1022,Mn=1023,Yf=1024,qf=1025,Hs=1026,Ni=1027,Th=1028,Ah=1029,Zf=1030,Rh=1031;var Ch=1033,jo=33776,Jo=33777,Ko=33778,Qo=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,hc=37492,uc=37496,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,xc=37813,vc=37814,yc=37815,_c=37816,Mc=37817,bc=37818,wc=37819,Sc=37820,Ec=37821,ea=36492,Tc=36494,Ac=36495,$f=36283,Rc=36284,Cc=36285,Pc=36286;var ta=2300,Ic=2301,pl=2302,Eu=2400,Tu=2401,Au=2402;var Bp=3200,Hp=3201;var Ph=0,Vp=1,Ii="",un="srgb",rr="srgb-linear",ka="linear",xt="srgb";var bs=7680;var Ru=519,Gp=512,Wp=513,Xp=514,jf=515,Yp=516,qp=517,Zp=518,$p=519,Cu=35044,Jf=35048;var Pu="300 es",ci=2e3,na=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,Dr=Math.PI/180,kr=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Ih(n,e){return(n%e+e)%e}function jp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Jp(n,e,t){return n!==e?(t-n)/(e-n):0}function Lr(n,e,t){return(1-t)*n+t*e}function Kp(n,e,t,i){return Lr(n,e,1-Math.exp(-t*i))}function Qp(n,e=1){return e-Math.abs(Ih(n,e*2)-e)}function em(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function im(n,e){return n+Math.random()*(e-n)}function sm(n){return n*(.5-Math.random())}function rm(n){n!==void 0&&(Iu=n);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function om(n){return n*Dr}function am(n){return n*kr}function lm(n){return(n&n-1)===0&&n!==0}function cm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function um(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Dh={DEG2RAD:Dr,RAD2DEG:kr,generateUUID:cs,clamp:Ft,euclideanModulo:Ih,mapLinear:jp,inverseLerp:Jp,lerp:Lr,damp:Kp,pingpong:Qp,smoothstep:em,smootherstep:tm,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:rm,degToRad:om,radToDeg:am,isPowerOfTwo:lm,ceilPowerOfTwo:cm,floorPowerOfTwo:hm,setQuaternionFromProperEuler:um,normalize:rn,denormalize:Os},oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],y=s[4],v=s[7],z=s[2],C=s[5],I=s[8];return r[0]=o*x+a*S+l*z,r[3]=o*m+a*y+l*C,r[6]=o*p+a*v+l*I,r[1]=c*x+u*S+h*z,r[4]=c*m+u*y+h*C,r[7]=c*p+u*v+h*I,r[2]=f*x+d*S+g*z,r[5]=f*m+d*y+g*C,r[8]=f*p+d*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ml=new tt;function Kf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fm(){let n=ia("canvas");return n.style.display="block",n}var Du={};function Pr(n){n in Du||(Du[n]=!0,console.warn(n))}function dm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function pm(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mm(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var lt={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(n.r=hi(n.r),n.g=hi(n.g),n.b=hi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(n.r=Vs(n.r),n.g=Vs(n.g),n.b=Vs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?ka:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Lu=[.64,.33,.3,.6,.15,.06],Uu=[.2126,.7152,.0722],Nu=[.3127,.329],zu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[rr]:{primaries:Lu,whitePoint:Nu,transfer:ka,toXYZ:zu,fromXYZ:Ou,luminanceCoefficients:Uu,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Lu,whitePoint:Nu,transfer:xt,toXYZ:zu,fromXYZ:Ou,luminanceCoefficients:Uu,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});var ws,Dc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=ia("canvas")),ws.width=e.width,ws.height=e.height;let i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gm=0,sa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gl(s[o].image)):r.push(gl(s[o]))}else r=gl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xm=0,fn=class n extends zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=Xn,o=es,a=Mn,l=Fn,c=n.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=cs(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Bf;fn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(d+1)/2,z=(p+1)/2,C=(u+f)/4,I=(h+x)/4,b=(g+m)/4;return y>v&&y>z?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=C/i,r=I/i):v>z?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=b/s):z<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),i=I/r,s=b/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lc=class extends zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Lc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ra=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uc=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let z=Math.sqrt(y),C=Math.atan2(z,p*S);m=Math.sin(m*C)/z,a=Math.sin(a*C)/z}let v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+x*v,m===1-a){let z=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=z,c*=z,u*=z,h*=z}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xl=new D,Fu=new Zn,fi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),bo.subVectors(this.max,br),Ss.subVectors(e.a,br),Es.subVectors(e.b,br),Ts.subVectors(e.c,br),Ei.subVectors(Es,Ss),Ti.subVectors(Ts,Es),Wi.subVectors(Ss,Ts);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Wi.z,Wi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Wi.z,0,-Wi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Wi.y,Wi.x,0];return!vl(t,Ss,Es,Ts,bo)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Ss,Es,Ts,bo))?!1:(wo.crossVectors(Ei,Ti),t=[wo.x,wo.y,wo.z],vl(t,Ss,Es,Ts,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new D,new D,new D,new D,new D,new D,new D,new D],Nn=new D,Mo=new fi,Ss=new D,Es=new D,Ts=new D,Ei=new D,Ti=new D,Wi=new D,br=new D,bo=new D,wo=new D,Xi=new D;function vl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var vm=new fi,wr=new D,yl=new D,di=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(yl)),this.expandByPoint(wr.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new D,_l=new D,So=new D,Ai=new D,Ml=new D,Eo=new D,bl=new D,Br=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_l.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=Ai.dot(this.direction),l=-Ai.dot(So),c=Ai.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_l).addScaledVector(So,f),d}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){Ml.subVectors(t,e),Eo.subVectors(i,e),bl.crossVectors(Ml,Eo);let o=this.direction.dot(bl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);let l=a*this.direction.dot(Eo.crossVectors(Ai,Eo));if(l<0)return null;let c=a*this.direction.dot(Ml.cross(Ai));if(c<0||l+c>o)return null;let u=-a*Ai.dot(bl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ym,e,_m)}lookAt(e,t,i){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ri.crossVectors(i,yn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ri.crossVectors(i,yn)),Ri.normalize(),To.crossVectors(yn,Ri),s[0]=Ri.x,s[4]=To.x,s[8]=yn.x,s[1]=Ri.y,s[5]=To.y,s[9]=yn.y,s[2]=Ri.z,s[6]=To.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],y=i[7],v=i[11],z=i[15],C=s[0],I=s[4],b=s[8],M=s[12],_=s[1],R=s[5],B=s[9],U=s[13],X=s[2],O=s[6],G=s[10],J=s[14],Z=s[3],Q=s[7],ae=s[11],ye=s[15];return r[0]=o*C+a*_+l*X+c*Z,r[4]=o*I+a*R+l*O+c*Q,r[8]=o*b+a*B+l*G+c*ae,r[12]=o*M+a*U+l*J+c*ye,r[1]=u*C+h*_+f*X+d*Z,r[5]=u*I+h*R+f*O+d*Q,r[9]=u*b+h*B+f*G+d*ae,r[13]=u*M+h*U+f*J+d*ye,r[2]=g*C+x*_+m*X+p*Z,r[6]=g*I+x*R+m*O+p*Q,r[10]=g*b+x*B+m*G+p*ae,r[14]=g*M+x*U+m*J+p*ye,r[3]=S*C+y*_+v*X+z*Z,r[7]=S*I+y*R+v*O+z*Q,r[11]=S*b+y*B+v*G+z*ae,r[15]=S*M+y*U+v*J+z*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,z=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,C=t*S+i*y+s*v+r*z;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=S*I,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*I,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*I,e[4]=y*I,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=v*I,e[9]=(g*h*r-u*x*r-g*i*d+t*x*d+u*i*p-t*h*p)*I,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=z*I,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*I,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,S=l*c,y=l*u,v=l*h,z=i.x,C=i.y,I=i.z;return s[0]=(1-(x+p))*z,s[1]=(d+v)*z,s[2]=(g-y)*z,s[3]=0,s[4]=(d-v)*C,s[5]=(1-(f+p))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+y)*I,s[9]=(m-S)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let c=1/r,u=1/o,h=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===ci)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u,g,x;if(a===ci)g=(o+r)*h,x=-2*h;else if(a===na)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},As=new D,zn=new Ke,ym=new D(0,0,0),_m=new D(1,1,1),Ri=new D,To=new D,yn=new D,ku=new Ke,Bu=new Zn,Rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mm=0,Hu=new D,Rs=new Zn,si=new Ke,Ao=new D,Sr=new D,bm=new D,wm=new Zn,Vu=new D(1,0,0),Gu=new D(0,1,0),Wu=new D(0,0,1),Xu={type:"added"},Sm={type:"removed"},Cs={type:"childadded",child:null},wl={type:"childremoved",child:null},Ut=class n extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Rn,i=new Zn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new tt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Sr,Ao,this.up):si.lookAt(Ao,Sr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(si),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sm),wl.child=e,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new D,ri=new D,Sl=new D,oi=new D,Ps=new D,Is=new D,Yu=new D,El=new D,Tl=new D,Al=new D,Rl=new _t,Cl=new _t,Pl=new _t,Ji=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),ri.subVectors(i,t),Sl.subVectors(e,t);let o=On.dot(On),a=On.dot(ri),l=On.dot(Sl),c=ri.dot(ri),u=ri.dot(Sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rl.setScalar(0),Cl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(Cl,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),ri.subVectors(e,t),On.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),On.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,i),Is.subVectors(r,i),El.subVectors(e,i);let l=Ps.dot(El),c=Is.dot(El);if(l<=0&&c<=0)return t.copy(i);Tl.subVectors(e,s);let u=Ps.dot(Tl),h=Is.dot(Tl);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ps,o);Al.subVectors(e,r);let d=Ps.dot(Al),g=Is.dot(Al);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Is,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Yu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Yu,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Ih(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Il(o,r,e+1/3),this.g=Il(o,r,e),this.b=Il(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=Qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return lt.fromWorkingColorSpace(en.copy(this),e),Math.round(Ft(en.r*255,0,255))*65536+Math.round(Ft(en.g*255,0,255))*256+Math.round(Ft(en.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(en.copy(this),t);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=un){lt.fromWorkingColorSpace(en.copy(this),e);let t=en.r,i=en.g,s=en.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Ro);let i=Lr(Ci.h,Ro.h,t),s=Lr(Ci.s,Ro.s,t),r=Lr(Ci.l,Ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ue;Ue.NAMES=Qf;var Em=0,$n=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=cs(),this.name="",this.blending=Bs,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Zl,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ql&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==An&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zt=class extends $n{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new D,Co=new oe,Tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}};var aa=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var la=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Tm=0,Tn=new Ke,Dl=new Ut,Ds=new D,_n=new fi,Er=new fi,Xt=new D,Pt=class n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?la:aa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(_n.min,Er.min),_n.expandByPoint(Xt),Xt.addVectors(_n.max,Er.max),_n.expandByPoint(Xt)):(_n.expandByPoint(Er.min),_n.expandByPoint(Er.max))}_n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Xt.add(Ds)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new D,l[b]=new D;let c=new D,u=new D,h=new D,f=new oe,d=new oe,g=new oe,x=new D,m=new D;function p(b,M,_){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[b].add(x),a[M].add(x),a[_].add(x),l[b].add(m),l[M].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,M=S.length;b<M;++b){let _=S[b],R=_.start,B=_.count;for(let U=R,X=R+B;U<X;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new D,v=new D,z=new D,C=new D;function I(b){z.fromBufferAttribute(s,b),C.copy(z);let M=a[b];y.copy(M),y.sub(z.multiplyScalar(z.dot(M))).normalize(),v.crossVectors(C,M);let R=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,R)}for(let b=0,M=S.length;b<M;++b){let _=S[b],R=_.start,B=_.count;for(let U=R,X=R+B;U<X;U+=3)I(e.getX(U+0)),I(e.getX(U+1)),I(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Tt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qu=new Ke,Yi=new Br,Po=new di,Zu=new D,Io=new D,Do=new D,Lo=new D,Ll=new D,Uo=new D,$u=new D,No=new D,Le=class extends Ut{constructor(e=new Pt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ll.fromBufferAttribute(h,e),o?Uo.addScaledVector(Ll,u):Uo.addScaledVector(Ll.sub(t),u))}t.add(Uo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Po.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Po,Zu)===null||Yi.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,z=y;v<z;v+=3){let C=a.getX(v),I=a.getX(v+1),b=a.getX(v+2);s=zo(this,p,e,i,c,u,h,C,I,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=zo(this,o,e,i,c,u,h,S,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,z=y;v<z;v+=3){let C=v,I=v+1,b=v+2;s=zo(this,p,e,i,c,u,h,C,I,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,y=m+1,v=m+2;s=zo(this,o,e,i,c,u,h,S,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Am(n,e,t,i,s,r,o,a){let l;if(e.side===Yt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qn,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:n}}function zo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Io),n.getVertexPosition(l,Do),n.getVertexPosition(c,Lo);let u=Am(n,e,t,i,Io,Do,Lo,$u);if(u){let h=new D;Ji.getBarycoord($u,Io,Do,Lo,h),s&&(u.uv=Ji.getInterpolatedAttribute(s,a,l,c,h,new oe)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,a,l,c,h,new oe)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};Ji.getNormal(Io,Do,Lo,f.normal),u.face=f,u.barycoord=h}return u}var kn=class n extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(x,m,p,S,y,v,z,C,I,b,M){let _=v/I,R=z/b,B=v/2,U=z/2,X=C/2,O=I+1,G=b+1,J=0,Z=0,Q=new D;for(let ae=0;ae<G;ae++){let ye=ae*R-U;for(let ke=0;ke<O;ke++){let nt=ke*_-B;Q[x]=nt*S,Q[m]=ye*y,Q[p]=X,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ke/I),h.push(1-ae/b),J+=1}}for(let ae=0;ae<b;ae++)for(let ye=0;ye<I;ye++){let ke=f+ye+O*ae,nt=f+ye+O*(ae+1),ee=f+(ye+1)+O*(ae+1),ue=f+(ye+1)+O*ae;l.push(ke,nt,ue),l.push(nt,ee,ue),Z+=6}a.addGroup(d,Z,M),d+=Z,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=qs(n[t]);for(let s in i)e[s]=i[s]}return e}function Rm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ed(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var pn={clone:qs,merge:on},Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends $n{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ca=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new D,ju=new oe,Ju=new oe,tn=class extends ca{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Ju),t.subVectors(Ju,ju)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ls=-90,Us=1,Nc=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Ls,Us,e,t);s.layers=this.layers,this.add(s);let r=new tn(Ls,Us,e,t);r.layers=this.layers,this.add(r);let o=new tn(Ls,Us,e,t);o.layers=this.layers,this.add(o);let a=new tn(Ls,Us,e,t);a.layers=this.layers,this.add(a);let l=new tn(Ls,Us,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ls,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ha=class extends fn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zc=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:kt});r.uniforms.tEquirect.value=t;let o=new Le(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Xn),new Nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ul=new D,Im=new D,Dm=new tt,li=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ul.subVectors(i,t).cross(Im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dm.getNormalMatrix(e),s=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new di,Oo=new D,Hr=class{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-d,v-p).normalize(),i[1].setComponents(l+r,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+u,m+g,v+S).normalize(),i[3].setComponents(l-o,f-u,m-g,v-S).normalize(),i[4].setComponents(l-a,f-h,m-x,v-y).normalize(),t===ci)i[5].setComponents(l+a,f+h,m+x,v+y).normalize();else if(t===na)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function td(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Lm(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jn=class n extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let y=0;y<c;y++){let v=y*h-r;g.push(v,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let y=S+c*p,v=S+c*(p+1),z=S+1+c*(p+1),C=S+1+c*p;d.push(y,v,C),d.push(v,z,C)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Zm=`#ifdef USE_BUMPMAP
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
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
}`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,D0=`struct PhysicalMaterial {
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
}`,L0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`#include <common>
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
}`,Bg=`#if DEPTH_PACKING == 3200
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
}`,Hg=`#define DISTANCE
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
}`,Vg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,ex=`#define NORMAL
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
}`,tx=`#define PHONG
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
}`,nx=`#define PHONG
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
}`,ix=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,ox=`#define TOON
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
}`,ax=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Um,alphahash_pars_fragment:Nm,alphamap_fragment:zm,alphamap_pars_fragment:Om,alphatest_fragment:Fm,alphatest_pars_fragment:km,aomap_fragment:Bm,aomap_pars_fragment:Hm,batching_pars_vertex:Vm,batching_vertex:Gm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:Ym,iridescence_fragment:qm,bumpmap_pars_fragment:Zm,clipping_planes_fragment:$m,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Km,color_fragment:Qm,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:d0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:T0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:y0,fog_pars_fragment:_0,gradientmap_pars_fragment:M0,lightmap_pars_fragment:b0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:S0,lights_pars_begin:E0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:I0,lights_physical_pars_fragment:D0,lights_fragment_begin:L0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:k0,map_fragment:B0,map_pars_fragment:H0,map_particle_fragment:V0,map_particle_pars_fragment:G0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:Y0,morphcolor_vertex:q0,morphnormal_vertex:Z0,morphtarget_pars_vertex:$0,morphtarget_vertex:j0,normal_fragment_begin:J0,normal_fragment_maps:K0,normal_pars_fragment:Q0,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:og,opaque_fragment:ag,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:hg,dithering_fragment:ug,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:xg,shadowmask_pars_fragment:vg,skinbase_vertex:yg,skinning_pars_vertex:_g,skinning_vertex:Mg,skinnormal_vertex:bg,specularmap_fragment:wg,specularmap_pars_fragment:Sg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Tg,transmission_fragment:Ag,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Pg,uv_vertex:Ig,worldpos_vertex:Dg,background_vert:Lg,background_frag:Ug,backgroundCube_vert:Ng,backgroundCube_frag:zg,cube_vert:Og,cube_frag:Fg,depth_vert:kg,depth_frag:Bg,distanceRGBA_vert:Hg,distanceRGBA_frag:Vg,equirect_vert:Gg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:Yg,meshbasic_vert:qg,meshbasic_frag:Zg,meshlambert_vert:$g,meshlambert_frag:jg,meshmatcap_vert:Jg,meshmatcap_frag:Kg,meshnormal_vert:Qg,meshnormal_frag:ex,meshphong_vert:tx,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ox,points_vert:ax,points_frag:lx,shadow_vert:cx,shadow_frag:hx,sprite_vert:ux,sprite_frag:fx},_e={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Wn={basic:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:on([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:on([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ue(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:on([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:on([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:on([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:on([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:on([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:on([_e.lights,_e.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Wn.physical={uniforms:on([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Fo={r:0,b:0,g:0},Zi=new Rn,dx=new Ke;function px(n,e,t,i,s,r,o){let a=new Ue(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function x(S){let y=!1,v=g(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Fa)?(u===void 0&&(u=new Le(new kn(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:qs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Zi)),u.material.toneMapped=lt.getTransfer(v.colorSpace)!==xt,(h!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Le(new jn(2,2),new Mt({name:"BackgroundMaterial",uniforms:qs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Fo,ed(n)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m}}function mx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,R,B,U,X){let O=!1,G=h(U,B,R);r!==G&&(r=G,c(r.object)),O=d(_,U,B,X),O&&g(_,U,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(_,R,B,U),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,R,B){let U=B.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let O=X[R.id];O===void 0&&(O={},X[R.id]=O);let G=O[U];return G===void 0&&(G=f(l()),O[U]=G),G}function f(_){let R=[],B=[],U=[];for(let X=0;X<t;X++)R[X]=0,B[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:U,object:_,attributes:{},index:null}}function d(_,R,B,U){let X=r.attributes,O=R.attributes,G=0,J=B.getAttributes();for(let Z in J)if(J[Z].location>=0){let ae=X[Z],ye=O[Z];if(ye===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(ye=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(ye=_.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function g(_,R,B,U){let X={},O=R.attributes,G=0,J=B.getAttributes();for(let Z in J)if(J[Z].location>=0){let ae=O[Z];ae===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor));let ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),X[Z]=ye,G++}r.attributes=X,r.attributesNum=G,r.index=U}function x(){let _=r.newAttributes;for(let R=0,B=_.length;R<B;R++)_[R]=0}function m(_){p(_,0)}function p(_,R){let B=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;B[_]=1,U[_]===0&&(n.enableVertexAttribArray(_),U[_]=1),X[_]!==R&&(n.vertexAttribDivisor(_,R),X[_]=R)}function S(){let _=r.newAttributes,R=r.enabledAttributes;for(let B=0,U=R.length;B<U;B++)R[B]!==_[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function y(_,R,B,U,X,O,G){G===!0?n.vertexAttribIPointer(_,R,B,X,O):n.vertexAttribPointer(_,R,B,U,X,O)}function v(_,R,B,U){x();let X=U.attributes,O=B.getAttributes(),G=R.defaultAttributeValues;for(let J in O){let Z=O[J];if(Z.location>=0){let Q=X[J];if(Q===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){let ae=Q.normalized,ye=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;let nt=ke.buffer,ee=ke.type,ue=ke.bytesPerElement,Ae=ee===n.INT||ee===n.UNSIGNED_INT||Q.gpuType===wh;if(Q.isInterleavedBufferAttribute){let fe=Q.data,Ie=fe.stride,Ve=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<Z.locationSize;Be++)p(Z.location+Be,fe.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<Z.locationSize;Be++)m(Z.location+Be);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Be=0;Be<Z.locationSize;Be++)y(Z.location+Be,ye/Z.locationSize,ee,ae,Ie*ue,(Ve+ye/Z.locationSize*Be)*ue,Ae)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)p(Z.location+fe,Q.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<Z.locationSize;fe++)m(Z.location+fe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let fe=0;fe<Z.locationSize;fe++)y(Z.location+fe,ye/Z.locationSize,ee,ae,ye*ue,ye/Z.locationSize*fe*ue,Ae)}}else if(G!==void 0){let ae=G[J];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(Z.location,ae);break;case 3:n.vertexAttrib3fv(Z.location,ae);break;case 4:n.vertexAttrib4fv(Z.location,ae);break;default:n.vertexAttrib1fv(Z.location,ae)}}}}S()}function z(){b();for(let _ in i){let R=i[_];for(let B in R){let U=R[B];for(let X in U)u(U[X].object),delete U[X];delete R[B]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let R=i[_.id];for(let B in R){let U=R[B];for(let X in U)u(U[X].object),delete U[X];delete R[B]}delete i[_.id]}function I(_){for(let R in i){let B=i[R];if(B[_.id]===void 0)continue;let U=B[_.id];for(let X in U)u(U[X].object),delete U[X];delete B[_.id]}}function b(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:z,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function gx(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Mn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let b=I===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Fn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Yn&&!b)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:z,maxSamples:C}}function vx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new li,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,y=S*4,v=p.clippingState||null;l.value=v,v=u(g,f,y,d);for(let z=0;z!==y;++z)v[z]=t[z];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yx(n){let e=new WeakMap;function t(o,a){return a===nc?o.mapping=Xs:a===ic&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===nc||a===ic)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Zs=class extends ca{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fs=4,Ku=[.125,.215,.35,.446,.526,.582],Ki=20,Nl=new Zs,Qu=new Ue,zl=null,Ol=0,Fl=0,kl=!1,ji=(1+Math.sqrt(5))/2,Ns=1/ji,ef=[new D(-ji,Ns,0),new D(ji,Ns,0),new D(-Ns,0,ji),new D(Ns,0,ji),new D(0,ji,-Ns),new D(0,ji,Ns),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],$s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){zl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zl,Ol,Fl),this._renderer.xr.enabled=kl,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:dn,format:Mn,colorSpace:rr,depthBuffer:!1},s=tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_x(r)),this._blurMaterial=Mx(r,e,t)}return s}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Nl)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Qu),u.toneMapping=Di,u.autoClear=!1;let d=new Zt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new Le(new kn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Qu),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;ko(s,S*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Xs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ef[(s-r-1)%ef.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Le(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let p=[],S=0;for(let I=0;I<Ki;++I){let b=I/x,M=Math.exp(-b*b/2);p.push(M),I===0?S+=M:I<m&&(S+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let v=this._sizeLods[s],z=3*v*(s>y-Fs?s-y+Fs:0),C=4*(this._cubeSize-v);ko(t,z,C,3*v,2*v),l.setRenderTarget(t),l.render(h,Nl)}};function _x(n){let e=[],t=[],i=[],s=n,r=n-Fs+1+Ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Fs?l=Ku[o-n+Fs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let C=0;C<d;C++){let I=C%3*2/3-1,b=C>2?0:-1,M=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];S.set(M,x*g*C),y.set(f,m*g*C);let _=[C,C,C,C,C,C];v.set(_,p*g*C)}let z=new Pt;z.setAttribute("position",new Tt(S,x)),z.setAttribute("uv",new Tt(y,m)),z.setAttribute("faceIndex",new Tt(v,p)),e.push(z),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tf(n,e,t){let i=new qt(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Mx(n,e,t){let i=new Float32Array(Ki),s=new D(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function nf(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function sf(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function bx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===nc||l===ic,u=l===Xs||l===Ys;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $s(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new $s(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sx(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let S=d.array;x=d.version;for(let y=0,v=S.length;y<v;y+=3){let z=S[y+0],C=S[y+1],I=S[y+2];f.push(z,C,C,I,I,z)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){let z=y+0,C=y+1,I=y+2;f.push(z,C,C,I,I,z)}}else return;let m=new(Kf(f)?la:aa)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ex(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ax(n,e,t){let i=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,z=1;v>e.maxTextureSize&&(z=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*z*4*h),I=new ra(C,v,z,h);I.type=Yn,I.needsUpdate=!0;let b=y*4;for(let _=0;_<h;_++){let R=m[_],B=p[_],U=S[_],X=v*z*4*_;for(let O=0;O<R.count;O++){let G=O*b;d===!0&&(s.fromBufferAttribute(R,O),C[X+G+0]=s.x,C[X+G+1]=s.y,C[X+G+2]=s.z,C[X+G+3]=0),g===!0&&(s.fromBufferAttribute(B,O),C[X+G+4]=s.x,C[X+G+5]=s.y,C[X+G+6]=s.z,C[X+G+7]=0),x===!0&&(s.fromBufferAttribute(U,O),C[X+G+8]=s.x,C[X+G+9]=s.y,C[X+G+10]=s.z,C[X+G+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new oe(v,z)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Rx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var js=class extends fn{constructor(e,t,i,s,r,o,a,l,c,u=Hs){if(u!==Hs&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=ts),i===void 0&&u===Ni&&(i=Ui),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nd=new fn,rf=new js(1,1),id=new ra,sd=new Uc,rd=new ha,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ba(n,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function Lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),Ht(t,i)}}function Ux(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;cf.set(i),n.uniformMatrix3fv(this.addr,!1,cf),Ht(t,i)}}function Nx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;lf.set(i),n.uniformMatrix4fv(this.addr,!1,lf),Ht(t,i)}}function zx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function Bx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Wx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=jf,r=rf):r=nd,t.setTexture2D(e||r,s)}function Xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||sd,s)}function Yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||rd,s)}function qx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||id,s)}function Zx(n){switch(n){case 5126:return Cx;case 35664:return Px;case 35665:return Ix;case 35666:return Dx;case 35674:return Lx;case 35675:return Ux;case 35676:return Nx;case 5124:case 35670:return zx;case 35667:case 35671:return Ox;case 35668:case 35672:return Fx;case 35669:case 35673:return kx;case 5125:return Bx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}function $x(n,e){n.uniform1fv(this.addr,e)}function jx(n,e){let t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function Jx(n,e){let t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function Kx(n,e){let t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function Qx(n,e){let t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ev(n,e){let t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tv(n,e){let t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nv(n,e){n.uniform1iv(this.addr,e)}function iv(n,e){n.uniform2iv(this.addr,e)}function sv(n,e){n.uniform3iv(this.addr,e)}function rv(n,e){n.uniform4iv(this.addr,e)}function ov(n,e){n.uniform1uiv(this.addr,e)}function av(n,e){n.uniform2uiv(this.addr,e)}function lv(n,e){n.uniform3uiv(this.addr,e)}function cv(n,e){n.uniform4uiv(this.addr,e)}function hv(n,e,t){let i=this.cache,s=e.length,r=Ba(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||nd,r[o])}function uv(n,e,t){let i=this.cache,s=e.length,r=Ba(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sd,r[o])}function fv(n,e,t){let i=this.cache,s=e.length,r=Ba(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rd,r[o])}function dv(n,e,t){let i=this.cache,s=e.length,r=Ba(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||id,r[o])}function pv(n){switch(n){case 5126:return $x;case 35664:return jx;case 35665:return Jx;case 35666:return Kx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}var Oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zx(t.type)}},Fc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function uf(n,e){n.seq.push(e),n.map[e.id]=e}function mv(n,e,t){let i=n.name,s=i.length;for(Bl.lastIndex=0;;){let r=Bl.exec(i),o=Bl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uf(t,c===void 0?new Oc(a,n,e):new Fc(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new kc(a),uf(t,h)),t=h}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function ff(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gv=37297,xv=0;function vv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var df=new tt;function yv(n){lt._getMatrix(df,lt.workingColorSpace,n);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case ka:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+vv(n.getShaderSource(e),o)}else return s}function _v(n,e){let t=yv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mv(n,e){let t;switch(e){case vh:t="Linear";break;case yh:t="Reinhard";break;case _h:t="Cineon";break;case Mh:t="ACESFilmic";break;case bh:t="AgX";break;case jr:t="Neutral";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bo=new D;function bv(){lt.getLuminanceCoefficients(Bo);let n=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Sv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ev(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ir(n){return n!==""}function mf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(Tv,Rv)}var Av=new Map;function Rv(n,e){let t=it[e];if(t===void 0){let i=Av.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(n){return n.replace(Cv,Pv)}function Pv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ua?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Na?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Dv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ys&&(e="ENVMAP_MODE_REFRACTION"),e}function Uv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kf:e="ENVMAP_BLENDING_MULTIPLY";break;case zp:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function Nv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Iv(t),c=Dv(t),u=Lv(t),h=Uv(t),f=Nv(t),d=wv(t),g=Sv(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?it.tonemapping_pars_fragment:"",t.toneMapping!==Di?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Bc(o),o=mf(o,t),o=gf(o,t),a=Bc(a),a=mf(a,t),a=gf(a,t),o=xf(o),a=xf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+o,v=S+p+a,z=ff(s,s.VERTEX_SHADER,y),C=ff(s,s.FRAGMENT_SHADER,v);s.attachShader(x,z),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(R){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(z).trim(),X=s.getShaderInfoLog(C).trim(),O=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,z,C);else{let J=pf(s,z,"vertex"),Z=pf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+J+`
`+Z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||X==="")&&(G=!1);G&&(R.diagnostics={runnable:O,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(z),s.deleteShader(C),b=new Gs(s,x),M=Ev(s,x)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,gv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=C,this}var Ov=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vc(e),t.set(e,i)),i}},Vc=class{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}};function Fv(n,e,t,i,s,r,o){let a=new oa,l=new Hc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,R,B,U){let X=B.fog,O=U.geometry,G=M.isMeshStandardMaterial?B.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),Z=J&&J.mapping===Fa?J.image.height:null,Q=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ye=ae!==void 0?ae.length:0,ke=0;O.morphAttributes.position!==void 0&&(ke=1),O.morphAttributes.normal!==void 0&&(ke=2),O.morphAttributes.color!==void 0&&(ke=3);let nt,ee,ue,Ae;if(Q){let yt=Wn[Q];nt=yt.vertexShader,ee=yt.fragmentShader}else nt=M.vertexShader,ee=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);let fe=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,ot=!!M.map,ie=!!M.matcap,de=!!J,P=!!M.aoMap,De=!!M.lightMap,ce=!!M.bumpMap,Ee=!!M.normalMap,me=!!M.displacementMap,Ge=!!M.emissiveMap,be=!!M.metalnessMap,T=!!M.roughnessMap,w=M.anisotropy>0,q=M.clearcoat>0,te=M.dispersion>0,re=M.iridescence>0,ne=M.sheen>0,Pe=M.transmission>0,ge=w&&!!M.anisotropyMap,Me=q&&!!M.clearcoatMap,Je=q&&!!M.clearcoatNormalMap,he=q&&!!M.clearcoatRoughnessMap,Re=re&&!!M.iridescenceMap,Xe=re&&!!M.iridescenceThicknessMap,qe=ne&&!!M.sheenColorMap,Ce=ne&&!!M.sheenRoughnessMap,at=!!M.specularMap,Ze=!!M.specularColorMap,ft=!!M.specularIntensityMap,F=Pe&&!!M.transmissionMap,xe=Pe&&!!M.thicknessMap,K=!!M.gradientMap,se=!!M.alphaMap,Te=M.alphaTest>0,we=!!M.alphaHash,Qe=!!M.extensions,Dt=Di;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Dt=n.toneMapping);let Kt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:ee,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Be,batchingColor:Be&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:rr,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:ie,envMap:de,envMapMode:de&&J.mapping,envMapCubeUVHeight:Z,aoMap:P,lightMap:De,bumpMap:ce,normalMap:Ee,displacementMap:f&&me,emissiveMap:Ge,normalMapObjectSpace:Ee&&M.normalMapType===Vp,normalMapTangentSpace:Ee&&M.normalMapType===Ph,metalnessMap:be,roughnessMap:T,anisotropy:w,anisotropyMap:ge,clearcoat:q,clearcoatMap:Me,clearcoatNormalMap:Je,clearcoatRoughnessMap:he,dispersion:te,iridescence:re,iridescenceMap:Re,iridescenceThicknessMap:Xe,sheen:ne,sheenColorMap:qe,sheenRoughnessMap:Ce,specularMap:at,specularColorMap:Ze,specularIntensityMap:ft,transmission:Pe,transmissionMap:F,thicknessMap:xe,gradientMap:K,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:Te,alphaHash:we,combine:M.combine,mapUv:ot&&x(M.map.channel),aoMapUv:P&&x(M.aoMap.channel),lightMapUv:De&&x(M.lightMap.channel),bumpMapUv:ce&&x(M.bumpMap.channel),normalMapUv:Ee&&x(M.normalMap.channel),displacementMapUv:me&&x(M.displacementMap.channel),emissiveMapUv:Ge&&x(M.emissiveMap.channel),metalnessMapUv:be&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:ge&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Je&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(M.sheenRoughnessMap.channel),specularMapUv:at&&x(M.specularMap.channel),specularColorMapUv:Ze&&x(M.specularColorMap.channel),specularIntensityMapUv:ft&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:se&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ee||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(ot||se),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:Ge&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)_.push(R),_.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(_,M),y(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function S(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function y(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let _=g[M.type],R;if(_){let B=Wn[_];R=pn.clone(B.uniforms)}else R=M.uniforms;return R}function z(M,_){let R;for(let B=0,U=u.length;B<U;B++){let X=u[B];if(X.cacheKey===_){R=X,++R.usedTimes;break}}return R===void 0&&(R=new zv(n,_,M,r),u.push(R)),R}function C(M){if(--M.usedTimes===0){let _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function I(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:z,releaseProgram:C,releaseShaderCache:I,programs:u,dispose:b}}function kv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _f(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Bv),i.length>1&&i.sort(f||yf),s.length>1&&s.sort(f||yf)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Hv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new _f,n.set(i,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Gv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Wv=0;function Xv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yv(n){let e=new Vv,t=Gv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new Ke,o=new Ke;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,y=0,v=0,z=0,C=0,I=0;c.sort(Xv);for(let M=0,_=c.length;M<_;M++){let R=c[M],B=R.color,U=R.intensity,X=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*U,h+=B.g*U,f+=B.b*U;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],U);I++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,Z=t.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=R.shadow.matrix,S++}i.directional[d]=G,d++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(B).multiplyScalar(U),G.distance=X,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[x]=G;let J=R.shadow;if(R.map&&(i.spotLightMap[z]=R.map,z++,J.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[x]=J.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=O,v++}x++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(B).multiplyScalar(U),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let J=R.shadow,Z=t.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=G,g++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(U),G.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let b=i.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==S||b.numPointShadows!==y||b.numSpotShadows!==v||b.numSpotMaps!==z||b.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+z-C,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,b.directionalLength=d,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=S,b.numPointShadows=y,b.numSpotShadows=v,b.numSpotMaps=z,b.numLightProbes=I,i.version=Wv++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let y=c[p];if(y.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Mf(n){let e=new Yv(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Mf(n),e.set(s,[a])):r>=o.length?(a=new Mf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Gc=class extends $n{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wc=class extends $n{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`;function jv(n,e,t){let i=new Hr,s=new oe,r=new oe,o=new _t,a=new Gc({depthPacking:Hp}),l=new Wc,c={},u=t.maxTextureSize,h={[qn]:Yt,[Yt]:qn,[zt]:zt},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Zv,fragmentShader:$v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let p=this.type;this.render=function(C,I,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=n.getRenderTarget(),_=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),B=n.state;B.setBlending(kt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=p!==ai&&this.type===ai,X=p===ai&&this.type!==ai;for(let O=0,G=C.length;O<G;O++){let J=C[O],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Q=Z.getFrameExtents();if(s.multiply(Q),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,Z.mapSize.y=r.y)),Z.map===null||U===!0||X===!0){let ye=this.type!==ai?{minFilter:nn,magFilter:nn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new qt(s.x,s.y,ye),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ae=Z.getViewportCount();for(let ye=0;ye<ae;ye++){let ke=Z.getViewport(ye);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),B.viewport(o),Z.updateMatrices(J,ye),i=Z.getFrustum(),v(I,b,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===ai&&S(Z,b),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,_,R)};function S(C,I){let b=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qt(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,b,f,x,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,b,d,x,null)}function y(C,I,b,M){let _=null,R=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)_=R;else if(_=b.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let B=_.uuid,U=I.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let O=X[U];O===void 0&&(O=_.clone(),X[U]=O,I.addEventListener("dispose",z)),_=O}if(_.visible=I.visible,_.wireframe=I.wireframe,M===ai?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=n.properties.get(_);B.light=b}return _}function v(C,I,b,M,_){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let U=e.update(C),X=C.material;if(Array.isArray(X)){let O=U.groups;for(let G=0,J=O.length;G<J;G++){let Z=O[G],Q=X[Z.materialIndex];if(Q&&Q.visible){let ae=y(C,Q,M,_);C.onBeforeShadow(n,C,I,b,U,ae,Z),n.renderBufferDirect(b,null,U,ae,C,Z),C.onAfterShadow(n,C,I,b,U,ae,Z)}}}else if(X.visible){let O=y(C,X,M,_);C.onBeforeShadow(n,C,I,b,U,O,null),n.renderBufferDirect(b,null,U,O,C,null),C.onAfterShadow(n,C,I,b,U,O,null)}}let B=C.children;for(let U=0,X=B.length;U<X;U++)v(B[U],I,b,M,_)}function z(C){C.target.removeEventListener("dispose",z);for(let b in c){let M=c[b],_=C.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var Jv={[$l]:jl,[Jl]:ec,[Kl]:tc,[Ws]:Ql,[jl]:$l,[ec]:Jl,[tc]:Kl,[Ql]:Ws};function Kv(n,e){function t(){let F=!1,xe=new _t,K=null,se=new _t(0,0,0,0);return{setMask:function(Te){K!==Te&&!F&&(n.colorMask(Te,Te,Te,Te),K=Te)},setLocked:function(Te){F=Te},setClear:function(Te,we,Qe,Dt,Kt){Kt===!0&&(Te*=Dt,we*=Dt,Qe*=Dt),xe.set(Te,we,Qe,Dt),se.equals(xe)===!1&&(n.clearColor(Te,we,Qe,Dt),se.copy(xe))},reset:function(){F=!1,K=null,se.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,K=null,se=null,Te=null;return{setReversed:function(we){if(xe!==we){let Qe=e.get("EXT_clip_control");xe?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let Dt=Te;Te=null,this.setClear(Dt)}xe=we},getReversed:function(){return xe},setTest:function(we){we?fe(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(we){K!==we&&!F&&(n.depthMask(we),K=we)},setFunc:function(we){if(xe&&(we=Jv[we]),se!==we){switch(we){case $l:n.depthFunc(n.NEVER);break;case jl:n.depthFunc(n.ALWAYS);break;case Jl:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Kl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case ec:n.depthFunc(n.GREATER);break;case tc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=we}},setLocked:function(we){F=we},setClear:function(we){Te!==we&&(xe&&(we=1-we),n.clearDepth(we),Te=we)},reset:function(){F=!1,K=null,se=null,Te=null,xe=!1}}}function s(){let F=!1,xe=null,K=null,se=null,Te=null,we=null,Qe=null,Dt=null,Kt=null;return{setTest:function(yt){F||(yt?fe(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(yt){xe!==yt&&!F&&(n.stencilMask(yt),xe=yt)},setFunc:function(yt,Ln,ei){(K!==yt||se!==Ln||Te!==ei)&&(n.stencilFunc(yt,Ln,ei),K=yt,se=Ln,Te=ei)},setOp:function(yt,Ln,ei){(we!==yt||Qe!==Ln||Dt!==ei)&&(n.stencilOp(yt,Ln,ei),we=yt,Qe=Ln,Dt=ei)},setLocked:function(yt){F=yt},setClear:function(yt){Kt!==yt&&(n.clearStencil(yt),Kt=yt)},reset:function(){F=!1,xe=null,K=null,se=null,Te=null,we=null,Qe=null,Dt=null,Kt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,y=null,v=null,z=null,C=null,I=new Ue(0,0,0),b=0,M=!1,_=null,R=null,B=null,U=null,X=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=J>=2);let Q=null,ae={},ye=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),nt=new _t().fromArray(ye),ee=new _t().fromArray(ke);function ue(F,xe,K,se){let Te=new Uint8Array(4),we=n.createTexture();n.bindTexture(F,we),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<K;Qe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(xe+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return we}let Ae={};Ae[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Ws),ce(!1),Ee(bu),fe(n.CULL_FACE),P(kt);function fe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ie(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ve(F,xe){return h[F]!==xe?(n.bindFramebuffer(F,xe),h[F]=xe,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Be(F,xe){let K=d,se=!1;if(F){K=f.get(xe),K===void 0&&(K=[],f.set(xe,K));let Te=F.textures;if(K.length!==Te.length||K[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Qe=Te.length;we<Qe;we++)K[we]=n.COLOR_ATTACHMENT0+we;K.length=Te.length,se=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,se=!0);se&&n.drawBuffers(K)}function ot(F){return g!==F?(n.useProgram(F),g=F,!0):!1}let ie={[An]:n.FUNC_ADD,[bp]:n.FUNC_SUBTRACT,[wp]:n.FUNC_REVERSE_SUBTRACT};ie[Sp]=n.MIN,ie[Ep]=n.MAX;let de={[sr]:n.ZERO,[Tp]:n.ONE,[Ap]:n.SRC_COLOR,[ql]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Oa]:n.DST_COLOR,[za]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[Pp]:n.ONE_MINUS_DST_COLOR,[Cp]:n.ONE_MINUS_DST_ALPHA,[Dp]:n.CONSTANT_COLOR,[Lp]:n.ONE_MINUS_CONSTANT_COLOR,[Up]:n.CONSTANT_ALPHA,[Np]:n.ONE_MINUS_CONSTANT_ALPHA};function P(F,xe,K,se,Te,we,Qe,Dt,Kt,yt){if(F===kt){x===!0&&(Ie(n.BLEND),x=!1);return}if(x===!1&&(fe(n.BLEND),x=!0),F!==xh){if(F!==m||yt!==M){if((p!==An||v!==An)&&(n.blendEquation(n.FUNC_ADD),p=An,v=An),yt)switch(F){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Li:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Li:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,y=null,z=null,C=null,I.set(0,0,0),b=0,m=F,M=yt}return}Te=Te||xe,we=we||K,Qe=Qe||se,(xe!==p||Te!==v)&&(n.blendEquationSeparate(ie[xe],ie[Te]),p=xe,v=Te),(K!==S||se!==y||we!==z||Qe!==C)&&(n.blendFuncSeparate(de[K],de[se],de[we],de[Qe]),S=K,y=se,z=we,C=Qe),(Dt.equals(I)===!1||Kt!==b)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Kt),I.copy(Dt),b=Kt),m=F,M=!1}function De(F,xe){F.side===zt?Ie(n.CULL_FACE):fe(n.CULL_FACE);let K=F.side===Yt;xe&&(K=!K),ce(K),F.blending===Bs&&F.transparent===!1?P(kt):P(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let se=F.stencilWrite;a.setTest(se),se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){_!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),_=F)}function Ee(F){F!==_p?(fe(n.CULL_FACE),F!==R&&(F===bu?n.cullFace(n.BACK):F===Mp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),R=F}function me(F){F!==B&&(G&&n.lineWidth(F),B=F)}function Ge(F,xe,K){F?(fe(n.POLYGON_OFFSET_FILL),(U!==xe||X!==K)&&(n.polygonOffset(xe,K),U=xe,X=K)):Ie(n.POLYGON_OFFSET_FILL)}function be(F){F?fe(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function T(F){F===void 0&&(F=n.TEXTURE0+O-1),Q!==F&&(n.activeTexture(F),Q=F)}function w(F,xe,K){K===void 0&&(Q===null?K=n.TEXTURE0+O-1:K=Q);let se=ae[K];se===void 0&&(se={type:void 0,texture:void 0},ae[K]=se),(se.type!==F||se.texture!==xe)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(F,xe||Ae[F]),se.type=F,se.texture=xe)}function q(){let F=ae[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(F){nt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function Ce(F){ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function at(F,xe){let K=c.get(xe);K===void 0&&(K=new WeakMap,c.set(xe,K));let se=K.get(F);se===void 0&&(se=n.getUniformBlockIndex(xe,F.name),K.set(F,se))}function Ze(F,xe){let se=c.get(xe).get(F);l.get(xe)!==se&&(n.uniformBlockBinding(xe,se,F.__bindingPointIndex),l.set(xe,se))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,ae={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,y=null,v=null,z=null,C=null,I=new Ue(0,0,0),b=0,M=!1,_=null,R=null,B=null,U=null,X=null,nt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Ie,bindFramebuffer:Ve,drawBuffers:Be,useProgram:ot,setBlending:P,setMaterial:De,setFlipSided:ce,setCullFace:Ee,setLineWidth:me,setPolygonOffset:Ge,setScissorTest:be,activeTexture:T,bindTexture:w,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:Re,texImage3D:Xe,updateUBOMapping:at,uniformBlockBinding:Ze,texStorage2D:Je,texStorage3D:he,texSubImage2D:ne,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:qe,viewport:Ce,reset:ft}}function bf(n,e,t,i){let s=Qv(i);switch(t){case Wf:return n*e;case Yf:return n*e;case qf:return n*e*2;case Th:return n*e/s.components*s.byteLength;case Ah:return n*e/s.components*s.byteLength;case Zf:return n*e*2/s.components*s.byteLength;case Rh:return n*e*2/s.components*s.byteLength;case Xf:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case Ch:return n*e*4/s.components*s.byteLength;case jo:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oc:case lc:return Math.max(n,16)*Math.max(e,8)/4;case rc:case ac:return Math.max(n,8)*Math.max(e,8)/2;case cc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ea:case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $f:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cc:case Pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qv(n){switch(n){case Fn:case Hf:return{byteLength:1,components:1};case Fr:case Vf:case dn:return{byteLength:2,components:1};case Sh:case Eh:return{byteLength:2,components:4};case ts:case wh:case Yn:return{byteLength:4,components:1};case Gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ey(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,w){return d?new OffscreenCanvas(T,w):ia("canvas")}function x(T,w,q){let te=1,re=be(T);if((re.width>q||re.height>q)&&(te=q/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ne=Math.floor(te*re.width),Pe=Math.floor(te*re.height);h===void 0&&(h=g(ne,Pe));let ge=w?g(ne,Pe):h;return ge.width=ne,ge.height=Pe,ge.getContext("2d").drawImage(T,0,0,ne,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+Pe+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,w,q,te,re=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=w;if(w===n.RED&&(q===n.FLOAT&&(ne=n.R32F),q===n.HALF_FLOAT&&(ne=n.R16F),q===n.UNSIGNED_BYTE&&(ne=n.R8)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.R8UI),q===n.UNSIGNED_SHORT&&(ne=n.R16UI),q===n.UNSIGNED_INT&&(ne=n.R32UI),q===n.BYTE&&(ne=n.R8I),q===n.SHORT&&(ne=n.R16I),q===n.INT&&(ne=n.R32I)),w===n.RG&&(q===n.FLOAT&&(ne=n.RG32F),q===n.HALF_FLOAT&&(ne=n.RG16F),q===n.UNSIGNED_BYTE&&(ne=n.RG8)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RG8UI),q===n.UNSIGNED_SHORT&&(ne=n.RG16UI),q===n.UNSIGNED_INT&&(ne=n.RG32UI),q===n.BYTE&&(ne=n.RG8I),q===n.SHORT&&(ne=n.RG16I),q===n.INT&&(ne=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),q===n.UNSIGNED_INT&&(ne=n.RGB32UI),q===n.BYTE&&(ne=n.RGB8I),q===n.SHORT&&(ne=n.RGB16I),q===n.INT&&(ne=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),q===n.UNSIGNED_INT&&(ne=n.RGBA32UI),q===n.BYTE&&(ne=n.RGBA8I),q===n.SHORT&&(ne=n.RGBA16I),q===n.INT&&(ne=n.RGBA32I)),w===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),w===n.RGBA){let Pe=re?ka:lt.getTransfer(te);q===n.FLOAT&&(ne=n.RGBA32F),q===n.HALF_FLOAT&&(ne=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ne=Pe===xt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(T,w){let q;return T?w===null||w===ts||w===Ui?q=n.DEPTH24_STENCIL8:w===Yn?q=n.DEPTH32F_STENCIL8:w===Fr&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ts||w===Ui?q=n.DEPTH_COMPONENT24:w===Yn?q=n.DEPTH_COMPONENT32F:w===Fr&&(q=n.DEPTH_COMPONENT16),q}function z(T,w){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==Xn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function C(T){let w=T.target;w.removeEventListener("dispose",C),b(w),w.isVideoTexture&&u.delete(w)}function I(T){let w=T.target;w.removeEventListener("dispose",I),_(w)}function b(T){let w=i.get(T);if(w.__webglInit===void 0)return;let q=T.source,te=f.get(q);if(te){let re=te[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(T),Object.keys(te).length===0&&f.delete(q)}i.remove(T)}function M(T){let w=i.get(T);n.deleteTexture(w.__webglTexture);let q=T.source,te=f.get(q);delete te[w.__cacheKey],o.memory.textures--}function _(T){let w=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let re=0;re<w.__webglFramebuffer[te].length;re++)n.deleteFramebuffer(w.__webglFramebuffer[te][re]);else n.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)n.deleteFramebuffer(w.__webglFramebuffer[te]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let q=T.textures;for(let te=0,re=q.length;te<re;te++){let ne=i.get(q[te]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(q[te])}i.remove(T)}let R=0;function B(){R=0}function U(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function X(T){let w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function O(T,w){let q=i.get(T);if(T.isVideoTexture&&me(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){let te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,T,w);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function G(T,w){let q=i.get(T);if(T.version>0&&q.__version!==T.version){ee(q,T,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function J(T,w){let q=i.get(T);if(T.version>0&&q.__version!==T.version){ee(q,T,w);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function Z(T,w){let q=i.get(T);if(T.version>0&&q.__version!==T.version){ue(q,T,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}let Q={[ui]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[sc]:n.MIRRORED_REPEAT},ae={[nn]:n.NEAREST,[kp]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},ye={[Gp]:n.NEVER,[$p]:n.ALWAYS,[Wp]:n.LESS,[jf]:n.LEQUAL,[Xp]:n.EQUAL,[Zp]:n.GEQUAL,[Yp]:n.GREATER,[qp]:n.NOTEQUAL};function ke(T,w){if(w.type===Yn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Xn||w.magFilter===dl||w.magFilter===_o||w.magFilter===es||w.minFilter===Xn||w.minFilter===dl||w.minFilter===_o||w.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Q[w.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Q[w.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Q[w.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ae[w.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==_o&&w.minFilter!==es||w.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function nt(T,w){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",C));let te=w.source,re=f.get(te);re===void 0&&(re={},f.set(te,re));let ne=X(w);if(ne!==T.__cacheKey){re[ne]===void 0&&(re[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ne].usedTimes++;let Pe=re[T.__cacheKey];Pe!==void 0&&(re[T.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(w)),T.__cacheKey=ne,T.__webglTexture=re[ne].texture}return q}function ee(T,w,q){let te=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=n.TEXTURE_3D);let re=nt(T,w),ne=w.source;t.bindTexture(te,T.__webglTexture,n.TEXTURE0+q);let Pe=i.get(ne);if(ne.version!==Pe.__version||re===!0){t.activeTexture(n.TEXTURE0+q);let ge=lt.getPrimaries(lt.workingColorSpace),Me=w.colorSpace===Ii?null:lt.getPrimaries(w.colorSpace),Je=w.colorSpace===Ii||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let he=x(w.image,!1,s.maxTextureSize);he=Ge(w,he);let Re=r.convert(w.format,w.colorSpace),Xe=r.convert(w.type),qe=y(w.internalFormat,Re,Xe,w.colorSpace,w.isVideoTexture);ke(te,w);let Ce,at=w.mipmaps,Ze=w.isVideoTexture!==!0,ft=Pe.__version===void 0||re===!0,F=ne.dataReady,xe=z(w,he);if(w.isDepthTexture)qe=v(w.format===Ni,w.type),ft&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,qe,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,qe,he.width,he.height,0,Re,Xe,null));else if(w.isDataTexture)if(at.length>0){Ze&&ft&&t.texStorage2D(n.TEXTURE_2D,xe,qe,at[0].width,at[0].height);for(let K=0,se=at.length;K<se;K++)Ce=at[K],Ze?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Re,Xe,Ce.data):t.texImage2D(n.TEXTURE_2D,K,qe,Ce.width,Ce.height,0,Re,Xe,Ce.data);w.generateMipmaps=!1}else Ze?(ft&&t.texStorage2D(n.TEXTURE_2D,xe,qe,he.width,he.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Re,Xe,he.data)):t.texImage2D(n.TEXTURE_2D,0,qe,he.width,he.height,0,Re,Xe,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,qe,at[0].width,at[0].height,he.depth);for(let K=0,se=at.length;K<se;K++)if(Ce=at[K],w.format!==Mn)if(Re!==null)if(Ze){if(F)if(w.layerUpdates.size>0){let Te=bf(Ce.width,Ce.height,w.format,w.type);for(let we of w.layerUpdates){let Qe=Ce.data.subarray(we*Te/Ce.data.BYTES_PER_ELEMENT,(we+1)*Te/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,we,Ce.width,Ce.height,1,Re,Qe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,he.depth,Re,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,qe,Ce.width,Ce.height,he.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ce.width,Ce.height,he.depth,Re,Xe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,qe,Ce.width,Ce.height,he.depth,0,Re,Xe,Ce.data)}else{Ze&&ft&&t.texStorage2D(n.TEXTURE_2D,xe,qe,at[0].width,at[0].height);for(let K=0,se=at.length;K<se;K++)Ce=at[K],w.format!==Mn?Re!==null?Ze?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,K,qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ce.width,Ce.height,Re,Xe,Ce.data):t.texImage2D(n.TEXTURE_2D,K,qe,Ce.width,Ce.height,0,Re,Xe,Ce.data)}else if(w.isDataArrayTexture)if(Ze){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,qe,he.width,he.height,he.depth),F)if(w.layerUpdates.size>0){let K=bf(he.width,he.height,w.format,w.type);for(let se of w.layerUpdates){let Te=he.data.subarray(se*K/he.data.BYTES_PER_ELEMENT,(se+1)*K/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Re,Xe,Te)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,Xe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,he.width,he.height,he.depth,0,Re,Xe,he.data);else if(w.isData3DTexture)Ze?(ft&&t.texStorage3D(n.TEXTURE_3D,xe,qe,he.width,he.height,he.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,Xe,he.data)):t.texImage3D(n.TEXTURE_3D,0,qe,he.width,he.height,he.depth,0,Re,Xe,he.data);else if(w.isFramebufferTexture){if(ft)if(Ze)t.texStorage2D(n.TEXTURE_2D,xe,qe,he.width,he.height);else{let K=he.width,se=he.height;for(let Te=0;Te<xe;Te++)t.texImage2D(n.TEXTURE_2D,Te,qe,K,se,0,Re,Xe,null),K>>=1,se>>=1}}else if(at.length>0){if(Ze&&ft){let K=be(at[0]);t.texStorage2D(n.TEXTURE_2D,xe,qe,K.width,K.height)}for(let K=0,se=at.length;K<se;K++)Ce=at[K],Ze?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Re,Xe,Ce):t.texImage2D(n.TEXTURE_2D,K,qe,Re,Xe,Ce);w.generateMipmaps=!1}else if(Ze){if(ft){let K=be(he);t.texStorage2D(n.TEXTURE_2D,xe,qe,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Xe,he)}else t.texImage2D(n.TEXTURE_2D,0,qe,Re,Xe,he);m(w)&&p(te),Pe.__version=ne.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ue(T,w,q){if(w.image.length!==6)return;let te=nt(T,w),re=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+q);let ne=i.get(re);if(re.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+q);let Pe=lt.getPrimaries(lt.workingColorSpace),ge=w.colorSpace===Ii?null:lt.getPrimaries(w.colorSpace),Me=w.colorSpace===Ii||Pe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Je=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let se=0;se<6;se++)!Je&&!he?Re[se]=x(w.image[se],!0,s.maxCubemapSize):Re[se]=he?w.image[se].image:w.image[se],Re[se]=Ge(w,Re[se]);let Xe=Re[0],qe=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),at=y(w.internalFormat,qe,Ce,w.colorSpace),Ze=w.isVideoTexture!==!0,ft=ne.__version===void 0||te===!0,F=re.dataReady,xe=z(w,Xe);ke(n.TEXTURE_CUBE_MAP,w);let K;if(Je){Ze&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,at,Xe.width,Xe.height);for(let se=0;se<6;se++){K=Re[se].mipmaps;for(let Te=0;Te<K.length;Te++){let we=K[Te];w.format!==Mn?qe!==null?Ze?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,we.width,we.height,qe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,at,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,we.width,we.height,qe,Ce,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,at,we.width,we.height,0,qe,Ce,we.data)}}}else{if(K=w.mipmaps,Ze&&ft){K.length>0&&xe++;let se=be(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,at,se.width,se.height)}for(let se=0;se<6;se++)if(he){Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Re[se].width,Re[se].height,qe,Ce,Re[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,at,Re[se].width,Re[se].height,0,qe,Ce,Re[se].data);for(let Te=0;Te<K.length;Te++){let Qe=K[Te].image[se].image;Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Qe.width,Qe.height,qe,Ce,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,at,Qe.width,Qe.height,0,qe,Ce,Qe.data)}}else{Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,qe,Ce,Re[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,at,qe,Ce,Re[se]);for(let Te=0;Te<K.length;Te++){let we=K[Te];Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,qe,Ce,we.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,at,qe,Ce,we.image[se])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),ne.__version=re.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Ae(T,w,q,te,re,ne){let Pe=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Me=y(q.internalFormat,Pe,ge,q.colorSpace),Je=i.get(w),he=i.get(q);if(he.__renderTarget=w,!Je.__hasExternalTextures){let Re=Math.max(1,w.width>>ne),Xe=Math.max(1,w.height>>ne);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,Me,Re,Xe,w.depth,0,Pe,ge,null):t.texImage2D(re,ne,Me,Re,Xe,0,Pe,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,re,he.__webglTexture,0,ce(w)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,re,he.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(T,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,T),w.depthBuffer){let te=w.depthTexture,re=te&&te.isDepthTexture?te.type:null,ne=v(w.stencilBuffer,re),Pe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=ce(w);Ee(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ne,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ne,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,T)}else{let te=w.textures;for(let re=0;re<te.length;re++){let ne=te[re],Pe=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),Me=y(ne.internalFormat,Pe,ge,ne.colorSpace),Je=ce(w);q&&Ee(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Me,w.width,w.height):Ee(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,Me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=i.get(w.depthTexture);te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);let re=te.__webglTexture,ne=ce(w);if(w.depthTexture.format===Hs)Ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(w.depthTexture.format===Ni)Ee(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ve(T){let w=i.get(T),q=T.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==T.depthTexture){let te=T.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){let re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),w.__depthDisposeCallback=re}w.__boundDepthTexture=te}if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,T)}else if(q){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=n.createRenderbuffer(),fe(w.__webglDepthbuffer[te],T,!1);else{let re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),fe(w.__webglDepthbuffer,T,!1);else{let te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(T,w,q){let te=i.get(T);w!==void 0&&Ae(te.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ve(T)}function ot(T){let w=T.texture,q=i.get(T),te=i.get(w);T.addEventListener("dispose",I);let re=T.textures,ne=T.isWebGLCubeRenderTarget===!0,Pe=re.length>1;if(Pe||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,o.memory.textures++),ne){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Me=0;Me<w.mipmaps.length;Me++)q.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else q.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)q.__webglFramebuffer[ge]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ge=0,Me=re.length;ge<Me;ge++){let Je=i.get(re[ge]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Ee(T)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){let Me=re[ge];q.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);let Je=r.convert(Me.format,Me.colorSpace),he=r.convert(Me.type),Re=y(Me.internalFormat,Je,he,Me.colorSpace,T.isXRRenderTarget===!0),Xe=ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Re,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(q.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ke(n.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Ae(q.__webglFramebuffer[ge][Me],T,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else Ae(q.__webglFramebuffer[ge],T,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,Me=re.length;ge<Me;ge++){let Je=re[ge],he=i.get(Je);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),ke(n.TEXTURE_2D,Je),Ae(q.__webglFramebuffer,T,Je,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(Je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),ke(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Ae(q.__webglFramebuffer[Me],T,w,n.COLOR_ATTACHMENT0,ge,Me);else Ae(q.__webglFramebuffer,T,w,n.COLOR_ATTACHMENT0,ge,0);m(w)&&p(ge),t.unbindTexture()}T.depthBuffer&&Ve(T)}function ie(T){let w=T.textures;for(let q=0,te=w.length;q<te;q++){let re=w[q];if(m(re)){let ne=S(T),Pe=i.get(re).__webglTexture;t.bindTexture(ne,Pe),p(ne),t.unbindTexture()}}}let de=[],P=[];function De(T){if(T.samples>0){if(Ee(T)===!1){let w=T.textures,q=T.width,te=T.height,re=n.COLOR_BUFFER_BIT,ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(T),ge=w.length>1;if(ge)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);let Je=i.get(w[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,q,te,0,0,q,te,re,n.NEAREST),l===!0&&(de.length=0,P.length=0,de.push(n.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(de.push(ne),P.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);let Je=i.get(w[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let w=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ce(T){return Math.min(s.maxSamples,T.samples)}function Ee(T){let w=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function me(T){let w=o.render.frame;u.get(T)!==w&&(u.set(T,w),T.update())}function Ge(T,w){let q=T.colorSpace,te=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==rr&&q!==Ii&&(lt.getTransfer(q)===xt?(te!==Mn||re!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=Be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ee}function ty(n,e){function t(i,s=Ii){let r,o=lt.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===Sh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hf)return n.BYTE;if(i===Vf)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===wh)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===Wf)return n.ALPHA;if(i===Xf)return n.RGB;if(i===Mn)return n.RGBA;if(i===Yf)return n.LUMINANCE;if(i===qf)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Th)return n.RED;if(i===Ah)return n.RED_INTEGER;if(i===Zf)return n.RG;if(i===Rh)return n.RG_INTEGER;if(i===Ch)return n.RGBA_INTEGER;if(i===jo||i===Jo||i===Ko||i===Qo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===oc||i===ac||i===lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===hc||i===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===hc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fc||i===dc||i===pc||i===mc||i===gc||i===xc||i===vc||i===yc||i===_c||i===Mc||i===bc||i===wc||i===Sc||i===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===Tc||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ea)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Rc||i===Cc||i===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ui?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Xc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$e=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},ny={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:iy,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends zi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new Yc,m=t.getContextAttributes(),p=null,S=null,y=[],v=[],z=new oe,C=null,I=new tn;I.viewport=new _t;let b=new tn;b.viewport=new _t;let M=[I,b],_=new Xc,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Ur,y[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Ur,y[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Ur,y[ee]=ue),ue.getHandSpace()};function U(ee){let ue=v.indexOf(ee.inputSource);if(ue===-1)return;let Ae=y[ue];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,c||o),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",O);for(let ee=0;ee<y.length;ee++){let ue=v[ee];ue!==null&&(v[ee]=null,y[ee].disconnect(ue))}R=null,B=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,S=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",X),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){let ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new qt(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Ae=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Ni:Hs,Ae=m.stencil?Ui:ts);let Ie={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:Mn,type:Fn,depthTexture:new js(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(ee){for(let ue=0;ue<ee.removed.length;ue++){let Ae=ee.removed[ue],fe=v.indexOf(Ae);fe>=0&&(v[fe]=null,y[fe].disconnect(Ae))}for(let ue=0;ue<ee.added.length;ue++){let Ae=ee.added[ue],fe=v.indexOf(Ae);if(fe===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=v.length){v.push(Ae),fe=Ve;break}else if(v[Ve]===null){v[Ve]=Ae,fe=Ve;break}if(fe===-1)break}let Ie=y[fe];Ie&&Ie.connect(Ae)}}let G=new D,J=new D;function Z(ee,ue,Ae){G.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(Ae.matrixWorld);let fe=G.distanceTo(J),Ie=ue.projectionMatrix.elements,Ve=Ae.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),ot=Ie[14]/(Ie[10]+1),ie=(Ie[9]+1)/Ie[5],de=(Ie[9]-1)/Ie[5],P=(Ie[8]-1)/Ie[0],De=(Ve[8]+1)/Ve[0],ce=Be*P,Ee=Be*De,me=fe/(-P+De),Ge=me*-P;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ge),ee.translateZ(me),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ie[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let be=Be+me,T=ot+me,w=ce-Ge,q=Ee+(fe-Ge),te=ie*ot/T*be,re=de*ot/T*be;ee.projectionMatrix.makePerspective(w,q,te,re,be,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Q(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ue=ee.near,Ae=ee.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),_.near=b.near=I.near=ue,_.far=b.far=I.far=Ae,(R!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,B=_.far),I.layers.mask=ee.layers.mask|2,b.layers.mask=ee.layers.mask|4,_.layers.mask=I.layers.mask|b.layers.mask;let fe=ee.parent,Ie=_.cameras;Q(_,fe);for(let Ve=0;Ve<Ie.length;Ve++)Q(Ie[Ve],fe);Ie.length===2?Z(_,I,b):_.projectionMatrix.copy(I.projectionMatrix),ae(ee,_,fe)};function ae(ee,ue,Ae){Ae===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=kr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ye=null;function ke(ee,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){let Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let fe=!1;Ae.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let Ve=0;Ve<Ae.length;Ve++){let Be=Ae[Ve],ot=null;if(d!==null)ot=d.getViewport(Be);else{let de=h.getViewSubImage(f,Be);ot=de.viewport,Ve===0&&(e.setRenderTargetTextures(S,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(S))}let ie=M[Ve];ie===void 0&&(ie=new tn,ie.layers.enable(Ve),ie.viewport=new _t,M[Ve]=ie),ie.matrix.fromArray(Be.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Be.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(_.matrix.copy(ie.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(ie)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Ve=h.getDepthInformation(Ae[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,s.renderState)}}for(let Ae=0;Ae<y.length;Ae++){let fe=v[Ae],Ie=y[Ae];fe!==null&&Ie!==void 0&&Ie.update(fe,ue,c||o)}ye&&ye(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}let nt=new td;nt.setAnimationLoop(ke),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}},$i=new Rn,ry=new Ke;function oy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ed(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,$i.copy(v),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler($i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ay(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let v=y.program;i.uniformBlockBinding(S,v)}function c(S,y){let v=s[S.id];v===void 0&&(g(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));let z=y.program;i.updateUBOMapping(S,z);let C=e.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function u(S){let y=h();S.__bindingPointIndex=y;let v=n.createBuffer(),z=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,z,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let y=s[S.id],v=S.uniforms,z=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,I=v.length;C<I;C++){let b=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,_=b.length;M<_;M++){let R=b[M];if(d(R,C,M,z)===!0){let B=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],X=0;for(let O=0;O<U.length;O++){let G=U[O],J=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,B+X,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,y,v,z){let C=S.value,I=y+"_"+v;if(z[I]===void 0)return typeof C=="number"||typeof C=="boolean"?z[I]=C:z[I]=C.clone(),!0;{let b=z[I];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return z[I]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function g(S){let y=S.uniforms,v=0,z=16;for(let I=0,b=y.length;I<b;I++){let M=Array.isArray(y[I])?y[I]:[y[I]];for(let _=0,R=M.length;_<R;_++){let B=M[_],U=Array.isArray(B.value)?B.value:[B.value];for(let X=0,O=U.length;X<O;X++){let G=U[X],J=x(G),Z=v%z,Q=Z%J.boundary,ae=Z+Q;v+=Q,ae!==0&&z-ae<J.storage&&(v+=z-ae),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=J.storage}}}let C=v%z;return C>0&&(v+=z-C),S.__size=v,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ua=class{constructor(e={}){let{canvas:t=fm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Di,this.toneMappingExposure=1;let v=this,z=!1,C=0,I=0,b=null,M=-1,_=null,R=new _t,B=new _t,U=null,X=new Ue(0),O=0,G=t.width,J=t.height,Z=1,Q=null,ae=null,ye=new _t(0,0,G,J),ke=new _t(0,0,G,J),nt=!1,ee=new Hr,ue=!1,Ae=!1,fe=new Ke,Ie=new Ke,Ve=new D,Be=new _t,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function de(){return b===null?Z:1}let P=i;function De(E,H){return t.getContext(E,H)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",we,!1),P===null){let H="webgl2";if(P=De(H,E),P===null)throw De(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ce,Ee,me,Ge,be,T,w,q,te,re,ne,Pe,ge,Me,Je,he,Re,Xe,qe,Ce,at,Ze,ft,F;function xe(){ce=new wx(P),ce.init(),Ze=new ty(P,ce),Ee=new xx(P,ce,e,Ze),me=new Kv(P,ce),Ee.reverseDepthBuffer&&f&&me.buffers.depth.setReversed(!0),Ge=new Tx(P),be=new kv,T=new ey(P,ce,me,be,Ee,Ze,Ge),w=new yx(v),q=new bx(v),te=new Lm(P),ft=new mx(P,te),re=new Sx(P,te,Ge,ft),ne=new Rx(P,re,te,Ge),qe=new Ax(P,Ee,T),he=new vx(be),Pe=new Fv(v,w,q,ce,Ee,ft,he),ge=new oy(v,be),Me=new Hv,Je=new qv(ce),Xe=new px(v,w,q,me,ne,d,l),Re=new jv(v,ne,Ee),F=new ay(P,Ge,Ee,me),Ce=new gx(P,ce,Ge),at=new Ex(P,ce,Ge),Ge.programs=Pe.programs,v.capabilities=Ee,v.extensions=ce,v.properties=be,v.renderLists=Me,v.shadowMap=Re,v.state=me,v.info=Ge}xe();let K=new qc(v,P);this.xr=K,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(G,J,!1))},this.getSize=function(E){return E.set(G,J)},this.setSize=function(E,H,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,J=H,t.width=Math.floor(E*Z),t.height=Math.floor(H*Z),$===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(G*Z,J*Z).floor()},this.setDrawingBufferSize=function(E,H,$){G=E,J=H,Z=$,t.width=Math.floor(E*$),t.height=Math.floor(H*$),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,H,$,j){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,H,$,j),me.viewport(R.copy(ye).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,H,$,j){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,H,$,j),me.scissor(B.copy(ke).multiplyScalar(Z).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){me.setScissorTest(nt=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(E=!0,H=!0,$=!0){let j=0;if(E){let V=!1;if(b!==null){let pe=b.texture.format;V=pe===Ch||pe===Rh||pe===Ah}if(V){let pe=b.texture.type,Se=pe===Fn||pe===ts||pe===Fr||pe===Ui||pe===Sh||pe===Eh,Ne=Xe.getClearColor(),ze=Xe.getClearAlpha(),je=Ne.r,et=Ne.g,Oe=Ne.b;Se?(g[0]=je,g[1]=et,g[2]=Oe,g[3]=ze,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=je,x[1]=et,x[2]=Oe,x[3]=ze,P.clearBufferiv(P.COLOR,0,x))}else j|=P.COLOR_BUFFER_BIT}H&&(j|=P.DEPTH_BUFFER_BIT),$&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Me.dispose(),Je.dispose(),be.dispose(),w.dispose(),q.dispose(),ne.dispose(),ft.dispose(),F.dispose(),Pe.dispose(),K.dispose(),K.removeEventListener("sessionstart",pu),K.removeEventListener("sessionend",mu),Gi.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let E=Ge.autoReset,H=Re.enabled,$=Re.autoUpdate,j=Re.needsUpdate,V=Re.type;xe(),Ge.autoReset=E,Re.enabled=H,Re.autoUpdate=$,Re.needsUpdate=j,Re.type=V}function we(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qe(E){let H=E.target;H.removeEventListener("dispose",Qe),Dt(H)}function Dt(E){Kt(E),be.remove(E)}function Kt(E){let H=be.get(E).programs;H!==void 0&&(H.forEach(function($){Pe.releaseProgram($)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,$,j,V,pe){H===null&&(H=ot);let Se=V.isMesh&&V.matrixWorld.determinant()<0,Ne=xp(E,H,$,j,V);me.setMaterial(j,Se);let ze=$.index,je=1;if(j.wireframe===!0){if(ze=re.getWireframeAttribute($),ze===void 0)return;je=2}let et=$.drawRange,Oe=$.attributes.position,dt=et.start*je,wt=(et.start+et.count)*je;pe!==null&&(dt=Math.max(dt,pe.start*je),wt=Math.min(wt,(pe.start+pe.count)*je)),ze!==null?(dt=Math.max(dt,0),wt=Math.min(wt,ze.count)):Oe!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,Oe.count));let St=wt-dt;if(St<0||St===1/0)return;ft.setup(V,j,Ne,$,ze);let hn,mt=Ce;if(ze!==null&&(hn=te.get(ze),mt=at,mt.setIndex(hn)),V.isMesh)j.wireframe===!0?(me.setLineWidth(j.wireframeLinewidth*de()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(V.isLine){let He=j.linewidth;He===void 0&&(He=1),me.setLineWidth(He*de()),V.isLineSegments?mt.setMode(P.LINES):V.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else V.isPoints?mt.setMode(P.POINTS):V.isSprite&&mt.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)mt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let He=V._multiDrawStarts,ti=V._multiDrawCounts,gt=V._multiDrawCount,Un=ze?te.get(ze).bytesPerElement:1,Ms=be.get(j).currentProgram.getUniforms();for(let vn=0;vn<gt;vn++)Ms.setValue(P,"_gl_DrawID",vn),mt.render(He[vn]/Un,ti[vn])}else if(V.isInstancedMesh)mt.renderInstances(dt,St,V.count);else if($.isInstancedBufferGeometry){let He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ti=Math.min($.instanceCount,He);mt.renderInstances(dt,St,ti)}else mt.render(dt,St)};function yt(E,H,$){E.transparent===!0&&E.side===zt&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,yo(E,H,$),E.side=qn,E.needsUpdate=!0,yo(E,H,$),E.side=zt):yo(E,H,$)}this.compile=function(E,H,$=null){$===null&&($=E),p=Je.get($),p.init(H),y.push(p),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==$&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let j=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pe=V.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let Ne=pe[Se];yt(Ne,$,V),j.add(Ne)}else yt(pe,$,V),j.add(pe)}),y.pop(),p=null,j},this.compileAsync=function(E,H,$=null){let j=this.compile(E,H,$);return new Promise(V=>{function pe(){if(j.forEach(function(Se){be.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){V(E);return}setTimeout(pe,10)}ce.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ln=null;function ei(E){Ln&&Ln(E)}function pu(){Gi.stop()}function mu(){Gi.start()}let Gi=new td;Gi.setAnimationLoop(ei),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(E){Ln=E,K.setAnimationLoop(E),E===null?Gi.stop():Gi.start()},K.addEventListener("sessionstart",pu),K.addEventListener("sessionend",mu),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,H,b),p=Je.get(E,y.length),p.init(H),y.push(p),Ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(Ie),Ae=this.localClippingEnabled,ue=he.init(this.clippingPlanes,Ae),m=Me.get(E,S.length),m.init(),S.push(m),K.enabled===!0&&K.isPresenting===!0){let pe=v.xr.getDepthSensingMesh();pe!==null&&fl(pe,H,-1/0,v.sortObjects)}fl(E,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,ae),ie=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ie&&Xe.addToRenderList(m,E),this.info.render.frame++,ue===!0&&he.beginShadows();let $=p.state.shadowsArray;Re.render($,E,H),ue===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){let pe=H.cameras;if(V.length>0)for(let Se=0,Ne=pe.length;Se<Ne;Se++){let ze=pe[Se];xu(j,V,E,ze)}ie&&Xe.render(E);for(let Se=0,Ne=pe.length;Se<Ne;Se++){let ze=pe[Se];gu(m,E,ze,ze.viewport)}}else V.length>0&&xu(j,V,E,H),ie&&Xe.render(E),gu(m,E,H);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(v,E,H),ft.resetDefaultState(),M=-1,_=null,y.pop(),y.length>0?(p=y[y.length-1],ue===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function fl(E,H,$,j){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){j&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);let Se=ne.update(E),Ne=E.material;Ne.visible&&m.push(E,Se,Ne,$,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ee.intersectsObject(E))){let Se=ne.update(E),Ne=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Be.copy(Se.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ne)){let ze=Se.groups;for(let je=0,et=ze.length;je<et;je++){let Oe=ze[je],dt=Ne[Oe.materialIndex];dt&&dt.visible&&m.push(E,Se,dt,$,Be.z,Oe)}}else Ne.visible&&m.push(E,Se,Ne,$,Be.z,null)}}let pe=E.children;for(let Se=0,Ne=pe.length;Se<Ne;Se++)fl(pe[Se],H,$,j)}function gu(E,H,$,j){let V=E.opaque,pe=E.transmissive,Se=E.transparent;p.setupLightsView($),ue===!0&&he.setGlobalState(v.clippingPlanes,$),j&&me.viewport(R.copy(j)),V.length>0&&vo(V,H,$),pe.length>0&&vo(pe,H,$),Se.length>0&&vo(Se,H,$),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function xu(E,H,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new qt(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?dn:Fn,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let pe=p.state.transmissionRenderTarget[j.id],Se=j.viewport||R;pe.setSize(Se.z,Se.w);let Ne=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(X),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),ie&&Xe.render($);let ze=v.toneMapping;v.toneMapping=Di;let je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ue===!0&&he.setGlobalState(v.clippingPlanes,j),vo(E,$,j),T.updateMultisampleRenderTarget(pe),T.updateRenderTargetMipmap(pe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Oe=0,dt=H.length;Oe<dt;Oe++){let wt=H[Oe],St=wt.object,hn=wt.geometry,mt=wt.material,He=wt.group;if(mt.side===zt&&St.layers.test(j.layers)){let ti=mt.side;mt.side=Yt,mt.needsUpdate=!0,vu(St,$,j,hn,mt,He),mt.side=ti,mt.needsUpdate=!0,et=!0}}et===!0&&(T.updateMultisampleRenderTarget(pe),T.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ne),v.setClearColor(X,O),je!==void 0&&(j.viewport=je),v.toneMapping=ze}function vo(E,H,$){let j=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pe=E.length;V<pe;V++){let Se=E[V],Ne=Se.object,ze=Se.geometry,je=j===null?Se.material:j,et=Se.group;Ne.layers.test($.layers)&&vu(Ne,H,$,ze,je,et)}}function vu(E,H,$,j,V,pe){E.onBeforeRender(v,H,$,j,V,pe),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(v,H,$,j,E,pe),V.transparent===!0&&V.side===zt&&V.forceSinglePass===!1?(V.side=Yt,V.needsUpdate=!0,v.renderBufferDirect($,H,j,V,E,pe),V.side=qn,V.needsUpdate=!0,v.renderBufferDirect($,H,j,V,E,pe),V.side=zt):v.renderBufferDirect($,H,j,V,E,pe),E.onAfterRender(v,H,$,j,V,pe)}function yo(E,H,$){H.isScene!==!0&&(H=ot);let j=be.get(E),V=p.state.lights,pe=p.state.shadowsArray,Se=V.state.version,Ne=Pe.getParameters(E,V.state,pe,H,$),ze=Pe.getProgramCacheKey(Ne),je=j.programs;j.environment=E.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(E.isMeshStandardMaterial?q:w).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",Qe),je=new Map,j.programs=je);let et=je.get(ze);if(et!==void 0){if(j.currentProgram===et&&j.lightsStateVersion===Se)return _u(E,Ne),et}else Ne.uniforms=Pe.getUniforms(E),E.onBeforeCompile(Ne,v),et=Pe.acquireProgram(Ne,ze),je.set(ze,et),j.uniforms=Ne.uniforms;let Oe=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=he.uniform),_u(E,Ne),j.needsLights=yp(E),j.lightsStateVersion=Se,j.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.directionalShadowMap.value=V.state.directionalShadowMap,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotShadowMap.value=V.state.spotShadowMap,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMap.value=V.state.pointShadowMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=et,j.uniformsList=null,et}function yu(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Gs.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function _u(E,H){let $=be.get(E);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function xp(E,H,$,j,V){H.isScene!==!0&&(H=ot),T.resetTextureUnits();let pe=H.fog,Se=j.isMeshStandardMaterial?H.environment:null,Ne=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:rr,ze=(j.isMeshStandardMaterial?q:w).get(j.envMap||Se),je=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color,St=Di;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(St=v.toneMapping);let hn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=hn!==void 0?hn.length:0,He=be.get(j),ti=p.state.lights;if(ue===!0&&(Ae===!0||E!==_)){let En=E===_&&j.id===M;he.setState(j,E,En)}let gt=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ti.state.version||He.outputColorSpace!==Ne||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isBatchedMesh&&He.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&He.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==ze||j.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==je||He.vertexTangents!==et||He.morphTargets!==Oe||He.morphNormals!==dt||He.morphColors!==wt||He.toneMapping!==St||He.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,He.__version=j.version);let Un=He.currentProgram;gt===!0&&(Un=yo(j,H,V));let Ms=!1,vn=!1,_r=!1,Et=Un.getUniforms(),Gn=He.uniforms;if(me.useProgram(Un.program)&&(Ms=!0,vn=!0,_r=!0),j.id!==M&&(M=j.id,vn=!0),Ms||_!==E){me.buffers.depth.getReversed()?(fe.copy(E.projectionMatrix),pm(fe),mm(fe),Et.setValue(P,"projectionMatrix",fe)):Et.setValue(P,"projectionMatrix",E.projectionMatrix),Et.setValue(P,"viewMatrix",E.matrixWorldInverse);let wi=Et.map.cameraPosition;wi!==void 0&&wi.setValue(P,Ve.setFromMatrixPosition(E.matrixWorld)),Ee.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Et.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,vn=!0,_r=!0)}if(V.isSkinnedMesh){Et.setOptional(P,V,"bindMatrix"),Et.setOptional(P,V,"bindMatrixInverse");let En=V.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Et.setValue(P,"boneTexture",En.boneTexture,T))}V.isBatchedMesh&&(Et.setOptional(P,V,"batchingTexture"),Et.setValue(P,"batchingTexture",V._matricesTexture,T),Et.setOptional(P,V,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",V._indirectTexture,T),Et.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",V._colorsTexture,T));let Mr=$.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&qe.update(V,$,Un),(vn||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,Et.setValue(P,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Gn.envMap.value=ze,Gn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(Gn.envMapIntensity.value=H.environmentIntensity),vn&&(Et.setValue(P,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&vp(Gn,_r),pe&&j.fog===!0&&ge.refreshFogUniforms(Gn,pe),ge.refreshMaterialUniforms(Gn,j,Z,J,p.state.transmissionRenderTarget[E.id]),Gs.upload(P,yu(He),Gn,T)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Gs.upload(P,yu(He),Gn,T),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Et.setValue(P,"center",V.center),Et.setValue(P,"modelViewMatrix",V.modelViewMatrix),Et.setValue(P,"normalMatrix",V.normalMatrix),Et.setValue(P,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let En=j.uniformsGroups;for(let wi=0,Si=En.length;wi<Si;wi++){let Mu=En[wi];F.update(Mu,Un),F.bind(Mu,Un)}}return Un}function vp(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function yp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,H,$){be.get(E.texture).__webglTexture=H,be.get(E.depthTexture).__webglTexture=$;let j=be.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){let $=be.get(E);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,$=0){b=E,C=H,I=$;let j=!0,V=null,pe=!1,Se=!1;if(E){let ze=be.get(E);if(ze.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(P.FRAMEBUFFER,null),j=!1;else if(ze.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(ze.__hasExternalTextures)T.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Oe=E.depthTexture;if(ze.__boundDepthTexture!==Oe){if(Oe!==null&&be.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Se=!0);let et=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(et[H])?V=et[H][$]:V=et[H],pe=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?V=be.get(E).__webglMultisampledFramebuffer:Array.isArray(et)?V=et[$]:V=et,R.copy(E.viewport),B.copy(E.scissor),U=E.scissorTest}else R.copy(ye).multiplyScalar(Z).floor(),B.copy(ke).multiplyScalar(Z).floor(),U=nt;if(me.bindFramebuffer(P.FRAMEBUFFER,V)&&j&&me.drawBuffers(E,V),me.viewport(R),me.scissor(B),me.setScissorTest(U),pe){let ze=be.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,ze.__webglTexture,$)}else if(Se){let ze=be.get(E.texture),je=H||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,$||0,je)}M=-1},this.readRenderTargetPixels=function(E,H,$,j,V,pe,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){me.bindFramebuffer(P.FRAMEBUFFER,Ne);try{let ze=E.texture,je=ze.format,et=ze.type;if(!Ee.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-j&&$>=0&&$<=E.height-V&&P.readPixels(H,$,j,V,Ze.convert(je),Ze.convert(et),pe)}finally{let ze=b!==null?be.get(b).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,H,$,j,V,pe,Se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){let ze=E.texture,je=ze.format,et=ze.type;if(!Ee.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-j&&$>=0&&$<=E.height-V){me.bindFramebuffer(P.FRAMEBUFFER,Ne);let Oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.bufferData(P.PIXEL_PACK_BUFFER,pe.byteLength,P.STREAM_READ),P.readPixels(H,$,j,V,Ze.convert(je),Ze.convert(et),0);let dt=b!==null?be.get(b).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,dt);let wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dm(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,pe),P.deleteBuffer(Oe),P.deleteSync(wt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,$=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);let j=Math.pow(2,-$),V=Math.floor(E.image.width*j),pe=Math.floor(E.image.height*j),Se=H!==null?H.x:0,Ne=H!==null?H.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,Se,Ne,V,pe),me.unbindTexture()},this.copyTextureToTexture=function(E,H,$=null,j=null,V=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],H=arguments[2],V=arguments[3]||0,$=null);let pe,Se,Ne,ze,je,et,Oe,dt,wt,St=E.isCompressedTexture?E.mipmaps[V]:E.image;$!==null?(pe=$.max.x-$.min.x,Se=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,je=$.min.y,et=$.isBox3?$.min.z:0):(pe=St.width,Se=St.height,Ne=St.depth||1,ze=0,je=0,et=0),j!==null?(Oe=j.x,dt=j.y,wt=j.z):(Oe=0,dt=0,wt=0);let hn=Ze.convert(H.format),mt=Ze.convert(H.type),He;H.isData3DTexture?(T.setTexture3D(H,0),He=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(T.setTexture2DArray(H,0),He=P.TEXTURE_2D_ARRAY):(T.setTexture2D(H,0),He=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let ti=P.getParameter(P.UNPACK_ROW_LENGTH),gt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Un=P.getParameter(P.UNPACK_SKIP_PIXELS),Ms=P.getParameter(P.UNPACK_SKIP_ROWS),vn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,St.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,et);let _r=E.isDataArrayTexture||E.isData3DTexture,Et=H.isDataArrayTexture||H.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Gn=be.get(E),Mr=be.get(H),En=be.get(Gn.__renderTarget),wi=be.get(Mr.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,En.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Si=0;Si<Ne;Si++)_r&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(E).__webglTexture,V,et+Si),E.isDepthTexture?(Et&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(H).__webglTexture,V,wt+Si),P.blitFramebuffer(ze,je,pe,Se,Oe,dt,pe,Se,P.DEPTH_BUFFER_BIT,P.NEAREST)):Et?P.copyTexSubImage3D(He,V,Oe,dt,wt+Si,ze,je,pe,Se):P.copyTexSubImage2D(He,V,Oe,dt,wt+Si,ze,je,pe,Se);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(He,V,Oe,dt,wt,pe,Se,Ne,hn,mt,St.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(He,V,Oe,dt,wt,pe,Se,Ne,hn,St.data):P.texSubImage3D(He,V,Oe,dt,wt,pe,Se,Ne,hn,mt,St):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,V,Oe,dt,pe,Se,hn,mt,St.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,V,Oe,dt,St.width,St.height,hn,St.data):P.texSubImage2D(P.TEXTURE_2D,V,Oe,dt,pe,Se,hn,mt,St);P.pixelStorei(P.UNPACK_ROW_LENGTH,ti),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Un),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ms),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vn),V===0&&H.generateMipmaps&&P.generateMipmap(He),me.unbindTexture()},this.copyTextureToTexture3D=function(E,H,$=null,j=null,V=0){return E.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,E=arguments[2],H=arguments[3],V=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,$,j,V)},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){C=0,I=0,b=null,me.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var fa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Js=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ns=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=nn,u=nn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new Ke,wf=new Ke,Ho=[],Sf=new fi,ly=new Ke,Tr=new Le,Ar=new di,Ks=class extends Le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ly)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Sf.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(Sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Ar.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),wf.multiplyMatrices(i,zs),Tr.matrixWorld=wf,Tr.raycast(e,Ho);for(let o=0,a=Ho.length;o<a;o++){let l=Ho[o];l.instanceId=r,l.object=this,t.push(l)}Ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Th,Yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gr=class extends $n{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},da=new D,pa=new D,Ef=new Ke,Rr=new Br,Vo=new di,Hl=new D,Tf=new D,Zc=class extends Ut{constructor(e=new Pt,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)da.fromBufferAttribute(t,s-1),pa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=da.distanceTo(pa);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Ef.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),S=u.getX(x+1),y=Go(this,e,Rr,l,p,S);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Go(this,e,Rr,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Go(this,e,Rr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Go(this,e,Rr,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Go(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(da.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),t.distanceSqToSegment(da,pa,Hl,Tf)>i)return;Hl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Hl);if(!(l<e.near||l>e.far))return{distance:l,point:Tf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Af=new D,Rf=new D,ma=class extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Af.fromBufferAttribute(t,s),Rf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Af.distanceTo(Rf);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wr=class extends $n{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cf=new Ke,$c=new Br,Wo=new di,Xo=new D,ga=class extends Ut{constructor(e=new Pt,t=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Cf.copy(s).invert(),$c.copy(e.ray).applyMatrix4(Cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Xo.fromBufferAttribute(h,m),Pf(Xo,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Xo.fromBufferAttribute(h,g),Pf(Xo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pf(n,e,t,i,s,r,o){let a=$c.distanceSqToPoint(n);if(a<t){let l=new D;$c.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xa=class extends fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new D,s=[],r=[],o=[],a=new D,l=new Ke;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xr=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jc=class extends Xr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Yo=new D,Vl=new Uh,Gl=new Uh,Wl=new Uh,Jc=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Yo.subVectors(s[0],s[1]).add(s[0]),c=Yo);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Vl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),Gl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Wl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Gl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Wl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Vl.calc(l),Gl.calc(l),Wl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function If(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function cy(n,e){let t=1-n;return t*t*e}function hy(n,e){return 2*(1-n)*n*e}function uy(n,e){return n*n*e}function Nr(n,e,t,i){return cy(n,e)+hy(n,t)+uy(n,i)}function fy(n,e){let t=1-n;return t*t*t*e}function dy(n,e){let t=1-n;return 3*t*t*n*e}function py(n,e){return 3*(1-n)*n*n*e}function my(n,e){return n*n*n*e}function zr(n,e,t,i,s){return fy(n,e)+dy(n,t)+py(n,i)+my(n,s)}var va=class extends Cn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kc=class extends Cn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y),zr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ya=class extends Cn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Cn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Cn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eh=class extends Cn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Nr(e,s.x,r.x,o.x),Nr(e,s.y,r.y,o.y),Nr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(If(a,l.x,c.x,u.x,h.x),If(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},th=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:Jc,CubicBezierCurve:va,CubicBezierCurve3:Kc,EllipseCurve:Xr,LineCurve:ya,LineCurve3:Qc,QuadraticBezierCurve:_a,QuadraticBezierCurve3:eh,SplineCurve:Ma}),nh=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new th[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new th[s.type]().fromJSON(s))}return this}},Yr=class extends nh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ya(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new _a(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new va(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ma(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Xr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class n extends Pt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,f=new oe,d=new D,g=new D,x=new D,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=t;S++){let y=i+S*u*s,v=Math.sin(y),z=Math.cos(y);for(let C=0;C<=e.length-1;C++){h.x=e[C].x*v,h.y=e[C].y,h.z=e[C].x*z,o.push(h.x,h.y,h.z),f.x=S/t,f.y=C/(e.length-1),a.push(f.x,f.y);let I=l[3*C+0]*v,b=l[3*C+1],M=l[3*C+0]*z;c.push(I,b,M)}}for(let S=0;S<t;S++)for(let y=0;y<e.length-1;y++){let v=y+S*e.length,z=v,C=v+e.length,I=v+e.length+1,b=v+1;r.push(z,C,b),r.push(I,b,C)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ba=class n extends is{constructor(e=1,t=1,i=4,s=8){let r=new Yr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},ss=class n extends Pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},an=class n extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=i/2,p=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function S(){let v=new D,z=new D,C=0,I=(t-e)/i;for(let b=0;b<=r;b++){let M=[],_=b/r,R=_*(t-e)+e;for(let B=0;B<=s;B++){let U=B/s,X=U*l+a,O=Math.sin(X),G=Math.cos(X);z.x=R*O,z.y=-_*i+m,z.z=R*G,h.push(z.x,z.y,z.z),v.set(O,I,G).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-_),M.push(g++)}x.push(M)}for(let b=0;b<s;b++)for(let M=0;M<r;M++){let _=x[M][b],R=x[M+1][b],B=x[M+1][b+1],U=x[M][b+1];(e>0||M!==0)&&(u.push(_,R,U),C+=3),(t>0||M!==r-1)&&(u.push(R,B,U),C+=3)}c.addGroup(p,C,0),p+=C}function y(v){let z=g,C=new oe,I=new D,b=0,M=v===!0?e:t,_=v===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;let R=g;for(let B=0;B<=s;B++){let X=B/s*l+a,O=Math.cos(X),G=Math.sin(X);I.x=M*G,I.y=m*_,I.z=M*O,h.push(I.x,I.y,I.z),f.push(0,_,0),C.x=O*.5+.5,C.y=G*.5*_+.5,d.push(C.x,C.y),g++}for(let B=0;B<s;B++){let U=z+B,X=R+B;v===!0?u.push(X,X+1,U):u.push(X+1,X,U),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wa=class n extends an{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var rs=class extends Yr{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Yr().fromJSON(s))}return this}},gy={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=od(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=My(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return qr(r,o,t,a,l,d,0),o}};function od(n,e,t,i,s){let r,o;if(s===Dy(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Df(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Df(r,n[r],n[r+1],o);return o&&Ha(o,o.next)&&($r(o),o=o.next),o}function os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ha(t,t.next)||Ct(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function qr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ty(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?vy(n,i,s,r):xy(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),$r(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=yy(os(n),e,t),qr(n,e,t,i,s,r,2)):o===2&&_y(n,e,t,i,s,r):qr(os(n),e,t,i,s,r,1);break}}}function xy(n){let e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ks(s,a,r,l,o,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=ih(d,g,e,t,i),S=ih(x,m,e,t,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=S;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ks(a,u,l,h,c,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ks(a,u,l,h,c,f,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ks(a,u,l,h,c,f,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ks(a,u,l,h,c,f,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function yy(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ha(s,r)&&ad(s,i,i.next,r)&&Zr(s,r)&&Zr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),$r(i),$r(i.next),i=n=r),i=i.next}while(i!==n);return os(i)}function _y(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cy(o,a)){let l=ld(o,a);o=os(o,o.next),l=os(l,l.next),qr(o,e,t,i,s,r,0),qr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function My(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=od(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ry(c));for(s.sort(by),r=0;r<s.length;r++)t=wy(s[r],t);return t}function by(n,e){return n.x-e.x}function wy(n,e){let t=Sy(n,e);if(!t)return e;let i=ld(t,n);return os(i,i.next),os(t,t.next)}function Sy(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ks(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Zr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Ey(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Ey(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Ty(n,e,t,i){let s=n;do s.z===0&&(s.z=ih(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ay(s)}function Ay(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function ih(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ry(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ks(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Cy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Py(n,e)&&(Zr(n,e)&&Zr(e,n)&&Iy(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||Ha(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ha(n,e){return n.x===e.x&&n.y===e.y}function ad(n,e,t,i){let s=Zo(Ct(n,e,t)),r=Zo(Ct(n,e,i)),o=Zo(Ct(t,i,n)),a=Zo(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&qo(n,t,e)||r===0&&qo(n,i,e)||o===0&&qo(t,n,i)||a===0&&qo(t,e,i))}function qo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Zo(n){return n>0?1:n<0?-1:0}function Py(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zr(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Iy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ld(n,e){let t=new sh(n.i,n.x,n.y),i=new sh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Df(n,e,t,i){let s=new sh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Or=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Lf(e),Uf(i,e);let o=e.length;t.forEach(Lf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Uf(i,t[l]);let a=gy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Qs=class n extends Pt{constructor(e=new rs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Ly,y,v=!1,z,C,I,b;p&&(y=p.getSpacedPoints(u),v=!0,f=!1,z=p.computeFrenetFrames(u,!1),C=new D,I=new D,b=new D),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(c),_=M.shape,R=M.holes;if(!Or.isClockWise(_)){_=_.reverse();for(let ie=0,de=R.length;ie<de;ie++){let P=R[ie];Or.isClockWise(P)&&(R[ie]=P.reverse())}}let U=Or.triangulateShape(_,R),X=_;for(let ie=0,de=R.length;ie<de;ie++){let P=R[ie];_=_.concat(P)}function O(ie,de,P){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(de,P)}let G=_.length,J=U.length;function Z(ie,de,P){let De,ce,Ee,me=ie.x-de.x,Ge=ie.y-de.y,be=P.x-ie.x,T=P.y-ie.y,w=me*me+Ge*Ge,q=me*T-Ge*be;if(Math.abs(q)>Number.EPSILON){let te=Math.sqrt(w),re=Math.sqrt(be*be+T*T),ne=de.x-Ge/te,Pe=de.y+me/te,ge=P.x-T/re,Me=P.y+be/re,Je=((ge-ne)*T-(Me-Pe)*be)/(me*T-Ge*be);De=ne+me*Je-ie.x,ce=Pe+Ge*Je-ie.y;let he=De*De+ce*ce;if(he<=2)return new oe(De,ce);Ee=Math.sqrt(he/2)}else{let te=!1;me>Number.EPSILON?be>Number.EPSILON&&(te=!0):me<-Number.EPSILON?be<-Number.EPSILON&&(te=!0):Math.sign(Ge)===Math.sign(T)&&(te=!0),te?(De=-Ge,ce=me,Ee=Math.sqrt(w)):(De=me,ce=Ge,Ee=Math.sqrt(w/2))}return new oe(De/Ee,ce/Ee)}let Q=[];for(let ie=0,de=X.length,P=de-1,De=ie+1;ie<de;ie++,P++,De++)P===de&&(P=0),De===de&&(De=0),Q[ie]=Z(X[ie],X[P],X[De]);let ae=[],ye,ke=Q.concat();for(let ie=0,de=R.length;ie<de;ie++){let P=R[ie];ye=[];for(let De=0,ce=P.length,Ee=ce-1,me=De+1;De<ce;De++,Ee++,me++)Ee===ce&&(Ee=0),me===ce&&(me=0),ye[De]=Z(P[De],P[Ee],P[me]);ae.push(ye),ke=ke.concat(ye)}for(let ie=0;ie<m;ie++){let de=ie/m,P=d*Math.cos(de*Math.PI/2),De=g*Math.sin(de*Math.PI/2)+x;for(let ce=0,Ee=X.length;ce<Ee;ce++){let me=O(X[ce],Q[ce],De);fe(me.x,me.y,-P)}for(let ce=0,Ee=R.length;ce<Ee;ce++){let me=R[ce];ye=ae[ce];for(let Ge=0,be=me.length;Ge<be;Ge++){let T=O(me[Ge],ye[Ge],De);fe(T.x,T.y,-P)}}}let nt=g+x;for(let ie=0;ie<G;ie++){let de=f?O(_[ie],ke[ie],nt):_[ie];v?(I.copy(z.normals[0]).multiplyScalar(de.x),C.copy(z.binormals[0]).multiplyScalar(de.y),b.copy(y[0]).add(I).add(C),fe(b.x,b.y,b.z)):fe(de.x,de.y,0)}for(let ie=1;ie<=u;ie++)for(let de=0;de<G;de++){let P=f?O(_[de],ke[de],nt):_[de];v?(I.copy(z.normals[ie]).multiplyScalar(P.x),C.copy(z.binormals[ie]).multiplyScalar(P.y),b.copy(y[ie]).add(I).add(C),fe(b.x,b.y,b.z)):fe(P.x,P.y,h/u*ie)}for(let ie=m-1;ie>=0;ie--){let de=ie/m,P=d*Math.cos(de*Math.PI/2),De=g*Math.sin(de*Math.PI/2)+x;for(let ce=0,Ee=X.length;ce<Ee;ce++){let me=O(X[ce],Q[ce],De);fe(me.x,me.y,h+P)}for(let ce=0,Ee=R.length;ce<Ee;ce++){let me=R[ce];ye=ae[ce];for(let Ge=0,be=me.length;Ge<be;Ge++){let T=O(me[Ge],ye[Ge],De);v?fe(T.x,T.y+y[u-1].y,y[u-1].x+P):fe(T.x,T.y,h+P)}}}ee(),ue();function ee(){let ie=s.length/3;if(f){let de=0,P=G*de;for(let De=0;De<J;De++){let ce=U[De];Ie(ce[2]+P,ce[1]+P,ce[0]+P)}de=u+m*2,P=G*de;for(let De=0;De<J;De++){let ce=U[De];Ie(ce[0]+P,ce[1]+P,ce[2]+P)}}else{for(let de=0;de<J;de++){let P=U[de];Ie(P[2],P[1],P[0])}for(let de=0;de<J;de++){let P=U[de];Ie(P[0]+G*u,P[1]+G*u,P[2]+G*u)}}i.addGroup(ie,s.length/3-ie,0)}function ue(){let ie=s.length/3,de=0;Ae(X,de),de+=X.length;for(let P=0,De=R.length;P<De;P++){let ce=R[P];Ae(ce,de),de+=ce.length}i.addGroup(ie,s.length/3-ie,1)}function Ae(ie,de){let P=ie.length;for(;--P>=0;){let De=P,ce=P-1;ce<0&&(ce=ie.length-1);for(let Ee=0,me=u+m*2;Ee<me;Ee++){let Ge=G*Ee,be=G*(Ee+1),T=de+De+Ge,w=de+ce+Ge,q=de+ce+be,te=de+De+be;Ve(T,w,q,te)}}}function fe(ie,de,P){l.push(ie),l.push(de),l.push(P)}function Ie(ie,de,P){Be(ie),Be(de),Be(P);let De=s.length/3,ce=S.generateTopUV(i,s,De-3,De-2,De-1);ot(ce[0]),ot(ce[1]),ot(ce[2])}function Ve(ie,de,P,De){Be(ie),Be(de),Be(De),Be(de),Be(P),Be(De);let ce=s.length/3,Ee=S.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);ot(Ee[0]),ot(Ee[1]),ot(Ee[3]),ot(Ee[1]),ot(Ee[2]),ot(Ee[3])}function Be(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function ot(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Uy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new th[s.type]().fromJSON(s)),new n(i,e.options)}},Ly={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-h),new oe(f,1-g),new oe(x,1-p)]:[new oe(a,1-l),new oe(u,1-h),new oe(d,1-g),new oe(m,1-p)]}};function Uy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Sa=class n extends Pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new D,g=new oe;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let S=p+m,y=S,v=S+i+1,z=S+i+2,C=S+1;a.push(y,v,C),a.push(v,z,C)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ot=class n extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let S=[],y=p/i,v=0;p===0&&o===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let z=0;z<=t;z++){let C=z/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(C+v,1-y),S.push(c++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let y=u[p][S+1],v=u[p][S],z=u[p+1][S],C=u[p+1][S+1];(p!==0||o>0)&&d.push(y,v,C),(p!==i-1||l<Math.PI)&&d.push(v,z,C)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var er=class n extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ea=class extends Mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Vt=class extends $n{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ta=class extends Vt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Aa=class extends $n{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function $o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ny(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var tr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends tr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tu:r=e,a=2*t-i;break;case Au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:o=e,l=2*i-t;break;case Au:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let z=0;z!==a;++z)r[z]=p*o[u+z]+S*o[c+z]+y*o[l+z]+v*o[h+z];return r}},oh=class extends tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ah=class extends tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case Ic:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ny(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Ic;var as=class extends Bn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ta;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var lh=class extends Bn{};lh.prototype.ValueTypeName="color";var ch=class extends Bn{};ch.prototype.ValueTypeName="number";var hh=class extends tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Zn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ra=class extends Bn{InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Bn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ta;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends Bn{};uh.prototype.ValueTypeName="vector";var fh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},zy=new fh,dh=class{constructor(e){this.manager=e!==void 0?e:zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ca=class extends nr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xl=new Ke,Nf=new D,zf=new D,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Of=new Ke,Cr=new D,Yl=new D,ph=class extends Pa{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cr),Yl.copy(i.position),Yl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yl),i.updateMatrixWorld(),s.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Of.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}},ir=class extends nr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},mh=class extends Pa{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ia=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new mh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Da=class extends nr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var La=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ff(){return performance.now()}var Nh="\\[\\]\\.:\\/",Oy=new RegExp("["+Nh+"]","g"),zh="[^"+Nh+"]",Fy="[^"+Nh.replace("\\.","")+"]",ky=/((?:WC+[\/:])*)/.source.replace("WC",zh),By=/(WCOD+)?/.source.replace("WCOD",Fy),Hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),Vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),Gy=new RegExp("^"+ky+By+Hy+Vy+"$"),Wy=["material","materials","bones","map"],gh=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Oy,"")}static parseTrackName(e){let t=Gy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=gh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Fi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Xy=new Zs(-1,1,1,-1,0,1),Oh=class extends Pt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},Yy=new Oh,Jn=class{constructor(e){this._mesh=new Le(Yy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Va=class extends ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jr=class extends ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ga=class extends ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Va(Fi),this.copyPass.material.blending=kt,this.clock=new La}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jr!==void 0&&(o instanceof Jr?i=!0:o instanceof Ga&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xa=class extends ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var cd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ar=class n extends ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new qt(r,o,{type:dn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new qt(r,o,{type:dn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=cd;this.highPassUniforms=pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Fi;this.copyUniforms=pn.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new Jn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ar.BlurDirectionX=new oe(1,0);ar.BlurDirectionY=new oe(0,1);var Kr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Qr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ya={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function hd(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=qy(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ns(s,e,e);return r.wrapS=ui,r.wrapT=ui,r.needsUpdate=!0,r}function qy(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var eo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Fh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Fh(n,e,t){let i=Zy(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function Zy(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new D(Math.cos(r),Math.sin(r),o))}return i}var qa=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let S=g-m+u,y=x-p+u,v=g-1+2*u,z=x-1+2*u,C=l&255,I=c&255,b=this.perm[C+this.perm[I]]%12,M=this.perm[C+m+this.perm[I+p]]%12,_=this.perm[C+1+this.perm[I+1]]%12,R=.5-g*g-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[b],g,x));let B=.5-S*S-y*y;B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[M],S,y));let U=.5-v*v-z*z;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[_],v,z)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,g=(u+h+f)*d,x=u-g,m=h-g,p=f-g,S=e-x,y=t-m,v=i-p,z,C,I,b,M,_;S>=y?y>=v?(z=1,C=0,I=0,b=1,M=1,_=0):S>=v?(z=1,C=0,I=0,b=1,M=0,_=1):(z=0,C=0,I=1,b=1,M=0,_=1):y<v?(z=0,C=0,I=1,b=0,M=1,_=1):S<v?(z=0,C=1,I=0,b=0,M=1,_=1):(z=0,C=1,I=0,b=1,M=1,_=0);let R=S-z+d,B=y-C+d,U=v-I+d,X=S-b+2*d,O=y-M+2*d,G=v-_+2*d,J=S-1+3*d,Z=y-1+3*d,Q=v-1+3*d,ae=u&255,ye=h&255,ke=f&255,nt=this.perm[ae+this.perm[ye+this.perm[ke]]]%12,ee=this.perm[ae+z+this.perm[ye+C+this.perm[ke+I]]]%12,ue=this.perm[ae+b+this.perm[ye+M+this.perm[ke+_]]]%12,Ae=this.perm[ae+1+this.perm[ye+1+this.perm[ke+1]]]%12,fe=.6-S*S-y*y-v*v;fe<0?s=0:(fe*=fe,s=fe*fe*this.dot3(this.grad3[nt],S,y,v));let Ie=.6-R*R-B*B-U*U;Ie<0?r=0:(Ie*=Ie,r=Ie*Ie*this.dot3(this.grad3[ee],R,B,U));let Ve=.6-X*X-O*O-G*G;Ve<0?o=0:(Ve*=Ve,o=Ve*Ve*this.dot3(this.grad3[ue],X,O,G));let Be=.6-J*J-Z*Z-Q*Q;return Be<0?a=0:(Be*=Be,a=Be*Be*this.dot3(this.grad3[Ae],J,Z,Q)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,g,x=(e+t+i+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),S=Math.floor(i+x),y=Math.floor(s+x),v=(m+p+S+y)*c,z=m-v,C=p-v,I=S-v,b=y-v,M=e-z,_=t-C,R=i-I,B=s-b,U=M>_?32:0,X=M>R?16:0,O=_>R?8:0,G=M>B?4:0,J=_>B?2:0,Z=R>B?1:0,Q=U+X+O+G+J+Z,ae=o[Q][0]>=3?1:0,ye=o[Q][1]>=3?1:0,ke=o[Q][2]>=3?1:0,nt=o[Q][3]>=3?1:0,ee=o[Q][0]>=2?1:0,ue=o[Q][1]>=2?1:0,Ae=o[Q][2]>=2?1:0,fe=o[Q][3]>=2?1:0,Ie=o[Q][0]>=1?1:0,Ve=o[Q][1]>=1?1:0,Be=o[Q][2]>=1?1:0,ot=o[Q][3]>=1?1:0,ie=M-ae+c,de=_-ye+c,P=R-ke+c,De=B-nt+c,ce=M-ee+2*c,Ee=_-ue+2*c,me=R-Ae+2*c,Ge=B-fe+2*c,be=M-Ie+3*c,T=_-Ve+3*c,w=R-Be+3*c,q=B-ot+3*c,te=M-1+4*c,re=_-1+4*c,ne=R-1+4*c,Pe=B-1+4*c,ge=m&255,Me=p&255,Je=S&255,he=y&255,Re=a[ge+a[Me+a[Je+a[he]]]]%32,Xe=a[ge+ae+a[Me+ye+a[Je+ke+a[he+nt]]]]%32,qe=a[ge+ee+a[Me+ue+a[Je+Ae+a[he+fe]]]]%32,Ce=a[ge+Ie+a[Me+Ve+a[Je+Be+a[he+ot]]]]%32,at=a[ge+1+a[Me+1+a[Je+1+a[he+1]]]]%32,Ze=.6-M*M-_*_-R*R-B*B;Ze<0?u=0:(Ze*=Ze,u=Ze*Ze*this.dot4(r[Re],M,_,R,B));let ft=.6-ie*ie-de*de-P*P-De*De;ft<0?h=0:(ft*=ft,h=ft*ft*this.dot4(r[Xe],ie,de,P,De));let F=.6-ce*ce-Ee*Ee-me*me-Ge*Ge;F<0?f=0:(F*=F,f=F*F*this.dot4(r[qe],ce,Ee,me,Ge));let xe=.6-be*be-T*T-w*w-q*q;xe<0?d=0:(xe*=xe,d=xe*xe*this.dot4(r[Ce],be,T,w,q));let K=.6-te*te-re*re-ne*ne-Pe*Pe;return K<0?g=0:(K*=K,g=K*K*this.dot4(r[at],te,re,ne,Pe)),27*(u+h+f+d+g)}};var lr=class n extends ln{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=hd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:dn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Mt({defines:Object.assign({},Kr.defines),uniforms:pn.clone(Kr.uniforms),vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Aa,this.normalMaterial.blending=kt,this.pdMaterial=new Mt({defines:Object.assign({},eo.defines),uniforms:pn.clone(eo.uniforms),vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Mt({defines:Object.assign({},Qr.defines),uniforms:pn.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:pn.clone(Fi.uniforms),vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oa,blendDst:sr,blendEquation:An,blendSrcAlpha:za,blendDstAlpha:sr,blendEquationAlpha:An}),this.blendMaterial=new Mt({uniforms:pn.clone(Ya.uniforms),vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:xh,blendSrc:Oa,blendDst:sr,blendEquation:An,blendSrcAlpha:za,blendDstAlpha:sr,blendEquationAlpha:An}),this.fsQuad=new Jn(null),this.originalClearColor=new Ue,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new js,this.depthTexture.format=Ni,this.depthTexture.type=Ui,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:nn,magFilter:nn,type:dn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Fh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new qa,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ns(s,e,e,Mn,Fn);return r.wrapS=ui,r.wrapT=ui,r.needsUpdate=!0,r}};lr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ud={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Za=class extends ln{constructor(){super();let e=ud;this.uniforms=pn.clone(e.uniforms),this.material=new Ea({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $a=class extends Js{constructor(){super();let e=new kn;e.deleteAttribute("uv");let t=new Vt({side:Yt}),i=new Vt,s=new ir(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Le(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Le(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Le(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Le(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Le(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Le(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new Le(e,cr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Le(e,cr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Le(e,cr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Le(e,cr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new Le(e,cr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Le(e,cr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function cr(n){let e=new Zt;return e.color.setScalar(n),e}var W={quality:"high",ao:!0,renderer:null,scene:null,camera:null,composer:null,sky:null,sun:null,hemi:null,focus:new D,fps:60,slowT:0,autoStep:!0,onStepDown:null,shake:0,t:0,mood:null,moodT:null},fd={sunny:{top:2009087,hor:12580095,elev:48,azim:140,sunI:2.4,hemiI:1.05,fog:11988223,fogNear:90,fogFar:320,exp:1,env:.45,sunCol:16774364,gnd:10474106},desert:{top:2857983,hor:16771522,elev:50,azim:120,sunI:2.5,hemiI:1,fog:16638907,fogNear:90,fogFar:320,exp:1,env:.45,sunCol:16773328,gnd:15255184},storm:{top:3886991,hor:9414607,elev:30,azim:160,sunI:1.2,hemiI:1.05,fog:9348041,fogNear:35,fogFar:170,exp:1,env:.4,sunCol:14082815,gnd:8362634},dusk:{top:5983190,hor:16754554,elev:14,azim:250,sunI:2,hemiI:1,fog:16756874,fogNear:55,fogFar:240,exp:1,env:.4,sunCol:16760970,gnd:11569786},snow:{top:7321343,hor:15398655,elev:32,azim:150,sunI:1.5,hemiI:1.3,fog:15004415,fogNear:18,fogFar:120,exp:1,env:.5,sunCol:15923455,gnd:14214898},volcano:{top:8007600,hor:16747082,elev:22,azim:200,sunI:2,hemiI:1,fog:16751210,fogNear:40,fogFar:190,exp:1,env:.4,sunCol:16756848,gnd:10119770},alien:{top:2759290,hor:13855999,elev:18,azim:300,sunI:1.4,hemiI:1,fog:10119896,fogNear:50,fogFar:220,exp:1,env:.45,sunCol:14207231,gnd:6982266},quake:{top:3120127,hor:16769200,elev:40,azim:140,sunI:2.3,hemiI:1.15,fog:15916216,fogNear:55,fogFar:240,exp:1,env:.45,sunCol:16773328,gnd:13152400}};function pd(n){let e=W.renderer=new ua({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1});e.outputColorSpace=un,e.toneMapping=jr,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Na;let t=W.scene=new Js;(W.camera=new tn(55,1,.1,600)).position.set(20,20,20);let s=new $s(e);t.environment=s.fromScene(new $a,.04).texture,t.environmentIntensity=.55;let r=W.sky=new Le(new Ot(500,32,16),new Mt({side:Yt,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{top:{value:new Ue(2009087)},hor:{value:new Ue(12580095)},sunDir:{value:new D(0,1,0)},sunCol:{value:new Ue(16774364)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:"uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = mix(hor, top, pow(max(h,0.0), 0.55)); float s = max(dot(normalize(vP), normalize(sunDir)), 0.0); c += sunCol * (pow(s, 600.0) * 1.6 + pow(s, 12.0) * 0.25); gl_FragColor = vec4(c, 1.0); }"}));r.frustumCulled=!1,r.renderOrder=-1,t.add(r),t.fog=new fa(11988223,70,280),W.hemi=new Ca(14217727,10474106,1.25),t.add(W.hemi),W.amb=new Da(16777215,.12),t.add(W.amb);let o=W.sun=new Ia(16773590,2.6);o.castShadow=!0,o.shadow.bias=-4e-4,o.shadow.normalBias=.03;let a=o.shadow.camera;return a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=220,t.add(o),t.add(o.target),W.flash=new ir(13624319,0,120,1.2),t.add(W.flash),no("sunny",!0),window.addEventListener("resize",Bh),to(W.quality),Bh(),W}function $y(){let n=W.renderer;if(W.composer&&(W.composer.dispose&&W.composer.dispose(),W.composer=null),W.quality!=="high")return;let e=innerWidth,t=innerHeight,i=new Wa(n);if(i.addPass(new Xa(W.scene,W.camera)),W.ao){let r=new lr(W.scene,W.camera,e,t);r.output=lr.OUTPUT.Default,r.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:1.5,scale:1,samples:12}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),r.blendIntensity=.7,i.addPass(r),W.aoPass=r}else W.aoPass=null;let s=new ar(new oe(e,t),.28,.45,.95);i.addPass(s),W.bloom=s,i.addPass(new Za),W.composer=i}function to(n){W.quality=n==="low"?"low":"high";let e=W.renderer,t=window.devicePixelRatio||1;e.setPixelRatio(W.quality==="high"?Math.min(t,2):Math.min(t,1.25)),e.shadowMap.enabled=!0;let i=W.quality==="high"?2048:1024;W.sun.shadow.mapSize.x!==i&&(W.sun.shadow.mapSize.set(i,i),W.sun.shadow.map&&(W.sun.shadow.map.dispose(),W.sun.shadow.map=null)),e.shadowMap.type=W.quality==="high"?Na:Ua,W.scene.traverse(s=>{s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>o.needsUpdate=!0)}),$y(),Bh(),W.slowT=0}function Bh(){if(!W.renderer)return;let n=innerWidth,e=innerHeight;W.renderer.setSize(n,e,!1),W.camera.aspect=n/e,W.camera.fov=n<e?62:52,W.camera.updateProjectionMatrix(),W.composer&&W.composer.setSize(n,e)}var kh=new Ue,dd=new Ue;function no(n,e){let t=fd[n]||fd.sunny;W.moodT=t,W.moodName=n,(e||!W.mood)&&(W.mood=Object.assign({},t))}function jy(n){let e=W.mood,t=W.moodT,i=Math.min(1,n*.8);for(let l in t)l==="fog"||l==="sunCol"||l==="top"||l==="hor"||l==="gnd"?(kh.setHex(e[l]),dd.setHex(t[l]),kh.lerp(dd,i),e[l]=kh.getHex()):e[l]+=(t[l]-e[l])*i;let s=W.sky.material.uniforms;s.top.value.setHex(e.top),s.hor.value.setHex(e.hor),s.sunCol.value.setHex(e.sunCol);let r=Dh.degToRad(90-e.elev),o=Dh.degToRad(e.azim),a=new D().setFromSphericalCoords(1,r,o);s.sunDir.value.copy(a),W.sky.position.copy(W.camera.position),W.hemi.groundColor.setHex(e.gnd),W.sunDir=a,W.sun.intensity=e.sunI,W.sun.color.setHex(e.sunCol),W.hemi.intensity=e.hemiI,W.scene.fog.color.setHex(e.fog),W.scene.fog.near=e.fogNear*(W.quality==="low"?.8:1),W.scene.fog.far=e.fogFar*(W.quality==="low"?.8:1),W.renderer.toneMappingExposure=e.exp,W.scene.environmentIntensity=e.env}function md(n){W.t+=n,jy(n);let e=W.focus,t=W.sunDir||new D(.5,.8,.3),i=76/W.sun.shadow.mapSize.x,s=Math.round(e.x/i)*i,r=Math.round(e.z/i)*i;W.sun.position.set(s+t.x*90,Math.max(e.y,0)+Math.max(.25,t.y)*90,r+t.z*90),W.sun.target.position.set(s,Math.max(e.y,0),r),W.sun.target.updateMatrixWorld(),W.flash.intensity>0&&(W.flash.intensity=Math.max(0,W.flash.intensity-n*60)),W.composer?W.composer.render(n):W.renderer.render(W.scene,W.camera),n>0&&(W.fps+=(1/Math.max(n,.001)-W.fps)*.05),W.autoStep&&W.quality==="high"&&W.fps<30?(W.slowT+=n,W.slowT>5&&(to("low"),W.onStepDown&&W.onStepDown())):W.slowT=Math.max(0,W.slowT-n*2)}var io=new D;function Pn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;io.copy(e),io[i]=0,io.normalize();let c=.5*o/(o+a),u=1-io.angleTo(n)/l;return Math.sign(io[t])===1?u*c:a/(o+a)+c+c*(1-u)}var ja=class extends kn{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,l=new D,c=new D(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new D,x=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Pn(g,l,"z","y",r,i),f[p+1]=1-Pn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Pn(g,l,"z","y",r,i),f[p+1]=1-Pn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Pn(g,l,"x","z",r,e),f[p+1]=Pn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[p+0]=1-Pn(g,l,"x","z",r,e),f[p+1]=1-Pn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[p+0]=1-Pn(g,l,"x","y",r,e),f[p+1]=1-Pn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Pn(g,l,"x","y",r,e),f[p+1]=1-Pn(g,l,"y","x",r,t);break}}};function Ja(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Pt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=gd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=gd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function gd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Tt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var hr=new Map;function N(n,e){e=e||{};let t=n+"|"+JSON.stringify(e),i=hr.get(t);if(i)return i;let s={color:n,roughness:e.r!=null?e.r:.6,metalness:e.m||0};return e.e!=null&&(s.emissive=e.e,s.emissiveIntensity=e.ei!=null?e.ei:1),e.op!=null&&(s.transparent=!0,s.opacity=e.op,s.depthWrite=e.dw!=null?e.dw:!1),e.side&&(s.side=e.side),e.cc?(s.clearcoat=e.cc,s.clearcoatRoughness=e.ccr!=null?e.ccr:.25,i=new Ta(s)):i=new Vt(s),e.flat&&(i.flatShading=!0),hr.set(t,i),i}function Hn(n,e){let t="glow|"+n+"|"+e,i=hr.get(t);return i||(i=new Zt({color:n,transparent:!0,opacity:e??.6,blending:Li,depthWrite:!1,toneMapped:!1}),hr.set(t,i),i)}function xd(n,e){e=e||{};let t="basic|"+n+JSON.stringify(e),i=hr.get(t);return i||(i=new Zt(Object.assign({color:n,toneMapped:e.tm!==void 0?e.tm:!1},e.p||{})),hr.set(t,i),i)}var vd=new Map;function pi(n,e){let t=vd.get(n);return t||(t=e(),vd.set(n,t)),t}var L={sphere:(n,e=24,t=16)=>pi("s"+n+e+t,()=>new Ot(n,e,t)),cap:(n,e,t=16)=>pi("c"+n+e+t,()=>new ba(n,e,6,t)),rbox:(n,e,t,i=.08,s=2)=>pi("rb"+[n,e,t,i,s],()=>new ja(n,e,t,s,Math.min(i,n/2-.001,e/2-.001,t/2-.001))),box:(n,e,t)=>pi("b"+[n,e,t],()=>new kn(n,e,t)),cyl:(n,e,t,i=24)=>pi("cy"+[n,e,t,i],()=>new an(n,e,t,i)),cone:(n,e,t=24)=>pi("co"+[n,e,t],()=>new wa(n,e,t)),torus:(n,e,t=Math.PI*2,i=12,s=32)=>pi("t"+[n,e,t,i,s],()=>new er(n,e,i,s,t)),star:(n=.5,e=.18)=>pi("star"+n+e,()=>{let t=new rs;for(let s=0;s<10;s++){let r=s/10*Math.PI*2+Math.PI/2,o=s%2?n*.45:n,a=Math.cos(r)*o,l=Math.sin(r)*o;s?t.lineTo(a,l):t.moveTo(a,l)}let i=new Qs(t,{depth:e,bevelEnabled:!0,bevelThickness:e*.5,bevelSize:n*.12,bevelSegments:3});return i.center(),i}),rock:(n=1,e=1)=>pi("rock"+n+e,()=>{let t=new Ot(e,18,12),i=t.attributes.position,s=new D;for(let r=0;r<i.count;r++){s.fromBufferAttribute(i,r);let o=1+.18*Math.sin(s.x*3.1+n)*Math.cos(s.y*2.7+n*2)+.1*Math.sin(s.z*5+n*3);s.multiplyScalar(o),s.y*=.75,i.setXYZ(r,s.x,s.y,s.z)}return t.computeVertexNormals(),t})},hM=new Ke,Jy=new Zn,Ky=new Rn,Qy=new D,e_=new D;function ht(n,e,t,i=0,s=0,r=0,o=1,a=o,l=o){return new Ke().compose(e_.set(n,e,t),Jy.setFromEuler(Ky.set(i,s,r)),Qy.set(o,a,l))}var hs=null;function t_(){return hs||(hs=new Vt({vertexColors:!0,roughness:1,metalness:1}),hs.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 rm; attribute vec3 em; varying vec2 vRM; varying vec3 vEM;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRM = rm; vEM = em;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRM; varying vec3 vEM;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = vRM.x;").replace("#include <metalnessmap_fragment>","float metalnessFactor = vRM.y;").replace("#include <emissivemap_fragment>","totalEmissiveRadiance = vEM;")},hs.customProgramCacheKey=()=>"uber1",hs)}function n_(n){return!(!n.isMeshStandardMaterial||n.transparent||n.vertexColors||n.side!==qn||n.flatShading||n.map||n===hs)}var In=class{constructor(){this.groups=new Map}add(e,t,i){let s=n_(t),r=s?t_():t,o=this.groups.get(r);o||(o=[],this.groups.set(r,o));let a=e.index?e.toNonIndexed():e.clone();a.attributes.uv||a.setAttribute("uv",new Tt(new Float32Array(a.attributes.position.count*2),2));for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);if(s){let l=a.attributes.position.count,c=new Float32Array(l*3),u=new Float32Array(l*2),h=new Float32Array(l*3),f=t.color,d=t.emissive,g=t.emissiveIntensity||0,x=t.clearcoat>0?Math.min(t.roughness,.35):t.roughness,m=t.metalness;for(let p=0;p<l;p++)c[p*3]=f.r,c[p*3+1]=f.g,c[p*3+2]=f.b,u[p*2]=x,u[p*2+1]=m,h[p*3]=d.r*g,h[p*3+1]=d.g*g,h[p*3+2]=d.b*g;a.setAttribute("color",new Tt(c,3)),a.setAttribute("rm",new Tt(u,2)),a.setAttribute("em",new Tt(h,3))}return a.applyMatrix4(i),o.push(a),this}mesh(e,t,i,s,r,o,a,l,c,u,h){return this.add(e,t,ht(i,s,r,o,a,l,c,u,h))}box(e,t,i,s,r,o,a,l=0){return this.add(L.box(t,i,s),e,ht(r,o,a,0,l,0))}rbox(e,t,i,s,r,o,a,l,c=0){return this.add(L.rbox(t,i,s,r),e,ht(o,a,l,0,c,0))}build(e,t={}){let i=[];for(let[s,r]of this.groups){if(!r.length)continue;let o=Ja(r,!1);r.forEach(l=>l.dispose());let a=new Le(o,s);a.castShadow=t.cast!==!1&&!s.transparent,a.receiveShadow=t.receive!==!1,a.matrixAutoUpdate=!1,a.updateMatrix(),e.add(a),i.push(a)}return this.groups.clear(),i}};function ve(n,e,t=0,i=0,s=0,r,o=!0){let a=new Le(n,e);return a.position.set(t,i,s),a.castShadow=o,a.receiveShadow=!0,r&&r.add(a),a}var i_=[16173472,14723449,12155471,9067067,16767416];function _d(n){n=Object.assign({skin:i_[0],shirt:3900150,pants:3359061,hair:3810582,hat:"cap",hatColor:15680580,shoes:16777215},n||{});let e=new $e,t=new $e;e.add(t);let i=N(n.skin,{r:.55}),s=N(n.shirt,{r:.7}),r=N(n.pants,{r:.75}),o=N(n.shoes,{r:.4,cc:.4}),a={root:e,body:t,look:n};a.legs=[-1,1].map(m=>{let p=new $e;p.position.set(m*.13,.78,0),t.add(p),ve(L.cap(.115,.42),r,0,-.32,0,p);let S=ve(L.rbox(.2,.15,.32,.07),o,0,-.71,.05,p);return ve(L.rbox(.21,.05,.33,.02),N(2238513),0,-.775,.05,p),p}),ve(L.sphere(.26,20,14),r,0,.84,0,t).scale.set(1,.7,.85),ve(L.cap(.25,.3),s,0,1.07,0,t).scale.set(1,1,.82),ve(L.torus(.2,.035,Math.PI*2,8,24),N(16777215,{r:.6}),0,1.33,0,t).rotation.x=Math.PI/2,a.arms=[-1,1].map(m=>{let p=new $e;return p.position.set(m*.31,1.27,0),t.add(p),ve(L.sphere(.1,14,10),s,0,0,0,p),ve(L.cap(.08,.32),s,0,-.2,0,p),ve(L.sphere(.095,14,10),i,0,-.45,0,p),p.rotation.z=m*.12,p});let c=a.head=new $e;c.position.set(0,1.42,0),t.add(c),ve(L.sphere(.34,32,24),i,0,.3,0,c);let u=ve(new Ot(.355,32,16,0,Math.PI*2,0,Math.PI*.42),N(n.hair,{r:.8}),0,.31,-.01,c);u.rotation.x=-.25;let h=N(16777215,{r:.2,cc:.6}),f=N(1119256,{r:.15,cc:1});[-1,1].forEach(m=>{ve(L.sphere(.085,16,12),h,m*.125,.33,.27,c,!1).scale.set(.9,1.1,.6),ve(L.sphere(.05,14,10),f,m*.125,.33,.315,c,!1).scale.set(1,1.15,.6),ve(L.sphere(.016,8,6),N(16777215,{e:16777215,ei:1}),m*.125+.018,.355,.34,c,!1),ve(L.sphere(.05,12,8),N(16748451,{r:.8}),m*.2,.22,.25,c,!1).scale.set(1,.6,.4)});let d=a.mouth=ve(L.torus(.065,.018,Math.PI,8,16),N(5971229,{r:.5}),0,.2,.31,c,!1);d.rotation.z=Math.PI,a.hatG=new $e,a.hatG.position.y=.3,c.add(a.hatG),a.backG=new $e,a.backG.position.set(0,1.1,-.22),t.add(a.backG),s_(a,n.hat,n.hatColor);let g=a.stars=new $e;g.position.y=2.25,g.visible=!1,e.add(g);for(let m=0;m<5;m++){let p=ve(L.star(.11,.05),N(16765503,{e:16757504,ei:.8,r:.3}),Math.cos(m/5*6.283)*.42,0,Math.sin(m/5*6.283)*.42,g,!1);p.rotation.x=-.3}let x=a.umbrella=new $e;return x.position.set(.32,1.25,0),x.visible=!1,t.add(x),ve(L.cyl(.02,.02,1.2,8),N(4473924,{m:.6,r:.3}),0,.5,0,x),ve(new Ot(.75,24,8,0,Math.PI*2,0,Math.PI*.32),N(16732067,{r:.45,cc:.5,side:zt}),0,.45,0,x),a.bubble=ve(L.sphere(1.1,32,20),Hn(8246268,.25),0,.95,0,e,!1),a.bubble.visible=!1,a.flames=new $e,a.flames.visible=!1,a.backG.add(a.flames),[-.12,.12].forEach(m=>ve(L.cone(.08,.45,12),Hn(16753981,.85),m,-.45,-.05,a.flames,!1).rotation.x=Math.PI),[t,c,...a.legs,...a.arms].forEach(m=>yd(m,[a.mouth])),yd(a.hatG,[]),a.walk=0,a.stun=0,a}function yd(n,e){let t=n.children.filter(r=>r.isMesh&&!e.includes(r)&&r.visible);if(t.length<2)return;let i=new In,s=new In;t.forEach(r=>{r.updateMatrix(),(r.castShadow?i:s).add(r.geometry,r.material,r.matrix),n.remove(r)}),i.build(n),s.build(n,{cast:!1})}function s_(n,e,t=15680580){let i=n.hatG;for(;i.children.length;)i.remove(i.children[0]);let s=N(t,{r:.5,cc:.3});if(e==="cap")ve(new Ot(.36,28,12,0,Math.PI*2,0,Math.PI/2),s,0,.02,0,i),ve(L.cyl(.3,.3,.03,24),s,0,.03,.25,i).scale.set(1,1,.8);else if(e==="hardhat"){let r=N(16761370,{r:.35,cc:.8});ve(new Ot(.38,28,12,0,Math.PI*2,0,Math.PI/2),r,0,.03,0,i),ve(L.cyl(.46,.46,.04,28),r,0,.04,.03,i),ve(L.rbox(.08,.12,.62,.03),r,0,.32,0,i)}else if(e==="cowboy"){let r=N(9132587,{r:.8});ve(L.cyl(.6,.6,.04,32),r,0,.06,0,i),ve(L.cyl(.26,.32,.36,24),r,0,.24,0,i),ve(L.torus(.31,.03,6.28,8,24),N(3875604),0,.12,0,i).rotation.x=Math.PI/2}else if(e==="crown"){let r=N(16764723,{r:.2,m:1});ve(L.cyl(.27,.25,.16,28,1),r,0,.12,0,i);for(let o=0;o<6;o++){let a=o/6*6.283;ve(L.cone(.06,.16,10),r,Math.cos(a)*.24,.27,Math.sin(a)*.24,i),ve(L.sphere(.035,10,8),N(16723285,{r:.1,cc:1}),Math.cos(a)*.27,.12,Math.sin(a)*.27,i)}}else if(e==="party")ve(L.cone(.18,.5,24),s,0,.3,0,i),ve(L.sphere(.07,12,8),N(16777215),0,.57,0,i);else if(e==="astro")ve(L.sphere(.5,32,24),N(12576511,{r:.05,op:.28,cc:1}),0,0,.02,i,!1),ve(L.torus(.42,.06,6.28,10,32),N(15857145,{r:.4}),0,-.3,0,i).rotation.x=Math.PI/2;else if(e==="dino"){let r=N(4906624,{r:.6});ve(new Ot(.39,28,14,0,Math.PI*2,0,Math.PI*.55),r,0,-.03,-.02,i);for(let o=0;o<4;o++)ve(L.cone(.07,.18,10),N(16436245),0,.36-o*.04,-.1-o*.12,i).rotation.x=-.5-o*.25}else if(e==="beanie")ve(new Ot(.37,28,12,0,Math.PI*2,0,Math.PI/2),s,0,-.02,0,i),ve(L.sphere(.09,12,8),N(16777215,{r:.9}),0,.37,0,i);else if(e==="chef"){let r=N(16777215,{r:.8});ve(L.cyl(.3,.3,.25,24),r,0,.12,0,i),[[0,.38,0],[.15,.33,.05],[-.15,.33,.05],[0,.33,-.15]].forEach(o=>ve(L.sphere(.2,16,12),r,o[0],o[1],o[2],i))}}function Md(n,e){let t=n.backG;if(t.children.filter(o=>o.userData.jp).forEach(o=>t.remove(o)),!e)return;let i=new $e;i.userData.jp=!0,t.add(i);let s=N(13358561,{r:.25,m:.8}),r=N(15680580,{r:.4,cc:.6});[-.12,.12].forEach(o=>{ve(L.cap(.09,.3),s,o,0,-.05,i),ve(L.sphere(.09,12,8),r,o,.25,-.05,i)})}function bd(n,e,t,i,s){let r=n.body,o=n.legs,a=n.arms;n.walk+=t*(e==="run"?9*Math.max(.6,i):0);let l=0,c=0,u=0,h=0,f=0,d=0,g=0,x=.12,m=-.12;if(n.stars.visible=e==="ko",e==="run"){let y=Math.sin(n.walk);l=y*.9,c=-y*.9,u=-y*.8,h=y*.8,f=Math.abs(Math.cos(n.walk))*.07,d=.12}else if(e==="jump")l=-.5,c=.3,u=-2.6,h=-2.6,x=.5,m=-.5;else if(e==="swim"){let y=Math.sin(s*6);u=-2.4+y,h=-2.4-y,l=y*.5,c=-y*.5,d=1.1,f=-.6}else if(e==="ko")d=-1.45,f=.18,u=-2.8,h=-2.8,x=.6,m=-.6,n.stars.rotation.y+=t*4;else if(e==="cover")f=-.42,l=-1.3,c=-1.3,u=-2.9,h=-2.9,x=.35,m=-.35,d=.35;else if(e==="float"){let y=Math.sin(s*4);u=-2.5+y*.4,h=-2.5-y*.4,l=y*.6,c=-y*.6,g=Math.sin(s*2)*.4}else if(e==="panic"){let y=Math.sin(s*16);u=-2.9+y*.3,h=-2.9-y*.3,l=Math.sin(s*14)*.7,c=-l,f=Math.abs(y)*.05}else{let y=Math.sin(s*2);f=y*.015,u=y*.05,h=-y*.05}let p=Math.min(1,t*14),S=(y,v)=>y+(v-y)*p;o[0].rotation.x=S(o[0].rotation.x,l),o[1].rotation.x=S(o[1].rotation.x,c),a[0].rotation.x=S(a[0].rotation.x,u),a[1].rotation.x=S(a[1].rotation.x,h),a[0].rotation.z=S(a[0].rotation.z,-x),a[1].rotation.z=S(a[1].rotation.z,-m),r.position.y=S(r.position.y,f),r.rotation.x=S(r.rotation.x,d),r.rotation.z=S(r.rotation.z,g),e==="ko"?r.position.z=S(r.position.z,-.7):r.position.z=S(r.position.z,0),n.mouth.scale.y=e==="panic"||e==="ko"||e==="float"?-1.4:1}var r_=[5025616,6078282,4169284,7127626];function us(n,e,t,i,s=1,r="round",o=0){let a=N(9067061,{r:.85});if(r==="round"){n.mesh(L.cyl(.18,.28,2.4,10),a,e,t+1.2*s,i,0,0,0,s,s,s);let l=N(r_[o%4],{r:.75});[[0,3.1,0,1.45],[.8,2.6,.3,1],[-.7,2.7,-.3,1.05],[.1,2.5,-.85,.95],[-.2,3.9,.2,.9]].forEach((c,u)=>n.mesh(L.sphere(1,18,12),l,e+c[0]*s,t+c[1]*s,i+c[2]*s,0,u,0,c[3]*s,c[3]*s*.9,c[3]*s))}else if(r==="pine"){n.mesh(L.cyl(.15,.25,1.6,10),a,e,t+.8*s,i,0,0,0,s,s,s);let l=N([3112266,2780739,3508818][o%3],{r:.8});[[1.6,1.8,1.4],[1.25,1.6,2.5],[.85,1.4,3.5]].forEach(c=>n.mesh(L.cone(1,1,20),l,e,t+c[2]*s,i,0,o,0,c[0]*s,c[1]*s,c[0]*s))}else if(r==="palm"){let l=N(10517071,{r:.85});for(let h=0;h<6;h++)n.mesh(L.cyl(.17-h*.012,.2-h*.012,.85,10),l,e+Math.sin(h*.25)*.5*s,t+(.42+h*.8)*s,i,0,0,-.08*h,s,s,s);let c=[e+Math.sin(1.5)*.5*s+.15*s,t+4.9*s,i],u=N(4170573,{r:.7});for(let h=0;h<7;h++){let f=h/7*6.283+o;n.mesh(L.sphere(1,16,8),u,c[0]+Math.cos(f)*1*s,c[1]-.25*s,c[2]+Math.sin(f)*1*s,0,-f,.45,1.3*s,.12*s,.38*s)}[0,2,4].forEach(h=>n.mesh(L.sphere(.17,12,8),N(7029795,{r:.6}),c[0]+Math.cos(h)*.2*s,c[1]-.3*s,c[2]+Math.sin(h)*.2*s))}else if(r==="cactus"){let l=N(5216858,{r:.7});n.mesh(L.cap(.35,2.2,14),l,e,t+1.45*s,i,0,0,0,s,s,s),n.mesh(L.cap(.22,.8,12),l,e+.6*s,t+1.9*s,i,0,0,0,s,s,s),n.mesh(L.cap(.2,.5,12),l,e+.38*s,t+1.45*s,i,0,0,Math.PI/2,s,s,s),n.mesh(L.cap(.2,.6,12),l,e-.55*s,t+2.3*s,i,0,0,0,s,s,s),n.mesh(L.cap(.18,.4,12),l,e-.35*s,t+1.95*s,i,0,0,Math.PI/2,s,s,s)}}function Hh(n,e,t,i,s=1,r=1,o=10129286){n.mesh(L.rock(r%6,1),N(o,{r:.9}),e,t+.3*s,i,0,r,0,s,s,s)}function ur(n,e,t,i,s,r){let o=new $e,a=N(r,{r:.3,cc:1,ccr:.1,m:.2}),l=N(2109504,{r:.05,m:.5,cc:1}),c=N(1842980,{r:.85}),u=N(14080992,{r:.2,m:1}),h=(f,d,g,x,m,p=0,S=0)=>n.add(f,d,new Ke().makeRotationY(s).multiply(ht(g,x,m,p,0,S)).premultiply(new Ke().makeTranslation(e,t,i)));return h(L.rbox(1.9,.75,4.1,.3),a,0,.75,0),h(L.rbox(1.65,.65,2.2,.28),a,0,1.35,-.25),h(L.rbox(1.68,.5,2,.22),l,0,1.38,-.25),[[-.88,1.3],[.88,1.3],[-.88,-1.35],[.88,-1.35]].forEach(f=>{h(L.cyl(.38,.38,.3,20),c,f[0],.38,f[1],0,Math.PI/2),h(L.cyl(.2,.2,.32,16),u,f[0],.38,f[1],0,Math.PI/2)}),[-.6,.6].forEach(f=>h(L.sphere(.13,12,8),N(16774860,{e:16773552,ei:1.2}),f,.85,2.04)),[-.65,.65].forEach(f=>h(L.rbox(.3,.12,.05,.03),N(16722474,{e:16711680,ei:.8}),f,.9,-2.06)),o}function Vh(n,e,t,i){let s=N(4015184,{r:.4,m:.7});n.mesh(L.cyl(.07,.1,4.2,10),s,e,t+2.1,i),n.mesh(L.cap(.06,.8,8),s,e+.4,t+4.2,i,0,0,Math.PI/2),n.mesh(L.sphere(.22,16,10),N(16774084,{e:16771488,ei:1.5}),e+.8,t+4.05,i)}function wd(n,e,t,i,s){let r=N(11565637,{r:.7}),o=N(3159098,{r:.5,m:.6}),a=(l,c,u)=>{let h=new D(l,c,u).applyAxisAngle(new D(0,1,0),s);return[e+h.x,t+h.y,i+h.z]};[.45,.65].forEach((l,c)=>{let u=a(0,.5+c*.35,-.2+c*.25-.1);n.add(L.rbox(1.8,.08,.28,.03),r,ht(u[0],u[1],u[2],c?-.3:0,s,0))}),[-.75,.75].forEach(l=>{let c=a(l,.25,-.1);n.add(L.rbox(.08,.5,.5,.02),o,ht(c[0],c[1],c[2],0,s,0))})}function Sd(){let n=new $e,e={root:n},t=N(8084694,{r:.35,cc:.7,ccr:.3}),i=N(16241278,{r:.5,cc:.3}),s=N(4863382,{r:.4,cc:.5}),r=e.spikeM=new Vt({color:6288383,emissive:2282478,emissiveIntensity:.6,roughness:.2,metalness:.1}),o=e.body=new $e;o.position.y=8,n.add(o),ve(L.sphere(4.2,40,28),t,0,0,0,o).scale.set(1,1.25,.95),ve(L.sphere(3.4,32,24),i,0,-.6,1.25,o).scale.set(.95,1.2,.75);let a=e.head=new $e;a.position.set(0,5.6,1.3),o.add(a),ve(L.sphere(2.6,36,26),t,0,.4,0,a).scale.set(1,.92,1),ve(L.sphere(1.7,32,22),t,0,-.05,2,a).scale.set(1.05,.7,1.15),[-1,1].forEach(m=>{ve(L.sphere(.85,24,18),N(16777215,{r:.15,cc:1}),m*1.05,1.15,1.75,a).scale.set(1,1.1,.7),ve(L.sphere(.45,20,14),N(1314847,{r:.1,cc:1}),m*1,1.15,2.25,a).scale.set(1,1.2,.6),ve(L.sphere(.13,10,8),N(16777215,{e:16777215}),m*.9,1.35,2.48,a),ve(L.cap(.18,.9,10),s,m*1.05,2.05,1.6,a).rotation.z=m*.35,ve(L.sphere(.22,12,8),s,m*.5,.1,3.4,a)});let l=e.jaw=new $e;l.position.set(0,-.55,.6),a.add(l),ve(L.sphere(1.6,30,20),t,0,-.35,1.25,l).scale.set(1,.45,1.1),ve(L.sphere(1.3,24,16),N(14239839,{r:.6}),0,-.05,1.3,l).scale.set(.95,.25,1);for(let m=-2;m<=2;m++)m&&ve(L.cone(.16,.42,10),N(16777215,{r:.3}),m*.45,.22,2.25-Math.abs(m)*.25,l);e.arms=[-1,1].map(m=>{let p=new $e;p.position.set(m*3.3,1.8,1.6),o.add(p),ve(L.cap(.75,2,16),t,0,-1.1,.4,p).rotation.x=-.6;for(let S=-1;S<=1;S++)ve(L.cone(.2,.55,10),N(16774102),S*.3,-2.2,1.6,p).rotation.x=1.8;return p}),e.legs=[-1,1].map(m=>{let p=new $e;p.position.set(m*2.5,-3.2,0),o.add(p),ve(L.cap(1.45,2.4,20),t,0,-2,0,p),ve(L.sphere(1.7,24,16),s,0,-4.5,.6,p).scale.set(1,.5,1.35);for(let y=-1;y<=1;y++)ve(L.cone(.32,.8,12),N(16774102),y*.65,-4.6,2.6,p).rotation.x=Math.PI/2;return p});let c=e.tail=[],u=o,h=-3.4,f=-2.4;for(let m=0;m<7;m++){let p=new $e;p.position.set(0,m?-.25:f,m?-1.55:h),u.add(p),ve(L.sphere(1.7-m*.2,24,16),t,0,0,-.6,p).scale.set(1,.9,1.25),m<6&&ve(L.cone(.45-m*.05,1.2-m*.1,10),r,0,1.4-m*.18,-.6,p),c.push(p),u=p}e.spikes=[];for(let m=0;m<6;m++){let p=ve(L.cone(.55+(m<3?.25:0),2.2-m*.2,6),r,0,4.3-m*1.3,-3-Math.sin(m/5*1.5)*1.1,o);p.rotation.x=-.4-m*.12,e.spikes.push(p)}let d=e.beam=new $e;d.visible=!1,a.add(d),d.position.set(0,-.2,2.8);let g=ve(L.cyl(.9,.9,1,20),Hn(8255999,.7),0,0,0,d,!1);g.rotation.x=Math.PI/2,g.position.z=.5;let x=ve(L.cyl(.45,.45,1,16),xd(16777215),0,0,0,d,!1);return x.rotation.x=Math.PI/2,x.position.z=.5,e.beamLen=m=>{d.scale.set(1,1,m)},n.traverse(m=>{m.isMesh&&(m.castShadow=m.castShadow!==!1)}),e.t=0,e}function Ed(n,e,t,i,s){n.t+=e*(t?1:.35);let r=Math.sin(n.t*2.2);n.legs[0].rotation.x=r*.45,n.legs[1].rotation.x=-r*.45,n.arms[0].rotation.x=-r*.3-(i?.9:0),n.arms[1].rotation.x=r*.3-(i?.9:0),n.body.position.y=8+Math.abs(Math.cos(n.t*2.2))*.5*(t?1:.2),n.body.rotation.z=r*.06,n.body.rotation.x=i?-.15:.04,n.tail.forEach((o,a)=>{o.rotation.y=Math.sin(n.t*1.6-a*.6)*.18,o.rotation.x=.06}),n.jaw.rotation.x+=((i||s>.5?.75:.08)-n.jaw.rotation.x)*Math.min(1,e*8),n.spikeM.emissiveIntensity=.5+s*4+(i?1:0)}function Td(){let n=new $e,e=[];for(let r=0;r<=20;r++){let o=r/20,a=o*Math.PI;e.push(new oe(Math.max(.01,Math.sin(a)*4.2*(1-.12*Math.sin(a*3))),(o-.5)*1.4*(1-Math.sin(a)*.3)))}ve(new is(e,48),N(13095132,{r:.18,m:.9}),0,0,0,n),ve(L.torus(4,.22,6.28,12,64),N(8950432,{r:.25,m:.9}),0,0,0,n).rotation.x=Math.PI/2,ve(new Ot(1.9,32,16,0,6.283,0,Math.PI/2),N(10217471,{r:.05,op:.35,cc:1}),0,.45,0,n,!1);let t=N(8314987,{r:.4,cc:.4});ve(L.sphere(.65,24,16),t,0,1.25,0,n).scale.set(1,1.2,1),[-1,1].forEach(r=>ve(L.sphere(.24,16,10),N(723730,{r:.05,cc:1}),r*.25,1.35,.5,n).scale.set(1,1.4,.6));let i=new $e;n.add(i);for(let r=0;r<12;r++){let o=r/12*6.283;ve(L.sphere(.22,10,8),N(r%2?16732120:4190463,{e:r%2?16732120:4190463,ei:2}),Math.cos(o)*3.6,-.25,Math.sin(o)*3.6,i,!1)}ve(L.cyl(1.2,1.5,.4,32),N(11993082,{e:6288383,ei:1.5}),0,-.7,0,n,!1);let s=ve(new an(1.2,3.2,1,32,1,!0),Hn(10354608,.22),0,-.5,0,n,!1);return s.geometry.translate(0,-.5,0),n.userData={lights:i,beam:s},n}function Ad(n){let e=new $e;return ve(L.rock(3,1),N(4864819,{r:.85,e:5904896,ei:.6}),0,0,0,e).scale.setScalar(n),ve(L.sphere(1.35,20,14),Hn(16742954,.45),0,0,0,e,!1).scale.setScalar(n),e}function Rd(){return{walls:[],plats:[],buildings:[],rooms:[],pads:[],tables:[],high:[],fires:[],coinSpots:[],spawns:[],terrain:()=>0,half:80,sea:null,volcano:{x:60,z:-60},landmarks:[]}}function Dn(n,e,t,i,s,r,o,a){let l={x0:Math.min(e,i),x1:Math.max(e,i),z0:Math.min(t,s),z1:Math.max(t,s),y0:r,y1:o,b:a||null,off:!1};return n.walls.push(l),l}function ki(n,e,t,i,s,r,o,a){let l={x0:Math.min(e,i),x1:Math.max(e,i),z0:Math.min(t,s),z1:Math.max(t,s),top:r,b:o||null,ramp:a||null,off:!1};return n.plats.push(l),l}function o_(n,e,t){if(!n.ramp)return n.top;let i=n.ramp,s=i.axis==="x"?e:t,r=Math.max(0,Math.min(1,(s-i.a0)/(i.a1-i.a0)));return i.h0+(i.h1-i.h0)*r}function Gh(n,e,t){for(let i of n.rooms)if(e>=i.x0-.5&&e<=i.x1+.5&&t>=i.z0-.5&&t<=i.z1+.5)return i;return null}function bn(n,e,t,i){if(i<-22)return Gh(n,e,t)?-30:-80;let s=n.terrain(e,t);for(let r of n.plats){if(r.off||e<r.x0||e>r.x1||t<r.z0||t>r.z1)continue;let o=o_(r,e,t);o<=i+.65&&o>s&&(s=o)}return s}function Cd(n,e,t=.4,i=1.6){for(let r=0;r<2;r++)for(let o of n.walls){if(o.off||e.y+i<o.y0||e.y+.3>o.y1)continue;let a=Math.max(o.x0,Math.min(e.x,o.x1)),l=Math.max(o.z0,Math.min(e.z,o.z1)),c=e.x-a,u=e.z-l,h=c*c+u*u;if(!(h>=t*t))if(h>1e-8){let f=Math.sqrt(h),d=(t-f)/f;e.x+=c*d,e.z+=u*d}else{let f=e.x-o.x0,d=o.x1-e.x,g=e.z-o.z0,x=o.z1-e.z,m=Math.min(f,d,g,x);m===f?e.x=o.x0-t:m===d?e.x=o.x1+t:m===g?e.z=o.z0-t:e.z=o.z1+t}}let s=n.half-1;e.x=Math.max(-s,Math.min(s,e.x)),e.z=Math.max(-s,Math.min(s,e.z))}function mi(n,e,t,i){for(let s of n.buildings)if(!s.wrecked&&e>s.ix0&&e<s.ix1&&i>s.iz0&&i<s.iz1&&t>=s.baseY-.5&&t<s.baseY+s.ceil-.3)return s;return null}function Wh(n,e,t,i){for(let s of n.buildings)if(!s.wrecked&&s.roofAccess&&e>s.x-s.w/2&&e<s.x+s.w/2&&i>s.z-s.d/2&&i<s.z+s.d/2&&t>s.baseY+s.h-.5)return s;return null}function Ka(n,e,t){let i=1e9;for(let s of n.buildings){if(s.wrecked)continue;let r=Math.max(Math.abs(e-s.x)-s.w/2,0),o=Math.max(Math.abs(t-s.z)-s.d/2,0);i=Math.min(i,Math.hypot(r,o))}return i}function Xh(n,e,t,i){for(let s of n.tables)if(!(s.b&&s.b.wrecked)&&Math.abs(t-s.y)<1&&Math.hypot(e-s.x,i-s.z)<s.r)return s;return null}function Qa(n,e,t,i){for(let s of n.pads)if(!(s.b&&s.b.wrecked&&(s.kind==="elev"||s.kind==="elevdown"))&&Math.abs(t-s.y)<1.6&&Math.hypot(e-s.x,i-s.z)<(s.r||1.1))return s;return null}var a_={s:0,e:Math.PI/2,n:Math.PI,w:-Math.PI/2},l_=0,pt=.3,c_=2,Pd=2.6,Id=()=>N(10478591,{r:.05,m:.1,op:.38,cc:1});function Yh(n){let e=new Ke().makeTranslation(n.x,n.baseY,n.z).multiply(new Ke().makeRotationY(n.ry)),t=Math.cos(n.ry),i=Math.sin(n.ry);return{m:(s,r,o,a=0,l=0,c=0,u=1,h=u,f=u)=>e.clone().multiply(ht(s,r,o,a,l,c,u,h,f)),w:(s,r)=>[n.x+s*t+r*i,n.z-s*i+r*t],box:(s,r,o,a)=>{let l=Yh(n).w(s,r),c=Yh(n).w(o,a);return[Math.min(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0],c[0]),Math.max(l[1],c[1])]}}}function bt(n,e,t){let i=Object.assign({id:l_++,h:3.8,door:"s",wall:16765286,trim:16777215,roof:15681391,inner:16774888,floor:14262374,roofType:"gable",sturdy:!1,basement:!1,elevator:!1,interior:"home",name:"House",windows:!0},t);i.ry=a_[i.door];let s=i.door==="s"||i.door==="n";i.lw=s?i.w:i.d,i.ld=s?i.d:i.w,i.baseY=t.baseY!=null?t.baseY:n.terrain(i.x,i.z),i.ceil=Math.min(i.h,t.ceil||3.8),i.roofAccess=i.elevator||!!i.stairs,i.ix0=i.x-i.w/2+pt,i.ix1=i.x+i.w/2-pt,i.iz0=i.z-i.d/2+pt,i.iz1=i.z+i.d/2-pt,i.walls=[],i.plats=[],i.pads=[];let r=Yh(i),o=i.lw,a=i.ld,l=i.group=new $e,c=i.upper=new $e;e.add(l),e.add(c);let u=new In,h=new In,f=new In,d=N(i.wall,{r:.75}),g=N(i.trim,{r:.5}),x=N(i.inner,{r:.85}),m=N(i.roof,{r:.55,cc:.25}),p=(b,M,_,R,B,U,X,O,G,J,Z,Q)=>b.add(M,_,r.m(R,B,U,X,O,G,J,Z,Q)),S=(b,M,_,R,B,U,X,O)=>p(b,L.box(_,R,B),M,U,X,O);p(u,L.rbox(o+.5,.6,a+.5,.12),N(13620957,{r:.8}),0,-.1,0),S(u,N(i.floor,{r:.55,cc:.3}),o-2*pt,.04,a-2*pt,0,.21,0),(i.interior==="home"||i.interior==="cabin")&&p(u,L.cyl(1,1,.03,32),N(16743080,{r:.95}),0,.24,.3,0,0,0,Math.min(1.6,o/5),1,Math.min(1.2,a/5));{let b=r.box(-o/2-.25,-a/2-.25,o/2+.25,a/2+.25);i.plats.push(ki(n,b[0],b[1],b[2],b[3],i.baseY+.2,i))}let y=[{n:"front",L:o,at:(b,M,_)=>[b,M,a/2-pt/2+_],horiz:!0,out:1},{n:"back",L:o,at:(b,M,_)=>[-b,M,-a/2+pt/2-_],horiz:!0,out:1},{n:"left",L:a-2*pt,at:(b,M,_)=>[-o/2+pt/2-_,M,b],horiz:!1},{n:"right",L:a-2*pt,at:(b,M,_)=>[o/2-pt/2+_,M,-b],horiz:!1}],v=i.ceil;for(let b of y){let M=[];if(b.n==="front"&&M.push({c:0,wd:i.wideDoor||c_,b:0,t:Math.min(v-.4,i.wideDoor?v-.6:Pd),door:!0}),i.windows){let O=Math.floor((b.L-1)/3.2);for(let G=0;G<O;G++){let J=-b.L/2+(G+.5)*b.L/O;M.some(Z=>Math.abs(Z.c-J)<1.9)||M.push({c:J,wd:1.3,b:1,t:Math.min(2.4,v-.6)})}}M.sort((O,G)=>O.c-G.c);let _=[],R=-b.L/2;for(let O of M){let G=O.c-O.wd/2,J=O.c+O.wd/2;G>R&&_.push([R,G,0,v]),O.b>0&&_.push([G,J,0,O.b]),O.t<v&&_.push([G,J,O.t,v]),R=J}R<b.L/2&&_.push([R,b.L/2,0,v]);let B=(O,G,J,Z,Q,ae,ye,ke)=>{let nt=(J+Z)/2,ee=(Q+ae)/2,ue=b.at(nt,ee,ke||0);p(O,L.box(b.horiz?Z-J:ye,ae-Q,b.horiz?ye:Z-J),G,ue[0],ue[1],ue[2])};for(let O of _)B(u,d,O[0],O[1],O[2],O[3],pt,0),B(u,x,O[0],O[1],Math.max(O[2],.2),O[3],.04,-pt/2-.02);for(let O of M){let G=O.c-O.wd/2,J=O.c+O.wd/2;O.door?(B(u,g,G-.14,G,.2,O.t+.14,pt+.1,0),B(u,g,J,J+.14,.2,O.t+.14,pt+.1,0),B(u,g,G-.14,J+.14,O.t,O.t+.16,pt+.1,0)):(B(u,Id(),G,J,O.b,O.t,.06,0),B(u,g,G-.1,J+.1,O.b-.12,O.b,pt+.16,0),B(u,g,G-.1,J+.1,O.t,O.t+.12,pt+.12,0))}B(u,g,-b.L/2,b.L/2,v-.18,v,pt+.08,0);let U=-b.L/2,X=[];for(let O of M)O.door&&(X.push([U,O.c-O.wd/2]),U=O.c+O.wd/2);X.push([U,b.L/2]);for(let O of X){if(O[1]-O[0]<.01)continue;let G=b.at(O[0],0,0),J=b.at(O[1],0,0),Z=b.horiz?[G[0],G[2]-pt/2,J[0],J[2]+pt/2]:[G[0]-pt/2,G[2],J[0]+pt/2,J[2]],Q=r.w(Z[0],Z[1]),ae=r.w(Z[2],Z[3]);i.walls.push(Dn(n,Q[0],Q[1],ae[0],ae[1],i.baseY,i.baseY+i.h+.3,i))}if(i.h>v+.5){B(h,d,-b.L/2,b.L/2,v,i.h,pt,0);let O=Math.floor((i.h-v)/3.4),G=Math.max(1,Math.floor((b.L-1)/2.6));for(let J=0;J<O;J++)for(let Z=0;Z<G;Z++){let Q=-b.L/2+(Z+.5)*b.L/G,ae=v+.8+J*3.4;B(h,Id(),Q-.7,Q+.7,ae,ae+2,pt+.06,0),B(h,g,Q-.8,Q+.8,ae-.12,ae,pt+.16,0)}for(let J=0;J<=O;J++)B(h,g,-b.L/2,b.L/2,v+J*3.4-.1,v+J*3.4+.08,pt+.1,0)}}S(h,N(16052714,{r:.9}),o,.25,a,0,v+.12,0),i.h>v+.5&&S(h,N(14015458,{r:.85}),o,.3,a,0,i.h+.12,0);let z=i.h+.27;if(i.roofType==="gable"){let b=Math.min(o,a)+.8,M=Math.max(o,a)+.8,_=b*.38,R=new rs;R.moveTo(-b/2,0),R.lineTo(b/2,0),R.lineTo(0,_),R.lineTo(-b/2,0);let B=new Qs(R,{depth:M,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2});B.translate(0,0,-M/2),p(h,B,m,0,i.h+.2,0,0,o>=a?Math.PI/2:0,0),p(h,L.rbox(.7,1.6,.7,.08),N(11883578,{r:.8}),o*.25,i.h+_*.6,-a*.15)}else if(i.roofType==="arch"){let b=new an(o/2+.15,o/2+.15,a+.4,32,1,!1,-Math.PI/2,Math.PI);b.rotateX(-Math.PI/2),p(h,b,m,0,v,0,0,0,0,1,.55,1)}else if([[o,.6,.25,0,a/2-.12],[o,.6,.25,0,-a/2+.12],[.25,.6,a,o/2-.12,0],[.25,.6,a,-o/2+.12,0]].forEach(b=>p(h,L.rbox(b[0],b[1],b[2],.06),g,b[3],z+.25,b[4])),(!i.roofAccess||o>9)&&(p(h,L.rbox(1.6,1,1.2,.15),N(13160664,{r:.4,m:.6}),-o*.25,z+.5,-a*.2),p(h,L.cyl(.45,.45,.25,24),N(9082014,{m:.7,r:.3}),-o*.25,z+1.1,-a*.2)),i.style==="tower"&&!i.roofAccess&&(p(h,L.cyl(1.2,1.2,2.2,24),N(10251071,{r:.8}),o*.2,z+2,a*.2),p(h,L.cone(1.35,.8,24),N(7031343,{r:.8}),o*.2,z+3.5,a*.2)),i.roofAccess){let b=r.box(-o/2,-a/2,o/2,a/2);i.plats.push(ki(n,b[0],b[1],b[2],b[3],i.baseY+z,i)),n.high.push({x:i.x,y:i.baseY+z,z:i.z,b:i,label:(i.name||"Building")+" roof"})}i.sign&&p(u,L.rbox(Math.min(o-1,4.4),.8,.14,.08),N(i.sign,{r:.35,e:i.sign,ei:.25,cc:.6}),0,Math.min(v,3.2)+.15,a/2+.12),p(u,L.rbox(2.8,.14,1.2,.06),N(i.awning||i.roof,{r:.5}),0,Math.min(Pd+.45,v-.05),a/2+.55);let C=r.w(0,a/2-1.4),I=r.w(0,a/2+1.8);if(i.doorIn={x:C[0],z:C[1]},i.doorOut={x:I[0],z:I[1]},h_(n,i,f,p,r),i.elevator){let b=r.w(-o/2+1.3,-a/2+1.3),M=r.w(o/2-1.5,-a/2+1.5);p(u,L.rbox(1.9,v-.3,.2,.05),N(12108492,{m:.9,r:.25}),-o/2+1.3,v/2+.1,-a/2+pt+.12),qh(u,p,-o/2+1.3,.24,-a/2+1.3,2282478),qh(h,p,o/2-1.5,z+.02,-a/2+1.5,2282478),p(h,L.rbox(1.6,2.4,1.6,.15),N(14673644,{r:.6}),o/2-1.5,z+1.2,-a/2-0+.2);let _={x:M[0],y:i.baseY+z,z:M[1]};i.pads.push(el(n,{x:b[0],y:i.baseY+.2,z:b[1],kind:"elev",label:"\u2B06 ROOF",to:_,b:i})),i.pads.push(el(n,{x:M[0],y:i.baseY+z,z:M[1],kind:"elevdown",label:"\u2B07 INSIDE",to:{x:b[0]+.01,y:i.baseY+.25,z:b[1]+1.4*Math.cos(i.ry)},b:i}))}return i.basement&&u_(n,e,i,u,p,r,i.basement===!0?"basement":i.basement),i.meshes=u.build(l),h.build(c),i.inner=new $e,l.add(i.inner),f.build(i.inner,{cast:!1}),n.buildings.push(i),i}function qh(n,e,t,i,s,r){e(n,L.cyl(.95,1,.08,32),N(r,{e:r,ei:.9,r:.3}),t,i+.04,s),e(n,L.torus(.95,.07,6.283,8,32),N(16777215,{e:16777215,ei:.6}),t,i+.09,s,Math.PI/2)}function el(n,e){return e.r=e.r||1.1,n.pads.push(e),e}function h_(n,e,t,i,s){let r=e.lw,o=e.ld,a=r/2-pt-.2,l=o/2-pt-.2,c=e.interior,u=N(13011538,{r:.6,cc:.2}),h=N(5913122,{r:.6}),f=N(16317180,{r:.5}),d=(b,M,_=1.6,R=1,B)=>{let U=B?N(B,{r:.5,cc:.3}):u;i(t,L.rbox(_,.1,R,.04),U,b,.95,M),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(O=>i(t,L.cyl(.05,.05,.75,8),h,b+O[0]*(_/2-.12),.58,M+O[1]*(R/2-.12)));let X=s.w(b,M);n.tables.push({x:X[0],y:e.baseY+.2,z:X[1],r:Math.max(_,R)*.55+.2,b:e})},g=(b,M,_=15681391)=>{let R=N(_,{r:.5,cc:.4});i(t,L.rbox(.45,.08,.45,.04),R,b,.55,M),i(t,L.rbox(.45,.5,.07,.03),R,b,.82,M-.2),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(B=>i(t,L.cyl(.03,.03,.35,6),h,b+B[0]*.18,.37,M+B[1]*.18))},x=(b,M,_=2,R=0,B)=>{let U=Math.cos(R),X=Math.sin(R),O=(Q,ae)=>[b+Q*U+ae*X,M-Q*X+ae*U],G=N(15852492,{r:.7}),J=B||[16734558,16763450,9095462,1671876,6966419,16749132],Z=O(0,-.2);i(t,L.box(_,2,.08),G,Z[0],1.2,Z[1],0,R),[-1,1].forEach(Q=>{let ae=O(Q*(_/2-.04),0);i(t,L.box(.08,2,.5),G,ae[0],1.2,ae[1],0,R)});for(let Q=0;Q<4;Q++){let ae=O(0,0);i(t,L.box(_,.06,.5),G,ae[0],.28+Q*.6,ae[1],0,R)}for(let Q=0;Q<3;Q++)for(let ae=0;ae<Math.floor((_-.2)/.34);ae++){let ye=-_/2+.26+ae*.34,ke=O(ye,.02),nt=(ae+Q*2)%J.length;(ae+Q)%3===0?i(t,L.cyl(.12,.12,.42,14),N(J[nt],{r:.35,cc:.5}),ke[0],.52+Q*.6,ke[1]):i(t,L.rbox(.26,.36,.28,.05),N(J[nt],{r:.45,cc:.4}),ke[0],.49+Q*.6,ke[1],0,R)}},m=(b,M,_=5032432)=>{let R=N(_,{r:.85});i(t,L.rbox(2.2,.5,.9,.18),R,b,.5,M),i(t,L.rbox(2.2,.75,.3,.14),R,b,.9,M-.35),i(t,L.rbox(.3,.65,.9,.12),R,b-1.05,.65,M),i(t,L.rbox(.3,.65,.9,.12),R,b+1.05,.65,M)},p=(b,M)=>{i(t,L.cyl(.25,.18,.45,16),N(15167313,{r:.6}),b,.45,M),[[0,1,0,.42],[.18,.85,.1,.3],[-.15,.9,-.1,.3]].forEach(_=>i(t,L.sphere(1,14,10),N(5420936,{r:.7}),b+_[0],_[1],M+_[2],0,0,0,_[3]))},S=(b,M)=>{i(t,L.cyl(.03,.03,1.4,8),h,b,.9,M),i(t,L.cyl(.18,.3,.35,16),N(16773569,{e:16769162,ei:.9}),b,1.7,M)},y=(b,M,_=0)=>{i(t,L.rbox(1.6,.5,.45,.06),h,b,.45,M,0,_),i(t,L.rbox(1.5,.85,.08,.04),N(1120295,{r:.2,cc:1}),b,1.15,M,0,_),i(t,L.box(1.36,.72,.02),N(3900150,{e:6333946,ei:.7}),b+Math.sin(_)*.05,1.15,M+Math.cos(_)*.05,0,_)},v=(b,M,_=11868062)=>{i(t,L.rbox(1.4,.45,2.2,.1),u,b,.45,M),i(t,L.rbox(1.35,.25,2.1,.12),f,b,.78,M),i(t,L.rbox(1.38,.12,1.4,.06),N(_,{r:.8}),b,.92,M+.35),i(t,L.rbox(.9,.18,.45,.09),f,b,.98,M-.75),i(t,L.rbox(1.4,1,.12,.05),u,b,.85,M-1.1)},z=(b,M,_,R=9494767)=>{i(t,L.rbox(_,1,.7,.05),N(R,{r:.6}),b,.7,M),i(t,L.rbox(_+.1,.08,.8,.03),N(16316922,{r:.2,cc:1}),b,1.24,M)},C=(b,M,_=1)=>i(t,L.rbox(_,_,_,.06),N(13935475,{r:.8}),b,.2+_/2,M,0,b*3),I=(b,M)=>{d(b,M,1.6,.9,15857145),i(t,L.rbox(.7,.45,.06,.03),N(1120295,{cc:1}),b,1.3,M-.2),i(t,L.box(.62,.36,.01),N(2282478,{e:2282478,ei:.6}),b,1.3,M-.165),g(b,M+.8,3835647)};if(c==="home"||c==="cabin"){if(m(-a+1.4,l-1.2,c==="cabin"?12348453:5032432),y(-a+1.4,l-3.2>-l?l-3:0,Math.PI),a>2.5&&(d(a-1.3,.2),g(a-1.7,.2+.85,16760331),g(a-.9,.2+.85,16760331)),l>2.5&&v(a-1,-l+1.3),x(0,-l+.3,2),p(-a+.4,-l+.4),S(a-.3,l-.3),c==="cabin"){i(t,L.rbox(1.8,1.6,.8,.1),N(10249796,{r:.9}),-a+1.2,1,-l+.5),i(t,L.sphere(.35,12,10),N(16743168,{e:16733184,ei:2.5}),-a+1.2,.6,-l+.75);let b=s.w(-a+1.2,-l+1.4),M=s.w(-a+1.2,-l+.75);n.fires.push({x:b[0],y:e.baseY+.2,z:b[1],r:3.5,b:e,fx:M[0],fz:M[1]})}}else if(c==="shop"){for(let b=-1;b<=1;b++)Math.abs(b*2.6)<a-.8&&x(b*2.6,-.6,1.8,Math.PI/2);z(a-1,l-1.6,1.8,e.sign||9494767),x(0,-l+.3,Math.min(4,a*1.5)),p(-a+.4,l-.5),d(-a+1.2,l-1.5,1.2,.9,16777215)}else if(c==="diner"){z(0,-l+1.3,Math.min(r-2,6),16740518);for(let b=-2;b<=2;b++)Math.abs(b*1.2)<a-.5&&(i(t,L.cyl(.25,.25,.1,16),N(15672124,{cc:1,r:.3}),b*1.2,.8,-l+2.1),i(t,L.cyl(.05,.05,.6,8),N(11384253,{m:1,r:.3}),b*1.2,.5,-l+2.1));d(-a+1.2,l-1.3,1.2,1.2,4770532),d(a-1.2,l-1.3,1.2,1.2,4770532),g(-a+1.2,l-.4,16766474),g(a-1.2,l-.4,16766474),i(t,L.sphere(.25,16,12),N(16756684,{r:.4}),.5,1.45,-l+1.3),i(t,L.cone(.18,.4,16),N(15320170),.5,1.1,-l+1.3,Math.PI)}else if(c==="office"){for(let b=0;b<2;b++)for(let M=-1;M<=1;M++)Math.abs(M*2.8)<a-.9&&-l+1.8+b*2.6<l-2.4&&I(M*2.8,-l+1.8+b*2.6);p(a-.4,l-.4),p(-a+.4,l-.4),i(t,L.rbox(2.6,1.1,.8,.1),N(16777215,{r:.3}),a-1.6,.75,l-1.5)}else if(c==="hangar")C(-a+1,-l+1,1.2),C(-a+1,-l+2.3,1),C(-a+2.3,-l+1,1),C(a-1,-l+1,1.2),d(a-1.5,l-2.5,2,1,9741240),d(-a+1.8,l-2.5,2,1,9741240),i(t,L.cyl(1.6,1.8,.4,32),N(4674921,{m:.6,r:.4}),0,.4,-l+3),i(t,L.sphere(2.4,32,12),N(12634324,{m:.9,r:.2}),0,1.4,-l+3,0,0,.1,1,.28,1),i(t,new Ot(1,24,12,0,6.283,0,Math.PI/2),N(10217471,{r:.05,op:.4,cc:1}),0,1.6,-l+3),i(t,L.rbox(3.2,.6,.1,.05),N(2278750,{e:2278750,ei:.5}),0,2.9,-l+.25);else if(c==="station")i(t,L.rbox(2.4,2,5.2,.35),N(15087942,{r:.3,cc:1}),0,1.25,-.4),i(t,L.rbox(2.2,.9,1.6,.2),N(15087942,{r:.3,cc:1}),0,2.6,1),[-1.3,1.6].forEach(b=>[-1.15,1.15].forEach(M=>i(t,L.cyl(.45,.45,.3,20),N(2042167,{r:.8}),M,.65,b,0,0,Math.PI/2))),i(t,L.rbox(.5,.2,.3,.05),N(3900150,{e:3900150,ei:2}),-.4,3.15,1.2),i(t,L.rbox(.5,.2,.3,.05),N(15680580,{e:15680580,ei:2}),.4,3.15,1.2),d(a-1.2,-l+1.4,1.4,1),x(-a+.4,0,2.4,Math.PI/2);else if(c==="bunkerTop"){i(t,L.rbox(r-1.2,.05,2.6,.02),N(16436245,{r:.6}),0,.24,0);for(let b=0;b<6;b++)i(t,L.box(.35,.06,2.6),N(1120295),-r/2+1.2+b*(r-2.4)/5,.25,0,0,.6);i(t,L.cyl(.6,.6,.1,3),N(16436245,{e:16436245,ei:.4}),a-.5,2.2,-l+.05,Math.PI/2)}}function u_(n,e,t,i,s,r,o){let a=t.lw,l=t.ld,c=Math.max(a,o==="bunker"?16:8),u=Math.max(l,o==="bunker"?12:7),h={id:"r"+t.id,kind:o,b:t,name:o==="bunker"?"Nuclear Bunker":o==="subway"?"Subway Station":o==="mine"?"Mine Tunnel":"Basement"},f=t.door==="s"||t.door==="n",d=f?c:u,g=f?u:c;h.x0=t.x-d/2,h.x1=t.x+d/2,h.z0=t.z-g/2,h.z1=t.z+g/2;let x=o==="bunker"?[0,0]:[t.lw/2-1.3,t.ld/2-1.5-(t.elevator,0)];(t.interior==="home"||t.interior==="cabin")&&(x[0]=-t.lw/2+1.4,x[1]=-t.ld/2+3>t.ld/2-1.2?0:-t.ld/2+3),(t.interior==="shop"||t.interior==="office"||t.interior==="diner")&&(x[0]=-t.lw/2+1.2,x[1]=.6);let m=o==="bunker"?16436245:16758531;s(i,L.rbox(1.8,.08,1.8,.04),N(3359061,{m:.6,r:.4}),x[0],.25,x[1]),qh(i,s,x[0],.28,x[1],m);let p=r.w(x[0],x[1]),S=new $e;e.add(S),h.group=S;let y=new In,v=-30,z=o==="bunker"?10134961:o==="mine"?9268835:o==="subway"?15332857:12560778,C=o==="bunker"?6583435:o==="mine"?7162945:o==="subway"?9741240:9279918;y.rbox(N(C,{r:.7}),d+.6,.4,g+.6,.1,t.x,v-.2,t.z);let I=N(z,{r:.8}),b=6.5;y.box(I,d+.6,b,.3,t.x,v+b/2,h.z0-.15),y.box(I,d+.6,b,.3,t.x,v+b/2,h.z1+.15),y.box(I,.3,b,g,h.x0-.15,v+b/2,t.z),y.box(I,.3,b,g,h.x1+.15,v+b/2,t.z),Dn(n,h.x0-.3,h.z0-.3,h.x1+.3,h.z0,v,v+6),Dn(n,h.x0-.3,h.z1,h.x1+.3,h.z1+.3,v,v+6),Dn(n,h.x0-.3,h.z0,h.x0,h.z1,v,v+6),Dn(n,h.x1,h.z0,h.x1+.3,h.z1,v,v+6);let M=N(16773569,{e:16769162,ei:2.2});for(let U=0;U<3;U++)y.mesh(L.sphere(.25,14,10),M,h.x0+d*(U+.5)/3,v+3.2,h.z0+.2);for(let U=0;U<3;U++)y.mesh(L.sphere(.25,14,10),M,h.x0+d*(U+.5)/3,v+3.2,h.z1-.2);let _=[16734558,16763450,9095462,1671876,6966419];if(o==="bunker"){for(let U=0;U<4;U++){let X=h.x0+1.5+U*2.2;[.6,1.8].forEach(O=>{y.rbox(N(4674921,{m:.5,r:.4}),1,.12,2.1,.04,X,v+O,h.z0+1.4),y.rbox(N(_[U%5],{r:.8}),.95,.15,2,.06,X,v+O+.12,h.z0+1.4)}),y.box(N(3359061),.08,2.2,.08,X-.48,v+1.1,h.z0+.4)}for(let U=0;U<4;U++)y.rbox(N(988970,{cc:1,r:.2}),1.6,1,.1,h.x1-1.2-U*1.8,v+2,h.z1-.12),y.box(N([2278750,2282478,16096779,15680580][U],{e:[2278750,2282478,16096779,15680580][U],ei:.9}),1.45,.85,.02,h.x1-1.2-U*1.8,v+2,h.z1-.18);y.rbox(N(4674921,{r:.5}),6.5,1,.8,.05,h.x1-3.8,v+.5,h.z1-.7);for(let U=0;U<6;U++)y.rbox(N(6660877,{r:.7}),.9,.7,.7,.06,h.x0+1+U%3*1,v+.35+Math.floor(U/3)*.7,h.z1-.8);y.mesh(L.cyl(1.2,1.2,.08,3),N(16436245,{e:16436245,ei:.5}),t.x,v+3.6,h.z0+.25,Math.PI/2,0,0),h.tableSpots=[]}else if(o==="mine"){for(let U=0;U<4;U++){let X=h.x0+1+U*(d-2)/3;y.box(N(9132587,{r:.9}),.35,3.5,.35,X,v+1.75,h.z0+.3),y.box(N(9132587,{r:.9}),.35,3.5,.35,X,v+1.75,h.z1-.3),y.box(N(9132587,{r:.9}),.4,.4,g,X,v+3.5,t.z)}y.rbox(N(7041664,{m:.7,r:.4}),1.4,.9,2,.15,t.x+1.5,v+.7,t.z);for(let U=0;U<5;U++)y.mesh(L.rock(U,1),N([16765286,10416154,5032432][U%3],{r:.2,m:.3,e:[16765286,10416154,5032432][U%3],ei:.5}),t.x+1.2+U%3*.3,v+1.25,t.z-.5+U*.25,0,U,0,.25)}else if(o==="subway"){y.rbox(N(15857145,{r:.3,cc:1}),d-1,2.6,2.4,.5,t.x,v+1.5,h.z0+1.6),y.rbox(N(3835647,{r:.4}),d-.9,.5,2.45,.2,t.x,v+1.1,h.z0+1.6);for(let U=0;U<4;U++)y.box(N(1976635,{cc:1,r:.1}),1.2,.9,2.5,h.x0+1.8+U*(d-3.6)/3,v+2,h.z0+1.6);y.box(N(16436245),d,.05,.3,t.x,v+.03,h.z0+3.1);for(let U=0;U<3;U++)y.rbox(N(9133302,{r:.5}),1.6,.12,.5,.04,h.x0+2+U*3,v+.5,h.z1-.6)}else{for(let U=0;U<Math.floor(d/2.5);U++){let X=h.x0+1.3+U*2.5;y.rbox(N(15325350,{r:.7}),2,2.2,.5,.04,X,v+1.1,h.z0+.35);for(let O=0;O<6;O++)y.mesh(L.cyl(.12,.12,.28,14),N(_[(O+U)%5],{r:.3,m:.4}),X-.75+O*.3,v+.6+O%2*.7,h.z0+.72)}y.rbox(N(15857145,{r:.4}),.9,1.1,.8,.1,h.x1-.7,v+.55,h.z1-.7),y.mesh(L.cyl(.28,.28,.06,20),N(988970,{cc:1}),h.x1-.7,v+.7,h.z1-1.12,Math.PI/2,0,0);for(let U=0;U<3;U++)y.rbox(N(13935475,{r:.8}),.8,.8,.8,.06,h.x1-.7,v+.4+U*.8*(U<2,1),h.z0+.7+(U===2?0:U*.9));y.mesh(L.cyl(.2,.2,.9,16),N(4770532,{r:.1,op:.6,cc:1}),h.x0+.6,v+.45,h.z1-.6)}let R={x:t.x,z:h.z1-1.2};o==="bunker"&&(R.x=h.x0+1.5,R.z=t.z+1.5),y.mesh(L.cyl(.95,1,.08,32),N(2278750,{e:2278750,ei:.9}),R.x,v+.04,R.z),y.mesh(L.torus(.95,.07,6.283,8,32),N(16777215,{e:16777215,ei:.6}),R.x,v+.09,R.z,Math.PI/2,0,0),y.build(S,{cast:!1}),h.spawn={x:t.x+(o==="bunker"?2:.6),y:v,z:t.z+(o==="bunker"?0:-.4)};let B=r.w(x[0]+(x[0]>0?-1.5:1.5),x[1]);el(n,{x:p[0],y:t.baseY+.25,z:p[1],kind:"down",label:o==="bunker"?"\u2622\uFE0F BUNKER":o==="subway"?"\u{1F687} SUBWAY":o==="mine"?"\u26CF\uFE0F MINE":"\u2B07 BASEMENT",to:h.spawn,b:t,room:h}),el(n,{x:R.x,y:v,z:R.z,kind:"up",label:"\u2B06 GO UP",to:{x:B[0],y:t.baseY+.3,z:B[1]},b:t,room:h}),h.hatch={x:p[0],y:t.baseY+.25,z:p[1]},t.room=h,n.rooms.push(h)}function fr(n,e,t){if(t.wrecked)return!1;if(t.wrecked=!0,t.group.visible=!1,t.upper.visible=!1,t.walls.forEach(i=>i.off=!0),t.plats.forEach((i,s)=>{s>0&&(i.off=!0)}),!t.rubble){let i=new In,s=N(t.wall,{r:.8}),r=N(t.roof,{r:.6}),o=N(13620957,{r:.8});i.rbox(o,t.w+.5,.5,t.d+.5,.1,t.x,t.baseY-.05,t.z);let a=t.id*7.13,l=()=>(a=(a*9301+49297)%233280,a/233280);for(let c=0;c<18;c++){let u=.6+l()*1.3;i.add(L.rbox(1,1,1,.12),c%3?s:r,ht(t.x+(l()-.5)*t.w*.9,t.baseY+.3+l()*.6,t.z+(l()-.5)*t.d*.9,l()*3,l()*3,l()*3,u,u*.6,u))}[[0,t.d/2],[0,-t.d/2],[t.w/2,0],[-t.w/2,0]].forEach((c,u)=>{let h=u<2?t.w:t.d;for(let f=0;f<3;f++){let d=.6+l()*1.4,g=(f-1)*h/3;i.add(L.rbox(1,1,1,.06),s,ht(t.x+c[0]+(u<2?g:0),t.baseY+d/2,t.z+c[1]+(u<2?0:g),0,0,0,u<2?h/3.3:.3,d,u<2?.3:h/3.3))}}),t.rubble=new $e,i.build(t.rubble),e.add(t.rubble)}return t.rubble.visible=!0,!0}function fs(n,e){e.wrecked&&(e.wrecked=!1,e.group.visible=!0,e.upper.visible=!0,e.rubble&&(e.rubble.visible=!1),e.walls.forEach(t=>t.off=!1),e.plats.forEach(t=>t.off=!1))}var $h=[{id:"area51",name:"Area 51",emoji:"\u{1F47D}",desc:"Secret desert base with hangars, a control tower and a NUCLEAR BUNKER deep underground.",mood:"desert"},{id:"city",name:"Grok City",emoji:"\u{1F3D9}\uFE0F",desc:"Skyscrapers with rooftop elevators, shops, a park and a subway station to hide in.",mood:"sunny"},{id:"beach",name:"Sunny Beach",emoji:"\u{1F3D6}\uFE0F",desc:"Beach houses, a hotel, a pier and a lighthouse hill. Watch the ocean...",mood:"sunny"},{id:"pine",name:"Pine Peak",emoji:"\u{1F332}",desc:"Cozy mountain town with log cabins, a ranger tower, a mine tunnel and Mt. Grumble.",mood:"sunny"}],so=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function f_(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function tl(n,e,t,i=300,s=150){let r=new jn(i,i,s,s);r.rotateX(-Math.PI/2);let o=r.attributes.position,a=new Float32Array(o.count*3),l=new Ue;for(let u=0;u<o.count;u++){let h=o.getX(u),f=o.getZ(u),d=n.terrain(h,f);o.setY(u,d),l.setHex(t(h,f,d)),a[u*3]=l.r,a[u*3+1]=l.g,a[u*3+2]=l.b}r.setAttribute("color",new Tt(a,3)),r.computeVertexNormals();let c=new Le(r,new Vt({vertexColors:!0,roughness:.92}));return c.receiveShadow=!0,e.add(c),c}function Bi(n,e,t,i,s,r=8,o=.03){let a=Math.hypot(i-e,s-t),l=Math.atan2(i-e,s-t),c=(e+i)/2,u=(t+s)/2;n.add(L.box(r,.06,a),N(4870752,{r:.85}),ht(c,o,u,0,l,0));let h=Math.floor(a/4);for(let f=0;f<h;f++){let d=(f+.5)/h-.5;n.add(L.box(.22,.02,1.8),N(16765503,{r:.6}),ht(c+Math.sin(l)*d*a,o+.04,u+Math.cos(l)*d*a,0,l,0))}}function d_(n,e,t,i,s,r=.06){n.add(L.rbox(i,.18,s,.06),N(15984335,{r:.85}),ht(e,r,t))}function dr(n,e,t,i,s,r=0,o="Lookout Tower",a=15167313){let l=n.terrain(t,i),c=Math.cos(r),u=Math.sin(r),h=N(a,{r:.6}),f=N(7031343,{r:.8}),d=s*1.7+1,g=(b,M)=>[t+b*c+M*u,i-b*u+M*c];e.add(L.rbox(4.4,.35,4.4,.08),h,ht(t,l+s,i,0,r,0)),[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]].forEach(b=>{let M=g(b[0],b[1]);e.mesh(L.cyl(.16,.2,s,10),f,M[0],l+s/2,M[1])}),[[0,-2.1,4.4,.1],[-2.1,0,.1,4.4],[2.1,0,.1,4.4]].forEach(b=>{let M=g(b[0],b[1]);e.add(L.rbox(b[2]+.05,.9,b[3]+.05,.04),h,ht(M[0],l+s+.6,M[1],0,r,0))});let x=g(0,2.2+d/2),m=Math.atan2(s,d);e.add(L.rbox(2,.25,Math.hypot(d,s),.06),h,ht(x[0],l+s/2,x[1],m*1,r,0));for(let b=1;b<6;b++){let M=g(0,2.2+d*b/6);e.add(L.box(2,.06,.18),f,ht(M[0],l+s-s*b/6+.16,M[1],0,r,0))}e.add(L.cone(3.6,1.8,4),N(16777215,{r:.5}),ht(t,l+s+3.4,i,0,r+Math.PI/4,0)),[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]].forEach(b=>{let M=g(b[0],b[1]);e.mesh(L.cyl(.08,.08,2.5,8),f,M[0],l+s+1.4,M[1])});let p=g(-2.2,-2.2),S=g(2.2,2.2);ki(n,Math.min(p[0],S[0]),Math.min(p[1],S[1]),Math.max(p[0],S[0]),Math.max(p[1],S[1]),l+s+.17);let y=g(-1,2.2),v=g(1,2.2+d),z=Math.abs(u)>.5?"x":"z",C=z==="z"?g(0,2.2)[1]:g(0,2.2)[0],I=z==="z"?g(0,2.2+d)[1]:g(0,2.2+d)[0];ki(n,y[0],y[1],v[0],v[1],0,null,{axis:z,a0:C,a1:I,h0:l+s+.17,h1:l}),n.high.push({x:t,y:l+s+.2,z:i,label:o,foot:{x:g(0,2.4+d)[0],z:g(0,2.4+d)[1]}})}function Zh(n,e,t,i,s,r,o=16777215,a){let l=Math.hypot(s-t,r-i),c=Math.ceil(l/2.5),u=N(o,{r:.5}),h=Math.atan2(s-t,r-i);for(let f=0;f<=c;f++){let d=f/c;n.mesh(L.cyl(.08,.08,1.6,8),N(10265519,{m:.7,r:.3}),t+(s-t)*d,.8,i+(r-i)*d)}n.add(L.box(.06,.07,l),u,ht((t+s)/2,1.5,(i+r)/2,0,h,0)),n.add(L.box(.06,.07,l),u,ht((t+s)/2,.8,(i+r)/2,0,h,0)),a&&Dn(e,t-.1,i-.1,s+.1,r+.1,-1,1.7)}function p_(n,e,t,i=0){let s=N(12653087,{r:.5,m:.3});[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]].forEach(r=>n.mesh(L.cyl(.15,.2,9,10),s,e+r[0],i+4.5,t+r[1])),n.mesh(L.cap(2.6,2.2,24),N(16316922,{r:.35,m:.5}),e,i+11.5,t),n.mesh(L.cone(2.7,1.4,24),N(12653087,{r:.4}),e,i+14.3,t)}function Dd(n,e,t){n.mesh(L.cyl(.4,.6,5,16),N(11384253,{m:.8,r:.3}),e,2.5,t),n.add(new Ot(4,32,12,0,6.283,0,.9),N(15857145,{m:.6,r:.25,side:zt}),ht(e,6.5,t,-2.3,.6,0)),n.mesh(L.sphere(.4,12,8),N(15680580,{e:15680580,ei:1.5}),e,7.5,t)}function m_(n,e,t){n.mesh(L.cyl(3.4,3.6,.7,40),N(15330543,{r:.5}),e,.35,t),n.mesh(L.cyl(3,3,.1,40),N(5032432,{r:.05,cc:1,e:30646,ei:.25}),e,.66,t),n.mesh(L.cyl(.4,.6,1.8,20),N(15330543,{r:.5}),e,1.2,t),n.mesh(L.sphere(.9,20,12),N(9494767,{r:.05,op:.6,cc:1}),e,2.3,t)}function g_(n,e,t,i){let s=N(2829634,{r:.4,m:.6});n.mesh(L.cyl(.08,.1,3.6,8),s,e,1.8,t),n.add(L.rbox(.4,1.1,.35,.08),s,ht(e,3.8,t,0,i,0)),[15680580,16436245,2278750].forEach((r,o)=>n.mesh(L.sphere(.11,12,8),N(r,{e:r,ei:o===2?2:.3}),e+Math.sin(i)*.18,4.15-o*.33,t+Math.cos(i)*.18))}function x_(n,e,t,i,s=0){n.mesh(L.cyl(.05,.05,2.4,8),N(16777215),e,s+1.2,t),n.add(new Ot(1.5,16,6,0,6.283,0,Math.PI*.3),N(i,{r:.5,side:zt}),ht(e,s+1.95,t))}function nl(n,e,t,i,s){let r=N(16777215,{r:1,e:16777215,ei:.35});[[0,0,0,1.4],[1.4,-.2,.2,1],[-1.4,-.2,-.1,1.05],[.6,.6,-.2,.95],[-.5,.5,.3,.9]].forEach(o=>n.mesh(L.sphere(1,18,12),r,e+o[0]*s,t+o[1]*s,i+o[2]*s,0,0,0,o[3]*s,o[3]*s*.8,o[3]*s))}function v_(n,e,t,i){let s=0;for(;n.coinSpots.length<t&&s++<4e3;){let r=(e()-.5)*n.half*1.8,o=(e()-.5)*n.half*1.8;i&&!i(r,o)||n.walls.some(a=>r>a.x0-1&&r<a.x1+1&&o>a.z0-1&&o<a.z1+1)||n.coinSpots.push({x:r,z:o})}}function Ld(n,e){let t=Rd();t.id=n,t.meta=$h.find(a=>a.id===n);let i=new In,s=f_(n.length*977+n.charCodeAt(0)),r=new $e;if(e.add(r),t.root=r,n==="area51"){t.half=75,t.terrain=(a,l)=>{let c=Math.max(Math.abs(a),Math.abs(l)),u=c>60?Math.pow(c-60,1.35)*.6:0;return u+=so(48,70,c)*(Math.sin(a*.11)*Math.cos(l*.09)*1.2+.4),u},tl(t,r,(a,l,c)=>c>6?14254414:c>1?15382134:15912850),i.add(L.box(150,.06,12),N(6054768,{r:.85}),ht(0,.03,52));for(let a=-7;a<=7;a++)i.add(L.box(5,.02,.5),N(16777215),ht(a*10,.07,52));Bi(i,0,-50,0,46,7),Bi(i,-50,0,50,0,7),i.add(L.cyl(9,9,.08,48),N(7041664,{r:.8}),ht(14,.04,-12)),i.add(L.torus(7.5,.25,6.283,6,48),N(16436245,{e:16436245,ei:.2}),ht(14,.1,-12,Math.PI/2,0,0)),bt(t,r,{x:0,z:-32,w:12,d:9,h:3.6,door:"s",wall:10727874,trim:16436245,roof:6583435,roofType:"flat",sturdy:!0,interior:"bunkerTop",basement:"bunker",name:"Nuclear Bunker",sign:16436245,windows:!1,wideDoor:3.2,awning:16436245}),bt(t,r,{x:-32,z:-12,w:15,d:16,h:7.5,ceil:7.5,door:"e",wall:14673645,trim:3835647,roof:12109008,roofType:"arch",sturdy:!0,interior:"hangar",name:"Hangar 1",wideDoor:6,windows:!1}),bt(t,r,{x:-32,z:18,w:15,d:16,h:7.5,ceil:7.5,door:"e",wall:14673645,trim:16711790,roof:12109008,roofType:"arch",sturdy:!0,interior:"hangar",name:"Hangar 2",wideDoor:6,windows:!1}),bt(t,r,{x:30,z:-26,w:7,d:7,h:15,door:"w",wall:15857145,trim:3835647,roof:3835647,roofType:"flat",sturdy:!0,elevator:!0,interior:"office",name:"Control Tower",windows:!0}),bt(t,r,{x:28,z:10,w:12,d:7,h:3.6,door:"w",wall:9419919,trim:16777215,roof:2976335,roofType:"gable",interior:"home",basement:!0,name:"Barracks A"}),bt(t,r,{x:28,z:26,w:12,d:7,h:3.6,door:"w",wall:9419919,trim:16777215,roof:2976335,roofType:"gable",interior:"home",name:"Barracks B"}),bt(t,r,{x:9,z:18,w:10,d:8,h:3.8,door:"w",wall:16758531,trim:16777215,roof:16483584,roofType:"flat",interior:"diner",name:"Mess Hall",sign:16483584}),bt(t,r,{x:-10,z:36,w:10,d:9,h:5,ceil:5,door:"e",wall:15087942,trim:16777215,roof:10289672,roofType:"flat",interior:"station",wideDoor:3.6,name:"Fire Station",sturdy:!0}),dr(t,i,-14,-48,6,0,"Guard Tower"),dr(t,i,10,34,6,-Math.PI/2,"Watch Tower",3835647),p_(i,-50,-38),Dd(i,46,-44),Dd(i,50,34),Zh(i,t,-56,-56,56,-56,15067115),Zh(i,t,-56,-56,-56,40,15067115),Zh(i,t,56,-56,56,40,15067115);for(let a=0;a<26;a++){let l=(s()-.5)*140,c=(s()-.5)*140;Math.abs(l)<52&&Math.abs(c)<60||us(i,l,t.terrain(l,c),c,.8+s()*.6,"cactus")}for(let a=0;a<30;a++){let l=(s()-.5)*150,c=(s()-.5)*150;Math.abs(l)<50&&Math.abs(c)<58||Hh(i,l,t.terrain(l,c),c,1+s()*2.5,a,[14254414,13134140,14723437][a%3])}[[8,-4,.2,7048739],[-12,6,1.6,5597999],[12,30,-1.2,15857145],[-20,-36,.4,7048739]].forEach(a=>ur(i,a[0],0,a[1],a[2],a[3])),i.add(L.sphere(5,40,16),N(13095132,{m:.9,r:.18}),ht(14,1.2,-12,.25,0,.1,1,.25,1)),i.add(new Ot(2.2,32,12,0,6.283,0,Math.PI/2),N(10217471,{r:.05,op:.4,cc:1}),ht(14,2,-12,.25,0,.1));for(let a=0;a<8;a++)i.mesh(L.sphere(.3,10,8),N(a%2?16732120:4190463,{e:a%2?16732120:4190463,ei:2}),14+Math.cos(a/8*6.283)*4.5,1.2+Math.sin(a/8*6.283)*1.1,-12+Math.sin(a/8*6.283)*4.5);t.volcano={x:55,z:55},t.spawns=[[4,4],[-4,4],[4,-4],[-4,-4]];for(let a=0;a<8;a++)nl(i,(s()-.5)*300,45+s()*20,(s()-.5)*300,4+s()*3)}else if(n==="city"){t.half=75,t.terrain=(h,f)=>{let d=Math.max(Math.abs(h),Math.abs(f));return d>70?(d-70)*.8:0},tl(t,r,(h,f,d)=>Math.abs(h-15)<12&&Math.abs(f-15)<12||Math.abs(h+45)<12&&Math.abs(f-45)<12?8377179:9426028);for(let h of[-30,0,30])Bi(i,h,-75,h,75,8),Bi(i,-75,h,75,h,8,.035);for(let h of[-45,-15,15,45])for(let f of[-45,-15,15,45])d_(i,h,f,22,22,.02);let a=[16734558,16763450,9095462,1671876,6966419,16749132,5032432,16196997],l=0,c=(h,f,d,g,x)=>bt(t,r,{x:h,z:f,w:9,d:9,h:d,door:g,wall:x,trim:16777215,roof:3359061,roofType:"flat",sturdy:!0,elevator:!0,interior:"office",name:"Sky Tower "+ ++l}),u=(h,f,d,g,x,m,p,S="shop",y)=>bt(t,r,{x:h,z:f,w:d,d:g,h:4.2,door:x,wall:m,trim:16777215,roof:4674921,roofType:"flat",interior:S,name:p,sign:a[l++%8],basement:y});c(-50,-50,26,"e",5032432),c(-40,-40,18,"s",16196997),u(-50,-36,8,8,"e",16763450,"Toy Store"),u(-38,-52,8,7,"s",9095462,"Grocery","shop",!0),c(-20,-50,30,"s",3835647),bt(t,r,{x:-10,z:-42,w:9,d:8,h:10,door:"w",wall:16756141,trim:16777215,roof:10309341,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments"}),u(-20,-38,8,7,"e",16749132,"Pizza Place","diner"),c(20,-48,22,"s",8599788),u(10,-48,8,8,"s",448160,"Pet Shop"),bt(t,r,{x:15,z:-36,w:10,d:7,h:4.6,door:"s",wall:16765286,trim:473932,roof:473932,roofType:"flat",interior:"shop",basement:"subway",name:"Subway Station",sign:1149618}),c(50,-48,24,"w",16711790),u(40,-40,8,8,"w",5032432,"Ice Cream","diner"),c(50,-36,14,"w",16471559),bt(t,r,{x:-45,z:-12,w:12,d:10,h:5.2,ceil:5.2,door:"e",wall:15087942,trim:16777215,roof:10289672,roofType:"flat",interior:"station",wideDoor:3.6,sturdy:!0,name:"Fire Station"}),u(-45,-22,9,6,"n",16763450,"Comic Shop"),c(-15,-15,20,"e",448160),u(-20,-22,7,6,"n",15817653,"Candy Shop","shop",!0),u(-10,-22,7,6,"n",48121,"Game Store"),c(15,-15,28,"w",16760331),bt(t,r,{x:22,z:-22,w:9,d:7,h:9,door:"n",wall:11920524,trim:16777215,roof:1734047,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments 2"}),c(45,-15,18,"w",10182117),u(45,-24,9,6,"n",16704576,"Burger Barn","diner"),m_(i,15,15);for(let h=0;h<9;h++){let f=h/9*6.283;us(i,15+Math.cos(f)*8.5,0,15+Math.sin(f)*8.5,.8+s()*.3,"round",h)}[[15,7.5,0],[15,22.5,Math.PI],[7.5,15,Math.PI/2],[22.5,15,-Math.PI/2]].forEach(h=>wd(i,h[0],0,h[1],h[2])),c(-15,15,22,"e",16196997),u(-22,22,8,7,"e",9095462,"Book Nook","shop",!0),u(-22,8,8,7,"e",16763450,"Bakery","diner"),c(45,15,26,"w",4415982),bt(t,r,{x:38,z:22,w:8,d:8,h:10,door:"w",wall:16763101,trim:16777215,roof:13481179,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments 3"}),u(38,8,8,7,"w",8449433,"Arcade","shop"),c(-45,15,16,"e",4770532),u(-45,24,10,6,"e",16743168,"Hardware","shop",!0);for(let h=0;h<10;h++){let f=h/10*6.283;us(i,-45+Math.cos(f)*7,0,45+Math.sin(f)*7,.9,"round",h)}dr(t,i,-45,45,6,Math.PI/2,"Park Lookout",448160),u(-15,45,9,8,"e",16335172,"Toy Store 2","shop",!0),c(-15,55,20,"e",9485933),c(15,45,24,"w",16291358),u(15,55,9,7,"n",4434571,"Flower Shop"),c(45,45,30,"w",5731728),u(45,55,9,7,"n",15954476,"Taco Stand","diner",!0);for(let h of[-30,0,30])for(let f of[-60,-45,-15,15,45,60])Vh(i,h+4.6,0,f),Vh(i,f,0,h+4.6);for(let h of[-30,0,30])for(let f of[-30,0,30])g_(i,h+4.8,f+4.8,0);for(let h=0;h<18;h++){let f=[-30,0,30][h%3],d=-65+h*7.5;h%2?ur(i,f+2.2,0,d,0,a[h%8]):ur(i,d,0,f-2.2,Math.PI/2,a[(h+3)%8])}t.volcano={x:-60,z:62},t.spawns=[[3,3],[-3,3],[3,-3],[-3,-3]];for(let h=0;h<8;h++)nl(i,(s()-.5)*300,50+s()*20,(s()-.5)*300,4+s()*3)}else if(n==="beach"){t.half=75,t.sea=-1.2,t.terrain=(u,h)=>{let f=-so(22,50,h)*4,d=Math.hypot(u-52,h+48);f+=Math.max(0,11-d*.42)*so(0,1,1);let g=Math.max(Math.abs(u),-h);return g>68&&(f+=(g-68)*.7),f},tl(t,r,(u,h,f)=>h>16?f<-1.4?15254650:16769704:f>3?8178026:9426028),Bi(i,-75,6,75,6,7),Bi(i,0,-75,0,6,7),i.add(L.rbox(110,.3,5,.06),N(13011538,{r:.7}),ht(0,.15,14)),ki(t,-55,11.5,55,16.5,.3);let a=[16756141,16766629,16646070,13303743,10221311,10536191,12432127,16762623],l=[15681391,1149618,448160,16765286,8599788,16711790],c=0;for(let u of[-52,-36,-20,20,36])bt(t,r,{x:u,z:-6,w:9,d:8,h:3.8,door:"s",wall:a[c%8],roof:l[c%6],interior:"home",basement:c%2===0,name:"Beach House"}),c++;for(let u of[-52,-36,20,36,52])bt(t,r,{x:u,z:-24,w:9,d:8,h:3.8,door:"n",wall:a[(c+3)%8],roof:l[c%6],interior:"home",basement:c%2===1,name:"Beach House"}),c++;bt(t,r,{x:-14,z:-40,w:12,d:10,h:20,door:"e",wall:16748459,trim:16777215,roof:3359061,roofType:"flat",elevator:!0,sturdy:!0,interior:"office",name:"Sunset Hotel"}),bt(t,r,{x:12,z:-40,w:10,d:8,h:4.2,door:"w",wall:16740518,roof:16766576,roofType:"flat",interior:"diner",name:"Ice Cream Parlor",sign:16740518,basement:!0}),bt(t,r,{x:52,z:-6,w:9,d:8,h:4.2,door:"s",wall:7395071,roof:16750448,roofType:"flat",interior:"shop",name:"Surf Shop",sign:16750448}),bt(t,r,{x:52,z:-48,baseY:t.terrain(52,-48),w:6,d:6,h:16,door:"w",wall:16777215,trim:15672124,roof:15672124,roofType:"flat",elevator:!0,sturdy:!0,interior:"office",name:"Lighthouse",style:"tower"}),t.high.push({x:46,y:t.terrain(46,-44),z:-44,label:"Lighthouse Hill"}),i.add(L.rbox(6,.35,40,.06),N(11895642,{r:.75}),ht(-30,.6,42)),ki(t,-33,22,-27,62,.78);for(let u=24;u<62;u+=5)[-32.6,-27.4].forEach(h=>i.mesh(L.cyl(.25,.25,4,10),N(9133620,{r:.85}),h,-1.4,u));dr(t,i,8,30,5.5,Math.PI,"Lifeguard Tower",15672124),dr(t,i,40,30,5.5,Math.PI,"Lifeguard Tower 2",16758531);for(let u=0;u<12;u++)x_(i,-60+u*10+s()*3,22+s()*6,l[u%6],t.terrain(-60+u*10,24));for(let u=0;u<22;u++){let h=-70+u*6.6+s()*2,f=9+s()*2;us(i,h,0,u%2?f:f-22-s()*4,.9+s()*.4,"palm",u)}for(let u=0;u<6;u++)i.mesh(L.sphere(.4,20,14),N([16734558,16763450,1671876][u%3],{r:.3,cc:.8}),-50+u*18,t.terrain(-50+u*18,28)+.4,28);[[-8,3,Math.PI/2,16734558],[24,9,Math.PI/2,5032432],[-3,-15,0,16763450]].forEach(u=>ur(i,u[0],0,u[1],u[2],u[3])),t.volcano={x:-60,z:60},t.spawns=[[3,0],[-3,0],[3,-3],[-3,-3]];for(let u=0;u<8;u++)nl(i,(s()-.5)*300,45+s()*20,(s()-.5)*300,4+s()*3);i.add(L.rbox(2.2,1,6,.4),N(16777215,{r:.3,cc:1}),ht(30,-1,58)),i.mesh(L.cyl(.08,.08,7,8),N(9133620),30,2.5,58),i.add(L.cone(2.2,5.5,3),N(16711790,{side:zt}),ht(30.3,3.3,58.5,0,0,0,.1,1,1))}else if(n==="pine"){t.half=75;let a=(f,d)=>{let g=Math.hypot(f-64,d+66);return Math.max(0,34-g*.75)};t.terrain=(f,d)=>{let g=Math.max(Math.abs(f)/50,Math.abs(d)/44),x=g>1?Math.pow((g-1)*30,1.25)*.45+Math.sin(f*.15)*Math.cos(d*.13)*1.5*so(1,1.3,g):0,m=Math.hypot(f+38,d-32);return x-=so(10,4,m)*2.2,x+=Math.max(0,9-Math.hypot(f-30,d+32)*.6),Math.max(x,a(f,d))+0},tl(t,r,(f,d,g)=>g>14?16317180:g>7?10265519:g<-.8?14074506:7327587);let l=new Le(new ss(10,48),N(3718648,{r:.05,cc:1,op:.85,e:223649,ei:.2}));l.rotation.x=-Math.PI/2,l.position.set(-38,-.6,32),r.add(l),Bi(i,-50,0,50,0,6),Bi(i,0,-44,0,44,6);let c=[11887901,13204538,10506797,13928522],u=[2976335,12653087,1914199,6986062],h=0;for(let[f,d,g]of[[-14,-14,"s"],[-30,-14,"s"],[14,-14,"s"],[-14,14,"n"],[14,14,"n"],[30,14,"n"],[-30,14,"n"]])bt(t,r,{x:f,z:d,w:9,d:8,h:3.8,door:g,wall:c[h%4],trim:16773590,roof:u[h%4],interior:"cabin",basement:h%2===0,name:"Log Cabin",inner:16113331,floor:11565637}),h++;bt(t,r,{x:30,z:-12,w:10,d:8,h:4.2,door:"s",wall:16765286,roof:15681391,roofType:"gable",interior:"shop",name:"General Store",sign:15681391,basement:!0}),bt(t,r,{x:-10,z:32,w:14,d:10,h:7,ceil:3.8,door:"e",wall:9262372,trim:16777215,roof:10289672,roofType:"gable",interior:"diner",name:"Ski Lodge",inner:16113331,floor:11565637}),bt(t,r,{x:20,z:34,w:7,d:7,h:12,door:"w",wall:2976335,trim:16765286,roof:16765286,roofType:"flat",interior:"office",elevator:!0,sturdy:!0,name:"Ranger Tower"}),bt(t,r,{x:-44,z:-30,w:7,d:6,h:3.6,door:"e",wall:8344889,trim:4007959,roof:6045747,roofType:"flat",interior:"shop",basement:"mine",name:"Mine Entrance",sign:16758531,sturdy:!0}),t.high.push({x:30,y:t.terrain(30,-32),z:-32,label:"Pine Hill"}),t.high.push({x:36,y:t.terrain(36,-36),z:-36,label:"Pine Hill"}),dr(t,i,-36,0,6,Math.PI/2,"Fire Lookout",12348453);for(let f=0;f<120;f++){let d=(s()-.5)*160,g=(s()-.5)*160,x=t.terrain(d,g);Math.abs(d)<40&&Math.abs(g)<38||x>13||Math.hypot(d+38,g-32)<11||us(i,d,x-.2,g,.9+s()*.9,"pine",f)}for(let f=0;f<14;f++){let d=(s()-.5)*70,g=(s()-.5)*70;Math.abs(d)<4||Math.abs(g)<4||t.walls.some(x=>d>x.x0-3&&d<x.x1+3&&g>x.z0-3&&g<x.z1+3)||us(i,d,t.terrain(d,g),g,.8,"pine",f)}for(let f=0;f<18;f++){let d=(s()-.5)*150,g=(s()-.5)*150;Math.abs(d)<45&&Math.abs(g)<40||Hh(i,d,t.terrain(d,g),g,1+s()*2,f,10265519)}i.mesh(L.cyl(1.2,1.3,.3,16),N(7041664,{r:.9}),6,.15,6);for(let f=0;f<4;f++)i.add(L.cyl(.12,.12,1.4,8),N(7029795),ht(6,.35,6,Math.PI/2,f*.8,0));i.mesh(L.sphere(.45,12,10),N(16743168,{e:16733184,ei:2.5}),6,.55,6),t.fires.push({x:6,y:0,z:6,r:3.5}),[[4,-24,0,12653087],[-24,4,Math.PI/2,1914199]].forEach(f=>ur(i,f[0],0,f[1],f[2],f[3])),i.mesh(L.cyl(6,8,2,32),N(5981750,{r:.9}),64,a(64,-66)-.5,-66),i.mesh(L.cyl(5,5,.3,32),N(16739072,{e:16731392,ei:2.2}),64,a(64,-66)+.4,-66),t.volcano={x:64,z:-66,y:a(64,-66),real:!0},t.spawns=[[3,3],[-3,3],[3,-3],[-3,-3]];for(let f=0;f<9;f++)nl(i,(s()-.5)*300,48+s()*20,(s()-.5)*300,4+s()*3)}i.build(r),v_(t,s,46,(a,l)=>t.terrain(a,l)>-1&&t.terrain(a,l)<8),t.buildings.forEach((a,l)=>{l%2===0&&t.coinSpots.push({x:a.x,z:a.z,y:a.baseY+.2}),a.room&&t.coinSpots.push({x:a.room.spawn.x-1,z:a.room.spawn.z+1,y:a.room.spawn.y,under:!0})});let o=t.half;return Dn(t,-o-2,-o-2,o+2,-o,-100,100),Dn(t,-o-2,o,o+2,o+2,-100,100),Dn(t,-o-2,-o,-o,o,-100,100),Dn(t,o,-o,o+2,o,-100,100),t}var Y={},Gt=new Ut,il=new Ue,ds=class{constructor(e,t,i,s){this.m=new Ks(e,t,i),this.m.castShadow=!!s,this.m.frustumCulled=!1,this.n=i,this.p=[],this.m.count=0,this.m.instanceMatrix.setUsage(Jf),this.m.setColorAt(0,il.set(16777215)),W.scene.add(this.m)}add(e){return this.p.length>=this.n&&this.p.shift(),this.p.push(e),e}clear(){this.p.length=0,this.m.count=0}};function Ud(){Y.puffs=new ds(L.sphere(1,14,10),new Vt({roughness:.9}),360),Y.fire=new ds(L.sphere(1,12,8),new Zt({toneMapped:!1}),240),Y.debris=new ds(L.rbox(1,1,1,.15,2),new Vt({roughness:.7}),220,!0),Y.sparks=new ds(L.sphere(1,8,6),new Zt({toneMapped:!1,transparent:!0,opacity:.95,blending:Li,depthWrite:!1}),260),Y.hail=new ds(L.sphere(1,10,8),N(14743551,{r:.1,cc:1}),220,!0);let n=1400,e=new Pt,t=new Float32Array(n*6);e.setAttribute("position",new Tt(t,3)),Y.rain=new ma(e,new Gr({color:13625599,transparent:!0,opacity:.55})),Y.rain.frustumCulled=!1,Y.rain.visible=!1,W.scene.add(Y.rain),Y.rainD=[];for(let x=0;x<n;x++)Y.rainD.push([(Math.random()-.5)*60,Math.random()*30,(Math.random()-.5)*60]);let i=1600,s=new Pt,r=new Float32Array(i*3);s.setAttribute("position",new Tt(r,3));let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),Y.snow=new ga(s,new Wr({size:.35,map:new xa(o),transparent:!0,depthWrite:!1,color:16777215})),Y.snow.frustumCulled=!1,Y.snow.visible=!1,W.scene.add(Y.snow),Y.snowD=[];for(let x=0;x<i;x++)Y.snowD.push([(Math.random()-.5)*50,Math.random()*25,(Math.random()-.5)*50,Math.random()*6.28]);Y.rings=[],Y.ringGeo=new Sa(.86,1,64),Y.discGeo=new ss(1,64),Y.lines=[],Y.bolts=[],Y.waves=[],Y.meteors=[],Y.trails=[],Y.waterMat=new Vt({color:1688575,roughness:.08,metalness:.05,transparent:!0,opacity:.82,emissive:679838,emissiveIntensity:.25}),Y.waterMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},Y.waterMat.userData.sh=x,x.vertexShader=`uniform float uT;
`+x.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float w1 = sin(position.x*0.18 + uT*1.6)*0.35 + cos(position.y*0.22 + uT*1.3)*0.3 + sin((position.x+position.y)*0.5+uT*2.6)*0.08;
      transformed.z += w1;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = normalize(vec3(-cos(position.x*0.18+uT*1.6)*0.063, sin(position.y*0.22+uT*1.3)*0.066, 1.0));")},Y.water=new Le(new jn(320,320,120,120),Y.waterMat),Y.water.rotation.x=-Math.PI/2,Y.water.visible=!1,Y.water.receiveShadow=!0,W.scene.add(Y.water),Y.foam=new Le(new jn(320,6,60,1),N(16777215,{r:.6,op:.85,e:16777215,ei:.3})),Y.foam.rotation.x=-Math.PI/2,Y.foam.visible=!1,W.scene.add(Y.foam),Y.lavaMat=new Vt({color:16734720,emissive:16727040,emissiveIntensity:1.6,roughness:.4}),Y.lavaMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},Y.lavaMat.userData.sh=x,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix*vec4(transformed,1.0)).xyz;`),x.fragmentShader=`uniform float uT;
varying vec3 vWp;
`+x.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float n = sin(vWp.x*0.7+uT)*sin(vWp.z*0.6-uT*0.8)+sin((vWp.x-vWp.z)*0.35+uT*1.7)*0.6; totalEmissiveRadiance *= 0.55 + 0.45*smoothstep(-0.6,1.2,n); diffuseColor.rgb = mix(vec3(0.25,0.05,0.02), diffuseColor.rgb, smoothstep(-0.9,0.2,n));`)},Y.lava=new Le(new ss(1,64),Y.lavaMat),Y.lava.rotation.x=-Math.PI/2,Y.lava.visible=!1,W.scene.add(Y.lava),Y.torMat=new Vt({color:12109014,roughness:1,transparent:!0,opacity:.8,side:zt,depthWrite:!1}),Y.torMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},Y.torMat.userData.sh=x,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vUv2;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vUv2 = uv;`),x.fragmentShader=`uniform float uT;
varying vec2 vUv2;
`+x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float st = sin(vUv2.x*25.0 + vUv2.y*14.0 - uT*9.0)*0.5+0.5; diffuseColor.rgb *= 0.7 + 0.45*st; diffuseColor.a *= (0.55+0.45*st) * smoothstep(0.0,0.08,vUv2.y) * (1.0 - smoothstep(0.85,1.0,vUv2.y));`)};let c=[];for(let x=0;x<=24;x++){let m=x/24;c.push(new oe(.6+Math.pow(m,1.8)*9+Math.sin(m*9)*.25,m*34))}Y.torGeo=new is(c,40),Y.tors=[];let u=new $e,h=N(2285690,{e:1483594,ei:.6,r:.3,cc:.6}),f=new Le(L.cap(.14,.9,10),h);f.rotation.x=Math.PI/2,u.add(f);let d=new Le(L.cone(.36,.6,20),h);d.rotation.x=Math.PI/2,d.position.z=.75,u.add(d),u.visible=!1,W.scene.add(u),Y.arrow=u,Y.beacon=new Le(new an(.9,.9,30,24,1,!0),Hn(2285690,.18)),Y.beacon.visible=!1,W.scene.add(Y.beacon);let g=Ja([new an(.42,.42,.1,28).rotateX(Math.PI/2).toNonIndexed(),new er(.42,.06,8,28).toNonIndexed()]);Y.coins=new Ks(g,N(16762941,{r:.22,m:1,e:9067008,ei:.45}),120),Y.coins.castShadow=!0,Y.coins.count=0,Y.coins.frustumCulled=!1,W.scene.add(Y.coins),Y.stars=new Ks(L.star(.6,.22),N(16773242,{e:16761856,ei:1.2,r:.25}),10),Y.stars.count=0,Y.stars.frustumCulled=!1,W.scene.add(Y.stars)}function Wt(n,e,t,i,s,r={}){let o=r.fire?Y.fire:Y.puffs;for(let a=0;a<i;a++){let l=Math.random()*6.283,c=(r.sp||3)*(.4+Math.random());o.add({x:n+(Math.random()-.5)*(r.spread||1),y:e+Math.random()*(r.yr||.5),z:t+(Math.random()-.5)*(r.spread||1),vx:Math.cos(l)*c,vy:(r.up||2)*(.5+Math.random()),vz:Math.sin(l)*c,t:0,T:(r.life||1.2)*(.7+Math.random()*.6),s0:(r.s||.6)*(.6+Math.random()*.6),s1:(r.s1||1.6)*(.7+Math.random()*.6),c:Array.isArray(s)?s[a%s.length]:s,g:r.g||0,drag:r.drag||1.5})}}function ps(n,e,t,i,s,r={}){for(let o=0;o<i;o++){let a=Math.random()*6.283,l=(r.sp||6)*(.3+Math.random());Y.debris.add({x:n,y:e+Math.random(),z:t,vx:Math.cos(a)*l,vy:(r.up||7)*(.6+Math.random()*.8),vz:Math.sin(a)*l,rx:Math.random()*6,ry:Math.random()*6,wr:(Math.random()-.5)*12,s:(r.s||.5)*(.5+Math.random()),t:0,T:r.life||3.5,c:s[o%s.length],gy:r.floor!=null?r.floor:e-.5})}}function Kn(n,e,t,i,s,r={}){for(let o=0;o<i;o++){let a=Math.random()*6.283,l=Math.random()*3.14,c=(r.sp||8)*(.3+Math.random());Y.sparks.add({x:n,y:e,z:t,vx:Math.cos(a)*Math.sin(l)*c,vy:Math.cos(l)*c*.6+(r.up||2),vz:Math.sin(a)*Math.sin(l)*c,t:0,T:(r.life||.6)*(.6+Math.random()*.8),s:r.s||.12,c:s,g:r.g!=null?r.g:12})}}function jh(n,e,t,i,s=16777215,r=.6){let o=new Le(L.torus(1,.08,6.283,8,48),Hn(s,.7));o.material=o.material.clone(),o.rotation.x=Math.PI/2,o.position.set(n,e+.2,t),W.scene.add(o),Y.waves.push({m:o,t:0,T:r,r:i})}function sl(n,e,t,i,s,r=16723285,o=0){let a=Y.rings.find(c=>c.id===n);if(!a){if(a=Y.rings.find(c=>!c.used),!a){let c=new $e,u=new Le(Y.ringGeo,new Zt({color:r,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,side:zt})),h=new Le(Y.discGeo,new Zt({color:r,transparent:!0,opacity:.25,depthWrite:!1,toneMapped:!1,side:zt})),f=new Le(Y.discGeo,h.material.clone());c.add(u,h,f),c.rotation.x=-Math.PI/2,W.scene.add(c),a={g:c,a:u,d:h,f},Y.rings.push(a)}a.used=!0,a.id=n}a.seen=!0,a.g.visible=!0,a.g.position.set(e,t+.08,i),a.g.scale.setScalar(s),a.a.material.color.setHex(r),a.d.material.color.setHex(r),a.f.material.color.setHex(r);let l=.5+.5*Math.sin(W.t*12);return a.a.material.opacity=.6+.4*l,a.d.material.opacity=.14+.1*l,a.f.scale.setScalar(Math.max(.001,o)),a.f.material.opacity=.35,a}function Nd(n,e,t,i,s,r,o,a=16723285){let l=Y.lines.find(u=>u.id===n);if(!l){if(l=Y.lines.find(u=>!u.used),!l){let u=new Le(new jn(1,1),new Zt({color:a,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,side:zt}));u.rotation.order="YXZ",W.scene.add(u),l={m:u},Y.lines.push(l)}l.used=!0,l.id=n}l.seen=!0;let c=Math.hypot(i-e,s-t);l.m.visible=!0,l.m.position.set((e+i)/2,r+.1,(t+s)/2),l.m.rotation.set(-Math.PI/2,Math.atan2(i-e,s-t),0,"YXZ"),l.m.scale.set(o,c,1),l.m.material.color.setHex(a),l.m.material.opacity=.3+.25*(.5+.5*Math.sin(W.t*14))}function zd(){Y.rings.forEach(n=>n.seen=!1),Y.lines.forEach(n=>n.seen=!1)}function Od(){Y.rings.forEach(n=>{!n.seen&&n.used&&(n.used=!1,n.id=null,n.g.visible=!1)}),Y.lines.forEach(n=>{!n.seen&&n.used&&(n.used=!1,n.id=null,n.m.visible=!1)})}function Fd(n,e,t){let i=new $e,s=n+(Math.random()-.5)*6,r=e+55,o=t+(Math.random()-.5)*6,a=Hn(14085375,.95),l=new Zt({color:16777215,toneMapped:!1}),c=(u,h,f,d,g,x,m)=>{let p=Math.hypot(d-u,g-h,x-f),S=new Le(L.cyl(m,m,1,6),a);S.scale.y=p,S.position.set((u+d)/2,(h+g)/2,(f+x)/2),S.lookAt(d,g,x),S.rotateX(Math.PI/2),i.add(S);let y=new Le(L.cyl(m*.4,m*.4,1,5),l);y.scale.y=p,y.position.copy(S.position),y.quaternion.copy(S.quaternion),i.add(y)};for(let u=1;u<=12;u++){let h=u/12,f=n+(Math.random()-.5)*4*(1-h),d=e+55*(1-h),g=t+(Math.random()-.5)*4*(1-h);c(s,r,o,f,d,g,.35),Math.random()<.3&&c(f,d,g,f+(Math.random()-.5)*6,d-4,g+(Math.random()-.5)*6,.18),s=f,r=d,o=g}W.scene.add(i),Y.bolts.push({g:i,t:0}),W.flash.position.set(n,e+12,t),W.flash.intensity=30,Kn(n,e+.3,t,26,12575743,{sp:9}),Wt(n,e,t,6,10134445,{s:.6,s1:1.8})}function Jh(n,e,t,i,s,r,o){let a=r==="bomb"?new $e:Ad(o||1);r==="bomb"&&(a.add(new Le(L.sphere(.8*o,16,12),N(16738816,{e:16729088,ei:2.2,r:.5}))),a.add(new Le(L.sphere(1.2*o,16,12),Hn(16747050,.35))));let l=r==="bomb"?0:25,c=r==="bomb"?0:-18;W.scene.add(a),Y.meteors.push({id:n,m:a,x:e,y:t,z:i,T:s,t:0,dx:l,dz:c,kind:r,size:o||1,h:r==="bomb"?40:70})}function y_(){Y.meteors.forEach(n=>W.scene.remove(n.m)),Y.meteors.length=0}function kd(n,e,t){let i=W.t,s,r;for(s of[Y.puffs,Y.fire]){r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p){let a=Math.exp(-o.drag*n);o.vx*=a,o.vz*=a,o.vy=o.vy*a-o.g*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n;let l=o.t/o.T,c=(o.s0+(o.s1-o.s0)*Math.sqrt(l))*(1-l*l*l);Gt.position.set(o.x,o.y,o.z),Gt.scale.setScalar(Math.max(.001,c)),Gt.rotation.set(0,0,0),Gt.updateMatrix(),s.m.setMatrixAt(r,Gt.matrix),s.m.setColorAt(r,il.setHex(o.c)),r++}s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0)}s=Y.debris,r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p){o.vy-=22*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n,o.rx+=o.wr*n,o.ry+=o.wr*.7*n,o.y<o.gy+o.s*.5&&(o.y=o.gy+o.s*.5,o.vy*=-.35,o.vx*=.6,o.vz*=.6,o.wr*=.6);let a=o.t>o.T-.5?(o.T-o.t)/.5:1;Gt.position.set(o.x,o.y,o.z),Gt.rotation.set(o.rx,o.ry,0),Gt.scale.setScalar(o.s*a),Gt.updateMatrix(),s.m.setMatrixAt(r,Gt.matrix),s.m.setColorAt(r,il.setHex(o.c)),r++}s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0),s=Y.sparks,r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p)o.vy-=o.g*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n,Gt.position.set(o.x,o.y,o.z),Gt.rotation.set(0,0,0),Gt.scale.setScalar(o.s*(1-o.t/o.T)),Gt.updateMatrix(),s.m.setMatrixAt(r,Gt.matrix),s.m.setColorAt(r,il.setHex(o.c)),r++;if(s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0),s=Y.hail,r=0,t.hail>0)for(let o=0;o<t.hail*6;o++)s.add({x:e.x+(Math.random()-.5)*36,y:e.y+22+Math.random()*6,z:e.z+(Math.random()-.5)*36,vy:-26,vx:2,t:0,T:2.2,s:.09+Math.random()*.1,gy:t.groundY?t.groundY:0,b:0});s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p)o.vy-=20*n,o.y+=o.vy*n,o.x+=o.vx*n,o.y<o.gy+o.s&&o.b<2&&(o.y=o.gy+o.s,o.vy=Math.abs(o.vy)*.3,o.b++),Gt.position.set(o.x,o.y,o.z),Gt.scale.setScalar(o.s),Gt.updateMatrix(),s.m.setMatrixAt(r,Gt.matrix),r++;if(s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,Y.rain.visible=t.rain>.02,Y.rain.visible){let o=Y.rain.geometry.attributes.position.array,a=Y.rainD,l=t.wind||0;for(let c=0;c<a.length;c++){let u=a[c];u[1]-=n*38,u[1]<0&&(u[1]+=30,u[0]=(Math.random()-.5)*60,u[2]=(Math.random()-.5)*60);let h=e.x+u[0],f=e.y-4+u[1],d=e.z+u[2];o[c*6]=h,o[c*6+1]=f,o[c*6+2]=d,o[c*6+3]=h+l*.05,o[c*6+4]=f+.9,o[c*6+5]=d}Y.rain.geometry.attributes.position.needsUpdate=!0,Y.rain.material.opacity=.55*Math.min(1,t.rain)}if(Y.snow.visible=t.snow>.02||t.ash>.02,Y.snow.visible){let o=Y.snow.geometry.attributes.position.array,a=Y.snowD,l=t.ash>0?2.5:3.5,c=t.snow>0?6:1;for(let u=0;u<a.length;u++){let h=a[u];h[1]-=n*l,h[0]+=n*c*(.6+Math.sin(i+h[3])*.4),h[1]<0&&(h[1]+=25,h[0]=(Math.random()-.5)*50,h[2]=(Math.random()-.5)*50),h[0]>25&&(h[0]-=50),o[u*3]=e.x+h[0],o[u*3+1]=e.y-3+h[1],o[u*3+2]=e.z+h[2]}Y.snow.geometry.attributes.position.needsUpdate=!0,Y.snow.material.color.setHex(t.ash>0?5591125:16777215),Y.snow.material.opacity=Math.min(1,Math.max(t.snow,t.ash)),Y.snow.material.size=t.ash>0?.25:.38}Y.bolts=Y.bolts.filter(o=>(o.t+=n,o.g.visible=o.t<.06||o.t>.1&&o.t<.32,o.t>.35?(W.scene.remove(o.g),!1):!0)),Y.waves=Y.waves.filter(o=>{o.t+=n;let a=o.t/o.T;return o.m.scale.setScalar(.5+a*o.r),o.m.material.opacity=.8*(1-a),a>=1?(W.scene.remove(o.m),!1):!0}),Y.meteors=Y.meteors.filter(o=>{o.t+=n;let a=Math.min(1,o.t/o.T);return o.m.position.set(o.x+o.dx*(1-a),o.y+o.h*(1-a)+(o.kind==="bomb"?Math.sin(a*Math.PI)*18:0),o.z+o.dz*(1-a)),o.m.rotation.x+=n*3,o.m.rotation.y+=n*2,Math.random()<.5&&Wt(o.m.position.x,o.m.position.y,o.m.position.z,1,[10133672,13159634,7041664],{sp:.3,up:.3,s:.35*o.size,s1:1*o.size,life:1}),Math.random()<.7&&Wt(o.m.position.x,o.m.position.y,o.m.position.z,1,[16751164,16765286],{fire:1,sp:.6,up:.2,s:.4*o.size,s1:.1,life:.35}),a>=1?(W.scene.remove(o.m),!1):!0}),[Y.waterMat,Y.lavaMat,Y.torMat].forEach(o=>{o.userData.sh&&(o.userData.sh.uniforms.uT.value=i)})}function rl(){Y.puffs.clear(),Y.fire.clear(),Y.debris.clear(),Y.sparks.clear(),Y.hail.clear(),y_(),Y.rings.forEach(n=>{n.used=!1,n.g.visible=!1}),Y.lines.forEach(n=>{n.used=!1,n.m.visible=!1})}var mr=["kaiju","lightning","meteor","tornado","flood","quake","volcano","blizzard","alien"],st=Math.random,ms=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Kh(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/l));return Math.hypot(n-(t+o*c),e-(i+a*c))}function $t(n,e){let t=e.y<-22,i=t?null:mi(n,e.x,e.y,e.z);return{under:t,b:i,sturdy:!!(i&&i.sturdy),table:i?Xh(n,e.x,e.y,e.z):null,roof:t?null:Wh(n,e.x,e.y,e.z),out:!t&&!i,fire:n.fires.some(s=>(!s.b||!s.b.wrecked)&&Math.hypot(e.x-s.x,e.z-s.z)<s.r&&Math.abs(e.y-s.y)<2)}}function Hi(n){return n.rooms.map(e=>({kind:"pad",b:e.b,pad:n.pads.find(t=>t.room===e&&t.kind==="down"),x:e.hatch.x,y:e.hatch.y,z:e.hatch.z,label:e.name,under:!0}))}function pr(n,e){return n.buildings.filter(t=>!t.wrecked&&(!e||t.sturdy)).map(t=>({kind:"in",b:t,x:t.x,y:t.baseY+.2,z:t.z,label:t.name}))}function __(n){let e=[];return n.buildings.forEach(t=>{if(t.elevator&&!t.wrecked){let i=t.pads.find(s=>s.kind==="elev");e.push({kind:"pad",b:t,pad:i,x:i.x,y:i.y,z:i.z,label:t.name+" roof",high:!0})}}),n.high.filter(t=>!t.b).forEach(t=>e.push({kind:"high",x:t.x,y:t.y,z:t.z,foot:t.foot,label:t.label})),e}function M_(n){return n.tables.filter(e=>!e.b||!e.b.wrecked&&!e.b.sturdy||e.b&&e.b.sturdy).filter(e=>!e.b||!e.b.wrecked).map(e=>({kind:"table",b:e.b,x:e.x,y:e.y,z:e.z,label:"under a table"}))}function Bd(n){if(n._open)return n._open;let e=[];for(let t=-60;t<=60;t+=6)for(let i=-60;i<=60;i+=6)Math.abs(n.terrain(t,i))>1.5||Ka(n,t,i)>9&&e.push({kind:"open",x:t,y:n.terrain(t,i),z:i,label:"open ground"});return n._open=e}var Hd=(n,e)=>n.players.filter(t=>t.st==="ok"&&$t(e,t).out);function ol(n,e,t,i=.55){let s=Hd(n,e);if(s.length&&st()<i){let o=s[st()*s.length|0];return{x:o.x+(st()-.5)*t,z:o.z+(st()-.5)*t}}let r=e.half-8;return{x:(st()-.5)*2*r*.8,z:(st()-.5)*2*r*.8}}function gi(n,e){return e.i=n.hid=(n.hid||0)+1,e.t=0,n.haz.push(e),e}var ro=(n,e,t)=>bn(n,e,t,200),It={kaiju:{name:"KAIJU ATTACK",icon:"\u{1F996}",color:"#a855f7",mood:"dusk",dur:40,warn:"ROARGON is coming! Hide UNDERGROUND!",tip:"Basements, the subway, the mine and the bunker are the only safe spots. Buildings get stomped!",start(n,e){let t=st()*6.283,i=e.half+6;n.env.kj={x:Math.cos(t)*i,z:Math.sin(t)*i,yaw:0,step:0,beamT:5,roarT:1,roar:0,charge:0,beam:null,tx:0,tz:0,retarget:0},n.fx.push({k:"sfx",n:"roar"})},tick(n,e,t,i){let s=n.env.kj;if(s.retarget-=t,s.retarget<=0){s.retarget=6;let c=n.players.filter(f=>f.st==="ok"&&f.y>-22),u=c[st()*c.length|0],h=u?{x:u.x,z:u.z}:{x:(st()-.5)*80,z:(st()-.5)*80};s.tx=h.x,s.tz=h.z}let o=Math.atan2(s.tx-s.x,s.tz-s.z)-s.yaw;for(;o>Math.PI;)o-=6.283;for(;o<-Math.PI;)o+=6.283;s.yaw+=Math.max(-t*.7,Math.min(t*.7,o));let a=s.charge>0||s.beam||s.roar>0,l=a?0:3.4*i.k;if(Math.hypot(s.tx-s.x,s.tz-s.z)>6&&(s.x+=Math.sin(s.yaw)*l*t,s.z+=Math.cos(s.yaw)*l*t),s.walk=l>0,s.x=Math.max(-e.half-8,Math.min(e.half+8,s.x)),s.z=Math.max(-e.half-8,Math.min(e.half+8,s.z)),e.buildings.forEach(c=>{!c.wrecked&&Math.abs(c.x-s.x)<c.w/2+3.5&&Math.abs(c.z-s.z)<c.d/2+3.5&&i.wreck(c)}),n.players.forEach(c=>{c.st==="ok"&&c.y>-22&&Math.hypot(c.x-s.x,c.z-s.z)<5&&i.hit(c,30,"stomp",s)}),l>0&&(s.step+=t,s.step>2.4)){s.step=0;let c=s.side=-(s.side||1),u=s.x+Math.sin(s.yaw)*7+Math.cos(s.yaw)*c*2.5,h=s.z+Math.cos(s.yaw)*7-Math.sin(s.yaw)*c*2.5;gi(n,{k:"stomp",x:u,z:h,y:ro(e,u,h),r:6,T:1.3})}if(s.roarT-=t,s.roarT<=0&&(s.roarT=11,s.roar=1.8,n.fx.push({k:"sfx",n:"roar"}),n.env.shake=Math.max(n.env.shake,.6)),s.roar>0&&(s.roar-=t),s.beamT-=t,s.beamT<=0&&!s.beam&&s.charge<=0){let c=n.players.filter(d=>d.st==="ok"&&d.y>-22&&Math.hypot(d.x-s.x,d.z-s.z)<45),u=c[st()*c.length|0],h=u?{x:u.x,z:u.z}:{x:s.x+Math.sin(s.yaw)*25,z:s.z+Math.cos(s.yaw)*25},f=Math.atan2(h.x-s.x,h.z-s.z);s.yaw=f,s.charge=.01,s.bx0=s.x+Math.sin(f)*6,s.bz0=s.z+Math.cos(f)*6,s.bx1=s.x+Math.sin(f)*46,s.bz1=s.z+Math.cos(f)*46,gi(n,{k:"beam",x:s.bx0,z:s.bz0,x1:s.bx1,z1:s.bz1,y:.1,r:1.9,T:1.9}),n.fx.push({k:"sfx",n:"beam"})}s.charge>0&&(s.charge+=t/1.9,s.charge>=1&&(s.charge=0,s.beam=1.2,s.beamT=7.5/i.k)),s.beam&&(s.beam-=t,n.players.forEach(c=>{c.st==="ok"&&c.y>-22&&Kh(c.x,c.z,s.bx0,s.bz0,s.bx1,s.bz1)<2&&i.hit(c,35,"beam",{x:s.x,z:s.z})}),e.buildings.forEach(c=>{!c.wrecked&&!c.sturdy&&Kh(c.x,c.z,s.bx0,s.bz0,s.bx1,s.bz1)<Math.max(c.w,c.d)/2+1&&i.wreck(c)}),s.beam<=0&&(s.beam=null))},impact(n,e,t,i){n.k==="stomp"&&(e.fx.push({k:"stomp",x:n.x,y:n.y,z:n.z}),e.env.shake=Math.max(e.env.shake,.8),e.players.forEach(s=>{s.st==="ok"&&s.y>-22&&ms(s,n)<n.r&&i.hit(s,28,"stomp",n)}),t.buildings.forEach(s=>{!s.wrecked&&Math.abs(s.x-n.x)<s.w/2+n.r*.6&&Math.abs(s.z-n.z)<s.d/2+n.r*.6&&i.wreck(s)}))},safe:(n,e)=>e.under?"Underground":!1,targets:n=>Hi(n)},lightning:{name:"LIGHTNING STORM",icon:"\u26A1",color:"#facc15",mood:"storm",dur:30,warn:"Lightning storm! Get INSIDE a building!",tip:"Any building keeps you safe. Stay off roofs and open ground!",start(n){n.env.rain=1,n.env.wind=4,n.cd=1.5},tick(n,e,t,i){if(n.cd-=t,n.cd<=0){n.cd=(.55+st()*.4)/i.k;let s=n.players.filter(o=>o.st==="ok"&&Wh(e,o.x,o.y,o.z)),r=s.length&&st()<.5?{x:s[0].x,z:s[0].z}:ol(n,e,4,.6);gi(n,{k:"strike",x:r.x,z:r.z,y:ro(e,r.x,r.z),r:2.6,T:1.5})}},impact(n,e,t,i){e.fx.push({k:"bolt",x:n.x,y:n.y,z:n.z}),e.players.forEach(s=>{let r=$t(t,s);s.st==="ok"&&r.out&&ms(s,n)<n.r&&Math.abs(s.y-n.y)<3&&i.hit(s,30,"zap",n)})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":!1,targets:n=>pr(n).concat(Hi(n))},meteor:{name:"METEOR SHOWER",icon:"\u2604\uFE0F",color:"#fb923c",mood:"dusk",dur:30,warn:"Meteors incoming! Get into a STURDY building or underground!",tip:"Concrete buildings and basements are safest. Big meteors can smash wooden houses!",start(n){n.cd=1},tick(n,e,t,i){if(n.cd-=t,n.cd<=0){n.cd=(.7+st()*.5)/i.k;let s=st()<.22,r=ol(n,e,6,.5),o=gi(n,{k:"meteor",x:r.x,z:r.z,y:ro(e,r.x,r.z),r:s?5.5:3.2,T:2.3,big:s});n.fx.push({k:"meteor",id:o.i,x:o.x,y:o.y,z:o.z,T:o.T,s:s?2:1})}},impact(n,e,t,i){e.fx.push({k:"boom",x:n.x,y:n.y,z:n.z,s:n.big?1.6:1,c:"meteor"}),e.env.shake=Math.max(e.env.shake,n.big?.6:.3);let s=null;n.big&&t.buildings.forEach(r=>{!r.wrecked&&!r.sturdy&&Math.abs(r.x-n.x)<r.w/2+1&&Math.abs(r.z-n.z)<r.d/2+1&&(i.wreck(r),s=r)}),e.players.forEach(r=>{if(r.st!=="ok"||ms(r,n)>n.r)return;let o=$t(t,r);o.under||o.sturdy||o.b&&!n.big||i.hit(r,n.big?45:30,"boom",n)})},safe:(n,e)=>e.under?"Underground":e.sturdy?"Sturdy building":e.b?"maybe":!1,targets:n=>pr(n,!0).concat(Hi(n))},tornado:{name:"TORNADO",icon:"\u{1F32A}\uFE0F",color:"#94a3b8",mood:"storm",dur:35,warn:"TORNADO WARNING! Get to a basement or sturdy building!",tip:"Basements are best. Tornadoes rip apart wooden houses!",start(n,e){n.env.rain=.6,n.env.wind=8;let t=n.wave>=3?2:1;n.env.tor=[];for(let i=0;i<t;i++){let s=st()*6.283;n.env.tor.push({x:Math.cos(s)*(e.half-5),z:Math.sin(s)*(e.half-5),vx:0,vz:0,wt:0})}},tick(n,e,t,i){n.env.tor.forEach(s=>{if(s.wt-=t,s.wt<=0){s.wt=3+st()*2;let r=ol(n,e,10,.6),o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;s.vx=o/l*4.6*i.k,s.vz=a/l*4.6*i.k}s.x+=s.vx*t,s.z+=s.vz*t,s.x=Math.max(-e.half,Math.min(e.half,s.x)),s.z=Math.max(-e.half,Math.min(e.half,s.z)),e.buildings.forEach(r=>{!r.wrecked&&!r.sturdy&&Math.abs(r.x-s.x)<r.w/2+2.5&&Math.abs(r.z-s.z)<r.d/2+2.5&&i.wreck(r)}),n.players.forEach(r=>{if(r.st!=="ok")return;let o=$t(e,r);if(o.under||o.sturdy)return;let a=s.x-r.x,l=s.z-r.z,c=Math.hypot(a,l);if(c<11){let u=(1-c/11)*9;r.kx+=(a/(c||1)*u+l/(c||1)*u*.8)*t*2,r.kz+=(l/(c||1)*u-a/(c||1)*u*.8)*t*2}c<4.2&&(i.hit(r,22,"fling",s),r.st==="ok"&&(r.vy=12,r.kx=-l*1.5,r.kz=a*1.5))})})},safe:(n,e)=>e.under?"Underground":e.sturdy?"Sturdy building":!1,targets:n=>Hi(n).concat(pr(n,!0))},flood:{name:"TSUNAMI",icon:"\u{1F30A}",color:"#38bdf8",mood:"storm",dur:36,warn:"TSUNAMI WARNING! Get to HIGH GROUND!",tip:"Ride an elevator to a rooftop, climb a tower or a hill. Basements will flood!",start(n,e){n.env.rain=.4;let t=e.sea!=null?e.sea:-.6;n.env.water=t,n.env.waterBase=t,n.env.waterTarget=3.7+Math.min(.6,n.wave*.1),n.env.waveZ=e.sea!=null?75:null,n.fx.push({k:"sfx",n:"whoosh"})},tick(n,e,t,i){let s=n.env,r=n.dzT;s.waveZ!=null&&(s.waveZ-=t*9,s.waveZ<-80&&(s.waveZ=null));let o=r<n.dzDur-8;s.water+=((o?s.waterTarget:s.waterBase)-s.water)*t*(o?.22:.35),n.players.forEach(a=>{if(a.st!=="ok")return;if($t(e,a).under){let u=a.room;s.water>(a.roomBase!=null?a.roomBase:0)+.3&&i.hit(a,10*t,"water");return}let c=s.water-a.y;c>1.4?i.hit(a,7*t,"water"):c>.5&&i.hit(a,3*t,"water"),c>.3&&(a.kx+=-1.5*t*(e.sea!=null?0:1),a.kz+=-2.5*t)}),s.waveZ!=null&&n.players.forEach(a=>{a.st==="ok"&&Math.abs(a.z-s.waveZ)<3&&a.y<s.waterTarget&&a.y>-22&&i.hit(a,15,"water",{x:a.x,z:a.z+5})})},safe:(n,e,t)=>!e.under&&n.y>(t.env.waterTarget||3.7)+.2?"High ground":!1,targets:n=>__(n)},quake:{name:"EARTHQUAKE",icon:"\u{1FAE8}",color:"#d97706",mood:"quake",dur:30,warn:"EARTHQUAKE! Drop, Cover, Hold On under a table, or get to open ground!",tip:"Tables protect you inside. Outside, stay away from buildings.",start(n,e){n.cd=1.2,n.cd2=3,n.cd3=6,n.env.cracks=[],n.env.quake=1},tick(n,e,t,i){let s=n.env,r=n.dzT;if(s.shake=Math.max(s.shake,.35+.35*Math.max(0,Math.sin(r*.9))),n.cd-=t,n.cd<=0){n.cd=.35/i.k;let o=e.buildings.filter(c=>!c.wrecked),a=o[st()*o.length|0];if(a){let c,u,h=!a.sturdy&&st()<.45;if(h)c=a.ix0+st()*(a.ix1-a.ix0),u=a.iz0+st()*(a.iz1-a.iz0);else{let f=st()*4|0,d=st()-.5;c=f<2?a.x+d*a.w:a.x+(f===2?1:-1)*(a.w/2+1.2+st()*1.6),u=f<2?a.z+(f===0?1:-1)*(a.d/2+1.2+st()*1.6):a.z+d*a.d}gi(n,{k:"junk",x:c,z:u,y:h?a.baseY+.2:ro(e,c,u),r:1.7,T:1.2,inside:h,bh:a.h})}let l=n.players.filter(c=>c.st==="ok"&&c.y>-22&&Ka(e,c.x,c.z)<4);if(l.length&&st()<.35){let c=l[st()*l.length|0];gi(n,{k:"junk",x:c.x+(st()-.5)*2,z:c.z+(st()-.5)*2,y:c.y,r:1.7,T:1.25,inside:!!mi(e,c.x,c.y,c.z)})}}if(n.cd2-=t,n.cd2<=0){n.cd2=4.5;let o=Bd(e),a=o[st()*o.length|0]||{x:0,z:0},l=st()*3.14,c=9;gi(n,{k:"crack",x:a.x-Math.cos(l)*c,z:a.z-Math.sin(l)*c,x1:a.x+Math.cos(l)*c,z1:a.z+Math.sin(l)*c,y:e.terrain(a.x,a.z),r:1.1,T:1.8})}if(n.cd3-=t,n.cd3<=0){n.cd3=9;let o=e.buildings.filter(l=>!l.wrecked&&!l.sturdy&&!l.elevator),a=o[st()*o.length|0];a&&gi(n,{k:"collapse",x:a.x,z:a.z,y:a.baseY,r:Math.max(a.w,a.d)/2+.5,T:3,b:a.id})}},impact(n,e,t,i){if(n.k==="junk")e.fx.push({k:"junk",x:n.x,y:n.y,z:n.z}),e.players.forEach(s=>{if(s.st==="ok"&&ms(s,n)<n.r&&Math.abs(s.y-n.y)<2.5){let r=$t(t,s);if(r.table||r.under)return;i.hit(s,22,"bonk",n)}});else if(n.k==="crack")e.env.cracks.push([n.x,n.z,n.x1,n.z1,n.y]),e.fx.push({k:"crack",x:n.x,z:n.z,x1:n.x1,z1:n.z1,y:n.y}),e.players.forEach(s=>{s.st==="ok"&&Math.abs(s.y-n.y)<1.5&&Kh(s.x,s.z,n.x,n.z,n.x1,n.z1)<n.r&&(i.hit(s,18,"bonk",n),s.vy=7)});else if(n.k==="collapse"){let s=t.buildings.find(r=>r.id===n.b);s&&!s.wrecked&&(e.players.forEach(r=>{r.st==="ok"&&mi(t,r.x,r.y,r.z)===s&&!Xh(t,r.x,r.y,r.z)&&i.hit(r,30,"bonk",n)}),i.wreck(s))}},safe:(n,e,t,i)=>e.under?"Underground":e.table?"Under a table":e.out&&!e.roof&&Ka(i,n.x,n.z)>7?"Open ground":!1,targets:n=>M_(n).concat(Bd(n)).concat(Hi(n))},volcano:{name:"VOLCANO",icon:"\u{1F30B}",color:"#ef4444",mood:"volcano",dur:38,warn:"VOLCANO ERUPTING! Get indoors, away from the lava!",tip:"Roofs block lava bombs. Lava flows on the ground, so stay far from the volcano or up high.",start(n,e){let t=e.volcano;n.env.lava={x:t.x,z:t.z,r:0,max:Math.hypot(t.x,t.z)-14,y:.35},n.env.ash=.8,n.env.volc=0,n.cd=2.5,n.fx.push({k:"sfx",n:"boom"}),n.env.shake=.8},tick(n,e,t,i){let s=n.env.lava;if(n.env.volc=Math.min(1,n.env.volc+t/4),n.env.volc>=1&&(s.r=Math.min(s.max,s.r+t*1.7*i.k)),n.cd-=t,n.cd<=0){n.cd=(.5+st()*.35)/i.k;let r=ol(n,e,6,.5),o=gi(n,{k:"bomb",x:r.x,z:r.z,y:ro(e,r.x,r.z),r:3,T:2.1});n.fx.push({k:"bomb",id:o.i,x:o.x,y:o.y,z:o.z,T:o.T,s:1,sx:e.volcano.x,sz:e.volcano.z})}n.players.forEach(r=>{if(r.st!=="ok")return;Math.hypot(r.x-s.x,r.z-s.z)<s.r&&(r.y<s.y+.7||r.y<-22)&&i.hit(r,22*t,"burn")})},impact(n,e,t,i){e.fx.push({k:"boom",x:n.x,y:n.y,z:n.z,s:.9,c:"lava"}),e.players.forEach(s=>{if(s.st!=="ok"||ms(s,n)>n.r)return;let r=$t(t,s);!r.out||r.roof&&!1||Math.abs(s.y-n.y)<3&&i.hit(s,26,"burn",n)})},safe:(n,e,t)=>{let i=t.env.lava;return i&&Math.hypot(n.x-i.x,n.z-i.z)<i.r+3&&n.y<2?!1:e.under?"Underground":e.b?"Indoors":!1},targets:(n,e)=>{let t=n.volcano;return pr(n).concat(Hi(n)).filter(i=>Math.hypot(i.x-t.x,i.z-t.z)>Math.hypot(t.x,t.z)*.8)}},blizzard:{name:"BLIZZARD & HAIL",icon:"\u{1F328}\uFE0F",color:"#7dd3fc",mood:"snow",dur:32,warn:"BLIZZARD! Get inside or warm up by a fire!",tip:"The cold and hail hurt outside. Fireplaces and campfires keep you warm. Umbrellas block hail.",start(n){n.env.snow=1,n.env.hail=.6,n.env.wind=7,n.env.cold=1,n.cd=1.2},tick(n,e,t,i){n.cd-=t;let s=n.cd<=0;s&&(n.cd=1.2/i.k),n.players.forEach(r=>{if(r.st!=="ok")return;let o=$t(e,r);if(o.fire){r.hp=Math.min(r.max,r.hp+3*t);return}o.out&&(i.hit(r,2.6*t*i.k,"cold"),r.kx+=2.2*t,s&&!(r.upg&&r.upg.umbrella)&&i.hit(r,6,"hail"))})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":e.fire?"By the fire":!1,targets:n=>pr(n).concat(Hi(n))},alien:{name:"ALIEN INVASION",icon:"\u{1F6F8}",color:"#4ade80",mood:"alien",dur:35,warn:"UFOs are abducting people! Hide INDOORS!",tip:"UFO spotlights can only grab you outside. Red light = run!",start(n,e){let t=e.id==="area51"?4:3;n.env.ufos=[];for(let i=0;i<t;i++){let s=i/t*6.283+st();n.env.ufos.push({x:Math.cos(s)*60,z:Math.sin(s)*60,tx:0,tz:0,lock:0,rt:0,grab:null})}n.fx.push({k:"sfx",n:"ufo"})},tick(n,e,t,i){n.env.ufos.forEach((s,r)=>{if(s.rt-=t,s.rt<=0){s.rt=2.5;let h=Hd(n,e).filter(d=>!d.grabbed),f=h.length?h.reduce((d,g)=>ms(d,s)<ms(g,s)?d:g):null;f&&st()<.85?(s.tx=f.x,s.tz=f.z,s.chase=f.id):(s.tx=(st()-.5)*100,s.tz=(st()-.5)*100,s.chase=null)}if(s.chase!=null){let h=n.players.find(f=>f.id===s.chase);h&&h.st==="ok"&&$t(e,h).out&&(s.tx=h.x,s.tz=h.z)}if(s.grab!=null){let h=n.players.find(f=>f.id===s.grab);if(s.gT-=t,h&&(h.x+=(s.x-h.x)*t*2,h.z+=(s.z-h.z)*t*2,h.y=Math.min(13,h.y+t*4.5)),s.gT<=0||!h){if(h){let f=e.half-10;h.st="ok",h.grabbed=!1,h.x=(st()-.5)*2*f,h.z=(st()-.5)*2*f,h.y=16,h.vy=0,i.hit(h,15,"drop"),i.tp(h)}s.grab=null,s.rt=0}return}let o=s.tx-s.x,a=s.tz-s.z,l=Math.hypot(o,a),c=6.2*i.k;l>.3&&(s.x+=o/l*Math.min(l,c*t),s.z+=a/l*Math.min(l,c*t));let u=n.players.filter(h=>h.st==="ok"&&Math.hypot(h.x-s.x,h.z-s.z)<3.6&&$t(e,h).out&&h.sh<=0);if(u.length){if(s.lock+=t,s.lock>1.5){let h=u[0];if(i.shielded(h)){s.lock=0;return}s.lock=0,s.grab=h.id,s.gT=2.6,h.st="float",h.grabbed=!0,h.waveKO=!0,n.fx.push({k:"sfx",n:"zap"}),i.event(h,"beamed")}}else s.lock=Math.max(0,s.lock-t*2)})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":!1,targets:n=>pr(n).concat(Hi(n))}};function al(n,e){let t=[];return mr.forEach(i=>{i!==e&&(t.push(i),i==="alien"&&n.id==="area51"&&t.push(i),i==="flood"&&n.id==="beach"&&t.push(i),i==="volcano"&&n.id==="pine"&&t.push(i),i==="blizzard"&&n.id==="pine"&&t.push(i),i==="kaiju"&&n.id==="city"&&t.push(i))}),t[st()*t.length|0]}function xi(n,e){return n==="flood"&&e&&e.sea==null?"FLASH FLOOD":It[n].name}var rt={kaiju:null,ufos:[],tors:[],volc:null,cracks:[],torDebris:null};function ll(){rt.kaiju&&(rt.kaiju.root.visible=!1),rt.ufos.forEach(n=>n.visible=!1),rt.tors.forEach(n=>n.visible=!1),rt.volc&&(rt.volc.visible=!1),rt.cracks.forEach(n=>W.scene.remove(n)),rt.cracks=[],Y.water.visible=!1,Y.foam.visible=!1,Y.lava.visible=!1}function Vd(n,e,t){let i=n.env,s=n.phase==="active"||n.phase==="warn";if(i.kj&&n.dz==="kaiju"&&n.phase==="active"){rt.kaiju||(rt.kaiju=Sd(),W.scene.add(rt.kaiju.root));let a=rt.kaiju;a.root.visible=!0,a.root.position.x+=(i.kj.x-a.root.position.x)*Math.min(1,t*8),a.root.position.z+=(i.kj.z-a.root.position.z)*Math.min(1,t*8),a.root.position.y=e.terrain(a.root.position.x,a.root.position.z),a.root.rotation.y=i.kj.yaw,Ed(a,t,i.kj.walk,i.kj.roar>0,i.kj.charge||(i.kj.beam?1:0)),a.beam.visible=!!i.kj.beam,i.kj.beam&&(a.beamLen(42),a.beam.children[0].scale.x=a.beam.children[0].scale.z=.8+Math.random()*.4,Math.random()<.6&&Kn(i.kj.bx1*.3+i.kj.bx0*.7+(Math.random()-.5)*20,1,i.kj.bz1*.3+i.kj.bz0*.7+(Math.random()-.5)*20,3,8255999)),a.head.rotation.x=i.kj.beam||i.kj.charge>0?.32:0,i.kj.charge>0&&Math.random()<.5&&Kn(a.root.position.x,16,a.root.position.z,2,6288383,{sp:3,g:-3})}else rt.kaiju&&(rt.kaiju.root.visible=!1);let r=n.dz==="alien"&&n.phase==="active"&&i.ufos?i.ufos:[];for(;rt.ufos.length<r.length;){let a=Td();W.scene.add(a),rt.ufos.push(a)}rt.ufos.forEach((a,l)=>{let c=r[l];if(a.visible=!!c,!c)return;a.position.x+=(c.x-a.position.x)*Math.min(1,t*6),a.position.z+=(c.z-a.position.z)*Math.min(1,t*6),a.position.y=15+Math.sin(W.t*1.5+l)*.6+e.terrain(a.position.x,a.position.z)*.3,a.userData.lights.rotation.y+=t*2,a.rotation.z=Math.sin(W.t+l)*.06;let u=e.terrain(a.position.x,a.position.z),h=a.userData.beam;h.scale.y=a.position.y-u-.5,h.material.opacity=c.grab!=null?.45:.2,sl("ufo"+l,a.position.x,u,a.position.z,3.6,c.lock>0||c.grab!=null?16723285:4906624,Math.min(1,c.lock/1.5)),c.grab!=null&&Math.random()<.5&&Kn(a.position.x,u+Math.random()*10,a.position.z,2,10354608,{sp:2,g:-6})});let o=n.dz==="tornado"&&n.phase==="active"&&i.tor?i.tor:[];for(;rt.tors.length<o.length;){let a=new $e,l=new Le(Y.torGeo,Y.torMat);a.add(l);let c=new Le(Y.torGeo,Y.torMat);c.scale.set(.7,.95,.7),a.add(c),W.scene.add(a),rt.tors.push(a)}if(rt.tors.forEach((a,l)=>{let c=o[l];a.visible=!!c,c&&(a.position.x+=(c.x-a.position.x)*Math.min(1,t*6),a.position.z+=(c.z-a.position.z)*Math.min(1,t*6),a.position.y=e.terrain(a.position.x,a.position.z)-.5,a.children[0].rotation.y+=t*3,a.children[1].rotation.y-=t*4.5,a.rotation.z=Math.sin(W.t*.7+l)*.08,Math.random()<.9&&Wt(a.position.x+(Math.random()-.5)*6,a.position.y+.5,a.position.z+(Math.random()-.5)*6,2,[10718061,9080729,12759680],{sp:6,up:3,s:.8,s1:2.2,life:1.4}),Math.random()<.25&&ps(a.position.x,a.position.y+2+Math.random()*8,a.position.z,1,[9132587,13935475,7041664,4906624],{sp:14,up:6,s:.5,floor:0}))}),i.water!=null&&n.dz==="flood"&&(n.phase==="active"||n.phase==="calm")&&i.water>(i.waterBase||-1)+.02?(Y.water.visible=!0,Y.water.position.y+=(i.water-Y.water.position.y)*Math.min(1,t*4),i.waveZ!=null?(Y.foam.visible=!0,Y.foam.position.set(0,i.waterTarget+.4,i.waveZ),Y.foam.scale.y=1,Math.random()<.8&&Wt((Math.random()-.5)*140,i.waterTarget,i.waveZ,2,16777215,{sp:2,up:5,s:1,s1:2.5})):Y.foam.visible=!1):e.sea!=null?(Y.water.visible=!0,Y.water.position.y=e.sea,Y.foam.visible=!1):(Y.water.visible=!1,Y.foam.visible=!1),i.lava&&n.dz==="volcano"&&n.phase==="active"){if(!e.volcano.real){if(!rt.volc||rt.volc.userData.map!==e.id){rt.volc&&W.scene.remove(rt.volc),rt.volc=new $e,rt.volc.userData.map=e.id;let l=new Le(new an(5,22,18,40,6),N(7031354,{r:.9}));l.position.y=9,l.castShadow=!0,rt.volc.add(l);let c=new Le(new an(4.5,4.5,.4,32),N(16734720,{e:16727040,ei:2.5}));c.position.y=18.1,rt.volc.add(c),[0,1,2,3].forEach(u=>{let h=new Le(new an(.8,1.6,12,12),N(16738816,{e:16729088,ei:1.8}));h.position.set(Math.cos(u*1.6)*7,8,Math.sin(u*1.6)*7),h.rotation.set(Math.sin(u*1.6)*.5,0,-Math.cos(u*1.6)*.5),rt.volc.add(h)}),W.scene.add(rt.volc)}rt.volc.visible=!0,rt.volc.position.set(e.volcano.x,e.terrain(e.volcano.x,e.volcano.z)-18*(1-(i.volc||0)),e.volcano.z)}let a=e.volcano.real?e.volcano.y+1:18+e.terrain(e.volcano.x,e.volcano.z);Math.random()<.8&&Wt(e.volcano.x+(Math.random()-.5)*4,a,e.volcano.z+(Math.random()-.5)*4,2,[4934485,7039861,3355448],{sp:2,up:9,s:2,s1:6,life:3.5,drag:.4}),Math.random()<.6&&Kn(e.volcano.x,a,e.volcano.z,3,16747050,{sp:10,up:12,s:.35,life:1.6,g:14}),Math.random()<.5&&Wt(e.volcano.x,a,e.volcano.z,2,[16738816,16758531],{fire:1,sp:2,up:6,s:1.2,s1:.3,life:.8}),Y.lava.visible=i.lava.r>.5,Y.lava.position.set(i.lava.x,i.lava.y,i.lava.z),Y.lava.scale.setScalar(Math.max(.01,i.lava.r))}else Y.lava.visible=!1,rt.volc&&(rt.volc.visible=!1);for(let a of n.haz){let l=Math.min(1,a.t/a.T);if(a.k==="beam"||a.k==="crack"?Nd("h"+a.i,a.x,a.z,a.x1,a.z1,(a.y||0)+.05,a.r*2,a.k==="beam"?16723285:16746496):a.k==="collapse"?sl("h"+a.i,a.x,a.y+.3,a.z,a.r,16746496,l):sl("h"+a.i,a.x,a.y,a.z,a.r,a.k==="strike"?16769357:a.k==="junk"?16746496:16723285,l),a.k==="collapse"){let c=e.buildings.find(u=>u.id===a.b);c&&!c.wrecked&&Math.random()<.3&&Wt(c.x+(Math.random()-.5)*c.w,c.baseY+c.h,c.z+(Math.random()-.5)*c.d,1,13219740,{s:.4,s1:1.2,up:-1})}a.k==="junk"&&l>.5&&!a.vis&&(a.vis=1,ps(a.x,(a.y||0)+4,a.z,4,[13935475,10265519,15681391],{sp:1,up:-2,s:.5,floor:a.y||0}))}if(i.cracks&&n.dz==="quake"&&n.phase==="active")for(;rt.cracks.length<i.cracks.length;){let a=i.cracks[rt.cracks.length],l=new Le(L.box(1,1,1),N(2759956,{r:1})),c=Math.hypot(a[2]-a[0],a[3]-a[1]);l.scale.set(1,.1,c),l.position.set((a[0]+a[2])/2,a[4]+.03,(a[1]+a[3])/2),l.rotation.y=Math.atan2(a[2]-a[0],a[3]-a[1]),W.scene.add(l),rt.cracks.push(l)}else rt.cracks.length&&n.phase!=="active"&&(rt.cracks.forEach(a=>W.scene.remove(a)),rt.cracks=[])}function Gd(n,e,t){let i=n.k;if(i==="bolt")Fd(n.x,n.y,n.z),t.thunder();else if(i==="boom"){let s=n.c==="lava";Wt(n.x,n.y,n.z,10,s?[4868690,7039861]:[10265519,13751771,7041664],{sp:5*n.s,up:3,s:.7*n.s,s1:2*n.s,life:1.4}),Wt(n.x,n.y+.5,n.z,8,[16742938,16763196,16731392],{fire:1,sp:6*n.s,up:4,s:.8*n.s,s1:.2,life:.5}),ps(n.x,n.y,n.z,s?4:8,s?[3811874,16734720]:[4864819,7035471,10724259],{sp:8,up:8,s:.45*n.s,floor:n.y}),Kn(n.x,n.y+.5,n.z,20,s?16742912:16757575,{sp:10}),jh(n.x,n.y,n.z,6*n.s,16757575),W.flash.position.set(n.x,n.y+4,n.z),W.flash.color.setHex(16752704),W.flash.intensity=18,t.boom(Math.min(1,.6*n.s))}else if(i==="meteor")Jh(n.id,n.x,n.y,n.z,n.T,"meteor",n.s);else if(i==="bomb"){Jh(n.id,n.x,n.y,n.z,n.T,"bomb",n.s);let s=Y.meteors[Y.meteors.length-1];s.dx=n.sx-n.x,s.dz=n.sz-n.z,s.h=25}else if(i==="stomp")Wt(n.x,n.y,n.z,18,[12755834,14074784,10265519],{sp:9,up:2,s:1,s1:3,life:1.5}),jh(n.x,n.y,n.z,10,16777215,.8),ps(n.x,n.y,n.z,6,[7041664,9132587],{sp:9,up:6,floor:n.y}),t.boom(.9);else if(i==="junk")ps(n.x,n.y+.5,n.z,6,[13935475,10265519,15681391,16765286],{sp:3,up:3,s:.45,floor:n.y}),Wt(n.x,n.y,n.z,6,14074784,{s:.5,s1:1.4}),t.boom(.35);else if(i==="crack")Wt((n.x+n.x1)/2,n.y,(n.z+n.z1)/2,14,12755834,{spread:14,s:.7,s1:2,sp:2}),t.boom(.5);else if(i==="wreck"){let s=e.buildings.find(r=>r.id===n.b);s&&(Wt(s.x,s.baseY+1,s.z,22,[14074784,12563877,15064528],{spread:Math.max(s.w,s.d),sp:5,up:3,s:1.2,s1:3.2,life:1.8}),ps(s.x,s.baseY+s.h*.6,s.z,14,[s.wall,s.roof,s.trim,13620957],{sp:8,up:9,s:.7,floor:s.baseY}),t.boom(.8))}else i==="splash"?Wt(n.x,n.y,n.z,8,16777215,{sp:3,up:5,s:.4,s1:1}):i==="hit"?Kn(n.x,n.y+1.2,n.z,10,16769357,{sp:5}):i==="revive"?Kn(n.x,n.y+1,n.z,24,4906624,{sp:4,g:-2}):i==="coin"?Kn(n.x,n.y+.5,n.z,8,16765503,{sp:3,g:4}):i==="sfx"&&t[n.n]&&t[n.n]()}var A={phase:"lobby",t:0,wave:0,waves:5,map:null,dz:null,next:null,picked:!1,players:[],haz:[],env:{},wrecked:[],coins:[],star:null,fx:[],msgs:[],hid:0,dzT:0,dzDur:30,last:null,round:0},Wd=["Rex","Luna","Max","Pip","Zoe","Bolt"],cn=Math.random;function Qh(){return{water:null,shake:0,rain:0,snow:0,ash:0,hail:0,wind:0,cold:0}}function xr(n){return 100+25*((n&&n.hp)|0)}function ao(n){return Object.assign({id:0,pid:null,name:"Player",cpu:!1,look:{},x:0,y:.3,z:0,yaw:0,vy:0,vx:0,vz:0,kx:0,kz:0,hp:100,max:100,st:"ok",koT:0,inv:0,an:"idle",sp:0,sh:0,shUses:0,fuel:2.5,upg:{},waveKO:!1,rev:0,tpN:0,grounded:!0,coinsWave:0,revives:0,kos:0,ai:{}},n)}function cl(n,e,t,i,s){if(n.st==="ko"||n.st==="float"){n.an=n.st==="ko"?"ko":"float";return}let r=n.upg||{},o=s.water!=null?s.water:i.sea!=null?i.sea:-99,a=o>n.y+.9&&n.y>-22,l=6.2*(1+.15*(r.speed|0))*(a?.55:1),c=e.x*l,u=e.z*l,h=Math.min(1,t*(n.grounded||a?12:4));if(n.vx+=(c-n.vx)*h,n.vz+=(u-n.vz)*h,Math.hypot(e.x,e.z)>.1){let p=Math.atan2(e.x,e.z)-n.yaw;for(;p>Math.PI;)p-=6.283;for(;p<-Math.PI;)p+=6.283;n.yaw+=p*Math.min(1,t*14)}e.jump&&(n.grounded||a)&&(n.vy=a?6:8.6,n.grounded=!1,n.jumped=!0),e.jet&&r.jetpack&&n.fuel>0?(n.vy=Math.min(n.vy+46*t,7.5),n.fuel-=t,n.jetOn=!0):n.jetOn=!1,n.grounded&&!e.jet&&(n.fuel=Math.min(2.5,n.fuel+t*.6)),n.vy-=24*t,a&&(n.vy+=(o-.95-n.y)*30*t,n.vy*=Math.exp(-3*t)),n.x+=(n.vx+n.kx)*t,n.z+=(n.vz+n.kz)*t,n.y+=n.vy*t;let d=Math.exp(-2.5*t);n.kx*=d,n.kz*=d,Cd(i,n,.4,1.6);let g=bn(i,n.x,n.z,n.y);if(n.y<=g?(n.vy<-26&&!n.cpu&&(n.hardLand=!0),n.y=g,n.vy=0,n.grounded=!0):n.grounded=n.y-g<.05,n.y<-50||n.y<-60&&n.y>-22){let m=i.spawns[0];n.x=m[0],n.z=m[1],n.y=2,n.vy=0}n.sp=Math.hypot(n.vx,n.vz)/6.2;let x=$t(i,n);n.an=a?"swim":n.grounded?n.sp>.15?"run":x.table&&A.dz==="quake"&&A.phase!=="calm"?"cover":(A.phase==="warn"&&!n.cpu&&x.out,"idle"):"jump",n.an==="idle"&&A.phase==="active"&&x.out&&n.cpu&&cn()<.002&&(n.an="panic")}function eu(n,e){let t=Qa(e,n.x,n.y,n.z);return t?(n.x=t.to.x,n.y=t.to.y+.05,n.z=t.to.z,n.vy=0,n.vx=n.vz=0,t.kind==="down"&&(n.roomBase=t.b.baseY),t):null}var jt={W:null,scene:null,hooks:{}};function tu(n,e,t,i,s){jt.W=n,jt.scene=e,Object.assign(A,{phase:"calm",t:14,wave:0,waves:s||5,map:t,dz:null,next:null,picked:!1,haz:[],env:Qh(),wrecked:[],fx:[],msgs:[],hid:0,last:null,round:(A.round||0)+1,coinBank:{}}),n.buildings.forEach(o=>fs(n,o)),A.players=[],i.forEach((o,a)=>A.players.push(ao({id:a,pid:o.pid,name:o.name,look:o.look,upg:o.upg||{},cpu:!1})));let r=0;for(;A.players.length<4;){let o=A.players.length;A.players.push(ao({id:o,name:Wd[(r+A.round)%Wd.length],cpu:!0,look:b_(r),upg:{hp:1}})),r++}A.players.forEach((o,a)=>{let l=n.spawns[a%n.spawns.length];o.x=l[0],o.z=l[1],o.y=bn(n,o.x,o.z,50),o.max=xr(o.upg),o.hp=o.max,o.yaw=Math.atan2(-o.x,-o.z)}),A.next=al(n,null),w_(n),gs("*","Round start! Explore and grab coins before the first disaster.")}function b_(n){let e=[15680580,2278750,16096779,11032055,1357990,15485081],t=["cowboy","beanie","party","chef","dino","cap"],i=[14723449,16173472,9067067,12155471,16767416];return{shirt:e[n%6],pants:[1981066,4144966,417606,8138002][n%4],skin:i[n%5],hair:[1118481,7028254,13934615,3810582][n%4],hat:t[n%6],hatColor:[3900150,16436245,15680580,2278750][n%4]}}function w_(n){let e=n.coinSpots;A.coins=e.map((r,o)=>({i:o,x:r.x,z:r.z,y:r.y!=null?r.y+.9:bn(n,r.x,r.z,50)+.9,on:!1}));let t=Math.min(A.coins.length,26);A.coins.map((r,o)=>o).sort(()=>cn()-.5).slice(0,t).forEach(r=>A.coins[r].on=!0),A.coins.forEach(r=>{(n.coinSpots[r.i].under||n.coinSpots[r.i].y!=null)&&(r.on=!0)});let s=e[cn()*e.length|0];A.star={x:s.x,z:s.z,y:(s.y!=null?s.y:bn(n,s.x,s.z,50))+1.2,on:!0}}function gs(n,e,t){A.msgs.push({pid:n,text:e,coins:t||0,id:A.msgN=(A.msgN||0)+1})}function gr(n,e,t){n.cpu||(n.coinsWave+=e,gs(n.pid,t,e))}function Xd(n){return A.phase!=="calm"||!It[n]?!1:(A.next=n,A.picked=!0,!0)}var oo={k:1,hit(n,e,t,i){if(n.st!=="ok"||n.inv>0)return;if(n.sh>0){e>=5&&A.fx.push({k:"sfx",n:"shield"});return}let s=[0,.2,.35,.45][n.upg.armor|0]||0,r=e*(1-s);if(n.upg.umbrella&&(t==="hail"||t==="boom"||t==="bonk")&&$t(jt.W,n).out&&(r*=t==="hail"?0:.5),n.hp-=r,e>=5){if(A.fx.push({k:"hit",x:n.x,y:n.y,z:n.z,pid:n.pid,id:n.id}),i&&i.x!=null){let o=n.x-i.x,a=n.z-i.z,l=Math.hypot(o,a)||1;n.kx+=o/l*7,n.kz+=a/l*7,n.vy=Math.max(n.vy,5)}n.hurtT=.4}n.hp<=0&&S_(n,t)},wreck(n){fr(jt.W,jt.scene,n)&&(A.wrecked.push(n.id),A.fx.push({k:"wreck",b:n.id}),A.players.forEach(e=>{e.st==="ok"&&e.y>-22&&Math.abs(e.x-n.x)<n.w/2&&Math.abs(e.z-n.z)<n.d/2&&e.y<n.baseY+n.h+1&&oo.hit(e,25,"bonk",{x:n.x,z:n.z})}))},tp(n){n.tpN++},shielded:n=>n.sh>0,event(n,e){e==="beamed"&&(gs(n.pid,"\u{1F6F8} BEAMED UP! Wheee!"),n.beamed=!0)}};function S_(n,e){n.hp=0,n.st="ko",n.koT=7,n.waveKO=!0,n.rev=0,n.kos++,n.vx=n.vz=0,A.fx.push({k:"sfx",n:"ko",pid:n.pid}),gs(n.pid,n.cpu?null:"\u{1F4AB} Knocked out! A friend can help you up, or wait a moment."),n.cpu||gs("*",null)}function E_(n){let e=A.phase==="active"||A.phase==="warn"?It[A.dz]:null,t=null;if(e){let i=e.targets(jt.W,A).filter(s=>!(s.b&&s.b.wrecked));i.length&&(t=i.reduce((s,r)=>Math.hypot(s.x-n.x,s.z-n.z)<Math.hypot(r.x-n.x,r.z-n.z)?s:r))}if(t&&t.under&&t.pad)n.x=t.pad.to.x+(cn()-.5),n.y=t.pad.to.y,n.z=t.pad.to.z+(cn()-.5),n.roomBase=t.b.baseY;else if(t&&t.kind==="pad"&&t.pad)n.x=t.pad.to.x,n.y=t.pad.to.y,n.z=t.pad.to.z;else if(t)n.x=t.x+(cn()-.5),n.y=t.y+.3,n.z=t.z+(cn()-.5);else{let i=jt.W.spawns[n.id%4];n.x=i[0],n.z=i[1],n.y=bn(jt.W,n.x,n.z,50)}n.st="ok",n.hp=Math.round(n.max*.6),n.inv=3,n.vy=0,n.kx=n.kz=0,n.tpN++,gs(n.pid,n.cpu?null:"\u{1F681} A rescue drone dropped you somewhere safer!")}function Yd(n,e,t){if(A.env.shake=Math.max(0,(A.env.shake||0)-n*1.2),!(A.phase==="lobby"||A.phase==="results")){if(A.t-=n,oo.k=1+.1*Math.max(0,A.wave-1),A.phase==="calm"&&A.t<=0?(A.wave++,A.dz=A.next||al(e,A.last),A.phase="warn",A.t=7,A.haz=[],A.players.forEach(i=>{i.waveKO=!1,i.coinsWave=0,i.shUses=0,i.ai.tgt=null,i.ai.react=.6+cn()*2.2}),A.fx.push({k:"sfx",n:"siren"})):A.phase==="warn"&&A.t<=0?(A.phase="active",A.dzDur=It[A.dz].dur,A.t=A.dzDur,A.dzT=0,A.env=Object.assign(Qh(),{shake:A.env.shake}),It[A.dz].start(A,e,oo)):A.phase==="active"?(A.dzT+=n,It[A.dz].tick(A,e,n,oo),A.t<=0&&T_(e)):A.phase==="calm"&&A.env.water!=null&&(A.env.water+=((A.env.waterBase||-1)-A.env.water)*n*.6),A.phase==="active"){for(let i of A.haz)i.t+=n,i.t>=i.T&&!i.done&&(i.done=!0,It[A.dz].impact&&It[A.dz].impact(i,A,e,oo));A.haz=A.haz.filter(i=>!i.done)}else A.haz=[];for(let i of A.players){if(i.inv>0&&(i.inv-=n),i.sh>0&&(i.sh-=n),i.hurtT>0&&(i.hurtT-=n),i.st==="ko"){i.koT-=n;let s=A.players.find(r=>r!==i&&r.st==="ok"&&Math.hypot(r.x-i.x,r.z-i.z)<2.2&&Math.abs(r.y-i.y)<1.5);s?(i.rev+=n,i.rev>1.6&&(i.st="ok",i.hp=Math.round(i.max*.5),i.inv=2.5,A.fx.push({k:"revive",x:i.x,y:i.y,z:i.z}),A.fx.push({k:"sfx",n:"win"}),s.revives++,gr(s,15,"\u{1F91D} You helped "+i.name+" up! +15"),s.cpu||(s.helped=(s.helped||0)+1),gs(i.pid,i.cpu?null:"\u{1F91D} "+s.name+" helped you up!"))):i.rev=Math.max(0,i.rev-n),i.koT<=0&&E_(i);continue}if(i.st==="ok"){let s=i.upg.regen|0;s&&i.hp<i.max&&(i.hp=Math.min(i.max,i.hp+s*n)),A.phase==="calm"&&(i.hp=Math.min(i.max,i.hp+6*n))}if(i.cpu){let s=A_(i,n,e);cl(i,s,n,e,A.env),s.pad&&eu(i,e)}else t&&t[i.id];if(i.st==="ok"){let s=i.upg.magnet?7:1.3;for(let r of A.coins){if(!r.on)continue;let o=Math.hypot(r.x-i.x,r.z-i.z);Math.abs(r.y-.9-i.y)<2.2&&o<s&&(o<1.3?(r.on=!1,A.fx.push({k:"coin",x:r.x,y:r.y,z:r.z,pid:i.pid}),i.cpu||(gr(i,5,null),A.fx.push({k:"sfx",n:"coin",pid:i.pid}))):i.upg.magnet&&(r.x+=(i.x-r.x)*n*4,r.z+=(i.z-r.z)*n*4))}A.star&&A.star.on&&Math.hypot(A.star.x-i.x,A.star.z-i.z)<1.5&&Math.abs(A.star.y-1.2-i.y)<2.2&&(A.star.on=!1,A.fx.push({k:"coin",x:A.star.x,y:A.star.y,z:A.star.z}),i.cpu||(gr(i,25,"\u2B50 Lucky star! +25"),A.fx.push({k:"sfx",n:"cash",pid:i.pid})))}}}}function T_(n){let e=A.dz;if(A.last=e,A.players.forEach(r=>{r.st==="float"&&(r.st="ok",r.y=bn(n,r.x,r.z,50)),!r.cpu&&(r.waveKO?gr(r,8,"\u{1F4AA} Good try! +8"):(gr(r,20+5*A.wave,"\u2705 Survived the "+xi(e,n).toLowerCase()+"! +"+(20+5*A.wave)),r.survivedIds=r.survivedIds||{},r.survivedIds[e]=1),r.stats={id:e,ko:r.waveKO,under:r.y<-22,high:r.y>3.6,beamed:r.beamed,helped:r.helped||0,map:n.id})}),jt.hooks.waveEnd&&jt.hooks.waveEnd(e),A.haz=[],A.wave>=A.waves){A.phase="results",A.t=0,A.players.forEach(r=>{r.cpu||gr(r,40,"\u{1F3C1} Round complete! +40")}),jt.hooks.roundEnd&&jt.hooks.roundEnd();return}A.phase="calm",A.t=11,A.picked=!1,A.next=al(n,e);let t=A.env.water,i=A.env.waterBase;A.env=Qh(),t!=null&&(A.env.water=t,A.env.waterBase=i),A.coins.forEach(r=>{!r.on&&cn()<.5&&(r.on=!0)});let s=n.coinSpots[cn()*n.coinSpots.length|0];A.star={x:s.x,z:s.z,y:(s.y!=null?s.y:bn(n,s.x,s.z,50))+1.2,on:!0}}function A_(n,e,t){let i=n.ai,s={x:0,z:0,jump:!1,pad:!1},r=A.phase,o=n.y<-22,a=null;if(r==="calm"||r==="results")if(i.tgt=null,o){if(i.upT=(i.upT||1+cn()*3)-e,i.upT<=0){i.upT=0;let l=t.pads.find(c=>c.kind==="up"&&Gh(t,n.x,n.z)===c.room);l&&(a={x:l.x,z:l.z},Math.hypot(l.x-n.x,l.z-n.z)<.9&&(s.pad=!0))}}else if(n.y>3&&t.buildings.some(l=>l.elevator&&Math.abs(n.x-l.x)<l.w/2&&Math.abs(n.z-l.z)<l.d/2)){let l=t.pads.find(c=>c.kind==="elevdown"&&Math.abs(c.y-n.y)<1.5&&Math.hypot(c.x-n.x,c.z-n.z)<15);l&&(a=l,Math.hypot(l.x-n.x,l.z-n.z)<.9&&(s.pad=!0))}else{let l=A.players.find(c=>c.st==="ko"&&Math.hypot(c.x-n.x,c.z-n.z)<14&&Math.abs(c.y-n.y)<2);if(l)a=l;else{let c=null,u=22;for(let h of A.coins)if(h.on&&Math.abs(h.y-.9-n.y)<1.5){let f=Math.hypot(h.x-n.x,h.z-n.z);f<u&&(u=f,c=h)}a=c||i.wander,(!a||Math.hypot(a.x-n.x,a.z-n.z)<1)&&(i.wander={x:n.x+(cn()-.5)*20,z:n.z+(cn()-.5)*20})}}else{let l=It[A.dz];i.react-=e;let c=$t(t,n),u=l.safe(n,c,A,t);if(u&&u!=="maybe")i.tgt=null,i.safeT=(i.safeT||0)+e;else if(i.react<=0){(!i.tgt||i.tgt.b&&i.tgt.b.wrecked||i.retry<=0)&&(i.tgt=R_(n,l,t),i.wp=0,i.retry=14),i.retry-=e;let h=i.tgt;if(h){let f=[];h.b&&mi(t,n.x,n.y,n.z)!==h.b&&f.push(h.b.doorOut,h.b.doorIn),h.kind==="high"&&h.foot&&n.y<h.y-1&&f.push(h.foot),f.push(h),i.wp=Math.min(i.wp||0,f.length-1);let d=f[i.wp];for(;d&&Math.hypot(d.x-n.x,d.z-n.z)<.9&&i.wp<f.length-1;)i.wp++,d=f[i.wp];a=d,h.kind==="pad"&&Math.hypot(h.x-n.x,h.z-n.z)<.9&&(s.pad=!0,i.tgt=null)}}for(let h of A.haz){if(h.k==="beam"||h.k==="crack"||h.k==="collapse")continue;let f=Math.hypot(n.x-h.x,n.z-h.z);if(f<h.r+.6&&h.t>.3&&!(u&&u!=="maybe"&&h.k!=="junk")){let d=f||1;return s.x=(n.x-h.x)/d,s.z=(n.z-h.z)/d,i.dodge=.4,s}}}if(a){let l=a.x-n.x,c=a.z-n.z,u=Math.hypot(l,c);u>.4&&(s.x=l/u,s.z=c/u,u<2&&(s.x*=.6,s.z*=.6));let h=Math.hypot(n.x-(i.lx||0),n.z-(i.lz||0));if(i.lx=n.x,i.lz=n.z,u>1&&h<e*.8?i.stuck=(i.stuck||0)+e:i.stuck=Math.max(0,(i.stuck||0)-e),i.stuck>.8){i.side=i.side||(cn()<.5?1:-1);let f=-s.z*i.side,d=s.x*i.side;s.x=f,s.z=d,i.stuck>1.6&&(i.stuck=0,i.side=-i.side,s.jump=!0)}}return s}function R_(n,e,t){let i=e.targets(t,A).filter(o=>!(o.b&&o.b.wrecked));if(!i.length)return null;let s=null,r=1e9;for(let o of i){let a=Math.hypot(o.x-n.x,o.z-n.z)+(o.b?6:0)+cn()*8;o.kind==="high"&&o.foot&&(a+=6),a<r&&(r=a,s=o)}return s}function qd(n,e){if(A.phase!=="warn"&&A.phase!=="active")return null;let i=It[A.dz].targets(e,A).filter(o=>!(o.b&&o.b.wrecked)),s=null,r=1e9;for(let o of i){let a=Math.hypot(o.x-n.x,o.z-n.z)+Math.abs(o.y-n.y)*.5;a<r&&(r=a,s=o)}return s}var We={mx:0,mz:0,yaw:.6,pitch:.62,dist:11.5,jumpQ:!1,actQ:!1,shieldQ:!1,jet:!1,enabled:!1,joy:null,keys:{}},vi=new Map,lo=null,co=null,ho=null;function Zd(n){return n&&n.closest&&n.closest("button, .panel, .hudbtn, input, .card, .noTouch")}function jd(){return document.getElementById("joy")}function $d(n,e,t,i){let s=jd();if(!s)return;s.style.display="block",s.style.left=n-60+"px",s.style.top=e-60+"px";let r=s.firstChild;r&&(r.style.transform="translate("+t+"px,"+i+"px)")}function C_(){let n=jd();n&&(n.style.display="none")}function Jd(){let n={passive:!1};window.addEventListener("touchstart",i=>{if(We.enabled){for(let s of i.changedTouches)Zd(s.target)||(i.preventDefault(),s.clientX<innerWidth*.45&&s.clientY>innerHeight*.35&&lo===null?(lo=s.identifier,co={x:s.clientX,y:s.clientY},$d(s.clientX,s.clientY,0,0)):vi.set(s.identifier,{x:s.clientX,y:s.clientY}));if(vi.size>=2){let s=[...vi.values()];ho={d:Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),dist:We.dist}}}},n),window.addEventListener("touchmove",i=>{if(We.enabled){for(let s of i.changedTouches){if(s.identifier===lo){i.preventDefault();let o=s.clientX-co.x,a=s.clientY-co.y,l=Math.hypot(o,a),c=55;l>c&&(o*=c/l,a*=c/l),We.mx=o/c,We.mz=a/c,$d(co.x,co.y,o,a);continue}let r=vi.get(s.identifier);r&&(i.preventDefault(),vi.size===1&&(We.yaw-=(s.clientX-r.x)*.008,We.pitch=Math.max(.08,Math.min(1.35,We.pitch+(s.clientY-r.y)*.006))),r.x=s.clientX,r.y=s.clientY)}if(vi.size>=2&&ho){let s=[...vi.values()],r=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);We.dist=Math.max(3.5,Math.min(22,ho.dist*ho.d/Math.max(20,r)))}}},n);let e=i=>{for(let s of i.changedTouches)s.identifier===lo&&(lo=null,We.mx=0,We.mz=0,C_()),vi.delete(s.identifier);vi.size<2&&(ho=null)};window.addEventListener("touchend",e),window.addEventListener("touchcancel",e);let t=null;window.addEventListener("mousedown",i=>{!We.enabled||Zd(i.target)||(t={x:i.clientX,y:i.clientY})}),window.addEventListener("mousemove",i=>{t&&(We.yaw-=(i.clientX-t.x)*.006,We.pitch=Math.max(.08,Math.min(1.35,We.pitch+(i.clientY-t.y)*.005)),t={x:i.clientX,y:i.clientY})}),window.addEventListener("mouseup",()=>t=null),window.addEventListener("wheel",i=>{We.enabled&&(We.dist=Math.max(3.5,Math.min(22,We.dist*(i.deltaY>0?1.1:.9))))},{passive:!0}),window.addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||(We.keys[i.code]=!0,i.code==="Space"&&(We.jumpQ=!0,i.preventDefault()),i.code==="KeyE"&&(We.actQ=!0),i.code==="KeyQ"&&(We.shieldQ=!0),i.code==="KeyF"&&(We.jet=!0))}),window.addEventListener("keyup",i=>{We.keys[i.code]=!1,i.code==="KeyF"&&(We.jet=!1)})}function Kd(){let n=We.mx,e=We.mz,t=We.keys;(t.KeyW||t.ArrowUp)&&(e-=1),(t.KeyS||t.ArrowDown)&&(e+=1),(t.KeyA||t.ArrowLeft)&&(n-=1),(t.KeyD||t.ArrowRight)&&(n+=1);let i=Math.hypot(n,e);return i>1&&(n/=i,e/=i),{x:n,z:e}}var ut=null,Qn=null,vr=!0,Qd={};function xs(){if(ut){ut.state==="suspended"&&ut.resume();return}try{ut=new(window.AudioContext||window.webkitAudioContext),Qn=ut.createGain(),Qn.gain.value=.5,Qn.connect(ut.destination)}catch{ut=null}}function nu(n){vr=n,Qn&&(Qn.gain.value=n?.5:0)}function uo(){if(uo.b)return uo.b;let n=ut.sampleRate*2,e=ut.createBuffer(1,n,ut.sampleRate),t=e.getChannelData(0);for(let i=0;i<n;i++)t[i]=Math.random()*2-1;return uo.b=e}function iu(n,e,t,i,s){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(s,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+t+i)}function Jt(n,e,t,i,s=.3,r=0){if(!ut||!vr)return;let o=ut.currentTime+r,a=ut.createOscillator(),l=ut.createGain();a.type=n,a.frequency.setValueAtTime(e,o),t&&a.frequency.exponentialRampToValueAtTime(t,o+i),iu(l,o,.01,i,s),a.connect(l),l.connect(Qn),a.start(o),a.stop(o+i+.05)}function Vi(n,e,t=.4,i=1,s="lowpass",r=0,o){if(!ut||!vr)return;let a=ut.currentTime+r,l=ut.createBufferSource(),c=ut.createBiquadFilter(),u=ut.createGain();l.buffer=uo(),c.type=s,c.frequency.setValueAtTime(e,a),o&&c.frequency.exponentialRampToValueAtTime(o,a+n),c.Q.value=i,iu(u,a,.01,n,t),l.connect(c),c.connect(u),u.connect(Qn),l.start(a),l.stop(a+n+.1)}var vt={coin:()=>{Jt("square",988,0,.08,.12),Jt("square",1319,0,.18,.12,.07)},cash:()=>{[0,.06,.12].forEach((n,e)=>Jt("triangle",1200+e*300,0,.12,.2,n)),Vi(.25,6e3,.12,1,"highpass",.15),Jt("sine",2093,0,.4,.15,.2)},jump:()=>Jt("sine",380,760,.16,.18),click:()=>Jt("triangle",660,0,.06,.15),hurt:()=>{Jt("sawtooth",300,120,.25,.2)},ko:()=>{Jt("triangle",900,200,.5,.25),[0,.12,.24].forEach(n=>Jt("sine",1500,0,.08,.1,.5+n))},boom:(n=1)=>{Vi(1.2*n,900,.7*n,.7,"lowpass",0,60),Jt("sine",120,35,.8,.5*n)},thunder:()=>{Vi(.08,8e3,.5,.5,"highpass"),Vi(2.2,700,.6,.5,"lowpass",.05,80)},roar:()=>{if(!ut||!vr)return;let n=ut.currentTime,e=ut.createOscillator(),t=ut.createOscillator(),i=ut.createBiquadFilter(),s=ut.createGain();e.type="sawtooth",t.type="square",e.frequency.setValueAtTime(140,n),e.frequency.linearRampToValueAtTime(95,n+1.6),t.frequency.setValueAtTime(71,n),t.frequency.linearRampToValueAtTime(48,n+1.6),i.type="bandpass",i.frequency.setValueAtTime(600,n),i.frequency.linearRampToValueAtTime(300,n+1.6),i.Q.value=1.5,iu(s,n,.15,1.6,.5),e.connect(i),t.connect(i),i.connect(s),s.connect(Qn),e.start(n),t.start(n),e.stop(n+1.9),t.stop(n+1.9),Vi(1.6,900,.25,2,"bandpass")},beam:()=>{Jt("sawtooth",220,880,1,.18),Vi(1,3e3,.15,3,"bandpass")},zap:()=>{Jt("square",1800,200,.3,.15)},siren:()=>{if(!ut||!vr)return;let n=ut.currentTime,e=ut.createOscillator(),t=ut.createGain();e.type="triangle";for(let i=0;i<3;i++)e.frequency.setValueAtTime(520,n+i*1.1),e.frequency.linearRampToValueAtTime(980,n+i*1.1+.55),e.frequency.linearRampToValueAtTime(520,n+i*1.1+1.1);t.gain.setValueAtTime(1e-4,n),t.gain.exponentialRampToValueAtTime(.16,n+.1),t.gain.setValueAtTime(.16,n+3.1),t.gain.exponentialRampToValueAtTime(1e-4,n+3.3),e.connect(t),t.connect(Qn),e.start(n),e.stop(n+3.4)},win:()=>[523,659,784,1047].forEach((n,e)=>Jt("triangle",n,0,.25,.2,e*.11)),splash:()=>Vi(.6,1500,.35,.8,"lowpass",0,300),whoosh:()=>Vi(.5,400,.3,1,"bandpass",0,2e3),pad:()=>{Jt("sine",523,1047,.25,.18)},ufo:()=>{Jt("sine",300,900,.6,.12),Jt("sine",900,300,.6,.12,.6)},shield:()=>{Jt("sine",400,1200,.4,.2)},achieve:()=>[784,988,1175,1568].forEach((n,e)=>Jt("square",n,0,.16,.12,e*.09))};function fo(n,e){if(!ut)return;let t=Qd[n];if(!t){let i=ut.createBufferSource(),s=ut.createBiquadFilter(),r=ut.createGain();i.buffer=uo(),i.loop=!0,s.type=n==="rain"?"highpass":n==="rumble"?"lowpass":"bandpass",s.frequency.value=n==="rain"?2500:n==="rumble"?120:500,s.Q.value=.7,r.gain.value=0,i.connect(s),s.connect(r),r.connect(Qn),i.start(),t=Qd[n]={g:r,f:s}}t.g.gain.setTargetAtTime(vr?e:0,ut.currentTime,.4),n==="wind"&&t.f.frequency.setTargetAtTime(400+e*900,ut.currentTime,.5)}var ep="grokDisaster.save.v1",su=[{id:"hp",icon:"\u2764\uFE0F",name:"Max Health",desc:"+25 max health per level",prices:[80,160,300,500],kind:"upg"},{id:"armor",icon:"\u26D1\uFE0F",name:"Hard Hat & Vest",desc:"Take less damage (-20% / -35% / -45%)",prices:[150,350,600],kind:"upg"},{id:"regen",icon:"\u{1F49A}",name:"Healing Snacks",desc:"Heal slowly over time (+1 / +2 / +3 HP a second)",prices:[120,250,450],kind:"upg"},{id:"speed",icon:"\u{1F45F}",name:"Speed Boots",desc:"Run faster (+15% / +30%)",prices:[150,350],kind:"upg"},{id:"umbrella",icon:"\u2602\uFE0F",name:"Mega Umbrella",desc:"Blocks hail, ash and half of falling junk while outside",prices:[120],kind:"upg"},{id:"shield",icon:"\u{1FAE7}",name:"Bubble Shield",desc:"Tap \u{1FAE7} for 5 seconds of total safety (once per wave, twice at Lv2)",prices:[250,500],kind:"upg"},{id:"jetpack",icon:"\u{1F680}",name:"Jetpack",desc:"Hold \u{1F680} to fly up onto roofs and high ground",prices:[400],kind:"upg"},{id:"magnet",icon:"\u{1F9F2}",name:"Coin Magnet",desc:"Pull in coins from far away",prices:[200],kind:"upg"}],ru=[{id:"cap",name:"Ball Cap",price:0},{id:"beanie",name:"Beanie",price:60},{id:"party",name:"Party Hat",price:80},{id:"cowboy",name:"Cowboy Hat",price:120},{id:"chef",name:"Chef Hat",price:120},{id:"dino",name:"Dino Hood",price:200},{id:"astro",name:"Space Helmet",price:250},{id:"crown",name:"Golden Crown",price:400},{id:"none",name:"No Hat",price:0}],ou=[3900150,15680580,2278750,16096779,11032055,15485081,1357990,16347926,1120295,16777215],hl=[{id:"first",icon:"\u{1F31F}",name:"First Survivor",desc:"Survive your first disaster"},{id:"bunker",icon:"\u2622\uFE0F",name:"Bunker Buddy",desc:"Ride out a disaster in the nuclear bunker"},{id:"kaiju",icon:"\u{1F996}",name:"Kaiju Dodger",desc:"Survive ROARGON without getting knocked out"},{id:"allnine",icon:"\u{1F32A}\uFE0F",name:"Storm Chaser",desc:"Survive every type of disaster"},{id:"helper",icon:"\u{1F91D}",name:"Helper Hero",desc:"Help 5 knocked-out survivors back up"},{id:"rich",icon:"\u{1F4B0}",name:"Coin Collector",desc:"Earn 1,000 coins total"},{id:"perfect",icon:"\u{1F6E1}\uFE0F",name:"Untouchable",desc:"Finish a whole round without a knockout"},{id:"dry",icon:"\u{1F3E2}",name:"High & Dry",desc:"Survive a flood on high ground"},{id:"beamed",icon:"\u{1F6F8}",name:"Beamed Up",desc:"Get abducted by aliens (oops!)"},{id:"travel",icon:"\u{1F5FA}\uFE0F",name:"World Traveler",desc:"Play on all 4 maps"},{id:"picker",icon:"\u{1F3AF}",name:"Disaster Picker",desc:"Pay coins to choose a disaster"},{id:"cover",icon:"\u{1FA91}",name:"Drop, Cover, Hold On",desc:"Hide under a table during an earthquake"},{id:"rounds10",icon:"\u{1F3C6}",name:"Disaster Pro",desc:"Finish 10 rounds"}];function po(){return{v:1,coins:150,name:"",look:{shirt:3900150,pants:3359061,skin:16173472,hair:3810582,hat:"cap",hatColor:15680580},upg:{},hats:["cap","none"],stats:{rounds:0,waves:0,kos:0,revives:0,earned:0,survived:{},maps:{},best:0,picks:0,coinsPicked:0},ach:{},opts:{gfx:"high",sound:!0},howto:!1}}var Ye={d:po()};function tp(){try{let n=JSON.parse(localStorage.getItem(ep)||"null");n&&n.v===1&&(Ye.d=Object.assign(po(),n,{stats:Object.assign(po().stats,n.stats||{}),look:Object.assign(po().look,n.look||{}),opts:Object.assign(po().opts,n.opts||{})}))}catch{}return Ye.d}function Lt(){try{localStorage.setItem(ep,JSON.stringify(Ye.d))}catch{}}var mn=n=>Ye.d.upg[n]|0;function mo(n,e){Ye.d.coins=Math.max(0,Ye.d.coins+n),n>0&&(Ye.d.stats.earned+=n),Lt()}function np(n){return Ye.d.ach[n]?null:(Ye.d.ach[n]=Date.now(),Lt(),hl.find(e=>e.id===n))}function vs(){return{hp:mn("hp"),armor:mn("armor"),regen:mn("regen"),speed:mn("speed"),umbrella:mn("umbrella"),shield:mn("shield"),jetpack:mn("jetpack"),magnet:mn("magnet")}}var le={room:null,info:{},App:null},ys=()=>window.GrokNet,P_=n=>document.getElementById(n);function yr(n,e){let t=P_("onlineMsg");t&&(t.textContent=n,t.style.color=e?"#15803d":"#be123c"),le.lastStatus=n}le.init=function(n){le.App=n};le.myName=()=>Ye.d.name||"Survivor";le.lobby=function(){let n=le.App;if(le.room&&le.room.opened)return le.roomPanel();n.panel(`<h2>\u{1F91D} PLAY WITH FRIENDS</h2><p class="sub">Up to 3 survivors online. One friend hosts and shares the 5-letter code. CPU survivors fill the empty spots.</p>
  <h3>YOUR NAME</h3><input class="name" id="nmIn" maxlength="12" placeholder="Your name" value="${n.esc(Ye.d.name)}">
  <div class="btnrow"><button class="btn green" id="bHost">\u{1F3E0} HOST A GAME</button></div><h3>OR JOIN WITH A CODE</h3><input class="code" id="codeIn" maxlength="5" placeholder="ABCDE" autocomplete="off" autocapitalize="characters">
  <div class="btnrow"><button class="btn pink" id="bJoin">JOIN</button></div><p class="sub" id="onlineMsg" style="margin-top:10px"></p><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`,e=>{let t=()=>{let i=e.querySelector("#nmIn").value;Ye.d.name=ys()?ys().cleanName(i):i.slice(0,12),Lt()};e.querySelector("#bHost").onclick=()=>{t(),le.host()},e.querySelector("#bJoin").onclick=()=>{t();let i=ys().normalizeCode(e.querySelector("#codeIn").value);if(!ys().validCode(i))return yr("Codes are 5 letters, like KDXPQ");le.join(i)}},{name:"lobby",onClose:()=>{le.room&&!le.room.opened&&le.leave()}})};le.roomPanel=function(){let n=le.App,e=le.room;if(!e)return;let t=e.players(),i=e.isHost;n.panel(`<h2>\u{1F91D} ROOM <span style="letter-spacing:4px;color:#7c3aed">${e.code}</span></h2><p class="sub">Friends join with code <b>${e.code}</b> (${t.length}/3)</p>
  ${t.map(s=>`<div class="item"><div class="ic">${s.slot===0?"\u{1F451}":"\u{1F642}"}</div><div class="grow"><b>${n.esc(le.info[s.pid]&&le.info[s.pid].name||s.name)}</b><small>${s.slot===0?"Host":"Player "+(s.slot+1)}${s.pid===e.pid?" (you)":""}</small></div></div>`).join("")}
  ${i?`<p class="sub">${t.length<2?"Waiting for a friend to join\u2026 (you can also start with CPUs)":"Everyone ready? Pick a map!"}</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button><button class="btn green" id="bStart">PICK MAP \u25B6</button></div>`:'<p class="sub">Waiting for the host to pick a map and start\u2026 \u{1F32A}\uFE0F</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button></div>'}`,s=>{s.querySelector("#bLeave").onclick=()=>{le.leave(),n.hidePanels()};let r=s.querySelector("#bStart");r&&(r.onclick=()=>n.showMapPick(!0))},{name:"room"})};le.hello=function(){le.room&&le.room.send({t:"hello",name:le.myName(),look:Ye.d.look,upg:vs()})};function ip(n){le.room=n;let e=le.App;n.on("status",t=>yr(t,!0)),n.on("open",()=>{yr("Connected!",!0),vt.coin(),n.isHost?le.info[n.pid]={name:le.myName(),look:Ye.d.look,upg:vs()}:le.hello(),le.roomPanel(),e.toast(n.isHost?"Room "+n.code+" is open! \u{1F91D}":"Joined room "+n.code+"! \u{1F91D}")}),n.on("join",t=>{t.pid!==n.pid&&(e.toast("\u{1F44B} "+t.name+" joined!"),vt.coin()),e.panelName==="room"&&le.roomPanel()}),n.on("leave",t=>{e.toast(t.name+" left"),e.panelName==="room"&&le.roomPanel(),n.isHost&&e.mode==="host"&&A.players.forEach(i=>{i.pid===t.pid&&!i.cpu&&(i.cpu=!0,i.name=i.name+" (CPU)",i.ai={},e.toast("A CPU takes over for "+t.name))})}),n.on("message",(t,i)=>I_(t,i)),n.on("reconnecting",()=>e.toast("Lost the host - reconnecting\u2026")),n.on("error",t=>{yr(t.title+": "+t.message);let i=e.mode==="guest"||e.mode==="host";le.room=null,i&&(e.toast(t.title+" - back to the menu"),e.quit())}),n.start()}le.host=function(n){yr("Opening a room\u2026",!0),le.info={},ip(ys().createRoom({role:"host",code:n||void 0,name:le.myName(),color:"#3ff0ff",max:3,rejoin:!!n}))};le.join=function(n){yr("Joining "+n+"\u2026",!0),ip(ys().createRoom({role:"join",code:n,name:le.myName(),color:"#ff4fd8",rejoin:!!le.fromHub}))};le.fromParams=function(n){le.fromHub=!0,n.name&&(Ye.d.name=n.name,Lt()),le.lobby(),n.mode==="host"?le.host(n.code):le.join(n.code)};le.leave=function(){if(le.room){try{le.room.leave()}catch{}le.room=null}};le.send=n=>{le.room&&le.room.send(n)};le.broadcast=n=>{le.room&&le.room.isHost&&le.room.broadcast(n)};le.sendTo=(n,e)=>{le.room&&le.room.isHost&&le.room.sendTo(n,e)};le.humans=function(){return le.room.players().map(n=>{let e=le.info[n.pid]||{};return{pid:n.pid,name:e.name||n.name,look:e.look||{},upg:e.upg||{}}})};le.start=function(n){!le.room||!le.room.isHost||le.App.startHosted(n,le.humans())};var au=[],lu=[];le.queue=function(n,e){au.push(...n),lu.push(...e)};var sn=n=>Math.round(n*100)/100;le.snapshot=function(){let n=A.players.map(i=>[i.id,sn(i.x),sn(i.y),sn(i.z),sn(i.yaw),i.an,Math.round(i.hp),i.max,i.st,sn(i.sh),sn(i.inv),i.tpN,sn(i.sp||0),i.jetOn?1:0,sn(i.koT||0),sn(i.rev||0),i.cpu?1:0]),e=A.haz.map(i=>({i:i.i,k:i.k,x:sn(i.x),z:sn(i.z),y:sn(i.y||0),r:i.r,T:i.T,t:sn(i.t),x1:i.x1!=null?sn(i.x1):void 0,z1:i.z1!=null?sn(i.z1):void 0,b:i.b})),t=A.coins.map(i=>i.on?1:0).join("");le.room.broadcast({t:"s",ph:A.phase,tm:sn(A.t),wv:A.wave,wvs:A.waves,dz:A.dz,nx:A.next,pk:A.picked,dd:A.dzDur,pl:n,hz:e,env:A.env,wr:A.wrecked,co:t,st:A.star,fx:au,ms:lu}),au=[],lu=[]};function I_(n,e){let t=le.App,i=le.room;if(!(!n||typeof n!="object")){if(i.isHost){if(n.t==="hello"){le.info[e]={name:ys().cleanName(n.name),look:n.look&&typeof n.look=="object"?n.look:{},upg:n.upg&&typeof n.upg=="object"?n.upg:{}},t.panelName==="room"&&le.roomPanel();let s=A.players.find(r=>r.pid===e);s&&(s.look=le.info[e].look,s.upg=le.info[e].upg,s.max=xr(s.upg))}else if(n.t==="pose"&&t.mode==="host"){let s=A.players.find(r=>r.pid===e&&!r.cpu);s&&s.st==="ok"&&(s.x=+n.x||0,s.y=+n.y||0,s.z=+n.z||0,s.yaw=+n.yaw||0,s.an=String(n.an||"idle").slice(0,8),s.sp=+n.sp||0,s.jetOn=!!n.jet)}else if(n.t==="shield"&&t.mode==="host"){let s=A.players.find(o=>o.pid===e),r=(s&&s.upg&&s.upg.shield)|0;s&&s.st==="ok"&&s.shUses<r&&(A.phase==="active"||A.phase==="warn")&&(s.shUses++,s.sh=5)}return}n.t==="start"?(t.hidePanels(),t.startGuest(n)):n.t==="s"&&t.mode==="guest"?D_(n):n.t==="wave"?t.onWaveStats(n.st):n.t==="end"&&t.onRoundEnd()}}function D_(n){let e=le.App,t=e.W;le.snaps=(le.snaps||0)+1,le.lastWr=n.wr,n.ph==="calm"&&A.phase==="results"&&e.hidePanels(),Object.assign(A,{phase:n.ph,t:n.tm,wave:n.wv,waves:n.wvs,dz:n.dz,next:n.nx,picked:n.pk,dzDur:n.dd,env:n.env||{},star:n.st});let i=new Map(A.haz.map(r=>[r.i,r]));A.haz=(n.hz||[]).map(r=>{let o=i.get(r.i);return o?(o.t=Math.max(o.t,r.t),o):r});for(let r of n.pl){let o=A.players.find(a=>a.id===r[0]);if(o&&([o.x,o.y,o.z,o.yaw,o.an,o.hp,o.max,o.st,o.sh,o.inv]=r.slice(1,11),o.sp=r[12],o.jetOn=!!r[13],o.koT=r[14],o.rev=r[15],o.cpu=!!r[16],e.me&&o.id===e.me.id)){let a=e.me;a.hp=o.hp,a.max=o.max,a.sh=o.sh,a.inv=o.inv,(o.st!=="ok"||r[11]!==e.tpN)&&(a.x=o.x,a.y=o.y,a.z=o.z,a.vy=0),a.st=o.st,e.tpN=r[11]}}let s=new Set(n.wr||[]);if(t.buildings.forEach(r=>{s.has(r.id)&&!r.wrecked?fr(t,t.root,r):!s.has(r.id)&&r.wrecked&&fs(t,r)}),n.co){A.coins.length!==n.co.length&&(A.coins=t.coinSpots.map((r,o)=>({i:o,x:r.x,z:r.z,y:(r.y!=null?r.y:t.terrain(r.x,r.z))+.9,on:!1})));for(let r=0;r<n.co.length;r++)A.coins[r].on=n.co[r]==="1"}n.fx&&n.fx.length&&e.handleFx(n.fx),n.ms&&n.ms.length&&e.handleMsgs(n.ms)}var Fe=n=>document.getElementById(n),lp=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ul=new URLSearchParams(location.search),k=window.__dz={ready:!1,mode:"menu",W:null,S:A,G:W,I:We,me:null,myPid:"me",models:new Map,paused:!1,simSpeed:1};tp();pd(Fe("c"));W.autoStep=!ul.get("noauto");W.onStepDown=()=>{Ye.d.opts.gfx="low",Lt(),Sn("Graphics set to LOW for smoother play \u{1F3AE}")};(Ye.d.opts.gfx==="low"||ul.get("gfx")==="low")&&to("low");Ud();Jd();nu(Ye.d.opts.sound);function _s(n){if(k.W&&k.W.id===n)return k.W;k.W&&(W.scene.remove(k.W.root),k.W.root.traverse(t=>{t.geometry&&!t.geometry.userData.keep&&t.geometry.dispose()})),k.models.forEach(t=>W.scene.remove(t.root)),k.models.clear(),ll(),rl();let e=Ld(n,W.scene);return k.W=e,jt.W=e,jt.scene=e.root,no(e.meta.mood,!0),e}function L_(n){let e=k.models.get(n.id),t=JSON.stringify(n.look)+(n.upg&&n.upg.jetpack?"j":"");return e&&e.key!==t&&(W.scene.remove(e.root),e=null),e||(e=_d(n.look),e.key=t,Md(e,n.upg&&n.upg.jetpack),e.root.position.set(n.x,n.y,n.z),W.scene.add(e.root),k.models.set(n.id,e)),e}function U_(n){let e=new Set;for(let t of A.players){let i=L_(t);e.add(t.id);let s=k.me&&t.id===k.me.id,r=s?k.me:t;if(s||k.mode!=="guest")i.root.position.set(r.x,r.y,r.z);else{let c=Math.min(1,n*12);i.root.position.x+=(t.x-i.root.position.x)*c,i.root.position.y+=(t.y-i.root.position.y)*c,i.root.position.z+=(t.z-i.root.position.z)*c}let o=r.yaw-i.root.rotation.y;for(;o>Math.PI;)o-=6.283;for(;o<-Math.PI;)o+=6.283;i.root.rotation.y+=o*Math.min(1,n*15);let a=t.st==="ko"?"ko":t.st==="float"?"float":r.an||"idle";bd(i,a,n,r.sp||0,W.t+t.id),i.bubble.visible=t.sh>0,i.bubble.visible&&i.bubble.scale.setScalar(1+Math.sin(W.t*8)*.04),i.flames.visible=!!r.jetOn,r.jetOn&&Math.random()<.5&&Wt(i.root.position.x,i.root.position.y+.6,i.root.position.z,1,[16757575,16777215],{sp:.5,up:-3,s:.2,s1:.5,life:.4});let l=(A.dz==="blizzard"||A.dz==="lightning"||A.dz==="volcano")&&A.phase==="active";i.umbrella.visible=!!(t.upg&&t.upg.umbrella)&&l&&a!=="ko"&&a!=="swim",i.root.visible=!(t.inv>0&&t.st==="ok"&&Math.floor(W.t*12)%2===0)}k.models.forEach((t,i)=>{e.has(i)||(W.scene.remove(t.root),k.models.delete(i))})}var yi=new Ut;function N_(){let n=0;if(A.coins&&k.mode!=="menu")for(let e of A.coins)e.on&&(yi.position.set(e.x,e.y+Math.sin(W.t*3+e.i)*.15,e.z),yi.rotation.set(0,W.t*2.5+e.i,0),yi.scale.setScalar(1),yi.updateMatrix(),Y.coins.setMatrixAt(n++,yi.matrix));Y.coins.count=n,Y.coins.instanceMatrix.needsUpdate=!0,A.star&&A.star.on&&k.mode!=="menu"?(yi.position.set(A.star.x,A.star.y+Math.sin(W.t*2)*.25,A.star.z),yi.rotation.set(0,W.t*2,0),yi.updateMatrix(),Y.stars.setMatrixAt(0,yi.matrix),Y.stars.count=1,Y.stars.instanceMatrix.needsUpdate=!0):Y.stars.count=0}var gn=null,_i=new D,xn=new D;function z_(n){let e=k.W,t=k.me;if(k.cam){if(W.camera.position.set(k.cam.x,k.cam.y,k.cam.z),W.camera.lookAt(k.cam.lx,k.cam.ly,k.cam.lz),W.focus.set(k.cam.lx,0,k.cam.lz),t){let f=mi(e,t.x,t.y,t.z);f!==gn&&(gn&&(gn.upper.visible=!gn.wrecked),f&&k.cam.hide!==!1&&(f.upper.visible=!1),gn=f)}return}if(k.mode==="menu"||!t){let f=W.t*.06;xn.set(Math.cos(f)*52,30,Math.sin(f)*52),W.camera.position.lerp(xn,.05),W.camera.lookAt(0,2,0),W.focus.set(0,0,0),gn&&(gn.upper.visible=!gn.wrecked,gn=null);return}let i=t.y<-22,s=i?null:mi(e,t.x,t.y,t.z);s!==gn&&(gn&&(gn.upper.visible=!gn.wrecked),s&&(s.upper.visible=!1),gn=s);let r=We.dist,o=We.pitch;s&&(r=Math.min(r,8),o=Math.max(o,.95)),i&&(r=Math.min(r,7),o=Math.max(o,.8)),_i.set(t.x,t.y+1.4,t.z);let a=Math.sin(We.yaw)*Math.cos(o),l=Math.sin(o),c=Math.cos(We.yaw)*Math.cos(o);if(!s&&!i)for(let f=1.5;f<r;f+=.6){let d=_i.x+a*f,g=_i.y+l*f,x=_i.z+c*f;if(e.buildings.some(p=>!p.wrecked&&d>p.x-p.w/2-.2&&d<p.x+p.w/2+.2&&x>p.z-p.d/2-.2&&x<p.z+p.d/2+.2&&g<p.baseY+p.h+.6&&g>p.baseY-.5)){r=Math.max(2.2,f-.6);break}}i&&(r=Math.min(r,(-30+5.6-_i.y)/Math.max(.2,l))),xn.set(_i.x+a*r,_i.y+l*r,_i.z+c*r);let u=bn(e,xn.x,xn.z,xn.y+2);!i&&xn.y<u+.6&&(xn.y=u+.6),!i&&Y.water.visible&&xn.y<Y.water.position.y+1.2&&(xn.y=Y.water.position.y+1.2);let h=A.env&&A.env.shake||0;h>0&&(xn.x+=(Math.random()-.5)*h*.6,xn.y+=(Math.random()-.5)*h*.5,xn.z+=(Math.random()-.5)*h*.6),W.camera.position.lerp(xn,Math.min(1,n*14)),W.camera.lookAt(_i),W.focus.set(t.x,i?0:t.y,t.z)}function sp(n){let e=k.me;if(!e)return;let t=Kd(),i=Math.cos(We.yaw),s=Math.sin(We.yaw),r={x:t.x*i+t.z*s,z:-t.x*s+t.z*i,jump:We.jumpQ,jet:We.jet};if(We.jumpQ=!1,e.st==="ok"?(cl(e,r,n,k.W,A.env),e.jumped&&(e.jumped=!1,vt.jump())):cl(e,{x:0,z:0},n,k.W,A.env),We.actQ&&(We.actQ=!1,e.st==="ok")){let o=eu(e,k.W);o&&(vt.pad(),q_(),o.kind==="down"&&Sn("\u{1F526} You are in the "+o.room.name+". Safe from most disasters!"))}We.shieldQ&&(We.shieldQ=!1,O_())}function O_(){let n=k.me,e=mn("shield");if(!e||!n||n.st!=="ok")return;if(A.phase!=="active"&&A.phase!=="warn")return Sn("Save your bubble for a disaster! \u{1FAE7}");if(k.mode==="guest"){le.send({t:"shield"}),vt.shield();return}let t=A.players.find(i=>i.id===n.id);if(t.shUses>=e)return Sn("Bubble used up this wave");t.shUses++,t.sh=5,vt.shield()}k.startSolo=function(n){xs();let e=_s(n);tu(e,e.root,n,[{pid:"me",name:Ye.d.name||"You",look:Ye.d.look,upg:vs()}],+(ul.get("waves")||5)),k.mode="solo",k.myPid="me",k.me=A.players[0],fu()};k.startHosted=function(n,e){xs();let t=_s(n);tu(t,t.root,n,e,5),k.mode="host",k.myPid=le.room.pid,k.me=A.players.find(i=>i.pid===k.myPid),fu(),le.broadcast({t:"start",map:n,players:A.players.map(i=>({id:i.id,pid:i.pid,name:i.name,cpu:i.cpu,look:i.look,upg:i.upg}))})};k.startGuest=function(n){xs();let e=_s(n.map);e.buildings.forEach(i=>fs(e,i)),Object.assign(A,{phase:"calm",t:14,wave:0,waves:5,map:n.map,haz:[],env:{},wrecked:[],coins:[],fx:[],msgs:[]}),A.players=n.players.map(i=>ao(i)),A.players.forEach(i=>{i.max=xr(i.upg),i.hp=i.max;let s=e.spawns[i.id%4];i.x=s[0],i.z=s[1],i.y=.3}),k.mode="guest",k.myPid=le.room.pid;let t=A.players.find(i=>i.pid===k.myPid);k.me=ao(Object.assign({},t)),k.me.upg=vs(),k.lastMsg=0,k.wreckSeen=new Set,k.tpN=t.tpN,fu()};function fu(){let n=Fe("toasts");n&&(n.innerHTML=""),rl(),ll(),Mi(),Fe("title").classList.add("hidden"),Fe("hud").classList.remove("hidden"),We.enabled=!0,k.lastPhase=null,k.lastWave=0,k.waveCoins=0,k.roundCoins=0,k.roundKO=!1,k.roundSaved=!1,Ye.d.stats.maps[k.W.id]=1,Object.keys(Ye.d.stats.maps).length>=4&&wn("travel"),Lt(),Ye.d.howto||(Ye.d.howto=!0,Lt(),du()),dp()}k.quit=function(){(k.mode==="host"||k.mode==="guest")&&le.leave(),k.mode="menu",k.me=null,A.phase="lobby",A.players=[],A.haz=[],A.env={},We.enabled=!1,k.W.buildings.forEach(n=>fs(k.W,n)),ll(),rl(),F_(),Fe("hud").classList.add("hidden"),Mi(),$_()};function F_(){["wind","rain","rumble"].forEach(n=>fo(n,0))}function cp(n){for(let e of n)e.pid&&e.pid!==k.myPid&&e.k==="sfx"&&(e.n==="coin"||e.n==="cash"||e.n==="ko")||(Gd(e,k.W,vt),e.k==="hit"&&e.pid===k.myPid&&(vt.hurt(),Y_()))}function hp(n){for(let e of n)e.pid!=="*"&&e.pid!==k.myPid||(e.coins&&e.pid===k.myPid&&(mo(e.coins),k.roundCoins+=e.coins,Z_()),e.text&&Sn(e.text,e.coins?"gold":""))}k.onWaveStats=function(n){if(!n)return;let e=Ye.d.stats;n.ko?(e.kos++,k.roundKO=!0):(e.waves++,e.survived[n.id]=(e.survived[n.id]||0)+1,wn("first"),n.id==="kaiju"&&wn("kaiju"),n.under&&k.W.id==="area51"&&k.me&&k.W.rooms.some(t=>t.kind==="bunker")&&wn("bunker"),n.id==="flood"&&n.high&&wn("dry"),mr.every(t=>e.survived[t])&&wn("allnine")),n.beamed&&wn("beamed"),n.helped&&(e.revives+=n.helped,e.revives>=5&&wn("helper")),e.earned>=1e3&&wn("rich"),Lt()};k.onRoundEnd=function(){let n=Ye.d.stats;n.rounds++,k.roundKO||wn("perfect"),n.rounds>=10&&wn("rounds10"),Lt(),setTimeout(gp,1200)};jt.hooks.waveEnd=()=>{A.players.forEach(n=>{n.cpu||!n.stats||(n.pid===k.myPid?k.onWaveStats(n.stats):le.sendTo(n.pid,{t:"wave",st:n.stats}),n.helped=0,n.beamed=!1)})};jt.hooks.roundEnd=()=>{k.onRoundEnd(),k.mode==="host"&&le.broadcast({t:"end"})};function wn(n){let e=np(n);e&&(vt.achieve(),Sn(e.icon+" Achievement: "+e.name+"!","ach"))}var rp=performance.now(),cu=0,hu=0;function up(n){requestAnimationFrame(up);let e=Math.min(.05,(n-rp)/1e3);rp=n,k.paused&&k.mode==="solo"&&(e=0),fp(e),md(e)}function fp(n){let e=k.W;if(k.mode==="solo"||k.mode==="host")sp(n),Yd(n*k.simSpeed,e),A.fx.length&&cp(A.fx),A.msgs.length&&hp(A.msgs),k.mode==="host"&&(le.queue(A.fx,A.msgs),cu+=n,cu>.1&&(cu=0,le.snapshot())),A.fx=[],A.msgs=[];else if(k.mode==="guest"){sp(n);for(let t of A.haz)t.t=Math.min(t.T,t.t+n);if(hu+=n,hu>.066){hu=0;let t=k.me;le.send({t:"pose",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),yaw:+t.yaw.toFixed(2),an:t.an,sp:+(t.sp||0).toFixed(2),jet:!!t.jetOn})}}e&&(zd(),Vd(A,e,n),Od(),kd(n,k.me?{x:k.me.x,y:Math.max(k.me.y,0),z:k.me.z}:{x:0,y:0,z:0},H_()),U_(n),N_()),z_(n),B_(),k.mode!=="menu"&&(X_(n),V_())}var k_=0;function B_(){let n=k.W;if(!n||k_++%6)return;let e=k.me,t=e||{x:W.camera.position.x,y:0,z:W.camera.position.z},i=e&&e.y<-22;for(let s of n.buildings)s.inner&&(s.inner.visible=!!e&&!i&&Math.abs(t.x-s.x)<26+s.w/2&&Math.abs(t.z-s.z)<26+s.d/2);if(e){for(let s of n.fires)if((!s.b||!s.b.wrecked)&&Math.abs(s.x-e.x)<30&&Math.abs(s.z-e.z)<30){let r=(s.b,s.x),o=(s.b,s.z);Wt(s.fx!=null?s.fx:r,(s.y||0)+.5,s.fz!=null?s.fz:o,2,[16743168,16758531,16731392],{fire:1,sp:.3,up:2.2,s:.35,s1:.05,life:.7,spread:.6})}}for(let s of n.rooms)s.group.visible=!!i&&t.x>s.x0-3&&t.x<s.x1+3&&t.z>s.z0-3&&t.z<s.z1+3}function H_(){let n=A.env||{},e=A.phase==="active",t=k.me&&k.me.y<-22;return{rain:e&&!t&&n.rain||0,snow:e&&!t&&n.snow||0,ash:e&&!t&&n.ash||0,hail:e&&!t&&n.hail||0,wind:n.wind||0,groundY:k.me?Math.max(0,bn(k.W,k.me.x,k.me.z,200)):0}}function V_(){let n=A.env||{},e=A.phase==="active",t=k.me&&k.me.y<-22,i=t?.3:1;fo("wind",e?Math.min(.5,(n.wind||0)*.05)*i:.02),fo("rain",e?(n.rain||0)*.25*i:0),fo("rumble",(n.shake||0)*.6)}function G_(){return A.phase==="active"||A.phase==="warn"&&A.dz?It[A.dz].mood:k.W.meta.mood}function W_(){let n=document.createElement("div");n.id="hud",n.className="hidden",n.innerHTML=`<div id="hpBox"><button id="menuBtn" class="hudbtn">\u2630</button><div class="hpbar"><i id="hpFill"></i><span id="hpTxt">100</span></div></div>
  <div id="coinBox" class="pill"><span class="coinIc">\u2605</span><span id="coinTxt">0</span></div>
  <div id="waveBox"><div class="wavePill" id="wavePill">WAVE 1/5</div><div class="timer"><i id="timerFill"></i></div><div id="banner" class="banner hidden"><div class="t" id="banT"></div><div class="w" id="banW"></div></div><div id="safeChip" class="safe hidden"></div></div>
  <div id="calmCard" class="hidden"></div>
  <div id="toasts"></div>
  <div id="koBox" class="ko hidden"><div>\u{1F4AB} KNOCKED OUT!<br><small id="koTxt" style="font-size:14px"></small></div></div>
  <div id="joyHint">\u{1F446} Drag here to move</div>
  <div id="ctrls"><div id="gadCol" style="display:flex;flex-direction:column;gap:10px;align-items:center"><button id="bJet" class="cbtn gad hudbtn hidden">\u{1F680}</button><button id="bShield" class="cbtn gad hudbtn hidden">\u{1FAE7}</button></div><div style="display:flex;flex-direction:column;gap:12px;align-items:center"><button id="bAct" class="cbtn act hudbtn hidden">ENTER</button><button id="bJump" class="cbtn jump hudbtn">JUMP</button></div></div>
  <div id="joy"><div></div></div><div id="tags"></div><div id="fade"></div>`,Fe("ui").appendChild(n);let e=(i,s)=>{i.addEventListener("touchstart",r=>{r.preventDefault(),r.stopPropagation(),s()},{passive:!1}),i.addEventListener("mousedown",r=>{r.stopPropagation(),s()})};e(Fe("bJump"),()=>{We.jumpQ=!0}),e(Fe("bAct"),()=>{We.actQ=!0}),e(Fe("bShield"),()=>{We.shieldQ=!0});let t=Fe("bJet");t.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),We.jet=!0},{passive:!1}),t.addEventListener("touchend",()=>We.jet=!1),t.addEventListener("mousedown",i=>{i.stopPropagation(),We.jet=!0}),window.addEventListener("mouseup",()=>We.jet=!1),Fe("menuBtn").addEventListener("click",Q_)}function dp(){Fe("bShield").classList.toggle("hidden",!mn("shield")),Fe("bJet").classList.toggle("hidden",!mn("jetpack"))}var op=-1;var uu=new Map;function X_(n){let e=k.me,t=k.W;if(!e)return;let i=A.players.find(y=>y.id===e.id)||e;k.mode==="guest"&&(e.hp=i.hp,e.max=i.max,e.st=i.st,e.sh=i.sh,e.inv=i.inv);let s=Math.max(0,i.hp),r=i.max||100;Fe("hpFill").style.width=100*s/r+"%",Fe("hpFill").classList.toggle("low",s/r<.35),Fe("hpTxt").textContent=Math.ceil(s)+" / "+r,Ye.d.coins!==op&&(op=Ye.d.coins,Fe("coinTxt").textContent=Ye.d.coins);let o=A.phase+A.wave;o!==k.lastPhase&&(k.lastPhase=o,no(G_()),A.phase==="warn"&&(vt.siren(),Sn(It[A.dz].icon+" "+xi(A.dz,t)+" WARNING!")),A.phase,A.phase==="calm"&&A.wave>0&&vt.win());let a=Fe("wavePill"),l=Fe("timerFill"),c=Fe("banner"),u=Fe("safeChip");if(A.phase==="calm")a.textContent=A.wave===0?"GET READY! "+Math.ceil(A.t):"BREAK - WAVE "+(A.wave+1)+"/"+A.waves+" IN "+Math.ceil(A.t),l.style.width=Math.max(0,A.t/14*100)+"%",c.classList.add("hidden"),u.classList.add("hidden");else if(A.phase==="warn"||A.phase==="active"){let y=It[A.dz];a.textContent="WAVE "+A.wave+"/"+A.waves+(A.phase==="warn"?"  \u26A0\uFE0F "+Math.ceil(A.t):"  \u23F1 "+Math.ceil(A.t)),l.style.width=(A.phase==="warn"?A.t/7:A.t/(A.dzDur||30))*100+"%",c.classList.remove("hidden"),c.style.borderColor=y.color,Fe("banT").style.color=y.color,Fe("banT").textContent=y.icon+" "+xi(A.dz,t),Fe("banW").textContent=A.phase==="warn"?y.warn:y.tip,c.classList.toggle("flash",A.phase==="warn");let v=$t(t,e),z=e.st==="ok"?y.safe(e,v,A,t):null;u.classList.remove("hidden"),e.st!=="ok"?(u.className="safe meh",u.textContent=e.st==="float"?"\u{1F6F8} BEAMED UP!":"\u{1F4AB} Knocked out"):z==="maybe"?(u.className="safe meh",u.textContent="\u{1F7E1} Pretty safe - sturdier is better!"):z?(u.className="safe ok",u.textContent="\u2705 SAFE: "+z):(u.className="safe bad",u.textContent="\u26A0\uFE0F DANGER! Follow the green arrow")}else c.classList.add("hidden"),u.classList.add("hidden");let h=A.phase==="warn"||A.phase==="active"?It[A.dz]:null,f=!1;if(h&&e.st==="ok"){let y=$t(t,e),v=h.safe(e,y,A,t);if(!v||v==="maybe"){let z=qd(e,t);if(z){f=!0;let C=Math.atan2(z.x-e.x,z.z-e.z);Y.arrow.position.set(e.x+Math.sin(C)*1.4,e.y+2.4+Math.sin(W.t*5)*.1,e.z+Math.cos(C)*1.4),Y.arrow.rotation.set(0,C,0),Y.beacon.visible=!0,Y.beacon.position.set(z.x,z.y+15,z.z)}}}Y.arrow.visible=f,f||(Y.beacon.visible=!1);let d=e.st==="ok"?Qa(t,e.x,e.y,e.z):null,g=Fe("bAct");d?(g.classList.remove("hidden"),g.textContent=d.label):g.classList.add("hidden"),Fe("koBox").classList.toggle("hidden",i.st!=="ko"),i.st==="ko"&&(Fe("koTxt").textContent=i.rev>0?"A friend is helping you up! \u{1F91D}":"Back in "+Math.max(0,Math.ceil(i.koT||0))+"...");let x=Fe("calmCard");if(A.phase==="calm"&&k.mode!=="guest"){x.classList.remove("hidden");let v="NEXT: "+(A.picked?It[A.next].icon+" "+xi(A.next,t):"\u{1F3B2} Random")+(A.picked?"":' <button class="btn gold small" id="bPick">\u{1F3AF} PICK 40</button>');if(x._h!==v){x._h=v,x.innerHTML=v;let z=Fe("bPick");z&&(z.onclick=mp)}}else if(A.phase==="calm"&&k.mode==="guest"){x.classList.remove("hidden");let y="NEXT: "+(A.picked?It[A.next].icon+" "+xi(A.next,t):"\u{1F3B2} Random")+" <small>(host picks)</small>";x._h!==y&&(x._h=y,x.innerHTML=y)}else x.classList.add("hidden");Fe("joyHint").style.display=A.wave===0&&A.phase==="calm"?"":"none";let m=Fe("tags"),p=new Set,S=new D;for(let y of A.players){if(y.id===e.id)continue;let v=y.st==="ko",z=!y.cpu&&k.mode!=="solo";if(!v&&!z)continue;let C=k.models.get(y.id);if(!C||(S.set(C.root.position.x,C.root.position.y+2.5,C.root.position.z).project(W.camera),S.z>1||Math.abs(S.x)>1.1||Math.abs(S.y)>1.1))continue;let I=uu.get(y.id);I||(I=document.createElement("div"),m.appendChild(I),uu.set(y.id,I)),p.add(y.id),I.className="tag"+(v?" help":""),I.textContent=v?"\u{1F4AB} HELP "+y.name+"!":y.name,I.style.left=(S.x+1)/2*innerWidth+"px",I.style.top=(1-S.y)/2*innerHeight+"px",I.style.display=""}uu.forEach((y,v)=>{p.has(v)||(y.style.display="none")})}function Y_(){let n=Fe("fade");n.style.background="#ff2d55",n.style.opacity=.35,setTimeout(()=>{n.style.opacity=0},120)}function q_(){let n=Fe("fade");n.style.background="#000",n.style.opacity=.7,setTimeout(()=>n.style.opacity=0,160)}function Z_(){Fe("coinBox").animate([{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:250})}function Sn(n,e){let t=Fe("toasts")||Fe("ui");if(!t||!n)return;let i=document.createElement("div");for(i.className="toast "+(e||""),i.textContent=n,t.appendChild(i);t.children.length>4;)t.removeChild(t.firstChild);setTimeout(()=>i.remove(),2600)}k.toast=Sn;function bi(n,e,t={}){Mi();let i=document.createElement("div");return i.className="panelWrap",i.id="panel",i.innerHTML='<div class="panel">'+n+"</div>",Fe("ui").appendChild(i),i.querySelectorAll("[data-close]").forEach(s=>s.addEventListener("click",()=>{vt.click(),Mi(),t.onClose&&t.onClose()})),e&&e(i),k.panelName=t.name||"panel",k.mode==="solo"&&t.pause&&(k.paused=!0),i}function Mi(){let n=Fe("panel");n&&n.remove(),k.paused=!1,k.panelName=null}k.hidePanels=Mi;function $_(){Fe("title").classList.remove("hidden"),Fe("titleCoins").textContent=Ye.d.coins,k.W&&k.W.id!=="city"&&!k.W&&_s("city")}function j_(){let n=document.createElement("div");n.id="title",n.innerHTML=`<div style="width:100%"><div id="topbar"><span class="pill"><span class="coinIc">\u2605</span><span id="titleCoins">0</span></span><button class="btn gray small" id="tGfx">\u2699\uFE0F</button></div>
  <div class="logo" style="margin-top:56px"><div class="l1">GROK</div><div class="l2">DISASTER ZONE</div><div class="tag">Survive kaiju, tornadoes, meteors & more!</div></div></div>
  <div class="menuCol"><button class="btn green" id="tPlay" style="font-size:24px;padding:18px">\u25B6 PLAY</button><button class="btn pink" id="tOnline">\u{1F91D} PLAY WITH FRIENDS</button>
  <div class="menuRow"><button class="btn gold" id="tShop">\u{1F6D2} SHOP</button><button class="btn purple" id="tTroph">\u{1F3C6} TROPHIES</button></div><button class="btn" id="tHow">\u2753 HOW TO PLAY</button></div>`,Fe("ui").appendChild(n),Fe("tPlay").onclick=()=>{vt.click(),xs(),pp()},Fe("tOnline").onclick=()=>{vt.click(),xs(),le.lobby()},Fe("tShop").onclick=()=>{vt.click(),xs(),Vn()},Fe("tTroph").onclick=()=>{vt.click(),K_()},Fe("tHow").onclick=()=>{vt.click(),du()},Fe("tGfx").onclick=()=>{vt.click(),xo()}}function pp(n){let e=k.W?k.W.id:"area51",t=()=>bi(`<h2>\u{1F5FA}\uFE0F PICK A MAP</h2><p class="sub">Disasters are random, or pay coins between waves to pick the next one!</p><div class="cards">${$h.map(i=>`<div class="card ${i.id===e?"sel":""}" data-m="${i.id}"><div class="em">${i.emoji}</div><b>${i.name}</b><small>${i.desc}</small></div>`).join("")}</div>
    <div class="btnrow"><button class="btn gray" data-close>BACK</button><button class="btn green" id="mGo">${n?"START FOR ALL":"START!"}</button></div>`,i=>{i.querySelectorAll("[data-m]").forEach(s=>s.onclick=()=>{vt.click(),e=s.dataset.m,_s(e),t()}),Fe("mGo").onclick=()=>{vt.click(),Mi(),n?le.start(e):k.startSolo(e)}},{name:"maps",onClose:n?()=>le.roomPanel():null});t()}k.showMapPick=pp;function mp(){if(A.phase!=="calm")return;let n=40;bi(`<h2>\u{1F3AF} PICK THE NEXT DISASTER</h2><p class="sub">Costs <b>${n}</b> coins. You have <b>${Ye.d.coins}</b>.</p><div class="dzGrid">${mr.map(e=>`<button data-d="${e}"><span>${It[e].icon}</span>${xi(e,k.W)}</button>`).join("")}</div><div class="btnrow"><button class="btn gray" data-close>KEEP RANDOM</button></div>`,e=>{e.querySelectorAll("[data-d]").forEach(t=>t.onclick=()=>{if(Ye.d.coins<n){Sn("Not enough coins! Survive more waves \u{1F4AA}");return}if(A.phase!=="calm")return Mi();mo(-n),Ye.d.stats.picks++,Lt(),Xd(t.dataset.d),vt.cash(),Sn("\u{1F4B8} CHA-CHING! Next up: "+It[t.dataset.d].icon+" "+xi(t.dataset.d,k.W),"gold"),wn("picker"),Mi()})},{name:"picker"})}k.showPicker=mp;function Vn(n="upg"){let e=Ye.d,t=su.map(o=>{let a=mn(o.id),l=o.prices.length,c=o.prices[a];return`<div class="item"><div class="ic">${o.icon}</div><div class="grow"><b>${o.name}</b><small>${o.desc}</small><div class="lv">${o.prices.map((u,h)=>`<i class="${h<a?"on":""}"></i>`).join("")}</div></div>${a>=l?'<button class="btn gray small" disabled>MAX</button>':`<button class="btn gold small" data-buy="${o.id}">${c}</button>`}</div>`}).join(""),i=ru.map(o=>{let a=e.hats.includes(o.id),l=e.look.hat===o.id;return`<div class="item"><div class="ic">${{cap:"\u{1F9E2}",beanie:"\u{1F9F6}",party:"\u{1F973}",cowboy:"\u{1F920}",chef:"\u{1F468}\u200D\u{1F373}",dino:"\u{1F996}",astro:"\u{1F469}\u200D\u{1F680}",crown:"\u{1F451}",none:"\u{1F642}"}[o.id]}</div><div class="grow"><b>${o.name}</b></div>${l?'<button class="btn green small" disabled>ON</button>':a?`<button class="btn small" data-hat="${o.id}">WEAR</button>`:`<button class="btn gold small" data-hatbuy="${o.id}">${o.price}</button>`}</div>`}).join(""),s=o=>"#"+o.toString(16).padStart(6,"0"),r=`<h3>SHIRT</h3><div class="swatches">${ou.map(o=>`<button data-shirt="${o}" class="${e.look.shirt===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>HAT COLOR</h3><div class="swatches">${ou.map(o=>`<button data-hc="${o}" class="${e.look.hatColor===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>SKIN</h3><div class="swatches">${[16173472,14723449,12155471,9067067,16767416].map(o=>`<button data-skin="${o}" class="${e.look.skin===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>NAME</h3><input class="name" id="nameIn" maxlength="12" placeholder="Your name" value="${lp(e.name)}">`;bi(`<h2>\u{1F6D2} SHOP</h2><p class="sub"><span class="pill"><span class="coinIc">\u2605</span>${e.coins}</span></p><div class="tabs"><button data-tab="upg" class="${n==="upg"?"on":""}">\u2B06\uFE0F UPGRADES</button><button data-tab="hats" class="${n==="hats"?"on":""}">\u{1F3A9} HATS</button><button data-tab="look" class="${n==="look"?"on":""}">\u{1F3A8} LOOK</button></div>${n==="upg"?t:n==="hats"?i:r}<div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`,o=>{o.querySelectorAll("[data-tab]").forEach(l=>l.onclick=()=>{vt.click(),Vn(l.dataset.tab)}),o.querySelectorAll("[data-buy]").forEach(l=>l.onclick=()=>{let c=su.find(f=>f.id===l.dataset.buy),u=mn(c.id),h=c.prices[u];if(e.coins<h)return Sn("Not enough coins yet!");mo(-h),e.upg[c.id]=u+1,Lt(),vt.cash(),Sn("\u2728 "+c.name+" Lv"+(u+1)+"!","gold"),J_(),Vn("upg")}),o.querySelectorAll("[data-hatbuy]").forEach(l=>l.onclick=()=>{let c=ru.find(u=>u.id===l.dataset.hatbuy);if(e.coins<c.price)return Sn("Not enough coins yet!");mo(-c.price),e.hats.push(c.id),e.look.hat=c.id,Lt(),vt.cash(),go(),Vn("hats")}),o.querySelectorAll("[data-hat]").forEach(l=>l.onclick=()=>{e.look.hat=l.dataset.hat,Lt(),vt.click(),go(),Vn("hats")}),o.querySelectorAll("[data-shirt]").forEach(l=>l.onclick=()=>{e.look.shirt=+l.dataset.shirt,Lt(),vt.click(),go(),Vn("look")}),o.querySelectorAll("[data-hc]").forEach(l=>l.onclick=()=>{e.look.hatColor=+l.dataset.hc,Lt(),vt.click(),go(),Vn("look")}),o.querySelectorAll("[data-skin]").forEach(l=>l.onclick=()=>{e.look.skin=+l.dataset.skin,Lt(),vt.click(),go(),Vn("look")});let a=o.querySelector("#nameIn");a&&(a.onchange=()=>{e.name=a.value.replace(/[<>&"]/g,"").trim().slice(0,12),Lt()})},{name:"shop",pause:!0,onClose:()=>{let o=Fe("titleCoins");o&&(o.textContent=Ye.d.coins)}})}k.showShop=Vn;function J_(){let n=vs();if(k.me){k.me.upg=n;let e=A.players.find(t=>t.id===k.me.id);e&&k.mode!=="guest"&&(e.upg=n,e.max=xr(n))}dp(),k.mode==="guest"&&le.hello()}function go(){if(k.me){let n=A.players.find(e=>e.id===k.me.id);n&&(n.look=Object.assign({},Ye.d.look)),k.me.look=n?n.look:Ye.d.look}k.mode==="guest"&&le.hello()}function K_(){let n=Ye.d.stats;bi(`<h2>\u{1F3C6} TROPHIES</h2><div class="statGrid"><div><b>${n.rounds}</b>Rounds</div><div><b>${n.waves}</b>Disasters survived</div><div><b>${n.revives}</b>Friends helped</div><div><b>${n.earned}</b>Coins earned</div><div><b>${n.kos}</b>Knockouts</div><div><b>${Object.keys(n.survived).length}/9</b>Disaster types</div></div><h3>ACHIEVEMENTS (${Object.keys(Ye.d.ach).length}/${hl.length})</h3>${hl.map(e=>`<div class="ach ${Ye.d.ach[e.id]?"on":""}"><div class="ic">${e.icon}</div><div><b>${e.name}</b><br><small>${e.desc}</small></div></div>`).join("")}<h3>SURVIVED</h3><div class="statGrid">${mr.map(e=>`<div><b>${It[e].icon} ${n.survived[e]||0}</b>${It[e].name}</div>`).join("")}</div><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`,null,{name:"trophies",pause:!0})}function du(){bi(`<h2>\u2753 HOW TO PLAY</h2><div class="howto"><div class="row"><span>\u{1F579}\uFE0F</span><p>Drag the <b>left side</b> to run. Drag the <b>right side</b> to look around, pinch to zoom. Tap <b>JUMP</b> to jump.</p></div>
  <div class="row"><span>\u{1F6A8}</span><p>When the siren goes off, read the warning and <b>follow the green arrow</b> to a safe spot before time runs out!</p></div>
  <div class="row"><span>\u{1F3E0}</span><p>Walk into buildings through the door. Glowing pads take you <b>down to basements</b> \u2B07 or <b>up to rooftops</b> \u2B06 - tap the yellow button.</p></div>
  <div class="row"><span>\u{1F6E1}\uFE0F</span><p>Each disaster has its own safe spots: <b>underground</b> for kaiju, <b>high ground</b> for tsunamis, <b>under tables</b> for earthquakes, <b>indoors</b> for lightning, hail and UFOs.</p></div>
  <div class="row"><span>\u{1F4AB}</span><p>Get knocked out? Wait a moment, or a friend can stand next to you to <b>help you up</b>. Helping others earns coins!</p></div>
  <div class="row"><span>\u{1FA99}</span><p>Earn coins for surviving, helping and grabbing coins. Spend them in the <b>Shop</b>, or pay 40 to <b>pick the next disaster</b>. Cha-ching!</p></div></div>
  <div class="btnrow"><button class="btn green" data-close>GOT IT!</button></div>`,null,{name:"howto",pause:!0})}function xo(){bi(`<h2>\u2699\uFE0F SETTINGS</h2><h3>GRAPHICS</h3><div class="tabs"><button data-g="high" class="${W.quality==="high"?"on":""}">\u2728 HIGH</button><button data-g="low" class="${W.quality==="low"?"on":""}">\u26A1 LOW</button></div><p class="sub">HIGH has soft shadows, glow and ambient occlusion. LOW runs smoother on older phones. The game switches to LOW by itself if it gets slow.</p><h3>SOUND</h3><div class="tabs"><button data-s="1" class="${Ye.d.opts.sound?"on":""}">\u{1F50A} ON</button><button data-s="0" class="${Ye.d.opts.sound?"":"on"}">\u{1F507} OFF</button></div><div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`,n=>{n.querySelectorAll("[data-g]").forEach(e=>e.onclick=()=>{to(e.dataset.g),Ye.d.opts.gfx=e.dataset.g,Lt(),xo()}),n.querySelectorAll("[data-s]").forEach(e=>e.onclick=()=>{Ye.d.opts.sound=e.dataset.s==="1",nu(Ye.d.opts.sound),Lt(),xo()})},{name:"settings",pause:!0})}k.showSettings=xo;function Q_(){bi(`<h2>\u23F8\uFE0F PAUSED</h2>${k.mode!=="solo"?'<p class="sub">Online games keep going while this menu is open.</p>':""}<div class="menuCol" style="margin:0 auto"><button class="btn green" data-close>\u25B6 RESUME</button><button class="btn gold" id="pShop">\u{1F6D2} SHOP</button><button class="btn" id="pHow">\u2753 HOW TO PLAY</button><button class="btn purple" id="pSet">\u2699\uFE0F SETTINGS</button><button class="btn pink" id="pQuit">\u{1F6AA} QUIT TO MENU</button></div>`,n=>{Fe("pShop").onclick=()=>Vn(),Fe("pHow").onclick=du,Fe("pSet").onclick=xo,Fe("pQuit").onclick=()=>k.quit()},{name:"pause",pause:!0})}function gp(){let n=A.players.find(e=>e.id===(k.me&&k.me.id));bi(`<div class="big">\u{1F3C6}</div><h2>ROUND COMPLETE!</h2><p class="sub">You survived ${A.waves} disasters on ${k.W.meta.name}!</p>
  <div class="res"><span>\u{1FA99} Coins earned</span><span>+${k.roundCoins}</span></div><div class="res"><span>\u{1F4AB} Knockouts</span><span>${n?n.kos:0}</span></div><div class="res"><span>\u{1F91D} Friends helped</span><span>${n?n.revives:0}</span></div>${k.roundKO?"":'<div class="res" style="background:#dcfce7"><span>\u{1F6E1}\uFE0F UNTOUCHABLE!</span><span>No knockouts</span></div>'}
  <div class="btnrow">${k.mode==="guest"?'<button class="btn gray" id="rLeave">LEAVE</button><button class="btn" disabled>Waiting for host\u2026</button>':'<button class="btn gray" id="rMenu">MENU</button><button class="btn green" id="rAgain">PLAY AGAIN</button>'}</div><div class="btnrow"><button class="btn gold" id="rShop">\u{1F6D2} SHOP</button></div>`,e=>{let t=Fe("rMenu");t&&(t.onclick=()=>k.quit());let i=Fe("rLeave");i&&(i.onclick=()=>k.quit());let s=Fe("rAgain");s&&(s.onclick=()=>{Mi(),k.mode==="host"?k.startHosted(k.W.id,le.humans()):k.startSolo(k.W.id)}),Fe("rShop").onclick=()=>Vn()},{name:"results"})}k.showResults=gp;k.panel=bi;k.esc=lp;k.loadMap=_s;k.handleFx=cp;k.handleMsgs=hp;k.achieve=wn;W_();j_();_s(ul.get("map")||"city");Fe("titleCoins").textContent=Ye.d.coins;le.init(k);requestAnimationFrame(up);k.ready=!0;k.sim=(n,e=.05)=>{for(let t=0;t<n;t+=e)fp(e)};k.wreck=n=>fr(k.W,k.W.root,n);k.force=n=>{A.phase==="calm"&&(A.next=n,A.picked=!0,A.t=.01,k.sim(7.2))};k.tp=(n,e,t)=>{let i=k.me;i.x=n,i.y=e,i.z=t,i.vy=0;let s=A.players.find(r=>r.id===i.id);s&&s!==i&&(s.x=n,s.y=e,s.z=t)};k.setMood=no;k.SV=Ye;k.save=Lt;k.DZ=It;k.H=jt;k.shelter=$t;k.Net=le;var ap=window.GrokNet&&GrokNet.params&&GrokNet.params();ap&&le.fromParams(ap);})();
