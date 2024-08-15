/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/timezone.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/timezone.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){void 0===i&&(i={});var o=new Date(t),r=function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i);return r.formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],l=24===d?0:d,v=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",h=+e;return(o.utc(v).valueOf()-(h-=h%1e3))/6e4},f=i.prototype;f.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:t}),u=Math.round((i-new Date(a))/1e3/60),f=o(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,t,e).tz(this.$x.$timezone,!0)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return[i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/utc.js":
/*!******************************************!*\
  !*** ./node_modules/dayjs/plugin/utc.js ***!
  \******************************************/
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showError)
/* harmony export */ });
const container = document.querySelector('#error-container');
const close = container.querySelector('#close-icon');

close.addEventListener('click', hideError);

function hideError() {
  container.classList.add('hidden');
}

function showError() {
  container.classList.remove('hidden');
  setTimeout(() => container.classList.add('hidden'), 5000);
}

/***/ }),

/***/ "./src/height.js":
/*!***********************!*\
  !*** ./src/height.js ***!
  \***********************/
/***/ (() => {

document.body.style.height = `${window.innerHeight}px`;


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getForecast: () => (/* binding */ getForecast),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/timezone */ "./node_modules/dayjs/plugin/timezone.js");
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./src/error.js");





dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.setDefault('UTC');

const key = 'dcee472b5a49e727dac8badc44404b52';

async function getCoords(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}&limit=1`,
      { mode: 'cors' }
    );
    const parsed = await response.json();
    return [parsed[0].lat, parsed[0].lon];
  } catch (error) {
    (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return error;
  }
}

async function getWeather(location) {
  try {
    const [lat, long] = location.coords
      ? location.coords
      : await getCoords(location.city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
    );
    const parsed = await response.json();
    const sunrise = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(parsed.sys.sunrise + parsed.timezone).tz();
    const sunset = dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(parsed.sys.sunset + parsed.timezone).tz();
    return {
      name: `${parsed.name}, ${parsed.sys.country}`,
      temp: parsed.main.temp,
      description: parsed.weather[0].description,
      feelsLike: parsed.main.feels_like,
      humidity: parsed.main.humidity,
      sunrise: sunrise.format('h:mma'),
      sunset: sunset.format('h:mma'),
      code: parsed.weather[0].id,
    };
  } catch (error) {
    (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return error;
  }
}

async function getForecast(location) {
  try {
    const [lat, long] = location.coords
      ? location.coords
      : await getCoords(location.city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&cnt=6`
    );
    const parsed = await response.json();
    const localTime = parsed.city.timezone;
    return parsed.list.map((forecast) => ({
      temp: forecast.main.temp,
      iconURL: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
      time: dayjs__WEBPACK_IMPORTED_MODULE_0___default().unix(forecast.dt + localTime)
        .tz()
        .format('hA'),
    }));
  } catch (error) {
    (0,_error__WEBPACK_IMPORTED_MODULE_3__["default"])();
    return error;
  }
}




/***/ }),

/***/ "./src/weatherBackground.js":
/*!**********************************!*\
  !*** ./src/weatherBackground.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBackground)
/* harmony export */ });
document.body.style.backgroundImage = "url('images/landing.jpg')";

