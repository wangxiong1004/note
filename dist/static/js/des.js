function des(r,e,t,a,h,c){var o,n,s,A,f,C,d,i,g,y,b,l,p,u,w=new Array(16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756),m=new Array(-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344),S=new Array(520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584),v=new Array(8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928),E=new Array(256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080),k=new Array(536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312),D=new Array(2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154),x=new Array(268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696),H=des_createKeys(r),K=0,T=e.length,I=0,_=32==H.length?3:9;for(i=3==_?t?new Array(0,32,2):new Array(30,-2,-2):t?new Array(0,32,2,62,30,-2,64,96,2):new Array(94,62,-2,32,64,2,30,-2,-2),2==c?e+="        ":1==c?(s=8-T%8,e+=String.fromCharCode(s,s,s,s,s,s,s,s),8==s&&(T+=8)):c||(e+="\0\0\0\0\0\0\0\0"),result="",tempresult="",1==a&&(g=h.charCodeAt(K++)<<24|h.charCodeAt(K++)<<16|h.charCodeAt(K++)<<8|h.charCodeAt(K++),b=h.charCodeAt(K++)<<24|h.charCodeAt(K++)<<16|h.charCodeAt(K++)<<8|h.charCodeAt(K++),K=0);K<T;){for(C=e.charCodeAt(K++)<<24|e.charCodeAt(K++)<<16|e.charCodeAt(K++)<<8|e.charCodeAt(K++),d=e.charCodeAt(K++)<<24|e.charCodeAt(K++)<<16|e.charCodeAt(K++)<<8|e.charCodeAt(K++),1==a&&(t?(C^=g,d^=b):(y=g,l=b,g=C,b=d)),C^=(s=252645135&(C>>>4^d))<<4,C^=(s=65535&(C>>>16^(d^=s)))<<16,C^=s=858993459&((d^=s)>>>2^C),C^=s=16711935&((d^=s<<2)>>>8^C),C=(C^=(s=1431655765&(C>>>1^(d^=s<<8)))<<1)<<1|C>>>31,d=(d^=s)<<1|d>>>31,n=0;n<_;n+=3){for(p=i[n+1],u=i[n+2],o=i[n];o!=p;o+=u)A=d^H[o],f=(d>>>4|d<<28)^H[o+1],s=C,C=d,d=s^(m[A>>>24&63]|v[A>>>16&63]|k[A>>>8&63]|x[63&A]|w[f>>>24&63]|S[f>>>16&63]|E[f>>>8&63]|D[63&f]);s=C,C=d,d=s}d=d>>>1|d<<31,d^=s=1431655765&((C=C>>>1|C<<31)>>>1^d),d^=(s=16711935&(d>>>8^(C^=s<<1)))<<8,d^=(s=858993459&(d>>>2^(C^=s)))<<2,d^=s=65535&((C^=s)>>>16^d),d^=s=252645135&((C^=s<<16)>>>4^d),C^=s<<4,1==a&&(t?(g=C,b=d):(C^=y,d^=l)),tempresult+=String.fromCharCode(C>>>24,C>>>16&255,C>>>8&255,255&C,d>>>24,d>>>16&255,d>>>8&255,255&d),512==(I+=8)&&(result+=tempresult,tempresult="",I=0)}return result+tempresult}function des_createKeys(r){pc2bytes0=new Array(0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964),pc2bytes1=new Array(0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697),pc2bytes2=new Array(0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272),pc2bytes3=new Array(0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144),pc2bytes4=new Array(0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256),pc2bytes5=new Array(0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488),pc2bytes6=new Array(0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746),pc2bytes7=new Array(0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568),pc2bytes8=new Array(0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578),pc2bytes9=new Array(0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488),pc2bytes10=new Array(0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800),pc2bytes11=new Array(0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744),pc2bytes12=new Array(0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128),pc2bytes13=new Array(0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261);for(var e,t,a,h=8<r.length?3:1,c=new Array(32*h),o=new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0),n=0,s=0,A=0;A<h;A++){left=r.charCodeAt(n++)<<24|r.charCodeAt(n++)<<16|r.charCodeAt(n++)<<8|r.charCodeAt(n++),right=r.charCodeAt(n++)<<24|r.charCodeAt(n++)<<16|r.charCodeAt(n++)<<8|r.charCodeAt(n++),a=252645135&(left>>>4^right),right^=a,left^=a<<4,a=65535&(right>>>-16^left),left^=a,right^=a<<-16,a=858993459&(left>>>2^right),right^=a,left^=a<<2,a=65535&(right>>>-16^left),left^=a,right^=a<<-16,a=1431655765&(left>>>1^right),right^=a,left^=a<<1,a=16711935&(right>>>8^left),left^=a,right^=a<<8,a=1431655765&(left>>>1^right),right^=a,left^=a<<1,a=left<<8|right>>>20&240,left=right<<24|right<<8&16711680|right>>>8&65280|right>>>24&240,right=a;for(var f=0;f<o.length;f++)o[f]?(left=left<<2|left>>>26,right=right<<2|right>>>26):(left=left<<1|left>>>27,right=right<<1|right>>>27),left&=-15,right&=-15,e=pc2bytes0[left>>>28]|pc2bytes1[left>>>24&15]|pc2bytes2[left>>>20&15]|pc2bytes3[left>>>16&15]|pc2bytes4[left>>>12&15]|pc2bytes5[left>>>8&15]|pc2bytes6[left>>>4&15],a=65535&((t=pc2bytes7[right>>>28]|pc2bytes8[right>>>24&15]|pc2bytes9[right>>>20&15]|pc2bytes10[right>>>16&15]|pc2bytes11[right>>>12&15]|pc2bytes12[right>>>8&15]|pc2bytes13[right>>>4&15])>>>16^e),c[s++]=e^a,c[s++]=t^a<<16}return c}function stringToHex(r){for(var e="0x",t=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),a=0;a<r.length;a++)e+=t[r.charCodeAt(a)>>4]+t[15&r.charCodeAt(a)];return e}function hexToString(r){for(var e="",t="0x"==r.substr(0,2)?2:0;t<r.length;t+=2)e+=String.fromCharCode(parseInt(r.substr(t,2),16));return e}var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(r){var e,t,a,h,c,o;for(a=r.length,t=0,e="";t<a;){if(h=255&r.charCodeAt(t++),t==a){e+=base64EncodeChars.charAt(h>>2),e+=base64EncodeChars.charAt((3&h)<<4),e+="==";break}if(c=r.charCodeAt(t++),t==a){e+=base64EncodeChars.charAt(h>>2),e+=base64EncodeChars.charAt((3&h)<<4|(240&c)>>4),e+=base64EncodeChars.charAt((15&c)<<2),e+="=";break}o=r.charCodeAt(t++),e+=base64EncodeChars.charAt(h>>2),e+=base64EncodeChars.charAt((3&h)<<4|(240&c)>>4),e+=base64EncodeChars.charAt((15&c)<<2|(192&o)>>6),e+=base64EncodeChars.charAt(63&o)}return e}function base64decode(r){var e,t,a,h,c,o,n;for(o=r.length,c=0,n="";c<o;){for(;e=base64DecodeChars[255&r.charCodeAt(c++)],c<o&&-1==e;);if(-1==e)break;for(;t=base64DecodeChars[255&r.charCodeAt(c++)],c<o&&-1==t;);if(-1==t)break;n+=String.fromCharCode(e<<2|(48&t)>>4);do{if(61==(a=255&r.charCodeAt(c++)))return n;a=base64DecodeChars[a]}while(c<o&&-1==a);if(-1==a)break;n+=String.fromCharCode((15&t)<<4|(60&a)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=base64DecodeChars[h]}while(c<o&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&a)<<6|h)}return n}function utf16to8(r){var e,t,a,h;for(e="",a=r.length,t=0;t<a;t++)1<=(h=r.charCodeAt(t))&&h<=127?e+=r.charAt(t):(2047<h?(e+=String.fromCharCode(224|h>>12&15),e+=String.fromCharCode(128|h>>6&63)):e+=String.fromCharCode(192|h>>6&31),e+=String.fromCharCode(128|h>>0&63));return e}function utf8to16(r){var e,t,a,h,c,o;for(e="",a=r.length,t=0;t<a;)switch((h=r.charCodeAt(t++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=r.charAt(t-1);break;case 12:case 13:c=r.charCodeAt(t++),e+=String.fromCharCode((31&h)<<6|63&c);break;case 14:c=r.charCodeAt(t++),o=r.charCodeAt(t++),e+=String.fromCharCode((15&h)<<12|(63&c)<<6|(63&o)<<0)}return e}function Handle(r){var e=(r=String(r)).substring(r.length,r.length-1);if((r=r.split(e)[0])&&0<r.length)return r}
//# sourceMappingURL=des.js.map