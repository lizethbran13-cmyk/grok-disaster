(()=>{var Hp=0,Fu=1,Vp=2;var Ga=1,Wa=2,pi=3,Qn=0,$t=1,Pt=2,Vt=0,Xs=1,Bi=2,Bu=3,Hu=4,Ih=5,In=100,Gp=101,Wp=102,Xp=103,Yp=104,cr=200,qp=201,Zp=202,$p=203,oc=204,ac=205,Xa=206,jp=207,Ya=208,Jp=209,Kp=210,Qp=211,e0=212,t0=213,n0=214,lc=0,cc=1,hc=2,$s=3,uc=4,fc=5,dc=6,pc=7,nd=0,i0=1,s0=2,Fi=0,Dh=1,Lh=2,Uh=3,Nh=4,r0=5,zh=6,to=7;var id=300,js=301,Js=302,mc=303,gc=304,qa=306,vi=1e3,as=1001,xc=1002,an=1003,o0=1004;var Co=1005;var Sn=1006,Tl=1007;var ls=1008;var Gn=1009,sd=1010,rd=1011,Gr=1012,Oh=1013,cs=1014,Kn=1015,xn=1016,kh=1017,Fh=1018,Hi=1020,od=35902,ad=1021,ld=1022,En=1023,cd=1024,hd=1025,Ys=1026,Vi=1027,Bh=1028,Hh=1029,ud=1030,Vh=1031;var Gh=1033,ra=33776,oa=33777,aa=33778,la=33779,vc=35840,yc=35841,_c=35842,Mc=35843,bc=36196,wc=37492,Sc=37496,Ec=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Dc=37815,Lc=37816,Uc=37817,Nc=37818,zc=37819,Oc=37820,kc=37821,ca=36492,Fc=36494,Bc=36495,fd=36283,Hc=36284,Vc=36285,Gc=36286;var ha=2300,Wc=2301,Al=2302,Vu=2400,Gu=2401,Wu=2402;var a0=3200,l0=3201;var Wh=0,c0=1,ki="",rn="srgb",hr="srgb-linear",Za="linear",vt="srgb";var As=7680;var Xu=519,h0=512,u0=513,f0=514,dd=515,d0=516,p0=517,m0=518,g0=519,Yu=35044,pd=35048;var qu="300 es",gi=2e3,ua=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,Or=Math.PI/180,Wr=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function Xh(n,e){return(n%e+e)%e}function x0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function v0(n,e,t){return n!==e?(t-n)/(e-n):0}function kr(n,e,t){return(1-t)*n+t*e}function y0(n,e,t,i){return kr(n,e,1-Math.exp(-t*i))}function _0(n,e=1){return e-Math.abs(Xh(n,e*2)-e)}function M0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function b0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function w0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function S0(n,e){return n+Math.random()*(e-n)}function E0(n){return n*(.5-Math.random())}function T0(n){n!==void 0&&(Zu=n);let e=Zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A0(n){return n*Or}function R0(n){return n*Wr}function C0(n){return(n&n-1)===0&&n!==0}function P0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function D0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Yh={DEG2RAD:Or,RAD2DEG:Wr,generateUUID:ps,clamp:Ht,euclideanModulo:Xh,mapLinear:x0,inverseLerp:v0,lerp:kr,damp:y0,pingpong:_0,smoothstep:M0,smootherstep:b0,randInt:w0,randFloat:S0,randFloatSpread:E0,seededRandom:T0,degToRad:A0,radToDeg:R0,isPowerOfTwo:C0,ceilPowerOfTwo:P0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:D0,normalize:cn,denormalize:Vs},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],x=s[0],g=s[3],m=s[6],b=s[1],y=s[4],v=s[7],U=s[2],I=s[5],D=s[8];return r[0]=o*x+a*b+l*U,r[3]=o*g+a*y+l*I,r[6]=o*m+a*v+l*D,r[1]=c*x+u*b+h*U,r[4]=c*g+u*y+h*I,r[7]=c*m+u*v+h*D,r[2]=d*x+f*b+p*U,r[5]=d*g+f*y+p*I,r[8]=d*m+f*v+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new nt;function md(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function L0(){let n=fa("canvas");return n.style.display="block",n}var $u={};function Nr(n){n in $u||($u[n]=!0,console.warn(n))}function U0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function N0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function z0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(n.r=qs(n.r),n.g=qs(n.g),n.b=qs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ki?Za:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ju=[.64,.33,.3,.6,.15,.06],Ju=[.2126,.7152,.0722],Ku=[.3127,.329],Qu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[hr]:{primaries:ju,whitePoint:Ku,transfer:Za,toXYZ:Qu,fromXYZ:ef,luminanceCoefficients:Ju,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:ju,whitePoint:Ku,transfer:vt,toXYZ:Qu,fromXYZ:ef,luminanceCoefficients:Ju,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});var Rs,Xc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=fa("canvas")),Rs.width=e.width,Rs.height=e.height;let i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cl(s[o].image)):r.push(Cl(s[o]))}else r=Cl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var k0=0,gn=class n extends Gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=as,s=as,r=Sn,o=ls,a=En,l=Gn,c=n.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ps(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=id;gn.DEFAULT_ANISOTROPY=1;var Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(f+1)/2,U=(m+1)/2,I=(u+d)/4,D=(h+x)/4,w=(p+g)/4;return y>v&&y>U?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=I/i,r=D/i):v>U?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=I/s,r=w/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=w/r),this.set(i,s,r,t),this}let b=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yc=class extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Yc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pa=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qc=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*x,b=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let U=Math.sqrt(y),I=Math.atan2(U,m*b);g=Math.sin(g*I)/U,a=Math.sin(a*I)/U}let v=a*b;if(l=l*g+d*v,c=c*g+f*v,u=u*g+p*v,h=h*g+x*v,g===1-a){let U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new L,tf=new ei,yi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Io.subVectors(this.max,Ar),Cs.subVectors(e.a,Ar),Ps.subVectors(e.b,Ar),Is.subVectors(e.c,Ar),Di.subVectors(Ps,Cs),Li.subVectors(Is,Ps),Ki.subVectors(Cs,Is);let t=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-Ki.z,Ki.y,Di.z,0,-Di.x,Li.z,0,-Li.x,Ki.z,0,-Ki.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-Ki.y,Ki.x,0];return!Il(t,Cs,Ps,Is,Io)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Cs,Ps,Is,Io))?!1:(Do.crossVectors(Di,Li),t=[Do.x,Do.y,Do.z],Il(t,Cs,Ps,Is,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,Po=new yi,Cs=new L,Ps=new L,Is=new L,Di=new L,Li=new L,Ki=new L,Ar=new L,Io=new L,Do=new L,Qi=new L;function Il(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var F0=new yi,Rr=new L,Dl=new L,_i=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):F0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Dl)),this.expandByPoint(Rr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new L,Ll=new L,Lo=new L,Ui=new L,Ul=new L,Uo=new L,Nl=new L,Xr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ll.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ll);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Ui.dot(this.direction),l=-Ui.dot(Lo),c=Ui.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ll).addScaledVector(Lo,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){Ul.subVectors(t,e),Uo.subVectors(i,e),Nl.crossVectors(Ul,Uo);let o=this.direction.dot(Nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let l=a*this.direction.dot(Uo.crossVectors(Ui,Uo));if(l<0)return null;let c=a*this.direction.dot(Ul.cross(Ui));if(c<0||l+c>o)return null;let u=-a*Ui.dot(Nl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class n{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,H0)}lookAt(e,t,i){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ni.crossVectors(i,bn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ni.crossVectors(i,bn)),Ni.normalize(),No.crossVectors(bn,Ni),s[0]=Ni.x,s[4]=No.x,s[8]=bn.x,s[1]=Ni.y,s[5]=No.y,s[9]=bn.y,s[2]=Ni.z,s[6]=No.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],b=i[3],y=i[7],v=i[11],U=i[15],I=s[0],D=s[4],w=s[8],_=s[12],M=s[1],R=s[5],k=s[9],z=s[13],X=s[2],O=s[6],Y=s[10],J=s[14],Z=s[3],Q=s[7],ae=s[11],ye=s[15];return r[0]=o*I+a*M+l*X+c*Z,r[4]=o*D+a*R+l*O+c*Q,r[8]=o*w+a*k+l*Y+c*ae,r[12]=o*_+a*z+l*J+c*ye,r[1]=u*I+h*M+d*X+f*Z,r[5]=u*D+h*R+d*O+f*Q,r[9]=u*w+h*k+d*Y+f*ae,r[13]=u*_+h*z+d*J+f*ye,r[2]=p*I+x*M+g*X+m*Z,r[6]=p*D+x*R+g*O+m*Q,r[10]=p*w+x*k+g*Y+m*ae,r[14]=p*_+x*z+g*J+m*ye,r[3]=b*I+y*M+v*X+U*Z,r[7]=b*D+y*R+v*O+U*Q,r[11]=b*w+y*k+v*Y+U*ae,r[15]=b*_+y*z+v*J+U*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],b=h*g*c-x*d*c+x*l*f-a*g*f-h*l*m+a*d*m,y=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,v=u*x*c-p*h*c+p*a*f-o*x*f-u*a*m+o*h*m,U=p*h*l-u*x*l-p*a*d+o*x*d+u*a*g-o*h*g,I=t*b+i*y+s*v+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=b*D,e[1]=(x*d*r-h*g*r-x*s*f+i*g*f+h*s*m-i*d*m)*D,e[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*D,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*D,e[4]=y*D,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*m+t*d*m)*D,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*D,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*D,e[8]=v*D,e[9]=(p*h*r-u*x*r-p*i*f+t*x*f+u*i*m-t*h*m)*D,e[10]=(o*x*r-p*a*r+p*i*c-t*x*c-o*i*m+t*a*m)*D,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*D,e[12]=U*D,e[13]=(u*x*s-p*h*s+p*i*d-t*x*d-u*i*g+t*h*g)*D,e[14]=(p*a*s-o*x*s-p*i*l+t*x*l+o*i*g-t*a*g)*D,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,g=o*h,m=a*h,b=l*c,y=l*u,v=l*h,U=i.x,I=i.y,D=i.z;return s[0]=(1-(x+m))*U,s[1]=(f+v)*U,s[2]=(p-y)*U,s[3]=0,s[4]=(f-v)*I,s[5]=(1-(d+m))*I,s[6]=(g+b)*I,s[7]=0,s[8]=(p+y)*D,s[9]=(g-b)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ds.set(s[0],s[1],s[2]).length(),o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let c=1/r,u=1/o,h=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=gi){let l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),f,p;if(a===gi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ua)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=gi){let l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,f=(i+s)*u,p,x;if(a===gi)p=(o+r)*h,x=-2*h;else if(a===ua)p=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ds=new L,Hn=new Ye,B0=new L(0,0,0),H0=new L(1,1,1),Ni=new L,No=new L,bn=new L,nf=new Ye,sf=new ei,Dn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V0=0,rf=new L,Ls=new ei,ui=new Ye,zo=new L,Cr=new L,G0=new L,W0=new ei,of=new L(1,0,0),af=new L(0,1,0),lf=new L(0,0,1),cf={type:"added"},X0={type:"removed"},Us={type:"childadded",child:null},zl={type:"childremoved",child:null},kt=class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Dn,i=new ei,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new nt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(lf,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zo.copy(e):zo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Cr,zo,this.up):ui.lookAt(zo,Cr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ui),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),zl.child=e,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new L,fi=new L,Ol=new L,di=new L,Ns=new L,zs=new L,hf=new L,kl=new L,Fl=new L,Bl=new L,Hl=new Mt,Vl=new Mt,Gl=new Mt,rs=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),fi.subVectors(i,t),Ol.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(fi),l=Vn.dot(Ol),c=fi.dot(fi),u=fi.dot(Ol),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Hl.setScalar(0),Vl.setScalar(0),Gl.setScalar(0),Hl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hl,r.x),o.addScaledVector(Vl,r.y),o.addScaledVector(Gl,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),fi.subVectors(e,t),Vn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Vn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,i),zs.subVectors(r,i),kl.subVectors(e,i);let l=Ns.dot(kl),c=zs.dot(kl);if(l<=0&&c<=0)return t.copy(i);Fl.subVectors(e,s);let u=Ns.dot(Fl),h=zs.dot(Fl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ns,o);Bl.subVectors(e,r);let f=Ns.dot(Bl),p=zs.dot(Bl);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(zs,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return hf.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(hf,a);let m=1/(g+x+d);return o=x*m,a=d*m,t.copy(i).addScaledVector(Ns,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=Xh(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Wl(o,r,e+1/3),this.g=Wl(o,r,e),this.b=Wl(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let i=gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return ht.fromWorkingColorSpace(sn.copy(this),e),Math.round(Ht(sn.r*255,0,255))*65536+Math.round(Ht(sn.g*255,0,255))*256+Math.round(Ht(sn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=rn){ht.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,s=sn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Oo);let i=kr(zi.h,Oo.h,t),s=kr(zi.s,Oo.s,t),r=kr(zi.l,Oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new De;De.NAMES=gd;var Y0=0,ti=class extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ps(),this.name="",this.blending=Xs,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oc&&(i.blendSrc=this.blendSrc),this.blendDst!==ac&&(i.blendDst=this.blendDst),this.blendEquation!==In&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bt=class extends ti{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new L,ko=new re,Tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}};var ga=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xa=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var at=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},q0=0,Pn=new Ye,Xl=new kt,Os=new L,wn=new yi,Pr=new yi,Zt=new L,It=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?xa:ga)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(wn.min,Pr.min),wn.expandByPoint(Zt),Zt.addVectors(wn.max,Pr.max),wn.expandByPoint(Zt)):(wn.expandByPoint(Pr.min),wn.expandByPoint(Pr.max))}wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Zt.add(Os)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new L,l[w]=new L;let c=new L,u=new L,h=new L,d=new re,f=new re,p=new re,x=new L,g=new L;function m(w,_,M){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,_),p.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(R),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),a[w].add(x),a[_].add(x),a[M].add(x),l[w].add(g),l[_].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,_=b.length;w<_;++w){let M=b[w],R=M.start,k=M.count;for(let z=R,X=R+k;z<X;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new L,v=new L,U=new L,I=new L;function D(w){U.fromBufferAttribute(s,w),I.copy(U);let _=a[w];y.copy(_),y.sub(U.multiplyScalar(U.dot(_))).normalize(),v.crossVectors(I,_);let R=v.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,R)}for(let w=0,_=b.length;w<_;++w){let M=b[w],R=M.start,k=M.count;for(let z=R,X=R+k;z<X;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uf=new Ye,es=new Xr,Fo=new _i,ff=new L,Bo=new L,Ho=new L,Vo=new L,Yl=new L,Go=new L,df=new L,Wo=new L,Ee=class extends kt{constructor(e=new It,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Yl.fromBufferAttribute(h,e),o?Go.addScaledVector(Yl,u):Go.addScaledVector(Yl.sub(t),u))}t.add(Go)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Fo.containsPoint(es.origin)===!1&&(es.intersectSphere(Fo,ff)===null||es.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(uf.copy(r).invert(),es.copy(e.ray).applyMatrix4(uf),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,U=y;v<U;v+=3){let I=a.getX(v),D=a.getX(v+1),w=a.getX(v+2);s=Xo(this,m,e,i,c,u,h,I,D,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);s=Xo(this,o,e,i,c,u,h,b,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,U=y;v<U;v+=3){let I=v,D=v+1,w=v+2;s=Xo(this,m,e,i,c,u,h,I,D,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let b=g,y=g+1,v=g+2;s=Xo(this,o,e,i,c,u,h,b,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Z0(n,e,t,i,s,r,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Bo),n.getVertexPosition(l,Ho),n.getVertexPosition(c,Vo);let u=Z0(n,e,t,i,Bo,Ho,Vo,df);if(u){let h=new L;rs.getBarycoord(df,Bo,Ho,Vo,h),s&&(u.uv=rs.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(u.uv1=rs.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(u.normal=rs.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};rs.getNormal(Bo,Ho,Vo,d.normal),u.face=d,u.barycoord=h}return u}var Wn=class n extends It{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function p(x,g,m,b,y,v,U,I,D,w,_){let M=v/D,R=U/w,k=v/2,z=U/2,X=I/2,O=D+1,Y=w+1,J=0,Z=0,Q=new L;for(let ae=0;ae<Y;ae++){let ye=ae*R-z;for(let Fe=0;Fe<O;Fe++){let st=Fe*M-k;Q[x]=st*b,Q[g]=ye*y,Q[m]=X,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[m]=I>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Fe/D),h.push(1-ae/w),J+=1}}for(let ae=0;ae<w;ae++)for(let ye=0;ye<D;ye++){let Fe=d+ye+O*ae,st=d+ye+O*(ae+1),ee=d+(ye+1)+O*(ae+1),ue=d+(ye+1)+O*ae;l.push(Fe,st,ue),l.push(st,ee,ue),Z+=6}a.addGroup(f,Z,_),f+=Z,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=Ks(n[t]);for(let s in i)e[s]=i[s]}return e}function $0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var vn={clone:Ks,merge:hn},j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends ti{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},va=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new L,pf=new re,mf=new re,on=class extends va{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,pf,mf),t.subVectors(mf,pf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Fs=1,Zc=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ks,Fs,e,t);s.layers=this.layers,this.add(s);let r=new on(ks,Fs,e,t);r.layers=this.layers,this.add(r);let o=new on(ks,Fs,e,t);o.layers=this.layers,this.add(o);let a=new on(ks,Fs,e,t);a.layers=this.layers,this.add(a);let l=new on(ks,Fs,e,t);l.layers=this.layers,this.add(l);let c=new on(ks,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ya=class extends gn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$c=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Vt});r.uniforms.tEquirect.value=t;let o=new Ee(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=Sn),new Zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ql=new L,K0=new L,Q0=new nt,mi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ql.subVectors(i,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ql),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Q0.getNormalMatrix(e),s=this.coplanarPoint(ql).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new _i,Yo=new L,Yr=class{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],x=s[10],g=s[11],m=s[12],b=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,g-f,v-m).normalize(),i[1].setComponents(l+r,d+c,g+f,v+m).normalize(),i[2].setComponents(l+o,d+u,g+p,v+b).normalize(),i[3].setComponents(l-o,d-u,g-p,v-b).normalize(),i[4].setComponents(l-a,d-h,g-x,v-y).normalize(),t===gi)i[5].setComponents(l+a,d+h,g+x,v+y).normalize();else if(t===ua)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yo.x=s.normal.x>0?e.max.x:e.min.x,Yo.y=s.normal.y>0?e.max.y:e.min.y,Yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function em(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ln=class n extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let b=m*d-o;for(let y=0;y<c;y++){let v=y*h-r;p.push(v,-b,0),x.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let y=b+c*m,v=b+c*(m+1),U=b+1+c*(m+1),I=b+1+c*m;f.push(y,v,I),f.push(v,U,I)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,eg=`
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
#endif`,tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,xx=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,bx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ax=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:tm,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:um,beginnormal_vertex:fm,bsdfs:dm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:_m,color_pars_fragment:Mm,color_pars_vertex:bm,color_vertex:wm,common:Sm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Dm,envmap_fragment:Lm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Nm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:km,fog_pars_vertex:Fm,fog_fragment:Bm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:$m,lights_phong_fragment:jm,lights_phong_pars_fragment:Jm,lights_physical_fragment:Km,lights_physical_pars_fragment:Qm,lights_fragment_begin:eg,lights_fragment_maps:tg,lights_fragment_end:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:og,map_fragment:ag,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:hg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:fg,morphinstance_vertex:dg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:xg,normal_fragment_begin:vg,normal_fragment_maps:yg,normal_pars_fragment:_g,normal_pars_vertex:Mg,normal_vertex:bg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Ag,opaque_fragment:Rg,packing:Cg,premultiplied_alpha_fragment:Pg,project_vertex:Ig,dithering_fragment:Dg,dithering_pars_fragment:Lg,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Og,shadowmap_vertex:kg,shadowmask_pars_fragment:Fg,skinbase_vertex:Bg,skinning_pars_vertex:Hg,skinning_vertex:Vg,skinnormal_vertex:Gg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:Yg,tonemapping_pars_fragment:qg,transmission_fragment:Zg,transmission_pars_fragment:$g,uv_pars_fragment:jg,uv_pars_vertex:Jg,uv_vertex:Kg,worldpos_vertex:Qg,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ox,depth_frag:ax,distanceRGBA_vert:lx,distanceRGBA_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:fx,linedashed_frag:dx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:xx,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:_x,meshnormal_frag:Mx,meshphong_vert:bx,meshphong_frag:wx,meshphysical_vert:Sx,meshphysical_frag:Ex,meshtoon_vert:Tx,meshtoon_frag:Ax,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Dx,sprite_frag:Lx},_e={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Jn={basic:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new De(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new De(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([_e.points,_e.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([_e.common,_e.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([_e.sprite,_e.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:hn([_e.common,_e.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:hn([_e.lights,_e.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Jn.physical={uniforms:hn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var qo={r:0,b:0,g:0},ns=new Dn,Ux=new Ye;function Nx(n,e,t,i,s,r,o){let a=new De(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,v=p(b);v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0);let U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,y){let v=p(y);v&&(v.isCubeTexture||v.mapping===qa)?(u===void 0&&(u=new Ee(new Wn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Ks(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(y.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(ns)),u.material.toneMapped=ht.getTransfer(v.colorSpace)!==vt,(h!==v||d!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ee(new Ln(2,2),new bt({name:"BackgroundMaterial",uniforms:Ks(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,y){b.getRGB(qo,xd(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:x,addToRenderList:g}}function zx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,R,k,z,X){let O=!1,Y=h(z,k,R);r!==Y&&(r=Y,c(r.object)),O=f(M,z,k,X),O&&p(M,z,k,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(M,R,k,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,R,k){let z=k.wireframe===!0,X=i[M.id];X===void 0&&(X={},i[M.id]=X);let O=X[R.id];O===void 0&&(O={},X[R.id]=O);let Y=O[z];return Y===void 0&&(Y=d(l()),O[z]=Y),Y}function d(M){let R=[],k=[],z=[];for(let X=0;X<t;X++)R[X]=0,k[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,R,k,z){let X=r.attributes,O=R.attributes,Y=0,J=k.getAttributes();for(let Z in J)if(J[Z].location>=0){let ae=X[Z],ye=O[Z];if(ye===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function p(M,R,k,z){let X={},O=R.attributes,Y=0,J=k.getAttributes();for(let Z in J)if(J[Z].location>=0){let ae=O[Z];ae===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),X[Z]=ye,Y++}r.attributes=X,r.attributesNum=Y,r.index=z}function x(){let M=r.newAttributes;for(let R=0,k=M.length;R<k;R++)M[R]=0}function g(M){m(M,0)}function m(M,R){let k=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;k[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),X[M]!==R&&(n.vertexAttribDivisor(M,R),X[M]=R)}function b(){let M=r.newAttributes,R=r.enabledAttributes;for(let k=0,z=R.length;k<z;k++)R[k]!==M[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function y(M,R,k,z,X,O,Y){Y===!0?n.vertexAttribIPointer(M,R,k,X,O):n.vertexAttribPointer(M,R,k,z,X,O)}function v(M,R,k,z){x();let X=z.attributes,O=k.getAttributes(),Y=R.defaultAttributeValues;for(let J in O){let Z=O[J];if(Z.location>=0){let Q=X[J];if(Q===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){let ae=Q.normalized,ye=Q.itemSize,Fe=e.get(Q);if(Fe===void 0)continue;let st=Fe.buffer,ee=Fe.type,ue=Fe.bytesPerElement,Re=ee===n.INT||ee===n.UNSIGNED_INT||Q.gpuType===Oh;if(Q.isInterleavedBufferAttribute){let fe=Q.data,Le=fe.stride,Ve=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<Z.locationSize;Be++)m(Z.location+Be,fe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<Z.locationSize;Be++)g(Z.location+Be);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Be=0;Be<Z.locationSize;Be++)y(Z.location+Be,ye/Z.locationSize,ee,ae,Le*ue,(Ve+ye/Z.locationSize*Be)*ue,Re)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)m(Z.location+fe,Q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<Z.locationSize;fe++)g(Z.location+fe);n.bindBuffer(n.ARRAY_BUFFER,st);for(let fe=0;fe<Z.locationSize;fe++)y(Z.location+fe,ye/Z.locationSize,ee,ae,ye*ue,ye/Z.locationSize*fe*ue,Re)}}else if(Y!==void 0){let ae=Y[J];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(Z.location,ae);break;case 3:n.vertexAttrib3fv(Z.location,ae);break;case 4:n.vertexAttrib4fv(Z.location,ae);break;default:n.vertexAttrib1fv(Z.location,ae)}}}}b()}function U(){w();for(let M in i){let R=i[M];for(let k in R){let z=R[k];for(let X in z)u(z[X].object),delete z[X];delete R[k]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;let R=i[M.id];for(let k in R){let z=R[k];for(let X in z)u(z[X].object),delete z[X];delete R[k]}delete i[M.id]}function D(M){for(let R in i){let k=i[R];if(k[M.id]===void 0)continue;let z=k[M.id];for(let X in z)u(z[X].object),delete z[X];delete k[M.id]}}function w(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:_,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Ox(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==En&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let w=D===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kn&&!w)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:U,maxSamples:I}}function Fx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let b=r?0:i,y=b*4,v=m.clippingState||null;l.value=v,v=u(p,d,y,f);for(let U=0;U!==y;++U)v[U]=t[U];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Bx(n){let e=new WeakMap;function t(o,a){return a===mc?o.mapping=js:a===gc&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===mc||a===gc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $c(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Qs=class extends va{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,gf=[.125,.215,.35,.446,.526,.582],os=20,Zl=new Qs,xf=new De,$l=null,jl=0,Jl=0,Kl=!1,ss=(1+Math.sqrt(5))/2,Bs=1/ss,vf=[new L(-ss,Bs,0),new L(ss,Bs,0),new L(-Bs,0,ss),new L(Bs,0,ss),new L(0,ss,-Bs),new L(0,ss,Bs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$l=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,jl,Jl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:xn,format:En,colorSpace:hr,depthBuffer:!1},s=yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(r)),this._blurMaterial=Vx(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,i,s){let a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xf),u.toneMapping=Fi,u.autoClear=!1;let f=new Bt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),p=new Ee(new Wn,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(xf),x=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Zo(s,b*y,m>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===js||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Zo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vf[(s-r-1)%vf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ee(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):os;g>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);let m=[],b=0;for(let D=0;D<os;++D){let w=D/x,_=Math.exp(-w*w/2);m.push(_),D===0?b+=_:D<g&&(b+=2*_)}for(let D=0;D<m.length;D++)m[D]=m[D]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-i;let v=this._sizeLods[s],U=3*v*(s>y-Gs?s-y+Gs:0),I=4*(this._cubeSize-v);Zo(t,U,I,3*v,2*v),l.setRenderTarget(t),l.render(h,Zl)}};function Hx(n){let e=[],t=[],i=[],s=n,r=n-Gs+1+gf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Gs?l=gf[o-n+Gs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,g=2,m=1,b=new Float32Array(x*p*f),y=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let I=0;I<f;I++){let D=I%3*2/3-1,w=I>2?0:-1,_=[D,w,0,D+2/3,w,0,D+2/3,w+1,0,D,w,0,D+2/3,w+1,0,D,w+1,0];b.set(_,x*p*I),y.set(d,g*p*I);let M=[I,I,I,I,I,I];v.set(M,m*p*I)}let U=new It;U.setAttribute("position",new Tt(b,x)),U.setAttribute("uv",new Tt(y,g)),U.setAttribute("faceIndex",new Tt(v,m)),e.push(U),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yf(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Vx(n,e,t){let i=new Float32Array(os),s=new L(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function _f(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Mf(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function Gx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===mc||l===gc,u=l===js||l===Js;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new er(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new er(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Wx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Xx(n,e,t,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,v=b.length;y<v;y+=3){let U=b[y+0],I=b[y+1],D=b[y+2];d.push(U,I,I,D,D,U)}}else if(p!==void 0){let b=p.array;x=p.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let U=y+0,I=y+1,D=y+2;d.push(U,I,I,D,D,U)}}else return;let g=new(md(d)?xa:ga)(d,1);g.version=x;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Yx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}function h(d,f,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,p);let m=0;for(let b=0;b<p;b++)m+=f[b]*x[b];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function qx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zx(n,e,t){let i=new WeakMap,s=new Mt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let _=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,U=1;v>e.maxTextureSize&&(U=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let I=new Float32Array(v*U*4*h),D=new pa(I,v,U,h);D.type=Kn,D.needsUpdate=!0;let w=y*4;for(let M=0;M<h;M++){let R=g[M],k=m[M],z=b[M],X=v*U*4*M;for(let O=0;O<R.count;O++){let Y=O*w;f===!0&&(s.fromBufferAttribute(R,O),I[X+Y+0]=s.x,I[X+Y+1]=s.y,I[X+Y+2]=s.z,I[X+Y+3]=0),p===!0&&(s.fromBufferAttribute(k,O),I[X+Y+4]=s.x,I[X+Y+5]=s.y,I[X+Y+6]=s.z,I[X+Y+7]=0),x===!0&&(s.fromBufferAttribute(z,O),I[X+Y+8]=s.x,I[X+Y+9]=s.y,I[X+Y+10]=s.z,I[X+Y+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new re(v,U)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $x(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var tr=class extends gn{constructor(e,t,i,s,r,o,a,l,c,u=Ys){if(u!==Ys&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ys&&(i=cs),i===void 0&&u===Vi&&(i=Hi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yd=new gn,bf=new tr(1,1),_d=new pa,Md=new qc,bd=new ya,wf=[],Sf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function Kx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function Qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Af.set(i),n.uniformMatrix2fv(this.addr,!1,Af),Wt(t,i)}}function tv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),Wt(t,i)}}function nv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),Wt(t,i)}}function iv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function av(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function uv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bf.compareFunction=dd,r=bf):r=yd,t.setTexture2D(e||r,s)}function fv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Md,s)}function dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bd,s)}function pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_d,s)}function mv(n){switch(n){case 5126:return jx;case 35664:return Jx;case 35665:return Kx;case 35666:return Qx;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return sv;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return av;case 36294:return lv;case 36295:return cv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(n,e){n.uniform1fv(this.addr,e)}function xv(n,e){let t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function vv(n,e){let t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function yv(n,e){let t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function _v(n,e){let t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mv(n,e){let t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bv(n,e){let t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wv(n,e){n.uniform1iv(this.addr,e)}function Sv(n,e){n.uniform2iv(this.addr,e)}function Ev(n,e){n.uniform3iv(this.addr,e)}function Tv(n,e){n.uniform4iv(this.addr,e)}function Av(n,e){n.uniform1uiv(this.addr,e)}function Rv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Pv(n,e){n.uniform4uiv(this.addr,e)}function Iv(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yd,r[o])}function Dv(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Md,r[o])}function Lv(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bd,r[o])}function Uv(n,e,t){let i=this.cache,s=e.length,r=$a(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_d,r[o])}function Nv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return vv;case 35666:return yv;case 35674:return _v;case 35675:return Mv;case 35676:return bv;case 5124:case 35670:return wv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Uv}}var jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}},Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nv(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function Rf(n,e){n.seq.push(e),n.map[e.id]=e}function zv(n,e,t){let i=n.name,s=i.length;for(Ql.lastIndex=0;;){let r=Ql.exec(i),o=Ql.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rf(t,c===void 0?new jc(a,n,e):new Jc(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Kc(a),Rf(t,h)),t=h}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Cf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Ov=37297,kv=0;function Fv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Pf=new nt;function Bv(n){ht._getMatrix(Pf,ht.workingColorSpace,n);let e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Za:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function If(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fv(n.getShaderSource(e),o)}else return s}function Hv(n,e){let t=Bv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vv(n,e){let t;switch(e){case Dh:t="Linear";break;case Lh:t="Reinhard";break;case Uh:t="Cineon";break;case Nh:t="ACESFilmic";break;case zh:t="AgX";break;case to:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new L;function Gv(){ht.getLuminanceCoefficients($o);let n=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Xv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zr(n){return n!==""}function Df(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(qv,$v)}var Zv=new Map;function $v(n,e){let t=rt[e];if(t===void 0){let i=Zv.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}var jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(jv,Jv)}function Jv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Kv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ga?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wa?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Qv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Js:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Js&&(e="ENVMAP_MODE_REFRACTION"),e}function t1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case i0:e="ENVMAP_BLENDING_MIX";break;case s0:e="ENVMAP_BLENDING_ADD";break}return e}function n1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function i1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Kv(t),c=Qv(t),u=e1(t),h=t1(t),d=n1(t),f=Wv(t),p=Xv(r),x=s.createProgram(),g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zr).join(`
`),m.length>0&&(m+=`
`)):(g=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),m=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?Vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=Qc(o),o=Df(o,t),o=Lf(o,t),a=Qc(a),a=Df(a,t),a=Lf(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=b+g+o,v=b+m+a,U=Cf(s,s.VERTEX_SHADER,y),I=Cf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,U),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(R){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(I).trim(),O=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,U,I);else{let J=If(s,U,"vertex"),Z=If(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+J+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||X==="")&&(Y=!1);Y&&(R.diagnostics={runnable:O,programLog:k,vertexShader:{log:z,prefix:g},fragmentShader:{log:X,prefix:m}})}s.deleteShader(U),s.deleteShader(I),w=new Zs(s,x),_=Yv(s,x)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ov)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=I,this}var s1=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new th(e),t.set(e,i)),i}},th=class{constructor(e){this.id=s1++,this.code=e,this.usedTimes=0}};function r1(n,e,t,i,s,r,o){let a=new ma,l=new eh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,R,k,z){let X=k.fog,O=z.geometry,Y=_.isMeshStandardMaterial?k.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),Z=J&&J.mapping===qa?J.image.height:null,Q=p[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ye=ae!==void 0?ae.length:0,Fe=0;O.morphAttributes.position!==void 0&&(Fe=1),O.morphAttributes.normal!==void 0&&(Fe=2),O.morphAttributes.color!==void 0&&(Fe=3);let st,ee,ue,Re;if(Q){let _t=Jn[Q];st=_t.vertexShader,ee=_t.fragmentShader}else st=_.vertexShader,ee=_.fragmentShader,l.update(_),ue=l.getVertexShaderID(_),Re=l.getFragmentShaderID(_);let fe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Ve=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,lt=!!_.map,ie=!!_.matcap,de=!!J,N=!!_.aoMap,Ue=!!_.lightMap,ce=!!_.bumpMap,Te=!!_.normalMap,me=!!_.displacementMap,We=!!_.emissiveMap,be=!!_.metalnessMap,C=!!_.roughnessMap,S=_.anisotropy>0,q=_.clearcoat>0,te=_.dispersion>0,oe=_.iridescence>0,ne=_.sheen>0,Ie=_.transmission>0,ge=S&&!!_.anisotropyMap,Me=q&&!!_.clearcoatMap,Qe=q&&!!_.clearcoatNormalMap,he=q&&!!_.clearcoatRoughnessMap,Ce=oe&&!!_.iridescenceMap,qe=oe&&!!_.iridescenceThicknessMap,$e=ne&&!!_.sheenColorMap,Pe=ne&&!!_.sheenRoughnessMap,ct=!!_.specularMap,je=!!_.specularColorMap,ft=!!_.specularIntensityMap,F=Ie&&!!_.transmissionMap,xe=Ie&&!!_.thicknessMap,K=!!_.gradientMap,se=!!_.alphaMap,Ae=_.alphaTest>0,we=!!_.alphaHash,et=!!_.extensions,Nt=Fi;_.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Nt=n.toneMapping);let tn={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:ee,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:Re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&z.instanceColor!==null,instancingMorph:Ve&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:hr,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:ie,envMap:de,envMapMode:de&&J.mapping,envMapCubeUVHeight:Z,aoMap:N,lightMap:Ue,bumpMap:ce,normalMap:Te,displacementMap:d&&me,emissiveMap:We,normalMapObjectSpace:Te&&_.normalMapType===c0,normalMapTangentSpace:Te&&_.normalMapType===Wh,metalnessMap:be,roughnessMap:C,anisotropy:S,anisotropyMap:ge,clearcoat:q,clearcoatMap:Me,clearcoatNormalMap:Qe,clearcoatRoughnessMap:he,dispersion:te,iridescence:oe,iridescenceMap:Ce,iridescenceThicknessMap:qe,sheen:ne,sheenColorMap:$e,sheenRoughnessMap:Pe,specularMap:ct,specularColorMap:je,specularIntensityMap:ft,transmission:Ie,transmissionMap:F,thicknessMap:xe,gradientMap:K,opaque:_.transparent===!1&&_.blending===Xs&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:Ae,alphaHash:we,combine:_.combine,mapUv:lt&&x(_.map.channel),aoMapUv:N&&x(_.aoMap.channel),lightMapUv:Ue&&x(_.lightMap.channel),bumpMapUv:ce&&x(_.bumpMap.channel),normalMapUv:Te&&x(_.normalMap.channel),displacementMapUv:me&&x(_.displacementMap.channel),emissiveMapUv:We&&x(_.emissiveMap.channel),metalnessMapUv:be&&x(_.metalnessMap.channel),roughnessMapUv:C&&x(_.roughnessMap.channel),anisotropyMapUv:ge&&x(_.anisotropyMap.channel),clearcoatMapUv:Me&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(_.sheenRoughnessMap.channel),specularMapUv:ct&&x(_.specularMap.channel),specularColorMapUv:je&&x(_.specularColorMap.channel),specularIntensityMapUv:ft&&x(_.specularIntensityMap.channel),transmissionMapUv:F&&x(_.transmissionMap.channel),thicknessMapUv:xe&&x(_.thicknessMap.channel),alphaMapUv:se&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Te||S),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(lt||se),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:We&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:et&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&_.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function m(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)M.push(R),M.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(b(M,_),y(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function b(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function y(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let M=p[_.type],R;if(M){let k=Jn[M];R=vn.clone(k.uniforms)}else R=_.uniforms;return R}function U(_,M){let R;for(let k=0,z=u.length;k<z;k++){let X=u[k];if(X.cacheKey===M){R=X,++R.usedTimes;break}}return R===void 0&&(R=new i1(n,M,_,r),u.push(R)),R}function I(_){if(--_.usedTimes===0){let M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function D(_){l.remove(_)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:U,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:w}}function o1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function a1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Of(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,p,x,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,p,x,g){let m=o(h,d,f,p,x,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||a1),i.length>1&&i.sort(d||zf),s.length>1&&s.sort(d||zf)}function u(){for(let h=e,d=n.length;h<d;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function l1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Of,n.set(i,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function c1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function h1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var u1=0;function f1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function d1(n){let e=new c1,t=h1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new Ye,o=new Ye;function a(c){let u=0,h=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,b=0,y=0,v=0,U=0,I=0,D=0;c.sort(f1);for(let _=0,M=c.length;_<M;_++){let R=c[_],k=R.color,z=R.intensity,X=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*z,h+=k.g*z,d+=k.b*z;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],z);D++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,Z=t.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=R.shadow.matrix,b++}i.directional[f]=Y,f++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(k).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[x]=Y;let J=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,J.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[x]=J.matrix,R.castShadow){let Z=t.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=O,v++}x++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(k).multiplyScalar(z),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=Y,g++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let J=R.shadow,Z=t.get(R);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=O,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=Y,p++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(z),Y.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[m]=Y,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let w=i.hash;(w.directionalLength!==f||w.pointLength!==p||w.spotLength!==x||w.rectAreaLength!==g||w.hemiLength!==m||w.numDirectionalShadows!==b||w.numPointShadows!==y||w.numSpotShadows!==v||w.numSpotMaps!==U||w.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+U-I,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,w.directionalLength=f,w.pointLength=p,w.spotLength=x,w.rectAreaLength=g,w.hemiLength=m,w.numDirectionalShadows=b,w.numPointShadows=y,w.numSpotShadows=v,w.numSpotMaps=U,w.numLightProbes=D,i.version=u1++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let y=c[m];if(y.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(y.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function kf(n){let e=new d1(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function p1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new kf(n),e.set(s,[a])):r>=o.length?(a=new kf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var nh=class extends ti{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ih=class extends ti{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function x1(n,e,t){let i=new Yr,s=new re,r=new re,o=new Mt,a=new nh({depthPacking:l0}),l=new ih,c={},u=t.maxTextureSize,h={[Qn]:$t,[$t]:Qn,[Pt]:Pt},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new It;p.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let m=this.type;this.render=function(I,D,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;let _=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Vt),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=m!==pi&&this.type===pi,X=m===pi&&this.type!==pi;for(let O=0,Y=I.length;O<Y;O++){let J=I[O],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let Q=Z.getFrameExtents();if(s.multiply(Q),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,Z.mapSize.y=r.y)),Z.map===null||z===!0||X===!0){let ye=this.type!==pi?{minFilter:an,magFilter:an}:{};Z.map!==null&&Z.map.dispose(),Z.map=new jt(s.x,s.y,ye),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ae=Z.getViewportCount();for(let ye=0;ye<ae;ye++){let Fe=Z.getViewport(ye);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),k.viewport(o),Z.updateMatrices(J,ye),i=Z.getFrustum(),v(D,w,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===pi&&b(Z,w),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(_,M,R)};function b(I,D){let w=e.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new jt(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,w,d,x,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,w,f,x,null)}function y(I,D,w,_){let M=null,R=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)M=R;else if(M=w.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let k=M.uuid,z=D.uuid,X=c[k];X===void 0&&(X={},c[k]=X);let O=X[z];O===void 0&&(O=M.clone(),X[z]=O,D.addEventListener("dispose",U)),M=O}if(M.visible=D.visible,M.wireframe=D.wireframe,_===pi?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:h[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=n.properties.get(M);k.light=w}return M}function v(I,D,w,_,M){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===pi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);let z=e.update(I),X=I.material;if(Array.isArray(X)){let O=z.groups;for(let Y=0,J=O.length;Y<J;Y++){let Z=O[Y],Q=X[Z.materialIndex];if(Q&&Q.visible){let ae=y(I,Q,_,M);I.onBeforeShadow(n,I,D,w,z,ae,Z),n.renderBufferDirect(w,null,z,ae,I,Z),I.onAfterShadow(n,I,D,w,z,ae,Z)}}}else if(X.visible){let O=y(I,X,_,M);I.onBeforeShadow(n,I,D,w,z,O,null),n.renderBufferDirect(w,null,z,O,I,null),I.onAfterShadow(n,I,D,w,z,O,null)}}let k=I.children;for(let z=0,X=k.length;z<X;z++)v(k[z],D,w,_,M)}function U(I){I.target.removeEventListener("dispose",U);for(let w in c){let _=c[w],M=I.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}var v1={[lc]:cc,[hc]:dc,[uc]:pc,[$s]:fc,[cc]:lc,[dc]:hc,[pc]:uc,[fc]:$s};function y1(n,e){function t(){let F=!1,xe=new Mt,K=null,se=new Mt(0,0,0,0);return{setMask:function(Ae){K!==Ae&&!F&&(n.colorMask(Ae,Ae,Ae,Ae),K=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,we,et,Nt,tn){tn===!0&&(Ae*=Nt,we*=Nt,et*=Nt),xe.set(Ae,we,et,Nt),se.equals(xe)===!1&&(n.clearColor(Ae,we,et,Nt),se.copy(xe))},reset:function(){F=!1,K=null,se.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,K=null,se=null,Ae=null;return{setReversed:function(we){if(xe!==we){let et=e.get("EXT_clip_control");xe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let Nt=Ae;Ae=null,this.setClear(Nt)}xe=we},getReversed:function(){return xe},setTest:function(we){we?fe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(we){K!==we&&!F&&(n.depthMask(we),K=we)},setFunc:function(we){if(xe&&(we=v1[we]),se!==we){switch(we){case lc:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case hc:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case uc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case dc:n.depthFunc(n.GREATER);break;case pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=we}},setLocked:function(we){F=we},setClear:function(we){Ae!==we&&(xe&&(we=1-we),n.clearDepth(we),Ae=we)},reset:function(){F=!1,K=null,se=null,Ae=null,xe=!1}}}function s(){let F=!1,xe=null,K=null,se=null,Ae=null,we=null,et=null,Nt=null,tn=null;return{setTest:function(_t){F||(_t?fe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(_t){xe!==_t&&!F&&(n.stencilMask(_t),xe=_t)},setFunc:function(_t,kn,ai){(K!==_t||se!==kn||Ae!==ai)&&(n.stencilFunc(_t,kn,ai),K=_t,se=kn,Ae=ai)},setOp:function(_t,kn,ai){(we!==_t||et!==kn||Nt!==ai)&&(n.stencilOp(_t,kn,ai),we=_t,et=kn,Nt=ai)},setLocked:function(_t){F=_t},setClear:function(_t){tn!==_t&&(n.clearStencil(_t),tn=_t)},reset:function(){F=!1,xe=null,K=null,se=null,Ae=null,we=null,et=null,Nt=null,tn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,b=null,y=null,v=null,U=null,I=null,D=new De(0,0,0),w=0,_=!1,M=null,R=null,k=null,z=null,X=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,J=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=J>=2);let Q=null,ae={},ye=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),st=new Mt().fromArray(ye),ee=new Mt().fromArray(Fe);function ue(F,xe,K,se){let Ae=new Uint8Array(4),we=n.createTexture();n.bindTexture(F,we),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<K;et++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(xe+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return we}let Re={};Re[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc($s),ce(!1),Te(Fu),fe(n.CULL_FACE),N(Vt);function fe(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Le(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ve(F,xe){return h[F]!==xe?(n.bindFramebuffer(F,xe),h[F]=xe,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=xe),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Be(F,xe){let K=f,se=!1;if(F){K=d.get(xe),K===void 0&&(K=[],d.set(xe,K));let Ae=F.textures;if(K.length!==Ae.length||K[0]!==n.COLOR_ATTACHMENT0){for(let we=0,et=Ae.length;we<et;we++)K[we]=n.COLOR_ATTACHMENT0+we;K.length=Ae.length,se=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,se=!0);se&&n.drawBuffers(K)}function lt(F){return p!==F?(n.useProgram(F),p=F,!0):!1}let ie={[In]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};ie[Xp]=n.MIN,ie[Yp]=n.MAX;let de={[cr]:n.ZERO,[qp]:n.ONE,[Zp]:n.SRC_COLOR,[oc]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[Ya]:n.DST_COLOR,[Xa]:n.DST_ALPHA,[$p]:n.ONE_MINUS_SRC_COLOR,[ac]:n.ONE_MINUS_SRC_ALPHA,[Jp]:n.ONE_MINUS_DST_COLOR,[jp]:n.ONE_MINUS_DST_ALPHA,[Qp]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[t0]:n.CONSTANT_ALPHA,[n0]:n.ONE_MINUS_CONSTANT_ALPHA};function N(F,xe,K,se,Ae,we,et,Nt,tn,_t){if(F===Vt){x===!0&&(Le(n.BLEND),x=!1);return}if(x===!1&&(fe(n.BLEND),x=!0),F!==Ih){if(F!==g||_t!==_){if((m!==In||v!==In)&&(n.blendEquation(n.FUNC_ADD),m=In,v=In),_t)switch(F){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.ONE,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,y=null,U=null,I=null,D.set(0,0,0),w=0,g=F,_=_t}return}Ae=Ae||xe,we=we||K,et=et||se,(xe!==m||Ae!==v)&&(n.blendEquationSeparate(ie[xe],ie[Ae]),m=xe,v=Ae),(K!==b||se!==y||we!==U||et!==I)&&(n.blendFuncSeparate(de[K],de[se],de[we],de[et]),b=K,y=se,U=we,I=et),(Nt.equals(D)===!1||tn!==w)&&(n.blendColor(Nt.r,Nt.g,Nt.b,tn),D.copy(Nt),w=tn),g=F,_=!1}function Ue(F,xe){F.side===Pt?Le(n.CULL_FACE):fe(n.CULL_FACE);let K=F.side===$t;xe&&(K=!K),ce(K),F.blending===Xs&&F.transparent===!1?N(Vt):N(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let se=F.stencilWrite;a.setTest(se),se&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function Te(F){F!==Hp?(fe(n.CULL_FACE),F!==R&&(F===Fu?n.cullFace(n.BACK):F===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),R=F}function me(F){F!==k&&(Y&&n.lineWidth(F),k=F)}function We(F,xe,K){F?(fe(n.POLYGON_OFFSET_FILL),(z!==xe||X!==K)&&(n.polygonOffset(xe,K),z=xe,X=K)):Le(n.POLYGON_OFFSET_FILL)}function be(F){F?fe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function C(F){F===void 0&&(F=n.TEXTURE0+O-1),Q!==F&&(n.activeTexture(F),Q=F)}function S(F,xe,K){K===void 0&&(Q===null?K=n.TEXTURE0+O-1:K=Q);let se=ae[K];se===void 0&&(se={type:void 0,texture:void 0},ae[K]=se),(se.type!==F||se.texture!==xe)&&(Q!==K&&(n.activeTexture(K),Q=K),n.bindTexture(F,xe||Re[F]),se.type=F,se.texture=xe)}function q(){let F=ae[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(F){st.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),st.copy(F))}function Pe(F){ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function ct(F,xe){let K=c.get(xe);K===void 0&&(K=new WeakMap,c.set(xe,K));let se=K.get(F);se===void 0&&(se=n.getUniformBlockIndex(xe,F.name),K.set(F,se))}function je(F,xe){let se=c.get(xe).get(F);l.get(xe)!==se&&(n.uniformBlockBinding(xe,se,F.__bindingPointIndex),l.set(xe,se))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,ae={},h={},d=new WeakMap,f=[],p=null,x=!1,g=null,m=null,b=null,y=null,v=null,U=null,I=null,D=new De(0,0,0),w=0,_=!1,M=null,R=null,k=null,z=null,X=null,st.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Le,bindFramebuffer:Ve,drawBuffers:Be,useProgram:lt,setBlending:N,setMaterial:Ue,setFlipSided:ce,setCullFace:Te,setLineWidth:me,setPolygonOffset:We,setScissorTest:be,activeTexture:C,bindTexture:S,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:oe,texImage2D:Ce,texImage3D:qe,updateUBOMapping:ct,uniformBlockBinding:je,texStorage2D:Qe,texStorage3D:he,texSubImage2D:ne,texSubImage3D:Ie,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:$e,viewport:Pe,reset:ft}}function Ff(n,e,t,i){let s=_1(i);switch(t){case ad:return n*e;case cd:return n*e;case hd:return n*e*2;case Bh:return n*e/s.components*s.byteLength;case Hh:return n*e/s.components*s.byteLength;case ud:return n*e*2/s.components*s.byteLength;case Vh:return n*e*2/s.components*s.byteLength;case ld:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case Gh:return n*e*4/s.components*s.byteLength;case ra:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:case Mc:return Math.max(n,16)*Math.max(e,8)/4;case vc:case _c:return Math.max(n,8)*Math.max(e,8)/2;case bc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ca:case Fc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fd:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _1(n){switch(n){case Gn:case sd:return{byteLength:1,components:1};case Gr:case rd:case xn:return{byteLength:2,components:1};case kh:case Fh:return{byteLength:2,components:4};case cs:case Oh:case Kn:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function M1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return f?new OffscreenCanvas(C,S):fa("canvas")}function x(C,S,q){let te=1,oe=be(C);if((oe.width>q||oe.height>q)&&(te=q/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ne=Math.floor(te*oe.width),Ie=Math.floor(te*oe.height);h===void 0&&(h=p(ne,Ie));let ge=S?p(ne,Ie):h;return ge.width=ne,ge.height=Ie,ge.getContext("2d").drawImage(C,0,0,ne,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ne+"x"+Ie+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,S,q,te,oe=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=S;if(S===n.RED&&(q===n.FLOAT&&(ne=n.R32F),q===n.HALF_FLOAT&&(ne=n.R16F),q===n.UNSIGNED_BYTE&&(ne=n.R8)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.R8UI),q===n.UNSIGNED_SHORT&&(ne=n.R16UI),q===n.UNSIGNED_INT&&(ne=n.R32UI),q===n.BYTE&&(ne=n.R8I),q===n.SHORT&&(ne=n.R16I),q===n.INT&&(ne=n.R32I)),S===n.RG&&(q===n.FLOAT&&(ne=n.RG32F),q===n.HALF_FLOAT&&(ne=n.RG16F),q===n.UNSIGNED_BYTE&&(ne=n.RG8)),S===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RG8UI),q===n.UNSIGNED_SHORT&&(ne=n.RG16UI),q===n.UNSIGNED_INT&&(ne=n.RG32UI),q===n.BYTE&&(ne=n.RG8I),q===n.SHORT&&(ne=n.RG16I),q===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),q===n.UNSIGNED_INT&&(ne=n.RGB32UI),q===n.BYTE&&(ne=n.RGB8I),q===n.SHORT&&(ne=n.RGB16I),q===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),q===n.UNSIGNED_INT&&(ne=n.RGBA32UI),q===n.BYTE&&(ne=n.RGBA8I),q===n.SHORT&&(ne=n.RGBA16I),q===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),S===n.RGBA){let Ie=oe?Za:ht.getTransfer(te);q===n.FLOAT&&(ne=n.RGBA32F),q===n.HALF_FLOAT&&(ne=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ne=Ie===vt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(C,S){let q;return C?S===null||S===cs||S===Hi?q=n.DEPTH24_STENCIL8:S===Kn?q=n.DEPTH32F_STENCIL8:S===Gr&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===cs||S===Hi?q=n.DEPTH_COMPONENT24:S===Kn?q=n.DEPTH_COMPONENT32F:S===Gr&&(q=n.DEPTH_COMPONENT16),q}function U(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function I(C){let S=C.target;S.removeEventListener("dispose",I),w(S),S.isVideoTexture&&u.delete(S)}function D(C){let S=C.target;S.removeEventListener("dispose",D),M(S)}function w(C){let S=i.get(C);if(S.__webglInit===void 0)return;let q=C.source,te=d.get(q);if(te){let oe=te[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&_(C),Object.keys(te).length===0&&d.delete(q)}i.remove(C)}function _(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let q=C.source,te=d.get(q);delete te[S.__cacheKey],o.memory.textures--}function M(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let oe=0;oe<S.__webglFramebuffer[te].length;oe++)n.deleteFramebuffer(S.__webglFramebuffer[te][oe]);else n.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)n.deleteFramebuffer(S.__webglFramebuffer[te]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let q=C.textures;for(let te=0,oe=q.length;te<oe;te++){let ne=i.get(q[te]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(q[te])}i.remove(C)}let R=0;function k(){R=0}function z(){let C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function X(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){let q=i.get(C);if(C.isVideoTexture&&me(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,C,S);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function Y(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ee(q,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function J(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ee(q,C,S);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function Z(C,S){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ue(q,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let Q={[vi]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},ae={[an]:n.NEAREST,[o0]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},ye={[h0]:n.NEVER,[g0]:n.ALWAYS,[u0]:n.LESS,[dd]:n.LEQUAL,[f0]:n.EQUAL,[m0]:n.GEQUAL,[d0]:n.GREATER,[p0]:n.NOTEQUAL};function Fe(C,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===Tl||S.magFilter===Co||S.magFilter===ls||S.minFilter===Sn||S.minFilter===Tl||S.minFilter===Co||S.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Q[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Q[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Q[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ae[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==Co&&S.minFilter!==ls||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function st(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I));let te=S.source,oe=d.get(te);oe===void 0&&(oe={},d.set(te,oe));let ne=X(S);if(ne!==C.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[ne].usedTimes++;let Ie=oe[C.__cacheKey];Ie!==void 0&&(oe[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&_(S)),C.__cacheKey=ne,C.__webglTexture=oe[ne].texture}return q}function ee(C,S,q){let te=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=n.TEXTURE_3D);let oe=st(C,S),ne=S.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+q);let Ie=i.get(ne);if(ne.version!==Ie.__version||oe===!0){t.activeTexture(n.TEXTURE0+q);let ge=ht.getPrimaries(ht.workingColorSpace),Me=S.colorSpace===ki?null:ht.getPrimaries(S.colorSpace),Qe=S.colorSpace===ki||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let he=x(S.image,!1,s.maxTextureSize);he=We(S,he);let Ce=r.convert(S.format,S.colorSpace),qe=r.convert(S.type),$e=y(S.internalFormat,Ce,qe,S.colorSpace,S.isVideoTexture);Fe(te,S);let Pe,ct=S.mipmaps,je=S.isVideoTexture!==!0,ft=Ie.__version===void 0||oe===!0,F=ne.dataReady,xe=U(S,he);if(S.isDepthTexture)$e=v(S.format===Vi,S.type),ft&&(je?t.texStorage2D(n.TEXTURE_2D,1,$e,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,$e,he.width,he.height,0,Ce,qe,null));else if(S.isDataTexture)if(ct.length>0){je&&ft&&t.texStorage2D(n.TEXTURE_2D,xe,$e,ct[0].width,ct[0].height);for(let K=0,se=ct.length;K<se;K++)Pe=ct[K],je?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ce,qe,Pe.data):t.texImage2D(n.TEXTURE_2D,K,$e,Pe.width,Pe.height,0,Ce,qe,Pe.data);S.generateMipmaps=!1}else je?(ft&&t.texStorage2D(n.TEXTURE_2D,xe,$e,he.width,he.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Ce,qe,he.data)):t.texImage2D(n.TEXTURE_2D,0,$e,he.width,he.height,0,Ce,qe,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,$e,ct[0].width,ct[0].height,he.depth);for(let K=0,se=ct.length;K<se;K++)if(Pe=ct[K],S.format!==En)if(Ce!==null)if(je){if(F)if(S.layerUpdates.size>0){let Ae=Ff(Pe.width,Pe.height,S.format,S.type);for(let we of S.layerUpdates){let et=Pe.data.subarray(we*Ae/Pe.data.BYTES_PER_ELEMENT,(we+1)*Ae/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,we,Pe.width,Pe.height,1,Ce,et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,he.depth,Ce,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,$e,Pe.width,Pe.height,he.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,he.depth,Ce,qe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,$e,Pe.width,Pe.height,he.depth,0,Ce,qe,Pe.data)}else{je&&ft&&t.texStorage2D(n.TEXTURE_2D,xe,$e,ct[0].width,ct[0].height);for(let K=0,se=ct.length;K<se;K++)Pe=ct[K],S.format!==En?Ce!==null?je?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,$e,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ce,qe,Pe.data):t.texImage2D(n.TEXTURE_2D,K,$e,Pe.width,Pe.height,0,Ce,qe,Pe.data)}else if(S.isDataArrayTexture)if(je){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,$e,he.width,he.height,he.depth),F)if(S.layerUpdates.size>0){let K=Ff(he.width,he.height,S.format,S.type);for(let se of S.layerUpdates){let Ae=he.data.subarray(se*K/he.data.BYTES_PER_ELEMENT,(se+1)*K/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Ce,qe,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,qe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,he.width,he.height,he.depth,0,Ce,qe,he.data);else if(S.isData3DTexture)je?(ft&&t.texStorage3D(n.TEXTURE_3D,xe,$e,he.width,he.height,he.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,qe,he.data)):t.texImage3D(n.TEXTURE_3D,0,$e,he.width,he.height,he.depth,0,Ce,qe,he.data);else if(S.isFramebufferTexture){if(ft)if(je)t.texStorage2D(n.TEXTURE_2D,xe,$e,he.width,he.height);else{let K=he.width,se=he.height;for(let Ae=0;Ae<xe;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,$e,K,se,0,Ce,qe,null),K>>=1,se>>=1}}else if(ct.length>0){if(je&&ft){let K=be(ct[0]);t.texStorage2D(n.TEXTURE_2D,xe,$e,K.width,K.height)}for(let K=0,se=ct.length;K<se;K++)Pe=ct[K],je?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ce,qe,Pe):t.texImage2D(n.TEXTURE_2D,K,$e,Ce,qe,Pe);S.generateMipmaps=!1}else if(je){if(ft){let K=be(he);t.texStorage2D(n.TEXTURE_2D,xe,$e,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,qe,he)}else t.texImage2D(n.TEXTURE_2D,0,$e,Ce,qe,he);g(S)&&m(te),Ie.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ue(C,S,q){if(S.image.length!==6)return;let te=st(C,S),oe=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let ne=i.get(oe);if(oe.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+q);let Ie=ht.getPrimaries(ht.workingColorSpace),ge=S.colorSpace===ki?null:ht.getPrimaries(S.colorSpace),Me=S.colorSpace===ki||Ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Qe=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let se=0;se<6;se++)!Qe&&!he?Ce[se]=x(S.image[se],!0,s.maxCubemapSize):Ce[se]=he?S.image[se].image:S.image[se],Ce[se]=We(S,Ce[se]);let qe=Ce[0],$e=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),ct=y(S.internalFormat,$e,Pe,S.colorSpace),je=S.isVideoTexture!==!0,ft=ne.__version===void 0||te===!0,F=oe.dataReady,xe=U(S,qe);Fe(n.TEXTURE_CUBE_MAP,S);let K;if(Qe){je&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ct,qe.width,qe.height);for(let se=0;se<6;se++){K=Ce[se].mipmaps;for(let Ae=0;Ae<K.length;Ae++){let we=K[Ae];S.format!==En?$e!==null?je?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,we.width,we.height,$e,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,ct,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,we.width,we.height,$e,Pe,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,ct,we.width,we.height,0,$e,Pe,we.data)}}}else{if(K=S.mipmaps,je&&ft){K.length>0&&xe++;let se=be(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ct,se.width,se.height)}for(let se=0;se<6;se++)if(he){je?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce[se].width,Ce[se].height,$e,Pe,Ce[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ct,Ce[se].width,Ce[se].height,0,$e,Pe,Ce[se].data);for(let Ae=0;Ae<K.length;Ae++){let et=K[Ae].image[se].image;je?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,et.width,et.height,$e,Pe,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,ct,et.width,et.height,0,$e,Pe,et.data)}}else{je?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,$e,Pe,Ce[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ct,$e,Pe,Ce[se]);for(let Ae=0;Ae<K.length;Ae++){let we=K[Ae];je?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,$e,Pe,we.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,ct,$e,Pe,we.image[se])}}}g(S)&&m(n.TEXTURE_CUBE_MAP),ne.__version=oe.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Re(C,S,q,te,oe,ne){let Ie=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Me=y(q.internalFormat,Ie,ge,q.colorSpace),Qe=i.get(S),he=i.get(q);if(he.__renderTarget=S,!Qe.__hasExternalTextures){let Ce=Math.max(1,S.width>>ne),qe=Math.max(1,S.height>>ne);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ne,Me,Ce,qe,S.depth,0,Ie,ge,null):t.texImage2D(oe,ne,Me,Ce,qe,0,Ie,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,oe,he.__webglTexture,0,ce(S)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,oe,he.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(C,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let te=S.depthTexture,oe=te&&te.isDepthTexture?te.type:null,ne=v(S.stencilBuffer,oe),Ie=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=ce(S);Te(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ne,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,C)}else{let te=S.textures;for(let oe=0;oe<te.length;oe++){let ne=te[oe],Ie=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),Me=y(ne.internalFormat,Ie,ge,ne.colorSpace),Qe=ce(S);q&&Te(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Me,S.width,S.height):Te(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,Me,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Me,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=i.get(S.depthTexture);te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);let oe=te.__webglTexture,ne=ce(S);if(S.depthTexture.format===Ys)Te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Vi)Te(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ve(C){let S=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let te=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=te}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,C)}else if(q){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=n.createRenderbuffer(),fe(S.__webglDepthbuffer[te],C,!1);else{let oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),fe(S.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(C,S,q){let te=i.get(C);S!==void 0&&Re(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ve(C)}function lt(C){let S=C.texture,q=i.get(C),te=i.get(S);C.addEventListener("dispose",D);let oe=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Ie=oe.length>1;if(Ie||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=S.version,o.memory.textures++),ne){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let Me=0;Me<S.mipmaps.length;Me++)q.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else q.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)q.__webglFramebuffer[ge]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ge=0,Me=oe.length;ge<Me;ge++){let Qe=i.get(oe[ge]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Te(C)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){let Me=oe[ge];q.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);let Qe=r.convert(Me.format,Me.colorSpace),he=r.convert(Me.type),Ce=y(Me.internalFormat,Qe,he,Me.colorSpace,C.isXRRenderTarget===!0),qe=ce(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ce,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Re(q.__webglFramebuffer[ge][Me],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else Re(q.__webglFramebuffer[ge],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,Me=oe.length;ge<Me;ge++){let Qe=oe[ge],he=i.get(Qe);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Fe(n.TEXTURE_2D,Qe),Re(q.__webglFramebuffer,C,Qe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),g(Qe)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),Fe(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Re(q.__webglFramebuffer[Me],C,S,n.COLOR_ATTACHMENT0,ge,Me);else Re(q.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ge,0);g(S)&&m(ge),t.unbindTexture()}C.depthBuffer&&Ve(C)}function ie(C){let S=C.textures;for(let q=0,te=S.length;q<te;q++){let oe=S[q];if(g(oe)){let ne=b(C),Ie=i.get(oe).__webglTexture;t.bindTexture(ne,Ie),m(ne),t.unbindTexture()}}}let de=[],N=[];function Ue(C){if(C.samples>0){if(Te(C)===!1){let S=C.textures,q=C.width,te=C.height,oe=n.COLOR_BUFFER_BIT,ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(C),ge=S.length>1;if(ge)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);let Qe=i.get(S[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,q,te,0,0,q,te,oe,n.NEAREST),l===!0&&(de.length=0,N.length=0,de.push(n.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(de.push(ne),N.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Me]);let Qe=i.get(S[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ce(C){return Math.min(s.maxSamples,C.samples)}function Te(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function me(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function We(C,S){let q=C.colorSpace,te=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==hr&&q!==ki&&(ht.getTransfer(q)===vt?(te!==En||oe!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=Be,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Te}function b1(n,e){function t(i,s=ki){let r,o=ht.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===kh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sd)return n.BYTE;if(i===rd)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===Oh)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===ld)return n.RGB;if(i===En)return n.RGBA;if(i===cd)return n.LUMINANCE;if(i===hd)return n.LUMINANCE_ALPHA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Bh)return n.RED;if(i===Hh)return n.RED_INTEGER;if(i===ud)return n.RG;if(i===Vh)return n.RG_INTEGER;if(i===Gh)return n.RGBA_INTEGER;if(i===ra||i===oa||i===aa||i===la)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vc||i===yc||i===_c||i===Mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===wc||i===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bc||i===wc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ec||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Dc||i===Lc||i===Uc||i===Nc||i===zc||i===Oc||i===kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ac)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===Fc||i===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ca)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fd||i===Hc||i===Vc||i===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var sh=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ge=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},w1={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new gn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bt({vertexShader:S1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends Gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=new rh,g=t.getContextAttributes(),m=null,b=null,y=[],v=[],U=new re,I=null,D=new on;D.viewport=new Mt;let w=new on;w.viewport=new Mt;let _=[D,w],M=new sh,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Fr,y[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Fr,y[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=y[ee];return ue===void 0&&(ue=new Fr,y[ee]=ue),ue.getHandSpace()};function z(ee){let ue=v.indexOf(ee.inputSource);if(ue===-1)return;let Re=y[ue];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,c||o),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",O);for(let ee=0;ee<y.length;ee++){let ue=v[ee];ue!==null&&(v[ee]=null,y[ee].disconnect(ue))}R=null,k=null,x.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){let ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new jt(f.framebufferWidth,f.framebufferHeight,{format:En,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,Re=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?Vi:Ys,Re=g.stencil?Hi:cs);let Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new jt(d.textureWidth,d.textureHeight,{format:En,type:Gn,depthTexture:new tr(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(ee){for(let ue=0;ue<ee.removed.length;ue++){let Re=ee.removed[ue],fe=v.indexOf(Re);fe>=0&&(v[fe]=null,y[fe].disconnect(Re))}for(let ue=0;ue<ee.added.length;ue++){let Re=ee.added[ue],fe=v.indexOf(Re);if(fe===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=v.length){v.push(Re),fe=Ve;break}else if(v[Ve]===null){v[Ve]=Re,fe=Ve;break}if(fe===-1)break}let Le=y[fe];Le&&Le.connect(Re)}}let Y=new L,J=new L;function Z(ee,ue,Re){Y.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(Re.matrixWorld);let fe=Y.distanceTo(J),Le=ue.projectionMatrix.elements,Ve=Re.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),lt=Le[14]/(Le[10]+1),ie=(Le[9]+1)/Le[5],de=(Le[9]-1)/Le[5],N=(Le[8]-1)/Le[0],Ue=(Ve[8]+1)/Ve[0],ce=Be*N,Te=Be*Ue,me=fe/(-N+Ue),We=me*-N;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(We),ee.translateZ(me),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let be=Be+me,C=lt+me,S=ce-We,q=Te+(fe-We),te=ie*lt/C*be,oe=de*lt/C*be;ee.projectionMatrix.makePerspective(S,q,te,oe,be,C),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Q(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ue=ee.near,Re=ee.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),M.near=w.near=D.near=ue,M.far=w.far=D.far=Re,(R!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,k=M.far),D.layers.mask=ee.layers.mask|2,w.layers.mask=ee.layers.mask|4,M.layers.mask=D.layers.mask|w.layers.mask;let fe=ee.parent,Le=M.cameras;Q(M,fe);for(let Ve=0;Ve<Le.length;Ve++)Q(Le[Ve],fe);Le.length===2?Z(M,D,w):M.projectionMatrix.copy(D.projectionMatrix),ae(ee,M,fe)};function ae(ee,ue,Re){Re===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Wr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ye=null;function Fe(ee,ue){if(u=ue.getViewerPose(c||o),p=ue,u!==null){let Re=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let fe=!1;Re.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Ve=0;Ve<Re.length;Ve++){let Be=Re[Ve],lt=null;if(f!==null)lt=f.getViewport(Be);else{let de=h.getViewSubImage(d,Be);lt=de.viewport,Ve===0&&(e.setRenderTargetTextures(b,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(b))}let ie=_[Ve];ie===void 0&&(ie=new on,ie.layers.enable(Ve),ie.viewport=new Mt,_[Ve]=ie),ie.matrix.fromArray(Be.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Be.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(lt.x,lt.y,lt.width,lt.height),Ve===0&&(M.matrix.copy(ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(ie)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let Ve=h.getDepthInformation(Re[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,s.renderState)}}for(let Re=0;Re<y.length;Re++){let fe=v[Re],Le=y[Re];fe!==null&&Le!==void 0&&Le.update(fe,ue,c||o)}ye&&ye(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),p=null}let st=new vd;st.setAnimationLoop(Fe),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}},is=new Dn,T1=new Ye;function A1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,xd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===$t&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===$t&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),y=b.envMap,v=b.envMapRotation;y&&(g.envMap.value=y,is.copy(v),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(is)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function R1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let v=y.program;i.uniformBlockBinding(b,v)}function c(b,y){let v=s[b.id];v===void 0&&(p(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",g));let U=y.program;i.updateUBOMapping(b,U);let I=e.render.frame;r[b.id]!==I&&(d(b),r[b.id]=I)}function u(b){let y=h();b.__bindingPointIndex=y;let v=n.createBuffer(),U=b.__size,I=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,U,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],v=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let I=0,D=v.length;I<D;I++){let w=Array.isArray(v[I])?v[I]:[v[I]];for(let _=0,M=w.length;_<M;_++){let R=w[_];if(f(R,I,_,U)===!0){let k=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],X=0;for(let O=0;O<z.length;O++){let Y=z[O],J=x(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,k+X,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,y,v,U){let I=b.value,D=y+"_"+v;if(U[D]===void 0)return typeof I=="number"||typeof I=="boolean"?U[D]=I:U[D]=I.clone(),!0;{let w=U[D];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return U[D]=I,!0}else if(w.equals(I)===!1)return w.copy(I),!0}return!1}function p(b){let y=b.uniforms,v=0,U=16;for(let D=0,w=y.length;D<w;D++){let _=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,R=_.length;M<R;M++){let k=_[M],z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,O=z.length;X<O;X++){let Y=z[X],J=x(Y),Z=v%U,Q=Z%J.boundary,ae=Z+Q;v+=Q,ae!==0&&U-ae<J.storage&&(v+=U-ae),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=J.storage}}}let I=v%U;return I>0&&(v+=U-I),b.__size=v,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var _a=class{constructor(e={}){let{canvas:t=L0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Fi,this.toneMappingExposure=1;let v=this,U=!1,I=0,D=0,w=null,_=-1,M=null,R=new Mt,k=new Mt,z=null,X=new De(0),O=0,Y=t.width,J=t.height,Z=1,Q=null,ae=null,ye=new Mt(0,0,Y,J),Fe=new Mt(0,0,Y,J),st=!1,ee=new Yr,ue=!1,Re=!1,fe=new Ye,Le=new Ye,Ve=new L,Be=new Mt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function de(){return w===null?Z:1}let N=i;function Ue(A,G){return t.getContext(A,G)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",we,!1),N===null){let G="webgl2";if(N=Ue(G,A),N===null)throw Ue(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,Te,me,We,be,C,S,q,te,oe,ne,Ie,ge,Me,Qe,he,Ce,qe,$e,Pe,ct,je,ft,F;function xe(){ce=new Wx(N),ce.init(),je=new b1(N,ce),Te=new kx(N,ce,e,je),me=new y1(N,ce),Te.reverseDepthBuffer&&d&&me.buffers.depth.setReversed(!0),We=new qx(N),be=new o1,C=new M1(N,ce,me,be,Te,je,We),S=new Bx(v),q=new Gx(v),te=new em(N),ft=new zx(N,te),oe=new Xx(N,te,We,ft),ne=new $x(N,oe,te,We),$e=new Zx(N,Te,C),he=new Fx(be),Ie=new r1(v,S,q,ce,Te,ft,he),ge=new A1(v,be),Me=new l1,Qe=new p1(ce),qe=new Nx(v,S,q,me,ne,f,l),Ce=new x1(v,ne,Te),F=new R1(N,We,Te,me),Pe=new Ox(N,ce,We),ct=new Yx(N,ce,We),We.programs=Ie.programs,v.capabilities=Te,v.extensions=ce,v.properties=be,v.renderLists=Me,v.shadowMap=Ce,v.state=me,v.info=We}xe();let K=new oh(v,N);this.xr=K,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(Y,J,!1))},this.getSize=function(A){return A.set(Y,J)},this.setSize=function(A,G,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,J=G,t.width=Math.floor(A*Z),t.height=Math.floor(G*Z),$===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Y*Z,J*Z).floor()},this.setDrawingBufferSize=function(A,G,$){Y=A,J=G,Z=$,t.width=Math.floor(A*$),t.height=Math.floor(G*$),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,G,$,j){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,G,$,j),me.viewport(R.copy(ye).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,G,$,j){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,G,$,j),me.scissor(k.copy(Fe).multiplyScalar(Z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){me.setScissorTest(st=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,G=!0,$=!0){let j=0;if(A){let W=!1;if(w!==null){let pe=w.texture.format;W=pe===Gh||pe===Vh||pe===Hh}if(W){let pe=w.texture.type,Se=pe===Gn||pe===cs||pe===Gr||pe===Hi||pe===kh||pe===Fh,Ne=qe.getClearColor(),ze=qe.getClearAlpha(),Ke=Ne.r,tt=Ne.g,Oe=Ne.b;Se?(p[0]=Ke,p[1]=tt,p[2]=Oe,p[3]=ze,N.clearBufferuiv(N.COLOR,0,p)):(x[0]=Ke,x[1]=tt,x[2]=Oe,x[3]=ze,N.clearBufferiv(N.COLOR,0,x))}else j|=N.COLOR_BUFFER_BIT}G&&(j|=N.DEPTH_BUFFER_BIT),$&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Me.dispose(),Qe.dispose(),be.dispose(),S.dispose(),q.dispose(),ne.dispose(),ft.dispose(),F.dispose(),Ie.dispose(),K.dispose(),K.removeEventListener("sessionstart",Iu),K.removeEventListener("sessionend",Du),Ji.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let A=We.autoReset,G=Ce.enabled,$=Ce.autoUpdate,j=Ce.needsUpdate,W=Ce.type;xe(),We.autoReset=A,Ce.enabled=G,Ce.autoUpdate=$,Ce.needsUpdate=j,Ce.type=W}function we(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){let G=A.target;G.removeEventListener("dispose",et),Nt(G)}function Nt(A){tn(A),be.remove(A)}function tn(A){let G=be.get(A).programs;G!==void 0&&(G.forEach(function($){Ie.releaseProgram($)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,$,j,W,pe){G===null&&(G=lt);let Se=W.isMesh&&W.matrixWorld.determinant()<0,Ne=kp(A,G,$,j,W);me.setMaterial(j,Se);let ze=$.index,Ke=1;if(j.wireframe===!0){if(ze=oe.getWireframeAttribute($),ze===void 0)return;Ke=2}let tt=$.drawRange,Oe=$.attributes.position,dt=tt.start*Ke,Et=(tt.start+tt.count)*Ke;pe!==null&&(dt=Math.max(dt,pe.start*Ke),Et=Math.min(Et,(pe.start+pe.count)*Ke)),ze!==null?(dt=Math.max(dt,0),Et=Math.min(Et,ze.count)):Oe!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Oe.count));let At=Et-dt;if(At<0||At===1/0)return;ft.setup(W,j,Ne,$,ze);let mn,gt=Pe;if(ze!==null&&(mn=te.get(ze),gt=ct,gt.setIndex(mn)),W.isMesh)j.wireframe===!0?(me.setLineWidth(j.wireframeLinewidth*de()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(W.isLine){let He=j.linewidth;He===void 0&&(He=1),me.setLineWidth(He*de()),W.isLineSegments?gt.setMode(N.LINES):W.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else W.isPoints?gt.setMode(N.POINTS):W.isSprite&&gt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)gt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let He=W._multiDrawStarts,li=W._multiDrawCounts,xt=W._multiDrawCount,Fn=ze?te.get(ze).bytesPerElement:1,Ts=be.get(j).currentProgram.getUniforms();for(let Mn=0;Mn<xt;Mn++)Ts.setValue(N,"_gl_DrawID",Mn),gt.render(He[Mn]/Fn,li[Mn])}else if(W.isInstancedMesh)gt.renderInstances(dt,At,W.count);else if($.isInstancedBufferGeometry){let He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,li=Math.min($.instanceCount,He);gt.renderInstances(dt,At,li)}else gt.render(dt,At)};function _t(A,G,$){A.transparent===!0&&A.side===Pt&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,Ro(A,G,$),A.side=Qn,A.needsUpdate=!0,Ro(A,G,$),A.side=Pt):Ro(A,G,$)}this.compile=function(A,G,$=null){$===null&&($=A),m=Qe.get($),m.init(G),y.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==$&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();let j=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pe=W.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let Ne=pe[Se];_t(Ne,$,W),j.add(Ne)}else _t(pe,$,W),j.add(pe)}),y.pop(),m=null,j},this.compileAsync=function(A,G,$=null){let j=this.compile(A,G,$);return new Promise(W=>{function pe(){if(j.forEach(function(Se){be.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){W(A);return}setTimeout(pe,10)}ce.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let kn=null;function ai(A){kn&&kn(A)}function Iu(){Ji.stop()}function Du(){Ji.start()}let Ji=new vd;Ji.setAnimationLoop(ai),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(A){kn=A,K.setAnimationLoop(A),A===null?Ji.stop():Ji.start()},K.addEventListener("sessionstart",Iu),K.addEventListener("sessionend",Du),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(G),G=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,w),m=Qe.get(A,y.length),m.init(G),y.push(m),Le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee.setFromProjectionMatrix(Le),Re=this.localClippingEnabled,ue=he.init(this.clippingPlanes,Re),g=Me.get(A,b.length),g.init(),b.push(g),K.enabled===!0&&K.isPresenting===!0){let pe=v.xr.getDepthSensingMesh();pe!==null&&El(pe,G,-1/0,v.sortObjects)}El(A,G,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Q,ae),ie=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ie&&qe.addToRenderList(g,A),this.info.render.frame++,ue===!0&&he.beginShadows();let $=m.state.shadowsArray;Ce.render($,A,G),ue===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,W=g.transmissive;if(m.setupLights(),G.isArrayCamera){let pe=G.cameras;if(W.length>0)for(let Se=0,Ne=pe.length;Se<Ne;Se++){let ze=pe[Se];Uu(j,W,A,ze)}ie&&qe.render(A);for(let Se=0,Ne=pe.length;Se<Ne;Se++){let ze=pe[Se];Lu(g,A,ze,ze.viewport)}}else W.length>0&&Uu(j,W,A,G),ie&&qe.render(A),Lu(g,A,G);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,G),ft.resetDefaultState(),_=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],ue===!0&&he.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function El(A,G,$,j){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){j&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);let Se=ne.update(A),Ne=A.material;Ne.visible&&g.push(A,Se,Ne,$,Be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){let Se=ne.update(A),Ne=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Be.copy(Se.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Ne)){let ze=Se.groups;for(let Ke=0,tt=ze.length;Ke<tt;Ke++){let Oe=ze[Ke],dt=Ne[Oe.materialIndex];dt&&dt.visible&&g.push(A,Se,dt,$,Be.z,Oe)}}else Ne.visible&&g.push(A,Se,Ne,$,Be.z,null)}}let pe=A.children;for(let Se=0,Ne=pe.length;Se<Ne;Se++)El(pe[Se],G,$,j)}function Lu(A,G,$,j){let W=A.opaque,pe=A.transmissive,Se=A.transparent;m.setupLightsView($),ue===!0&&he.setGlobalState(v.clippingPlanes,$),j&&me.viewport(R.copy(j)),W.length>0&&Ao(W,G,$),pe.length>0&&Ao(pe,G,$),Se.length>0&&Ao(Se,G,$),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Uu(A,G,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new jt(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?xn:Gn,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let pe=m.state.transmissionRenderTarget[j.id],Se=j.viewport||R;pe.setSize(Se.z,Se.w);let Ne=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(X),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),ie&&qe.render($);let ze=v.toneMapping;v.toneMapping=Fi;let Ke=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ue===!0&&he.setGlobalState(v.clippingPlanes,j),Ao(A,$,j),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Oe=0,dt=G.length;Oe<dt;Oe++){let Et=G[Oe],At=Et.object,mn=Et.geometry,gt=Et.material,He=Et.group;if(gt.side===Pt&&At.layers.test(j.layers)){let li=gt.side;gt.side=$t,gt.needsUpdate=!0,Nu(At,$,j,mn,gt,He),gt.side=li,gt.needsUpdate=!0,tt=!0}}tt===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ne),v.setClearColor(X,O),Ke!==void 0&&(j.viewport=Ke),v.toneMapping=ze}function Ao(A,G,$){let j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,pe=A.length;W<pe;W++){let Se=A[W],Ne=Se.object,ze=Se.geometry,Ke=j===null?Se.material:j,tt=Se.group;Ne.layers.test($.layers)&&Nu(Ne,G,$,ze,Ke,tt)}}function Nu(A,G,$,j,W,pe){A.onBeforeRender(v,G,$,j,W,pe),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,G,$,j,A,pe),W.transparent===!0&&W.side===Pt&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,v.renderBufferDirect($,G,j,W,A,pe),W.side=Qn,W.needsUpdate=!0,v.renderBufferDirect($,G,j,W,A,pe),W.side=Pt):v.renderBufferDirect($,G,j,W,A,pe),A.onAfterRender(v,G,$,j,W,pe)}function Ro(A,G,$){G.isScene!==!0&&(G=lt);let j=be.get(A),W=m.state.lights,pe=m.state.shadowsArray,Se=W.state.version,Ne=Ie.getParameters(A,W.state,pe,G,$),ze=Ie.getProgramCacheKey(Ne),Ke=j.programs;j.environment=A.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(A.isMeshStandardMaterial?q:S).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",et),Ke=new Map,j.programs=Ke);let tt=Ke.get(ze);if(tt!==void 0){if(j.currentProgram===tt&&j.lightsStateVersion===Se)return Ou(A,Ne),tt}else Ne.uniforms=Ie.getUniforms(A),A.onBeforeCompile(Ne,v),tt=Ie.acquireProgram(Ne,ze),Ke.set(ze,tt),j.uniforms=Ne.uniforms;let Oe=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=he.uniform),Ou(A,Ne),j.needsLights=Bp(A),j.lightsStateVersion=Se,j.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=tt,j.uniformsList=null,tt}function zu(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Zs.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ou(A,G){let $=be.get(A);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function kp(A,G,$,j,W){G.isScene!==!0&&(G=lt),C.resetTextureUnits();let pe=G.fog,Se=j.isMeshStandardMaterial?G.environment:null,Ne=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:hr,ze=(j.isMeshStandardMaterial?q:S).get(j.envMap||Se),Ke=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,tt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,At=Fi;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=v.toneMapping);let mn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=mn!==void 0?mn.length:0,He=be.get(j),li=m.state.lights;if(ue===!0&&(Re===!0||A!==M)){let Cn=A===M&&j.id===_;he.setState(j,A,Cn)}let xt=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==li.state.version||He.outputColorSpace!==Ne||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==ze||j.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==Ke||He.vertexTangents!==tt||He.morphTargets!==Oe||He.morphNormals!==dt||He.morphColors!==Et||He.toneMapping!==At||He.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,He.__version=j.version);let Fn=He.currentProgram;xt===!0&&(Fn=Ro(j,G,W));let Ts=!1,Mn=!1,Er=!1,Rt=Fn.getUniforms(),jn=He.uniforms;if(me.useProgram(Fn.program)&&(Ts=!0,Mn=!0,Er=!0),j.id!==_&&(_=j.id,Mn=!0),Ts||M!==A){me.buffers.depth.getReversed()?(fe.copy(A.projectionMatrix),N0(fe),z0(fe),Rt.setValue(N,"projectionMatrix",fe)):Rt.setValue(N,"projectionMatrix",A.projectionMatrix),Rt.setValue(N,"viewMatrix",A.matrixWorldInverse);let Pi=Rt.map.cameraPosition;Pi!==void 0&&Pi.setValue(N,Ve.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&Rt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Rt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Mn=!0,Er=!0)}if(W.isSkinnedMesh){Rt.setOptional(N,W,"bindMatrix"),Rt.setOptional(N,W,"bindMatrixInverse");let Cn=W.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Rt.setValue(N,"boneTexture",Cn.boneTexture,C))}W.isBatchedMesh&&(Rt.setOptional(N,W,"batchingTexture"),Rt.setValue(N,"batchingTexture",W._matricesTexture,C),Rt.setOptional(N,W,"batchingIdTexture"),Rt.setValue(N,"batchingIdTexture",W._indirectTexture,C),Rt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Rt.setValue(N,"batchingColorTexture",W._colorsTexture,C));let Tr=$.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&$e.update(W,$,Fn),(Mn||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Rt.setValue(N,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(jn.envMap.value=ze,jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(jn.envMapIntensity.value=G.environmentIntensity),Mn&&(Rt.setValue(N,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Fp(jn,Er),pe&&j.fog===!0&&ge.refreshFogUniforms(jn,pe),ge.refreshMaterialUniforms(jn,j,Z,J,m.state.transmissionRenderTarget[A.id]),Zs.upload(N,zu(He),jn,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Zs.upload(N,zu(He),jn,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Rt.setValue(N,"center",W.center),Rt.setValue(N,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(N,"normalMatrix",W.normalMatrix),Rt.setValue(N,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Cn=j.uniformsGroups;for(let Pi=0,Ii=Cn.length;Pi<Ii;Pi++){let ku=Cn[Pi];F.update(ku,Fn),F.bind(ku,Fn)}}return Fn}function Fp(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Bp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,$){be.get(A.texture).__webglTexture=G,be.get(A.depthTexture).__webglTexture=$;let j=be.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){let $=be.get(A);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,$=0){w=A,I=G,D=$;let j=!0,W=null,pe=!1,Se=!1;if(A){let ze=be.get(A);if(ze.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(ze.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(ze.__hasExternalTextures)C.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Oe=A.depthTexture;if(ze.__boundDepthTexture!==Oe){if(Oe!==null&&be.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Se=!0);let tt=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[G])?W=tt[G][$]:W=tt[G],pe=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?W=be.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[$]:W=tt,R.copy(A.viewport),k.copy(A.scissor),z=A.scissorTest}else R.copy(ye).multiplyScalar(Z).floor(),k.copy(Fe).multiplyScalar(Z).floor(),z=st;if(me.bindFramebuffer(N.FRAMEBUFFER,W)&&j&&me.drawBuffers(A,W),me.viewport(R),me.scissor(k),me.setScissorTest(z),pe){let ze=be.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,$)}else if(Se){let ze=be.get(A.texture),Ke=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,$||0,Ke)}_=-1},this.readRenderTargetPixels=function(A,G,$,j,W,pe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){me.bindFramebuffer(N.FRAMEBUFFER,Ne);try{let ze=A.texture,Ke=ze.format,tt=ze.type;if(!Te.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-j&&$>=0&&$<=A.height-W&&N.readPixels(G,$,j,W,je.convert(Ke),je.convert(tt),pe)}finally{let ze=w!==null?be.get(w).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,G,$,j,W,pe,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){let ze=A.texture,Ke=ze.format,tt=ze.type;if(!Te.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-j&&$>=0&&$<=A.height-W){me.bindFramebuffer(N.FRAMEBUFFER,Ne);let Oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(G,$,j,W,je.convert(Ke),je.convert(tt),0);let dt=w!==null?be.get(w).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,dt);let Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await U0(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(Oe),N.deleteSync(Et),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,$=0){A.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);let j=Math.pow(2,-$),W=Math.floor(A.image.width*j),pe=Math.floor(A.image.height*j),Se=G!==null?G.x:0,Ne=G!==null?G.y:0;C.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Se,Ne,W,pe),me.unbindTexture()},this.copyTextureToTexture=function(A,G,$=null,j=null,W=0){A.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,$=null);let pe,Se,Ne,ze,Ke,tt,Oe,dt,Et,At=A.isCompressedTexture?A.mipmaps[W]:A.image;$!==null?(pe=$.max.x-$.min.x,Se=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,Ke=$.min.y,tt=$.isBox3?$.min.z:0):(pe=At.width,Se=At.height,Ne=At.depth||1,ze=0,Ke=0,tt=0),j!==null?(Oe=j.x,dt=j.y,Et=j.z):(Oe=0,dt=0,Et=0);let mn=je.convert(G.format),gt=je.convert(G.type),He;G.isData3DTexture?(C.setTexture3D(G,0),He=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(C.setTexture2DArray(G,0),He=N.TEXTURE_2D_ARRAY):(C.setTexture2D(G,0),He=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let li=N.getParameter(N.UNPACK_ROW_LENGTH),xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ts=N.getParameter(N.UNPACK_SKIP_ROWS),Mn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,tt);let Er=A.isDataArrayTexture||A.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let jn=be.get(A),Tr=be.get(G),Cn=be.get(jn.__renderTarget),Pi=be.get(Tr.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Cn.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ii=0;Ii<Ne;Ii++)Er&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(A).__webglTexture,W,tt+Ii),A.isDepthTexture?(Rt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(G).__webglTexture,W,Et+Ii),N.blitFramebuffer(ze,Ke,pe,Se,Oe,dt,pe,Se,N.DEPTH_BUFFER_BIT,N.NEAREST)):Rt?N.copyTexSubImage3D(He,W,Oe,dt,Et+Ii,ze,Ke,pe,Se):N.copyTexSubImage2D(He,W,Oe,dt,Et+Ii,ze,Ke,pe,Se);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(He,W,Oe,dt,Et,pe,Se,Ne,mn,gt,At.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(He,W,Oe,dt,Et,pe,Se,Ne,mn,At.data):N.texSubImage3D(He,W,Oe,dt,Et,pe,Se,Ne,mn,gt,At):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,Oe,dt,pe,Se,mn,gt,At.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,Oe,dt,At.width,At.height,mn,At.data):N.texSubImage2D(N.TEXTURE_2D,W,Oe,dt,pe,Se,mn,gt,At);N.pixelStorei(N.UNPACK_ROW_LENGTH,li),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ts),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Mn),W===0&&G.generateMipmaps&&N.generateMipmap(He),me.unbindTexture()},this.copyTextureToTexture3D=function(A,G,$=null,j=null,W=0){return A.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,$,j,W)},this.initRenderTarget=function(A){be.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){I=0,D=0,w=null,me.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Ma=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ni=class extends gn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=an,u=an,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new Ye,Bf=new Ye,jo=[],Hf=new yi,C1=new Ye,Ir=new Ee,Dr=new _i,ir=class extends Ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,C1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),Hf.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hs),Dr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Bf.multiplyMatrices(i,Hs),Ir.matrixWorld=Bf,Ir.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){let l=jo[o];l.instanceId=r,l.object=this,t.push(l)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(s*this.count),s,this.count,Bh,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zr=class extends ti{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ba=new L,wa=new L,Vf=new Ye,Lr=new Xr,Jo=new _i,ec=new L,Gf=new L,ah=class extends kt{constructor(e=new It,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ba.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ba.distanceTo(wa);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Vf.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Vf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=u.getX(x),b=u.getX(x+1),y=Ko(this,e,Lr,l,m,b);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(p-1),g=u.getX(f),m=Ko(this,e,Lr,l,x,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,g=p-1;x<g;x+=c){let m=Ko(this,e,Lr,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=Ko(this,e,Lr,l,p-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ko(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(ba.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,r),t.distanceSqToSegment(ba,wa,ec,Gf)>i)return;ec.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ec);if(!(l<e.near||l>e.far))return{distance:l,point:Gf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Wf=new L,Xf=new L,Sa=class extends ah{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wf.fromBufferAttribute(t,s),Xf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wf.distanceTo(Xf);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $r=class extends ti{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yf=new Ye,lh=new Xr,Qo=new _i,ea=new L,Ea=class extends kt{constructor(e=new It,t=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Yf.copy(s).invert(),lh.copy(e.ray).applyMatrix4(Yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);ea.fromBufferAttribute(h,g),qf(ea,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)ea.fromBufferAttribute(h,p),qf(ea,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qf(n,e,t,i,s,r,o){let a=lh.distanceSqToPoint(n);if(a<t){let l=new L;lh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var sr=class extends gn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,s=[],r=[],o=[],a=new L,l=new Ye;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jr=class extends Un{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ch=class extends jr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ta=new L,tc=new Zh,nc=new Zh,ic=new Zh,hh=class extends Un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ta.subVectors(s[0],s[1]).add(s[0]),c=ta);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ta),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),tc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,g),nc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,g),ic.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),nc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ic.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(tc.calc(l),nc.calc(l),ic.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function P1(n,e){let t=1-n;return t*t*e}function I1(n,e){return 2*(1-n)*n*e}function D1(n,e){return n*n*e}function Br(n,e,t,i){return P1(n,e)+I1(n,t)+D1(n,i)}function L1(n,e){let t=1-n;return t*t*t*e}function U1(n,e){let t=1-n;return 3*t*t*n*e}function N1(n,e){return 3*(1-n)*n*n*e}function z1(n,e){return n*n*n*e}function Hr(n,e,t,i,s){return L1(n,e)+U1(n,t)+N1(n,i)+z1(n,s)}var Ta=class extends Un{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uh=class extends Un{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Hr(e,s.x,r.x,o.x,a.x),Hr(e,s.y,r.y,o.y,a.y),Hr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Un{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fh=class extends Un{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Un{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dh=class extends Un{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Zf(a,l.x,c.x,u.x,h.x),Zf(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},ph=Object.freeze({__proto__:null,ArcCurve:ch,CatmullRomCurve3:hh,CubicBezierCurve:Ta,CubicBezierCurve3:uh,EllipseCurve:jr,LineCurve:Aa,LineCurve3:fh,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:dh,SplineCurve:Ca}),mh=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ph[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ph[s.type]().fromJSON(s))}return this}},Jr=class extends mh{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ra(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ta(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new jr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hs=class n extends It{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new L,d=new re,f=new L,p=new L,x=new L,g=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let b=0;b<=t;b++){let y=i+b*u*s,v=Math.sin(y),U=Math.cos(y);for(let I=0;I<=e.length-1;I++){h.x=e[I].x*v,h.y=e[I].y,h.z=e[I].x*U,o.push(h.x,h.y,h.z),d.x=b/t,d.y=I/(e.length-1),a.push(d.x,d.y);let D=l[3*I+0]*v,w=l[3*I+1],_=l[3*I+0]*U;c.push(D,w,_)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let v=y+b*e.length,U=v,I=v+e.length,D=v+e.length+1,w=v+1;r.push(U,I,w),r.push(D,w,I)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Pa=class n extends hs{constructor(e=1,t=1,i=4,s=8){let r=new Jr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Xn=class n extends It{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,u=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},un=class n extends It{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,x=[],g=i/2,m=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function b(){let v=new L,U=new L,I=0,D=(t-e)/i;for(let w=0;w<=r;w++){let _=[],M=w/r,R=M*(t-e)+e;for(let k=0;k<=s;k++){let z=k/s,X=z*l+a,O=Math.sin(X),Y=Math.cos(X);U.x=R*O,U.y=-M*i+g,U.z=R*Y,h.push(U.x,U.y,U.z),v.set(O,D,Y).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-M),_.push(p++)}x.push(_)}for(let w=0;w<s;w++)for(let _=0;_<r;_++){let M=x[_][w],R=x[_+1][w],k=x[_+1][w+1],z=x[_][w+1];(e>0||_!==0)&&(u.push(M,R,z),I+=3),(t>0||_!==r-1)&&(u.push(R,k,z),I+=3)}c.addGroup(m,I,0),m+=I}function y(v){let U=p,I=new re,D=new L,w=0,_=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;let R=p;for(let k=0;k<=s;k++){let X=k/s*l+a,O=Math.cos(X),Y=Math.sin(X);D.x=_*Y,D.y=g*M,D.z=_*O,h.push(D.x,D.y,D.z),d.push(0,M,0),I.x=O*.5+.5,I.y=Y*.5*M+.5,f.push(I.x,I.y),p++}for(let k=0;k<s;k++){let z=U+k,X=R+k;v===!0?u.push(X,X+1,z):u.push(X+1,X,z),w+=3}c.addGroup(m,w,v===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ia=class n extends un{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gh=class n extends It{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new L,v=new L,U=new L;for(let I=0;I<t.length;I+=3)f(t[I+0],y),f(t[I+1],v),f(t[I+2],U),l(y,v,U,b)}function l(b,y,v,U){let I=U+1,D=[];for(let w=0;w<=I;w++){D[w]=[];let _=b.clone().lerp(v,w/I),M=y.clone().lerp(v,w/I),R=I-w;for(let k=0;k<=R;k++)k===0&&w===I?D[w][k]=_:D[w][k]=_.clone().lerp(M,k/R)}for(let w=0;w<I;w++)for(let _=0;_<2*(I-w)-1;_++){let M=Math.floor(_/2);_%2===0?(d(D[w][M+1]),d(D[w+1][M]),d(D[w][M])):(d(D[w][M+1]),d(D[w+1][M+1]),d(D[w+1][M]))}}function c(b){let y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(b),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){let b=new L;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let v=g(b)/2/Math.PI+.5,U=m(b)/Math.PI+.5;o.push(v,1-U)}p(),h()}function h(){for(let b=0;b<o.length;b+=6){let y=o[b+0],v=o[b+2],U=o[b+4],I=Math.max(y,v,U),D=Math.min(y,v,U);I>.9&&D<.1&&(y<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),U<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,y){let v=b*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){let b=new L,y=new L,v=new L,U=new L,I=new re,D=new re,w=new re;for(let _=0,M=0;_<r.length;_+=9,M+=6){b.set(r[_+0],r[_+1],r[_+2]),y.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),I.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),w.set(o[M+4],o[M+5]),U.copy(b).add(y).add(v).divideScalar(3);let R=g(U);x(I,M+0,b,R),x(D,M+2,y,R),x(w,M+4,v,R)}}function x(b,y,v,U){U<0&&b.x===1&&(o[y]=b.x-1),v.x===0&&v.z===0&&(o[y]=U/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Mi=class extends Jr{constructor(e){super(e),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Jr().fromJSON(s))}return this}},O1={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wd(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(i&&(r=V1(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let p=t;p<s;p+=t)h=n[p],d=n[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Kr(r,o,t,a,l,f,0),o}};function wd(n,e,t,i,s){let r,o;if(s===Q1(n,e,t,i)>0)for(r=e;r<t;r+=i)o=$f(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=$f(r,n[r],n[r+1],o);return o&&ja(o,o.next)&&(eo(o),o=o.next),o}function us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ja(t,t.next)||Dt(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&q1(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?F1(n,i,s,r):k1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),eo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=B1(us(n),e,t),Kr(n,e,t,i,s,r,2)):o===2&&H1(n,e,t,i,s,r):Kr(us(n),e,t,i,s,r,1);break}}}function k1(n){let e=n.prev,t=n,i=n.next;if(Dt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ws(s,a,r,l,o,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function F1(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=xh(f,p,e,t,i),b=xh(x,g,e,t,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=m&&v&&v.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ws(a,u,l,h,c,d,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Ws(a,u,l,h,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ws(a,u,l,h,c,d,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Ws(a,u,l,h,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function B1(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!ja(s,r)&&Sd(s,i,i.next,r)&&Qr(s,r)&&Qr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),eo(i),eo(i.next),i=n=r),i=i.next}while(i!==n);return us(i)}function H1(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j1(o,a)){let l=Ed(o,a);o=us(o,o.next),l=us(l,l.next),Kr(o,e,t,i,s,r,0),Kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function V1(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=wd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push($1(c));for(s.sort(G1),r=0;r<s.length;r++)t=W1(s[r],t);return t}function G1(n,e){return n.x-e.x}function W1(n,e){let t=X1(n,e);if(!t)return e;let i=Ed(t,n);return us(i,i.next),us(t,t.next)}function X1(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ws(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Qr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Y1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Y1(n,e){return Dt(n.prev,n,e.prev)<0&&Dt(e.next,n,n.next)<0}function q1(n,e,t,i){let s=n;do s.z===0&&(s.z=xh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Z1(s)}function Z1(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function xh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ws(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function j1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!J1(n,e)&&(Qr(n,e)&&Qr(e,n)&&K1(n,e)&&(Dt(n.prev,n,e.prev)||Dt(n,e.prev,e))||ja(n,e)&&Dt(n.prev,n,n.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ja(n,e){return n.x===e.x&&n.y===e.y}function Sd(n,e,t,i){let s=ia(Dt(n,e,t)),r=ia(Dt(n,e,i)),o=ia(Dt(t,i,n)),a=ia(Dt(t,i,e));return!!(s!==r&&o!==a||s===0&&na(n,t,e)||r===0&&na(n,i,e)||o===0&&na(t,n,i)||a===0&&na(t,e,i))}function na(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ia(n){return n>0?1:n<0?-1:0}function J1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qr(n,e){return Dt(n.prev,n,n.next)<0?Dt(n,e,n.next)>=0&&Dt(n,n.prev,e)>=0:Dt(n,e,n.prev)<0||Dt(n,n.next,e)<0}function K1(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ed(n,e){let t=new vh(n.i,n.x,n.y),i=new vh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $f(n,e,t,i){let s=new vh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q1(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Vr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];jf(e),Jf(i,e);let o=e.length;t.forEach(jf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Jf(i,t[l]);let a=O1.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function jf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Jf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Wi=class n extends It{constructor(e=new Mi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:ey,y,v=!1,U,I,D,w;m&&(y=m.getSpacedPoints(u),v=!0,d=!1,U=m.computeFrenetFrames(u,!1),I=new L,D=new L,w=new L),d||(g=0,f=0,p=0,x=0);let _=a.extractPoints(c),M=_.shape,R=_.holes;if(!Vr.isClockWise(M)){M=M.reverse();for(let ie=0,de=R.length;ie<de;ie++){let N=R[ie];Vr.isClockWise(N)&&(R[ie]=N.reverse())}}let z=Vr.triangulateShape(M,R),X=M;for(let ie=0,de=R.length;ie<de;ie++){let N=R[ie];M=M.concat(N)}function O(ie,de,N){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(de,N)}let Y=M.length,J=z.length;function Z(ie,de,N){let Ue,ce,Te,me=ie.x-de.x,We=ie.y-de.y,be=N.x-ie.x,C=N.y-ie.y,S=me*me+We*We,q=me*C-We*be;if(Math.abs(q)>Number.EPSILON){let te=Math.sqrt(S),oe=Math.sqrt(be*be+C*C),ne=de.x-We/te,Ie=de.y+me/te,ge=N.x-C/oe,Me=N.y+be/oe,Qe=((ge-ne)*C-(Me-Ie)*be)/(me*C-We*be);Ue=ne+me*Qe-ie.x,ce=Ie+We*Qe-ie.y;let he=Ue*Ue+ce*ce;if(he<=2)return new re(Ue,ce);Te=Math.sqrt(he/2)}else{let te=!1;me>Number.EPSILON?be>Number.EPSILON&&(te=!0):me<-Number.EPSILON?be<-Number.EPSILON&&(te=!0):Math.sign(We)===Math.sign(C)&&(te=!0),te?(Ue=-We,ce=me,Te=Math.sqrt(S)):(Ue=me,ce=We,Te=Math.sqrt(S/2))}return new re(Ue/Te,ce/Te)}let Q=[];for(let ie=0,de=X.length,N=de-1,Ue=ie+1;ie<de;ie++,N++,Ue++)N===de&&(N=0),Ue===de&&(Ue=0),Q[ie]=Z(X[ie],X[N],X[Ue]);let ae=[],ye,Fe=Q.concat();for(let ie=0,de=R.length;ie<de;ie++){let N=R[ie];ye=[];for(let Ue=0,ce=N.length,Te=ce-1,me=Ue+1;Ue<ce;Ue++,Te++,me++)Te===ce&&(Te=0),me===ce&&(me=0),ye[Ue]=Z(N[Ue],N[Te],N[me]);ae.push(ye),Fe=Fe.concat(ye)}for(let ie=0;ie<g;ie++){let de=ie/g,N=f*Math.cos(de*Math.PI/2),Ue=p*Math.sin(de*Math.PI/2)+x;for(let ce=0,Te=X.length;ce<Te;ce++){let me=O(X[ce],Q[ce],Ue);fe(me.x,me.y,-N)}for(let ce=0,Te=R.length;ce<Te;ce++){let me=R[ce];ye=ae[ce];for(let We=0,be=me.length;We<be;We++){let C=O(me[We],ye[We],Ue);fe(C.x,C.y,-N)}}}let st=p+x;for(let ie=0;ie<Y;ie++){let de=d?O(M[ie],Fe[ie],st):M[ie];v?(D.copy(U.normals[0]).multiplyScalar(de.x),I.copy(U.binormals[0]).multiplyScalar(de.y),w.copy(y[0]).add(D).add(I),fe(w.x,w.y,w.z)):fe(de.x,de.y,0)}for(let ie=1;ie<=u;ie++)for(let de=0;de<Y;de++){let N=d?O(M[de],Fe[de],st):M[de];v?(D.copy(U.normals[ie]).multiplyScalar(N.x),I.copy(U.binormals[ie]).multiplyScalar(N.y),w.copy(y[ie]).add(D).add(I),fe(w.x,w.y,w.z)):fe(N.x,N.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){let de=ie/g,N=f*Math.cos(de*Math.PI/2),Ue=p*Math.sin(de*Math.PI/2)+x;for(let ce=0,Te=X.length;ce<Te;ce++){let me=O(X[ce],Q[ce],Ue);fe(me.x,me.y,h+N)}for(let ce=0,Te=R.length;ce<Te;ce++){let me=R[ce];ye=ae[ce];for(let We=0,be=me.length;We<be;We++){let C=O(me[We],ye[We],Ue);v?fe(C.x,C.y+y[u-1].y,y[u-1].x+N):fe(C.x,C.y,h+N)}}}ee(),ue();function ee(){let ie=s.length/3;if(d){let de=0,N=Y*de;for(let Ue=0;Ue<J;Ue++){let ce=z[Ue];Le(ce[2]+N,ce[1]+N,ce[0]+N)}de=u+g*2,N=Y*de;for(let Ue=0;Ue<J;Ue++){let ce=z[Ue];Le(ce[0]+N,ce[1]+N,ce[2]+N)}}else{for(let de=0;de<J;de++){let N=z[de];Le(N[2],N[1],N[0])}for(let de=0;de<J;de++){let N=z[de];Le(N[0]+Y*u,N[1]+Y*u,N[2]+Y*u)}}i.addGroup(ie,s.length/3-ie,0)}function ue(){let ie=s.length/3,de=0;Re(X,de),de+=X.length;for(let N=0,Ue=R.length;N<Ue;N++){let ce=R[N];Re(ce,de),de+=ce.length}i.addGroup(ie,s.length/3-ie,1)}function Re(ie,de){let N=ie.length;for(;--N>=0;){let Ue=N,ce=N-1;ce<0&&(ce=ie.length-1);for(let Te=0,me=u+g*2;Te<me;Te++){let We=Y*Te,be=Y*(Te+1),C=de+Ue+We,S=de+ce+We,q=de+ce+be,te=de+Ue+be;Ve(C,S,q,te)}}}function fe(ie,de,N){l.push(ie),l.push(de),l.push(N)}function Le(ie,de,N){Be(ie),Be(de),Be(N);let Ue=s.length/3,ce=b.generateTopUV(i,s,Ue-3,Ue-2,Ue-1);lt(ce[0]),lt(ce[1]),lt(ce[2])}function Ve(ie,de,N,Ue){Be(ie),Be(de),Be(Ue),Be(de),Be(N),Be(Ue);let ce=s.length/3,Te=b.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);lt(Te[0]),lt(Te[1]),lt(Te[3]),lt(Te[1]),lt(Te[2]),lt(Te[3])}function Be(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function lt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ty(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ph[s.type]().fromJSON(s)),new n(i,e.options)}},ey={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-h),new re(d,1-p),new re(x,1-m)]:[new re(a,1-l),new re(u,1-h),new re(f,1-p),new re(g,1-m)]}};function ty(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Da=class n extends gh{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var La=class n extends It{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new L,p=new re;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let b=m+g,y=b,v=b+i+1,U=b+i+2,I=b+1;a.push(y,v,I),a.push(v,U,I)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Lt=class n extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new L,d=new L,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let b=[],y=m/i,v=0;m===0&&o===0?v=.5/t:m===i&&l===Math.PI&&(v=-.5/t);for(let U=0;U<=t;U++){let I=U/t;h.x=-e*Math.cos(s+I*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+I*r)*Math.sin(o+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(I+v,1-y),b.push(c++)}u.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){let y=u[m][b+1],v=u[m][b],U=u[m+1][b],I=u[m+1][b+1];(m!==0||o>0)&&f.push(y,v,I),(m!==i-1||l<Math.PI)&&f.push(v,U,I)}this.setIndex(f),this.setAttribute("position",new at(p,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rr=class n extends It{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new L,h=new L,d=new L;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,b=(s+1)*f+p;o.push(x,g,b),o.push(g,m,b)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ua=class extends bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},zt=class extends ti{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Na=class extends zt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var za=class extends ti{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function sa(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ny(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var or=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends or{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gu:r=e,a=2*t-i;break;case Wu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gu:o=e,l=2*i-t;break;case Wu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let U=0;U!==a;++U)r[U]=m*o[u+U]+b*o[c+U]+y*o[l+U]+v*o[h+U];return r}},_h=class extends or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Mh=class extends or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case Wc:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return Wc;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ny(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Al,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Wc;var fs=class extends Yn{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ha;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends Yn{};bh.prototype.ValueTypeName="color";var wh=class extends Yn{};wh.prototype.ValueTypeName="number";var Sh=class extends or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)ei.slerpFlat(r,0,o,c-a,o,c,l);return r}},Oa=class extends Yn{InterpolantFactoryMethodLinear(e){return new Sh(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Yn{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ha;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Eh=class extends Yn{};Eh.prototype.ValueTypeName="vector";var Th=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},iy=new Th,Ah=class{constructor(e){this.manager=e!==void 0?e:iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ah.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ka=class extends ar{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sc=new Ye,Kf=new L,Qf=new L,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Kf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kf),Qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qf),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ed=new Ye,Ur=new L,rc=new L,Rh=class extends Fa{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ur),rc.copy(i.position),rc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rc),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}},lr=class extends ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ch=class extends Fa{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ba=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ha=class extends ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Va=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=td();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function td(){return performance.now()}var $h="\\[\\]\\.:\\/",sy=new RegExp("["+$h+"]","g"),jh="[^"+$h+"]",ry="[^"+$h.replace("\\.","")+"]",oy=/((?:WC+[\/:])*)/.source.replace("WC",jh),ay=/(WCOD+)?/.source.replace("WCOD",ry),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),hy=new RegExp("^"+oy+ay+ly+cy+"$"),uy=["material","materials","bones","map"],Ph=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sy,"")}static parseTrackName(e){let t=hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);uy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ph;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},fy=new Qs(-1,1,1,-1,0,1),Jh=class extends It{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},dy=new Jh,si=class{constructor(e){this._mesh=new Ee(dy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ja=class extends fn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new si(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var no=class extends fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ka=class extends fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Qa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ja(Xi),this.copyPass.material.blending=Vt,this.clock=new Va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}no!==void 0&&(o instanceof no?i=!0:o instanceof Ka&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var el=class extends fn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Td={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fr=class n extends fn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new jt(r,o,{type:xn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new jt(r,o,{type:xn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Td;this.highPassUniforms=vn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Xi;this.copyUniforms=vn.clone(u.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new Bt,this.fsQuad=new si(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};fr.BlurDirectionX=new re(1,0);fr.BlurDirectionY=new re(0,1);var io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ye},cameraProjectionMatrixInverse:{value:new Ye},cameraWorldMatrix:{value:new Ye},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},so={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},tl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ad(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=py(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ni(s,e,e);return r.wrapS=vi,r.wrapT=vi,r.needsUpdate=!0,r}function py(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var ro={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Kh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new Ye},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Kh(n,e,t){let i=my(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function my(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new L(Math.cos(r),Math.sin(r),o))}return i}var nl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,x=t-f,g,m;p>x?(g=1,m=0):(g=0,m=1);let b=p-g+u,y=x-m+u,v=p-1+2*u,U=x-1+2*u,I=l&255,D=c&255,w=this.perm[I+this.perm[D]]%12,_=this.perm[I+g+this.perm[D+m]]%12,M=this.perm[I+1+this.perm[D+1]]%12,R=.5-p*p-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[w],p,x));let k=.5-b*b-y*y;k<0?s=0:(k*=k,s=k*k*this.dot(this.grad3[_],b,y));let z=.5-v*v-U*U;return z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[M],v,U)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(i+c),f=1/6,p=(u+h+d)*f,x=u-p,g=h-p,m=d-p,b=e-x,y=t-g,v=i-m,U,I,D,w,_,M;b>=y?y>=v?(U=1,I=0,D=0,w=1,_=1,M=0):b>=v?(U=1,I=0,D=0,w=1,_=0,M=1):(U=0,I=0,D=1,w=1,_=0,M=1):y<v?(U=0,I=0,D=1,w=0,_=1,M=1):b<v?(U=0,I=1,D=0,w=0,_=1,M=1):(U=0,I=1,D=0,w=1,_=1,M=0);let R=b-U+f,k=y-I+f,z=v-D+f,X=b-w+2*f,O=y-_+2*f,Y=v-M+2*f,J=b-1+3*f,Z=y-1+3*f,Q=v-1+3*f,ae=u&255,ye=h&255,Fe=d&255,st=this.perm[ae+this.perm[ye+this.perm[Fe]]]%12,ee=this.perm[ae+U+this.perm[ye+I+this.perm[Fe+D]]]%12,ue=this.perm[ae+w+this.perm[ye+_+this.perm[Fe+M]]]%12,Re=this.perm[ae+1+this.perm[ye+1+this.perm[Fe+1]]]%12,fe=.6-b*b-y*y-v*v;fe<0?s=0:(fe*=fe,s=fe*fe*this.dot3(this.grad3[st],b,y,v));let Le=.6-R*R-k*k-z*z;Le<0?r=0:(Le*=Le,r=Le*Le*this.dot3(this.grad3[ee],R,k,z));let Ve=.6-X*X-O*O-Y*Y;Ve<0?o=0:(Ve*=Ve,o=Ve*Ve*this.dot3(this.grad3[ue],X,O,Y));let Be=.6-J*J-Z*Z-Q*Q;return Be<0?a=0:(Be*=Be,a=Be*Be*this.dot3(this.grad3[Re],J,Z,Q)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,p,x=(e+t+i+s)*l,g=Math.floor(e+x),m=Math.floor(t+x),b=Math.floor(i+x),y=Math.floor(s+x),v=(g+m+b+y)*c,U=g-v,I=m-v,D=b-v,w=y-v,_=e-U,M=t-I,R=i-D,k=s-w,z=_>M?32:0,X=_>R?16:0,O=M>R?8:0,Y=_>k?4:0,J=M>k?2:0,Z=R>k?1:0,Q=z+X+O+Y+J+Z,ae=o[Q][0]>=3?1:0,ye=o[Q][1]>=3?1:0,Fe=o[Q][2]>=3?1:0,st=o[Q][3]>=3?1:0,ee=o[Q][0]>=2?1:0,ue=o[Q][1]>=2?1:0,Re=o[Q][2]>=2?1:0,fe=o[Q][3]>=2?1:0,Le=o[Q][0]>=1?1:0,Ve=o[Q][1]>=1?1:0,Be=o[Q][2]>=1?1:0,lt=o[Q][3]>=1?1:0,ie=_-ae+c,de=M-ye+c,N=R-Fe+c,Ue=k-st+c,ce=_-ee+2*c,Te=M-ue+2*c,me=R-Re+2*c,We=k-fe+2*c,be=_-Le+3*c,C=M-Ve+3*c,S=R-Be+3*c,q=k-lt+3*c,te=_-1+4*c,oe=M-1+4*c,ne=R-1+4*c,Ie=k-1+4*c,ge=g&255,Me=m&255,Qe=b&255,he=y&255,Ce=a[ge+a[Me+a[Qe+a[he]]]]%32,qe=a[ge+ae+a[Me+ye+a[Qe+Fe+a[he+st]]]]%32,$e=a[ge+ee+a[Me+ue+a[Qe+Re+a[he+fe]]]]%32,Pe=a[ge+Le+a[Me+Ve+a[Qe+Be+a[he+lt]]]]%32,ct=a[ge+1+a[Me+1+a[Qe+1+a[he+1]]]]%32,je=.6-_*_-M*M-R*R-k*k;je<0?u=0:(je*=je,u=je*je*this.dot4(r[Ce],_,M,R,k));let ft=.6-ie*ie-de*de-N*N-Ue*Ue;ft<0?h=0:(ft*=ft,h=ft*ft*this.dot4(r[qe],ie,de,N,Ue));let F=.6-ce*ce-Te*Te-me*me-We*We;F<0?d=0:(F*=F,d=F*F*this.dot4(r[$e],ce,Te,me,We));let xe=.6-be*be-C*C-S*S-q*q;xe<0?f=0:(xe*=xe,f=xe*xe*this.dot4(r[Pe],be,C,S,q));let K=.6-te*te-oe*oe-ne*ne-Ie*Ie;return K<0?p=0:(K*=K,p=K*K*this.dot4(r[ct],te,oe,ne,Ie)),27*(u+h+d+f+p)}};var dr=class n extends fn{constructor(e,t,i,s,r,o,a){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ad(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new jt(this.width,this.height,{type:xn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},io.defines),uniforms:vn.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:Vt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new za,this.normalMaterial.blending=Vt,this.pdMaterial=new bt({defines:Object.assign({},ro.defines),uniforms:vn.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},so.defines),uniforms:vn.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:Vt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:vn.clone(Xi.uniforms),vertexShader:Xi.vertexShader,fragmentShader:Xi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ya,blendDst:cr,blendEquation:In,blendSrcAlpha:Xa,blendDstAlpha:cr,blendEquationAlpha:In}),this.blendMaterial=new bt({uniforms:vn.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ih,blendSrc:Ya,blendDst:cr,blendEquation:In,blendSrcAlpha:Xa,blendDstAlpha:cr,blendEquationAlpha:In}),this.fsQuad=new si(null),this.originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new tr,this.depthTexture.format=Vi,this.depthTexture.type=Hi,this.normalRenderTarget=new jt(this.width,this.height,{minFilter:an,magFilter:an,type:xn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Kh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Vt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Vt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Vt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Vt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Vt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){let s=t.get(i);i.visible=s}),t.clear()}generateNoise(e=64){let t=new nl,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ni(s,e,e,En,Gn);return r.wrapS=vi,r.wrapT=vi,r.needsUpdate=!0,r}};dr.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Rd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var il=class extends fn{constructor(){super();let e=Rd;this.uniforms=vn.clone(e.uniforms),this.material=new Ua({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===to&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var sl=class extends nr{constructor(){super();let e=new Wn;e.deleteAttribute("uv");let t=new zt({side:$t}),i=new zt,s=new lr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ee(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ee(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ee(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Ee(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Ee(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Ee(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Ee(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new Ee(e,pr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Ee(e,pr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let p=new Ee(e,pr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let x=new Ee(e,pr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Ee(e,pr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let m=new Ee(e,pr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pr(n){let e=new Bt;return e.color.setScalar(n),e}var V={quality:"high",ao:!0,renderer:null,scene:null,camera:null,composer:null,sky:null,sun:null,hemi:null,focus:new L,fps:60,slowT:0,autoStep:!0,onStepDown:null,shake:0,t:0,mood:null,moodT:null},Cd={sunny:{top:2009087,hor:12580095,elev:48,azim:140,sunI:2.4,hemiI:1.05,fog:11988223,fogNear:90,fogFar:320,exp:1,env:.45,sunCol:16774364,gnd:10474106},desert:{top:2857983,hor:16771522,elev:50,azim:120,sunI:2.5,hemiI:1,fog:16638907,fogNear:90,fogFar:320,exp:1,env:.45,sunCol:16773328,gnd:15255184},storm:{top:3886991,hor:9414607,elev:30,azim:160,sunI:1.2,hemiI:1.05,fog:9348041,fogNear:35,fogFar:170,exp:1,env:.4,sunCol:14082815,gnd:8362634},dusk:{top:5983190,hor:16754554,elev:14,azim:250,sunI:2,hemiI:1,fog:16756874,fogNear:55,fogFar:240,exp:1,env:.4,sunCol:16760970,gnd:11569786},snow:{top:7321343,hor:15398655,elev:32,azim:150,sunI:1.5,hemiI:1.3,fog:15004415,fogNear:18,fogFar:120,exp:1,env:.5,sunCol:15923455,gnd:14214898},volcano:{top:8007600,hor:16747082,elev:22,azim:200,sunI:2,hemiI:1,fog:16751210,fogNear:40,fogFar:190,exp:1,env:.4,sunCol:16756848,gnd:10119770},alien:{top:2759290,hor:13855999,elev:18,azim:300,sunI:1.4,hemiI:1,fog:10119896,fogNear:50,fogFar:220,exp:1,env:.45,sunCol:14207231,gnd:6982266},quake:{top:3120127,hor:16769200,elev:40,azim:140,sunI:2.3,hemiI:1.15,fog:15916216,fogNear:55,fogFar:240,exp:1,env:.45,sunCol:16773328,gnd:13152400}};function Id(n){let e=V.renderer=new _a({canvas:n,antialias:!0,powerPreference:"high-performance",stencil:!1});e.outputColorSpace=rn,e.toneMapping=to,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Wa;let t=V.scene=new nr;(V.camera=new on(55,1,.1,600)).position.set(20,20,20);let s=new er(e);t.environment=s.fromScene(new sl,.04).texture,t.environmentIntensity=.55;let r=V.sky=new Ee(new Lt(500,32,16),new bt({side:$t,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{top:{value:new De(2009087)},hor:{value:new De(12580095)},sunDir:{value:new L(0,1,0)},sunCol:{value:new De(16774364)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:"uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vP; void main(){ float h = clamp(vP.y, -0.2, 1.0); vec3 c = mix(hor, top, pow(max(h,0.0), 0.55)); float s = max(dot(normalize(vP), normalize(sunDir)), 0.0); c += sunCol * (pow(s, 600.0) * 1.6 + pow(s, 12.0) * 0.25); gl_FragColor = vec4(c, 1.0); }"}));r.frustumCulled=!1,r.renderOrder=-1,t.add(r),t.fog=new Ma(11988223,70,280),V.hemi=new ka(14217727,10474106,1.25),t.add(V.hemi),V.amb=new Ha(16777215,.12),t.add(V.amb);let o=V.sun=new Ba(16773590,2.6);o.castShadow=!0,o.shadow.bias=-4e-4,o.shadow.normalBias=.03;let a=o.shadow.camera;return a.left=-38,a.right=38,a.top=38,a.bottom=-38,a.near=1,a.far=220,t.add(o),t.add(o.target),V.flash=new lr(13624319,0,120,1.2),t.add(V.flash),ao("sunny",!0),window.addEventListener("resize",eu),oo(V.quality),eu(),V}function gy(){let n=V.renderer;if(V.composer&&(V.composer.dispose&&V.composer.dispose(),V.composer=null),V.quality!=="high")return;let e=innerWidth,t=innerHeight,i=new Qa(n);if(i.addPass(new el(V.scene,V.camera)),V.ao){let r=new dr(V.scene,V.camera,e,t);r.output=dr.OUTPUT.Default,r.updateGtaoMaterial({radius:1.2,distanceExponent:1.4,thickness:1.5,scale:1,samples:12}),r.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),r.blendIntensity=.7,i.addPass(r),V.aoPass=r}else V.aoPass=null;let s=new fr(new re(e,t),.28,.45,.95);i.addPass(s),V.bloom=s,i.addPass(new il),V.composer=i}function oo(n){V.quality=n==="low"?"low":"high";let e=V.renderer,t=window.devicePixelRatio||1;e.setPixelRatio(V.quality==="high"?Math.min(t,2):Math.min(t,1.25)),e.shadowMap.enabled=!0;let i=V.quality==="high"?2048:1024;V.sun.shadow.mapSize.x!==i&&(V.sun.shadow.mapSize.set(i,i),V.sun.shadow.map&&(V.sun.shadow.map.dispose(),V.sun.shadow.map=null)),e.shadowMap.type=V.quality==="high"?Wa:Ga,V.scene.traverse(s=>{s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>o.needsUpdate=!0)}),gy(),eu(),V.slowT=0}function eu(){if(!V.renderer)return;let n=innerWidth,e=innerHeight;V.renderer.setSize(n,e,!1),V.camera.aspect=n/e,V.camera.fov=n<e?62:52,V.camera.updateProjectionMatrix(),V.composer&&V.composer.setSize(n,e)}var Qh=new De,Pd=new De;function ao(n,e){let t=Cd[n]||Cd.sunny;V.moodT=t,V.moodName=n,(e||!V.mood)&&(V.mood=Object.assign({},t))}function xy(n){let e=V.mood,t=V.moodT,i=Math.min(1,n*.8);for(let l in t)l==="fog"||l==="sunCol"||l==="top"||l==="hor"||l==="gnd"?(Qh.setHex(e[l]),Pd.setHex(t[l]),Qh.lerp(Pd,i),e[l]=Qh.getHex()):e[l]+=(t[l]-e[l])*i;let s=V.sky.material.uniforms;s.top.value.setHex(e.top),s.hor.value.setHex(e.hor),s.sunCol.value.setHex(e.sunCol);let r=Yh.degToRad(90-e.elev),o=Yh.degToRad(e.azim),a=new L().setFromSphericalCoords(1,r,o);s.sunDir.value.copy(a),V.sky.position.copy(V.camera.position),V.hemi.groundColor.setHex(e.gnd),V.sunDir=a,V.sun.intensity=e.sunI,V.sun.color.setHex(e.sunCol),V.hemi.intensity=e.hemiI,V.scene.fog.color.setHex(e.fog),V.scene.fog.near=e.fogNear*(V.quality==="low"?.8:1),V.scene.fog.far=e.fogFar*(V.quality==="low"?.8:1),V.renderer.toneMappingExposure=e.exp,V.scene.environmentIntensity=e.env}function Dd(n){V.t+=n,xy(n);let e=V.focus,t=V.sunDir||new L(.5,.8,.3),i=76/V.sun.shadow.mapSize.x,s=Math.round(e.x/i)*i,r=Math.round(e.z/i)*i;V.sun.position.set(s+t.x*90,Math.max(e.y,0)+Math.max(.25,t.y)*90,r+t.z*90),V.sun.target.position.set(s,Math.max(e.y,0),r),V.sun.target.updateMatrixWorld(),V.flash.intensity>0&&(V.flash.intensity=Math.max(0,V.flash.intensity-n*60)),V.composer?V.composer.render(n):V.renderer.render(V.scene,V.camera);let o=performance.now(),a=Math.min(1,(o-(V._lt||o))/1e3);V._lt=o,a>0&&(V.fps+=(1/Math.max(a,.001)-V.fps)*Math.min(1,a*3)),!document.hidden&&(V.autoStep&&V.quality==="high"&&V.fps<30?(V.slowT+=a,V.slowT>5&&(oo("low"),V.onStepDown&&V.onStepDown())):V.slowT=Math.max(0,V.slowT-a*2))}var lo=new L;function Nn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;lo.copy(e),lo[i]=0,lo.normalize();let c=.5*o/(o+a),u=1-lo.angleTo(n)/l;return Math.sign(lo[t])===1?u*c:a/(o+a)+c+c*(1-u)}var rl=class extends Wn{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new L,x=.5/s;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Nn(p,l,"z","y",r,i),d[m+1]=1-Nn(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),d[m+0]=1-Nn(p,l,"z","y",r,i),d[m+1]=1-Nn(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),d[m+0]=1-Nn(p,l,"x","z",r,e),d[m+1]=Nn(p,l,"z","x",r,i);break;case 3:p.set(0,-1,0),d[m+0]=1-Nn(p,l,"x","z",r,e),d[m+1]=1-Nn(p,l,"z","x",r,i);break;case 4:p.set(0,0,1),d[m+0]=1-Nn(p,l,"x","y",r,e),d[m+1]=1-Nn(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),d[m+0]=Nn(p,l,"x","y",r,e),d[m+1]=1-Nn(p,l,"y","x",r,t);break}}};function mr(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new It,c=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Ld(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=Ld(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Ld(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Tt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var gr=new Map;function T(n,e){e=e||{};let t=n+"|"+JSON.stringify(e),i=gr.get(t);if(i)return i;let s={color:n,roughness:e.r!=null?e.r:.6,metalness:e.m||0};return e.e!=null&&(s.emissive=e.e,s.emissiveIntensity=e.ei!=null?e.ei:1),e.op!=null&&(s.transparent=!0,s.opacity=e.op,s.depthWrite=e.dw!=null?e.dw:!1),e.side&&(s.side=e.side),e.cc?(s.clearcoat=e.cc,s.clearcoatRoughness=e.ccr!=null?e.ccr:.25,i=new Na(s)):i=new zt(s),e.flat&&(i.flatShading=!0),gr.set(t,i),i}function qn(n,e){let t="glow|"+n+"|"+e,i=gr.get(t);return i||(i=new Bt({color:n,transparent:!0,opacity:e??.6,blending:Bi,depthWrite:!1,toneMapped:!1}),gr.set(t,i),i)}function Ud(n,e){e=e||{};let t="basic|"+n+JSON.stringify(e),i=gr.get(t);return i||(i=new Bt(Object.assign({color:n,toneMapped:e.tm!==void 0?e.tm:!1},e.p||{})),gr.set(t,i),i)}var Nd=new Map;function bi(n,e){let t=Nd.get(n);return t||(t=e(),Nd.set(n,t)),t}var E={sphere:(n,e=24,t=16)=>bi("s"+n+e+t,()=>new Lt(n,e,t)),cap:(n,e,t=16)=>bi("c"+n+e+t,()=>new Pa(n,e,6,t)),rbox:(n,e,t,i=.08,s=2)=>bi("rb"+[n,e,t,i,s],()=>new rl(n,e,t,s,Math.min(i,n/2-.001,e/2-.001,t/2-.001))),box:(n,e,t)=>bi("b"+[n,e,t],()=>new Wn(n,e,t)),cyl:(n,e,t,i=24)=>bi("cy"+[n,e,t,i],()=>new un(n,e,t,i)),cone:(n,e,t=24)=>bi("co"+[n,e,t],()=>new Ia(n,e,t)),torus:(n,e,t=Math.PI*2,i=12,s=32)=>bi("t"+[n,e,t,i,s],()=>new rr(n,e,i,s,t)),star:(n=.5,e=.18)=>bi("star"+n+e,()=>{let t=new Mi;for(let s=0;s<10;s++){let r=s/10*Math.PI*2+Math.PI/2,o=s%2?n*.45:n,a=Math.cos(r)*o,l=Math.sin(r)*o;s?t.lineTo(a,l):t.moveTo(a,l)}let i=new Wi(t,{depth:e,bevelEnabled:!0,bevelThickness:e*.5,bevelSize:n*.12,bevelSegments:3});return i.center(),i}),rock:(n=1,e=1)=>bi("rock"+n+e,()=>{let t=new Lt(e,18,12),i=t.attributes.position,s=new L;for(let r=0;r<i.count;r++){s.fromBufferAttribute(i,r);let o=1+.18*Math.sin(s.x*3.1+n)*Math.cos(s.y*2.7+n*2)+.1*Math.sin(s.z*5+n*3);s.multiplyScalar(o),s.y*=.75,i.setXYZ(r,s.x,s.y,s.z)}return t.computeVertexNormals(),t})},rb=new Ye,vy=new ei,yy=new Dn,_y=new L,My=new L;function it(n,e,t,i=0,s=0,r=0,o=1,a=o,l=o){return new Ye().compose(My.set(n,e,t),vy.setFromEuler(yy.set(i,s,r)),_y.set(o,a,l))}var ms=null;function by(){return ms||(ms=new zt({vertexColors:!0,roughness:1,metalness:1}),ms.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 rm; attribute vec3 em; varying vec2 vRM; varying vec3 vEM;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRM = rm; vEM = em;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRM; varying vec3 vEM;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = vRM.x;").replace("#include <metalnessmap_fragment>","float metalnessFactor = vRM.y;").replace("#include <emissivemap_fragment>","totalEmissiveRadiance = vEM;")},ms.customProgramCacheKey=()=>"uber1",ms)}function wy(n){return!(!n.isMeshStandardMaterial||n.transparent||n.vertexColors||n.side!==Qn||n.flatShading||n.map||n===ms)}var Jt=class{constructor(){this.groups=new Map}add(e,t,i){let s=wy(t),r=s?by():t,o=this.groups.get(r);o||(o=[],this.groups.set(r,o));let a=e.index?e.toNonIndexed():e.clone();a.attributes.uv||a.setAttribute("uv",new Tt(new Float32Array(a.attributes.position.count*2),2));for(let l of Object.keys(a.attributes))l!=="position"&&l!=="normal"&&l!=="uv"&&a.deleteAttribute(l);if(s){let l=a.attributes.position.count,c=new Float32Array(l*3),u=new Float32Array(l*2),h=new Float32Array(l*3),d=t.color,f=t.emissive,p=t.emissiveIntensity||0,x=t.clearcoat>0?Math.min(t.roughness,.35):t.roughness,g=t.metalness;for(let m=0;m<l;m++)c[m*3]=d.r,c[m*3+1]=d.g,c[m*3+2]=d.b,u[m*2]=x,u[m*2+1]=g,h[m*3]=f.r*p,h[m*3+1]=f.g*p,h[m*3+2]=f.b*p;a.setAttribute("color",new Tt(c,3)),a.setAttribute("rm",new Tt(u,2)),a.setAttribute("em",new Tt(h,3))}return a.applyMatrix4(i),o.push(a),this}mesh(e,t,i,s,r,o,a,l,c,u,h){return this.add(e,t,it(i,s,r,o,a,l,c,u,h))}box(e,t,i,s,r,o,a,l=0){return this.add(E.box(t,i,s),e,it(r,o,a,0,l,0))}rbox(e,t,i,s,r,o,a,l,c=0){return this.add(E.rbox(t,i,s,r),e,it(o,a,l,0,c,0))}build(e,t={}){let i=[];for(let[s,r]of this.groups){if(!r.length)continue;let o=mr(r,!1);r.forEach(l=>l.dispose());let a=new Ee(o,s);a.castShadow=t.cast!==!1&&!s.transparent,a.receiveShadow=t.receive!==!1,a.matrixAutoUpdate=!1,a.updateMatrix(),e.add(a),i.push(a)}return this.groups.clear(),i}};function ve(n,e,t=0,i=0,s=0,r,o=!0){let a=new Ee(n,e);return a.position.set(t,i,s),a.castShadow=o,a.receiveShadow=!0,r&&r.add(a),a}var Sy=[16173472,14723449,12155471,9067067,16767416];function ol(n){n=Object.assign({skin:Sy[0],shirt:3900150,pants:3359061,hair:3810582,hat:"cap",hatColor:15680580,shoes:16777215},n||{});let e=new Ge,t=new Ge;e.add(t);let i=T(n.skin,{r:.55}),s=T(n.shirt,{r:.7}),r=T(n.pants,{r:.75}),o=T(n.shoes,{r:.4,cc:.4}),a={root:e,body:t,look:n};a.legs=[-1,1].map(g=>{let m=new Ge;m.position.set(g*.13,.78,0),t.add(m),ve(E.cap(.115,.42),r,0,-.32,0,m);let b=ve(E.rbox(.2,.15,.32,.07),o,0,-.71,.05,m);return ve(E.rbox(.21,.05,.33,.02),T(2238513),0,-.775,.05,m),m}),ve(E.sphere(.26,20,14),r,0,.84,0,t).scale.set(1,.7,.85),ve(E.cap(.25,.3),s,0,1.07,0,t).scale.set(1,1,.82),ve(E.torus(.2,.035,Math.PI*2,8,24),T(16777215,{r:.6}),0,1.33,0,t).rotation.x=Math.PI/2,a.arms=[-1,1].map(g=>{let m=new Ge;return m.position.set(g*.31,1.27,0),t.add(m),ve(E.sphere(.1,14,10),s,0,0,0,m),ve(E.cap(.08,.32),s,0,-.2,0,m),ve(E.sphere(.095,14,10),i,0,-.45,0,m),m.rotation.z=g*.12,m});let c=a.head=new Ge;c.position.set(0,1.42,0),t.add(c),ve(E.sphere(.34,32,24),i,0,.3,0,c);let u=ve(new Lt(.355,32,16,0,Math.PI*2,0,Math.PI*.42),T(n.hair,{r:.8}),0,.31,-.01,c);u.rotation.x=-.25;let h=T(16777215,{r:.2,cc:.6}),d=T(1119256,{r:.15,cc:1});[-1,1].forEach(g=>{ve(E.sphere(.085,16,12),h,g*.125,.33,.27,c,!1).scale.set(.9,1.1,.6),ve(E.sphere(.05,14,10),d,g*.125,.33,.315,c,!1).scale.set(1,1.15,.6),ve(E.sphere(.016,8,6),T(16777215,{e:16777215,ei:1}),g*.125+.018,.355,.34,c,!1),ve(E.sphere(.05,12,8),T(16748451,{r:.8}),g*.2,.22,.25,c,!1).scale.set(1,.6,.4)});let f=a.mouth=ve(E.torus(.065,.018,Math.PI,8,16),T(5971229,{r:.5}),0,.2,.31,c,!1);f.rotation.z=Math.PI,a.hatG=new Ge,a.hatG.position.y=.3,c.add(a.hatG),a.backG=new Ge,a.backG.position.set(0,1.1,-.22),t.add(a.backG),Ey(a,n.hat,n.hatColor);let p=a.stars=new Ge;p.position.y=2.25,p.visible=!1,e.add(p);for(let g=0;g<5;g++){let m=ve(E.star(.11,.05),T(16765503,{e:16757504,ei:.8,r:.3}),Math.cos(g/5*6.283)*.42,0,Math.sin(g/5*6.283)*.42,p,!1);m.rotation.x=-.3}let x=a.umbrella=new Ge;return x.position.set(.32,1.25,0),x.visible=!1,t.add(x),ve(E.cyl(.02,.02,1.2,8),T(4473924,{m:.6,r:.3}),0,.5,0,x),ve(new Lt(.75,24,8,0,Math.PI*2,0,Math.PI*.32),T(16732067,{r:.45,cc:.5,side:Pt}),0,.45,0,x),a.bubble=ve(E.sphere(1.1,32,20),qn(8246268,.25),0,.95,0,e,!1),a.bubble.visible=!1,a.flames=new Ge,a.flames.visible=!1,a.backG.add(a.flames),[-.12,.12].forEach(g=>ve(E.cone(.08,.45,12),qn(16753981,.85),g,-.45,-.05,a.flames,!1).rotation.x=Math.PI),[t,c,...a.legs,...a.arms].forEach(g=>zd(g,[a.mouth])),zd(a.hatG,[]),a.walk=0,a.stun=0,a}function zd(n,e){let t=n.children.filter(r=>r.isMesh&&!e.includes(r)&&r.visible);if(t.length<2)return;let i=new Jt,s=new Jt;t.forEach(r=>{r.updateMatrix(),(r.castShadow?i:s).add(r.geometry,r.material,r.matrix),n.remove(r)}),i.build(n),s.build(n,{cast:!1})}function Ey(n,e,t=15680580){let i=n.hatG;for(;i.children.length;)i.remove(i.children[0]);let s=T(t,{r:.5,cc:.3});if(e==="cap")ve(new Lt(.36,28,12,0,Math.PI*2,0,Math.PI/2),s,0,.02,0,i),ve(E.cyl(.3,.3,.03,24),s,0,.03,.25,i).scale.set(1,1,.8);else if(e==="hardhat"){let r=T(16761370,{r:.35,cc:.8});ve(new Lt(.38,28,12,0,Math.PI*2,0,Math.PI/2),r,0,.03,0,i),ve(E.cyl(.46,.46,.04,28),r,0,.04,.03,i),ve(E.rbox(.08,.12,.62,.03),r,0,.32,0,i)}else if(e==="cowboy"){let r=T(9132587,{r:.8});ve(E.cyl(.6,.6,.04,32),r,0,.06,0,i),ve(E.cyl(.26,.32,.36,24),r,0,.24,0,i),ve(E.torus(.31,.03,6.28,8,24),T(3875604),0,.12,0,i).rotation.x=Math.PI/2}else if(e==="crown"){let r=T(16764723,{r:.2,m:1});ve(E.cyl(.27,.25,.16,28,1),r,0,.12,0,i);for(let o=0;o<6;o++){let a=o/6*6.283;ve(E.cone(.06,.16,10),r,Math.cos(a)*.24,.27,Math.sin(a)*.24,i),ve(E.sphere(.035,10,8),T(16723285,{r:.1,cc:1}),Math.cos(a)*.27,.12,Math.sin(a)*.27,i)}}else if(e==="party")ve(E.cone(.18,.5,24),s,0,.3,0,i),ve(E.sphere(.07,12,8),T(16777215),0,.57,0,i);else if(e==="astro")ve(E.sphere(.5,32,24),T(12576511,{r:.05,op:.28,cc:1}),0,0,.02,i,!1),ve(E.torus(.42,.06,6.28,10,32),T(15857145,{r:.4}),0,-.3,0,i).rotation.x=Math.PI/2;else if(e==="dino"){let r=T(4906624,{r:.6});ve(new Lt(.39,28,14,0,Math.PI*2,0,Math.PI*.55),r,0,-.03,-.02,i);for(let o=0;o<4;o++)ve(E.cone(.07,.18,10),T(16436245),0,.36-o*.04,-.1-o*.12,i).rotation.x=-.5-o*.25}else if(e==="beanie")ve(new Lt(.37,28,12,0,Math.PI*2,0,Math.PI/2),s,0,-.02,0,i),ve(E.sphere(.09,12,8),T(16777215,{r:.9}),0,.37,0,i);else if(e==="chef"){let r=T(16777215,{r:.8});ve(E.cyl(.3,.3,.25,24),r,0,.12,0,i),[[0,.38,0],[.15,.33,.05],[-.15,.33,.05],[0,.33,-.15]].forEach(o=>ve(E.sphere(.2,16,12),r,o[0],o[1],o[2],i))}}function Od(n,e){let t=n.backG;if(t.children.filter(o=>o.userData.jp).forEach(o=>t.remove(o)),!e)return;let i=new Ge;i.userData.jp=!0,t.add(i);let s=T(13358561,{r:.25,m:.8}),r=T(15680580,{r:.4,cc:.6});[-.12,.12].forEach(o=>{ve(E.cap(.09,.3),s,o,0,-.05,i),ve(E.sphere(.09,12,8),r,o,.25,-.05,i)})}function al(n,e,t,i,s){let r=n.body,o=n.legs,a=n.arms;n.walk+=t*(e==="run"?9*Math.max(.6,i):0);let l=0,c=0,u=0,h=0,d=0,f=0,p=0,x=.12,g=-.12;if(n.stars.visible=e==="ko",e==="run"){let y=Math.sin(n.walk);l=y*.9,c=-y*.9,u=-y*.8,h=y*.8,d=Math.abs(Math.cos(n.walk))*.07,f=.12}else if(e==="jump")l=-.5,c=.3,u=-2.6,h=-2.6,x=.5,g=-.5;else if(e==="swim"){let y=Math.sin(s*6);u=-2.4+y,h=-2.4-y,l=y*.5,c=-y*.5,f=1.1,d=-.6}else if(e==="ko")f=-1.45,d=.18,u=-2.8,h=-2.8,x=.6,g=-.6,n.stars.rotation.y+=t*4;else if(e==="cover")d=-.42,l=-1.3,c=-1.3,u=-2.9,h=-2.9,x=.35,g=-.35,f=.35;else if(e==="float"){let y=Math.sin(s*4);u=-2.5+y*.4,h=-2.5-y*.4,l=y*.6,c=-y*.6,p=Math.sin(s*2)*.4}else if(e==="panic"){let y=Math.sin(s*16);u=-2.9+y*.3,h=-2.9-y*.3,l=Math.sin(s*14)*.7,c=-l,d=Math.abs(y)*.05}else{let y=Math.sin(s*2);d=y*.015,u=y*.05,h=-y*.05}let m=Math.min(1,t*14),b=(y,v)=>y+(v-y)*m;o[0].rotation.x=b(o[0].rotation.x,l),o[1].rotation.x=b(o[1].rotation.x,c),a[0].rotation.x=b(a[0].rotation.x,u),a[1].rotation.x=b(a[1].rotation.x,h),a[0].rotation.z=b(a[0].rotation.z,-x),a[1].rotation.z=b(a[1].rotation.z,-g),r.position.y=b(r.position.y,d),r.rotation.x=b(r.rotation.x,f),r.rotation.z=b(r.rotation.z,p),e==="ko"?r.position.z=b(r.position.z,-.7):r.position.z=b(r.position.z,0),n.mouth.scale.y=e==="panic"||e==="ko"||e==="float"?-1.4:1}var Ty=[5025616,6078282,4169284,7127626];function Zn(n,e,t,i,s=1,r="round",o=0){let a=T(9067061,{r:.85});if(r==="round"){n.mesh(E.cyl(.18,.28,2.4,10),a,e,t+1.2*s,i,0,0,0,s,s,s);let l=T(Ty[o%4],{r:.75});[[0,3.1,0,1.45],[.8,2.6,.3,1],[-.7,2.7,-.3,1.05],[.1,2.5,-.85,.95],[-.2,3.9,.2,.9]].forEach((c,u)=>n.mesh(E.sphere(1,18,12),l,e+c[0]*s,t+c[1]*s,i+c[2]*s,0,u,0,c[3]*s,c[3]*s*.9,c[3]*s))}else if(r==="pine"){n.mesh(E.cyl(.15,.25,1.6,10),a,e,t+.8*s,i,0,0,0,s,s,s);let l=T([3112266,2780739,3508818][o%3],{r:.8});[[1.6,1.8,1.4],[1.25,1.6,2.5],[.85,1.4,3.5]].forEach(c=>n.mesh(E.cone(1,1,20),l,e,t+c[2]*s,i,0,o,0,c[0]*s,c[1]*s,c[0]*s))}else if(r==="palm"){let l=T(10517071,{r:.85});for(let h=0;h<6;h++)n.mesh(E.cyl(.17-h*.012,.2-h*.012,.85,10),l,e+Math.sin(h*.25)*.5*s,t+(.42+h*.8)*s,i,0,0,-.08*h,s,s,s);let c=[e+Math.sin(1.5)*.5*s+.15*s,t+4.9*s,i],u=T(4170573,{r:.7});for(let h=0;h<7;h++){let d=h/7*6.283+o;n.mesh(E.sphere(1,16,8),u,c[0]+Math.cos(d)*1*s,c[1]-.25*s,c[2]+Math.sin(d)*1*s,0,-d,.45,1.3*s,.12*s,.38*s)}[0,2,4].forEach(h=>n.mesh(E.sphere(.17,12,8),T(7029795,{r:.6}),c[0]+Math.cos(h)*.2*s,c[1]-.3*s,c[2]+Math.sin(h)*.2*s))}else if(r==="cactus"){let l=T(5216858,{r:.7});n.mesh(E.cap(.35,2.2,14),l,e,t+1.45*s,i,0,0,0,s,s,s),n.mesh(E.cap(.22,.8,12),l,e+.6*s,t+1.9*s,i,0,0,0,s,s,s),n.mesh(E.cap(.2,.5,12),l,e+.38*s,t+1.45*s,i,0,0,Math.PI/2,s,s,s),n.mesh(E.cap(.2,.6,12),l,e-.55*s,t+2.3*s,i,0,0,0,s,s,s),n.mesh(E.cap(.18,.4,12),l,e-.35*s,t+1.95*s,i,0,0,Math.PI/2,s,s,s)}}function co(n,e,t,i,s=1,r=1,o=10129286){n.mesh(E.rock(r%6,1),T(o,{r:.9}),e,t+.3*s,i,0,r,0,s,s,s)}function Yi(n,e,t,i,s,r){let o=new Ge,a=T(r,{r:.3,cc:1,ccr:.1,m:.2}),l=T(2109504,{r:.05,m:.5,cc:1}),c=T(1842980,{r:.85}),u=T(14080992,{r:.2,m:1}),h=(d,f,p,x,g,m=0,b=0)=>n.add(d,f,new Ye().makeRotationY(s).multiply(it(p,x,g,m,0,b)).premultiply(new Ye().makeTranslation(e,t,i)));return h(E.rbox(1.9,.75,4.1,.3),a,0,.75,0),h(E.rbox(1.65,.65,2.2,.28),a,0,1.35,-.25),h(E.rbox(1.68,.5,2,.22),l,0,1.38,-.25),[[-.88,1.3],[.88,1.3],[-.88,-1.35],[.88,-1.35]].forEach(d=>{h(E.cyl(.38,.38,.3,20),c,d[0],.38,d[1],0,Math.PI/2),h(E.cyl(.2,.2,.32,16),u,d[0],.38,d[1],0,Math.PI/2)}),[-.6,.6].forEach(d=>h(E.sphere(.13,12,8),T(16774860,{e:16773552,ei:1.2}),d,.85,2.04)),[-.65,.65].forEach(d=>h(E.rbox(.3,.12,.05,.03),T(16722474,{e:16711680,ei:.8}),d,.9,-2.06)),o}function tu(n,e,t,i){let s=T(4015184,{r:.4,m:.7});n.mesh(E.cyl(.07,.1,4.2,10),s,e,t+2.1,i),n.mesh(E.cap(.06,.8,8),s,e+.4,t+4.2,i,0,0,Math.PI/2),n.mesh(E.sphere(.22,16,10),T(16774084,{e:16771488,ei:1.5}),e+.8,t+4.05,i)}function kd(n,e,t,i,s){let r=T(11565637,{r:.7}),o=T(3159098,{r:.5,m:.6}),a=(l,c,u)=>{let h=new L(l,c,u).applyAxisAngle(new L(0,1,0),s);return[e+h.x,t+h.y,i+h.z]};[.45,.65].forEach((l,c)=>{let u=a(0,.5+c*.35,-.2+c*.25-.1);n.add(E.rbox(1.8,.08,.28,.03),r,it(u[0],u[1],u[2],c?-.3:0,s,0))}),[-.75,.75].forEach(l=>{let c=a(l,.25,-.1);n.add(E.rbox(.08,.5,.5,.02),o,it(c[0],c[1],c[2],0,s,0))})}function Fd(){let n=new Ge,e={root:n},t=T(8084694,{r:.35,cc:.7,ccr:.3}),i=T(16241278,{r:.5,cc:.3}),s=T(4863382,{r:.4,cc:.5}),r=e.spikeM=new zt({color:6288383,emissive:2282478,emissiveIntensity:.6,roughness:.2,metalness:.1}),o=e.body=new Ge;o.position.y=8,n.add(o),ve(E.sphere(4.2,40,28),t,0,0,0,o).scale.set(1,1.25,.95),ve(E.sphere(3.4,32,24),i,0,-.6,1.25,o).scale.set(.95,1.2,.75);let a=e.head=new Ge;a.position.set(0,5.6,1.3),o.add(a),ve(E.sphere(2.6,36,26),t,0,.4,0,a).scale.set(1,.92,1),ve(E.sphere(1.7,32,22),t,0,-.05,2,a).scale.set(1.05,.7,1.15),[-1,1].forEach(g=>{ve(E.sphere(.85,24,18),T(16777215,{r:.15,cc:1}),g*1.05,1.15,1.75,a).scale.set(1,1.1,.7),ve(E.sphere(.45,20,14),T(1314847,{r:.1,cc:1}),g*1,1.15,2.25,a).scale.set(1,1.2,.6),ve(E.sphere(.13,10,8),T(16777215,{e:16777215}),g*.9,1.35,2.48,a),ve(E.cap(.18,.9,10),s,g*1.05,2.05,1.6,a).rotation.z=g*.35,ve(E.sphere(.22,12,8),s,g*.5,.1,3.4,a)});let l=e.jaw=new Ge;l.position.set(0,-.55,.6),a.add(l),ve(E.sphere(1.6,30,20),t,0,-.35,1.25,l).scale.set(1,.45,1.1),ve(E.sphere(1.3,24,16),T(14239839,{r:.6}),0,-.05,1.3,l).scale.set(.95,.25,1);for(let g=-2;g<=2;g++)g&&ve(E.cone(.16,.42,10),T(16777215,{r:.3}),g*.45,.22,2.25-Math.abs(g)*.25,l);e.arms=[-1,1].map(g=>{let m=new Ge;m.position.set(g*3.3,1.8,1.6),o.add(m),ve(E.cap(.75,2,16),t,0,-1.1,.4,m).rotation.x=-.6;for(let b=-1;b<=1;b++)ve(E.cone(.2,.55,10),T(16774102),b*.3,-2.2,1.6,m).rotation.x=1.8;return m}),e.legs=[-1,1].map(g=>{let m=new Ge;m.position.set(g*2.5,-3.2,0),o.add(m),ve(E.cap(1.45,2.4,20),t,0,-2,0,m),ve(E.sphere(1.7,24,16),s,0,-4.5,.6,m).scale.set(1,.5,1.35);for(let y=-1;y<=1;y++)ve(E.cone(.32,.8,12),T(16774102),y*.65,-4.6,2.6,m).rotation.x=Math.PI/2;return m});let c=e.tail=[],u=o,h=-3.4,d=-2.4;for(let g=0;g<7;g++){let m=new Ge;m.position.set(0,g?-.25:d,g?-1.55:h),u.add(m),ve(E.sphere(1.7-g*.2,24,16),t,0,0,-.6,m).scale.set(1,.9,1.25),g<6&&ve(E.cone(.45-g*.05,1.2-g*.1,10),r,0,1.4-g*.18,-.6,m),c.push(m),u=m}e.spikes=[];for(let g=0;g<6;g++){let m=ve(E.cone(.55+(g<3?.25:0),2.2-g*.2,6),r,0,4.3-g*1.3,-3-Math.sin(g/5*1.5)*1.1,o);m.rotation.x=-.4-g*.12,e.spikes.push(m)}let f=e.beam=new Ge;f.visible=!1,a.add(f),f.position.set(0,-.2,2.8);let p=ve(E.cyl(.9,.9,1,20),qn(8255999,.7),0,0,0,f,!1);p.rotation.x=Math.PI/2,p.position.z=.5;let x=ve(E.cyl(.45,.45,1,16),Ud(16777215),0,0,0,f,!1);return x.rotation.x=Math.PI/2,x.position.z=.5,e.beamLen=g=>{f.scale.set(1,1,g)},n.traverse(g=>{g.isMesh&&(g.castShadow=g.castShadow!==!1)}),e.t=0,e}function Bd(n,e,t,i,s){n.t+=e*(t?1:.35);let r=Math.sin(n.t*2.2);n.legs[0].rotation.x=r*.45,n.legs[1].rotation.x=-r*.45,n.arms[0].rotation.x=-r*.3-(i?.9:0),n.arms[1].rotation.x=r*.3-(i?.9:0),n.body.position.y=8+Math.abs(Math.cos(n.t*2.2))*.5*(t?1:.2),n.body.rotation.z=r*.06,n.body.rotation.x=i?-.15:.04,n.tail.forEach((o,a)=>{o.rotation.y=Math.sin(n.t*1.6-a*.6)*.18,o.rotation.x=.06}),n.jaw.rotation.x+=((i||s>.5?.75:.08)-n.jaw.rotation.x)*Math.min(1,e*8),n.spikeM.emissiveIntensity=.5+s*4+(i?1:0)}function Hd(){let n=new Ge,e=[];for(let r=0;r<=20;r++){let o=r/20,a=o*Math.PI;e.push(new re(Math.max(.01,Math.sin(a)*4.2*(1-.12*Math.sin(a*3))),(o-.5)*1.4*(1-Math.sin(a)*.3)))}ve(new hs(e,48),T(13095132,{r:.18,m:.9}),0,0,0,n),ve(E.torus(4,.22,6.28,12,64),T(8950432,{r:.25,m:.9}),0,0,0,n).rotation.x=Math.PI/2,ve(new Lt(1.9,32,16,0,6.283,0,Math.PI/2),T(10217471,{r:.05,op:.35,cc:1}),0,.45,0,n,!1);let t=T(8314987,{r:.4,cc:.4});ve(E.sphere(.65,24,16),t,0,1.25,0,n).scale.set(1,1.2,1),[-1,1].forEach(r=>ve(E.sphere(.24,16,10),T(723730,{r:.05,cc:1}),r*.25,1.35,.5,n).scale.set(1,1.4,.6));let i=new Ge;n.add(i);for(let r=0;r<12;r++){let o=r/12*6.283;ve(E.sphere(.22,10,8),T(r%2?16732120:4190463,{e:r%2?16732120:4190463,ei:2}),Math.cos(o)*3.6,-.25,Math.sin(o)*3.6,i,!1)}ve(E.cyl(1.2,1.5,.4,32),T(11993082,{e:6288383,ei:1.5}),0,-.7,0,n,!1);let s=ve(new un(1.2,3.2,1,32,1,!0),qn(10354608,.22),0,-.5,0,n,!1);return s.geometry.translate(0,-.5,0),n.userData={lights:i,beam:s},n}function Vd(n){let e=new Ge;return ve(E.rock(3,1),T(4864819,{r:.85,e:5904896,ei:.6}),0,0,0,e).scale.setScalar(n),ve(E.sphere(1.35,20,14),qn(16742954,.45),0,0,0,e,!1).scale.setScalar(n),e}function Gd(){return{walls:[],plats:[],buildings:[],rooms:[],pads:[],tables:[],high:[],fires:[],coinSpots:[],spawns:[],terrain:()=>0,half:80,sea:null,volcano:{x:60,z:-60},landmarks:[]}}function zn(n,e,t,i,s,r,o,a){let l={x0:Math.min(e,i),x1:Math.max(e,i),z0:Math.min(t,s),z1:Math.max(t,s),y0:r,y1:o,b:a||null,off:!1};return n.walls.push(l),l}function qi(n,e,t,i,s,r,o,a){let l={x0:Math.min(e,i),x1:Math.max(e,i),z0:Math.min(t,s),z1:Math.max(t,s),top:r,b:o||null,ramp:a||null,off:!1};return n.plats.push(l),l}function Ay(n,e,t){if(!n.ramp)return n.top;let i=n.ramp,s=i.axis==="x"?e:t,r=Math.max(0,Math.min(1,(s-i.a0)/(i.a1-i.a0)));return i.h0+(i.h1-i.h0)*r}function ho(n,e,t){for(let i of n.rooms)if(e>=i.x0-.5&&e<=i.x1+.5&&t>=i.z0-.5&&t<=i.z1+.5)return i;return null}function Tn(n,e,t,i){if(i<-22)return ho(n,e,t)?-30:-80;let s=n.terrain(e,t);for(let r of n.plats){if(r.off||e<r.x0||e>r.x1||t<r.z0||t>r.z1)continue;let o=Ay(r,e,t);o<=i+.65&&o>s&&(s=o)}return s}function ll(n,e,t=.4,i=1.6){for(let r=0;r<2;r++)for(let o of n.walls){if(o.off||e.y+i<o.y0||e.y+.3>o.y1)continue;let a=Math.max(o.x0,Math.min(e.x,o.x1)),l=Math.max(o.z0,Math.min(e.z,o.z1)),c=e.x-a,u=e.z-l,h=c*c+u*u;if(!(h>=t*t))if(h>1e-8){let d=Math.sqrt(h),f=(t-d)/d;e.x+=c*f,e.z+=u*f}else{let d=e.x-o.x0,f=o.x1-e.x,p=e.z-o.z0,x=o.z1-e.z,g=Math.min(d,f,p,x);g===d?e.x=o.x0-t:g===f?e.x=o.x1+t:g===p?e.z=o.z0-t:e.z=o.z1+t}}let s=n.half-1;e.x=Math.max(-s,Math.min(s,e.x)),e.z=Math.max(-s,Math.min(s,e.z))}function wi(n,e,t,i){for(let s of n.buildings)if(!s.wrecked&&e>s.ix0&&e<s.ix1&&i>s.iz0&&i<s.iz1&&t>=s.baseY-.5&&t<s.baseY+s.ceil-.3)return s;return null}function nu(n,e,t,i){for(let s of n.buildings)if(!s.wrecked&&s.roofAccess&&e>s.x-s.w/2&&e<s.x+s.w/2&&i>s.z-s.d/2&&i<s.z+s.d/2&&t>s.baseY+s.h-.5)return s;return null}function cl(n,e,t){let i=1e9;for(let s of n.buildings){if(s.wrecked)continue;let r=Math.max(Math.abs(e-s.x)-s.w/2,0),o=Math.max(Math.abs(t-s.z)-s.d/2,0);i=Math.min(i,Math.hypot(r,o))}return i}function iu(n,e,t,i){for(let s of n.tables)if(!(s.b&&s.b.wrecked)&&Math.abs(t-s.y)<1&&Math.hypot(e-s.x,i-s.z)<s.r)return s;return null}function hl(n,e,t,i){for(let s of n.pads)if(!(s.b&&s.b.wrecked&&(s.kind==="elev"||s.kind==="elevdown"))&&Math.abs(t-s.y)<1.6&&Math.hypot(e-s.x,i-s.z)<(s.r||1.1))return s;return null}var Ry={s:0,e:Math.PI/2,n:Math.PI,w:-Math.PI/2},Cy=0,pt=.3,Py=2,Wd=2.6,Xd=()=>T(10478591,{r:.05,m:.1,op:.38,cc:1});function su(n){let e=new Ye().makeTranslation(n.x,n.baseY,n.z).multiply(new Ye().makeRotationY(n.ry)),t=Math.cos(n.ry),i=Math.sin(n.ry);return{m:(s,r,o,a=0,l=0,c=0,u=1,h=u,d=u)=>e.clone().multiply(it(s,r,o,a,l,c,u,h,d)),w:(s,r)=>[n.x+s*t+r*i,n.z-s*i+r*t],box:(s,r,o,a)=>{let l=su(n).w(s,r),c=su(n).w(o,a);return[Math.min(l[0],c[0]),Math.min(l[1],c[1]),Math.max(l[0],c[0]),Math.max(l[1],c[1])]}}}function St(n,e,t){let i=Object.assign({id:Cy++,h:3.8,door:"s",wall:16765286,trim:16777215,roof:15681391,inner:16774888,floor:14262374,roofType:"gable",sturdy:!1,basement:!1,elevator:!1,interior:"home",name:"House",windows:!0},t);i.ry=Ry[i.door];let s=i.door==="s"||i.door==="n";i.lw=s?i.w:i.d,i.ld=s?i.d:i.w,i.baseY=t.baseY!=null?t.baseY:n.terrain(i.x,i.z),i.ceil=Math.min(i.h,t.ceil||3.8),i.roofAccess=i.elevator||!!i.stairs,i.ix0=i.x-i.w/2+pt,i.ix1=i.x+i.w/2-pt,i.iz0=i.z-i.d/2+pt,i.iz1=i.z+i.d/2-pt,i.walls=[],i.plats=[],i.pads=[];let r=su(i),o=i.lw,a=i.ld,l=i.group=new Ge,c=i.upper=new Ge;e.add(l),e.add(c);let u=new Jt,h=new Jt,d=new Jt,f=T(i.wall,{r:.75}),p=T(i.trim,{r:.5}),x=T(i.inner,{r:.85}),g=T(i.roof,{r:.55,cc:.25}),m=(w,_,M,R,k,z,X,O,Y,J,Z,Q)=>w.add(_,M,r.m(R,k,z,X,O,Y,J,Z,Q)),b=(w,_,M,R,k,z,X,O)=>m(w,E.box(M,R,k),_,z,X,O);m(u,E.rbox(o+.5,.6,a+.5,.12),T(13620957,{r:.8}),0,-.1,0),b(u,T(i.floor,{r:.55,cc:.3}),o-2*pt,.04,a-2*pt,0,.21,0),(i.interior==="home"||i.interior==="cabin")&&m(u,E.cyl(1,1,.03,32),T(16743080,{r:.95}),0,.24,.3,0,0,0,Math.min(1.6,o/5),1,Math.min(1.2,a/5));{let w=r.box(-o/2-.25,-a/2-.25,o/2+.25,a/2+.25);i.plats.push(qi(n,w[0],w[1],w[2],w[3],i.baseY+.2,i))}let y=[{n:"front",L:o,at:(w,_,M)=>[w,_,a/2-pt/2+M],horiz:!0,out:1},{n:"back",L:o,at:(w,_,M)=>[-w,_,-a/2+pt/2-M],horiz:!0,out:1},{n:"left",L:a-2*pt,at:(w,_,M)=>[-o/2+pt/2-M,_,w],horiz:!1},{n:"right",L:a-2*pt,at:(w,_,M)=>[o/2-pt/2+M,_,-w],horiz:!1}],v=i.ceil;for(let w of y){let _=[];if(w.n==="front"&&_.push({c:0,wd:i.wideDoor||Py,b:0,t:Math.min(v-.4,i.wideDoor?v-.6:Wd),door:!0}),i.windows){let O=Math.floor((w.L-1)/3.2);for(let Y=0;Y<O;Y++){let J=-w.L/2+(Y+.5)*w.L/O;_.some(Z=>Math.abs(Z.c-J)<1.9)||_.push({c:J,wd:1.3,b:1,t:Math.min(2.4,v-.6)})}}_.sort((O,Y)=>O.c-Y.c);let M=[],R=-w.L/2;for(let O of _){let Y=O.c-O.wd/2,J=O.c+O.wd/2;Y>R&&M.push([R,Y,0,v]),O.b>0&&M.push([Y,J,0,O.b]),O.t<v&&M.push([Y,J,O.t,v]),R=J}R<w.L/2&&M.push([R,w.L/2,0,v]);let k=(O,Y,J,Z,Q,ae,ye,Fe)=>{let st=(J+Z)/2,ee=(Q+ae)/2,ue=w.at(st,ee,Fe||0);m(O,E.box(w.horiz?Z-J:ye,ae-Q,w.horiz?ye:Z-J),Y,ue[0],ue[1],ue[2])};for(let O of M)k(u,f,O[0],O[1],O[2],O[3],pt,0),k(u,x,O[0],O[1],Math.max(O[2],.2),O[3],.04,-pt/2-.02);for(let O of _){let Y=O.c-O.wd/2,J=O.c+O.wd/2;O.door?(k(u,p,Y-.14,Y,.2,O.t+.14,pt+.1,0),k(u,p,J,J+.14,.2,O.t+.14,pt+.1,0),k(u,p,Y-.14,J+.14,O.t,O.t+.16,pt+.1,0)):(k(u,Xd(),Y,J,O.b,O.t,.06,0),k(u,p,Y-.1,J+.1,O.b-.12,O.b,pt+.16,0),k(u,p,Y-.1,J+.1,O.t,O.t+.12,pt+.12,0))}k(u,p,-w.L/2,w.L/2,v-.18,v,pt+.08,0);let z=-w.L/2,X=[];for(let O of _)O.door&&(X.push([z,O.c-O.wd/2]),z=O.c+O.wd/2);X.push([z,w.L/2]);for(let O of X){if(O[1]-O[0]<.01)continue;let Y=w.at(O[0],0,0),J=w.at(O[1],0,0),Z=w.horiz?[Y[0],Y[2]-pt/2,J[0],J[2]+pt/2]:[Y[0]-pt/2,Y[2],J[0]+pt/2,J[2]],Q=r.w(Z[0],Z[1]),ae=r.w(Z[2],Z[3]);i.walls.push(zn(n,Q[0],Q[1],ae[0],ae[1],i.baseY,i.baseY+i.h+.3,i))}if(i.h>v+.5){k(h,f,-w.L/2,w.L/2,v,i.h,pt,0);let O=Math.floor((i.h-v)/3.4),Y=Math.max(1,Math.floor((w.L-1)/2.6));for(let J=0;J<O;J++)for(let Z=0;Z<Y;Z++){let Q=-w.L/2+(Z+.5)*w.L/Y,ae=v+.8+J*3.4;k(h,Xd(),Q-.7,Q+.7,ae,ae+2,pt+.06,0),k(h,p,Q-.8,Q+.8,ae-.12,ae,pt+.16,0)}for(let J=0;J<=O;J++)k(h,p,-w.L/2,w.L/2,v+J*3.4-.1,v+J*3.4+.08,pt+.1,0)}}b(h,T(16052714,{r:.9}),o,.25,a,0,v+.12,0),i.h>v+.5&&b(h,T(14015458,{r:.85}),o,.3,a,0,i.h+.12,0);let U=i.h+.27;if(i.roofType==="gable"){let w=Math.min(o,a)+.8,_=Math.max(o,a)+.8,M=w*.38,R=new Mi;R.moveTo(-w/2,0),R.lineTo(w/2,0),R.lineTo(0,M),R.lineTo(-w/2,0);let k=new Wi(R,{depth:_,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2});k.translate(0,0,-_/2),m(h,k,g,0,i.h+.2,0,0,o>=a?Math.PI/2:0,0),m(h,E.rbox(.7,1.6,.7,.08),T(11883578,{r:.8}),o*.25,i.h+M*.6,-a*.15)}else if(i.roofType==="arch"){let w=new un(o/2+.15,o/2+.15,a+.4,32,1,!1,-Math.PI/2,Math.PI);w.rotateX(-Math.PI/2),m(h,w,g,0,v,0,0,0,0,1,.55,1)}else if([[o,.6,.25,0,a/2-.12],[o,.6,.25,0,-a/2+.12],[.25,.6,a,o/2-.12,0],[.25,.6,a,-o/2+.12,0]].forEach(w=>m(h,E.rbox(w[0],w[1],w[2],.06),p,w[3],U+.25,w[4])),(!i.roofAccess||o>9)&&(m(h,E.rbox(1.6,1,1.2,.15),T(13160664,{r:.4,m:.6}),-o*.25,U+.5,-a*.2),m(h,E.cyl(.45,.45,.25,24),T(9082014,{m:.7,r:.3}),-o*.25,U+1.1,-a*.2)),i.style==="tower"&&!i.roofAccess&&(m(h,E.cyl(1.2,1.2,2.2,24),T(10251071,{r:.8}),o*.2,U+2,a*.2),m(h,E.cone(1.35,.8,24),T(7031343,{r:.8}),o*.2,U+3.5,a*.2)),i.roofAccess){let w=r.box(-o/2,-a/2,o/2,a/2);i.plats.push(qi(n,w[0],w[1],w[2],w[3],i.baseY+U,i)),n.high.push({x:i.x,y:i.baseY+U,z:i.z,b:i,label:(i.name||"Building")+" roof"})}i.sign&&m(u,E.rbox(Math.min(o-1,4.4),.8,.14,.08),T(i.sign,{r:.35,e:i.sign,ei:.25,cc:.6}),0,Math.min(v,3.2)+.15,a/2+.12),m(u,E.rbox(2.8,.14,1.2,.06),T(i.awning||i.roof,{r:.5}),0,Math.min(Wd+.45,v-.05),a/2+.55);let I=r.w(0,a/2-1.4),D=r.w(0,a/2+1.8);if(i.doorIn={x:I[0],z:I[1]},i.doorOut={x:D[0],z:D[1]},Iy(n,i,d,m,r),i.elevator){let w=r.w(-o/2+1.3,-a/2+1.3),_=r.w(o/2-1.5,-a/2+1.5);m(u,E.rbox(1.9,v-.3,.2,.05),T(12108492,{m:.9,r:.25}),-o/2+1.3,v/2+.1,-a/2+pt+.12),ru(u,m,-o/2+1.3,.24,-a/2+1.3,2282478),ru(h,m,o/2-1.5,U+.02,-a/2+1.5,2282478),m(h,E.rbox(1.6,2.4,1.6,.15),T(14673644,{r:.6}),o/2-1.5,U+1.2,-a/2-0+.2);let M={x:_[0],y:i.baseY+U,z:_[1]};i.pads.push(ul(n,{x:w[0],y:i.baseY+.2,z:w[1],kind:"elev",label:"\u2B06 ROOF",to:M,b:i})),i.pads.push(ul(n,{x:_[0],y:i.baseY+U,z:_[1],kind:"elevdown",label:"\u2B07 INSIDE",to:{x:w[0]+.01,y:i.baseY+.25,z:w[1]+1.4*Math.cos(i.ry)},b:i}))}return i.basement&&Dy(n,e,i,u,m,r,i.basement===!0?"basement":i.basement),i.meshes=u.build(l),h.build(c),i.inner=new Ge,l.add(i.inner),d.build(i.inner,{cast:!1}),n.buildings.push(i),i}function ru(n,e,t,i,s,r){e(n,E.cyl(.95,1,.08,32),T(r,{e:r,ei:.9,r:.3}),t,i+.04,s),e(n,E.torus(.95,.07,6.283,8,32),T(16777215,{e:16777215,ei:.6}),t,i+.09,s,Math.PI/2)}function ul(n,e){return e.r=e.r||1.1,n.pads.push(e),e}function Iy(n,e,t,i,s){let r=e.lw,o=e.ld,a=r/2-pt-.2,l=o/2-pt-.2,c=e.interior,u=T(13011538,{r:.6,cc:.2}),h=T(5913122,{r:.6}),d=T(16317180,{r:.5}),f=(w,_,M=1.6,R=1,k)=>{let z=k?T(k,{r:.5,cc:.3}):u;i(t,E.rbox(M,.1,R,.04),z,w,.95,_),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(O=>i(t,E.cyl(.05,.05,.75,8),h,w+O[0]*(M/2-.12),.58,_+O[1]*(R/2-.12)));let X=s.w(w,_);n.tables.push({x:X[0],y:e.baseY+.2,z:X[1],r:Math.max(M,R)*.55+.2,b:e})},p=(w,_,M=15681391)=>{let R=T(M,{r:.5,cc:.4});i(t,E.rbox(.45,.08,.45,.04),R,w,.55,_),i(t,E.rbox(.45,.5,.07,.03),R,w,.82,_-.2),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(k=>i(t,E.cyl(.03,.03,.35,6),h,w+k[0]*.18,.37,_+k[1]*.18))},x=(w,_,M=2,R=0,k)=>{let z=Math.cos(R),X=Math.sin(R),O=(Q,ae)=>[w+Q*z+ae*X,_-Q*X+ae*z],Y=T(15852492,{r:.7}),J=k||[16734558,16763450,9095462,1671876,6966419,16749132],Z=O(0,-.2);i(t,E.box(M,2,.08),Y,Z[0],1.2,Z[1],0,R),[-1,1].forEach(Q=>{let ae=O(Q*(M/2-.04),0);i(t,E.box(.08,2,.5),Y,ae[0],1.2,ae[1],0,R)});for(let Q=0;Q<4;Q++){let ae=O(0,0);i(t,E.box(M,.06,.5),Y,ae[0],.28+Q*.6,ae[1],0,R)}for(let Q=0;Q<3;Q++)for(let ae=0;ae<Math.floor((M-.2)/.34);ae++){let ye=-M/2+.26+ae*.34,Fe=O(ye,.02),st=(ae+Q*2)%J.length;(ae+Q)%3===0?i(t,E.cyl(.12,.12,.42,14),T(J[st],{r:.35,cc:.5}),Fe[0],.52+Q*.6,Fe[1]):i(t,E.rbox(.26,.36,.28,.05),T(J[st],{r:.45,cc:.4}),Fe[0],.49+Q*.6,Fe[1],0,R)}},g=(w,_,M=5032432)=>{let R=T(M,{r:.85});i(t,E.rbox(2.2,.5,.9,.18),R,w,.5,_),i(t,E.rbox(2.2,.75,.3,.14),R,w,.9,_-.35),i(t,E.rbox(.3,.65,.9,.12),R,w-1.05,.65,_),i(t,E.rbox(.3,.65,.9,.12),R,w+1.05,.65,_)},m=(w,_)=>{i(t,E.cyl(.25,.18,.45,16),T(15167313,{r:.6}),w,.45,_),[[0,1,0,.42],[.18,.85,.1,.3],[-.15,.9,-.1,.3]].forEach(M=>i(t,E.sphere(1,14,10),T(5420936,{r:.7}),w+M[0],M[1],_+M[2],0,0,0,M[3]))},b=(w,_)=>{i(t,E.cyl(.03,.03,1.4,8),h,w,.9,_),i(t,E.cyl(.18,.3,.35,16),T(16773569,{e:16769162,ei:.9}),w,1.7,_)},y=(w,_,M=0)=>{i(t,E.rbox(1.6,.5,.45,.06),h,w,.45,_,0,M),i(t,E.rbox(1.5,.85,.08,.04),T(1120295,{r:.2,cc:1}),w,1.15,_,0,M),i(t,E.box(1.36,.72,.02),T(3900150,{e:6333946,ei:.7}),w+Math.sin(M)*.05,1.15,_+Math.cos(M)*.05,0,M)},v=(w,_,M=11868062)=>{i(t,E.rbox(1.4,.45,2.2,.1),u,w,.45,_),i(t,E.rbox(1.35,.25,2.1,.12),d,w,.78,_),i(t,E.rbox(1.38,.12,1.4,.06),T(M,{r:.8}),w,.92,_+.35),i(t,E.rbox(.9,.18,.45,.09),d,w,.98,_-.75),i(t,E.rbox(1.4,1,.12,.05),u,w,.85,_-1.1)},U=(w,_,M,R=9494767)=>{i(t,E.rbox(M,1,.7,.05),T(R,{r:.6}),w,.7,_),i(t,E.rbox(M+.1,.08,.8,.03),T(16316922,{r:.2,cc:1}),w,1.24,_)},I=(w,_,M=1)=>i(t,E.rbox(M,M,M,.06),T(13935475,{r:.8}),w,.2+M/2,_,0,w*3),D=(w,_)=>{f(w,_,1.6,.9,15857145),i(t,E.rbox(.7,.45,.06,.03),T(1120295,{cc:1}),w,1.3,_-.2),i(t,E.box(.62,.36,.01),T(2282478,{e:2282478,ei:.6}),w,1.3,_-.165),p(w,_+.8,3835647)};if(c==="home"||c==="cabin"){if(g(-a+1.4,l-1.2,c==="cabin"?12348453:5032432),y(-a+1.4,l-3.2>-l?l-3:0,Math.PI),a>2.5&&(f(a-1.3,.2),p(a-1.7,.2+.85,16760331),p(a-.9,.2+.85,16760331)),l>2.5&&v(a-1,-l+1.3),x(0,-l+.3,2),m(-a+.4,-l+.4),b(a-.3,l-.3),c==="cabin"){i(t,E.rbox(1.8,1.6,.8,.1),T(10249796,{r:.9}),-a+1.2,1,-l+.5),i(t,E.sphere(.35,12,10),T(16743168,{e:16733184,ei:2.5}),-a+1.2,.6,-l+.75);let w=s.w(-a+1.2,-l+1.4),_=s.w(-a+1.2,-l+.75);n.fires.push({x:w[0],y:e.baseY+.2,z:w[1],r:3.5,b:e,fx:_[0],fz:_[1]})}}else if(c==="shop"){for(let w=-1;w<=1;w++)Math.abs(w*2.6)<a-.8&&x(w*2.6,-.6,1.8,Math.PI/2);U(a-1,l-1.6,1.8,e.sign||9494767),x(0,-l+.3,Math.min(4,a*1.5)),m(-a+.4,l-.5),f(-a+1.2,l-1.5,1.2,.9,16777215)}else if(c==="diner"){U(0,-l+1.3,Math.min(r-2,6),16740518);for(let w=-2;w<=2;w++)Math.abs(w*1.2)<a-.5&&(i(t,E.cyl(.25,.25,.1,16),T(15672124,{cc:1,r:.3}),w*1.2,.8,-l+2.1),i(t,E.cyl(.05,.05,.6,8),T(11384253,{m:1,r:.3}),w*1.2,.5,-l+2.1));f(-a+1.2,l-1.3,1.2,1.2,4770532),f(a-1.2,l-1.3,1.2,1.2,4770532),p(-a+1.2,l-.4,16766474),p(a-1.2,l-.4,16766474),i(t,E.sphere(.25,16,12),T(16756684,{r:.4}),.5,1.45,-l+1.3),i(t,E.cone(.18,.4,16),T(15320170),.5,1.1,-l+1.3,Math.PI)}else if(c==="office"){for(let w=0;w<2;w++)for(let _=-1;_<=1;_++)Math.abs(_*2.8)<a-.9&&-l+1.8+w*2.6<l-2.4&&D(_*2.8,-l+1.8+w*2.6);m(a-.4,l-.4),m(-a+.4,l-.4),i(t,E.rbox(2.6,1.1,.8,.1),T(16777215,{r:.3}),a-1.6,.75,l-1.5)}else if(c==="hangar")I(-a+1,-l+1,1.2),I(-a+1,-l+2.3,1),I(-a+2.3,-l+1,1),I(a-1,-l+1,1.2),f(a-1.5,l-2.5,2,1,9741240),f(-a+1.8,l-2.5,2,1,9741240),i(t,E.cyl(1.6,1.8,.4,32),T(4674921,{m:.6,r:.4}),0,.4,-l+3),i(t,E.sphere(2.4,32,12),T(12634324,{m:.9,r:.2}),0,1.4,-l+3,0,0,.1,1,.28,1),i(t,new Lt(1,24,12,0,6.283,0,Math.PI/2),T(10217471,{r:.05,op:.4,cc:1}),0,1.6,-l+3),i(t,E.rbox(3.2,.6,.1,.05),T(2278750,{e:2278750,ei:.5}),0,2.9,-l+.25);else if(c==="station")i(t,E.rbox(2.4,2,5.2,.35),T(15087942,{r:.3,cc:1}),0,1.25,-.4),i(t,E.rbox(2.2,.9,1.6,.2),T(15087942,{r:.3,cc:1}),0,2.6,1),[-1.3,1.6].forEach(w=>[-1.15,1.15].forEach(_=>i(t,E.cyl(.45,.45,.3,20),T(2042167,{r:.8}),_,.65,w,0,0,Math.PI/2))),i(t,E.rbox(.5,.2,.3,.05),T(3900150,{e:3900150,ei:2}),-.4,3.15,1.2),i(t,E.rbox(.5,.2,.3,.05),T(15680580,{e:15680580,ei:2}),.4,3.15,1.2),f(a-1.2,-l+1.4,1.4,1),x(-a+.4,0,2.4,Math.PI/2);else if(c==="bunkerTop"){i(t,E.rbox(r-1.2,.05,2.6,.02),T(16436245,{r:.6}),0,.24,0);for(let w=0;w<6;w++)i(t,E.box(.35,.06,2.6),T(1120295),-r/2+1.2+w*(r-2.4)/5,.25,0,0,.6);i(t,E.cyl(.6,.6,.1,3),T(16436245,{e:16436245,ei:.4}),a-.5,2.2,-l+.05,Math.PI/2)}}function Dy(n,e,t,i,s,r,o){let a=t.lw,l=t.ld,c=Math.max(a,o==="bunker"?16:8),u=Math.max(l,o==="bunker"?12:7),h={id:"r"+t.id,kind:o,b:t,name:o==="bunker"?"Nuclear Bunker":o==="subway"?"Subway Station":o==="mine"?"Mine Tunnel":"Basement"},d=t.door==="s"||t.door==="n",f=d?c:u,p=d?u:c;h.x0=t.x-f/2,h.x1=t.x+f/2,h.z0=t.z-p/2,h.z1=t.z+p/2;let x=o==="bunker"?[0,0]:[t.lw/2-1.3,t.ld/2-1.5-(t.elevator,0)];(t.interior==="home"||t.interior==="cabin")&&(x[0]=-t.lw/2+1.4,x[1]=-t.ld/2+3>t.ld/2-1.2?0:-t.ld/2+3),(t.interior==="shop"||t.interior==="office"||t.interior==="diner")&&(x[0]=-t.lw/2+1.2,x[1]=.6);let g=o==="bunker"?16436245:16758531;s(i,E.rbox(1.8,.08,1.8,.04),T(3359061,{m:.6,r:.4}),x[0],.25,x[1]),ru(i,s,x[0],.28,x[1],g);let m=r.w(x[0],x[1]),b=new Ge;e.add(b),h.group=b;let y=new Jt,v=-30,U=o==="bunker"?10134961:o==="mine"?9268835:o==="subway"?15332857:12560778,I=o==="bunker"?6583435:o==="mine"?7162945:o==="subway"?9741240:9279918;y.rbox(T(I,{r:.7}),f+.6,.4,p+.6,.1,t.x,v-.2,t.z);let D=T(U,{r:.8}),w=6.5;y.box(D,f+.6,w,.3,t.x,v+w/2,h.z0-.15),y.box(D,f+.6,w,.3,t.x,v+w/2,h.z1+.15),y.box(D,.3,w,p,h.x0-.15,v+w/2,t.z),y.box(D,.3,w,p,h.x1+.15,v+w/2,t.z),zn(n,h.x0-.3,h.z0-.3,h.x1+.3,h.z0,v,v+6),zn(n,h.x0-.3,h.z1,h.x1+.3,h.z1+.3,v,v+6),zn(n,h.x0-.3,h.z0,h.x0,h.z1,v,v+6),zn(n,h.x1,h.z0,h.x1+.3,h.z1,v,v+6);{let z=T(o==="bunker"?8095636:o==="mine"?8017478:o==="subway"?13358561:10727874,{r:.7});for(let X=0;X<Math.floor(f/1.5);X++)for(let O=0;O<Math.floor(p/1.5);O++)(X+O)%2===0&&y.box(z,1.48,.02,1.48,h.x0+.75+X*1.5,v+.01,h.z0+.75+O*1.5)}if(o==="bunker"){for(let O=0;O<Math.floor(f/.8);O++)y.box(T(O%2?1120295:16436245,{r:.6}),.8,.03,.35,h.x0+.4+O*.8,v+.02,h.z0+2.8);let z=t.x-1.5,X=t.z+1;y.mesh(E.cyl(1.4,1.4,.03,32),T(16436245,{r:.5}),z,v+.03,X),y.mesh(E.cyl(.25,.25,.04,16),T(1120295),z,v+.04,X);for(let O=0;O<3;O++){let Y=O*2.094+.52;y.add(new Xn(1.25,12,Y-.5,1).rotateX(-Math.PI/2),T(1120295,{r:.6}),it(z,v+.07,X))}}let _=T(16773569,{e:16769162,ei:2.2});for(let z=0;z<3;z++)y.mesh(E.sphere(.25,14,10),_,h.x0+f*(z+.5)/3,v+3.2,h.z0+.2);for(let z=0;z<3;z++)y.mesh(E.sphere(.25,14,10),_,h.x0+f*(z+.5)/3,v+3.2,h.z1-.2);let M=[16734558,16763450,9095462,1671876,6966419];if(o==="bunker"){for(let z=0;z<4;z++){let X=h.x0+1.5+z*2.2;[.6,1.8].forEach(O=>{y.rbox(T(4674921,{m:.5,r:.4}),1,.12,2.1,.04,X,v+O,h.z0+1.4),y.rbox(T(M[z%5],{r:.8}),.95,.15,2,.06,X,v+O+.12,h.z0+1.4)}),y.box(T(3359061),.08,2.2,.08,X-.48,v+1.1,h.z0+.4)}for(let z=0;z<4;z++)y.rbox(T(988970,{cc:1,r:.2}),1.6,1,.1,h.x1-1.2-z*1.8,v+2,h.z1-.12),y.box(T([2278750,2282478,16096779,15680580][z],{e:[2278750,2282478,16096779,15680580][z],ei:.9}),1.45,.85,.02,h.x1-1.2-z*1.8,v+2,h.z1-.18);y.rbox(T(4674921,{r:.5}),6.5,1,.8,.05,h.x1-3.8,v+.5,h.z1-.7);for(let z=0;z<6;z++)y.rbox(T(6660877,{r:.7}),.9,.7,.7,.06,h.x0+1+z%3*1,v+.35+Math.floor(z/3)*.7,h.z1-.8);y.mesh(E.cyl(1.2,1.2,.08,3),T(16436245,{e:16436245,ei:.5}),t.x,v+3.6,h.z0+.25,Math.PI/2,0,0),h.tableSpots=[]}else if(o==="mine"){for(let z=0;z<4;z++){let X=h.x0+1+z*(f-2)/3;y.box(T(9132587,{r:.9}),.35,3.5,.35,X,v+1.75,h.z0+.3),y.box(T(9132587,{r:.9}),.35,3.5,.35,X,v+1.75,h.z1-.3),y.box(T(9132587,{r:.9}),.4,.4,p,X,v+3.5,t.z)}y.rbox(T(7041664,{m:.7,r:.4}),1.4,.9,2,.15,t.x+1.5,v+.7,t.z);for(let z=0;z<5;z++)y.mesh(E.rock(z,1),T([16765286,10416154,5032432][z%3],{r:.2,m:.3,e:[16765286,10416154,5032432][z%3],ei:.5}),t.x+1.2+z%3*.3,v+1.25,t.z-.5+z*.25,0,z,0,.25)}else if(o==="subway"){y.rbox(T(15857145,{r:.3,cc:1}),f-1,2.6,2.4,.5,t.x,v+1.5,h.z0+1.6),y.rbox(T(3835647,{r:.4}),f-.9,.5,2.45,.2,t.x,v+1.1,h.z0+1.6);for(let z=0;z<4;z++)y.box(T(1976635,{cc:1,r:.1}),1.2,.9,2.5,h.x0+1.8+z*(f-3.6)/3,v+2,h.z0+1.6);y.box(T(16436245),f,.05,.3,t.x,v+.03,h.z0+3.1);for(let z=0;z<3;z++)y.rbox(T(9133302,{r:.5}),1.6,.12,.5,.04,h.x0+2+z*3,v+.5,h.z1-.6)}else{for(let z=0;z<Math.floor(f/2.5);z++){let X=h.x0+1.3+z*2.5;y.rbox(T(15325350,{r:.7}),2,2.2,.5,.04,X,v+1.1,h.z0+.35);for(let O=0;O<6;O++)y.mesh(E.cyl(.12,.12,.28,14),T(M[(O+z)%5],{r:.3,m:.4}),X-.75+O*.3,v+.6+O%2*.7,h.z0+.72)}y.rbox(T(15857145,{r:.4}),.9,1.1,.8,.1,h.x1-.7,v+.55,h.z1-.7),y.mesh(E.cyl(.28,.28,.06,20),T(988970,{cc:1}),h.x1-.7,v+.7,h.z1-1.12,Math.PI/2,0,0);for(let z=0;z<3;z++)y.rbox(T(13935475,{r:.8}),.8,.8,.8,.06,h.x1-.7,v+.4+z*.8*(z<2,1),h.z0+.7+(z===2?0:z*.9));y.mesh(E.cyl(.2,.2,.9,16),T(4770532,{r:.1,op:.6,cc:1}),h.x0+.6,v+.45,h.z1-.6)}let R={x:t.x,z:h.z1-1.2};o==="bunker"&&(R.x=h.x0+1.5,R.z=t.z+1.5),y.mesh(E.cyl(.95,1,.08,32),T(2278750,{e:2278750,ei:.9}),R.x,v+.04,R.z),y.mesh(E.torus(.95,.07,6.283,8,32),T(16777215,{e:16777215,ei:.6}),R.x,v+.09,R.z,Math.PI/2,0,0),y.build(b,{cast:!1}),h.spawn={x:t.x+(o==="bunker"?2:.6),y:v,z:t.z+(o==="bunker"?0:-.4)};let k=r.w(x[0]+(x[0]>0?-1.5:1.5),x[1]);ul(n,{x:m[0],y:t.baseY+.25,z:m[1],kind:"down",label:o==="bunker"?"\u2622\uFE0F BUNKER":o==="subway"?"\u{1F687} SUBWAY":o==="mine"?"\u26CF\uFE0F MINE":"\u2B07 BASEMENT",to:h.spawn,b:t,room:h}),ul(n,{x:R.x,y:v,z:R.z,kind:"up",label:"\u2B06 GO UP",to:{x:k[0],y:t.baseY+.3,z:k[1]},b:t,room:h}),h.hatch={x:m[0],y:t.baseY+.25,z:m[1]},t.room=h,n.rooms.push(h)}function xr(n,e,t){if(t.wrecked)return!1;if(t.wrecked=!0,t.group.visible=!1,t.upper.visible=!1,t.walls.forEach(i=>i.off=!0),t.plats.forEach((i,s)=>{s>0&&(i.off=!0)}),!t.rubble){let i=new Jt,s=T(t.wall,{r:.8}),r=T(t.roof,{r:.6}),o=T(13620957,{r:.8});i.rbox(o,t.w+.5,.5,t.d+.5,.1,t.x,t.baseY-.05,t.z);let a=t.id*7.13,l=()=>(a=(a*9301+49297)%233280,a/233280);for(let c=0;c<18;c++){let u=.6+l()*1.3;i.add(E.rbox(1,1,1,.12),c%3?s:r,it(t.x+(l()-.5)*t.w*.9,t.baseY+.3+l()*.6,t.z+(l()-.5)*t.d*.9,l()*3,l()*3,l()*3,u,u*.6,u))}[[0,t.d/2],[0,-t.d/2],[t.w/2,0],[-t.w/2,0]].forEach((c,u)=>{let h=u<2?t.w:t.d;for(let d=0;d<3;d++){let f=.6+l()*1.4,p=(d-1)*h/3;i.add(E.rbox(1,1,1,.06),s,it(t.x+c[0]+(u<2?p:0),t.baseY+f/2,t.z+c[1]+(u<2?0:p),0,0,0,u<2?h/3.3:.3,f,u<2?.3:h/3.3))}}),t.rubble=new Ge,i.build(t.rubble),e.add(t.rubble)}return t.rubble.visible=!0,!0}function gs(n,e){e.wrecked&&(e.wrecked=!1,e.group.visible=!0,e.upper.visible=!0,e.rubble&&(e.rubble.visible=!1),e.walls.forEach(t=>t.off=!1),e.plats.forEach(t=>t.off=!1))}var xs=[6078554,5025616,8313175,4170573],On=[16731501,16766474,16777215,13073919,16748459,5032432,16752412],hu=class{constructor(){this.cv=document.createElement("canvas"),this.cv.width=1024,this.cv.height=1024,this.ctx=this.cv.getContext("2d"),this.n=0,this.geos=[]}slot(e,t,i="#ffffff"){let s=this.n++;if(s>=32)return null;let r=s%2*512,o=Math.floor(s/2)*64,a=this.ctx;a.fillStyle="#"+t.toString(16).padStart(6,"0"),a.beginPath(),a.roundRect(r+3,o+3,506,58,14),a.fill(),a.strokeStyle="rgba(255,255,255,0.85)",a.lineWidth=4,a.beginPath(),a.roundRect(r+8,o+8,496,48,10),a.stroke();let l=40;for(a.font=`900 ${l}px "Arial Black", Arial, sans-serif`;a.measureText(e).width>470&&l>16;)l-=2,a.font=`900 ${l}px "Arial Black", Arial, sans-serif`;return a.fillStyle="rgba(0,0,0,0.25)",a.textAlign="center",a.textBaseline="middle",a.fillText(e,r+258,o+35),a.fillStyle=i,a.fillText(e,r+256,o+33),[r/1024,1-(o+64)/1024,512/1024,64/1024]}add(e,t,i,s,r){let o=this.slot(e,t,r);if(!o)return;let a=new Ln(i,i/8),l=a.attributes.uv;for(let c=0;c<l.count;c++)l.setXY(c,o[0]+l.getX(c)*o[2],o[1]+l.getY(c)*o[3]);a.applyMatrix4(s),this.geos.push(a)}build(e){if(!this.geos.length)return;let t=new sr(this.cv);t.colorSpace=rn,t.anisotropy=4;let i=new zt({map:t,emissiveMap:t,emissive:16777215,emissiveIntensity:.35,roughness:.45,side:Pt}),s=new Ee(mr(this.geos),i);s.receiveShadow=!0,e.add(s),this.mesh=s}},dl=(n,e,t,i=0)=>it(n,e,t,0,i,0);function uo(n,e,t,i,s){n.mesh(E.cyl(.025,.03,.42,5),T(4170573,{r:.8}),e,t+.21,i),n.mesh(E.sphere(.13,8,6),T(s,{r:.6}),e,t+.46,i,0,0,0,1,.6,1),n.mesh(E.sphere(.055,6,4),T(16766474,{r:.5}),e,t+.52,i)}function fl(n,e,t,i,s,r=1){for(let o=0;o<3;o++)n.mesh(E.cone(.07*r,.55*r,5),T(s,{r:.85}),e+(o-1)*.09*r,t+.25*r,i+o%2*.06,(o-1)*.35,0,(o-1)*.3)}function fo(n,e,t,i,s=1,r=5025616,o){if([[0,.55,0,.75],[.55,.42,.15,.55],[-.5,.45,-.1,.6],[.1,.4,-.5,.5]].forEach(a=>n.mesh(E.sphere(1,12,9),T(r,{r:.8}),e+a[0]*s,t+a[1]*s,i+a[2]*s,0,0,0,a[3]*s,a[3]*s*.85,a[3]*s)),o)for(let a=0;a<5;a++){let l=a*1.3;n.mesh(E.sphere(.09*s,6,4),T(o,{r:.5}),e+Math.cos(l)*.62*s,t+(.5+a%2*.3)*s,i+Math.sin(l)*.62*s)}}function Ly(n,e,t,i){let s=T(15672124,{r:.4,cc:.6});n.mesh(E.cyl(.18,.2,.7,12),s,e,t+.35,i),n.mesh(E.sphere(.19,12,8),s,e,t+.72,i),n.mesh(E.cyl(.07,.07,.5,8),T(16766474,{r:.4}),e,t+.48,i,0,0,Math.PI/2)}function Uy(n,e,t,i,s=2792847){n.mesh(E.cyl(.32,.27,.9,14),T(s,{r:.5}),e,t+.45,i),n.mesh(E.cyl(.36,.36,.08,14),T(2508371,{r:.5}),e,t+.93,i)}function ou(n,e,t,i,s=0){let r=T(3835647,{r:.4,cc:.6});n.mesh(E.rbox(.55,.75,.5,.12),r,e,t+.75,i,0,s),n.mesh(E.cyl(.05,.05,.45,6),T(3359061),e,t+.2,i)}function Ny(n,e,t,i){n.mesh(E.cone(.22,.65,12),T(16743168,{r:.5}),e,t+.33,i),n.mesh(E.cyl(.155,.17,.1,12),T(16777215,{r:.5}),e,t+.3,i),n.mesh(E.box(.5,.05,.5),T(16743168,{r:.5}),e,t+.025,i)}function zy(n,e,t,i,s=16763450){n.mesh(E.cyl(.38,.38,1.1,14),T(s,{r:.45,m:.3}),e,t+.55,i),n.mesh(E.cyl(.4,.4,.12,14),T(2236962,{r:.5}),e,t+.75,i),n.mesh(E.cyl(.4,.4,.12,14),T(2236962,{r:.5}),e,t+.3,i)}function au(n,e,t,i,s=1,r=0){n.mesh(E.rbox(s,s,s,.06*s),T(13935475,{r:.8}),e,t+s/2,i,0,r),n.mesh(E.box(s*1.02,s*.14,s*1.02),T(10776904,{r:.8}),e,t+s/2,i,0,r)}function Oy(n,e,t,i,s){n.mesh(E.rbox(1.6,.6,1.6,.12),T(15320170,{r:.6}),t,i+.3,s),n.mesh(E.box(1.4,.05,1.4),T(7029795,{r:.9}),t,i+.6,s),fo(n,t,i+.5,s,.7,xs[t*7+s&3],On[(t*3+s*5&7)%7])}function lu(n,e,t,i,s){n.mesh(E.rbox(1.8,1,1,.12),T(16777215,{r:.4,cc:.5}),e,t+.8,i),n.mesh(E.rbox(1.82,.2,1.02,.06),T(s,{r:.5}),e,t+1.05,i),[[-.6,.45],[.6,-.45]].forEach(r=>n.mesh(E.cyl(.25,.25,.12,14),T(1842980),e+r[0],t+.25,i+r[1]*1.1,Math.PI/2)),n.mesh(E.cyl(.04,.04,1.6,6),T(14540253),e,t+2,i),n.add(E.cone(1.3,.5,8),T(s,{r:.5}),dl(e,t+2.8,i))}function ky(n,e,t,i,s,r=3){n.mesh(E.sphere(.4,14,10),T(s,{r:.25,cc:1}),e,t+r,i,0,0,0,1,1.2,1),n.mesh(E.cyl(.01,.01,r-.4,4),T(16777215),e,t+(r-.4)/2+.2,i)}function Fy(n,e,t,i){let s=T(16045453,{r:.95});n.mesh(E.cyl(.9,1.1,.6,14),s,e,t+.3,i),n.mesh(E.cyl(.55,.65,.6,12),s,e,t+.9,i),[[-.8,0],[.8,0],[0,.8],[0,-.8]].forEach(r=>{n.mesh(E.cyl(.25,.28,.8,10),s,e+r[0],t+.4,i+r[1]),n.mesh(E.cone(.3,.4,10),T(15317106,{r:.95}),e+r[0],t+1,i+r[1])}),n.mesh(E.cyl(.015,.015,.7,4),T(9133620),e,t+1.5,i),n.add(E.box(.35,.22,.02),T(16711790,{r:.5}),dl(e+.18,t+1.75,i))}function By(n,e,t,i,s,r){n.mesh(E.box(1.1,.04,2),T(s,{r:.9}),e,t+.03,i,0,r),n.mesh(E.box(1.12,.045,.3),T(16777215,{r:.9}),e,t+.035,i,0,r)}function Hy(n,e,t,i,s){for(let r=0;r<5;r++){let o=r/5*6.283;n.mesh(E.cone(.08,.32,5),T(s,{r:.6}),e+Math.cos(o)*.13,t+.04,i+Math.sin(o)*.13,Math.PI/2,0,-o+Math.PI/2)}}function Vy(n,e,t,i,s,r){n.mesh(E.sphere(1,14,10),T(s,{r:.3,cc:1}),e,t+1,i,.15,r,0,.35,1.1,.08),n.mesh(E.sphere(1,10,6),T(16777215,{r:.3}),e,t+1,i+.01,.15,r,0,.06,1.05,.085)}function Gy(n,e,t,i,s,r){n.mesh(E.rbox(.7,.08,1.2,.03),T(s,{r:.6}),e,t+.35,i,0,r),n.add(E.rbox(.7,.08,.8,.03),T(s,{r:.6}),it(e-Math.sin(r)*.75,t+.65,i-Math.cos(r)*.75,-.9,r,0))}function Wy(n,e,t,i){n.mesh(E.sphere(.45,14,10),T(15672124,{r:.4,cc:.6}),e,t,i),n.mesh(E.cyl(.47,.47,.2,14),T(16777215,{r:.4}),e,t,i)}function Xy(n,e,t,i,s=1){n.mesh(E.cyl(.07*s,.09*s,.3*s,8),T(16773590,{r:.7}),e,t+.15*s,i),n.add(new Lt(.22*s,12,6,0,6.283,0,Math.PI/2),T(15087942,{r:.4,cc:.6}),dl(e,t+.28*s,i));for(let r=0;r<3;r++)n.mesh(E.sphere(.035*s,6,4),T(16777215),e+Math.cos(r*2.1)*.12*s,t+.44*s,i+Math.sin(r*2.1)*.12*s)}function Yy(n,e,t,i){n.mesh(E.cyl(.4,.5,.5,14),T(9132587,{r:.9}),e,t+.25,i),n.mesh(E.cyl(.38,.38,.02,14),T(15321233,{r:.8}),e,t+.51,i)}function qy(n,e,t,i,s){for(let r=0;r<6;r++){let o=r<3?0:r<5?1:2,l=((o===0?r:o===1?r-3:0)-(o===0?1:o===1?.5:0))*.42,c=new L(l,0,0).applyAxisAngle(new L(0,1,0),s);n.mesh(E.cyl(.2,.2,2,10),T(r%2?10506797:11887901,{r:.85}),e+c.x,t+.2+o*.36,i+c.z,Math.PI/2,s,0)}}function Zy(n,e,t,i,s){let r=T(13204538,{r:.75});n.mesh(E.rbox(2,.1,.9,.03),r,e,t+.75,i,0,s),[-1,1].forEach(o=>{let a=new L(0,0,o*.75).applyAxisAngle(new L(0,1,0),s);n.mesh(E.rbox(2,.08,.32,.03),r,e+a.x,t+.42,i+a.z,0,s)}),n.mesh(E.box(.1,.75,1.8),T(9132587),e,t+.37,i,0,s),n.mesh(E.box(1.6,.06,.95),T(16734558,{r:.9}),e,t+.81,i,0,s)}function $y(n,e,t,i){n.mesh(E.cyl(.65,.65,1.1,16),T(15320170,{r:.95}),e,t+.65,i,Math.PI/2,e)}function jy(n,e,t,i,s){for(let r=0;r<5;r++){let o=new L((r%3-1)*.62+(r>2?.31:0),0,0).applyAxisAngle(new L(0,1,0),s);n.mesh(E.cap(.18,.4,8),T(12757112,{r:.95}),e+o.x,t+.2+(r>2?.34:0),i+o.z,0,s,Math.PI/2)}}function Jy(n,e,t,i,s){n.mesh(E.cyl(.08,.12,1.4,8),T(10134961,{m:.6,r:.4}),e,t+.7,i),n.add(new Lt(1,20,8,0,6.283,0,1),T(15857145,{r:.35,m:.3,side:Pt}),it(e,t+1.9,i,-.9,s,0,1,.45,1))}function Yd(n,e,t,i,s){let r=T(8191851,{r:.35,cc:.8}),o=T(1118481,{r:.1,cc:1});n.mesh(E.cap(.35,.7,12),r,e,t+.8,i),n.mesh(E.sphere(.55,18,12),r,e,t+1.75,i,0,0,0,1,1.15,.95),[-1,1].forEach(a=>{let l=new L(a*.22,0,.42).applyAxisAngle(new L(0,1,0),s);n.mesh(E.sphere(.17,12,8),o,e+l.x,t+1.8,i+l.z,0,s,a*.4,1,.6,.6)}),n.mesh(E.cyl(.6,.7,.3,16),T(7041664),e,t+.15,i)}function Ky(n,e,t,i,s){n.add(new Da(.55*s,1),T(11569488,{r:1,flat:!0}),dl(e,t+.5*s,i))}function Qy(n,e,t,i,s){for(let r=0;r<5;r++){let o=r*1.256;n.mesh(E.sphere(.12,6,5),T(s,{r:.6}),e+Math.cos(o)*.12,t+.1,i+Math.sin(o)*.12,0,o,.6,.6,1.4,.6)}n.mesh(E.sphere(.07,6,4),T(16731501),e,t+.24,i)}function cu(n,e,t,i,s,r,o,a){n.mesh(E.cyl(.12,.12,2.6,8),T(3359061,{m:.6}),t+Math.cos(r)*-2.4,i+1.3,s+Math.sin(r)*2.4),n.mesh(E.cyl(.12,.12,2.6,8),T(3359061,{m:.6}),t+Math.cos(r)*2.4,i+1.3,s-Math.sin(r)*2.4),n.mesh(E.rbox(6.4,1.2,.16,.08),T(16777215,{r:.5}),t,i+3.1,s,0,r),e.add(o,a,6.1,new Ye().makeTranslation(t,i+3.1,s).multiply(new Ye().makeRotationY(r)).multiply(new Ye().makeTranslation(0,0,.1)),"#ffffff")}function qd(n,e,t,i,s,r){let o=(u,h)=>{let d=new L(u,0,h).applyAxisAngle(new L(0,1,0),r);return[t+d.x,s+d.z]};[[-1.4,-.5],[1.4,-.5]].forEach(u=>{let h=o(u[0],u[1]);n.mesh(E.cyl(.06,.06,2.5,8),T(6583435,{m:.7}),h[0],i+1.25,h[1])});let a=o(0,0);n.mesh(E.rbox(3.2,.12,1.4,.05),T(3835647,{r:.4}),a[0],i+2.5,a[1],0,r);let l=o(0,-.55);n.mesh(E.box(3,1.8,.05),T(12443902,{op:.45,r:.1}),l[0],i+1.5,l[1],0,r);let c=o(0,-.3);n.mesh(E.rbox(2.4,.1,.4,.03),T(16758531,{r:.6}),c[0],i+.5,c[1],0,r),e.add("BUS STOP",3835647,2.6,new Ye().makeTranslation(a[0],i+2.85,a[1]).multiply(new Ye().makeRotationY(r)))}function e_(n,e,t){for(let s=0;s<26;s++){let r=s/26*6.283+t()*.15,o=150+t()*40,a=Math.cos(r)*o,l=Math.sin(r)*o;if(e==="area51"){let c=10+t()*18,u=14+t()*18;n.mesh(E.cyl(u*.8,u,c,10),T([15167313,16032353,14254414][s%3],{r:.9}),a,c/2-2,l,0,t()*3),n.mesh(E.cyl(u*.82,u*.82,.8,10),T(13129021,{r:.9}),a,c-2,l,0,t())}else if(e==="city")for(let c=0;c<3;c++){let u=20+t()*45,h=8+t()*8;n.mesh(E.box(h,u,h),T([10536191,12432127,16762623,10221311,13303743][(s+c)%5],{r:.7}),a+(c-1)*12,u/2,l+(t()-.5)*8)}else if(e==="beach")l>60?s%3===0&&(n.mesh(E.sphere(1,16,8),T(8178026,{r:.9}),a,-3,l,0,0,0,14,7,10),n.mesh(E.sphere(1,16,8),T(16769704,{r:.9}),a,-3.5,l,0,0,0,17,4,13),Zn(n,a,2.5,l,1.4,"palm",s)):n.mesh(E.sphere(1,16,10),T([7327587,5617738,9426028][s%3],{r:.9}),a,-2,l,0,0,0,30+t()*20,14+t()*14,22);else{let c=30+t()*40;n.mesh(E.cone(28+t()*14,c,9),T([7049073,6127206,8035966][s%3],{r:.9,flat:!0}),a,c/2-3,l,0,t()*3),n.mesh(E.cone(28*.32,c*.32,9),T(16317180,{r:.8,flat:!0}),a,c-3-c*.16+.5,l,0,t()*3)}}}function Zd(n,e,t,i,s){let r=new Jt,o=new hu,a={area51:(f,p)=>Math.abs(f)<5&&p>-52&&p<48||Math.abs(p)<5&&Math.abs(f)<52||Math.abs(p-52)<7.5||Math.hypot(f-14,p+12)<10.5,city:(f,p)=>[-30,0,30].some(x=>Math.abs(f-x)<5||Math.abs(p-x)<5)||Math.hypot(f-15,p-15)<4,beach:(f,p)=>Math.abs(p-6)<4.5||Math.abs(f)<4.5&&p<6||p>11&&p<17&&Math.abs(f)<56||f>-34&&f<-26&&p>20,pine:(f,p)=>Math.abs(p)<4&&Math.abs(f)<52||Math.abs(f)<4&&Math.abs(p)<46||Math.hypot(f-6,p-6)<4||Math.hypot(f+38,p-32)<11}[s],l=(f,p,x=1)=>!a(f,p)&&!n.walls.some(g=>g.y1>-5&&f>g.x0-x&&f<g.x1+x&&p>g.z0-x&&p<g.z1+x)&&!n.pads.some(g=>Math.hypot(g.x-f,g.z-p)<2.5)&&!n.plats.some(g=>f>g.x0-x&&f<g.x1+x&&p>g.z0-x&&p<g.z1+x),c=(f,p,x,g,m)=>{let b=0,y=0;for(;b<f&&y++<f*30;){let v=(i()-.5)*p,U=(i()-.5)*p;!l(v,U,x)||m&&!m(v,U)||g(v,n.terrain(v,U),U,b++)}},u=(f,p,x,g)=>new Ye().makeTranslation(f.x,f.baseY,f.z).multiply(new Ye().makeRotationY(f.ry)).multiply(new Ye().makeTranslation(p,x,g));for(let f of n.buildings)f.sign&&o.add(f.name.toUpperCase(),f.sign,Math.min(f.lw-1,4.4)-.15,u(f,0,Math.min(f.ceil,3.2)+.15,f.ld/2+.2));let h=(f,p,x,g,m)=>cu(e,o,f,n.terrain(f,p),p,Math.atan2(-f,-p),g,m),d=new Jt;if(e_(d,s,i),s==="area51"){h(-12,10,0,"AREA 51 - TOP SECRET",1483594),h(-12,-26,.3,"DANGER: ALIENS AHEAD",15680580),o.add("* 51 *",4674921,16,it(0,.09,52,-Math.PI/2,0,0),"#facc15");for(let f of[-12,18])for(let p=0;p<6;p++)e.mesh(E.box(.8,.03,3),T(p%2?1120295:16436245,{r:.7}),-23.6,.05,f-3+p*1.2,0,.6);for(let f=0;f<7;f++){let p=-60+f*20;e.mesh(E.cone(.9,2,3),T(16777215,{r:.7}),p,.08,52,Math.PI/2,0,-Math.PI/2,1,1,.05)}[[-22,-2],[-22,30],[20,-6],[38,18],[6,-40],[-6,26]].forEach((f,p)=>{for(let x=0;x<3;x++)zy(e,f[0]+x*.85,0,f[1],[16763450,1483594,3835647][(p+x)%3]);au(e,f[0]+.5,0,f[1]+1.2,1,p),au(e,f[0]-.6,0,f[1]+1.3,.8,p+1),au(e,f[0],1,f[1]+1.2,.7,p+2)}),[[-6,-22,0],[6,-22,0],[-20,6,1.57],[20,2,1.57],[-12,44,0]].forEach(f=>jy(e,f[0],0,f[1],f[2]));for(let f=0;f<14;f++)Ny(e,-4.6+f%2*9.2,0,-46+f*6.5);[[40,-8,.6],[-44,2,2.4],[42,44,3.6],[-46,40,1]].forEach(f=>Jy(e,f[0],0,f[1],f[2])),Yd(e,9,0,-4,-.6),Yd(e,-6,0,46,2.6),c(34,120,3,(f,p,x,g)=>e.mesh(E.cyl(1,1,.03,18),T([14987374,16243880,14262374,13227658][g%4],{r:.95}),f,p+.02+g*4e-4,x,0,g,0,2+i()*3.5,1,1.5+i()*3)),c(22,110,1.5,(f,p,x,g)=>fo(e,f,p,x,.6+i()*.4,[9083451,7048739,10727755][g%3],g%3===0?16743340:0)),c(40,104,1.5,(f,p,x,g)=>Ky(e,f,p,x,.6+i()*.7)),c(14,110,1.5,(f,p,x,g)=>Zn(e,f,p,x,.55+i()*.45,"cactus"),(f,p)=>Math.abs(f)>12||Math.abs(p)>12),c(18,110,1.2,(f,p,x,g)=>co(e,f,p,x,.35+i()*.6,g,[14254414,13134140,14723437][g%3])),c(120,112,.6,(f,p,x,g)=>g%2?Qy(r,f,p,x,[8702998,6660877,5078031][g%3]):fl(r,f,p,x,11903562,.9)),c(80,112,.6,(f,p,x,g)=>r.mesh(E.sphere(.12+i()*.12,6,4),T([14262374,11565637,15249530][g%3],{r:.95,flat:!0}),f,p+.05,x))}else if(s==="city"){h(24,-8,0,"WELCOME TO GROK CITY!",16196997);for(let f of[-30,0,30])for(let p of[-30,0,30]){for(let x=0;x<6;x++){let g=-3.1+x*1.25;e.mesh(E.box(.7,.02,2.4),T(16777215,{r:.6}),f+g,.08,p-5.6),e.mesh(E.box(.7,.02,2.4),T(16777215,{r:.6}),f+g,.08,p+5.6),e.mesh(E.box(2.4,.02,.7),T(16777215,{r:.6}),f-5.6,.08,p+g),e.mesh(E.box(2.4,.02,.7),T(16777215,{r:.6}),f+5.6,.08,p+g)}e.mesh(E.cyl(.55,.55,.03,16),T(3159098,{r:.6,m:.5}),f+1.6,.08,p+12)}for(let f of[-45,-15,15,45])for(let p of[-45,-15,15,45]){[[f-10,p-10],[f+10,p-10],[f-10,p+10],[f+10,p+10]].forEach((g,m)=>{if(!l(g[0],g[1],.8))return;let b=m+f+p&3;b===0?Ly(e,g[0],.11,g[1]):b===1?Uy(e,g[0],.11,g[1]):b===2?ou(e,g[0],.11,g[1]):Oy(e,r,g[0],.11,g[1])});for(let g=0;g<4;g++){let m=f+(g-1.5)*6,b=p+(g%2?10.3:-10.3);l(m,b,.4)&&t_(e,r,m,.11,b,g)}}qd(e,o,-36,.11,-5.8,0),qd(e,o,24,.11,35.8,Math.PI),[[-2,-34],[-36,2],[27,-4]].forEach((f,p)=>lu(e,f[0]+.5*p,.11,f[1],[16711790,3835647,9095462][p]));for(let f=0;f<70;f++){let p=i()*6.283,x=4.5+i()*6.5,g=15+Math.cos(p)*x,m=15+Math.sin(p)*x;l(g,m,.3)&&uo(r,g,0,m,On[f%7])}for(let f=0;f<6;f++)ky(e,11+f*.5,0,6.5+f%2*.4,On[f],2.6+f%3*.35);for(let f=0;f<6;f++)e.mesh(E.box(.9,.02,.9),T(On[f],{r:.8}),26+f%2*1,.06,6+f);c(90,140,.5,(f,p,x,g)=>g%3?fl(r,f,p,x,xs[g&3]):uo(r,f,p,x,On[g%7]),(f,p)=>!n.buildings.some(x=>Math.abs(f-x.x)<x.w/2+2&&Math.abs(p-x.z)<x.d/2+2)),[[-45,45],[15,15]].forEach(f=>{for(let p=0;p<10;p++){let x=p/10*6.283+.3,g=f[0]+Math.cos(x)*11,m=f[1]+Math.sin(x)*11;l(g,m,.5)&&fo(e,g,0,m,.8,xs[p&3],p%2?On[p%7]:0)}}),[["GROK COLA",15672124],["EAT MORE TACOS",16752412],["ROARGON MOVIE",8084694],["SKY TOWER",3835647]].forEach((f,p)=>{let x=n.buildings.filter(g=>g.h<6&&!g.sign)[p]||n.buildings.filter(g=>g.h<6)[p*3];x&&cu(e,o,x.x,x.baseY+x.h+.4,x.z,x.ry,f[0],f[1])})}else if(s==="beach"){h(12,-13,0,"SUNNY BEACH",16752412),h(-22,19.5,0,"NO LIFEGUARD ON DUTY",15672124);let f=(p,x)=>x>17&&n.terrain(p,x)>-1;c(16,140,1.2,(p,x,g,m)=>By(e,p,x,g,On[m%7],i()*.6-.3),f),c(7,140,2,(p,x,g,m)=>Fy(e,p,x,g),f),c(10,140,1,(p,x,g,m)=>Vy(e,p,x,g,On[(m+2)%7],i()*3),f),c(12,140,1,(p,x,g,m)=>Gy(e,p,x,g,[3835647,16711790,16760331,448160][m%4],Math.PI+(i()-.5)*.4),f),c(40,140,.4,(p,x,g,m)=>m%2?Hy(r,p,x,g,[16739179,16752412,13073919][m%3]):r.mesh(E.sphere(.14,8,5),T([16773606,16766629,16756141][m%3],{r:.4}),p,x+.04,g,0,m,0,1,.45,1.2),f);for(let p=0;p<8;p++)Wy(e,-60+p*17,n.sea+.1,44+p%2*6);[[50,22],[50,30]].forEach(p=>e.mesh(E.cyl(.07,.07,2.6,8),T(16777215),p[0],n.terrain(p[0],p[1])+1.3,p[1])),e.mesh(E.box(.04,.8,8),T(15857145,{op:.7}),50,n.terrain(50,26)+2.1,26),lu(e,-12,.3,14,16711790),lu(e,28,.3,14,448160),c(80,140,.5,(p,x,g,m)=>m%3?fl(r,p,x,g,xs[m&3]):uo(r,p,x,g,On[m%7]),(p,x)=>x<4&&n.terrain(p,x)>-.5),c(16,140,1.5,(p,x,g,m)=>fo(e,p,x,g,.8,xs[m&3],m%2?16731501:0),(p,x)=>x<2);for(let p of n.buildings)p.name==="Beach House"&&ou(e,p.doorOut.x+2.2,n.terrain(p.doorOut.x,p.doorOut.z),p.doorOut.z,p.ry)}else if(s==="pine"){h(-7,8,0,"PINE PEAK - ELEV 2051",2976335),cu(e,o,-6,0,-8,.6,"MINE <<   >> LAKE",9132587),c(160,96,.5,(f,p,x,g)=>g%3===0?uo(r,f,p,x,On[g%7]):fl(r,f,p,x,xs[g&3]),(f,p)=>n.terrain(f,p)<6),c(40,96,.6,(f,p,x,g)=>Xy(r,f,p,x,.8+i()*.8),(f,p)=>n.terrain(f,p)<6),c(14,90,1.5,(f,p,x,g)=>Yy(e,f,p,x),(f,p)=>n.terrain(f,p)<6),c(18,90,1.5,(f,p,x,g)=>fo(e,f,p,x,.9,xs[g&3],g%3?0:On[g%7]),(f,p)=>n.terrain(f,p)<6),[[-22,-8,.3],[36,6,1.2],[-4,24,0]].forEach(f=>qy(e,f[0],0,f[1],f[2])),[[12,6,.4],[-20,24,-.3],[-46,24,1.2]].forEach(f=>Zy(e,f[0],n.terrain(f[0],f[1]),f[1],f[2])),[[40,-4],[42,-6],[38,22]].forEach(f=>$y(e,f[0],0,f[1]));for(let f of n.buildings)if(f.name==="Log Cabin"){ou(e,f.doorOut.x+2.4,0,f.doorOut.z,f.ry);for(let p=0;p<6;p++)uo(r,f.doorOut.x-2.6+p*.35,0,f.doorOut.z-.6,On[p])}e.mesh(E.sphere(1,16,8),T(15681391,{r:.4,cc:.8}),-35,-.5,28,0,.5,0,.6,.3,2.2);for(let f=0;f<3;f++){let p=-42+f*1.2,x=34+f*.6;e.mesh(E.sphere(.3,12,8),T(16777215,{r:.5}),p,-.45,x),e.mesh(E.sphere(.18,10,8),T(2976335,{r:.5}),p,-.15,x+.2),e.mesh(E.cone(.06,.15,6),T(16752412),p,-.17,x+.4,Math.PI/2)}for(let f=0;f<10;f++){let p=f*.7,x=3+f%4*1.5;r.mesh(E.cyl(.4,.4,.03,10),T(5420936,{r:.6}),-38+Math.cos(p)*x,-.57,32+Math.sin(p)*x)}}for(let f=0;f<10;f++){let p=f/10*6.283+i(),x=70+i()*70;n_(d,Math.cos(p)*x,30+i()*22,Math.sin(p)*x,3+i()*3.5)}o.build(t),d.build(t,{cast:!1}),n.detail=new Ge,n.detail.name="detail",t.add(n.detail),r.build(n.detail,{cast:!1})}function t_(n,e,t,i,s,r){n.mesh(E.cyl(.6,.6,.12,14),T(7029795,{r:.9}),t,i+.02,s),Zn(n,t,i,s,.55,"round",r)}function n_(n,e,t,i,s){let r=T(16777215,{r:1,e:16777215,ei:.45});[[0,0,0,1.5],[1.5,-.25,.2,1.1],[-1.5,-.25,-.1,1.15],[.7,.7,-.2,1],[-.6,.55,.3,.95],[2.6,-.5,0,.75],[-2.6,-.5,.1,.8]].forEach(o=>n.mesh(E.sphere(1,10,7),r,e+o[0]*s,t+o[1]*s,i+o[2]*s,0,0,0,o[3]*s,o[3]*s*.75,o[3]*s))}var fu=[{id:"area51",name:"Area 51",emoji:"\u{1F47D}",desc:"Secret desert base with hangars, a control tower and a NUCLEAR BUNKER deep underground.",mood:"desert"},{id:"city",name:"Grok City",emoji:"\u{1F3D9}\uFE0F",desc:"Skyscrapers with rooftop elevators, shops, a park and a subway station to hide in.",mood:"sunny"},{id:"beach",name:"Sunny Beach",emoji:"\u{1F3D6}\uFE0F",desc:"Beach houses, a hotel, a pier and a lighthouse hill. Watch the ocean...",mood:"sunny"},{id:"pine",name:"Pine Peak",emoji:"\u{1F332}",desc:"Cozy mountain town with log cabins, a ranger tower, a mine tunnel and Mt. Grumble.",mood:"sunny"}],po=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function i_(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function pl(n,e,t,i=300,s=150){let r=new Ln(i,i,s,s);r.rotateX(-Math.PI/2);let o=r.attributes.position,a=new Float32Array(o.count*3),l=new De;for(let u=0;u<o.count;u++){let h=o.getX(u),d=o.getZ(u),f=n.terrain(h,d);o.setY(u,f),l.setHex(t(h,d,f));{let p=Math.sin(h*.13+Math.sin(d*.09)*2)*Math.cos(d*.11+Math.sin(h*.07)*2),x=Math.sin(h*1.7+d*.3)*Math.sin(d*1.9-h*.4);l.offsetHSL(p*.015,p*.05,p*.07+x*.025)}a[u*3]=l.r,a[u*3+1]=l.g,a[u*3+2]=l.b}r.setAttribute("color",new Tt(a,3)),r.computeVertexNormals();let c=new Ee(r,new zt({vertexColors:!0,roughness:.92}));return c.receiveShadow=!0,e.add(c),c}function Zi(n,e,t,i,s,r=8,o=.03){let a=Math.hypot(i-e,s-t),l=Math.atan2(i-e,s-t),c=(e+i)/2,u=(t+s)/2;n.add(E.box(r,.06,a),T(4870752,{r:.85}),it(c,o,u,0,l,0));let h=Math.floor(a/4);for(let d=0;d<h;d++){let f=(d+.5)/h-.5;n.add(E.box(.22,.02,1.8),T(16765503,{r:.6}),it(c+Math.sin(l)*f*a,o+.04,u+Math.cos(l)*f*a,0,l,0))}}function s_(n,e,t,i,s,r=.06){n.add(E.rbox(i,.18,s,.06),T(15984335,{r:.85}),it(e,r,t))}function vr(n,e,t,i,s,r=0,o="Lookout Tower",a=15167313){let l=n.terrain(t,i),c=Math.cos(r),u=Math.sin(r),h=T(a,{r:.6}),d=T(7031343,{r:.8}),f=s*1.7+1,p=(w,_)=>[t+w*c+_*u,i-w*u+_*c];e.add(E.rbox(4.4,.35,4.4,.08),h,it(t,l+s,i,0,r,0)),[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]].forEach(w=>{let _=p(w[0],w[1]);e.mesh(E.cyl(.16,.2,s,10),d,_[0],l+s/2,_[1])}),[[0,-2.1,4.4,.1],[-2.1,0,.1,4.4],[2.1,0,.1,4.4]].forEach(w=>{let _=p(w[0],w[1]);e.add(E.rbox(w[2]+.05,.9,w[3]+.05,.04),h,it(_[0],l+s+.6,_[1],0,r,0))});let x=p(0,2.2+f/2),g=Math.atan2(s,f);e.add(E.rbox(2,.25,Math.hypot(f,s),.06),h,it(x[0],l+s/2,x[1],g*1,r,0));for(let w=1;w<6;w++){let _=p(0,2.2+f*w/6);e.add(E.box(2,.06,.18),d,it(_[0],l+s-s*w/6+.16,_[1],0,r,0))}e.add(E.cone(3.6,1.8,4),T(16777215,{r:.5}),it(t,l+s+3.4,i,0,r+Math.PI/4,0)),[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]].forEach(w=>{let _=p(w[0],w[1]);e.mesh(E.cyl(.08,.08,2.5,8),d,_[0],l+s+1.4,_[1])});let m=p(-2.2,-2.2),b=p(2.2,2.2);qi(n,Math.min(m[0],b[0]),Math.min(m[1],b[1]),Math.max(m[0],b[0]),Math.max(m[1],b[1]),l+s+.17);let y=p(-1,2.2),v=p(1,2.2+f),U=Math.abs(u)>.5?"x":"z",I=U==="z"?p(0,2.2)[1]:p(0,2.2)[0],D=U==="z"?p(0,2.2+f)[1]:p(0,2.2+f)[0];qi(n,y[0],y[1],v[0],v[1],0,null,{axis:U,a0:I,a1:D,h0:l+s+.17,h1:l}),n.high.push({x:t,y:l+s+.2,z:i,label:o,foot:{x:p(0,2.4+f)[0],z:p(0,2.4+f)[1]}})}function uu(n,e,t,i,s,r,o=16777215,a){let l=Math.hypot(s-t,r-i),c=Math.ceil(l/2.5),u=T(o,{r:.5}),h=Math.atan2(s-t,r-i);for(let d=0;d<=c;d++){let f=d/c;n.mesh(E.cyl(.08,.08,1.6,8),T(10265519,{m:.7,r:.3}),t+(s-t)*f,.8,i+(r-i)*f)}n.add(E.box(.06,.07,l),u,it((t+s)/2,1.5,(i+r)/2,0,h,0)),n.add(E.box(.06,.07,l),u,it((t+s)/2,.8,(i+r)/2,0,h,0)),a&&zn(e,t-.1,i-.1,s+.1,r+.1,-1,1.7)}function r_(n,e,t,i=0){let s=T(12653087,{r:.5,m:.3});[[-1.5,-1.5],[1.5,-1.5],[-1.5,1.5],[1.5,1.5]].forEach(r=>n.mesh(E.cyl(.15,.2,9,10),s,e+r[0],i+4.5,t+r[1])),n.mesh(E.cap(2.6,2.2,24),T(16316922,{r:.35,m:.5}),e,i+11.5,t),n.mesh(E.cone(2.7,1.4,24),T(12653087,{r:.4}),e,i+14.3,t)}function $d(n,e,t){n.mesh(E.cyl(.4,.6,5,16),T(11384253,{m:.8,r:.3}),e,2.5,t),n.add(new Lt(4,32,12,0,6.283,0,.9),T(15857145,{m:.6,r:.25,side:Pt}),it(e,6.5,t,-2.3,.6,0)),n.mesh(E.sphere(.4,12,8),T(15680580,{e:15680580,ei:1.5}),e,7.5,t)}function o_(n,e,t){n.mesh(E.cyl(3.4,3.6,.7,40),T(15330543,{r:.5}),e,.35,t),n.mesh(E.cyl(3,3,.1,40),T(5032432,{r:.05,cc:1,e:30646,ei:.25}),e,.66,t),n.mesh(E.cyl(.4,.6,1.8,20),T(15330543,{r:.5}),e,1.2,t),n.mesh(E.sphere(.9,20,12),T(9494767,{r:.05,op:.6,cc:1}),e,2.3,t)}function a_(n,e,t,i){let s=T(2829634,{r:.4,m:.6});n.mesh(E.cyl(.08,.1,3.6,8),s,e,1.8,t),n.add(E.rbox(.4,1.1,.35,.08),s,it(e,3.8,t,0,i,0)),[15680580,16436245,2278750].forEach((r,o)=>n.mesh(E.sphere(.11,12,8),T(r,{e:r,ei:o===2?2:.3}),e+Math.sin(i)*.18,4.15-o*.33,t+Math.cos(i)*.18))}function l_(n,e,t,i,s=0){n.mesh(E.cyl(.05,.05,2.4,8),T(16777215),e,s+1.2,t),n.add(new Lt(1.5,16,6,0,6.283,0,Math.PI*.3),T(i,{r:.5,side:Pt}),it(e,s+1.95,t))}function ml(n,e,t,i,s){let r=T(16777215,{r:1,e:16777215,ei:.35});[[0,0,0,1.4],[1.4,-.2,.2,1],[-1.4,-.2,-.1,1.05],[.6,.6,-.2,.95],[-.5,.5,.3,.9]].forEach(o=>n.mesh(E.sphere(1,18,12),r,e+o[0]*s,t+o[1]*s,i+o[2]*s,0,0,0,o[3]*s,o[3]*s*.8,o[3]*s))}function c_(n,e,t,i){let s=0;for(;n.coinSpots.length<t&&s++<4e3;){let r=(e()-.5)*n.half*1.8,o=(e()-.5)*n.half*1.8;i&&!i(r,o)||n.walls.some(a=>r>a.x0-1&&r<a.x1+1&&o>a.z0-1&&o<a.z1+1)||n.coinSpots.push({x:r,z:o})}}function jd(n,e){let t=Gd();t.id=n,t.meta=fu.find(a=>a.id===n);let i=new Jt,s=i_(n.length*977+n.charCodeAt(0)),r=new Ge;if(e.add(r),t.root=r,n==="area51"){t.half=75,t.terrain=(a,l)=>{let c=Math.max(Math.abs(a),Math.abs(l)),u=c>60?Math.pow(c-60,1.35)*.6:0;return u+=po(48,70,c)*(Math.sin(a*.11)*Math.cos(l*.09)*1.2+.4),u},pl(t,r,(a,l,c)=>c>6?14254414:c>1?15382134:15912850),i.add(E.box(150,.06,12),T(6054768,{r:.85}),it(0,.03,52));for(let a=-7;a<=7;a++)i.add(E.box(5,.02,.5),T(16777215),it(a*10,.07,52));Zi(i,0,-50,0,46,7),Zi(i,-50,0,50,0,7),i.add(E.cyl(9,9,.08,48),T(7041664,{r:.8}),it(14,.04,-12)),i.add(E.torus(7.5,.25,6.283,6,48),T(16436245,{e:16436245,ei:.2}),it(14,.1,-12,Math.PI/2,0,0)),St(t,r,{x:0,z:-32,w:12,d:9,h:3.6,door:"s",wall:10727874,trim:16436245,roof:6583435,roofType:"flat",sturdy:!0,interior:"bunkerTop",basement:"bunker",name:"Nuclear Bunker",sign:16436245,windows:!1,wideDoor:3.2,awning:16436245}),St(t,r,{x:-32,z:-12,w:15,d:16,h:7.5,ceil:7.5,door:"e",wall:14673645,trim:3835647,roof:12109008,roofType:"arch",sturdy:!0,interior:"hangar",name:"Hangar 1",wideDoor:6,windows:!1}),St(t,r,{x:-32,z:18,w:15,d:16,h:7.5,ceil:7.5,door:"e",wall:14673645,trim:16711790,roof:12109008,roofType:"arch",sturdy:!0,interior:"hangar",name:"Hangar 2",wideDoor:6,windows:!1}),St(t,r,{x:30,z:-26,w:7,d:7,h:15,door:"w",wall:15857145,trim:3835647,roof:3835647,roofType:"flat",sturdy:!0,elevator:!0,interior:"office",name:"Control Tower",windows:!0}),St(t,r,{x:28,z:10,w:12,d:7,h:3.6,door:"w",wall:9419919,trim:16777215,roof:2976335,roofType:"gable",interior:"home",basement:!0,name:"Barracks A"}),St(t,r,{x:28,z:26,w:12,d:7,h:3.6,door:"w",wall:9419919,trim:16777215,roof:2976335,roofType:"gable",interior:"home",name:"Barracks B"}),St(t,r,{x:9,z:18,w:10,d:8,h:3.8,door:"w",wall:16758531,trim:16777215,roof:16483584,roofType:"flat",interior:"diner",name:"Mess Hall",sign:16483584}),St(t,r,{x:-10,z:36,w:10,d:9,h:5,ceil:5,door:"e",wall:15087942,trim:16777215,roof:10289672,roofType:"flat",interior:"station",wideDoor:3.6,name:"Fire Station",sturdy:!0}),vr(t,i,-14,-48,6,0,"Guard Tower"),vr(t,i,10,34,6,-Math.PI/2,"Watch Tower",3835647),r_(i,-50,-38),$d(i,46,-44),$d(i,50,34),uu(i,t,-56,-56,56,-56,15067115),uu(i,t,-56,-56,-56,40,15067115),uu(i,t,56,-56,56,40,15067115);for(let a=0;a<26;a++){let l=(s()-.5)*140,c=(s()-.5)*140;Math.abs(l)<52&&Math.abs(c)<60||Zn(i,l,t.terrain(l,c),c,.8+s()*.6,"cactus")}for(let a=0;a<30;a++){let l=(s()-.5)*150,c=(s()-.5)*150;Math.abs(l)<50&&Math.abs(c)<58||co(i,l,t.terrain(l,c),c,1+s()*2.5,a,[14254414,13134140,14723437][a%3])}[[8,-4,.2,7048739],[-12,6,1.6,5597999],[12,30,-1.2,15857145],[-20,-36,.4,7048739]].forEach(a=>Yi(i,a[0],0,a[1],a[2],a[3])),i.add(E.sphere(5,40,16),T(13095132,{m:.9,r:.18}),it(14,1.2,-12,.25,0,.1,1,.25,1)),i.add(new Lt(2.2,32,12,0,6.283,0,Math.PI/2),T(10217471,{r:.05,op:.4,cc:1}),it(14,2,-12,.25,0,.1));for(let a=0;a<8;a++)i.mesh(E.sphere(.3,10,8),T(a%2?16732120:4190463,{e:a%2?16732120:4190463,ei:2}),14+Math.cos(a/8*6.283)*4.5,1.2+Math.sin(a/8*6.283)*1.1,-12+Math.sin(a/8*6.283)*4.5);t.volcano={x:55,z:55},t.spawns=[[4,4],[-4,4],[4,-4],[-4,-4]];for(let a=0;a<8;a++)ml(i,(s()-.5)*300,45+s()*20,(s()-.5)*300,4+s()*3)}else if(n==="city"){t.half=75,t.terrain=(h,d)=>{let f=Math.max(Math.abs(h),Math.abs(d));return f>70?(f-70)*.8:0},pl(t,r,(h,d,f)=>Math.abs(h-15)<12&&Math.abs(d-15)<12||Math.abs(h+45)<12&&Math.abs(d-45)<12?8377179:9426028);for(let h of[-30,0,30])Zi(i,h,-75,h,75,8),Zi(i,-75,h,75,h,8,.035);for(let h of[-45,-15,15,45])for(let d of[-45,-15,15,45])s_(i,h,d,22,22,.02);let a=[16734558,16763450,9095462,1671876,6966419,16749132,5032432,16196997],l=0,c=(h,d,f,p,x)=>St(t,r,{x:h,z:d,w:9,d:9,h:f,door:p,wall:x,trim:16777215,roof:3359061,roofType:"flat",sturdy:!0,elevator:!0,interior:"office",name:"Sky Tower "+ ++l}),u=(h,d,f,p,x,g,m,b="shop",y)=>St(t,r,{x:h,z:d,w:f,d:p,h:4.2,door:x,wall:g,trim:16777215,roof:4674921,roofType:"flat",interior:b,name:m,sign:a[l++%8],basement:y});c(-50,-50,26,"e",5032432),c(-40,-40,18,"s",16196997),u(-50,-36,8,8,"e",16763450,"Toy Store"),u(-38,-52,8,7,"s",9095462,"Grocery","shop",!0),c(-20,-50,30,"s",3835647),St(t,r,{x:-10,z:-42,w:9,d:8,h:10,door:"w",wall:16756141,trim:16777215,roof:10309341,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments"}),u(-20,-38,8,7,"e",16749132,"Pizza Place","diner"),c(20,-48,22,"s",8599788),u(10,-48,8,8,"s",448160,"Pet Shop"),St(t,r,{x:15,z:-36,w:10,d:7,h:4.6,door:"s",wall:16765286,trim:473932,roof:473932,roofType:"flat",interior:"shop",basement:"subway",name:"Subway Station",sign:1149618}),c(50,-48,24,"w",16711790),u(40,-40,8,8,"w",5032432,"Ice Cream","diner"),c(50,-36,14,"w",16471559),St(t,r,{x:-45,z:-12,w:12,d:10,h:5.2,ceil:5.2,door:"e",wall:15087942,trim:16777215,roof:10289672,roofType:"flat",interior:"station",wideDoor:3.6,sturdy:!0,name:"Fire Station"}),u(-45,-22,9,6,"n",16763450,"Comic Shop"),c(-15,-15,20,"e",448160),u(-20,-22,7,6,"n",15817653,"Candy Shop","shop",!0),u(-10,-22,7,6,"n",48121,"Game Store"),c(15,-15,28,"w",16760331),St(t,r,{x:22,z:-22,w:9,d:7,h:9,door:"n",wall:11920524,trim:16777215,roof:1734047,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments 2"}),c(45,-15,18,"w",10182117),u(45,-24,9,6,"n",16704576,"Burger Barn","diner"),o_(i,15,15);for(let h=0;h<9;h++){let d=h/9*6.283;Zn(i,15+Math.cos(d)*8.5,0,15+Math.sin(d)*8.5,.8+s()*.3,"round",h)}[[15,7.5,0],[15,22.5,Math.PI],[7.5,15,Math.PI/2],[22.5,15,-Math.PI/2]].forEach(h=>kd(i,h[0],0,h[1],h[2])),c(-15,15,22,"e",16196997),u(-22,22,8,7,"e",9095462,"Book Nook","shop",!0),u(-22,8,8,7,"e",16763450,"Bakery","diner"),c(45,15,26,"w",4415982),St(t,r,{x:38,z:22,w:8,d:8,h:10,door:"w",wall:16763101,trim:16777215,roof:13481179,roofType:"flat",elevator:!0,basement:!0,interior:"home",name:"Apartments 3"}),u(38,8,8,7,"w",8449433,"Arcade","shop"),c(-45,15,16,"e",4770532),u(-45,24,10,6,"e",16743168,"Hardware","shop",!0);for(let h=0;h<10;h++){let d=h/10*6.283;Zn(i,-45+Math.cos(d)*7,0,45+Math.sin(d)*7,.9,"round",h)}vr(t,i,-45,45,6,Math.PI/2,"Park Lookout",448160),u(-15,45,9,8,"e",16335172,"Toy Store 2","shop",!0),c(-15,55,20,"e",9485933),c(15,45,24,"w",16291358),u(15,55,9,7,"n",4434571,"Flower Shop"),c(45,45,30,"w",5731728),u(45,55,9,7,"n",15954476,"Taco Stand","diner",!0);for(let h of[-30,0,30])for(let d of[-60,-45,-15,15,45,60])tu(i,h+4.6,0,d),tu(i,d,0,h+4.6);for(let h of[-30,0,30])for(let d of[-30,0,30])a_(i,h+4.8,d+4.8,0);for(let h=0;h<18;h++){let d=[-30,0,30][h%3],f=-65+h*7.5;h%2?Yi(i,d+2.2,0,f,0,a[h%8]):Yi(i,f,0,d-2.2,Math.PI/2,a[(h+3)%8])}t.volcano={x:-60,z:62},t.spawns=[[3,3],[-3,3],[3,-3],[-3,-3]];for(let h=0;h<8;h++)ml(i,(s()-.5)*300,50+s()*20,(s()-.5)*300,4+s()*3)}else if(n==="beach"){t.half=75,t.sea=-1.2,t.terrain=(u,h)=>{let d=-po(22,50,h)*4,f=Math.hypot(u-52,h+48);d+=Math.max(0,11-f*.42)*po(0,1,1);let p=Math.max(Math.abs(u),-h);return p>68&&(d+=(p-68)*.7),d},pl(t,r,(u,h,d)=>h>16?d<-1.4?15254650:16769704:d>3?8178026:9426028),Zi(i,-75,6,75,6,7),Zi(i,0,-75,0,6,7),i.add(E.rbox(110,.3,5,.06),T(13011538,{r:.7}),it(0,.15,14)),qi(t,-55,11.5,55,16.5,.3);let a=[16756141,16766629,16646070,13303743,10221311,10536191,12432127,16762623],l=[15681391,1149618,448160,16765286,8599788,16711790],c=0;for(let u of[-52,-36,-20,20,36])St(t,r,{x:u,z:-6,w:9,d:8,h:3.8,door:"s",wall:a[c%8],roof:l[c%6],interior:"home",basement:c%2===0,name:"Beach House"}),c++;for(let u of[-52,-36,20,36,52])St(t,r,{x:u,z:-24,w:9,d:8,h:3.8,door:"n",wall:a[(c+3)%8],roof:l[c%6],interior:"home",basement:c%2===1,name:"Beach House"}),c++;St(t,r,{x:-14,z:-40,w:12,d:10,h:20,door:"e",wall:16748459,trim:16777215,roof:3359061,roofType:"flat",elevator:!0,sturdy:!0,interior:"office",name:"Sunset Hotel"}),St(t,r,{x:12,z:-40,w:10,d:8,h:4.2,door:"w",wall:16740518,roof:16766576,roofType:"flat",interior:"diner",name:"Ice Cream Parlor",sign:16740518,basement:!0}),St(t,r,{x:52,z:-6,w:9,d:8,h:4.2,door:"s",wall:7395071,roof:16750448,roofType:"flat",interior:"shop",name:"Surf Shop",sign:16750448}),St(t,r,{x:52,z:-48,baseY:t.terrain(52,-48),w:6,d:6,h:16,door:"w",wall:16777215,trim:15672124,roof:15672124,roofType:"flat",elevator:!0,sturdy:!0,interior:"office",name:"Lighthouse",style:"tower"}),t.high.push({x:46,y:t.terrain(46,-44),z:-44,label:"Lighthouse Hill"}),i.add(E.rbox(6,.35,40,.06),T(11895642,{r:.75}),it(-30,.6,42)),qi(t,-33,22,-27,62,.78);for(let u=24;u<62;u+=5)[-32.6,-27.4].forEach(h=>i.mesh(E.cyl(.25,.25,4,10),T(9133620,{r:.85}),h,-1.4,u));vr(t,i,8,30,5.5,Math.PI,"Lifeguard Tower",15672124),vr(t,i,40,30,5.5,Math.PI,"Lifeguard Tower 2",16758531);for(let u=0;u<12;u++)l_(i,-60+u*10+s()*3,22+s()*6,l[u%6],t.terrain(-60+u*10,24));for(let u=0;u<22;u++){let h=-70+u*6.6+s()*2,d=9+s()*2;Zn(i,h,0,u%2?d:d-22-s()*4,.9+s()*.4,"palm",u)}for(let u=0;u<6;u++)i.mesh(E.sphere(.4,20,14),T([16734558,16763450,1671876][u%3],{r:.3,cc:.8}),-50+u*18,t.terrain(-50+u*18,28)+.4,28);[[-8,3,Math.PI/2,16734558],[24,9,Math.PI/2,5032432],[-3,-15,0,16763450]].forEach(u=>Yi(i,u[0],0,u[1],u[2],u[3])),t.volcano={x:-60,z:60},t.spawns=[[3,0],[-3,0],[3,-3],[-3,-3]];for(let u=0;u<8;u++)ml(i,(s()-.5)*300,45+s()*20,(s()-.5)*300,4+s()*3);i.add(E.rbox(2.2,1,6,.4),T(16777215,{r:.3,cc:1}),it(30,-1,58)),i.mesh(E.cyl(.08,.08,7,8),T(9133620),30,2.5,58),i.add(E.cone(2.2,5.5,3),T(16711790,{side:Pt}),it(30.3,3.3,58.5,0,0,0,.1,1,1))}else if(n==="pine"){t.half=75;let a=(d,f)=>{let p=Math.hypot(d-64,f+66);return Math.max(0,34-p*.75)};t.terrain=(d,f)=>{let p=Math.max(Math.abs(d)/50,Math.abs(f)/44),x=p>1?Math.pow((p-1)*30,1.25)*.45+Math.sin(d*.15)*Math.cos(f*.13)*1.5*po(1,1.3,p):0,g=Math.hypot(d+38,f-32);return x-=po(10,4,g)*2.2,x+=Math.max(0,9-Math.hypot(d-30,f+32)*.6),Math.max(x,a(d,f))+0},pl(t,r,(d,f,p)=>p>14?16317180:p>7?10265519:p<-.8?14074506:7327587);let l=new Ee(new Xn(10,48),T(3718648,{r:.05,cc:1,op:.85,e:223649,ei:.2}));l.rotation.x=-Math.PI/2,l.position.set(-38,-.6,32),r.add(l),Zi(i,-50,0,50,0,6),Zi(i,0,-44,0,44,6);let c=[11887901,13204538,10506797,13928522],u=[2976335,12653087,1914199,6986062],h=0;for(let[d,f,p]of[[-14,-14,"s"],[-30,-14,"s"],[14,-14,"s"],[-14,14,"n"],[14,14,"n"],[30,14,"n"],[-30,14,"n"]])St(t,r,{x:d,z:f,w:9,d:8,h:3.8,door:p,wall:c[h%4],trim:16773590,roof:u[h%4],interior:"cabin",basement:h%2===0,name:"Log Cabin",inner:16113331,floor:11565637}),h++;St(t,r,{x:30,z:-12,w:10,d:8,h:4.2,door:"s",wall:16765286,roof:15681391,roofType:"gable",interior:"shop",name:"General Store",sign:15681391,basement:!0}),St(t,r,{x:-10,z:32,w:14,d:10,h:7,ceil:3.8,door:"e",wall:9262372,trim:16777215,roof:10289672,roofType:"gable",interior:"diner",name:"Ski Lodge",inner:16113331,floor:11565637}),St(t,r,{x:20,z:34,w:7,d:7,h:12,door:"w",wall:2976335,trim:16765286,roof:16765286,roofType:"flat",interior:"office",elevator:!0,sturdy:!0,name:"Ranger Tower"}),St(t,r,{x:-44,z:-30,w:7,d:6,h:3.6,door:"e",wall:8344889,trim:4007959,roof:6045747,roofType:"flat",interior:"shop",basement:"mine",name:"Mine Entrance",sign:16758531,sturdy:!0}),t.high.push({x:30,y:t.terrain(30,-32),z:-32,label:"Pine Hill"}),t.high.push({x:36,y:t.terrain(36,-36),z:-36,label:"Pine Hill"}),vr(t,i,-36,0,6,Math.PI/2,"Fire Lookout",12348453);for(let d=0;d<120;d++){let f=(s()-.5)*160,p=(s()-.5)*160,x=t.terrain(f,p);Math.abs(f)<40&&Math.abs(p)<38||x>13||Math.hypot(f+38,p-32)<11||Zn(i,f,x-.2,p,.9+s()*.9,"pine",d)}for(let d=0;d<14;d++){let f=(s()-.5)*70,p=(s()-.5)*70;Math.abs(f)<4||Math.abs(p)<4||t.walls.some(x=>f>x.x0-3&&f<x.x1+3&&p>x.z0-3&&p<x.z1+3)||Zn(i,f,t.terrain(f,p),p,.8,"pine",d)}for(let d=0;d<18;d++){let f=(s()-.5)*150,p=(s()-.5)*150;Math.abs(f)<45&&Math.abs(p)<40||co(i,f,t.terrain(f,p),p,1+s()*2,d,10265519)}i.mesh(E.cyl(1.2,1.3,.3,16),T(7041664,{r:.9}),6,.15,6);for(let d=0;d<4;d++)i.add(E.cyl(.12,.12,1.4,8),T(7029795),it(6,.35,6,Math.PI/2,d*.8,0));i.mesh(E.sphere(.45,12,10),T(16743168,{e:16733184,ei:2.5}),6,.55,6),t.fires.push({x:6,y:0,z:6,r:3.5}),[[4,-24,0,12653087],[-24,4,Math.PI/2,1914199]].forEach(d=>Yi(i,d[0],0,d[1],d[2],d[3])),i.mesh(E.cyl(6,8,2,32),T(5981750,{r:.9}),64,a(64,-66)-.5,-66),i.mesh(E.cyl(5,5,.3,32),T(16739072,{e:16731392,ei:2.2}),64,a(64,-66)+.4,-66),t.volcano={x:64,z:-66,y:a(64,-66),real:!0},t.spawns=[[3,3],[-3,3],[3,-3],[-3,-3]];for(let d=0;d<9;d++)ml(i,(s()-.5)*300,48+s()*20,(s()-.5)*300,4+s()*3)}Zd(t,i,r,s,n),i.build(r),c_(t,s,46,(a,l)=>t.terrain(a,l)>-1&&t.terrain(a,l)<8),t.buildings.forEach((a,l)=>{l%2===0&&t.coinSpots.push({x:a.x,z:a.z,y:a.baseY+.2}),a.room&&t.coinSpots.push({x:a.room.spawn.x-1,z:a.room.spawn.z+1,y:a.room.spawn.y,under:!0})});let o=t.half;return zn(t,-o-2,-o-2,o+2,-o,-100,100),zn(t,-o-2,o,o+2,o+2,-100,100),zn(t,-o-2,-o,-o,o,-100,100),zn(t,o,-o,o+2,o,-100,100),t}var dn={npcs:[],cars:[],birds:[],root:null},h_={area51:[{ax:"z",c:-1.8,d:1,a:-48,b:44},{ax:"x",c:1.8,d:-1,a:-48,b:48}],city:[-30,0,30].flatMap((n,e)=>[{ax:"z",c:n-2.2,d:-1,a:-73,b:73,o:e*40},{ax:"x",c:n+2.2,d:-1,a:-73,b:73,o:e*25+12}]),beach:[{ax:"x",c:6,d:1,a:-73,b:73},{ax:"x",c:6,d:1,a:-73,b:73,o:70},{ax:"z",c:-1.6,d:-1,a:-72,b:3}],pine:[{ax:"x",c:1.4,d:1,a:-48,b:48},{ax:"z",c:-1.4,d:-1,a:-42,b:42,o:30}]},Jd=[[16734558,1981066,"cap"],[9095462,4144966,"beanie"],[16763450,417606,"none"],[6966419,8138002,"party"],[5032432,3359061,"cowboy"],[16196997,1981066,"none"],[16749132,4144966,"chef"],[448160,8138002,"cap"]],u_=[14723449,16173472,9067067,12155471,16767416],f_=new Bt({color:0,transparent:!0,opacity:.22,depthWrite:!1});function Kd(n,e,t){d_(e);let i=dn.root=new Ge;i.name="ambient",e.add(i);let s=n.coinSpots.filter(u=>u.y==null&&n.terrain(u.x,u.z)>-.8&&n.terrain(u.x,u.z)<6),r=t?3:6;for(let u=0;u<r&&s.length;u++){let h=Jd[u%Jd.length],d=ol({shirt:h[0],pants:h[1],hat:h[2],hatColor:h[0]^3364215,skin:u_[u%5],hair:[1118481,7028254,13934615][u%3]});d.root.traverse(g=>{g.isMesh&&(g.castShadow=!1)});let f=new Ee(E.disc?E.disc(.5):new Xn(.5,16),f_);f.rotation.x=-Math.PI/2,f.position.y=.04,d.root.add(f),d.root.scale.setScalar(.92);let p=s[u*7%s.length],x={P:d,x:p.x,y:n.terrain(p.x,p.z),z:p.z,yaw:0,tx:p.x,tz:p.z,st:"walk",hid:!1,stuck:0,wait:Math.random()*3};d.root.position.set(x.x,x.y,x.z),i.add(d.root),dn.npcs.push(x)}let o=h_[n.id]||[],a=[16734558,16763450,3835647,9095462,16196997,5032432];o.forEach((u,h)=>{if(t&&h%2)return;let d=new Jt;Yi(d,0,0,0,0,n.id==="area51"?[7048739,5597999][h%2]:a[h%a.length]);let f=new Ge;d.build(f),i.add(f),dn.cars.push({g:f,l:u,s:u.a+((u.o||0)+h*17)%(u.b-u.a),v:7})});let l=t?3:7,c=n.id==="beach"?16777215:n.id==="pine"?1914199:n.id==="area51"?7031343:6583435;for(let u=0;u<l;u++){let h=new Jt,d=T(c,{r:.6});h.mesh(E.sphere(.22,10,8),d,0,0,0,0,0,0,1,.8,1.6),h.mesh(E.sphere(.13,8,6),d,0,.1,.32),h.mesh(E.cone(.05,.14,6),T(16758531),0,.08,.5,Math.PI/2),[-1,1].forEach(p=>h.mesh(E.box(.7,.03,.26),d,p*.42,.05,0,0,0,p*.35));let f=new Ge;h.build(f,{cast:!1}),i.add(f),dn.birds.push({g:f,a:Math.random()*6.28,r:12+Math.random()*30,cx:(Math.random()-.5)*60,cz:(Math.random()-.5)*60,y:16+Math.random()*12,sp:.25+Math.random()*.2})}}function d_(n){dn.root&&n.remove(dn.root),dn.npcs=[],dn.cars=[],dn.birds=[],dn.root=null}function Qd(n,e,t,i,s,r){if(!dn.root||!e)return;let o=t.phase==="warn"||t.phase==="active",a=e.coinSpots;for(let l of dn.npcs){if(o&&!l.hid&&l.st!=="flee"){let p=null,x=1e9;for(let g of e.buildings){if(g.wrecked||!g.doorOut)continue;let m=Math.hypot(g.doorOut.x-l.x,g.doorOut.z-l.z);m<x&&(x=m,p=g)}p&&(l.st="flee",l.tx=p.doorOut.x,l.tz=p.doorOut.z,l.door=p,l.stuck=0)}if(!o&&l.hid&&(l.hid=!1,l.P.root.visible=!0,l.st="walk",l.wait=1+Math.random()*2),l.hid)continue;let c=l.tx-l.x,u=l.tz-l.z,h=Math.hypot(c,u),d=0;if(l.st==="flee"){if(d=4.6,h<1){l.hid=!0,l.P.root.visible=!1;continue}}else if(l.wait>0)l.wait-=n;else if(d=1.6,h<.8){l.wait=1.5+Math.random()*4;let p=a[Math.random()*a.length|0];p&&p.y==null&&Math.hypot(p.x-l.x,p.z-l.z)<40&&(l.tx=p.x,l.tz=p.z)}if(d&&l.st!=="flee")for(let p of i)Math.hypot(p.x-l.x,p.z-l.z)<1.2&&(d=0);if(d&&h>.01){let p=l.x,x=l.z;if(l.x+=c/h*d*n,l.z+=u/h*d*n,ll(e,l),Math.hypot(l.x-p,l.z-x)<d*n*.3){if(l.stuck+=n,l.stuck>1.5){if(l.stuck=0,l.st==="flee"){l.hid=!0,l.P.root.visible=!1;continue}l.tx=l.x+(Math.random()-.5)*12,l.tz=l.z+(Math.random()-.5)*12}}else l.stuck=Math.max(0,l.stuck-n);let b=Math.atan2(c,u)-l.yaw;for(;b>Math.PI;)b-=6.283;for(;b<-Math.PI;)b+=6.283;l.yaw+=b*Math.min(1,n*8)}l.y=e.terrain(l.x,l.z),l.P.root.position.set(l.x,l.y,l.z),l.P.root.rotation.y=l.yaw;let f=r&&Math.hypot(r.position.x-l.x,r.position.z-l.z)>55;l.P.root.visible=!f,!f&&(al(l.P,d>0?"run":"idle",n,d/5,s),l.st==="flee"&&l.P.arms.forEach(p=>{p.rotation.x=-2.7}))}for(let l of dn.cars){let c=l.l,u=o?0:7,h=m=>c.ax==="z"?[c.c,m]:[m,c.c],[d,f]=h(l.s);for(let m of i.concat(dn.npcs.filter(b=>!b.hid))){let b=(c.ax==="z"?m.z-f:m.x-d)*c.d,y=Math.abs(c.ax==="z"?m.x-d:m.z-f);b>0&&b<7&&y<2.6&&(u=0)}l.v+=(u-l.v)*Math.min(1,n*3),l.s+=l.v*c.d*n,l.s>c.b&&(l.s=c.a),l.s<c.a&&(l.s=c.b);let[p,x]=h(l.s),g=Math.min(l.s-c.a,c.b-l.s);l.g.position.set(p,e.terrain(p,x),x),l.g.rotation.y=c.ax==="z"?c.d>0?0:Math.PI:c.d>0?Math.PI/2:-Math.PI/2,l.g.scale.setScalar(Math.max(.01,Math.min(1,g/3)))}for(let l of dn.birds)l.a+=l.sp*n,l.g.position.set(l.cx+Math.cos(l.a)*l.r,l.y+Math.sin(s*.7+l.r)*1.2,l.cz+Math.sin(l.a)*l.r),l.g.rotation.y=-l.a,l.g.scale.set(1,.4+Math.abs(Math.sin(s*9+l.r))*1.4,1)}var H={},Xt=new kt,gl=new De,vs=class{constructor(e,t,i,s){this.m=new ir(e,t,i),this.m.castShadow=!!s,this.m.frustumCulled=!1,this.n=i,this.p=[],this.m.count=0,this.m.instanceMatrix.setUsage(pd),this.m.setColorAt(0,gl.set(16777215)),V.scene.add(this.m)}add(e){return this.p.length>=this.n&&this.p.shift(),this.p.push(e),e}clear(){this.p.length=0,this.m.count=0}};function ep(){H.puffs=new vs(E.sphere(1,14,10),new zt({roughness:.9}),360),H.fire=new vs(E.sphere(1,12,8),new Bt({toneMapped:!1}),240),H.debris=new vs(E.rbox(1,1,1,.15,2),new zt({roughness:.7}),220,!0),H.sparks=new vs(E.sphere(1,8,6),new Bt({toneMapped:!1,transparent:!0,opacity:.95,blending:Bi,depthWrite:!1}),260),H.hail=new vs(E.sphere(1,10,8),T(14743551,{r:.1,cc:1}),220,!0);let n=1400,e=new It,t=new Float32Array(n*6);e.setAttribute("position",new Tt(t,3)),H.rain=new Sa(e,new Zr({color:13625599,transparent:!0,opacity:.55})),H.rain.frustumCulled=!1,H.rain.visible=!1,V.scene.add(H.rain),H.rainD=[];for(let x=0;x<n;x++)H.rainD.push([(Math.random()-.5)*60,Math.random()*30,(Math.random()-.5)*60]);let i=1600,s=new It,r=new Float32Array(i*3);s.setAttribute("position",new Tt(r,3));let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=l,a.fillRect(0,0,64,64),H.snow=new Ea(s,new $r({size:.35,map:new sr(o),transparent:!0,depthWrite:!1,color:16777215})),H.snow.frustumCulled=!1,H.snow.visible=!1,V.scene.add(H.snow),H.snowD=[];for(let x=0;x<i;x++)H.snowD.push([(Math.random()-.5)*50,Math.random()*25,(Math.random()-.5)*50,Math.random()*6.28]);H.rings=[],H.ringGeo=new La(.86,1,64),H.discGeo=new Xn(1,64),H.lines=[],H.bolts=[],H.waves=[],H.meteors=[],H.trails=[],H.waterMat=new zt({color:1688575,roughness:.06,metalness:.08,transparent:!0,opacity:.9,emissive:675710,emissiveIntensity:.18}),H.htTex=new ni(new Uint8Array(64),4,4),H.htTex.needsUpdate=!0,H.waterMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},x.uniforms.uHt={value:H.htTex},H.waterMat.userData.sh=x,x.vertexShader=`uniform float uT;
varying float vH;
varying vec3 vW;
`+x.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = vec3(position);
      float w1 = sin(position.x*0.18 + uT*1.6)*0.35 + cos(position.y*0.22 + uT*1.3)*0.3 + sin((position.x+position.y)*0.5+uT*2.6)*0.1 + sin(position.x*0.9 - position.y*0.7 + uT*3.1)*0.05;
      transformed.z += w1; vH = w1; vW = (modelMatrix * vec4(transformed, 1.0)).xyz;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = normalize(vec3(-cos(position.x*0.18+uT*1.6)*0.063 - cos((position.x+position.y)*0.5+uT*2.6)*0.05, sin(position.y*0.22+uT*1.3)*0.066 - cos((position.x+position.y)*0.5+uT*2.6)*0.05, 1.0));"),x.fragmentShader=`uniform float uT;
uniform sampler2D uHt;
varying float vH;
varying vec3 vW;
`+x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float th = texture2D(uHt, vW.xz / 320.0 + 0.5).r * 60.0 - 15.0;
      float dep = vW.y - th;
      float rip = sin(vW.x*1.3 + uT*2.0 + sin(vW.z*0.9)) * sin(vW.z*1.1 - uT*1.7 + sin(vW.x*0.7));
      float rip2 = sin(vW.x*2.7 - uT*2.4 + sin(vW.z*1.9 + uT)) * sin(vW.z*2.3 + uT*2.1);
      vec3 wc = mix(vec3(0.10, 0.82, 0.86), vec3(0.0, 0.38, 0.86), smoothstep(0.2, 4.0, dep));
      wc = mix(wc, vec3(0.02, 0.30, 0.70), smoothstep(6.0, 14.0, dep));
      wc *= mix(0.86, 1.1, smoothstep(-0.5, 0.5, vH));
      float shore = 1.0 - smoothstep(0.05, 0.45 + 0.25 * rip, dep);
      float foam = shore * (0.75 + 0.25 * rip2);
      foam = max(foam, (1.0 - smoothstep(0.9, 1.4 + 0.3 * rip2, dep)) * smoothstep(0.2, 0.8, rip2) * 0.7);
      foam = max(foam, smoothstep(0.58, 0.72, vH + rip * 0.1) * 0.5);
      foam = max(foam, smoothstep(0.93, 0.99, rip * rip2 + 0.4) * 0.3);
      diffuseColor.rgb = mix(wc, vec3(1.0), clamp(foam, 0.0, 1.0));
      diffuseColor.a = max(mix(0.62, 0.94, smoothstep(0.0, 2.5, dep)), foam);`)},H.water=new Ee(new Ln(320,320,140,140),H.waterMat),H.water.rotation.x=-Math.PI/2,H.water.visible=!1,H.water.receiveShadow=!0,V.scene.add(H.water),H.foam=new Ee(new Ln(320,6,60,1),T(16777215,{r:.6,op:.85,e:16777215,ei:.3})),H.foam.rotation.x=-Math.PI/2,H.foam.visible=!1,V.scene.add(H.foam);{let x=new Mi,g=[[9,0],[5,.35],[2.6,.72],[1,.95],[0,1],[-1.1,.96],[-1.9,.82],[-2.2,.66],[-1.8,.56],[-1.2,.62],[-.7,.5],[-.6,.25],[-1.2,0]];x.moveTo(g[0][0],g[0][1]),g.slice(1).forEach(w=>x.lineTo(w[0],w[1]));let m=new Wi(x,{depth:1,bevelEnabled:!1,curveSegments:1,steps:60});m.translate(0,0,-.5),m.rotateY(-Math.PI/2),m.scale(170,1,1);{let w=m.attributes.position;for(let _=0;_<w.count;_++){let M=w.getX(_),R=w.getY(_);w.setZ(_,w.getZ(_)+Math.sin(M*.07)*2.5+Math.sin(M*.19+1)*.8),w.setY(_,R*(1+.14*Math.sin(M*.11+2)))}}let b=m.attributes.position,y=new Float32Array(b.count*3),v=new De,U=new De(22466),I=new De(1226216),D=new De(16777215);for(let w=0;w<b.count;w++){let _=b.getY(w)/(1+.14*Math.sin(b.getX(w)*.11+2)),M=b.getZ(w);v.copy(U).lerp(I,Math.min(1,_*1.15)),_>.96?v.lerp(D,.85):_>.88&&v.lerp(D,.3),y[w*3]=v.r,y[w*3+1]=v.g,y[w*3+2]=v.b}m.setAttribute("color",new Tt(y,3)),m.computeVertexNormals(),H.wave=new Ee(m,new zt({vertexColors:!0,roughness:.12,metalness:.05,transparent:!0,opacity:.93,emissive:14988,emissiveIntensity:.35,side:Pt,fog:!1})),H.wave.visible=!1,V.scene.add(H.wave)}H.lavaMat=new zt({color:16734720,emissive:16727040,emissiveIntensity:1.6,roughness:.4}),H.lavaMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},H.lavaMat.userData.sh=x,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp = (modelMatrix*vec4(transformed,1.0)).xyz;`),x.fragmentShader=`uniform float uT;
varying vec3 vWp;
`+x.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float n = sin(vWp.x*0.7+uT)*sin(vWp.z*0.6-uT*0.8)+sin((vWp.x-vWp.z)*0.35+uT*1.7)*0.6; totalEmissiveRadiance *= 0.55 + 0.45*smoothstep(-0.6,1.2,n); diffuseColor.rgb = mix(vec3(0.25,0.05,0.02), diffuseColor.rgb, smoothstep(-0.9,0.2,n));`)},H.lava=new Ee(new Xn(1,64),H.lavaMat),H.lava.rotation.x=-Math.PI/2,H.lava.visible=!1,V.scene.add(H.lava),H.torMat=new zt({color:12109014,roughness:1,transparent:!0,opacity:.8,side:Pt,depthWrite:!1}),H.torMat.onBeforeCompile=x=>{x.uniforms.uT={value:0},H.torMat.userData.sh=x,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vUv2;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vUv2 = uv;`),x.fragmentShader=`uniform float uT;
varying vec2 vUv2;
`+x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float st = sin(vUv2.x*25.0 + vUv2.y*14.0 - uT*9.0)*0.5+0.5; diffuseColor.rgb *= 0.7 + 0.45*st; diffuseColor.a *= (0.55+0.45*st) * smoothstep(0.0,0.08,vUv2.y) * (1.0 - smoothstep(0.85,1.0,vUv2.y));`)};let c=[];for(let x=0;x<=24;x++){let g=x/24;c.push(new re(.6+Math.pow(g,1.8)*9+Math.sin(g*9)*.25,g*34))}H.torGeo=new hs(c,40),H.tors=[];let u=new Ge,h=T(2285690,{e:1483594,ei:.6,r:.3,cc:.6}),d=new Ee(E.cap(.14,.9,10),h);d.rotation.x=Math.PI/2,u.add(d);let f=new Ee(E.cone(.36,.6,20),h);f.rotation.x=Math.PI/2,f.position.z=.75,u.add(f),u.visible=!1,V.scene.add(u),H.arrow=u,H.beacon=new Ee(new un(.9,.9,30,24,1,!0),qn(2285690,.18)),H.beacon.visible=!1,V.scene.add(H.beacon);let p=mr([new un(.42,.42,.1,28).rotateX(Math.PI/2).toNonIndexed(),new rr(.42,.06,8,28).toNonIndexed()]);H.coins=new ir(p,T(16762941,{r:.22,m:1,e:9067008,ei:.45}),120),H.coins.castShadow=!0,H.coins.count=0,H.coins.frustumCulled=!1,V.scene.add(H.coins),H.stars=new ir(E.star(.6,.22),T(16773242,{e:16761856,ei:1.2,r:.25}),10),H.stars.count=0,H.stars.frustumCulled=!1,V.scene.add(H.stars)}function Yt(n,e,t,i,s,r={}){let o=r.fire?H.fire:H.puffs;for(let a=0;a<i;a++){let l=Math.random()*6.283,c=(r.sp||3)*(.4+Math.random());o.add({x:n+(Math.random()-.5)*(r.spread||1),y:e+Math.random()*(r.yr||.5),z:t+(Math.random()-.5)*(r.spread||1),vx:Math.cos(l)*c,vy:(r.up||2)*(.5+Math.random()),vz:Math.sin(l)*c,t:0,T:(r.life||1.2)*(.7+Math.random()*.6),s0:(r.s||.6)*(.6+Math.random()*.6),s1:(r.s1||1.6)*(.7+Math.random()*.6),c:Array.isArray(s)?s[a%s.length]:s,g:r.g||0,drag:r.drag||1.5})}}function ys(n,e,t,i,s,r={}){for(let o=0;o<i;o++){let a=Math.random()*6.283,l=(r.sp||6)*(.3+Math.random());H.debris.add({x:n,y:e+Math.random(),z:t,vx:Math.cos(a)*l,vy:(r.up||7)*(.6+Math.random()*.8),vz:Math.sin(a)*l,rx:Math.random()*6,ry:Math.random()*6,wr:(Math.random()-.5)*12,s:(r.s||.5)*(.5+Math.random()),t:0,T:r.life||3.5,c:s[o%s.length],gy:r.floor!=null?r.floor:e-.5})}}function ri(n,e,t,i,s,r={}){for(let o=0;o<i;o++){let a=Math.random()*6.283,l=Math.random()*3.14,c=(r.sp||8)*(.3+Math.random());H.sparks.add({x:n,y:e,z:t,vx:Math.cos(a)*Math.sin(l)*c,vy:Math.cos(l)*c*.6+(r.up||2),vz:Math.sin(a)*Math.sin(l)*c,t:0,T:(r.life||.6)*(.6+Math.random()*.8),s:r.s||.12,c:s,g:r.g!=null?r.g:12})}}function du(n,e,t,i,s=16777215,r=.6){let o=new Ee(E.torus(1,.08,6.283,8,48),qn(s,.7));o.material=o.material.clone(),o.rotation.x=Math.PI/2,o.position.set(n,e+.2,t),V.scene.add(o),H.waves.push({m:o,t:0,T:r,r:i})}function xl(n,e,t,i,s,r=16723285,o=0){let a=H.rings.find(c=>c.id===n);if(!a){if(a=H.rings.find(c=>!c.used),!a){let c=new Ge,u=new Ee(H.ringGeo,new Bt({color:r,transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1,side:Pt})),h=new Ee(H.discGeo,new Bt({color:r,transparent:!0,opacity:.25,depthWrite:!1,toneMapped:!1,side:Pt})),d=new Ee(H.discGeo,h.material.clone());c.add(u,h,d),c.rotation.x=-Math.PI/2,V.scene.add(c),a={g:c,a:u,d:h,f:d},H.rings.push(a)}a.used=!0,a.id=n}a.seen=!0,a.g.visible=!0,a.g.position.set(e,t+.08,i),a.g.scale.setScalar(s),a.a.material.color.setHex(r),a.d.material.color.setHex(r),a.f.material.color.setHex(r);let l=.5+.5*Math.sin(V.t*12);return a.a.material.opacity=.6+.4*l,a.d.material.opacity=.14+.1*l,a.f.scale.setScalar(Math.max(.001,o)),a.f.material.opacity=.35,a}function tp(n,e,t,i,s,r,o,a=16723285){let l=H.lines.find(u=>u.id===n);if(!l){if(l=H.lines.find(u=>!u.used),!l){let u=new Ee(new Ln(1,1),new Bt({color:a,transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1,side:Pt}));u.rotation.order="YXZ",V.scene.add(u),l={m:u},H.lines.push(l)}l.used=!0,l.id=n}l.seen=!0;let c=Math.hypot(i-e,s-t);l.m.visible=!0,l.m.position.set((e+i)/2,r+.1,(t+s)/2),l.m.rotation.set(-Math.PI/2,Math.atan2(i-e,s-t),0,"YXZ"),l.m.scale.set(o,c,1),l.m.material.color.setHex(a),l.m.material.opacity=.3+.25*(.5+.5*Math.sin(V.t*14))}function np(){H.rings.forEach(n=>n.seen=!1),H.lines.forEach(n=>n.seen=!1)}function ip(){H.rings.forEach(n=>{!n.seen&&n.used&&(n.used=!1,n.id=null,n.g.visible=!1)}),H.lines.forEach(n=>{!n.seen&&n.used&&(n.used=!1,n.id=null,n.m.visible=!1)})}function sp(n,e,t){let i=new Ge,s=n+(Math.random()-.5)*6,r=e+55,o=t+(Math.random()-.5)*6,a=qn(14085375,.95),l=new Bt({color:16777215,toneMapped:!1}),c=(u,h,d,f,p,x,g)=>{let m=Math.hypot(f-u,p-h,x-d),b=new Ee(E.cyl(g,g,1,6),a);b.scale.y=m,b.position.set((u+f)/2,(h+p)/2,(d+x)/2),b.lookAt(f,p,x),b.rotateX(Math.PI/2),i.add(b);let y=new Ee(E.cyl(g*.4,g*.4,1,5),l);y.scale.y=m,y.position.copy(b.position),y.quaternion.copy(b.quaternion),i.add(y)};for(let u=1;u<=12;u++){let h=u/12,d=n+(Math.random()-.5)*4*(1-h),f=e+55*(1-h),p=t+(Math.random()-.5)*4*(1-h);c(s,r,o,d,f,p,.35),Math.random()<.3&&c(d,f,p,d+(Math.random()-.5)*6,f-4,p+(Math.random()-.5)*6,.18),s=d,r=f,o=p}V.scene.add(i),H.bolts.push({g:i,t:0}),V.flash.position.set(n,e+12,t),V.flash.intensity=30,ri(n,e+.3,t,26,12575743,{sp:9}),Yt(n,e,t,6,10134445,{s:.6,s1:1.8})}function pu(n,e,t,i,s,r,o){let a=r==="bomb"?new Ge:Vd(o||1);r==="bomb"&&(a.add(new Ee(E.sphere(.8*o,16,12),T(16738816,{e:16729088,ei:2.2,r:.5}))),a.add(new Ee(E.sphere(1.2*o,16,12),qn(16747050,.35))));let l=r==="bomb"?0:25,c=r==="bomb"?0:-18;V.scene.add(a),H.meteors.push({id:n,m:a,x:e,y:t,z:i,T:s,t:0,dx:l,dz:c,kind:r,size:o||1,h:r==="bomb"?40:70})}function p_(){H.meteors.forEach(n=>V.scene.remove(n.m)),H.meteors.length=0}function rp(n,e,t){let i=V.t,s,r;for(s of[H.puffs,H.fire]){r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p){let a=Math.exp(-o.drag*n);o.vx*=a,o.vz*=a,o.vy=o.vy*a-o.g*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n;let l=o.t/o.T,c=(o.s0+(o.s1-o.s0)*Math.sqrt(l))*(1-l*l*l);Xt.position.set(o.x,o.y,o.z),Xt.scale.setScalar(Math.max(.001,c)),Xt.rotation.set(0,0,0),Xt.updateMatrix(),s.m.setMatrixAt(r,Xt.matrix),s.m.setColorAt(r,gl.setHex(o.c)),r++}s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0)}s=H.debris,r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p){o.vy-=22*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n,o.rx+=o.wr*n,o.ry+=o.wr*.7*n,o.y<o.gy+o.s*.5&&(o.y=o.gy+o.s*.5,o.vy*=-.35,o.vx*=.6,o.vz*=.6,o.wr*=.6);let a=o.t>o.T-.5?(o.T-o.t)/.5:1;Xt.position.set(o.x,o.y,o.z),Xt.rotation.set(o.rx,o.ry,0),Xt.scale.setScalar(o.s*a),Xt.updateMatrix(),s.m.setMatrixAt(r,Xt.matrix),s.m.setColorAt(r,gl.setHex(o.c)),r++}s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0),s=H.sparks,r=0,s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p)o.vy-=o.g*n,o.x+=o.vx*n,o.y+=o.vy*n,o.z+=o.vz*n,Xt.position.set(o.x,o.y,o.z),Xt.rotation.set(0,0,0),Xt.scale.setScalar(o.s*(1-o.t/o.T)),Xt.updateMatrix(),s.m.setMatrixAt(r,Xt.matrix),s.m.setColorAt(r,gl.setHex(o.c)),r++;if(s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,s.m.instanceColor&&(s.m.instanceColor.needsUpdate=!0),s=H.hail,r=0,t.hail>0)for(let o=0;o<t.hail*6;o++)s.add({x:e.x+(Math.random()-.5)*36,y:e.y+22+Math.random()*6,z:e.z+(Math.random()-.5)*36,vy:-26,vx:2,t:0,T:2.2,s:.09+Math.random()*.1,gy:t.groundY?t.groundY:0,b:0});s.p=s.p.filter(o=>(o.t+=n)<o.T);for(let o of s.p)o.vy-=20*n,o.y+=o.vy*n,o.x+=o.vx*n,o.y<o.gy+o.s&&o.b<2&&(o.y=o.gy+o.s,o.vy=Math.abs(o.vy)*.3,o.b++),Xt.position.set(o.x,o.y,o.z),Xt.scale.setScalar(o.s),Xt.updateMatrix(),s.m.setMatrixAt(r,Xt.matrix),r++;if(s.m.count=r,s.m.instanceMatrix.needsUpdate=!0,H.rain.visible=t.rain>.02,H.rain.visible){let o=H.rain.geometry.attributes.position.array,a=H.rainD,l=t.wind||0;for(let c=0;c<a.length;c++){let u=a[c];u[1]-=n*38,u[1]<0&&(u[1]+=30,u[0]=(Math.random()-.5)*60,u[2]=(Math.random()-.5)*60);let h=e.x+u[0],d=e.y-4+u[1],f=e.z+u[2];o[c*6]=h,o[c*6+1]=d,o[c*6+2]=f,o[c*6+3]=h+l*.05,o[c*6+4]=d+.9,o[c*6+5]=f}H.rain.geometry.attributes.position.needsUpdate=!0,H.rain.material.opacity=.55*Math.min(1,t.rain)}if(H.snow.visible=t.snow>.02||t.ash>.02,H.snow.visible){let o=H.snow.geometry.attributes.position.array,a=H.snowD,l=t.ash>0?2.5:3.5,c=t.snow>0?6:1;for(let u=0;u<a.length;u++){let h=a[u];h[1]-=n*l,h[0]+=n*c*(.6+Math.sin(i+h[3])*.4),h[1]<0&&(h[1]+=25,h[0]=(Math.random()-.5)*50,h[2]=(Math.random()-.5)*50),h[0]>25&&(h[0]-=50),o[u*3]=e.x+h[0],o[u*3+1]=e.y-3+h[1],o[u*3+2]=e.z+h[2]}H.snow.geometry.attributes.position.needsUpdate=!0,H.snow.material.color.setHex(t.ash>0?5591125:16777215),H.snow.material.opacity=Math.min(1,Math.max(t.snow,t.ash)),H.snow.material.size=t.ash>0?.25:.38}H.bolts=H.bolts.filter(o=>(o.t+=n,o.g.visible=o.t<.06||o.t>.1&&o.t<.32,o.t>.35?(V.scene.remove(o.g),!1):!0)),H.waves=H.waves.filter(o=>{o.t+=n;let a=o.t/o.T;return o.m.scale.setScalar(.5+a*o.r),o.m.material.opacity=.8*(1-a),a>=1?(V.scene.remove(o.m),!1):!0}),H.meteors=H.meteors.filter(o=>{o.t+=n;let a=Math.min(1,o.t/o.T);return o.m.position.set(o.x+o.dx*(1-a),o.y+o.h*(1-a)+(o.kind==="bomb"?Math.sin(a*Math.PI)*18:0),o.z+o.dz*(1-a)),o.m.rotation.x+=n*3,o.m.rotation.y+=n*2,Math.random()<.5&&Yt(o.m.position.x,o.m.position.y,o.m.position.z,1,[10133672,13159634,7041664],{sp:.3,up:.3,s:.35*o.size,s1:1*o.size,life:1}),Math.random()<.7&&Yt(o.m.position.x,o.m.position.y,o.m.position.z,1,[16751164,16765286],{fire:1,sp:.6,up:.2,s:.4*o.size,s1:.1,life:.35}),a>=1?(V.scene.remove(o.m),!1):!0}),[H.waterMat,H.lavaMat,H.torMat].forEach(o=>{o.userData.sh&&(o.userData.sh.uniforms.uT.value=i)})}function vl(){H.puffs.clear(),H.fire.clear(),H.debris.clear(),H.sparks.clear(),H.hail.clear(),p_(),H.rings.forEach(n=>{n.used=!1,n.g.visible=!1}),H.lines.forEach(n=>{n.used=!1,n.m.visible=!1})}function op(n){let i=new Uint8Array(262144),s=new Float32Array(256*256);for(let o=0;o<256;o++)for(let a=0;a<256;a++){let l=(a+.5)/256*320-160,c=(o+.5)/256*320-320/2;s[o*256+a]=n.terrain(l,c)}let r=n.half+1;for(let o of n.walls){if(o.y1<-5||o.y0<-20||Math.abs(o.x0)>r+2&&Math.abs(o.x1)>r+2||Math.abs(o.z0)>r+2&&Math.abs(o.z1)>r+2||o.x1-o.x0>60||o.z1-o.z0>60)continue;let a=Math.floor((o.x0+320/2)/320*256),l=Math.ceil((o.x1+320/2)/320*256),c=Math.floor((o.z0+320/2)/320*256),u=Math.ceil((o.z1+320/2)/320*256);for(let h=Math.max(0,c);h<Math.min(256,u);h++)for(let d=Math.max(0,a);d<Math.min(256,l);d++)s[h*256+d]=Math.max(s[h*256+d],Math.min(44,o.y1))}for(let o=0;o<256*256;o++){let a=Math.max(0,Math.min(255,Math.round((s[o]+15)/60*255)));i[o*4]=a,i[o*4+1]=a,i[o*4+2]=a,i[o*4+3]=255}H.htTex.dispose(),H.htTex=new ni(i,256,256),H.htTex.magFilter=Sn,H.htTex.minFilter=Sn,H.htTex.needsUpdate=!0,H.waterMat.userData.sh&&(H.waterMat.userData.sh.uniforms.uHt.value=H.htTex)}var _r=["kaiju","lightning","meteor","tornado","flood","quake","volcano","blizzard","alien"],ot=Math.random,_s=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function mu(n,e,t,i,s,r){let o=s-t,a=r-i,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/l));return Math.hypot(n-(t+o*c),e-(i+a*c))}function Kt(n,e){let t=e.y<-22,i=t?null:wi(n,e.x,e.y,e.z);return{under:t,b:i,sturdy:!!(i&&i.sturdy),table:i?iu(n,e.x,e.y,e.z):null,roof:t?null:nu(n,e.x,e.y,e.z),out:!t&&!i,fire:n.fires.some(s=>(!s.b||!s.b.wrecked)&&Math.hypot(e.x-s.x,e.z-s.z)<s.r&&Math.abs(e.y-s.y)<2)}}function $i(n){return n.rooms.map(e=>({kind:"pad",b:e.b,pad:n.pads.find(t=>t.room===e&&t.kind==="down"),x:e.hatch.x,y:e.hatch.y,z:e.hatch.z,label:e.name,under:!0}))}function yr(n,e){return n.buildings.filter(t=>!t.wrecked&&(!e||t.sturdy)).map(t=>({kind:"in",b:t,x:t.x,y:t.baseY+.2,z:t.z,label:t.name}))}function m_(n){let e=[];return n.buildings.forEach(t=>{if(t.elevator&&!t.wrecked){let i=t.pads.find(s=>s.kind==="elev");e.push({kind:"pad",b:t,pad:i,x:i.x,y:i.y,z:i.z,label:t.name+" roof",high:!0})}}),n.high.filter(t=>!t.b).forEach(t=>e.push({kind:"high",x:t.x,y:t.y,z:t.z,foot:t.foot,label:t.label})),e}function g_(n){return n.tables.filter(e=>!e.b||!e.b.wrecked&&!e.b.sturdy||e.b&&e.b.sturdy).filter(e=>!e.b||!e.b.wrecked).map(e=>({kind:"table",b:e.b,x:e.x,y:e.y,z:e.z,label:"under a table"}))}function ap(n){if(n._open)return n._open;let e=[];for(let t=-60;t<=60;t+=6)for(let i=-60;i<=60;i+=6)Math.abs(n.terrain(t,i))>1.5||cl(n,t,i)>9&&e.push({kind:"open",x:t,y:n.terrain(t,i),z:i,label:"open ground"});return n._open=e}var lp=(n,e)=>n.players.filter(t=>t.st==="ok"&&Kt(e,t).out);function yl(n,e,t,i=.55){let s=lp(n,e);if(s.length&&ot()<i){let o=s[ot()*s.length|0];return{x:o.x+(ot()-.5)*t,z:o.z+(ot()-.5)*t}}let r=e.half-8;return{x:(ot()-.5)*2*r*.8,z:(ot()-.5)*2*r*.8}}function Si(n,e){return e.i=n.hid=(n.hid||0)+1,e.t=0,n.haz.push(e),e}var mo=(n,e,t)=>Tn(n,e,t,200),Ut={kaiju:{name:"KAIJU ATTACK",icon:"\u{1F996}",color:"#a855f7",mood:"dusk",dur:40,warn:"ROARGON is coming! Hide UNDERGROUND!",tip:"Basements, the subway, the mine and the bunker are the only safe spots. Buildings get stomped!",start(n,e){let t=ot()*6.283,i=e.half+6;n.env.kj={x:Math.cos(t)*i,z:Math.sin(t)*i,yaw:0,step:0,beamT:5,roarT:1,roar:0,charge:0,beam:null,tx:0,tz:0,retarget:0},n.fx.push({k:"sfx",n:"roar"})},tick(n,e,t,i){let s=n.env.kj;if(s.retarget-=t,s.retarget<=0){s.retarget=6;let c=n.players.filter(d=>d.st==="ok"&&d.y>-22),u=c[ot()*c.length|0],h=u?{x:u.x,z:u.z}:{x:(ot()-.5)*80,z:(ot()-.5)*80};s.tx=h.x,s.tz=h.z}let o=Math.atan2(s.tx-s.x,s.tz-s.z)-s.yaw;for(;o>Math.PI;)o-=6.283;for(;o<-Math.PI;)o+=6.283;s.yaw+=Math.max(-t*.7,Math.min(t*.7,o));let a=s.charge>0||s.beam||s.roar>0,l=a?0:3.4*i.k;if(Math.hypot(s.tx-s.x,s.tz-s.z)>6&&(s.x+=Math.sin(s.yaw)*l*t,s.z+=Math.cos(s.yaw)*l*t),s.walk=l>0,s.x=Math.max(-e.half-8,Math.min(e.half+8,s.x)),s.z=Math.max(-e.half-8,Math.min(e.half+8,s.z)),e.buildings.forEach(c=>{!c.wrecked&&Math.abs(c.x-s.x)<c.w/2+3.5&&Math.abs(c.z-s.z)<c.d/2+3.5&&i.wreck(c)}),n.players.forEach(c=>{c.st==="ok"&&c.y>-22&&Math.hypot(c.x-s.x,c.z-s.z)<5&&i.hit(c,30,"stomp",s)}),l>0&&(s.step+=t,s.step>2.4)){s.step=0;let c=s.side=-(s.side||1),u=s.x+Math.sin(s.yaw)*7+Math.cos(s.yaw)*c*2.5,h=s.z+Math.cos(s.yaw)*7-Math.sin(s.yaw)*c*2.5;Si(n,{k:"stomp",x:u,z:h,y:mo(e,u,h),r:6,T:1.3})}if(s.roarT-=t,s.roarT<=0&&(s.roarT=11,s.roar=1.8,n.fx.push({k:"sfx",n:"roar"}),n.env.shake=Math.max(n.env.shake,.6)),s.roar>0&&(s.roar-=t),s.beamT-=t,s.beamT<=0&&!s.beam&&s.charge<=0){let c=n.players.filter(f=>f.st==="ok"&&f.y>-22&&Math.hypot(f.x-s.x,f.z-s.z)<45),u=c[ot()*c.length|0],h=u?{x:u.x,z:u.z}:{x:s.x+Math.sin(s.yaw)*25,z:s.z+Math.cos(s.yaw)*25},d=Math.atan2(h.x-s.x,h.z-s.z);s.yaw=d,s.charge=.01,s.bx0=s.x+Math.sin(d)*6,s.bz0=s.z+Math.cos(d)*6,s.bx1=s.x+Math.sin(d)*46,s.bz1=s.z+Math.cos(d)*46,Si(n,{k:"beam",x:s.bx0,z:s.bz0,x1:s.bx1,z1:s.bz1,y:.1,r:1.9,T:1.9}),n.fx.push({k:"sfx",n:"beam"})}s.charge>0&&(s.charge+=t/1.9,s.charge>=1&&(s.charge=0,s.beam=1.2,s.beamT=7.5/i.k)),s.beam&&(s.beam-=t,n.players.forEach(c=>{c.st==="ok"&&c.y>-22&&mu(c.x,c.z,s.bx0,s.bz0,s.bx1,s.bz1)<2&&i.hit(c,35,"beam",{x:s.x,z:s.z})}),e.buildings.forEach(c=>{!c.wrecked&&!c.sturdy&&mu(c.x,c.z,s.bx0,s.bz0,s.bx1,s.bz1)<Math.max(c.w,c.d)/2+1&&i.wreck(c)}),s.beam<=0&&(s.beam=null))},impact(n,e,t,i){n.k==="stomp"&&(e.fx.push({k:"stomp",x:n.x,y:n.y,z:n.z}),e.env.shake=Math.max(e.env.shake,.8),e.players.forEach(s=>{s.st==="ok"&&s.y>-22&&_s(s,n)<n.r&&i.hit(s,28,"stomp",n)}),t.buildings.forEach(s=>{!s.wrecked&&Math.abs(s.x-n.x)<s.w/2+n.r*.6&&Math.abs(s.z-n.z)<s.d/2+n.r*.6&&i.wreck(s)}))},safe:(n,e)=>e.under?"Underground":!1,targets:n=>$i(n)},lightning:{name:"LIGHTNING STORM",icon:"\u26A1",color:"#facc15",mood:"storm",dur:30,warn:"Lightning storm! Get INSIDE a building!",tip:"Any building keeps you safe. Stay off roofs and open ground!",start(n){n.env.rain=1,n.env.wind=4,n.cd=1.5},tick(n,e,t,i){if(n.cd-=t,n.cd<=0){n.cd=(.55+ot()*.4)/i.k;let s=n.players.filter(o=>o.st==="ok"&&nu(e,o.x,o.y,o.z)),r=s.length&&ot()<.5?{x:s[0].x,z:s[0].z}:yl(n,e,4,.6);Si(n,{k:"strike",x:r.x,z:r.z,y:mo(e,r.x,r.z),r:2.6,T:1.5})}},impact(n,e,t,i){e.fx.push({k:"bolt",x:n.x,y:n.y,z:n.z}),e.players.forEach(s=>{let r=Kt(t,s);s.st==="ok"&&r.out&&_s(s,n)<n.r&&Math.abs(s.y-n.y)<3&&i.hit(s,30,"zap",n)})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":!1,targets:n=>yr(n).concat($i(n))},meteor:{name:"METEOR SHOWER",icon:"\u2604\uFE0F",color:"#fb923c",mood:"dusk",dur:30,warn:"Meteors incoming! Get into a STURDY building or underground!",tip:"Concrete buildings and basements are safest. Big meteors can smash wooden houses!",start(n){n.cd=1},tick(n,e,t,i){if(n.cd-=t,n.cd<=0){n.cd=(.7+ot()*.5)/i.k;let s=ot()<.22,r=yl(n,e,6,.5),o=Si(n,{k:"meteor",x:r.x,z:r.z,y:mo(e,r.x,r.z),r:s?5.5:3.2,T:2.3,big:s});n.fx.push({k:"meteor",id:o.i,x:o.x,y:o.y,z:o.z,T:o.T,s:s?2:1})}},impact(n,e,t,i){e.fx.push({k:"boom",x:n.x,y:n.y,z:n.z,s:n.big?1.6:1,c:"meteor"}),e.env.shake=Math.max(e.env.shake,n.big?.6:.3);let s=null;n.big&&t.buildings.forEach(r=>{!r.wrecked&&!r.sturdy&&Math.abs(r.x-n.x)<r.w/2+1&&Math.abs(r.z-n.z)<r.d/2+1&&(i.wreck(r),s=r)}),e.players.forEach(r=>{if(r.st!=="ok"||_s(r,n)>n.r)return;let o=Kt(t,r);o.under||o.sturdy||o.b&&!n.big||i.hit(r,n.big?45:30,"boom",n)})},safe:(n,e)=>e.under?"Underground":e.sturdy?"Sturdy building":e.b?"maybe":!1,targets:n=>yr(n,!0).concat($i(n))},tornado:{name:"TORNADO",icon:"\u{1F32A}\uFE0F",color:"#94a3b8",mood:"storm",dur:35,warn:"TORNADO WARNING! Get to a basement or sturdy building!",tip:"Basements are best. Tornadoes rip apart wooden houses!",start(n,e){n.env.rain=.6,n.env.wind=8;let t=n.wave>=3?2:1;n.env.tor=[];for(let i=0;i<t;i++){let s=ot()*6.283;n.env.tor.push({x:Math.cos(s)*(e.half-5),z:Math.sin(s)*(e.half-5),vx:0,vz:0,wt:0})}},tick(n,e,t,i){n.env.tor.forEach(s=>{if(s.wt-=t,s.wt<=0){s.wt=3+ot()*2;let r=yl(n,e,10,.6),o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;s.vx=o/l*4.6*i.k,s.vz=a/l*4.6*i.k}s.x+=s.vx*t,s.z+=s.vz*t,s.x=Math.max(-e.half,Math.min(e.half,s.x)),s.z=Math.max(-e.half,Math.min(e.half,s.z)),e.buildings.forEach(r=>{!r.wrecked&&!r.sturdy&&Math.abs(r.x-s.x)<r.w/2+2.5&&Math.abs(r.z-s.z)<r.d/2+2.5&&i.wreck(r)}),n.players.forEach(r=>{if(r.st!=="ok")return;let o=Kt(e,r);if(o.under||o.sturdy)return;let a=s.x-r.x,l=s.z-r.z,c=Math.hypot(a,l);if(c<11){let u=(1-c/11)*9;r.kx+=(a/(c||1)*u+l/(c||1)*u*.8)*t*2,r.kz+=(l/(c||1)*u-a/(c||1)*u*.8)*t*2}c<4.2&&(i.hit(r,22,"fling",s),r.st==="ok"&&(r.vy=12,r.kx=-l*1.5,r.kz=a*1.5))})})},safe:(n,e)=>e.under?"Underground":e.sturdy?"Sturdy building":!1,targets:n=>$i(n).concat(yr(n,!0))},flood:{name:"TSUNAMI",icon:"\u{1F30A}",color:"#38bdf8",mood:"storm",dur:36,warn:"TSUNAMI WARNING! Get to HIGH GROUND!",tip:"Ride an elevator to a rooftop, climb a tower or a hill. Basements will flood!",start(n,e){n.env.rain=.4;let t=e.sea!=null?e.sea:-.6;n.env.water=t,n.env.waterBase=t,n.env.waterTarget=3.7+Math.min(.6,n.wave*.1),n.env.waveZ=e.sea!=null?75:null,n.fx.push({k:"sfx",n:"whoosh"})},tick(n,e,t,i){let s=n.env,r=n.dzT;s.waveZ!=null&&(s.waveZ-=t*9,s.waveZ<-80&&(s.waveZ=null));let o=r<n.dzDur-8;s.water+=((o?s.waterTarget:s.waterBase)-s.water)*t*(o?.22:.35),n.players.forEach(a=>{if(a.st!=="ok")return;if(Kt(e,a).under){let u=a.room;s.water>(a.roomBase!=null?a.roomBase:0)+.3&&i.hit(a,10*t,"water");return}let c=s.water-a.y;c>1.4?i.hit(a,7*t,"water"):c>.5&&i.hit(a,3*t,"water"),c>.3&&(a.kx+=-1.5*t*(e.sea!=null?0:1),a.kz+=-2.5*t)}),s.waveZ!=null&&n.players.forEach(a=>{a.st==="ok"&&Math.abs(a.z-s.waveZ)<3&&a.y<s.waterTarget&&a.y>-22&&i.hit(a,15,"water",{x:a.x,z:a.z+5})})},safe:(n,e,t)=>!e.under&&n.y>(t.env.waterTarget||3.7)+.2?"High ground":!1,targets:n=>m_(n)},quake:{name:"EARTHQUAKE",icon:"\u{1FAE8}",color:"#d97706",mood:"quake",dur:30,warn:"EARTHQUAKE! Drop, Cover, Hold On under a table, or get to open ground!",tip:"Tables protect you inside. Outside, stay away from buildings.",start(n,e){n.cd=1.2,n.cd2=3,n.cd3=6,n.env.cracks=[],n.env.quake=1},tick(n,e,t,i){let s=n.env,r=n.dzT;if(s.shake=Math.max(s.shake,.35+.35*Math.max(0,Math.sin(r*.9))),n.cd-=t,n.cd<=0){n.cd=.35/i.k;let o=e.buildings.filter(c=>!c.wrecked),a=o[ot()*o.length|0];if(a){let c,u,h=!a.sturdy&&ot()<.45;if(h)c=a.ix0+ot()*(a.ix1-a.ix0),u=a.iz0+ot()*(a.iz1-a.iz0);else{let d=ot()*4|0,f=ot()-.5;c=d<2?a.x+f*a.w:a.x+(d===2?1:-1)*(a.w/2+1.2+ot()*1.6),u=d<2?a.z+(d===0?1:-1)*(a.d/2+1.2+ot()*1.6):a.z+f*a.d}Si(n,{k:"junk",x:c,z:u,y:h?a.baseY+.2:mo(e,c,u),r:1.7,T:1.2,inside:h,bh:a.h})}let l=n.players.filter(c=>c.st==="ok"&&c.y>-22&&cl(e,c.x,c.z)<4);if(l.length&&ot()<.35){let c=l[ot()*l.length|0];Si(n,{k:"junk",x:c.x+(ot()-.5)*2,z:c.z+(ot()-.5)*2,y:c.y,r:1.7,T:1.25,inside:!!wi(e,c.x,c.y,c.z)})}}if(n.cd2-=t,n.cd2<=0){n.cd2=4.5;let o=ap(e),a=o[ot()*o.length|0]||{x:0,z:0},l=ot()*3.14,c=9;Si(n,{k:"crack",x:a.x-Math.cos(l)*c,z:a.z-Math.sin(l)*c,x1:a.x+Math.cos(l)*c,z1:a.z+Math.sin(l)*c,y:e.terrain(a.x,a.z),r:1.1,T:1.8})}if(n.cd3-=t,n.cd3<=0){n.cd3=9;let o=e.buildings.filter(l=>!l.wrecked&&!l.sturdy&&!l.elevator),a=o[ot()*o.length|0];a&&Si(n,{k:"collapse",x:a.x,z:a.z,y:a.baseY,r:Math.max(a.w,a.d)/2+.5,T:3,b:a.id})}},impact(n,e,t,i){if(n.k==="junk")e.fx.push({k:"junk",x:n.x,y:n.y,z:n.z}),e.players.forEach(s=>{if(s.st==="ok"&&_s(s,n)<n.r&&Math.abs(s.y-n.y)<2.5){let r=Kt(t,s);if(r.table||r.under)return;i.hit(s,22,"bonk",n)}});else if(n.k==="crack")e.env.cracks.push([n.x,n.z,n.x1,n.z1,n.y]),e.fx.push({k:"crack",x:n.x,z:n.z,x1:n.x1,z1:n.z1,y:n.y}),e.players.forEach(s=>{s.st==="ok"&&Math.abs(s.y-n.y)<1.5&&mu(s.x,s.z,n.x,n.z,n.x1,n.z1)<n.r&&(i.hit(s,18,"bonk",n),s.vy=7)});else if(n.k==="collapse"){let s=t.buildings.find(r=>r.id===n.b);s&&!s.wrecked&&(e.players.forEach(r=>{r.st==="ok"&&wi(t,r.x,r.y,r.z)===s&&!iu(t,r.x,r.y,r.z)&&i.hit(r,30,"bonk",n)}),i.wreck(s))}},safe:(n,e,t,i)=>e.under?"Underground":e.table?"Under a table":e.out&&!e.roof&&cl(i,n.x,n.z)>7?"Open ground":!1,targets:n=>g_(n).concat(ap(n)).concat($i(n))},volcano:{name:"VOLCANO",icon:"\u{1F30B}",color:"#ef4444",mood:"volcano",dur:38,warn:"VOLCANO ERUPTING! Get indoors, away from the lava!",tip:"Roofs block lava bombs. Lava flows on the ground, so stay far from the volcano or up high.",start(n,e){let t=e.volcano;n.env.lava={x:t.x,z:t.z,r:0,max:Math.hypot(t.x,t.z)-14,y:.35},n.env.ash=.8,n.env.volc=0,n.cd=2.5,n.fx.push({k:"sfx",n:"boom"}),n.env.shake=.8},tick(n,e,t,i){let s=n.env.lava;if(n.env.volc=Math.min(1,n.env.volc+t/4),n.env.volc>=1&&(s.r=Math.min(s.max,s.r+t*1.7*i.k)),n.cd-=t,n.cd<=0){n.cd=(.5+ot()*.35)/i.k;let r=yl(n,e,6,.5),o=Si(n,{k:"bomb",x:r.x,z:r.z,y:mo(e,r.x,r.z),r:3,T:2.1});n.fx.push({k:"bomb",id:o.i,x:o.x,y:o.y,z:o.z,T:o.T,s:1,sx:e.volcano.x,sz:e.volcano.z})}n.players.forEach(r=>{if(r.st!=="ok")return;Math.hypot(r.x-s.x,r.z-s.z)<s.r&&(r.y<s.y+.7||r.y<-22)&&i.hit(r,22*t,"burn")})},impact(n,e,t,i){e.fx.push({k:"boom",x:n.x,y:n.y,z:n.z,s:.9,c:"lava"}),e.players.forEach(s=>{if(s.st!=="ok"||_s(s,n)>n.r)return;let r=Kt(t,s);!r.out||r.roof&&!1||Math.abs(s.y-n.y)<3&&i.hit(s,26,"burn",n)})},safe:(n,e,t)=>{let i=t.env.lava;return i&&Math.hypot(n.x-i.x,n.z-i.z)<i.r+3&&n.y<2?!1:e.under?"Underground":e.b?"Indoors":!1},targets:(n,e)=>{let t=n.volcano;return yr(n).concat($i(n)).filter(i=>Math.hypot(i.x-t.x,i.z-t.z)>Math.hypot(t.x,t.z)*.8)}},blizzard:{name:"BLIZZARD & HAIL",icon:"\u{1F328}\uFE0F",color:"#7dd3fc",mood:"snow",dur:32,warn:"BLIZZARD! Get inside or warm up by a fire!",tip:"The cold and hail hurt outside. Fireplaces and campfires keep you warm. Umbrellas block hail.",start(n){n.env.snow=1,n.env.hail=.6,n.env.wind=7,n.env.cold=1,n.cd=1.2},tick(n,e,t,i){n.cd-=t;let s=n.cd<=0;s&&(n.cd=1.2/i.k),n.players.forEach(r=>{if(r.st!=="ok")return;let o=Kt(e,r);if(o.fire){r.hp=Math.min(r.max,r.hp+3*t);return}o.out&&(i.hit(r,2.6*t*i.k,"cold"),r.kx+=2.2*t,s&&!(r.upg&&r.upg.umbrella)&&i.hit(r,6,"hail"))})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":e.fire?"By the fire":!1,targets:n=>yr(n).concat($i(n))},alien:{name:"ALIEN INVASION",icon:"\u{1F6F8}",color:"#4ade80",mood:"alien",dur:35,warn:"UFOs are abducting people! Hide INDOORS!",tip:"UFO spotlights can only grab you outside. Red light = run!",start(n,e){let t=e.id==="area51"?4:3;n.env.ufos=[];for(let i=0;i<t;i++){let s=i/t*6.283+ot();n.env.ufos.push({x:Math.cos(s)*60,z:Math.sin(s)*60,tx:0,tz:0,lock:0,rt:0,grab:null})}n.fx.push({k:"sfx",n:"ufo"})},tick(n,e,t,i){n.env.ufos.forEach((s,r)=>{if(s.rt-=t,s.rt<=0){s.rt=2.5;let h=lp(n,e).filter(f=>!f.grabbed),d=h.length?h.reduce((f,p)=>_s(f,s)<_s(p,s)?f:p):null;d&&ot()<.85?(s.tx=d.x,s.tz=d.z,s.chase=d.id):(s.tx=(ot()-.5)*100,s.tz=(ot()-.5)*100,s.chase=null)}if(s.chase!=null){let h=n.players.find(d=>d.id===s.chase);h&&h.st==="ok"&&Kt(e,h).out&&(s.tx=h.x,s.tz=h.z)}if(s.grab!=null){let h=n.players.find(d=>d.id===s.grab);if(s.gT-=t,h&&(h.x+=(s.x-h.x)*t*2,h.z+=(s.z-h.z)*t*2,h.y=Math.min(13,h.y+t*4.5)),s.gT<=0||!h){if(h){let d=e.half-10;h.st="ok",h.grabbed=!1,h.x=(ot()-.5)*2*d,h.z=(ot()-.5)*2*d,h.y=16,h.vy=0,i.hit(h,15,"drop"),i.tp(h)}s.grab=null,s.rt=0}return}let o=s.tx-s.x,a=s.tz-s.z,l=Math.hypot(o,a),c=6.2*i.k;l>.3&&(s.x+=o/l*Math.min(l,c*t),s.z+=a/l*Math.min(l,c*t));let u=n.players.filter(h=>h.st==="ok"&&Math.hypot(h.x-s.x,h.z-s.z)<3.6&&Kt(e,h).out&&h.sh<=0);if(u.length){if(s.lock+=t,s.lock>1.5){let h=u[0];if(i.shielded(h)){s.lock=0;return}s.lock=0,s.grab=h.id,s.gT=2.6,h.st="float",h.grabbed=!0,h.waveKO=!0,n.fx.push({k:"sfx",n:"zap"}),i.event(h,"beamed")}}else s.lock=Math.max(0,s.lock-t*2)})},safe:(n,e)=>e.under?"Underground":e.b?"Indoors":!1,targets:n=>yr(n).concat($i(n))}};function _l(n,e){let t=[];return _r.forEach(i=>{i!==e&&(t.push(i),i==="alien"&&n.id==="area51"&&t.push(i),i==="flood"&&n.id==="beach"&&t.push(i),i==="volcano"&&n.id==="pine"&&t.push(i),i==="blizzard"&&n.id==="pine"&&t.push(i),i==="kaiju"&&n.id==="city"&&t.push(i))}),t[ot()*t.length|0]}function Ei(n,e){return n==="flood"&&e&&e.sea==null?"FLASH FLOOD":Ut[n].name}var Je={kaiju:null,ufos:[],tors:[],volc:null,cracks:[],torDebris:null};function Ml(){Je.kaiju&&(Je.kaiju.root.visible=!1),Je.ufos.forEach(n=>n.visible=!1),Je.tors.forEach(n=>n.visible=!1),Je.volc&&(Je.volc.visible=!1),Je.cracks.forEach(n=>V.scene.remove(n)),Je.cracks=[],H.water.visible=!1,H.foam.visible=!1,H.wave.visible=!1,H.lava.visible=!1}function cp(n,e,t){let i=n.env,s=n.phase==="active"||n.phase==="warn";if(i.kj&&n.dz==="kaiju"&&n.phase==="active"){Je.kaiju||(Je.kaiju=Fd(),V.scene.add(Je.kaiju.root));let a=Je.kaiju;a.root.visible=!0,a.root.position.x+=(i.kj.x-a.root.position.x)*Math.min(1,t*8),a.root.position.z+=(i.kj.z-a.root.position.z)*Math.min(1,t*8),a.root.position.y=e.terrain(a.root.position.x,a.root.position.z),a.root.rotation.y=i.kj.yaw,Bd(a,t,i.kj.walk,i.kj.roar>0,i.kj.charge||(i.kj.beam?1:0)),a.beam.visible=!!i.kj.beam,i.kj.beam&&(a.beamLen(42),a.beam.children[0].scale.x=a.beam.children[0].scale.z=.8+Math.random()*.4,Math.random()<.6&&ri(i.kj.bx1*.3+i.kj.bx0*.7+(Math.random()-.5)*20,1,i.kj.bz1*.3+i.kj.bz0*.7+(Math.random()-.5)*20,3,8255999)),a.head.rotation.x=i.kj.beam||i.kj.charge>0?.32:0,i.kj.charge>0&&Math.random()<.5&&ri(a.root.position.x,16,a.root.position.z,2,6288383,{sp:3,g:-3})}else Je.kaiju&&(Je.kaiju.root.visible=!1);let r=n.dz==="alien"&&n.phase==="active"&&i.ufos?i.ufos:[];for(;Je.ufos.length<r.length;){let a=Hd();V.scene.add(a),Je.ufos.push(a)}Je.ufos.forEach((a,l)=>{let c=r[l];if(a.visible=!!c,!c)return;a.position.x+=(c.x-a.position.x)*Math.min(1,t*6),a.position.z+=(c.z-a.position.z)*Math.min(1,t*6),a.position.y=15+Math.sin(V.t*1.5+l)*.6+e.terrain(a.position.x,a.position.z)*.3,a.userData.lights.rotation.y+=t*2,a.rotation.z=Math.sin(V.t+l)*.06;let u=e.terrain(a.position.x,a.position.z),h=a.userData.beam;h.scale.y=a.position.y-u-.5,h.material.opacity=c.grab!=null?.45:.2,xl("ufo"+l,a.position.x,u,a.position.z,3.6,c.lock>0||c.grab!=null?16723285:4906624,Math.min(1,c.lock/1.5)),c.grab!=null&&Math.random()<.5&&ri(a.position.x,u+Math.random()*10,a.position.z,2,10354608,{sp:2,g:-6})});let o=n.dz==="tornado"&&n.phase==="active"&&i.tor?i.tor:[];for(;Je.tors.length<o.length;){let a=new Ge,l=new Ee(H.torGeo,H.torMat);a.add(l);let c=new Ee(H.torGeo,H.torMat);c.scale.set(.7,.95,.7),a.add(c),V.scene.add(a),Je.tors.push(a)}if(Je.tors.forEach((a,l)=>{let c=o[l];a.visible=!!c,c&&(a.position.x+=(c.x-a.position.x)*Math.min(1,t*6),a.position.z+=(c.z-a.position.z)*Math.min(1,t*6),a.position.y=e.terrain(a.position.x,a.position.z)-.5,a.children[0].rotation.y+=t*3,a.children[1].rotation.y-=t*4.5,a.rotation.z=Math.sin(V.t*.7+l)*.08,Math.random()<.9&&Yt(a.position.x+(Math.random()-.5)*6,a.position.y+.5,a.position.z+(Math.random()-.5)*6,2,[10718061,9080729,12759680],{sp:6,up:3,s:.8,s1:2.2,life:1.4}),Math.random()<.25&&ys(a.position.x,a.position.y+2+Math.random()*8,a.position.z,1,[9132587,13935475,7041664,4906624],{sp:14,up:6,s:.5,floor:0}))}),i.water!=null&&n.dz==="flood"&&(n.phase==="active"||n.phase==="calm")&&i.water>(i.waterBase||-1)+.02){if(H.water.visible=!0,H.water.position.y+=(i.water-H.water.position.y)*Math.min(1,t*4),i.waveZ!=null){H.foam.visible=!1,H.wave.visible=!0;let a=Math.min(H.water.position.y,i.waterBase!=null?i.waterBase:0)-.4;H.wave.position.set(0,a,i.waveZ),H.wave.scale.y=Math.max(2,i.waterTarget+1.8-a)*(1+Math.sin(V.t*3)*.03);for(let l=0;l<2;l++)Math.random()<.7&&Yt((Math.random()-.5)*150,a+H.wave.scale.y*.97,i.waveZ-1.6,1,16777215,{sp:1.5,up:2.5,s:.6,s1:1.6})}else H.foam.visible=!1,H.wave.visible=!1;if(!Je.float){Je.float=[];for(let a=0;a<14;a++){let l=new Ge;if(a%3===0){l.add(new Ee(E.sphere(.45,16,12),T(16766474,{r:.35,cc:.8})));let c=new Ee(E.sphere(.3,14,10),T(16766474,{r:.35,cc:.8}));c.position.set(0,.45,.25),l.add(c);let u=new Ee(E.cone(.12,.25,10),T(16743168));u.rotation.x=Math.PI/2,u.position.set(0,.42,.6),l.add(u)}else a%3===1?l.add(new Ee(E.rbox(1,.8,1,.08),T(13935475,{r:.8}))):l.add(new Ee(E.sphere(.5,16,12),T([16734558,1671876,9095462][a%3],{r:.3,cc:.8})));l.userData={a:Math.random()*6.28,r:6+Math.random()*30,s:(Math.random()-.5)*.12},V.scene.add(l),Je.float.push(l)}}Je.float.forEach((a,l)=>{let c=a.userData;c.a+=c.s*t,a.visible=i.water>.8,a.position.set(Math.cos(c.a)*c.r,H.water.position.y+Math.sin(V.t*2+l)*.15,Math.sin(c.a)*c.r*1.4),a.rotation.y=c.a*3+l,a.rotation.z=Math.sin(V.t*1.5+l)*.15})}else e.sea!=null?(H.water.visible=!0,H.water.position.y=e.sea,H.foam.visible=!1,H.wave.visible=!1):(H.water.visible=!1,H.foam.visible=!1,H.wave.visible=!1);if(Je.float&&!(i.water!=null&&n.dz==="flood"&&(n.phase==="active"||n.phase==="calm")&&i.water>.8)&&Je.float.forEach(a=>a.visible=!1),i.lava&&n.dz==="volcano"&&n.phase==="active"){if(!e.volcano.real){if(!Je.volc||Je.volc.userData.map!==e.id){Je.volc&&V.scene.remove(Je.volc),Je.volc=new Ge,Je.volc.userData.map=e.id;let l=new Ee(new un(5,22,18,40,6),T(7031354,{r:.9}));l.position.y=9,l.castShadow=!0,Je.volc.add(l);let c=new Ee(new un(4.5,4.5,.4,32),T(16734720,{e:16727040,ei:2.5}));c.position.y=18.1,Je.volc.add(c),[0,1,2,3].forEach(u=>{let h=new Ee(new un(.8,1.6,12,12),T(16738816,{e:16729088,ei:1.8}));h.position.set(Math.cos(u*1.6)*7,8,Math.sin(u*1.6)*7),h.rotation.set(Math.sin(u*1.6)*.5,0,-Math.cos(u*1.6)*.5),Je.volc.add(h)}),V.scene.add(Je.volc)}Je.volc.visible=!0,Je.volc.position.set(e.volcano.x,e.terrain(e.volcano.x,e.volcano.z)-18*(1-(i.volc||0)),e.volcano.z)}let a=e.volcano.real?e.volcano.y+1:18+e.terrain(e.volcano.x,e.volcano.z);Math.random()<.8&&Yt(e.volcano.x+(Math.random()-.5)*4,a,e.volcano.z+(Math.random()-.5)*4,2,[4934485,7039861,3355448],{sp:2,up:9,s:2,s1:6,life:3.5,drag:.4}),Math.random()<.6&&ri(e.volcano.x,a,e.volcano.z,3,16747050,{sp:10,up:12,s:.35,life:1.6,g:14}),Math.random()<.5&&Yt(e.volcano.x,a,e.volcano.z,2,[16738816,16758531],{fire:1,sp:2,up:6,s:1.2,s1:.3,life:.8}),H.lava.visible=i.lava.r>.5,H.lava.position.set(i.lava.x,i.lava.y,i.lava.z),H.lava.scale.setScalar(Math.max(.01,i.lava.r))}else H.lava.visible=!1,Je.volc&&(Je.volc.visible=!1);for(let a of n.haz){let l=Math.min(1,a.t/a.T);if(a.k==="beam"||a.k==="crack"?tp("h"+a.i,a.x,a.z,a.x1,a.z1,(a.y||0)+.05,a.r*2,a.k==="beam"?16723285:16746496):a.k==="collapse"?xl("h"+a.i,a.x,a.y+.3,a.z,a.r,16746496,l):xl("h"+a.i,a.x,a.y,a.z,a.r,a.k==="strike"?16769357:a.k==="junk"?16746496:16723285,l),a.k==="collapse"){let c=e.buildings.find(u=>u.id===a.b);c&&!c.wrecked&&Math.random()<.3&&Yt(c.x+(Math.random()-.5)*c.w,c.baseY+c.h,c.z+(Math.random()-.5)*c.d,1,13219740,{s:.4,s1:1.2,up:-1})}a.k==="junk"&&l>.5&&!a.vis&&(a.vis=1,ys(a.x,(a.y||0)+4,a.z,4,[13935475,10265519,15681391],{sp:1,up:-2,s:.5,floor:a.y||0}))}if(i.cracks&&n.dz==="quake"&&n.phase==="active")for(;Je.cracks.length<i.cracks.length;){let a=i.cracks[Je.cracks.length],l=new Ee(E.box(1,1,1),T(2759956,{r:1})),c=Math.hypot(a[2]-a[0],a[3]-a[1]);l.scale.set(1,.1,c),l.position.set((a[0]+a[2])/2,a[4]+.03,(a[1]+a[3])/2),l.rotation.y=Math.atan2(a[2]-a[0],a[3]-a[1]),V.scene.add(l),Je.cracks.push(l)}else Je.cracks.length&&n.phase!=="active"&&(Je.cracks.forEach(a=>V.scene.remove(a)),Je.cracks=[])}function hp(n,e,t){let i=n.k;if(i==="bolt")sp(n.x,n.y,n.z),t.thunder();else if(i==="boom"){let s=n.c==="lava";Yt(n.x,n.y,n.z,10,s?[4868690,7039861]:[10265519,13751771,7041664],{sp:5*n.s,up:3,s:.7*n.s,s1:2*n.s,life:1.4}),Yt(n.x,n.y+.5,n.z,8,[16742938,16763196,16731392],{fire:1,sp:6*n.s,up:4,s:.8*n.s,s1:.2,life:.5}),ys(n.x,n.y,n.z,s?4:8,s?[3811874,16734720]:[4864819,7035471,10724259],{sp:8,up:8,s:.45*n.s,floor:n.y}),ri(n.x,n.y+.5,n.z,20,s?16742912:16757575,{sp:10}),du(n.x,n.y,n.z,6*n.s,16757575),V.flash.position.set(n.x,n.y+4,n.z),V.flash.color.setHex(16752704),V.flash.intensity=18,t.boom(Math.min(1,.6*n.s))}else if(i==="meteor")pu(n.id,n.x,n.y,n.z,n.T,"meteor",n.s);else if(i==="bomb"){pu(n.id,n.x,n.y,n.z,n.T,"bomb",n.s);let s=H.meteors[H.meteors.length-1];s.dx=n.sx-n.x,s.dz=n.sz-n.z,s.h=25}else if(i==="stomp")Yt(n.x,n.y,n.z,18,[12755834,14074784,10265519],{sp:9,up:2,s:1,s1:3,life:1.5}),du(n.x,n.y,n.z,10,16777215,.8),ys(n.x,n.y,n.z,6,[7041664,9132587],{sp:9,up:6,floor:n.y}),t.boom(.9);else if(i==="junk")ys(n.x,n.y+.5,n.z,6,[13935475,10265519,15681391,16765286],{sp:3,up:3,s:.45,floor:n.y}),Yt(n.x,n.y,n.z,6,14074784,{s:.5,s1:1.4}),t.boom(.35);else if(i==="crack")Yt((n.x+n.x1)/2,n.y,(n.z+n.z1)/2,14,12755834,{spread:14,s:.7,s1:2,sp:2}),t.boom(.5);else if(i==="wreck"){let s=e.buildings.find(r=>r.id===n.b);s&&(Yt(s.x,s.baseY+1,s.z,22,[14074784,12563877,15064528],{spread:Math.max(s.w,s.d),sp:5,up:3,s:1.2,s1:3.2,life:1.8}),ys(s.x,s.baseY+s.h*.6,s.z,14,[s.wall,s.roof,s.trim,13620957],{sp:8,up:9,s:.7,floor:s.baseY}),t.boom(.8))}else i==="splash"?Yt(n.x,n.y,n.z,8,16777215,{sp:3,up:5,s:.4,s1:1}):i==="hit"?ri(n.x,n.y+1.2,n.z,10,16769357,{sp:5}):i==="revive"?ri(n.x,n.y+1,n.z,24,4906624,{sp:4,g:-2}):i==="coin"?ri(n.x,n.y+.5,n.z,8,16765503,{sp:3,g:4}):i==="sfx"&&t[n.n]&&t[n.n]()}var P={phase:"lobby",t:0,wave:0,waves:5,map:null,dz:null,next:null,picked:!1,players:[],haz:[],env:{},wrecked:[],coins:[],star:null,fx:[],msgs:[],hid:0,dzT:0,dzDur:30,last:null,round:0},up=["Rex","Luna","Max","Pip","Zoe","Bolt"],pn=Math.random;function gu(){return{water:null,shake:0,rain:0,snow:0,ash:0,hail:0,wind:0,cold:0}}function br(n){return 100+25*((n&&n.hp)|0)}function xo(n){return Object.assign({id:0,pid:null,name:"Player",cpu:!1,look:{},x:0,y:.3,z:0,yaw:0,vy:0,vx:0,vz:0,kx:0,kz:0,hp:100,max:100,st:"ok",koT:0,inv:0,an:"idle",sp:0,sh:0,shUses:0,fuel:2.5,upg:{},waveKO:!1,rev:0,tpN:0,grounded:!0,coinsWave:0,revives:0,kos:0,ai:{}},n)}function bl(n,e,t,i,s){if(n.st==="ko"||n.st==="float"){n.an=n.st==="ko"?"ko":"float";return}let r=n.upg||{},o=s.water!=null?s.water:i.sea!=null?i.sea:-99,a=o>n.y+.9&&n.y>-22,l=6.2*(1+.15*(r.speed|0))*(a?.55:1),c=e.x*l,u=e.z*l,h=Math.min(1,t*(n.grounded||a?12:4));if(n.vx+=(c-n.vx)*h,n.vz+=(u-n.vz)*h,Math.hypot(e.x,e.z)>.1){let m=Math.atan2(e.x,e.z)-n.yaw;for(;m>Math.PI;)m-=6.283;for(;m<-Math.PI;)m+=6.283;n.yaw+=m*Math.min(1,t*14)}e.jump&&(n.grounded||a)&&(n.vy=a?6:8.6,n.grounded=!1,n.jumped=!0),e.jet&&r.jetpack&&n.fuel>0?(n.vy=Math.min(n.vy+46*t,7.5),n.fuel-=t,n.jetOn=!0):n.jetOn=!1,n.grounded&&!e.jet&&(n.fuel=Math.min(2.5,n.fuel+t*.6)),n.vy-=24*t,a&&(n.vy+=(o-.95-n.y)*30*t,n.vy*=Math.exp(-3*t)),n.x+=(n.vx+n.kx)*t,n.z+=(n.vz+n.kz)*t,n.y+=n.vy*t;let f=Math.exp(-2.5*t);n.kx*=f,n.kz*=f,ll(i,n,.4,1.6);let p=Tn(i,n.x,n.z,n.y);if(n.y<=p?(n.vy<-26&&!n.cpu&&(n.hardLand=!0),n.y=p,n.vy=0,n.grounded=!0):n.grounded=n.y-p<.05,n.y<-50||n.y<-60&&n.y>-22){let g=i.spawns[0];n.x=g[0],n.z=g[1],n.y=2,n.vy=0}n.sp=Math.hypot(n.vx,n.vz)/6.2;let x=Kt(i,n);n.an=a?"swim":n.grounded?n.sp>.15?"run":x.table&&P.dz==="quake"&&P.phase!=="calm"?"cover":(P.phase==="warn"&&!n.cpu&&x.out,"idle"):"jump",n.an==="idle"&&P.phase==="active"&&x.out&&n.cpu&&pn()<.002&&(n.an="panic")}function xu(n,e){let t=hl(e,n.x,n.y,n.z);return t?(n.x=t.to.x,n.y=t.to.y+.05,n.z=t.to.z,n.vy=0,n.vx=n.vz=0,t.kind==="down"&&(n.roomBase=t.b.baseY),t):null}var Qt={W:null,scene:null,hooks:{}};function vu(n,e,t,i,s){Qt.W=n,Qt.scene=e,Object.assign(P,{phase:"calm",t:14,wave:0,waves:s||5,map:t,dz:null,next:null,picked:!1,haz:[],env:gu(),wrecked:[],fx:[],msgs:[],hid:0,last:null,round:(P.round||0)+1,coinBank:{}}),n.buildings.forEach(o=>gs(n,o)),P.players=[],i.forEach((o,a)=>P.players.push(xo({id:a,pid:o.pid,name:o.name,look:o.look,upg:o.upg||{},cpu:!1})));let r=0;for(;P.players.length<4;){let o=P.players.length;P.players.push(xo({id:o,name:up[(r+P.round)%up.length],cpu:!0,look:x_(r),upg:{hp:1}})),r++}P.players.forEach((o,a)=>{let l=n.spawns[a%n.spawns.length];o.x=l[0],o.z=l[1],o.y=Tn(n,o.x,o.z,50),o.max=br(o.upg),o.hp=o.max,o.yaw=Math.atan2(-o.x,-o.z)}),P.next=_l(n,null),v_(n),Ms("*","Round start! Explore and grab coins before the first disaster.")}function x_(n){let e=[15680580,2278750,16096779,11032055,1357990,15485081],t=["cowboy","beanie","party","chef","dino","cap"],i=[14723449,16173472,9067067,12155471,16767416];return{shirt:e[n%6],pants:[1981066,4144966,417606,8138002][n%4],skin:i[n%5],hair:[1118481,7028254,13934615,3810582][n%4],hat:t[n%6],hatColor:[3900150,16436245,15680580,2278750][n%4]}}function v_(n){let e=n.coinSpots;P.coins=e.map((r,o)=>({i:o,x:r.x,z:r.z,y:r.y!=null?r.y+.9:Tn(n,r.x,r.z,50)+.9,on:!1}));let t=Math.min(P.coins.length,26);P.coins.map((r,o)=>o).sort(()=>pn()-.5).slice(0,t).forEach(r=>P.coins[r].on=!0),P.coins.forEach(r=>{(n.coinSpots[r.i].under||n.coinSpots[r.i].y!=null)&&(r.on=!0)});let s=e[pn()*e.length|0];P.star={x:s.x,z:s.z,y:(s.y!=null?s.y:Tn(n,s.x,s.z,50))+1.2,on:!0}}function Ms(n,e,t){P.msgs.push({pid:n,text:e,coins:t||0,id:P.msgN=(P.msgN||0)+1})}function Mr(n,e,t){n.cpu||(n.coinsWave+=e,Ms(n.pid,t,e))}function fp(n){return P.phase!=="calm"||!Ut[n]?!1:(P.next=n,P.picked=!0,!0)}var go={k:1,hit(n,e,t,i){if(n.st!=="ok"||n.inv>0)return;if(n.sh>0){e>=5&&P.fx.push({k:"sfx",n:"shield"});return}let s=[0,.2,.35,.45][n.upg.armor|0]||0,r=e*(1-s);if(n.upg.umbrella&&(t==="hail"||t==="boom"||t==="bonk")&&Kt(Qt.W,n).out&&(r*=t==="hail"?0:.5),n.hp-=r,e>=5){if(P.fx.push({k:"hit",x:n.x,y:n.y,z:n.z,pid:n.pid,id:n.id}),i&&i.x!=null){let o=n.x-i.x,a=n.z-i.z,l=Math.hypot(o,a)||1;n.kx+=o/l*7,n.kz+=a/l*7,n.vy=Math.max(n.vy,5)}n.hurtT=.4}n.hp<=0&&y_(n,t)},wreck(n){xr(Qt.W,Qt.scene,n)&&(P.wrecked.push(n.id),P.fx.push({k:"wreck",b:n.id}),P.players.forEach(e=>{e.st==="ok"&&e.y>-22&&Math.abs(e.x-n.x)<n.w/2&&Math.abs(e.z-n.z)<n.d/2&&e.y<n.baseY+n.h+1&&go.hit(e,25,"bonk",{x:n.x,z:n.z})}))},tp(n){n.tpN++},shielded:n=>n.sh>0,event(n,e){e==="beamed"&&(Ms(n.pid,"\u{1F6F8} BEAMED UP! Wheee!"),n.beamed=!0)}};function y_(n,e){n.hp=0,n.st="ko",n.koT=7,n.waveKO=!0,n.rev=0,n.kos++,n.vx=n.vz=0,P.fx.push({k:"sfx",n:"ko",pid:n.pid}),Ms(n.pid,n.cpu?null:"\u{1F4AB} Knocked out! A friend can help you up, or wait a moment."),n.cpu||Ms("*",null)}function __(n){let e=P.phase==="active"||P.phase==="warn"?Ut[P.dz]:null,t=null;if(e){let i=e.targets(Qt.W,P).filter(s=>!(s.b&&s.b.wrecked));i.length&&(t=i.reduce((s,r)=>Math.hypot(s.x-n.x,s.z-n.z)<Math.hypot(r.x-n.x,r.z-n.z)?s:r))}if(t&&t.under&&t.pad)n.x=t.pad.to.x+(pn()-.5),n.y=t.pad.to.y,n.z=t.pad.to.z+(pn()-.5),n.roomBase=t.b.baseY;else if(t&&t.kind==="pad"&&t.pad)n.x=t.pad.to.x,n.y=t.pad.to.y,n.z=t.pad.to.z;else if(t)n.x=t.x+(pn()-.5),n.y=t.y+.3,n.z=t.z+(pn()-.5);else{let i=Qt.W.spawns[n.id%4];n.x=i[0],n.z=i[1],n.y=Tn(Qt.W,n.x,n.z,50)}n.st="ok",n.hp=Math.round(n.max*.6),n.inv=3,n.vy=0,n.kx=n.kz=0,n.tpN++,Ms(n.pid,n.cpu?null:"\u{1F681} A rescue drone dropped you somewhere safer!")}function dp(n,e,t){if(P.env.shake=Math.max(0,(P.env.shake||0)-n*1.2),!(P.phase==="lobby"||P.phase==="results")){if(P.t-=n,go.k=1+.1*Math.max(0,P.wave-1),P.phase==="calm"&&P.t<=0?(P.wave++,P.dz=P.next||_l(e,P.last),P.phase="warn",P.t=7,P.haz=[],P.players.forEach(i=>{i.waveKO=!1,i.coinsWave=0,i.shUses=0,i.ai.tgt=null,i.ai.react=.6+pn()*2.2}),P.fx.push({k:"sfx",n:"siren"})):P.phase==="warn"&&P.t<=0?(P.phase="active",P.dzDur=Ut[P.dz].dur,P.t=P.dzDur,P.dzT=0,P.env=Object.assign(gu(),{shake:P.env.shake}),Ut[P.dz].start(P,e,go)):P.phase==="active"?(P.dzT+=n,Ut[P.dz].tick(P,e,n,go),P.t<=0&&M_(e)):P.phase==="calm"&&P.env.water!=null&&(P.env.water+=((P.env.waterBase||-1)-P.env.water)*n*.6),P.phase==="active"){for(let i of P.haz)i.t+=n,i.t>=i.T&&!i.done&&(i.done=!0,Ut[P.dz].impact&&Ut[P.dz].impact(i,P,e,go));P.haz=P.haz.filter(i=>!i.done)}else P.haz=[];for(let i of P.players){if(i.inv>0&&(i.inv-=n),i.sh>0&&(i.sh-=n),i.hurtT>0&&(i.hurtT-=n),i.st==="ko"){i.koT-=n;let s=P.players.find(r=>r!==i&&r.st==="ok"&&Math.hypot(r.x-i.x,r.z-i.z)<2.2&&Math.abs(r.y-i.y)<1.5);s?(i.rev+=n,i.rev>1.6&&(i.st="ok",i.hp=Math.round(i.max*.5),i.inv=2.5,P.fx.push({k:"revive",x:i.x,y:i.y,z:i.z}),P.fx.push({k:"sfx",n:"win"}),s.revives++,Mr(s,15,"\u{1F91D} You helped "+i.name+" up! +15"),s.cpu||(s.helped=(s.helped||0)+1),Ms(i.pid,i.cpu?null:"\u{1F91D} "+s.name+" helped you up!"))):i.rev=Math.max(0,i.rev-n),i.koT<=0&&__(i);continue}if(i.st==="ok"){let s=i.upg.regen|0;s&&i.hp<i.max&&(i.hp=Math.min(i.max,i.hp+s*n)),P.phase==="calm"&&(i.hp=Math.min(i.max,i.hp+6*n))}if(i.cpu){let s=b_(i,n,e);bl(i,s,n,e,P.env),s.pad&&xu(i,e)}else t&&t[i.id];if(i.st==="ok"){let s=i.upg.magnet?7:1.3;for(let r of P.coins){if(!r.on)continue;let o=Math.hypot(r.x-i.x,r.z-i.z);Math.abs(r.y-.9-i.y)<2.2&&o<s&&(o<1.3?(r.on=!1,P.fx.push({k:"coin",x:r.x,y:r.y,z:r.z,pid:i.pid}),i.cpu||(Mr(i,5,null),P.fx.push({k:"sfx",n:"coin",pid:i.pid}))):i.upg.magnet&&(r.x+=(i.x-r.x)*n*4,r.z+=(i.z-r.z)*n*4))}P.star&&P.star.on&&Math.hypot(P.star.x-i.x,P.star.z-i.z)<1.5&&Math.abs(P.star.y-1.2-i.y)<2.2&&(P.star.on=!1,P.fx.push({k:"coin",x:P.star.x,y:P.star.y,z:P.star.z}),i.cpu||(Mr(i,25,"\u2B50 Lucky star! +25"),P.fx.push({k:"sfx",n:"cash",pid:i.pid})))}}}}function M_(n){let e=P.dz;if(P.last=e,P.players.forEach(r=>{r.st==="float"&&(r.st="ok",r.y=Tn(n,r.x,r.z,50)),!r.cpu&&(r.waveKO?Mr(r,8,"\u{1F4AA} Good try! +8"):(Mr(r,20+5*P.wave,"\u2705 Survived the "+Ei(e,n).toLowerCase()+"! +"+(20+5*P.wave)),r.survivedIds=r.survivedIds||{},r.survivedIds[e]=1),r.stats={id:e,ko:r.waveKO,under:r.y<-22,high:r.y>3.6,beamed:r.beamed,helped:r.helped||0,map:n.id})}),Qt.hooks.waveEnd&&Qt.hooks.waveEnd(e),P.haz=[],P.wave>=P.waves){P.phase="results",P.t=0,P.players.forEach(r=>{r.cpu||Mr(r,40,"\u{1F3C1} Round complete! +40")}),Qt.hooks.roundEnd&&Qt.hooks.roundEnd();return}P.phase="calm",P.t=11,P.picked=!1,P.next=_l(n,e);let t=P.env.water,i=P.env.waterBase;P.env=gu(),t!=null&&(P.env.water=t,P.env.waterBase=i),P.coins.forEach(r=>{!r.on&&pn()<.5&&(r.on=!0)});let s=n.coinSpots[pn()*n.coinSpots.length|0];P.star={x:s.x,z:s.z,y:(s.y!=null?s.y:Tn(n,s.x,s.z,50))+1.2,on:!0}}function b_(n,e,t){let i=n.ai,s={x:0,z:0,jump:!1,pad:!1},r=P.phase,o=n.y<-22,a=null;if(r==="calm"||r==="results")if(i.tgt=null,o){if(i.upT=(i.upT||1+pn()*3)-e,i.upT<=0){i.upT=0;let l=t.pads.find(c=>c.kind==="up"&&ho(t,n.x,n.z)===c.room);l&&(a={x:l.x,z:l.z},Math.hypot(l.x-n.x,l.z-n.z)<.9&&(s.pad=!0))}}else if(n.y>3&&t.buildings.some(l=>l.elevator&&Math.abs(n.x-l.x)<l.w/2&&Math.abs(n.z-l.z)<l.d/2)){let l=t.pads.find(c=>c.kind==="elevdown"&&Math.abs(c.y-n.y)<1.5&&Math.hypot(c.x-n.x,c.z-n.z)<15);l&&(a=l,Math.hypot(l.x-n.x,l.z-n.z)<.9&&(s.pad=!0))}else{let l=P.players.find(c=>c.st==="ko"&&Math.hypot(c.x-n.x,c.z-n.z)<14&&Math.abs(c.y-n.y)<2);if(l)a=l;else{let c=null,u=22;for(let h of P.coins)if(h.on&&Math.abs(h.y-.9-n.y)<1.5){let d=Math.hypot(h.x-n.x,h.z-n.z);d<u&&(u=d,c=h)}a=c||i.wander,(!a||Math.hypot(a.x-n.x,a.z-n.z)<1)&&(i.wander={x:n.x+(pn()-.5)*20,z:n.z+(pn()-.5)*20})}}else{let l=Ut[P.dz];i.react-=e;let c=Kt(t,n),u=l.safe(n,c,P,t);if(u&&u!=="maybe")i.tgt=null,i.safeT=(i.safeT||0)+e;else if(i.react<=0){(!i.tgt||i.tgt.b&&i.tgt.b.wrecked||i.retry<=0)&&(i.tgt=w_(n,l,t),i.wp=0,i.retry=14),i.retry-=e;let h=i.tgt;if(h){let d=[];h.b&&wi(t,n.x,n.y,n.z)!==h.b&&d.push(h.b.doorOut,h.b.doorIn),h.kind==="high"&&h.foot&&n.y<h.y-1&&d.push(h.foot),d.push(h),i.wp=Math.min(i.wp||0,d.length-1);let f=d[i.wp];for(;f&&Math.hypot(f.x-n.x,f.z-n.z)<.9&&i.wp<d.length-1;)i.wp++,f=d[i.wp];a=f,h.kind==="pad"&&Math.hypot(h.x-n.x,h.z-n.z)<.9&&(s.pad=!0,i.tgt=null)}}for(let h of P.haz){if(h.k==="beam"||h.k==="crack"||h.k==="collapse")continue;let d=Math.hypot(n.x-h.x,n.z-h.z);if(d<h.r+.6&&h.t>.3&&!(u&&u!=="maybe"&&h.k!=="junk")){let f=d||1;return s.x=(n.x-h.x)/f,s.z=(n.z-h.z)/f,i.dodge=.4,s}}}if(a){let l=a.x-n.x,c=a.z-n.z,u=Math.hypot(l,c);u>.4&&(s.x=l/u,s.z=c/u,u<2&&(s.x*=.6,s.z*=.6));let h=Math.hypot(n.x-(i.lx||0),n.z-(i.lz||0));if(i.lx=n.x,i.lz=n.z,u>1&&h<e*.8?i.stuck=(i.stuck||0)+e:i.stuck=Math.max(0,(i.stuck||0)-e),i.stuck>.8){i.side=i.side||(pn()<.5?1:-1);let d=-s.z*i.side,f=s.x*i.side;s.x=d,s.z=f,i.stuck>1.6&&(i.stuck=0,i.side=-i.side,s.jump=!0)}}return s}function w_(n,e,t){let i=e.targets(t,P).filter(o=>!(o.b&&o.b.wrecked));if(!i.length)return null;let s=null,r=1e9;for(let o of i){let a=Math.hypot(o.x-n.x,o.z-n.z)+(o.b?6:0)+pn()*8;o.kind==="high"&&o.foot&&(a+=6),a<r&&(r=a,s=o)}return s}function pp(n,e){if(P.phase!=="warn"&&P.phase!=="active")return null;let i=Ut[P.dz].targets(e,P).filter(o=>!(o.b&&o.b.wrecked)),s=null,r=1e9;for(let o of i){let a=Math.hypot(o.x-n.x,o.z-n.z)+Math.abs(o.y-n.y)*.5;a<r&&(r=a,s=o)}return s}var Xe={mx:0,mz:0,yaw:.6,pitch:.62,dist:11.5,jumpQ:!1,actQ:!1,shieldQ:!1,jet:!1,enabled:!1,joy:null,keys:{}},Ti=new Map,vo=null,yo=null,_o=null;function mp(n){return n&&n.closest&&n.closest("button, .panel, .hudbtn, input, .card, .noTouch")}function xp(){return document.getElementById("joy")}function gp(n,e,t,i){let s=xp();if(!s)return;s.style.display="block",s.style.left=n-60+"px",s.style.top=e-60+"px";let r=s.firstChild;r&&(r.style.transform="translate("+t+"px,"+i+"px)")}function S_(){let n=xp();n&&(n.style.display="none")}function vp(){let n={passive:!1};window.addEventListener("touchstart",i=>{if(Xe.enabled){for(let s of i.changedTouches)mp(s.target)||(i.preventDefault(),s.clientX<innerWidth*.45&&s.clientY>innerHeight*.35&&vo===null?(vo=s.identifier,yo={x:s.clientX,y:s.clientY},gp(s.clientX,s.clientY,0,0)):Ti.set(s.identifier,{x:s.clientX,y:s.clientY}));if(Ti.size>=2){let s=[...Ti.values()];_o={d:Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),dist:Xe.dist}}}},n),window.addEventListener("touchmove",i=>{if(Xe.enabled){for(let s of i.changedTouches){if(s.identifier===vo){i.preventDefault();let o=s.clientX-yo.x,a=s.clientY-yo.y,l=Math.hypot(o,a),c=55;l>c&&(o*=c/l,a*=c/l),Xe.mx=o/c,Xe.mz=a/c,gp(yo.x,yo.y,o,a);continue}let r=Ti.get(s.identifier);r&&(i.preventDefault(),Ti.size===1&&(Xe.yaw-=(s.clientX-r.x)*.008,Xe.pitch=Math.max(.08,Math.min(1.35,Xe.pitch+(s.clientY-r.y)*.006))),r.x=s.clientX,r.y=s.clientY)}if(Ti.size>=2&&_o){let s=[...Ti.values()],r=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);Xe.dist=Math.max(3.5,Math.min(22,_o.dist*_o.d/Math.max(20,r)))}}},n);let e=i=>{for(let s of i.changedTouches)s.identifier===vo&&(vo=null,Xe.mx=0,Xe.mz=0,S_()),Ti.delete(s.identifier);Ti.size<2&&(_o=null)};window.addEventListener("touchend",e),window.addEventListener("touchcancel",e);let t=null;window.addEventListener("mousedown",i=>{!Xe.enabled||mp(i.target)||(t={x:i.clientX,y:i.clientY})}),window.addEventListener("mousemove",i=>{t&&(Xe.yaw-=(i.clientX-t.x)*.006,Xe.pitch=Math.max(.08,Math.min(1.35,Xe.pitch+(i.clientY-t.y)*.005)),t={x:i.clientX,y:i.clientY})}),window.addEventListener("mouseup",()=>t=null),window.addEventListener("wheel",i=>{Xe.enabled&&(Xe.dist=Math.max(3.5,Math.min(22,Xe.dist*(i.deltaY>0?1.1:.9))))},{passive:!0}),window.addEventListener("keydown",i=>{i.target&&i.target.tagName==="INPUT"||(Xe.keys[i.code]=!0,i.code==="Space"&&(Xe.jumpQ=!0,i.preventDefault()),i.code==="KeyE"&&(Xe.actQ=!0),i.code==="KeyQ"&&(Xe.shieldQ=!0),i.code==="KeyF"&&(Xe.jet=!0))}),window.addEventListener("keyup",i=>{Xe.keys[i.code]=!1,i.code==="KeyF"&&(Xe.jet=!1)})}function yp(){let n=Xe.mx,e=Xe.mz,t=Xe.keys;(t.KeyW||t.ArrowUp)&&(e-=1),(t.KeyS||t.ArrowDown)&&(e+=1),(t.KeyA||t.ArrowLeft)&&(n-=1),(t.KeyD||t.ArrowRight)&&(n+=1);let i=Math.hypot(n,e);return i>1&&(n/=i,e/=i),{x:n,z:e}}var ut=null,oi=null,wr=!0,_p={};function bs(){if(ut){ut.state==="suspended"&&ut.resume();return}try{ut=new(window.AudioContext||window.webkitAudioContext),oi=ut.createGain(),oi.gain.value=.5,oi.connect(ut.destination)}catch{ut=null}}function yu(n){wr=n,oi&&(oi.gain.value=n?.5:0)}function Mo(){if(Mo.b)return Mo.b;let n=ut.sampleRate*2,e=ut.createBuffer(1,n,ut.sampleRate),t=e.getChannelData(0);for(let i=0;i<n;i++)t[i]=Math.random()*2-1;return Mo.b=e}function _u(n,e,t,i,s){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(s,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+t+i)}function en(n,e,t,i,s=.3,r=0){if(!ut||!wr)return;let o=ut.currentTime+r,a=ut.createOscillator(),l=ut.createGain();a.type=n,a.frequency.setValueAtTime(e,o),t&&a.frequency.exponentialRampToValueAtTime(t,o+i),_u(l,o,.01,i,s),a.connect(l),l.connect(oi),a.start(o),a.stop(o+i+.05)}function ji(n,e,t=.4,i=1,s="lowpass",r=0,o){if(!ut||!wr)return;let a=ut.currentTime+r,l=ut.createBufferSource(),c=ut.createBiquadFilter(),u=ut.createGain();l.buffer=Mo(),c.type=s,c.frequency.setValueAtTime(e,a),o&&c.frequency.exponentialRampToValueAtTime(o,a+n),c.Q.value=i,_u(u,a,.01,n,t),l.connect(c),c.connect(u),u.connect(oi),l.start(a),l.stop(a+n+.1)}var yt={coin:()=>{en("square",988,0,.08,.12),en("square",1319,0,.18,.12,.07)},cash:()=>{[0,.06,.12].forEach((n,e)=>en("triangle",1200+e*300,0,.12,.2,n)),ji(.25,6e3,.12,1,"highpass",.15),en("sine",2093,0,.4,.15,.2)},jump:()=>en("sine",380,760,.16,.18),click:()=>en("triangle",660,0,.06,.15),hurt:()=>{en("sawtooth",300,120,.25,.2)},ko:()=>{en("triangle",900,200,.5,.25),[0,.12,.24].forEach(n=>en("sine",1500,0,.08,.1,.5+n))},boom:(n=1)=>{ji(1.2*n,900,.7*n,.7,"lowpass",0,60),en("sine",120,35,.8,.5*n)},thunder:()=>{ji(.08,8e3,.5,.5,"highpass"),ji(2.2,700,.6,.5,"lowpass",.05,80)},roar:()=>{if(!ut||!wr)return;let n=ut.currentTime,e=ut.createOscillator(),t=ut.createOscillator(),i=ut.createBiquadFilter(),s=ut.createGain();e.type="sawtooth",t.type="square",e.frequency.setValueAtTime(140,n),e.frequency.linearRampToValueAtTime(95,n+1.6),t.frequency.setValueAtTime(71,n),t.frequency.linearRampToValueAtTime(48,n+1.6),i.type="bandpass",i.frequency.setValueAtTime(600,n),i.frequency.linearRampToValueAtTime(300,n+1.6),i.Q.value=1.5,_u(s,n,.15,1.6,.5),e.connect(i),t.connect(i),i.connect(s),s.connect(oi),e.start(n),t.start(n),e.stop(n+1.9),t.stop(n+1.9),ji(1.6,900,.25,2,"bandpass")},beam:()=>{en("sawtooth",220,880,1,.18),ji(1,3e3,.15,3,"bandpass")},zap:()=>{en("square",1800,200,.3,.15)},siren:()=>{if(!ut||!wr)return;let n=ut.currentTime,e=ut.createOscillator(),t=ut.createGain();e.type="triangle";for(let i=0;i<3;i++)e.frequency.setValueAtTime(520,n+i*1.1),e.frequency.linearRampToValueAtTime(980,n+i*1.1+.55),e.frequency.linearRampToValueAtTime(520,n+i*1.1+1.1);t.gain.setValueAtTime(1e-4,n),t.gain.exponentialRampToValueAtTime(.16,n+.1),t.gain.setValueAtTime(.16,n+3.1),t.gain.exponentialRampToValueAtTime(1e-4,n+3.3),e.connect(t),t.connect(oi),e.start(n),e.stop(n+3.4)},win:()=>[523,659,784,1047].forEach((n,e)=>en("triangle",n,0,.25,.2,e*.11)),splash:()=>ji(.6,1500,.35,.8,"lowpass",0,300),whoosh:()=>ji(.5,400,.3,1,"bandpass",0,2e3),pad:()=>{en("sine",523,1047,.25,.18)},ufo:()=>{en("sine",300,900,.6,.12),en("sine",900,300,.6,.12,.6)},shield:()=>{en("sine",400,1200,.4,.2)},achieve:()=>[784,988,1175,1568].forEach((n,e)=>en("square",n,0,.16,.12,e*.09))};function bo(n,e){if(!ut)return;let t=_p[n];if(!t){let i=ut.createBufferSource(),s=ut.createBiquadFilter(),r=ut.createGain();i.buffer=Mo(),i.loop=!0,s.type=n==="rain"?"highpass":n==="rumble"?"lowpass":"bandpass",s.frequency.value=n==="rain"?2500:n==="rumble"?120:500,s.Q.value=.7,r.gain.value=0,i.connect(s),s.connect(r),r.connect(oi),i.start(),t=_p[n]={g:r,f:s}}t.g.gain.setTargetAtTime(wr?e:0,ut.currentTime,.4),n==="wind"&&t.f.frequency.setTargetAtTime(400+e*900,ut.currentTime,.5)}var Mp="grokDisaster.save.v1",Mu=[{id:"hp",icon:"\u2764\uFE0F",name:"Max Health",desc:"+25 max health per level",prices:[80,160,300,500],kind:"upg"},{id:"armor",icon:"\u26D1\uFE0F",name:"Hard Hat & Vest",desc:"Take less damage (-20% / -35% / -45%)",prices:[150,350,600],kind:"upg"},{id:"regen",icon:"\u{1F49A}",name:"Healing Snacks",desc:"Heal slowly over time (+1 / +2 / +3 HP a second)",prices:[120,250,450],kind:"upg"},{id:"speed",icon:"\u{1F45F}",name:"Speed Boots",desc:"Run faster (+15% / +30%)",prices:[150,350],kind:"upg"},{id:"umbrella",icon:"\u2602\uFE0F",name:"Mega Umbrella",desc:"Blocks hail, ash and half of falling junk while outside",prices:[120],kind:"upg"},{id:"shield",icon:"\u{1FAE7}",name:"Bubble Shield",desc:"Tap \u{1FAE7} for 5 seconds of total safety (once per wave, twice at Lv2)",prices:[250,500],kind:"upg"},{id:"jetpack",icon:"\u{1F680}",name:"Jetpack",desc:"Hold \u{1F680} to fly up onto roofs and high ground",prices:[400],kind:"upg"},{id:"magnet",icon:"\u{1F9F2}",name:"Coin Magnet",desc:"Pull in coins from far away",prices:[200],kind:"upg"}],bu=[{id:"cap",name:"Ball Cap",price:0},{id:"beanie",name:"Beanie",price:60},{id:"party",name:"Party Hat",price:80},{id:"cowboy",name:"Cowboy Hat",price:120},{id:"chef",name:"Chef Hat",price:120},{id:"dino",name:"Dino Hood",price:200},{id:"astro",name:"Space Helmet",price:250},{id:"crown",name:"Golden Crown",price:400},{id:"none",name:"No Hat",price:0}],wu=[3900150,15680580,2278750,16096779,11032055,15485081,1357990,16347926,1120295,16777215],wl=[{id:"first",icon:"\u{1F31F}",name:"First Survivor",desc:"Survive your first disaster"},{id:"bunker",icon:"\u2622\uFE0F",name:"Bunker Buddy",desc:"Ride out a disaster in the nuclear bunker"},{id:"kaiju",icon:"\u{1F996}",name:"Kaiju Dodger",desc:"Survive ROARGON without getting knocked out"},{id:"allnine",icon:"\u{1F32A}\uFE0F",name:"Storm Chaser",desc:"Survive every type of disaster"},{id:"helper",icon:"\u{1F91D}",name:"Helper Hero",desc:"Help 5 knocked-out survivors back up"},{id:"rich",icon:"\u{1F4B0}",name:"Coin Collector",desc:"Earn 1,000 coins total"},{id:"perfect",icon:"\u{1F6E1}\uFE0F",name:"Untouchable",desc:"Finish a whole round without a knockout"},{id:"dry",icon:"\u{1F3E2}",name:"High & Dry",desc:"Survive a flood on high ground"},{id:"beamed",icon:"\u{1F6F8}",name:"Beamed Up",desc:"Get abducted by aliens (oops!)"},{id:"travel",icon:"\u{1F5FA}\uFE0F",name:"World Traveler",desc:"Play on all 4 maps"},{id:"picker",icon:"\u{1F3AF}",name:"Disaster Picker",desc:"Pay coins to choose a disaster"},{id:"cover",icon:"\u{1FA91}",name:"Drop, Cover, Hold On",desc:"Hide under a table during an earthquake"},{id:"rounds10",icon:"\u{1F3C6}",name:"Disaster Pro",desc:"Finish 10 rounds"}];function wo(){return{v:1,coins:150,name:"",look:{shirt:3900150,pants:3359061,skin:16173472,hair:3810582,hat:"cap",hatColor:15680580},upg:{},hats:["cap","none"],stats:{rounds:0,waves:0,kos:0,revives:0,earned:0,survived:{},maps:{},best:0,picks:0,coinsPicked:0},ach:{},opts:{gfx:"high",sound:!0},howto:!1}}var Ze={d:wo()};function bp(){try{let n=JSON.parse(localStorage.getItem(Mp)||"null");n&&n.v===1&&(Ze.d=Object.assign(wo(),n,{stats:Object.assign(wo().stats,n.stats||{}),look:Object.assign(wo().look,n.look||{}),opts:Object.assign(wo().opts,n.opts||{})}))}catch{}return Ze.d}function Ot(){try{localStorage.setItem(Mp,JSON.stringify(Ze.d))}catch{}}var yn=n=>Ze.d.upg[n]|0;function So(n,e){Ze.d.coins=Math.max(0,Ze.d.coins+n),n>0&&(Ze.d.stats.earned+=n),Ot()}function wp(n){return Ze.d.ach[n]?null:(Ze.d.ach[n]=Date.now(),Ot(),wl.find(e=>e.id===n))}function ws(){return{hp:yn("hp"),armor:yn("armor"),regen:yn("regen"),speed:yn("speed"),umbrella:yn("umbrella"),shield:yn("shield"),jetpack:yn("jetpack"),magnet:yn("magnet")}}var le={room:null,info:{},App:null},Ss=()=>window.GrokNet,E_=n=>document.getElementById(n);function Sr(n,e){let t=E_("onlineMsg");t&&(t.textContent=n,t.style.color=e?"#15803d":"#be123c"),le.lastStatus=n}le.init=function(n){le.App=n};le.myName=()=>Ze.d.name||"Survivor";le.lobby=function(){let n=le.App;if(le.room&&le.room.opened)return le.roomPanel();n.panel(`<h2>\u{1F91D} PLAY WITH FRIENDS</h2><p class="sub">Up to 3 survivors online. One friend hosts and shares the 5-letter code. CPU survivors fill the empty spots.</p>
  <h3>YOUR NAME</h3><input class="name" id="nmIn" maxlength="12" placeholder="Your name" value="${n.esc(Ze.d.name)}">
  <div class="btnrow"><button class="btn green" id="bHost">\u{1F3E0} HOST A GAME</button></div><h3>OR JOIN WITH A CODE</h3><input class="code" id="codeIn" maxlength="5" placeholder="ABCDE" autocomplete="off" autocapitalize="characters">
  <div class="btnrow"><button class="btn pink" id="bJoin">JOIN</button></div><p class="sub" id="onlineMsg" style="margin-top:10px"></p><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`,e=>{let t=()=>{let i=e.querySelector("#nmIn").value;Ze.d.name=Ss()?Ss().cleanName(i):i.slice(0,12),Ot()};e.querySelector("#bHost").onclick=()=>{t(),le.host()},e.querySelector("#bJoin").onclick=()=>{t();let i=Ss().normalizeCode(e.querySelector("#codeIn").value);if(!Ss().validCode(i))return Sr("Codes are 5 letters, like KDXPQ");le.join(i)}},{name:"lobby",onClose:()=>{le.room&&!le.room.opened&&le.leave()}})};le.roomPanel=function(){let n=le.App,e=le.room;if(!e)return;let t=e.players(),i=e.isHost;n.panel(`<h2>\u{1F91D} ROOM <span style="letter-spacing:4px;color:#7c3aed">${e.code}</span></h2><p class="sub">Friends join with code <b>${e.code}</b> (${t.length}/3)</p>
  ${t.map(s=>`<div class="item"><div class="ic">${s.slot===0?"\u{1F451}":"\u{1F642}"}</div><div class="grow"><b>${n.esc(le.info[s.pid]&&le.info[s.pid].name||s.name)}</b><small>${s.slot===0?"Host":"Player "+(s.slot+1)}${s.pid===e.pid?" (you)":""}</small></div></div>`).join("")}
  ${i?`<p class="sub">${t.length<2?"Waiting for a friend to join\u2026 (you can also start with CPUs)":"Everyone ready? Pick a map!"}</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button><button class="btn green" id="bStart">PICK MAP \u25B6</button></div>`:'<p class="sub">Waiting for the host to pick a map and start\u2026 \u{1F32A}\uFE0F</p><div class="btnrow"><button class="btn gray" id="bLeave">LEAVE</button></div>'}`,s=>{s.querySelector("#bLeave").onclick=()=>{le.leave(),n.hidePanels()};let r=s.querySelector("#bStart");r&&(r.onclick=()=>n.showMapPick(!0))},{name:"room"})};le.hello=function(){le.room&&le.room.send({t:"hello",name:le.myName(),look:Ze.d.look,upg:ws()})};function Sp(n){le.room=n;let e=le.App;n.on("status",t=>Sr(t,!0)),n.on("open",()=>{Sr("Connected!",!0),yt.coin(),n.isHost?le.info[n.pid]={name:le.myName(),look:Ze.d.look,upg:ws()}:le.hello(),le.roomPanel(),e.toast(n.isHost?"Room "+n.code+" is open! \u{1F91D}":"Joined room "+n.code+"! \u{1F91D}")}),n.on("join",t=>{t.pid!==n.pid&&(e.toast("\u{1F44B} "+t.name+" joined!"),yt.coin()),e.panelName==="room"&&le.roomPanel()}),n.on("leave",t=>{e.toast(t.name+" left"),e.panelName==="room"&&le.roomPanel(),n.isHost&&e.mode==="host"&&P.players.forEach(i=>{i.pid===t.pid&&!i.cpu&&(i.cpu=!0,i.name=i.name+" (CPU)",i.ai={},e.toast("A CPU takes over for "+t.name))})}),n.on("message",(t,i)=>T_(t,i)),n.on("reconnecting",()=>e.toast("Lost the host - reconnecting\u2026")),n.on("error",t=>{Sr(t.title+": "+t.message);let i=e.mode==="guest"||e.mode==="host";le.room=null,i&&(e.toast(t.title+" - back to the menu"),e.quit())}),n.start()}le.host=function(n){Sr("Opening a room\u2026",!0),le.info={},Sp(Ss().createRoom({role:"host",code:n||void 0,name:le.myName(),color:"#3ff0ff",max:3,rejoin:!!n}))};le.join=function(n){Sr("Joining "+n+"\u2026",!0),Sp(Ss().createRoom({role:"join",code:n,name:le.myName(),color:"#ff4fd8",rejoin:!!le.fromHub}))};le.fromParams=function(n){le.fromHub=!0,n.name&&(Ze.d.name=n.name,Ot()),le.lobby(),n.mode==="host"?le.host(n.code):le.join(n.code)};le.leave=function(){if(le.room){try{le.room.leave()}catch{}le.room=null}};le.send=n=>{le.room&&le.room.send(n)};le.broadcast=n=>{le.room&&le.room.isHost&&le.room.broadcast(n)};le.sendTo=(n,e)=>{le.room&&le.room.isHost&&le.room.sendTo(n,e)};le.humans=function(){return le.room.players().map(n=>{let e=le.info[n.pid]||{};return{pid:n.pid,name:e.name||n.name,look:e.look||{},upg:e.upg||{}}})};le.start=function(n){!le.room||!le.room.isHost||le.App.startHosted(n,le.humans())};var Su=[],Eu=[];le.queue=function(n,e){Su.push(...n),Eu.push(...e)};var ln=n=>Math.round(n*100)/100;le.snapshot=function(){let n=P.players.map(i=>[i.id,ln(i.x),ln(i.y),ln(i.z),ln(i.yaw),i.an,Math.round(i.hp),i.max,i.st,ln(i.sh),ln(i.inv),i.tpN,ln(i.sp||0),i.jetOn?1:0,ln(i.koT||0),ln(i.rev||0),i.cpu?1:0]),e=P.haz.map(i=>({i:i.i,k:i.k,x:ln(i.x),z:ln(i.z),y:ln(i.y||0),r:i.r,T:i.T,t:ln(i.t),x1:i.x1!=null?ln(i.x1):void 0,z1:i.z1!=null?ln(i.z1):void 0,b:i.b})),t=P.coins.map(i=>i.on?1:0).join("");le.room.broadcast({t:"s",ph:P.phase,tm:ln(P.t),wv:P.wave,wvs:P.waves,dz:P.dz,nx:P.next,pk:P.picked,dd:P.dzDur,pl:n,hz:e,env:P.env,wr:P.wrecked,co:t,st:P.star,fx:Su,ms:Eu}),Su=[],Eu=[]};function T_(n,e){let t=le.App,i=le.room;if(!(!n||typeof n!="object")){if(i.isHost){if(n.t==="hello"){le.info[e]={name:Ss().cleanName(n.name),look:n.look&&typeof n.look=="object"?n.look:{},upg:n.upg&&typeof n.upg=="object"?n.upg:{}},t.panelName==="room"&&le.roomPanel();let s=P.players.find(r=>r.pid===e);s&&(s.look=le.info[e].look,s.upg=le.info[e].upg,s.max=br(s.upg))}else if(n.t==="pose"&&t.mode==="host"){let s=P.players.find(r=>r.pid===e&&!r.cpu);s&&s.st==="ok"&&(s.x=+n.x||0,s.y=+n.y||0,s.z=+n.z||0,s.yaw=+n.yaw||0,s.an=String(n.an||"idle").slice(0,8),s.sp=+n.sp||0,s.jetOn=!!n.jet)}else if(n.t==="shield"&&t.mode==="host"){let s=P.players.find(o=>o.pid===e),r=(s&&s.upg&&s.upg.shield)|0;s&&s.st==="ok"&&s.shUses<r&&(P.phase==="active"||P.phase==="warn")&&(s.shUses++,s.sh=5)}return}n.t==="start"?(t.hidePanels(),t.startGuest(n)):n.t==="s"&&t.mode==="guest"?A_(n):n.t==="wave"?t.onWaveStats(n.st):n.t==="end"&&t.onRoundEnd()}}function A_(n){let e=le.App,t=e.W;le.snaps=(le.snaps||0)+1,le.lastWr=n.wr,n.ph==="calm"&&P.phase==="results"&&e.hidePanels(),Object.assign(P,{phase:n.ph,t:n.tm,wave:n.wv,waves:n.wvs,dz:n.dz,next:n.nx,picked:n.pk,dzDur:n.dd,env:n.env||{},star:n.st});let i=new Map(P.haz.map(r=>[r.i,r]));P.haz=(n.hz||[]).map(r=>{let o=i.get(r.i);return o?(o.t=Math.max(o.t,r.t),o):r});for(let r of n.pl){let o=P.players.find(a=>a.id===r[0]);if(o&&([o.x,o.y,o.z,o.yaw,o.an,o.hp,o.max,o.st,o.sh,o.inv]=r.slice(1,11),o.sp=r[12],o.jetOn=!!r[13],o.koT=r[14],o.rev=r[15],o.cpu=!!r[16],e.me&&o.id===e.me.id)){let a=e.me;a.hp=o.hp,a.max=o.max,a.sh=o.sh,a.inv=o.inv,(o.st!=="ok"||r[11]!==e.tpN)&&(a.x=o.x,a.y=o.y,a.z=o.z,a.vy=0),a.st=o.st,e.tpN=r[11]}}let s=new Set(n.wr||[]);if(t.buildings.forEach(r=>{s.has(r.id)&&!r.wrecked?xr(t,t.root,r):!s.has(r.id)&&r.wrecked&&gs(t,r)}),n.co){P.coins.length!==n.co.length&&(P.coins=t.coinSpots.map((r,o)=>({i:o,x:r.x,z:r.z,y:(r.y!=null?r.y:t.terrain(r.x,r.z))+.9,on:!1})));for(let r=0;r<n.co.length;r++)P.coins[r].on=n.co[r]==="1"}n.fx&&n.fx.length&&e.handleFx(n.fx),n.ms&&n.ms.length&&e.handleMsgs(n.ms)}var ke=n=>document.getElementById(n),Cp=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Sl=new URLSearchParams(location.search),B=window.__dz={ready:!1,mode:"menu",W:null,S:P,G:V,I:Xe,me:null,myPid:"me",models:new Map,paused:!1,simSpeed:1};bp();Id(ke("c"));V.autoStep=!Sl.get("noauto");V.onStepDown=()=>{Ze.d.opts.gfx="low",Ot(),Rn("Graphics set to LOW for smoother play \u{1F3AE}")};(Ze.d.opts.gfx==="low"||Sl.get("gfx")==="low")&&oo("low");ep();vp();yu(Ze.d.opts.sound);function Es(n){if(B.W&&B.W.id===n)return B.W;B.W&&(V.scene.remove(B.W.root),B.W.root.traverse(t=>{t.geometry&&!t.geometry.userData.keep&&t.geometry.dispose()})),B.models.forEach(t=>V.scene.remove(t.root)),B.models.clear(),Ml(),vl();let e=jd(n,V.scene);return B.W=e,Qt.W=e,Qt.scene=e.root,ao(e.meta.mood,!0),op(e),Kd(e,V.scene,V.quality==="low"),e}function R_(n){let e=B.models.get(n.id),t=JSON.stringify(n.look)+(n.upg&&n.upg.jetpack?"j":"");return e&&e.key!==t&&(V.scene.remove(e.root),e=null),e||(e=ol(n.look),e.key=t,Od(e,n.upg&&n.upg.jetpack),e.root.position.set(n.x,n.y,n.z),V.scene.add(e.root),B.models.set(n.id,e)),e}function C_(n){let e=new Set;for(let t of P.players){let i=R_(t);e.add(t.id);let s=B.me&&t.id===B.me.id,r=s?B.me:t;if(s||B.mode!=="guest")i.root.position.set(r.x,r.y,r.z);else{let c=Math.min(1,n*12);i.root.position.x+=(t.x-i.root.position.x)*c,i.root.position.y+=(t.y-i.root.position.y)*c,i.root.position.z+=(t.z-i.root.position.z)*c}let o=r.yaw-i.root.rotation.y;for(;o>Math.PI;)o-=6.283;for(;o<-Math.PI;)o+=6.283;i.root.rotation.y+=o*Math.min(1,n*15);let a=t.st==="ko"?"ko":t.st==="float"?"float":r.an||"idle";al(i,a,n,r.sp||0,V.t+t.id),i.bubble.visible=t.sh>0,i.bubble.visible&&i.bubble.scale.setScalar(1+Math.sin(V.t*8)*.04),i.flames.visible=!!r.jetOn,r.jetOn&&Math.random()<.5&&Yt(i.root.position.x,i.root.position.y+.6,i.root.position.z,1,[16757575,16777215],{sp:.5,up:-3,s:.2,s1:.5,life:.4});let l=(P.dz==="blizzard"||P.dz==="lightning"||P.dz==="volcano")&&P.phase==="active";i.umbrella.visible=!!(t.upg&&t.upg.umbrella)&&l&&a!=="ko"&&a!=="swim",i.root.visible=!(t.inv>0&&t.st==="ok"&&Math.floor(V.t*12)%2===0)}B.models.forEach((t,i)=>{e.has(i)||(V.scene.remove(t.root),B.models.delete(i))})}var Ai=new kt;function P_(){let n=0;if(P.coins&&B.mode!=="menu")for(let e of P.coins)e.on&&(Ai.position.set(e.x,e.y+Math.sin(V.t*3+e.i)*.15,e.z),Ai.rotation.set(0,V.t*2.5+e.i,0),Ai.scale.setScalar(1),Ai.updateMatrix(),H.coins.setMatrixAt(n++,Ai.matrix));H.coins.count=n,H.coins.instanceMatrix.needsUpdate=!0,P.star&&P.star.on&&B.mode!=="menu"?(Ai.position.set(P.star.x,P.star.y+Math.sin(V.t*2)*.25,P.star.z),Ai.rotation.set(0,V.t*2,0),Ai.updateMatrix(),H.stars.setMatrixAt(0,Ai.matrix),H.stars.count=1,H.stars.instanceMatrix.needsUpdate=!0):H.stars.count=0}var _n=null,qt=new L,mt=new L;function I_(n){let e=B.W,t=B.me;if(B.cam){if(V.camera.position.set(B.cam.x,B.cam.y,B.cam.z),V.camera.lookAt(B.cam.lx,B.cam.ly,B.cam.lz),V.focus.set(B.cam.lx,0,B.cam.lz),t){let d=wi(e,t.x,t.y,t.z);d!==_n&&(_n&&(_n.upper.visible=!_n.wrecked),d&&B.cam.hide!==!1&&(d.upper.visible=!1),_n=d)}return}if(B.mode==="menu"||!t){let d=V.t*.06;mt.set(Math.cos(d)*52,30,Math.sin(d)*52),V.camera.position.lerp(mt,.05),V.camera.lookAt(0,2,0),V.focus.set(0,0,0),_n&&(_n.upper.visible=!_n.wrecked,_n=null);return}let i=t.y<-22,s=i?null:wi(e,t.x,t.y,t.z);s!==_n&&(_n&&(_n.upper.visible=!_n.wrecked),s&&(s.upper.visible=!1),_n=s);let r=Xe.dist,o=Xe.pitch;s&&(r=Math.min(r,8),o=Math.max(o,.95)),i&&(r=Math.max(7.5,Math.min(r,9)),o=Math.min(.85,Math.max(o,.6))),qt.set(t.x,t.y+1.4,t.z);let a=Math.sin(Xe.yaw)*Math.cos(o),l=Math.sin(o),c=Math.cos(Xe.yaw)*Math.cos(o);if(!s&&!i)for(let d=1.5;d<r;d+=.6){let f=qt.x+a*d,p=qt.y+l*d,x=qt.z+c*d;if(e.buildings.some(m=>!m.wrecked&&f>m.x-m.w/2-.2&&f<m.x+m.w/2+.2&&x>m.z-m.d/2-.2&&x<m.z+m.d/2+.2&&p<m.baseY+m.h+.6&&p>m.baseY-.5)){r=Math.max(2.2,d-.6);break}}if(i&&(r=Math.min(r,(-30+9.5-qt.y)/Math.max(.2,l))),mt.set(qt.x+a*r,qt.y+l*r,qt.z+c*r),i){let d=ho(e,t.x,t.z);if(d){let f=p=>{p.x=Math.max(d.x0+.7,Math.min(d.x1-.7,p.x)),p.z=Math.max(d.z0+.7,Math.min(d.z1-.7,p.z))};if(f(mt),Math.hypot(mt.x-qt.x,mt.z-qt.z)<3.5){let p=d.x1-d.x0>=d.z1-d.z0,x=(d.x0+d.x1)/2,g=(d.z0+d.z1)/2;p?(mt.x=qt.x+(qt.x<x?1:-1)*6.5,mt.z=qt.z+(qt.z<g?1:-1)*1.5):(mt.z=qt.z+(qt.z<g?1:-1)*6.5,mt.x=qt.x+(qt.x<x?1:-1)*1.5),mt.y=-30+5.8,f(mt)}mt.y=Math.max(-30+2.2,Math.min(-30+9.5,mt.y))}}else s&&(mt.x=Math.max(s.ix0+.5,Math.min(s.ix1-.5,mt.x)),mt.z=Math.max(s.iz0+.5,Math.min(s.iz1-.5,mt.z)),mt.y=Math.max(mt.y,t.y+3.2));let u=Tn(e,mt.x,mt.z,mt.y+2);!i&&mt.y<u+.6&&(mt.y=u+.6),!i&&H.water.visible&&mt.y<H.water.position.y+1.2&&(mt.y=H.water.position.y+1.2);let h=P.env&&P.env.shake||0;h>0&&(mt.x+=(Math.random()-.5)*h*.6,mt.y+=(Math.random()-.5)*h*.5,mt.z+=(Math.random()-.5)*h*.6),V.camera.position.lerp(mt,Math.min(1,n*14)),V.camera.lookAt(qt),V.focus.set(t.x,i?0:t.y,t.z)}function Ep(n){let e=B.me;if(!e)return;let t=yp(),i=Math.cos(Xe.yaw),s=Math.sin(Xe.yaw),r={x:t.x*i+t.z*s,z:-t.x*s+t.z*i,jump:Xe.jumpQ,jet:Xe.jet};if(Xe.jumpQ=!1,e.st==="ok"?(bl(e,r,n,B.W,P.env),e.jumped&&(e.jumped=!1,yt.jump())):bl(e,{x:0,z:0},n,B.W,P.env),Xe.actQ&&(Xe.actQ=!1,e.st==="ok")){let o=xu(e,B.W);o&&(yt.pad(),V_(),o.kind==="down"&&Rn("\u{1F526} You are in the "+o.room.name+". Safe from most disasters!"))}Xe.shieldQ&&(Xe.shieldQ=!1,D_())}function D_(){let n=B.me,e=yn("shield");if(!e||!n||n.st!=="ok")return;if(P.phase!=="active"&&P.phase!=="warn")return Rn("Save your bubble for a disaster! \u{1FAE7}");if(B.mode==="guest"){le.send({t:"shield"}),yt.shield();return}let t=P.players.find(i=>i.id===n.id);if(t.shUses>=e)return Rn("Bubble used up this wave");t.shUses++,t.sh=5,yt.shield()}B.startSolo=function(n){bs();let e=Es(n);vu(e,e.root,n,[{pid:"me",name:Ze.d.name||"You",look:Ze.d.look,upg:ws()}],+(Sl.get("waves")||5)),B.mode="solo",B.myPid="me",B.me=P.players[0],Cu()};B.startHosted=function(n,e){bs();let t=Es(n);vu(t,t.root,n,e,5),B.mode="host",B.myPid=le.room.pid,B.me=P.players.find(i=>i.pid===B.myPid),Cu(),le.broadcast({t:"start",map:n,players:P.players.map(i=>({id:i.id,pid:i.pid,name:i.name,cpu:i.cpu,look:i.look,upg:i.upg}))})};B.startGuest=function(n){bs();let e=Es(n.map);e.buildings.forEach(i=>gs(e,i)),Object.assign(P,{phase:"calm",t:14,wave:0,waves:5,map:n.map,haz:[],env:{},wrecked:[],coins:[],fx:[],msgs:[]}),P.players=n.players.map(i=>xo(i)),P.players.forEach(i=>{i.max=br(i.upg),i.hp=i.max;let s=e.spawns[i.id%4];i.x=s[0],i.z=s[1],i.y=.3}),B.mode="guest",B.myPid=le.room.pid;let t=P.players.find(i=>i.pid===B.myPid);B.me=xo(Object.assign({},t)),B.me.upg=ws(),B.lastMsg=0,B.wreckSeen=new Set,B.tpN=t.tpN,Cu()};function Cu(){let n=ke("toasts");n&&(n.innerHTML=""),vl(),Ml(),Ri(),ke("title").classList.add("hidden"),ke("hud").classList.remove("hidden"),Xe.enabled=!0,B.lastPhase=null,B.lastWave=0,B.waveCoins=0,B.roundCoins=0,B.roundKO=!1,B.roundSaved=!1,Ze.d.stats.maps[B.W.id]=1,Object.keys(Ze.d.stats.maps).length>=4&&An("travel"),Ot(),Ze.d.howto||(Ze.d.howto=!0,Ot(),Pu()),Up()}B.quit=function(){(B.mode==="host"||B.mode==="guest")&&le.leave(),B.mode="menu",B.me=null,P.phase="lobby",P.players=[],P.haz=[],P.env={},Xe.enabled=!1,B.W.buildings.forEach(n=>gs(B.W,n)),Ml(),vl(),L_(),ke("hud").classList.add("hidden"),Ri(),W_()};function L_(){["wind","rain","rumble"].forEach(n=>bo(n,0))}function Pp(n){for(let e of n)e.pid&&e.pid!==B.myPid&&e.k==="sfx"&&(e.n==="coin"||e.n==="cash"||e.n==="ko")||(hp(e,B.W,yt),e.k==="hit"&&e.pid===B.myPid&&(yt.hurt(),H_()))}function Ip(n){for(let e of n)e.pid!=="*"&&e.pid!==B.myPid||(e.coins&&e.pid===B.myPid&&(So(e.coins),B.roundCoins+=e.coins,G_()),e.text&&Rn(e.text,e.coins?"gold":""))}B.onWaveStats=function(n){if(!n)return;let e=Ze.d.stats;n.ko?(e.kos++,B.roundKO=!0):(e.waves++,e.survived[n.id]=(e.survived[n.id]||0)+1,An("first"),n.id==="kaiju"&&An("kaiju"),n.under&&B.W.id==="area51"&&B.me&&B.W.rooms.some(t=>t.kind==="bunker")&&An("bunker"),n.id==="flood"&&n.high&&An("dry"),_r.every(t=>e.survived[t])&&An("allnine")),n.beamed&&An("beamed"),n.helped&&(e.revives+=n.helped,e.revives>=5&&An("helper")),e.earned>=1e3&&An("rich"),Ot()};B.onRoundEnd=function(){let n=Ze.d.stats;n.rounds++,B.roundKO||An("perfect"),n.rounds>=10&&An("rounds10"),Ot(),setTimeout(Op,1200)};Qt.hooks.waveEnd=()=>{P.players.forEach(n=>{n.cpu||!n.stats||(n.pid===B.myPid?B.onWaveStats(n.stats):le.sendTo(n.pid,{t:"wave",st:n.stats}),n.helped=0,n.beamed=!1)})};Qt.hooks.roundEnd=()=>{B.onRoundEnd(),B.mode==="host"&&le.broadcast({t:"end"})};function An(n){let e=wp(n);e&&(yt.achieve(),Rn(e.icon+" Achievement: "+e.name+"!","ach"))}var Tp=performance.now(),Tu=0,Au=0;function Dp(n){requestAnimationFrame(Dp);let e=Math.min(.05,(n-Tp)/1e3);Tp=n,B.paused&&B.mode==="solo"&&(e=0),Lp(e),Dd(e)}function Lp(n){let e=B.W;if(B.mode==="solo"||B.mode==="host")Ep(n),dp(n*B.simSpeed,e),P.fx.length&&Pp(P.fx),P.msgs.length&&Ip(P.msgs),B.mode==="host"&&(le.queue(P.fx,P.msgs),Tu+=n,Tu>.1&&(Tu=0,le.snapshot())),P.fx=[],P.msgs=[];else if(B.mode==="guest"){Ep(n);for(let t of P.haz)t.t=Math.min(t.T,t.t+n);if(Au+=n,Au>.066){Au=0;let t=B.me;le.send({t:"pose",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),yaw:+t.yaw.toFixed(2),an:t.an,sp:+(t.sp||0).toFixed(2),jet:!!t.jetOn})}}e&&(np(),cp(P,e,n),ip(),rp(n,B.me?{x:B.me.x,y:Math.max(B.me.y,0),z:B.me.z}:{x:0,y:0,z:0},z_()),C_(n),P_(),Qd(n,e,P,P.players,V.t,V.camera),e.detail&&(e.detail.visible=V.quality==="high")),I_(n),N_(),B.mode!=="menu"&&(B_(n),O_())}var U_=0;function N_(){let n=B.W;if(!n||U_++%6)return;let e=B.me,t=e||{x:V.camera.position.x,y:0,z:V.camera.position.z},i=e&&e.y<-22;for(let s of n.buildings)s.inner&&(s.inner.visible=!!e&&!i&&Math.abs(t.x-s.x)<26+s.w/2&&Math.abs(t.z-s.z)<26+s.d/2);if(e){for(let s of n.fires)if((!s.b||!s.b.wrecked)&&Math.abs(s.x-e.x)<30&&Math.abs(s.z-e.z)<30){let r=(s.b,s.x),o=(s.b,s.z);Yt(s.fx!=null?s.fx:r,(s.y||0)+.5,s.fz!=null?s.fz:o,2,[16743168,16758531,16731392],{fire:1,sp:.3,up:2.2,s:.35,s1:.05,life:.7,spread:.6})}}for(let s of n.rooms)s.group.visible=!!i&&t.x>s.x0-3&&t.x<s.x1+3&&t.z>s.z0-3&&t.z<s.z1+3}function z_(){let n=P.env||{},e=P.phase==="active",t=B.me&&B.me.y<-22;return{rain:e&&!t&&n.rain||0,snow:e&&!t&&n.snow||0,ash:e&&!t&&n.ash||0,hail:e&&!t&&n.hail||0,wind:n.wind||0,groundY:B.me?Math.max(0,Tn(B.W,B.me.x,B.me.z,200)):0}}function O_(){let n=P.env||{},e=P.phase==="active",t=B.me&&B.me.y<-22,i=t?.3:1;bo("wind",e?Math.min(.5,(n.wind||0)*.05)*i:.02),bo("rain",e?(n.rain||0)*.25*i:0),bo("rumble",(n.shake||0)*.6)}function k_(){return P.phase==="active"||P.phase==="warn"&&P.dz?Ut[P.dz].mood:B.W.meta.mood}function F_(){let n=document.createElement("div");n.id="hud",n.className="hidden",n.innerHTML=`<div id="hpBox"><button id="menuBtn" class="hudbtn">\u2630</button><div class="hpbar"><i id="hpFill"></i><span id="hpTxt">100</span></div></div>
  <div id="coinBox" class="pill"><span class="coinIc">\u2605</span><span id="coinTxt">0</span></div>
  <div id="waveBox"><div class="wavePill" id="wavePill">WAVE 1/5</div><div class="timer"><i id="timerFill"></i></div><div id="banner" class="banner hidden"><div class="t" id="banT"></div><div class="w" id="banW"></div></div><div id="safeChip" class="safe hidden"></div></div>
  <div id="calmCard" class="hidden"></div>
  <div id="toasts"></div>
  <div id="koBox" class="ko hidden"><div>\u{1F4AB} KNOCKED OUT!<br><small id="koTxt" style="font-size:14px"></small></div></div>
  <div id="joyHint">\u{1F446} Drag here to move</div>
  <div id="ctrls"><div id="gadCol" style="display:flex;flex-direction:column;gap:10px;align-items:center"><button id="bJet" class="cbtn gad hudbtn hidden">\u{1F680}</button><button id="bShield" class="cbtn gad hudbtn hidden">\u{1FAE7}</button></div><div style="display:flex;flex-direction:column;gap:12px;align-items:center"><button id="bAct" class="cbtn act hudbtn hidden">ENTER</button><button id="bJump" class="cbtn jump hudbtn">JUMP</button></div></div>
  <div id="joy"><div></div></div><div id="tags"></div><div id="fade"></div>`,ke("ui").appendChild(n);let e=(i,s)=>{i.addEventListener("touchstart",r=>{r.preventDefault(),r.stopPropagation(),s()},{passive:!1}),i.addEventListener("mousedown",r=>{r.stopPropagation(),s()})};e(ke("bJump"),()=>{Xe.jumpQ=!0}),e(ke("bAct"),()=>{Xe.actQ=!0}),e(ke("bShield"),()=>{Xe.shieldQ=!0});let t=ke("bJet");t.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),Xe.jet=!0},{passive:!1}),t.addEventListener("touchend",()=>Xe.jet=!1),t.addEventListener("mousedown",i=>{i.stopPropagation(),Xe.jet=!0}),window.addEventListener("mouseup",()=>Xe.jet=!1),ke("menuBtn").addEventListener("click",Z_)}function Up(){ke("bShield").classList.toggle("hidden",!yn("shield")),ke("bJet").classList.toggle("hidden",!yn("jetpack"))}var Ap=-1;var Ru=new Map;function B_(n){let e=B.me,t=B.W;if(!e)return;let i=P.players.find(y=>y.id===e.id)||e;B.mode==="guest"&&(e.hp=i.hp,e.max=i.max,e.st=i.st,e.sh=i.sh,e.inv=i.inv);let s=Math.max(0,i.hp),r=i.max||100;ke("hpFill").style.width=100*s/r+"%",ke("hpFill").classList.toggle("low",s/r<.35),ke("hpTxt").textContent=Math.ceil(s)+" / "+r,Ze.d.coins!==Ap&&(Ap=Ze.d.coins,ke("coinTxt").textContent=Ze.d.coins);let o=P.phase+P.wave;o!==B.lastPhase&&(B.lastPhase=o,ao(k_()),P.phase==="warn"&&(yt.siren(),Rn(Ut[P.dz].icon+" "+Ei(P.dz,t)+" WARNING!")),P.phase,P.phase==="calm"&&P.wave>0&&yt.win());let a=ke("wavePill"),l=ke("timerFill"),c=ke("banner"),u=ke("safeChip");if(P.phase==="calm")a.textContent=P.wave===0?"GET READY! "+Math.ceil(P.t):"BREAK - WAVE "+(P.wave+1)+"/"+P.waves+" IN "+Math.ceil(P.t),l.style.width=Math.max(0,P.t/14*100)+"%",c.classList.add("hidden"),u.classList.add("hidden");else if(P.phase==="warn"||P.phase==="active"){let y=Ut[P.dz];a.textContent="WAVE "+P.wave+"/"+P.waves+(P.phase==="warn"?"  \u26A0\uFE0F "+Math.ceil(P.t):"  \u23F1 "+Math.ceil(P.t)),l.style.width=(P.phase==="warn"?P.t/7:P.t/(P.dzDur||30))*100+"%",c.classList.remove("hidden"),c.style.borderColor=y.color,ke("banT").style.color=y.color,ke("banT").textContent=y.icon+" "+Ei(P.dz,t),ke("banW").textContent=P.phase==="warn"?y.warn:y.tip,c.classList.toggle("flash",P.phase==="warn");let v=Kt(t,e),U=e.st==="ok"?y.safe(e,v,P,t):null;u.classList.remove("hidden"),e.st!=="ok"?(u.className="safe meh",u.textContent=e.st==="float"?"\u{1F6F8} BEAMED UP!":"\u{1F4AB} Knocked out"):U==="maybe"?(u.className="safe meh",u.textContent="\u{1F7E1} Pretty safe - sturdier is better!"):U?(u.className="safe ok",u.textContent="\u2705 SAFE: "+U):(u.className="safe bad",u.textContent="\u26A0\uFE0F DANGER! Follow the green arrow")}else c.classList.add("hidden"),u.classList.add("hidden");let h=P.phase==="warn"||P.phase==="active"?Ut[P.dz]:null,d=!1;if(h&&e.st==="ok"){let y=Kt(t,e),v=h.safe(e,y,P,t);if(!v||v==="maybe"){let U=pp(e,t);if(U){d=!0;let I=Math.atan2(U.x-e.x,U.z-e.z);H.arrow.position.set(e.x+Math.sin(I)*1.4,e.y+2.4+Math.sin(V.t*5)*.1,e.z+Math.cos(I)*1.4),H.arrow.rotation.set(0,I,0),H.beacon.visible=!0,H.beacon.position.set(U.x,U.y+15,U.z)}}}H.arrow.visible=d,d||(H.beacon.visible=!1);let f=e.st==="ok"?hl(t,e.x,e.y,e.z):null,p=ke("bAct");f?(p.classList.remove("hidden"),p.textContent=f.label):p.classList.add("hidden"),ke("koBox").classList.toggle("hidden",i.st!=="ko"),i.st==="ko"&&(ke("koTxt").textContent=i.rev>0?"A friend is helping you up! \u{1F91D}":"Back in "+Math.max(0,Math.ceil(i.koT||0))+"...");let x=ke("calmCard");if(P.phase==="calm"&&B.mode!=="guest"){x.classList.remove("hidden");let v="NEXT: "+(P.picked?Ut[P.next].icon+" "+Ei(P.next,t):"\u{1F3B2} Random")+(P.picked?"":' <button class="btn gold small" id="bPick">\u{1F3AF} PICK 40</button>');if(x._h!==v){x._h=v,x.innerHTML=v;let U=ke("bPick");U&&(U.onclick=zp)}}else if(P.phase==="calm"&&B.mode==="guest"){x.classList.remove("hidden");let y="NEXT: "+(P.picked?Ut[P.next].icon+" "+Ei(P.next,t):"\u{1F3B2} Random")+" <small>(host picks)</small>";x._h!==y&&(x._h=y,x.innerHTML=y)}else x.classList.add("hidden");ke("joyHint").style.display=P.wave===0&&P.phase==="calm"?"":"none";let g=ke("tags"),m=new Set,b=new L;for(let y of P.players){if(y.id===e.id)continue;let v=y.st==="ko",U=!y.cpu&&B.mode!=="solo";if(!v&&!U)continue;let I=B.models.get(y.id);if(!I||(b.set(I.root.position.x,I.root.position.y+2.5,I.root.position.z).project(V.camera),b.z>1||Math.abs(b.x)>1.1||Math.abs(b.y)>1.1))continue;let D=Ru.get(y.id);D||(D=document.createElement("div"),g.appendChild(D),Ru.set(y.id,D)),m.add(y.id),D.className="tag"+(v?" help":""),D.textContent=v?"\u{1F4AB} HELP "+y.name+"!":y.name,D.style.left=(b.x+1)/2*innerWidth+"px",D.style.top=(1-b.y)/2*innerHeight+"px",D.style.display=""}Ru.forEach((y,v)=>{m.has(v)||(y.style.display="none")})}function H_(){let n=ke("fade");n.style.background="#ff2d55",n.style.opacity=.35,setTimeout(()=>{n.style.opacity=0},120)}function V_(){let n=ke("fade");n.style.background="#000",n.style.opacity=.7,setTimeout(()=>n.style.opacity=0,160)}function G_(){ke("coinBox").animate([{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:250})}function Rn(n,e){let t=ke("toasts")||ke("ui");if(!t||!n)return;let i=document.createElement("div");for(i.className="toast "+(e||""),i.textContent=n,t.appendChild(i);t.children.length>4;)t.removeChild(t.firstChild);setTimeout(()=>i.remove(),2600)}B.toast=Rn;function Ci(n,e,t={}){Ri();let i=document.createElement("div");return i.className="panelWrap",i.id="panel",i.innerHTML='<div class="panel">'+n+"</div>",ke("ui").appendChild(i),i.querySelectorAll("[data-close]").forEach(s=>s.addEventListener("click",()=>{yt.click(),Ri(),t.onClose&&t.onClose()})),e&&e(i),B.panelName=t.name||"panel",B.mode==="solo"&&t.pause&&(B.paused=!0),i}function Ri(){let n=ke("panel");n&&n.remove(),B.paused=!1,B.panelName=null}B.hidePanels=Ri;function W_(){ke("title").classList.remove("hidden"),ke("titleCoins").textContent=Ze.d.coins,B.W&&B.W.id!=="city"&&!B.W&&Es("city")}function X_(){let n=document.createElement("div");n.id="title",n.innerHTML=`<div style="width:100%"><div id="topbar"><span class="pill"><span class="coinIc">\u2605</span><span id="titleCoins">0</span></span><button class="btn gray small" id="tGfx">\u2699\uFE0F</button></div>
  <div class="logo" style="margin-top:56px"><div class="l1">GROK</div><div class="l2">DISASTER ZONE</div><div class="tag">Survive kaiju, tornadoes, meteors & more!</div></div></div>
  <div class="menuCol"><button class="btn green" id="tPlay" style="font-size:24px;padding:18px">\u25B6 PLAY</button><button class="btn pink" id="tOnline">\u{1F91D} PLAY WITH FRIENDS</button>
  <div class="menuRow"><button class="btn gold" id="tShop">\u{1F6D2} SHOP</button><button class="btn purple" id="tTroph">\u{1F3C6} TROPHIES</button></div><button class="btn" id="tHow">\u2753 HOW TO PLAY</button></div>`,ke("ui").appendChild(n),ke("tPlay").onclick=()=>{yt.click(),bs(),Np()},ke("tOnline").onclick=()=>{yt.click(),bs(),le.lobby()},ke("tShop").onclick=()=>{yt.click(),bs(),$n()},ke("tTroph").onclick=()=>{yt.click(),q_()},ke("tHow").onclick=()=>{yt.click(),Pu()},ke("tGfx").onclick=()=>{yt.click(),To()}}function Np(n){let e=B.W?B.W.id:"area51",t=()=>Ci(`<h2>\u{1F5FA}\uFE0F PICK A MAP</h2><p class="sub">Disasters are random, or pay coins between waves to pick the next one!</p><div class="cards">${fu.map(i=>`<div class="card ${i.id===e?"sel":""}" data-m="${i.id}"><div class="em">${i.emoji}</div><b>${i.name}</b><small>${i.desc}</small></div>`).join("")}</div>
    <div class="btnrow"><button class="btn gray" data-close>BACK</button><button class="btn green" id="mGo">${n?"START FOR ALL":"START!"}</button></div>`,i=>{i.querySelectorAll("[data-m]").forEach(s=>s.onclick=()=>{yt.click(),e=s.dataset.m,Es(e),t()}),ke("mGo").onclick=()=>{yt.click(),Ri(),n?le.start(e):B.startSolo(e)}},{name:"maps",onClose:n?()=>le.roomPanel():null});t()}B.showMapPick=Np;function zp(){if(P.phase!=="calm")return;let n=40;Ci(`<h2>\u{1F3AF} PICK THE NEXT DISASTER</h2><p class="sub">Costs <b>${n}</b> coins. You have <b>${Ze.d.coins}</b>.</p><div class="dzGrid">${_r.map(e=>`<button data-d="${e}"><span>${Ut[e].icon}</span>${Ei(e,B.W)}</button>`).join("")}</div><div class="btnrow"><button class="btn gray" data-close>KEEP RANDOM</button></div>`,e=>{e.querySelectorAll("[data-d]").forEach(t=>t.onclick=()=>{if(Ze.d.coins<n){Rn("Not enough coins! Survive more waves \u{1F4AA}");return}if(P.phase!=="calm")return Ri();So(-n),Ze.d.stats.picks++,Ot(),fp(t.dataset.d),yt.cash(),Rn("\u{1F4B8} CHA-CHING! Next up: "+Ut[t.dataset.d].icon+" "+Ei(t.dataset.d,B.W),"gold"),An("picker"),Ri()})},{name:"picker"})}B.showPicker=zp;function $n(n="upg"){let e=Ze.d,t=Mu.map(o=>{let a=yn(o.id),l=o.prices.length,c=o.prices[a];return`<div class="item"><div class="ic">${o.icon}</div><div class="grow"><b>${o.name}</b><small>${o.desc}</small><div class="lv">${o.prices.map((u,h)=>`<i class="${h<a?"on":""}"></i>`).join("")}</div></div>${a>=l?'<button class="btn gray small" disabled>MAX</button>':`<button class="btn gold small" data-buy="${o.id}">${c}</button>`}</div>`}).join(""),i=bu.map(o=>{let a=e.hats.includes(o.id),l=e.look.hat===o.id;return`<div class="item"><div class="ic">${{cap:"\u{1F9E2}",beanie:"\u{1F9F6}",party:"\u{1F973}",cowboy:"\u{1F920}",chef:"\u{1F468}\u200D\u{1F373}",dino:"\u{1F996}",astro:"\u{1F469}\u200D\u{1F680}",crown:"\u{1F451}",none:"\u{1F642}"}[o.id]}</div><div class="grow"><b>${o.name}</b></div>${l?'<button class="btn green small" disabled>ON</button>':a?`<button class="btn small" data-hat="${o.id}">WEAR</button>`:`<button class="btn gold small" data-hatbuy="${o.id}">${o.price}</button>`}</div>`}).join(""),s=o=>"#"+o.toString(16).padStart(6,"0"),r=`<h3>SHIRT</h3><div class="swatches">${wu.map(o=>`<button data-shirt="${o}" class="${e.look.shirt===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>HAT COLOR</h3><div class="swatches">${wu.map(o=>`<button data-hc="${o}" class="${e.look.hatColor===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>SKIN</h3><div class="swatches">${[16173472,14723449,12155471,9067067,16767416].map(o=>`<button data-skin="${o}" class="${e.look.skin===o?"on":""}" style="background:${s(o)}"></button>`).join("")}</div><h3>NAME</h3><input class="name" id="nameIn" maxlength="12" placeholder="Your name" value="${Cp(e.name)}">`;Ci(`<h2>\u{1F6D2} SHOP</h2><p class="sub"><span class="pill"><span class="coinIc">\u2605</span>${e.coins}</span></p><div class="tabs"><button data-tab="upg" class="${n==="upg"?"on":""}">\u2B06\uFE0F UPGRADES</button><button data-tab="hats" class="${n==="hats"?"on":""}">\u{1F3A9} HATS</button><button data-tab="look" class="${n==="look"?"on":""}">\u{1F3A8} LOOK</button></div>${n==="upg"?t:n==="hats"?i:r}<div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`,o=>{o.querySelectorAll("[data-tab]").forEach(l=>l.onclick=()=>{yt.click(),$n(l.dataset.tab)}),o.querySelectorAll("[data-buy]").forEach(l=>l.onclick=()=>{let c=Mu.find(d=>d.id===l.dataset.buy),u=yn(c.id),h=c.prices[u];if(e.coins<h)return Rn("Not enough coins yet!");So(-h),e.upg[c.id]=u+1,Ot(),yt.cash(),Rn("\u2728 "+c.name+" Lv"+(u+1)+"!","gold"),Y_(),$n("upg")}),o.querySelectorAll("[data-hatbuy]").forEach(l=>l.onclick=()=>{let c=bu.find(u=>u.id===l.dataset.hatbuy);if(e.coins<c.price)return Rn("Not enough coins yet!");So(-c.price),e.hats.push(c.id),e.look.hat=c.id,Ot(),yt.cash(),Eo(),$n("hats")}),o.querySelectorAll("[data-hat]").forEach(l=>l.onclick=()=>{e.look.hat=l.dataset.hat,Ot(),yt.click(),Eo(),$n("hats")}),o.querySelectorAll("[data-shirt]").forEach(l=>l.onclick=()=>{e.look.shirt=+l.dataset.shirt,Ot(),yt.click(),Eo(),$n("look")}),o.querySelectorAll("[data-hc]").forEach(l=>l.onclick=()=>{e.look.hatColor=+l.dataset.hc,Ot(),yt.click(),Eo(),$n("look")}),o.querySelectorAll("[data-skin]").forEach(l=>l.onclick=()=>{e.look.skin=+l.dataset.skin,Ot(),yt.click(),Eo(),$n("look")});let a=o.querySelector("#nameIn");a&&(a.onchange=()=>{e.name=a.value.replace(/[<>&"]/g,"").trim().slice(0,12),Ot()})},{name:"shop",pause:!0,onClose:()=>{let o=ke("titleCoins");o&&(o.textContent=Ze.d.coins)}})}B.showShop=$n;function Y_(){let n=ws();if(B.me){B.me.upg=n;let e=P.players.find(t=>t.id===B.me.id);e&&B.mode!=="guest"&&(e.upg=n,e.max=br(n))}Up(),B.mode==="guest"&&le.hello()}function Eo(){if(B.me){let n=P.players.find(e=>e.id===B.me.id);n&&(n.look=Object.assign({},Ze.d.look)),B.me.look=n?n.look:Ze.d.look}B.mode==="guest"&&le.hello()}function q_(){let n=Ze.d.stats;Ci(`<h2>\u{1F3C6} TROPHIES</h2><div class="statGrid"><div><b>${n.rounds}</b>Rounds</div><div><b>${n.waves}</b>Disasters survived</div><div><b>${n.revives}</b>Friends helped</div><div><b>${n.earned}</b>Coins earned</div><div><b>${n.kos}</b>Knockouts</div><div><b>${Object.keys(n.survived).length}/9</b>Disaster types</div></div><h3>ACHIEVEMENTS (${Object.keys(Ze.d.ach).length}/${wl.length})</h3>${wl.map(e=>`<div class="ach ${Ze.d.ach[e.id]?"on":""}"><div class="ic">${e.icon}</div><div><b>${e.name}</b><br><small>${e.desc}</small></div></div>`).join("")}<h3>SURVIVED</h3><div class="statGrid">${_r.map(e=>`<div><b>${Ut[e].icon} ${n.survived[e]||0}</b>${Ut[e].name}</div>`).join("")}</div><div class="btnrow"><button class="btn gray" data-close>BACK</button></div>`,null,{name:"trophies",pause:!0})}function Pu(){Ci(`<h2>\u2753 HOW TO PLAY</h2><div class="howto"><div class="row"><span>\u{1F579}\uFE0F</span><p>Drag the <b>left side</b> to run. Drag the <b>right side</b> to look around, pinch to zoom. Tap <b>JUMP</b> to jump.</p></div>
  <div class="row"><span>\u{1F6A8}</span><p>When the siren goes off, read the warning and <b>follow the green arrow</b> to a safe spot before time runs out!</p></div>
  <div class="row"><span>\u{1F3E0}</span><p>Walk into buildings through the door. Glowing pads take you <b>down to basements</b> \u2B07 or <b>up to rooftops</b> \u2B06 - tap the yellow button.</p></div>
  <div class="row"><span>\u{1F6E1}\uFE0F</span><p>Each disaster has its own safe spots: <b>underground</b> for kaiju, <b>high ground</b> for tsunamis, <b>under tables</b> for earthquakes, <b>indoors</b> for lightning, hail and UFOs.</p></div>
  <div class="row"><span>\u{1F4AB}</span><p>Get knocked out? Wait a moment, or a friend can stand next to you to <b>help you up</b>. Helping others earns coins!</p></div>
  <div class="row"><span>\u{1FA99}</span><p>Earn coins for surviving, helping and grabbing coins. Spend them in the <b>Shop</b>, or pay 40 to <b>pick the next disaster</b>. Cha-ching!</p></div></div>
  <div class="btnrow"><button class="btn green" data-close>GOT IT!</button></div>`,null,{name:"howto",pause:!0})}function To(){Ci(`<h2>\u2699\uFE0F SETTINGS</h2><h3>GRAPHICS</h3><div class="tabs"><button data-g="high" class="${V.quality==="high"?"on":""}">\u2728 HIGH</button><button data-g="low" class="${V.quality==="low"?"on":""}">\u26A1 LOW</button></div><p class="sub">HIGH has soft shadows, glow and ambient occlusion. LOW runs smoother on older phones. The game switches to LOW by itself if it gets slow.</p><h3>SOUND</h3><div class="tabs"><button data-s="1" class="${Ze.d.opts.sound?"on":""}">\u{1F50A} ON</button><button data-s="0" class="${Ze.d.opts.sound?"":"on"}">\u{1F507} OFF</button></div><div class="btnrow"><button class="btn gray" data-close>DONE</button></div>`,n=>{n.querySelectorAll("[data-g]").forEach(e=>e.onclick=()=>{oo(e.dataset.g),Ze.d.opts.gfx=e.dataset.g,Ot(),To()}),n.querySelectorAll("[data-s]").forEach(e=>e.onclick=()=>{Ze.d.opts.sound=e.dataset.s==="1",yu(Ze.d.opts.sound),Ot(),To()})},{name:"settings",pause:!0})}B.showSettings=To;function Z_(){Ci(`<h2>\u23F8\uFE0F PAUSED</h2>${B.mode!=="solo"?'<p class="sub">Online games keep going while this menu is open.</p>':""}<div class="menuCol" style="margin:0 auto"><button class="btn green" data-close>\u25B6 RESUME</button><button class="btn gold" id="pShop">\u{1F6D2} SHOP</button><button class="btn" id="pHow">\u2753 HOW TO PLAY</button><button class="btn purple" id="pSet">\u2699\uFE0F SETTINGS</button><button class="btn pink" id="pQuit">\u{1F6AA} QUIT TO MENU</button></div>`,n=>{ke("pShop").onclick=()=>$n(),ke("pHow").onclick=Pu,ke("pSet").onclick=To,ke("pQuit").onclick=()=>B.quit()},{name:"pause",pause:!0})}function Op(){let n=P.players.find(e=>e.id===(B.me&&B.me.id));Ci(`<div class="big">\u{1F3C6}</div><h2>ROUND COMPLETE!</h2><p class="sub">You survived ${P.waves} disasters on ${B.W.meta.name}!</p>
  <div class="res"><span>\u{1FA99} Coins earned</span><span>+${B.roundCoins}</span></div><div class="res"><span>\u{1F4AB} Knockouts</span><span>${n?n.kos:0}</span></div><div class="res"><span>\u{1F91D} Friends helped</span><span>${n?n.revives:0}</span></div>${B.roundKO?"":'<div class="res" style="background:#dcfce7"><span>\u{1F6E1}\uFE0F UNTOUCHABLE!</span><span>No knockouts</span></div>'}
  <div class="btnrow">${B.mode==="guest"?'<button class="btn gray" id="rLeave">LEAVE</button><button class="btn" disabled>Waiting for host\u2026</button>':'<button class="btn gray" id="rMenu">MENU</button><button class="btn green" id="rAgain">PLAY AGAIN</button>'}</div><div class="btnrow"><button class="btn gold" id="rShop">\u{1F6D2} SHOP</button></div>`,e=>{let t=ke("rMenu");t&&(t.onclick=()=>B.quit());let i=ke("rLeave");i&&(i.onclick=()=>B.quit());let s=ke("rAgain");s&&(s.onclick=()=>{Ri(),B.mode==="host"?B.startHosted(B.W.id,le.humans()):B.startSolo(B.W.id)}),ke("rShop").onclick=()=>$n()},{name:"results"})}B.showResults=Op;B.panel=Ci;B.esc=Cp;B.loadMap=Es;B.handleFx=Pp;B.handleMsgs=Ip;B.achieve=An;F_();X_();Es(Sl.get("map")||"city");ke("titleCoins").textContent=Ze.d.coins;le.init(B);requestAnimationFrame(Dp);B.ready=!0;B.sim=(n,e=.05)=>{for(let t=0;t<n;t+=e)Lp(e)};B.wreck=n=>xr(B.W,B.W.root,n);B.force=n=>{P.phase==="calm"&&(P.next=n,P.picked=!0,P.t=.01,B.sim(7.2))};B.tp=(n,e,t)=>{let i=B.me;i.x=n,i.y=e,i.z=t,i.vy=0;let s=P.players.find(r=>r.id===i.id);s&&s!==i&&(s.x=n,s.y=e,s.z=t)};B.setMood=ao;B.SV=Ze;B.save=Ot;B.DZ=Ut;B.H=Qt;B.shelter=Kt;B.Net=le;var Rp=window.GrokNet&&GrokNet.params&&GrokNet.params();Rp&&le.fromParams(Rp);})();