function setBackground(code) {
  let keyword;
  switch (true) {
    case code < 300:
      keyword = 'thunder';
      break;
    case code < 400:
      keyword = 'drizzle';
      break;
    case code < 600:
      keyword = 'rain';
      break;
    case code < 700:
      keyword = 'snow';
      break;
    case code === 741:
      keyword = 'fog';
      break;
    case code < 800:
      keyword = 'atmosphere';
      break;
    case code === 800:
      keyword = 'clear';
      break;
    case code === 804:
      keyword = 'overcast';
      break;
    default:
      keyword = 'clouds';
      break;
  }
  document.body.style.backgroundImage = `url('images/${keyword}.jpg')`;
}


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Celcius = void 0;
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Celcius = /** @class */ (function (_super) {
    __extends(Celcius, _super);
    function Celcius(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return _this; };
        _this.toDelisle = function () { return new Delisle_1.Delisle((100 - _this.value) * 1.5); };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit((_this.value * 9 / 5) + 32); };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin(_this.value + 273.15); };
        _this.toNewton = function () { return new Newton_1.Newton(_this.value * 33 / 100); };
        _this.toRankine = function () { return new Rankine_1.Rankine(1.8 * _this.value + 491.67); };
        _this.toReamur = function () { return new Reamur_1.Reamur(_this.value * 0.8); };
        _this.toRomer = function () { return new Romer_1.Romer(_this.value * 21 / 40 + 7.5); };
        _this.unit = Celcius.unit;
        return _this;
    }
    Celcius.unit = {
        name: 'Celcius',
        code: '°C'
    };
    return Celcius;
}(Temperature_1.default));
exports.Celcius = Celcius;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Delisle = void 0;
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Delisle = /** @class */ (function (_super) {
    __extends(Delisle, _super);
    function Delisle(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius(100 - _this.value * 2 / 3); };
        _this.toDelisle = function () { return _this; };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit(212 - _this.value * 1.2); };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin(373.15 - _this.value * 2 / 3); };
        _this.toNewton = function () { return new Newton_1.Newton(33 - _this.value * 0.22); };
        _this.toRankine = function () { return new Rankine_1.Rankine(671.67 - _this.value * 1.2); };
        _this.toReamur = function () { return new Reamur_1.Reamur(80 - _this.value * 8 / 15); };
        _this.toRomer = function () { return new Romer_1.Romer(60 - _this.value * 0.35); };
        _this.unit = Delisle.unit;
        return _this;
    }
    Delisle.unit = {
        name: 'Delisle',
        code: '°De'
    };
    return Delisle;
}(Temperature_1.default));
exports.Delisle = Delisle;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Fahrenheit = void 0;
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Fahrenheit = /** @class */ (function (_super) {
    __extends(Fahrenheit, _super);
    function Fahrenheit(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius((_this.value - 32) * 5 / 9); };
        _this.toDelisle = function () { return new Delisle_1.Delisle((212 - _this.value) * 5 / 6); };
        _this.toFahrenheit = function () { return _this; };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin(((_this.value - 32) * 5 / 9) + 273.15); };
        _this.toNewton = function () { return new Newton_1.Newton((_this.value - 32) * 11 / 60); };
        _this.toRankine = function () { return new Rankine_1.Rankine(_this.value + 459.67); };
        _this.toReamur = function () { return new Reamur_1.Reamur((_this.value - 32) * 0.44); };
        _this.toRomer = function () { return new Romer_1.Romer((_this.value - 32) * 7 / 24 + 7.5); };
        _this.unit = Fahrenheit.unit;
        return _this;
    }
    Fahrenheit.unit = {
        name: 'Fahrenheit',
        code: '°F'
    };
    return Fahrenheit;
}(Temperature_1.default));
exports.Fahrenheit = Fahrenheit;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Kelvin = void 0;
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Kelvin = /** @class */ (function (_super) {
    __extends(Kelvin, _super);
    function Kelvin(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius(_this.value - 273.15); };
        _this.toDelisle = function () { return new Delisle_1.Delisle((373.15 - _this.value) * 1.5); };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit(((_this.value - 273.15) * 9 / 5) + 32); };
        _this.toKelvin = function () { return _this; };
        _this.toNewton = function () { return new Newton_1.Newton((_this.value - 273.15) * 33 / 100); };
        _this.toRankine = function () { return new Rankine_1.Rankine(_this.value * 1.8); };
        _this.toReamur = function () { return new Reamur_1.Reamur((_this.value - 273.15) * 0.8); };
        _this.toRomer = function () { return new Romer_1.Romer(_this.value * 1.8 - 459.67); };
        _this.unit = Kelvin.unit;
        return _this;
    }
    Kelvin.unit = {
        name: 'Kelvin',
        code: '°K'
    };
    return Kelvin;
}(Temperature_1.default));
exports.Kelvin = Kelvin;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Newton.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Newton = void 0;
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Newton = /** @class */ (function (_super) {
    __extends(Newton, _super);
    function Newton(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius(_this.value * 100 / 33); };
        _this.toDelisle = function () { return new Delisle_1.Delisle((33 - _this.value) * 50 / 11); };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit(_this.value * 60 / 11 + 32); };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin(_this.value * 100 / 33 + 273.15); };
        _this.toNewton = function () { return _this; };
        _this.toReamur = function () { return new Reamur_1.Reamur(_this.value * 80 / 33); };
        _this.toRankine = function () { return new Rankine_1.Rankine(_this.value * 60 / 11 + 491.67); };
        _this.toRomer = function () { return new Romer_1.Romer(_this.value * 35 / 22 + 7.5); };
        _this.unit = Newton.unit;
        return _this;
    }
    Newton.unit = {
        name: 'Newton',
        code: '°N'
    };
    return Newton;
}(Temperature_1.default));
exports.Newton = Newton;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rankine = void 0;
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Rankine = /** @class */ (function (_super) {
    __extends(Rankine, _super);
    function Rankine(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius(_this.value / 1.8 + 273.15); };
        _this.toDelisle = function () { return new Delisle_1.Delisle((671.67 - _this.value) * 5 / 6); };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit(_this.value - 459.67); };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin(_this.value / 1.8); };
        _this.toNewton = function () { return new Newton_1.Newton((_this.value - 491.67) * 11 / 60); };
        _this.toRankine = function () { return _this; };
        _this.toReamur = function () { return new Reamur_1.Reamur((_this.value / 1.8 + 273.15) * 0.8); };
        _this.toRomer = function () { return new Romer_1.Romer((_this.value - 491.67) * 7 / 24 + 7.5); };
        _this.unit = Rankine.unit;
        return _this;
    }
    Rankine.unit = {
        name: 'Rankine',
        code: '°Ra'
    };
    return Rankine;
}(Temperature_1.default));
exports.Rankine = Rankine;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reamur = void 0;
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Romer_1 = __webpack_require__(/*! ./Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Reamur = /** @class */ (function (_super) {
    __extends(Reamur, _super);
    function Reamur(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius(_this.value / 0.8); };
        _this.toDelisle = function () { return new Delisle_1.Delisle((80 - _this.value) * 1.875); };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit(_this.value * 2.25 + 32); };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin(_this.value / 0.8 + 273.15); };
        _this.toNewton = function () { return new Newton_1.Newton(_this.value * 33 / 80); };
        _this.toRankine = function () { return new Rankine_1.Rankine(_this.value * 2.25 + 491.67); };
        _this.toReamur = function () { return _this; };
        _this.toRomer = function () { return new Romer_1.Romer(_this.value * 21 / 32 + 7.5); };
        _this.unit = Reamur.unit;
        return _this;
    }
    Reamur.unit = {
        name: 'Réamur',
        code: '°Ré'
    };
    return Reamur;
}(Temperature_1.default));
exports.Reamur = Reamur;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Romer.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Romer = void 0;
var Celcius_1 = __webpack_require__(/*! ./Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Rankine_1 = __webpack_require__(/*! ./Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Reamur_1 = __webpack_require__(/*! ./Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Temperature_1 = __importDefault(__webpack_require__(/*! ./Temperature */ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js"));
var Romer = /** @class */ (function (_super) {
    __extends(Romer, _super);
    function Romer(value) {
        var _this = _super.call(this, value) || this;
        _this.toCelcius = function () { return new Celcius_1.Celcius((_this.value - 7.5) * 40 / 21); };
        _this.toDelisle = function () { return new Delisle_1.Delisle((60 - _this.value) * 20 / 7); };
        _this.toFahrenheit = function () { return new Fahrenheit_1.Fahrenheit((_this.value - 7.5) * 24 / 7 + 32); };
        _this.toKelvin = function () { return new Kelvin_1.Kelvin((_this.value - 7.5) * 40 / 21 + 273.15); };
        _this.toNewton = function () { return new Newton_1.Newton((_this.value - 7.5) * 22 / 35); };
        _this.toRankine = function () { return new Rankine_1.Rankine((_this.value - 7.5) * 24 / 7 + 491.67); };
        _this.toReamur = function () { return new Reamur_1.Reamur((_this.value - 7.5) * 32 / 21); };
        _this.toRomer = function () { return _this; };
        _this.unit = Romer.unit;
        return _this;
    }
    Romer.unit = {
        name: 'Rømer',
        code: '°Rø'
    };
    return Romer;
}(Temperature_1.default));
exports.Romer = Romer;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/class/Temperature.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Temperatures = void 0;
var Temperatures;
(function (Temperatures) {
    Temperatures[Temperatures["Celcius"] = 0] = "Celcius";
    Temperatures[Temperatures["Fahrenheit"] = 1] = "Fahrenheit";
    Temperatures[Temperatures["Kelvin"] = 2] = "Kelvin";
    Temperatures[Temperatures["Reamur"] = 3] = "Reamur";
    Temperatures[Temperatures["Newton"] = 4] = "Newton";
    Temperatures[Temperatures["Rankine"] = 5] = "Rankine";
    Temperatures[Temperatures["Delisle"] = 6] = "Delisle";
    Temperatures[Temperatures["Romer"] = 7] = "Romer";
})(Temperatures = exports.Temperatures || (exports.Temperatures = {}));
var Temperature = /** @class */ (function () {
    function Temperature(value) {
        this.value = value;
    }
    return Temperature;
}());
exports["default"] = Temperature;


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.units = exports.Romer = exports.Reamur = exports.Rankine = exports.Newton = exports.Kelvin = exports.Fahrenheit = exports.Delisle = exports.Celcius = void 0;
var Celcius_1 = __webpack_require__(/*! ./class/Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
Object.defineProperty(exports, "Celcius", ({ enumerable: true, get: function () { return Celcius_1.Celcius; } }));
var Delisle_1 = __webpack_require__(/*! ./class/Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
Object.defineProperty(exports, "Delisle", ({ enumerable: true, get: function () { return Delisle_1.Delisle; } }));
var Fahrenheit_1 = __webpack_require__(/*! ./class/Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
Object.defineProperty(exports, "Fahrenheit", ({ enumerable: true, get: function () { return Fahrenheit_1.Fahrenheit; } }));
var Kelvin_1 = __webpack_require__(/*! ./class/Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
Object.defineProperty(exports, "Kelvin", ({ enumerable: true, get: function () { return Kelvin_1.Kelvin; } }));
var Newton_1 = __webpack_require__(/*! ./class/Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
Object.defineProperty(exports, "Newton", ({ enumerable: true, get: function () { return Newton_1.Newton; } }));
var Rankine_1 = __webpack_require__(/*! ./class/Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
Object.defineProperty(exports, "Rankine", ({ enumerable: true, get: function () { return Rankine_1.Rankine; } }));
var Reamur_1 = __webpack_require__(/*! ./class/Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
Object.defineProperty(exports, "Reamur", ({ enumerable: true, get: function () { return Reamur_1.Reamur; } }));
var Romer_1 = __webpack_require__(/*! ./class/Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
Object.defineProperty(exports, "Romer", ({ enumerable: true, get: function () { return Romer_1.Romer; } }));
var units_1 = __webpack_require__(/*! ./units */ "./node_modules/@khanisak/temperature-converter/dist/units.js");
Object.defineProperty(exports, "units", ({ enumerable: true, get: function () { return units_1.units; } }));


/***/ }),

