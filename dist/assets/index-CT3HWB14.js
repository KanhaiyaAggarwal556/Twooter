function sc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dc = { exports: {} },
  Ei = {},
  fc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ul = Symbol.for("react.element"),
  rp = Symbol.for("react.portal"),
  lp = Symbol.for("react.fragment"),
  ip = Symbol.for("react.strict_mode"),
  op = Symbol.for("react.profiler"),
  ap = Symbol.for("react.provider"),
  up = Symbol.for("react.context"),
  sp = Symbol.for("react.forward_ref"),
  cp = Symbol.for("react.suspense"),
  dp = Symbol.for("react.memo"),
  fp = Symbol.for("react.lazy"),
  Tu = Symbol.iterator;
function pp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tu && e[Tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hc = Object.assign,
  mc = {};
function ar(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mc),
    (this.updater = n || pc);
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vc() {}
vc.prototype = ar.prototype;
function ga(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mc),
    (this.updater = n || pc);
}
var wa = (ga.prototype = new vc());
wa.constructor = ga;
hc(wa, ar.prototype);
wa.isPureReactComponent = !0;
var Du = Array.isArray,
  yc = Object.prototype.hasOwnProperty,
  xa = { current: null },
  gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      yc.call(t, r) && !gc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: ul,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xa.current,
  };
}
function hp(e, t) {
  return {
    $$typeof: ul,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ul;
}
function mp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zu = /\/+/g;
function Qi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mp("" + e.key)
    : t.toString(36);
}
function Fl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ul:
          case rp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Qi(o, 0) : r),
      Du(l)
        ? ((n = ""),
          e != null && (n = e.replace(zu, "$&/") + "/"),
          Fl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Sa(l) &&
            (l = hp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(zu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + Qi(i, a);
      o += Fl(i, t, n, u, l);
    }
  else if (((u = pp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Qi(i, a++)), (o += Fl(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function wl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function vp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Il = { transition: null },
  yp = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: xa,
  };
function xc() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: wl,
  forEach: function (e, t, n) {
    wl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = ar;
K.Fragment = lp;
K.Profiler = op;
K.PureComponent = ga;
K.StrictMode = ip;
K.Suspense = cp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
K.act = xc;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = hc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = xa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      yc.call(t, u) &&
        !gc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: ul, type: e.type, key: l, ref: i, props: r, _owner: o };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: up,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ap, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = wc;
K.createFactory = function (e) {
  var t = wc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: sp, render: e };
};
K.isValidElement = Sa;
K.lazy = function (e) {
  return { $$typeof: fp, _payload: { _status: -1, _result: e }, _init: vp };
};
K.memo = function (e, t) {
  return { $$typeof: dp, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
K.unstable_act = xc;
K.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Oe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
K.useId = function () {
  return Oe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Oe.current.useRef(e);
};
K.useState = function (e) {
  return Oe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Oe.current.useTransition();
};
K.version = "18.3.1";
fc.exports = K;
var P = fc.exports;
const _t = cc(P),
  gp = sc({ __proto__: null, default: _t }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wp = P,
  xp = Symbol.for("react.element"),
  Sp = Symbol.for("react.fragment"),
  Ep = Object.prototype.hasOwnProperty,
  kp = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ep.call(t, r) && !Cp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: xp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: kp.current,
  };
}
Ei.Fragment = Sp;
Ei.jsx = Sc;
Ei.jsxs = Sc;
dc.exports = Ei;
var g = dc.exports,
  So = {},
  Ec = { exports: {} },
  Ge = {},
  kc = { exports: {} },
  Cc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, A) {
    var $ = j.length;
    j.push(A);
    e: for (; 0 < $; ) {
      var Z = ($ - 1) >>> 1,
        q = j[Z];
      if (0 < l(q, A)) (j[Z] = A), (j[$] = q), ($ = Z);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var A = j[0],
      $ = j.pop();
    if ($ !== A) {
      j[0] = $;
      e: for (var Z = 0, q = j.length, ut = q >>> 1; Z < ut; ) {
        var He = 2 * (Z + 1) - 1,
          Ve = j[He],
          Te = He + 1,
          Ze = j[Te];
        if (0 > l(Ve, $))
          Te < q && 0 > l(Ze, Ve)
            ? ((j[Z] = Ze), (j[Te] = $), (Z = Te))
            : ((j[Z] = Ve), (j[He] = $), (Z = He));
        else if (Te < q && 0 > l(Ze, $)) (j[Z] = Ze), (j[Te] = $), (Z = Te);
        else break e;
      }
    }
    return A;
  }
  function l(j, A) {
    var $ = j.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : j.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    d = null,
    p = 3,
    S = !1,
    E = !1,
    x = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(j) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= j)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function C(j) {
    if (((x = !1), m(j), !E))
      if (n(u) !== null) (E = !0), Ot(R);
      else {
        var A = n(s);
        A !== null && Ft(C, A.startTime - j);
      }
  }
  function R(j, A) {
    (E = !1), x && ((x = !1), h(L), (L = -1)), (S = !0);
    var $ = p;
    try {
      for (
        m(A), d = n(u);
        d !== null && (!(d.expirationTime > A) || (j && !Y()));

      ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var q = Z(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(u) && r(u),
            m(A);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ut = !0;
      else {
        var He = n(s);
        He !== null && Ft(C, He.startTime - A), (ut = !1);
      }
      return ut;
    } finally {
      (d = null), (p = $), (S = !1);
    }
  }
  var D = !1,
    v = null,
    L = -1,
    I = 5,
    O = -1;
  function Y() {
    return !(e.unstable_now() - O < I);
  }
  function de() {
    if (v !== null) {
      var j = e.unstable_now();
      O = j;
      var A = !0;
      try {
        A = v(!0, j);
      } finally {
        A ? ie() : ((D = !1), (v = null));
      }
    } else D = !1;
  }
  var ie;
  if (typeof f == "function")
    ie = function () {
      f(de);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      at = xe.port2;
    (xe.port1.onmessage = de),
      (ie = function () {
        at.postMessage(null);
      });
  } else
    ie = function () {
      T(de, 0);
    };
  function Ot(j) {
    (v = j), D || ((D = !0), ie());
  }
  function Ft(j, A) {
    L = T(function () {
      j(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || S || ((E = !0), Ot(R));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var $ = p;
      p = A;
      try {
        return j();
      } finally {
        p = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, A) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = p;
      p = j;
      try {
        return A();
      } finally {
        p = $;
      }
    }),
    (e.unstable_scheduleCallback = function (j, A, $) {
      var Z = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Z + $ : Z))
          : ($ = Z),
        j)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = $ + q),
        (j = {
          id: c++,
          callback: A,
          priorityLevel: j,
          startTime: $,
          expirationTime: q,
          sortIndex: -1,
        }),
        $ > Z
          ? ((j.sortIndex = $),
            t(s, j),
            n(u) === null &&
              j === n(s) &&
              (x ? (h(L), (L = -1)) : (x = !0), Ft(C, $ - Z)))
          : ((j.sortIndex = q), t(u, j), E || S || ((E = !0), Ot(R))),
        j
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (j) {
      var A = p;
      return function () {
        var $ = p;
        p = A;
        try {
          return j.apply(this, arguments);
        } finally {
          p = $;
        }
      };
    });
})(Cc);
kc.exports = Cc;
var Pp = kc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Np = P,
  Xe = Pp;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pc = new Set(),
  Vr = {};
function Nn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) Pc.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Eo = Object.prototype.hasOwnProperty,
  _p =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Ou = {};
function jp(e) {
  return Eo.call(Ou, e)
    ? !0
    : Eo.call(Mu, e)
    ? !1
    : _p.test(e)
    ? (Ou[e] = !0)
    : ((Mu[e] = !0), !1);
}
function Rp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lp(e, t, n, r) {
  if (t === null || typeof t > "u" || Rp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ea = /[\-:]([a-z])/g;
function ka(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ea, ka);
    Ne[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ea, ka);
    Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ea, ka);
  Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ca(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lp(t, n, l, r) && (n = null),
    r || l === null
      ? jp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  On = Symbol.for("react.fragment"),
  Pa = Symbol.for("react.strict_mode"),
  ko = Symbol.for("react.profiler"),
  Nc = Symbol.for("react.provider"),
  _c = Symbol.for("react.context"),
  Na = Symbol.for("react.forward_ref"),
  Co = Symbol.for("react.suspense"),
  Po = Symbol.for("react.suspense_list"),
  _a = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  jc = Symbol.for("react.offscreen"),
  Fu = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fu && e[Fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Ki;
function jr(e) {
  if (Ki === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ki = (t && t[1]) || "";
    }
  return (
    `
` +
    Ki +
    e
  );
}
var Yi = !1;
function Xi(e, t) {
  if (!e || Yi) return "";
  Yi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Yi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function Tp(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xi(e.type, !1)), e;
    case 11:
      return (e = Xi(e.type.render, !1)), e;
    case 1:
      return (e = Xi(e.type, !0)), e;
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Mn:
      return "Portal";
    case ko:
      return "Profiler";
    case Pa:
      return "StrictMode";
    case Co:
      return "Suspense";
    case Po:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _c:
        return (e.displayName || "Context") + ".Consumer";
      case Nc:
        return (e._context.displayName || "Context") + ".Provider";
      case Na:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _a:
        return (
          (t = e.displayName || null), t !== null ? t : No(e.type) || "Memo"
        );
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return No(e(t));
        } catch {}
    }
  return null;
}
function Dp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return No(t);
    case 8:
      return t === Pa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zp(e) {
  var t = Rc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sl(e) {
  e._valueTracker || (e._valueTracker = zp(e));
}
function Lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _o(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Tc(e, t) {
  (t = t.checked), t != null && Ca(e, "checked", t, !1);
}
function jo(e, t) {
  Tc(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ro(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ro(e, t, n) {
  (t !== "number" || Xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Rr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Dc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function To(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var El,
  Mc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        El = El || document.createElement("div"),
          El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = El.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  Mp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function Oc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Fc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Oc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Op = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Do(e, t) {
  if (t) {
    if (Op[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function zo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Mo = null;
function ja(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oo = null,
  Xn = null,
  Gn = null;
function $u(e) {
  if ((e = dl(e))) {
    if (typeof Oo != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = _i(t)), Oo(e.stateNode, e.type, t));
  }
}
function Ic(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function Uc() {
  if (Xn) {
    var e = Xn,
      t = Gn;
    if (((Gn = Xn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
  }
}
function Ac(e, t) {
  return e(t);
}
function Bc() {}
var Gi = !1;
function $c(e, t, n) {
  if (Gi) return e(t, n);
  Gi = !0;
  try {
    return Ac(e, t, n);
  } finally {
    (Gi = !1), (Xn !== null || Gn !== null) && (Bc(), Uc());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Fo = !1;
if (Lt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Fo = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Fo = !1;
  }
function Fp(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var zr = !1,
  Gl = null,
  Jl = !1,
  Io = null,
  Ip = {
    onError: function (e) {
      (zr = !0), (Gl = e);
    },
  };
function Up(e, t, n, r, l, i, o, a, u) {
  (zr = !1), (Gl = null), Fp.apply(Ip, arguments);
}
function Ap(e, t, n, r, l, i, o, a, u) {
  if ((Up.apply(this, arguments), zr)) {
    if (zr) {
      var s = Gl;
      (zr = !1), (Gl = null);
    } else throw Error(N(198));
    Jl || ((Jl = !0), (Io = s));
  }
}
function _n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hu(e) {
  if (_n(e) !== e) throw Error(N(188));
}
function Bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Hu(l), e;
        if (i === r) return Hu(l), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Vc(e) {
  return (e = Bp(e)), e !== null ? Wc(e) : null;
}
function Wc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qc = Xe.unstable_scheduleCallback,
  Vu = Xe.unstable_cancelCallback,
  $p = Xe.unstable_shouldYield,
  Hp = Xe.unstable_requestPaint,
  fe = Xe.unstable_now,
  Vp = Xe.unstable_getCurrentPriorityLevel,
  Ra = Xe.unstable_ImmediatePriority,
  Kc = Xe.unstable_UserBlockingPriority,
  Zl = Xe.unstable_NormalPriority,
  Wp = Xe.unstable_LowPriority,
  Yc = Xe.unstable_IdlePriority,
  ki = null,
  St = null;
function Qp(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ht = Math.clz32 ? Math.clz32 : Xp,
  Kp = Math.log,
  Yp = Math.LN2;
function Xp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kp(e) / Yp) | 0)) | 0;
}
var kl = 64,
  Cl = 4194304;
function Lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Lr(a)) : ((i &= o), i !== 0 && (r = Lr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Lr(o)) : i !== 0 && (r = Lr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Gp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ht(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Gp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Uo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xc() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function Ji(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ht(t)),
    (e[t] = n);
}
function Zp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ht(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function La(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var J = 0;
function Gc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jc,
  Ta,
  Zc,
  qc,
  bc,
  Ao = !1,
  Pl = [],
  Xt = null,
  Gt = null,
  Jt = null,
  Kr = new Map(),
  Yr = new Map(),
  Wt = [],
  qp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function wr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = dl(t)), t !== null && Ta(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Xt = wr(Xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Gt = wr(Gt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Jt = wr(Jt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Kr.set(i, wr(Kr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Yr.set(i, wr(Yr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ed(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hc(n)), t !== null)) {
          (e.blockedOn = t),
            bc(e.priority, function () {
              Zc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Mo = r), n.target.dispatchEvent(r), (Mo = null);
    } else return (t = dl(n)), t !== null && Ta(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qu(e, t, n) {
  Ul(e) && n.delete(t);
}
function eh() {
  (Ao = !1),
    Xt !== null && Ul(Xt) && (Xt = null),
    Gt !== null && Ul(Gt) && (Gt = null),
    Jt !== null && Ul(Jt) && (Jt = null),
    Kr.forEach(Qu),
    Yr.forEach(Qu);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ao ||
      ((Ao = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, eh)));
}
function Xr(e) {
  function t(l) {
    return xr(l, e);
  }
  if (0 < Pl.length) {
    xr(Pl[0], e);
    for (var n = 1; n < Pl.length; n++) {
      var r = Pl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && xr(Xt, e),
      Gt !== null && xr(Gt, e),
      Jt !== null && xr(Jt, e),
      Kr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    ed(n), n.blockedOn === null && Wt.shift();
}
var Jn = Mt.ReactCurrentBatchConfig,
  bl = !0;
function th(e, t, n, r) {
  var l = J,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (J = 1), Da(e, t, n, r);
  } finally {
    (J = l), (Jn.transition = i);
  }
}
function nh(e, t, n, r) {
  var l = J,
    i = Jn.transition;
  Jn.transition = null;
  try {
    (J = 4), Da(e, t, n, r);
  } finally {
    (J = l), (Jn.transition = i);
  }
}
function Da(e, t, n, r) {
  if (bl) {
    var l = Bo(e, t, n, r);
    if (l === null) oo(e, t, r, ei, n), Wu(e, r);
    else if (bp(l, e, t, n, r)) r.stopPropagation();
    else if ((Wu(e, r), t & 4 && -1 < qp.indexOf(e))) {
      for (; l !== null; ) {
        var i = dl(l);
        if (
          (i !== null && Jc(i),
          (i = Bo(e, t, n, r)),
          i === null && oo(e, t, r, ei, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else oo(e, t, r, null, n);
  }
}
var ei = null;
function Bo(e, t, n, r) {
  if (((ei = null), (e = ja(r)), (e = pn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ei = e), null;
}
function td(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vp()) {
        case Ra:
          return 1;
        case Kc:
          return 4;
        case Zl:
        case Wp:
          return 16;
        case Yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  za = null,
  Al = null;
function nd() {
  if (Al) return Al;
  var e,
    t = za,
    n = t.length,
    r,
    l = "value" in Kt ? Kt.value : Kt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Al = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Bl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nl() {
  return !0;
}
function Ku() {
  return !1;
}
function Je(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Nl
        : Ku),
      (this.isPropagationStopped = Ku),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nl));
      },
      persist: function () {},
      isPersistent: Nl,
    }),
    t
  );
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ma = Je(ur),
  cl = se({}, ur, { view: 0, detail: 0 }),
  rh = Je(cl),
  Zi,
  qi,
  Sr,
  Ci = se({}, cl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Oa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sr &&
            (Sr && e.type === "mousemove"
              ? ((Zi = e.screenX - Sr.screenX), (qi = e.screenY - Sr.screenY))
              : (qi = Zi = 0),
            (Sr = e)),
          Zi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qi;
    },
  }),
  Yu = Je(Ci),
  lh = se({}, Ci, { dataTransfer: 0 }),
  ih = Je(lh),
  oh = se({}, cl, { relatedTarget: 0 }),
  bi = Je(oh),
  ah = se({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uh = Je(ah),
  sh = se({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ch = Je(sh),
  dh = se({}, ur, { data: 0 }),
  Xu = Je(dh),
  fh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ph = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1;
}
function Oa() {
  return mh;
}
var vh = se({}, cl, {
    key: function (e) {
      if (e.key) {
        var t = fh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ph[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Oa,
    charCode: function (e) {
      return e.type === "keypress" ? Bl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yh = Je(vh),
  gh = se({}, Ci, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gu = Je(gh),
  wh = se({}, cl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Oa,
  }),
  xh = Je(wh),
  Sh = se({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eh = Je(Sh),
  kh = se({}, Ci, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ch = Je(kh),
  Ph = [9, 13, 27, 32],
  Fa = Lt && "CompositionEvent" in window,
  Mr = null;
Lt && "documentMode" in document && (Mr = document.documentMode);
var Nh = Lt && "TextEvent" in window && !Mr,
  rd = Lt && (!Fa || (Mr && 8 < Mr && 11 >= Mr)),
  Ju = " ",
  Zu = !1;
function ld(e, t) {
  switch (e) {
    case "keyup":
      return Ph.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function id(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function _h(e, t) {
  switch (e) {
    case "compositionend":
      return id(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zu = !0), Ju);
    case "textInput":
      return (e = t.data), e === Ju && Zu ? null : e;
    default:
      return null;
  }
}
function jh(e, t) {
  if (Fn)
    return e === "compositionend" || (!Fa && ld(e, t))
      ? ((e = nd()), (Al = za = Kt = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rh[e.type] : t === "textarea";
}
function od(e, t, n, r) {
  Ic(r),
    (t = ti(t, "onChange")),
    0 < t.length &&
      ((n = new Ma("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Or = null,
  Gr = null;
function Lh(e) {
  yd(e, 0);
}
function Pi(e) {
  var t = An(e);
  if (Lc(t)) return e;
}
function Th(e, t) {
  if (e === "change") return t;
}
var ad = !1;
if (Lt) {
  var eo;
  if (Lt) {
    var to = "oninput" in document;
    if (!to) {
      var bu = document.createElement("div");
      bu.setAttribute("oninput", "return;"),
        (to = typeof bu.oninput == "function");
    }
    eo = to;
  } else eo = !1;
  ad = eo && (!document.documentMode || 9 < document.documentMode);
}
function es() {
  Or && (Or.detachEvent("onpropertychange", ud), (Gr = Or = null));
}
function ud(e) {
  if (e.propertyName === "value" && Pi(Gr)) {
    var t = [];
    od(t, Gr, e, ja(e)), $c(Lh, t);
  }
}
function Dh(e, t, n) {
  e === "focusin"
    ? (es(), (Or = t), (Gr = n), Or.attachEvent("onpropertychange", ud))
    : e === "focusout" && es();
}
function zh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pi(Gr);
}
function Mh(e, t) {
  if (e === "click") return Pi(t);
}
function Oh(e, t) {
  if (e === "input" || e === "change") return Pi(t);
}
function Fh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Fh;
function Jr(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Eo.call(t, l) || !vt(e[l], t[l])) return !1;
  }
  return !0;
}
function ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ns(e, t) {
  var n = ts(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ts(n);
  }
}
function sd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? sd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cd() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ih(e) {
  var t = cd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ia(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ns(n, i));
        var o = ns(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Uh = Lt && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  $o = null,
  Fr = null,
  Ho = !1;
function rs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ho ||
    In == null ||
    In !== Xl(r) ||
    ((r = In),
    "selectionStart" in r && Ia(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Jr(Fr, r)) ||
      ((Fr = r),
      (r = ti($o, "onSelect")),
      0 < r.length &&
        ((t = new Ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = In))));
}
function _l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Un = {
    animationend: _l("Animation", "AnimationEnd"),
    animationiteration: _l("Animation", "AnimationIteration"),
    animationstart: _l("Animation", "AnimationStart"),
    transitionend: _l("Transition", "TransitionEnd"),
  },
  no = {},
  dd = {};
Lt &&
  ((dd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function Ni(e) {
  if (no[e]) return no[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dd) return (no[e] = t[n]);
  return e;
}
var fd = Ni("animationend"),
  pd = Ni("animationiteration"),
  hd = Ni("animationstart"),
  md = Ni("transitionend"),
  vd = new Map(),
  ls =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  vd.set(e, t), Nn(t, [e]);
}
for (var ro = 0; ro < ls.length; ro++) {
  var lo = ls[ro],
    Ah = lo.toLowerCase(),
    Bh = lo[0].toUpperCase() + lo.slice(1);
  ln(Ah, "on" + Bh);
}
ln(fd, "onAnimationEnd");
ln(pd, "onAnimationIteration");
ln(hd, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(md, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $h = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function is(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ap(r, t, void 0, e), (e.currentTarget = null);
}
function yd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          is(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          is(l, a, s), (i = u);
        }
    }
  }
  if (Jl) throw ((e = Io), (Jl = !1), (Io = null), e);
}
function ee(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (gd(t, e, 2, !1), n.add(r));
}
function io(e, t, n) {
  var r = 0;
  t && (r |= 4), gd(n, e, r, t);
}
var jl = "_reactListening" + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[jl]) {
    (e[jl] = !0),
      Pc.forEach(function (n) {
        n !== "selectionchange" && ($h.has(n) || io(n, !1, e), io(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jl] || ((t[jl] = !0), io("selectionchange", !1, t));
  }
}
function gd(e, t, n, r) {
  switch (td(t)) {
    case 1:
      var l = th;
      break;
    case 4:
      l = nh;
      break;
    default:
      l = Da;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function oo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = pn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  $c(function () {
    var s = i,
      c = ja(n),
      d = [];
    e: {
      var p = vd.get(e);
      if (p !== void 0) {
        var S = Ma,
          E = e;
        switch (e) {
          case "keypress":
            if (Bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = yh;
            break;
          case "focusin":
            (E = "focus"), (S = bi);
            break;
          case "focusout":
            (E = "blur"), (S = bi);
            break;
          case "beforeblur":
          case "afterblur":
            S = bi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = ih;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = xh;
            break;
          case fd:
          case pd:
          case hd:
            S = uh;
            break;
          case md:
            S = Eh;
            break;
          case "scroll":
            S = rh;
            break;
          case "wheel":
            S = Ch;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ch;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Gu;
        }
        var x = (t & 4) !== 0,
          T = !x && e === "scroll",
          h = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var f = s, m; f !== null; ) {
          m = f;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              h !== null && ((C = Qr(f, h)), C != null && x.push(qr(f, C, m)))),
            T)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((p = new S(p, E, null, n, c)), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Mo &&
            (E = n.relatedTarget || n.fromElement) &&
            (pn(E) || E[Tt]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((E = n.relatedTarget || n.toElement),
              (S = s),
              (E = E ? pn(E) : null),
              E !== null &&
                ((T = _n(E)), E !== T || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((S = null), (E = s)),
          S !== E)
        ) {
          if (
            ((x = Yu),
            (C = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Gu),
              (C = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (T = S == null ? p : An(S)),
            (m = E == null ? p : An(E)),
            (p = new x(C, f + "leave", S, n, c)),
            (p.target = T),
            (p.relatedTarget = m),
            (C = null),
            pn(c) === s &&
              ((x = new x(h, f + "enter", E, n, c)),
              (x.target = m),
              (x.relatedTarget = T),
              (C = x)),
            (T = C),
            S && E)
          )
            t: {
              for (x = S, h = E, f = 0, m = x; m; m = Dn(m)) f++;
              for (m = 0, C = h; C; C = Dn(C)) m++;
              for (; 0 < f - m; ) (x = Dn(x)), f--;
              for (; 0 < m - f; ) (h = Dn(h)), m--;
              for (; f--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = Dn(x)), (h = Dn(h));
              }
              x = null;
            }
          else x = null;
          S !== null && os(d, p, S, x, !1),
            E !== null && T !== null && os(d, T, E, x, !0);
        }
      }
      e: {
        if (
          ((p = s ? An(s) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var R = Th;
        else if (qu(p))
          if (ad) R = Oh;
          else {
            R = zh;
            var D = Dh;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (R = Mh);
        if (R && (R = R(e, s))) {
          od(d, R, n, c);
          break e;
        }
        D && D(e, p, s),
          e === "focusout" &&
            (D = p._wrapperState) &&
            D.controlled &&
            p.type === "number" &&
            Ro(p, "number", p.value);
      }
      switch (((D = s ? An(s) : window), e)) {
        case "focusin":
          (qu(D) || D.contentEditable === "true") &&
            ((In = D), ($o = s), (Fr = null));
          break;
        case "focusout":
          Fr = $o = In = null;
          break;
        case "mousedown":
          Ho = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ho = !1), rs(d, n, c);
          break;
        case "selectionchange":
          if (Uh) break;
        case "keydown":
        case "keyup":
          rs(d, n, c);
      }
      var v;
      if (Fa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Fn
          ? ld(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (rd &&
          n.locale !== "ko" &&
          (Fn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Fn && (v = nd())
            : ((Kt = c),
              (za = "value" in Kt ? Kt.value : Kt.textContent),
              (Fn = !0))),
        (D = ti(s, L)),
        0 < D.length &&
          ((L = new Xu(L, e, null, n, c)),
          d.push({ event: L, listeners: D }),
          v ? (L.data = v) : ((v = id(n)), v !== null && (L.data = v)))),
        (v = Nh ? _h(e, n) : jh(e, n)) &&
          ((s = ti(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Xu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = v)));
    }
    yd(d, t);
  });
}
function qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ti(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Qr(e, n)),
      i != null && r.unshift(qr(e, i, l)),
      (i = Qr(e, t)),
      i != null && r.push(qr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function os(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Qr(n, i)), u != null && o.unshift(qr(n, u, a)))
        : l || ((u = Qr(n, i)), u != null && o.push(qr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Hh = /\r\n?/g,
  Vh = /\u0000|\uFFFD/g;
function as(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hh,
      `
`
    )
    .replace(Vh, "");
}
function Rl(e, t, n) {
  if (((t = as(t)), as(e) !== t && n)) throw Error(N(425));
}
function ni() {}
var Vo = null,
  Wo = null;
function Qo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
  Wh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  us = typeof Promise == "function" ? Promise : void 0,
  Qh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof us < "u"
      ? function (e) {
          return us.resolve(null).then(e).catch(Kh);
        }
      : Ko;
function Kh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ao(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ss(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + sr,
  br = "__reactProps$" + sr,
  Tt = "__reactContainer$" + sr,
  Yo = "__reactEvents$" + sr,
  Yh = "__reactListeners$" + sr,
  Xh = "__reactHandles$" + sr;
function pn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ss(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = ss(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dl(e) {
  return (
    (e = e[xt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function _i(e) {
  return e[br] || null;
}
var Xo = [],
  Bn = -1;
function on(e) {
  return { current: e };
}
function te(e) {
  0 > Bn || ((e.current = Xo[Bn]), (Xo[Bn] = null), Bn--);
}
function b(e, t) {
  Bn++, (Xo[Bn] = e.current), (e.current = t);
}
var rn = {},
  Le = on(rn),
  Ae = on(!1),
  xn = rn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function ri() {
  te(Ae), te(Le);
}
function cs(e, t, n) {
  if (Le.current !== rn) throw Error(N(168));
  b(Le, t), b(Ae, n);
}
function wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Dp(e) || "Unknown", l));
  return se({}, n, r);
}
function li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (xn = Le.current),
    b(Le, e),
    b(Ae, Ae.current),
    !0
  );
}
function ds(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = wd(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(Le),
      b(Le, e))
    : te(Ae),
    b(Ae, n);
}
var Ct = null,
  ji = !1,
  uo = !1;
function xd(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Gh(e) {
  (ji = !0), xd(e);
}
function an() {
  if (!uo && Ct !== null) {
    uo = !0;
    var e = 0,
      t = J;
    try {
      var n = Ct;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (ji = !1);
    } catch (l) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Qc(Ra, an), l);
    } finally {
      (J = t), (uo = !1);
    }
  }
  return null;
}
var $n = [],
  Hn = 0,
  ii = null,
  oi = 0,
  et = [],
  tt = 0,
  Sn = null,
  Pt = 1,
  Nt = "";
function dn(e, t) {
  ($n[Hn++] = oi), ($n[Hn++] = ii), (ii = e), (oi = t);
}
function Sd(e, t, n) {
  (et[tt++] = Pt), (et[tt++] = Nt), (et[tt++] = Sn), (Sn = e);
  var r = Pt;
  e = Nt;
  var l = 32 - ht(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ht(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Pt = (1 << (32 - ht(t) + l)) | (n << l) | r),
      (Nt = i + e);
  } else (Pt = (1 << i) | (n << l) | r), (Nt = e);
}
function Ua(e) {
  e.return !== null && (dn(e, 1), Sd(e, 1, 0));
}
function Aa(e) {
  for (; e === ii; )
    (ii = $n[--Hn]), ($n[Hn] = null), (oi = $n[--Hn]), ($n[Hn] = null);
  for (; e === Sn; )
    (Sn = et[--tt]),
      (et[tt] = null),
      (Nt = et[--tt]),
      (et[tt] = null),
      (Pt = et[--tt]),
      (et[tt] = null);
}
var Ye = null,
  Ke = null,
  le = !1,
  pt = null;
function Ed(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sn !== null ? { id: Pt, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jo(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!fs(e, t)) {
        if (Go(e)) throw Error(N(418));
        t = Zt(n.nextSibling);
        var r = Ye;
        t && fs(e, t)
          ? Ed(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Go(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Ll(e) {
  if (e !== Ye) return !1;
  if (!le) return ps(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Go(e)) throw (kd(), Error(N(418)));
    for (; t; ) Ed(e, t), (t = Zt(t.nextSibling));
  }
  if ((ps(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function kd() {
  for (var e = Ke; e; ) e = Zt(e.nextSibling);
}
function tr() {
  (Ke = Ye = null), (le = !1);
}
function Ba(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var Jh = Mt.ReactCurrentBatchConfig;
function Er(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Tl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function hs(e) {
  var t = e._init;
  return t(e._payload);
}
function Cd(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function l(h, f) {
    return (h = tn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, f, m, C) {
    return f === null || f.tag !== 6
      ? ((f = vo(m, h.mode, C)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function u(h, f, m, C) {
    var R = m.type;
    return R === On
      ? c(h, f, m.props.children, C, m.key)
      : f !== null &&
        (f.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === Ht &&
            hs(R) === f.type))
      ? ((C = l(f, m.props)), (C.ref = Er(h, f, m)), (C.return = h), C)
      : ((C = Yl(m.type, m.key, m.props, null, h.mode, C)),
        (C.ref = Er(h, f, m)),
        (C.return = h),
        C);
  }
  function s(h, f, m, C) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = yo(m, h.mode, C)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f);
  }
  function c(h, f, m, C, R) {
    return f === null || f.tag !== 7
      ? ((f = wn(m, h.mode, C, R)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function d(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = vo("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case xl:
          return (
            (m = Yl(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = Er(h, null, f)),
            (m.return = h),
            m
          );
        case Mn:
          return (f = yo(f, h.mode, m)), (f.return = h), f;
        case Ht:
          var C = f._init;
          return d(h, C(f._payload), m);
      }
      if (Rr(f) || yr(f))
        return (f = wn(f, h.mode, m, null)), (f.return = h), f;
      Tl(h, f);
    }
    return null;
  }
  function p(h, f, m, C) {
    var R = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return R !== null ? null : a(h, f, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xl:
          return m.key === R ? u(h, f, m, C) : null;
        case Mn:
          return m.key === R ? s(h, f, m, C) : null;
        case Ht:
          return (R = m._init), p(h, f, R(m._payload), C);
      }
      if (Rr(m) || yr(m)) return R !== null ? null : c(h, f, m, C, null);
      Tl(h, m);
    }
    return null;
  }
  function S(h, f, m, C, R) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (h = h.get(m) || null), a(f, h, "" + C, R);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case xl:
          return (h = h.get(C.key === null ? m : C.key) || null), u(f, h, C, R);
        case Mn:
          return (h = h.get(C.key === null ? m : C.key) || null), s(f, h, C, R);
        case Ht:
          var D = C._init;
          return S(h, f, m, D(C._payload), R);
      }
      if (Rr(C) || yr(C)) return (h = h.get(m) || null), c(f, h, C, R, null);
      Tl(f, C);
    }
    return null;
  }
  function E(h, f, m, C) {
    for (
      var R = null, D = null, v = f, L = (f = 0), I = null;
      v !== null && L < m.length;
      L++
    ) {
      v.index > L ? ((I = v), (v = null)) : (I = v.sibling);
      var O = p(h, v, m[L], C);
      if (O === null) {
        v === null && (v = I);
        break;
      }
      e && v && O.alternate === null && t(h, v),
        (f = i(O, f, L)),
        D === null ? (R = O) : (D.sibling = O),
        (D = O),
        (v = I);
    }
    if (L === m.length) return n(h, v), le && dn(h, L), R;
    if (v === null) {
      for (; L < m.length; L++)
        (v = d(h, m[L], C)),
          v !== null &&
            ((f = i(v, f, L)), D === null ? (R = v) : (D.sibling = v), (D = v));
      return le && dn(h, L), R;
    }
    for (v = r(h, v); L < m.length; L++)
      (I = S(v, h, L, m[L], C)),
        I !== null &&
          (e && I.alternate !== null && v.delete(I.key === null ? L : I.key),
          (f = i(I, f, L)),
          D === null ? (R = I) : (D.sibling = I),
          (D = I));
    return (
      e &&
        v.forEach(function (Y) {
          return t(h, Y);
        }),
      le && dn(h, L),
      R
    );
  }
  function x(h, f, m, C) {
    var R = yr(m);
    if (typeof R != "function") throw Error(N(150));
    if (((m = R.call(m)), m == null)) throw Error(N(151));
    for (
      var D = (R = null), v = f, L = (f = 0), I = null, O = m.next();
      v !== null && !O.done;
      L++, O = m.next()
    ) {
      v.index > L ? ((I = v), (v = null)) : (I = v.sibling);
      var Y = p(h, v, O.value, C);
      if (Y === null) {
        v === null && (v = I);
        break;
      }
      e && v && Y.alternate === null && t(h, v),
        (f = i(Y, f, L)),
        D === null ? (R = Y) : (D.sibling = Y),
        (D = Y),
        (v = I);
    }
    if (O.done) return n(h, v), le && dn(h, L), R;
    if (v === null) {
      for (; !O.done; L++, O = m.next())
        (O = d(h, O.value, C)),
          O !== null &&
            ((f = i(O, f, L)), D === null ? (R = O) : (D.sibling = O), (D = O));
      return le && dn(h, L), R;
    }
    for (v = r(h, v); !O.done; L++, O = m.next())
      (O = S(v, h, L, O.value, C)),
        O !== null &&
          (e && O.alternate !== null && v.delete(O.key === null ? L : O.key),
          (f = i(O, f, L)),
          D === null ? (R = O) : (D.sibling = O),
          (D = O));
    return (
      e &&
        v.forEach(function (de) {
          return t(h, de);
        }),
      le && dn(h, L),
      R
    );
  }
  function T(h, f, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === On &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case xl:
          e: {
            for (var R = m.key, D = f; D !== null; ) {
              if (D.key === R) {
                if (((R = m.type), R === On)) {
                  if (D.tag === 7) {
                    n(h, D.sibling),
                      (f = l(D, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  D.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === Ht &&
                    hs(R) === D.type)
                ) {
                  n(h, D.sibling),
                    (f = l(D, m.props)),
                    (f.ref = Er(h, D, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, D);
                break;
              } else t(h, D);
              D = D.sibling;
            }
            m.type === On
              ? ((f = wn(m.props.children, h.mode, C, m.key)),
                (f.return = h),
                (h = f))
              : ((C = Yl(m.type, m.key, m.props, null, h.mode, C)),
                (C.ref = Er(h, f, m)),
                (C.return = h),
                (h = C));
          }
          return o(h);
        case Mn:
          e: {
            for (D = m.key; f !== null; ) {
              if (f.key === D)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = yo(m, h.mode, C)), (f.return = h), (h = f);
          }
          return o(h);
        case Ht:
          return (D = m._init), T(h, f, D(m._payload), C);
      }
      if (Rr(m)) return E(h, f, m, C);
      if (yr(m)) return x(h, f, m, C);
      Tl(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = vo(m, h.mode, C)), (f.return = h), (h = f)),
        o(h))
      : n(h, f);
  }
  return T;
}
var nr = Cd(!0),
  Pd = Cd(!1),
  ai = on(null),
  ui = null,
  Vn = null,
  $a = null;
function Ha() {
  $a = Vn = ui = null;
}
function Va(e) {
  var t = ai.current;
  te(ai), (e._currentValue = t);
}
function Zo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (ui = e),
    ($a = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if ($a !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (ui === null) throw Error(N(308));
      (Vn = e), (ui.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var hn = null;
function Wa(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function Nd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Wa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Qa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _d(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Wa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function $l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n);
  }
}
function ms(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function si(e, t, n, r) {
  var l = e.updateQueue;
  Vt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (c = s = u = null), (a = i);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var E = e,
            x = a;
          switch (((p = t), (S = n), x.tag)) {
            case 1:
              if (((E = x.payload), typeof E == "function")) {
                d = E.call(S, d, p);
                break e;
              }
              d = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = x.payload),
                (p = typeof E == "function" ? E.call(S, d, p) : E),
                p == null)
              )
                break e;
              d = se({}, d, p);
              break e;
            case 2:
              Vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = S), (u = d)) : (c = c.next = S),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (kn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function vs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var fl = {},
  Et = on(fl),
  el = on(fl),
  tl = on(fl);
function mn(e) {
  if (e === fl) throw Error(N(174));
  return e;
}
function Ka(e, t) {
  switch ((b(tl, t), b(el, e), b(Et, fl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : To(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = To(t, e));
  }
  te(Et), b(Et, t);
}
function rr() {
  te(Et), te(el), te(tl);
}
function jd(e) {
  mn(tl.current);
  var t = mn(Et.current),
    n = To(t, e.type);
  t !== n && (b(el, e), b(Et, n));
}
function Ya(e) {
  el.current === e && (te(Et), te(el));
}
var ae = on(0);
function ci(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var so = [];
function Xa() {
  for (var e = 0; e < so.length; e++)
    so[e]._workInProgressVersionPrimary = null;
  so.length = 0;
}
var Hl = Mt.ReactCurrentDispatcher,
  co = Mt.ReactCurrentBatchConfig,
  En = 0,
  ue = null,
  me = null,
  ge = null,
  di = !1,
  Ir = !1,
  nl = 0,
  Zh = 0;
function _e() {
  throw Error(N(321));
}
function Ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Ja(e, t, n, r, l, i) {
  if (
    ((En = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hl.current = e === null || e.memoizedState === null ? tm : nm),
    (e = n(r, l)),
    Ir)
  ) {
    i = 0;
    do {
      if (((Ir = !1), (nl = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (ge = me = null),
        (t.updateQueue = null),
        (Hl.current = rm),
        (e = n(r, l));
    } while (Ir);
  }
  if (
    ((Hl.current = fi),
    (t = me !== null && me.next !== null),
    (En = 0),
    (ge = me = ue = null),
    (di = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Za() {
  var e = nl !== 0;
  return (nl = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ge === null ? (ue.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function ot() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ge === null ? ue.memoizedState : ge.next;
  if (t !== null) (ge = t), (me = e);
  else {
    if (e === null) throw Error(N(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ge === null ? (ue.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function rl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fo(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = me,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var c = s.lane;
      if ((En & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (o = r)) : (u = u.next = d),
          (ue.lanes |= c),
          (kn |= c);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ue.lanes |= i), (kn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function po(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    vt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Rd() {}
function Ld(e, t) {
  var n = ue,
    r = ot(),
    l = t(),
    i = !vt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ue = !0)),
    (r = r.queue),
    qa(zd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ll(9, Dd.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(N(349));
    En & 30 || Td(n, t, l);
  }
  return l;
}
function Td(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Md(t) && Od(e);
}
function zd(e, t, n) {
  return n(function () {
    Md(t) && Od(e);
  });
}
function Md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Od(e) {
  var t = Dt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function ys(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = em.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function ll(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fd() {
  return ot().memoizedState;
}
function Vl(e, t, n, r) {
  var l = wt();
  (ue.flags |= e),
    (l.memoizedState = ll(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ri(e, t, n, r) {
  var l = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((i = o.destroy), r !== null && Ga(r, o.deps))) {
      l.memoizedState = ll(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (l.memoizedState = ll(1 | t, n, i, r));
}
function gs(e, t) {
  return Vl(8390656, 8, e, t);
}
function qa(e, t) {
  return Ri(2048, 8, e, t);
}
function Id(e, t) {
  return Ri(4, 2, e, t);
}
function Ud(e, t) {
  return Ri(4, 4, e, t);
}
function Ad(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Bd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ri(4, 4, Ad.bind(null, t, e), n)
  );
}
function ba() {}
function $d(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hd(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vd(e, t, n) {
  return En & 21
    ? (vt(n, t) || ((n = Xc()), (ue.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function qh(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = co.transition;
  co.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (co.transition = r);
  }
}
function Wd() {
  return ot().memoizedState;
}
function bh(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qd(e))
  )
    Kd(t, n);
  else if (((n = Nd(e, t, n, r)), n !== null)) {
    var l = Me();
    mt(n, e, r, l), Yd(n, t, r);
  }
}
function em(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qd(e)) Kd(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), vt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Wa(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Nd(e, t, l, r)),
      n !== null && ((l = Me()), mt(n, e, r, l), Yd(n, t, r));
  }
}
function Qd(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Kd(e, t) {
  Ir = di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), La(e, n);
  }
}
var fi = {
    readContext: it,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  tm = {
    readContext: it,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: gs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, Ad.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = bh.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ys,
    useDebugValue: ba,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = ys(!1),
        t = e[0];
      return (e = qh.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = wt();
      if (le) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(N(349));
        En & 30 || Td(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        gs(zd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ll(9, Dd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = we.identifierPrefix;
      if (le) {
        var n = Nt,
          r = Pt;
        (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: it,
    useCallback: $d,
    useContext: it,
    useEffect: qa,
    useImperativeHandle: Bd,
    useInsertionEffect: Id,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: fo,
    useRef: Fd,
    useState: function () {
      return fo(rl);
    },
    useDebugValue: ba,
    useDeferredValue: function (e) {
      var t = ot();
      return Vd(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = fo(rl)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Ld,
    useId: Wd,
    unstable_isNewReconciler: !1,
  },
  rm = {
    readContext: it,
    useCallback: $d,
    useContext: it,
    useEffect: qa,
    useImperativeHandle: Bd,
    useInsertionEffect: Id,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: po,
    useRef: Fd,
    useState: function () {
      return po(rl);
    },
    useDebugValue: ba,
    useDeferredValue: function (e) {
      var t = ot();
      return me === null ? (t.memoizedState = e) : Vd(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = po(rl)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Ld,
    useId: Wd,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = en(e),
      i = jt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = qt(e, i, l)),
      t !== null && (mt(t, e, l, r), $l(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = en(e),
      i = jt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = qt(e, i, l)),
      t !== null && (mt(t, e, l, r), $l(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = en(e),
      l = jt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = qt(e, l, r)),
      t !== null && (mt(t, e, r, n), $l(t, e, r));
  },
};
function ws(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jr(n, r) || !Jr(l, i)
      : !0
  );
}
function Xd(e, t, n) {
  var r = !1,
    l = rn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((l = Be(t) ? xn : Le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? er(e, l) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function bo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Qa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = it(i))
    : ((i = Be(t) ? xn : Le.current), (l.context = er(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (qo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Li.enqueueReplaceState(l, l.state, null),
      si(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lm = typeof WeakMap == "function" ? WeakMap : Map;
function Gd(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hi || ((hi = !0), (ca = r)), ea(e, t);
    }),
    n
  );
}
function Jd(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ea(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ea(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = gm.bind(null, e, t, n)), t.then(e, e));
}
function Es(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ks(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = jt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var im = Mt.ReactCurrentOwner,
  Ue = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Pd(t, null, n, r) : nr(t, e.child, n, r);
}
function Cs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Zn(t, l),
    (r = Ja(e, t, n, r, i, l)),
    (n = Za()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (le && n && Ua(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function Ps(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !au(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Zd(e, t, i, r, l))
      : ((e = Yl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(o, r) && e.ref === t.ref)
    )
      return zt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jr(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), zt(e, t, l);
  }
  return ta(e, t, n, r, l);
}
function qd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Qn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Qn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(Qn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Qn, Qe),
      (Qe |= r);
  return ze(e, t, l, n), t.child;
}
function bd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ta(e, t, n, r, l) {
  var i = Be(n) ? xn : Le.current;
  return (
    (i = er(t, i)),
    Zn(t, l),
    (n = Ja(e, t, n, r, i, l)),
    (r = Za()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (le && r && Ua(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function Ns(e, t, n, r, l) {
  if (Be(n)) {
    var i = !0;
    li(t);
  } else i = !1;
  if ((Zn(t, l), t.stateNode === null))
    Wl(e, t), Xd(t, n, r), bo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = it(s))
      : ((s = Be(n) ? xn : Le.current), (s = er(t, s)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && xs(t, o, r, s)),
      (Vt = !1);
    var p = t.memoizedState;
    (o.state = p),
      si(t, r, o, l),
      (u = t.memoizedState),
      a !== r || p !== u || Ae.current || Vt
        ? (typeof c == "function" && (qo(t, n, c, r), (u = t.memoizedState)),
          (a = Vt || ws(t, n, a, r, p, u, s))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      _d(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ct(t.type, a)),
      (o.props = s),
      (d = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = it(u))
        : ((u = Be(n) ? xn : Le.current), (u = er(t, u)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || p !== u) && xs(t, o, r, u)),
      (Vt = !1),
      (p = t.memoizedState),
      (o.state = p),
      si(t, r, o, l);
    var E = t.memoizedState;
    a !== d || p !== E || Ae.current || Vt
      ? (typeof S == "function" && (qo(t, n, S, r), (E = t.memoizedState)),
        (s = Vt || ws(t, n, s, r, p, E, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, E, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, E, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (o.props = r),
        (o.state = E),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return na(e, t, n, r, i, l);
}
function na(e, t, n, r, l, i) {
  bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ds(t, n, !1), zt(e, t, i);
  (r = t.stateNode), (im.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = nr(t, e.child, null, i)), (t.child = nr(t, null, a, i)))
      : ze(e, t, a, i),
    (t.memoizedState = r.state),
    l && ds(t, n, !0),
    t.child
  );
}
function ef(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cs(e, t.context, !1),
    Ka(e, t.containerInfo);
}
function _s(e, t, n, r, l) {
  return tr(), Ba(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function la(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ae, l & 1),
    e === null)
  )
    return (
      Jo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = zi(o, r, 0, null)),
              (e = wn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = la(n)),
              (t.memoizedState = ra),
              e)
            : eu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return om(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = tn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = tn(a, i)) : ((i = wn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? la(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ra),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = tn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function eu(e, t) {
  return (
    (t = zi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, n, r) {
  return (
    r !== null && Ba(r),
    nr(t, e.child, null, n),
    (e = eu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function om(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ho(Error(N(422)))), Dl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = zi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = wn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, o),
        (t.child.memoizedState = la(o)),
        (t.memoizedState = ra),
        i);
  if (!(t.mode & 1)) return Dl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(N(419))), (r = ho(i, r, void 0)), Dl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ue || a)) {
    if (((r = we), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Dt(e, l), mt(r, e, l, -1));
    }
    return ou(), (r = ho(Error(N(421)))), Dl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ke = Zt(l.nextSibling)),
      (Ye = t),
      (le = !0),
      (pt = null),
      e !== null &&
        ((et[tt++] = Pt),
        (et[tt++] = Nt),
        (et[tt++] = Sn),
        (Pt = e.id),
        (Nt = e.overflow),
        (Sn = t)),
      (t = eu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function js(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zo(e.return, t, n);
}
function mo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function nf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ze(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && js(e, n, t);
        else if (e.tag === 19) js(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ci(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          mo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ci(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        mo(t, !0, n, null, i);
        break;
      case "together":
        mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function am(e, t, n) {
  switch (t.tag) {
    case 3:
      ef(t), tr();
      break;
    case 5:
      jd(t);
      break;
    case 1:
      Be(t.type) && li(t);
      break;
    case 4:
      Ka(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(ai, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? tf(e, t, n)
          : (b(ae, ae.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      b(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qd(e, t, n);
  }
  return zt(e, t, n);
}
var rf, ia, lf, of;
rf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ia = function () {};
lf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), mn(Et.current);
    var i = null;
    switch (n) {
      case "input":
        (l = _o(e, l)), (r = _o(e, r)), (i = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Lo(e, l)), (r = Lo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ni);
    }
    Do(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Vr.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Vr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ee("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function um(e, t, n) {
  var r = t.pendingProps;
  switch ((Aa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Be(t.type) && ri(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        te(Ae),
        te(Le),
        Xa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (pa(pt), (pt = null)))),
        ia(e, t),
        je(t),
        null
      );
    case 5:
      Ya(t);
      var l = mn(tl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return je(t), null;
        }
        if (((e = mn(Et.current)), Ll(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[xt] = t), (r[br] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tr.length; l++) ee(Tr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Iu(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Au(r, i), ee("invalid", r);
          }
          Do(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Vr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), Uu(r, i, !0);
              break;
            case "textarea":
              Sl(r), Bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ni);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[xt] = t),
            (e[br] = r),
            rf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = zo(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tr.length; l++) ee(Tr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Iu(e, r), (l = _o(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Au(e, r), (l = Lo(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            Do(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? Fc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Mc(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Wr(e, u)
                    : typeof u == "number" && Wr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Vr.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && ee("scroll", e)
                      : u != null && Ca(e, i, u, o));
              }
            switch (n) {
              case "input":
                Sl(e), Uu(e, r, !1);
                break;
              case "textarea":
                Sl(e), Bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ni);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = mn(tl.current)), mn(Et.current), Ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (te(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          kd(), tr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[xt] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (i = !1);
        } else pt !== null && (pa(pt), (pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : ou())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        rr(), ia(e, t), e === null && Zr(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return Va(t.type._context), je(t), null;
    case 17:
      return Be(t.type) && ri(), je(t), null;
    case 19:
      if ((te(ae), (i = t.memoizedState), i === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) kr(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ci(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    kr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            fe() > ir &&
            ((t.flags |= 128), (r = !0), kr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ci(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !le)
            )
              return je(t), null;
          } else
            2 * fe() - i.renderingStartTime > ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = fe()),
          (t.sibling = null),
          (n = ae.current),
          b(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function sm(e, t) {
  switch ((Aa(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && ri(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        te(Ae),
        te(Le),
        Xa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ya(t), null;
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ae), null;
    case 4:
      return rr(), null;
    case 10:
      return Va(t.type._context), null;
    case 22:
    case 23:
      return iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zl = !1,
  Re = !1,
  cm = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function oa(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Rs = !1;
function dm(e, t) {
  if (((Vo = bl), (e = cd()), Ia(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (p = d), (d = S);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++s === l && (a = o),
                p === i && ++c === r && (u = o),
                (S = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = S;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wo = { focusedElem: e, selectionRange: n }, bl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var x = E.memoizedProps,
                    T = E.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ct(t.type, x),
                      T
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (C) {
          ce(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (E = Rs), (Rs = !1), E;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && oa(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ti(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function aa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function af(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), af(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[br], delete t[Yo], delete t[Yh], delete t[Xh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ls(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ni));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ua(e, t, n), e = e.sibling; e !== null; ) ua(e, t, n), (e = e.sibling);
}
function sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sa(e, t, n), e = e.sibling; e !== null; ) sa(e, t, n), (e = e.sibling);
}
var Ce = null,
  dt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) sf(e, t, n), (n = n.sibling);
}
function sf(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Wn(n, t);
    case 6:
      var r = Ce,
        l = dt;
      (Ce = null),
        Bt(e, t, n),
        (Ce = r),
        (dt = l),
        Ce !== null &&
          (dt
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (dt
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? ao(e.parentNode, n)
              : e.nodeType === 1 && ao(e, n),
            Xr(e))
          : ao(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = dt),
        (Ce = n.stateNode.containerInfo),
        (dt = !0),
        Bt(e, t, n),
        (Ce = r),
        (dt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && oa(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Bt(e, t, n), (Re = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function Ts(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cm()),
      t.forEach(function (r) {
        var l = xm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ce = a.stateNode), (dt = !1);
              break e;
            case 3:
              (Ce = a.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (Ce = a.stateNode.containerInfo), (dt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ce === null) throw Error(N(160));
        sf(i, o, l), (Ce = null), (dt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cf(t, e), (t = t.sibling);
}
function cf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), gt(e), r & 4)) {
        try {
          Ur(3, e, e.return), Ti(3, e);
        } catch (x) {
          ce(e, e.return, x);
        }
        try {
          Ur(5, e, e.return);
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 1:
      st(t, e), gt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        gt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wr(l, "");
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Tc(l, i),
              zo(a, o);
            var s = zo(a, i);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                d = u[o + 1];
              c === "style"
                ? Fc(l, d)
                : c === "dangerouslySetInnerHTML"
                ? Mc(l, d)
                : c === "children"
                ? Wr(l, d)
                : Ca(l, c, d, s);
            }
            switch (a) {
              case "input":
                jo(l, i);
                break;
              case "textarea":
                Dc(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Yn(l, !!i.multiple, S, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yn(l, !!i.multiple, i.defaultValue, !0)
                      : Yn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[br] = i;
          } catch (x) {
            ce(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((st(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (x) {
          ce(e, e.return, x);
        }
      break;
    case 4:
      st(t, e), gt(e);
      break;
    case 13:
      st(t, e),
        gt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ru = fe())),
        r & 4 && Ts(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (s = Re) || c), st(t, e), (Re = s)) : st(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((p = z), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, p, p.return);
                  break;
                case 1:
                  Wn(p, p.return);
                  var E = p.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (x) {
                      ce(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    zs(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (z = S)) : zs(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (l = d.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Oc("display", o)));
              } catch (x) {
                ce(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (x) {
                ce(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      st(t, e), gt(e), r & 4 && Ts(e);
      break;
    case 21:
      break;
    default:
      st(t, e), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wr(l, ""), (r.flags &= -33));
          var i = Ls(e);
          sa(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ls(e);
          ua(e, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fm(e, t, n) {
  (z = e), df(e);
}
function df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || zl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Re;
        a = zl;
        var s = Re;
        if (((zl = o), (Re = u) && !s))
          for (z = l; z !== null; )
            (o = z),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ms(l)
                : u !== null
                ? ((u.return = o), (z = u))
                : Ms(l);
        for (; i !== null; ) (z = i), df(i), (i = i.sibling);
        (z = l), (zl = a), (Re = s);
      }
      Ds(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : Ds(e);
  }
}
function Ds(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Ti(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && vs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vs(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Xr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Re || (t.flags & 512 && aa(t));
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function zs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ms(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ti(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var i = t.return;
          try {
            aa(t);
          } catch (u) {
            ce(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            aa(t);
          } catch (u) {
            ce(t, o, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var pm = Math.ceil,
  pi = Mt.ReactCurrentDispatcher,
  tu = Mt.ReactCurrentOwner,
  lt = Mt.ReactCurrentBatchConfig,
  G = 0,
  we = null,
  he = null,
  Pe = 0,
  Qe = 0,
  Qn = on(0),
  ve = 0,
  il = null,
  kn = 0,
  Di = 0,
  nu = 0,
  Ar = null,
  Ie = null,
  ru = 0,
  ir = 1 / 0,
  kt = null,
  hi = !1,
  ca = null,
  bt = null,
  Ml = !1,
  Yt = null,
  mi = 0,
  Br = 0,
  da = null,
  Ql = -1,
  Kl = 0;
function Me() {
  return G & 6 ? fe() : Ql !== -1 ? Ql : (Ql = fe());
}
function en(e) {
  return e.mode & 1
    ? G & 2 && Pe !== 0
      ? Pe & -Pe
      : Jh.transition !== null
      ? (Kl === 0 && (Kl = Xc()), Kl)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : td(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < Br) throw ((Br = 0), (da = null), Error(N(185)));
  sl(e, n, r),
    (!(G & 2) || e !== we) &&
      (e === we && (!(G & 2) && (Di |= n), ve === 4 && Qt(e, Pe)),
      $e(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((ir = fe() + 500), ji && an()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = ql(e, e === we ? Pe : 0);
  if (r === 0)
    n !== null && Vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vu(n), t === 1))
      e.tag === 0 ? Gh(Os.bind(null, e)) : xd(Os.bind(null, e)),
        Qh(function () {
          !(G & 6) && an();
        }),
        (n = null);
    else {
      switch (Gc(r)) {
        case 1:
          n = Ra;
          break;
        case 4:
          n = Kc;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Yc;
          break;
        default:
          n = Zl;
      }
      n = wf(n, ff.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ff(e, t) {
  if (((Ql = -1), (Kl = 0), G & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = ql(e, e === we ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vi(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var i = hf();
    (we !== e || Pe !== t) && ((kt = null), (ir = fe() + 500), gn(e, t));
    do
      try {
        vm();
        break;
      } catch (a) {
        pf(e, a);
      }
    while (!0);
    Ha(),
      (pi.current = i),
      (G = l),
      he !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Uo(e)), l !== 0 && ((r = l), (t = fa(e, l)))), t === 1)
    )
      throw ((n = il), gn(e, 0), Qt(e, r), $e(e, fe()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hm(l) &&
          ((t = vi(e, r)),
          t === 2 && ((i = Uo(e)), i !== 0 && ((r = i), (t = fa(e, i)))),
          t === 1))
      )
        throw ((n = il), gn(e, 0), Qt(e, r), $e(e, fe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          fn(e, Ie, kt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = ru + 500 - fe()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ko(fn.bind(null, e, Ie, kt), t);
            break;
          }
          fn(e, Ie, kt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ht(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * pm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ko(fn.bind(null, e, Ie, kt), r);
            break;
          }
          fn(e, Ie, kt);
          break;
        case 5:
          fn(e, Ie, kt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return $e(e, fe()), e.callbackNode === n ? ff.bind(null, e) : null;
}
function fa(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = vi(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && pa(t)),
    e
  );
}
function pa(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function hm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~nu,
      t &= ~Di,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Os(e) {
  if (G & 6) throw Error(N(327));
  qn();
  var t = ql(e, 0);
  if (!(t & 1)) return $e(e, fe()), null;
  var n = vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Uo(e);
    r !== 0 && ((t = r), (n = fa(e, r)));
  }
  if (n === 1) throw ((n = il), gn(e, 0), Qt(e, t), $e(e, fe()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    fn(e, Ie, kt),
    $e(e, fe()),
    null
  );
}
function lu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((ir = fe() + 500), ji && an());
  }
}
function Cn(e) {
  Yt !== null && Yt.tag === 0 && !(G & 6) && qn();
  var t = G;
  G |= 1;
  var n = lt.transition,
    r = J;
  try {
    if (((lt.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (lt.transition = n), (G = t), !(G & 6) && an();
  }
}
function iu() {
  (Qe = Qn.current), te(Qn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wh(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Aa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ri();
          break;
        case 3:
          rr(), te(Ae), te(Le), Xa();
          break;
        case 5:
          Ya(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          te(ae);
          break;
        case 19:
          te(ae);
          break;
        case 10:
          Va(r.type._context);
          break;
        case 22:
        case 23:
          iu();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (he = e = tn(e.current, null)),
    (Pe = Qe = t),
    (ve = 0),
    (il = null),
    (nu = Di = kn = 0),
    (Ie = Ar = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function pf(e, t) {
  do {
    var n = he;
    try {
      if ((Ha(), (Hl.current = fi), di)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        di = !1;
      }
      if (
        ((En = 0),
        (ge = me = ue = null),
        (Ir = !1),
        (nl = 0),
        (tu.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (il = t), (he = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = Es(o);
          if (S !== null) {
            (S.flags &= -257),
              ks(S, o, a, i, t),
              S.mode & 1 && Ss(i, s, t),
              (t = S),
              (u = s);
            var E = t.updateQueue;
            if (E === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else E.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ss(i, s, t), ou();
              break e;
            }
            u = Error(N(426));
          }
        } else if (le && a.mode & 1) {
          var T = Es(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              ks(T, o, a, i, t),
              Ba(lr(u, a));
            break e;
          }
        }
        (i = u = lr(u, a)),
          ve !== 4 && (ve = 2),
          Ar === null ? (Ar = [i]) : Ar.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Gd(i, u, t);
              ms(i, h);
              break e;
            case 1:
              a = u;
              var f = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (bt === null || !bt.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = Jd(i, a, t);
                ms(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vf(n);
    } catch (R) {
      (t = R), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hf() {
  var e = pi.current;
  return (pi.current = fi), e === null ? fi : e;
}
function ou() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || (!(kn & 268435455) && !(Di & 268435455)) || Qt(we, Pe);
}
function vi(e, t) {
  var n = G;
  G |= 2;
  var r = hf();
  (we !== e || Pe !== t) && ((kt = null), gn(e, t));
  do
    try {
      mm();
      break;
    } catch (l) {
      pf(e, l);
    }
  while (!0);
  if ((Ha(), (G = n), (pi.current = r), he !== null)) throw Error(N(261));
  return (we = null), (Pe = 0), ve;
}
function mm() {
  for (; he !== null; ) mf(he);
}
function vm() {
  for (; he !== null && !$p(); ) mf(he);
}
function mf(e) {
  var t = gf(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? vf(e) : (he = t),
    (tu.current = null);
}
function vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sm(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (he = null);
        return;
      }
    } else if (((n = um(n, t, Qe)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function fn(e, t, n) {
  var r = J,
    l = lt.transition;
  try {
    (lt.transition = null), (J = 1), ym(e, t, n, r);
  } finally {
    (lt.transition = l), (J = r);
  }
  return null;
}
function ym(e, t, n, r) {
  do qn();
  while (Yt !== null);
  if (G & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Zp(e, i),
    e === we && ((he = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      wf(Zl, function () {
        return qn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = lt.transition), (lt.transition = null);
    var o = J;
    J = 1;
    var a = G;
    (G |= 4),
      (tu.current = null),
      dm(e, n),
      cf(n, e),
      Ih(Wo),
      (bl = !!Vo),
      (Wo = Vo = null),
      (e.current = n),
      fm(n),
      Hp(),
      (G = a),
      (J = o),
      (lt.transition = i);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Yt = e), (mi = l)),
    (i = e.pendingLanes),
    i === 0 && (bt = null),
    Qp(n.stateNode),
    $e(e, fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hi) throw ((hi = !1), (e = ca), (ca = null), e);
  return (
    mi & 1 && e.tag !== 0 && qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === da ? Br++ : ((Br = 0), (da = e))) : (Br = 0),
    an(),
    null
  );
}
function qn() {
  if (Yt !== null) {
    var e = Gc(mi),
      t = lt.transition,
      n = J;
    try {
      if (((lt.transition = null), (J = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (mi = 0), G & 6)) throw Error(N(331));
        var l = G;
        for (G |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (z = d);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var p = c.sibling,
                        S = c.return;
                      if ((af(c), c === s)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (z = p);
                        break;
                      }
                      z = S;
                    }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var x = E.child;
                if (x !== null) {
                  E.child = null;
                  do {
                    var T = x.sibling;
                    (x.sibling = null), (x = T);
                  } while (x !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (z = h);
                break e;
              }
              z = i.return;
            }
        }
        var f = e.current;
        for (z = f; z !== null; ) {
          o = z;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (z = m);
          else
            e: for (o = f; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ti(9, a);
                  }
                } catch (R) {
                  ce(a, a.return, R);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (z = C);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((G = l), an(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (lt.transition = t);
    }
  }
  return !1;
}
function Fs(e, t, n) {
  (t = lr(n, t)),
    (t = Gd(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = Me()),
    e !== null && (sl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Fs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = lr(n, e)),
            (e = Jd(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = Me()),
            t !== null && (sl(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ve === 4 || (ve === 3 && (Pe & 130023424) === Pe && 500 > fe() - ru)
        ? gn(e, 0)
        : (nu |= n)),
    $e(e, t);
}
function yf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cl), (Cl <<= 1), !(Cl & 130023424) && (Cl = 4194304))
      : (t = 1));
  var n = Me();
  (e = Dt(e, t)), e !== null && (sl(e, t, n), $e(e, n));
}
function wm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yf(e, n);
}
function xm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), yf(e, n);
}
var gf;
gf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), am(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), le && t.flags & 1048576 && Sd(t, oi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wl(e, t), (e = t.pendingProps);
      var l = er(t, Le.current);
      Zn(t, n), (l = Ja(null, t, r, e, l, n));
      var i = Za();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), li(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Qa(t),
            (l.updater = Li),
            (t.stateNode = l),
            (l._reactInternals = t),
            bo(t, r, e, n),
            (t = na(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && Ua(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Em(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ta(null, t, r, e, n);
            break e;
          case 1:
            t = Ns(null, t, r, e, n);
            break e;
          case 11:
            t = Cs(null, t, r, e, n);
            break e;
          case 14:
            t = Ps(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ta(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Ns(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ef(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          _d(e, t),
          si(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = lr(Error(N(423)), t)), (t = _s(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(N(424)), t)), (t = _s(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Zt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                pt = null,
                n = Pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = zt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jd(t),
        e === null && Jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Qo(r, l) ? (o = null) : i !== null && Qo(r, i) && (t.flags |= 32),
        bd(e, t),
        ze(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Jo(t), null;
    case 13:
      return tf(e, t, n);
    case 4:
      return (
        Ka(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Cs(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          b(ai, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (vt(i.value, o)) {
            if (i.children === l.children && !Ae.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = jt(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Zo(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Zo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (l = it(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Ps(e, t, r, l, n)
      );
    case 15:
      return Zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Wl(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), li(t)) : (e = !1),
        Zn(t, n),
        Xd(t, r, l),
        bo(t, r, l, n),
        na(null, t, r, !0, e, n)
      );
    case 19:
      return nf(e, t, n);
    case 22:
      return qd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function wf(e, t) {
  return Qc(e, t);
}
function Sm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new Sm(e, t, n, r);
}
function au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Em(e) {
  if (typeof e == "function") return au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Na)) return 11;
    if (e === _a) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) au(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case On:
        return wn(n.children, l, i, t);
      case Pa:
        (o = 8), (l |= 8);
        break;
      case ko:
        return (
          (e = rt(12, n, t, l | 2)), (e.elementType = ko), (e.lanes = i), e
        );
      case Co:
        return (e = rt(13, n, t, l)), (e.elementType = Co), (e.lanes = i), e;
      case Po:
        return (e = rt(19, n, t, l)), (e.elementType = Po), (e.lanes = i), e;
      case jc:
        return zi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nc:
              o = 10;
              break e;
            case _c:
              o = 9;
              break e;
            case Na:
              o = 11;
              break e;
            case _a:
              o = 14;
              break e;
            case Ht:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function wn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function zi(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = jc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vo(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function yo(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function km(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ji(0)),
    (this.expirationTimes = Ji(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ji(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function uu(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new km(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qa(i),
    e
  );
}
function Cm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xf(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return wd(e, n, t);
  }
  return t;
}
function Sf(e, t, n, r, l, i, o, a, u) {
  return (
    (e = uu(n, r, !0, e, l, i, o, a, u)),
    (e.context = xf(null)),
    (n = e.current),
    (r = Me()),
    (l = en(n)),
    (i = jt(r, l)),
    (i.callback = t ?? null),
    qt(n, i, l),
    (e.current.lanes = l),
    sl(e, l, r),
    $e(e, r),
    e
  );
}
function Mi(e, t, n, r) {
  var l = t.current,
    i = Me(),
    o = en(l);
  return (
    (n = xf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(l, t, o)),
    e !== null && (mt(e, l, o, i), $l(e, l, o)),
    o
  );
}
function yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Is(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function su(e, t) {
  Is(e, t), (e = e.alternate) && Is(e, t);
}
function Pm() {
  return null;
}
var Ef =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cu(e) {
  this._internalRoot = e;
}
Oi.prototype.render = cu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Mi(e, t, null, null);
};
Oi.prototype.unmount = cu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      Mi(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function Oi(e) {
  this._internalRoot = e;
}
Oi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && ed(e);
  }
};
function du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Us() {}
function Nm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = yi(o);
        i.call(s);
      };
    }
    var o = Sf(t, r, e, 0, null, !1, !1, "", Us);
    return (
      (e._reactRootContainer = o),
      (e[Tt] = o.current),
      Zr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = yi(u);
      a.call(s);
    };
  }
  var u = uu(e, 0, !1, null, null, !1, !1, "", Us);
  return (
    (e._reactRootContainer = u),
    (e[Tt] = u.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      Mi(t, u, n, r);
    }),
    u
  );
}
function Ii(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = yi(o);
        a.call(u);
      };
    }
    Mi(t, o, e, l);
  } else o = Nm(n, t, e, l, r);
  return yi(o);
}
Jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Lr(t.pendingLanes);
        n !== 0 &&
          (La(t, n | 1), $e(t, fe()), !(G & 6) && ((ir = fe() + 500), an()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var l = Me();
          mt(r, e, 1, l);
        }
      }),
        su(e, 1);
  }
};
Ta = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Me();
      mt(t, e, 134217728, n);
    }
    su(e, 134217728);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = Me();
      mt(n, e, t, r);
    }
    su(e, t);
  }
};
qc = function () {
  return J;
};
bc = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
Oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((jo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = _i(r);
            if (!l) throw Error(N(90));
            Lc(r), jo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Dc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
Ac = lu;
Bc = Cn;
var _m = { usingClientEntryPoint: !1, Events: [dl, An, _i, Ic, Uc, lu] },
  Cr = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  jm = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || Pm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ol.isDisabled && Ol.supportsFiber)
    try {
      (ki = Ol.inject(jm)), (St = Ol);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _m;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!du(t)) throw Error(N(200));
  return Cm(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!du(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = Ef;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = uu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Tt] = t.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    new cu(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Vc(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Cn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Fi(t)) throw Error(N(200));
  return Ii(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!du(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Ef;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Sf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Tt] = t.current),
    Zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Oi(t);
};
Ge.render = function (e, t, n) {
  if (!Fi(t)) throw Error(N(200));
  return Ii(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Fi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Cn(function () {
        Ii(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = lu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ii(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function kf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
    } catch (e) {
      console.error(e);
    }
}
kf(), (Ec.exports = Ge);
var fu = Ec.exports;
const Rm = cc(fu),
  Lm = sc({ __proto__: null, default: Rm }, [fu]);
var As = fu;
(So.createRoot = As.createRoot), (So.hydrateRoot = As.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const Bs = "popstate";
function Tm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return ol(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Pn(l);
  }
  return zm(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function or(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Dm() {
  return Math.random().toString(36).substr(2, 8);
}
function $s(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ol(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    oe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? un(t) : t,
      { state: n, key: (t && t.key) || r || Dm() }
    )
  );
}
function Pn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function zm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = pe.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), o.replaceState(oe({}, o.state, { idx: s }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = pe.Pop;
    let T = c(),
      h = T == null ? null : T - s;
    (s = T), u && u({ action: a, location: x.location, delta: h });
  }
  function p(T, h) {
    a = pe.Push;
    let f = ol(x.location, T, h);
    s = c() + 1;
    let m = $s(f, s),
      C = x.createHref(f);
    try {
      o.pushState(m, "", C);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      l.location.assign(C);
    }
    i && u && u({ action: a, location: x.location, delta: 1 });
  }
  function S(T, h) {
    a = pe.Replace;
    let f = ol(x.location, T, h);
    s = c();
    let m = $s(f, s),
      C = x.createHref(f);
    o.replaceState(m, "", C),
      i && u && u({ action: a, location: x.location, delta: 0 });
  }
  function E(T) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof T == "string" ? T : Pn(T);
    return (
      (f = f.replace(/ $/, "%20")),
      Q(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Bs, d),
        (u = T),
        () => {
          l.removeEventListener(Bs, d), (u = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: E,
    encodeLocation(T) {
      let h = E(T);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: S,
    go(T) {
      return o.go(T);
    },
  };
  return x;
}
var re;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(re || (re = {}));
const Mm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Om(e) {
  return e.index === !0;
}
function ha(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Om(l))
      ) {
        let u = oe({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = oe({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = ha(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Kn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? un(t) : t,
    l = cr(r.pathname || "/", n);
  if (l == null) return null;
  let i = Cf(e);
  Im(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let u = Gm(l);
    o = Km(i[a], u);
  }
  return o;
}
function Fm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Cf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Rt([r, u.relativePath]),
      c = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Cf(i.children, t, c, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: Wm(s, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of Pf(i.path)) l(i, o, u);
    }),
    t
  );
}
function Pf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Pf(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Im(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Qm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Um = /^:[\w-]+$/,
  Am = 3,
  Bm = 2,
  $m = 1,
  Hm = 10,
  Vm = -2,
  Hs = (e) => e === "*";
function Wm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Hs) && (r += Vm),
    t && (r += Bm),
    n
      .filter((l) => !Hs(l))
      .reduce((l, i) => l + (Um.test(i) ? Am : i === "" ? $m : Hm), r)
  );
}
function Qm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Km(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      u = o === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = Ym(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    i.push({
      params: r,
      pathname: Rt([l, c.pathname]),
      pathnameBase: qm(Rt([l, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (l = Rt([l, c.pathnameBase]));
  }
  return i;
}
function Ym(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, c, d) => {
      let { paramName: p, isOptional: S } = c;
      if (p === "*") {
        let x = a[d] || "";
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const E = a[d];
      return (
        S && !E ? (s[p] = void 0) : (s[p] = (E || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Xm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    or(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Gm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      or(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Jm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? un(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Zm(n, t)) : t,
    search: bm(r),
    hash: ev(l),
  };
}
function Zm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function go(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Nf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function pu(e, t) {
  let n = Nf(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function hu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = un(e))
    : ((l = oe({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        go("?", "pathname", "search", l)
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        go("#", "pathname", "hash", l)
      ),
      Q(!l.search || !l.search.includes("#"), go("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      l.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let u = Jm(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const Rt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  qm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  bm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ev = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class mu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function vu(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _f = ["post", "put", "patch", "delete"],
  tv = new Set(_f),
  nv = ["get", ..._f],
  rv = new Set(nv),
  lv = new Set([301, 302, 303, 307, 308]),
  iv = new Set([307, 308]),
  wo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ov = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Pr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  yu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  av = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  jf = "remix-router-transitions";
function uv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: y(w) });
  } else l = av;
  let i = {},
    o = ha(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = e.unstable_dataStrategy || fv,
    c = oe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    p = new Set(),
    S = null,
    E = null,
    x = null,
    T = e.hydrationData != null,
    h = Kn(o, e.history.location, u),
    f = null;
  if (h == null) {
    let y = be(404, { pathname: e.history.location.pathname }),
      { matches: w, route: k } = qs(o);
    (h = w), (f = { [k.id]: y });
  }
  let m,
    C = h.some((y) => y.route.lazy),
    R = h.some((y) => y.route.loader);
  if (C) m = !1;
  else if (!R) m = !0;
  else if (c.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null,
      k = (_) =>
        _.route.loader
          ? typeof _.route.loader == "function" && _.route.loader.hydrate === !0
            ? !1
            : (y && y[_.route.id] !== void 0) || (w && w[_.route.id] !== void 0)
          : !0;
    if (w) {
      let _ = h.findIndex((M) => w[M.route.id] !== void 0);
      m = h.slice(0, _ + 1).every(k);
    } else m = h.every(k);
  } else m = e.hydrationData != null;
  let D,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: m,
      navigation: wo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = pe.Pop,
    I = !1,
    O,
    Y = !1,
    de = new Map(),
    ie = null,
    xe = !1,
    at = !1,
    Ot = [],
    Ft = [],
    j = new Map(),
    A = 0,
    $ = -1,
    Z = new Map(),
    q = new Set(),
    ut = new Map(),
    He = new Map(),
    Ve = new Set(),
    Te = new Map(),
    Ze = new Map(),
    Hi = !1;
  function Hf() {
    if (
      ((d = e.history.listen((y) => {
        let { action: w, location: k, delta: _ } = y;
        if (Hi) {
          Hi = !1;
          return;
        }
        or(
          Ze.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let M = _u({
          currentLocation: v.location,
          nextLocation: k,
          historyAction: w,
        });
        if (M && _ != null) {
          (Hi = !0),
            e.history.go(_ * -1),
            ml(M, {
              state: "blocked",
              location: k,
              proceed() {
                ml(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(_);
              },
              reset() {
                let V = new Map(v.blockers);
                V.set(M, Pr), We({ blockers: V });
              },
            });
          return;
        }
        return cn(w, k);
      })),
      n)
    ) {
      Cv(t, de);
      let y = () => Pv(t, de);
      t.addEventListener("pagehide", y),
        (ie = () => t.removeEventListener("pagehide", y));
    }
    return v.initialized || cn(pe.Pop, v.location, { initialHydration: !0 }), D;
  }
  function Vf() {
    d && d(),
      ie && ie(),
      p.clear(),
      O && O.abort(),
      v.fetchers.forEach((y, w) => hl(w)),
      v.blockers.forEach((y, w) => Nu(w));
  }
  function Wf(y) {
    return p.add(y), () => p.delete(y);
  }
  function We(y, w) {
    w === void 0 && (w = {}), (v = oe({}, v, y));
    let k = [],
      _ = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((M, V) => {
        M.state === "idle" && (Ve.has(V) ? _.push(V) : k.push(V));
      }),
      [...p].forEach((M) =>
        M(v, {
          deletedFetchers: _,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (k.forEach((M) => v.fetchers.delete(M)), _.forEach((M) => hl(M)));
  }
  function dr(y, w, k) {
    var _, M;
    let { flushSync: V } = k === void 0 ? {} : k,
      U =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ft(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((_ = y.state) == null ? void 0 : _._isRedirect) !== !0,
      F;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (F = w.actionData)
        : (F = null)
      : U
      ? (F = v.actionData)
      : (F = null);
    let W = w.loaderData
        ? Js(v.loaderData, w.loaderData, w.matches || [], w.errors)
        : v.loaderData,
      H = v.blockers;
    H.size > 0 && ((H = new Map(H)), H.forEach((B, ne) => H.set(ne, Pr)));
    let Se =
      I === !0 ||
      (v.navigation.formMethod != null &&
        ft(v.navigation.formMethod) &&
        ((M = y.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      xe ||
        L === pe.Pop ||
        (L === pe.Push
          ? e.history.push(y, y.state)
          : L === pe.Replace && e.history.replace(y, y.state));
    let Ee;
    if (L === pe.Pop) {
      let B = de.get(v.location.pathname);
      B && B.has(y.pathname)
        ? (Ee = { currentLocation: v.location, nextLocation: y })
        : de.has(y.pathname) &&
          (Ee = { currentLocation: y, nextLocation: v.location });
    } else if (Y) {
      let B = de.get(v.location.pathname);
      B
        ? B.add(y.pathname)
        : ((B = new Set([y.pathname])), de.set(v.location.pathname, B)),
        (Ee = { currentLocation: v.location, nextLocation: y });
    }
    We(
      oe({}, w, {
        actionData: F,
        loaderData: W,
        historyAction: L,
        location: y,
        initialized: !0,
        navigation: wo,
        revalidation: "idle",
        restoreScrollPosition: Ru(y, w.matches || v.matches),
        preventScrollReset: Se,
        blockers: H,
      }),
      { viewTransitionOpts: Ee, flushSync: V === !0 }
    ),
      (L = pe.Pop),
      (I = !1),
      (Y = !1),
      (xe = !1),
      (at = !1),
      (Ot = []),
      (Ft = []);
  }
  async function xu(y, w) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let k = ma(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        y,
        c.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative
      ),
      {
        path: _,
        submission: M,
        error: V,
      } = Vs(c.v7_normalizeFormMethod, !1, k, w),
      U = v.location,
      F = ol(v.location, _, w && w.state);
    F = oe({}, F, e.history.encodeLocation(F));
    let W = w && w.replace != null ? w.replace : void 0,
      H = pe.Push;
    W === !0
      ? (H = pe.Replace)
      : W === !1 ||
        (M != null &&
          ft(M.formMethod) &&
          M.formAction === v.location.pathname + v.location.search &&
          (H = pe.Replace));
    let Se =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      Ee = (w && w.unstable_flushSync) === !0,
      B = _u({ currentLocation: U, nextLocation: F, historyAction: H });
    if (B) {
      ml(B, {
        state: "blocked",
        location: F,
        proceed() {
          ml(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            xu(y, w);
        },
        reset() {
          let ne = new Map(v.blockers);
          ne.set(B, Pr), We({ blockers: ne });
        },
      });
      return;
    }
    return await cn(H, F, {
      submission: M,
      pendingError: V,
      preventScrollReset: Se,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: Ee,
    });
  }
  function Qf() {
    if (
      (Vi(),
      We({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        cn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      cn(L || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function cn(y, w, k) {
    O && O.abort(),
      (O = null),
      (L = y),
      (xe = (k && k.startUninterruptedRevalidation) === !0),
      ep(v.location, v.matches),
      (I = (k && k.preventScrollReset) === !0),
      (Y = (k && k.enableViewTransition) === !0);
    let _ = a || o,
      M = k && k.overrideNavigation,
      V = Kn(_, w, u),
      U = (k && k.flushSync) === !0;
    if (!V) {
      let B = be(404, { pathname: w.pathname }),
        { matches: ne, route: ye } = qs(_);
      Wi(),
        dr(
          w,
          { matches: ne, loaderData: {}, errors: { [ye.id]: B } },
          { flushSync: U }
        );
      return;
    }
    if (
      v.initialized &&
      !at &&
      gv(v.location, w) &&
      !(k && k.submission && ft(k.submission.formMethod))
    ) {
      dr(w, { matches: V }, { flushSync: U });
      return;
    }
    O = new AbortController();
    let F = zn(e.history, w, O.signal, k && k.submission),
      W;
    if (k && k.pendingError)
      W = [$r(V).route.id, { type: re.error, error: k.pendingError }];
    else if (k && k.submission && ft(k.submission.formMethod)) {
      let B = await Kf(F, w, k.submission, V, {
        replace: k.replace,
        flushSync: U,
      });
      if (B.shortCircuited) return;
      (W = B.pendingActionResult),
        (M = xo(w, k.submission)),
        (U = !1),
        (F = zn(e.history, F.url, F.signal));
    }
    let {
      shortCircuited: H,
      loaderData: Se,
      errors: Ee,
    } = await Yf(
      F,
      w,
      V,
      M,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      U,
      W
    );
    H ||
      ((O = null),
      dr(w, oe({ matches: V }, Zs(W), { loaderData: Se, errors: Ee })));
  }
  async function Kf(y, w, k, _, M) {
    M === void 0 && (M = {}), Vi();
    let V = Ev(w, k);
    We({ navigation: V }, { flushSync: M.flushSync === !0 });
    let U,
      F = ya(_, w);
    if (!F.route.action && !F.route.lazy)
      U = {
        type: re.error,
        error: be(405, {
          method: y.method,
          pathname: w.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((U = (await pr("action", y, [F], _))[0]), y.signal.aborted))
      return { shortCircuited: !0 };
    if (yn(U)) {
      let W;
      return (
        M && M.replace != null
          ? (W = M.replace)
          : (W =
              Ys(U.response.headers.get("Location"), new URL(y.url), u) ===
              v.location.pathname + v.location.search),
        await fr(y, U, { submission: k, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (vn(U)) throw be(400, { type: "defer-action" });
    if (nt(U)) {
      let W = $r(_, F.route.id);
      return (
        (M && M.replace) !== !0 && (L = pe.Push),
        { pendingActionResult: [W.route.id, U] }
      );
    }
    return { pendingActionResult: [F.route.id, U] };
  }
  async function Yf(y, w, k, _, M, V, U, F, W, H) {
    let Se = _ || xo(w, M),
      Ee = M || V || tc(Se),
      B = a || o,
      [ne, ye] = Ws(
        e.history,
        v,
        k,
        Ee,
        w,
        c.v7_partialHydration && F === !0,
        c.unstable_skipActionErrorRevalidation,
        at,
        Ot,
        Ft,
        Ve,
        ut,
        q,
        B,
        u,
        H
      );
    if (
      (Wi(
        (X) =>
          !(k && k.some((De) => De.route.id === X)) ||
          (ne && ne.some((De) => De.route.id === X))
      ),
      ($ = ++A),
      ne.length === 0 && ye.length === 0)
    ) {
      let X = Cu();
      return (
        dr(
          w,
          oe(
            {
              matches: k,
              loaderData: {},
              errors: H && nt(H[1]) ? { [H[0]]: H[1].error } : null,
            },
            Zs(H),
            X ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!xe && (!c.v7_partialHydration || !F)) {
      ye.forEach((De) => {
        let qe = v.fetchers.get(De.key),
          ke = Nr(void 0, qe ? qe.data : void 0);
        v.fetchers.set(De.key, ke);
      });
      let X;
      H && !nt(H[1])
        ? (X = { [H[0]]: H[1].data })
        : v.actionData &&
          (Object.keys(v.actionData).length === 0
            ? (X = null)
            : (X = v.actionData)),
        We(
          oe(
            { navigation: Se },
            X !== void 0 ? { actionData: X } : {},
            ye.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: W }
        );
    }
    ye.forEach((X) => {
      j.has(X.key) && Ut(X.key), X.controller && j.set(X.key, X.controller);
    });
    let mr = () => ye.forEach((X) => Ut(X.key));
    O && O.signal.addEventListener("abort", mr);
    let { loaderResults: At, fetcherResults: Rn } = await Su(
      v.matches,
      k,
      ne,
      ye,
      y
    );
    if (y.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", mr),
      ye.forEach((X) => j.delete(X.key));
    let Ln = bs([...At, ...Rn]);
    if (Ln) {
      if (Ln.idx >= ne.length) {
        let X = ye[Ln.idx - ne.length].key;
        q.add(X);
      }
      return await fr(y, Ln.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: Tn, errors: yt } = Gs(v, k, ne, At, H, ye, Rn, Te);
    Te.forEach((X, De) => {
      X.subscribe((qe) => {
        (qe || X.done) && Te.delete(De);
      });
    }),
      c.v7_partialHydration &&
        F &&
        v.errors &&
        Object.entries(v.errors)
          .filter((X) => {
            let [De] = X;
            return !ne.some((qe) => qe.route.id === De);
          })
          .forEach((X) => {
            let [De, qe] = X;
            yt = Object.assign(yt || {}, { [De]: qe });
          });
    let vl = Cu(),
      yl = Pu($),
      gl = vl || yl || ye.length > 0;
    return oe(
      { loaderData: Tn, errors: yt },
      gl ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function Xf(y, w, k, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    j.has(y) && Ut(y);
    let M = (_ && _.unstable_flushSync) === !0,
      V = a || o,
      U = ma(
        v.location,
        v.matches,
        u,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        w,
        _ == null ? void 0 : _.relative
      ),
      F = Kn(V, U, u);
    if (!F) {
      hr(y, w, be(404, { pathname: U }), { flushSync: M });
      return;
    }
    let {
      path: W,
      submission: H,
      error: Se,
    } = Vs(c.v7_normalizeFormMethod, !0, U, _);
    if (Se) {
      hr(y, w, Se, { flushSync: M });
      return;
    }
    let Ee = ya(F, W);
    if (((I = (_ && _.preventScrollReset) === !0), H && ft(H.formMethod))) {
      Gf(y, w, W, Ee, F, M, H);
      return;
    }
    ut.set(y, { routeId: w, path: W }), Jf(y, w, W, Ee, F, M, H);
  }
  async function Gf(y, w, k, _, M, V, U) {
    if ((Vi(), ut.delete(y), !_.route.action && !_.route.lazy)) {
      let ke = be(405, { method: U.formMethod, pathname: k, routeId: w });
      hr(y, w, ke, { flushSync: V });
      return;
    }
    let F = v.fetchers.get(y);
    It(y, kv(U, F), { flushSync: V });
    let W = new AbortController(),
      H = zn(e.history, k, W.signal, U);
    j.set(y, W);
    let Se = A,
      B = (await pr("action", H, [_], M))[0];
    if (H.signal.aborted) {
      j.get(y) === W && j.delete(y);
      return;
    }
    if (c.v7_fetcherPersist && Ve.has(y)) {
      if (yn(B) || nt(B)) {
        It(y, $t(void 0));
        return;
      }
    } else {
      if (yn(B))
        if ((j.delete(y), $ > Se)) {
          It(y, $t(void 0));
          return;
        } else
          return q.add(y), It(y, Nr(U)), fr(H, B, { fetcherSubmission: U });
      if (nt(B)) {
        hr(y, w, B.error);
        return;
      }
    }
    if (vn(B)) throw be(400, { type: "defer-action" });
    let ne = v.navigation.location || v.location,
      ye = zn(e.history, ne, W.signal),
      mr = a || o,
      At =
        v.navigation.state !== "idle"
          ? Kn(mr, v.navigation.location, u)
          : v.matches;
    Q(At, "Didn't find any matches after fetcher action");
    let Rn = ++A;
    Z.set(y, Rn);
    let Ln = Nr(U, B.data);
    v.fetchers.set(y, Ln);
    let [Tn, yt] = Ws(
      e.history,
      v,
      At,
      U,
      ne,
      !1,
      c.unstable_skipActionErrorRevalidation,
      at,
      Ot,
      Ft,
      Ve,
      ut,
      q,
      mr,
      u,
      [_.route.id, B]
    );
    yt
      .filter((ke) => ke.key !== y)
      .forEach((ke) => {
        let vr = ke.key,
          Lu = v.fetchers.get(vr),
          np = Nr(void 0, Lu ? Lu.data : void 0);
        v.fetchers.set(vr, np),
          j.has(vr) && Ut(vr),
          ke.controller && j.set(vr, ke.controller);
      }),
      We({ fetchers: new Map(v.fetchers) });
    let vl = () => yt.forEach((ke) => Ut(ke.key));
    W.signal.addEventListener("abort", vl);
    let { loaderResults: yl, fetcherResults: gl } = await Su(
      v.matches,
      At,
      Tn,
      yt,
      ye
    );
    if (W.signal.aborted) return;
    W.signal.removeEventListener("abort", vl),
      Z.delete(y),
      j.delete(y),
      yt.forEach((ke) => j.delete(ke.key));
    let X = bs([...yl, ...gl]);
    if (X) {
      if (X.idx >= Tn.length) {
        let ke = yt[X.idx - Tn.length].key;
        q.add(ke);
      }
      return fr(ye, X.result);
    }
    let { loaderData: De, errors: qe } = Gs(
      v,
      v.matches,
      Tn,
      yl,
      void 0,
      yt,
      gl,
      Te
    );
    if (v.fetchers.has(y)) {
      let ke = $t(B.data);
      v.fetchers.set(y, ke);
    }
    Pu(Rn),
      v.navigation.state === "loading" && Rn > $
        ? (Q(L, "Expected pending action"),
          O && O.abort(),
          dr(v.navigation.location, {
            matches: At,
            loaderData: De,
            errors: qe,
            fetchers: new Map(v.fetchers),
          }))
        : (We({
            errors: qe,
            loaderData: Js(v.loaderData, De, At, qe),
            fetchers: new Map(v.fetchers),
          }),
          (at = !1));
  }
  async function Jf(y, w, k, _, M, V, U) {
    let F = v.fetchers.get(y);
    It(y, Nr(U, F ? F.data : void 0), { flushSync: V });
    let W = new AbortController(),
      H = zn(e.history, k, W.signal);
    j.set(y, W);
    let Se = A,
      B = (await pr("loader", H, [_], M))[0];
    if (
      (vn(B) && (B = (await Df(B, H.signal, !0)) || B),
      j.get(y) === W && j.delete(y),
      !H.signal.aborted)
    ) {
      if (Ve.has(y)) {
        It(y, $t(void 0));
        return;
      }
      if (yn(B))
        if ($ > Se) {
          It(y, $t(void 0));
          return;
        } else {
          q.add(y), await fr(H, B);
          return;
        }
      if (nt(B)) {
        hr(y, w, B.error);
        return;
      }
      Q(!vn(B), "Unhandled fetcher deferred data"), It(y, $t(B.data));
    }
  }
  async function fr(y, w, k) {
    let {
      submission: _,
      fetcherSubmission: M,
      replace: V,
    } = k === void 0 ? {} : k;
    w.response.headers.has("X-Remix-Revalidate") && (at = !0);
    let U = w.response.headers.get("Location");
    Q(U, "Expected a Location header on the redirect Response"),
      (U = Ys(U, new URL(y.url), u));
    let F = ol(v.location, U, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (w.response.headers.has("X-Remix-Reload-Document")) ne = !0;
      else if (yu.test(U)) {
        const ye = e.history.createURL(U);
        ne = ye.origin !== t.location.origin || cr(ye.pathname, u) == null;
      }
      if (ne) {
        V ? t.location.replace(U) : t.location.assign(U);
        return;
      }
    }
    O = null;
    let W = V === !0 ? pe.Replace : pe.Push,
      { formMethod: H, formAction: Se, formEncType: Ee } = v.navigation;
    !_ && !M && H && Se && Ee && (_ = tc(v.navigation));
    let B = _ || M;
    if (iv.has(w.response.status) && B && ft(B.formMethod))
      await cn(W, F, {
        submission: oe({}, B, { formAction: U }),
        preventScrollReset: I,
      });
    else {
      let ne = xo(F, _);
      await cn(W, F, {
        overrideNavigation: ne,
        fetcherSubmission: M,
        preventScrollReset: I,
      });
    }
  }
  async function pr(y, w, k, _) {
    try {
      let M = await pv(s, y, w, k, _, i, l);
      return await Promise.all(
        M.map((V, U) => {
          if (wv(V)) {
            let F = V.result;
            return {
              type: re.redirect,
              response: vv(F, w, k[U].route.id, _, u, c.v7_relativeSplatPath),
            };
          }
          return mv(V);
        })
      );
    } catch (M) {
      return k.map(() => ({ type: re.error, error: M }));
    }
  }
  async function Su(y, w, k, _, M) {
    let [V, ...U] = await Promise.all([
      k.length ? pr("loader", M, k, w) : [],
      ..._.map((F) => {
        if (F.matches && F.match && F.controller) {
          let W = zn(e.history, F.path, F.controller.signal);
          return pr("loader", W, [F.match], F.matches).then((H) => H[0]);
        } else
          return Promise.resolve({
            type: re.error,
            error: be(404, { pathname: F.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        ec(
          y,
          k,
          V,
          V.map(() => M.signal),
          !1,
          v.loaderData
        ),
        ec(
          y,
          _.map((F) => F.match),
          U,
          _.map((F) => (F.controller ? F.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: V, fetcherResults: U }
    );
  }
  function Vi() {
    (at = !0),
      Ot.push(...Wi()),
      ut.forEach((y, w) => {
        j.has(w) && (Ft.push(w), Ut(w));
      });
  }
  function It(y, w, k) {
    k === void 0 && (k = {}),
      v.fetchers.set(y, w),
      We(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function hr(y, w, k, _) {
    _ === void 0 && (_ = {});
    let M = $r(v.matches, w);
    hl(y),
      We(
        { errors: { [M.route.id]: k }, fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function Eu(y) {
    return (
      c.v7_fetcherPersist &&
        (He.set(y, (He.get(y) || 0) + 1), Ve.has(y) && Ve.delete(y)),
      v.fetchers.get(y) || ov
    );
  }
  function hl(y) {
    let w = v.fetchers.get(y);
    j.has(y) && !(w && w.state === "loading" && Z.has(y)) && Ut(y),
      ut.delete(y),
      Z.delete(y),
      q.delete(y),
      Ve.delete(y),
      v.fetchers.delete(y);
  }
  function Zf(y) {
    if (c.v7_fetcherPersist) {
      let w = (He.get(y) || 0) - 1;
      w <= 0 ? (He.delete(y), Ve.add(y)) : He.set(y, w);
    } else hl(y);
    We({ fetchers: new Map(v.fetchers) });
  }
  function Ut(y) {
    let w = j.get(y);
    Q(w, "Expected fetch controller: " + y), w.abort(), j.delete(y);
  }
  function ku(y) {
    for (let w of y) {
      let k = Eu(w),
        _ = $t(k.data);
      v.fetchers.set(w, _);
    }
  }
  function Cu() {
    let y = [],
      w = !1;
    for (let k of q) {
      let _ = v.fetchers.get(k);
      Q(_, "Expected fetcher: " + k),
        _.state === "loading" && (q.delete(k), y.push(k), (w = !0));
    }
    return ku(y), w;
  }
  function Pu(y) {
    let w = [];
    for (let [k, _] of Z)
      if (_ < y) {
        let M = v.fetchers.get(k);
        Q(M, "Expected fetcher: " + k),
          M.state === "loading" && (Ut(k), Z.delete(k), w.push(k));
      }
    return ku(w), w.length > 0;
  }
  function qf(y, w) {
    let k = v.blockers.get(y) || Pr;
    return Ze.get(y) !== w && Ze.set(y, w), k;
  }
  function Nu(y) {
    v.blockers.delete(y), Ze.delete(y);
  }
  function ml(y, w) {
    let k = v.blockers.get(y) || Pr;
    Q(
      (k.state === "unblocked" && w.state === "blocked") ||
        (k.state === "blocked" && w.state === "blocked") ||
        (k.state === "blocked" && w.state === "proceeding") ||
        (k.state === "blocked" && w.state === "unblocked") ||
        (k.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + w.state
    );
    let _ = new Map(v.blockers);
    _.set(y, w), We({ blockers: _ });
  }
  function _u(y) {
    let { currentLocation: w, nextLocation: k, historyAction: _ } = y;
    if (Ze.size === 0) return;
    Ze.size > 1 && or(!1, "A router only supports one blocker at a time");
    let M = Array.from(Ze.entries()),
      [V, U] = M[M.length - 1],
      F = v.blockers.get(V);
    if (
      !(F && F.state === "proceeding") &&
      U({ currentLocation: w, nextLocation: k, historyAction: _ })
    )
      return V;
  }
  function Wi(y) {
    let w = [];
    return (
      Te.forEach((k, _) => {
        (!y || y(_)) && (k.cancel(), w.push(_), Te.delete(_));
      }),
      w
    );
  }
  function bf(y, w, k) {
    if (((S = y), (x = w), (E = k || null), !T && v.navigation === wo)) {
      T = !0;
      let _ = Ru(v.location, v.matches);
      _ != null && We({ restoreScrollPosition: _ });
    }
    return () => {
      (S = null), (x = null), (E = null);
    };
  }
  function ju(y, w) {
    return (
      (E &&
        E(
          y,
          w.map((_) => Fm(_, v.loaderData))
        )) ||
      y.key
    );
  }
  function ep(y, w) {
    if (S && x) {
      let k = ju(y, w);
      S[k] = x();
    }
  }
  function Ru(y, w) {
    if (S) {
      let k = ju(y, w),
        _ = S[k];
      if (typeof _ == "number") return _;
    }
    return null;
  }
  function tp(y) {
    (i = {}), (a = ha(y, l, void 0, i));
  }
  return (
    (D = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Hf,
      subscribe: Wf,
      enableScrollRestoration: bf,
      navigate: xu,
      fetch: Xf,
      revalidate: Qf,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: Eu,
      deleteFetcher: Zf,
      dispose: Vf,
      getBlocker: qf,
      deleteBlocker: Nu,
      _internalFetchControllers: j,
      _internalActiveDeferreds: Te,
      _internalSetRoutes: tp,
    }),
    D
  );
}
function sv(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ma(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let d of t)
      if ((u.push(d), d.route.id === o)) {
        s = d;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = hu(l || ".", pu(u, i), cr(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !gu(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Rt([n, c.pathname])),
    Pn(c)
  );
}
function Vs(e, t, n, r) {
  if (!r || !sv(r)) return { path: n };
  if (r.formMethod && !Sv(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = Lf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ft(o)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, E) => {
              let [x, T] = E;
              return (
                "" +
                S +
                x +
                "=" +
                T +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ft(o)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = va(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = va(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Xs(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Xs(u));
    } catch {
      return l();
    }
  let c = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ft(c.formMethod)) return { path: n, submission: c };
  let d = un(n);
  return (
    t && d.search && gu(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: Pn(d), submission: c }
  );
}
function cv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ws(e, t, n, r, l, i, o, a, u, s, c, d, p, S, E, x) {
  let T = x ? (nt(x[1]) ? x[1].error : x[1].data) : void 0,
    h = e.createURL(t.location),
    f = e.createURL(l),
    m = x && nt(x[1]) ? x[0] : void 0,
    C = m ? cv(n, m) : n,
    R = x ? x[1].statusCode : void 0,
    D = o && R && R >= 400,
    v = C.filter((I, O) => {
      let { route: Y } = I;
      if (Y.lazy) return !0;
      if (Y.loader == null) return !1;
      if (i)
        return typeof Y.loader != "function" || Y.loader.hydrate
          ? !0
          : t.loaderData[Y.id] === void 0 &&
              (!t.errors || t.errors[Y.id] === void 0);
      if (
        dv(t.loaderData, t.matches[O], I) ||
        u.some((xe) => xe === I.route.id)
      )
        return !0;
      let de = t.matches[O],
        ie = I;
      return Qs(
        I,
        oe(
          {
            currentUrl: h,
            currentParams: de.params,
            nextUrl: f,
            nextParams: ie.params,
          },
          r,
          {
            actionResult: T,
            unstable_actionStatus: R,
            defaultShouldRevalidate: D
              ? !1
              : a ||
                h.pathname + h.search === f.pathname + f.search ||
                h.search !== f.search ||
                Rf(de, ie),
          }
        )
      );
    }),
    L = [];
  return (
    d.forEach((I, O) => {
      if (i || !n.some((at) => at.route.id === I.routeId) || c.has(O)) return;
      let Y = Kn(S, I.path, E);
      if (!Y) {
        L.push({
          key: O,
          routeId: I.routeId,
          path: I.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let de = t.fetchers.get(O),
        ie = ya(Y, I.path),
        xe = !1;
      p.has(O)
        ? (xe = !1)
        : s.includes(O)
        ? (xe = !0)
        : de && de.state !== "idle" && de.data === void 0
        ? (xe = a)
        : (xe = Qs(
            ie,
            oe(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: T,
                unstable_actionStatus: R,
                defaultShouldRevalidate: D ? !1 : a,
              }
            )
          )),
        xe &&
          L.push({
            key: O,
            routeId: I.routeId,
            path: I.path,
            matches: Y,
            match: ie,
            controller: new AbortController(),
          });
    }),
    [v, L]
  );
}
function dv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Rf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Qs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Ks(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Q(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    or(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !Mm.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, oe({}, t(l), { lazy: void 0 }));
}
function fv(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function pv(e, t, n, r, l, i, o, a) {
  let u = r.reduce((d, p) => d.add(p.route.id), new Set()),
    s = new Set(),
    c = await e({
      matches: l.map((d) => {
        let p = u.has(d.route.id);
        return oe({}, d, {
          shouldLoad: p,
          resolve: (E) => (
            s.add(d.route.id),
            p
              ? hv(t, n, d, i, o, E, a)
              : Promise.resolve({ type: re.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((d) =>
      Q(
        s.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    c.filter((d, p) => u.has(l[p].route.id))
  );
}
async function hv(e, t, n, r, l, i, o) {
  let a,
    u,
    s = (c) => {
      let d,
        p = new Promise((x, T) => (d = T));
      (u = () => d()), t.signal.addEventListener("abort", u);
      let S = (x) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : c(
                { request: t, params: n.params, context: o },
                ...(x !== void 0 ? [x] : [])
              ),
        E;
      return (
        i
          ? (E = i((x) => S(x)))
          : (E = (async () => {
              try {
                return { type: "data", result: await S() };
              } catch (x) {
                return { type: "error", result: x };
              }
            })()),
        Promise.race([E, p])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let d,
          [p] = await Promise.all([
            s(c).catch((S) => {
              d = S;
            }),
            Ks(n.route, l, r),
          ]);
        if (d !== void 0) throw d;
        a = p;
      } else if ((await Ks(n.route, l, r), (c = n.route[e]), c)) a = await s(c);
      else if (e === "action") {
        let d = new URL(t.url),
          p = d.pathname + d.search;
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (c) a = await s(c);
    else {
      let d = new URL(t.url),
        p = d.pathname + d.search;
      throw be(404, { pathname: p });
    }
    Q(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (c) {
    return { type: re.error, result: c };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return a;
}
async function mv(e) {
  let { result: t, type: n, status: r } = e;
  if (Tf(t)) {
    let o;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: re.error, error: a };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new mu(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error)
    return { type: re.error, error: t, statusCode: vu(t) ? t.status : r };
  if (xv(t)) {
    var l, i;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: re.data, data: t, statusCode: r };
}
function vv(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (Q(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !yu.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = ma(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function Ys(e, t, n) {
  if (yu.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = cr(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function zn(e, t, n, r) {
  let l = e.createURL(Lf(t)).toString(),
    i = { signal: n };
  if (r && ft(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = va(r.formData))
        : (i.body = r.formData);
  }
  return new Request(l, i);
}
function va(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Xs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function yv(e, t, n, r, l, i) {
  let o = {},
    a = null,
    u,
    s = !1,
    c = {},
    d = r && nt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, S) => {
      let E = t[S].route.id;
      if (
        (Q(!yn(p), "Cannot handle redirect results in processLoaderData"),
        nt(p))
      ) {
        let x = p.error;
        d !== void 0 && ((x = d), (d = void 0)), (a = a || {});
        {
          let T = $r(e, E);
          a[T.route.id] == null && (a[T.route.id] = x);
        }
        (o[E] = void 0),
          s || ((s = !0), (u = vu(p.error) ? p.error.status : 500)),
          p.headers && (c[E] = p.headers);
      } else
        vn(p)
          ? (l.set(E, p.deferredData),
            (o[E] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !s &&
              (u = p.statusCode),
            p.headers && (c[E] = p.headers))
          : ((o[E] = p.data),
            p.statusCode && p.statusCode !== 200 && !s && (u = p.statusCode),
            p.headers && (c[E] = p.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: c }
  );
}
function Gs(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = yv(t, n, r, l, a);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: p, controller: S } = i[c];
    Q(
      o !== void 0 && o[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let E = o[c];
    if (!(S && S.signal.aborted))
      if (nt(E)) {
        let x = $r(e.matches, p == null ? void 0 : p.route.id);
        (s && s[x.route.id]) || (s = oe({}, s, { [x.route.id]: E.error })),
          e.fetchers.delete(d);
      } else if (yn(E)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if (vn(E)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let x = $t(E.data);
        e.fetchers.set(d, x);
      }
  }
  return { loaderData: u, errors: s };
}
function Js(e, t, n, r) {
  let l = oe({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Zs(e) {
  return e
    ? nt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function $r(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function qs(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (a = "defer() is not supported in actions")
          : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new mu(e || 500, o, new Error(a), !0)
  );
}
function bs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (yn(n)) return { result: n, idx: t };
  }
}
function Lf(e) {
  let t = typeof e == "string" ? un(e) : e;
  return Pn(oe({}, t, { hash: "" }));
}
function gv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function wv(e) {
  return Tf(e.result) && lv.has(e.result.status);
}
function vn(e) {
  return e.type === re.deferred;
}
function nt(e) {
  return e.type === re.error;
}
function yn(e) {
  return (e && e.type) === re.redirect;
}
function xv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Tf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Sv(e) {
  return rv.has(e.toLowerCase());
}
function ft(e) {
  return tv.has(e.toLowerCase());
}
async function ec(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((d) => d.route.id === u.route.id),
      c = s != null && !Rf(s, u) && (i && i[u.route.id]) !== void 0;
    if (vn(a) && (l || c)) {
      let d = r[o];
      Q(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Df(a, d, l).then((p) => {
          p && (n[o] = p || n[o]);
        });
    }
  }
}
async function Df(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: re.error, error: l };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function gu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ya(e, t) {
  let n = typeof t == "string" ? un(t).search : t.search;
  if (e[e.length - 1].route.index && gu(n || "")) return e[e.length - 1];
  let r = Nf(e);
  return r[r.length - 1];
}
function tc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function xo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ev(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Nr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function kv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function $t(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Cv(e, t) {
  try {
    let n = e.sessionStorage.getItem(jf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function Pv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(jf, JSON.stringify(n));
    } catch (r) {
      or(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gi() {
  return (
    (gi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gi.apply(this, arguments)
  );
}
const Ui = P.createContext(null),
  zf = P.createContext(null),
  jn = P.createContext(null),
  wu = P.createContext(null),
  sn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mf = P.createContext(null);
function Nv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pl() || Q(!1);
  let { basename: r, navigator: l } = P.useContext(jn),
    { hash: i, pathname: o, search: a } = If(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Rt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function pl() {
  return P.useContext(wu) != null;
}
function Ai() {
  return pl() || Q(!1), P.useContext(wu).location;
}
function Of(e) {
  P.useContext(jn).static || P.useLayoutEffect(e);
}
function Ff() {
  let { isDataRoute: e } = P.useContext(sn);
  return e ? Bv() : _v();
}
function _v() {
  pl() || Q(!1);
  let e = P.useContext(Ui),
    { basename: t, future: n, navigator: r } = P.useContext(jn),
    { matches: l } = P.useContext(sn),
    { pathname: i } = Ai(),
    o = JSON.stringify(pu(l, n.v7_relativeSplatPath)),
    a = P.useRef(!1);
  return (
    Of(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let d = hu(s, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Rt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, i, e]
    )
  );
}
const jv = P.createContext(null);
function Rv(e) {
  let t = P.useContext(sn).outlet;
  return t && P.createElement(jv.Provider, { value: e }, t);
}
function If(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(jn),
    { matches: l } = P.useContext(sn),
    { pathname: i } = Ai(),
    o = JSON.stringify(pu(l, r.v7_relativeSplatPath));
  return P.useMemo(() => hu(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Lv(e, t, n, r) {
  pl() || Q(!1);
  let { navigator: l } = P.useContext(jn),
    { matches: i } = P.useContext(sn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Ai(),
    c;
  c = s;
  let d = c.pathname || "/",
    p = d;
  if (u !== "/") {
    let x = u.replace(/^\//, "").split("/");
    p = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S = Kn(e, { pathname: p });
  return Ov(
    S &&
      S.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: Rt([
            u,
            l.encodeLocation
              ? l.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? u
              : Rt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    r
  );
}
function Tv() {
  let e = Av(),
    t = vu(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Dv = P.createElement(Tv, null);
class zv extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          P.createElement(Mf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Mv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(Ui);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(sn.Provider, { value: t }, r)
  );
}
function Ov(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = c),
        d.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          E =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!S || S[d.route.id] === void 0);
        if (d.route.lazy || E) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, p) => {
    let S,
      E = !1,
      x = null,
      T = null;
    n &&
      ((S = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || Dv),
      u &&
        (s < 0 && p === 0
          ? ($v("route-fallback"), (E = !0), (T = null))
          : s === p &&
            ((E = !0), (T = d.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, p + 1)),
      f = () => {
        let m;
        return (
          S
            ? (m = x)
            : E
            ? (m = T)
            : d.route.Component
            ? (m = P.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = c),
          P.createElement(Mv, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? P.createElement(zv, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: S,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Uf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Uf || {}),
  wi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(wi || {});
function Fv(e) {
  let t = P.useContext(Ui);
  return t || Q(!1), t;
}
function Iv(e) {
  let t = P.useContext(zf);
  return t || Q(!1), t;
}
function Uv(e) {
  let t = P.useContext(sn);
  return t || Q(!1), t;
}
function Af(e) {
  let t = Uv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function Av() {
  var e;
  let t = P.useContext(Mf),
    n = Iv(wi.UseRouteError),
    r = Af(wi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Bv() {
  let { router: e } = Fv(Uf.UseNavigateStable),
    t = Af(wi.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Of(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, gi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const nc = {};
function $v(e, t, n) {
  nc[e] || (nc[e] = !0);
}
function Hv(e) {
  return Rv(e.context);
}
function Vv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  pl() && Q(!1);
  let u = t.replace(/^\/*/, "/"),
    s = P.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: gi({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o]
    );
  typeof r == "string" && (r = un(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: p = "",
      state: S = null,
      key: E = "default",
    } = r,
    x = P.useMemo(() => {
      let T = cr(c, u);
      return T == null
        ? null
        : {
            location: { pathname: T, search: d, hash: p, state: S, key: E },
            navigationType: l,
          };
    }, [u, c, d, p, S, E, l]);
  return x == null
    ? null
    : P.createElement(
        jn.Provider,
        { value: s },
        P.createElement(wu.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function Wv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    al.apply(this, arguments)
  );
}
function Qv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Kv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Kv(e);
}
const Xv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Gv = "6";
try {
  window.__reactRouterVersion = Gv;
} catch {}
function Jv(e, t) {
  return uv({
    basename: void 0,
    future: al({}, void 0, { v7_prependBasename: !0 }),
    history: Tm({ window: void 0 }),
    hydrationData: Zv(),
    routes: e,
    mapRouteProperties: Wv,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function Zv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = al({}, t, { errors: qv(t.errors) })), t;
}
function qv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new mu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const bv = P.createContext({ isTransitioning: !1 }),
  ey = P.createContext(new Map()),
  ty = "startTransition",
  rc = gp[ty],
  ny = "flushSync",
  lc = Lm[ny];
function ry(e) {
  rc ? rc(e) : e();
}
function _r(e) {
  lc ? lc(e) : e();
}
class ly {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function iy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = P.useState(n.state),
    [o, a] = P.useState(),
    [u, s] = P.useState({ isTransitioning: !1 }),
    [c, d] = P.useState(),
    [p, S] = P.useState(),
    [E, x] = P.useState(),
    T = P.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    f = P.useCallback(
      (v) => {
        h ? ry(v) : v();
      },
      [h]
    ),
    m = P.useCallback(
      (v, L) => {
        let {
          deletedFetchers: I,
          unstable_flushSync: O,
          unstable_viewTransitionOpts: Y,
        } = L;
        I.forEach((ie) => T.current.delete(ie)),
          v.fetchers.forEach((ie, xe) => {
            ie.data !== void 0 && T.current.set(xe, ie.data);
          });
        let de =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || de) {
          O ? _r(() => i(v)) : f(() => i(v));
          return;
        }
        if (O) {
          _r(() => {
            p && (c && c.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            _r(() => i(v));
          });
          ie.finished.finally(() => {
            _r(() => {
              d(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            _r(() => S(ie));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            x({
              state: v,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, p, c, T, f]
    );
  P.useLayoutEffect(() => n.subscribe(m), [n, m]),
    P.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new ly());
    }, [u]),
    P.useEffect(() => {
      if (c && o && n.window) {
        let v = o,
          L = c.promise,
          I = n.window.document.startViewTransition(async () => {
            f(() => i(v)), await L;
          });
        I.finished.finally(() => {
          d(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          S(I);
      }
    }, [f, o, c, n.window]),
    P.useEffect(() => {
      c && o && l.location.key === o.location.key && c.resolve();
    }, [c, p, l.location, o]),
    P.useEffect(() => {
      !u.isTransitioning &&
        E &&
        (a(E.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: E.currentLocation,
          nextLocation: E.nextLocation,
        }),
        x(void 0));
    }, [u.isTransitioning, E]),
    P.useEffect(() => {}, []);
  let C = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, L, I) =>
          n.navigate(v, {
            state: L,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
        replace: (v, L, I) =>
          n.navigate(v, {
            replace: !0,
            state: L,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
      }),
      [n]
    ),
    R = n.basename || "/",
    D = P.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: R }),
      [n, C, R]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      Ui.Provider,
      { value: D },
      P.createElement(
        zf.Provider,
        { value: l },
        P.createElement(
          ey.Provider,
          { value: T.current },
          P.createElement(
            bv.Provider,
            { value: u },
            P.createElement(
              Vv,
              {
                basename: R,
                location: l.location,
                navigationType: l.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? P.createElement(oy, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function oy(e) {
  let { routes: t, future: n, state: r } = e;
  return Lv(t, void 0, r, n);
}
const ay =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  uy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Hr = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      p = Qv(t, Xv),
      { basename: S } = P.useContext(jn),
      E,
      x = !1;
    if (typeof s == "string" && uy.test(s) && ((E = s), ay))
      try {
        let m = new URL(window.location.href),
          C = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
          R = cr(C.pathname, S);
        C.origin === m.origin && R != null
          ? (s = R + C.search + C.hash)
          : (x = !0);
      } catch {}
    let T = Nv(s, { relative: l }),
      h = sy(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: d,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return P.createElement(
      "a",
      al({}, p, { href: E || T, onClick: x || i ? r : f, ref: n, target: u })
    );
  });
var ic;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ic || (ic = {}));
var oc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(oc || (oc = {}));
function sy(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Ff(),
    s = Ai(),
    c = If(e, { relative: o });
  return P.useCallback(
    (d) => {
      if (Yv(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : Pn(s) === Pn(c);
        u(e, {
          replace: p,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, c, r, l, n, e, i, o, a]
  );
}
function cy() {
  return g.jsx("div", {
    className: "header",
    children: g.jsx("header", {
      className: "p-3 text-bg-dark",
      children: g.jsx("div", {
        className: "container",
        children: g.jsxs("div", {
          className:
            "d-flex flex-wrap align-items-right justify-content-right justify-content-lg-end",
          children: [
            g.jsx("form", {
              className: "col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3",
              role: "search",
              children: g.jsx("input", {
                type: "search",
                className: "form-control form-control-dark text-bg-dark",
                placeholder: "Search...",
                "aria-label": "Search",
              }),
            }),
            g.jsxs("div", {
              className: "text-end",
              children: [
                g.jsx(Hr, {
                  to: "/login",
                  children: g.jsx("button", {
                    type: "button",
                    className: "btn btn-outline-light me-2",
                    children: "Login",
                  }),
                }),
                g.jsx(Hr, {
                  to: "/Signup",
                  children: g.jsx("button", {
                    type: "button",
                    className: "btn btn-light",
                    children: "Sign-up",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function dy() {
  const [e, t] = P.useState("/"),
    n = () => {
      t("/");
    },
    r = () => {
      t("/create-post"), console.log(e);
    },
    l = () => {
      t("/aboutus"), console.log(e);
    };
  return g.jsx("div", {
    children: g.jsxs("div", {
      className: "d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar",
      children: [
        g.jsxs("a", {
          href: "/",
          className:
            "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",
          children: [
            g.jsx("svg", {
              className: "bi pe-none me-2",
              width: "40",
              height: "32",
              children: g.jsx("use", { xlinkHref: "#bootstrap" }),
            }),
            g.jsx("span", { className: "fs-4", children: "Twooter" }),
          ],
        }),
        g.jsx("hr", {}),
        g.jsxs("ul", {
          className: "nav nav-pills flex-column mb-auto",
          children: [
            g.jsx("li", {
              className: "nav-item",
              onClick: n,
              children: g.jsxs(Hr, {
                to: "/",
                className: `nav-link text-white ${e === "/" && "active "}`,
                "aria-current": "page",
                children: [
                  g.jsx("svg", {
                    className: "bi pe-none me-2",
                    width: "16",
                    height: "16",
                    children: g.jsx("use", { xlinkHref: "#home" }),
                  }),
                  "Home",
                ],
              }),
            }),
            g.jsx("li", {
              onClick: r,
              children: g.jsxs(Hr, {
                to: "/create-post",
                className: `nav-link text-white ${
                  e === "/create-post" && "active"
                }`,
                children: [
                  g.jsx("svg", {
                    className: "bi pe-none me-2",
                    width: "16",
                    height: "16",
                    children: g.jsx("use", { xlinkHref: "#speedometer2" }),
                  }),
                  "Create Post",
                ],
              }),
            }),
            g.jsx("li", {
              onClick: l,
              children: g.jsxs(Hr, {
                to: "/aboutus",
                className: `nav-link text-white ${
                  e === "/aboutus" && "active"
                }`,
                children: [
                  g.jsx("svg", {
                    className: "bi pe-none me-2",
                    width: "16",
                    height: "16",
                    children: g.jsx("use", { xlinkHref: "#speedometer2" }),
                  }),
                  "About Us",
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function fy() {
  return g.jsx("div", {
    className: "footer",
    children: g.jsx("div", {
      className: "container",
      children: g.jsxs("footer", {
        className: "py-3 my-4",
        children: [
          g.jsxs("ul", {
            className: "nav justify-content-center border-bottom pb-3 mb-3",
            children: [
              g.jsx("li", {
                className: "nav-item",
                children: g.jsx("a", {
                  href: "#",
                  className: "nav-link px-2 text-body-secondary",
                  children: "Home",
                }),
              }),
              g.jsx("li", {
                className: "nav-item",
                children: g.jsx("a", {
                  href: "#",
                  className: "nav-link px-2 text-body-secondary",
                  children: "Features",
                }),
              }),
              g.jsx("li", {
                className: "nav-item",
                children: g.jsx("a", {
                  href: "#",
                  className: "nav-link px-2 text-body-secondary",
                  children: "Pricing",
                }),
              }),
              g.jsx("li", {
                className: "nav-item",
                children: g.jsx("a", {
                  href: "#",
                  className: "nav-link px-2 text-body-secondary",
                  children: "FAQs",
                }),
              }),
              g.jsx("li", {
                className: "nav-item",
                children: g.jsx("a", {
                  href: "#",
                  className: "nav-link px-2 text-body-secondary",
                  children: "About",
                }),
              }),
            ],
          }),
          g.jsx("p", {
            className: "text-center text-body-secondary",
            children: "© 2024 Company, Inc",
          }),
        ],
      }),
    }),
  });
}
const Bi = P.createContext({
    postList: [],
    fetching: !1,
    addPost: () => {},
    deletePost: () => {},
  }),
  py = (e, t) => {
    let n = e;
    return (
      t.type === "DELETE_POST"
        ? (n = e.filter((r) => r.id !== t.payload.postId))
        : t.type === "ADD_POST"
        ? (n = [t.payload, ...e])
        : t.type === "ADD_INITITAL_POST" && (n = t.payload.posts),
      n
    );
  };
function hy({ children: e }) {
  const [t, n] = P.useReducer(py, []),
    [r, l] = P.useState(!1),
    i = (u) => {
      n({ type: "ADD_INITITAL_POST", payload: { posts: u } });
    },
    o = (u, s, c, d, p) => {
      n({
        type: "ADD_POST",
        payload: {
          id: Date.now(),
          title: s,
          body: c,
          reactions: d,
          userId: u,
          tags: p,
        },
      });
    },
    a = (u) => {
      n({ type: "DELETE_POST", payload: { postId: u } });
    };
  return (
    P.useEffect(() => {
      const u = new AbortController(),
        s = u.signal;
      return (
        l(!0),
        fetch("https://dummyjson.com/posts", { signal: s })
          .then((c) => c.json())
          .then((c) => {
            i(c.posts), l(!1);
          }),
        () => {
          u.abort();
        }
      );
    }, []),
    g.jsx(Bi.Provider, {
      value: { postList: t, fetching: r, addPost: o, deletePost: a },
      children: e,
    })
  );
}
function my() {
  return g.jsx(hy, {
    children: g.jsxs("div", {
      className: "main",
      children: [
        g.jsx(dy, {}),
        g.jsxs("div", {
          className: "body",
          children: [g.jsx(cy, {}), g.jsx(Hv, {}), g.jsx(fy, {})],
        }),
      ],
    }),
  });
}
function vy() {
  const { addPost: e } = P.useContext(Bi),
    t = Ff(),
    n = P.useRef(),
    r = P.useRef(),
    l = P.useRef(),
    i = P.useRef(),
    o = P.useRef(),
    a = P.useRef(),
    u = (s) => {
      s.preventDefault();
      const c = n.current.value,
        d = r.current.value,
        p = l.current.value,
        S = i.current.value,
        E = o.current.value,
        x = { likes: S, dislikes: E },
        T = a.current.value.split(" ");
      (n.current.value = ""),
        (r.current.value = ""),
        (l.current.value = ""),
        (i.current.value = ""),
        (o.current.value = ""),
        (a.current.value = ""),
        e(c, d, p, x, T),
        t("/");
    };
  return g.jsx("div", {
    className: "mini-container",
    onSubmit: u,
    children: g.jsxs("form", {
      className: "row g-3 ",
      children: [
        g.jsxs("div", {
          className: "col-md-7",
          children: [
            g.jsx("label", {
              htmlFor: "inputPassword",
              className: "form-label  Items",
              children: "User Id*",
            }),
            g.jsx("input", {
              ref: n,
              type: "UserId",
              className: "form-control",
              placeholder: "user-1A@!",
            }),
          ],
        }),
        g.jsxs("div", {
          className: "col-7",
          children: [
            g.jsx("label", {
              htmlFor: "inputAddress",
              className: "form-label Items",
              children: "Post Title",
            }),
            g.jsx("input", {
              type: "text",
              ref: r,
              className: "form-control",
              id: "inputAddress",
              placeholder: "How are you feeling today...",
            }),
          ],
        }),
        g.jsxs("div", {
          className: "col-7",
          children: [
            g.jsx("label", {
              htmlFor: "inputAddress2",
              className: "form-label Items",
              children: "Post Content",
            }),
            g.jsx("textarea", {
              ref: l,
              className: "form-control",
              id: "exampleFormControlTextarea1",
              rows: "4",
              placeholder: "Tell us more about it...",
            }),
          ],
        }),
        g.jsxs("div", {
          className: "reactions",
          children: [
            g.jsxs("div", {
              className: "col-3",
              children: [
                g.jsx("label", {
                  htmlFor: "inputCity",
                  className: "form-label Items",
                  children: "Likes",
                }),
                g.jsx("input", {
                  ref: i,
                  type: "text",
                  className: "form-control",
                  id: "inputCity",
                  placeholder: "How many likes are there...",
                }),
              ],
            }),
            g.jsxs("div", {
              className: "col-3",
              children: [
                g.jsx("label", {
                  htmlFor: "inputCity",
                  className: "form-label Items",
                  children: "Dislikes",
                }),
                g.jsx("input", {
                  ref: o,
                  type: "text",
                  className: "form-control",
                  id: "inputCity",
                  placeholder: "How many dislikes are there...",
                }),
              ],
            }),
          ],
        }),
        g.jsxs("div", {
          className: "col-md-7",
          children: [
            g.jsx("label", {
              htmlFor: "inputCity",
              className: "form-label Items",
              children: "Enter your hashtags",
            }),
            g.jsx("input", {
              ref: a,
              type: "text",
              className: "form-control",
              id: "inputCity",
              placeholder: "Enter tags using space..",
            }),
          ],
        }),
        g.jsx("div", {
          className: "col-7",
          children: g.jsxs("div", {
            className: "form-check",
            children: [
              g.jsx("input", {
                className: "form-check-input",
                type: "checkbox",
                id: "gridCheck",
              }),
              g.jsx("label", {
                className: "form-check-label",
                htmlFor: "gridCheck",
                children: "Remember me",
              }),
            ],
          }),
        }),
        g.jsx("div", {
          className: "col-12",
          children: g.jsx("button", {
            type: "submit",
            className: "btn btn-dark",
            children: "Post",
          }),
        }),
      ],
    }),
  });
}
var Bf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ac = _t.createContext && _t.createContext(Bf),
  yy = ["attr", "size", "title"];
function gy(e, t) {
  if (e == null) return {};
  var n = wy(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function wy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function xi() {
  return (
    (xi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xi.apply(this, arguments)
  );
}
function uc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uc(Object(n), !0).forEach(function (r) {
          xy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function xy(e, t, n) {
  return (
    (t = Sy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Sy(e) {
  var t = Ey(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ey(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $f(e) {
  return (
    e &&
    e.map((t, n) =>
      _t.createElement(t.tag, Si({ key: n }, t.attr), $f(t.child))
    )
  );
}
function $i(e) {
  return (t) =>
    _t.createElement(ky, xi({ attr: Si({}, e.attr) }, t), $f(e.child));
}
function ky(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = gy(e, yy),
      a = l || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      _t.createElement(
        "svg",
        xi(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: Si(Si({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && _t.createElement("title", null, i),
        e.children
      )
    );
  };
  return ac !== void 0
    ? _t.createElement(ac.Consumer, null, (n) => t(n))
    : t(Bf);
}
function Cy(e) {
  return $i({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z",
        },
        child: [],
      },
    ],
  })(e);
}
function Py(e) {
  return $i({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ny(e) {
  return $i({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function _y(e) {
  return $i({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z",
        },
        child: [],
      },
    ],
  })(e);
}
function jy({ post: e }) {
  const { deletePost: t } = P.useContext(Bi);
  return g.jsx(g.Fragment, {
    children: g.jsx("div", {
      className: "card w-75 mb-4 post",
      children: g.jsxs("div", {
        className: "card-body",
        children: [
          g.jsxs("div", {
            className: "userId ",
            children: [
              g.jsx("div", { className: "item", children: g.jsx(_y, {}) }),
              g.jsxs("div", {
                className: "item",
                children: ["user-", e.userId],
              }),
            ],
          }),
          g.jsx(
            "span",
            {
              className:
                "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark",
              onClick: () => t(e.id),
              children: g.jsx(Cy, {}),
            },
            e.id
          ),
          g.jsx("h5", { className: "card-title", children: e.title }),
          g.jsx("p", { className: "card-text", children: e.body }),
          g.jsxs("div", {
            className: "d-flex justify-content-between",
            children: [
              g.jsx("span", {
                className: "d-grid gap-2 d-md-flex justify-content-md-end",
                children: e.tags.map((n) =>
                  g.jsx(
                    "span",
                    { className: "badge text-bg-light", children: n },
                    n
                  )
                ),
              }),
              g.jsxs("div", {
                className: "Views",
                children: [
                  g.jsxs("div", {
                    className: "item1",
                    children: [
                      g.jsx("div", {
                        className: "item ",
                        children: g.jsx(Ny, {}),
                      }),
                      g.jsx("div", {
                        className: "item",
                        children: e.reactions.likes,
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "item2",
                    children: [
                      g.jsx("div", {
                        className: "item",
                        children: g.jsx(Py, {}),
                      }),
                      g.jsx("div", {
                        className: "item",
                        children: e.reactions.dislikes,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Ry({ onGetPostClick: e }) {
  return g.jsx("div", {
    className: "bg text-secondary px-4 py-5 text-center WelcomeMessage",
    children: g.jsxs("div", {
      className: "py-5",
      children: [
        g.jsx("h1", {
          className: "display-5 fw-bold text-black ",
          children: "Welcome to Twooter",
        }),
        g.jsxs("div", {
          className: "col-lg-6 mx-auto",
          children: [
            g.jsx("p", {
              className: "fs-5 mb-4",
              children:
                "This is a very unique and interesting social media platform where you can relax and have fun. On this website, you can learn about people's thoughts, get to know your friends, family, and the world.",
            }),
            g.jsx("div", {
              className: "d-grid gap-2 d-sm-flex justify-content-sm-center",
              children: g.jsx("button", {
                onClick: e,
                type: "button",
                className: "btn btn-outline-dark btn-lg px-4 me-sm-3 fw-bold",
                children: "Custom button",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Ly() {
  return g.jsx("div", {
    className: "LoadingPage",
    children: g.jsx("div", {
      className: "spinner-border",
      style: { width: "3rem", height: "3rem" },
      role: "status",
      children: g.jsx("span", {
        className: "visually-hidden",
        children: "Loading...",
      }),
    }),
  });
}
function Ty() {
  const { postList: e, fetching: t } = P.useContext(Bi);
  return g.jsxs("div", {
    className: "mini-container",
    children: [
      t && g.jsx(Ly, {}),
      !t && e.length === 0 && g.jsx(Ry, {}),
      !t && e.map((n) => g.jsx(jy, { post: n }, n.id)),
    ],
  });
}
function Dy() {
  return g.jsx("div", {
    className: "AboutUs",
    children: g.jsxs("div", {
      className: "px-4 py-5 my-5 text-center",
      children: [
        g.jsx("h1", {
          className: "display-5 fw-bold text-body-emphasis",
          children: "About Us",
        }),
        g.jsx("div", {
          className: "col-lg-6 mx-auto",
          children: g.jsx("p", {
            className: "lead mb-4",
            children:
              "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
          }),
        }),
      ],
    }),
  });
}
const zy = () => {
    const [e, t] = P.useState(""),
      [n, r] = P.useState(""),
      [l, i] = P.useState(""),
      o = (a) => {
        a.preventDefault(),
          !e || !n
            ? i("Both fields are required")
            : /\S+@\S+\.\S+/.test(e)
            ? (i(""), console.log("Form submitted:", { email: e, password: n }))
            : i("Email is invalid");
      };
    return g.jsx("div", {
      className: "BODY",
      children: g.jsx("div", {
        className: "login-form-container",
        children: g.jsxs("form", {
          className: "login-form",
          onSubmit: o,
          children: [
            g.jsx("h2", { children: "Login" }),
            l && g.jsx("p", { className: "error", children: l }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", { htmlFor: "email", children: "Email" }),
                g.jsx("input", {
                  type: "email",
                  id: "email",
                  value: e,
                  onChange: (a) => t(a.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", { htmlFor: "password", children: "Password" }),
                g.jsx("input", {
                  type: "password",
                  id: "password",
                  value: n,
                  onChange: (a) => r(a.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsx("div", {
              className: "Button1",
              children: g.jsx("button", { type: "submit", children: "Login" }),
            }),
          ],
        }),
      }),
    });
  },
  My = () => {
    const [e, t] = P.useState(""),
      [n, r] = P.useState(""),
      [l, i] = P.useState(""),
      [o, a] = P.useState(""),
      [u, s] = P.useState(""),
      [c, d] = P.useState(""),
      p = (S) => {
        S.preventDefault(),
          !e || !n || !l || !o || !u
            ? d("All fields are required")
            : l !== o
            ? d("Passwords do not match")
            : /\S+@\S+\.\S+/.test(n)
            ? (d(""),
              console.log("Form submitted:", {
                username: e,
                email: n,
                password: l,
                dob: u,
              }))
            : d("Email is invalid");
      };
    return g.jsx("div", {
      className: "Body",
      children: g.jsx("div", {
        className: "sign-up-form-container",
        children: g.jsxs("form", {
          className: "sign-up-form",
          onSubmit: p,
          children: [
            g.jsx("h2", { children: "Sign Up" }),
            c && g.jsx("p", { className: "error", children: c }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", { htmlFor: "username", children: "Username" }),
                g.jsx("input", {
                  type: "text",
                  id: "username",
                  value: e,
                  onChange: (S) => t(S.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", { htmlFor: "email", children: "Email" }),
                g.jsx("input", {
                  type: "email",
                  id: "email",
                  value: n,
                  onChange: (S) => r(S.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", { htmlFor: "dob", children: "Date of Birth" }),
                g.jsx("input", {
                  type: "date",
                  id: "dob",
                  value: u,
                  onChange: (S) => s(S.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", { htmlFor: "password", children: "Password" }),
                g.jsx("input", {
                  type: "password",
                  id: "password",
                  value: l,
                  onChange: (S) => i(S.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsxs("div", {
              className: "form-group",
              children: [
                g.jsx("label", {
                  htmlFor: "confirm-password",
                  children: "Confirm Password",
                }),
                g.jsx("input", {
                  type: "password",
                  id: "confirm-password",
                  value: o,
                  onChange: (S) => a(S.target.value),
                  required: !0,
                }),
              ],
            }),
            g.jsx("div", {
              className: "Button2",
              children: g.jsx("button", {
                type: "submit",
                children: "Sign Up",
              }),
            }),
          ],
        }),
      }),
    });
  },
  Oy = Jv([
    {
      path: "/",
      element: g.jsx(my, {}),
      children: [
        { path: "/", element: g.jsx(Ty, {}) },
        { path: "/create-post", element: g.jsx(vy, {}) },
        { path: "/aboutUs", element: g.jsx(Dy, {}) },
      ],
    },
    { path: "/login", element: g.jsx(zy, {}) },
    { path: "/SignUp", element: g.jsx(My, {}) },
  ]);
So.createRoot(document.getElementById("root")).render(
  g.jsx(_t.StrictMode, { children: g.jsx(iy, { router: Oy }) })
);
