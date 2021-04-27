(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var n,u$1,i$1,t$1,o$1,r$1={},f$1=[],e$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c$1(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n);}function a$1(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v$1(n,f,i,t,null)}function v$1(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function y(n){return n.children}function p$1(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u$1.push(l)&&!b$1.__r++||t$1!==n.debounceRendering)&&((t$1=n.debounceRendering)||i$1)(b$1);}function b$1(){for(var n;b$1.__r=u$1.length;)n=u$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),u$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c$1({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)));});}function m$1(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f$1,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(y,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}I(n,k,_=_||r$1,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g$1(k,s,n):s=x$1(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h]);}function g$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g$1(t,l,u):x$1(u,t,t,n.__k,t.__e,l));return l}function x$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e$1.test(l)?u:u+"px";}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $(l){this.l[l.type+!1](n.event?n.event(l):l);}function H(l){this.l[l.type+!0](n.event?n.event(l):l);}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p$1(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c$1({},v.__s)),c$1(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c$1(c$1({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m$1(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j$1(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i);}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j$1(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else {if(o=o&&f$1.slice.call(n.childNodes),v=(p=u.props||r$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m$1(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1));}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o);}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a$1(y,null,[l]),o||r$1,r$1,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f$1.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l);}function q(n,l){var u={__c:l="__cC"+o$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c$1({},this.state),"function"==typeof n&&(n=n(c$1({},u),this.props)),n&&c$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},p$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},p$1.prototype.render=y,u$1=[],i$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b$1.__r=0,o$1=0;

  var t,u,r,o=0,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function m(t,r){n.__h&&n.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i=[];}n.__b=function(n){u=null,c&&c(n);},n.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[]);},n.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a&&a(t,u);},n.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){n.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j(n){var t=u;n.__c=n.__(),u=t;}function w(n,t){return "function"==typeof t?t(n):t}

  const Predux = q();

  const PreduxProvider = ({ initialState, reducer, children }) => {
    const [state, dispatch] = p(reducer, initialState);
    return a$1(Predux.Provider, { value: [state, dispatch] }, children);
  };

  const useState = () => F(Predux)[0];
  const useDispatch = () => F(Predux)[1];

  var laser = function () { return ({
      name: "Standard Laser",
      flavor: "A simple but trustworthy laser cannon",
      cost: { kind: "SHAPE", values: [{ kind: "ALL" }], assigned: [] },
      damage: { kind: "FIXED", amount: 2 }
  }); };
  var droid = function () { return ({
      name: "Repair Droid",
      flavor: "A friendly droid to repair your hull during battles",
      cost: { kind: "SHAPE", values: [{ kind: "MAX", amount: 2 }], assigned: [] },
      repair: { kind: "SUM" }
  }); };
  var ion = function () { return ({
      name: "Ion cannon",
      flavor: "Nothing special, but gets the job done",
      cost: { kind: "SHAPE", values: [{ kind: "ODD" }], assigned: [] },
      damage: { kind: "SUM" }
  }); };
  var chargedLaser = function () { return ({
      name: "Charged Laser",
      flavor: "Heavy duty laser. Needs time to charge, but does a lot of damage.",
      cost: { kind: "TOTAL", amount: 12, assigned: 0 },
      damage: { kind: "FIXED", amount: 6 }
  }); };
  var missle = function () { return ({
      name: "Medium-range missles",
      flavor: "Good 'ol missles to deal a good amount of damage",
      cost: {
          kind: "SHAPE",
          values: [
              { kind: "EQL", amount: 6 },
              { kind: "EQL", amount: 6 },
          ],
          assigned: []
      },
      damage: { kind: "FIXED", amount: 8 }
  }); };

  var fighter = function () { return ({
      name: "Fighter",
      flavor: "A light and versatile ship. Good for taking out cruiser class vessels.",
      attack: 5,
      defense: 3,
      speed: 4,
      moduleLimit: 3,
      health: 6,
      maxHealth: 6,
      modules: [laser(), droid()]
  }); };
  var intercepter = function () { return ({
      name: "Intercepter",
      flavor: "A fast but weak ship. Good for intercepting fighters and fleeing battles you can not win.",
      attack: 3,
      defense: 3,
      speed: 6,
      moduleLimit: 3,
      health: 5,
      maxHealth: 5,
      modules: [laser(), ion()]
  }); };
  var cruiser = function () { return ({
      name: "Cruiser",
      flavor: "A simple but trustworthy star cruiser.",
      attack: 4,
      defense: 6,
      speed: 2,
      moduleLimit: 4,
      health: 8,
      maxHealth: 8,
      modules: [laser(), chargedLaser(), missle()]
  }); };

  var ShipSelectCard = function (_a) {
      var ship = _a.ship;
      var dispatch = useDispatch();
      var onLaunch = function () { return dispatch({ type: "SELECT_SHIP", ship: ship }); };
      return a$1("div", { "class": "card" }, [
          a$1("strong", null, ship.name),
          a$1("p", null, ship.flavor),
          a$1("div", { "class": "down" }, [
              a$1("table", null, [
                  a$1("tr", null, [
                      a$1("th", null, "HP"),
                      a$1("th", null, "ATK"),
                      a$1("th", null, "DEF"),
                      a$1("th", null, "SPD"),
                  ]),
                  a$1("tr", null, [
                      a$1("td", null, ship.health),
                      a$1("td", null, ship.attack),
                      a$1("td", null, ship.defense),
                      a$1("td", null, ship.speed),
                  ]),
              ]),
              a$1("button", { "class": "snd", onclick: onLaunch }, "Launch!"),
          ]),
      ]);
  };

  var DiceCost = function (_a) {
      var dice = _a.dice, onclick = _a.onclick, current = _a.current;
      if (current) {
          return a$1("div", { "class": "dice placed" }, current);
      }
      switch (dice.kind) {
          case "ALL":
              return a$1("div", { "class": "dice", onclick: onclick }, " ");
          case "EQL":
              return a$1("div", { "class": "dice", onclick: onclick }, dice.amount);
          case "ODD":
              return a$1("div", { "class": "dice", onclick: onclick }, "ODD");
          case "EVEN":
              return a$1("div", { "class": "dice", onclick: onclick }, "EVEN");
          case "MIN":
              return a$1("div", { "class": "dice", onclick: onclick }, [dice.amount, "+"]);
          case "MAX":
              return a$1("div", { "class": "dice", onclick: onclick }, [dice.amount, "-"]);
      }
  };
  var fits = function (dice, req) {
      switch (req.kind) {
          case "ALL":
              return true;
          case "EQL":
              return dice === req.amount;
          case "ODD":
              return dice % 2 === 1;
          case "EVEN":
              return dice % 2 === 0;
          case "MIN":
              return dice >= req.amount;
          case "MAX":
              return dice <= req.amount;
      }
  };
  var ModuleCost = function (_a) {
      var module = _a.module, index = _a.index;
      var _b = useState(), dice = _b.dice, selectedDice = _b.selectedDice;
      var dispatch = useDispatch();
      var placeDice = function (ix) {
          if (selectedDice === null)
              return;
          if (module.cost.kind === "TOTAL") {
              dispatch({ type: "ASSIGN_DICE", moduleIndex: index, diceIndex: ix });
          }
          else if (fits(dice[selectedDice], module.cost.values[ix])) {
              dispatch({ type: "ASSIGN_DICE", moduleIndex: index, diceIndex: ix });
          }
      };
      return module.cost.kind === "TOTAL"
          ? [
              a$1("div", { "class": "dice", onclick: function () { return placeDice(0); } }, "+"),
              " ",
              Math.max(0, module.cost.amount - module.cost.assigned),
              " remaining",
          ]
          : module.cost.values.map(function (v, ix) {
              return a$1(DiceCost, {
                  dice: v,
                  onclick: function () { return placeDice(ix); },
                  current: module.cost.assigned[ix]
              });
          });
  };

  const isModuleReady = (module) => {
    if (module.cost.kind === "TOTAL") {
      return module.cost.assigned >= module.cost.amount;
    } else {
      return module.cost.values.every((v, ix) => !!module.cost.assigned[ix]);
    }
  };

  const getEffect = (module) => {
    const attr = module.damage ? "DMG" : "HP";
    const x = module.damage || module.repair;
    const amount = x.kind === "SUM" ? "*" : x.amount;
    return a$1("p", null, ["[", a$1("strong", null, [amount, " ", attr]), "]"]);
  };

  const ModuleCard = ({ module, index }) => {
    const dispatch = useDispatch();
    return a$1("div", { class: "card" }, [
      a$1("strong", null, module.name),
      a$1("p", null, module.flavor),
      a$1("br", null),
      getEffect(module),
      a$1("div", { class: "down" }, [
        a$1(ModuleCost, { module: module, index: index }),
        a$1("br", null),
        a$1("br", null),
        a$1(
          "button",
          {
            disabled: !isModuleReady(module),
            onclick: () => {
              if (isModuleReady(module)) {
                dispatch({ type: "USE_WEAPON", index });
              }
            },
          },
          "Use"
        ),
      ]),
    ]);
  };

  var ShipSummaryCard = function (_a) {
      var ship = _a.ship;
      var hpbar = [];
      for (var i = 0; i < ship.maxHealth; i++) {
          hpbar.push(a$1("div", {
              "class": "bar " + (i < ship.health ? (ship.health === 1 ? "warn" : "on") : ""),
              style: "animation-delay: " + i * 0.25 + "s; transition-delay: " + (ship.maxHealth - i) * 0.05 + "s"
          }));
      }
      return [
          a$1("h2", null, ["Spacecraft: ", a$1("strong", null, ship.name)]),
          a$1("div", { id: "ship-health" }, hpbar),
          a$1("div", { "class": "ship-modules row" }, ship.modules.map(function (m, ix) { return a$1(ModuleCard, { module: m, index: ix }); })),
      ];
      // ]);
  };

  var WorldDeck = function () {
      var _a = useState(), worldDeck = _a.worldDeck, currentCard = _a.currentCard;
      var dispatch = useDispatch();
      return a$1("div", {
          "class": "card stack",
          onclick: function () {
              if (!currentCard) {
                  dispatch({ type: "TURN_CARD" });
              }
          }
      }, worldDeck.length);
  };

  const intersperse = (arr, sep) =>
    arr.reduce((a, v) => [...a, v, sep], []).slice(0, -1);

  var CurrentCard = function () {
      var _a = useState(), card = _a.currentCard, inBattle = _a.inBattle, isDead = _a.isDead, isWin = _a.isWin, score = _a.score;
      if (!card && !isDead)
          return null;
      var dispatch = useDispatch();
      if (isWin) {
          return a$1("div", { "class": "card current" }, a$1("strong", null, "\uD83D\uDE80 Victory"), a$1("p", null, "You explored the entire universe and lived to tell the story! Your adventure lasted ", a$1("strong", null, score), " days."), a$1("div", { "class": "down" }, a$1("button", {
              onclick: function () {
                  dispatch({ type: "REPLAY" });
              }
          }, "New Adventure?")));
      }
      else if (isDead) {
          return a$1("div", { "class": "card current" }, a$1("strong", null, "\uD83D\uDCA5 Game Over"), a$1("p", null, "Your ship got destroyed in a heroic battle. Your latest adventure lasted ", a$1("strong", null, score), " days."), a$1("div", { "class": "down" }, a$1("button", {
              "class": "snd",
              onclick: function () {
                  dispatch({ type: "REPLAY" });
              }
          }, "Try Again?")));
      }
      else if (card.type === "INFO") {
          return a$1("div", { "class": "card current" }, a$1("strong", null, "\u2604\uFE0F " + card.name), a$1("p", null, card.flavor), a$1("div", { "class": "down" }, a$1("button", {
              "class": "snd",
              onclick: function () {
                  dispatch({ type: "TURN_CARD" });
              }
          }, "OK")));
      }
      else if (card.type === "ENCOUNTER") {
          if (!inBattle) {
              return a$1("div", { "class": "card current" }, a$1("strong", null, "\uD83D\uDEF8 " + card.name), a$1("p", null, card.flavor), a$1("div", { "class": "down" }, [
                  a$1("table", null, [
                      a$1("tr", null, [
                          a$1("th", null, "HP"),
                          a$1("th", null, "ATK"),
                          a$1("th", null, "DEF"),
                          a$1("th", null, "SPD"),
                      ]),
                      a$1("tr", null, [
                          a$1("td", null, card.maxHealth),
                          a$1("td", null, card.attack),
                          a$1("td", null, card.defense),
                          a$1("td", null, card.speed),
                      ]),
                  ]),
                  a$1("button", {
                      onclick: function () {
                          dispatch({ type: "BATTLE_STATIONS", enemy: card });
                      }
                  }, "Battle stations!"),
                  a$1("button", {
                      "class": "snd",
                      onclick: function () {
                          dispatch({ type: "ATTEMPT_ESCAPE", enemy: card });
                      }
                  }, "Attempt escape"),
              ]));
          }
          else {
              var moves_1 = [];
              var dice_1 = [];
              card.moves.forEach(function (m, i) {
                  dice_1.push(i + 1);
                  if (!m)
                      return;
                  moves_1.push([dice_1, m]);
                  dice_1 = [];
              });
              var abbrevStat_1 = function (stat) {
                  switch (stat) {
                      case "ATTACK":
                          return "ATK";
                      case "DEFENSE":
                          return "DEF";
                      case "SPEED":
                          return "SPD";
                      case "HEALTH":
                          return "HP";
                  }
              };
              var movelist = moves_1.map(function (_a) {
                  var d = _a[0], m = _a[1];
                  var effect = m.effect.map(function (e) {
                      if (e.self) {
                          if (e.stat === "HEALTH") {
                              return "[" + (e.diff.amount || "") + (e.diff.amount && e.diff.stat ? "+" : "") + (e.diff.stat ? abbrevStat_1(e.diff.stat) : "") + " HP]";
                          }
                      }
                      else {
                          if (e.stat === "HEALTH") {
                              return "[" + (e.diff.amount * -1 || "") + (e.diff.amount && e.diff.stat ? "+" : "") + (e.diff.stat ? abbrevStat_1(e.diff.stat) : "") + " DMG]";
                          }
                      }
                  });
                  return a$1("tr", null, [
                      a$1("th", null, intersperse(d, a$1("br", null))),
                      a$1("td", null, [
                          a$1("strong", null, m.name),
                          " ",
                          m.flavor,
                          " ",
                          a$1("strong", null, effect),
                      ]),
                  ]);
              });
              return a$1("div", { "class": "card current" }, a$1("strong", null, "\uD83D\uDEF8 " + card.name), a$1("table", { "class": "movelist" }, movelist), a$1("div", { "class": "down" }, [
                  "Health: ",
                  a$1("strong", null, card.health),
                  "/",
                  card.maxHealth,
              ]));
          }
      }
      else if (card.type === "ITEM") {
          return a$1("div", { "class": "card current" }, a$1("strong", null, "\u26A1\uFE0F " + card.name), a$1("p", null, card.flavor), a$1("div", { "class": "down" }, [
              a$1("button", {
                  onclick: function () {
                      dispatch({ type: "INSTALL_ITEM", item: card.item });
                  }
              }, "Install"),
              a$1("button", {
                  "class": "snd",
                  onclick: function () {
                      dispatch({ type: "TURN_CARD" });
                  }
              }, "Leave it"),
          ]));
      }
      else if (card.type === "EVENT") {
          return a$1("div", { "class": "card current" }, a$1("strong", null, "\uD83E\uDE90 " + card.name), a$1("p", null, card.flavor), a$1("div", { "class": "down" }, [
              a$1("button", {
                  onclick: function () {
                      dispatch({ type: "MAKE_CHOICE", choice: card.options[0] });
                  }
              }, card.options[0].name),
              a$1("button", {
                  "class": "snd",
                  onclick: function () {
                      dispatch({ type: "MAKE_CHOICE", choice: card.options[1] });
                  }
              }, card.options[1].name),
          ]));
      }
  };

  var rollDice$1 = function (num) {
      var dice = [];
      for (var i = 0; i < num; i++) {
          var roll = Math.floor(Math.random() * 6) + 1;
          dice.push(roll);
      }
      return dice;
  };
  var offsetDice$1 = function (num) {
      var dice = [];
      for (var i = 0; i < num; i++) {
          var x = Math.floor(Math.random() * 16) - 8;
          var y = Math.floor(Math.random() * 16) - 8;
          var r = Math.floor(Math.random() * 120) - 60;
          dice.push({ x: x, y: y, r: r });
      }
      return dice;
  };
  var Dice$1 = function (_a) {
      var value = _a.value, onclick = _a.onclick, isSelected = _a.isSelected, offset = _a.offset;
      return a$1("div", {
          "class": "dice rolled " + (isSelected ? "selected" : ""),
          onclick: onclick,
          style: "transform: translate(" + (offset ? offset.x : 0) + "px, " + (offset ? offset.y : 0) + "px) rotate(" + (offset ? offset.r : 0) + "deg)"
      }, value);
  };
  var ROLL_TIME$1 = 1600;
  var ROLL_SPEED$1 = 200;
  var DiceSection = function (_a) {
      var _b = useState(), canRoll = _b.canRoll, maxDice = _b.maxDice, dice = _b.dice, selectedDice = _b.selectedDice;
      var dispatch = useDispatch();
      var _c = l(false), isRolling = _c[0], setIsRolling = _c[1];
      var _d = l([]), animatingDice = _d[0], setAnimatingDice = _d[1];
      var _e = l([]), animatingOffsets = _e[0], setAnimatingOffsets = _e[1];
      var rollButton = a$1("div", { "class": "down" }, a$1("button", {
          disabled: isRolling,
          onclick: isRolling
              ? undefined
              : function () {
                  setIsRolling(true);
                  setAnimatingDice(rollDice$1(maxDice));
                  setAnimatingOffsets(offsetDice$1(maxDice));
                  var n = 0;
                  var rollInterval = setInterval(function () {
                      n++;
                      if (n < ROLL_TIME$1 / ROLL_SPEED$1) {
                          setAnimatingDice(rollDice$1(maxDice));
                          setAnimatingOffsets(offsetDice$1(maxDice));
                      }
                      else {
                          clearInterval(rollInterval);
                          dispatch({ type: "ROLL_DICE", dice: rollDice$1(maxDice) });
                          setIsRolling(false);
                      }
                  }, ROLL_SPEED$1);
              }
      }, "Roll Dice"));
      var endButton = a$1("div", { "class": "down" }, a$1("button", {
          "class": "snd",
          onclick: function () { return dispatch({ type: "END_TURN", dice: rollDice$1(maxDice) }); }
      }, "End Turn"));
      var selectDice = function (ix) { return dispatch({ type: "SELECT_DICE", index: ix }); };
      var displayedDice = isRolling ? animatingDice : dice;
      return a$1("section", { "class": "dicearea" }, [
          a$1("strong", null, "Your Turn"),
          a$1("br", null),
          a$1("br", null),
          displayedDice.map(function (val, ix) {
              return a$1(Dice$1, {
                  value: val,
                  onclick: function () { return selectDice(ix); },
                  isSelected: ix === selectedDice,
                  offset: isRolling ? animatingOffsets[ix] : undefined
              });
          }),
          canRoll ? rollButton : endButton,
      ]);
  };

  var rollDice = function () {
      return Math.floor(Math.random() * 6) + 1;
  };
  var offsetDice = function () {
      var x = Math.floor(Math.random() * 16) - 8;
      var y = Math.floor(Math.random() * 16) - 8;
      var r = Math.floor(Math.random() * 120) - 60;
      return { x: x, y: y, r: r };
  };
  var Dice = function (_a) {
      var value = _a.value, offset = _a.offset;
      return a$1("div", {
          "class": "dice rolled enemy",
          style: "transform: translate(" + (offset ? offset.x : 0) + "px, " + (offset ? offset.y : 0) + "px) rotate(" + (offset ? offset.r : 0) + "deg)"
      }, value);
  };
  var ROLL_TIME = 1600;
  var ROLL_SPEED = 200;
  var getMove = function (enemy, dice) {
      for (var i = dice - 1; i < 6; i++) {
          if (enemy.moves[i]) {
              return enemy.moves[i];
          }
      }
  };
  var EnemyDiceSection = function (_a) {
      var dispatch = useDispatch();
      var currentCard = useState().currentCard;
      var _b = l(false), isRolling = _b[0], setIsRolling = _b[1];
      var _c = l(false), isDone = _c[0], setIsDone = _c[1];
      var _d = l(0), animatingDice = _d[0], setAnimatingDice = _d[1];
      var _e = l({
          x: 0,
          y: 0,
          r: 0
      }), animatingOffsets = _e[0], setAnimatingOffsets = _e[1];
      var doRoll = function () {
          setIsRolling(true);
          setAnimatingDice(rollDice());
          setAnimatingOffsets(offsetDice());
          var n = 0;
          var rollInterval = setInterval(function () {
              n++;
              if (n < ROLL_TIME / ROLL_SPEED) {
                  setAnimatingDice(rollDice());
                  setAnimatingOffsets(offsetDice());
              }
              else {
                  var finalValue = rollDice();
                  setAnimatingDice(finalValue);
                  setAnimatingOffsets({ x: 0, y: 0, r: 0 });
                  clearInterval(rollInterval);
                  setIsRolling(false);
                  setIsDone(true);
              }
          }, ROLL_SPEED);
      };
      return a$1("section", { "class": "dicearea" }, [
          a$1("strong", null, "Enemy Turn"),
          a$1("br", null),
          a$1("br", null),
          animatingDice > 0 &&
              a$1(Dice, {
                  value: animatingDice,
                  offset: animatingOffsets
              }),
          a$1("div", { "class": "down" }, [
              !isDone &&
                  a$1("button", { onClick: isRolling ? undefined : doRoll, disabled: isRolling }, "Roll"),
              isDone &&
                  a$1("button", {
                      "class": "snd",
                      onClick: function () {
                          dispatch({
                              type: "ENEMY_MOVE",
                              move: getMove(currentCard, animatingDice)
                          });
                      }
                  }, getMove(currentCard, animatingDice).name),
          ]),
      ]);
  };

  const View = () => {
    const { ship: myShip, inBattle, myTurn } = useState();
    if (!myShip) {
      return [
        a$1("h2", null, "Choose your starship:"),
        a$1("div", { class: "row" }, [
          a$1(ShipSelectCard, { ship: fighter() }),
          a$1(ShipSelectCard, { ship: intercepter() }),
          a$1(ShipSelectCard, { ship: cruiser() }),
        ]),
      ];
    } else {
      return [
        a$1(ShipSummaryCard, { ship: myShip }),
        a$1("div", { class: "row" }, [
          a$1(WorldDeck, null),
          a$1(CurrentCard, null),
          inBattle ? (myTurn ? a$1(DiceSection, null) : a$1(EnemyDiceSection)) : null,
        ]),
      ];
    }
  };

  const Footer = () => {
    return a$1(
      "center",
      null,
      a$1("footer", null, [
        "Captain on the Bridge ",
        a$1("strong", null, "•"),
        " ",
        a$1(
          "a",
          { href: "https://github.com/tkers/captain-on-the-bridge" },
          "Source"
        ),
      ])
    );
  };

  const Game = () => {
    const { inBattle, myTurn } = useState();
    return [
      a$1("nav", { class: inBattle ? (myTurn ? "warn" : "alert") : "safe" }),
      a$1("main", null, a$1(View, null)),
      a$1(Footer, null),
    ];
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __spreadArray(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
      return to;
  }

  var niftyTechnician = function () { return ({
      type: "EVENT",
      name: "Nifty Technician",
      flavor: "Your Head Technician offers to redirect some of the shield enery to your hyperdrive.",
      options: [
          {
              name: "Hell yes!",
              flavor: "The technician lowers the shields in favor of the hyperdrive",
              effect: [
                  { self: true, stat: "SPEED", diff: { amount: 4 } },
                  { self: true, stat: "DEFENSE", diff: { amount: -2 } },
              ]
          },
          { name: "Too risky", flavor: "You keep your shields intact.", effect: [] },
      ]
  }); };
  var rustyLaser = function () { return ({
      type: "ITEM",
      name: "Rusty Laser",
      flavor: "You find a rusty laser cannon, it still appears to be functional",
      item: laser()
  }); };
  var spacePirate = function () { return ({
      type: "ENCOUNTER",
      name: "Space Pirates",
      flavor: "Out of nowhere, a small vessel approaches. It's clearly not friendly.",
      attack: 5,
      defense: 2,
      speed: 5,
      health: 12,
      maxHealth: 12,
      moves: [
          undefined,
          undefined,
          {
              name: "Close call",
              flavor: "A laser shot just barely misses your ship",
              effect: []
          },
          undefined,
          {
              name: "Laser",
              flavor: "Your ship is hit by a laser barrage",
              effect: [{ self: false, stat: "HEALTH", diff: { amount: -2 } }]
          },
          {
              name: "Critical hit",
              flavor: "A laser hits your ship's warp drives",
              effect: [{ self: false, stat: "HEALTH", diff: { amount: -4 } }]
          },
      ]
  }); };
  var rustyTurret = function () { return ({
      type: "ENCOUNTER",
      name: "Rusty Turret",
      flavor: "You approach a rusty turret. It does not look like much of a threat.",
      attack: 1,
      defense: 4,
      speed: 0,
      health: 5,
      maxHealth: 5,
      moves: [
          undefined,
          undefined,
          {
              name: "Whirr",
              flavor: "The turret whirrs, but does not manage to do anything else",
              effect: []
          },
          undefined,
          {
              name: "Repair hull",
              flavor: "The turret manages to restore its hull",
              effect: [{ self: true, stat: "HEALTH", diff: { amount: 2 } }]
          },
          {
              name: "Laser",
              flavor: "Your ship is hit by light laser",
              effect: [{ self: false, stat: "HEALTH", diff: { amount: -1 } }]
          },
      ]
  }); };

  var getInitialState = function () { return ({
      ship: null,
      isDead: false,
      isWin: false,
      score: 0,
      worldDeck: [rustyLaser(), rustyTurret(), niftyTechnician(), spacePirate()],
      currentCard: null,
      inBattle: false,
      myTurn: true,
      canRoll: false,
      maxDice: 3,
      dice: [],
      selectedDice: null
  }); };
  var reducer = function (state, action) {
      switch (action.type) {
          case "SELECT_SHIP":
              return __assign(__assign({}, state), { ship: action.ship });
          case "TURN_CARD":
              return state.worldDeck.length > 0
                  ? __assign(__assign({}, state), { score: state.score + 1, currentCard: state.worldDeck[0], worldDeck: state.worldDeck.slice(1) }) : __assign(__assign({}, state), { isWin: true });
          case "INSTALL_ITEM":
              return __assign(__assign({}, state), { ship: __assign(__assign({}, state.ship), { modules: __spreadArray([action.item], state.ship.modules) }), currentCard: {
                      type: "INFO",
                      name: "Ship upgraded",
                      flavor: "You installed the " + action.item.name + "."
                  } });
          case "MAKE_CHOICE": {
              var newShip = action.choice.effect.reduce(function (ship, effect) {
                  var _a;
                  var stat = effect.stat.toLowerCase();
                  var buff = effect.diff.stat
                      ? state.ship[effect.diff.stat.toLowerCase()]
                      : 0;
                  return __assign(__assign({}, ship), (_a = {}, _a[stat] = state.ship[stat] + effect.diff.amount + buff, _a));
              }, state.ship);
              return __assign(__assign({}, state), { ship: newShip, currentCard: {
                      type: "INFO",
                      name: state.currentCard.name,
                      flavor: action.choice.flavor
                  } });
          }
          case "ATTEMPT_ESCAPE":
              return __assign(__assign({}, state), { ship: __assign(__assign({}, state.ship), { health: state.ship.health - 1 }), currentCard: {
                      type: "INFO",
                      name: "Narrow escape",
                      flavor: "You managed to get away from the " + action.enemy.name + ", but not before they managed to hit you with a laser beam."
                  } });
          case "BATTLE_STATIONS":
              return __assign(__assign({}, state), { inBattle: true, dice: [], canRoll: true, myTurn: true });
          case "ROLL_DICE":
              return __assign(__assign({}, state), { dice: action.dice, canRoll: false, selectedDice: null });
          case "SELECT_DICE":
              return __assign(__assign({}, state), { selectedDice: action.index });
          case "ASSIGN_DICE":
              return __assign(__assign({}, state), { dice: state.dice.filter(function (d, ix) { return ix !== state.selectedDice; }), selectedDice: null, ship: __assign(__assign({}, state.ship), { modules: state.ship.modules.map(function (m, ix) {
                          if (ix === action.moduleIndex) {
                              if (m.cost.kind === "TOTAL") {
                                  return __assign(__assign({}, m), { cost: __assign(__assign({}, m.cost), { assigned: m.cost.assigned + state.dice[state.selectedDice] }) });
                              }
                              else {
                                  var newAssigned = m.cost.assigned;
                                  newAssigned[action.diceIndex] = state.dice[state.selectedDice];
                                  return __assign(__assign({}, m), { cost: __assign(__assign({}, m.cost), { assigned: newAssigned }) });
                              }
                          }
                          else {
                              return m;
                          }
                      }) }) });
          case "USE_WEAPON": {
              var mod = state.ship.modules[action.index];
              var sumAll = function (assigned) {
                  return assigned instanceof Array
                      ? assigned.reduce(function (a, x) { return a + x; }, 0)
                      : assigned;
              };
              var damage = mod.damage
                  ? mod.damage.kind === "FIXED"
                      ? mod.damage.amount
                      : sumAll(mod.cost.assigned)
                  : 0;
              var repair = mod.repair
                  ? mod.repair.kind === "FIXED"
                      ? mod.repair.amount
                      : sumAll(mod.cost.assigned)
                  : 0;
              var newEnemy_1 = damage
                  ? __assign(__assign({}, state.currentCard), { health: state.currentCard.health - damage }) : state.currentCard;
              var newShip = repair
                  ? __assign(__assign({}, state.ship), { health: Math.min(state.ship.health + repair, state.ship.maxHealth) }) : state.ship;
              var wonbattle = newEnemy_1.health > 0
                  ? {}
                  : {
                      inBattle: false,
                      currentCard: {
                          type: "INFO",
                          name: "Victory!",
                          flavor: "You defeated the " + state.currentCard.name
                      }
                  };
              return __assign(__assign(__assign({}, state), { currentCard: newEnemy_1, ship: __assign(__assign({}, newShip), { modules: state.ship.modules.map(function (m, ix) {
                          return ix === action.index || newEnemy_1.health <= 0
                              ? __assign(__assign({}, m), { cost: __assign(__assign({}, m.cost), { assigned: m.cost.kind === "TOTAL" ? 0 : [] }) }) : m;
                      }) }) }), wonbattle);
          }
          case "END_TURN":
              return __assign(__assign({}, state), { myTurn: false, dice: [], selectedDice: null, ship: __assign(__assign({}, state.ship), { modules: state.ship.modules.map(function (m) { return (__assign(__assign({}, m), { cost: __assign(__assign({}, m.cost), { assigned: m.cost.kind === "TOTAL" ? m.cost.assigned : [] }) })); }) }) });
          case "ENEMY_MOVE": {
              var newShip = action.move.effect
                  .filter(function (e) { return !e.self; })
                  .reduce(function (ship, effect) {
                  var _a;
                  var stat = effect.stat.toLowerCase();
                  var buff = effect.diff.stat
                      ? state.currentCard[effect.diff.stat.toLowerCase()]
                      : 0;
                  return __assign(__assign({}, ship), (_a = {}, _a[stat] = state.ship[stat] + effect.diff.amount + buff, _a));
              }, state.ship);
              var newCurrentCard = action.move.effect
                  .filter(function (e) { return e.self; })
                  .reduce(function (enemy, effect) {
                  var _a;
                  var stat = effect.stat.toLowerCase();
                  var buff = effect.diff.stat
                      ? state.currentCard[effect.diff.stat.toLowerCase()]
                      : 0;
                  return __assign(__assign({}, enemy), (_a = {}, _a[stat] = state.currentCard[stat] + effect.diff.amount + buff, _a));
              }, state.currentCard);
              newCurrentCard.health = Math.min(newCurrentCard.health, newCurrentCard.maxHealth);
              var gameover = newShip.health > 0
                  ? {}
                  : {
                      isDead: true,
                      inBattle: false
                  };
              return __assign(__assign(__assign({}, state), { ship: newShip, currentCard: newCurrentCard, myTurn: true, canRoll: true }), gameover);
          }
          case "REPLAY":
              return getInitialState();
          default:
              throw new Error("Unexpected action type " + action.type);
      }
  };

  window.addEventListener("load", function () {
      var root = document.getElementById("root");
      var initialState = getInitialState();
      N(a$1(PreduxProvider, { initialState: initialState, reducer: reducer }, a$1(Game, null)), root);
  });

})));