/***/ "./node_modules/@khanisak/temperature-converter/dist/units.js":
/*!********************************************************************!*\
  !*** ./node_modules/@khanisak/temperature-converter/dist/units.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.units = void 0;
var Celcius_1 = __webpack_require__(/*! ./class/Celcius */ "./node_modules/@khanisak/temperature-converter/dist/class/Celcius.js");
var Delisle_1 = __webpack_require__(/*! ./class/Delisle */ "./node_modules/@khanisak/temperature-converter/dist/class/Delisle.js");
var Fahrenheit_1 = __webpack_require__(/*! ./class/Fahrenheit */ "./node_modules/@khanisak/temperature-converter/dist/class/Fahrenheit.js");
var Kelvin_1 = __webpack_require__(/*! ./class/Kelvin */ "./node_modules/@khanisak/temperature-converter/dist/class/Kelvin.js");
var Newton_1 = __webpack_require__(/*! ./class/Newton */ "./node_modules/@khanisak/temperature-converter/dist/class/Newton.js");
var Reamur_1 = __webpack_require__(/*! ./class/Reamur */ "./node_modules/@khanisak/temperature-converter/dist/class/Reamur.js");
var Rankine_1 = __webpack_require__(/*! ./class/Rankine */ "./node_modules/@khanisak/temperature-converter/dist/class/Rankine.js");
var Romer_1 = __webpack_require__(/*! ./class/Romer */ "./node_modules/@khanisak/temperature-converter/dist/class/Romer.js");
exports.units = [
    Celcius_1.Celcius.unit,
    Delisle_1.Delisle.unit,
    Fahrenheit_1.Fahrenheit.unit,
    Kelvin_1.Kelvin.unit,
    Reamur_1.Reamur.unit,
    Newton_1.Newton.unit,
    Rankine_1.Rankine.unit,
    Romer_1.Romer.unit,
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _khanisak_temperature_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @khanisak/temperature-converter */ "./node_modules/@khanisak/temperature-converter/dist/index.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _weatherBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherBackground */ "./src/weatherBackground.js");
/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./height */ "./src/height.js");
/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_height__WEBPACK_IMPORTED_MODULE_3__);





