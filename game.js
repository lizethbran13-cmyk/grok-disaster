(()=>{var vp=0,Mu=1,yp=2;var La=1,Ua=2,ri=3,Di=0,Wt=1,zt=2,kt=0,ks=1,Li=2,bu=3,wu=4,gh=5,An=100,_p=101,Mp=102,bp=103,wp=104,ir=200,Sp=201,Ep=202,Tp=203,Yl=204,ql=205,Na=206,Ap=207,za=208,Rp=209,Cp=210,Pp=211,Ip=212,Dp=213,Lp=214,Zl=0,$l=1,jl=2,Gs=3,Jl=4,Kl=5,Ql=6,ec=7,Ff=0,Up=1,Np=2,Ii=0,xh=1,vh=2,yh=3,_h=4,zp=5,Mh=6,$r=7;var kf=300,Ws=301,Xs=302,tc=303,nc=304,Oa=306,ci=1e3,Qi=1001,ic=1002,nn=1003,Op=1004;var yo=1005;var Wn=1006,fl=1007;var es=1008;var On=1009,Bf=1010,Hf=1011,Or=1012,bh=1013,ts=1014,Xn=1015,dn=1016,wh=1017,Sh=1018,Ui=1020,Vf=35902,Gf=1021,Wf=1022,Mn=1023,Xf=1024,Yf=1025,Bs=1026,Ni=1027,Eh=1028,Th=1029,qf=1030,Ah=1031;var Rh=1033,$o=33776,jo=33777,Jo=33778,Ko=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,hc=37496,uc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,xc=37814,vc=37815,yc=37816,_c=37817,Mc=37818,bc=37819,wc=37820,Sc=37821,Qo=36492,Ec=36494,Tc=36495,Zf=36283,Ac=36284,Rc=36285,Cc=36286;var ea=2300,Pc=2301,dl=2302,Su=2400,Eu=2401,Tu=2402;var Fp=3200,kp=3201;var Ch=0,Bp=1,Pi="",un="srgb",sr="srgb-linear",Fa="linear",xt="srgb";var Ms=7680;var Au=519,Hp=512,Vp=513,Gp=514,$f=515,Wp=516,Xp=517,Yp=518,qp=519,Ru=35044,jf=35048;var Cu="300 es",ai=2e3,ta=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=1234567,Ir=Math.PI/180,Fr=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Ph(n,e){return(n%e+e)%e}function Zp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $p(n,e,t){return n!==e?(t-n)/(e-n):0}function Dr(n,e,t){return(1-t)*n+t*e}function jp(n,e,t,i){return Dr(n,e,1-Math.exp(-t*i))}function Jp(n,e=1){return e-Math.abs(Ph(n,e*2)-e)}function Kp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function em(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tm(n,e){return n+Math.random()*(e-n)}function nm(n){return n*(.5-Math.random())}function im(n){n!==void 0&&(Pu=n);let e=Pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sm(n){return n*Ir}function rm(n){return n*Fr}function om(n){return(n&n-1)===0&&n!==0}function am(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ih={DEG2RAD:Ir,RAD2DEG:Fr,generateUUID:cs,clamp:Ft,euclideanModulo:Ph,mapLinear:Zp,inverseLerp:$p,lerp:Dr,damp:jp,pingpong:Jp,smoothstep:Kp,smootherstep:Qp,randInt:em,randFloat:tm,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:om,ceilPowerOfTwo:am,floorPowerOfTwo:lm,setQuaternionFromProperEuler:cm,normalize:rn,denormalize:zs},oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],w=s[1],v=s[4],y=s[7],O=s[2],P=s[5],T=s[8];return r[0]=o*x+a*w+l*O,r[3]=o*m+a*v+l*P,r[6]=o*p+a*y+l*T,r[1]=c*x+u*w+h*O,r[4]=c*m+u*v+h*P,r[7]=c*p+u*y+h*T,r[2]=f*x+d*w+g*O,r[5]=f*m+d*v+g*P,r[8]=f*p+d*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pl.makeScale(e,t)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pl=new tt;function Jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hm(){let n=na("canvas");return n.style.display="block",n}var Iu={};function Cr(n){n in Iu||(Iu[n]=!0,console.warn(n))}function um(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function fm(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dm(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var lt={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(n.r=li(n.r),n.g=li(n.g),n.b=li(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(n.r=Hs(n.r),n.g=Hs(n.g),n.b=Hs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pi?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Du=[.64,.33,.3,.6,.15,.06],Lu=[.2126,.7152,.0722],Uu=[.3127,.329],Nu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[sr]:{primaries:Du,whitePoint:Uu,transfer:Fa,toXYZ:Nu,fromXYZ:zu,luminanceCoefficients:Lu,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Du,whitePoint:Uu,transfer:xt,toXYZ:Nu,fromXYZ:zu,luminanceCoefficients:Lu,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});var bs,Ic=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=na("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pm=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ic.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mm=0,fn=class n extends zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qi,s=Qi,r=Wn,o=es,a=Mn,l=On,c=n.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=cs(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=kf;fn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(d+1)/2,O=(p+1)/2,P=(u+f)/4,T=(h+x)/4,E=(g+m)/4;return v>y&&v>O?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=P/i,r=T/i):y>O?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=P/s,r=E/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=T/r,s=E/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Dc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},sa=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*x,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let O=Math.sqrt(v),P=Math.atan2(O,p*w);m=Math.sin(m*P)/O,a=Math.sin(a*P)/O}let y=a*w;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let O=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=O,c*=O,u*=O,h*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gl=new D,Ou=new Yn,hi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Mo.subVectors(this.max,Mr),ws.subVectors(e.a,Mr),Ss.subVectors(e.b,Mr),Es.subVectors(e.c,Mr),Si.subVectors(Ss,ws),Ei.subVectors(Es,Ss),Wi.subVectors(ws,Es);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Wi.z,Wi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Wi.z,0,-Wi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Wi.y,Wi.x,0];return!xl(t,ws,Ss,Es,Mo)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,ws,Ss,Es,Mo))?!1:(bo.crossVectors(Si,Ei),t=[bo.x,bo.y,bo.z],xl(t,ws,Ss,Es,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ei=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,_o=new hi,ws=new D,Ss=new D,Es=new D,Si=new D,Ei=new D,Wi=new D,Mr=new D,Mo=new D,bo=new D,Xi=new D;function xl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var gm=new hi,br=new D,vl=new D,ui=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(vl)),this.expandByPoint(br.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new D,yl=new D,wo=new D,Ti=new D,_l=new D,So=new D,Ml=new D,kr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yl.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=Ti.dot(this.direction),l=-Ti.dot(wo),c=Ti.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yl).addScaledVector(wo,f),d}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){_l.subVectors(t,e),So.subVectors(i,e),Ml.crossVectors(_l,So);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);let l=a*this.direction.dot(So.crossVectors(Ti,So));if(l<0)return null;let c=a*this.direction.dot(_l.cross(Ti));if(c<0||l+c>o)return null;let u=-a*Ti.dot(Ml);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,vm)}lookAt(e,t,i){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ai.crossVectors(i,yn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ai.crossVectors(i,yn)),Ai.normalize(),Eo.crossVectors(yn,Ai),s[0]=Ai.x,s[4]=Eo.x,s[8]=yn.x,s[1]=Ai.y,s[5]=Eo.y,s[9]=yn.y,s[2]=Ai.z,s[6]=Eo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],w=i[3],v=i[7],y=i[11],O=i[15],P=s[0],T=s[4],E=s[8],M=s[12],_=s[1],R=s[5],G=s[9],U=s[13],N=s[2],Y=s[6],V=s[10],te=s[14],Z=s[3],re=s[7],me=s[11],_e=s[15];return r[0]=o*P+a*_+l*N+c*Z,r[4]=o*T+a*R+l*Y+c*re,r[8]=o*E+a*G+l*V+c*me,r[12]=o*M+a*U+l*te+c*_e,r[1]=u*P+h*_+f*N+d*Z,r[5]=u*T+h*R+f*Y+d*re,r[9]=u*E+h*G+f*V+d*me,r[13]=u*M+h*U+f*te+d*_e,r[2]=g*P+x*_+m*N+p*Z,r[6]=g*T+x*R+m*Y+p*re,r[10]=g*E+x*G+m*V+p*me,r[14]=g*M+x*U+m*te+p*_e,r[3]=w*P+v*_+y*N+O*Z,r[7]=w*T+v*R+y*Y+O*re,r[11]=w*E+v*G+y*V+O*me,r[15]=w*M+v*U+y*te+O*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,O=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,P=t*w+i*v+s*y+r*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/P;return e[0]=w*T,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*T,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*T,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*T,e[4]=v*T,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*T,e[8]=y*T,e[9]=(g*h*r-u*x*r-g*i*d+t*x*d+u*i*p-t*h*p)*T,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*T,e[12]=O*T,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*T,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,w=l*c,v=l*u,y=l*h,O=i.x,P=i.y,T=i.z;return s[0]=(1-(x+p))*O,s[1]=(d+y)*O,s[2]=(g-v)*O,s[3]=0,s[4]=(d-y)*P,s[5]=(1-(f+p))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(g+v)*T,s[9]=(m-w)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,u=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ai){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),d,g;if(a===ai)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ta)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ai){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u,g,x;if(a===ai)g=(o+r)*h,x=-2*h;else if(a===ta)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ts=new D,Nn=new Ke,xm=new D(0,0,0),vm=new D(1,1,1),Ai=new D,Eo=new D,yn=new D,Fu=new Ke,ku=new Yn,Rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ym=0,Bu=new D,As=new Yn,ni=new Ke,To=new D,wr=new D,_m=new D,Mm=new Yn,Hu=new D(1,0,0),Vu=new D(0,1,0),Gu=new D(0,0,1),Wu={type:"added"},bm={type:"removed"},Rs={type:"childadded",child:null},bl={type:"childremoved",child:null},Ut=class n extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new Rn,i=new Yn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new tt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?To.copy(e):To.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(wr,To,this.up):ni.lookAt(To,wr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ni),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bm),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new D,ii=new D,wl=new D,si=new D,Cs=new D,Ps=new D,Xu=new D,Sl=new D,El=new D,Tl=new D,Al=new _t,Rl=new _t,Cl=new _t,Ji=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),ii.subVectors(i,t),wl.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(ii),l=zn.dot(wl),c=ii.dot(ii),u=ii.dot(wl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Al.setScalar(0),Rl.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Al,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),ii.subVectors(e,t),zn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),zn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Cs.subVectors(s,i),Ps.subVectors(r,i),Sl.subVectors(e,i);let l=Cs.dot(Sl),c=Ps.dot(Sl);if(l<=0&&c<=0)return t.copy(i);El.subVectors(e,s);let u=Cs.dot(El),h=Ps.dot(El);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cs,o);Tl.subVectors(e,r);let d=Cs.dot(Tl),g=Ps.dot(Tl);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ps,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Xu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Xu,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Ph(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pl(o,r,e+1/3),this.g=Pl(o,r,e),this.b=Pl(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=Kf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return lt.fromWorkingColorSpace(en.copy(this),e),Math.round(Ft(en.r*255,0,255))*65536+Math.round(Ft(en.g*255,0,255))*256+Math.round(Ft(en.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(en.copy(this),t);let i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=un){lt.fromWorkingColorSpace(en.copy(this),e);let t=en.r,i=en.g,s=en.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Ao);let i=Dr(Ri.h,Ao.h,t),s=Dr(Ri.s,Ao.s,t),r=Dr(Ri.l,Ao.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ue;Ue.NAMES=Kf;var wm=0,qn=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=cs(),this.name="",this.blending=ks,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=ql,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==An&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yt=class extends qn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new D,Ro=new oe,Dt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ru,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ru&&(e.usage=this.usage),e}};var oa=class extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var aa=class extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sm=0,Tn=new Ke,Il=new Ut,Is=new D,_n=new hi,Sr=new hi,Gt=new D,Rt=class n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?aa:oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(_n.min,Sr.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,Sr.max),_n.expandByPoint(Gt)):(_n.expandByPoint(Sr.min),_n.expandByPoint(Sr.max))}_n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Gt.add(Is)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new D,l[E]=new D;let c=new D,u=new D,h=new D,f=new oe,d=new oe,g=new oe,x=new D,m=new D;function p(E,M,_){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[E].add(x),a[M].add(x),a[_].add(x),l[E].add(m),l[M].add(m),l[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,M=w.length;E<M;++E){let _=w[E],R=_.start,G=_.count;for(let U=R,N=R+G;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let v=new D,y=new D,O=new D,P=new D;function T(E){O.fromBufferAttribute(s,E),P.copy(O);let M=a[E];v.copy(M),v.sub(O.multiplyScalar(O.dot(M))).normalize(),y.crossVectors(P,M);let R=y.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,R)}for(let E=0,M=w.length;E<M;++E){let _=w[E],R=_.start,G=_.count;for(let U=R,N=R+G;U<N;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yu=new Ke,Yi=new kr,Co=new ui,qu=new D,Po=new D,Io=new D,Do=new D,Dl=new D,Lo=new D,Zu=new D,Uo=new D,Le=class extends Ut{constructor(e=new Rt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Dl.fromBufferAttribute(h,e),o?Lo.addScaledVector(Dl,u):Lo.addScaledVector(Dl.sub(t),u))}t.add(Lo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Co.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Co,qu)===null||Yi.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Yu.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,O=v;y<O;y+=3){let P=a.getX(y),T=a.getX(y+1),E=a.getX(y+2);s=No(this,p,e,i,c,u,h,P,T,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let w=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=No(this,o,e,i,c,u,h,w,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,O=v;y<O;y+=3){let P=y,T=y+1,E=y+2;s=No(this,p,e,i,c,u,h,P,T,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let w=m,v=m+1,y=m+2;s=No(this,o,e,i,c,u,h,w,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Em(n,e,t,i,s,r,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Di,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function No(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Po),n.getVertexPosition(l,Io),n.getVertexPosition(c,Do);let u=Em(n,e,t,i,Po,Io,Do,Zu);if(u){let h=new D;Ji.getBarycoord(Zu,Po,Io,Do,h),s&&(u.uv=Ji.getInterpolatedAttribute(s,a,l,c,h,new oe)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,a,l,c,h,new oe)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};Ji.getNormal(Po,Io,Do,f.normal),u.face=f,u.barycoord=h}return u}var Fn=class n extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(x,m,p,w,v,y,O,P,T,E,M){let _=y/T,R=O/E,G=y/2,U=O/2,N=P/2,Y=T+1,V=E+1,te=0,Z=0,re=new D;for(let me=0;me<V;me++){let _e=me*R-U;for(let Ve=0;Ve<Y;Ve++){let rt=Ve*_-G;re[x]=rt*w,re[m]=_e*v,re[p]=N,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[p]=P>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ve/T),h.push(1-me/E),te+=1}}for(let me=0;me<E;me++)for(let _e=0;_e<T;_e++){let Ve=f+_e+Y*me,rt=f+_e+Y*(me+1),K=f+(_e+1)+Y*(me+1),he=f+(_e+1)+Y*me;l.push(Ve,rt,he),l.push(rt,K,he),Z+=6}a.addGroup(d,Z,M),d+=Z,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){let e={};for(let t=0;t<n.length;t++){let i=Ys(n[t]);for(let s in i)e[s]=i[s]}return e}function Tm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var pn={clone:Ys,merge:on},Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends qn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},la=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new D,$u=new oe,ju=new oe,tn=class extends la{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,$u,ju),t.subVectors(ju,$u)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Ls=1,Uc=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Ds,Ls,e,t);s.layers=this.layers,this.add(s);let r=new tn(Ds,Ls,e,t);r.layers=this.layers,this.add(r);let o=new tn(Ds,Ls,e,t);o.layers=this.layers,this.add(o);let a=new tn(Ds,Ls,e,t);a.layers=this.layers,this.add(a);let l=new tn(Ds,Ls,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ds,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ca=class extends fn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nc=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ca(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:kt});r.uniforms.tEquirect.value=t;let o=new Le(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Wn),new Uc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ll=new D,Cm=new D,Pm=new tt,oi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ll.subVectors(i,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pm.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new ui,zo=new D,Br=class{constructor(e=new oi,t=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-d,y-p).normalize(),i[1].setComponents(l+r,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+u,m+g,y+w).normalize(),i[3].setComponents(l-o,f-u,m-g,y-w).normalize(),i[4].setComponents(l-a,f-h,m-x,y-v).normalize(),t===ai)i[5].setComponents(l+a,f+h,m+x,y+v).normalize();else if(t===ta)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Im(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Zn=class n extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let w=p*f-o;for(let v=0;v<c;v++){let y=v*h-r;g.push(y,-w,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){let v=w+c*p,y=w+c*(p+1),O=w+1+c*(p+1),P=w+1+c*p;d.push(v,y,P),d.push(y,O,P)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
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
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,n0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i0=`vec3 transformedNormal = objectNormal;
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
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,P0=`struct PhysicalMaterial {
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
}`,I0=`
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H0=`#if defined( USE_POINTS_UV )
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
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gg=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Kg=`#define NORMAL
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
}`,Qg=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,nx=`#define STANDARD
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
}`,ix=`#define TOON
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
}`,sx=`#define TOON
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
}`,rx=`uniform float size;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Dm,alphahash_pars_fragment:Lm,alphamap_fragment:Um,alphamap_pars_fragment:Nm,alphatest_fragment:zm,alphatest_pars_fragment:Om,aomap_fragment:Fm,aomap_pars_fragment:km,batching_pars_vertex:Bm,batching_vertex:Hm,begin_vertex:Vm,beginnormal_vertex:Gm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:jm,color_fragment:Jm,color_pars_fragment:Km,color_pars_vertex:Qm,color_vertex:e0,common:t0,cube_uv_reflection_fragment:n0,defaultnormal_vertex:i0,displacementmap_pars_vertex:s0,displacementmap_vertex:r0,emissivemap_fragment:o0,emissivemap_pars_fragment:a0,colorspace_fragment:l0,colorspace_pars_fragment:c0,envmap_fragment:h0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:S0,envmap_vertex:p0,fog_vertex:m0,fog_pars_vertex:g0,fog_fragment:x0,fog_pars_fragment:v0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:_0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:b0,lights_pars_begin:w0,lights_toon_fragment:E0,lights_toon_pars_fragment:T0,lights_phong_fragment:A0,lights_phong_pars_fragment:R0,lights_physical_fragment:C0,lights_physical_pars_fragment:P0,lights_fragment_begin:I0,lights_fragment_maps:D0,lights_fragment_end:L0,logdepthbuf_fragment:U0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:O0,map_fragment:F0,map_pars_fragment:k0,map_particle_fragment:B0,map_particle_pars_fragment:H0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:G0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:Y0,morphtarget_pars_vertex:q0,morphtarget_vertex:Z0,normal_fragment_begin:$0,normal_fragment_maps:j0,normal_pars_fragment:J0,normal_pars_vertex:K0,normal_vertex:Q0,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:sg,opaque_fragment:rg,packing:og,premultiplied_alpha_fragment:ag,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:hg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:xg,skinning_pars_vertex:vg,skinning_vertex:yg,skinnormal_vertex:_g,specularmap_fragment:Mg,specularmap_pars_fragment:bg,tonemapping_fragment:wg,tonemapping_pars_fragment:Sg,transmission_fragment:Eg,transmission_pars_fragment:Tg,uv_pars_fragment:Ag,uv_pars_vertex:Rg,uv_vertex:Cg,worldpos_vertex:Pg,background_vert:Ig,background_frag:Dg,backgroundCube_vert:Lg,backgroundCube_frag:Ug,cube_vert:Ng,cube_frag:zg,depth_vert:Og,depth_frag:Fg,distanceRGBA_vert:kg,distanceRGBA_frag:Bg,equirect_vert:Hg,equirect_frag:Vg,linedashed_vert:Gg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:Yg,meshlambert_vert:qg,meshlambert_frag:Zg,meshmatcap_vert:$g,meshmatcap_frag:jg,meshnormal_vert:Jg,meshnormal_frag:Kg,meshphong_vert:Qg,meshphong_frag:ex,meshphysical_vert:tx,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:sx,points_vert:rx,points_frag:ox,shadow_vert:ax,shadow_frag:lx,sprite_vert:cx,sprite_frag:hx},ye={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:on([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:on([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:on([ye.points,ye.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:on([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:on([ye.common,ye.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:on([ye.sprite,ye.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:on([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:on([ye.lights,ye.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Oo={r:0,b:0,g:0},Zi=new Rn,ux=new Ke;function fx(n,e,t,i,s,r,o){let a=new Ue(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?t:e).get(v)),v}function x(w){let v=!1,y=g(w);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===Oa)?(u===void 0&&(u=new Le(new Fn(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:Ys(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(v.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Zi)),u.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Le(new Zn(2,2),new Mt({name:"BackgroundMaterial",uniforms:Ys(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,v){w.getRGB(Oo,Qf(n)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:x,addToRenderList:m}}function dx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(_,R,G,U,N){let Y=!1,V=h(U,G,R);r!==V&&(r=V,c(r.object)),Y=d(_,U,G,N),Y&&g(_,U,G,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(_,R,G,U),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function h(_,R,G){let U=G.wireframe===!0,N=i[_.id];N===void 0&&(N={},i[_.id]=N);let Y=N[R.id];Y===void 0&&(Y={},N[R.id]=Y);let V=Y[U];return V===void 0&&(V=f(l()),Y[U]=V),V}function f(_){let R=[],G=[],U=[];for(let N=0;N<t;N++)R[N]=0,G[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:U,object:_,attributes:{},index:null}}function d(_,R,G,U){let N=r.attributes,Y=R.attributes,V=0,te=G.getAttributes();for(let Z in te)if(te[Z].location>=0){let me=N[Z],_e=Y[Z];if(_e===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(_,R,G,U){let N={},Y=R.attributes,V=0,te=G.getAttributes();for(let Z in te)if(te[Z].location>=0){let me=Y[Z];me===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),N[Z]=_e,V++}r.attributes=N,r.attributesNum=V,r.index=U}function x(){let _=r.newAttributes;for(let R=0,G=_.length;R<G;R++)_[R]=0}function m(_){p(_,0)}function p(_,R){let G=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;G[_]=1,U[_]===0&&(n.enableVertexAttribArray(_),U[_]=1),N[_]!==R&&(n.vertexAttribDivisor(_,R),N[_]=R)}function w(){let _=r.newAttributes,R=r.enabledAttributes;for(let G=0,U=R.length;G<U;G++)R[G]!==_[G]&&(n.disableVertexAttribArray(G),R[G]=0)}function v(_,R,G,U,N,Y,V){V===!0?n.vertexAttribIPointer(_,R,G,N,Y):n.vertexAttribPointer(_,R,G,U,N,Y)}function y(_,R,G,U){x();let N=U.attributes,Y=G.getAttributes(),V=R.defaultAttributeValues;for(let te in Y){let Z=Y[te];if(Z.location>=0){let re=N[te];if(re===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){let me=re.normalized,_e=re.itemSize,Ve=e.get(re);if(Ve===void 0)continue;let rt=Ve.buffer,K=Ve.type,he=Ve.bytesPerElement,Ae=K===n.INT||K===n.UNSIGNED_INT||re.gpuType===bh;if(re.isInterleavedBufferAttribute){let ue=re.data,Ie=ue.stride,He=re.offset;if(ue.isInstancedInterleavedBuffer){for(let ke=0;ke<Z.locationSize;ke++)p(Z.location+ke,ue.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<Z.locationSize;ke++)m(Z.location+ke);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ke=0;ke<Z.locationSize;ke++)v(Z.location+ke,_e/Z.locationSize,K,me,Ie*he,(He+_e/Z.locationSize*ke)*he,Ae)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<Z.locationSize;ue++)p(Z.location+ue,re.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<Z.locationSize;ue++)m(Z.location+ue);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ue=0;ue<Z.locationSize;ue++)v(Z.location+ue,_e/Z.locationSize,K,me,_e*he,_e/Z.locationSize*ue*he,Ae)}}else if(V!==void 0){let me=V[te];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(Z.location,me);break;case 3:n.vertexAttrib3fv(Z.location,me);break;case 4:n.vertexAttrib4fv(Z.location,me);break;default:n.vertexAttrib1fv(Z.location,me)}}}}w()}function O(){E();for(let _ in i){let R=i[_];for(let G in R){let U=R[G];for(let N in U)u(U[N].object),delete U[N];delete R[G]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;let R=i[_.id];for(let G in R){let U=R[G];for(let N in U)u(U[N].object),delete U[N];delete R[G]}delete i[_.id]}function T(_){for(let R in i){let G=i[R];if(G[_.id]===void 0)continue;let U=G[_.id];for(let N in U)u(U[N].object),delete U[N];delete G[_.id]}}function E(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function px(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Mn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let E=T===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==On&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xn&&!E)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:O,maxSamples:P}}function gx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new oi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:i,v=w*4,y=p.clippingState||null;l.value=y,y=u(g,f,v,d);for(let O=0;O!==v;++O)y[O]=t[O];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xx(n){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=Ws:a===nc&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===tc||a===nc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Nc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var qs=class extends la{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Os=4,Ju=[.125,.215,.35,.446,.526,.582],Ki=20,Ul=new qs,Ku=new Ue,Nl=null,zl=0,Ol=0,Fl=!1,ji=(1+Math.sqrt(5))/2,Us=1/ji,Qu=[new D(-ji,Us,0),new D(ji,Us,0),new D(-Us,0,ji),new D(Us,0,ji),new D(0,ji,-Us),new D(0,ji,Us),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Nl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,zl,Ol),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:dn,format:Mn,colorSpace:sr,depthBuffer:!1},s=ef(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vx(r)),this._blurMaterial=yx(r,e,t)}return s}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Ul)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ku),u.toneMapping=Ii,u.autoClear=!1;let d=new Yt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Le(new Fn,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Ku),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Fo(s,w*v,p>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ws||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Fo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ul)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qu[(s-r-1)%Qu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Le(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let p=[],w=0;for(let T=0;T<Ki;++T){let E=T/x,M=Math.exp(-E*E/2);p.push(M),T===0?w+=M:T<m&&(w+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let y=this._sizeLods[s],O=3*y*(s>v-Os?s-v+Os:0),P=4*(this._cubeSize-y);Fo(t,O,P,3*y,2*y),l.setRenderTarget(t),l.render(h,Ul)}};function vx(n){let e=[],t=[],i=[],s=n,r=n-Os+1+Ju.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Os?l=Ju[o-n+Os-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*d),v=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let P=0;P<d;P++){let T=P%3*2/3-1,E=P>2?0:-1,M=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];w.set(M,x*g*P),v.set(f,m*g*P);let _=[P,P,P,P,P,P];y.set(_,p*g*P)}let O=new Rt;O.setAttribute("position",new Dt(w,x)),O.setAttribute("uv",new Dt(v,m)),O.setAttribute("faceIndex",new Dt(y,p)),e.push(O),s>Os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ef(n,e,t){let i=new Xt(n,e,t);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yx(n,e,t){let i=new Float32Array(Ki),s=new D(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function tf(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function nf(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function _x(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===tc||l===nc,u=l===Ws||l===Xs;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Zs(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new Zs(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Mx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bx(n,e,t,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){let f=[],d=h.index,g=h.attributes.position,x=0;if(d!==null){let w=d.array;x=d.version;for(let v=0,y=w.length;v<y;v+=3){let O=w[v+0],P=w[v+1],T=w[v+2];f.push(O,P,P,T,T,O)}}else if(g!==void 0){let w=g.array;x=g.version;for(let v=0,y=w.length/3-1;v<y;v+=3){let O=v+0,P=v+1,T=v+2;f.push(O,P,P,T,T,O)}}else return;let m=new(Jf(f)?aa:oa)(f,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wx(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*x[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ex(n,e,t){let i=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,O=1;y>e.maxTextureSize&&(O=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let P=new Float32Array(y*O*4*h),T=new sa(P,y,O,h);T.type=Xn,T.needsUpdate=!0;let E=v*4;for(let _=0;_<h;_++){let R=m[_],G=p[_],U=w[_],N=y*O*4*_;for(let Y=0;Y<R.count;Y++){let V=Y*E;d===!0&&(s.fromBufferAttribute(R,Y),P[N+V+0]=s.x,P[N+V+1]=s.y,P[N+V+2]=s.z,P[N+V+3]=0),g===!0&&(s.fromBufferAttribute(G,Y),P[N+V+4]=s.x,P[N+V+5]=s.y,P[N+V+6]=s.z,P[N+V+7]=0),x===!0&&(s.fromBufferAttribute(U,Y),P[N+V+8]=s.x,P[N+V+9]=s.y,P[N+V+10]=s.z,P[N+V+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new oe(y,O)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Tx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $s=class extends fn{constructor(e,t,i,s,r,o,a,l,c,u=Bs){if(u!==Bs&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bs&&(i=ts),i===void 0&&u===Ni&&(i=Ui),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},td=new fn,sf=new $s(1,1),nd=new sa,id=new Lc,sd=new ca,rf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ka(n,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function Ix(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Ht(t,i)}}function Dx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),Ht(t,i)}}function Lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Ht(t,i)}}function Ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function Fx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Vx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sf.compareFunction=$f,r=sf):r=td,t.setTexture2D(e||r,s)}function Gx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||id,s)}function Wx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sd,s)}function Xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nd,s)}function Yx(n){switch(n){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Ix;case 35675:return Dx;case 35676:return Lx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return zx;case 35669:case 35673:return Ox;case 5125:return Fx;case 36294:return kx;case 36295:return Bx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function qx(n,e){n.uniform1fv(this.addr,e)}function Zx(n,e){let t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function $x(n,e){let t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function jx(n,e){let t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Jx(n,e){let t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kx(n,e){let t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){let t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ev(n,e){n.uniform1iv(this.addr,e)}function tv(n,e){n.uniform2iv(this.addr,e)}function nv(n,e){n.uniform3iv(this.addr,e)}function iv(n,e){n.uniform4iv(this.addr,e)}function sv(n,e){n.uniform1uiv(this.addr,e)}function rv(n,e){n.uniform2uiv(this.addr,e)}function ov(n,e){n.uniform3uiv(this.addr,e)}function av(n,e){n.uniform4uiv(this.addr,e)}function lv(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||td,r[o])}function cv(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||id,r[o])}function hv(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sd,r[o])}function uv(n,e,t){let i=this.cache,s=e.length,r=ka(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nd,r[o])}function fv(n){switch(n){case 5126:return qx;case 35664:return Zx;case 35665:return $x;case 35666:return jx;case 35674:return Jx;case 35675:return Kx;case 35676:return Qx;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}var zc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yx(t.type)}},Oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}},Fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},kl=/(\w+)(\])?(\[|\.)?/g;function hf(n,e){n.seq.push(e),n.map[e.id]=e}function dv(n,e,t){let i=n.name,s=i.length;for(kl.lastIndex=0;;){let r=kl.exec(i),o=kl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hf(t,c===void 0?new zc(a,n,e):new Oc(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Fc(a),hf(t,h)),t=h}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pv=37297,mv=0;function gv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ff=new tt;function xv(n){lt._getMatrix(ff,lt.workingColorSpace,n);let e=`mat3( ${ff.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function df(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gv(n.getShaderSource(e),o)}else return s}function vv(n,e){let t=xv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yv(n,e){let t;switch(e){case xh:t="Linear";break;case vh:t="Reinhard";break;case yh:t="Cineon";break;case _h:t="ACESFilmic";break;case Mh:t="AgX";break;case $r:t="Neutral";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new D;function _v(){lt.getLuminanceCoefficients(ko);let n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function bv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pr(n){return n!==""}function pf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(Sv,Tv)}var Ev=new Map;function Tv(n,e){let t=nt[e];if(t===void 0){let i=Ev.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}var Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace(Av,Rv)}function Rv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Cv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===La?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ua?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Pv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Xs&&(e="ENVMAP_MODE_REFRACTION"),e}function Dv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case Up:e="ENVMAP_BLENDING_MIX";break;case Np:e="ENVMAP_BLENDING_ADD";break}return e}function Lv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Uv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Cv(t),c=Pv(t),u=Iv(t),h=Dv(t),f=Lv(t),d=Mv(t),g=bv(r),x=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,vv("linearToOutputTexel",t.outputColorSpace),_v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=kc(o),o=pf(o,t),o=mf(o,t),a=kc(a),a=pf(a,t),a=mf(a,t),o=gf(o),a=gf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=w+m+o,y=w+p+a,O=uf(s,s.VERTEX_SHADER,v),P=uf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,O),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(O).trim(),N=s.getShaderInfoLog(P).trim(),Y=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,O,P);else{let te=df(s,O,"vertex"),Z=df(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+te+`
`+Z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||N==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:G,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(O),s.deleteShader(P),E=new Vs(s,x),M=wv(s,x)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,pv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=P,this}var Nv=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hc(e),t.set(e,i)),i}},Hc=class{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}};function zv(n,e,t,i,s,r,o){let a=new ra,l=new Bc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,R,G,U){let N=G.fog,Y=U.geometry,V=M.isMeshStandardMaterial?G.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),Z=te&&te.mapping===Oa?te.image.height:null,re=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=me!==void 0?me.length:0,Ve=0;Y.morphAttributes.position!==void 0&&(Ve=1),Y.morphAttributes.normal!==void 0&&(Ve=2),Y.morphAttributes.color!==void 0&&(Ve=3);let rt,K,he,Ae;if(re){let yt=Gn[re];rt=yt.vertexShader,K=yt.fragmentShader}else rt=M.vertexShader,K=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);let ue=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),He=U.isInstancedMesh===!0,ke=U.isBatchedMesh===!0,ot=!!M.map,ne=!!M.matcap,fe=!!te,I=!!M.aoMap,De=!!M.lightMap,le=!!M.bumpMap,Ee=!!M.normalMap,pe=!!M.displacementMap,Ge=!!M.emissiveMap,be=!!M.metalnessMap,A=!!M.roughnessMap,b=M.anisotropy>0,q=M.clearcoat>0,Q=M.dispersion>0,se=M.iridescence>0,ee=M.sheen>0,Pe=M.transmission>0,ge=b&&!!M.anisotropyMap,Me=q&&!!M.clearcoatMap,Je=q&&!!M.clearcoatNormalMap,ce=q&&!!M.clearcoatRoughnessMap,Re=se&&!!M.iridescenceMap,Xe=se&&!!M.iridescenceThicknessMap,qe=ee&&!!M.sheenColorMap,Ce=ee&&!!M.sheenRoughnessMap,at=!!M.specularMap,Ze=!!M.specularColorMap,ft=!!M.specularIntensityMap,F=Pe&&!!M.transmissionMap,xe=Pe&&!!M.thicknessMap,J=!!M.gradientMap,ie=!!M.alphaMap,Te=M.alphaTest>0,we=!!M.alphaHash,Qe=!!M.extensions,It=Ii;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(It=n.toneMapping);let Kt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:K,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ke,batchingColor:ke&&U._colorsTexture!==null,instancing:He,instancingColor:He&&U.instanceColor!==null,instancingMorph:He&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:sr,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:ne,envMap:fe,envMapMode:fe&&te.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:De,bumpMap:le,normalMap:Ee,displacementMap:f&&pe,emissiveMap:Ge,normalMapObjectSpace:Ee&&M.normalMapType===Bp,normalMapTangentSpace:Ee&&M.normalMapType===Ch,metalnessMap:be,roughnessMap:A,anisotropy:b,anisotropyMap:ge,clearcoat:q,clearcoatMap:Me,clearcoatNormalMap:Je,clearcoatRoughnessMap:ce,dispersion:Q,iridescence:se,iridescenceMap:Re,iridescenceThicknessMap:Xe,sheen:ee,sheenColorMap:qe,sheenRoughnessMap:Ce,specularMap:at,specularColorMap:Ze,specularIntensityMap:ft,transmission:Pe,transmissionMap:F,thicknessMap:xe,gradientMap:J,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Te,alphaHash:we,combine:M.combine,mapUv:ot&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:De&&x(M.lightMap.channel),bumpMapUv:le&&x(M.bumpMap.channel),normalMapUv:Ee&&x(M.normalMap.channel),displacementMapUv:pe&&x(M.displacementMap.channel),emissiveMapUv:Ge&&x(M.emissiveMap.channel),metalnessMapUv:be&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:ge&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Je&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(M.sheenRoughnessMap.channel),specularMapUv:at&&x(M.specularMap.channel),specularColorMapUv:Ze&&x(M.specularColorMap.channel),specularIntensityMapUv:ft&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:ie&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ee||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(ot||ie),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ve,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:Ge&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)_.push(R),_.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(_,M),v(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function w(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function v(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let _=g[M.type],R;if(_){let G=Gn[_];R=pn.clone(G.uniforms)}else R=M.uniforms;return R}function O(M,_){let R;for(let G=0,U=u.length;G<U;G++){let N=u[G];if(N.cacheKey===_){R=N,++R.usedTimes;break}}return R===void 0&&(R=new Uv(n,_,M,r),u.push(R)),R}function P(M){if(--M.usedTimes===0){let _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:O,releaseProgram:P,releaseShaderCache:T,programs:u,dispose:E}}function Ov(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,x,m){let p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Fv),i.length>1&&i.sort(f||vf),s.length>1&&s.sort(f||vf)}function u(){for(let h=e,f=n.length;h<f;h++){let d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function kv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Hv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Vv=0;function Gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wv(n){let e=new Bv,t=Hv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new Ke,o=new Ke;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,w=0,v=0,y=0,O=0,P=0,T=0;c.sort(Gv);for(let M=0,_=c.length;M<_;M++){let R=c[M],G=R.color,U=R.intensity,N=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=G.r*U,h+=G.g*U,f+=G.b*U;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],U);T++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,Z=t.get(R);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=R.shadow.matrix,w++}i.directional[d]=V,d++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(G).multiplyScalar(U),V.distance=N,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[x]=V;let te=R.shadow;if(R.map&&(i.spotLightMap[O]=R.map,O++,te.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[x]=te.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=Y,y++}x++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(G).multiplyScalar(U),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let te=R.shadow,Z=t.get(R);Z.shadowIntensity=te.intensity,Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,Z.shadowCameraNear=te.camera.near,Z.shadowCameraFar=te.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,v++}i.point[g]=V,g++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(U),V.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let E=i.hash;(E.directionalLength!==d||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==w||E.numPointShadows!==v||E.numSpotShadows!==y||E.numSpotMaps!==O||E.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+O-P,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=T,E.directionalLength=d,E.pointLength=g,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=w,E.numPointShadows=v,E.numSpotShadows=y,E.numSpotMaps=O,E.numLightProbes=T,i.version=Vv++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let v=c[p];if(v.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function _f(n){let e=new Wv(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Xv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _f(n),e.set(s,[a])):r>=o.length?(a=new _f(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Vc=class extends qn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gc=class extends qn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`;function Zv(n,e,t){let i=new Br,s=new oe,r=new oe,o=new _t,a=new Vc({depthPacking:kp}),l=new Gc,c={},u=t.maxTextureSize,h={[Di]:Wt,[Wt]:Di,[zt]:zt},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Yv,fragmentShader:qv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let p=this.type;this.render=function(P,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let M=n.getRenderTarget(),_=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),G=n.state;G.setBlending(kt),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let U=p!==ri&&this.type===ri,N=p===ri&&this.type!==ri;for(let Y=0,V=P.length;Y<V;Y++){let te=P[Y],Z=te.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let re=Z.getFrameExtents();if(s.multiply(re),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,Z.mapSize.y=r.y)),Z.map===null||U===!0||N===!0){let _e=this.type!==ri?{minFilter:nn,magFilter:nn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Xt(s.x,s.y,_e),Z.map.texture.name=te.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let me=Z.getViewportCount();for(let _e=0;_e<me;_e++){let Ve=Z.getViewport(_e);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),G.viewport(o),Z.updateMatrices(te,_e),i=Z.getFrustum(),y(T,E,Z.camera,te,this.type)}Z.isPointLightShadow!==!0&&this.type===ri&&w(Z,E),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,_,R)};function w(P,T){let E=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xt(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(T,null,E,f,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(T,null,E,d,x,null)}function v(P,T,E,M){let _=null,R=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)_=R;else if(_=E.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=_.uuid,U=T.uuid,N=c[G];N===void 0&&(N={},c[G]=N);let Y=N[U];Y===void 0&&(Y=_.clone(),N[U]=Y,T.addEventListener("dispose",O)),_=Y}if(_.visible=T.visible,_.wireframe=T.wireframe,M===ri?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let G=n.properties.get(_);G.light=E}return _}function y(P,T,E,M,_){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===ri)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);let U=e.update(P),N=P.material;if(Array.isArray(N)){let Y=U.groups;for(let V=0,te=Y.length;V<te;V++){let Z=Y[V],re=N[Z.materialIndex];if(re&&re.visible){let me=v(P,re,M,_);P.onBeforeShadow(n,P,T,E,U,me,Z),n.renderBufferDirect(E,null,U,me,P,Z),P.onAfterShadow(n,P,T,E,U,me,Z)}}}else if(N.visible){let Y=v(P,N,M,_);P.onBeforeShadow(n,P,T,E,U,Y,null),n.renderBufferDirect(E,null,U,Y,P,null),P.onAfterShadow(n,P,T,E,U,Y,null)}}let G=P.children;for(let U=0,N=G.length;U<N;U++)y(G[U],T,E,M,_)}function O(P){P.target.removeEventListener("dispose",O);for(let E in c){let M=c[E],_=P.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var $v={[Zl]:$l,[jl]:Ql,[Jl]:ec,[Gs]:Kl,[$l]:Zl,[Ql]:jl,[ec]:Jl,[Kl]:Gs};function jv(n,e){function t(){let F=!1,xe=new _t,J=null,ie=new _t(0,0,0,0);return{setMask:function(Te){J!==Te&&!F&&(n.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){F=Te},setClear:function(Te,we,Qe,It,Kt){Kt===!0&&(Te*=It,we*=It,Qe*=It),xe.set(Te,we,Qe,It),ie.equals(xe)===!1&&(n.clearColor(Te,we,Qe,It),ie.copy(xe))},reset:function(){F=!1,J=null,ie.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,J=null,ie=null,Te=null;return{setReversed:function(we){if(xe!==we){let Qe=e.get("EXT_clip_control");xe?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let It=Te;Te=null,this.setClear(It)}xe=we},getReversed:function(){return xe},setTest:function(we){we?ue(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(we){J!==we&&!F&&(n.depthMask(we),J=we)},setFunc:function(we){if(xe&&(we=$v[we]),ie!==we){switch(we){case Zl:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case jl:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Kl:n.depthFunc(n.GEQUAL);break;case Ql:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=we}},setLocked:function(we){F=we},setClear:function(we){Te!==we&&(xe&&(we=1-we),n.clearDepth(we),Te=we)},reset:function(){F=!1,J=null,ie=null,Te=null,xe=!1}}}function s(){let F=!1,xe=null,J=null,ie=null,Te=null,we=null,Qe=null,It=null,Kt=null;return{setTest:function(yt){F||(yt?ue(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(yt){xe!==yt&&!F&&(n.stencilMask(yt),xe=yt)},setFunc:function(yt,Dn,Kn){(J!==yt||ie!==Dn||Te!==Kn)&&(n.stencilFunc(yt,Dn,Kn),J=yt,ie=Dn,Te=Kn)},setOp:function(yt,Dn,Kn){(we!==yt||Qe!==Dn||It!==Kn)&&(n.stencilOp(yt,Dn,Kn),we=yt,Qe=Dn,It=Kn)},setLocked:function(yt){F=yt},setClear:function(yt){Kt!==yt&&(n.clearStencil(yt),Kt=yt)},reset:function(){F=!1,xe=null,J=null,ie=null,Te=null,we=null,Qe=null,It=null,Kt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,w=null,v=null,y=null,O=null,P=null,T=new Ue(0,0,0),E=0,M=!1,_=null,R=null,G=null,U=null,N=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=te>=1):Z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=te>=2);let re=null,me={},_e=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),rt=new _t().fromArray(_e),K=new _t().fromArray(Ve);function he(F,xe,J,ie){let Te=new Uint8Array(4),we=n.createTexture();n.bindTexture(F,we),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<J;Qe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(xe+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return we}let Ae={};Ae[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Gs),le(!1),Ee(Mu),ue(n.CULL_FACE),I(kt);function ue(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ie(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function He(F,xe){return h[F]!==xe?(n.bindFramebuffer(F,xe),h[F]=xe,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ke(F,xe){let J=d,ie=!1;if(F){J=f.get(xe),J===void 0&&(J=[],f.set(xe,J));let Te=F.textures;if(J.length!==Te.length||J[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Qe=Te.length;we<Qe;we++)J[we]=n.COLOR_ATTACHMENT0+we;J.length=Te.length,ie=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ie=!0);ie&&n.drawBuffers(J)}function ot(F){return g!==F?(n.useProgram(F),g=F,!0):!1}let ne={[An]:n.FUNC_ADD,[_p]:n.FUNC_SUBTRACT,[Mp]:n.FUNC_REVERSE_SUBTRACT};ne[bp]=n.MIN,ne[wp]=n.MAX;let fe={[ir]:n.ZERO,[Sp]:n.ONE,[Ep]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[Cp]:n.SRC_ALPHA_SATURATE,[za]:n.DST_COLOR,[Na]:n.DST_ALPHA,[Tp]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[Rp]:n.ONE_MINUS_DST_COLOR,[Ap]:n.ONE_MINUS_DST_ALPHA,[Pp]:n.CONSTANT_COLOR,[Ip]:n.ONE_MINUS_CONSTANT_COLOR,[Dp]:n.CONSTANT_ALPHA,[Lp]:n.ONE_MINUS_CONSTANT_ALPHA};function I(F,xe,J,ie,Te,we,Qe,It,Kt,yt){if(F===kt){x===!0&&(Ie(n.BLEND),x=!1);return}if(x===!1&&(ue(n.BLEND),x=!0),F!==gh){if(F!==m||yt!==M){if((p!==An||y!==An)&&(n.blendEquation(n.FUNC_ADD),p=An,y=An),yt)switch(F){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Li:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Li:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,v=null,O=null,P=null,T.set(0,0,0),E=0,m=F,M=yt}return}Te=Te||xe,we=we||J,Qe=Qe||ie,(xe!==p||Te!==y)&&(n.blendEquationSeparate(ne[xe],ne[Te]),p=xe,y=Te),(J!==w||ie!==v||we!==O||Qe!==P)&&(n.blendFuncSeparate(fe[J],fe[ie],fe[we],fe[Qe]),w=J,v=ie,O=we,P=Qe),(It.equals(T)===!1||Kt!==E)&&(n.blendColor(It.r,It.g,It.b,Kt),T.copy(It),E=Kt),m=F,M=!1}function De(F,xe){F.side===zt?Ie(n.CULL_FACE):ue(n.CULL_FACE);let J=F.side===Wt;xe&&(J=!J),le(J),F.blending===ks&&F.transparent===!1?I(kt):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ie=F.stencilWrite;a.setTest(ie),ie&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(F){_!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),_=F)}function Ee(F){F!==vp?(ue(n.CULL_FACE),F!==R&&(F===Mu?n.cullFace(n.BACK):F===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),R=F}function pe(F){F!==G&&(V&&n.lineWidth(F),G=F)}function Ge(F,xe,J){F?(ue(n.POLYGON_OFFSET_FILL),(U!==xe||N!==J)&&(n.polygonOffset(xe,J),U=xe,N=J)):Ie(n.POLYGON_OFFSET_FILL)}function be(F){F?ue(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function A(F){F===void 0&&(F=n.TEXTURE0+Y-1),re!==F&&(n.activeTexture(F),re=F)}function b(F,xe,J){J===void 0&&(re===null?J=n.TEXTURE0+Y-1:J=re);let ie=me[J];ie===void 0&&(ie={type:void 0,texture:void 0},me[J]=ie),(ie.type!==F||ie.texture!==xe)&&(re!==J&&(n.activeTexture(J),re=J),n.bindTexture(F,xe||Ae[F]),ie.type=F,ie.texture=xe)}function q(){let F=me[re];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(F){rt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),rt.copy(F))}function Ce(F){K.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function at(F,xe){let J=c.get(xe);J===void 0&&(J=new WeakMap,c.set(xe,J));let ie=J.get(F);ie===void 0&&(ie=n.getUniformBlockIndex(xe,F.name),J.set(F,ie))}function Ze(F,xe){let ie=c.get(xe).get(F);l.get(xe)!==ie&&(n.uniformBlockBinding(xe,ie,F.__bindingPointIndex),l.set(xe,ie))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,me={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,w=null,v=null,y=null,O=null,P=null,T=new Ue(0,0,0),E=0,M=!1,_=null,R=null,G=null,U=null,N=null,rt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ie,bindFramebuffer:He,drawBuffers:ke,useProgram:ot,setBlending:I,setMaterial:De,setFlipSided:le,setCullFace:Ee,setLineWidth:pe,setPolygonOffset:Ge,setScissorTest:be,activeTexture:A,bindTexture:b,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:se,texImage2D:Re,texImage3D:Xe,updateUBOMapping:at,uniformBlockBinding:Ze,texStorage2D:Je,texStorage3D:ce,texSubImage2D:ee,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:qe,viewport:Ce,reset:ft}}function Mf(n,e,t,i){let s=Jv(i);switch(t){case Gf:return n*e;case Xf:return n*e;case Yf:return n*e*2;case Eh:return n*e/s.components*s.byteLength;case Th:return n*e/s.components*s.byteLength;case qf:return n*e*2/s.components*s.byteLength;case Ah:return n*e*2/s.components*s.byteLength;case Wf:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case Rh:return n*e*4/s.components*s.byteLength;case $o:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(n,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(n,8)*Math.max(e,8)/2;case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qo:case Ec:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zf:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(n){switch(n){case On:case Bf:return{byteLength:1,components:1};case Or:case Hf:case dn:return{byteLength:2,components:1};case wh:case Sh:return{byteLength:2,components:4};case ts:case bh:case Xn:return{byteLength:4,components:1};case Vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Kv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):na("canvas")}function x(A,b,q){let Q=1,se=be(A);if((se.width>q||se.height>q)&&(Q=q/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ee=Math.floor(Q*se.width),Pe=Math.floor(Q*se.height);h===void 0&&(h=g(ee,Pe));let ge=b?g(ee,Pe):h;return ge.width=ee,ge.height=Pe,ge.getContext("2d").drawImage(A,0,0,ee,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Pe+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,b,q,Q,se=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=b;if(b===n.RED&&(q===n.FLOAT&&(ee=n.R32F),q===n.HALF_FLOAT&&(ee=n.R16F),q===n.UNSIGNED_BYTE&&(ee=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.R8UI),q===n.UNSIGNED_SHORT&&(ee=n.R16UI),q===n.UNSIGNED_INT&&(ee=n.R32UI),q===n.BYTE&&(ee=n.R8I),q===n.SHORT&&(ee=n.R16I),q===n.INT&&(ee=n.R32I)),b===n.RG&&(q===n.FLOAT&&(ee=n.RG32F),q===n.HALF_FLOAT&&(ee=n.RG16F),q===n.UNSIGNED_BYTE&&(ee=n.RG8)),b===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RG8UI),q===n.UNSIGNED_SHORT&&(ee=n.RG16UI),q===n.UNSIGNED_INT&&(ee=n.RG32UI),q===n.BYTE&&(ee=n.RG8I),q===n.SHORT&&(ee=n.RG16I),q===n.INT&&(ee=n.RG32I)),b===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),q===n.UNSIGNED_INT&&(ee=n.RGB32UI),q===n.BYTE&&(ee=n.RGB8I),q===n.SHORT&&(ee=n.RGB16I),q===n.INT&&(ee=n.RGB32I)),b===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),q===n.UNSIGNED_INT&&(ee=n.RGBA32UI),q===n.BYTE&&(ee=n.RGBA8I),q===n.SHORT&&(ee=n.RGBA16I),q===n.INT&&(ee=n.RGBA32I)),b===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),b===n.RGBA){let Pe=se?Fa:lt.getTransfer(Q);q===n.FLOAT&&(ee=n.RGBA32F),q===n.HALF_FLOAT&&(ee=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ee=Pe===xt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(A,b){let q;return A?b===null||b===ts||b===Ui?q=n.DEPTH24_STENCIL8:b===Xn?q=n.DEPTH32F_STENCIL8:b===Or&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ts||b===Ui?q=n.DEPTH_COMPONENT24:b===Xn?q=n.DEPTH_COMPONENT32F:b===Or&&(q=n.DEPTH_COMPONENT16),q}function O(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function P(A){let b=A.target;b.removeEventListener("dispose",P),E(b),b.isVideoTexture&&u.delete(b)}function T(A){let b=A.target;b.removeEventListener("dispose",T),_(b)}function E(A){let b=i.get(A);if(b.__webglInit===void 0)return;let q=A.source,Q=f.get(q);if(Q){let se=Q[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(A),Object.keys(Q).length===0&&f.delete(q)}i.remove(A)}function M(A){let b=i.get(A);n.deleteTexture(b.__webglTexture);let q=A.source,Q=f.get(q);delete Q[b.__cacheKey],o.memory.textures--}function _(A){let b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let se=0;se<b.__webglFramebuffer[Q].length;se++)n.deleteFramebuffer(b.__webglFramebuffer[Q][se]);else n.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=A.textures;for(let Q=0,se=q.length;Q<se;Q++){let ee=i.get(q[Q]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(q[Q])}i.remove(A)}let R=0;function G(){R=0}function U(){let A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function N(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Y(A,b){let q=i.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,A,b);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function V(A,b){let q=i.get(A);if(A.version>0&&q.__version!==A.version){K(q,A,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function te(A,b){let q=i.get(A);if(A.version>0&&q.__version!==A.version){K(q,A,b);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function Z(A,b){let q=i.get(A);if(A.version>0&&q.__version!==A.version){he(q,A,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}let re={[ci]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[ic]:n.MIRRORED_REPEAT},me={[nn]:n.NEAREST,[Op]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},_e={[Hp]:n.NEVER,[qp]:n.ALWAYS,[Vp]:n.LESS,[$f]:n.LEQUAL,[Gp]:n.EQUAL,[Yp]:n.GEQUAL,[Wp]:n.GREATER,[Xp]:n.NOTEQUAL};function Ve(A,b){if(b.type===Xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===fl||b.magFilter===yo||b.magFilter===es||b.minFilter===Wn||b.minFilter===fl||b.minFilter===yo||b.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,re[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,re[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,re[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,me[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==yo&&b.minFilter!==es||b.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function rt(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",P));let Q=b.source,se=f.get(Q);se===void 0&&(se={},f.set(Q,se));let ee=N(b);if(ee!==A.__cacheKey){se[ee]===void 0&&(se[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[ee].usedTimes++;let Pe=se[A.__cacheKey];Pe!==void 0&&(se[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(b)),A.__cacheKey=ee,A.__webglTexture=se[ee].texture}return q}function K(A,b,q){let Q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=n.TEXTURE_3D);let se=rt(A,b),ee=b.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+q);let Pe=i.get(ee);if(ee.version!==Pe.__version||se===!0){t.activeTexture(n.TEXTURE0+q);let ge=lt.getPrimaries(lt.workingColorSpace),Me=b.colorSpace===Pi?null:lt.getPrimaries(b.colorSpace),Je=b.colorSpace===Pi||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ce=x(b.image,!1,s.maxTextureSize);ce=Ge(b,ce);let Re=r.convert(b.format,b.colorSpace),Xe=r.convert(b.type),qe=v(b.internalFormat,Re,Xe,b.colorSpace,b.isVideoTexture);Ve(Q,b);let Ce,at=b.mipmaps,Ze=b.isVideoTexture!==!0,ft=Pe.__version===void 0||se===!0,F=ee.dataReady,xe=O(b,ce);if(b.isDepthTexture)qe=y(b.format===Ni,b.type),ft&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,qe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,qe,ce.width,ce.height,0,Re,Xe,null));else if(b.isDataTexture)if(at.length>0){Ze&&ft&&t.texStorage2D(n.TEXTURE_2D,xe,qe,at[0].width,at[0].height);for(let J=0,ie=at.length;J<ie;J++)Ce=at[J],Ze?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Re,Xe,Ce.data):t.texImage2D(n.TEXTURE_2D,J,qe,Ce.width,Ce.height,0,Re,Xe,Ce.data);b.generateMipmaps=!1}else Ze?(ft&&t.texStorage2D(n.TEXTURE_2D,xe,qe,ce.width,ce.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Re,Xe,ce.data)):t.texImage2D(n.TEXTURE_2D,0,qe,ce.width,ce.height,0,Re,Xe,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,qe,at[0].width,at[0].height,ce.depth);for(let J=0,ie=at.length;J<ie;J++)if(Ce=at[J],b.format!==Mn)if(Re!==null)if(Ze){if(F)if(b.layerUpdates.size>0){let Te=Mf(Ce.width,Ce.height,b.format,b.type);for(let we of b.layerUpdates){let Qe=Ce.data.subarray(we*Te/Ce.data.BYTES_PER_ELEMENT,(we+1)*Te/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,we,Ce.width,Ce.height,1,Re,Qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,ce.depth,Re,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,qe,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,ce.depth,Re,Xe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,qe,Ce.width,Ce.height,ce.depth,0,Re,Xe,Ce.data)}else{Ze&&ft&&t.texStorage2D(n.TEXTURE_2D,xe,qe,at[0].width,at[0].height);for(let J=0,ie=at.length;J<ie;J++)Ce=at[J],b.format!==Mn?Re!==null?Ze?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,J,qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Re,Xe,Ce.data):t.texImage2D(n.TEXTURE_2D,J,qe,Ce.width,Ce.height,0,Re,Xe,Ce.data)}else if(b.isDataArrayTexture)if(Ze){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,qe,ce.width,ce.height,ce.depth),F)if(b.layerUpdates.size>0){let J=Mf(ce.width,ce.height,b.format,b.type);for(let ie of b.layerUpdates){let Te=ce.data.subarray(ie*J/ce.data.BYTES_PER_ELEMENT,(ie+1)*J/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,Re,Xe,Te)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Re,Xe,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,ce.width,ce.height,ce.depth,0,Re,Xe,ce.data);else if(b.isData3DTexture)Ze?(ft&&t.texStorage3D(n.TEXTURE_3D,xe,qe,ce.width,ce.height,ce.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Re,Xe,ce.data)):t.texImage3D(n.TEXTURE_3D,0,qe,ce.width,ce.height,ce.depth,0,Re,Xe,ce.data);else if(b.isFramebufferTexture){if(ft)if(Ze)t.texStorage2D(n.TEXTURE_2D,xe,qe,ce.width,ce.height);else{let J=ce.width,ie=ce.height;for(let Te=0;Te<xe;Te++)t.texImage2D(n.TEXTURE_2D,Te,qe,J,ie,0,Re,Xe,null),J>>=1,ie>>=1}}else if(at.length>0){if(Ze&&ft){let J=be(at[0]);t.texStorage2D(n.TEXTURE_2D,xe,qe,J.width,J.height)}for(let J=0,ie=at.length;J<ie;J++)Ce=at[J],Ze?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,Re,Xe,Ce):t.texImage2D(n.TEXTURE_2D,J,qe,Re,Xe,Ce);b.generateMipmaps=!1}else if(Ze){if(ft){let J=be(ce);t.texStorage2D(n.TEXTURE_2D,xe,qe,J.width,J.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Xe,ce)}else t.texImage2D(n.TEXTURE_2D,0,qe,Re,Xe,ce);m(b)&&p(Q),Pe.__version=ee.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function he(A,b,q){if(b.image.length!==6)return;let Q=rt(A,b),se=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+q);let ee=i.get(se);if(se.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+q);let Pe=lt.getPrimaries(lt.workingColorSpace),ge=b.colorSpace===Pi?null:lt.getPrimaries(b.colorSpace),Me=b.colorSpace===Pi||Pe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Je=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let ie=0;ie<6;ie++)!Je&&!ce?Re[ie]=x(b.image[ie],!0,s.maxCubemapSize):Re[ie]=ce?b.image[ie].image:b.image[ie],Re[ie]=Ge(b,Re[ie]);let Xe=Re[0],qe=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type),at=v(b.internalFormat,qe,Ce,b.colorSpace),Ze=b.isVideoTexture!==!0,ft=ee.__version===void 0||Q===!0,F=se.dataReady,xe=O(b,Xe);Ve(n.TEXTURE_CUBE_MAP,b);let J;if(Je){Ze&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,at,Xe.width,Xe.height);for(let ie=0;ie<6;ie++){J=Re[ie].mipmaps;for(let Te=0;Te<J.length;Te++){let we=J[Te];b.format!==Mn?qe!==null?Ze?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,we.width,we.height,qe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,at,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,0,0,we.width,we.height,qe,Ce,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te,at,we.width,we.height,0,qe,Ce,we.data)}}}else{if(J=b.mipmaps,Ze&&ft){J.length>0&&xe++;let ie=be(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,at,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ce){Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re[ie].width,Re[ie].height,qe,Ce,Re[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,at,Re[ie].width,Re[ie].height,0,qe,Ce,Re[ie].data);for(let Te=0;Te<J.length;Te++){let Qe=J[Te].image[ie].image;Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,Qe.width,Qe.height,qe,Ce,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,at,Qe.width,Qe.height,0,qe,Ce,Qe.data)}}else{Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,qe,Ce,Re[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,at,qe,Ce,Re[ie]);for(let Te=0;Te<J.length;Te++){let we=J[Te];Ze?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,0,0,qe,Ce,we.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Te+1,at,qe,Ce,we.image[ie])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),ee.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ae(A,b,q,Q,se,ee){let Pe=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Me=v(q.internalFormat,Pe,ge,q.colorSpace),Je=i.get(b),ce=i.get(q);if(ce.__renderTarget=b,!Je.__hasExternalTextures){let Re=Math.max(1,b.width>>ee),Xe=Math.max(1,b.height>>ee);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ee,Me,Re,Xe,b.depth,0,Pe,ge,null):t.texImage2D(se,ee,Me,Re,Xe,0,Pe,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ee(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,se,ce.__webglTexture,0,le(b)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,se,ce.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(A,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){let Q=b.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,ee=y(b.stencilBuffer,se),Pe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=le(b);Ee(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ee,b.width,b.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,A)}else{let Q=b.textures;for(let se=0;se<Q.length;se++){let ee=Q[se],Pe=r.convert(ee.format,ee.colorSpace),ge=r.convert(ee.type),Me=v(ee.internalFormat,Pe,ge,ee.colorSpace),Je=le(b);q&&Ee(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Me,b.width,b.height):Ee(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,Me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);let se=Q.__webglTexture,ee=le(b);if(b.depthTexture.format===Bs)Ee(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(b.depthTexture.format===Ni)Ee(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function He(A){let b=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",se)};Q.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=Q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,A)}else if(q){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=n.createRenderbuffer(),ue(b.__webglDepthbuffer[Q],A,!1);else{let se=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ue(b.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(A,b,q){let Q=i.get(A);b!==void 0&&Ae(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&He(A)}function ot(A){let b=A.texture,q=i.get(A),Q=i.get(b);A.addEventListener("dispose",T);let se=A.textures,ee=A.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=b.version,o.memory.textures++),ee){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Me=0;Me<b.mipmaps.length;Me++)q.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else q.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)q.__webglFramebuffer[ge]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ge=0,Me=se.length;ge<Me;ge++){let Je=i.get(se[ge]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Ee(A)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){let Me=se[ge];q.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);let Je=r.convert(Me.format,Me.colorSpace),ce=r.convert(Me.type),Re=v(Me.internalFormat,Je,ce,Me.colorSpace,A.isXRRenderTarget===!0),Xe=le(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Re,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Ae(q.__webglFramebuffer[ge][Me],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else Ae(q.__webglFramebuffer[ge],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,Me=se.length;ge<Me;ge++){let Je=se[ge],ce=i.get(Je);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Ve(n.TEXTURE_2D,Je),Ae(q.__webglFramebuffer,A,Je,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(Je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Q.__webglTexture),Ve(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Ae(q.__webglFramebuffer[Me],A,b,n.COLOR_ATTACHMENT0,ge,Me);else Ae(q.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,ge,0);m(b)&&p(ge),t.unbindTexture()}A.depthBuffer&&He(A)}function ne(A){let b=A.textures;for(let q=0,Q=b.length;q<Q;q++){let se=b[q];if(m(se)){let ee=w(A),Pe=i.get(se).__webglTexture;t.bindTexture(ee,Pe),p(ee),t.unbindTexture()}}}let fe=[],I=[];function De(A){if(A.samples>0){if(Ee(A)===!1){let b=A.textures,q=A.width,Q=A.height,se=n.COLOR_BUFFER_BIT,ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(A),ge=b.length>1;if(ge)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);let Je=i.get(b[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,q,Q,0,0,q,Q,se,n.NEAREST),l===!0&&(fe.length=0,I.length=0,fe.push(n.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(fe.push(ee),I.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);let Je=i.get(b[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function le(A){return Math.min(s.maxSamples,A.samples)}function Ee(A){let b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pe(A){let b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Ge(A,b){let q=A.colorSpace,Q=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==sr&&q!==Pi&&(lt.getTransfer(q)===xt?(Q!==Mn||se!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=Z,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ee}function Qv(n,e){function t(i,s=Pi){let r,o=lt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===wh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bf)return n.BYTE;if(i===Hf)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===bh)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===Mn)return n.RGBA;if(i===Xf)return n.LUMINANCE;if(i===Yf)return n.LUMINANCE_ALPHA;if(i===Bs)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Eh)return n.RED;if(i===Th)return n.RED_INTEGER;if(i===qf)return n.RG;if(i===Ah)return n.RG_INTEGER;if(i===Rh)return n.RGBA_INTEGER;if(i===$o||i===jo||i===Jo||i===Ko)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===cc||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lc||i===cc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uc||i===fc||i===dc||i===pc||i===mc||i===gc||i===xc||i===vc||i===yc||i===_c||i===Mc||i===bc||i===wc||i===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Ec||i===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zf||i===Ac||i===Rc||i===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ui?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Wc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$e=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`,Xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends zi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,x=new Xc,m=t.getContextAttributes(),p=null,w=null,v=[],y=[],O=new oe,P=null,T=new tn;T.viewport=new _t;let E=new tn;E.viewport=new _t;let M=[T,E],_=new Wc,R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=v[K];return he===void 0&&(he=new Lr,v[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=v[K];return he===void 0&&(he=new Lr,v[K]=he),he.getGripSpace()},this.getHand=function(K){let he=v[K];return he===void 0&&(he=new Lr,v[K]=he),he.getHandSpace()};function U(K){let he=y.indexOf(K.inputSource);if(he===-1)return;let Ae=v[he];Ae!==void 0&&(Ae.update(K.inputSource,K.frame,c||o),Ae.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<v.length;K++){let he=y[K];he!==null&&(y[K]=null,v[K].disconnect(he))}R=null,G=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,w=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){let he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Xt(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Ae=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Ni:Bs,Ae=m.stencil?Ui:ts);let Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Xt(f.textureWidth,f.textureHeight,{format:Mn,type:On,depthTexture:new $s(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let he=0;he<K.removed.length;he++){let Ae=K.removed[he],ue=y.indexOf(Ae);ue>=0&&(y[ue]=null,v[ue].disconnect(Ae))}for(let he=0;he<K.added.length;he++){let Ae=K.added[he],ue=y.indexOf(Ae);if(ue===-1){for(let He=0;He<v.length;He++)if(He>=y.length){y.push(Ae),ue=He;break}else if(y[He]===null){y[He]=Ae,ue=He;break}if(ue===-1)break}let Ie=v[ue];Ie&&Ie.connect(Ae)}}let V=new D,te=new D;function Z(K,he,Ae){V.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(Ae.matrixWorld);let ue=V.distanceTo(te),Ie=he.projectionMatrix.elements,He=Ae.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),ot=Ie[14]/(Ie[10]+1),ne=(Ie[9]+1)/Ie[5],fe=(Ie[9]-1)/Ie[5],I=(Ie[8]-1)/Ie[0],De=(He[8]+1)/He[0],le=ke*I,Ee=ke*De,pe=ue/(-I+De),Ge=pe*-I;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ge),K.translateZ(pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let be=ke+pe,A=ot+pe,b=le-Ge,q=Ee+(ue-Ge),Q=ne*ot/A*be,se=fe*ot/A*be;K.projectionMatrix.makePerspective(b,q,Q,se,be,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let he=K.near,Ae=K.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),_.near=E.near=T.near=he,_.far=E.far=T.far=Ae,(R!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,G=_.far),T.layers.mask=K.layers.mask|2,E.layers.mask=K.layers.mask|4,_.layers.mask=T.layers.mask|E.layers.mask;let ue=K.parent,Ie=_.cameras;re(_,ue);for(let He=0;He<Ie.length;He++)re(Ie[He],ue);Ie.length===2?Z(_,T,E):_.projectionMatrix.copy(T.projectionMatrix),me(K,_,ue)};function me(K,he,Ae){Ae===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(Ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let _e=null;function Ve(K,he){if(u=he.getViewerPose(c||o),g=he,u!==null){let Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let ue=!1;Ae.length!==_.cameras.length&&(_.cameras.length=0,ue=!0);for(let He=0;He<Ae.length;He++){let ke=Ae[He],ot=null;if(d!==null)ot=d.getViewport(ke);else{let fe=h.getViewSubImage(f,ke);ot=fe.viewport,He===0&&(e.setRenderTargetTextures(w,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(w))}let ne=M[He];ne===void 0&&(ne=new tn,ne.layers.enable(He),ne.viewport=new _t,M[He]=ne),ne.matrix.fromArray(ke.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ke.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ot.x,ot.y,ot.width,ot.height),He===0&&(_.matrix.copy(ne.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ue===!0&&_.cameras.push(ne)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let He=h.getDepthInformation(Ae[0]);He&&He.isValid&&He.texture&&x.init(e,He,s.renderState)}}for(let Ae=0;Ae<v.length;Ae++){let ue=y[Ae],Ie=v[Ae];ue!==null&&Ie!==void 0&&Ie.update(ue,he,c||o)}_e&&_e(K,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}let rt=new ed;rt.setAnimationLoop(Ve),this.setAnimationLoop=function(K){_e=K},this.dispose=function(){}}},$i=new Rn,iy=new Ke;function sy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),v=w.envMap,y=w.envMapRotation;v&&(m.envMap.value=v,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler($i)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ry(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){let y=v.program;i.uniformBlockBinding(w,y)}function c(w,v){let y=s[w.id];y===void 0&&(g(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));let O=v.program;i.updateUBOMapping(w,O);let P=e.render.frame;r[w.id]!==P&&(f(w),r[w.id]=P)}function u(w){let v=h();w.__bindingPointIndex=v;let y=n.createBuffer(),O=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,O,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let v=s[w.id],y=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let P=0,T=y.length;P<T;P++){let E=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,_=E.length;M<_;M++){let R=E[M];if(d(R,P,M,O)===!0){let G=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],N=0;for(let Y=0;Y<U.length;Y++){let V=U[Y],te=x(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,G+N,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,N),N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,v,y,O){let P=w.value,T=v+"_"+y;if(O[T]===void 0)return typeof P=="number"||typeof P=="boolean"?O[T]=P:O[T]=P.clone(),!0;{let E=O[T];if(typeof P=="number"||typeof P=="boolean"){if(E!==P)return O[T]=P,!0}else if(E.equals(P)===!1)return E.copy(P),!0}return!1}function g(w){let v=w.uniforms,y=0,O=16;for(let T=0,E=v.length;T<E;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,R=M.length;_<R;_++){let G=M[_],U=Array.isArray(G.value)?G.value:[G.value];for(let N=0,Y=U.length;N<Y;N++){let V=U[N],te=x(V),Z=y%O,re=Z%te.boundary,me=Z+re;y+=re,me!==0&&O-me<te.storage&&(y+=O-me),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=te.storage}}}let P=y%O;return P>0&&(y+=O-P),w.__size=y,w.__cache={},this}function x(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){let v=w.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ha=class{constructor(e={}){let{canvas:t=hm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Ii,this.toneMappingExposure=1;let y=this,O=!1,P=0,T=0,E=null,M=-1,_=null,R=new _t,G=new _t,U=null,N=new Ue(0),Y=0,V=t.width,te=t.height,Z=1,re=null,me=null,_e=new _t(0,0,V,te),Ve=new _t(0,0,V,te),rt=!1,K=new Br,he=!1,Ae=!1,ue=new Ke,Ie=new Ke,He=new D,ke=new _t,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function fe(){return E===null?Z:1}let I=i;function De(S,B){return t.getContext(S,B)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",we,!1),I===null){let B="webgl2";if(I=De(B,S),I===null)throw De(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let le,Ee,pe,Ge,be,A,b,q,Q,se,ee,Pe,ge,Me,Je,ce,Re,Xe,qe,Ce,at,Ze,ft,F;function xe(){le=new Mx(I),le.init(),Ze=new Qv(I,le),Ee=new mx(I,le,e,Ze),pe=new jv(I,le),Ee.reverseDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),Ge=new Sx(I),be=new Ov,A=new Kv(I,le,pe,be,Ee,Ze,Ge),b=new xx(y),q=new _x(y),Q=new Im(I),ft=new dx(I,Q),se=new bx(I,Q,Ge,ft),ee=new Tx(I,se,Q,Ge),qe=new Ex(I,Ee,A),ce=new gx(be),Pe=new zv(y,b,q,le,Ee,ft,ce),ge=new sy(y,be),Me=new kv,Je=new Xv(le),Xe=new fx(y,b,q,pe,ee,d,l),Re=new Zv(y,ee,Ee),F=new ry(I,Ge,Ee,pe),Ce=new px(I,le,Ge),at=new wx(I,le,Ge),Ge.programs=Pe.programs,y.capabilities=Ee,y.extensions=le,y.properties=be,y.renderLists=Me,y.shadowMap=Re,y.state=pe,y.info=Ge}xe();let J=new Yc(y,I);this.xr=J,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(V,te,!1))},this.getSize=function(S){return S.set(V,te)},this.setSize=function(S,B,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,te=B,t.width=Math.floor(S*Z),t.height=Math.floor(B*Z),$===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(V*Z,te*Z).floor()},this.setDrawingBufferSize=function(S,B,$){V=S,te=B,Z=$,t.width=Math.floor(S*$),t.height=Math.floor(B*$),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,B,$,j){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,B,$,j),pe.viewport(R.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Ve)},this.setScissor=function(S,B,$,j){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,B,$,j),pe.scissor(G.copy(Ve).multiplyScalar(Z).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(S){pe.setScissorTest(rt=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(S=!0,B=!0,$=!0){let j=0;if(S){let H=!1;if(E!==null){let de=E.texture.format;H=de===Rh||de===Ah||de===Th}if(H){let de=E.texture.type,Se=de===On||de===ts||de===Or||de===Ui||de===wh||de===Sh,Ne=Xe.getClearColor(),ze=Xe.getClearAlpha(),je=Ne.r,et=Ne.g,Oe=Ne.b;Se?(g[0]=je,g[1]=et,g[2]=Oe,g[3]=ze,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=je,x[1]=et,x[2]=Oe,x[3]=ze,I.clearBufferiv(I.COLOR,0,x))}else j|=I.COLOR_BUFFER_BIT}B&&(j|=I.DEPTH_BUFFER_BIT),$&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Me.dispose(),Je.dispose(),be.dispose(),b.dispose(),q.dispose(),ee.dispose(),ft.dispose(),F.dispose(),Pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",du),J.removeEventListener("sessionend",pu),Gi.stop()};function ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let S=Ge.autoReset,B=Re.enabled,$=Re.autoUpdate,j=Re.needsUpdate,H=Re.type;xe(),Ge.autoReset=S,Re.enabled=B,Re.autoUpdate=$,Re.needsUpdate=j,Re.type=H}function we(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Qe(S){let B=S.target;B.removeEventListener("dispose",Qe),It(B)}function It(S){Kt(S),be.remove(S)}function Kt(S){let B=be.get(S).programs;B!==void 0&&(B.forEach(function($){Pe.releaseProgram($)}),S.isShaderMaterial&&Pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,$,j,H,de){B===null&&(B=ot);let Se=H.isMesh&&H.matrixWorld.determinant()<0,Ne=mp(S,B,$,j,H);pe.setMaterial(j,Se);let ze=$.index,je=1;if(j.wireframe===!0){if(ze=se.getWireframeAttribute($),ze===void 0)return;je=2}let et=$.drawRange,Oe=$.attributes.position,dt=et.start*je,wt=(et.start+et.count)*je;de!==null&&(dt=Math.max(dt,de.start*je),wt=Math.min(wt,(de.start+de.count)*je)),ze!==null?(dt=Math.max(dt,0),wt=Math.min(wt,ze.count)):Oe!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,Oe.count));let St=wt-dt;if(St<0||St===1/0)return;ft.setup(H,j,Ne,$,ze);let hn,mt=Ce;if(ze!==null&&(hn=Q.get(ze),mt=at,mt.setIndex(hn)),H.isMesh)j.wireframe===!0?(pe.setLineWidth(j.wireframeLinewidth*fe()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(H.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),pe.setLineWidth(Be*fe()),H.isLineSegments?mt.setMode(I.LINES):H.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else H.isPoints?mt.setMode(I.POINTS):H.isSprite&&mt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)mt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Be=H._multiDrawStarts,Qn=H._multiDrawCounts,gt=H._multiDrawCount,Ln=ze?Q.get(ze).bytesPerElement:1,_s=be.get(j).currentProgram.getUniforms();for(let vn=0;vn<gt;vn++)_s.setValue(I,"_gl_DrawID",vn),mt.render(Be[vn]/Ln,Qn[vn])}else if(H.isInstancedMesh)mt.renderInstances(dt,St,H.count);else if($.isInstancedBufferGeometry){let Be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Qn=Math.min($.instanceCount,Be);mt.renderInstances(dt,St,Qn)}else mt.render(dt,St)};function yt(S,B,$){S.transparent===!0&&S.side===zt&&S.forceSinglePass===!1?(S.side=Wt,S.needsUpdate=!0,vo(S,B,$),S.side=Di,S.needsUpdate=!0,vo(S,B,$),S.side=zt):vo(S,B,$)}this.compile=function(S,B,$=null){$===null&&($=S),p=Je.get($),p.init(B),v.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==$&&S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let j=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let de=H.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Ne=de[Se];yt(Ne,$,H),j.add(Ne)}else yt(de,$,H),j.add(de)}),v.pop(),p=null,j},this.compileAsync=function(S,B,$=null){let j=this.compile(S,B,$);return new Promise(H=>{function de(){if(j.forEach(function(Se){be.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){H(S);return}setTimeout(de,10)}le.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Dn=null;function Kn(S){Dn&&Dn(S)}function du(){Gi.stop()}function pu(){Gi.start()}let Gi=new ed;Gi.setAnimationLoop(Kn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(S){Dn=S,J.setAnimationLoop(S),S===null?Gi.stop():Gi.start()},J.addEventListener("sessionstart",du),J.addEventListener("sessionend",pu),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,B,E),p=Je.get(S,v.length),p.init(B),v.push(p),Ie.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Ie),Ae=this.localClippingEnabled,he=ce.init(this.clippingPlanes,Ae),m=Me.get(S,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){let de=y.xr.getDepthSensingMesh();de!==null&&ul(de,B,-1/0,y.sortObjects)}ul(S,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,me),ne=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ne&&Xe.addToRenderList(m,S),this.info.render.frame++,he===!0&&ce.beginShadows();let $=p.state.shadowsArray;Re.render($,S,B),he===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,H=m.transmissive;if(p.setupLights(),B.isArrayCamera){let de=B.cameras;if(H.length>0)for(let Se=0,Ne=de.length;Se<Ne;Se++){let ze=de[Se];gu(j,H,S,ze)}ne&&Xe.render(S);for(let Se=0,Ne=de.length;Se<Ne;Se++){let ze=de[Se];mu(m,S,ze,ze.viewport)}}else H.length>0&&gu(j,H,S,B),ne&&Xe.render(S),mu(m,S,B);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(y,S,B),ft.resetDefaultState(),M=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],he===!0&&ce.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ul(S,B,$,j){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){j&&ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);let Se=ee.update(S),Ne=S.material;Ne.visible&&m.push(S,Se,Ne,$,ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){let Se=ee.update(S),Ne=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ke.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ke.copy(Se.boundingSphere.center)),ke.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ne)){let ze=Se.groups;for(let je=0,et=ze.length;je<et;je++){let Oe=ze[je],dt=Ne[Oe.materialIndex];dt&&dt.visible&&m.push(S,Se,dt,$,ke.z,Oe)}}else Ne.visible&&m.push(S,Se,Ne,$,ke.z,null)}}let de=S.children;for(let Se=0,Ne=de.length;Se<Ne;Se++)ul(de[Se],B,$,j)}function mu(S,B,$,j){let H=S.opaque,de=S.transmissive,Se=S.transparent;p.setupLightsView($),he===!0&&ce.setGlobalState(y.clippingPlanes,$),j&&pe.viewport(R.copy(j)),H.length>0&&xo(H,B,$),de.length>0&&xo(de,B,$),Se.length>0&&xo(Se,B,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function gu(S,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Xt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?dn:On,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let de=p.state.transmissionRenderTarget[j.id],Se=j.viewport||R;de.setSize(Se.z,Se.w);let Ne=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(N),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),ne&&Xe.render($);let ze=y.toneMapping;y.toneMapping=Ii;let je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),he===!0&&ce.setGlobalState(y.clippingPlanes,j),xo(S,$,j),A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de),le.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Oe=0,dt=B.length;Oe<dt;Oe++){let wt=B[Oe],St=wt.object,hn=wt.geometry,mt=wt.material,Be=wt.group;if(mt.side===zt&&St.layers.test(j.layers)){let Qn=mt.side;mt.side=Wt,mt.needsUpdate=!0,xu(St,$,j,hn,mt,Be),mt.side=Qn,mt.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(de),A.updateRenderTargetMipmap(de))}y.setRenderTarget(Ne),y.setClearColor(N,Y),je!==void 0&&(j.viewport=je),y.toneMapping=ze}function xo(S,B,$){let j=B.isScene===!0?B.overrideMaterial:null;for(let H=0,de=S.length;H<de;H++){let Se=S[H],Ne=Se.object,ze=Se.geometry,je=j===null?Se.material:j,et=Se.group;Ne.layers.test($.layers)&&xu(Ne,B,$,ze,je,et)}}function xu(S,B,$,j,H,de){S.onBeforeRender(y,B,$,j,H,de),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(y,B,$,j,S,de),H.transparent===!0&&H.side===zt&&H.forceSinglePass===!1?(H.side=Wt,H.needsUpdate=!0,y.renderBufferDirect($,B,j,H,S,de),H.side=Di,H.needsUpdate=!0,y.renderBufferDirect($,B,j,H,S,de),H.side=zt):y.renderBufferDirect($,B,j,H,S,de),S.onAfterRender(y,B,$,j,H,de)}function vo(S,B,$){B.isScene!==!0&&(B=ot);let j=be.get(S),H=p.state.lights,de=p.state.shadowsArray,Se=H.state.version,Ne=Pe.getParameters(S,H.state,de,B,$),ze=Pe.getProgramCacheKey(Ne),je=j.programs;j.environment=S.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(S.isMeshStandardMaterial?q:b).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,je===void 0&&(S.addEventListener("dispose",Qe),je=new Map,j.programs=je);let et=je.get(ze);if(et!==void 0){if(j.currentProgram===et&&j.lightsStateVersion===Se)return yu(S,Ne),et}else Ne.uniforms=Pe.getUniforms(S),S.onBeforeCompile(Ne,y),et=Pe.acquireProgram(Ne,ze),je.set(ze,et),j.uniforms=Ne.uniforms;let Oe=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=ce.uniform),yu(S,Ne),j.needsLights=xp(S),j.lightsStateVersion=Se,j.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=et,j.uniformsList=null,et}function vu(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Vs.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function yu(S,B){let $=be.get(S);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function mp(S,B,$,j,H){B.isScene!==!0&&(B=ot),A.resetTextureUnits();let de=B.fog,Se=j.isMeshStandardMaterial?B.environment:null,Ne=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:sr,ze=(j.isMeshStandardMaterial?q:b).get(j.envMap||Se),je=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color,St=Ii;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(St=y.toneMapping);let hn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=hn!==void 0?hn.length:0,Be=be.get(j),Qn=p.state.lights;if(he===!0&&(Ae===!0||S!==_)){let En=S===_&&j.id===M;ce.setState(j,S,En)}let gt=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Qn.state.version||Be.outputColorSpace!==Ne||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==ze||j.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ce.numPlanes||Be.numIntersection!==ce.numIntersection)||Be.vertexAlphas!==je||Be.vertexTangents!==et||Be.morphTargets!==Oe||Be.morphNormals!==dt||Be.morphColors!==wt||Be.toneMapping!==St||Be.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Be.__version=j.version);let Ln=Be.currentProgram;gt===!0&&(Ln=vo(j,B,H));let _s=!1,vn=!1,yr=!1,Et=Ln.getUniforms(),Vn=Be.uniforms;if(pe.useProgram(Ln.program)&&(_s=!0,vn=!0,yr=!0),j.id!==M&&(M=j.id,vn=!0),_s||_!==S){pe.buffers.depth.getReversed()?(ue.copy(S.projectionMatrix),fm(ue),dm(ue),Et.setValue(I,"projectionMatrix",ue)):Et.setValue(I,"projectionMatrix",S.projectionMatrix),Et.setValue(I,"viewMatrix",S.matrixWorldInverse);let bi=Et.map.cameraPosition;bi!==void 0&&bi.setValue(I,He.setFromMatrixPosition(S.matrixWorld)),Ee.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Et.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,vn=!0,yr=!0)}if(H.isSkinnedMesh){Et.setOptional(I,H,"bindMatrix"),Et.setOptional(I,H,"bindMatrixInverse");let En=H.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Et.setValue(I,"boneTexture",En.boneTexture,A))}H.isBatchedMesh&&(Et.setOptional(I,H,"batchingTexture"),Et.setValue(I,"batchingTexture",H._matricesTexture,A),Et.setOptional(I,H,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",H._indirectTexture,A),Et.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",H._colorsTexture,A));let _r=$.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&qe.update(H,$,Ln),(vn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,Et.setValue(I,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Vn.envMap.value=ze,Vn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(Vn.envMapIntensity.value=B.environmentIntensity),vn&&(Et.setValue(I,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&gp(Vn,yr),de&&j.fog===!0&&ge.refreshFogUniforms(Vn,de),ge.refreshMaterialUniforms(Vn,j,Z,te,p.state.transmissionRenderTarget[S.id]),Vs.upload(I,vu(Be),Vn,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vs.upload(I,vu(Be),Vn,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Et.setValue(I,"center",H.center),Et.setValue(I,"modelViewMatrix",H.modelViewMatrix),Et.setValue(I,"normalMatrix",H.normalMatrix),Et.setValue(I,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let En=j.uniformsGroups;for(let bi=0,wi=En.length;bi<wi;bi++){let _u=En[bi];F.update(_u,Ln),F.bind(_u,Ln)}}return Ln}function gp(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function xp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,B,$){be.get(S.texture).__webglTexture=B,be.get(S.depthTexture).__webglTexture=$;let j=be.get(S);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){let $=be.get(S);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,$=0){E=S,P=B,T=$;let j=!0,H=null,de=!1,Se=!1;if(S){let ze=be.get(S);if(ze.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(ze.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(ze.__hasExternalTextures)A.rebindTextures(S,be.get(S.texture).__webglTexture,be.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Oe=S.depthTexture;if(ze.__boundDepthTexture!==Oe){if(Oe!==null&&be.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let je=S.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Se=!0);let et=be.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(et[B])?H=et[B][$]:H=et[B],de=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?H=be.get(S).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[$]:H=et,R.copy(S.viewport),G.copy(S.scissor),U=S.scissorTest}else R.copy(_e).multiplyScalar(Z).floor(),G.copy(Ve).multiplyScalar(Z).floor(),U=rt;if(pe.bindFramebuffer(I.FRAMEBUFFER,H)&&j&&pe.drawBuffers(S,H),pe.viewport(R),pe.scissor(G),pe.setScissorTest(U),de){let ze=be.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,ze.__webglTexture,$)}else if(Se){let ze=be.get(S.texture),je=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,$||0,je)}M=-1},this.readRenderTargetPixels=function(S,B,$,j,H,de,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){pe.bindFramebuffer(I.FRAMEBUFFER,Ne);try{let ze=S.texture,je=ze.format,et=ze.type;if(!Ee.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-j&&$>=0&&$<=S.height-H&&I.readPixels(B,$,j,H,Ze.convert(je),Ze.convert(et),de)}finally{let ze=E!==null?be.get(E).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,B,$,j,H,de,Se){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=be.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){let ze=S.texture,je=ze.format,et=ze.type;if(!Ee.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-j&&$>=0&&$<=S.height-H){pe.bindFramebuffer(I.FRAMEBUFFER,Ne);let Oe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Oe),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),I.readPixels(B,$,j,H,Ze.convert(je),Ze.convert(et),0);let dt=E!==null?be.get(E).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,dt);let wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await um(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Oe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.deleteBuffer(Oe),I.deleteSync(wt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,$=0){S.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);let j=Math.pow(2,-$),H=Math.floor(S.image.width*j),de=Math.floor(S.image.height*j),Se=B!==null?B.x:0,Ne=B!==null?B.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Se,Ne,H,de),pe.unbindTexture()},this.copyTextureToTexture=function(S,B,$=null,j=null,H=0){S.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1],B=arguments[2],H=arguments[3]||0,$=null);let de,Se,Ne,ze,je,et,Oe,dt,wt,St=S.isCompressedTexture?S.mipmaps[H]:S.image;$!==null?(de=$.max.x-$.min.x,Se=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,je=$.min.y,et=$.isBox3?$.min.z:0):(de=St.width,Se=St.height,Ne=St.depth||1,ze=0,je=0,et=0),j!==null?(Oe=j.x,dt=j.y,wt=j.z):(Oe=0,dt=0,wt=0);let hn=Ze.convert(B.format),mt=Ze.convert(B.type),Be;B.isData3DTexture?(A.setTexture3D(B,0),Be=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Be=I.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let Qn=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),_s=I.getParameter(I.UNPACK_SKIP_ROWS),vn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et);let yr=S.isDataArrayTexture||S.isData3DTexture,Et=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Vn=be.get(S),_r=be.get(B),En=be.get(Vn.__renderTarget),bi=be.get(_r.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let wi=0;wi<Ne;wi++)yr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(S).__webglTexture,H,et+wi),S.isDepthTexture?(Et&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(B).__webglTexture,H,wt+wi),I.blitFramebuffer(ze,je,de,Se,Oe,dt,de,Se,I.DEPTH_BUFFER_BIT,I.NEAREST)):Et?I.copyTexSubImage3D(Be,H,Oe,dt,wt+wi,ze,je,de,Se):I.copyTexSubImage2D(Be,H,Oe,dt,wt+wi,ze,je,de,Se);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Be,H,Oe,dt,wt,de,Se,Ne,hn,mt,St.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,H,Oe,dt,wt,de,Se,Ne,hn,St.data):I.texSubImage3D(Be,H,Oe,dt,wt,de,Se,Ne,hn,mt,St):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Oe,dt,de,Se,hn,mt,St.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Oe,dt,St.width,St.height,hn,St.data):I.texSubImage2D(I.TEXTURE_2D,H,Oe,dt,de,Se,hn,mt,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,_s),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vn),H===0&&B.generateMipmaps&&I.generateMipmap(Be),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,B,$=null,j=null,H=0){return S.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,S=arguments[2],B=arguments[3],H=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,$,j,H)},this.initRenderTarget=function(S){be.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){P=0,T=0,E=null,pe.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var ua=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},js=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ns=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=nn,u=nn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hr=class extends Dt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ns=new Ke,bf=new Ke,Bo=[],wf=new hi,oy=new Ke,Er=new Le,Tr=new ui,Js=class extends Le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,oy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),wf.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Tr.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),bf.multiplyMatrices(i,Ns),Er.matrixWorld=bf,Er.raycast(e,Bo);for(let o=0,a=Bo.length;o<a;o++){let l=Bo[o];l.instanceId=r,l.object=this,t.push(l)}Bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(s*this.count),s,this.count,Eh,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Vr=class extends qn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fa=new D,da=new D,Sf=new Ke,Ar=new kr,Ho=new ui,Bl=new D,Ef=new D,qc=class extends Ut{constructor(e=new Rt,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)fa.fromBufferAttribute(t,s-1),da.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=fa.distanceTo(da);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Sf.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),w=u.getX(x+1),v=Vo(this,e,Ar,l,p,w);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Vo(this,e,Ar,l,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Vo(this,e,Ar,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Vo(this,e,Ar,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vo(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),t.distanceSqToSegment(fa,da,Bl,Ef)>i)return;Bl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Bl);if(!(l<e.near||l>e.far))return{distance:l,point:Ef.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Tf=new D,Af=new D,pa=class extends qc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Tf.fromBufferAttribute(t,s),Af.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Tf.distanceTo(Af);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gr=class extends qn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rf=new Ke,Zc=new kr,Go=new ui,Wo=new D,ma=class extends Ut{constructor(e=new Rt,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Rf.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(Rf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Wo.fromBufferAttribute(h,m),Cf(Wo,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Wo.fromBufferAttribute(h,g),Cf(Wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cf(n,e,t,i,s,r,o){let a=Zc.distanceSqToPoint(n);if(a<t){let l=new D;Zc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ga=class extends fn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new D,s=[],r=[],o=[],a=new D,l=new Ke;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$c=class extends Wr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Xo=new D,Hl=new Lh,Vl=new Lh,Gl=new Lh,jc=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Hl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),Vl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),Gl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Vl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Gl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Hl.calc(l),Vl.calc(l),Gl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function ay(n,e){let t=1-n;return t*t*e}function ly(n,e){return 2*(1-n)*n*e}function cy(n,e){return n*n*e}function Ur(n,e,t,i){return ay(n,e)+ly(n,t)+cy(n,i)}function hy(n,e){let t=1-n;return t*t*t*e}function uy(n,e){let t=1-n;return 3*t*t*n*e}function fy(n,e){return 3*(1-n)*n*n*e}function dy(n,e){return n*n*n*e}function Nr(n,e,t,i,s){return hy(n,e)+uy(n,t)+fy(n,i)+dy(n,s)}var xa=class extends Cn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(e,s.x,r.x,o.x,a.x),Nr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends Cn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(e,s.x,r.x,o.x,a.x),Nr(e,s.y,r.y,o.y,a.y),Nr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Cn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends Cn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Cn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends Cn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y),Ur(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Pf(a,l.x,c.x,u.x,h.x),Pf(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},eh=Object.freeze({__proto__:null,ArcCurve:$c,CatmullRomCurve3:jc,CubicBezierCurve:xa,CubicBezierCurve3:Jc,EllipseCurve:Wr,LineCurve:va,LineCurve3:Kc,QuadraticBezierCurve:ya,QuadraticBezierCurve3:Qc,SplineCurve:_a}),th=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new eh[s.type]().fromJSON(s))}return this}},Xr=class extends th{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new va(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ya(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new xa(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new _a(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Wr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class n extends Rt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new D,f=new oe,d=new D,g=new D,x=new D,m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let w=0;w<=t;w++){let v=i+w*u*s,y=Math.sin(v),O=Math.cos(v);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*y,h.y=e[P].y,h.z=e[P].x*O,o.push(h.x,h.y,h.z),f.x=w/t,f.y=P/(e.length-1),a.push(f.x,f.y);let T=l[3*P+0]*y,E=l[3*P+1],M=l[3*P+0]*O;c.push(T,E,M)}}for(let w=0;w<t;w++)for(let v=0;v<e.length-1;v++){let y=v+w*e.length,O=y,P=y+e.length,T=y+e.length+1,E=y+1;r.push(O,P,E),r.push(T,E,P)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ma=class n extends is{constructor(e=1,t=1,i=4,s=8){let r=new Xr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},ss=class n extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=i+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},an=class n extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,x=[],m=i/2,p=0;w(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function w(){let y=new D,O=new D,P=0,T=(t-e)/i;for(let E=0;E<=r;E++){let M=[],_=E/r,R=_*(t-e)+e;for(let G=0;G<=s;G++){let U=G/s,N=U*l+a,Y=Math.sin(N),V=Math.cos(N);O.x=R*Y,O.y=-_*i+m,O.z=R*V,h.push(O.x,O.y,O.z),y.set(Y,T,V).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-_),M.push(g++)}x.push(M)}for(let E=0;E<s;E++)for(let M=0;M<r;M++){let _=x[M][E],R=x[M+1][E],G=x[M+1][E+1],U=x[M][E+1];(e>0||M!==0)&&(u.push(_,R,U),P+=3),(t>0||M!==r-1)&&(u.push(R,G,U),P+=3)}c.addGroup(p,P,0),p+=P}function v(y){let O=g,P=new oe,T=new D,E=0,M=y===!0?e:t,_=y===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;let R=g;for(let G=0;G<=s;G++){let N=G/s*l+a,Y=Math.cos(N),V=Math.sin(N);T.x=M*V,T.y=m*_,T.z=M*Y,h.push(T.x,T.y,T.z),f.push(0,_,0),P.x=Y*.5+.5,P.y=V*.5*_+.5,d.push(P.x,P.y),g++}for(let G=0;G<s;G++){let U=O+G,N=R+G;y===!0?u.push(N,N+1,U):u.push(N+1,N,U),E+=3}c.addGroup(p,E,y===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ba=class n extends an{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var rs=class extends Xr{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Xr().fromJSON(s))}return this}},py={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=rd(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(i&&(r=yy(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Yr(r,o,t,a,l,d,0),o}};function rd(n,e,t,i,s){let r,o;if(s===Py(n,e,t,i)>0)for(r=e;r<t;r+=i)o=If(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=If(r,n[r],n[r+1],o);return o&&Ba(o,o.next)&&(Zr(o),o=o.next),o}function os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ba(t,t.next)||At(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Yr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Sy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?gy(n,i,s,r):my(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Zr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=xy(os(n),e,t),Yr(n,e,t,i,s,r,2)):o===2&&vy(n,e,t,i,s,r):Yr(os(n),e,t,i,s,r,1);break}}}function my(n){let e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Fs(s,a,r,l,o,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(At(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,p=nh(d,g,e,t,i),w=nh(x,m,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=p&&y&&y.z<=w;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Fs(a,u,l,h,c,f,v.x,v.y)&&At(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Fs(a,u,l,h,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Fs(a,u,l,h,c,f,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=w;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Fs(a,u,l,h,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function xy(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ba(s,r)&&od(s,i,i.next,r)&&qr(s,r)&&qr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Zr(i),Zr(i.next),i=n=r),i=i.next}while(i!==n);return os(i)}function vy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ay(o,a)){let l=ad(o,a);o=os(o,o.next),l=os(l,l.next),Yr(o,e,t,i,s,r,0),Yr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function yy(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=rd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ty(c));for(s.sort(_y),r=0;r<s.length;r++)t=My(s[r],t);return t}function _y(n,e){return n.x-e.x}function My(n,e){let t=by(n,e);if(!t)return e;let i=ad(t,n);return os(i,i.next),os(t,t.next)}function by(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),qr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&wy(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function wy(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function Sy(n,e,t,i){let s=n;do s.z===0&&(s.z=nh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ey(s)}function Ey(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function nh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ty(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ay(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ry(n,e)&&(qr(n,e)&&qr(e,n)&&Cy(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||Ba(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ba(n,e){return n.x===e.x&&n.y===e.y}function od(n,e,t,i){let s=qo(At(n,e,t)),r=qo(At(n,e,i)),o=qo(At(t,i,n)),a=qo(At(t,i,e));return!!(s!==r&&o!==a||s===0&&Yo(n,t,e)||r===0&&Yo(n,i,e)||o===0&&Yo(t,n,i)||a===0&&Yo(t,e,i))}function Yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function Ry(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&od(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function qr(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function Cy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ad(n,e){let t=new ih(n.i,n.x,n.y),i=new ih(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function If(n,e,t,i){let s=new ih(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ih(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Py(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var zr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Df(e),Lf(i,e);let o=e.length;t.forEach(Df);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Lf(i,t[l]);let a=py.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Df(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ks=class n extends Rt{constructor(e=new rs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Iy,v,y=!1,O,P,T,E;p&&(v=p.getSpacedPoints(u),y=!0,f=!1,O=p.computeFrenetFrames(u,!1),P=new D,T=new D,E=new D),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(c),_=M.shape,R=M.holes;if(!zr.isClockWise(_)){_=_.reverse();for(let ne=0,fe=R.length;ne<fe;ne++){let I=R[ne];zr.isClockWise(I)&&(R[ne]=I.reverse())}}let U=zr.triangulateShape(_,R),N=_;for(let ne=0,fe=R.length;ne<fe;ne++){let I=R[ne];_=_.concat(I)}function Y(ne,fe,I){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(fe,I)}let V=_.length,te=U.length;function Z(ne,fe,I){let De,le,Ee,pe=ne.x-fe.x,Ge=ne.y-fe.y,be=I.x-ne.x,A=I.y-ne.y,b=pe*pe+Ge*Ge,q=pe*A-Ge*be;if(Math.abs(q)>Number.EPSILON){let Q=Math.sqrt(b),se=Math.sqrt(be*be+A*A),ee=fe.x-Ge/Q,Pe=fe.y+pe/Q,ge=I.x-A/se,Me=I.y+be/se,Je=((ge-ee)*A-(Me-Pe)*be)/(pe*A-Ge*be);De=ee+pe*Je-ne.x,le=Pe+Ge*Je-ne.y;let ce=De*De+le*le;if(ce<=2)return new oe(De,le);Ee=Math.sqrt(ce/2)}else{let Q=!1;pe>Number.EPSILON?be>Number.EPSILON&&(Q=!0):pe<-Number.EPSILON?be<-Number.EPSILON&&(Q=!0):Math.sign(Ge)===Math.sign(A)&&(Q=!0),Q?(De=-Ge,le=pe,Ee=Math.sqrt(b)):(De=pe,le=Ge,Ee=Math.sqrt(b/2))}return new oe(De/Ee,le/Ee)}let re=[];for(let ne=0,fe=N.length,I=fe-1,De=ne+1;ne<fe;ne++,I++,De++)I===fe&&(I=0),De===fe&&(De=0),re[ne]=Z(N[ne],N[I],N[De]);let me=[],_e,Ve=re.concat();for(let ne=0,fe=R.length;ne<fe;ne++){let I=R[ne];_e=[];for(let De=0,le=I.length,Ee=le-1,pe=De+1;De<le;De++,Ee++,pe++)Ee===le&&(Ee=0),pe===le&&(pe=0),_e[De]=Z(I[De],I[Ee],I[pe]);me.push(_e),Ve=Ve.concat(_e)}for(let ne=0;ne<m;ne++){let fe=ne/m,I=d*Math.cos(fe*Math.PI/2),De=g*Math.sin(fe*Math.PI/2)+x;for(let le=0,Ee=N.length;le<Ee;le++){let pe=Y(N[le],re[le],De);ue(pe.x,pe.y,-I)}for(let le=0,Ee=R.length;le<Ee;le++){let pe=R[le];_e=me[le];for(let Ge=0,be=pe.length;Ge<be;Ge++){let A=Y(pe[Ge],_e[Ge],De);ue(A.x,A.y,-I)}}}let rt=g+x;for(let ne=0;ne<V;ne++){let fe=f?Y(_[ne],Ve[ne],rt):_[ne];y?(T.copy(O.normals[0]).multiplyScalar(fe.x),P.copy(O.binormals[0]).multiplyScalar(fe.y),E.copy(v[0]).add(T).add(P),ue(E.x,E.y,E.z)):ue(fe.x,fe.y,0)}for(let ne=1;ne<=u;ne++)for(let fe=0;fe<V;fe++){let I=f?Y(_[fe],Ve[fe],rt):_[fe];y?(T.copy(O.normals[ne]).multiplyScalar(I.x),P.copy(O.binormals[ne]).multiplyScalar(I.y),E.copy(v[ne]).add(T).add(P),ue(E.x,E.y,E.z)):ue(I.x,I.y,h/u*ne)}for(let ne=m-1;ne>=0;ne--){let fe=ne/m,I=d*Math.cos(fe*Math.PI/2),De=g*Math.sin(fe*Math.PI/2)+x;for(let le=0,Ee=N.length;le<Ee;le++){let pe=Y(N[le],re[le],De);ue(pe.x,pe.y,h+I)}for(let le=0,Ee=R.length;le<Ee;le++){let pe=R[le];_e=me[le];for(let Ge=0,be=pe.length;Ge<be;Ge++){let A=Y(pe[Ge],_e[Ge],De);y?ue(A.x,A.y+v[u-1].y,v[u-1].x+I):ue(A.x,A.y,h+I)}}}K(),he();function K(){let ne=s.length/3;if(f){let fe=0,I=V*fe;for(let De=0;De<te;De++){let le=U[De];Ie(le[2]+I,le[1]+I,le[0]+I)}fe=u+m*2,I=V*fe;for(let De=0;De<te;De++){let le=U[De];Ie(le[0]+I,le[1]+I,le[2]+I)}}else{for(let fe=0;fe<te;fe++){let I=U[fe];Ie(I[2],I[1],I[0])}for(let fe=0;fe<te;fe++){let I=U[fe];Ie(I[0]+V*u,I[1]+V*u,I[2]+V*u)}}i.addGroup(ne,s.length/3-ne,0)}function he(){let ne=s.length/3,fe=0;Ae(N,fe),fe+=N.length;for(let I=0,De=R.length;I<De;I++){let le=R[I];Ae(le,fe),fe+=le.length}i.addGroup(ne,s.length/3-ne,1)}function Ae(ne,fe){let I=ne.length;for(;--I>=0;){let De=I,le=I-1;le<0&&(le=ne.length-1);for(let Ee=0,pe=u+m*2;Ee<pe;Ee++){let Ge=V*Ee,be=V*(Ee+1),A=fe+De+Ge,b=fe+le+Ge,q=fe+le+be,Q=fe+De+be;He(A,b,q,Q)}}}function ue(ne,fe,I){l.push(ne),l.push(fe),l.push(I)}function Ie(ne,fe,I){ke(ne),ke(fe),ke(I);let De=s.length/3,le=w.generateTopUV(i,s,De-3,De-2,De-1);ot(le[0]),ot(le[1]),ot(le[2])}function He(ne,fe,I,De){ke(ne),ke(fe),ke(De),ke(fe),ke(I),ke(De);let le=s.length/3,Ee=w.generateSideWallUV(i,s,le-6,le-3,le-2,le-1);ot(Ee[0]),ot(Ee[1]),ot(Ee[3]),ot(Ee[1]),ot(Ee[2]),ot(Ee[3])}function ke(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function ot(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Dy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new eh[s.type]().fromJSON(s)),new n(i,e.options)}},Iy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-h),new oe(f,1-g),new oe(x,1-p)]:[new oe(a,1-l),new oe(u,1-h),new oe(d,1-g),new oe(m,1-p)]}};function Dy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wa=class n extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new D,g=new oe;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let w=p+m,v=w,y=w+i+1,O=w+i+2,P=w+1;a.push(v,y,P),a.push(y,O,P)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ot=class n extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let w=[],v=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let O=0;O<=t;O++){let P=O/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(P+y,1-v),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let v=u[p][w+1],y=u[p][w],O=u[p+1][w],P=u[p+1][w+1];(p!==0||o>0)&&d.push(v,y,P),(p!==i-1||l<Math.PI)&&d.push(y,O,P)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qs=class n extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(x,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Sa=class extends Mt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},qt=class extends qn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ea=class extends qt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ta=class extends qn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Zo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ly(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var er=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends er{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=e,a=2*t-i;break;case Tu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:o=e,l=2*i-t;break;case Tu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,w=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,y=d*m-d*x;for(let O=0;O!==a;++O)r[O]=p*o[u+O]+w*o[c+O]+v*o[l+O]+y*o[h+O];return r}},rh=class extends er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},oh=class extends er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case Pc:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Pc;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ly(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Pc;var as=class extends kn{constructor(e,t,i){super(e,t,i)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=ea;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends kn{};ah.prototype.ValueTypeName="color";var lh=class extends kn{};lh.prototype.ValueTypeName="number";var ch=class extends er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Aa=class extends kn{InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}};Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends kn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ea;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var hh=class extends kn{};hh.prototype.ValueTypeName="vector";var uh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},Uy=new uh,fh=class{constructor(e){this.manager=e!==void 0?e:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ra=class extends tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wl=new Ke,Uf=new D,Nf=new D,Ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var zf=new Ke,Rr=new D,Xl=new D,dh=class extends Ca{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rr),Xl.copy(i.position),Xl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xl),i.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),zf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf)}},nr=class extends tr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ph=class extends Ca{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ia=class extends tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Da=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Of(){return performance.now()}var Uh="\\[\\]\\.:\\/",Ny=new RegExp("["+Uh+"]","g"),Nh="[^"+Uh+"]",zy="[^"+Uh.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Fy=/(WCOD+)?/.source.replace("WCOD",zy),ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Hy=new RegExp("^"+Oy+Fy+ky+By+"$"),Vy=["material","materials","bones","map"],mh=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ny,"")}static parseTrackName(e){let t=Hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=mh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Fi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Gy=new qs(-1,1,1,-1,0,1),zh=class extends Rt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},Wy=new zh,$n=class{constructor(e){this._mesh=new Le(Wy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ha=class extends ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $n(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jr=class extends ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Va=class extends ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ga=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ha(Fi),this.copyPass.material.blending=kt,this.clock=new Da}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(o instanceof jr?i=!0:o instanceof Va&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wa=class extends ln{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ld={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var or=class n extends ln{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Xt(r,o,{type:dn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Xt(r,o,{type:dn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ld;this.highPassUniforms=pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Fi;this.copyUniforms=pn.clone(u.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new $n(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};or.BlurDirectionX=new oe(1,0);or.BlurDirectionY=new oe(0,1);var Jr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ke},cameraWorldMatrix:{value:new Ke},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},Kr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Xa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function cd(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=Xy(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ns(s,e,e);return r.wrapS=ci,r.wrapT=ci,r.needsUpdate=!0,r}function Xy(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Qr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Oh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Ke},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Oh(n,e,t){let i=Yy(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function Yy(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new D(Math.cos(r),Math.sin(r),o))}return i}var Ya=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,g=e-f,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let w=g-m+u,v=x-p+u,y=g-1+2*u,O=x-1+2*u,P=l&255,T=c&255,E=this.perm[P+this.perm[T]]%12,M=this.perm[P+m+this.perm[T+p]]%12,_=this.perm[P+1+this.perm[T+1]]%12,R=.5-g*g-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[E],g,x));let G=.5-w*w-v*v;G<0?s=0:(G*=G,s=G*G*this.dot(this.grad3[M],w,v));let U=.5-y*y-O*O;return U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[_],y,O)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(i+c),d=1/6,g=(u+h+f)*d,x=u-g,m=h-g,p=f-g,w=e-x,v=t-m,y=i-p,O,P,T,E,M,_;w>=v?v>=y?(O=1,P=0,T=0,E=1,M=1,_=0):w>=y?(O=1,P=0,T=0,E=1,M=0,_=1):(O=0,P=0,T=1,E=1,M=0,_=1):v<y?(O=0,P=0,T=1,E=0,M=1,_=1):w<y?(O=0,P=1,T=0,E=0,M=1,_=1):(O=0,P=1,T=0,E=1,M=1,_=0);let R=w-O+d,G=v-P+d,U=y-T+d,N=w-E+2*d,Y=v-M+2*d,V=y-_+2*d,te=w-1+3*d,Z=v-1+3*d,re=y-1+3*d,me=u&255,_e=h&255,Ve=f&255,rt=this.perm[me+this.perm[_e+this.perm[Ve]]]%12,K=this.perm[me+O+this.perm[_e+P+this.perm[Ve+T]]]%12,he=this.perm[me+E+this.perm[_e+M+this.perm[Ve+_]]]%12,Ae=this.perm[me+1+this.perm[_e+1+this.perm[Ve+1]]]%12,ue=.6-w*w-v*v-y*y;ue<0?s=0:(ue*=ue,s=ue*ue*this.dot3(this.grad3[rt],w,v,y));let Ie=.6-R*R-G*G-U*U;Ie<0?r=0:(Ie*=Ie,r=Ie*Ie*this.dot3(this.grad3[K],R,G,U));let He=.6-N*N-Y*Y-V*V;He<0?o=0:(He*=He,o=He*He*this.dot3(this.grad3[he],N,Y,V));let ke=.6-te*te-Z*Z-re*re;return ke<0?a=0:(ke*=ke,a=ke*ke*this.dot3(this.grad3[Ae],te,Z,re)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,g,x=(e+t+i+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),w=Math.floor(i+x),v=Math.floor(s+x),y=(m+p+w+v)*c,O=m-y,P=p-y,T=w-y,E=v-y,M=e-O,_=t-P,R=i-T,G=s-E,U=M>_?32:0,N=M>R?16:0,Y=_>R?8:0,V=M>G?4:0,te=_>G?2:0,Z=R>G?1:0,re=U+N+Y+V+te+Z,me=o[re][0]>=3?1:0,_e=o[re][1]>=3?1:0,Ve=o[re][2]>=3?1:0,rt=o[re][3]>=3?1:0,K=o[re][0]>=2?1:0,he=o[re][1]>=2?1:0,Ae=o[re][2]>=2?1:0,ue=o[re][3]>=2?1:0,Ie=o[re][0]>=1?1:0,He=o[re][1]>=1?1:0,ke=o[re][2]>=1?1:0,ot=o[re][3]>=1?1:0,ne=M-me+c,fe=_-_e+c,I=R-Ve+c,De=G-rt+c,le=M-K+2*c,Ee=_-he+2*c,pe=R-Ae+2*c,Ge=G-ue+2*c,be=M-Ie+3*c,A=_-He+3*c,b=R-ke+3*c,q=G-ot+3*c,Q=M-1+4*c,se=_-1+4*c,ee=R-1+4*c,Pe=G-1+4*c,ge=m&255,Me=p&255,Je=w&255,ce=v&255,Re=a[ge+a[Me+a[Je+a[ce]]]]%32,Xe=a[ge+me+a[Me+_e+a[Je+Ve+a[ce+rt]]]]%32,qe=a[ge+K+a[Me+he+a[Je+Ae+a[ce+ue]]]]%32,Ce=a[ge+Ie+a[Me+He+a[Je+ke+a[ce+ot]]]]%32,at=a[ge+1+a[Me+1+a[Je+1+a[ce+1]]]]%32,Ze=.6-M*M-_*_-R*R-G*G;Ze<0?u=0:(Ze*=Ze,u=Ze*Ze*this.dot4(r[Re],M,_,R,G));let ft=.6-ne*ne-fe*fe-I*I-De*De;ft<0?h=0:(ft*=ft,h=ft*ft*this.dot4(r[Xe],ne,fe,I,De));let F=.6-le*le-Ee*Ee-pe*pe-Ge*Ge;F<0?f=0:(F*=F,f=F*F*this.dot4(r[qe],le,Ee,pe,Ge));let xe=.6-be*be-A*A-b*b-q*q;xe<0?d=0:(xe*=xe,d=xe*xe*this.dot4(r[Ce],be,A,b,q));let J=.6-Q*Q-se*se-ee*ee-Pe*Pe;return J<0?g=0:(J*=J,g=J*J*this.dot4(r[at],Q,se,ee,Pe)),27*(u+h+f+d+g)}};var ar=class n extends ln{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=cd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:dn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Mt({defines:Object.assign({},Jr.defines),uniforms:pn.clone(Jr.uniforms),vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ta,this.normalMaterial.blending=kt,this.pdMaterial=new Mt({defines:Object.assign({},Qr.defines),uniforms:pn.clone(Qr.uniforms),vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Mt({defines:Object.assign({},Kr.defines),uniforms:pn.clone(Kr.uniforms),vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:pn.clone(Fi.uniforms),vertexShader:Fi.vertexShader,fragmentShader:Fi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:za,blendDst:ir,blendEquation:An,blendSrcAlpha:Na,blendDstAlpha:ir,blendEquationAlpha:An}),this.blendMaterial=new Mt({uniforms:pn.clone(Xa.uniforms),vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:gh,blendSrc:za,blendDst:ir,blendEquation:An,blendSrcAlpha:Na,blendDstAlpha:ir,blendEquationAlpha:An}),this.fsQuad=new $n(null),this.originalClearColor=new Ue,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new $s,this.depthTexture.format=Ni,this.depthTexture.type=Ui,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:nn,magFilter:nn,type:dn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Oh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new Ya,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ns(s,e,e,Mn,On);return r.wrapS=ci,r.wrapT=ci,r.needsUpdate=!0,r}};ar.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var hd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qa=class extends ln{constructor(){super();let e=hd;this.uniforms=pn.clone(e.uniforms),this.material=new Sa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new $n(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$r&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Za=class extends js{constructor(){super();let e=new Fn;e.deleteAttribute("uv");let t=new qt({side:Wt}),i=new qt,s=new nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Le(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Le(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Le(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Le(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Le(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Le(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new Le(e,lr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Le(e,lr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Le(e,lr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Le(e,lr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new Le(e,lr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Le(e,lr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function lr(n){let e=new Yt;return e.color.setScalar(n),e}var W={quality:"high",ao:!0,renderer:null,scene:null,camera:null,composer:null,sky:null,sun:null,hemi:null,focus:new D,fps:60,slowT:0,autoStep:!0,onStepDown:null,shake:0,t:0,mood:null,moodT:null},ud={sunny:{top:2009087,hor:12580095,elev:48,azim:140,sunI:2.4,hemiI:1.05,fog:11988223,fogNear:90,fogFar:320,exp:1,env:.45,sunCol:16774364,gnd:10474106},desert:{top:2857983,hor:16771522,elev:50,azim:120,sunI:2.5,hemiI:1,fog:16638907,fogNear:90,fogFar:320,exp:1,env:.45,sunCol:16773328,gnd:15255184},storm:{top:3886991,hor:9414607,elev:30,azim:160,sunI:1.2,hemiI:1.05,fog:9348041,fogNear:35,fogFar:170,exp:1,env:.4,sunCol:14082815,gnd:8362634},dusk:{top:5983190,hor:16754554,elev:14,azim:250,sunI:2,hemiI:1,fog:16756874,fogNear:55,fogFar:240,exp:1,env:.4,sunCol:16760970,gnd:11569786},snow:{top:7321343,hor:15398655,elev:32,azim:150,sunI:1.5,hemiI:1.3,fog:15004415,fogNear:18,fogFar:120,exp:1,env:.5,sunCol:15923455,gnd:14214898},volcano:{top:8007600,hor:16747082,elev:22,azim:200,sunI:2,hemiI:1,fog:16751210,fogNear:40,fogFar:190,exp:1,env:.4,sunCol:16756848,gnd:10119770},alien:{top:2759290,hor:13855999,elev:18,azim:300,sunI:1.4,hemiI:1,fog:10119896,fogNear:50,fogFar:220,exp:1,env:.45,sunCol:14207231,gnd:6982266},quake:{top:3120127,hor:16769200,elev:40,azim:140,sunI:2.3,hemiI:1.15,fog:15916216,fogNear:55,fogFar:240,exp:1,env:.45,sunCol:16773328,gnd:13152400}};function dd(n){let e=W.renderer=new ha({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1});e.outputColorSpace=un,e.toneMapping=$r,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Ua;let t=W.scene=new js;(W.camera=new tn(55,1,.1,600)).position.set(20,20,20);let s=new Zs(e);t.environment=s.fromScene(new Za,.04).texture,t.environmentIntensity=.55;let r=W.sky=new Le(new Ot(500,32,16),new Mt({side:Wt,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{top:{value:new Ue(2009087)},hor:{value:new Ue(12580095)},sunDir:{value:new D(0,1,0)},sunCol:{value:new Ue(16774364)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:"uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = mix(hor, top, pow(max(h,0.0), 0.55)); float s = max(dot(normalize(vP), normalize(sunDir)), 0.0); c += sunCol * (pow(s, 600.0) * 1.6 + pow(s, 12.0) * 0.25); gl_FragColor = vec4(c, 1.0); }"}));r.frustumCulled=!1,r.renderOrder=-1,t.add(r),t.fog=new ua(11988223,70,280),W.hemi=new Ra(14217727,10474106,1.25),t.add(W.hemi),W.amb=new Ia(16777215,.12),t.add(W.amb);let o=W.sun=new Pa(16773590,2.6);o.castShadow=!0,o.shadow.bias=-4e-4,o.shadow.normalBias=.03;let a=o.shadow.camera;return a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=220,t.add(o),t.add(o.target),W.flash=new nr(13624319,0,120,1.2),t.add(W.flash),to("sunny",!0),window.addEventListener("resize",kh),eo(W.quality),kh(),W}function qy(){let n=W.renderer;if(W.composer&&(W.composer.dispose&&W.composer.dispose(),W.composer=null),W.quality!=="high")return;let e=innerWidth,t=innerHeight,i=new Ga(n);if(i.addPass(new Wa(W.scene,W.camera)),W.ao){let r=new ar(W.scene,W.camera,e,t);r.output=ar.OUTPUT.Default,r.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:1.5,scale:1,samples:12}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),r.blendIntensity=.7,i.addPass(r),W.aoPass=r}else W.aoPass=null;let s=new or(new oe(e,t),.28,.45,.95);i.addPass(s),W.bloom=s,i.addPass(new qa),W.composer=i}function eo(n){W.quality=n==="low"?"low":"high";let e=W.renderer,t=window.devicePixelRatio||1;e.setPixelRatio(W.quality==="high"?Math.min(t,2):Math.min(t,1.25)),e.shadowMap.enabled=!0;let i=W.quality==="high"?2048:1024;W.sun.shadow.mapSize.x!==i&&(W.sun.shadow.mapSize.set(i,i),W.sun.shadow.map&&(W.sun.shadow.map.dispose(),W.sun.shadow.map=null)),e.shadowMap.type=W.quality==="high"?Ua:La,W.scene.traverse(s=>{s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>o.needsUpdate=!0)}),qy(),kh(),W.slowT=0}function kh(){if(!W.renderer)return;let n=innerWidth,e=innerHeight;W.renderer.setSize(n,e,!1),W.camera.aspect=n/e,W.camera.fov=n<e?62:52,W.camera.updateProjectionMatrix(),W.composer&&W.composer.setSize(n,e)}var Fh=new Ue,fd=new Ue;function to(n,e){let t=ud[n]||ud.sunny;W.moodT=t,W.moodName=n,(e||!W.mood)&&(W.mood=Object.assign({},t))}function Zy(n){let e=W.mood,t=W.moodT,i=Math.min(1,n*.8);for(let l in t)l==="fog"||l==="sunCol"||l==="top"||l==="hor"||l==="gnd"?(Fh.setHex(e[l]),fd.setHex(t[l]),Fh.lerp(fd,i),e[l]=Fh.getHex()):e[l]+=(t[l]-e[l])*i;let s=W.sky.material.uniforms;s.top.value.setHex(e.top),s.hor.value.setHex(e.hor),s.sunCol.value.setHex(e.sunCol);let r=Ih.degToRad(90-e.elev),o=Ih.degToRad(e.azim),a=new D().setFromSphericalCoords(1,r,o);s.sunDir.value.copy(a),W.sky.position.copy(W.camera.position),W.hemi.groundColor.setHex(e.gnd),W.sunDir=a,W.sun.intensity=e.sunI,W.sun.color.setHex(e.sunCol),W.hemi.intensity=e.hemiI,W.scene.fog.color.setHex(e.fog),W.scene.fog.near=e.fogNear*(W.quality==="low"?.8:1),W.scene.fog.far=e.fogFar*(W.quality==="low"?.8:1),W.renderer.toneMappingExposure=e.exp,W.scene.environmentIntensity=e.env}function pd(n){W.t+=n,Zy(n);let e=W.focus,t=W.sunDir||new D(.5,.8,.3),i=76/W.sun.shadow.mapSize.x,s=Math.round(e.x/i)*i,r=Math.round(e.z/i)*i;W.sun.position.set(s+t.x*90,Math.max(e.y,0)+Math.max(.25,t.y)*90,r+t.z*90),W.sun.target.position.set(s,Math.max(e.y,0),r),W.sun.target.updateMatrixWorld(),W.flash.intensity>0&&(W.flash.intensity=Math.max(0,W.flash.intensity-n*60)),W.composer?W.composer.render(n):W.renderer.render(W.scene,W.camera),n>0&&(W.fps+=(1/Math.max(n,.001)-W.fps)*.05),W.autoStep&&W.quality==="high"&&W.fps<30?(W.slowT+=n,W.slowT>5&&(eo("low"),W.onStepDown&&W.onStepDown())):W.slowT=Math.max(0,W.slowT-n*2)}var no=new D;function Pn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;no.copy(e),no[i]=0,no.normalize();let c=.5*o/(o+a),u=1-no.angleTo(n)/l;return Math.sign(no[t])===1?u*c:a/(o+a)+c+c*(1-u)}var $a=class extends Fn{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,l=new D,c=new D(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new D,x=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Pn(g,l,"z","y",r,i),f[p+1]=1-Pn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Pn(g,l,"z","y",r,i),f[p+1]=1-Pn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Pn(g,l,"x","z",r,e),f[p+1]=Pn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[p+0]=1-Pn(g,l,"x","z",r,e),f[p+1]=1-Pn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[p+0]=1-Pn(g,l,"x","y",r,e),f[p+1]=1-Pn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Pn(g,l,"x","y",r,e),f[p+1]=1-Pn(g,l,"y","x",r,t);break}}};function ja(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Rt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=md(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);let g=md(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function md(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Dt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){let x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var cr=new Map;function z(n,e){e=e||{};let t=n+"|"+JSON.stringify(e),i=cr.get(t);if(i)return i;let s={color:n,roughness:e.r!=null?e.r:.6,metalness:e.m||0};return e.e!=null&&(s.emissive=e.e,s.emissiveIntensity=e.ei!=null?e.ei:1),e.op!=null&&(s.transparent=!0,s.opacity=e.op,s.depthWrite=e.dw!=null?e.dw:!1),e.side&&(s.side=e.side),e.cc?(s.clearcoat=e.cc,s.clearcoatRoughness=e.ccr!=null?e.ccr:.25,i=new Ea(s)):i=new qt(s),e.flat&&(i.flatShading=!0),cr.set(t,i),i}function Bn(n,e){let t="glow|"+n+"|"+e,i=cr.get(t);return i||(i=new Yt({color:n,transparent:!0,opacity:e??.6,blending:Li,depthWrite:!1,toneMapped:!1}),cr.set(t,i),i)}function gd(n,e){e=e||{};let t="basic|"+n+JSON.stringify(e),i=cr.get(t);return i||(i=new Yt(Object.assign({color:n,toneMapped:e.tm!==void 0?e.tm:!1},e.p||{})),cr.set(t,i),i)}var xd=new Map;function fi(n,e){let t=xd.get(n);return t||(t=e(),xd.set(n,t)),t}var L={sphere:(n,e=24,t=16)=>fi("s"+n+e+t,()=>new Ot(n,e,t)),cap:(n,e,t=16)=>fi("c"+n+e+t,()=>new Ma(n,e,6,t)),rbox:(n,e,t,i=.08,s=3)=>fi("rb"+[n,e,t,i,s],()=>new $a(n,e,t,s,Math.min(i,n/2-.001,e/2-.001,t/2-.001))),box:(n,e,t)=>fi("b"+[n,e,t],()=>new Fn(n,e,t)),cyl:(n,e,t,i=24)=>fi("cy"+[n,e,t,i],()=>new an(n,e,t,i)),cone:(n,e,t=24)=>fi("co"+[n,e,t],()=>new ba(n,e,t)),torus:(n,e,t=Math.PI*2,i=12,s=32)=>fi("t"+[n,e,t,i,s],()=>new Qs(n,e,i,s,t)),star:(n=.5,e=.18)=>fi("star"+n+e,()=>{let t=new rs;for(let s=0;s<10;s++){let r=s/10*Math.PI*2+Math.PI/2,o=s%2?n*.45:n,a=Math.cos(r)*o,l=Math.sin(r)*o;s?t.lineTo(a,l):t.moveTo(a,l)}let i=new Ks(t,{depth:e,bevelEnabled:!0,bevelThickness:e*.5,bevelSize:n*.12,bevelSegments:3});return i.center(),i}),rock:(n=1,e=1)=>fi("rock"+n+e,()=>{let t=new Ot(e,18,12),i=t.attributes.position,s=new D;for(let r=0;r<i.count;r++){s.fromBufferAttribute(i,r);let o=1+.18*Math.sin(s.x*3.1+n)*Math.cos(s.y*2.7+n*2)+.1*Math.sin(s.z*5+n*3);s.multiplyScalar(o),s.y*=.75,i.setXYZ(r,s.x,s.y,s.z)}return t.computeVertexNormals(),t})},sM=new Ke,$y=new Yn,jy=new Rn,Jy=new D,Ky=new D;function ht(n,e,t,i=0,s=0,r=0,o=1,a=o,l=o){return new Ke().compose(Ky.set(n,e,t),$y.setFromEuler(jy.set(i,s,r)),Jy.set(o,a,l))}var di=class{constructor(){this.groups=new Map}add(e,t,i){let s=this.groups.get(t);s||(s=[],this.groups.set(t,s));let r=e.index?e.toNonIndexed():e.clone();r.attributes.uv||r.setAttribute("uv",new Dt(new Float32Array(r.attributes.position.count*2),2));for(let o of Object.keys(r.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&r.deleteAttribute(o);return r.applyMatrix4(i),s.push(r),this}mesh(e,t,i,s,r,o,a,l,c,u,h){return this.add(e,t,ht(i,s,r,o,a,l,c,u,h))}box(e,t,i,s,r,o,a,l=0){return this.add(L.box(t,i,s),e,ht(r,o,a,0,l,0))}rbox(e,t,i,s,r,o,a,l,c=0){return this.add(L.rbox(t,i,s,r),e,ht(o,a,l,0,c,0))}build(e,t={}){let i=[];for(let[s,r]of this.groups){if(!r.length)continue;let o=ja(r,!1);r.forEach(l=>l.dispose());let a=new Le(o,s);a.castShadow=t.cast!==!1&&!s.transparent,a.receiveShadow=t.receive!==!1,a.matrixAutoUpdate=!1,a.updateMatrix(),e.add(a),i.push(a)}return this.groups.clear(),i}};function ve(n,e,t=0,i=0,s=0,r,o=!0){let a=new Le(n,e);return a.position.set(t,i,s),a.castShadow=o,a.receiveShadow=!0,r&&r.add(a),a}var Qy=[16173472,14723449,12155471,9067067,16767416];function vd(n){n=Object.assign({skin:Qy[0],shirt:3900150,pants:3359061,hair:3810582,hat:"cap",hatColor:15680580,shoes:16777215},n||{});let e=new $e,t=new $e;e.add(t);let i=z(n.skin,{r:.55}),s=z(n.shirt,{r:.7}),r=z(n.pants,{r:.75}),o=z(n.shoes,{r:.4,cc:.4}),a={root:e,body:t,look:n};a.legs=[-1,1].map(m=>{let p=new $e;p.position.set(m*.13,.78,0),t.add(p),ve(L.cap(.115,.42),r,0,-.32,0,p);let w=ve(L.rbox(.2,.15,.32,.07),o,0,-.71,.05,p);return ve(L.rbox(.21,.05,.33,.02),z(2238513),0,-.775,.05,p),p}),ve(L.sphere(.26,20,14),r,0,.84,0,t).scale.set(1,.7,.85),ve(L.cap(.25,.3),s,0,1.07,0,t).scale.set(1,1,.82),ve(L.torus(.2,.035,Math.PI*2,8,24),z(16777215,{r:.6}),0,1.33,0,t).rotation.x=Math.PI/2,a.arms=[-1,1].map(m=>{let p=new $e;return p.position.set(m*.31,1.27,0),t.add(p),ve(L.sphere(.1,14,10),s,0,0,0,p),ve(L.cap(.08,.32),s,0,-.2,0,p),ve(L.sphere(.095,14,10),i,0,-.45,0,p),p.rotation.z=m*.12,p});let c=a.head=new $e;c.position.set(0,1.42,0),t.add(c),ve(L.sphere(.34,32,24),i,0,.3,0,c);let u=ve(new Ot(.355,32,16,0,Math.PI*2,0,Math.PI*.42),z(n.hair,{r:.8}),0,.31,-.01,c);u.rotation.x=-.25;let h=z(16777215,{r:.2,cc:.6}),f=z(1119256,{r:.15,cc:1});[-1,1].forEach(m=>{ve(L.sphere(.085,16,12),h,m*.125,.33,.27,c,!1).scale.set(.9,1.1,.6),ve(L.sphere(.05,14,10),f,m*.125,.33,.315,c,!1).scale.set(1,1.15,.6),ve(L.sphere(.016,8,6),z(16777215,{e:16777215,ei:1}),m*.125+.018,.355,.34,c,!1),ve(L.sphere(.05,12,8),z(16748451,{r:.8}),m*.2,.22,.25,c,!1).scale.set(1,.6,.4)});let d=a.mouth=ve(L.torus(.065,.018,Math.PI,8,16),z(5971229,{r:.5}),0,.2,.31,c,!1);d.rotation.z=Math.PI,a.hatG=new $e,a.hatG.position.y=.3,c.add(a.hatG),a.backG=new $e,a.backG.position.set(0,1.1,-.22),t.add(a.backG),e_(a,n.hat,n.hatColor);let g=a.stars=new $e;g.position.y=2.25,g.visible=!1,e.add(g);for(let m=0;m<5;m++){let p=ve(L.star(.11,.05),z(16765503,{e:16757504,ei:.8,r:.3}),Math.cos(m/5*6.283)*.42,0,Math.sin(m/5*6.283)*.42,g,!1);p.rotation.x=-.3}let x=a.umbrella=new $e;return x.position.set(.32,1.25,0),x.visible=!1,t.add(x),ve(L.cyl(.02,.02,1.2,8),z(4473924,{m:.6,r:.3}),0,.5,0,x),ve(new Ot(.75,24,8,0,Math.PI*2,0,Math.PI*.32),z(16732067,{r:.45,cc:.5,side:zt}),0,.45,0,x),a.bubble=ve(L.sphere(1.1,32,20),Bn(8246268,.25),0,.95,0,e,!1),a.bubble.visible=!1,a.flames=new $e,a.flames.visible=!1,a.backG.add(a.flames),[-.12,.12].forEach(m=>ve(L.cone(.08,.45,12),Bn(16753981,.85),m,-.45,-.05,a.flames,!1).rotation.x=Math.PI),e.traverse(m=>{m.isMesh&&(m.castShadow=m.castShadow!==!1)}),a.walk=0,a.stun=0,a}function e_(n,e,t=15680580){let i=n.hatG;for(;i.children.length;)i.remove(i.children[0]);let s=z(t,{r:.5,cc:.3});if(e==="cap")ve(new Ot(.36,28,12,0,Math.PI*2,0,Math.PI/2),s,0,.02,0,i),ve(L.cyl(.3,.3,.03,24),s,0,.03,.25,i).scale.set(1,1,.8);else if(e==="hardhat"){let r=z(16761370,{r:.35,cc:.8});ve(new Ot(.38,28,12,0,Math.PI*2,0,Math.PI/2),r,0,.03,0,i),ve(L.cyl(.46,.46,.04,28),r,0,.04,.03,i),ve(L.rbox(.08,.12,.62,.03),r,0,.32,0,i)}else if(e==="cowboy"){let r=z(9132587,{r:.8});ve(L.cyl(.6,.6,.04,32),r,0,.06,0,i),ve(L.cyl(.26,.32,.36,24),r,0,.24,0,i),ve(L.torus(.31,.03,6.28,8,24),z(3875604),0,.12,0,i).rotation.x=Math.PI/2}else if(e==="crown"){let r=z(16764723,{r:.2,m:1});ve(L.cyl(.27,.25,.16,28,1),r,0,.12,0,i);for(let o=0;o<6;o++){let a=o/6*6.283;ve(L.cone(.06,.16,10),r,Math.cos(a)*.24,.27,Math.sin(a)*.24,i),ve(L.sphere(.035,10,8),z(16723285,{r:.1,cc:1}),Math.cos(a)*.27,.12,Math.sin(a)*.27,i)}}else if(e==="party")ve(L.cone(.18,.5,24),s,0,.3,0,i),ve(L.sphere(.07,12,8),z(16777215),0,.57,0,i);else if(e==="astro")ve(L.sphere(.5,32,24),z(12576511,{r:.05,op:.28,cc:1}),0,0,.02,i,!1),ve(L.torus(.42,.06,6.28,10,32),z(15857145,{r:.4}),0,-.3,0,i).rotation.x=Math.PI/2;else if(e==="dino"){let r=z(4906624,{r:.6});ve(new Ot(.39,28,14,0,Math.PI*2,0,Math.PI*.55),r,0,-.03,-.02,i);for(let o=0;o<4;o++)ve(L.cone(.07,.18,10),z(16436245),0,.36-o*.04,-.1-o*.12,i).rotation.x=-.5-o*.25}else if(e==="beanie")ve(new Ot(.37,28,12,0,Math.PI*2,0,Math.PI/2),s,0,-.02,0,i),ve(L.sphere(.09,12,8),z(16777215,{r:.9}),0,.37,0,i);else if(e==="chef"){let r=z(16777215,{r:.8});ve(L.cyl(.3,.3,.25,24),r,0,.12,0,i),[[0,.38,0],[.15,.33,.05],[-.15,.33,.05],[0,.33,-.15]].forEach(o=>ve(L.sphere(.2,16,12),r,o[0],o[1],o[2],i))}}function yd(n,e){let t=n.backG;if(t.children.filter(o=>o.userData.jp).forEach(o=>t.remove(o)),!e)return;let i=new $e;i.userData.jp=!0,t.add(i);let s=z(13358561,{r:.25,m:.8}),r=z(15680580,{r:.4,cc:.6});[-.12,.12].forEach(o=>{ve(L.cap(.09,.3),s,o,0,-.05,i),ve(L.sphere(.09,12,8),r,o,.25,-.05,i)})}function _d(n,e,t,i,s){let r=n.body,o=n.legs,a=n.arms;n.walk+=t*(e==="run"?9*Math.max(.6,i):0);let l=0,c=0,u=0,h=0,f=0,d=0,g=0,x=.12,m=-.12;if(n.stars.visible=e==="ko",e==="run"){let v=Math.sin(n.walk);l=v*.9,c=-v*.9,u=-v*.8,h=v*.8,f=Math.abs(Math.cos(n.walk))*.07,d=.12}else if(e==="jump")l=-.5,c=.3,u=-2.6,h=-2.6,x=.5,m=-.5;else if(e==="swim"){let v=Math.sin(s*6);u=-2.4+v,h=-2.4-v,l=v*.5,c=-v*.5,d=1.1,f=-.6}else if(e==="ko")d=-1.45,f=.18,u=-2.8,h=-2.8,x=.6,m=-.6,n.stars.rotation.y+=t*4;else if(e==="cover")f=-.42,l=-1.3,c=-1.3,u=-2.9,h=-2.9,x=.35,m=-.35,d=.35;else if(e==="float"){let v=Math.sin(s*4);u=-2.5+v*.4,h=-2.5-v*.4,l=v*.6,c=-v*.6,g=Math.sin(s*2)*.4}else if(e==="panic"){let v=Math.sin(s*16);u=-2.9+v*.3,h=-2.9-v*.3,l=Math.sin(s*14)*.7,c=-l,f=Math.abs(v)*.05}else{let v=Math.sin(s*2);f=v*.015,u=v*.05,h=-v*.05}let p=Math.min(1,t*14),w=(v,y)=>v+(y-v)*p;o[0].rotation.x=w(o[0].rotation.x,l),o[1].rotation.x=w(o[1].rotation.x,c),a[0].rotation.x=w(a[0].rotation.x,u),a[1].rotation.x=w(a[1].rotation.x,h),a[0].rotation.z=w(a[0].rotation.z,-x),a[1].rotation.z=w(a[1].rotation.z,-m),r.position.y=w(r.position.y,f),r.rotation.x=w(r.rotation.x,d),r.rotation.z=w(r.rotation.z,g),e==="ko"?r.position.z=w(r.position.z,-.7):r.position.z=w(r.position.z,0),n.mouth.scale.y=e==="panic"||e==="ko"||e==="float"?-1.4:1}var t_=[5025616,6078282,4169284,7127626];function hs(n,e,t,i,s=1,r="round",o=0){let a=z(9067061,{r:.85});if(r==="round"){n.mesh(L.cyl(.18,.28,2.4,10),a,e,t+1.2*s,i,0,0,0,s,s,s);let l=z(t_[o%4],{r:.75});[[0,3.1,0,1.45],[.8,2.6,.3,1],[-.7,2.7,-.3,1.05],[.1,2.5,-.85,.95],[-.2,3.9,.2,.9]].forEach((c,u)=>n.mesh(L.sphere(1,18,12),l,e+c[0]*s,t+c[1]*s,i+c[2]*s,0,u,0,c[3]*s,c[3]*s*.9,c[3]*s))}else if(r==="pine"){n.mesh(L.cyl(.15,.25,1.6,10),a,e,t+.8*s,i,0,0,0,s,s,s);let l=z([3112266,2780739,3508818][o%3],{r:.8});[[1.6,1.8,1.4],[1.25,1.6,2.5],[.85,1.4,3.5]].forEach(c=>n.mesh(L.cone(1,1,20),l,e,t+c[2]*s,i,0,o,0,c[0]*s,c[1]*s,c[0]*s))}else if(r==="palm"){let l=z(10517071,{r:.85});for(let h=0;h<6;h++)n.mesh(L.cyl(.17-h*.012,.2-h*.012,.85,10),l,e+Math.sin(h*.25)*.5*s,t+(.42+h*.8)*s,i,0,0,-.08*h,s,s,s);let c=[e+Math.sin(1.5)*.5*s+.15*s,t+4.9*s,i],u=z(4170573,{r:.7});for(let h=0;h<7;h++){let f=h/7*6.283+o;n.mesh(L.sphere(1,16,8),u,c[0]+Math.cos(f)*1*s,c[1]-.25*s,c[2]+Math.sin(f)*1*s,0,-f,.45,1.3*s,.12*s,.38*s)}[0,2,4].forEach(h=>n.mesh(L.sphere(.17,12,8),z(7029795,{r:.6}),c[0]+Math.cos(h)*.2*s,c[1]-.3*s,c[2]+Math.sin(h)*.2*s))}else if(r==="cactus"){let l=z(5216858,{r:.7});n.mesh(L.cap(.35,2.2,14),l,e,t+1.45*s,i,0,0,0,s,s,s),n.mesh(L.cap(.22,.8,12),l,e+.6*s,t+1.9*s,i,0,0,0,s,s,s),n.mesh(L.cap(.2,.5,12),l,e+.38*s,t+1.45*s,i,0,0,Math.PI/2,s,s,s),n.mesh(L.cap(.2,.6,12),l,e-.55*s,t+2.3*s,i,0,0,0,s,s,s),n.mesh(L.cap(.18,.4,12),l,e-.35*s,t+1.95*s,i,0,0,Math.PI/2,s,s,s)}}function Bh(n,e,t,i,s=1,r=1,o=10129286){n.mesh(L.rock(r%6,1),z(o,{r:.9}),e,t+.3*s,i,0,r,0,s,s,s)}function hr(n,e,t,i,s,r){let o=new $e,a=z(r,{r:.3,cc:1,ccr:.1,m:.2}),l=z(2109504,{r:.05,m:.5,cc:1}),c=z(1842980,{r:.85}),u=z(14080992,{r:.2,m:1}),h=(f,d,g,x,m,p=0,w=0)=>n.add(f,d,new Ke().makeRotationY(s).multiply(ht(g,x,m,p,0,w)).premultiply(new Ke().makeTranslation(e,t,i)));return h(L.rbox(1.9,.75,4.1,.3),a,0,.75,0),h(L.rbox(1.65,.65,2.2,.28),a,0,1.35,-.25),h(L.rbox(1.68,.5,2,.22),l,0,1.38,-.25),[[-.88,1.3],[.88,1.3],[-.88,-1.35],[.88,-1.35]].forEach(f=>{h(L.cyl(.38,.38,.3,20),c,f[0],.38,f[1],0,Math.PI/2),h(L.cyl(.2,.2,.32,16),u,f[0],.38,f[1],0,Math.PI/2)}),[-.6,.6].forEach(f=>h(L.sphere(.13,12,8),z(16774860,{e:16773552,ei:1.2}),f,.85,2.04)),[-.65,.65].forEach(f=>h(L.rbox(.3,.12,.05,.03),z(16722474,{e:16711680,ei:.8}),f,.9,-2.06)),o}function Hh(n,e,t,i){let s=z(4015184,{r:.4,m:.7});n.mesh(L.cyl(.07,.1,4.2,10),s,e,t+2.1,i),n.mesh(L.cap(.06,.8,8),s,e+.4,t+4.2,i,0,0,Math.PI/2),n.mesh(L.sphere(.22,16,10),z(16774084,{e:16771488,ei:1.5}),e+.8,t+4.05,i)}function Md(n,e,t,i,s){let r=z(11565637,{r:.7}),o=z(3159098,{r:.5,m:.6}),a=(l,c,u)=>{let h=new D(l,c,u).applyAxisAngle(new D(0,1,0),s);return[e+h.x,t+h.y,i+h.z]};[.45,.65].forEach((l,c)=>{let u=a(0,.5+c*.35,-.2+c*.25-.1);n.add(L.rbox(1.8,.08,.28,.03),r,ht(u[0],u[1],u[2],c?-.3:0,s,0))}),[-.75,.75].forEach(l=>{let c=a(l,.25,-.1);n.add(L.rbox(.08,.5,.5,.02),o,ht(c[0],c[1],c[2],0,s,0))})}function bd(){let n=new $e,e={root:n},t=z(8084694,{r:.35,cc:.7,ccr:.3}),i=z(16241278,{r:.5,cc:.3}),s=z(4863382,{r:.4,cc:.5}),r=e.spikeM=new qt({color:6288383,emissive:2282478,emissiveIntensity:.6,roughness:.2,metalness:.1}),o=e.body=new $e;o.position.y=8,n.add(o),ve(L.sphere(4.2,40,28),t,0,0,0,o).scale.set(1,1.25,.95),ve(L.sphere(3.4,32,24),i,0,-.6,1.25,o).scale.set(.95,1.2,.75);let a=e.head=new $e;a.position.set(0,5.6,1.3),o.add(a),ve(L.sphere(2.6,36,26),t,0,.4,0,a).scale.set(1,.92,1),ve(L.sphere(1.7,32,22),t,0,-.05,2,a).scale.set(1.05,.7,1.15),[-1,1].forEach(m=>{ve(L.sphere(.85,24,18),z(16777215,{r:.15,cc:1}),m*1.05,1.15,1.75,a).scale.set(1,1.1,.7),ve(L.sphere(.45,20,14),z(1314847,{r:.1,cc:1}),m*1,1.15,2.25,a).scale.set(1,1.2,.6),ve(L.sphere(.13,10,8),z(16777215,{e:16777215}),m*.9,1.35,2.48,a),ve(L.cap(.18,.9,10),s,m*1.05,2.05,1.6,a).rotation.z=m*.35,ve(L.sphere(.22,12,8),s,m*.5,.1,3.4,a)});let l=e.jaw=new $e;l.position.set(0,-.55,.6),a.add(l),ve(L.sphere(1.6,30,20),t,0,-.35,1.25,l).scale.set(1,.45,1.1),ve(L.sphere(1.3,24,16),z(14239839,{r:.6}),0,-.05,1.3,l).scale.set(.95,.25,1);for(let m=-2;m<=2;m++)m&&ve(L.cone(.16,.42,10),z(16777215,{r:.3}),m*.45,.22,2.25-Math.abs(m)*.25,l);e.arms=[-1,1].map(m=>{let p=new $e;p.position.set(m*3.3,1.8,1.6),o.add(p),ve(L.cap(.75,2,16),t,0,-1.1,.4,p).rotation.x=-.6;for(let w=-1;w<=1;w++)ve(L.cone(.2,.55,10),z(16774102),w*.3,-2.2,1.6,p).rotation.x=1.8;return p}),e.legs=[-1,1].map(m=>{let p=new $e;p.position.set(m*2.5,-3.2,0),o.add(p),ve(L.cap(1.45,2.4,20),t,0,-2,0,p),ve(L.sphere(1.7,24,16),s,0,-4.5,.6,p).scale.set(1,.5,1.35);for(let v=-1;v<=1;v++)ve(L.cone(.32,.8,12),z(16774102),v*.65,-4.6,2.6,p).rotation.x=Math.PI/2;return p});let c=e.tail=[],u=o,h=-3.4,f=-2.4;for(let m=0;m<7;m++){let p=new $e;p.position.set(0,m?-.25:f,m?-1.55:h),u.add(p),ve(L.sphere(1.7-m*.2,24,16),t,0,0,-.6,p).scale.set(1,.9,1.25),m<6&&ve(L.cone(.45-m*.05,1.2-m*.1,10),r,0,1.4-m*.18,-.6,p),c.push(p),u=p}e.spikes=[];for(let m=0;m<6;m++){let p=ve(L.cone(.55+(m<3?.25:0),2.2-m*.2,6),r,0,4.3-m*1.3,-3-Math.sin(m/5*1.5)*1.1,o);p.rotation.x=-.4-m*.12,e.spikes.push(p)}let d=e.beam=new $e;d.visible=!1,a.add(d),d.position.set(0,-.2,2.8);let g=ve(L.cyl(.9,.9,1,20),Bn(8255999,.7),0,0,0,d,!1);g.rotation.x=Math.PI/2,g.position.z=.5;let x=ve(L.cyl(.45,.45,1,16),gd(16777215),0,0,0,d,!1);return x.rotation.x=Math.PI/2,x.position.z=.5,e.beamLen=m=>{d.scale.set(1,1,m)},n.traverse(m=>{m.isMesh&&(m.castShadow=m.castShadow!==!1)}),e.t=0,e}function wd(n,e,t,i,s){n.t+=e*(t?1:.35);let r=Math.sin(n.t*2.2);n.legs[0].rotation.x=r*.45,n.legs[1].rotation.x=-r*.45,n.arms[0].rotation.x=-r*.3-(i?.9:0),n.arms[1].rotation.x=r*.3-(i?.9:0),n.body.position.y=8+Math.abs(Math.cos(n.t*2.2))*.5*(t?1:.2),n.body.rotation.z=r*.06,n.body.rotation.x=i?-.15:.04,n.tail.forEach((o,a)=>{o.rotation.y=Math.sin(n.t*1.6-a*.6)*.18,o.rotation.x=.06}),n.jaw.rotation.x+=((i||s>.5?.75:.08)-n.jaw.rotation.x)*Math.min(1,e*8),n.spikeM.emissiveIntensity=.5+s*4+(i?1:0)}function Sd(){let n=new $e,e=[];for(let r=0;r<=20;r++){let o=r/20,a=o*Math.PI;e.push(new oe(Math.max(.01,Math.sin(a)*4.2*(1-.12*Math.sin(a*3))),(o-.5)*1.4*(1-Math.sin(a)*.3)))}ve(new is(e,48),z(13095132,{r:.18,m:.9}),0,0,0,n),ve(L.torus(4,.22,6.28,12,64),z(8950432,{r:.25,m:.9}),0,0,0,n).rotation.x=Math.PI/2,ve(new Ot(1.9,32,16,0,6.283,0,Math.PI/2),z(10217471,{r:.05,op:.35,cc:1}),0,.45,0,n,!1);let t=z(8314987,{r:.4,cc:.4});ve(L.sphere(.65,24,16),t,0,1.25,0,n).scale.set(1,1.2,1),[-1,1].forEach(r=>ve(L.sphere(.24,16,10),z(723730,{r:.05,cc:1}),r*.25,1.35,.5,n).scale.set(1,1.4,.6));let i=new $e;n.add(i);for(let r=0;r<12;r++){let o=r/12*6.283;ve(L.sphere(.22,10,8),z(r%2?16732120:4190463,{e:r%2?16732120:4190463,ei:2}),Math.cos(o)*3.6,-.25,Math.sin(o)*3.6,i,!1)}ve(L.cyl(1.2,1.5,.4,32),z(11993082,{e:6288383,ei:1.5}),0,-.7,0,n,!1);let s=ve(new an(1.2,3.2,1,32,1,!0),Bn(10354608,.22),0,-.5,0,n,!1);return s.geometry.translate(0,-.5,0),n.userData={lights:i,beam:s},n}function Ed(n){let e=new $e;return ve(L.rock(3,1),z(4864819,{r:.85,e:5904896,ei:.6}),0,0,0,e).scale.setScalar(n),ve(L.sphere(1.35,20,14),Bn(16742954,.45),0,0,0,e,!1).scale.setScalar(n),e}function Td(){return{walls:[],plats:[],buildings:[],rooms:[],pads:[],tables:[],high:[],fires:[],coinSpots:[],spawns:[],terrain:()=>0,half:80,sea:null,volcano:{x:60,z:-60},landmarks:[]}}function In(n,e,t,i,s,r,o,a){let l={x0:Math.min(e,i),x1:Math.max(e,i),z0:Math.min(t,s),z1:Math.max(t,s),y0:r,y1:o,b:a||null,off:!1};return n.walls.push(l),l}function ki(n,e,t,i,s,r,o,a){let l={x0:Math.min(e,i),x1:Math.max(e,i),z0:Math.min(t,s),z1:Math.max(t,s),top:r,b:o||null,ramp:a||null,off:!1};return n.plats.push(l),l}function n_(n,e,t){if(!n.ramp)return n.top;let i=n.ramp,s=i.axis==="x"?e:t,r=Math.max(0,Math.min(1,(s-i.a0)/(i.a1-i.a0)));return i.h0+(i.h1-i.h0)*r}function Vh(n,e,t){for(let i of n.rooms)if(e>=i.x0-.5&&e<=i.x1+.5&&t>=i.z0-.5&&t<=i.z1+.5)return i;return null}function bn(n,e,t,i){if(i<-22)return Vh(n,e,t)?-30:-80;let s=n.terrain(e,t);for(let r of n.plats){if(r.off||e<r.x0||e>r.x1||t<r.z0||t>r.z1)continue;let o=n_(r,e,t);o<=i+.65&&o>s&&(s=o)}return s}function Ad(n,e,t=.4,i=1.6){for(let r=0;r<2;r++)for(let o of n.walls){if(o.off||e.y+i<o.y0||e.y+.3>o.y1)continue;let a=Math.max(o.x0,Math.min(e.x,o.x1)),l=Math.max(o.z0,Math.min(e.z,o.z1)),c=e.x-a,u=e.z-l,h=c*c+u*u;if(!(h>=t*t))if(h>1e-8){let f=Math.sqrt(h),d=(t-f)/f;e.x+=c*d,e.z+=u*d}else{let f=e.x-o.x0,d=o.x1-e.x,g=e.z-o.z0,x=o.z1-e.z,m=Math.min(f,d,g,x);m===f?e.x=o.x0-t:m===d?e.x=o.x1+t:m===g?e.z=o.z0-t:e.z=o.z1+t}}let s=n.half-1;e.x=Math.max(-s,Math.min(s,e.x)),e.z=Math.max(-s,Math.min(s,e.z))}function pi(n,e,t,i){for(let s of n.buildings)if(!s.wrecked&&e>s.ix0&&e<s.ix1&&i>s.iz0&&i<s.iz1&&t>=s.baseY-.5&&t<s.baseY+s.ceil-.3)return s;return null}function Gh(n,e,t,i){for(let s of n.buildings)if(!s.wrecked&&s.roofAccess&&e>s.x-s.w/2&&e<s.x+s.w/2&&i>s.z-s.d/2&&i<s.z+s.d/2&&t>s.baseY+s.h-.5)return s;return null}function Ja(n,e,t){let i=1e9;for(let s of n.buildings){if(s.wrecked)continue;let r=Math.max(Math.abs(e-s.x)-s.w/2,0),o=Math.max(Math.abs(t-s.z)-s.d/2,0);i=Math.min(i,Math.hypot(r,o))}return i}function Wh(n,e,t,i){for(let s of n.tables)if(!(s.b&&s.b.wrecked)&&Math.abs(t-s.y)<1&&Math.hypot(e-s.x,i-s.z)<s.r)return s;return null}function Ka(n,e,t,i){for(let s of n.pads)if(!(s.b&&s.b.wrecked&&(s.kind==="elev"||s.kind==="elevdown"))&&Math.abs(t-s.y)<1.6&&Math.hypot(e-s.x,i-s.z)<(s.r||1.1))return s;return null}var i_={s:0,e:Math.PI/2,n:Math.PI,w:-Math.PI/2},s_=0,pt=.3,r_=2,Rd=2.6,Cd=()=>z(10478591,{r:.05,m:.1,op:.38,cc:1});function Xh(n){let e=new Ke().makeTranslation(n.x,n.baseY,n.z).multiply(new Ke().makeRotationY(n.ry)),t=Math.cos(n.ry),i=Math.sin(n.ry);return{m:(s,r,o,a=0,l=0,c=0,u=1,h=u,f=u)=>e.clone().multiply(ht(s,r,o,a,l,c,u,h,f)),w:(s,r)=>[n.x+s*t+r*i,n.z-s*i+r*t],box:(s,r,o,a)=>{let l=Xh(n).w(s,r),c=Xh(n).w(o,a);return[Math.min(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0],c[0]),Math.max(l[1],c[1])]}}}function bt(n,e,t){let i=Object.assign({id:s_++,h:3.8,door:"s",wall:16765286,trim:16777215,roof:15681391,inner:16774888,floor:14262374,roofType:"gable",sturdy:!1,basement:!1,elevator:!1,interior:"home",name:"House",windows:!0},t);i.ry=i_[i.door];let s=i.door==="s"||i.door==="n";i.lw=s?i.w:i.d,i.ld=s?i.d:i.w,i.baseY=t.baseY!=null?t.baseY:n.terrain(i.x,i.z),i.ceil=Math.min(i.h,t.ceil||3.8),i.roofAccess=i.elevator||!!i.stairs,i.ix0=i.x-i.w/2+pt,i.ix1=i.x+i.w/2-pt,i.iz0=i.z-i.d/2+pt,i.iz1=i.z+i.d/2-pt,i.walls=[],i.plats=[],i.pads=[];let r=Xh(i),o=i.lw,a=i.ld,l=i.group=new $e,c=i.upper=new $e;e.add(l),e.add(c);let u=new di,h=new di,f=z(i.wall,{r:.75}),d=z(i.trim,{r:.5}),g=z(i.inner,{r:.85}),x=z(i.roof,{r:.55,cc:.25}),m=(T,E,M,_,R,G,U,N,Y,V,te,Z)=>T.add(E,M,r.m(_,R,G,U,N,Y,V,te,Z)),p=(T,E,M,_,R,G,U,N)=>m(T,L.box(M,_,R),E,G,U,N);m(u,L.rbox(o+.5,.6,a+.5,.12),z(13620957,{r:.8}),0,-.1,0),p(u,z(i.floor,{r:.55,cc:.3}),o-2*pt,.04,a-2*pt,0,.21,0),(i.interior==="home"||i.interior==="cabin")&&m(u,L.cyl(1,1,.03,32),z(16743080,{r:.95}),0,.24,.3,0,0,0,Math.min(1.6,o/5),1,Math.min(1.2,a/5));{let T=r.box(-o/2-.25,-a/2-.25,o/2+.25,a/2+.25);i.plats.push(ki(n,T[0],T[1],T[2],T[3],i.baseY+.2,i))}let w=[{n:"front",L:o,at:(T,E,M)=>[T,E,a/2-pt/2+M],horiz:!0,out:1},{n:"back",L:o,at:(T,E,M)=>[-T,E,-a/2+pt/2-M],horiz:!0,out:1},{n:"left",L:a-2*pt,at:(T,E,M)=>[-o/2+pt/2-M,E,T],horiz:!1},{n:"right",L:a-2*pt,at:(T,E,M)=>[o/2-pt/2+M,E,-T],horiz:!1}],v=i.ceil;for(let T of w){let E=[];if(T.n==="front"&&E.push({c:0,wd:i.wideDoor||r_,b:0,t:Math.min(v-.4,i.wideDoor?v-.6:Rd),door:!0}),i.windows){let N=Math.floor((T.L-1)/3.2);for(let Y=0;Y<N;Y++){let V=-T.L/2+(Y+.5)*T.L/N;E.some(te=>Math.abs(te.c-V)<1.9)||E.push({c:V,wd:1.3,b:1,t:Math.min(2.4,v-.6)})}}E.sort((N,Y)=>N.c-Y.c);let M=[],_=-T.L/2;for(let N of E){let Y=N.c-N.wd/2,V=N.c+N.wd/2;Y>_&&M.push([_,Y,0,v]),N.b>0&&M.push([Y,V,0,N.b]),N.t<v&&M.push([Y,V,N.t,v]),_=V}_<T.L/2&&M.push([_,T.L/2,0,v]);let R=(N,Y,V,te,Z,re,me,_e)=>{let Ve=(V+te)/2,rt=(Z+re)/2,K=T.at(Ve,rt,_e||0);m(N,L.box(T.horiz?te-V:me,re-Z,T.horiz?me:te-V),Y,K[0],K[1],K[2])};for(let N of M)R(u,f,N[0],N[1],N[2],N[3],pt,0),R(u,g,N[0],N[1],Math.max(N[2],.2),N[3],.04,-pt/2-.02);for(let N of E){let Y=N.c-N.wd/2,V=N.c+N.wd/2;N.door?(R(u,d,Y-.14,Y,.2,N.t+.14,pt+.1,0),R(u,d,V,V+.14,.2,N.t+.14,pt+.1,0),R(u,d,Y-.14,V+.14,N.t,N.t+.16,pt+.1,0)):(R(u,Cd(),Y,V,N.b,N.t,.06,0),R(u,d,Y-.1,V+.1,N.b-.12,N.b,pt+.16,0),R(u,d,Y-.1,V+.1,N.t,N.t+.12,pt+.12,0))}R(u,d,-T.L/2,T.L/2,v-.18,v,pt+.08,0);let G=-T.L/2,U=[];for(let N of E)N.door&&(U.push([G,N.c-N.wd/2]),G=N.c+N.wd/2);U.push([G,T.L/2]);for(let N of U){if(N[1]-N[0]<.01)continue;let Y=T.at(N[0],0,0),V=T.at(N[1],0,0),te=T.horiz?[Y[0],Y[2]-pt/2,V[0],V[2]+pt/2]:[Y[0]-pt/2,Y[2],V[0]+pt/2,V[2]],Z=r.w(te[0],te[1]),re=r.w(te[2],te[3]);i.walls.push(In(n,Z[0],Z[1],re[0],re[1],i.baseY,i.baseY+i.h+.3,i))}if(i.h>v+.5){R(h,f,-T.L/2,T.L/2,v,i.h,pt,0);let N=Math.floor((i.h-v)/3.4),Y=Math.max(1,Math.floor((T.L-1)/2.6));for(let V=0;V<N;V++)for(let te=0;te<Y;te++){let Z=-T.L/2+(te+.5)*T.L/Y,re=v+.8+V*3.4;R(h,Cd(),Z-.7,Z+.7,re,re+2,pt+.06,0),R(h,d,Z-.8,Z+.8,re-.12,re,pt+.16,0)}for(let V=0;V<=N;V++)R(h,d,-T.L/2,T.L/2,v+V*3.4-.1,v+V*3.4+.08,pt+.1,0)}}p(h,z(16052714,{r:.9}),o,.25,a,0,v+.12,0),i.h>v+.5&&p(h,z(14015458,{r:.85}),o,.3,a,0,i.h+.12,0);let y=i.h+.27;if(i.roofType==="gable"){let T=Math.min(o,a)+.8,E=Math.max(o,a)+.8,M=T*.38,_=new rs;_.moveTo(-T/2,0),_.lineTo(T/2,0),_.lineTo(0,M),_.lineTo(-T/2,0);let R=new Ks(_,{depth:E,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2});R.translate(0,0,-E/2),m(h,R,x,0,i.h+.2,0,0,o>=a?Math.PI/2:0,0),m(h,L.rbox(.7,1.6,.7,.08),z(11883578,{r:.8}),o*.25,i.h+M*.6,-a*.15)}else if(i.roofType==="arch"){let T=new an(o/2+.15,o/2+.15,a+.4,32,1,!1,-Math.PI/2,Math.PI);T.rotateX(-Math.PI/2),m(h,T,x,0,v,0,0,0,0,1,.55,1)}else if([[o,.6,.25,0,a/2-.12],[o,.6,.25,0,-a/2+.12],[.25,.6,a,o/2-.12,0],[.25,.6,a,-o/2+.12,0]].forEach(T=>m(h,L.rbox(T[0],T[1],T[2],.06),d,T[3],y+.25,T[4])),(!i.roofAccess||o>9)&&(m(h,L.rbox(1.6,1,1.2,.15),z(13160664,{r:.4,m:.6}),-o*.25,y+.5,-a*.2),m(h,L.cyl(.45,.45,.25,24),z(9082014,{m:.7,r:.3}),-o*.25,y+1.1,-a*.2)),i.style==="tower"&&!i.roofAccess&&(m(h,L.cyl(1.2,1.2,2.2,24),z(10251071,{r:.8}),o*.2,y+2,a*.2),m(h,L.cone(1.35,.8,24),z(7031343,{r:.8}),o*.2,y+3.5,a*.2)),i.roofAccess){let T=r.box(-o/2,-a/2,o/2,a/2);i.plats.push(ki(n,T[0],T[1],T[2],T[3],i.baseY+y,i)),n.high.push({x:i.x,y:i.baseY+y,z:i.z,b:i,label:(i.name||"Building")+" roof"})}i.sign&&m(u,L.rbox(Math.min(o-1,4.4),.8,.14,.08),z(i.sign,{r:.35,e:i.sign,ei:.25,cc:.6}),0,Math.min(v,3.2)+.15,a/2+.12),m(u,L.rbox(2.8,.14,1.2,.06),z(i.awning||i.roof,{r:.5}),0,Math.min(Rd+.45,v-.05),a/2+.55);let O=r.w(0,a/2-1.4),P=r.w(0,a/2+1.8);if(i.doorIn={x:O[0],z:O[1]},i.doorOut={x:P[0],z:P[1]},o_(n,i,u,m,r),i.elevator){let T=r.w(-o/2+1.3,-a/2+1.3),E=r.w(o/2-1.5,-a/2+1.5);m(u,L.rbox(1.9,v-.3,.2,.05),z(12108492,{m:.9,r:.25}),-o/2+1.3,v/2+.1,-a/2+pt+.12),Yh(u,m,-o/2+1.3,.24,-a/2+1.3,2282478),Yh(h,m,o/2-1.5,y+.02,-a/2+1.5,2282478),m(h,L.rbox(1.6,2.4,1.6,.15),z(14673644,{r:.6}),o/2-1.5,y+1.2,-a/2-0+.2);let M={x:E[0],y:i.baseY+y,z:E[1]};i.pads.push(Qa(n,{x:T[0],y:i.baseY+.2,z:T[1],kind:"elev",label:"\u2B06 ROOF",to:M,b:i})),i.pads.push(Qa(n,{x:E[0],y:i.baseY+y,z:E[1],kind:"elevdown",label:"\u2B07 INSIDE",to:{x:T[0]+.01,y:i.baseY+.25,z:T[1]+1.4*Math.cos(i.ry)},b:i}))}return i.basement&&a_(n,e,i,u,m,r,i.basement===!0?"basement":i.basement),i.meshes=u.build(l),h.build(c),n.buildings.push(i),i}function Yh(n,e,t,i,s,r){e(n,L.cyl(.95,1,.08,32),z(r,{e:r,ei:.9,r:.3}),t,i+.04,s),e(n,L.torus(.95,.07,6.283,8,32),z(16777215,{e:16777215,ei:.6}),t,i+.09,s,Math.PI/2)}function Qa(n,e){return e.r=e.r||1.1,n.pads.push(e),e}function o_(n,e,t,i,s){let r=e.lw,o=e.ld,a=r/2-pt-.2,l=o/2-pt-.2,c=e.interior,u=z(13011538,{r:.6,cc:.2}),h=z(5913122,{r:.6}),f=z(16317180,{r:.5}),d=(E,M,_=1.6,R=1,G)=>{let U=G?z(G,{r:.5,cc:.3}):u;i(t,L.rbox(_,.1,R,.04),U,E,.95,M),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(Y=>i(t,L.cyl(.05,.05,.75,8),h,E+Y[0]*(_/2-.12),.58,M+Y[1]*(R/2-.12)));let N=s.w(E,M);n.tables.push({x:N[0],y:e.baseY+.2,z:N[1],r:Math.max(_,R)*.55+.2,b:e})},g=(E,M,_=15681391)=>{let R=z(_,{r:.5,cc:.4});i(t,L.rbox(.45,.08,.45,.04),R,E,.55,M),i(t,L.rbox(.45,.5,.07,.03),R,E,.82,M-.2),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(G=>i(t,L.cyl(.03,.03,.35,6),h,E+G[0]*.18,.37,M+G[1]*.18))},x=(E,M,_=2,R=0,G)=>{i(t,L.rbox(_,2,.5,.04),z(15852492,{r:.7}),E,1.2,M,0,R);let U=G||[16734558,16763450,9095462,1671876,6966419,16749132];for(let N=0;N<3;N++)for(let Y=0;Y<Math.floor(_/.35);Y++){let V=-_/2+.2+Y*.35,te=Math.cos(R),Z=Math.sin(R);i(t,L.rbox(.26,.38,.3,.05),z(U[(Y+N*2)%U.length],{r:.45,cc:.4}),E+V*te,.6+N*.6,M-V*Z+.04*te,0,R)}},m=(E,M,_=5032432)=>{let R=z(_,{r:.85});i(t,L.rbox(2.2,.5,.9,.18),R,E,.5,M),i(t,L.rbox(2.2,.75,.3,.14),R,E,.9,M-.35),i(t,L.rbox(.3,.65,.9,.12),R,E-1.05,.65,M),i(t,L.rbox(.3,.65,.9,.12),R,E+1.05,.65,M)},p=(E,M)=>{i(t,L.cyl(.25,.18,.45,16),z(15167313,{r:.6}),E,.45,M),[[0,1,0,.42],[.18,.85,.1,.3],[-.15,.9,-.1,.3]].forEach(_=>i(t,L.sphere(1,14,10),z(5420936,{r:.7}),E+_[0],_[1],M+_[2],0,0,0,_[3]))},w=(E,M)=>{i(t,L.cyl(.03,.03,1.4,8),h,E,.9,M),i(t,L.cyl(.18,.3,.35,16),z(16773569,{e:16769162,ei:.9}),E,1.7,M)},v=(E,M,_=0)=>{i(t,L.rbox(1.6,.5,.45,.06),h,E,.45,M,0,_),i(t,L.rbox(1.5,.85,.08,.04),z(1120295,{r:.2,cc:1}),E,1.15,M,0,_),i(t,L.box(1.36,.72,.02),z(3900150,{e:6333946,ei:.7}),E+Math.sin(_)*.05,1.15,M+Math.cos(_)*.05,0,_)},y=(E,M,_=11868062)=>{i(t,L.rbox(1.4,.45,2.2,.1),u,E,.45,M),i(t,L.rbox(1.35,.25,2.1,.12),f,E,.78,M),i(t,L.rbox(1.38,.12,1.4,.06),z(_,{r:.8}),E,.92,M+.35),i(t,L.rbox(.9,.18,.45,.09),f,E,.98,M-.75),i(t,L.rbox(1.4,1,.12,.05),u,E,.85,M-1.1)},O=(E,M,_,R=9494767)=>{i(t,L.rbox(_,1,.7,.05),z(R,{r:.6}),E,.7,M),i(t,L.rbox(_+.1,.08,.8,.03),z(16316922,{r:.2,cc:1}),E,1.24,M)},P=(E,M,_=1)=>i(t,L.rbox(_,_,_,.06),z(13935475,{r:.8}),E,.2+_/2,M,0,E*3),T=(E,M)=>{d(E,M,1.6,.9,15857145),i(t,L.rbox(.7,.45,.06,.03),z(1120295,{cc:1}),E,1.3,M-.2),i(t,L.box(.62,.36,.01),z(2282478,{e:2282478,ei:.6}),E,1.3,M-.165),g(E,M+.8,3835647)};if(c==="home"||c==="cabin"){if(m(-a+1.4,l-1.2,c==="cabin"?12348453:5032432),v(-a+1.4,l-3.2>-l?l-3:0,Math.PI),a>2.5&&(d(a-1.3,.2),g(a-1.7,.2+.85,16760331),g(a-.9,.2+.85,16760331)),l>2.5&&y(a-1,-l+1.3),x(0,-l+.3,2),p(-a+.4,-l+.4),w(a-.3,l-.3),c==="cabin"){i(t,L.rbox(1.8,1.6,.8,.1),z(10249796,{r:.9}),-a+1.2,1,-l+.5),i(t,L.sphere(.35,12,10),z(16743168,{e:16733184,ei:2.5}),-a+1.2,.6,-l+.75);let E=s.w(-a+1.2,-l+1.4);n.fires.push({x:E[0],y:e.baseY+.2,z:E[1],r:3.5,b:e})}}else if(c==="shop"){for(let E=-1;E<=1;E++)Math.abs(E*2.6)<a-.8&&x(E*2.6,-.6,1.8,Math.PI/2);O(a-1,l-1.6,1.8,e.sign||9494767),x(0,-l+.3,Math.min(4,a*1.5)),p(-a+.4,l-.5),d(-a+1.2,l-1.5,1.2,.9,16777215)}else if(c==="diner"){O(0,-l+1.3,Math.min(r-2,6),16740518);for(let E=-2;E<=2;E++)Math.abs(E*1.2)<a-.5&&(i(t,L.cyl(.25,.25,.1,16),z(15672124,{cc:1,r:.3}),E*1.2,.8,-l+2.1),i(t,L.cyl(.05,.05,.6,8),z(11384253,{m:1,r:.3}),E*1.2,.5,-l+2.1));d(-a+1.2,l-1.3,1.2,1.2,4770532),d(a-1.2,l-1.3,1.2,1.2,4770532),g(-a+1.2,l-.4,16766474),g(a-1.2,l-.4,16766474),i(t,L.sphere(.25,16,12),z(16756684,{r:.4}),.5,1.45,-l+1.3),i(t,L.cone(.18,.4,16),z(15320170),.5,1.1,-l+1.3,Math.PI)}else if(c==="office"){for(let E=0;E<2;E++)for(let M=-1;M<=1;M++)Math.abs(M*2.8)<a-.9&&-l+1.8+E*2.6<l-2.4&&T(M*2.8,-l+1.8+E*2.6);p(a-.4,l-.4),p(-a+.4,l-.4),i(t,L.rbox(2.6,1.1,.8,.1),z(16777215,{r:.3}),a-1.6,.75,l-1.5)}else if(c==="hangar")P(-a+1,-l+1,1.2),P(-a+1,-l+2.3,1),P(-a+2.3,-l+1,1),P(a-1,-l+1,1.2),d(a-1.5,l-2.5,2,1,9741240),d(-a+1.8,l-2.5,2,1,9741240),i(t,L.cyl(1.6,1.8,.4,32),z(4674921,{m:.6,r:.4}),0,.4,-1),i(t,L.sphere(2.4,32,12),z(12634324,{m:.9,r:.2}),0,1.4,-1,0,0,.1,1,.28,1),i(t,new Ot(1,24,12,0,6.283,0,Math.PI/2),z(10217471,{r:.05,op:.4,cc:1}),0,1.6,-1),i(t,L.rbox(3.2,.6,.1,.05),z(2278750,{e:2278750,ei:.5}),0,2.9,-l+.25);else if(c==="station")i(t,L.rbox(2.4,2,5.2,.35),z(15087942,{r:.3,cc:1}),0,1.25,-.4),i(t,L.rbox(2.2,.9,1.6,.2),z(15087942,{r:.3,cc:1}),0,2.6,1),[-1.3,1.6].forEach(E=>[-1.15,1.15].forEach(M=>i(t,L.cyl(.45,.45,.3,20),z(2042167,{r:.8}),M,.65,E,0,0,Math.PI/2))),i(t,L.rbox(.5,.2,.3,.05),z(3900150,{e:3900150,ei:2}),-.4,3.15,1.2),i(t,L.rbox(.5,.2,.3,.05),z(15680580,{e:15680580,ei:2}),.4,3.15,1.2),d(a-1.2,-l+1.4,1.4,1),x(-a+.4,0,2.4,Math.PI/2);else if(c==="bunkerTop"){i(t,L.rbox(r-1.2,.05,2.6,.02),z(16436245,{r:.6}),0,.24,0);for(let E=0;E<6;E++)i(t,L.box(.35,.06,2.6),z(1120295),-r/2+1.2+E*(r-2.4)/5,.25,0,0,.6);i(t,L.cyl(.6,.6,.1,3),z(16436245,{e:16436245,ei:.4}),a-.5,2.2,-l+.05,Math.PI/2)}}function a_(n,e,t,i,s,r,o){let a=t.lw,l=t.ld,c=Math.max(a,o==="bunker"?16:8),u=Math.max(l,o==="bunker"?12:7),h={id:"r"+t.id,kind:o,b:t,name:o==="bunker"?"Nuclear Bunker":o==="subway"?"Subway Station":o==="mine"?"Mine Tunnel":"Basement"},f=t.door==="s"||t.door==="n",d=f?c:u,g=f?u:c;h.x0=t.x-d/2,h.x1=t.x+d/2,h.z0=t.z-g/2,h.z1=t.z+g/2;let x=o==="bunker"?[0,0]:[t.lw/2-1.3,t.ld/2-1.5-(t.elevator,0)];(t.interior==="home"||t.interior==="cabin")&&(x[0]=-t.lw/2+1.4,x[1]=-t.ld/2+3>t.ld/2-1.2?0:-t.ld/2+3),(t.interior==="shop"||t.interior==="office"||t.interior==="diner")&&(x[0]=-t.lw/2+1.2,x[1]=.6);let m=o==="bunker"?16436245:16758531;s(i,L.rbox(1.8,.08,1.8,.04),z(3359061,{m:.6,r:.4}),x[0],.25,x[1]),Yh(i,s,x[0],.28,x[1],m);let p=r.w(x[0],x[1]),w=new $e;e.add(w),h.group=w;let v=new di,y=-30,O=o==="bunker"?10134961:o==="mine"?9268835:o==="subway"?15332857:12560778,P=o==="bunker"?6583435:o==="mine"?7162945:o==="subway"?9741240:9279918;v.rbox(z(P,{r:.7}),d+.6,.4,g+.6,.1,t.x,y-.2,t.z);let T=z(O,{r:.8}),E=6.5;v.box(T,d+.6,E,.3,t.x,y+E/2,h.z0-.15),v.box(T,d+.6,E,.3,t.x,y+E/2,h.z1+.15),v.box(T,.3,E,g,h.x0-.15,y+E/2,t.z),v.box(T,.3,E,g,h.x1+.15,y+E/2,t.z),In(n,h.x0-.3,h.z0-.3,h.x1+.3,h.z0,y,y+6),In(n,h.x0-.3,h.z1,h.x1+.3,h.z1+.3,y,y+6),In(n,h.x0-.3,h.z0,h.x0,h.z1,y,y+6),In(n,h.x1,h.z0,h.x1+.3,h.z1,y,y+6);let M=z(16773569,{e:16769162,ei:2.2});for(let U=0;U<3;U++)v.mesh(L.sphere(.25,14,10),M,h.x0+d*(U+.5)/3,y+3.2,h.z0+.2);for(let U=0;U<3;U++)v.mesh(L.sphere(.25,14,10),M,h.x0+d*(U+.5)/3,y+3.2,h.z1-.2);let _=[16734558,16763450,9095462,1671876,6966419];if(o==="bunker"){for(let U=0;U<4;U++){let N=h.x0+1.5+U*2.2;[.6,1.8].forEach(Y=>{v.rbox(z(4674921,{m:.5,r:.4}),1,.12,2.1,.04,N,y+Y,h.z0+1.4),v.rbox(z(_[U%5],{r:.8}),.95,.15,2,.06,N,y+Y+.12,h.z0+1.4)}),v.box(z(3359061),.08,2.2,.08,N-.48,y+1.1,h.z0+.4)}for(let U=0;U<4;U++)v.rbox(z(988970,{cc:1,r:.2}),1.6,1,.1,h.x1-1.2-U*1.8,y+2,h.z1-.12),v.box(z([2278750,2282478,16096779,15680580][U],{e:[2278750,2282478,16096779,15680580][U],ei:.9}),1.45,.85,.02,h.x1-1.2-U*1.8,y+2,h.z1-.18);v.rbox(z(4674921,{r:.5}),6.5,1,.8,.05,h.x1-3.8,y+.5,h.z1-.7);for(let U=0;U<6;U++)v.rbox(z(6660877,{r:.7}),.9,.7,.7,.06,h.x0+1+U%3*1,y+.35+Math.floor(U/3)*.7,h.z1-.8);v.mesh(L.cyl(1.2,1.2,.08,3),z(16436245,{e:16436245,ei:.5}),t.x,y+3.6,h.z0+.25,Math.PI/2,0,0),h.tableSpots=[]}else if(o==="mine"){for(let U=0;U<4;U++){let N=h.x0+1+U*(d-2)/3;v.box(z(9132587,{r:.9}),.35,3.5,.35,N,y+1.75,h.z0+.3),v.box(z(9132587,{r:.9}),.35,3.5,.35,N,y+1.75,h.z1-.3),v.box(z(9132587,{r:.9}),.4,.4,g,N,y+3.5,t.z)}v.rbox(z(7041664,{m:.7,r:.4}),1.4,.9,2,.15,t.x+1.5,y+.7,t.z);for(let U=0;U<5;U++)v.mesh(L.rock(U,1),z([16765286,10416154,5032432][U%3],{r:.2,m:.3,e:[16765286,10416154,5032432][U%3],ei:.5}),t.x+1.2+U%3*.3,y+1.25,t.z-.5+U*.25,0,U,0,.25)}else if(o==="subway"){v.rbox(z(15857145,{r:.3,cc:1}),d-1,2.6,2.4,.5,t.x,y+1.5,h.z0+1.6),v.rbox(z(3835647,{r:.4}),d-.9,.5,2.45,.2,t.x,y+1.1,h.z0+1.6);for(let U=0;U<4;U++)v.box(z(1976635,{cc:1,r:.1}),1.2,.9,2.5,h.x0+1.8+U*(d-3.6)/3,y+2,h.z0+1.6);v.box(z(16436245),d,.05,.3,t.x,y+.03,h.z0+3.1);for(let U=0;U<3;U++)v.rbox(z(9133302,{r:.5}),1.6,.12,.5,.04,h.x0+2+U*3,y+.5,h.z1-.6)}else{for(let U=0;U<Math.floor(d/2.5);U++){let N=h.x0+1.3+U*2.5;v.rbox(z(15325350,{r:.7}),2,2.2,.5,.04,N,y+1.1,h.z0+.35);for(let Y=0;Y<6;Y++)v.mesh(L.cyl(.12,.12,.28,14),z(_[(Y+U)%5],{r:.3,m:.4}),N-.75+Y*.3,y+.6+Y%2*.7,h.z0+.4)}v.rbox(z(15857145,{r:.4}),.9,1.1,.8,.1,h.x1-.7,y+.55,h.z1-.7),v.mesh(L.cyl(.28,.28,.06,20),z(988970,{cc:1}),h.x1-.7,y+.7,h.z1-1.12,Math.PI/2,0,0);for(let U=0;U<3;U++)v.rbox(z(13935475,{r:.8}),.8,.8,.8,.06,h.x1-.7,y+.4+U*.8*(U<2,1),h.z0+.7+(U===2?0:U*.9));v.mesh(L.cyl(.2,.2,.9,16),z(4770532,{r:.1,op:.6,cc:1}),h.x0+.6,y+.45,h.z1-.6)}let R={x:t.x,z:h.z1-1.2};o==="bunker"&&(R.x=h.x0+1.5,R.z=t.z+1.5),v.mesh(L.cyl(.95,1,.08,32),z(2278750,{e:2278750,ei:.9}),R.x,y+.04,R.z),v.mesh(L.torus(.95,.07,6.283,8,32),z(16777215,{e:16777215,ei:.6}),R.x,y+.09,R.z,Math.PI/2,0,0),v.build(w,{cast:!1}),h.spawn={x:t.x+(o==="bunker"?2:.6),y,z:t.z+(o==="bunker"?0:-.4)};let G=r.w(x[0]+(x[0]>0?-1.5:1.5),x[1]);Qa(n,{x:p[0],y:t.baseY+.25,z:p[1],kind:"down",label:o==="bunker"?"\u2622\uFE0F BUNKER":o==="subway"?"\u{1F687} SUBWAY":o==="mine"?"\u26CF\uFE0F MINE":"\u2B07 BASEMENT",to:h.spawn,b:t,room:h}),Qa(n,{x:R.x,y,z:R.z,kind:"up",label:"\u2B06 GO UP",to:{x:G[0],y:t.baseY+.3,z:G[1]},b:t,room:h}),h.hatch={x:p[0],y:t.baseY+.25,z:p[1]},t.room=h,n.rooms.push(h)}function ur(n,e,t){if(t.wrecked)return!1;if(t.wrecked=!0,t.group.visible=!1,t.upper.visible=!1,t.walls.forEach(i=>i.off=!0),t.plats.forEach((i,s)=>{s>0&&(i.off=!0)}),!t.rubble){let i=new di,s=z(t.wall,{r:.8}),r=z(t.roof,{r:.6}),o=z(13620957,{r:.8});i.rbox(o,t.w+.5,.5,t.d+.5,.1,t.x,t.baseY-.05,t.z);let a=t.id*7.13,l=()=>(a=(a*9301+49297)%233280,a/233280);for(let c=0;c<18;c++){let u=.6+l()*1.3;i.add(L.rbox(1,1,1,.12),c%3?s:r,ht(t.x+(l()-.5)*t.w*.9,t.baseY+.3+l()*.6,t.z+(l()-.5)*t.d*.9,l()*3,l()*3,l()*3,u,u*.6,u))}[[0,t.d/2],[0,-t.d/2],[t.w/2,0],[-t.w/2,0]].forEach((c,u)=>{let h=u<2?t.w:t.d;for(let f=0;f<3;f++){let d=.6+l()*1.4,g=(f-1)*h/3;i.add(L.rbox(1,1,1,.06),s,ht(t.x+c[0]+(u<2?g:0),t.baseY+d/2,t.z+c[1]+(u<2?0:g),0,0,0,u<2?h/3.3:.3,d,u<2?.3:h/3.3))}}),t.rubble=new $e,i.build(t.rubble),e.add(t.rubble)}return t.rubble.visible=!0,!0}function us(n,e){e.wrecked&&(e.wrecked=!1,e.group.visible=!0,e.upper.visible=!0,e.rubble&&(e.rubble.visible=!1),e.walls.forEach(t=>t.off=!1),e.plats.forEach(t=>t.off=!1))}var Zh=[{id:"area51",name:"Area 51",emoji:"\u{1F47D}",desc:"Secret desert base with hangars, a control tower and a NUCLEAR BUNKER deep underground.",mood:"desert"},{id:"city",name:"Grok City",emoji:"\u{1F3D9}\uFE0F",desc:"Skyscrapers with rooftop elevators, shops, a park and a subway station to hide in.",mood:"sunny"},{id:"beach",name:"Sunny Beach",emoji:"\u{1F3D6}\uFE0F",desc:"Beach houses, a hotel, a pier and a lighthouse hill. Watch the ocean...",mood:"sunny"},{id:"pine",name:"Pine Peak",emoji:"\u{1F332}",desc:"Cozy mountain town with log cabins, a ranger tower, a mine tunnel and Mt. Grumble.",mood:"sunny"}],io=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function l_(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function el(n,e,t,i=300,s=150){let r=new Zn(i,i,s,s);r.rotateX(-Math.PI/2);let o=r.attributes.position,a=new Float32Array(o.count*3),l=new Ue;for(let u=0;u<o.count;u++){let h=o.getX(u),f=o.getZ(u),d=n.terrain(h,f);o.setY(u,d),l.setHex(t(h,f,d)),a[u*3]=l.r,a[u*3+1]=l.g,a[u*3+2]=l.b}r.setAttribute("color",new Dt(a,3)),r.computeVertexNormals();let c=new Le(r,new qt({vertexColors:!0,roughness:.92}));return c.receiveShadow=!0,e.add(c),c}function Bi(n,e,t,i,s,r=8,o=.03){let a=Math.hypot(i-e,s-t),l=Math.atan2(i-e,s-t),c=(e+i)/2,u=(t+s)/2;n.add(L.box(r,.06,a),z(4870752,{r:.85}),ht(c,o,u,0,l,0));let h=Math.floor(a/4);for(let f=0;f<h;f++){let d=(f+.5)/h-.5;n.add(L.box(.22,.02,1.8),z(16765503,{r:.6}),ht(c+Math.sin(l)*d*a,o+.04,u+Math.cos(l)*d*a,0,l,0))}}function c_(n,e,t,i,s,r=.06){n.add(L.rbox(i,.18,s,.06),z(15984335,{r:.85}),ht(e,r,t))}function fr(n,e,t,i,s,r=0,o="Lookout Tower",a=15167313){let l=n.terrain(t,i),c=Math.cos(r),u=Math.sin(r),h=z(a,{r:.6}),f=z(7031343,{r:.8}),d=s*1.7+1,g=(E,M)=>[t+E*c+M*u,i-E*u+M*c];e.add(L.rbox(4.4,.35,4.4,.08),h,ht(t,l+s,i,0,r,0)),[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]].forEach(E=>{let M=g(E[0],E[1]);e.mesh(L.cyl(.16,.2,s,10),f,M[0],l+s/2,M[1])}),[[0,-2.1,4.4,.1],[-2.1,0,.1,4.4],[2.1,0,.1,4.4]].forEach(E=>{let M=g(E[0],E[1]);e.add(L.rbox(E[2]+.05,.9,E[3]+.05,.04),h,ht(M[0],l+s+.6,M[1],0,r,0))});let x=g(0,2.2+d/2),m=Math.atan2(s,d);e.add(L.rbox(2,.25,Math.hypot(d,s),.06),h,ht(x[0],l+s/2,x[1],m*1,r,0));for(let E=1;E<6;E++){let M=g(0,2.2+d*E/6);e.add(L.box(2,.06,.18),f,ht(M[0],l+s-s*E/6+.16,M[1],0,r,0))}e.add(L.cone(3.6,1.8,4),z(16777215,{r:.5}),ht(t,l+s+3.4,i,0,r+Math.PI/4,0)),[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]].forEach(E=>{let M=g(E[0],E[1]);e.mesh(L.cyl(.08,.08,2.5,8),f,M[0],l+s+1.4,M[1])});let p=g(-2.2,-2.2),w=g(2.2,2.2);ki(n,Math.min(p[0],w[0]),Math.min(p[1],w[1]),Math.max(p[0],w[0]),Math.max(p[1],w[1]),l+s+.17);let v=g(-1,2.2),y=g(1,2.2+d),O=Math.abs(u)>.5?"x":"z",P=O==="z"?g(0,2.2)[1]:g(0,2.2)[0],T=O==="z"?g(0,2.2+d)[1]:g(0,2.2+d)[0];ki(n,v[0],v[1],y[0],y[1],0,null,{axis:O,a0:P,a1:T,h0:l+s+.17,h1:l}),n.high.push({x:t,y:l+s+.2,z:i,label:o,foot:{x:g(0,2.4+d)[0],z:g(0,2.4+d)[1]}})}function qh(n,e,t,i,s,r,o=16777215,a){let l=Math.hypot(s-t,r-i),c=Math.ceil(l/2.5),u=z(o,{r:.5}),h=Math.atan2(s-t,r-i);for(let f=0;f<=c;f++){let d=f/c;n.mesh(L.cyl(.08,.08,1.6,8),z(10265519,{m:.7,r:.3}),t+(s-t)*d,.8,i+(r-i)*d)}n.add(L.box(.06,.07,l),u,ht((t+s)/2,1.5,(i+r)/2,0,h,0)),n.add(L.box(.06,.07,l),u,ht((t+s)/2,.8,(i+r)/2,0,h,0)),a&&In(e,t-.1,i-.1,s+.1,r+.1,-1,1.7)}function h_(n,e,t,i=0){let s=z(12653087,{r:.5,m:.3});[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]].forEach(r=>n.mesh(L.cyl(.15,.2,9,10),s,e+r[0],i+4.5,t+r[1])),n.mesh(L.cap(2.6,2.2,24),z(16316922,{r:.35,m:.5}),e,i+11.5,t),n.mesh(L.cone(2.7,1.4,24),z(12653087,{r:.4}),e,i+14.3,t)}function Pd(n,e,t){n.mesh(L.cyl(.4,.6,5,16),z(11384253,{m:.8,r:.3}),e,2.5,t),n.add(new Ot(4,32,12,0,6.283,0,.9),z(15857145,{m:.6,r:.25,side:zt}),ht(e,6.5,t,-2.3,.6,0)),n.mesh(L.sphere(.4,12,8),z(15680580,{e:15680580,ei:1.5}),e,7.5,t)}function u_(n,e,t){n.mesh(L.cyl(3.4,3.6,.7,40),z(15330543,{r:.5}),e,.35,t),n.mesh(L.cyl(3,3,.1,40),z(5032432,{r:.05,cc:1,e:30646,ei:.25}),e,.66,t),n.mesh(L.cyl(.4,.6,1.8,20),z(15330543,{r:.5}),e,1.2,t),n.mesh(L.sphere(.9,20,12),z(9494767,{r:.05,op:.6,cc:1}),e,2.3,t)}function f_(n,e,t,i){let s=z(2829634,{r:.4,m:.6});n.mesh(L.cyl(.08,.1,3.6,8),s,e,1.8,t),n.add(L.rbox(.4,1.1,.35,.08),s,ht(e,3.8,t,0,i,0)),[15680580,16436245,2278750].forEach((r,o)=>n.mesh(L.sphere(.11,12,8),z(r,{e:r,ei:o===2?2:.3}),e+Math.sin(i)*.18,4.15-o*.33,t+Math.cos(i)*.18))}function d_(n,e,t,i,s=0){n.mesh(L.cyl(.05,.05,2.4,8),z(16777215),e,s+1.2,t),n.add(new Ot(1.5,16,6,0,6.283,0,Math.PI*.3),z(i,{r:.5,side:zt}),ht(e,s+1.95,t))}function tl(n,e,t,i,s){let r=z(16777215,{r:1,e:16777215,ei:.35});[[0,0,0,1.4],[1.4,-.2,.2,1],[-1.4,-.2,-.1,1.05],[.6,.6,-.2,.95],[-.5,.5,.3,.9]].forEach(o=>n.mesh(L.sphere(1,18,12),r,e+o[0]*s,t+o[1]*s,i+o[2]*s,0,0,0,o[3]*s,o[3]*s*.8,o[3]*s))}function p_(n,e,t,i){let s=0;for(;n.coinSpots.length<t&&s++<4e3;){let r=(e()-.5)*n.half*1.8,o=(e()-.5)*n.half*1.8;i&&!i(r,o)||n.walls.some(a=>r>a.x0-1&&r<a.x1+1&&o>a.z0-1&&o<a.z1+1)||n.coinSpots.push({x:r,z:o})}}function Id(n,e){let t=Td();t.id=n,t.meta=Zh.find(a=>a.id===n);let i=new di,s=l_(n.length*977+n.charCodeAt(0)),r=new $e;if(e.add(r),t.root=r,n==="area51"){t.half=75,t.terrain=(a,l)=>{let c=Math.max(Math.abs(a),Math.abs(l)),u=c>60?Math.pow(c-60,1.35)*.6:0;return u+=io(48,70,c)*(Math.sin(a*.11)*Math.cos(l*.09)*1.2+.4),u},el(t,r,(a,l,c)=>c>6?14254414:c>1?15382134:15912850),i.add(L.box(150,.06,12),z(6054768,{r:.85}),ht(0,.03,52));for(let a=-7;a<=7;a++)i.add(L.box(5,.02,.5),z(16777215),ht(a*10,.07,52));Bi(i,0,-50,0,46,7),Bi(i,-50,0,50,0,7),i.add(L.cyl(9,9,.08,48),z(7041664,{r:.8}),ht(14,.04,-12)),i.add(L.torus(7.5,.25,6.283,6,48),z(16436245,{e:16436245,ei:.2}),ht(14,.1,-12,Math.PI/2,0,0)),bt(t,r,{x:0,z:-32,w:12,d:9,h:3.6,door:"s",wall:10727874,trim:16436245,roof:6583435,roofType:"flat",sturdy:!0,interior:"bunkerTop",basement:"bunker",name:"Nuclear Bunker",sign:16436245,windows:!1,wideDoor:3.2,awning:16436245}),bt(t,r,{x:-32,z:-12,w:15,d:16,h:7.5,ceil:7.5,door:"e",wall:14673645,trim:3835647,roof:12109008,roofType:"arch",sturdy:!0,interior:"hangar",name:"Hangar 1",wideDoor:6,windows:!1}),bt(t,r,{x:-32,z:18,w:15,d:16,h:7.5,ceil:7.5,door:"e",wall:14673645,trim:16711790,roof:12109008,roofType:"arch",sturdy:!0,interior:"hangar",name:"Hangar 2",wideDoor:6,windows:!1}),bt(t,r,{x:30,z:-26,w:7,d:7,h:15,door:"w",wall:15857145,trim:3835647,roof:3835647,roofType:"flat",sturdy:!0,elevator:!0,interior:"office",name:"Control Tower",windows:!0}),bt(t,r,{x:28,z:10,w:12,d:7,h:3.6,door:"w",wall:9419919,trim:16777215,roof:2976335,roofType:"gable",interior:"home",basement:!0,name:"Barracks A"}),bt(t,r,{x:28,z:26,w:12,d:7,h:3.6,door:"w",wall:9419919,trim:16777215,roof:2976335,roofType:"gable",interior:"home",name:"Barracks B"}),bt(t,r,{x:9,z:18,w:10,d:8,h:3.8,door:"w",wall:16758531,trim:16777215,roof:16483584,roofType:"flat",interior:"diner",name:"Mess Hall",sign:16483584}),bt(t,r,{x:-10,z:36,w:10,d:9,h:5,ceil:5,door:"e",wall:15087942,trim:16777215,roof:10289672,roofType:"flat",interior:"station",wideDoor:3.6,name:"Fire Station",sturdy:!0}),fr(t,i,-14,-48,6,0,"Guard Tower"),fr(t,i,10,34,6,-Math.PI/2,"Watch Tower",3835647),h_(i,-50,-38),Pd(i,46,-44),Pd(i,50,34),qh(i,t,-56,-56,56,-56,15067115),qh(i,t,-56,-56,-56,40,15067115),qh(i,t,56,-56,56,40,15067115);for(let a=0;a<26;a++){let l=(s()-.5)*140,c=(s()-.5)*140;Math.abs(l)<52&&Math.abs(c)<60||hs(i,l,t.terrain(l,c),c,.8+s()*.6,"cactus")}for(let a=0;a<30;a++){let l=(s()-.5)*150,c=(s()-.5)*150;Math.abs(l)<50&&Math.abs(c)<58||Bh(i,l,t.terrain(l,c),c,1+s()*2.5,a,[14254414,13134140,14723437][a%3])}[[8,-4,.2,7048739],[-12,6,1.6,5597999],[12,30,-1.2,15857145],[-20,-36,.4,7048739]].forEach(a=>hr(i,a[0],0,a[1],a[2],a[3])),i.add(L.sphere(5,40,16),z(13095132,{m:.9,r:.18}),ht(14,1.2,-12,.25,0,.1,1,.25,1)),i.add(new Ot(2.2,32,12,0,6.283,0,Math.PI/2),z(10217471,{r:.05,op:.4,cc:1}),ht(14,2,-12,.25,0,.1));for(let a=0;a<8;a++)i.mesh(L.sphere(.3,10,8),z(a%2?16732120:4190463,{e:a%2?16732120:4190463,ei:2}),14+Math.cos(a/8*6.283)*4.5,1.2+Math.sin(a/8*6.283)*1.1,-12+Math.sin(a/8*6.283)*4.5);t.volcano={x:55,z:55},t.spawns=[[4,4],[-4,4],[4,-4],[-4,-4]];for(let a=0;a<8;a++)tl(i,(s()-.5)*300,45+s()*20,(s()-.5)*300,4+s()*3)}else if(n==="city"){t.half=75,t.terrain=(h,f)=>{let d=Math.max(Math.abs(h),Math.abs(f));return d>70?(d-70)*.8:0},el(t,r,(h,f,d)=>Math.abs(h-15)<12&&Math.abs(f-15)<12||Math.abs(h+45)<12&&Math.abs(f-45)<12?8377179:9426028);for(let h of[-30,0,30])Bi(i,h,-75,h,75,8),Bi(i,-75,h,75,h,8,.035);for(let h of[-45,-15,15,45])for(let f of[-45,-15,15,45])c_(i,h,f,22,22,.02);let a=[16734558,16763450,9095462,1671876,6966419,16749132,5032432,16196997],l=0,c=(h,f,d,g,x)=>bt(t,r,{x:h,z:f,w:9,d:9,h:d,door:g,wall:x,trim:16777215,roof:3359061,roofType:"flat",sturdy:!0,elevator:!0,interior:"office",name:"Sky Tower "+ ++l}),u=(h,f,d,g,x,m,p,w="shop",v)=>bt(t,r,{x:h,z:f,w:d,d:g,h:4.2,door:x,wall:m,trim:16777215,roof:4674921,roofType:"flat",interior:w,name:p,sign:a[l++%8],basement:v});c(-50,-50,26,"e",5032432),c(-40,-40,18,"s",16196997),u(-50,-36,8,8,"e",16763450,"Toy Store"),u(-38,-52,8,7,"s",9095462,"Grocery","shop",!0),c(-20,-50,30,"s",3835647),bt(t,r,{x:-10,z:-42,w:9,d:8,h:10,door:"w",wall:16756141,trim:16777215,roof:10309341,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments"}),u(-20,-38,8,7,"e",16749132,"Pizza Place","diner"),c(20,-48,22,"s",8599788),u(10,-48,8,8,"s",448160,"Pet Shop"),bt(t,r,{x:15,z:-36,w:10,d:7,h:4.6,door:"s",wall:16765286,trim:473932,roof:473932,roofType:"flat",interior:"shop",basement:"subway",name:"Subway Station",sign:1149618}),c(50,-48,24,"w",16711790),u(40,-40,8,8,"w",5032432,"Ice Cream","diner"),c(50,-36,14,"w",16471559),bt(t,r,{x:-45,z:-12,w:12,d:10,h:5.2,ceil:5.2,door:"e",wall:15087942,trim:16777215,roof:10289672,roofType:"flat",interior:"station",wideDoor:3.6,sturdy:!0,name:"Fire Station"}),u(-45,-22,9,6,"n",16763450,"Comic Shop"),c(-15,-15,20,"e",448160),u(-20,-22,7,6,"n",15817653,"Candy Shop","shop",!0),u(-10,-22,7,6,"n",48121,"Game Store"),c(15,-15,28,"w",16760331),bt(t,r,{x:22,z:-22,w:9,d:7,h:9,door:"n",wall:11920524,trim:16777215,roof:1734047,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments 2"}),c(45,-15,18,"w",10182117),u(45,-24,9,6,"n",16704576,"Burger Barn","diner"),u_(i,15,15);for(let h=0;h<9;h++){let f=h/9*6.283;hs(i,15+Math.cos(f)*8.5,0,15+Math.sin(f)*8.5,.8+s()*.3,"round",h)}[[15,7.5,0],[15,22.5,Math.PI],[7.5,15,Math.PI/2],[22.5,15,-Math.PI/2]].forEach(h=>Md(i,h[0],0,h[1],h[2])),c(-15,15,22,"e",16196997),u(-22,22,8,7,"e",9095462,"Book Nook","shop",!0),u(-22,8,8,7,"e",16763450,"Bakery","diner"),c(45,15,26,"w",4415982),bt(t,r,{x:38,z:22,w:8,d:8,h:10,door:"w",wall:16763101,trim:16777215,roof:13481179,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments 3"}),u(38,8,8,7,"w",8449433,"Arcade","shop"),c(-45,15,16,"e",4770532),u(-45,24,10,6,"e",16743168,"Hardware","shop",!0);for(let h=0;h<10;h++){let f=h/10*6.283;hs(i,-45+Math.cos(f)*7,0,45+Math.sin(f)*7,.9,"round",h)}fr(t,i,-45,45,6,Math.PI/2,"Park Lookout",448160),u(-15,45,9,8,"e",16335172,"Toy Store 2","shop",!0),c(-15,55,20,"e",9485933),c(15,45,24,"w",16291358),u(15,55,9,7,"n",4434571,"Flower Shop"),c(45,45,30,"w",5731728),u(45,55,9,7,"n",15954476,"Taco Stand","diner",!0);for(let h of[-30,0,30])for(let f of[-60,-45,-15,15,45,60])Hh(i,h+4.6,0,f),Hh(i,f,0,h+4.6);for(let h of[-30,0,30])for(let f of[-30,0,30])f_(i,h+4.8,f+4.8,0);for(let h=0;h<18;h++){let f=[-30,0,30][h%3],d=-65+h*7.5;h%2?hr(i,f+2.2,0,d,0,a[h%8]):hr(i,d,0,f-2.2,Math.PI/2,a[(h+3)%8])}t.volcano={x:-60,z:62},t.spawns=[[3,3],[-3,3],[3,-3],[-3,-3]];for(let h=0;h<8;h++)tl(i,(s()-.5)*300,50+s()*20,(s()-.5)*300,4+s()*3)}else if(n==="beach"){t.half=75,t.sea=-1.2,t.terrain=(u,h)=>{let f=-io(22,50,h)*4,d=Math.hypot(u-52,h+48);f+=Math.max(0,11-d*.42)*io(0,1,1);let g=Math.max(Math.abs(u),-h);return g>68&&(f+=(g-68)*.7),f},el(t,r,(u,h,f)=>h>16?f<-1.4?15254650:16769704:f>3?8178026:9426028),Bi(i,-75,6,75,6,7),Bi(i,0,-75,0,6,7),i.add(L.rbox(110,.3,5,.06),z(13011538,{r:.7}),ht(0,.15,14)),ki(t,-55,11.5,55,16.5,.3);let a=[16756141,16766629,16646070,13303743,10221311,10536191,12432127,16762623],l=[15681391,1149618,448160,16765286,8599788,16711790],c=0;for(let u of[-52,-36,-20,20,36])bt(t,r,{x:u,z:-6,w:9,d:8,h:3.8,door:"s",wall:a[c%8],roof:l[c%6],interior:"home",basement:c%2===0,name:"Beach House"}),c++;for(let u of[-52,-36,20,36,52])bt(t,r,{x:u,z:-24,w:9,d:8,h:3.8,door:"n",wall:a[(c+3)%8],roof:l[c%6],interior:"home",basement:c%2===1,name:"Beach House"}),c++;bt(t,r,{x:-14,z:-40,w:12,d:10,h:20,door:"e",wall:16748459,trim:16777215,roof:3359061,roofType:"flat",elevator:!0,sturdy:!0,interior:"office",name:"Sunset Hotel"}),bt(t,r,{x:12,z:-40,w:10,d:8,h:4.2,door:"w",wall:16740518,roof:16766576,roofType:"flat",interior:"diner",name:"Ice Cream Parlor",sign:16740518,basement:!0}),bt(t,r,{x:52,z:-6,w:9,d:8,h:4.2,door:"s",wall:7395071,roof:16750448,roofType:"flat",interior:"shop",name:"Surf Shop",sign:16750448}),bt(t,r,{x:52,z:-48,baseY:t.terrain(52,-48),w:6,d:6,h:16,door:"w",wall:16777215,trim:15672124,roof:15672124,roofType:"flat",elevator:!0,sturdy:!0,interior:"office",name:"Lighthouse",style:"tower"}),t.high.push({x:46,y:t.terrain(46,-44),z:-44,label:"Lighthouse Hill"}),i.add(L.rbox(6,.35,40,.06),z(11895642,{r:.75}),ht(-30,.6,42)),ki(t,-33,22,-27,62,.78);for(let u=24;u<62;u+=5)[-32.6,-27.4].forEach(h=>i.mesh(L.cyl(.25,.25,4,10),z(9133620,{r:.85}),h,-1.4,u));fr(t,i,8,30,5.5,Math.PI,"Lifeguard Tower",15672124),fr(t,i,40,30,5.5,Math.PI,"Lifeguard Tower 2",16758531);for(let u=0;u<12;u++)d_(i,-60+u*10+s()*3,22+s()*6,l[u%6],t.terrain(-60+u*10,24));for(let u=0;u<22;u++){let h=-70+u*6.6+s()*2,f=9+s()*2;hs(i,h,0,u%2?f:f-22-s()*4,.9+s()*.4,"palm",u)}for(let u=0;u<6;u++)i.mesh(L.sphere(.4,20,14),z([16734558,16763450,1671876][u%3],{r:.3,cc:.8}),-50+u*18,t.terrain(-50+u*18,28)+.4,28);[[-8,3,Math.PI/2,16734558],[24,9,Math.PI/2,5032432],[-3,-15,0,16763450]].forEach(u=>hr(i,u[0],0,u[1],u[2],u[3])),t.volcano={x:-60,z:60},t.spawns=[[3,0],[-3,0],[3,-3],[-3,-3]];for(let u=0;u<8;u++)tl(i,(s()-.5)*300,45+s()*20,(s()-.5)*300,4+s()*3);i.add(L.rbox(2.2,1,6,.4),z(16777215,{r:.3,cc:1}),ht(30,-1,58)),i.mesh(L.cyl(.08,.08,7,8),z(9133620),30,2.5,58),i.add(L.cone(2.2,5.5,3),z(16711790,{side:zt}),ht(30.3,3.3,58.5,0,0,0,.1,1,1))}else if(n==="pine"){t.half=75;let a=(f,d)=>{let g=Math.hypot(f-64,d+66);return Math.max(0,34-g*.75)};t.terrain=(f,d)=>{let g=Math.max(Math.abs(f)/50,Math.abs(d)/44),x=g>1?Math.pow((g-1)*30,1.25)*.45+Math.sin(f*.15)*Math.cos(d*.13)*1.5*io(1,1.3,g):0,m=Math.hypot(f+38,d-32);return x-=io(10,4,m)*2.2,x+=Math.max(0,9-Math.hypot(f-30,d+32)*.6),Math.max(x,a(f,d))+0},el(t,r,(f,d,g)=>g>14?16317180:g>7?10265519:g<-.8?14074506:7327587);let l=new Le(new ss(10,48),z(3718648,{r:.05,cc:1,op:.85,e:223649,ei:.2}));l.rotation.x=-Math.PI/2,l.position.set(-38,-.6,32),r.add(l),Bi(i,-50,0,50,0,6),Bi(i,0,-44,0,44,6);let c=[11887901,13204538,10506797,13928522],u=[2976335,12653087,1914199,6986062],h=0;for(let[f,d,g]of[[-14,-14,"s"],[-30,-14,"s"],[14,-14,"s"],[-14,14,"n"],[14,14,"n"],[30,14,"n"],[-30,14,"n"]])bt(t,r,{x:f,z:d,w:9,d:8,h:3.8,door:g,wall:c[h%4],trim:16773590,roof:u[h%4],interior:"cabin",basement:h%2===0,name:"Log Cabin",inner:16113331,floor:11565637}),h++;bt(t,r,{x:30,z:-12,w:10,d:8,h:4.2,door:"s",wall:16765286,roof:15681391,roofType:"gable",interior:"shop",name:"General Store",sign:15681391,basement:!0}),bt(t,r,{x:-10,z:32,w:14,d:10,h:7,ceil:3.8,door:"e",wall:9262372,trim:16777215,roof:10289672,roofType:"gable",interior:"diner",name:"Ski Lodge",inner:16113331,floor:11565637}),bt(t,r,{x:20,z:34,w:7,d:7,h:12,door:"w",wall:2976335,trim:16765286,roof:16765286,roofType:"flat",interior:"office",elevator:!0,sturdy:!0,name:"Ranger Tower"}),bt(t,r,{x:-44,z:-30,w:7,d:6,h:3.6,door:"e",wall:8344889,trim:4007959,roof:6045747,roofType:"flat",interior:"shop",basement:"mine",name:"Mine Entrance",sign:16758531,sturdy:!0}),t.high.push({x:30,y:t.terrain(30,-32),z:-32,label:"Pine Hill"}),t.high.push({x:36,y:t.terrain(36,-36),z:-36,label:"Pine Hill"}),fr(t,i,-36,0,6,Math.PI/2,"Fire Lookout",12348453);for(let f=0;f<120;f++){let d=(s()-.5)*160,g=(s()-.5)*160,x=t.terrain(d,g);Math.abs(d)<40&&Math.abs(g)<38||x>13||Math.hypot(d+38,g-32)<11||hs(i,d,x-.2,g,.9+s()*.9,"pine",f)}for(let f=0;f<14;f++){let d=(s()-.5)*70,g=(s()-.5)*70;Math.abs(d)<4||Math.abs(g)<4||t.walls.some(x=>d>x.x0-3&&d<x.x1+3&&g>x.z0-3&&g<x.z1+3)||hs(i,d,t.terrain(d,g),g,.8,"pine",f)}for(let f=0;f<18;f++){let d=(s()-.5)*150,g=(s()-.5)*150;Math.abs(d)<45&&Math.abs(g)<40||Bh(i,d,t.terrain(d,g),g,1+s()*2,f,10265519)}i.mesh(L.cyl(1.2,1.3,.3,16),z(7041664,{r:.9}),6,.15,6);for(let f=0;f<4;f++)i.add(L.cyl(.12,.12,1.4,8),z(7029795),ht(6,.35,6,Math.PI/2,f*.8,0));i.mesh(L.cone(.5,1.1,12),z(16743168,{e:16733184,ei:2.5}),6,.9,6),t.fires.push({x:6,y:0,z:6,r:3.5}),[[4,-24,0,12653087],[-24,4,Math.PI/2,1914199]].forEach(f=>hr(i,f[0],0,f[1],f[2],f[3])),i.mesh(L.cyl(6,8,2,32),z(5981750,{r:.9}),64,a(64,-66)-.5,-66),i.mesh(L.cyl(5,5,.3,32),z(16739072,{e:16731392,ei:2.2}),64,a(64,-66)+.4,-66),t.volcano={x:64,z:-66,y:a(64,-66),real:!0},t.spawns=[[3,3],[-3,3],[3,-3],[-3,-3]];for(let f=0;f<9;f++)tl(i,(s()-.5)*300,48+s()*20,(s()-.5)*300,4+s()*3)}i.build(r),p_(t,s,46,(a,l)=>t.terrain(a,l)>-1&&t.terrain(a,l)<8),t.buildings.forEach((a,l)=>{l%2===0&&t.coinSpots.push({x:a.x,z:a.z,y:a.baseY+.2}),a.room&&t.coinSpots.push({x:a.room.spawn.x-1,z:a.room.spawn.z+1,y:a.room.spawn.y,under:!0})});let o=t.half;return In(t,-o-2,-o-2,o+2,-o,-100,100),In(t,-o-2,o,o+2,o+2,-100,100),In(t,-o-2,-o,-o,o,-100,100),In(t,o,-o,o+2,o,-100,100),t}var X={},Vt=new Ut,nl=new Ue,fs=class{constructor(e,t,i,s){this.m=new Js(e,t,i),this.m.castShadow=!!s,this.m.frustumCulled=!1,this.n=i,this.p=[],this.m.count=0,this.m.instanceMatrix.setUsage(jf),this.m.setColorAt(0,nl.set(16777215)),W.scene.add(this.m)}add(e){return this.p.length>=this.n&&this.p.shift(),this.p.push(e),e}clear(){this.p.length=0,this.m.count=0}};function Dd(){X.puffs=new fs(L.sphere(1,14,10),new qt({roughness:.9}),360),X.fire=new fs(L.sphere(1,12,8),new Yt({toneMapped:!1}),240),X.debris=new fs(L.rbox(1,1,1,.15,2),new qt({roughness:.7}),220,!0),X.sparks=new fs(L.sphere(1,8,6),new Yt({toneMapped:!1,transparent:!0,opacity:.95,blending:Li,depthWrite:!1}),260),X.hail=new fs(L.sphere(1,10,8),z(14743551,{r:.1,cc:1}),220,!0);let n=1400,e=new Rt,t=new Float32Array(n*6);e.setAttribute("position",new Dt(t,3)),X.rain=new pa(e,new Vr({color:13625599,transparent:!0,opacity:.55})),X.rain.frustumCulled=!1,X.rain.visible=!1,W.scene.add(X.rain),X.rainD=[];for(let x=0;x<n;x++)X.rainD.push([(Math.random()-.5)*60,Math.random()*30,(Math.random()-.5)*60]);let i=1600,s=new Rt,r=new Float32Array(i*3);s.setAttribute("position",new Dt(r,3));let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),X.snow=new ma(s,new Gr({size:.35,map:new ga(o),transparent:!0,depthWrite:!1,color:16777215})),X.snow.frustumCulled=!1,X.snow.visible=!1,W.scene.add(X.snow),X.snowD=[];for(let x=0;x<i;x++)X.snowD.push([(Math.random()-.5)*50,Math.random()*25,(Math.random()-.5)*50,Math.random()*6.28]);X.rings=[],X.ringGeo=new wa(.86,1,64),X.discGeo=new ss(1,64),X.lines=[],X.bolts=[],X.waves=[],X.meteors=[],X.trails=[],X.waterMat=new qt({color:1688575,roughness:.08,metalness:.05,transparent:!0,opacity:.82,emissive:679838,emissiveIntensity:.25}),X.waterMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},X.waterMat.userData.sh=x,x.vertexShader=`uniform float uT;
`+x.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float w1 = sin(position.x*0.18 + uT*1.6)*0.35 + cos(position.y*0.22 + uT*1.3)*0.3 + sin((position.x+position.y)*0.5+uT*2.6)*0.08;
      transformed.z += w1;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = normalize(vec3(-cos(position.x*0.18+uT*1.6)*0.063, sin(position.y*0.22+uT*1.3)*0.066, 1.0));")},X.water=new Le(new Zn(320,320,120,120),X.waterMat),X.water.rotation.x=-Math.PI/2,X.water.visible=!1,X.water.receiveShadow=!0,W.scene.add(X.water),X.foam=new Le(new Zn(320,6,60,1),z(16777215,{r:.6,op:.85,e:16777215,ei:.3})),X.foam.rotation.x=-Math.PI/2,X.foam.visible=!1,W.scene.add(X.foam),X.lavaMat=new qt({color:16734720,emissive:16727040,emissiveIntensity:1.6,roughness:.4}),X.lavaMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},X.lavaMat.userData.sh=x,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix*vec4(transformed,1.0)).xyz;`),x.fragmentShader=`uniform float uT;
varying vec3 vWp;
`+x.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float n = sin(vWp.x*0.7+uT)*sin(vWp.z*0.6-uT*0.8)+sin((vWp.x-vWp.z)*0.35+uT*1.7)*0.6; totalEmissiveRadiance *= 0.55 + 0.45*smoothstep(-0.6,1.2,n); diffuseColor.rgb = mix(vec3(0.25,0.05,0.02), diffuseColor.rgb, smoothstep(-0.9,0.2,n));`)},X.lava=new Le(new ss(1,64),X.lavaMat),X.lava.rotation.x=-Math.PI/2,X.lava.visible=!1,W.scene.add(X.lava),X.torMat=new qt({color:12109014,roughness:1,transparent:!0,opacity:.8,side:zt,depthWrite:!1}),X.torMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},X.torMat.userData.sh=x,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vUv2;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vUv2 = uv;`),x.fragmentShader=`uniform float uT;
varying vec2 vUv2;
`+x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float st = sin(vUv2.x*25.0 + vUv2.y*14.0 - uT*9.0)*0.5+0.5; diffuseColor.rgb *= 0.7 + 0.45*st; diffuseColor.a *= (0.55+0.45*st) * smoothstep(0.0,0.08,vUv2.y) * (1.0 - smoothstep(0.85,1.0,vUv2.y));`)};let c=[];for(let x=0;x<=24;x++){let m=x/24;c.push(new oe(.6+Math.pow(m,1.8)*9+Math.sin(m*9)*.25,m*34))}X.torGeo=new is(c,40),X.tors=[];let u=new $e,h=z(2285690,{e:1483594,ei:.6,r:.3,cc:.6}),f=new Le(L.cap(.14,.9,10),h);f.rotation.x=Math.PI/2,u.add(f);let d=new Le(L.cone(.36,.6,20),h);d.rotation.x=Math.PI/2,d.position.z=.75,u.add(d),u.visible=!1,W.scene.add(u),X.arrow=u,X.beacon=new Le(new an(.9,.9,30,24,1,!0),Bn(2285690,.18)),X.beacon.visible=!1,W.scene.add(X.beacon);let g=ja([new an(.42,.42,.1,28).rotateX(Math.PI/2).toNonIndexed(),new Qs(.42,.06,8,28).toNonIndexed()]);X.coins=new Js(g,z(16762941,{r:.22,m:1,e:9067008,ei:.45}),120),X.coins.castShadow=!0,X.coins.count=0,X.coins.frustumCulled=!1,W.scene.add(X.coins),X.stars=new Js(L.star(.6,.22),z(16773242,{e:16761856,ei:1.2,r:.25}),10),X.stars.count=0,X.stars.frustumCulled=!1,W.scene.add(X.stars)}function Zt(n,e,t,i,s,r={}){let o=r.fire?X.fire:X.puffs;for(let a=0;a<i;a++){let l=Math.random()*6.283,c=(r.sp||3)*(.4+Math.random());o.add({x:n+(Math.random()-.5)*(r.spread||1),y:e+Math.random()*(r.yr||.5),z:t+(Math.random()-.5)*(r.spread||1),vx:Math.cos(l)*c,vy:(r.up||2)*(.5+Math.random()),vz:Math.sin(l)*c,t:0,T:(r.life||1.2)*(.7+Math.random()*.6),s0:(r.s||.6)*(.6+Math.random()*.6),s1:(r.s1||1.6)*(.7+Math.random()*.6),c:Array.isArray(s)?s[a%s.length]:s,g:r.g||0,drag:r.drag||1.5})}}function ds(n,e,t,i,s,r={}){for(let o=0;o<i;o++){let a=Math.random()*6.283,l=(r.sp||6)*(.3+Math.random());X.debris.add({x:n,y:e+Math.random(),z:t,vx:Math.cos(a)*l,vy:(r.up||7)*(.6+Math.random()*.8),vz:Math.sin(a)*l,rx:Math.random()*6,ry:Math.random()*6,wr:(Math.random()-.5)*12,s:(r.s||.5)*(.5+Math.random()),t:0,T:r.life||3.5,c:s[o%s.length],gy:r.floor!=null?r.floor:e-.5})}}function jn(n,e,t,i,s,r={}){for(let o=0;o<i;o++){let a=Math.random()*6.283,l=Math.random()*3.14,c=(r.sp||8)*(.3+Math.random());X.sparks.add({x:n,y:e,z:t,vx:Math.cos(a)*Math.sin(l)*c,vy:Math.cos(l)*c*.6+(r.up||2),vz:Math.sin(a)*Math.sin(l)*c,t:0,T:(r.life||.6)*(.6+Math.random()*.8),s:r.s||.12,c:s,g:r.g!=null?r.g:12})}}function $h(n,e,t,i,s=16777215,r=.6){let o=new Le(L.torus(1,.08,6.283,8,48),Bn(s,.7));o.material=o.material.clone(),o.rotation.x=Math.PI/2,o.position.set(n,e+.2,t),W.scene.add(o),X.waves.push({m:o,t:0,T:r,r:i})}function il(n,e,t,i,s,r=16723285,o=0){let a=X.rings.find(c=>c.id===n);if(!a){if(a=X.rings.find(c=>!c.used),!a){let c=new $e,u=new Le(X.ringGeo,new Yt({color:r,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,side:zt})),h=new Le(X.discGeo,new Yt({color:r,transparent:!0,opacity:.25,depthWrite:!1,toneMapped:!1,side:zt})),f=new Le(X.discGeo,h.material.clone());c.add(u,h,f),c.rotation.x=-Math.PI/2,W.scene.add(c),a={g:c,a:u,d:h,f},X.rings.push(a)}a.used=!0,a.id=n}a.seen=!0,a.g.visible=!0,a.g.position.set(e,t+.08,i),a.g.scale.setScalar(s),a.a.material.color.setHex(r),a.d.material.color.setHex(r),a.f.material.color.setHex(r);let l=.5+.5*Math.sin(W.t*12);return a.a.material.opacity=.6+.4*l,a.d.material.opacity=.14+.1*l,a.f.scale.setScalar(Math.max(.001,o)),a.f.material.opacity=.35,a}function Ld(n,e,t,i,s,r,o,a=16723285){let l=X.lines.find(u=>u.id===n);if(!l){if(l=X.lines.find(u=>!u.used),!l){let u=new Le(new Zn(1,1),new Yt({color:a,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,side:zt}));u.rotation.order="YXZ",W.scene.add(u),l={m:u},X.lines.push(l)}l.used=!0,l.id=n}l.seen=!0;let c=Math.hypot(i-e,s-t);l.m.visible=!0,l.m.position.set((e+i)/2,r+.1,(t+s)/2),l.m.rotation.set(-Math.PI/2,Math.atan2(i-e,s-t),0,"YXZ"),l.m.scale.set(o,c,1),l.m.material.color.setHex(a),l.m.material.opacity=.3+.25*(.5+.5*Math.sin(W.t*14))}function Ud(){X.rings.forEach(n=>n.seen=!1),X.lines.forEach(n=>n.seen=!1)}function Nd(){X.rings.forEach(n=>{!n.seen&&n.used&&(n.used=!1,n.id=null,n.g.visible=!1)}),X.lines.forEach(n=>{!n.seen&&n.used&&(n.used=!1,n.id=null,n.m.visible=!1)})}function zd(n,e,t){let i=new $e,s=n+(Math.random()-.5)*6,r=e+55,o=t+(Math.random()-.5)*6,a=Bn(14085375,.95),l=new Yt({color:16777215,toneMapped:!1}),c=(u,h,f,d,g,x,m)=>{let p=Math.hypot(d-u,g-h,x-f),w=new Le(L.cyl(m,m,1,6),a);w.scale.y=p,w.position.set((u+d)/2,(h+g)/2,(f+x)/2),w.lookAt(d,g,x),w.rotateX(Math.PI/2),i.add(w);let v=new Le(L.cyl(m*.4,m*.4,1,5),l);v.scale.y=p,v.position.copy(w.position),v.quaternion.copy(w.quaternion),i.add(v)};for(let u=1;u<=12;u++){let h=u/12,f=n+(Math.random()-.5)*4*(1-h),d=e+55*(1-h),g=t+(Math.random()-.5)*4*(1-h);c(s,r,o,f,d,g,.35),Math.random()<.3&&c(f,d,g,f+(Math.random()-.5)*6,d-4,g+(Math.random()-.5)*6,.18),s=f,r=d,o=g}W.scene.add(i),X.bolts.push({g:i,t:0}),W.flash.position.set(n,e+12,t),W.flash.intensity=30,jn(n,e+.3,t,26,12575743,{sp:9}),Zt(n,e,t,6,10134445,{s:.6,s1:1.8})}function jh(n,e,t,i,s,r,o){let a=r==="bomb"?new $e:Ed(o||1);r==="bomb"&&(a.add(new Le(L.sphere(.8*o,16,12),z(16738816,{e:16729088,ei:2.2,r:.5}))),a.add(new Le(L.sphere(1.2*o,16,12),Bn(16747050,.35))));let l=r==="bomb"?0:25,c=r==="bomb"?0:-18;W.scene.add(a),X.meteors.push({id:n,m:a,x:e,y:t,z:i,T:s,t:0,dx:l,dz:c,kind:r,size:o||1,h:r==="bomb"?40:70})}function m_(){X.meteors.forEach(n=>W.scene.remove(n.m)),X.meteors.length=0}function Od(n,e,t){let i=W.t,s,r;for(s of[X.puffs,X.fire]){r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p){let a=Math.exp(-o.drag*n);o.vx*=a,o.vz*=a,o.vy=o.vy*a-o.g*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n;let l=o.t/o.T,c=(o.s0+(o.s1-o.s0)*Math.sqrt(l))*(1-l*l*l);Vt.position.set(o.x,o.y,o.z),Vt.scale.setScalar(Math.max(.001,c)),Vt.rotation.set(0,0,0),Vt.updateMatrix(),s.m.setMatrixAt(r,Vt.matrix),s.m.setColorAt(r,nl.setHex(o.c)),r++}s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0)}s=X.debris,r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p){o.vy-=22*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n,o.rx+=o.wr*n,o.ry+=o.wr*.7*n,o.y<o.gy+o.s*.5&&(o.y=o.gy+o.s*.5,o.vy*=-.35,o.vx*=.6,o.vz*=.6,o.wr*=.6);let a=o.t>o.T-.5?(o.T-o.t)/.5:1;Vt.position.set(o.x,o.y,o.z),Vt.rotation.set(o.rx,o.ry,0),Vt.scale.setScalar(o.s*a),Vt.updateMatrix(),s.m.setMatrixAt(r,Vt.matrix),s.m.setColorAt(r,nl.setHex(o.c)),r++}s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0),s=X.sparks,r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p)o.vy-=o.g*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n,Vt.position.set(o.x,o.y,o.z),Vt.rotation.set(0,0,0),Vt.scale.setScalar(o.s*(1-o.t/o.T)),Vt.updateMatrix(),s.m.setMatrixAt(r,Vt.matrix),s.m.setColorAt(r,nl.setHex(o.c)),r++;if(s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0),s=X.hail,r=0,t.hail>0)for(let o=0;o<t.hail*6;o++)s.add({x:e.x+(Math.random()-.5)*36,y:e.y+22+Math.random()*6,z:e.z+(Math.random()-.5)*36,vy:-26,vx:2,t:0,T:2.2,s:.09+Math.random()*.1,gy:t.groundY?t.groundY:0,b:0});s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p)o.vy-=20*n,o.y+=o.vy*n,o.x+=o.vx*n,o.y<o.gy+o.s&&o.b<2&&(o.y=o.gy+o.s,o.vy=Math.abs(o.vy)*.3,o.b++),Vt.position.set(o.x,o.y,o.z),Vt.scale.setScalar(o.s),Vt.updateMatrix(),s.m.setMatrixAt(r,Vt.matrix),r++;if(s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,X.rain.visible=t.rain>.02,X.rain.visible){let o=X.rain.geometry.attributes.position.array,a=X.rainD,l=t.wind||0;for(let c=0;c<a.length;c++){let u=a[c];u[1]-=n*38,u[1]<0&&(u[1]+=30,u[0]=(Math.random()-.5)*60,u[2]=(Math.random()-.5)*60);let h=e.x+u[0],f=e.y-4+u[1],d=e.z+u[2];o[c*6]=h,o[c*6+1]=f,o[c*6+2]=d,o[c*6+3]=h+l*.05,o[c*6+4]=f+.9,o[c*6+5]=d}X.rain.geometry.attributes.position.needsUpdate=!0,X.rain.material.opacity=.55*Math.min(1,t.rain)}if(X.snow.visible=t.snow>.02||t.ash>.02,X.snow.visible){let o=X.snow.geometry.attributes.position.array,a=X.snowD,l=t.ash>0?2.5:3.5,c=t.snow>0?6:1;for(let u=0;u<a.length;u++){let h=a[u];h[1]-=n*l,h[0]+=n*c*(.6+Math.sin(i+h[3])*.4),h[1]<0&&(h[1]+=25,h[0]=(Math.random()-.5)*50,h[2]=(Math.random()-.5)*50),h[0]>25&&(h[0]-=50),o[u*3]=e.x+h[0],o[u*3+1]=e.y-3+h[1],o[u*3+2]=e.z+h[2]}X.snow.geometry.attributes.position.needsUpdate=!0,X.snow.material.color.setHex(t.ash>0?5591125:16777215),X.snow.material.opacity=Math.min(1,Math.max(t.snow,t.ash)),X.snow.material.size=t.ash>0?.25:.38}X.bolts=X.bolts.filter(o=>(o.t+=n,o.g.visible=o.t<.06||o.t>.1&&o.t<.32,o.t>.35?(W.scene.remove(o.g),!1):!0)),X.waves=X.waves.filter(o=>{o.t+=n;let a=o.t/o.T;return o.m.scale.setScalar(.5+a*o.r),o.m.material.opacity=.8*(1-a),a>=1?(W.scene.remove(o.m),!1):!0}),X.meteors=X.meteors.filter(o=>{o.t+=n;let a=Math.min(1,o.t/o.T);return o.m.position.set(o.x+o.dx*(1-a),o.y+o.h*(1-a)+(o.kind==="bomb"?Math.sin(a*Math.PI)*18:0),o.z+o.dz*(1-a)),o.m.rotation.x+=n*3,o.m.rotation.y+=n*2,Math.random()<.5&&Zt(o.m.position.x,o.m.position.y,o.m.position.z,1,[10133672,13159634,7041664],{sp:.3,up:.3,s:.35*o.size,s1:1*o.size,life:1}),Math.random()<.7&&Zt(o.m.position.x,o.m.position.y,o.m.position.z,1,[16751164,16765286],{fire:1,sp:.6,up:.2,s:.4*o.size,s1:.1,life:.35}),a>=1?(W.scene.remove(o.m),!1):!0}),[X.waterMat,X.lavaMat,X.torMat].forEach(o=>{o.userData.sh&&(o.userData.sh.uniforms.uT.value=i)})}function sl(){X.puffs.clear(),X.fire.clear(),X.debris.clear(),X.sparks.clear(),X.hail.clear(),m_(),X.rings.forEach(n=>{n.used=!1,n.g.visible=!1}),X.lines.forEach(n=>{n.used=!1,n.m.visible=!1})}var pr=["kaiju","lightning","meteor","tornado","flood","quake","volcano","blizzard","alien"],it=Math.random,ps=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Jh(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/l));return Math.hypot(n-(t+o*c),e-(i+a*c))}function $t(n,e){let t=e.y<-22,i=t?null:pi(n,e.x,e.y,e.z);return{under:t,b:i,sturdy:!!(i&&i.sturdy),table:i?Wh(n,e.x,e.y,e.z):null,roof:t?null:Gh(n,e.x,e.y,e.z),out:!t&&!i,fire:n.fires.some(s=>(!s.b||!s.b.wrecked)&&Math.hypot(e.x-s.x,e.z-s.z)<s.r&&Math.abs(e.y-s.y)<2)}}function Hi(n){return n.rooms.map(e=>({kind:"pad",b:e.b,pad:n.pads.find(t=>t.room===e&&t.kind==="down"),x:e.hatch.x,y:e.hatch.y,z:e.hatch.z,label:e.name,under:!0}))}function dr(n,e){return n.buildings.filter(t=>!t.wrecked&&(!e||t.sturdy)).map(t=>({kind:"in",b:t,x:t.x,y:t.baseY+.2,z:t.z,label:t.name}))}function g_(n){let e=[];return n.buildings.forEach(t=>{if(t.elevator&&!t.wrecked){let i=t.pads.find(s=>s.kind==="elev");e.push({kind:"pad",b:t,pad:i,x:i.x,y:i.y,z:i.z,label:t.name+" roof",high:!0})}}),n.high.filter(t=>!t.b).forEach(t=>e.push({kind:"high",x:t.x,y:t.y,z:t.z,foot:t.foot,label:t.label})),e}function x_(n){return n.tables.filter(e=>!e.b||!e.b.wrecked&&!e.b.sturdy||e.b&&e.b.sturdy).filter(e=>!e.b||!e.b.wrecked).map(e=>({kind:"table",b:e.b,x:e.x,y:e.y,z:e.z,label:"under a table"}))}function Fd(n){if(n._open)return n._open;let e=[];for(let t=-60;t<=60;t+=6)for(let i=-60;i<=60;i+=6)Math.abs(n.terrain(t,i))>1.5||Ja(n,t,i)>9&&e.push({kind:"open",x:t,y:n.terrain(t,i),z:i,label:"open ground"});return n._open=e}var kd=(n,e)=>n.players.filter(t=>t.st==="ok"&&$t(e,t).out);function rl(n,e,t,i=.55){let s=kd(n,e);if(s.length&&it()<i){let o=s[it()*s.length|0];return{x:o.x+(it()-.5)*t,z:o.z+(it()-.5)*t}}let r=e.half-8;return{x:(it()-.5)*2*r*.8,z:(it()-.5)*2*r*.8}}function mi(n,e){return e.i=n.hid=(n.hid||0)+1,e.t=0,n.haz.push(e),e}var so=(n,e,t)=>bn(n,e,t,200),Pt={kaiju:{name:"KAIJU ATTACK",icon:"\u{1F996}",color:"#a855f7",mood:"dusk",dur:40,warn:"ROARGON is coming! Hide UNDERGROUND!",tip:"Basements, the subway, the mine and the bunker are the only safe spots. Buildings get stomped!",start(n,e){let t=it()*6.283,i=e.half+6;n.env.kj={x:Math.cos(t)*i,z:Math.sin(t)*i,yaw:0,step:0,beamT:5,roarT:1,roar:0,charge:0,beam:null,tx:0,tz:0,retarget:0},n.fx.push({k:"sfx",n:"roar"})},tick(n,e,t,i){let s=n.env.kj;if(s.retarget-=t,s.retarget<=0){s.retarget=6;let c=n.players.filter(f=>f.st==="ok"&&f.y>-22),u=c[it()*c.length|0],h=u?{x:u.x,z:u.z}:{x:(it()-.5)*80,z:(it()-.5)*80};s.tx=h.x,s.tz=h.z}let o=Math.atan2(s.tx-s.x,s.tz-s.z)-s.yaw;for(;o>Math.PI;)o-=6.283;for(;o<-Math.PI;)o+=6.283;s.yaw+=Math.max(-t*.7,Math.min(t*.7,o));let a=s.charge>0||s.beam||s.roar>0,l=a?0:3.4*i.k;if(Math.hypot(s.tx-s.x,s.tz-s.z)>6&&(s.x+=Math.sin(s.yaw)*l*t,s.z+=Math.cos(s.yaw)*l*t),s.walk=l>0,s.x=Math.max(-e.half-8,Math.min(e.half+8,s.x)),s.z=Math.max(-e.half-8,Math.min(e.half+8,s.z)),e.buildings.forEach(c=>{!c.wrecked&&Math.abs(c.x-s.x)<c.w/2+3.5&&Math.abs(c.z-s.z)<c.d/2+3.5&&i.wreck(c)}),n.players.forEach(c=>{c.st==="ok"&&c.y>-22&&Math.hypot(c.x-s.x,c.z-s.z)<5&&i.hit(c,30,"stomp",s)}),l>0&&(s.step+=t,s.step>2.4)){s.step=0;let c=s.side=-(s.side||1),u=s.x+Math.sin(s.yaw)*7+Math.cos(s.yaw)*c*2.5,h=s.z+Math.cos(s.yaw)*7-Math.sin(s.yaw)*c*2.5;mi(n,{k:"stomp",x:u,z:h,y:so(e,u,h),r:6,T:1.3})}if(s.roarT-=t,s.roarT<=0&&(s.roarT=11,s.roar=1.8,n.fx.push({k:"sfx",n:"roar"}),n.env.shake=Math.max(n.env.shake,.6)),s.roar>0&&(s.roar-=t),s.beamT-=t,s.beamT<=0&&!s.beam&&s.charge<=0){let c=n.players.filter(d=>d.st==="ok"&&d.y>-22&&Math.hypot(d.x-s.x,d.z-s.z)<45),u=c[it()*c.length|0],h=u?{x:u.x,z:u.z}:{x:s.x+Math.sin(s.yaw)*25,z:s.z+Math.cos(s.yaw)*25},f=Math.atan2(h.x-s.x,h.z-s.z);s.yaw=f,s.charge=.01,s.bx0=s.x+Math.sin(f)*6,s.bz0=s.z+Math.cos(f)*6,s.bx1=s.x+Math.sin(f)*46,s.bz1=s.z+Math.cos(f)*46,mi(n,{k:"beam",x:s.bx0,z:s.bz0,x1:s.bx1,z1:s.bz1,y:.1,r:1.9,T:1.9}),n.fx.push({k:"sfx",n:"beam"})}s.charge>0&&(s.charge+=t/1.9,s.charge>=1&&(s.charge=0,s.beam=1.2,s.beamT=7.5/i.k)),s.beam&&(s.beam-=t,n.players.forEach(c=>{c.st==="ok"&&c.y>-22&&Jh(c.x,c.z,s.bx0,s.bz0,s.bx1,s.bz1)<2&&i.hit(c,35,"beam",{x:s.x,z:s.z})}),e.buildings.forEach(c=>{!c.wrecked&&!c.sturdy&&Jh(c.x,c.z,s.bx0,s.bz0,s.bx1,s.bz1)<Math.max(c.w,c.d)/2+1&&i.wreck(c)}),s.beam<=0&&(s.beam=null))},impact(n,e,t,i){n.k==="stomp"&&(e.fx.push({k:"stomp",x:n.x,y:n.y,z:n.z}),e.env.shake=Math.max(e.env.shake,.8),e.players.forEach(s=>{s.st==="ok"&&s.y>-22&&ps(s,n)<n.r&&i.hit(s,28,"stomp",n)}),t.buildings.forEach(s=>{!s.wrecked&&Math.abs(s.x-n.x)<s.w/2+n.r*.6&&Math.abs(s.z-n.z)<s.d/2+n.r*.6&&i.wreck(s)}))},safe:(n,e)=>e.under?"Underground":!1,targets:n=>Hi(n)},lightning:{name:"LIGHTNING STORM",icon:"\u26A1",color:"#facc15",mood:"storm",dur:30,warn:"Lightning storm! Get INSIDE a building!",tip:"Any building keeps you safe. Stay off roofs and open ground!",start(n){n.env.rain=1,n.env.wind=4,n.cd=1.5},tick(n,e,t,i){if(n.cd-=t,n.cd<=0){n.cd=(.55+it()*.4)/i.k;let s=n.players.filter(o=>o.st==="ok"&&Gh(e,o.x,o.y,o.z)),r=s.length&&it()<.5?{x:s[0].x,z:s[0].z}:rl(n,e,4,.6);mi(n,{k:"strike",x:r.x,z:r.z,y:so(e,r.x,r.z),r:2.6,T:1.5})}},impact(n,e,t,i){e.fx.push({k:"bolt",x:n.x,y:n.y,z:n.z}),e.players.forEach(s=>{let r=$t(t,s);s.st==="ok"&&r.out&&ps(s,n)<n.r&&Math.abs(s.y-n.y)<3&&i.hit(s,30,"zap",n)})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":!1,targets:n=>dr(n).concat(Hi(n))},meteor:{name:"METEOR SHOWER",icon:"\u2604\uFE0F",color:"#fb923c",mood:"dusk",dur:30,warn:"Meteors incoming! Get into a STURDY building or underground!",tip:"Concrete buildings and basements are safest. Big meteors can smash wooden houses!",start(n){n.cd=1},tick(n,e,t,i){if(n.cd-=t,n.cd<=0){n.cd=(.7+it()*.5)/i.k;let s=it()<.22,r=rl(n,e,6,.5),o=mi(n,{k:"meteor",x:r.x,z:r.z,y:so(e,r.x,r.z),r:s?5.5:3.2,T:2.3,big:s});n.fx.push({k:"meteor",id:o.i,x:o.x,y:o.y,z:o.z,T:o.T,s:s?2:1})}},impact(n,e,t,i){e.fx.push({k:"boom",x:n.x,y:n.y,z:n.z,s:n.big?1.6:1,c:"meteor"}),e.env.shake=Math.max(e.env.shake,n.big?.6:.3);let s=null;n.big&&t.buildings.forEach(r=>{!r.wrecked&&!r.sturdy&&Math.abs(r.x-n.x)<r.w/2+1&&Math.abs(r.z-n.z)<r.d/2+1&&(i.wreck(r),s=r)}),e.players.forEach(r=>{if(r.st!=="ok"||ps(r,n)>n.r)return;let o=$t(t,r);o.under||o.sturdy||o.b&&!n.big||i.hit(r,n.big?45:30,"boom",n)})},safe:(n,e)=>e.under?"Underground":e.sturdy?"Sturdy building":e.b?"maybe":!1,targets:n=>dr(n,!0).concat(Hi(n))},tornado:{name:"TORNADO",icon:"\u{1F32A}\uFE0F",color:"#94a3b8",mood:"storm",dur:35,warn:"TORNADO WARNING! Get to a basement or sturdy building!",tip:"Basements are best. Tornadoes rip apart wooden houses!",start(n,e){n.env.rain=.6,n.env.wind=8;let t=n.wave>=3?2:1;n.env.tor=[];for(let i=0;i<t;i++){let s=it()*6.283;n.env.tor.push({x:Math.cos(s)*(e.half-5),z:Math.sin(s)*(e.half-5),vx:0,vz:0,wt:0})}},tick(n,e,t,i){n.env.tor.forEach(s=>{if(s.wt-=t,s.wt<=0){s.wt=3+it()*2;let r=rl(n,e,10,.6),o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;s.vx=o/l*4.6*i.k,s.vz=a/l*4.6*i.k}s.x+=s.vx*t,s.z+=s.vz*t,s.x=Math.max(-e.half,Math.min(e.half,s.x)),s.z=Math.max(-e.half,Math.min(e.half,s.z)),e.buildings.forEach(r=>{!r.wrecked&&!r.sturdy&&Math.abs(r.x-s.x)<r.w/2+2.5&&Math.abs(r.z-s.z)<r.d/2+2.5&&i.wreck(r)}),n.players.forEach(r=>{if(r.st!=="ok")return;let o=$t(e,r);if(o.under||o.sturdy)return;let a=s.x-r.x,l=s.z-r.z,c=Math.hypot(a,l);if(c<11){let u=(1-c/11)*9;r.kx+=(a/(c||1)*u+l/(c||1)*u*.8)*t*2,r.kz+=(l/(c||1)*u-a/(c||1)*u*.8)*t*2}c<4.2&&(i.hit(r,22,"fling",s),r.st==="ok"&&(r.vy=12,r.kx=-l*1.5,r.kz=a*1.5))})})},safe:(n,e)=>e.under?"Underground":e.sturdy?"Sturdy building":!1,targets:n=>Hi(n).concat(dr(n,!0))},flood:{name:"TSUNAMI",icon:"\u{1F30A}",color:"#38bdf8",mood:"storm",dur:36,warn:"TSUNAMI WARNING! Get to HIGH GROUND!",tip:"Ride an elevator to a rooftop, climb a tower or a hill. Basements will flood!",start(n,e){n.env.rain=.4;let t=e.sea!=null?e.sea:-.6;n.env.water=t,n.env.waterBase=t,n.env.waterTarget=3.7+Math.min(.6,n.wave*.1),n.env.waveZ=e.sea!=null?75:null,n.fx.push({k:"sfx",n:"whoosh"})},tick(n,e,t,i){let s=n.env,r=n.dzT;s.waveZ!=null&&(s.waveZ-=t*9,s.waveZ<-80&&(s.waveZ=null));let o=r<n.dzDur-8;s.water+=((o?s.waterTarget:s.waterBase)-s.water)*t*(o?.22:.35),n.players.forEach(a=>{if(a.st!=="ok")return;if($t(e,a).under){let u=a.room;s.water>(a.roomBase!=null?a.roomBase:0)+.3&&i.hit(a,10*t,"water");return}let c=s.water-a.y;c>1.4?i.hit(a,7*t,"water"):c>.5&&i.hit(a,3*t,"water"),c>.3&&(a.kx+=-1.5*t*(e.sea!=null?0:1),a.kz+=-2.5*t)}),s.waveZ!=null&&n.players.forEach(a=>{a.st==="ok"&&Math.abs(a.z-s.waveZ)<3&&a.y<s.waterTarget&&a.y>-22&&i.hit(a,15,"water",{x:a.x,z:a.z+5})})},safe:(n,e,t)=>!e.under&&n.y>(t.env.waterTarget||3.7)+.2?"High ground":!1,targets:n=>g_(n)},quake:{name:"EARTHQUAKE",icon:"\u{1FAE8}",color:"#d97706",mood:"quake",dur:30,warn:"EARTHQUAKE! Drop, Cover, Hold On under a table, or get to open ground!",tip:"Tables protect you inside. Outside, stay away from buildings.",start(n,e){n.cd=1.2,n.cd2=3,n.cd3=6,n.env.cracks=[],n.env.quake=1},tick(n,e,t,i){let s=n.env,r=n.dzT;if(s.shake=Math.max(s.shake,.35+.35*Math.max(0,Math.sin(r*.9))),n.cd-=t,n.cd<=0){n.cd=.35/i.k;let o=e.buildings.filter(c=>!c.wrecked),a=o[it()*o.length|0];if(a){let c,u,h=!a.sturdy&&it()<.45;if(h)c=a.ix0+it()*(a.ix1-a.ix0),u=a.iz0+it()*(a.iz1-a.iz0);else{let f=it()*4|0,d=it()-.5;c=f<2?a.x+d*a.w:a.x+(f===2?1:-1)*(a.w/2+1.2+it()*1.6),u=f<2?a.z+(f===0?1:-1)*(a.d/2+1.2+it()*1.6):a.z+d*a.d}mi(n,{k:"junk",x:c,z:u,y:h?a.baseY+.2:so(e,c,u),r:1.7,T:1.2,inside:h,bh:a.h})}let l=n.players.filter(c=>c.st==="ok"&&c.y>-22&&Ja(e,c.x,c.z)<4);if(l.length&&it()<.35){let c=l[it()*l.length|0];mi(n,{k:"junk",x:c.x+(it()-.5)*2,z:c.z+(it()-.5)*2,y:c.y,r:1.7,T:1.25,inside:!!pi(e,c.x,c.y,c.z)})}}if(n.cd2-=t,n.cd2<=0){n.cd2=4.5;let o=Fd(e),a=o[it()*o.length|0]||{x:0,z:0},l=it()*3.14,c=9;mi(n,{k:"crack",x:a.x-Math.cos(l)*c,z:a.z-Math.sin(l)*c,x1:a.x+Math.cos(l)*c,z1:a.z+Math.sin(l)*c,y:e.terrain(a.x,a.z),r:1.1,T:1.8})}if(n.cd3-=t,n.cd3<=0){n.cd3=9;let o=e.buildings.filter(l=>!l.wrecked&&!l.sturdy&&!l.elevator),a=o[it()*o.length|0];a&&mi(n,{k:"collapse",x:a.x,z:a.z,y:a.baseY,r:Math.max(a.w,a.d)/2+.5,T:3,b:a.id})}},impact(n,e,t,i){if(n.k==="junk")e.fx.push({k:"junk",x:n.x,y:n.y,z:n.z}),e.players.forEach(s=>{if(s.st==="ok"&&ps(s,n)<n.r&&Math.abs(s.y-n.y)<2.5){let r=$t(t,s);if(r.table||r.under)return;i.hit(s,22,"bonk",n)}});else if(n.k==="crack")e.env.cracks.push([n.x,n.z,n.x1,n.z1,n.y]),e.fx.push({k:"crack",x:n.x,z:n.z,x1:n.x1,z1:n.z1,y:n.y}),e.players.forEach(s=>{s.st==="ok"&&Math.abs(s.y-n.y)<1.5&&Jh(s.x,s.z,n.x,n.z,n.x1,n.z1)<n.r&&(i.hit(s,18,"bonk",n),s.vy=7)});else if(n.k==="collapse"){let s=t.buildings.find(r=>r.id===n.b);s&&!s.wrecked&&(e.players.forEach(r=>{r.st==="ok"&&pi(t,r.x,r.y,r.z)===s&&!Wh(t,r.x,r.y,r.z)&&i.hit(r,30,"bonk",n)}),i.wreck(s))}},safe:(n,e,t,i)=>e.under?"Underground":e.table?"Under a table":e.out&&!e.roof&&Ja(i,n.x,n.z)>7?"Open ground":!1,targets:n=>x_(n).concat(Fd(n)).concat(Hi(n))},volcano:{name:"VOLCANO",icon:"\u{1F30B}",color:"#ef4444",mood:"volcano",dur:38,warn:"VOLCANO ERUPTING! Get indoors, away from the lava!",tip:"Roofs block lava bombs. Lava flows on the ground, so stay far from the volcano or up high.",start(n,e){let t=e.volcano;n.env.lava={x:t.x,z:t.z,r:0,max:Math.hypot(t.x,t.z)-14,y:.35},n.env.ash=.8,n.env.volc=0,n.cd=2.5,n.fx.push({k:"sfx",n:"boom"}),n.env.shake=.8},tick(n,e,t,i){let s=n.env.lava;if(n.env.volc=Math.min(1,n.env.volc+t/4),n.env.volc>=1&&(s.r=Math.min(s.max,s.r+t*1.7*i.k)),n.cd-=t,n.cd<=0){n.cd=(.5+it()*.35)/i.k;let r=rl(n,e,6,.5),o=mi(n,{k:"bomb",x:r.x,z:r.z,y:so(e,r.x,r.z),r:3,T:2.1});n.fx.push({k:"bomb",id:o.i,x:o.x,y:o.y,z:o.z,T:o.T,s:1,sx:e.volcano.x,sz:e.volcano.z})}n.players.forEach(r=>{if(r.st!=="ok")return;Math.hypot(r.x-s.x,r.z-s.z)<s.r&&(r.y<s.y+.7||r.y<-22)&&i.hit(r,22*t,"burn")})},impact(n,e,t,i){e.fx.push({k:"boom",x:n.x,y:n.y,z:n.z,s:.9,c:"lava"}),e.players.forEach(s=>{if(s.st!=="ok"||ps(s,n)>n.r)return;let r=$t(t,s);!r.out||r.roof&&!1||Math.abs(s.y-n.y)<3&&i.hit(s,26,"burn",n)})},safe:(n,e,t)=>{let i=t.env.lava;return i&&Math.hypot(n.x-i.x,n.z-i.z)<i.r+3&&n.y<2?!1:e.under?"Underground":e.b?"Indoors":!1},targets:(n,e)=>{let t=n.volcano;return dr(n).concat(Hi(n)).filter(i=>Math.hypot(i.x-t.x,i.z-t.z)>Math.hypot(t.x,t.z)*.8)}},blizzard:{name:"BLIZZARD & HAIL",icon:"\u{1F328}\uFE0F",color:"#7dd3fc",mood:"snow",dur:32,warn:"BLIZZARD! Get inside or warm up by a fire!",tip:"The cold and hail hurt outside. Fireplaces and campfires keep you warm. Umbrellas block hail.",start(n){n.env.snow=1,n.env.hail=.6,n.env.wind=7,n.env.cold=1,n.cd=1.2},tick(n,e,t,i){n.cd-=t;let s=n.cd<=0;s&&(n.cd=1.2/i.k),n.players.forEach(r=>{if(r.st!=="ok")return;let o=$t(e,r);if(o.fire){r.hp=Math.min(r.max,r.hp+3*t);return}o.out&&(i.hit(r,2.6*t*i.k,"cold"),r.kx+=2.2*t,s&&!(r.upg&&r.upg.umbrella)&&i.hit(r,6,"hail"))})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":e.fire?"By the fire":!1,targets:n=>dr(n).concat(Hi(n))},alien:{name:"ALIEN INVASION",icon:"\u{1F6F8}",color:"#4ade80",mood:"alien",dur:35,warn:"UFOs are abducting people! Hide INDOORS!",tip:"UFO spotlights can only grab you outside. Red light = run!",start(n,e){let t=e.id==="area51"?4:3;n.env.ufos=[];for(let i=0;i<t;i++){let s=i/t*6.283+it();n.env.ufos.push({x:Math.cos(s)*60,z:Math.sin(s)*60,tx:0,tz:0,lock:0,rt:0,grab:null})}n.fx.push({k:"sfx",n:"ufo"})},tick(n,e,t,i){n.env.ufos.forEach((s,r)=>{if(s.rt-=t,s.rt<=0){s.rt=2.5;let h=kd(n,e).filter(d=>!d.grabbed),f=h.length?h.reduce((d,g)=>ps(d,s)<ps(g,s)?d:g):null;f&&it()<.85?(s.tx=f.x,s.tz=f.z,s.chase=f.id):(s.tx=(it()-.5)*100,s.tz=(it()-.5)*100,s.chase=null)}if(s.chase!=null){let h=n.players.find(f=>f.id===s.chase);h&&h.st==="ok"&&$t(e,h).out&&(s.tx=h.x,s.tz=h.z)}if(s.grab!=null){let h=n.players.find(f=>f.id===s.grab);if(s.gT-=t,h&&(h.x+=(s.x-h.x)*t*2,h.z+=(s.z-h.z)*t*2,h.y=Math.min(13,h.y+t*4.5)),s.gT<=0||!h){if(h){let f=e.half-10;h.st="ok",h.grabbed=!1,h.x=(it()-.5)*2*f,h.z=(it()-.5)*2*f,h.y=16,h.vy=0,i.hit(h,15,"drop"),i.tp(h)}s.grab=null,s.rt=0}return}let o=s.tx-s.x,a=s.tz-s.z,l=Math.hypot(o,a),c=6.2*i.k;l>.3&&(s.x+=o/l*Math.min(l,c*t),s.z+=a/l*Math.min(l,c*t));let u=n.players.filter(h=>h.st==="ok"&&Math.hypot(h.x-s.x,h.z-s.z)<3.6&&$t(e,h).out&&h.sh<=0);if(u.length){if(s.lock+=t,s.lock>1.5){let h=u[0];if(i.shielded(h)){s.lock=0;return}s.lock=0,s.grab=h.id,s.gT=2.6,h.st="float",h.grabbed=!0,h.waveKO=!0,n.fx.push({k:"sfx",n:"zap"}),i.event(h,"beamed")}}else s.lock=Math.max(0,s.lock-t*2)})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":!1,targets:n=>dr(n).concat(Hi(n))}};function ol(n,e){let t=[];return pr.forEach(i=>{i!==e&&(t.push(i),i==="alien"&&n.id==="area51"&&t.push(i),i==="flood"&&n.id==="beach"&&t.push(i),i==="volcano"&&n.id==="pine"&&t.push(i),i==="blizzard"&&n.id==="pine"&&t.push(i),i==="kaiju"&&n.id==="city"&&t.push(i))}),t[it()*t.length|0]}function gi(n,e){return n==="flood"&&e&&e.sea==null?"FLASH FLOOD":Pt[n].name}var st={kaiju:null,ufos:[],tors:[],volc:null,cracks:[],torDebris:null};function al(){st.kaiju&&(st.kaiju.root.visible=!1),st.ufos.forEach(n=>n.visible=!1),st.tors.forEach(n=>n.visible=!1),st.volc&&(st.volc.visible=!1),st.cracks.forEach(n=>W.scene.remove(n)),st.cracks=[],X.water.visible=!1,X.foam.visible=!1,X.lava.visible=!1}function Bd(n,e,t){let i=n.env,s=n.phase==="active"||n.phase==="warn";if(i.kj&&n.dz==="kaiju"&&n.phase==="active"){st.kaiju||(st.kaiju=bd(),W.scene.add(st.kaiju.root));let a=st.kaiju;a.root.visible=!0,a.root.position.x+=(i.kj.x-a.root.position.x)*Math.min(1,t*8),a.root.position.z+=(i.kj.z-a.root.position.z)*Math.min(1,t*8),a.root.position.y=e.terrain(a.root.position.x,a.root.position.z),a.root.rotation.y=i.kj.yaw,wd(a,t,i.kj.walk,i.kj.roar>0,i.kj.charge||(i.kj.beam?1:0)),a.beam.visible=!!i.kj.beam,i.kj.beam&&(a.beamLen(42),a.beam.children[0].scale.x=a.beam.children[0].scale.z=.8+Math.random()*.4,Math.random()<.6&&jn(i.kj.bx1*.3+i.kj.bx0*.7+(Math.random()-.5)*20,1,i.kj.bz1*.3+i.kj.bz0*.7+(Math.random()-.5)*20,3,8255999)),a.head.rotation.x=i.kj.beam||i.kj.charge>0?.32:0,i.kj.charge>0&&Math.random()<.5&&jn(a.root.position.x,16,a.root.position.z,2,6288383,{sp:3,g:-3})}else st.kaiju&&(st.kaiju.root.visible=!1);let r=n.dz==="alien"&&n.phase==="active"&&i.ufos?i.ufos:[];for(;st.ufos.length<r.length;){let a=Sd();W.scene.add(a),st.ufos.push(a)}st.ufos.forEach((a,l)=>{let c=r[l];if(a.visible=!!c,!c)return;a.position.x+=(c.x-a.position.x)*Math.min(1,t*6),a.position.z+=(c.z-a.position.z)*Math.min(1,t*6),a.position.y=15+Math.sin(W.t*1.5+l)*.6+e.terrain(a.position.x,a.position.z)*.3,a.userData.lights.rotation.y+=t*2,a.rotation.z=Math.sin(W.t+l)*.06;let u=e.terrain(a.position.x,a.position.z),h=a.userData.beam;h.scale.y=a.position.y-u-.5,h.material.opacity=c.grab!=null?.45:.2,il("ufo"+l,a.position.x,u,a.position.z,3.6,c.lock>0||c.grab!=null?16723285:4906624,Math.min(1,c.lock/1.5)),c.grab!=null&&Math.random()<.5&&jn(a.position.x,u+Math.random()*10,a.position.z,2,10354608,{sp:2,g:-6})});let o=n.dz==="tornado"&&n.phase==="active"&&i.tor?i.tor:[];for(;st.tors.length<o.length;){let a=new $e,l=new Le(X.torGeo,X.torMat);a.add(l);let c=new Le(X.torGeo,X.torMat);c.scale.set(.7,.95,.7),a.add(c),W.scene.add(a),st.tors.push(a)}if(st.tors.forEach((a,l)=>{let c=o[l];a.visible=!!c,c&&(a.position.x+=(c.x-a.position.x)*Math.min(1,t*6),a.position.z+=(c.z-a.position.z)*Math.min(1,t*6),a.position.y=e.terrain(a.position.x,a.position.z)-.5,a.children[0].rotation.y+=t*3,a.children[1].rotation.y-=t*4.5,a.rotation.z=Math.sin(W.t*.7+l)*.08,Math.random()<.9&&Zt(a.position.x+(Math.random()-.5)*6,a.position.y+.5,a.position.z+(Math.random()-.5)*6,2,[10718061,9080729,12759680],{sp:6,up:3,s:.8,s1:2.2,life:1.4}),Math.random()<.25&&ds(a.position.x,a.position.y+2+Math.random()*8,a.position.z,1,[9132587,13935475,7041664,4906624],{sp:14,up:6,s:.5,floor:0}))}),i.water!=null&&n.dz==="flood"&&(n.phase==="active"||n.phase==="calm")&&i.water>(i.waterBase||-1)+.02?(X.water.visible=!0,X.water.position.y+=(i.water-X.water.position.y)*Math.min(1,t*4),i.waveZ!=null?(X.foam.visible=!0,X.foam.position.set(0,i.waterTarget+.4,i.waveZ),X.foam.scale.y=1,Math.random()<.8&&Zt((Math.random()-.5)*140,i.waterTarget,i.waveZ,2,16777215,{sp:2,up:5,s:1,s1:2.5})):X.foam.visible=!1):e.sea!=null?(X.water.visible=!0,X.water.position.y=e.sea,X.foam.visible=!1):(X.water.visible=!1,X.foam.visible=!1),i.lava&&n.dz==="volcano"&&n.phase==="active"){if(!e.volcano.real){if(!st.volc||st.volc.userData.map!==e.id){st.volc&&W.scene.remove(st.volc),st.volc=new $e,st.volc.userData.map=e.id;let l=new Le(new an(5,22,18,40,6),z(7031354,{r:.9}));l.position.y=9,l.castShadow=!0,st.volc.add(l);let c=new Le(new an(4.5,4.5,.4,32),z(16734720,{e:16727040,ei:2.5}));c.position.y=18.1,st.volc.add(c),[0,1,2,3].forEach(u=>{let h=new Le(new an(.8,1.6,12,12),z(16738816,{e:16729088,ei:1.8}));h.position.set(Math.cos(u*1.6)*7,8,Math.sin(u*1.6)*7),h.rotation.set(Math.sin(u*1.6)*.5,0,-Math.cos(u*1.6)*.5),st.volc.add(h)}),W.scene.add(st.volc)}st.volc.visible=!0,st.volc.position.set(e.volcano.x,e.terrain(e.volcano.x,e.volcano.z)-18*(1-(i.volc||0)),e.volcano.z)}let a=e.volcano.real?e.volcano.y+1:18+e.terrain(e.volcano.x,e.volcano.z);Math.random()<.8&&Zt(e.volcano.x+(Math.random()-.5)*4,a,e.volcano.z+(Math.random()-.5)*4,2,[4934485,7039861,3355448],{sp:2,up:9,s:2,s1:6,life:3.5,drag:.4}),Math.random()<.6&&jn(e.volcano.x,a,e.volcano.z,3,16747050,{sp:10,up:12,s:.35,life:1.6,g:14}),Math.random()<.5&&Zt(e.volcano.x,a,e.volcano.z,2,[16738816,16758531],{fire:1,sp:2,up:6,s:1.2,s1:.3,life:.8}),X.lava.visible=i.lava.r>.5,X.lava.position.set(i.lava.x,i.lava.y,i.lava.z),X.lava.scale.setScalar(Math.max(.01,i.lava.r))}else X.lava.visible=!1,st.volc&&(st.volc.visible=!1);for(let a of n.haz){let l=Math.min(1,a.t/a.T);if(a.k==="beam"||a.k==="crack"?Ld("h"+a.i,a.x,a.z,a.x1,a.z1,(a.y||0)+.05,a.r*2,a.k==="beam"?16723285:16746496):a.k==="collapse"?il("h"+a.i,a.x,a.y+.3,a.z,a.r,16746496,l):il("h"+a.i,a.x,a.y,a.z,a.r,a.k==="strike"?16769357:a.k==="junk"?16746496:16723285,l),a.k==="collapse"){let c=e.buildings.find(u=>u.id===a.b);c&&!c.wrecked&&Math.random()<.3&&Zt(c.x+(Math.random()-.5)*c.w,c.baseY+c.h,c.z+(Math.random()-.5)*c.d,1,13219740,{s:.4,s1:1.2,up:-1})}a.k==="junk"&&l>.5&&!a.vis&&(a.vis=1,ds(a.x,(a.y||0)+4,a.z,4,[13935475,10265519,15681391],{sp:1,up:-2,s:.5,floor:a.y||0}))}if(i.cracks&&n.dz==="quake"&&n.phase==="active")for(;st.cracks.length<i.cracks.length;){let a=i.cracks[st.cracks.length],l=new Le(L.box(1,1,1),z(2759956,{r:1})),c=Math.hypot(a[2]-a[0],a[3]-a[1]);l.scale.set(1,.1,c),l.position.set((a[0]+a[2])/2,a[4]+.03,(a[1]+a[3])/2),l.rotation.y=Math.atan2(a[2]-a[0],a[3]-a[1]),W.scene.add(l),st.cracks.push(l)}else st.cracks.length&&n.phase!=="active"&&(st.cracks.forEach(a=>W.scene.remove(a)),st.cracks=[])}function Hd(n,e,t){let i=n.k;if(i==="bolt")zd(n.x,n.y,n.z),t.thunder();else if(i==="boom"){let s=n.c==="lava";Zt(n.x,n.y,n.z,10,s?[4868690,7039861]:[10265519,13751771,7041664],{sp:5*n.s,up:3,s:.7*n.s,s1:2*n.s,life:1.4}),Zt(n.x,n.y+.5,n.z,8,[16742938,16763196,16731392],{fire:1,sp:6*n.s,up:4,s:.8*n.s,s1:.2,life:.5}),ds(n.x,n.y,n.z,s?4:8,s?[3811874,16734720]:[4864819,7035471,10724259],{sp:8,up:8,s:.45*n.s,floor:n.y}),jn(n.x,n.y+.5,n.z,20,s?16742912:16757575,{sp:10}),$h(n.x,n.y,n.z,6*n.s,16757575),W.flash.position.set(n.x,n.y+4,n.z),W.flash.color.setHex(16752704),W.flash.intensity=18,t.boom(Math.min(1,.6*n.s))}else if(i==="meteor")jh(n.id,n.x,n.y,n.z,n.T,"meteor",n.s);else if(i==="bomb"){jh(n.id,n.x,n.y,n.z,n.T,"bomb",n.s);let s=X.meteors[X.meteors.length-1];s.dx=n.sx-n.x,s.dz=n.sz-n.z,s.h=25}else if(i==="stomp")Zt(n.x,n.y,n.z,18,[12755834,14074784,10265519],{sp:9,up:2,s:1,s1:3,life:1.5}),$h(n.x,n.y,n.z,10,16777215,.8),ds(n.x,n.y,n.z,6,[7041664,9132587],{sp:9,up:6,floor:n.y}),t.boom(.9);else if(i==="junk")ds(n.x,n.y+.5,n.z,6,[13935475,10265519,15681391,16765286],{sp:3,up:3,s:.45,floor:n.y}),Zt(n.x,n.y,n.z,6,14074784,{s:.5,s1:1.4}),t.boom(.35);else if(i==="crack")Zt((n.x+n.x1)/2,n.y,(n.z+n.z1)/2,14,12755834,{spread:14,s:.7,s1:2,sp:2}),t.boom(.5);else if(i==="wreck"){let s=e.buildings.find(r=>r.id===n.b);s&&(Zt(s.x,s.baseY+1,s.z,22,[14074784,12563877,15064528],{spread:Math.max(s.w,s.d),sp:5,up:3,s:1.2,s1:3.2,life:1.8}),ds(s.x,s.baseY+s.h*.6,s.z,14,[s.wall,s.roof,s.trim,13620957],{sp:8,up:9,s:.7,floor:s.baseY}),t.boom(.8))}else i==="splash"?Zt(n.x,n.y,n.z,8,16777215,{sp:3,up:5,s:.4,s1:1}):i==="hit"?jn(n.x,n.y+1.2,n.z,10,16769357,{sp:5}):i==="revive"?jn(n.x,n.y+1,n.z,24,4906624,{sp:4,g:-2}):i==="coin"?jn(n.x,n.y+.5,n.z,8,16765503,{sp:3,g:4}):i==="sfx"&&t[n.n]&&t[n.n]()}var C={phase:"lobby",t:0,wave:0,waves:5,map:null,dz:null,next:null,picked:!1,players:[],haz:[],env:{},wrecked:[],coins:[],star:null,fx:[],msgs:[],hid:0,dzT:0,dzDur:30,last:null,round:0},Vd=["Rex","Luna","Max","Pip","Zoe","Bolt"],cn=Math.random;function Kh(){return{water:null,shake:0,rain:0,snow:0,ash:0,hail:0,wind:0,cold:0}}function gr(n){return 100+25*((n&&n.hp)|0)}function oo(n){return Object.assign({id:0,pid:null,name:"Player",cpu:!1,look:{},x:0,y:.3,z:0,yaw:0,vy:0,vx:0,vz:0,kx:0,kz:0,hp:100,max:100,st:"ok",koT:0,inv:0,an:"idle",sp:0,sh:0,shUses:0,fuel:2.5,upg:{},waveKO:!1,rev:0,tpN:0,grounded:!0,coinsWave:0,revives:0,kos:0,ai:{}},n)}function ll(n,e,t,i,s){if(n.st==="ko"||n.st==="float"){n.an=n.st==="ko"?"ko":"float";return}let r=n.upg||{},o=s.water!=null?s.water:i.sea!=null?i.sea:-99,a=o>n.y+.9&&n.y>-22,l=6.2*(1+.15*(r.speed|0))*(a?.55:1),c=e.x*l,u=e.z*l,h=Math.min(1,t*(n.grounded||a?12:4));if(n.vx+=(c-n.vx)*h,n.vz+=(u-n.vz)*h,Math.hypot(e.x,e.z)>.1){let p=Math.atan2(e.x,e.z)-n.yaw;for(;p>Math.PI;)p-=6.283;for(;p<-Math.PI;)p+=6.283;n.yaw+=p*Math.min(1,t*14)}e.jump&&(n.grounded||a)&&(n.vy=a?6:8.6,n.grounded=!1,n.jumped=!0),e.jet&&r.jetpack&&n.fuel>0?(n.vy=Math.min(n.vy+46*t,7.5),n.fuel-=t,n.jetOn=!0):n.jetOn=!1,n.grounded&&!e.jet&&(n.fuel=Math.min(2.5,n.fuel+t*.6)),n.vy-=24*t,a&&(n.vy+=(o-.95-n.y)*30*t,n.vy*=Math.exp(-3*t)),n.x+=(n.vx+n.kx)*t,n.z+=(n.vz+n.kz)*t,n.y+=n.vy*t;let d=Math.exp(-2.5*t);n.kx*=d,n.kz*=d,Ad(i,n,.4,1.6);let g=bn(i,n.x,n.z,n.y);if(n.y<=g?(n.vy<-26&&!n.cpu&&(n.hardLand=!0),n.y=g,n.vy=0,n.grounded=!0):n.grounded=n.y-g<.05,n.y<-50||n.y<-60&&n.y>-22){let m=i.spawns[0];n.x=m[0],n.z=m[1],n.y=2,n.vy=0}n.sp=Math.hypot(n.vx,n.vz)/6.2;let x=$t(i,n);n.an=a?"swim":n.grounded?n.sp>.15?"run":x.table&&C.dz==="quake"&&C.phase!=="calm"?"cover":(C.phase==="warn"&&!n.cpu&&x.out,"idle"):"jump",n.an==="idle"&&C.phase==="active"&&x.out&&n.cpu&&cn()<.002&&(n.an="panic")}function Qh(n,e){let t=Ka(e,n.x,n.y,n.z);return t?(n.x=t.to.x,n.y=t.to.y+.05,n.z=t.to.z,n.vy=0,n.vx=n.vz=0,t.kind==="down"&&(n.roomBase=t.b.baseY),t):null}var jt={W:null,scene:null,hooks:{}};function eu(n,e,t,i,s){jt.W=n,jt.scene=e,Object.assign(C,{phase:"calm",t:14,wave:0,waves:s||5,map:t,dz:null,next:null,picked:!1,haz:[],env:Kh(),wrecked:[],fx:[],msgs:[],hid:0,last:null,round:(C.round||0)+1,coinBank:{}}),n.buildings.forEach(o=>us(n,o)),C.players=[],i.forEach((o,a)=>C.players.push(oo({id:a,pid:o.pid,name:o.name,look:o.look,upg:o.upg||{},cpu:!1})));let r=0;for(;C.players.length<4;){let o=C.players.length;C.players.push(oo({id:o,name:Vd[(r+C.round)%Vd.length],cpu:!0,look:v_(r),upg:{hp:1}})),r++}C.players.forEach((o,a)=>{let l=n.spawns[a%n.spawns.length];o.x=l[0],o.z=l[1],o.y=bn(n,o.x,o.z,50),o.max=gr(o.upg),o.hp=o.max,o.yaw=Math.atan2(-o.x,-o.z)}),C.next=ol(n,null),y_(n),ms("*","Round start! Explore and grab coins before the first disaster.")}function v_(n){let e=[15680580,2278750,16096779,11032055,1357990,15485081],t=["cowboy","beanie","party","chef","dino","cap"],i=[14723449,16173472,9067067,12155471,16767416];return{shirt:e[n%6],pants:[1981066,4144966,417606,8138002][n%4],skin:i[n%5],hair:[1118481,7028254,13934615,3810582][n%4],hat:t[n%6],hatColor:[3900150,16436245,15680580,2278750][n%4]}}function y_(n){let e=n.coinSpots;C.coins=e.map((r,o)=>({i:o,x:r.x,z:r.z,y:r.y!=null?r.y+.9:bn(n,r.x,r.z,50)+.9,on:!1}));let t=Math.min(C.coins.length,26);C.coins.map((r,o)=>o).sort(()=>cn()-.5).slice(0,t).forEach(r=>C.coins[r].on=!0),C.coins.forEach(r=>{(n.coinSpots[r.i].under||n.coinSpots[r.i].y!=null)&&(r.on=!0)});let s=e[cn()*e.length|0];C.star={x:s.x,z:s.z,y:(s.y!=null?s.y:bn(n,s.x,s.z,50))+1.2,on:!0}}function ms(n,e,t){C.msgs.push({pid:n,text:e,coins:t||0,id:C.msgN=(C.msgN||0)+1})}function mr(n,e,t){n.cpu||(n.coinsWave+=e,ms(n.pid,t,e))}function Gd(n){return C.phase!=="calm"||!Pt[n]?!1:(C.next=n,C.picked=!0,!0)}var ro={k:1,hit(n,e,t,i){if(n.st!=="ok"||n.inv>0)return;if(n.sh>0){e>=5&&C.fx.push({k:"sfx",n:"shield"});return}let s=[0,.2,.35,.45][n.upg.armor|0]||0,r=e*(1-s);if(n.upg.umbrella&&(t==="hail"||t==="boom"||t==="bonk")&&$t(jt.W,n).out&&(r*=t==="hail"?0:.5),n.hp-=r,e>=5){if(C.fx.push({k:"hit",x:n.x,y:n.y,z:n.z,pid:n.pid,id:n.id}),i&&i.x!=null){let o=n.x-i.x,a=n.z-i.z,l=Math.hypot(o,a)||1;n.kx+=o/l*7,n.kz+=a/l*7,n.vy=Math.max(n.vy,5)}n.hurtT=.4}n.hp<=0&&__(n,t)},wreck(n){ur(jt.W,jt.scene,n)&&(C.wrecked.push(n.id),C.fx.push({k:"wreck",b:n.id}),C.players.forEach(e=>{e.st==="ok"&&e.y>-22&&Math.abs(e.x-n.x)<n.w/2&&Math.abs(e.z-n.z)<n.d/2&&e.y<n.baseY+n.h+1&&ro.hit(e,25,"bonk",{x:n.x,z:n.z})}))},tp(n){n.tpN++},shielded:n=>n.sh>0,event(n,e){e==="beamed"&&(ms(n.pid,"\u{1F6F8} BEAMED UP! Wheee!"),n.beamed=!0)}};function __(n,e){n.hp=0,n.st="ko",n.koT=7,n.waveKO=!0,n.rev=0,n.kos++,n.vx=n.vz=0,C.fx.push({k:"sfx",n:"ko",pid:n.pid}),ms(n.pid,n.cpu?null:"\u{1F4AB} Knocked out! A friend can help you up, or wait a moment."),n.cpu||ms("*",null)}function M_(n){let e=C.phase==="active"||C.phase==="warn"?Pt[C.dz]:null,t=null;if(e){let i=e.targets(jt.W,C).filter(s=>!(s.b&&s.b.wrecked));i.length&&(t=i.reduce((s,r)=>Math.hypot(s.x-n.x,s.z-n.z)<Math.hypot(r.x-n.x,r.z-n.z)?s:r))}if(t&&t.under&&t.pad)n.x=t.pad.to.x+(cn()-.5),n.y=t.pad.to.y,n.z=t.pad.to.z+(cn()-.5),n.roomBase=t.b.baseY;else if(t&&t.kind==="pad"&&t.pad)n.x=t.pad.to.x,n.y=t.pad.to.y,n.z=t.pad.to.z;else if(t)n.x=t.x+(cn()-.5),n.y=t.y+.3,n.z=t.z+(cn()-.5);else{let i=jt.W.spawns[n.id%4];n.x=i[0],n.z=i[1],n.y=bn(jt.W,n.x,n.z,50)}n.st="ok",n.hp=Math.round(n.max*.6),n.inv=3,n.vy=0,n.kx=n.kz=0,n.tpN++,ms(n.pid,n.cpu?null:"\u{1F681} A rescue drone dropped you somewhere safer!")}function Wd(n,e,t){if(C.env.shake=Math.max(0,(C.env.shake||0)-n*1.2),!(C.phase==="lobby"||C.phase==="results")){if(C.t-=n,ro.k=1+.1*Math.max(0,C.wave-1),C.phase==="calm"&&C.t<=0?(C.wave++,C.dz=C.next||ol(e,C.last),C.phase="warn",C.t=7,C.haz=[],C.players.forEach(i=>{i.waveKO=!1,i.coinsWave=0,i.shUses=0,i.ai.tgt=null,i.ai.react=.6+cn()*2.2}),C.fx.push({k:"sfx",n:"siren"})):C.phase==="warn"&&C.t<=0?(C.phase="active",C.dzDur=Pt[C.dz].dur,C.t=C.dzDur,C.dzT=0,C.env=Object.assign(Kh(),{shake:C.env.shake}),Pt[C.dz].start(C,e,ro)):C.phase==="active"?(C.dzT+=n,Pt[C.dz].tick(C,e,n,ro),C.t<=0&&b_(e)):C.phase==="calm"&&C.env.water!=null&&(C.env.water+=((C.env.waterBase||-1)-C.env.water)*n*.6),C.phase==="active"){for(let i of C.haz)i.t+=n,i.t>=i.T&&!i.done&&(i.done=!0,Pt[C.dz].impact&&Pt[C.dz].impact(i,C,e,ro));C.haz=C.haz.filter(i=>!i.done)}else C.haz=[];for(let i of C.players){if(i.inv>0&&(i.inv-=n),i.sh>0&&(i.sh-=n),i.hurtT>0&&(i.hurtT-=n),i.st==="ko"){i.koT-=n;let s=C.players.find(r=>r!==i&&r.st==="ok"&&Math.hypot(r.x-i.x,r.z-i.z)<2.2&&Math.abs(r.y-i.y)<1.5);s?(i.rev+=n,i.rev>1.6&&(i.st="ok",i.hp=Math.round(i.max*.5),i.inv=2.5,C.fx.push({k:"revive",x:i.x,y:i.y,z:i.z}),C.fx.push({k:"sfx",n:"win"}),s.revives++,mr(s,15,"\u{1F91D} You helped "+i.name+" up! +15"),s.cpu||(s.helped=(s.helped||0)+1),ms(i.pid,i.cpu?null:"\u{1F91D} "+s.name+" helped you up!"))):i.rev=Math.max(0,i.rev-n),i.koT<=0&&M_(i);continue}if(i.st==="ok"){let s=i.upg.regen|0;s&&i.hp<i.max&&(i.hp=Math.min(i.max,i.hp+s*n)),C.phase==="calm"&&(i.hp=Math.min(i.max,i.hp+6*n))}if(i.cpu){let s=w_(i,n,e);ll(i,s,n,e,C.env),s.pad&&Qh(i,e)}else t&&t[i.id];if(i.st==="ok"){let s=i.upg.magnet?7:1.3;for(let r of C.coins){if(!r.on)continue;let o=Math.hypot(r.x-i.x,r.z-i.z);Math.abs(r.y-.9-i.y)<2.2&&o<s&&(o<1.3?(r.on=!1,C.fx.push({k:"coin",x:r.x,y:r.y,z:r.z,pid:i.pid}),i.cpu||(mr(i,5,null),C.fx.push({k:"sfx",n:"coin",pid:i.pid}))):i.upg.magnet&&(r.x+=(i.x-r.x)*n*4,r.z+=(i.z-r.z)*n*4))}C.star&&C.star.on&&Math.hypot(C.star.x-i.x,C.star.z-i.z)<1.5&&Math.abs(C.star.y-1.2-i.y)<2.2&&(C.star.on=!1,C.fx.push({k:"coin",x:C.star.x,y:C.star.y,z:C.star.z}),i.cpu||(mr(i,25,"\u2B50 Lucky star! +25"),C.fx.push({k:"sfx",n:"cash",pid:i.pid})))}}}}function b_(n){let e=C.dz;if(C.last=e,C.players.forEach(r=>{r.st==="float"&&(r.st="ok",r.y=bn(n,r.x,r.z,50)),!r.cpu&&(r.waveKO?mr(r,8,"\u{1F4AA} Good try! +8"):(mr(r,20+5*C.wave,"\u2705 Survived the "+gi(e,n).toLowerCase()+"! +"+(20+5*C.wave)),r.survivedIds=r.survivedIds||{},r.survivedIds[e]=1),r.stats={id:e,ko:r.waveKO,under:r.y<-22,high:r.y>3.6,beamed:r.beamed,helped:r.helped||0,map:n.id})}),jt.hooks.waveEnd&&jt.hooks.waveEnd(e),C.haz=[],C.wave>=C.waves){C.phase="results",C.t=0,C.players.forEach(r=>{r.cpu||mr(r,40,"\u{1F3C1} Round complete! +40")}),jt.hooks.roundEnd&&jt.hooks.roundEnd();return}C.phase="calm",C.t=11,C.picked=!1,C.next=ol(n,e);let t=C.env.water,i=C.env.waterBase;C.env=Kh(),t!=null&&(C.env.water=t,C.env.waterBase=i),C.coins.forEach(r=>{!r.on&&cn()<.5&&(r.on=!0)});let s=n.coinSpots[cn()*n.coinSpots.length|0];C.star={x:s.x,z:s.z,y:(s.y!=null?s.y:bn(n,s.x,s.z,50))+1.2,on:!0}}function w_(n,e,t){let i=n.ai,s={x:0,z:0,jump:!1,pad:!1},r=C.phase,o=n.y<-22,a=null;if(r==="calm"||r==="results")if(i.tgt=null,o){if(i.upT=(i.upT||1+cn()*3)-e,i.upT<=0){i.upT=0;let l=t.pads.find(c=>c.kind==="up"&&Vh(t,n.x,n.z)===c.room);l&&(a={x:l.x,z:l.z},Math.hypot(l.x-n.x,l.z-n.z)<.9&&(s.pad=!0))}}else if(n.y>3&&t.buildings.some(l=>l.elevator&&Math.abs(n.x-l.x)<l.w/2&&Math.abs(n.z-l.z)<l.d/2)){let l=t.pads.find(c=>c.kind==="elevdown"&&Math.abs(c.y-n.y)<1.5&&Math.hypot(c.x-n.x,c.z-n.z)<15);l&&(a=l,Math.hypot(l.x-n.x,l.z-n.z)<.9&&(s.pad=!0))}else{let l=C.players.find(c=>c.st==="ko"&&Math.hypot(c.x-n.x,c.z-n.z)<14&&Math.abs(c.y-n.y)<2);if(l)a=l;else{let c=null,u=22;for(let h of C.coins)if(h.on&&Math.abs(h.y-.9-n.y)<1.5){let f=Math.hypot(h.x-n.x,h.z-n.z);f<u&&(u=f,c=h)}a=c||i.wander,(!a||Math.hypot(a.x-n.x,a.z-n.z)<1)&&(i.wander={x:n.x+(cn()-.5)*20,z:n.z+(cn()-.5)*20})}}else{let l=Pt[C.dz];i.react-=e;let c=$t(t,n),u=l.safe(n,c,C,t);if(u&&u!=="maybe")i.tgt=null,i.safeT=(i.safeT||0)+e;else if(i.react<=0){(!i.tgt||i.tgt.b&&i.tgt.b.wrecked||i.retry<=0)&&(i.tgt=S_(n,l,t),i.wp=0,i.retry=14),i.retry-=e;let h=i.tgt;if(h){let f=[];h.b&&pi(t,n.x,n.y,n.z)!==h.b&&f.push(h.b.doorOut,h.b.doorIn),h.kind==="high"&&h.foot&&n.y<h.y-1&&f.push(h.foot),f.push(h),i.wp=Math.min(i.wp||0,f.length-1);let d=f[i.wp];for(;d&&Math.hypot(d.x-n.x,d.z-n.z)<.9&&i.wp<f.length-1;)i.wp++,d=f[i.wp];a=d,h.kind==="pad"&&Math.hypot(h.x-n.x,h.z-n.z)<.9&&(s.pad=!0,i.tgt=null)}}for(let h of C.haz){if(h.k==="beam"||h.k==="crack"||h.k==="collapse")continue;let f=Math.hypot(n.x-h.x,n.z-h.z);if(f<h.r+.6&&h.t>.3&&!(u&&u!=="maybe"&&h.k!=="junk")){let d=f||1;return s.x=(n.x-h.x)/d,s.z=(n.z-h.z)/d,i.dodge=.4,s}}}if(a){let l=a.x-n.x,c=a.z-n.z,u=Math.hypot(l,c);u>.4&&(s.x=l/u,s.z=c/u,u<2&&(s.x*=.6,s.z*=.6));let h=Math.hypot(n.x-(i.lx||0),n.z-(i.lz||0));if(i.lx=n.x,i.lz=n.z,u>1&&h<e*.8?i.stuck=(i.stuck||0)+e:i.stuck=Math.max(0,(i.stuck||0)-e),i.stuck>.8){i.side=i.side||(cn()<.5?1:-1);let f=-s.z*i.side,d=s.x*i.side;s.x=f,s.z=d,i.stuck>1.6&&(i.stuck=0,i.side=-i.side,s.jump=!0)}}return s}function S_(n,e,t){let i=e.targets(t,C).filter(o=>!(o.b&&o.b.wrecked));if(!i.length)return null;let s=null,r=1e9;for(let o of i){let a=Math.hypot(o.x-n.x,o.z-n.z)+(o.b?6:0)+cn()*8;o.kind==="high"&&o.foot&&(a+=6),a<r&&(r=a,s=o)}return s}function Xd(n,e){if(C.phase!=="warn"&&C.phase!=="active")return null;let i=Pt[C.dz].targets(e,C).filter(o=>!(o.b&&o.b.wrecked)),s=null,r=1e9;for(let o of i){let a=Math.hypot(o.x-n.x,o.z-n.z)+Math.abs(o.y-n.y)*.5;a<r&&(r=a,s=o)}return s}var We={mx:0,mz:0,yaw:.6,pitch:.62,dist:11.5,jumpQ:!1,actQ:!1,shieldQ:!1,jet:!1,enabled:!1,joy:null,keys:{}},xi=new Map,ao=null,lo=null,co=null;function Yd(n){return n&&n.closest&&n.closest("button, .panel, .hudbtn, input, .card, .noTouch")}function Zd(){return document.getElementById("joy")}function qd(n,e,t,i){let s=Zd();if(!s)return;s.style.display="block",s.style.left=n-60+"px",s.style.top=e-60+"px";let r=s.firstChild;r&&(r.style.transform="translate("+t+"px,"+i+"px)")}function E_(){let n=Zd();n&&(n.style.display="none")}function $d(){let n={passive:!1};window.addEventListener("touchstart",i=>{if(We.enabled){for(let s of i.changedTouches)Yd(s.target)||(i.preventDefault(),s.clientX<innerWidth*.45&&s.clientY>innerHeight*.35&&ao===null?(ao=s.identifier,lo={x:s.clientX,y:s.clientY},qd(s.clientX,s.clientY,0,0)):xi.set(s.identifier,{x:s.clientX,y:s.clientY}));if(xi.size>=2){let s=[...xi.values()];co={d:Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),dist:We.dist}}}},n),window.addEventListener("touchmove",i=>{if(We.enabled){for(let s of i.changedTouches){if(s.identifier===ao){i.preventDefault();let o=s.clientX-lo.x,a=s.clientY-lo.y,l=Math.hypot(o,a),c=55;l>c&&(o*=c/l,a*=c/l),We.mx=o/c,We.mz=a/c,qd(lo.x,lo.y,o,a);continue}let r=xi.get(s.identifier);r&&(i.preventDefault(),xi.size===1&&(We.yaw-=(s.clientX-r.x)*.008,We.pitch=Math.max(.08,Math.min(1.35,We.pitch+(s.clientY-r.y)*.006))),r.x=s.clientX,r.y=s.clientY)}if(xi.size>=2&&co){let s=[...xi.values()],r=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);We.dist=Math.max(3.5,Math.min(22,co.dist*co.d/Math.max(20,r)))}}},n);let e=i=>{for(let s of i.changedTouches)s.identifier===ao&&(ao=null,We.mx=0,We.mz=0,E_()),xi.delete(s.identifier);xi.size<2&&(co=null)};window.addEventListener("touchend",e),window.addEventListener("touchcancel",e);let t=null;window.addEventListener("mousedown",i=>{!We.enabled||Yd(i.target)||(t={x:i.clientX,y:i.clientY})}),window.addEventListener("mousemove",i=>{t&&(We.yaw-=(i.clientX-t.x)*.006,We.pitch=Math.max(.08,Math.min(1.35,We.pitch+(i.clientY-t.y)*.005)),t={x:i.clientX,y:i.clientY})}),window.addEventListener("mouseup",()=>t=null),window.addEventListener("wheel",i=>{We.enabled&&(We.dist=Math.max(3.5,Math.min(22,We.dist*(i.deltaY>0?1.1:.9))))},{passive:!0}),window.addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||(We.keys[i.code]=!0,i.code==="Space"&&(We.jumpQ=!0,i.preventDefault()),i.code==="KeyE"&&(We.actQ=!0),i.code==="KeyQ"&&(We.shieldQ=!0),i.code==="KeyF"&&(We.jet=!0))}),window.addEventListener("keyup",i=>{We.keys[i.code]=!1,i.code==="KeyF"&&(We.jet=!1)})}function jd(){let n=We.mx,e=We.mz,t=We.keys;(t.KeyW||t.ArrowUp)&&(e-=1),(t.KeyS||t.ArrowDown)&&(e+=1),(t.KeyA||t.ArrowLeft)&&(n-=1),(t.KeyD||t.ArrowRight)&&(n+=1);let i=Math.hypot(n,e);return i>1&&(n/=i,e/=i),{x:n,z:e}}var ut=null,Jn=null,xr=!0,Jd={};function gs(){if(ut){ut.state==="suspended"&&ut.resume();return}try{ut=new(window.AudioContext||window.webkitAudioContext),Jn=ut.createGain(),Jn.gain.value=.5,Jn.connect(ut.destination)}catch{ut=null}}function tu(n){xr=n,Jn&&(Jn.gain.value=n?.5:0)}function ho(){if(ho.b)return ho.b;let n=ut.sampleRate*2,e=ut.createBuffer(1,n,ut.sampleRate),t=e.getChannelData(0);for(let i=0;i<n;i++)t[i]=Math.random()*2-1;return ho.b=e}function nu(n,e,t,i,s){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(s,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+t+i)}function Jt(n,e,t,i,s=.3,r=0){if(!ut||!xr)return;let o=ut.currentTime+r,a=ut.createOscillator(),l=ut.createGain();a.type=n,a.frequency.setValueAtTime(e,o),t&&a.frequency.exponentialRampToValueAtTime(t,o+i),nu(l,o,.01,i,s),a.connect(l),l.connect(Jn),a.start(o),a.stop(o+i+.05)}function Vi(n,e,t=.4,i=1,s="lowpass",r=0,o){if(!ut||!xr)return;let a=ut.currentTime+r,l=ut.createBufferSource(),c=ut.createBiquadFilter(),u=ut.createGain();l.buffer=ho(),c.type=s,c.frequency.setValueAtTime(e,a),o&&c.frequency.exponentialRampToValueAtTime(o,a+n),c.Q.value=i,nu(u,a,.01,n,t),l.connect(c),c.connect(u),u.connect(Jn),l.start(a),l.stop(a+n+.1)}var vt={coin:()=>{Jt("square",988,0,.08,.12),Jt("square",1319,0,.18,.12,.07)},cash:()=>{[0,.06,.12].forEach((n,e)=>Jt("triangle",1200+e*300,0,.12,.2,n)),Vi(.25,6e3,.12,1,"highpass",.15),Jt("sine",2093,0,.4,.15,.2)},jump:()=>Jt("sine",380,760,.16,.18),click:()=>Jt("triangle",660,0,.06,.15),hurt:()=>{Jt("sawtooth",300,120,.25,.2)},ko:()=>{Jt("triangle",900,200,.5,.25),[0,.12,.24].forEach(n=>Jt("sine",1500,0,.08,.1,.5+n))},boom:(n=1)=>{Vi(1.2*n,900,.7*n,.7,"lowpass",0,60),Jt("sine",120,35,.8,.5*n)},thunder:()=>{Vi(.08,8e3,.5,.5,"highpass"),Vi(2.2,700,.6,.5,"lowpass",.05,80)},roar:()=>{if(!ut||!xr)return;let n=ut.currentTime,e=ut.createOscillator(),t=ut.createOscillator(),i=ut.createBiquadFilter(),s=ut.createGain();e.type="sawtooth",t.type="square",e.frequency.setValueAtTime(140,n),e.frequency.linearRampToValueAtTime(95,n+1.6),t.frequency.setValueAtTime(71,n),t.frequency.linearRampToValueAtTime(48,n+1.6),i.type="bandpass",i.frequency.setValueAtTime(600,n),i.frequency.linearRampToValueAtTime(300,n+1.6),i.Q.value=1.5,nu(s,n,.15,1.6,.5),e.connect(i),t.connect(i),i.connect(s),s.connect(Jn),e.start(n),t.start(n),e.stop(n+1.9),t.stop(n+1.9),Vi(1.6,900,.25,2,"bandpass")},beam:()=>{Jt("sawtooth",220,880,1,.18),Vi(1,3e3,.15,3,"bandpass")},zap:()=>{Jt("square",1800,200,.3,.15)},siren:()=>{if(!ut||!xr)return;let n=ut.currentTime,e=ut.createOscillator(),t=ut.createGain();e.type="triangle";for(let i=0;i<3;i++)e.frequency.setValueAtTime(520,n+i*1.1),e.frequency.linearRampToValueAtTime(980,n+i*1.1+.55),e.frequency.linearRampToValueAtTime(520,n+i*1.1+1.1);t.gain.setValueAtTime(1e-4,n),t.gain.exponentialRampToValueAtTime(.16,n+.1),t.gain.setValueAtTime(.16,n+3.1),t.gain.exponentialRampToValueAtTime(1e-4,n+3.3),e.connect(t),t.connect(Jn),e.start(n),e.stop(n+3.4)},win:()=>[523,659,784,1047].forEach((n,e)=>Jt("triangle",n,0,.25,.2,e*.11)),splash:()=>Vi(.6,1500,.35,.8,"lowpass",0,300),whoosh:()=>Vi(.5,400,.3,1,"bandpass",0,2e3),pad:()=>{Jt("sine",523,1047,.25,.18)},ufo:()=>{Jt("sine",300,900,.6,.12),Jt("sine",900,300,.6,.12,.6)},shield:()=>{Jt("sine",400,1200,.4,.2)},achieve:()=>[784,988,1175,1568].forEach((n,e)=>Jt("square",n,0,.16,.12,e*.09))};function uo(n,e){if(!ut)return;let t=Jd[n];if(!t){let i=ut.createBufferSource(),s=ut.createBiquadFilter(),r=ut.createGain();i.buffer=ho(),i.loop=!0,s.type=n==="rain"?"highpass":n==="rumble"?"lowpass":"bandpass",s.frequency.value=n==="rain"?2500:n==="rumble"?120:500,s.Q.value=.7,r.gain.value=0,i.connect(s),s.connect(r),r.connect(Jn),i.start(),t=Jd[n]={g:r,f:s}}t.g.gain.setTargetAtTime(xr?e:0,ut.currentTime,.4),n==="wind"&&t.f.frequency.setTargetAtTime(400+e*900,ut.currentTime,.5)}var Kd="grokDisaster.save.v1",iu=[{id:"hp",icon:"\u2764\uFE0F",name:"Max Health",desc:"+25 max health per level",prices:[80,160,300,500],kind:"upg"},{id:"armor",icon:"\u26D1\uFE0F",name:"Hard Hat & Vest",desc:"Take less damage (-20% / -35% / -45%)",prices:[150,350,600],kind:"upg"},{id:"regen",icon:"\u{1F49A}",name:"Healing Snacks",desc:"Heal slowly over time (+1 / +2 / +3 HP a second)",prices:[120,250,450],kind:"upg"},{id:"speed",icon:"\u{1F45F}",name:"Speed Boots",desc:"Run faster (+15% / +30%)",prices:[150,350],kind:"upg"},{id:"umbrella",icon:"\u2602\uFE0F",name:"Mega Umbrella",desc:"Blocks hail, ash and half of falling junk while outside",prices:[120],kind:"upg"},{id:"shield",icon:"\u{1FAE7}",name:"Bubble Shield",desc:"Tap \u{1FAE7} for 5 seconds of total safety (once per wave, twice at Lv2)",prices:[250,500],kind:"upg"},{id:"jetpack",icon:"\u{1F680}",name:"Jetpack",desc:"Hold \u{1F680} to fly up onto roofs and high ground",prices:[400],kind:"upg"},{id:"magnet",icon:"\u{1F9F2}",name:"Coin Magnet",desc:"Pull in coins from far away",prices:[200],kind:"upg"}],su=[{id:"cap",name:"Ball Cap",price:0},{id:"beanie",name:"Beanie",price:60},{id:"party",name:"Party Hat",price:80},{id:"cowboy",name:"Cowboy Hat",price:120},{id:"chef",name:"Chef Hat",price:120},{id:"dino",name:"Dino Hood",price:200},{id:"astro",name:"Space Helmet",price:250},{id:"crown",name:"Golden Crown",price:400},{id:"none",name:"No Hat",price:0}],ru=[3900150,15680580,2278750,16096779,11032055,15485081,1357990,16347926,1120295,16777215],cl=[{id:"first",icon:"\u{1F31F}",name:"First Survivor",desc:"Survive your first disaster"},{id:"bunker",icon:"\u2622\uFE0F",name:"Bunker Buddy",desc:"Ride out a disaster in the nuclear bunker"},{id:"kaiju",icon:"\u{1F996}",name:"Kaiju Dodger",desc:"Survive ROARGON without getting knocked out"},{id:"allnine",icon:"\u{1F32A}\uFE0F",name:"Storm Chaser",desc:"Survive every type of disaster"},{id:"helper",icon:"\u{1F91D}",name:"Helper Hero",desc:"Help 5 knocked-out survivors back up"},{id:"rich",icon:"\u{1F4B0}",name:"Coin Collector",desc:"Earn 1,000 coins total"},{id:"perfect",icon:"\u{1F6E1}\uFE0F",name:"Untouchable",desc:"Finish a whole round without a knockout"},{id:"dry",icon:"\u{1F3E2}",name:"High & Dry",desc:"Survive a flood on high ground"},{id:"beamed",icon:"\u{1F6F8}",name:"Beamed Up",desc:"Get abducted by aliens (oops!)"},{id:"travel",icon:"\u{1F5FA}\uFE0F",name:"World Traveler",desc:"Play on all 4 maps"},{id:"picker",icon:"\u{1F3AF}",name:"Disaster Picker",desc:"Pay coins to choose a disaster"},{id:"cover",icon:"\u{1FA91}",name:"Drop, Cover, Hold On",desc:"Hide under a table during an earthquake"},{id:"rounds10",icon:"\u{1F3C6}",name:"Disaster Pro",desc:"Finish 10 rounds"}];function fo(){return{v:1,coins:150,name:"",look:{shirt:3900150,pants:3359061,skin:16173472,hair:3810582,hat:"cap",hatColor:15680580},upg:{},hats:["cap","none"],stats:{rounds:0,waves:0,kos:0,revives:0,earned:0,survived:{},maps:{},best:0,picks:0,coinsPicked:0},ach:{},opts:{gfx:"high",sound:!0},howto:!1}}var Ye={d:fo()};function Qd(){try{let n=JSON.parse(localStorage.getItem(Kd)||"null");n&&n.v===1&&(Ye.d=Object.assign(fo(),n,{stats:Object.assign(fo().stats,n.stats||{}),look:Object.assign(fo().look,n.look||{}),opts:Object.assign(fo().opts,n.opts||{})}))}catch{}return Ye.d}function Lt(){try{localStorage.setItem(Kd,JSON.stringify(Ye.d))}catch{}}var mn=n=>Ye.d.upg[n]|0;function po(n,e){Ye.d.coins=Math.max(0,Ye.d.coins+n),n>0&&(Ye.d.stats.earned+=n),Lt()}function ep(n){return Ye.d.ach[n]?null:(Ye.d.ach[n]=Date.now(),Lt(),cl.find(e=>e.id===n))}function xs(){return{hp:mn("hp"),armor:mn("armor"),regen:mn("regen"),speed:mn("speed"),umbrella:mn("umbrella"),shield:mn("shield"),jetpack:mn("jetpack"),magnet:mn("magnet")}}var ae={room:null,info:{},App:null},vs=()=>window.GrokNet,T_=n=>document.getElementById(n);function vr(n,e){let t=T_("onlineMsg");t&&(t.textContent=n,t.style.color=e?"#15803d":"#be123c"),ae.lastStatus=n}ae.init=function(n){ae.App=n};ae.myName=()=>Ye.d.name||"Survivor";ae.lobby=function(){let n=ae.App;if(ae.room&&ae.room.opened)return ae.roomPanel();n.panel(`<h2>\u{1F91D} PLAY WITH FRIENDS</h2><p class="sub">Up to 3 survivors online. One friend hosts and shares the 5-letter code. CPU survivors fill the empty spots.</p>
  <h3>YOUR NAME</h3><input class="name" id="nmIn" maxlength="12" placeholder="Your name" value="${n.esc(Ye.d.name)}">
  <div class="btnrow"><button class="btn green" id="bHost">\u{1F3E0} HOST A GAME</button></div><h3>OR JOIN WITH A CODE</h3><input class="code" id="codeIn" maxlength="5" placeholder="ABCDE" autocomplete="off" autocapitalize="characters">
  <div class="btnrow"><button class="btn pink" id="bJoin">JOIN</button></div><p class="sub" id="onlineMsg" style="margin-top:10px"></p><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`,e=>{let t=()=>{let i=e.querySelector("#nmIn").value;Ye.d.name=vs()?vs().cleanName(i):i.slice(0,12),Lt()};e.querySelector("#bHost").onclick=()=>{t(),ae.host()},e.querySelector("#bJoin").onclick=()=>{t();let i=vs().normalizeCode(e.querySelector("#codeIn").value);if(!vs().validCode(i))return vr("Codes are 5 letters, like KDXPQ");ae.join(i)}},{name:"lobby",onClose:()=>{ae.room&&!ae.room.opened&&ae.leave()}})};ae.roomPanel=function(){let n=ae.App,e=ae.room;if(!e)return;let t=e.players(),i=e.isHost;n.panel(`<h2>\u{1F91D} ROOM <span style="letter-spacing:4px;color:#7c3aed">${e.code}</span></h2><p class="sub">Friends join with code <b>${e.code}</b> (${t.length}/3)</p>
  ${t.map(s=>`<div class="item"><div class="ic">${s.slot===0?"\u{1F451}":"\u{1F642}"}</div><div class="grow"><b>${n.esc(ae.info[s.pid]&&ae.info[s.pid].name||s.name)}</b><small>${s.slot===0?"Host":"Player "+(s.slot+1)}${s.pid===e.pid?" (you)":""}</small></div></div>`).join("")}
  ${i?`<p class="sub">${t.length<2?"Waiting for a friend to join\u2026 (you can also start with CPUs)":"Everyone ready? Pick a map!"}</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button><button class="btn green" id="bStart">PICK MAP \u25B6</button></div>`:'<p class="sub">Waiting for the host to pick a map and start\u2026 \u{1F32A}\uFE0F</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button></div>'}`,s=>{s.querySelector("#bLeave").onclick=()=>{ae.leave(),n.hidePanels()};let r=s.querySelector("#bStart");r&&(r.onclick=()=>n.showMapPick(!0))},{name:"room"})};ae.hello=function(){ae.room&&ae.room.send({t:"hello",name:ae.myName(),look:Ye.d.look,upg:xs()})};function tp(n){ae.room=n;let e=ae.App;n.on("status",t=>vr(t,!0)),n.on("open",()=>{vr("Connected!",!0),vt.coin(),n.isHost?ae.info[n.pid]={name:ae.myName(),look:Ye.d.look,upg:xs()}:ae.hello(),ae.roomPanel(),e.toast(n.isHost?"Room "+n.code+" is open! \u{1F91D}":"Joined room "+n.code+"! \u{1F91D}")}),n.on("join",t=>{t.pid!==n.pid&&(e.toast("\u{1F44B} "+t.name+" joined!"),vt.coin()),e.panelName==="room"&&ae.roomPanel()}),n.on("leave",t=>{e.toast(t.name+" left"),e.panelName==="room"&&ae.roomPanel(),n.isHost&&e.mode==="host"&&C.players.forEach(i=>{i.pid===t.pid&&!i.cpu&&(i.cpu=!0,i.name=i.name+" (CPU)",i.ai={},e.toast("A CPU takes over for "+t.name))})}),n.on("message",(t,i)=>A_(t,i)),n.on("reconnecting",()=>e.toast("Lost the host - reconnecting\u2026")),n.on("error",t=>{vr(t.title+": "+t.message);let i=e.mode==="guest"||e.mode==="host";ae.room=null,i&&(e.toast(t.title+" - back to the menu"),e.quit())}),n.start()}ae.host=function(n){vr("Opening a room\u2026",!0),ae.info={},tp(vs().createRoom({role:"host",code:n||void 0,name:ae.myName(),color:"#3ff0ff",max:3,rejoin:!!n}))};ae.join=function(n){vr("Joining "+n+"\u2026",!0),tp(vs().createRoom({role:"join",code:n,name:ae.myName(),color:"#ff4fd8",rejoin:!!ae.fromHub}))};ae.fromParams=function(n){ae.fromHub=!0,n.name&&(Ye.d.name=n.name,Lt()),ae.lobby(),n.mode==="host"?ae.host(n.code):ae.join(n.code)};ae.leave=function(){if(ae.room){try{ae.room.leave()}catch{}ae.room=null}};ae.send=n=>{ae.room&&ae.room.send(n)};ae.broadcast=n=>{ae.room&&ae.room.isHost&&ae.room.broadcast(n)};ae.sendTo=(n,e)=>{ae.room&&ae.room.isHost&&ae.room.sendTo(n,e)};ae.humans=function(){return ae.room.players().map(n=>{let e=ae.info[n.pid]||{};return{pid:n.pid,name:e.name||n.name,look:e.look||{},upg:e.upg||{}}})};ae.start=function(n){!ae.room||!ae.room.isHost||ae.App.startHosted(n,ae.humans())};var ou=[],au=[];ae.queue=function(n,e){ou.push(...n),au.push(...e)};var sn=n=>Math.round(n*100)/100;ae.snapshot=function(){let n=C.players.map(i=>[i.id,sn(i.x),sn(i.y),sn(i.z),sn(i.yaw),i.an,Math.round(i.hp),i.max,i.st,sn(i.sh),sn(i.inv),i.tpN,sn(i.sp||0),i.jetOn?1:0,sn(i.koT||0),sn(i.rev||0),i.cpu?1:0]),e=C.haz.map(i=>({i:i.i,k:i.k,x:sn(i.x),z:sn(i.z),y:sn(i.y||0),r:i.r,T:i.T,t:sn(i.t),x1:i.x1!=null?sn(i.x1):void 0,z1:i.z1!=null?sn(i.z1):void 0,b:i.b})),t=C.coins.map(i=>i.on?1:0).join("");ae.room.broadcast({t:"s",ph:C.phase,tm:sn(C.t),wv:C.wave,wvs:C.waves,dz:C.dz,nx:C.next,pk:C.picked,dd:C.dzDur,pl:n,hz:e,env:C.env,wr:C.wrecked,co:t,st:C.star,fx:ou,ms:au}),ou=[],au=[]};function A_(n,e){let t=ae.App,i=ae.room;if(!(!n||typeof n!="object")){if(i.isHost){if(n.t==="hello"){ae.info[e]={name:vs().cleanName(n.name),look:n.look&&typeof n.look=="object"?n.look:{},upg:n.upg&&typeof n.upg=="object"?n.upg:{}},t.panelName==="room"&&ae.roomPanel();let s=C.players.find(r=>r.pid===e);s&&(s.look=ae.info[e].look,s.upg=ae.info[e].upg,s.max=gr(s.upg))}else if(n.t==="pose"&&t.mode==="host"){let s=C.players.find(r=>r.pid===e&&!r.cpu);s&&s.st==="ok"&&(s.x=+n.x||0,s.y=+n.y||0,s.z=+n.z||0,s.yaw=+n.yaw||0,s.an=String(n.an||"idle").slice(0,8),s.sp=+n.sp||0,s.jetOn=!!n.jet)}else if(n.t==="shield"&&t.mode==="host"){let s=C.players.find(o=>o.pid===e),r=(s&&s.upg&&s.upg.shield)|0;s&&s.st==="ok"&&s.shUses<r&&(C.phase==="active"||C.phase==="warn")&&(s.shUses++,s.sh=5)}return}n.t==="start"?(t.hidePanels(),t.startGuest(n)):n.t==="s"&&t.mode==="guest"?R_(n):n.t==="wave"?t.onWaveStats(n.st):n.t==="end"&&t.onRoundEnd()}}function R_(n){let e=ae.App,t=e.W;ae.snaps=(ae.snaps||0)+1,ae.lastWr=n.wr,n.ph==="calm"&&C.phase==="results"&&e.hidePanels(),Object.assign(C,{phase:n.ph,t:n.tm,wave:n.wv,waves:n.wvs,dz:n.dz,next:n.nx,picked:n.pk,dzDur:n.dd,env:n.env||{},star:n.st});let i=new Map(C.haz.map(r=>[r.i,r]));C.haz=(n.hz||[]).map(r=>{let o=i.get(r.i);return o?(o.t=Math.max(o.t,r.t),o):r});for(let r of n.pl){let o=C.players.find(a=>a.id===r[0]);if(o&&([o.x,o.y,o.z,o.yaw,o.an,o.hp,o.max,o.st,o.sh,o.inv]=r.slice(1,11),o.sp=r[12],o.jetOn=!!r[13],o.koT=r[14],o.rev=r[15],o.cpu=!!r[16],e.me&&o.id===e.me.id)){let a=e.me;a.hp=o.hp,a.max=o.max,a.sh=o.sh,a.inv=o.inv,(o.st!=="ok"||r[11]!==e.tpN)&&(a.x=o.x,a.y=o.y,a.z=o.z,a.vy=0),a.st=o.st,e.tpN=r[11]}}let s=new Set(n.wr||[]);if(t.buildings.forEach(r=>{s.has(r.id)&&!r.wrecked?ur(t,t.root,r):!s.has(r.id)&&r.wrecked&&us(t,r)}),n.co){C.coins.length!==n.co.length&&(C.coins=t.coinSpots.map((r,o)=>({i:o,x:r.x,z:r.z,y:(r.y!=null?r.y:t.terrain(r.x,r.z))+.9,on:!1})));for(let r=0;r<n.co.length;r++)C.coins[r].on=n.co[r]==="1"}n.fx&&n.fx.length&&e.handleFx(n.fx),n.ms&&n.ms.length&&e.handleMsgs(n.ms)}var Fe=n=>document.getElementById(n),op=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),hl=new URLSearchParams(location.search),k=window.__dz={ready:!1,mode:"menu",W:null,S:C,G:W,I:We,me:null,myPid:"me",models:new Map,paused:!1,simSpeed:1};Qd();dd(Fe("c"));W.autoStep=!hl.get("noauto");W.onStepDown=()=>{Ye.d.opts.gfx="low",Lt(),Sn("Graphics set to LOW for smoother play \u{1F3AE}")};(Ye.d.opts.gfx==="low"||hl.get("gfx")==="low")&&eo("low");Dd();$d();tu(Ye.d.opts.sound);function ys(n){if(k.W&&k.W.id===n)return k.W;k.W&&(W.scene.remove(k.W.root),k.W.root.traverse(t=>{t.geometry&&!t.geometry.userData.keep&&t.geometry.dispose()})),k.models.forEach(t=>W.scene.remove(t.root)),k.models.clear(),al(),sl();let e=Id(n,W.scene);return k.W=e,jt.W=e,jt.scene=e.root,to(e.meta.mood,!0),e}function C_(n){let e=k.models.get(n.id),t=JSON.stringify(n.look)+(n.upg&&n.upg.jetpack?"j":"");return e&&e.key!==t&&(W.scene.remove(e.root),e=null),e||(e=vd(n.look),e.key=t,yd(e,n.upg&&n.upg.jetpack),e.root.position.set(n.x,n.y,n.z),W.scene.add(e.root),k.models.set(n.id,e)),e}function P_(n){let e=new Set;for(let t of C.players){let i=C_(t);e.add(t.id);let s=k.me&&t.id===k.me.id,r=s?k.me:t;if(s||k.mode!=="guest")i.root.position.set(r.x,r.y,r.z);else{let c=Math.min(1,n*12);i.root.position.x+=(t.x-i.root.position.x)*c,i.root.position.y+=(t.y-i.root.position.y)*c,i.root.position.z+=(t.z-i.root.position.z)*c}let o=r.yaw-i.root.rotation.y;for(;o>Math.PI;)o-=6.283;for(;o<-Math.PI;)o+=6.283;i.root.rotation.y+=o*Math.min(1,n*15);let a=t.st==="ko"?"ko":t.st==="float"?"float":r.an||"idle";_d(i,a,n,r.sp||0,W.t+t.id),i.bubble.visible=t.sh>0,i.bubble.visible&&i.bubble.scale.setScalar(1+Math.sin(W.t*8)*.04),i.flames.visible=!!r.jetOn,r.jetOn&&Math.random()<.5&&Zt(i.root.position.x,i.root.position.y+.6,i.root.position.z,1,[16757575,16777215],{sp:.5,up:-3,s:.2,s1:.5,life:.4});let l=(C.dz==="blizzard"||C.dz==="lightning"||C.dz==="volcano")&&C.phase==="active";i.umbrella.visible=!!(t.upg&&t.upg.umbrella)&&l&&a!=="ko"&&a!=="swim",i.root.visible=!(t.inv>0&&t.st==="ok"&&Math.floor(W.t*12)%2===0)}k.models.forEach((t,i)=>{e.has(i)||(W.scene.remove(t.root),k.models.delete(i))})}var vi=new Ut;function I_(){let n=0;if(C.coins&&k.mode!=="menu")for(let e of C.coins)e.on&&(vi.position.set(e.x,e.y+Math.sin(W.t*3+e.i)*.15,e.z),vi.rotation.set(0,W.t*2.5+e.i,0),vi.scale.setScalar(1),vi.updateMatrix(),X.coins.setMatrixAt(n++,vi.matrix));X.coins.count=n,X.coins.instanceMatrix.needsUpdate=!0,C.star&&C.star.on&&k.mode!=="menu"?(vi.position.set(C.star.x,C.star.y+Math.sin(W.t*2)*.25,C.star.z),vi.rotation.set(0,W.t*2,0),vi.updateMatrix(),X.stars.setMatrixAt(0,vi.matrix),X.stars.count=1,X.stars.instanceMatrix.needsUpdate=!0):X.stars.count=0}var gn=null,yi=new D,xn=new D;function D_(n){let e=k.W,t=k.me;if(k.cam){if(W.camera.position.set(k.cam.x,k.cam.y,k.cam.z),W.camera.lookAt(k.cam.lx,k.cam.ly,k.cam.lz),W.focus.set(k.cam.lx,0,k.cam.lz),t){let f=pi(e,t.x,t.y,t.z);f!==gn&&(gn&&(gn.upper.visible=!gn.wrecked),f&&k.cam.hide!==!1&&(f.upper.visible=!1),gn=f)}return}if(k.mode==="menu"||!t){let f=W.t*.06;xn.set(Math.cos(f)*52,30,Math.sin(f)*52),W.camera.position.lerp(xn,.05),W.camera.lookAt(0,2,0),W.focus.set(0,0,0),gn&&(gn.upper.visible=!gn.wrecked,gn=null);return}let i=t.y<-22,s=i?null:pi(e,t.x,t.y,t.z);s!==gn&&(gn&&(gn.upper.visible=!gn.wrecked),s&&(s.upper.visible=!1),gn=s);let r=We.dist,o=We.pitch;s&&(r=Math.min(r,8),o=Math.max(o,.95)),i&&(r=Math.min(r,7),o=Math.max(o,.8)),yi.set(t.x,t.y+1.4,t.z);let a=Math.sin(We.yaw)*Math.cos(o),l=Math.sin(o),c=Math.cos(We.yaw)*Math.cos(o);if(!s&&!i)for(let f=1.5;f<r;f+=.6){let d=yi.x+a*f,g=yi.y+l*f,x=yi.z+c*f;if(e.buildings.some(p=>!p.wrecked&&d>p.x-p.w/2-.2&&d<p.x+p.w/2+.2&&x>p.z-p.d/2-.2&&x<p.z+p.d/2+.2&&g<p.baseY+p.h+.6&&g>p.baseY-.5)){r=Math.max(2.2,f-.6);break}}i&&(r=Math.min(r,(-30+5.6-yi.y)/Math.max(.2,l))),xn.set(yi.x+a*r,yi.y+l*r,yi.z+c*r);let u=bn(e,xn.x,xn.z,xn.y+2);!i&&xn.y<u+.6&&(xn.y=u+.6),!i&&X.water.visible&&xn.y<X.water.position.y+1.2&&(xn.y=X.water.position.y+1.2);let h=C.env&&C.env.shake||0;h>0&&(xn.x+=(Math.random()-.5)*h*.6,xn.y+=(Math.random()-.5)*h*.5,xn.z+=(Math.random()-.5)*h*.6),W.camera.position.lerp(xn,Math.min(1,n*14)),W.camera.lookAt(yi),W.focus.set(t.x,i?0:t.y,t.z)}function np(n){let e=k.me;if(!e)return;let t=jd(),i=Math.cos(We.yaw),s=Math.sin(We.yaw),r={x:t.x*i+t.z*s,z:-t.x*s+t.z*i,jump:We.jumpQ,jet:We.jet};if(We.jumpQ=!1,e.st==="ok"?(ll(e,r,n,k.W,C.env),e.jumped&&(e.jumped=!1,vt.jump())):ll(e,{x:0,z:0},n,k.W,C.env),We.actQ&&(We.actQ=!1,e.st==="ok")){let o=Qh(e,k.W);o&&(vt.pad(),H_(),o.kind==="down"&&Sn("\u{1F526} You are in the "+o.room.name+". Safe from most disasters!"))}We.shieldQ&&(We.shieldQ=!1,L_())}function L_(){let n=k.me,e=mn("shield");if(!e||!n||n.st!=="ok")return;if(C.phase!=="active"&&C.phase!=="warn")return Sn("Save your bubble for a disaster! \u{1FAE7}");if(k.mode==="guest"){ae.send({t:"shield"}),vt.shield();return}let t=C.players.find(i=>i.id===n.id);if(t.shUses>=e)return Sn("Bubble used up this wave");t.shUses++,t.sh=5,vt.shield()}k.startSolo=function(n){gs();let e=ys(n);eu(e,e.root,n,[{pid:"me",name:Ye.d.name||"You",look:Ye.d.look,upg:xs()}],+(hl.get("waves")||5)),k.mode="solo",k.myPid="me",k.me=C.players[0],uu()};k.startHosted=function(n,e){gs();let t=ys(n);eu(t,t.root,n,e,5),k.mode="host",k.myPid=ae.room.pid,k.me=C.players.find(i=>i.pid===k.myPid),uu(),ae.broadcast({t:"start",map:n,players:C.players.map(i=>({id:i.id,pid:i.pid,name:i.name,cpu:i.cpu,look:i.look,upg:i.upg}))})};k.startGuest=function(n){gs();let e=ys(n.map);e.buildings.forEach(i=>us(e,i)),Object.assign(C,{phase:"calm",t:14,wave:0,waves:5,map:n.map,haz:[],env:{},wrecked:[],coins:[],fx:[],msgs:[]}),C.players=n.players.map(i=>oo(i)),C.players.forEach(i=>{i.max=gr(i.upg),i.hp=i.max;let s=e.spawns[i.id%4];i.x=s[0],i.z=s[1],i.y=.3}),k.mode="guest",k.myPid=ae.room.pid;let t=C.players.find(i=>i.pid===k.myPid);k.me=oo(Object.assign({},t)),k.me.upg=xs(),k.lastMsg=0,k.wreckSeen=new Set,k.tpN=t.tpN,uu()};function uu(){let n=Fe("toasts");n&&(n.innerHTML=""),sl(),al(),_i(),Fe("title").classList.add("hidden"),Fe("hud").classList.remove("hidden"),We.enabled=!0,k.lastPhase=null,k.lastWave=0,k.waveCoins=0,k.roundCoins=0,k.roundKO=!1,k.roundSaved=!1,Ye.d.stats.maps[k.W.id]=1,Object.keys(Ye.d.stats.maps).length>=4&&wn("travel"),Lt(),Ye.d.howto||(Ye.d.howto=!0,Lt(),fu()),up()}k.quit=function(){(k.mode==="host"||k.mode==="guest")&&ae.leave(),k.mode="menu",k.me=null,C.phase="lobby",C.players=[],C.haz=[],C.env={},We.enabled=!1,k.W.buildings.forEach(n=>us(k.W,n)),al(),sl(),U_(),Fe("hud").classList.add("hidden"),_i(),G_()};function U_(){["wind","rain","rumble"].forEach(n=>uo(n,0))}function ap(n){for(let e of n)e.pid&&e.pid!==k.myPid&&e.k==="sfx"&&(e.n==="coin"||e.n==="cash"||e.n==="ko")||(Hd(e,k.W,vt),e.k==="hit"&&e.pid===k.myPid&&(vt.hurt(),B_()))}function lp(n){for(let e of n)e.pid!=="*"&&e.pid!==k.myPid||(e.coins&&e.pid===k.myPid&&(po(e.coins),k.roundCoins+=e.coins,V_()),e.text&&Sn(e.text,e.coins?"gold":""))}k.onWaveStats=function(n){if(!n)return;let e=Ye.d.stats;n.ko?(e.kos++,k.roundKO=!0):(e.waves++,e.survived[n.id]=(e.survived[n.id]||0)+1,wn("first"),n.id==="kaiju"&&wn("kaiju"),n.under&&k.W.id==="area51"&&k.me&&k.W.rooms.some(t=>t.kind==="bunker")&&wn("bunker"),n.id==="flood"&&n.high&&wn("dry"),pr.every(t=>e.survived[t])&&wn("allnine")),n.beamed&&wn("beamed"),n.helped&&(e.revives+=n.helped,e.revives>=5&&wn("helper")),e.earned>=1e3&&wn("rich"),Lt()};k.onRoundEnd=function(){let n=Ye.d.stats;n.rounds++,k.roundKO||wn("perfect"),n.rounds>=10&&wn("rounds10"),Lt(),setTimeout(pp,1200)};jt.hooks.waveEnd=()=>{C.players.forEach(n=>{n.cpu||!n.stats||(n.pid===k.myPid?k.onWaveStats(n.stats):ae.sendTo(n.pid,{t:"wave",st:n.stats}),n.helped=0,n.beamed=!1)})};jt.hooks.roundEnd=()=>{k.onRoundEnd(),k.mode==="host"&&ae.broadcast({t:"end"})};function wn(n){let e=ep(n);e&&(vt.achieve(),Sn(e.icon+" Achievement: "+e.name+"!","ach"))}var ip=performance.now(),lu=0,cu=0;function cp(n){requestAnimationFrame(cp);let e=Math.min(.05,(n-ip)/1e3);ip=n,k.paused&&k.mode==="solo"&&(e=0),hp(e),pd(e)}function hp(n){let e=k.W;if(k.mode==="solo"||k.mode==="host")np(n),Wd(n*k.simSpeed,e),C.fx.length&&ap(C.fx),C.msgs.length&&lp(C.msgs),k.mode==="host"&&(ae.queue(C.fx,C.msgs),lu+=n,lu>.1&&(lu=0,ae.snapshot())),C.fx=[],C.msgs=[];else if(k.mode==="guest"){np(n);for(let t of C.haz)t.t=Math.min(t.T,t.t+n);if(cu+=n,cu>.066){cu=0;let t=k.me;ae.send({t:"pose",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),yaw:+t.yaw.toFixed(2),an:t.an,sp:+(t.sp||0).toFixed(2),jet:!!t.jetOn})}}e&&(Ud(),Bd(C,e,n),Nd(),Od(n,k.me?{x:k.me.x,y:Math.max(k.me.y,0),z:k.me.z}:{x:0,y:0,z:0},N_()),P_(n),I_()),D_(n),k.mode!=="menu"&&(k_(n),z_())}function N_(){let n=C.env||{},e=C.phase==="active",t=k.me&&k.me.y<-22;return{rain:e&&!t&&n.rain||0,snow:e&&!t&&n.snow||0,ash:e&&!t&&n.ash||0,hail:e&&!t&&n.hail||0,wind:n.wind||0,groundY:k.me?Math.max(0,bn(k.W,k.me.x,k.me.z,200)):0}}function z_(){let n=C.env||{},e=C.phase==="active",t=k.me&&k.me.y<-22,i=t?.3:1;uo("wind",e?Math.min(.5,(n.wind||0)*.05)*i:.02),uo("rain",e?(n.rain||0)*.25*i:0),uo("rumble",(n.shake||0)*.6)}function O_(){return C.phase==="active"||C.phase==="warn"&&C.dz?Pt[C.dz].mood:k.W.meta.mood}function F_(){let n=document.createElement("div");n.id="hud",n.className="hidden",n.innerHTML=`<div id="hpBox"><button id="menuBtn" class="hudbtn">\u2630</button><div class="hpbar"><i id="hpFill"></i><span id="hpTxt">100</span></div></div>
  <div id="coinBox" class="pill"><span class="coinIc">\u2605</span><span id="coinTxt">0</span></div>
  <div id="waveBox"><div class="wavePill" id="wavePill">WAVE 1/5</div><div class="timer"><i id="timerFill"></i></div><div id="banner" class="banner hidden"><div class="t" id="banT"></div><div class="w" id="banW"></div></div><div id="safeChip" class="safe hidden"></div></div>
  <div id="calmCard" class="hidden"></div>
  <div id="toasts"></div>
  <div id="koBox" class="ko hidden"><div>\u{1F4AB} KNOCKED OUT!<br><small id="koTxt" style="font-size:14px"></small></div></div>
  <div id="joyHint">\u{1F446} Drag here to move</div>
  <div id="ctrls"><div id="gadCol" style="display:flex;flex-direction:column;gap:10px;align-items:center"><button id="bJet" class="cbtn gad hudbtn hidden">\u{1F680}</button><button id="bShield" class="cbtn gad hudbtn hidden">\u{1FAE7}</button></div><div style="display:flex;flex-direction:column;gap:12px;align-items:center"><button id="bAct" class="cbtn act hudbtn hidden">ENTER</button><button id="bJump" class="cbtn jump hudbtn">JUMP</button></div></div>
  <div id="joy"><div></div></div><div id="tags"></div><div id="fade"></div>`,Fe("ui").appendChild(n);let e=(i,s)=>{i.addEventListener("touchstart",r=>{r.preventDefault(),r.stopPropagation(),s()},{passive:!1}),i.addEventListener("mousedown",r=>{r.stopPropagation(),s()})};e(Fe("bJump"),()=>{We.jumpQ=!0}),e(Fe("bAct"),()=>{We.actQ=!0}),e(Fe("bShield"),()=>{We.shieldQ=!0});let t=Fe("bJet");t.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),We.jet=!0},{passive:!1}),t.addEventListener("touchend",()=>We.jet=!1),t.addEventListener("mousedown",i=>{i.stopPropagation(),We.jet=!0}),window.addEventListener("mouseup",()=>We.jet=!1),Fe("menuBtn").addEventListener("click",q_)}function up(){Fe("bShield").classList.toggle("hidden",!mn("shield")),Fe("bJet").classList.toggle("hidden",!mn("jetpack"))}var sp=-1;var hu=new Map;function k_(n){let e=k.me,t=k.W;if(!e)return;let i=C.players.find(v=>v.id===e.id)||e;k.mode==="guest"&&(e.hp=i.hp,e.max=i.max,e.st=i.st,e.sh=i.sh,e.inv=i.inv);let s=Math.max(0,i.hp),r=i.max||100;Fe("hpFill").style.width=100*s/r+"%",Fe("hpFill").classList.toggle("low",s/r<.35),Fe("hpTxt").textContent=Math.ceil(s)+" / "+r,Ye.d.coins!==sp&&(sp=Ye.d.coins,Fe("coinTxt").textContent=Ye.d.coins);let o=C.phase+C.wave;o!==k.lastPhase&&(k.lastPhase=o,to(O_()),C.phase==="warn"&&(vt.siren(),Sn(Pt[C.dz].icon+" "+gi(C.dz,t)+" WARNING!")),C.phase,C.phase==="calm"&&C.wave>0&&vt.win());let a=Fe("wavePill"),l=Fe("timerFill"),c=Fe("banner"),u=Fe("safeChip");if(C.phase==="calm")a.textContent=C.wave===0?"GET READY! "+Math.ceil(C.t):"BREAK - WAVE "+(C.wave+1)+"/"+C.waves+" IN "+Math.ceil(C.t),l.style.width=Math.max(0,C.t/14*100)+"%",c.classList.add("hidden"),u.classList.add("hidden");else if(C.phase==="warn"||C.phase==="active"){let v=Pt[C.dz];a.textContent="WAVE "+C.wave+"/"+C.waves+(C.phase==="warn"?"  \u26A0\uFE0F "+Math.ceil(C.t):"  \u23F1 "+Math.ceil(C.t)),l.style.width=(C.phase==="warn"?C.t/7:C.t/(C.dzDur||30))*100+"%",c.classList.remove("hidden"),c.style.borderColor=v.color,Fe("banT").style.color=v.color,Fe("banT").textContent=v.icon+" "+gi(C.dz,t),Fe("banW").textContent=C.phase==="warn"?v.warn:v.tip,c.classList.toggle("flash",C.phase==="warn");let y=$t(t,e),O=e.st==="ok"?v.safe(e,y,C,t):null;u.classList.remove("hidden"),e.st!=="ok"?(u.className="safe meh",u.textContent=e.st==="float"?"\u{1F6F8} BEAMED UP!":"\u{1F4AB} Knocked out"):O==="maybe"?(u.className="safe meh",u.textContent="\u{1F7E1} Pretty safe - sturdier is better!"):O?(u.className="safe ok",u.textContent="\u2705 SAFE: "+O):(u.className="safe bad",u.textContent="\u26A0\uFE0F DANGER! Follow the green arrow")}else c.classList.add("hidden"),u.classList.add("hidden");let h=C.phase==="warn"||C.phase==="active"?Pt[C.dz]:null,f=!1;if(h&&e.st==="ok"){let v=$t(t,e),y=h.safe(e,v,C,t);if(!y||y==="maybe"){let O=Xd(e,t);if(O){f=!0;let P=Math.atan2(O.x-e.x,O.z-e.z);X.arrow.position.set(e.x+Math.sin(P)*1.4,e.y+2.4+Math.sin(W.t*5)*.1,e.z+Math.cos(P)*1.4),X.arrow.rotation.set(0,P,0),X.beacon.visible=!0,X.beacon.position.set(O.x,O.y+15,O.z)}}}X.arrow.visible=f,f||(X.beacon.visible=!1);let d=e.st==="ok"?Ka(t,e.x,e.y,e.z):null,g=Fe("bAct");d?(g.classList.remove("hidden"),g.textContent=d.label):g.classList.add("hidden"),Fe("koBox").classList.toggle("hidden",i.st!=="ko"),i.st==="ko"&&(Fe("koTxt").textContent=i.rev>0?"A friend is helping you up! \u{1F91D}":"Back in "+Math.max(0,Math.ceil(i.koT||0))+"...");let x=Fe("calmCard");if(C.phase==="calm"&&k.mode!=="guest"){x.classList.remove("hidden");let y="NEXT: "+(C.picked?Pt[C.next].icon+" "+gi(C.next,t):"\u{1F3B2} Random")+(C.picked?"":' <button class="btn gold small" id="bPick">\u{1F3AF} PICK 40</button>');if(x._h!==y){x._h=y,x.innerHTML=y;let O=Fe("bPick");O&&(O.onclick=dp)}}else if(C.phase==="calm"&&k.mode==="guest"){x.classList.remove("hidden");let v="NEXT: "+(C.picked?Pt[C.next].icon+" "+gi(C.next,t):"\u{1F3B2} Random")+" <small>(host picks)</small>";x._h!==v&&(x._h=v,x.innerHTML=v)}else x.classList.add("hidden");Fe("joyHint").style.display=C.wave===0&&C.phase==="calm"?"":"none";let m=Fe("tags"),p=new Set,w=new D;for(let v of C.players){if(v.id===e.id)continue;let y=v.st==="ko",O=!v.cpu&&k.mode!=="solo";if(!y&&!O)continue;let P=k.models.get(v.id);if(!P||(w.set(P.root.position.x,P.root.position.y+2.5,P.root.position.z).project(W.camera),w.z>1||Math.abs(w.x)>1.1||Math.abs(w.y)>1.1))continue;let T=hu.get(v.id);T||(T=document.createElement("div"),m.appendChild(T),hu.set(v.id,T)),p.add(v.id),T.className="tag"+(y?" help":""),T.textContent=y?"\u{1F4AB} HELP "+v.name+"!":v.name,T.style.left=(w.x+1)/2*innerWidth+"px",T.style.top=(1-w.y)/2*innerHeight+"px",T.style.display=""}hu.forEach((v,y)=>{p.has(y)||(v.style.display="none")})}function B_(){let n=Fe("fade");n.style.background="#ff2d55",n.style.opacity=.35,setTimeout(()=>{n.style.opacity=0},120)}function H_(){let n=Fe("fade");n.style.background="#000",n.style.opacity=.7,setTimeout(()=>n.style.opacity=0,160)}function V_(){Fe("coinBox").animate([{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:250})}function Sn(n,e){let t=Fe("toasts")||Fe("ui");if(!t||!n)return;let i=document.createElement("div");for(i.className="toast "+(e||""),i.textContent=n,t.appendChild(i);t.children.length>4;)t.removeChild(t.firstChild);setTimeout(()=>i.remove(),2600)}k.toast=Sn;function Mi(n,e,t={}){_i();let i=document.createElement("div");return i.className="panelWrap",i.id="panel",i.innerHTML='<div class="panel">'+n+"</div>",Fe("ui").appendChild(i),i.querySelectorAll("[data-close]").forEach(s=>s.addEventListener("click",()=>{vt.click(),_i(),t.onClose&&t.onClose()})),e&&e(i),k.panelName=t.name||"panel",k.mode==="solo"&&t.pause&&(k.paused=!0),i}function _i(){let n=Fe("panel");n&&n.remove(),k.paused=!1,k.panelName=null}k.hidePanels=_i;function G_(){Fe("title").classList.remove("hidden"),Fe("titleCoins").textContent=Ye.d.coins,k.W&&k.W.id!=="city"&&!k.W&&ys("city")}function W_(){let n=document.createElement("div");n.id="title",n.innerHTML=`<div style="width:100%"><div id="topbar"><span class="pill"><span class="coinIc">\u2605</span><span id="titleCoins">0</span></span><button class="btn gray small" id="tGfx">\u2699\uFE0F</button></div>
  <div class="logo" style="margin-top:56px"><div class="l1">GROK</div><div class="l2">DISASTER ZONE</div><div class="tag">Survive kaiju, tornadoes, meteors & more!</div></div></div>
  <div class="menuCol"><button class="btn green" id="tPlay" style="font-size:24px;padding:18px">\u25B6 PLAY</button><button class="btn pink" id="tOnline">\u{1F91D} PLAY WITH FRIENDS</button>
  <div class="menuRow"><button class="btn gold" id="tShop">\u{1F6D2} SHOP</button><button class="btn purple" id="tTroph">\u{1F3C6} TROPHIES</button></div><button class="btn" id="tHow">\u2753 HOW TO PLAY</button></div>`,Fe("ui").appendChild(n),Fe("tPlay").onclick=()=>{vt.click(),gs(),fp()},Fe("tOnline").onclick=()=>{vt.click(),gs(),ae.lobby()},Fe("tShop").onclick=()=>{vt.click(),gs(),Hn()},Fe("tTroph").onclick=()=>{vt.click(),Y_()},Fe("tHow").onclick=()=>{vt.click(),fu()},Fe("tGfx").onclick=()=>{vt.click(),go()}}function fp(n){let e=k.W?k.W.id:"area51",t=()=>Mi(`<h2>\u{1F5FA}\uFE0F PICK A MAP</h2><p class="sub">Disasters are random, or pay coins between waves to pick the next one!</p><div class="cards">${Zh.map(i=>`<div class="card ${i.id===e?"sel":""}" data-m="${i.id}"><div class="em">${i.emoji}</div><b>${i.name}</b><small>${i.desc}</small></div>`).join("")}</div>
    <div class="btnrow"><button class="btn gray" data-close>BACK</button><button class="btn green" id="mGo">${n?"START FOR ALL":"START!"}</button></div>`,i=>{i.querySelectorAll("[data-m]").forEach(s=>s.onclick=()=>{vt.click(),e=s.dataset.m,ys(e),t()}),Fe("mGo").onclick=()=>{vt.click(),_i(),n?ae.start(e):k.startSolo(e)}},{name:"maps",onClose:n?()=>ae.roomPanel():null});t()}k.showMapPick=fp;function dp(){if(C.phase!=="calm")return;let n=40;Mi(`<h2>\u{1F3AF} PICK THE NEXT DISASTER</h2><p class="sub">Costs <b>${n}</b> coins. You have <b>${Ye.d.coins}</b>.</p><div class="dzGrid">${pr.map(e=>`<button data-d="${e}"><span>${Pt[e].icon}</span>${gi(e,k.W)}</button>`).join("")}</div><div class="btnrow"><button class="btn gray" data-close>KEEP RANDOM</button></div>`,e=>{e.querySelectorAll("[data-d]").forEach(t=>t.onclick=()=>{if(Ye.d.coins<n){Sn("Not enough coins! Survive more waves \u{1F4AA}");return}if(C.phase!=="calm")return _i();po(-n),Ye.d.stats.picks++,Lt(),Gd(t.dataset.d),vt.cash(),Sn("\u{1F4B8} CHA-CHING! Next up: "+Pt[t.dataset.d].icon+" "+gi(t.dataset.d,k.W),"gold"),wn("picker"),_i()})},{name:"picker"})}k.showPicker=dp;function Hn(n="upg"){let e=Ye.d,t=iu.map(o=>{let a=mn(o.id),l=o.prices.length,c=o.prices[a];return`<div class="item"><div class="ic">${o.icon}</div><div class="grow"><b>${o.name}</b><small>${o.desc}</small><div class="lv">${o.prices.map((u,h)=>`<i class="${h<a?"on":""}"></i>`).join("")}</div></div>${a>=l?'<button class="btn gray small" disabled>MAX</button>':`<button class="btn gold small" data-buy="${o.id}">${c}</button>`}</div>`}).join(""),i=su.map(o=>{let a=e.hats.includes(o.id),l=e.look.hat===o.id;return`<div class="item"><div class="ic">${{cap:"\u{1F9E2}",beanie:"\u{1F9F6}",party:"\u{1F973}",cowboy:"\u{1F920}",chef:"\u{1F468}\u200D\u{1F373}",dino:"\u{1F996}",astro:"\u{1F469}\u200D\u{1F680}",crown:"\u{1F451}",none:"\u{1F642}"}[o.id]}</div><div class="grow"><b>${o.name}</b></div>${l?'<button class="btn green small" disabled>ON</button>':a?`<button class="btn small" data-hat="${o.id}">WEAR</button>`:`<button class="btn gold small" data-hatbuy="${o.id}">${o.price}</button>`}</div>`}).join(""),s=o=>"#"+o.toString(16).padStart(6,"0"),r=`<h3>SHIRT</h3><div class="swatches">${ru.map(o=>`<button data-shirt="${o}" class="${e.look.shirt===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>HAT COLOR</h3><div class="swatches">${ru.map(o=>`<button data-hc="${o}" class="${e.look.hatColor===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>SKIN</h3><div class="swatches">${[16173472,14723449,12155471,9067067,16767416].map(o=>`<button data-skin="${o}" class="${e.look.skin===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>NAME</h3><input class="name" id="nameIn" maxlength="12" placeholder="Your name" value="${op(e.name)}">`;Mi(`<h2>\u{1F6D2} SHOP</h2><p class="sub"><span class="pill"><span class="coinIc">\u2605</span>${e.coins}</span></p><div class="tabs"><button data-tab="upg" class="${n==="upg"?"on":""}">\u2B06\uFE0F UPGRADES</button><button data-tab="hats" class="${n==="hats"?"on":""}">\u{1F3A9} HATS</button><button data-tab="look" class="${n==="look"?"on":""}">\u{1F3A8} LOOK</button></div>${n==="upg"?t:n==="hats"?i:r}<div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`,o=>{o.querySelectorAll("[data-tab]").forEach(l=>l.onclick=()=>{vt.click(),Hn(l.dataset.tab)}),o.querySelectorAll("[data-buy]").forEach(l=>l.onclick=()=>{let c=iu.find(f=>f.id===l.dataset.buy),u=mn(c.id),h=c.prices[u];if(e.coins<h)return Sn("Not enough coins yet!");po(-h),e.upg[c.id]=u+1,Lt(),vt.cash(),Sn("\u2728 "+c.name+" Lv"+(u+1)+"!","gold"),X_(),Hn("upg")}),o.querySelectorAll("[data-hatbuy]").forEach(l=>l.onclick=()=>{let c=su.find(u=>u.id===l.dataset.hatbuy);if(e.coins<c.price)return Sn("Not enough coins yet!");po(-c.price),e.hats.push(c.id),e.look.hat=c.id,Lt(),vt.cash(),mo(),Hn("hats")}),o.querySelectorAll("[data-hat]").forEach(l=>l.onclick=()=>{e.look.hat=l.dataset.hat,Lt(),vt.click(),mo(),Hn("hats")}),o.querySelectorAll("[data-shirt]").forEach(l=>l.onclick=()=>{e.look.shirt=+l.dataset.shirt,Lt(),vt.click(),mo(),Hn("look")}),o.querySelectorAll("[data-hc]").forEach(l=>l.onclick=()=>{e.look.hatColor=+l.dataset.hc,Lt(),vt.click(),mo(),Hn("look")}),o.querySelectorAll("[data-skin]").forEach(l=>l.onclick=()=>{e.look.skin=+l.dataset.skin,Lt(),vt.click(),mo(),Hn("look")});let a=o.querySelector("#nameIn");a&&(a.onchange=()=>{e.name=a.value.replace(/[<>&"]/g,"").trim().slice(0,12),Lt()})},{name:"shop",pause:!0,onClose:()=>{let o=Fe("titleCoins");o&&(o.textContent=Ye.d.coins)}})}k.showShop=Hn;function X_(){let n=xs();if(k.me){k.me.upg=n;let e=C.players.find(t=>t.id===k.me.id);e&&k.mode!=="guest"&&(e.upg=n,e.max=gr(n))}up(),k.mode==="guest"&&ae.hello()}function mo(){if(k.me){let n=C.players.find(e=>e.id===k.me.id);n&&(n.look=Object.assign({},Ye.d.look)),k.me.look=n?n.look:Ye.d.look}k.mode==="guest"&&ae.hello()}function Y_(){let n=Ye.d.stats;Mi(`<h2>\u{1F3C6} TROPHIES</h2><div class="statGrid"><div><b>${n.rounds}</b>Rounds</div><div><b>${n.waves}</b>Disasters survived</div><div><b>${n.revives}</b>Friends helped</div><div><b>${n.earned}</b>Coins earned</div><div><b>${n.kos}</b>Knockouts</div><div><b>${Object.keys(n.survived).length}/9</b>Disaster types</div></div><h3>ACHIEVEMENTS (${Object.keys(Ye.d.ach).length}/${cl.length})</h3>${cl.map(e=>`<div class="ach ${Ye.d.ach[e.id]?"on":""}"><div class="ic">${e.icon}</div><div><b>${e.name}</b><br><small>${e.desc}</small></div></div>`).join("")}<h3>SURVIVED</h3><div class="statGrid">${pr.map(e=>`<div><b>${Pt[e].icon} ${n.survived[e]||0}</b>${Pt[e].name}</div>`).join("")}</div><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`,null,{name:"trophies",pause:!0})}function fu(){Mi(`<h2>\u2753 HOW TO PLAY</h2><div class="howto"><div class="row"><span>\u{1F579}\uFE0F</span><p>Drag the <b>left side</b> to run. Drag the <b>right side</b> to look around, pinch to zoom. Tap <b>JUMP</b> to jump.</p></div>
  <div class="row"><span>\u{1F6A8}</span><p>When the siren goes off, read the warning and <b>follow the green arrow</b> to a safe spot before time runs out!</p></div>
  <div class="row"><span>\u{1F3E0}</span><p>Walk into buildings through the door. Glowing pads take you <b>down to basements</b> \u2B07 or <b>up to rooftops</b> \u2B06 - tap the yellow button.</p></div>
  <div class="row"><span>\u{1F6E1}\uFE0F</span><p>Each disaster has its own safe spots: <b>underground</b> for kaiju, <b>high ground</b> for tsunamis, <b>under tables</b> for earthquakes, <b>indoors</b> for lightning, hail and UFOs.</p></div>
  <div class="row"><span>\u{1F4AB}</span><p>Get knocked out? Wait a moment, or a friend can stand next to you to <b>help you up</b>. Helping others earns coins!</p></div>
  <div class="row"><span>\u{1FA99}</span><p>Earn coins for surviving, helping and grabbing coins. Spend them in the <b>Shop</b>, or pay 40 to <b>pick the next disaster</b>. Cha-ching!</p></div></div>
  <div class="btnrow"><button class="btn green" data-close>GOT IT!</button></div>`,null,{name:"howto",pause:!0})}function go(){Mi(`<h2>\u2699\uFE0F SETTINGS</h2><h3>GRAPHICS</h3><div class="tabs"><button data-g="high" class="${W.quality==="high"?"on":""}">\u2728 HIGH</button><button data-g="low" class="${W.quality==="low"?"on":""}">\u26A1 LOW</button></div><p class="sub">HIGH has soft shadows, glow and ambient occlusion. LOW runs smoother on older phones. The game switches to LOW by itself if it gets slow.</p><h3>SOUND</h3><div class="tabs"><button data-s="1" class="${Ye.d.opts.sound?"on":""}">\u{1F50A} ON</button><button data-s="0" class="${Ye.d.opts.sound?"":"on"}">\u{1F507} OFF</button></div><div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`,n=>{n.querySelectorAll("[data-g]").forEach(e=>e.onclick=()=>{eo(e.dataset.g),Ye.d.opts.gfx=e.dataset.g,Lt(),go()}),n.querySelectorAll("[data-s]").forEach(e=>e.onclick=()=>{Ye.d.opts.sound=e.dataset.s==="1",tu(Ye.d.opts.sound),Lt(),go()})},{name:"settings",pause:!0})}k.showSettings=go;function q_(){Mi(`<h2>\u23F8\uFE0F PAUSED</h2>${k.mode!=="solo"?'<p class="sub">Online games keep going while this menu is open.</p>':""}<div class="menuCol" style="margin:0 auto"><button class="btn green" data-close>\u25B6 RESUME</button><button class="btn gold" id="pShop">\u{1F6D2} SHOP</button><button class="btn" id="pHow">\u2753 HOW TO PLAY</button><button class="btn purple" id="pSet">\u2699\uFE0F SETTINGS</button><button class="btn pink" id="pQuit">\u{1F6AA} QUIT TO MENU</button></div>`,n=>{Fe("pShop").onclick=()=>Hn(),Fe("pHow").onclick=fu,Fe("pSet").onclick=go,Fe("pQuit").onclick=()=>k.quit()},{name:"pause",pause:!0})}function pp(){let n=C.players.find(e=>e.id===(k.me&&k.me.id));Mi(`<div class="big">\u{1F3C6}</div><h2>ROUND COMPLETE!</h2><p class="sub">You survived ${C.waves} disasters on ${k.W.meta.name}!</p>
  <div class="res"><span>\u{1FA99} Coins earned</span><span>+${k.roundCoins}</span></div><div class="res"><span>\u{1F4AB} Knockouts</span><span>${n?n.kos:0}</span></div><div class="res"><span>\u{1F91D} Friends helped</span><span>${n?n.revives:0}</span></div>${k.roundKO?"":'<div class="res" style="background:#dcfce7"><span>\u{1F6E1}\uFE0F UNTOUCHABLE!</span><span>No knockouts</span></div>'}
  <div class="btnrow">${k.mode==="guest"?'<button class="btn gray" id="rLeave">LEAVE</button><button class="btn" disabled>Waiting for host\u2026</button>':'<button class="btn gray" id="rMenu">MENU</button><button class="btn green" id="rAgain">PLAY AGAIN</button>'}</div><div class="btnrow"><button class="btn gold" id="rShop">\u{1F6D2} SHOP</button></div>`,e=>{let t=Fe("rMenu");t&&(t.onclick=()=>k.quit());let i=Fe("rLeave");i&&(i.onclick=()=>k.quit());let s=Fe("rAgain");s&&(s.onclick=()=>{_i(),k.mode==="host"?k.startHosted(k.W.id,ae.humans()):k.startSolo(k.W.id)}),Fe("rShop").onclick=()=>Hn()},{name:"results"})}k.showResults=pp;k.panel=Mi;k.esc=op;k.loadMap=ys;k.handleFx=ap;k.handleMsgs=lp;k.achieve=wn;F_();W_();ys(hl.get("map")||"city");Fe("titleCoins").textContent=Ye.d.coins;ae.init(k);requestAnimationFrame(cp);k.ready=!0;k.sim=(n,e=.05)=>{for(let t=0;t<n;t+=e)hp(e)};k.wreck=n=>ur(k.W,k.W.root,n);k.force=n=>{C.phase==="calm"&&(C.next=n,C.picked=!0,C.t=.01,k.sim(7.2))};k.tp=(n,e,t)=>{let i=k.me;i.x=n,i.y=e,i.z=t,i.vy=0;let s=C.players.find(r=>r.id===i.id);s&&s!==i&&(s.x=n,s.y=e,s.z=t)};k.setMood=to;k.SV=Ye;k.save=Lt;k.DZ=Pt;k.H=jt;k.shelter=$t;k.Net=ae;var rp=window.GrokNet&&GrokNet.params&&GrokNet.params();rp&&ae.fromParams(rp);})();