const searchBar = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');

const weatherContainer = document.querySelector('#weather-container');
const name = document.querySelector('#name');
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

let isFahrenheit = true;
let kelvins;
let kelvinsFeelsLike;
const forecastKelvins = [];
const forecastTemperatures = [];

const locationIcon = document.querySelector('#location-icon');

locationIcon.addEventListener('click', searchUserLocation);

searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    search();
  }
});
searchIcon.addEventListener('click', search);

async function setWeather(location) {
  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(location);
  if (data instanceof Error) return;

  kelvins = data.temp;
  kelvinsFeelsLike = data.feelsLike;

  name.textContent = data.name;
  description.textContent = data.description;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  sunrise.textContent = `Sunrise: ${data.sunrise}`;
  sunset.textContent = `Sunset: ${data.sunset}`;

  (0,_weatherBackground__WEBPACK_IMPORTED_MODULE_2__["default"])(data.code);

  weatherContainer.classList.remove('hidden');
}

const forecastContainer = document.querySelector('#forecast-container');

async function setForecast(location) {
  const forecast = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.getForecast)(location);
  if (forecast instanceof Error) return;
  forecastContainer.innerHTML = '';

  forecast.forEach((window, index) => {
    const box = document.createElement('div');
    const time = document.createElement('p');
    const icon = document.createElement('img');
    forecastTemperatures[index] = document.createElement('h4');

    time.textContent = window.time;
    icon.src = window.iconURL;
    icon.classList.add('forecast-icon');
    forecastKelvins[index] = window.temp;

    box.appendChild(time);
    box.appendChild(icon);
    box.appendChild(forecastTemperatures[index]);

    forecastContainer.appendChild(box);
    forecastContainer.classList.remove('hidden');
  });
}

function search() {
  Promise.all([
    setWeather({ city: searchBar.value }),
    setForecast({ city: searchBar.value }),
  ]).then(convertTemperatures);
}

function searchUserLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      Promise.all([
        setWeather({ coords: userCoords }),
        setForecast({ coords: userCoords }),
      ]).then(convertTemperatures);
    },
    (error) => console.error(error)
  );
}

const slider = document.querySelector('.slider');
slider.addEventListener('click', toggleUnit);

function toggleUnit() {
  // default is Fahrenheit
  slider.classList.toggle('celsius');
  isFahrenheit = !isFahrenheit;
  convertTemperatures();
}

function convertTemperatures() {
  const converter = isFahrenheit ? 'toFahrenheit' : 'toCelcius';
  const symbol = isFahrenheit ? 'F' : 'C';

  temp.textContent = `${Math.round(new _khanisak_temperature_converter__WEBPACK_IMPORTED_MODULE_0__.Kelvin(kelvins)[converter]().value)}°${symbol}`;
  feelsLike.textContent = `Feels like: ${Math.round(
    new _khanisak_temperature_converter__WEBPACK_IMPORTED_MODULE_0__.Kelvin(kelvinsFeelsLike)[converter]().value
  )}°${symbol}`;
  forecastKelvins.forEach((forecastKelvin, index) => {
    forecastTemperatures[index].textContent = `${Math.round(
      new _khanisak_temperature_converter__WEBPACK_IMPORTED_MODULE_0__.Kelvin(forecastKelvin)[converter]().value
    )}°${symbol}`;
  });
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map